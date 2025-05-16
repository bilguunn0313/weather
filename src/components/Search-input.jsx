import { Search } from "lucide-react";

export const SearchInput = ({ inter, getWeather }) => {
  <Sunny text={inter} />;

  return (
    <div className="z-30 flex ">
      <div className="overflow-hidden rounded-full absolute top-6 left-52 w-[567px] flex">
        <Search
          className="absolute top-5 left-6 text-gray-500 "
          width="35"
          height="35"
        />
        <input
          type="text"
          value={inter}
          placeholder="Search"
          className="py-4 pl-20 pr-6 w-full text-[32px] font-bold bg-white outline-none  "
          onChange={inter}
        />
        <button onClick={getWeather}>hello</button>
      </div>
    </div>
  );
};
