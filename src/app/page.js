"use client";
import { Footer, Header } from "@/components/constant";
import { FirstStep } from "@/components/Stetps";
import { SecondStep } from "@/components/Stetps/SecondStep";
import { ThirdStep } from "@/components/Stetps/ThirdStep";

import { useState } from "react";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen w-full bg-[#F4F4F4]">
      <div className="flex w-[480px] h-[655px] p-8 flex-col justify-between items-start border-0 rounded-lg bg-[#FFF]">
        <Header />
        <ThirdStep />
      </div>
    </div>
  );
}
