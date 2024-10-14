"use client";

import AboutMeModal from "@/components/aboutMeModal/AboutMeModal";
import { useModal } from "@/components/modal";
import { ScrollAnimation } from "@lasbe/react-scroll-animation";
import { useMemo } from "react";
import Icon, { IconType } from "./Icon";

export default function IconList() {
  const { openModal } = useModal();
  const iconDataList: IconType[] = useMemo(
    () => [
      {
        type: "button",
        src: "/profile_low.jpg",
        label: "About Me",
        alt: "profile logo",
        onClick: () =>
          openModal({
            title: "About Me",
            content: <AboutMeModal />,
          }),
      },
      {
        type: "link",
        src: "/github_logo.svg",
        label: "github",
        alt: "github logo",
        backgroundColor: "bg-white",
        href: "https://github.com/LasBe-code",
      },
      {
        type: "link",
        src: "/npm_logo.svg",
        label: "NPM",
        alt: "npm logo",
        href: "https://www.npmjs.com/~lasbe",
      },
      {
        type: "link",
        src: "/lasbe_logo.jpeg",
        label: "Blog",
        alt: "blog logo",
        href: "https://lasbe.tistory.com/",
      },
    ],
    [openModal]
  );

  return (
    <div className="grid grid-cols-4 gap-4 p-4 backdrop-blur-sm bg-white/20 rounded-xl">
      {iconDataList.map((data, idx) => (
        <ScrollAnimation key={data.alt} amount="sm" delay={(idx + 1) * 0.2}>
          <div>
            <Icon
              key={data.label}
              type={data.type}
              src={data.src}
              label={data.label}
              alt={data.alt}
              backgroundColor={data.backgroundColor}
              href={data.href}
              onClick={data.onClick}
            />
          </div>
        </ScrollAnimation>
      ))}
    </div>
  );
}
