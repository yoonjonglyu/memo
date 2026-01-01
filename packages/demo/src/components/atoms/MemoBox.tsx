import React from 'react';

export interface MemoBoxProps extends React.HTMLAttributes<HTMLElement> {
  blockColor?: 'm' | 'o' | 'm2' | 'e';
}

const MemoBox: React.FC<MemoBoxProps> = ({
  children,
  className,
  blockColor = 'm',
  ...props
}) => {
  // 로고 기반 테두리 색상 매핑
  const borderColorMap = {
    m: 'border-memo-m',
    o: 'border-memo-o',
    m2: 'border-memo-m2',
    e: 'border-memo-e',
  };

  return (
    <section
      {...props}
      className={`
        /* 기본 형태: 각진 블록 느낌 */
        w-full min-h-50 h-auto
        p-2 bg-white
        
        /* 테트리스 포인트: 두꺼운 상단(또는 왼쪽) 보더 */
        border-t-8 ${borderColorMap[blockColor]}
        border-x border-b border-gray-200
        
        /* 테트리스의 입체감을 주는 딱딱한 그림자 (Hard Shadow) */
        shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]
        hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.15)]
        hover:-translate-y-1
        
        /* 텍스트 및 스크롤 설정 */
        break-all overflow-y-auto transition-all duration-200
        scrollbar-hide
        /* 블록 쪼개짐 방지 핵심 */
  inline-block w-full break-inside-avoid
  
        
        /* 외부에서 들어오는 추가 클래스 결합 */
        ${className || ''}
      `}
    >
      {children}
    </section>
  );
};

export default MemoBox;
