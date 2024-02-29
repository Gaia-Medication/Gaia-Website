import iconGaia from '../assets/logo-gaia-icon.png';
import ExampleDoliprane from '../assets/ExampleDoliprane.png';
import ExampleScanDoli from '../assets/ExampleScanDoliprane.png';
import ExampleScanPrescriptionBefore from '../assets/ExampleScanPrescriptionBefore.png';
import ExampleScanPrescription from '../assets/ExampleScanPrescription.png';
import { ArrowRight } from 'react-feather';

const ContentScan = () => {
    return (
        <div id="contentScan" className="flex items-center justify-center h-[700px] sm:h-[700px] lg:h-[900px]">
            <div className='flex flex-col items-center justify-start w-full h-full'>
                <h4 className='text-sm md:text-base lg:text-xl text-lime-500 font-medium'>Scanner vos ordonnances et médicaments</h4>
                <div className='flex justify-center items-center mb-4'>
                    <img src={iconGaia} alt="Icon Gaia" className="w-[40px] h-[40px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px]" style={{
                        filter: 'invert(86%) sepia(15%) saturate(5047%) hue-rotate(25deg) brightness(95%) contrast(101%)',
                        transition: 'filter 0.3s ease-in-out'
                    }} />
                    <h3 className='text-lg sm:text-xl md:text-4xl xl:text-6xl font-medium text-gray-800' style={{
                        transition: 'opacity 0.3s ease-in-out'
                    }}>
                        Scan & recherche de produits médicaux
                    </h3>
                </div>

                <div className='flex flex-col items-center justify-center w-[90%] h-[80%] gap-10'>

                    <div className='flex gap-[5%] h-full sm:h-auto sm:flex-row flex-col items-center justify-center'>
                        <div className='flex flex-col w-[90%] sm:w-[55%] h-full gap-6' style={{
                            transition: 'opacity 0.3s ease-in-out'
                        }}>
                            <h5 className=' text-base sm:text-lg md:text-2xl lg:text-4xl text-lime-400 font-semibold'>
                                Scanner vos boîtes de médicaments
                            </h5>
                            <p className='text-xs md:text-base lg:text-2xl text-gray-600 font-light'>
                                Gaia vous permet de <span className='text-lime-500 font-medium'>scanner</span> vos boîte de médicaments afin d'avoir des informations sur
                                le médicament ou d'ajouter vos médicaments dans l'application pour une meilleure gestion de vos médicamnets.
                            </p>
                            <p className='text-xs md:text-base lg:text-2xl text-gray-600 font-light'>
                                Vous pouvez également <span className='text-lime-500 font-medium'>rechercher</span> des produits médicaux grâce à la recherche de médicament.
                            </p>
                            <p className='text-xs md:text-base lg:text-2xl text-gray-600 font-light'>

                            </p>
                        </div>

                        <div className='flex h-full w-[30%] items-center justify-center gap-2 md:gap-4 lg:gap-6' style={{
                            transition: 'opacity 0.3s ease-in-out'
                        }}>
                            <img src={ExampleScanDoli} alt="Example of the scan of a doliprane" className='w-[40%]' style={{
                                transition: 'opacity 0.3s ease-in-out'
                            }} />
                            <ArrowRight height={50} width={50} className='text-blue-400' style={{
                                transition: 'opacity 0.3s ease-in-out'
                            }} />
                            <img src={ExampleDoliprane} alt="Example of doliprane in Gaia-medication" className='w-[40%]' style={{
                                transition: 'opacity 0.3s ease-in-out'
                            }} />
                        </div>
                    </div>

                    <div className='flex gap-[5%] h-full sm:h-auto sm:flex-row flex-col items-center justify-center'>
                        <div className='flex flex-col w-[90%] sm:w-[55%] h-full gap-6' style={{
                            transition: 'opacity 0.3s ease-in-out'
                        }}>
                            <h5 className=' text-base sm:text-lg md:text-2xl lg:text-4xl text-lime-400 font-semibold'>
                                Scanner vos ordonnances
                            </h5>
                            <p className='text-xs md:text-base lg:text-2xl text-gray-600 font-light'>
                                Gaia vous permet de <span className='text-lime-500 font-medium'>scanner</span> vos ordonnances en un clin d'oeil,
                                pour un ajout simplifiée de vos traitements.
                            </p>
                            <p className='text-xs md:text-base lg:text-2xl text-gray-600 font-light'>
                                Ainsi que les <span className='text-lime-500 font-medium'>informations</span> sur votre médecin traitant et les médicaments prescrits.
                            </p>
                        </div>

                        <div className='flex h-full w-[30%] items-center justify-center gap-2 md:gap-4 lg:gap-6' style={{
                            transition: 'opacity 0.3s ease-in-out'
                        }}>
                            <img src={ExampleScanPrescriptionBefore} alt="Example of the scan of a prescription" className='w-[40%]' style={{
                                transition: 'opacity 0.3s ease-in-out'
                            }} />
                            <ArrowRight height={50} width={50} className='text-blue-400' style={{
                                transition: 'opacity 0.3s ease-in-out'
                            }} />
                            <img src={ExampleScanPrescription} alt="Example of the scan of a prescription" className='w-[40%]' style={{
                                transition: 'opacity 0.3s ease-in-out'
                            }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentScan;