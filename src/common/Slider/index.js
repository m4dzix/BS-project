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

const Slider = ({ vertical, inset }) => (
  <Wrapper vertical={vertical}>
    <StyledSlider vertical={vertical}>
      {arrayImages.map((image) => (
        <Foto key={image} foto={image}></Foto>
      ))}
    </StyledSlider>
    <InformationField vertical={vertical}>
      <Text>
        {" "}
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </Text>
    </InformationField>
    <SubpageInformation vertical={vertical}>{inset}</SubpageInformation>
  </Wrapper>
);

export default Slider;
