import { FaChevronRight } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="bg-[#121316] flex justify-center items-center gap-1 py-[10px] px-3 w-full rounded-[6px]">
      <button className=" flex justify-center items-center text-xl">
        <label className="text-[#FFF] text-xl not-italic font-medium leading[24px]">
          Continue 1/3
        </label>
        <FaChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};
