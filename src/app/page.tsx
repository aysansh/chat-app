"use client";
import { HeroUIProvider } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "../components/customButton/CustomButton";
export default function Home() {
  return (
    <HeroUIProvider className=" h-full">
      <div className="flex flex-col items-center justify-between  h-full  py-[60px] px-[20px]">
        <Image
          width={285}
          height={285}
          src={"/image/startImage.svg"}
          alt="img"
          className="mix-blend-multiply"
        />
        <p className="text-mainText text-center max-w-52 text-lg">
          Chatboat will be ready to chat & make you happy
        </p>
        {""}
        <Link href="/register" className="w-full">
          <CustomButton>Get Started</CustomButton>
        </Link>
      </div>
    </HeroUIProvider>
  );
}
