# 프론트엔드 개발자 장성우 포트폴리오

<img width="1000" alt="image" src="https://github.com/user-attachments/assets/57307af2-cce9-4d7c-965b-ac4e4aed9517">

포트폴리오 용도로 개발한 웹사이트입니다.  
[링크](https://lasbe.kr)

## 기술 스택

`Nextjs` `firebase` `docker` `github-action`

- 최대한 가볍게 만드려고 최소한의 의존성으로 개발
- 애니메이션은 기존에 제가 만들었던 라이브러리로 구현
- firebase는 우선 조회수 집계용으로만 사용

## 배포

![image](https://github.com/user-attachments/assets/255337da-f508-4197-ab43-9aaf4da5c565)

1. github hosted runner에서 앱 및 docker 빌드 후 push
2. ssh로 자취방 노트북에 이미지 받아오고 컨테이너 올리는 명령어 전송
3. 배포

## 소소한 기능

1. 방문자 중복 집계 방지
2. 모달창 뒤로가기로 창 닫기
3. 반응형
4. nginx proxy 서버에 ssl 인증서 적용
