import Navigation from "./common/Navigation/index";
import Header from "./common/Header/index";
import Logo from "./common/Logo/index";
import Main from "./common/Main/index";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { toSchedule, toAboutUs, toBuild, toGallery } from "./routes";
import Schedule from "./features/Schedule";
import AboutUs from "./features/AboutUs";
import Gallery from "./features/Gallery";
import Build from "./features/Build";

function App() {
  return (
    <HashRouter>
      <Main>
        <Header />
        <Logo />
        <Navigation />
        <Switch>
          <Route path={toSchedule()}>
            <Schedule />
          </Route>
        </Switch>
        <Switch>
          <Route path={toAboutUs()}>
            <AboutUs />
          </Route>
        </Switch>
        <Switch>
          <Route path={toBuild()}>
            <Build />
          </Route>
          <Route path={toGallery()}>
            <Gallery />
          </Route>
          <Route path="/">
            <Redirect to={toSchedule()}></Redirect>
          </Route>
        </Switch>
      </Main>
    </HashRouter>
  );
}

export default App;

// <>
//   <Main>
//     <Header />
//     <Logo />
//     <Navigation />
//     <MyGallery />
//   </Main>
// </>
