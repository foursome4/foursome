import { Socket, Server } from 'socket.io';
import { DefaultEventsMap } from "socket.io/dist/typed-events";

export interface ISocket extends Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap> {
  userId?: string;
}

export interface IServerIO extends
  Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any> { };