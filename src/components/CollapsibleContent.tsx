"use client";
import React, { useRef } from "react";

interface CollapsibleContentProps {
  children: React.ReactNode;
  isOpen: boolean;
}

const CollapsibleContent: React.FC<CollapsibleContentProps> = ({ isOpen, children }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={contentRef}
      style={{
        maxHeight: isOpen ? `${contentRef.current?.scrollHeight || 0}px` : "0px",
      }}
      className="overflow-hidden transition-max-height duration-300 ease-in-out">
      <div className="p-4">{children}</div>
    </div>
  );
};

export default CollapsibleContent;
