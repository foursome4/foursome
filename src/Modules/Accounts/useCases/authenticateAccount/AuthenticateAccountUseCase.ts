import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { collections } from "../../../../../services/database.service";
import { IAccountsRepository } from "../../repositories/IAccountsRepository";

interface IResponse {
  userData: Object;
  token: string;
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
      } else if (accountUsername) {
        user = accountUsername
      }
      
      const passwordCompare = await compare(password, user.password)

      if(!user ) {
        throw new Error("Username or email, incorrect!")
        }  else if(!passwordCompare) {
          throw new Error("password, incorrect!")
        }
        const userData = {
          id: user._id,
          nickname: user.nickname,
          username: user.username,
          email: user.email,
          phone: user.phone,
          role: user.role,
          status: user.status,
          type: user.type,
          date: user.created_at
        }

      const token = sign({
        userData,
      }, "d64d7c8b83dd7212c25c3745933ee76e", 
      {
        subject: userData.id,
        expiresIn: "1d"
      });

      console.log(token)
      console.log(userData)

      return {
        userData,
          token:token
      }
  }
}

export { AuthenticateAccountUseCase };
