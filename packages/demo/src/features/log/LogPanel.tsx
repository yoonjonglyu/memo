import React, { useMemo } from 'react';
import { type FlowLog } from '../../store/log/flowLogState';

import LogItem from '../../components/organisms/LogItem';

import useLog from '../../hooks/useLog';

const LogPanel: React.FC = () => {
  const { logs, filter, setFilter, addStatusLog } = useLog();

  // 날짜별 그룹화 로직
  const groupedLogs = useMemo(() => {
    const groups: { [key: string]: FlowLog[] } = {
      Today: [],
      Yesterday: [],
      'This Week': [],
      Older: [],
    };

    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    const yesterday = today - 24 * 60 * 60 * 1000;
    const sevenDaysAgo = today - 7 * 24 * 60 * 60 * 1000;

    logs.forEach((log) => {
      if (log.timestamp >= today) {
        groups['Today'].push(log);
      } else if (log.timestamp >= yesterday) {
        groups['Yesterday'].push(log);
      } else if (log.timestamp >= sevenDaysAgo) {
        groups['This Week'].push(log);
      } else {
        groups['Older'].push(log);
      }
    });

    return groups;
  }, [logs]);

  const handleStatusSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && e.currentTarget.value.trim()) {
      addStatusLog(e.currentTarget.value);
      e.currentTarget.value = '';
    }
  };

  return (
    <div className="flex flex-col h-full bg-white border-l border-gray-200 w-80 shadow-xl">
      {/* 헤더 및 필터 */}
      <div className="p-4 border-b border-gray-100">
        <h2 className="text-lg font-black text-gray-800 mb-4 tracking-tight">FLOW LOG</h2>
        <div className="flex gap-1 bg-gray-100 p-1 rounded-lg">
          {(['all', 'activity', 'status'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`flex-1 py-1.5 text-xs font-bold rounded-md transition-all ${
                filter === t ? 'bg-white shadow-sm text-memo-m' : 'text-gray-400'
              }`}
            >
              {t.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* 로그 리스트 영역 */}
      <div className="flex-1 overflow-y-auto p-4 space-y-8 scrollbar-hide">
        {(Object.keys(groupedLogs) as Array<keyof typeof groupedLogs>).map((title) => { const items = groupedLogs[title]; return (
          items.length > 0 && (
            <section key={title}>
              <h3 className="text-[10px] font-black text-gray-300 uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                {title}
                <div className="h-[1px] flex-1 bg-gray-100" />
              </h3>
              <div className="space-y-3">
                {items.map((log: any) => (
                  <LogItem key={log.id} log={log} />
                ))}
              </div>
            </section>
          )
        );})}
      </div>

      {/* 하단 입력창 (Status 전용) */}
      <div className="p-4 mb-12 border-t border-gray-100 bg-gray-50">
        <input
          type="text"
          placeholder="Record your status..."
          onKeyDown={handleStatusSubmit}
          className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md text-sm outline-none focus:border-memo-m transition-colors"
        />
      </div>
    </div>
  );
};

export default LogPanel;