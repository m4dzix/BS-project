import React from "react";
import { Subpage, StyledBanner, InformationField, Text, Foto } from "./styled";
import { arrayImages } from "./images/arrayImages";

const Banner = ({ vertical, inset }) => (
  <>
    <StyledBanner>
      {arrayImages.map((image) => (
        <Foto vertical={vertical} key={image} foto={image}></Foto>
      ))}
      <Subpage vertical={vertical}>{inset}</Subpage>
    </StyledBanner>
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

export default Banner;
