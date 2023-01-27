import { useStore } from "./useStore";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ROUTES } from "../utils/constants";

export const useRouteGuard = () => {
  const { loggedIn } = useStore((state) => ({ loggedIn: state.loggedIn }));
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const protectedRoutes = () => {
    if (["/login", "/register"].includes(pathname)) {
      return ROUTES.HOME;
    }
  };

  const unprotectedRoutes = () => {
    if (!["/login", "/register"].includes(pathname)) {
      return ROUTES.LOGIN;
    }
  };

  useEffect(() => {
    if (loggedIn) {
      navigate(protectedRoutes());
    } else {
      navigate(unprotectedRoutes());
    }
  }, [loggedIn]); // eslint-disable-line react-hooks/exhaustive-deps
};
