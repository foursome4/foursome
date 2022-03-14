import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { collections } from "../../../../../services/database.service";
import { IAccountsRepository } from "../../repositories/IAccountsRepository";

interface IResponse {
          token: string;
          id: string;
          id2: string;
          username: string;
          email: string;
          phone: string;
          role: string;
          status: string;
          type: string;
          patron: string,
          online: boolean,
          date: Date;
}

interface IRequest {
  username: string;
  email: string;
  password: string;
}

class AuthenticateAccountUseCase {
  constructor(private accountRepository: IAccountsRepository) {
    " ";
  }
  
  async execute({email, username, password  }: IRequest): Promise<IResponse> {
      await this.accountRepository.session(email, username, password);

      
  const accountEmail = await collections.accounts.findOne({email});
      const accountUsername = await collections.accounts.findOne({username});
      let user;
      
      
      if(accountEmail) {
        user = accountEmail
       // console.log(user)
      } else if (accountUsername) {
        user = accountUsername
       // console.log(user)
      }
      
      const passwordCompare = await compare(password, user.password)
      //console.log(passwordCompare)

      if(!user ) {
        throw new Error("Username or email, incorrect!")
        }  else if(!passwordCompare) {
          throw new Error("password, incorrect!")
        }
        const userData = {
          id: user._id,
          id2: user.id,
          username: user.username,
          email: user.email,
          phone: user.phone,
          role: user.role,
          status: user.status,
          type: user.type,
          date: user.created_at,
          online: user.online,
          patron: user.patron
        }
        console.log(userData)

      const token = sign({
        id: user._id,
          id2: user.id,
          username: user.username,
          email: user.email,
          phone: user.phone,
          role: user.role,
          status: user.status,
          type: user.type,
          date: user.created_at,
          online: user.online,
          patron: user.patron
      }, "d64d7c8b83dd7212c25c3745933ee76e", 
      {
        subject: userData.id,
        expiresIn: "1d"
      });

      // console.log(token)
      // console.log(userData)

      return {
        id: user._id,
          id2: user.id,
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

export { AuthenticateAccountUseCase };