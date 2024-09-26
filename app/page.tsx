import Icon from "@/components/Icon";
import { CardAnimation } from "@lasbe/react-card-animation";
import { ScrollAnimation } from "@lasbe/react-scroll-animation";

export default function Home() {
  return (
    <main className="flex justify-center min-w-full min-h-dvh bg-[url(/background.jpg)] bg-cover tracking-tight">
      <div className="max-w-screen-lg flex">
        <div className="w-full min-h-dvh flex flex-col justify-center items-center">
          <CardAnimation angle={20}>
            <div className="backdrop-blur-sm bg-white/30 px-4 py-2 rounded-xl shadow-lg leading-4">
              {/* <Image
                className="overflow-hidden rounded-xl"
                src={"/profile_low.jpg"}
                alt="profile image"
                width={150}
                height={150}
              /> */}
              <ScrollAnimation amount="sm">
                <h1
                  className={`lg:text-4xl text-xl text-wrap whitespace-pre-wrap leading-normal`}
                >
                  안녕하세요. {"\n"}프론트엔드 개발자 <strong>장성우</strong>
                  입니다.
                </h1>
              </ScrollAnimation>
            </div>
          </CardAnimation>
          <div className="flex gap-4">
            <ScrollAnimation amount="sm" delay={0.2}>
              <div>
                <Icon
                  src="/github_logo.svg"
                  label="github"
                  alt="github logo"
                  backgroundColor="bg-white"
                  href="https://github.com/LasBe-code"
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation amount="sm" delay={0.4}>
              <div>
                <Icon
                  src="/npm_logo.svg"
                  label="NPM"
                  alt="npm logo"
                  href="https://github.com/LasBe-code"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </main>
  );
}
