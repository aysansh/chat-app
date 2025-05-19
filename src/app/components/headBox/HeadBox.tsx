"use client";

import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";

export default function HeadBox({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  const router = useRouter();
  console.log(router);

  return (
    <div className="w-full rounded-3xl px-[20px] h-[200px] bg-mainColor">
      <div className="flex flex-col justify-center items-start h-full gap-2 text-white">
        <FaArrowLeft
          onClick={() => router.back()}
          className="text-2xl mb-2 cursor-pointer"
        />
        <h2 className="text-2xl font-bold">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
