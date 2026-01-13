import React, { useState, useEffect } from 'react';

import MemoHeader from '../features/memo/MemoHeader';
import MemoFeature from '../features/memo';
import SettingFeature from '../features/setting';
import ExitModal from '../components/organisms/ExitModal';
import SortSwitch from '../components/molecules/SortSwitch';

import useBackButton from '../hooks/useBackButton';
import useConfig from '../hooks/useConfig';

export interface IndexPageProps {}

const IndexPage: React.FC<IndexPageProps> = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [isSetting, setIsSetting] = useState(false);
  const [isExitModal, setIsExitModal] = useState(false);
  const { memoConfig, handleSort, initMemoConfig } = useConfig();

  const closeSettingModal = () => setIsSetting(false);
  const closeExitModal = () => setIsExitModal(false);

  useBackButton(() => {
    if (isSetting) {
      // 1순위: 설정 모달이 열려있다면 설정창부터 닫기
      setIsSetting(false);
    } else if (isEdit) {
      // 2순위: 편집 모드라면 편집 모드 종료
      setIsEdit(false);
    } else {
      // 3순위: 아무것도 열려있지 않은 메인 화면일 때만 종료 모달 표시
      setIsExitModal(true);
    }
  });
  useEffect(() => {
    initMemoConfig();
  }, []);

  return (
    // 1. 전체 배경: 테트리스 그리드 느낌의 아주 연한 회색 배경
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* 2. 헤더 영역: 로고 컬러 라인이 들어간 상단 바 */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b-4 border-memo-o shadow-sm">
        <div className="max-w-5xl mx-auto">
          <MemoHeader
            handleEdit={() => setIsEdit(prev => !prev)}
            handleSetting={() => setIsSetting(prev => !prev)}
          />
        </div>
      </header>

      {/* 3. 메인 컨텐츠: 테트리스 블록들이 쌓이는 스테이지(Well) */}
      <main className="flex-1 w-full max-w-5xl mx-auto p-4 md:p-6">
        {/* 디자인 포인트 & 정렬 스위치 영역 */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-1">
            <div className="w-8 h-2 bg-memo-m" />
            <div className="w-8 h-2 bg-memo-o" />
            <div className="w-8 h-2 bg-memo-m2" />
            <div className="w-8 h-2 bg-memo-e" />
          </div>

          {/* 정렬 스위치 배치 */}
          <SortSwitch
            sortType={memoConfig.sort}
            onToggle={() => handleSort()}
          />
        </div>
        <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <MemoFeature isEdit={isEdit} />
        </section>
      </main>

      {/* 4. 설정 모달: 테트리스 블록이 겹쳐진 듯한 레이어링 처리 */}
      {isSetting && (
        <SettingFeature isModal={isSetting} closeModal={closeSettingModal} />
      )}
      {isExitModal && <ExitModal onClose={closeExitModal} />}
    </div>
  );
};

export default IndexPage;
