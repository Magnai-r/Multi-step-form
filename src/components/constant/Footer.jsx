import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

export const Footer = ({ stepCount, handleSubmit, handlePrevious }) => {
  console.log(handleSubmit, "from footer");

  return (
    <div className="flex gap-2 w-full ">
      {stepCount > 1 && (
        <button
          className="flex h-[44px] bg-[#FFF] text-black text-xl border border-[#CBD5E1] w-32 py-[10px] px-3 gap-1 items-center justify-center rounded-[6px] cursor-pointer"
          onClick={handlePrevious}
        >
          {" "}
          Back
          <FaChevronLeft size={15} />
        </button>
      )}
      <button
        className=" flex w-full h-[44px] text-white justify-center items-center text-xl cursor-pointer bg-[#121316] rounded-[6px] "
        type="submit"
      >
        Continue {stepCount}/3
        <FaChevronRight size={15} />
      </button>
    </div>
  );
};
