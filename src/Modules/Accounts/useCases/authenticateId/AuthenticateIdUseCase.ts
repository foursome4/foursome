import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { collections } from "../../../../../services/database.service";
import { IAccountsRepository } from "../../repositories/IAccountsRepository";

interface IResponse {
          token: string;
          id: string;
          username: string;
          email: string;
          phone: string;
          role: string;
          status: string;
          type: string;
          patron: string;
          online: boolean;
          date: Date;
}

interface IRequest {
  id: string;
}

class AuthenticateIdUseCase {
  constructor(private accountRepository: IAccountsRepository) {
    " ";
  }
  
  async execute({id}: IRequest): Promise<IResponse> {
     await this.accountRepository.sessionFast(id);

      
  const user = await collections.accounts.findOne({id});
 
      
      if(!user ) {
        throw new Error("Id, incorrect!")
        } 
        const userData = {
          id2: user._id,
          id: user.id,
          username: user.username,
          email: user.email,
          phone: user.phone,
          role: user.role,
          status: user.status,
          type: user.type,
          date: user.created_at,
          online: user.online,
          patron: user.patron,
        }
        console.log(userData)

      const token = sign({
          id: user.id,
          username: user.username,
          email: user.email,
          phone: user.phone,
          role: user.role,
          status: user.status,
          type: user.type,
          date: user.created_at,
          online: user.online,
          patron: user.patron,
      }, "d64d7c8b83dd7212c25c3745933ee76e", 
      {
        subject: userData.id,
        expiresIn: "1d"
      });

      // console.log(token)
      // console.log(userData)

      return {
        id: user.id,
          username: user.username,
          email: user.email,
          phone: user.phone,
          role: user.role,
          status: user.status,
          type: user.type,
          date: user.created_at,
          online: user.online,
          patron: user.patron,
          token:token
      }
  }
}

export { AuthenticateIdUseCase };