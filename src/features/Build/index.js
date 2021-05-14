import React from "react";
import Slider from "../../common/Slider";
import { Section } from "../../common/Section";
import Article from "./Article";

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
          <h1>See gallery</h1>
        </>
      }
    />
  </>
);

export default Build;
