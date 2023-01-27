import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ROUTES } from "../../utils/constants";
import { Header } from "../Header";
import { Home } from "../Home";
import { Login } from "../Login";
import { Register } from "../Register";

export const Main = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={ROUTES.HOME} exact element={<Home />} />
        <Route path={ROUTES.LOGIN} exact element={<Login />} />
        <Route path={ROUTES.REGISTER} exact element={<Register />} />
        <Route path={ROUTES.MESSAGES} exact element={<></>} />
      </Routes>
    </Router>
  );
};
