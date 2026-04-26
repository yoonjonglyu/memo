import { atom, selector, AtomEffect } from 'recoil';

/**
 * 로컬 스토리지 저장을 위한 Effect
 */
const localStorageEffect: <T>(key: string) => AtomEffect<T> =
  (key: string) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue, _, isReset) => {
      if (isReset) localStorage.removeItem(key);
      else localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export type LogCategory = 'activity' | 'status';
export type LogActionType = 'add' | 'delete' | 'check' | 'sync' | 'update';
export type LogSourceType = 'memo' | 'todo' | 'note' | 'draft' | 'system';

export interface FlowLog {
  id: string;
  timestamp: number;
  category: LogCategory;
  actionType?: LogActionType;
  sourceType?: LogSourceType;
  content: string;
  color?: 'm' | 'o' | 'm2' | 'e';
}

/**
 * 로그 필터 타입
 */
export type LogFilterType = 'all' | LogCategory;

/**
 * 전체 로그 리스트 원본 상태
 */
export const FlowLogState = atom<FlowLog[]>({
  key: 'flowLogState',
  default: [],
  effects: [localStorageEffect('FLOW_LOGS')],
});

/**
 * 현재 선택된 로그 필터 상태
 */
export const FlowLogFilterState = atom<LogFilterType>({
  key: 'flowLogFilterState',
  default: 'all',
});

/**
 * 필터링 및 유효 기간이 적용된 로그 리스트
 */
export const VisibleLogsSelector = selector<FlowLog[]>({
  key: 'visibleLogsSelector',
  get: ({ get }) => {
    const logs = get(FlowLogState);
    const filter = get(FlowLogFilterState);
    
    // 1. 유효 기간 필터링 (최근 7일)
    const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;
    const now = Date.now();
    const validLogs = logs.filter(
      (log) => log.category === 'status' || now - log.timestamp < SEVEN_DAYS_MS
    );
    
    // 안드로이드 저사양 기기 대응: 렌더링 시마다 sort를 수행하므로 logs의 길이가 크면 성능 저하 가능
    // 이미 추가할 때(useLog.ts) 최신순으로 unshift 하도록 설계했으므로 추가 sort를 방어적으로 처리
    const sortedLogs = [...validLogs].sort((a, b) => b.timestamp - a.timestamp);

    // 2. 카테고리 필터링
    if (filter === 'all') {
      return sortedLogs;
    }
    return sortedLogs.filter(log => log.category === filter);
  },
});