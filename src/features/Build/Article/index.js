import React from "react";
import image from "../../../common/Banner/images/foto5.jpg";
import { StyledArticle, Text, Image } from "./styled";

const Article = ({ second }) => (
  <StyledArticle>
    <Image foto={image}></Image>
    <Image foto={image}></Image>
    <Image last foto={image}></Image>
    <Text second={second}>
      {" "}
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet."
    </Text>
  </StyledArticle>
);

export default Article;
