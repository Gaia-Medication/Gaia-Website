
import { useLocation } from 'react-router-dom';


function Nav() {
    const location = useLocation();

    // Vous pouvez utiliser `location.pathname` pour obtenir l'URL actuelle
    console.log(location.pathname);

  return (
      <nav className="flex flex-row justify-around h-20 items-center bg-white">
      </nav>
  )
}

export default Nav