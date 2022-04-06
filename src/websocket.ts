import { Socket } from "socket.io";
import { stringify } from "uuid";
import { v4 as uuidv4 } from "uuid";
import { collections } from "../services/database.service";
import { io } from "./http";

interface Rooms {
  room: string;
  idAccount: string;
  idFriend: string;
}

interface RoomUser  {
  socketId: string;
  room: string;
  idAccount: string;
  idFriend: string;
}
interface UsersOline  {
  socketId: string;
  idAccount: string;
  username: string;
  nickname: string;
  avatar: string;
  lat: number;
  long: number;
  equalCity: boolean;
}

interface Messages {
  room: string;
  idAccount: string;
  text: string;
  link: string;
  type: string;
  avatar: string;
  username: string;
  nickname: string;
  created_at: string;
  id: string;
}

const users: RoomUser[] = [];
const usersOnline: UsersOline[] = [];
const messages: Messages[] = [];
const rooms: Rooms[] = [];


io.on("connection", (socket) => {
    console.log(`User Connection ${socket.id}`)
    console.log("Connection successfully established!");



    // Recebendo e listando users online
    socket.on("userOnline", (data) => {

      console.log(`${data.idAccount}, acabou de entrar`)

      const onlineUsers: UsersOline = {
       idAccount: data.idAccount,
       username: data.username,
       nickname: data.nickname,
       avatar: data.avatar,
       lat: data.lat,
       long: data.long,
       equalCity: data.equalCity,
       socketId: socket.id
     }

     const userOnlineNew = usersOnline.find(user => user.idAccount === data.idAccount);

     if(userOnlineNew) {
       userOnlineNew.socketId = socket.id
     } else {
       usersOnline.push(onlineUsers)
     }
     
     socket.emit("userOnline", usersOnline);
     console.log("usersOnline");
     console.log(usersOnline);

     collections.usersOnline.insertOne({
      idAccount: data.idAccount,
      username: data.username,
      lat: data.lat,
      long: data.long,
      nickname: data.nickname,
      equalCity: data.aqualCity,
      created_at: new Date(),
      id: uuidv4()}
    )
   })

   

    //Fim dos users online
  
    socket.on("select_room", (data, callback)=> {
      console.log(data)
      socket.join(data.room);
      console.log("Usuário entrou na sala: " + data.room);

      const verifyRooms = rooms.find(room => room.room === data.room);

      if(verifyRooms) {
        console.log("sala ja existe")
      } else {
        rooms.push({
          room: data.room,
          idAccount: data.idAccount,
          idFriend: data.idFriend
        })
      }



      const userInRoom = users.find(user => user.idAccount === data.idAccount);

      if(userInRoom) {
        userInRoom.socketId = socket.id
      } else {
        users.push({
          room: data.room,
          idAccount: data.idAccount,
          socketId: socket.id,
          idFriend: data.idFriend
        })
      }

        const messagesRoom = findMessages(data.room)
      callback(messagesRoom)

    });

    socket.emit("rooms", rooms);

    console.log("rooms")
    console.log(rooms)
    console.log(rooms.length)
  
    socket.on("message", (data) => {
      console.log(data);
      const message: Messages = {
        room: data.room,
        idAccount: data.idAccount,
        text: data.text,
        link: data.link,
        type: data.type,
        avatar: data.avatar,
        username: data.username,
        nickname: data.nickname,
        created_at: data.created_at,
        id: data.id
      }

      collections.message.insertOne({
        idRoom: data.room,
        idAccount: data.idAccount,
        text: data.text,
        link: data.link,
        type: data.type,
        avatar: data.avatar,
        username: data.username,
        nickname: data.nickname,
        created_at: data.created_at,
        id: data.id
      })
      messages.push(message);

      // if(rooms.length === 0) {
      //   collections.notifications.insertOne({
      //     idAccount: data.idAccount,
      //     text: `${data.idAccount}, enviou uma nova mensagem.`,
      //     idFriend: rooms. === data.idAccount ? rooms.idFriend : data.idAccount,
      //     avatar: data.avatar,
      //     username: data.username,
      //     nickname: data.nickname,
      //     created_at: data.created_at,
      //     id: uuidv4()}
      //   )
      // }

      socket.to(data.room).emit("message", message);
    });
      
    socket.on("removeUserOnline", (data) => {
      console.log(data.idAccount);
      let removedUsers = usersOnline.findIndex(user => user.idAccount === data.idAccount);
      if(removedUsers >= 0) {
        let newUsersOnline = usersOnline;
        newUsersOnline.splice(removedUsers, 1);
        usersOnline.push(...newUsersOnline)
      }
      console.log(`User desconectado. Offline ${data.idAccount}`)
      console.log(usersOnline)
    })

    socket.on("disconnect", () => {
      console.log("Disconnected user!", socket.id);
    });
  });


  function findMessages(room: string) {
    const messagesRoom = messages.filter((message) => message.room === room);
    return messagesRoom;
  }