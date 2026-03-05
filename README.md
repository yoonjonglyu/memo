# 📝 MemoFlow: Simple Memo & Volatile Planner

<p align="center">
  <a href="https://github.com/yoonjonglyu/memo/blob/main/README.md"><strong>English</strong></a> | 
  <a href="https://github.com/yoonjonglyu/memo/blob/main/packages/demo/README.md">한국어</a>
</p>

> **"Fast to Record, Light to Manage"**
> A **volatile planner** designed for instant memos and short-term scheduling without complex features.  
> Experience seamless continuity across Android, Windows, and Web using Google Drive synchronization.

---

## 🔹 Service Concept

MemoFlow aims for 'lightness,' distinguishing itself from heavy calendars or bloated note-taking apps.

- **Short-term Focus**: Perfect for managing volatile schedules that you record and delete quickly.
- **Tetris Design**: A minimalist UI concept that reduces visual fatigue with a clean, block-style interface.
- **Offline First**: Record instantly without a network connection using `@capacitor/filesystem` and `localStorage`, and sync when online.

---

## 🚀 Key Features

### 1. Multi-Platform Support

- **Mobile**: Native experience on Android (powered by Capacitor 8).
- **Desktop**: Standalone software for Windows (powered by Electron 23) and PWA support.
- **Web**: Immediate access and usage through any modern web browser.

### 2. Smart Sync & Backup

- **Google Drive Sync**: Secure data synchronization and continuity using your personal Google Drive—no separate server required.
- **Flexible Export/Import**: Export data in JSON, Markdown, or HTML formats, and restore via JSON import.

### 3. Modern UI/UX & Quality

- **Tailwind CSS 4.0**: High-performance styling with the latest engine and a minimalist "Tetris-inspired" design.
- **Storybook 8**: UI reliability ensured through component documentation and Interaction Testing (Play functions).
- **MSW**: Robust verification of network scenarios using Mock Service Worker for API mocking.

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

## 📈 Version Log (via Storybook)

Explore the evolution of our components through the following Chromatic links:

- [**Initial Version**](https://64105a493828b256671845d2-ijtzcntnsm.chromatic.com/?path=/story/%EB%A9%94%EB%AA%A8-ui-atoms-floatbtn--basic) : UI Atom-level design.
- [**v1.0.1**](https://64105a493828b256671845d2-pphrrzkvqx.chromatic.com/?path=/docs/%EB%A9%94%EB%AA%A8-page-index--docs) : Implementation of page-level documentation.
- [**v2.0.0**](https://64105a493828b256671845d2-kcsdeyunzi.chromatic.com/?path=/story/%EB%A9%94%EB%AA%A8-page-index--basic) : Full interaction testing applied.
- [**v2.0.2**](https://64105a493828b256671845d2-wlfyjvsxmm.chromatic.com/?path=/story/%EB%A9%94%EB%AA%A8-page-index--basic) : Onboard Tutorial + App edge + App Back Exit UX
- [**v2.0.6**](https://64105a493828b256671845d2-upakptadnq.chromatic.com/?path=/story/%EB%A9%94%EB%AA%A8-page-index--basic) : Sort Memo + Google Drive Sync

---

## 📦 Installation & Setup

```bash
# 1. Clone the repository
git clone [https://github.com/yoonjonglyu/memo.git](https://github.com/yoonjonglyu/memo.git)

# 2. Install dependencies
yarn install

# 3. Configure environment variables (Create .env file)
# GOOGLE_CID=your_google_client_id
# GOOGLE_DEV_KEY=your_google_developer_key

# 4. Run scripts
yarn dev      # Launch Web development server
yarn dev:pc   # Launch Electron desktop app
yarn storybook # Launch UI component test environment
yarn build    # Production build (outputs to dist folder)
```

---

## 📁 Project Structure

```txt
src/
├── components/     # Common UI & Atom components
├── features/       # Main domain components (Memo, Setting)
├── hooks/          # Core domain logic & custom hooks
├── mocks/          # MSW handlers & mock data
├── providers/      # Modal & Context configurations
├── store/          # Recoil-based state models
├── services/       # heavy domain logic Services
├── index.css       # Tailwind 4 global styles
electron/           # Electron main/preload process settings
android/            # Capacitor-based Android native project
```

---

## 🚀 Recommended For...

✔ Users who prefer writing quick notes and deleting them immediately.
✔ Managing short-term schedules and goals.
✔ Those looking for a lightweight memo tool instead of a complex calendar app.

📌 **Go to MemoFlow(Web) → [🔗Project Link](https://yoonjonglyu.github.io/memo/)**
📌 **Go to MemoFlow(Android) → [🔗AppStore Link](https://play.google.com/store/apps/details?id=com.yoonjongryu.memo)**

---

## 🤝 Contributing

This project was developed for a personal portfolio and as a productivity tool. We welcome code reviews, feature suggestions, and bug reports through Issues!

Author: ISA ([@yoonjonglyu](https://github.com/yoonjonglyu))

License: MIT Licensed. Copyright © 2026 ISA.
