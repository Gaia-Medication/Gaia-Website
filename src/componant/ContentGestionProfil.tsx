import profileContentImage from '../assets/profileContentImage.png';

const contentGestionProfil = () => {
    return (
        <div id="contentGestionProfil" className="flex flex-col items-center justify-center h-[1000px] w-full bg-white gap-8">
            <div className='flex flex-col items-center gap-2 w-full'>
                <h4 className='text-base lg:text-xl text-lime-500 font-medium'>Gérer les traitements de vos proches</h4>
                <h3 className='text-3xl md:text-5xl lg:text-6xl text-gray-800 font-semibold'>Gestion de profil</h3>
            </div>
            <div className='flex items-center justify-center w-full'>
                <div className="flex flex-col w-[25%] h-full gap-6 justify-center">
                    <h5 className='text-4xl text-lime-400 font-semibold'>
                        Tout est sous votre contrôle
                    </h5>
                    <div className='flex flex-col gap-6 w-full p-4'>
                        <p className='text-2xl text-gray-600 font-light'>
                            Gaia vous permet de gérer les <span className='text-lime-500 font-medium'>profils</span> de vos proches,
                            pour une gestion simplifiée de leurs <span className='text-lime-500 font-medium'>traitements</span>. <br />
                        </p>
                        <p className='text-2xl text-gray-600 font-light'>
                            Vous pouvez ajouter, modifier ou supprimer des profils, et gérer leurs traitements en un clin d'oeil. <br />
                        </p>
                        <p className='text-2xl text-gray-600 font-light'>
                            Grâce à l'<span className='text-lime-500 font-medium'>interface intuitive</span> de Gaia, vous avez accès à toutes 
                            les informations de vos proches en un clin d'oeil grâce à au résumé. <br />
                        </p>
                    </div>
                </div>

                <div className='w-[40%] mx-[2%] px-8'>
                    <img src={profileContentImage} alt="Exemple of the profile functionalities" />
                </div>

                <div className="flex flex-col w-[25%] h-full gap-6 justify-start mt-[8%]">
                    <h5 className='text-4xl text-blue-400 font-semibold'>
                        Rester informé
                    </h5>
                    <div className='flex flex-col gap-6 w-full p-4'>
                        <p className='text-2xl text-gray-600 font-light'>
                            Gaia inclut également un système de <span className='text-lime-500 font-medium'>notification </span>
                            pour vous prévenir des prises de médicaments de vous et vos proches. <br />
                        </p>
                        <p className='text-2xl text-gray-600 font-light'>
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

export default contentGestionProfil;