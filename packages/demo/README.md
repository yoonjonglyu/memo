# 📝 MemoFlow : 간편한 메모와 휘발성 플래너

<p align="center">
  <a href="https://github.com/yoonjonglyu/memo/blob/main/README.md"><strong>English</strong></a> | 
  <a href="https://github.com/yoonjonglyu/memo/blob/main/packages/demo/README.md">한국어</a>
</p>

> **"기록은 빠르게, 관리는 가볍게"**
> 복잡한 기능 없이 즉각적인 메모와 일정을 관리하는 **휘발성 플래너**입니다.  
> 사용자의 구글 드라이브를 활용한 동기화로 안드로이드, 윈도우, 웹 어디서든 동일한 경험을 제공합니다.

---

## 🔹 Service Concept

기존의 무거운 캘린더나 복잡한 노트 앱과 차별화된 **가벼움**을 지향합니다.

- **단기 집중**: 기록하고 금방 지워도 좋은 휘발성 일정을 관리합니다.
- **테트리스 디자인**: 심플하면서도 깔끔한 UI 컨셉으로 시각적 피로도를 줄였습니다.
- **오프라인 퍼스트**: `@capacitor/filesystem` 및 `localStorage`를 활용하여 네트워크 연결 없이도 즉시 기록하고 온라인 시 동기화합니다.

---

## 🚀 Key Features

### 1. Multi-Platform Support

- **Mobile**: Android (Capacitor 8) 기반 네이티브 경험 지원.
- **Desktop**: Windows (Electron 23) 및 PWA 기반 독립형 소프트웨어 제공.
- **Web**: 웹 브라우저를 통한 즉각적인 접근 및 사용 가능.

### 2. Smart Sync & Backup

- **Google Drive Sync**: 별도 서버 없이 개인 구글 드라이브를 활용한 안전한 데이터 동기화 및 연속성 확보.
- **Flexible Export/Import**: JSON, Markdown, HTML 형식의 데이터 내보내기 및 JSON 데이터 가져오기 지원.

### 3. Modern UI/UX & Quality

- **Tailwind CSS 4.0**: 최신 스타일링 엔진을 활용한 고성능 UI 및 테트리스 컨셉의 미니멀 디자인.
- **Storybook 8**: 컴포넌트 단위 문서화 및 Interaction Test(Play function)를 통한 UI 신뢰성 확보.
- **MSW**: Mock Service Worker를 활용한 API 모킹으로 다양한 네트워크 시나리오 검증.

---

## 🛠 Tech Stack

| Category         | Tech Stack                                             |
| :--------------- | :----------------------------------------------------- |
| **Core**         | `React 18`, `Recoil` (State Management), `Babel`       |
| **Styling**      | `Tailwind CSS 4`, `Styled-components`, `FontAwesome 6` |
| **Build & Tool** | `Webpack 5`                                            |
| **Platform**     | `Capacitor 8` (Android), `Electron 23` (Desktop)       |
| **Testing**      | `Storybook 8`, `MSW`, `React Testing Library`          |

---

## 📈 Version Log (with Storybook)

컴포넌트의 발전 과정을 크로매틱(Chromatic) 링크를 통해 확인하실 수 있습니다.

- [**초기 버전**](https://64105a493828b256671845d2-ijtzcntnsm.chromatic.com/?path=/story/%EB%A9%94%EB%AA%A8-ui-atoms-floatbtn--basic) : UI 원자(Atoms) 단위 설계
- [**v1.0.1**](https://64105a493828b256671845d2-pphrrzkvqx.chromatic.com/?path=/docs/%EB%A9%94%EB%AA%A8-page-index--docs) : 페이지 단위 문서화 적용
- [**v2.0.0**](https://64105a493828b256671845d2-kcsdeyunzi.chromatic.com/?path=/story/%EB%A9%94%EB%AA%A8-page-index--basic) : 최신 인터랙션 테스트 적용 완료
- [**v2.0.2**](https://64105a493828b256671845d2-wlfyjvsxmm.chromatic.com/?path=/story/%EB%A9%94%EB%AA%A8-page-index--basic) : 온보딩 튜토리얼 + App BACK EXIT 모달

---

## 📦 Installation & Setup

```bash
# 1. 레포지토리 클론
git clone [https://github.com/yoonjonglyu/memo.git](https://github.com/yoonjonglyu/memo.git)

# 2. 의존성 설치
yarn install

# 3. 환경 변수 설정 (.env 파일 생성)
# GOOGLE_CID=your_google_client_id
# GOOGLE_DEV_KEY=your_google_developer_key

# 4. 실행 스크립트
yarn dev      # Web 환경 개발 서버 실행
yarn dev:pc   # Electron 데스크탑 앱 실행
yarn storybook # UI 컴포넌트 테스트 환경 실행
yarn build    # 프로덕션 빌드 (dist 폴더 생성)
```

---

## 📁 Project Structure

```txt
src/
├── components/     # UI 공통 및 원자 컴포넌트
├── features/       # 주요 도메인 컴포넌트 (Memo, Setting)
├── hooks/          # 주요 도메인 로직 및 커스텀 훅
├── mocks/          # MSW 핸들러 및 모의 데이터
├── providers/      # Modal 및 Context 설정
├── store/          # Recoil 기반 상태 모델 (State model)
├── index.css       # Tailwind 4 메인 스타일 설정
electron/           # Electron 메인/프리로드 프로세스 설정
android/            # Capacitor 기반 안드로이드 네이티브 프로젝트
```

---

## 🚀 이런 분들에게 추천!

✔ 빠르게 기록하고 금방 지우는 스타일  
✔ 단기 일정과 목표 관리가 필요한 경우  
✔ 복잡한 캘린더 앱보다 가벼운 메모 도구를 원하는 경우

📌 **MemoFlow 바로가기 → [🔗프로젝트 링크](https://yoonjonglyu.github.io/memo/)**

---

## 🤝 Contributing

이 프로젝트는 개인 포트폴리오 및 개인 생산성 도구 목적으로 제작되었습니다. 코드 리뷰나 개선 제안은 이슈(Issue)를 통해 언제나 환영합니다!

Author: ISA ([@yoonjonglyu](https://github.com/yoonjonglyu))

License: MIT Licensed. Copyright © 2026 ISA.
