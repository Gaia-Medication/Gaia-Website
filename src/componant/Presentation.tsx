import React from "react";
import stockIcon from '../assets/stock.png';
import researchMed from '../assets/composition.png';
import mapIcon from '../assets/map.png';

const Presentation: React.FC = () => {
  return (
    <div className="flex flex-col items-center h-screen gap-[10%]" id="presentation">
      <div className="flex flex-col items-center w-[70%] gap-3">
        <h2 className="text-xl text-lime-500 font-semibold">
          Ce que nous faisons
        </h2>
        <h2 className="text-6xl text-gray-800 font-semibold">
          Présentation de Gaïa
        </h2>
        <p className="text-sm font-semibold text-base text-gray-600 text-center mt-4 w-[45%]">
          Gaïa est une application mobile qui vous permet de vous assister dans votre suivi et votre gestion médical. Nous voulons faciliter votre quotidien en vous proposant des fonctionnalités qui vous aideront à bien assimiler la redondance de votre prise médicamenteuse. <br></br> Chaque personne est différente, c'est pourquoi nous vous proposons une application personnalisable et adaptée à vos patologies.
        </p>
      </div>

      <div className="flex justify-center mt-8 w-[80%]">
        <div className="flex flex-col items-center gap-2 bg-white rounded-lg shadow-2xl shadow-neutral-200 p-6 pt-10 mx-6 w-[25%] min-h-[40%] hover:px-[2.5%] hover:w-[27%] hover:min-h-[42%] duration-200 hover:shadow-indigo-100">
          <div className="flex items-center justify-center h-16 w-16 bg-indigo-200 rounded-full"><img src={stockIcon} alt="stock icon" className="h-[85%]"></img></div>
          <h3 className="text-4xl font-normal text-gray-800 mt-4 tracking-wide text-center">
            Suivi de traitement & de stock
          </h3>
          <div className=" w-[80%]">
            <p className="flex justify-center items-center text-gray-400 mt-2 text-center ">
              Grâce au suivi de traitement, vous pouvez être notifié à chaque prise de médicament et ainsi ne jamais oublier de prendre votre traitement. Quant au suivi de stock, il vous permet de bien gérer votre stock personnel de médicament.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 bg-white rounded-lg shadow-2xl shadow-neutral-200 p-6 pt-10 mx-6 w-[25%] min-h-[40%] hover:px-[2.5%] hover:w-[27%] hover:min-h-[42%] duration-200 hover:shadow-yellow-100">
          <div className="flex items-center justify-center h-16 w-16 bg-yellow-200 rounded-full"><img src={mapIcon} alt="map icon"></img></div>
          <h3 className="text-4xl font-normal text-gray-800 mt-4 tracking-wide text-center">
            Carte des établissements de santé
          </h3>
          <div className=" w-[80%]">
            <p className="text-gray-400 mt-2 text-center">
              Cette fonctionnalité vous permet de trouver les établissements de santé les plus proches afin de ne jamais être à court de médicaments lors de votre prise de traitement.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 bg-white rounded-lg shadow-2xl shadow-neutral-200 p-6 pt-10 mx-6 w-[25%] min-h-[40%] hover:px-[2.5%] hover:w-[27%] hover:min-h-[42%] duration-200 hover:shadow-cyan-100">
          <div className="flex items-center justify-center h-16 w-16 bg-cyan-100 rounded-full"><img src={researchMed} alt="composition icon"></img></div>
          
          <h3 className="text-4xl font-normal text-gray-800 mt-4 tracking-wide text-center">
            Scan & recherche de produits médicaux
          </h3>
          <div className=" w-[80%]">
            <p className="text-gray-400 mt-2 text-center">
              Le scan vous permet de scanner la boite d'un médicament afin d'obtenir toutes les informations le concernant. La recherche vous permet de trouver un médicament en particulier. Vous pouvez également scanner l'ordonnance de votre médecin afin de l'ajouter à votre liste de traitement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
