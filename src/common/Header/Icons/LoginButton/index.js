import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginStyled, Text, UserIcon } from "./styled";
import { User } from "@styled-icons/heroicons-outline/User";
import { LogOut } from "@styled-icons/boxicons-regular/LogOut";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <LoginStyled
        onClick={!isAuthenticated ? () => loginWithRedirect() : () => logout()}
      >
        <Text>Log {!isAuthenticated ? " in" : "out"}</Text>
        <UserIcon>{!isAuthenticated ? <User /> : <LogOut />}</UserIcon>
      </LoginStyled>
    </>
  );
};

export default LoginButton;
