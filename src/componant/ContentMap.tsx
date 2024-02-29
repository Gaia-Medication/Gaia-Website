import iconGaia from '../assets/logo-gaia-icon.png';
import MapExample1 from '../assets/ExampleMap.png';

const contentMap = () => {
    return (
        <div id="contentMap" className="flex items-center justify-center lg:h-[800px] md:h-[600px] h-[650px] mt-32 mb-20">
            <div className='flex flex-col items-center gap-4 h-full'>
                <h4 className='text-sm md:text-base lg:text-xl text-lime-500 font-medium'>Retrouver vos professionnels de santé</h4>
                <div className='flex justify-center items-center'>
                    <img src={iconGaia} alt="Icon Gaia" className="w-[40px] h-[40px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px]" style={{ filter: 'invert(86%) sepia(15%) saturate(5047%) hue-rotate(25deg) brightness(95%) contrast(101%)', transition: 'all 0.3s ease' }} />
                    <h3 className='text-lg sm:text-2xl md:text-4xl lg:text-6xl font-medium text-gray-800' style={{ transition: 'all 0.3s ease' }}>
                        Carte des établissements de santé
                    </h3>
                </div>

                <div className='flex flex-col-reverse md:flex-row items-center justify-center w-full md:w-[90%] h-full'>
                    <div className='flex w-[60%] sm:w-[35%] md:w-[35%] items-center justify-center h-full' style={{ transition: 'all 0.3s ease' }}>
                        <img src={MapExample1} alt="Example of the map functionality" className='w-[50%]' style={{ transition: 'all 0.3s ease' }} />
                    </div>

                    <div className='flex flex-col items-center justify-center w-[90%] md:w-[55%] h-full gap-6' style={{ transition: 'all 0.3s ease' }}>
                        <h5 className='text-base sm:text-lg md:text-2xl lg:text-4xl text-lime-400 font-semibold' style={{ transition: 'all 0.3s ease' }}>
                            Localiser les professionnels de santé à proximité
                        </h5>
                        <p className='text-xs md:text-base lg:text-2xl text-gray-600 font-light' style={{ transition: 'all 0.3s ease' }}>
                            Gaia dispose d'une fonctionnalité qui <span className='text-lime-500 font-medium'>localise </span> et
                            <span className='text-lime-500 font-medium'> répertorie</span> tous les établissements de santé ainsi que les médecins à
                            proximité de votre position actuelle, avec leurs informations de contact complètes.
                        </p>
                        <p className='text-xs md:text-base lg:text-2xl text-gray-600 font-light' style={{ transition: 'all 0.3s ease' }}>
                            Cela vous permet de trouver rapidement un professionnel de santé pour obtenir vos médicaments ou pour une consultation en toute simplicité.
                        </p>
                        <p className='text-xs md:text-base lg:text-2xl text-gray-600 font-light' style={{ transition: 'all 0.3s ease' }}>
                            Vous pouvez également ajouté un <span className='text-lime-500 font-medium'>medecin traitant</span> à votre profil pour une communication 
                            simplifié et une gestion des <span className='text-lime-500 font-medium'>ressentis</span> avec votre médecin plus efficace.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default contentMap;