import "./App.css";
import io from "socket.io-client";

function App() {
  const connect = () => {
    const socket = io("http://localhost:8080", { transports: ["websocket"] });

    socket.on("connect", () => console.log("connected socket"));
  };

  return <button onClick={connect}>Connect to socket</button>;
}

export default App;
