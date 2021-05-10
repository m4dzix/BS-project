import Navigation from "./Navigation/index";
import Header from "./Header/index";
import Logo from "./Logo/index";
import Main from "./Main/index";

function App() {
  return (
    <>
      <Main>
        <Header />
        <Logo />
        <Navigation />
      </Main>
    </>
  );
}

export default App;
