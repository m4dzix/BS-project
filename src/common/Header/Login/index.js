import React, { useState } from "react";
import { LoginStyled, Text } from "./style";
import LoginField from "./LoginField";

const Login = () => {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);
  return (
    <>
      <LoginStyled onClick={toggleShow}>
        <Text>Login</Text>
        <div>Q</div>
      </LoginStyled>
      <LoginField show={show} toggleShow={toggleShow} />
    </>
  );
};

export default Login;
