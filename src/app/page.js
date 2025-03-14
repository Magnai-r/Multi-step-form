"use client";
import { Footer, Header } from "@/components/constant";
import { FirstStep, LastStep } from "@/components/Stetps";
import { SecondStep } from "@/components/Stetps/SecondStep";
import { ThirdStep } from "@/components/Stetps/ThirdStep";
import { initialFormValues } from "@/components/Utilities/constants";

import { useState } from "react";
export default function Home() {
  const [stepCount, setStepCount] = useState(0);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, seFormErrors] = useState(initialFormValues);

  const handleNextStep = (event) => {
    event.preventDefault();
    if (stepCount >= 3) {
      return;
    }

    setStepCount(stepCount + 1);
  };
  console.log(stepCount);

  const handlePreviousStep = () => {
    if (stepCount <= 0) {
      return;
    }
    setStepCount(stepCount - 1);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormValues((previousValues) => ({ ...previousValues, [name]: value }));
  };

  const CurrentStep = [FirstStep, SecondStep, ThirdStep, LastStep][stepCount];

  return (
    <div className="flex justify-center items-center h-screen w-full bg-[#F4F4F4]">
      {stepCount === 3 && <LastStep />}
      <div
        className="flex w-[480px] h-[655px] p-8 flex-col justify-between items-start border-0 rounded-lg bg-[#FFF]"
        style={{ display: stepCount === 3 ? "none" : "flex" }}
      >
        <Header />
        <CurrentStep
          handleSubmit={handleNextStep}
          stepCount={stepCount + 1}
          handInput={handleInputChange}
          handlePreviousStep={handlePreviousStep}
        />
      </div>
    </div>
  );
}
