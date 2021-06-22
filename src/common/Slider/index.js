import React from "react";
import {
  SubpageInformation,
  StyledSlider,
  InformationField,
  Text,
  Foto,
} from "./styled";
import { arrayImages } from "./images/arrayImages";

const Slider = ({ vertical, inset }) => (
  <>
    <StyledSlider>
      {arrayImages.map((image) => (
        <Foto vertical={vertical} key={image} foto={image}></Foto>
      ))}
      <SubpageInformation vertical={vertical}>{inset}</SubpageInformation>
    </StyledSlider>
    <InformationField vertical={vertical}>
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
