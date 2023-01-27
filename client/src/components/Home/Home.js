import { useRouteGuard } from "../../hooks/useRouteGuard";
import { useStore } from "../../hooks/useStore";

export const Home = () => {
  const { loggedIn } = useStore((state) => ({ loggedIn: state.loggedIn }));
  useRouteGuard();

  return <div></div>;
};
