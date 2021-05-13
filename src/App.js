import Navigation from "./common/Navigation/index";
import Header from "./common/Header/index";
import Logo from "./common/Logo/index";
import Slider from "./common/Slider/index";
import Main from "./common/Main/index";
import Schedule from "./features/Schedule";

function App() {
  return (
    <>
      <Main>
        <Header />
        <Logo />
        <Navigation />
        <Slider />
        <Schedule />
      </Main>
    </>
  );
}

export default App;
