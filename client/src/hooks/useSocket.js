import io from "socket.io-client";
import { SERVER_URL } from "../utils/constants";

export const useSocket = () => {
  const connect = () => io(SERVER_URL, { transports: ["websocket"] });

  return { connect };
};
