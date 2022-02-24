import { Socket } from "socket.io";
import { stringify } from "uuid";
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
  avatar: string;
  username: string;
  nickname: string;
  created_at: string;
}

const users: RoomUser[] = [];
const usersOnline: UsersOline[] = [];
const messages: Messages[] = [];
const rooms: Rooms[] = [];


io.on("connection", (socket) => {
    console.log(`User Connection ${socket.id}`)
    console.log("Connection successfully established!");
  
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

  
    socket.on("message", (data) => {
      console.log(data);
      const message: Messages = {
        room: data.room,
        idAccount: data.idAccount,
        text: data.text,
        link: data.link,
        avatar: data.avatar,
        username: data.username,
        nickname: data.nickname,
        created_at: data.created_at
      }

      collections.message.insertOne({
        idRoom: data.room,
        idAccount: data.idAccount,
        text: data.text,
        link: data.link,
        avatar: data.avatar,
        username: data.username,
        nickname: data.nickname,
        created_at: data.created_at}
      )
      messages.push(message);

      socket.to(data.room).emit("message", message);
    });
  
    
    
    
    socket.on("userOnline", (data) => {

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



  
  //     collections.usersOnline.find().toArray(function(err, result){

  //       returnData(result)
  //      })

       
  //      function returnData(res) {
  //     //   console.log("dataResult")
  //     //   console.log(res)
  //     //  const userInOnline = res.filter(dataUser => (dataUser.idAccount === data.idAccount));
  //     //  console.log("userInOnline")
  //     //  console.log(userInOnline);
  //     //  console.log("onlineUsers")
  //     //  console.log(onlineUsers);

  //     //  userInOnline === "" ? collections.usersOnline.insertOne(onlineUsers) : console.log("Usuário ja cadastrado")
  //     console.log("data")
  //     console.log(data)
  //     console.log("onlineUsers")
  //     console.log(onlineUsers)

  // }
  
  

      
    })

    socket.emit("userOnline", usersOnline);
    console.log("usersOnline");
    console.log(usersOnline);
    
    
    socket.on("disconnect", () => {
      console.log("Disconnected user!", socket.id);
    });
  });


  function findMessages(room: string) {
    const messagesRoom = messages.filter((message) => message.room === room);
    return messagesRoom;
  }