import React, { useState } from "react";
import {
  StyledArticle,
  Wrapper,
  Title,
  Button,
  ChevronDownStyled,
  Icon,
} from "./styled";

export const Article = ({ title, icon, body }) => {
  const [hide, setHide] = useState(true);
  const toggleHide = () => setHide(!hide);
  console.log(icon);
  return (
    <StyledArticle>
      <Button onClick={toggleHide}>
        <Title>
          {title} {!!icon ? <Icon src={icon} alt={icon} /> : null}
        </Title>
        <ChevronDownStyled hide={hide}></ChevronDownStyled>
      </Button>
      <Wrapper hide={hide}>{body}</Wrapper>
    </StyledArticle>
  );
};
