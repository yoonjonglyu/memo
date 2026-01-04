import React from 'react';

export interface DraftProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
}

const Draft: React.FC<DraftProps> = ({ value, onChange, placeholder }) => {
  return (
    <div className="w-full min-h-100 p-6 bg-white rounded-xl shadow-sm border border-gray-200">
      <textarea
        className="w-full h-full min-h-87.5 resize-none outline-none text-lg leading-relaxed text-gray-800 placeholder-gray-400"
        value={value}
        onChange={onChange}
        placeholder={placeholder || 'type Draft...'}
      />
      <div className="mt-4 text-right text-sm text-gray-400">
        {value.length}char
      </div>
    </div>
  );
};

export default Draft;
