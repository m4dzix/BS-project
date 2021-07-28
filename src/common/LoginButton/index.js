import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Div } from "./styled";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();

  return (
    <Div>
      <button onClick={() => loginWithRedirect()}>Log in</button>
      <button onClick={() => logout()}>Logout</button>
    </Div>
  );
};

export default LoginButton;
