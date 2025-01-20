import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="flex bg-gray-200 px-4 py-2 rounded-lg mt-2">
      <button className="bg-[#D72050] btn text-white hover:bg-[#b82e2b]">
        Latest
      </button>
      <Marquee speed={60} className="text-[#403F3F] text-lg font-semibold">
        Match Highlights: Germany vs Spain — as it happened ! Match Highlights:
        Germany vs Spain as...
      </Marquee>
    </div>
  );
};

export default BreakingNews;
