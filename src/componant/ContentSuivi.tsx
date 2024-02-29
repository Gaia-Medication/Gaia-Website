import gaiaHomePage from '../assets/Gaia-home-page.jpg';
import iconGaia from '../assets/logo-gaia-icon.png';
import ExampleStock from '../assets/ExampleStock.png';
import ExampleTreatment from '../assets/ExampleTreatment.png';

const ContentSuivi = () => {
    return (
        <div id="suivi" className="flex xl:flex-row flex-col-reverse items-center md:justify-center justify-around w-full xl:h-[800px] md:h-[1200px] sm:h-[1000px] h-[900px] bg-lime-400">
            <div className="flex items-center justify-center gap-2 xl:w-[40%] w-[70%] h-full">
                <img src={gaiaHomePage} alt="Gaia phone home page" className='rounded-md md:rounded-xl lg:rounded-3xl w-[30%] transition-all duration-500'/>
                <img src={ExampleTreatment} alt="Example of a treatment" className='w-[30%] transition-all duration-500'/>
                <img src={ExampleStock} alt="Example of a medecine stock" className='w-[30%] transition-all duration-500'/>
            </div>

            <div className='flex flex-col justify-center xl:w-[60%] w-[90%] xl:p-[8%] px-[8%] pt-[8%] gap-6'>
                <div className='flex gap-4'>
                    <img src={iconGaia} alt="Gaia Icon" className='md:w-[80px] md:h-[80px] w-[50px] h-[50px] -ml-[10%] 2xl:-mt-[1%] md:mt-[2%] transition-all duration-500' style={{
                        filter: 'invert(95%) sepia(5%) saturate(0%) hue-rotate(33deg) brightness(104%) contrast(107%)'
                    }} />
                    <h3 className='text-2xl sm:text-4xl md:text-6xl font-bold text-white mb-10 transition-all duration-500'>
                        Suivi de Traitment & de Stock
                    </h3>
                </div>
                <p className='text-base sm:text-xl md:text-2xl font-base sm:font-light text-white transition-all duration-500'>
                    Gaia vous permet de créer vos propre traitement à partir de vos indications médicales ou en scannant votre ordonnances.
                    <br />Une fois votre traitement créé, Gaia créer un planning de prise de médicament et vous notifie pour chaque médicament à prendre.
                    <br /><br />Gaia suit également votre stock de médicament, garantissant aucun oubli et une gestion simplifiée de vos médicaments.
                </p>
                <p className='text-base sm:text-xl md:text-2xl font-semibold sm:font-medium text-white transition-all duration-500'>
                    Grâce à l'interface intuitive de Gaia, vous avez accès à toutes les informations de votre traitement et de votre stock en un clin d'oeil grâce à au résumé.
                </p>
            </div>
        </div>
    )
}

export default ContentSuivi;