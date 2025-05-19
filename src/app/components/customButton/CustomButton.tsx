"use client";

import { Button } from "@heroui/button";
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
        className={`bg-mainColor w-full text-white font-bold h-[55px] ${className}`}
        radius="full"
      >
        {children}
      </Button>
    </div>
  );
}
