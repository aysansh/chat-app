"use client";
import { Input } from "@heroui/input";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function CustomPasswordInput() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
      className="max-w-xs"
      endContent={
        <button
          aria-label="toggle password visibility"
          className="focus:outline-none"
          type="button"
          onClick={toggleVisibility}
        >
          {isVisible ? <FiEyeOff /> : <FiEye />}
        </button>
      }
      label="Password"
      placeholder="Enter your password"
      type={isVisible ? "text" : "password"}
      variant="bordered"
      radius="full"
    />
  );
}
