import React from "react";
import { Section } from "../../common/Section";
import Banner from "../../common/Banner";
import Article from "./Article";

const AboutUs = () => {
  return (
    <>
      <Banner vertical={true} inset={"Lorem Ipsumdolor sit"} />
      <Section
        title={"Lorem ipsum dolor sit amount"}
        body={<Article />}
      ></Section>
    </>
  );
};

export default AboutUs;
