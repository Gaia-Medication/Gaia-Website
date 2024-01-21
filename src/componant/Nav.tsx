import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom';


function Nav() {
    const location = useLocation();

    // Vous pouvez utiliser `location.pathname` pour obtenir l'URL actuelle
    console.log(location.pathname);

  return (
      <nav className="flex flex-row justify-around h-20 items-center bg-white">
        <div className="ml-20">
          <img src="/Gaia-Website/src/assets/logo_title_gaia.png" className=" h-14" alt="Gaïa" />
        </div>
        <div className="flex flex-row gap-12 items-center mr-10">
          <Link to={`/Gaia-Website/`} className={`text-lg font-bold ${location.pathname === '/Gaia-Website/' ? 'text-[#9CDE00]' : ''}`} >Accueil</Link>
          <Link to={`/Gaia-Website/Application/`} className={`text-lg font-bold ${location.pathname === '/Gaia-Website/Application/' ? 'text-[#9CDE00]' : ''}`}>Application</Link>
          <Link to={`/Gaia-Website/Team/`} className={`text-lg font-bold ${location.pathname === '/Gaia-Website/Team/' ? 'text-[#9CDE00]' : ''}`}>Équipe</Link>
          <Link to={`/Gaia-Website/Contact/`} className={`text-lg font-bold ${location.pathname === '/Gaia-Website/Contact/' ? 'text-[#9CDE00]' : ''}`}>Contact</Link>
          <Link to={`/Gaia-Website/`} className="ml-10 p-2 text-white text-sm font font-bold bg-[#9CDE00] rounded-md">Télécharger l'application</Link>
        </div>
      </nav>
  )
}

export default Nav