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
}

class CreateUsersOnlineUseCase {
  constructor(private UsersOnlineRepository: IUsersOnlineRepository) {
    ("");
  }

  async execute({idAccount, username, nickname, avatar, lat, long, equalCity}: IRequest): Promise<void>{

   const findByIdAccount = await collections.usersOnline.findOne({idAccount});

   if(findByIdAccount) {
      throw new Error("Email already exists!")
 
   }

   await this.UsersOnlineRepository.create({
      idAccount, username, nickname, avatar, lat, long, equalCity,
    });
  }
}

export { CreateUsersOnlineUseCase };
