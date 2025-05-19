"use client";

import { Input } from "@heroui/input";
import { useRouter } from "next/navigation";

interface CustomInoutProps {
  label: string;
  placeholder: string;
  type: "text" | "email" | "url" | "password" | "tel" | "search" | "file";
  variant: "flat" | "bordered" | "underlined" | "faded";
  radius: "full" | "lg" | "md" | "sm" | "none";
}

export default function CustomInput({
  label,
  placeholder,
  type,
  variant,
  radius,
}: CustomInoutProps) {
  const router = useRouter();
  console.log(router);

  return (
    <div className="w-full">
      <Input
        label={label}
        placeholder={placeholder}
        type={type}
        variant={variant}
        radius={radius}
        className="border-1 border-mainColor rounded-full focus:border-2"
      />
    </div>
  );
}
