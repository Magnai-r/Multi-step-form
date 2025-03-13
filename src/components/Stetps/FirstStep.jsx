import { Footer } from "../constant";
import { FormInput } from "../constant/FormInput";

export const FirstStep = ({ handleSubmit, stepCount, handleInput }) => {
  return (
    <form
      className="flex flex-col gap-3 justify-between h-full w-full"
      onSubmit={handleSubmit}
    >
      <div>
        <FormInput
          label={"First Name *"}
          name={"Firstname"}
          type={"text"}
          placeholder={"Enter your first name"}
          isError={false}
          errorText={"First name cannot contain special characters or numbers."}
          handleInput={handleInput}
        />
        <FormInput
          label={"Last Name *"}
          name={"Lastname"}
          type={"text"}
          placeholder={"Enter your last name"}
          isError={false}
          errorText={"Last name cannot contain special characters or numbers."}
          handleInput={handleInput}
        />
        <FormInput
          label={"User Name *"}
          name={"Username"}
          type={"text"}
          placeholder={"Enter your user name"}
          isError={false}
          errorText={
            "This username is already taken. Please choose another one."
          }
          handleInput={handleInput}
        />
      </div>

      <Footer stepCount={stepCount} />
    </form>
  );
};
