import { ScrollAnimation } from "@lasbe/react-scroll-animation";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Stack from "../Stack";

type ProjectType = {
  title: string;
  period: string;
  desc: string;
  subDesc: string[];
  imageList: string[];
  stack: string[];
  link: string;
  idx: number;
};

export default function Project(props: ProjectType) {
  return (
    <ScrollAnimation amount="sm" delay={(props.idx + 1) * 0.1}>
      <div className="w-full px-6 py-8 bg-white shadow-md rounded-lg break-keep">
        <h3 className="text-xl font-bold text-center">{props.title}</h3>
        <p className="text-sm text-neutral-500 text-center">{props.period}</p>
        <Swiper
          className="h-[220px] my-2"
          navigation={true}
          pagination={true}
          modules={[Navigation, Pagination]}
        >
          {props.imageList.map((data) => (
            <SwiperSlide key={`project-images-${data}`}>
              <Image
                className="object-contain py-4"
                src={data}
                fill
                sizes="300px"
                unoptimized={data.includes("webp")}
                alt="project image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <hr className="my-4" />
        <div className="flex flex-col gap-2">
          <p className="text-md font-bold">{props.desc}</p>
          <ul className="pl-4">
            {props.subDesc.map((data) => (
              <li key={`project-subdesc-${data}`} className="list-disc text-sm">
                {data}
              </li>
            ))}
          </ul>
          <hr className="my-4" />

          <div className="flex flex-wrap gap-0.5">
            {props.stack.map((data) => (
              <Stack key={`project-stack-${props.title}-${data}`} name={data} />
            ))}
          </div>
        </div>
        <Link
          className="button-hover absolute bottom-[-12px] right-5 flex gap-1 w-fit px-2 py-1 rounded-full shadow-md bg-white border"
          href={props.link}
          target="_blank"
        >
          <Image
            src={"/link.svg"}
            width={12}
            height={12}
            style={{ width: 12, height: 12 }}
            alt="website"
          />
          <span className="text-xs font-bold text-neutral-500">URL</span>
        </Link>
      </div>
    </ScrollAnimation>
  );
}
