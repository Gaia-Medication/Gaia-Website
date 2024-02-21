import gaiaPhone from "../assets/gaia-phone.png";
import { ArrowRightCircle } from "react-feather";

const Showcase = () => {
  return (
    <div id="home" className="flex sm:mt-40 mt-0 justify-center items-center" style={{ height: "65vh"}}>
      <div className="flex flex-col justify-center w-[55%] h-full pl-[6%] sm:pl-[12%] gap-12">
        <div className="flex flex-col w-full gap-2">
          <div className="bg-blue-400 rounded-full px-2 max-w-12 lg:ml-6">
            <p className="text-white font-semibold">New</p>
          </div>
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl text-gray-700 lg:ml-4">Application Mobile</h1>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-gray-800">Gaïa Medication</h1>
        </div>
        <div className="flex flex-col md:flex-row md:gap-10 lg:gap-14 gap-6">
          <button
            className="px-8 py-2 text-white bg-lime-500 hover:bg-blue-400 lg:text-xl font-semibold rounded-md duration-500"
            onClick={() => window.open("/gaia.pdf")}
          >
            Essayer
          </button>
          <button
            className="flex gap-2 lg:gap-4 px-8 py-2 border-2 border-lime-500 text-lime-500 font-semibold lg:text-xl rounded-md hover:bg-lime-500 hover:text-white duration-500 items-center justify-center"
            onClick={() => window.open("/gaia.pdf")}
          >
            Présentation
            <div className="lg:flex hidden">
              <ArrowRightCircle height={30} width={30} />
            </div>
            <div className="md:flex lg:hidden">
              <ArrowRightCircle height={25} width={25} />
            </div>
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-[45%] md:h-full sm:h-[50vh] h-[35vh]">
        <img src={gaiaPhone} alt="Gaia Phone" className="h-[90%]" />
      </div>
    </div>
  );
};

export default Showcase;
