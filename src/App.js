import Header from "./common/Header/index";
import Main from "./common/Main/index";
import Footer from "./common/Footer/index";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import {
  toSchedule,
  toAboutUs,
  toBuild,
  toGallery,
  toBooking,
  toTrucks,
  toTrolley,
  toAccommodation,
} from "./routes";
import Schedule from "./features/Schedule";
import AboutUs from "./features/AboutUs";
import Gallery from "./features/Gallery";
import Build from "./features/Build";
import Booking from "./features/Booking";
import Trucks from "./features/Booking/Trucks";
import Trolley from "./features/Booking/Trolley";
import Accommodation from "./features/Booking/Accommodation";

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
          <Route path={toBooking()}>
            <Booking />
          </Route>
          <Route path={toTrucks()}>
            <Trucks />
          </Route>
          <Route path={toTrolley()}>
            <Trolley />
          </Route>
          <Route path={toAccommodation()}>
            <Accommodation />
          </Route>
          <Route path="/">
            <Redirect to={toSchedule()}></Redirect>
          </Route>
        </Switch>
      </Main>
      <Footer />
    </HashRouter>
  );
}

export default App;
