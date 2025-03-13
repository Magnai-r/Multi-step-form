import { Footer } from "../constant";
import { FormInput } from "../constant/FormInput";

export const ThirdStep = (handleInput, stepCount, handleSubmit) => {
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
        />
        <div className="flex flex-col items-start gap-3 self-stretch">
          <p className="text-black">Profile image *</p>
          display: flex; height: 180px; min-height: 80px; padding:
          var(--spacing-4, 16px); flex-direction: column; justify-content:
          center; align-items: center; gap: var(--spacing-2, 8px); flex: 1 0 0
          <div className="flex min-h "></div>
        </div>
      </div>
      <Footer stepCount={stepCount} />
    </form>
  );
};
