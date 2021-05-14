import Header from "./common/Header/index";
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
        <Switch>
          <Route path={toSchedule()}>
            <Schedule />
          </Route>
          <Route path={toAboutUs()}>
            <AboutUs />
          </Route>
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
