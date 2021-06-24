import React, { useState } from "react";
import { Overlay, Form, XIcon, Text, Label, Input, Button } from "./styled";

const LoginField = ({ show, toggleShow }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [IncorrectData, setIncorrectData] = useState(false);
  const onFormSubmit = (event) => {
    event.preventDefault();
    if (login === "Admin" && password === "123") {
      toggleShow();
      console.log("Udało się !");
    } else {
      setLogin("");
      setPassword("");
      setIncorrectData(true);
    }
  };

  return (
    <Overlay show={show}>
      <Form onSubmit={onFormSubmit}>
        <XIcon onClick={toggleShow} />
        <Text>Zaloguj się</Text>
        <Label>
          Login:{" "}
          <Input
            IncorrectData={IncorrectData}
            value={login}
            onChange={({ target }) => setLogin(target.value)}
            name="login"
            required
          />
        </Label>
        <Label>
          Password:
          <Input
            IncorrectData={IncorrectData}
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            name="password"
            type="password"
            required
          />
        </Label>
        <Button>Log in</Button>
        <Text IncorrectData={IncorrectData}>
          {IncorrectData ? " Wrong login or password" : null}
        </Text>
      </Form>
    </Overlay>
  );
};

export default LoginField;
