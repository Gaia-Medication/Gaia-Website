import logo from '../assets/logo_title_gaia.png';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 flex items-center justify-between px-48 bg-white">
            <div className="flex items-center">
                <img src={logo} alt="Logo" className="w-60" />
            </div>
            <nav className="flex items-center space-x-4 gap-8">
                <a href="#top" className="text-gray-700 hover:text-lime-500 text-xl font-semibold">Accueil</a>
                <a href="#presentation" className="text-lime-500 hover:text-blue-400 text-xl font-semibold">À propos</a>
                <a href="#team" className="text-gray-700 hover:text-lime-500 text-xl font-semibold">Notre équipe</a>
                <a href="#contact" className="text-gray-700 hover:text-lime-500 text-xl font-semibold">Contact</a>
            </nav>
            <a href="/download" className="px-8 py-2 text-white bg-lime-500 hover:bg-blue-400 text-xl font-semibold rounded-md duration-500">Télécharger</a>
        </header>
    );
};

export default Header;
