import React from "react";
import stockIcon from '../assets/stock.png';
import researchMed from '../assets/composition.png';
import mapIcon from '../assets/map.png';

const Presentation: React.FC = () => {
  return (
    <div className="flex flex-col items-center md:h-[750px] xl:h-[900px] h-[1400px] gap-[10%]" id="presentation">
      <div className="flex flex-col items-center w-[70%] gap-3">
        <h2 className="text-xl text-lime-500 font-semibold">
          Ce que nous faisons
        </h2>
        <h2 className="text-6xl text-gray-800 font-semibold">
          Présentation de Gaïa
        </h2>
        <p className="text-lg font-regular text-gray-500 text-center mt-4 w-[85vh]">
          Gaïa, votre assistant de santé mobile, simplifie le suivi et la gestion de vos médicaments.<br></br> Conçue pour s'adapter à chaque individu, notre application vous offre des fonctionnalités personnalisées pour optimiser la gestion de vos traitements selon vos pathologies spécifiques. Avec Gaïa, gérez facilement la routine de votre prise médicamenteuse.
        </p>
      </div>

      <div className="flex md:flex-row flex-col flex-wrap items-center justify-center mt-8 w-[90%]">
        <div className="flex flex-col items-center gap-2 bg-white rounded-lg md:shadow-2xl shadow-neutral-200 p-6 pt-10 mx-0 sm:mx-6 md:w-[25%] w-full sm:w-[80%] max-h-[300px] sm:max-h-[500px] xl:min-h-[500px] duration-200 md:hover:shadow-indigo-100 overflow-auto">
          <div className="flex items-center justify-center h-16 w-16 bg-indigo-200 rounded-full"><img src={stockIcon} alt="stock icon" className="h-[85%]"></img></div>
          <h3 className=" text-base sm:text-xl lg:text-3xl font-normal text-gray-700 mt-4 tracking-wide text-center">
            Suivi de traitement & de stock
          </h3>
          <div className="w-full sm:w-[80%]">
            <p className="hidden justify-center items-center text-gray-400 mt-2 text-center text-xs sm:text-sm max-[768px]:flex max-[768px]:text-xs xl:flex">
              Gaïa vous notifie pour chaque médicament à prendre et suit votre stock, garantissant aucun oubli et une gestion simplifiée de vos médicaments.
            </p>
          </div>
          <button className="bg-white hover:bg-gray-100 text-gray-600 font-medium py-2 px-4 rounded-full mt-auto border text-sm">Plus de détails</button>
        </div>

        <div className="flex flex-col items-center gap-2 bg-white rounded-lg md:shadow-2xl shadow-neutral-200 p-6 pt-10 mx-0 sm:mx-6 md:w-[25%] w-full sm:w-[80%] max-h-[300px] sm:max-h-[500px] xl:min-h-[500px] duration-200 md:hover:shadow-yellow-100 overflow-auto">
          <div className="flex items-center justify-center h-16 w-16 bg-yellow-200 rounded-full"><img src={mapIcon} alt="map icon"></img></div>
          <h3 className=" text-base sm:text-xl lg:text-3xl font-normal text-gray-700 mt-4 tracking-wide text-center">
            Carte des établissements de santé
          </h3>
          <div className="w-full sm:w-[80%]">
            <p className="hidden justify-center items-center text-gray-400 mt-2 text-center text-xs sm:text-sm max-[768px]:flex max-[768px]:text-xs xl:flex">
              Gaia localise les établissements de santé à proximité, vous assurant de toujours disposer de vos médicaments lors de vos traitements
            </p>
          </div>
          <button className="bg-white hover:bg-gray-100 text-gray-600 font-medium py-2 px-4 rounded-full mt-auto border text-sm">Plus de détails</button>
        </div>

        <div className="flex flex-col items-center gap-2 bg-white rounded-lg md:shadow-2xl shadow-neutral-200 p-6 pt-10 mx-0 sm:mx-6 md:w-[25%] w-full sm:w-[80%] max-h-[300px] sm:max-h-[500px] xl:min-h-[500px] duration-200 md:hover:shadow-cyan-100 overflow-auto">
          <div className="flex items-center justify-center h-16 w-16 bg-cyan-100 rounded-full"><img src={researchMed} alt="composition icon"></img></div>

          <h3 className=" text-base sm:text-xl lg:text-3xl font-normal text-gray-700 mt-4 tracking-wide text-center">
            Scan & recherche de produits médicaux
          </h3>
          <div className="w-full sm:w-[80%]">
            <p className="hidden justify-center items-center text-gray-400 mt-2 text-center text-xs sm:text-sm max-[768px]:flex max-[768px]:text-xs xl:flex">
              Gaia offre un accès rapide aux informations en scannant la boîte, et la recherche vous aide à trouver rapidement un médicament spécifique. Scanner une ordonnance ajoute directement votre traitement dans l'application
            </p>
          </div>
          <button className="bg-white hover:bg-gray-100 text-gray-600 font-medium py-2 px-4 rounded-full mt-auto border text-sm">Plus de détails</button>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
