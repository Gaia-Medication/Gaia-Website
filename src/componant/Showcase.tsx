import gaiaPhone from "../assets/3d-gaia-phone.png";
import { ArrowRight } from "react-feather";
import { useEffect, useState } from "react";

const Showcase = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      id="home"
      className={`flex sm:mt-40 mt-0 justify-center items-center p-2 xl:h-[78vh] md:h-[60vh] h-[50vh]`}
    >
      <div className={`flex flex-col justify-center w-[55%] h-full pl-[6%] sm:pl-[12%] gap-12 ${isLoaded ? "opacity-100" : "opacity-0"
          } transition-opacity duration-[3000ms]`}>
        <div className="flex flex-col w-full gap-2">
          <div className="bg-blue-400 rounded-full px-2 max-w-12 lg:ml-6 transition-all duration-500">
            <p className="text-white font-semibold">New</p>
          </div>
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl text-gray-700 lg:ml-4 transition-all duration-500">Application Mobile</h1>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-gray-800 transition-all duration-500">Gaïa Medication</h1>
        </div>
        <div className="flex flex-col md:flex-row md:gap-10 lg:gap-14 gap-6">
          <button
            className="px-6 py-4 text-white bg-lime-500 hover:bg-blue-400 lg:text-xl font-semibold rounded-md duration-500 transition-all"
            onClick={() => window.open("/gaia.pdf")}
          >
            Essayer
          </button>
          <button
            className="flex gap-2 lg:gap-4 px-8 py-2 bg-lime-100 text-lime-500 font-medium lg:text-xl rounded-md hover:bg-lime-500 hover:text-white duration-500 items-center justify-center transition-all"
            onClick={() => window.open("/gaia.pdf")}
          >
            Présentation
            <div className="lg:flex hidden">
              <ArrowRight height={30} width={30} />
            </div>
            <div className="md:flex lg:hidden">
              <ArrowRight height={25} width={25} />
            </div>
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-[45%] md:h-full sm:h-[50vh] h-[35vh] relative">
        <img src={gaiaPhone} alt="Gaia Phone" className={`w-[80%] xl:w-[60%] h-auto max-w-full z-10 transition-all ${isLoaded ? "opacity-100" : "opacity-0"
          } transition-opacity duration-[1000ms]`} />
        <div className={`bg-lime-400 rounded-full xl:w-[550px] xl:h-[550px] md:w-[380px] md:h-[380px] sm:w-[250px] sm:h-[250px] w-[150px] h-[150px] absolute transition-all ${isLoaded ? "opacity-100" : "opacity-0"
          } transition-opacity duration-[2000ms] `}></div>
      </div>
    </div>
  );
};

export default Showcase;