import { date } from "@/utils/date";
import { db } from "@/utils/firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  increment,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { useCallback } from "react";

const collectionName = "view";
const docRef = doc(db, collectionName, date.todayDate);

class ViewService {
  static async addDoc() {
    try {
      await setDoc(docRef, { count: 0 });
    } catch (error) {
      console.log(error);
    }
  }
  static async updateViewCount() {
    try {
      await updateDoc(docRef, {
        count: increment(1),
      });
    } catch (error) {
      console.log(error);
    }
  }
  static async getTodayViewCount() {
    try {
      const response = await getDoc(docRef);
      return response.data() as { count: number } | undefined;
    } catch (error) {
      console.log(error);
    }
  }
  static async getAllViewCount() {
    try {
      const dataList: { date: string; count: number }[] = [];
      const response = await getDocs(collection(db, collectionName));
      response.forEach((doc) =>
        dataList.push({ date: doc.id, ...(doc.data() as { count: number }) })
      );
      return dataList;
    } catch (error) {
      console.log(error);
    }
  }
}

const countHistory = {
  get: () => localStorage.getItem("viewCount"),
  set: () => localStorage.setItem("viewCount", date.todayDate),
};

export const useViewCount = () => {
  const increaseViewCount = useCallback(async () => {
    const viewData = await ViewService.getTodayViewCount();
    if (!viewData) await ViewService.addDoc();
    await ViewService.updateViewCount();
  }, []);

  // 마지막 방문 시간에서 정각을 넘어가지 않으면 집계하지 않음
  const increaseViewCountOneTime = useCallback(async () => {
    const history = countHistory.get();
    if (history) {
      const diff = date.calcBetweenDate(history, date.todayDate);
      if (!diff) return;
    }
    await increaseViewCount();
    countHistory.set();
  }, [increaseViewCount]);

  const getTodayViewCount = useCallback(async () => {
    const response = await ViewService.getTodayViewCount();
    return response?.count;
  }, []);

  const getAllViewCount = useCallback(async () => {
    const response = await ViewService.getAllViewCount();
    if (!response || !response.length) return;
    const total = response.reduce((acc, curr) => acc + curr.count, 0);
    return total;
  }, []);

  return {
    increaseViewCount,
    increaseViewCountOneTime,
    getTodayViewCount,
    getAllViewCount,
  };
};
