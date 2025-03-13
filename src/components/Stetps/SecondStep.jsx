import { Footer } from "../constant";
import { FormInput } from "../constant/FormInput";

export const SecondStep = ({ handleInput, stepCount, handleSubmit }) => {
  return (
    <form
      className="flex flex-col gap-3 justify-between h-full w-full"
      onSubmit={handleSubmit}
    >
      <div>
        <FormInput
          label={"Email *"}
          name={"email"}
          type={"email"}
          placeholder={"Enter your email"}
          isError={false}
          errorText={"Please provide a valid email address.."}
          handleInput={handleInput}
        />
        <FormInput
          label={"Phone number *"}
          name={"phone number"}
          type={"Phone number"}
          placeholder={"Enter your phonenumber"}
          isError={false}
          errorText={"Please enter a valid phone number."}
          handleInput={handleInput}
        />
        <FormInput
          label={"Password *"}
          name={"password"}
          type={"password"}
          placeholder={"Create password"}
          isError={false}
          errorText={"Password must include letters and numbers."}
          handleInput={handleInput}
        />
        <FormInput
          label={"Confirm password *"}
          name={"confirm password"}
          type={"confirm password"}
          placeholder={"Confirm password"}
          isError={false}
          errorText={"Please provide a valid email address.."}
          handleInput={handleInput}
        />
      </div>
      <Footer stepCount={stepCount} />
    </form>
  );
};
