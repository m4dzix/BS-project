import React from "react";
import { StyledSection, Title } from "./styled";

export const Section = ({ title, body }) => (
  <StyledSection>
    <Title>{title}</Title>
    {body}
  </StyledSection>
);
