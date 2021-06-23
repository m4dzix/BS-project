import React from "react";
import Banner from "../../common/Banner";
import { Section } from "../../common/Section";
import Article from "./Article";
import { toGallery } from "../../routes";
import { StyledLink, ArrowRight } from "./styled";

const Build = () => (
  <>
    {" "}
    <Banner vertical={true} inset={`scing elitr, sed diam nonumy `} />
    <Section
      title={"Lorem Ipsum Dolor"}
      body={
        <>
          <Article />
          <Article second={true} />
          <StyledLink to={toGallery()}>
            Galerie <ArrowRight />
          </StyledLink>
        </>
      }
    />
  </>
);

export default Build;
