import React, { useState } from "react";
import { Overlay, Form, Text, Label, Input, Button } from "./styled";

const LoginField = ({ show, toggleShow }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  console.log(show);
  const onFormSubmit = (event) => {
    event.preventDefault();
    if (login === "Admin") {
      toggleShow();
      console.log("Udało się !");
    }
    return show;
  };

  return (
    <Overlay show={show}>
      <Form onSubmit={onFormSubmit}>
        <Text>Zaloguj się</Text>
        <Label>
          Login:{" "}
          <Input
            value={login}
            onChange={({ target }) => setLogin(target.value)}
            name="login"
            required
          />
        </Label>
        <Label>
          Password:
          <Input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            name="password"
            type="password"
            required
          />
        </Label>
        <Button>Log in</Button>
      </Form>
    </Overlay>
  );
};

export default LoginField;
