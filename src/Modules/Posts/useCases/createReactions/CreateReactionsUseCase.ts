import { collections } from "../../../../../services/database.service";
import { IReactionsRepository } from "../../repositories/IReactionsRepository";

interface IRequest {
  idAccount: string;
  username: string;
  idPost: string;
}

class CreateReactionsUseCase {
  constructor(private ReactionsRepository: IReactionsRepository) {
    ("");
  }

  async execute({idAccount, idPost, username}: IRequest): Promise<void>{

   const findByIdAccount = await collections.reactions.findOne({idAccount, idPost});

   if(findByIdAccount) {
      throw new Error("Email already exists!")
 
   }

   await this.ReactionsRepository.create({
      idAccount, idPost, username,
    });
  }
}

export { CreateReactionsUseCase };
