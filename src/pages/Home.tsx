import Header from "../componant/Header";
import Presentation from "../componant/Presentation";
import Showcase from "../componant/Showcase";
import Team from "../componant/Team";

function Home() {
  return (
    <div className=" min-w-[360px]">
      <Header></Header>
      <Showcase></Showcase>
      <Presentation></Presentation>
      <Team></Team>
    </div>
  );
}

export default Home;
