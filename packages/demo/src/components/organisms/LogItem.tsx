import React from 'react';
import { type FlowLog } from '../../store/log/flowLogState';

interface LogItemProps {
  log: FlowLog;
}

const LogItem: React.FC<LogItemProps> = ({ log }) => {
  const isStatus = log.category === 'status';
  const timeStr = new Date(log.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className={`group flex flex-col gap-1 ${isStatus ? 'items-end' : 'items-start'}`}>
      <div className="flex items-center gap-2 px-1">
        {!isStatus && <span className="text-[9px] font-bold text-gray-300">{timeStr}</span>}
        <span className="text-[9px] font-black text-gray-400 uppercase tracking-tighter">
          {log.actionType || log.sourceType}
        </span>
        {isStatus && <span className="text-[9px] font-bold text-gray-300">{timeStr}</span>}
      </div>
      
      <div 
        className={`max-w-[90%] px-3 py-2 rounded-2xl text-[13px] leading-snug shadow-sm border
          ${isStatus 
            ? 'bg-memo-m text-white border-memo-m rounded-tr-none' 
            : 'bg-white text-gray-700 border-gray-100 rounded-tl-none'
          }`}
      >
        {log.content}
      </div>
      
      {log.color && !isStatus && (
        <div className={`h-1 w-8 rounded-full bg-memo-${log.color} opacity-40`} />
      )}
    </div>
  );
};

export default LogItem;