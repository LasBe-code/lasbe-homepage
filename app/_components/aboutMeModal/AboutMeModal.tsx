import Layout from "./Layout";
import Profile from "./Profile";
import Project from "./Project";
// #ff6f00 #009bef
/**
 * @todo
 * - 모달 헤더 항상 위에 띄워놓기 - 완료
 * - 모달 모바일 뒤로가기 하면 모달 close
 * - Profile 컴포넌트 분리하기
 * - Project 컴포넌트 완성 및 데이터 완성
 */
export default function AboutMeModal() {
  return (
    <div className="flex flex-col gap-12 w-[350px] md:w-[750px] px-4 py-12 bg-neutral-100">
      <Layout title="PROFILE" headerColorClassName="bg-my-orange">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {profileDataList.map((data, idx) => (
            <Profile {...data} idx={idx} key={`profile-${data.label}`} />
          ))}
        </div>
      </Layout>
      <Layout
        title="PROJECT"
        headerColorClassName="bg-my-green"
        isUseBgColor={false}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {projectDataList.map((data, idx) => (
            <Project {...data} idx={idx} key={`project-${data.title}`} />
          ))}
        </div>
      </Layout>
      <Layout title="CAREER" headerColorClassName="bg-my-blue">
        <div>asdasd</div>
      </Layout>
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

const projectDataList = [
  {
    title: "포트폴리오",
    period: "2024.10",
    desc: "포트폴리오 용도로 제작한 웹사이트",
    subDesc: [
      "노트북 웹서버 직접 운영",
      "기존에 개발한 애니메이션 라이브러리 컴포넌트 적극 사용",
    ],
    imageList: [
      "/project_images/portfolio1.jpg",
      "/project_images/portfolio2.jpg",
    ],
    stack: ["TypeScript", "Nextjs", "tailwind", "docker", "githubAction"],
    link: "https://github.com/LasBe-code/lasbe-homepage",
  },
  {
    title: "링모",
    period: "2024.06 - 2024.07",
    desc: "여러 URL 링크를 모아주는 서비스",
    subDesc: ["노트북 웹서버 직접 운영", "컴포넌트 단위의 애니메이션 개발"],
    imageList: ["/project_images/lingmo1.gif", "/project_images/lingmo2.gif"],
    stack: [
      "TypeScript",
      "React",
      "Recoil",
      "styled-components",
      "Firebase",
      "githubAction",
    ],
    link: "https://lasbe.tistory.com/180",
  },
  {
    title: "닥터플렉스",
    period: "2023.08 - 2023.11",
    desc: "React-Native로 개발된 앱의 신규 개발 및 최적화 업무 수행",
    subDesc: [
      "신규 이벤트 배너, Screen 개발",
      "질환별 자문하기 개발",
      "의료 정보 제공 서비스 개발",
      "안드로이드 ScrollView 이미지 최적화 기능 개발",
    ],
    imageList: ["/project_images/doctorflex1.jpg"],
    stack: ["TypeScript", "React-Native"],
    link: "https://doctorflex.co.kr/",
  },
  {
    title: "Going",
    period: "2022.04 - 2022.05",
    desc: "숙박 플랫폼 프로젝트",
    subDesc: [
      "기획, 디자인, F/E, B/E, DB 설계 등 프로젝트에 전반적으로 관여",
      "유저, 사업자, 관리자로 나뉜 플랫폼 형태의 서비스",
    ],
    imageList: [
      "/project_images/going1.jpg",
      "/project_images/going2.jpg",
      "/project_images/going3.jpg",
      "/project_images/going4.jpg",
    ],
    stack: ["Java", "Spring", "MyBatis", "Oracle", "JQuery"],
    link: "https://lasbe.tistory.com/130",
  },
  {
    title: "LasbeTalk",
    period: "2021.08",
    desc: "스마트폰 채팅 어플",
    subDesc: [
      "안드로이드 채팅 어플",
      "Firebase를 이용해 채팅 및 인증 기능 구현",
    ],
    imageList: [
      "/project_images/LasbeTalk1.jpg",
      "/project_images/LasbeTalk2.jpg",
      "/project_images/LasbeTalk3.jpg",
    ],
    stack: ["Kotlien", "Firebase"],
    link: "https://github.com/LasBe-code/LasbeTalk",
  },
  {
    title: "InstaAuto",
    period: "2021.04",
    desc: "인스타그램 팔로워 수집을 위한 자동화 프로그램",
    subDesc: [
      "파이썬과 셀레니움을 이용한 웹 데이터 크롤링",
      "PyQT를 이용해 GUI 개발",
    ],
    imageList: [
      "/project_images/InstaAuto1.jpg",
      "/project_images/InstaAuto2.jpg",
      "/project_images/InstaAuto3.jpg",
    ],
    stack: ["Python", "PyQT"],
    link: "https://github.com/LasBe-code/InstaAuto",
  },
];
