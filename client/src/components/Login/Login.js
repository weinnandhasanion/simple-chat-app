import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../hooks/useStore";
import { ROUTES } from "../../utils/constants";

export const Login = () => {
  const { loggedIn } = useStore((state) => ({ loggedIn: state.loggedIn }));
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (loggedIn) navigate(ROUTES.HOME);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Container maxWidth="sm">
      <Box display="flex" p="5rem" flexDirection="column">
        <Typography
          sx={{ textAlign: "center", marginBlockEnd: "1rem" }}
          variant="h4"
          component="h2"
        >
          Simple Chat App
        </Typography>
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          type="password"
          sx={{ marginBlock: "1rem" }}
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained">Log in</Button>
      </Box>
    </Container>
  );
};
