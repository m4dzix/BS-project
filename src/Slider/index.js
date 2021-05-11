import React from "react";
import { StyledSlider, InformationField, Text, Foto } from "./styled";
import { arrayImages } from "./images/arrayImages";

const Slider = () => (
  <>
    <StyledSlider>
      {arrayImages.map((image) => (
        <Foto foto={image}></Foto>
      ))}
    </StyledSlider>
    <InformationField>
      <Text>
        {" "}
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </Text>
    </InformationField>
  </>
);
export default Slider;
