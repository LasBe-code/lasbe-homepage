import Image from "next/image";
import Link from "next/link";

type IconType = {
  src: string;
  label: string;
  backgroundColor?: string;
  alt: string;
  href: string;
};

export default function Icon({
  src,
  label,
  backgroundColor,
  alt,
  href,
}: IconType) {
  return (
    <Link
      href={href}
      className="icon relative flex flex-col items-center gap-1 text-gray-800"
      target="_blank"
    >
      <div
        className={`${backgroundColor} absolute z-0 w-[75px] h-[75px] rounded-lg overflow-hidden shadow-lg`}
      ></div>
      <Image
        className="z-10 rounded-lg overflow-hidden"
        src={src}
        alt={alt}
        width={75}
        height={75}
      />
      <span>{label}</span>
    </Link>
  );
}
