export const Center = () => {
  return (
    <div className="inset-0 absolute flex items-center justify-center">
      <div className="border border-gray-300 rounded-full h-[140px] w-[140px] top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 absolute "></div>
      <div className="border border-gray-300 rounded-full h-[340px] w-[340px] top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 absolute "></div>
      <div className="border border-gray-300 rounded-full h-[540px] w-[540px] top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 absolute "></div>
      <div className="border border-gray-300 rounded-full h-[940px] w-[940px] top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 absolute "></div>
      <div className="flex justify-center items-center w-[140px] h-[140px] bg-[#F3F4F6] rounded-full">
        <div className="relative">
          {/* <div className="absolute -top-[114px] -left-[67px] w-10 h-14 bg-[#F3F4F6]"></div> */}
          {/* <div className="absolute -top-[117px] -left-[4px] w-20 h-16 bg-[#0F141E] rounded-full"></div> */}
        </div>
        <div className="flex gap-4">
          <img src="/sumb.png" alt="zuun-sum" />
          <img src="/sumz.png" alt="baruun sum" />
        </div>
      </div>
    </div>
  );
};
