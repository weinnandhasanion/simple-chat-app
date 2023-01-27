import { useStore } from "../../hooks/useStore";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  HEADER_AUTHENTICATED_LINKS,
  HEADER_UNAUTHENTICATED_LINKS,
} from "../../utils/constants";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const [loggedIn, logout] = useStore((state) => [
    state.loggedIn,
    state.logout,
  ]);
  const navigate = useNavigate();
  const links = loggedIn
    ? HEADER_AUTHENTICATED_LINKS
    : HEADER_UNAUTHENTICATED_LINKS;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Simple Chat App
          </Typography>
          {links.map((link) => (
            <Button
              onClick={() => navigate(link.route)}
              key={link.name}
              color="inherit"
            >
              {link.name}
            </Button>
          ))}

          {loggedIn && (
            <Button color="error" variant="text" onClick={logout}>
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
