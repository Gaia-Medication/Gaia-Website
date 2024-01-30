import gaiaPhone from '../assets/gaia-phone.png';

const Showcase = () => {
    return (
        <div className="flex" style={{ height: '65vh' }}>
            <div className="flex flex-col justify-center w-[55%] h-full pl-[12%] gap-12">
                <div className='flex flex-col w-full gap-2'>
                    <div className='bg-blue-400 rounded-full px-2 max-w-12 ml-6'>
                        <p className='text-white font-semibold'>New</p>
                    </div>
                    <p className='text-6xl text-gray-700 ml-4'>Application Mobile</p>
                    <p className='text-8xl font-bold text-gray-800'>Gaïa Medication</p>
                </div>
                <div className='flex gap-16'>
                    <button className="px-8 py-2 text-white bg-lime-500 hover:bg-blue-400 text-xl font-semibold rounded-md duration-500">Essayer</button>
                    <button className="px-8 py-2 border-2 border-lime-500 text-lime-500 font-semibold text-xl rounded-md hover:bg-lime-500 hover:text-white duration-500">Présentation</button>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center w-[45%] h-full">
                <img src={gaiaPhone} alt="Gaia Phone" className="h-[90%]" />
            </div>
        </div>
    );
};

export default Showcase;
