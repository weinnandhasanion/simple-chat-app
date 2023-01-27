import { useSocket } from "./hooks/useSocket";
import { Main } from "./components/Main";
import "./App.css";

function App() {
  useSocket();

  return <Main />;
}

export default App;
