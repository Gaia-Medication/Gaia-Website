import React from "react";

const Presentation: React.FC = () => {
  return (
    <div className="flex flex-col items-center h-screen gap-[10%]">
      <div className="flex flex-col items-center w-[70%] gap-3">
        <h1 className="text-xl text-lime-500 font-semibold">
          Ce que nous faisons
        </h1>
        <h2 className="text-6xl text-gray-800 font-semibold">
          Présentation tah les fou
        </h2>
        <p className="text-sm font-semibold text-gray-600 text-center mt-4 w-[35%]">
          Description tah les fou de malade avec beaucoup de mots comple et
          explication de l'appli
        </p>
      </div>

      <div className="flex justify-center mt-8 h-[40%] w-[80%]">
        <div className="flex flex-col items-center gap-2 bg-white rounded-lg shadow-2xl shadow-neutral-200 p-6 pt-10 mx-6 w-[25%] min-h-[40%] hover:w-[27%] hover:min-h-[42%] duration-200 hover:shadow-indigo-100">
          <div className="flex items-center justify-center h-16 w-16 bg-indigo-200 rounded-full"></div>
          <h3 className="text-4xl font-normal text-gray-800 mt-4 tracking-wide text-center">
            Lorem Ipsum
          </h3>
          <div className=" w-[70%]">
            <p className="text-gray-400 mt-2 text-center">
              Pompeius calentes in hierosolymis ad his iuris et emergunt aptae
              dictione.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 bg-white rounded-lg shadow-2xl shadow-neutral-200 p-6 pt-10 mx-6 w-[25%] min-h-[40%] hover:w-[27%] hover:min-h-[42%] duration-200 hover:shadow-yellow-100">
          <div className="flex items-center justify-center h-16 w-16 bg-yellow-200 rounded-full"></div>
          <h3 className="text-4xl font-normal text-gray-800 mt-4 tracking-wide text-center">
            Lorem Ipsum
          </h3>
          <div className=" w-[70%]">
            <p className="text-gray-400 mt-2 text-center">
              Pompeius calentes in hierosolymis ad his iuris et emergunt aptae
              dictione.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 bg-white rounded-lg shadow-2xl shadow-neutral-200 p-6 pt-10 mx-6 w-[25%] min-h-[40%] hover:w-[27%] hover:min-h-[42%] duration-200 hover:shadow-cyan-100">
          <div className="flex items-center justify-center h-16 w-16 bg-cyan-100 rounded-full"></div>
          <h3 className="text-4xl font-normal text-gray-800 mt-4 tracking-wide text-center">
            Lorem Ipsum
          </h3>
          <div className=" w-[70%]">
            <p className="text-gray-400 mt-2 text-center">
              Pompeius calentes in hierosolymis ad his iuris et emergunt aptae
              dictione.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
