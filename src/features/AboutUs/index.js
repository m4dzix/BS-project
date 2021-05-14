import React from "react";
import { Section } from "../../common/Section";
import Slider from "../../common/Slider";
import Article from "./Article";

const AboutUs = () => (
  <>
    <Slider vertical={true} />
    <Section
      title={"Lorem ipsum dolor sit amount"}
      body={<Article />}
    ></Section>
  </>
);

export default AboutUs;
