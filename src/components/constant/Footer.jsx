import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

export const Footer = ({ stepCount, handeNext, handlePrevious }) => {
  return (
    <div className="bg-[#121316] flex justify-center items-center gap-1 py-[10px] px-3 w-full rounded-[6px]">
      {stepCount > 1 && (
        <button
          className="flex bg-[#FFF] border-[#CBD5E1] border w-32 py-[10px] px-3 gap-1 items-center justify-center"
          onClick={handlePrevious}
        >
          <FaChevronLeft />
        </button>
      )}
      <button
        className=" flex justify-center items-center text-xl"
        onClick={handeNext}
      >
        <label className="text-[#FFF] text-xl not-italic font-medium leading[24px]">
          continue {stepCount} 1/3
        </label>
        <FaChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};
