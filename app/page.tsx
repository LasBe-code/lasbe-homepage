"use client";

import IconList from "@/app/_components/main/icon/IconList";
import { CardAnimation } from "@lasbe/react-card-animation";
import { useEffect, useRef, useState } from "react";

const typingText = "FRONTEND DEVELOPER";

export default function Home() {
  const [text, setText] = useState(typingText.charAt(0));
  const [index, setIndex] = useState(1);
  const timerRef = useRef(false);
  useEffect(() => {
    const interval = setInterval(async () => {
      if (index === typingText.length && !timerRef.current) {
        setTimeout(() => {
          setText(typingText.charAt(0));
          setIndex(1);
          timerRef.current = false;
        }, 1000);
        timerRef.current = true;
      }
      if (index < typingText.length) {
        setText(text + typingText.charAt(index));
        setIndex(index + 1);
      }
    }, 150);
    return () => clearInterval(interval);
  }, [text, index]);
  return (
    <main className="flex justify-center min-w-full min-h-dvh bg-[url(/background.jpg)] bg-cover tracking-tight">
      <div className="max-w-screen-lg flex">
        <div className="w-full min-h-dvh flex flex-col">
          <div className="flex flex-1 justify-center items-center gap-2">
            <CardAnimation angle={20}>
              <div className="flex flex-col items-center gap-4 md:gap-6 w-full px-4 py-6 backdrop-blur-sm bg-white/20 rounded-xl shadow-lg leading-4">
                <div>
                  <h1
                    className={`font-archivo text-md md:text-2xl font-extrabold text-wrap whitespace-pre-wrap text-center leading-normal`}
                  >
                    <span>{text}</span>
                    <span className="cursor-animation border-r-2 px-0.5 border-neutral-900" />
                  </h1>
                  <h1
                    className={`font-archivo text-3xl md:text-5xl font-extrabold text-wrap whitespace-pre-wrap text-center leading-normal`}
                  >
                    JANG SUNG WOO
                  </h1>
                </div>
                <div className="border-b border-[rgba(0,0,0,0.2)] w-1/4" />
                <p
                  className={`text-sm md:text-lg text-wrap whitespace-pre-wrap text-center leading-normal`}
                >
                  안녕하세요.{"\n"}본질을 탐구하고, 도전을 즐기는 {"\n"} 2년차
                  개발자 장성우입니다.
                </p>
              </div>
            </CardAnimation>
          </div>
          <div className="flex justify-center items-center py-4">
            <IconList />
          </div>
        </div>
      </div>
    </main>
  );
}
