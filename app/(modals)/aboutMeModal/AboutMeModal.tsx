import { ScrollAnimation } from "@lasbe/react-scroll-animation";
import Image from "next/image";

export default function AboutMeModal() {
  return (
    <div className="flex flex-col gap-8 items-center">
      <h1 className="pb-1 font-extrabold text-4xl border-b-2 border-[#ff6f00]">
        Profile
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
    src: "/phone.svg",
    alt: "phone icon",
    label: "전화번호",
    value: "010-3776-4339",
  },
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
        <Image src={props.src} alt={props.alt} width={30} height={30} />
        <div className="flex flex-col">
          <h2 className="text-xs font-bold">{props.label}</h2>
          <p className="text-md">{props.value}</p>
        </div>
      </div>
    </ScrollAnimation>
  );
};
