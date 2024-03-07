import profileContentImage from '../assets/profileContentImage.png';

const ContentGestionProfil = () => {
    return (
        <div id="contentGestionProfil" className="flex flex-col items-center justify-center h-[750px] sm:h-[500px] md:h-[750px] lg:h-[1000px] w-full bg-white gap-8">
            <div className='flex flex-col items-center gap-2 w-full'>
                <h4 className='text-sm md:text-base lg:text-xl text-lime-500 font-medium'>Gérer les traitements de vos proches</h4>
                <h3 className='text-3xl md:text-5xl lg:text-6xl text-gray-800 font-semibold'>Gestion de profil</h3>
            </div>
            <div className='flex items-center justify-center w-full'>
                <div className="flex flex-col w-[50%] md:w-[25%] h-full md:h-full md:gap-6 justify-center pl-2 md:pl-0 transition-all duration-500">
                    <h5 className='text-lg md:text-2xl lg:text-4xl text-lime-400 font-semibold'>
                        Tout est sous votre contrôle
                    </h5>
                    <div className='flex flex-col gap-1 md:gap-6 w-full p-4'>
                        <p className='text-xs md:text-base lg:text-2xl text-gray-600 font-light'>
                            Gaia vous permet de gérer les <span className='text-lime-500 font-medium'>profils</span> de vos proches,
                            pour une gestion simplifiée de leurs <span className='text-lime-500 font-medium'>traitements</span>. <br />
                        </p>
                        <p className='text-xs md:text-base lg:text-2xl text-gray-600 font-light'>
                            Vous pouvez ajouter, modifier ou supprimer des profils, et gérer leurs traitements en un clin d'œil. <br />
                        </p>
                        <p className='text-xs md:text-base lg:text-2xl text-gray-600 font-light'>
                            Grâce à l'<span className='text-lime-500 font-medium'>interface intuitive</span> de Gaia, vous avez accès à toutes
                            les informations de vos proches en un clin d'œil grâce au résumé. <br />
                        </p>
                    </div>

                    {/* Est visible seulement quand la width est inférieure à 768px */}
                    <div className="md:hidden flex flex-col md:h-full justify-start mt-6 transition-all duration-500">
                        <h5 className='text-lg md:text-2xl lg:text-4xl text-blue-400 font-semibold'>
                            Rester informé
                        </h5>
                        <div className='flex flex-col gap-1 md:gap-6 w-full px-4'>
                            <p className='text-xs md:text-base lg:text-2xl text-gray-600 font-light'>
                                Gaia inclut également un système de <span className='text-lime-500 font-medium'>notification </span>
                                pour vous prévenir des prises de médicaments de vous et vos proches. <br />
                            </p>
                            <p className='text-xs md:text-base lg:text-2xl text-gray-600 font-light'>
                                Vous pouvez également consulter l'<span className='text-lime-500 font-medium'>historique</span> des prises de médicaments de vos proches,
                                ainsi que leurs <span className='text-lime-500 font-medium'>ressentis</span> et leurs éventuels
                                <span className='text-lime-500 font-medium'> effets secondaires</span>. <br />
                            </p>
                        </div>
                    </div>
                </div>

                <div className='w-[50%] md:w-[40%] md:mx-[2%] md:px-8 transition-all duration-500'>
                    <img src={profileContentImage} alt="Exemple of the profile functionalities" />
                </div>

                <div className="hidden md:flex flex-col w-[25%] h-full gap-6 justify-start mt-[8%] transition-all duration-500">
                    <h5 className='text-lg md:text-2xl lg:text-4xl text-blue-400 font-semibold'>
                        Rester informé
                    </h5>
                    <div className='flex flex-col gap-6 w-full p-4'>
                        <p className='text-xs md:text-base lg:text-2xl text-gray-600 font-light'>
                            Gaia inclut également un système de <span className='text-lime-500 font-medium'>notification </span>
                            pour vous prévenir des prises de médicaments de vous et vos proches. <br />
                        </p>
                        <p className='text-xs md:text-base lg:text-2xl text-gray-600 font-light'>
                            Vous pouvez également consulter l'<span className='text-lime-500 font-medium'>historique</span> des prises de médicaments de vos proches,
                            ainsi que leurs <span className='text-lime-500 font-medium'>ressentis</span> et leurs éventuels
                            <span className='text-lime-500 font-medium'> effets secondaires</span>. <br />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentGestionProfil;
