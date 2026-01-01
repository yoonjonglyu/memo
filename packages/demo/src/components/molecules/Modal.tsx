import React from 'react';

export interface ModalProps {
  header: React.ReactNode;
  children: React.ReactNode;
  footer: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ header, children, footer }) => {
  return (
    <div className="fixed inset-0 z-1000 flex flex-col justify-center items-center p-4 bg-black/45 backdrop-blur-sm overflow-hidden">
      <div className="flex flex-col w-full max-w-90 min-h-50 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,0.15)] border-2 border-gray-800 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="py-3 px-4 border-b-2 border-gray-100 font-black text-xl text-center tracking-tighter text-gray-800 italic uppercase">
          {header}
        </div>

        {/* Modal Body */}
        <div className="flex-1 p-4 overflow-y-auto">{children}</div>

        {/* Modal Footer */}
        <div className="p-4 bg-gray-50 flex flex-wrap justify-center items-center gap-2 border-t-2 border-gray-100">
          {footer}
        </div>
      </div>
    </div>
  );
};

export default Modal;
