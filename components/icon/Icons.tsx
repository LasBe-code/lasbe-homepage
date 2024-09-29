"use client";

import { ScrollAnimation } from "@lasbe/react-scroll-animation";
import Icon, { IconType } from "./Icon";
import { useMemo } from "react";
import { useModal } from "../modal";
import AboutMeModal from "../../app/(modals)/aboutMeModal/AboutMeModal";

export default function Icons() {
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
        type: "button",
        src: "/note_logo.jpg",
        label: "방명록",
        alt: "guestbook logo",
        backgroundColor: "bg-white",
        onClick: () => openModal({ title: "abcd", content: "sdaf" }),
      },
      {
        type: "button",
        src: "/note_logo.jpg",
        label: "경력기술서",
        alt: "guestbook logo",
        backgroundColor: "bg-white",
        onClick: () => openModal({ title: "abcd", content: "sdaf" }),
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
    <div className="grid md:grid-cols-6 grid-cols-3 gap-4 w-full p-4 backdrop-blur-sm bg-white/20 rounded-xl">
      {iconDataList.map((data, idx) => (
        <ScrollAnimation key={data.alt} amount="sm" delay={(idx + 1) * 0.2}>
          <div>
            <Icon
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
