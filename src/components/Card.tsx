import React from "react";

export const Card: React.FC<
  { children?: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>
> = ({ children, className, ...props }) => {
  return (
    <div className={`bg-white shadow-lg rounded-lg p-4 ${className}`} {...props}>
      {children}
    </div>
  );
};
