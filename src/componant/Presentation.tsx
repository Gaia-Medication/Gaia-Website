import React from "react";
import stockIcon from '../assets/stock.png';
import researchMed from '../assets/composition.png';
import mapIcon from '../assets/map.png';
import profileIcon from '../assets/profile.png';

const Presentation: React.FC = () => {
  return (
    <div className="flex flex-col items-center md:h-[1100px] xl:h-[900px] h-[1500px] gap-8 md:gap-[10%]" id="presentation">
      <div className="flex flex-col items-center w-[90%] gap-3 ">
        <h3 className=" text-base md:text-lg lg:text-xl text-lime-500 font-semibold">
          Ce que nous faisons
        </h3>
        <h2 className="text-3xl md:text-5xl lg:text-6xl text-gray-800 font-semibold">
          Présentation de Gaïa
        </h2>
        <p className="text-xs lg:text-lg font-regular text-gray-500 text-center mt-4 w-[90%] lg:w-[80%] px-2">
          Gaïa, votre assistant de santé mobile, simplifie le suivi et la gestion de vos médicaments. <br /> Conçue pour s'adapter à chaque individu, notre application vous offre des fonctionnalités personnalisées pour optimiser la gestion de vos traitements selon vos pathologies spécifiques. Avec Gaïa, gérez facilement la routine de votre prise médicamenteuse.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:flex md:grid-cols-2 gap-8 mt-8 w-[90%]">
        <div className="flex flex-col items-center gap-2 bg-white rounded-2xl pt-10 md:w-[90%] w-full max-h-[340px] sm:max-h-[500px] min-h-[250px] xl:min-h-[300px] duration-200 md:hover:shadow-indigo-100 overflow-auto">
          <div className="flex items-center justify-center h-16 w-16 bg-indigo-200 rounded-full">
            <img src={stockIcon} alt="stock icon" className="h-[85%]" />
          </div>
          <h3 className="text-xl font-medium text-gray-700 mt-4 tracking-wide text-center">
            Suivi de traitement & stock
          </h3>
          <div className="w-full">
            <p className="justify-center items-center text-gray-400 mt-2 text-center text-sm max-[768px]:flex">
              Gaïa vous notifie pour chaque médicament à prendre et suit votre stock, garantissant aucun oubli et une gestion simplifiée de vos médicaments.
            </p>
          </div>
          <a href="#suivi" className="bg-white hover:bg-gray-100 text-gray-600 font-base py-2 px-4 rounded-full mt-auto border text-xs">
            Plus de détails
          </a>
        </div>

        <div className="flex flex-col items-center gap-2 bg-white rounded-2xl pt-10 md:w-[90%] w-full max-h-[340px] sm:max-h-[500px] min-h-[250px] xl:min-h-[300px] duration-200 md:hover:shadow-yellow-100 overflow-auto">
          <div className="flex items-center justify-center h-16 w-16 bg-yellow-200 rounded-full">
            <img src={mapIcon} alt="map icon" />
          </div>
          <h3 className="text-xl font-medium text-gray-700 mt-4 tracking-wide text-center">
            Carte des établissements de santé
          </h3>
          <div className="w-full">
            <p className="justify-center items-center text-gray-400 mt-2 text-center text-sm max-[768px]:flex">
              Gaia localise les établissements de santé à proximité, vous assurant de toujours disposer de vos médicaments lors de vos traitements
            </p>
          </div>
          <a href="#contentMap" className="bg-white hover:bg-gray-100 text-gray-600 font-base py-2 px-4 rounded-full mt-auto border text-xs">Plus de détails</a>
        </div>

        <div className="flex flex-col items-center gap-2 bg-white rounded-2xl pt-10 md:w-[90%] w-full max-h-[340px] sm:max-h-[500px] min-h-[250px] xl:min-h-[300px] duration-200 md:hover:shadow-cyan-100 overflow-auto">
          <div className="flex items-center justify-center h-16 w-16 bg-cyan-100 rounded-full">
            <img src={researchMed} alt="composition icon" />
          </div>
          <h3 className="text-xl font-medium text-gray-700 mt-4 tracking-wide text-center">
            Scan & recherche de produits médicaux
          </h3>
          <div className="w-full">
            <p className="justify-center items-center text-gray-400 mt-2 text-center text-sm max-[768px]:flex">
              Gaia vous permet de scanner des ordonnances et rechercher des produits médicaux
            </p>
          </div>
          <button className="bg-white hover:bg-gray-100 text-gray-600 font-base py-2 px-4 rounded-full mt-auto border text-xs">Plus de détails</button>
        </div>

        <div className="flex flex-col items-center gap-2 bg-white rounded-2xl pt-10 md:w-[90%] w-full max-h-[340px] sm:max-h-[500px] min-h-[250px] xl:min-h-[300px] duration-200 md:hover:shadow-yellow-100 overflow-auto">
          <div className="flex items-center justify-center h-16 w-16 bg-green-200 rounded-full">
            <img src={profileIcon} alt="profile icon" />
          </div>
          <h3 className="text-xl font-medium text-gray-700 mt-4 tracking-wide text-center">
            Gestion de profil
          </h3>
          <div className="w-full">
            <p className="justify-center items-center text-gray-400 mt-2 text-center text-sm max-[768px]:flex">
              Gaia vous permet de gérer les profils de vos proches, pour une gestion simplifiée de leurs traitements
            </p>
          </div>
          <a href="#contentGestionProfil" className="bg-white hover:bg-gray-100 text-gray-600 font-base py-2 px-4 rounded-full mt-auto border text-xs">Plus de détails</a>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
