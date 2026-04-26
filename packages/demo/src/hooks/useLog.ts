import { useRecoilState, useRecoilValue } from 'recoil';
import {
  FlowLogState,
  FlowLogFilterState,
  VisibleLogsSelector,
  FlowLog,
  LogCategory,
  LogActionType,
  LogSourceType,
} from '../store/log/flowLogState';

const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;
const MAX_LOG_COUNT = 1000; // 최대 저장할 로그 개수 (용량 및 성능 최적화)

const useLog = () => {
  const [logs, setLogs] = useRecoilState(FlowLogState);
  const [filter, setFilter] = useRecoilState(FlowLogFilterState);
  const visibleLogs = useRecoilValue(VisibleLogsSelector);

  /**
   * 새로운 로그를 추가합니다.
   * 추가 시 메모리 관리를 위해 7일이 경과한 데이터는 자동으로 제거합니다.
   */
  const addLog = (params: {
    category: LogCategory;
    content: string;
    actionType?: LogActionType;
    sourceType?: LogSourceType;
    color?: 'm' | 'o' | 'm2' | 'e';
  }) => {
    const now = Date.now();
    const newLog: FlowLog = {
      id: crypto.randomUUID(),
      timestamp: now,
      ...params,
    };

    setLogs((prev) => {
      // 7일 경과 데이터 정화 (Cleanup)
      const filteredPrev = prev.filter((log) => log.category === 'status' || now - log.timestamp < SEVEN_DAYS_MS);
      
      // 새로운 로그를 포함하여 최대 개수 제한 적용 (최신순 유지)
      return [newLog, ...filteredPrev].slice(0, MAX_LOG_COUNT);
    });
  };

  /**
   * 사용자가 직접 입력하는 상태 로그(Status) 추가 유틸리티
   */
  const addStatusLog = (content: string) => {
    addLog({
      category: 'status',
      content,
      sourceType: 'system',
    });
  };

  /**
   * 시스템 액티비티(Activity) 로그 자동 추가 유틸리티
   */
  const addActivityLog = (
    content: string,
    actionType: LogActionType,
    sourceType: LogSourceType,
    color?: 'm' | 'o' | 'm2' | 'e'
  ) => {
    addLog({
      category: 'activity',
      content,
      actionType,
      sourceType,
      color,
    });
  };

  return {
    logs: visibleLogs, // 필터 및 정렬이 적용된 로그 리스트
    filter,           // 현재 적용된 필터 상태 ('all' | 'activity' | 'status')
    setFilter,        // 필터 변경 함수
    addStatusLog,
    addActivityLog,
  };
};

export default useLog;