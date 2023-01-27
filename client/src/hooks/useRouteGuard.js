import { useStore } from "./useStore";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ROUTES } from "../utils/constants";

export const useRouteGuard = () => {
  const { loggedIn } = useStore((state) => ({ loggedIn: state.loggedIn }));
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedIn) {
      navigate(ROUTES.LOGIN);
    }
  }, [loggedIn]); // eslint-disable-line react-hooks/exhaustive-deps
};
