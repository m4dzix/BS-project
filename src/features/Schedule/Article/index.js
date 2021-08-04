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
      <Title>
        <Button onClick={toggleHide}>
          <ChevronDownStyled hide={hide} />
        </Button>
        {title}
        {!!icon ? <Icon src={icon} alt={icon} /> : null}
      </Title>
      <Wrapper hide={hide}>{body}</Wrapper>
    </StyledArticle>
  );
};
