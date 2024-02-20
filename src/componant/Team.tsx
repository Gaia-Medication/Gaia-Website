import profil1 from "../assets/profil1.png";
import profil2 from "../assets/profil2.png";
import profil3 from "../assets/profil3.png";
import profil4 from "../assets/profil4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Team = () => {
    return (
        <div id="team" className="flex justify-center h-[70vh]">
            <div className="w-[80%] xl:w-[60%]">
                <div className="flex flex-col justify-center items-start p-4 mb-10 gap-4">
                    <h2 className="text-base sm:text-xl text-lime-500 font-semibold">Notre équipe</h2>
                    <h2 className="text-xl sm:text-4xl text-gray-800 font-semibold">
                        Rencontrer notre équipe
                    </h2>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between justify-center gap-3">
                    <div className="flex flex-row md:flex-col md:w-1/4 w-[80%]">
                        <div className="relative w-[50%] md:w-auto">
                            <img
                                src={profil1}
                                alt="profil 1"
                                className="w-full h-full object-cover rounded-lg hover:opacity-75"
                            />
                            <div className="absolute inset-0 bg-lime-400 bg-opacity-90 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 backdrop-filter flex justify-start items-end p-5 gap-2 backdrop-blur">                                
                                <a href="https://www.linkedin.com/in/florian-tran-701839263/">
                                    <FontAwesomeIcon icon={faLinkedin} className="text-white text-5xl " />                            
                                </a>
                                <a href="https://github.com/FlorianTran">
                                    <FontAwesomeIcon icon={faGithub} className="text-white text-5xl" />
                                </a>
                            </div>
                        </div>
                        <div className=" p-6 mt-2 w-[50%] md:w-auto">
                            <h3 className=" text-xl text-gray-800 md:text-lg font-medium tracking-wider">Florian Tran</h3>
                            <p className=" text-base md:text-sm text-gray-500">Developer / Designer</p>
                            <div className="flex gap-2 md:hidden ">
                                <a href="https://www.linkedin.com/in/florian-tran-701839263/">
                                    <FontAwesomeIcon icon={faLinkedin} className="text-blue-400 text-3xl " />                            
                                </a>
                                <a href="https://github.com/FlorianTran">
                                    <FontAwesomeIcon icon={faGithub} className="text-blue-400 text-3xl" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row md:flex-col md:w-1/4 w-[80%]">
                        <div className="relative w-[50%] md:w-auto">
                            <img
                                src={profil2}
                                alt="profil 2"
                                className="w-full h-full object-cover rounded-lg hover:opacity-75"
                            />
                            <div className="absolute inset-0 bg-lime-400 bg-opacity-90 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 backdrop-filter flex justify-start items-end p-5 gap-2 backdrop-blur">
                                <a href="https://www.linkedin.com/in/alexandre-clenet/">
                                    <FontAwesomeIcon icon={faLinkedin} className="text-white text-5xl" />                            
                                </a>
                                <a href="https://github.com/helldeal">
                                    <FontAwesomeIcon icon={faGithub} className="text-white text-5xl" />
                                </a>
                            </div>
                        </div>
                        <div className=" p-6 mt-2 w-[50%] md:w-auto">
                            <h3 className=" text-xl text-gray-800 md:text-lg font-medium tracking-wider">Alexandre Clenet</h3>
                            <p className=" text-base md:text-sm text-gray-500">Developer / Scrum Master</p>
                            <div className="flex gap-2 md:hidden ">
                                <a href="https://www.linkedin.com/in/alexandre-clenet/">
                                    <FontAwesomeIcon icon={faLinkedin} className="text-blue-400 text-3xl " />                            
                                </a>
                                <a href="https://github.com/helldeal">
                                    <FontAwesomeIcon icon={faGithub} className="text-blue-400 text-3xl" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row md:flex-col md:w-1/4 w-[80%]">
                        <div className="relative w-[50%] md:w-auto">
                            <img
                                src={profil3}
                                alt="profil 3"
                                className="w-full h-full object-cover rounded-lg hover:opacity-75"
                            />
                            <div className="absolute inset-0 bg-lime-400 bg-opacity-90 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 backdrop-filter flex justify-start items-end p-5 gap-2 backdrop-blur">
                                <a href="https://www.linkedin.com/in/nathan-marie/">
                                    <FontAwesomeIcon icon={faLinkedin} className="text-white text-5xl" />
                                </a>
                                <a href="https://github.com/nathanmariedev">
                                    <FontAwesomeIcon icon={faGithub} className="text-white text-5xl" />
                                </a>
                            </div>
                        </div>
                        <div className=" p-6 mt-2 w-[50%] md:w-auto">
                            <h3 className=" text-xl text-gray-800 md:text-lg font-medium tracking-wider">Nathan Marie</h3>
                            <p className=" text-base md:text-sm text-gray-500">Developer / Back-end</p>
                            <div className="flex gap-2 md:hidden ">
                                <a href="https://www.linkedin.com/in/nathan-marie/">
                                    <FontAwesomeIcon icon={faLinkedin} className="text-blue-400 text-3xl " />                            
                                </a>
                                <a href="https://github.com/nathanmariedev">
                                    <FontAwesomeIcon icon={faGithub} className="text-blue-400 text-3xl" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row md:flex-col md:w-1/4 w-[80%]">
                        <div className="relative w-[50%] md:w-auto">
                            <img
                                src={profil4}
                                alt="profil 4"
                                className="w-full h-full object-cover rounded-lg hover:opacity-75"
                            />
                            <div className="absolute inset-0 bg-lime-400 bg-opacity-90 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 backdrop-filter flex justify-start items-end p-5 gap-2 backdrop-blur">
                                <a href="https://www.linkedin.com/in/benjamin-couet-727b95267/">
                                    <FontAwesomeIcon icon={faLinkedin} className="text-white text-5xl" />
                                </a>
                                <a href="https://github.com/Nuuust">
                                    <FontAwesomeIcon icon={faGithub} className="text-white text-5xl" />
                                </a>
                            </div>
                        </div>
                        <div className=" p-6 mt-2 w-[50%] md:w-auto">
                            <h3 className=" text-xl text-gray-800 md:text-lg font-medium tracking-wider">Benjamin Couet</h3>
                            <p className=" text-base md:text-sm text-gray-500">Developer / Data </p>
                            <div className="flex gap-2 md:hidden ">
                                <a href="https://www.linkedin.com/in/benjamin-couet-727b95267/">
                                    <FontAwesomeIcon icon={faLinkedin} className="text-blue-400 text-3xl " />                            
                                </a>
                                <a href="https://github.com/Nuuust">
                                    <FontAwesomeIcon icon={faGithub} className="text-blue-400 text-3xl" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
