import React, { useState } from "react";
import { LoginStyled, Text, UserIcon } from "./styled";
import LoginField from "./LoginField";

const Login = () => {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);
  return (
    <>
      <LoginStyled onClick={toggleShow}>
        <Text>Login</Text>
        <UserIcon />
      </LoginStyled>
      <LoginField show={show} toggleShow={toggleShow} />
    </>
  );
};

export default Login;
