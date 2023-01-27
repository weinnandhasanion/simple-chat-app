import { Box, Container, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";
import { useRouteGuard } from "../../hooks/useRouteGuard";

const fields = [
  {
    label: "Name",
    name: "name",
    value: "name",
  },
  {
    label: "Email",
    name: "email",
    value: "email",
    type: "email",
  },
  {
    label: "Username",
    name: "username",
    value: "username",
  },
  {
    label: "Password",
    name: "password",
    value: "password",
    type: "password",
  },
  {
    label: "Confirm password",
    name: "confirm_password",
    value: "confirm_password",
    type: "password",
  },
];

export const Register = () => {
  const [registerForm, setRegisterForm] = useState({
    username: "",
    password: "",
    confirm_password: "",
    name: "",
    email: "",
  });
  useRouteGuard();

  const handleFormChange = (e) =>
    setRegisterForm((form) => ({ ...form, [e.target.name]: e.target.value }));

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        display="flex"
        p="5rem"
        flexDirection="column"
        onSubmit={handleFormSubmit}
      >
        <Typography
          sx={{ textAlign: "center", marginBlockEnd: "1rem" }}
          variant="h4"
          component="h2"
        >
          Simple Chat App
        </Typography>

        {fields.map(({ value, ...rest }) => (
          <TextField
            key={value}
            sx={{ marginBottom: "1rem" }}
            value={registerForm[value]}
            onChange={handleFormChange}
            {...rest}
          />
        ))}

        <Button variant="contained" type="submit">
          Register
        </Button>
      </Box>
    </Container>
  );
};
