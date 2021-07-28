import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginStyled, Text, UserIcon } from "./styled";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { isAuthenticated } = useAuth0();
  return !isAuthenticated ? (
    <>
      <LoginStyled onClick={() => loginWithRedirect()}>
        <Text>Log in</Text>
        <UserIcon />
      </LoginStyled>
    </>
  ) : (
    <>
      <LoginStyled onClick={() => logout()}>
        <Text>Log out</Text>
        <UserIcon />
      </LoginStyled>
    </>
  );
};

export default LoginButton;
