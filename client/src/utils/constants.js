export const SERVER_URL = "http://localhost:8080";

// Routes
export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  MESSAGES: "/messages",
  REGISTER: "/register",
};

export const HEADER_AUTHENTICATED_LINKS = [
  {
    name: "Home",
    route: ROUTES.HOME,
  },
  {
    name: "Messages",
    route: ROUTES.MESSAGES,
  },
];

export const HEADER_UNAUTHENTICATED_LINKS = [
  {
    name: "Login",
    route: ROUTES.LOGIN,
  },
  {
    name: "Register",
    route: ROUTES.REGISTER,
  },
];
