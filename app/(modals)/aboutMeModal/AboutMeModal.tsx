import { ScrollAnimation } from "@lasbe/react-scroll-animation";
import Image from "next/image";
// #ff6f00
export default function AboutMeModal() {
  return (
    <div className="w-[350px] md:w-[750px] px-4 py-12 bg-neutral-100">
      <div className="relative flex flex-col gap-8 items-center py-12 bg-white rounded-lg shadow-lg">
        <h1 className="absolute top-[-20px] px-4 py-1 rounded-full shadow-[0_2px_4px_0px_rgba(0,0,0,0.4)] bg-[#ff6f00] text-white font-extrabold text-2xl">
          PROFILE
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {profileDataList.map((data, idx) => (
            <Profile
              key={data.label}
              src={data.src}
              alt={data.alt}
              label={data.label}
              value={data.value}
              idx={idx}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const profileDataList = [
  { src: "/profile.svg", alt: "profile icon", label: "이름", value: "장성우" },
  {
    src: "/calendar.svg",
    alt: "calendar icon",
    label: "생년월일",
    value: "97.03.05",
  },
  { src: "/gps.svg", alt: "gps icon", label: "위치", value: "서울 동작구" },
  {
    src: "/mail.svg",
    alt: "mail icon",
    label: "메일",
    value: "devlasbe@gmail.com",
  },
];

type ProfileType = {
  src: string;
  alt: string;
  label: string;
  value: string;
  idx: number;
};

const Profile = (props: ProfileType) => {
  return (
    <ScrollAnimation delay={(props.idx + 1) * 0.1} amount="sm">
      <div className="flex items-center gap-4">
        <Image
          className="stroke-red-900"
          src={props.src}
          alt={props.alt}
          width={20}
          height={20}
        />
        <div className="flex flex-col">
          <h2 className="text-xs font-bold">{props.label}</h2>
          <p className="text-sm">{props.value}</p>
        </div>
      </div>
    </ScrollAnimation>
  );
};
