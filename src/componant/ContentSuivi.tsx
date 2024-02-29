import gaiaHomePage from '../assets/Gaia-home-page.jpg';
import iconGaia from '../assets/logo-gaia-icon.png';
import ExampleStock from '../assets/ExampleStock.png';
import ExampleTreatment from '../assets/ExampleTreatment.png';

const ContentSuivi = () => {
    return (
        <div id="suivi" className="flex items-center justify-center w-full h-[800px] bg-lime-400">
            <div className="flex items-center justify-center gap-2 w-[40%] h-full">
                <img src={gaiaHomePage} alt="Gaia phone home page" className=' rounded-3xl w-[30%]'/>
                <img src={ExampleTreatment} alt="Example of a treatment" className=' w-[30%]'/>
                <img src={ExampleStock} alt="Example of a medecine stock" className=' w-[30%]'/>
            </div>

            <div className='flex flex-col justify-center w-[60%] p-[8%] gap-6'>
                <div className='flex gap-4'>
                    <img src={iconGaia} alt="Gaia Icon" className='w-[80px] h-[80px] -ml-[10%] -mt-[2%]' style={{
                        filter: 'invert(95%) sepia(5%) saturate(0%) hue-rotate(33deg) brightness(104%) contrast(107%)'
                    }} />
                    <h3 className=' text-6xl font-bold text-white mb-10'>
                        Suivi de Traitment & de Stock
                    </h3>
                </div>
                <p className=' text-2xl font-light text-white'>
                    Gaia vous permet de créer vos propre traitement à partir de vos indications médicales ou en scannant votre ordonnances.
                    <br />Une fois votre traitement créé, Gaia créer un planning de prise de médicament et vous notifie pour chaque médicament à prendre.
                    <br /><br />Gaia suit également votre stock de médicament, garantissant aucun oubli et une gestion simplifiée de vos médicaments.
                </p>
                <p className=' text-2xl font-medium text-white'>
                    Grâce à l'interface intuitive de Gaia, vous avez accès à toutes les informations de votre traitement et de votre stock en un clin d'oeil grâce à au résumé.
                </p>
            </div>
        </div>
    )
}

export default ContentSuivi;