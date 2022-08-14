import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListUsersOnlineDistanceUseCase } from "./ListUsersOnlineDistanceUseCase";

class ListUsersOnlineDistanceController {
  constructor(private listPostseCase: ListUsersOnlineDistanceUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const latitude = req.params;
    const longitude = req.params;

    await collections.usersOnline.find({}).sort( { created_at: -1 } ).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        let onlineUsers = []
        result.forEach((userLocation) => {

          let number;
          function getDistanceFromLatLonInKm(myLat, myLong, latFriend, longFriend) {
            var deg2rad = function(deg) { return deg * (Math.PI / 180); },
            R = 6371,
            dLat = deg2rad(latFriend - myLat),
            dLng = deg2rad(myLong - longFriend),
            a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
            + Math.cos(deg2rad(myLat))
            * Math.cos(deg2rad(latFriend))
            * Math.sin(dLng / 2) * Math.sin(dLng / 2),
            c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                  const distanceCalc = (R * c).toString();    
                  if(distanceCalc.includes("00.")) {
                      number = (((R * c *1000)/1000).toFixed())
                  } else{
                      number = (((R * c *1000)/1000).toFixed())
                  }
                  const dados = {
                      distanceKm: parseInt(number),
                      id: userLocation.id,
                      idAccount: userLocation.idAccount,
                      avatar: userLocation.avatar,
                      nickname: userLocation.nickname,
                      city: userLocation.city,
                      equalCity: userLocation.equalCity, 
                      type:userLocation.type,
                      plane: userLocation.plane,
                      emoji: userLocation.emoji,
                      song: userLocation.song,
                      invisible: userLocation.invisible,
                      online: true
                  }
                  onlineUsers.push(dados)
          }

          getDistanceFromLatLonInKm(latitude.latitude, longitude.longitude, userLocation.lat, userLocation.long)

  })

        res.status(200).json(onlineUsers)
      }
      return result;
     })

  }
}

export { ListUsersOnlineDistanceController };
