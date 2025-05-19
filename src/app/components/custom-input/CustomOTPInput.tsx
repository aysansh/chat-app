"use client";

import { InputOtp } from "@heroui/react";

interface CustomInoutProps {
  radius: "full" | "lg" | "md" | "sm" | "none";
}

export default function CustomOTPInput({ radius }: CustomInoutProps) {
  return (
    <div className="w-full">
      <InputOtp
        length={4}
        radius={radius}
        variant="bordered"
        // className="border-1 border-mainColor rounded-full focus:border-2"
      />
    </div>
  );
}
