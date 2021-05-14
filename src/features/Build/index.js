import React from "react";
import Slider from "../../common/Slider";
import { Section } from "../../common/Section";
import Article from "./Article";
import { toGallery } from "../../routes";
import { StyledLink } from "./styled";
const Build = () => (
  <>
    {" "}
    <Slider />
    <Section
      title={"Lorem Ipsum Dolor"}
      body={
        <>
          <Article />
          <Article second={true} />
          <StyledLink to={toGallery()}>See gallery</StyledLink>
        </>
      }
    />
  </>
);

export default Build;
