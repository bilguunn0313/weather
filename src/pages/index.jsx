import { Sunny } from "@/components/Sunny";
import { Night } from "@/components/Night";
import Image from "next/image";
import { SearchInput } from "@/components/Search-input";
import { Center } from "@/components/Center";
import { useEffect, useState } from "react";

export default function Home() {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState({});
  const inter = (e) => setCity(e.target.value);
  const weatherUrl = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_WEATHER_API}&q=ulaanbaatar`;

  const getWeather = async () => {
    try {
      const response = await fetch(weatherUrl);
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div className="justify-center flex">
      <div className="w-1/2 bg-[#F3F4F6] flex flex-col h-screen justify-center items-center">
        <SearchInput inter={inter} getWeather={getWeather} />
        <div>
          <Image
            src="/narb.png"
            alt="nar-icon"
            width={176}
            height={176}
            className="absolute left-68 top-10"
          />
        </div>
        <div>
          <Sunny
            date={weather?.forecast?.forecastday?.[0]?.date}
            temp={weather?.current?.temp_c}
            condition={weather?.current?.condition?.text}
          />
          <button onClick={getWeather}>GET</button>
        </div>
      </div>
      <div>
        <Center />
      </div>
      <div className="w-1/2 bg-[#0F141E] h-screen flex flex-col justify-center items-center">
        <div>
          <Night
            date={weather?.forecast?.forecastday?.[0]?.date}
            temp={weather?.forecast?.forecastday?.[0]?.day?.mintemp_c}
            condition={
              weather?.forecast?.forecastday?.[0]?.day?.condition?.text
            }
          />
        </div>
        <div>
          <Image
            src="/sarz.png"
            alt="sar-door"
            width={176}
            height={176}
            className="absolute right-70 bottom-14 "
          />
        </div>
      </div>
    </div>
  );
}
