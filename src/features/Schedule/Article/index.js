import React, { useState } from "react";
import {
  StyledArticle,
  Wrapper,
  Title,
  Button,
  ChevronDownStyled,
} from "./styled";

export const Article = ({ title, body }) => {
  const [hide, setHide] = useState(true);
  const toggleHide = () => setHide(!hide);
  return (
    <StyledArticle>
      <Title>
        <Button onClick={toggleHide}>
          <ChevronDownStyled hide={hide} />
        </Button>
        {title}
      </Title>
      <Wrapper hide={hide}>{body}</Wrapper>
    </StyledArticle>
  );
};
