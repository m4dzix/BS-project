import React from "react";
import { Section } from "../../common/Section";
import { Article, Link, Text, See } from "./styled";
import image from "../../common/Banner/images/foto5.jpg";
import Banner from "../../common/Banner";

const Booking = () => {
  return (
    <>
      <Banner vertical={true} inset={"Lorem ipsum "} />
      <Section
        title={"Lorem Ipsum"}
        body={
          <Article>
            <Link foto={image}>
              <See>lorem ipsum </See>
              <Text>Lorem</Text>
            </Link>
            <Link foto={image}>
              <See>lorem ipsum </See>
              <Text>Ipsum</Text>
            </Link>
            <Link foto={image}>
              <See>lorem ipsum </See>
              <Text>Dolor</Text>
            </Link>
          </Article>
        }
      />
    </>
  );
};

export default Booking;
