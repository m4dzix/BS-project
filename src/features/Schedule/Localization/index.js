import React from "react";
import GoogleMapReact from "google-map-react";
import { StyledLocalization, List, Key, Value } from "./styled";

export const Localization = () => {
  return (
    <StyledLocalization>
      <GoogleMapReact
        size="100"
        bootstrapURLKeys={{ key: "AIzaSyArq-dd79kg4PPv5jp3uCps8W488N5aVvs" }}
        defaultCenter={{
          lat: 52.23366,
          lng: 10.48821,
        }}
        defaultZoom={11}
      />
      <List>
        <Key>Adresse:</Key>
        <Value>Helene-Künne-Allee 3</Value>
        <Value>38122 Braunschweig</Value>
        <Key>Telefonnummer:</Key>
        <Value>
          <a href="tel:+49 531 86671515">+49 531 86671515</a>
        </Value>
      </List>
    </StyledLocalization>
  );
};

export default Localization;
