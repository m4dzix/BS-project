import React from "react";
import {
  Wrapper,
  SubpageInformation,
  StyledSlider,
  InformationField,
  Text,
  Foto,
} from "./styled";
import { arrayImages } from "./images/arrayImages";

const Slider = ({ aboutUs }) => (
  <Wrapper aboutUs={aboutUs}>
    <StyledSlider aboutUs={aboutUs}>
      {arrayImages.map((image) => (
        <Foto key={image} foto={image}></Foto>
      ))}
    </StyledSlider>
    <InformationField aboutUs={aboutUs}>
      <Text>
        {" "}
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </Text>
    </InformationField>
    <SubpageInformation aboutUs={aboutUs}>
      Lorem <br /> ipsum dolor sit!
    </SubpageInformation>
  </Wrapper>
);

export default Slider;
