import { collections } from "../../../../../services/database.service";
import { IUsersOnlineRepository } from "../../repositories/IUsersOnlineRepository";

interface IRequest {
  idAccount: string;
  username: string;
  type: string;
  nickname: string;
  avatar: string;
  relationship: string;
  lat: string;
  long: string;
  city: string;
  uf: string;
  actualCity: string;
  actualUf: string;
  equalCity: boolean;
  plane: boolean;
  emoji: boolean;
  song: boolean;
  invisible: boolean;
}

class CreateUsersOnlineUseCase {
  constructor(private UsersOnlineRepository: IUsersOnlineRepository) {
    ("");
  }

  async execute({idAccount, username, type, nickname, avatar, relationship, lat, long, city, uf, actualCity, actualUf, equalCity, plane, emoji, song, invisible}: IRequest): Promise<void>{

   const findByIdAccount = await collections.usersOnline.findOne({idAccount});

   if(findByIdAccount) {
      throw new Error("Email already exists!")
 
   }

   await this.UsersOnlineRepository.create({
      idAccount, username, type, nickname, avatar, relationship, lat, long, city, uf, actualCity, actualUf, equalCity, plane, emoji, song, invisible
    });
  }
}

export { CreateUsersOnlineUseCase };
