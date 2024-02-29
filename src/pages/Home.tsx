import Contact from "../componant/Contact";
import Content1 from "../componant/ContentSuivi";
import Content2 from "../componant/ContentMap";
import Content3 from "../componant/ContentScan";
import Content4 from "../componant/ContentGestionProfil";
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
      <Content1></Content1>
      <Content2></Content2>
      <Content3></Content3>
      <Content4></Content4>
      <Team></Team>
      <Contact></Contact>
    </div>
  );
}

export default Home;
