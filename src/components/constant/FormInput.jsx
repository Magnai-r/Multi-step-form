export const FormInput = ({
  label,
  name,
  type,
  placeholder,
  isError,
  errorText,
  handleInput,
}) => {
  return (
    <div className="w-full flex flex-col gap-2 text-black">
      <p>{label}</p>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="flex p-3  border rounded-lg w-full"
        onChange={handleInput}
        style={{
          borderColor: isError ? "#E14942" : "#CBD5E1",
          color: isError && "#E14942",
        }}
      />
      {isError && (
        <p className="flex items-stretch justify-end text-[#E14942]">
          {errorText}
        </p>
      )}
    </div>
  );
};
