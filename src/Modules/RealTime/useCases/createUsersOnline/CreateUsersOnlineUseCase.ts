import { collections } from "../../../../../services/database.service";
import { IUsersOnlineRepository } from "../../repositories/IUsersOnlineRepository";

interface IRequest {
  idAccount: string;
  username: string;
  nickname: string;
  avatar: string;
  lat: string;
  long: string;
  equalCity: boolean;
  plane: boolean;
  emoji: boolean;
  song: boolean;
}

class CreateUsersOnlineUseCase {
  constructor(private UsersOnlineRepository: IUsersOnlineRepository) {
    ("");
  }

  async execute({idAccount, username, nickname, avatar, lat, long, equalCity, plane, emoji, song}: IRequest): Promise<void>{

   const findByIdAccount = await collections.usersOnline.findOne({idAccount});

   if(findByIdAccount) {
      throw new Error("Email already exists!")
 
   }

   await this.UsersOnlineRepository.create({
      idAccount, username, nickname, avatar, lat, long, equalCity, plane, emoji, song,
    });
  }
}

export { CreateUsersOnlineUseCase };
