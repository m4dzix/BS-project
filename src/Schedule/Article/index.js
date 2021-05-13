import React, { useState } from "react";
import { StyledArticle, Wrapper, Title, Button } from "./styled";

export const Article = ({ title, body }) => {
  const [hide, setHide] = useState(false);
  const toggleHide = () => setHide(!hide);
  console.log(hide);
  return (
    <StyledArticle>
      <Title>
        <Button onClick={toggleHide}>+</Button>
        {title}
      </Title>
      {hide ? <Wrapper>{body}</Wrapper> : null}
    </StyledArticle>
  );
};
