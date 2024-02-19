import logo from '../assets/logo_title_gaia.png';

const Header = () => {
    return (
        <header className="sm:fixed top-0 left-0 right-0 flex items-center justify-between 2xl:px-48 px-4 bg-white duration-150">
            <div className="flex items-center">
                <img src={logo} alt="Logo" className="w-40 lg:w-60" />
            </div>
            <nav className="sm:flex items-center space-x-4 md:gap-8 hidden">
                <a href="#top" className="text-gray-700 hover:text-lime-500 text-sm lg:text-xl font-semibold">Accueil</a>
                <a href="#presentation" className="text-lime-500 hover:text-blue-400 text-sm lg:text-xl font-semibold">À propos</a>
                <a href="#team" className="text-gray-700 hover:text-lime-500 text-sm lg:text-xl font-semibold">Notre équipe</a>
                <a href="#contact" className="text-gray-700 hover:text-lime-500 text-sm lg:text-xl font-semibold">Contact</a>
            </nav>
            <a href="/download" className="px-8 py-2 text-white bg-lime-500 hover:bg-blue-400 text-base lg:text-xl font-semibold rounded-md duration-500">Télécharger</a>
        </header>
    );
};

export default Header;
