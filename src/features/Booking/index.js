import React from "react";
import { Section } from "../../common/Section";
import { Article, StyledLink, Text, See } from "./styled";
import image from "../../common/Banner/images/foto5.jpg";
import { toTrucks, toTrolley, toAccommodation } from "../../routes";
import Banner from "../../common/Banner";

const Booking = () => {
  return (
    <>
      <Banner vertical={true} inset={"Lorem ipsum "} />
      <Section
        title={"Lorem Ipsum"}
        body={
          <Article>
            <StyledLink to={toTrolley()} foto={image}>
              <See>lorem ipsum </See>
              <Text>Lorem</Text>
            </StyledLink>
            <StyledLink to={toTrucks()} foto={image}>
              <See>lorem ipsum </See>
              <Text>Ipsum</Text>
            </StyledLink>
            <StyledLink to={toAccommodation()} foto={image}>
              <See>lorem ipsum </See>
              <Text>Dolor</Text>
            </StyledLink>
          </Article>
        }
      />
    </>
  );
};

export default Booking;
