"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <button
      className={`${className} flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#3b38ff] dark:hover:bg-[#ccc] md:w-[158px]`}
      onClick={() => alert(` ${appName}` + " is not available yet. Stay tuned!")}
    >
      {children}
    </button>
  );
};
