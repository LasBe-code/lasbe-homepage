import Icons from "@/components/icon/Icons";
import { CardAnimation } from "@lasbe/react-card-animation";

export default function Home() {
  return (
    <main className="flex justify-center min-w-full min-h-dvh bg-[url(/background.jpg)] bg-cover tracking-tight">
      <div className="max-w-screen-lg flex">
        <div className="w-full min-h-dvh flex flex-col">
          <div className="flex flex-1 justify-center items-center gap-2">
            <CardAnimation angle={20}>
              <div className="flex flex-col gap-4 md:gap-6 w-full px-4 py-6 backdrop-blur-sm bg-white/20 rounded-xl shadow-lg leading-4">
                <h1
                  className={`text-4xl md:text-6xl font-extrabold text-wrap whitespace-pre-wrap text-center leading-normal`}
                >
                  F/E 개발자 장성우
                </h1>
                <h1
                  className={`text-xl md:text-2xl text-wrap whitespace-pre-wrap text-center leading-normal`}
                >
                  안녕하세요.{"\n"}본질을 탐구하고, 도전을 즐기는{"\n"}2년차
                  개발자 장성우입니다.
                </h1>
              </div>
            </CardAnimation>
          </div>
          <div className="flex justify-center items-center py-4">
            <Icons />
          </div>
        </div>
      </div>
    </main>
  );
}
