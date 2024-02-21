import Header from "../componant/Header";
import Presentation from "../componant/Presentation";
import Showcase from "../componant/Showcase";
import Team from "../componant/Team";

function Home() {
  return (
    <div className=" min-w-[360px]">
      <meta name="description" content="Gaia Medication : votre application gratuite de santé pour une gestion complète des traitements, rappels de médicaments, et suivi des stocks. Inclut la gestion des effets secondaires, une carte interactive des établissements de santé et médecins, ainsi qu'une communication facilitée avec les professionnels de santé par envoi de résumés PDF. Simplifiez votre suivi médical et gardez le contrôle de votre bien-être."></meta>
      <Header></Header>
      <Showcase></Showcase>
      <Presentation></Presentation>
      <Team></Team>
    </div>
  );
}

export default Home;
