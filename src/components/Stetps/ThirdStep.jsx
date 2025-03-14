import { Footer } from "../constant";
import { FormInput } from "../constant/FormInput";
import { CiImageOn } from "react-icons/ci";

export const ThirdStep = ({
  handleInput,
  stepCount,
  handleSubmit,
  handlePreviousStep,
}) => {
  console.log(handleInput, "test");

  return (
    <form
      className="flex flex-col gap-3 justify-between h-full w-full"
      onSubmit={handleSubmit}
    >
      <div className="gap-3">
        <FormInput
          label={"Date of birth *"}
          name={"--/--/--"}
          type={"text"}
          placeholder={"Enter date of birth"}
          isError={false}
          errorText={"Please select a date."}
          handleInput={handleInput}
        />
        <div className="flex flex-col items-start gap-3 self-stretch">
          <p className="text-black">Profile image *</p>
          <div className="flex h-[180px] min-h-20 w-full flex-col p-4 justify-center items-center bg-slate-100">
            <CiImageOn className="" />
            <input type="file" id="file" className="hidden" />
            <label htmlFor="file" className="text-black text-2xl line-[20px] ">
              Add image
            </label>
          </div>
        </div>
      </div>
      <Footer stepCount={stepCount} handlePrevious={handlePreviousStep} />
    </form>
  );
};
