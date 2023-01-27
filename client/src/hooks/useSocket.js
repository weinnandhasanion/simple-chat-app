import { useEffect } from "react";
import io from "socket.io-client";
import { SERVER_URL } from "../utils/constants";

export const useSocket = () => {
  useEffect(() => {
    const socket = io(SERVER_URL, { transports: ["websocket"] });
    socket.on("connect", () => console.log("connected to socket"));

    return () => {
      socket.disconnect();
    };
  }, []);
};
