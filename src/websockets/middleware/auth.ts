/* eslint-disable @typescript-eslint/ban-types */
import jwt from "jsonwebtoken";
import { ISocket } from "../socket.interface";

export default function verifyUserID(socket: ISocket, next: Function) {
  try {
    console.log("id");
    const secret = "d64d7c8b83dd7212c25c3745933ee76e";
    const decode = jwt.verify(socket.handshake.auth.userToken, secret);
    const { id }: any = decode;
    // eslint-disable-next-line no-param-reassign
    socket.userId = id;
    return next();
  } catch (err) {
    return next(new Error("Unauthorized User"));
  }
}
