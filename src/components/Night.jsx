import { MapPin } from "lucide-react";
import { House } from "lucide-react";
import { Heart } from "lucide-react";
import { User } from "lucide-react";
export const Night = ({ date, temp, condition }) => {
  return (
    <div className="text-blue-400  w-103 h-207 z-20 rounded-4xl overflow-hidden shadow-lg bg-[#111827]/75 backdrop-blur-md relative">
      <div className="py-14 px-10 space-y-12 ">
        <div className=" flex  justify-between">
          <div className="space-y-2">
            <h4 className="text-gray-400">{date}</h4>
            <h2 className="text-5xl font-extrabold text-white">Ulaanbaatar</h2>
          </div>
          <MapPin className="w-8 h-8 text-gray-600" />
        </div>
        <div className="justify-center flex flex-col items-center">
          <img
            src="/sar.png"
            alt="sar"
            className="w-[264px] justify-center flex flex-col items-center"
          />
        </div>
      </div>
      <div className="px-12">
        <p className="font-extrabold text-[110px] bg-gradient-to-b from-white to-black bg-clip-text text-transparent -mt-10 ">
          {temp}
        </p>
        <h6 className="font-extrabold mb-12 h-6 text-orange-400">
          {condition}
        </h6>
        <div className="flex justify-between ">
          <House className="w-8 h-8 text-gray-50" />
          <MapPin className="w-8 h-8 text-gray-600" />
          <Heart className="w-8 h-8 text-gray-600" />
          <User className="w-8 h-8 text-gray-600" />
        </div>
      </div>
    </div>
  );
};
