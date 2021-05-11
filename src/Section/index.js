import React from "react";
import { StyledSection } from "./styled";

export const Section = ({ title, body }) => (
  <StyledSection>
    {title}
    {body}
  </StyledSection>
);
