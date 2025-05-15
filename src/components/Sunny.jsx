import { MapPin } from "lucide-react";
import { House } from "lucide-react";
import { Heart } from "lucide-react";
import { User } from "lucide-react";
export const Sunny = ({ date, temp, condition }) => {
  const d = new Date();
  return (
    <div className=" w-103 h-207 z-20 rounded-4xl overflow-hidden shadow-lg bg-white/75 backdrop-blur-md relative">
      <div className="py-14 px-10 space-y-12 backdrop-blur-lg">
        <div className="flex justify-between">
          <div className="space-y-2">
            <p className="text-gray-400">{date}</p>
            <h2 className="text-5xl font-extrabold text-gray-900">
              Ulaanbaatar
            </h2>
          </div>
          <MapPin className="w-8 h-8 text-gray-600" />
        </div>
        <div className="justify-center flex flex-col items-center">
          <img
            src="/nar.png"
            alt="nar"
            className="w-[262px] justify-center flex flex-col"
          />
        </div>
      </div>
      <div className="px-12">
        <div className="font-extrabold text-[110px] -mt-10 bg-gradient-to-b from-black to-white bg-clip-text text-transparent">
          {temp}
        </div>
        <p className="font-extrabold mb-12 h-6 text-[#777CCE]">{condition}</p>
        <div className="flex justify-between ">
          <House className="w-8 h-8 text-gray-800" />
          <MapPin className="w-8 h-8 text-gray-300" />
          <Heart className="w-8 h-8 text-gray-300" />
          <User className="w-8 h-8 text-gray-300" />
        </div>
      </div>
    </div>
  );
};
