import React from "react";
import { StyledArticle, Title } from "./styled";

export const Article = ({ title, body }) => (
  <StyledArticle>
    <Title>{title}</Title>
    {body}
  </StyledArticle>
);
