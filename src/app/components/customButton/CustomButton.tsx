"use client";

import { Button } from "@mui/base";
import { ReactNode } from "react";

export default function CustomButton({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className="w-full">
      <Button
        type="button"
        className={`bg-mainColor w-full text-white font-bold h-[55px] ${className} rounded-full`}
      >
        {children}
      </Button>
    </div>
  );
}
