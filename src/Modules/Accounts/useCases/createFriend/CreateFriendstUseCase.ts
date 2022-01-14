import { hash } from "bcrypt";
import { IFriendsRepository } from "../../repositories/IFriendsRepository";
import { Request, Response } from "express";

interface IRequest {
  id_account: string;
  id_friend: string;
  type: string;
  status: string;
}

class CreateFriendsUseCase {
  constructor(private accountRepository: IFriendsRepository) {
    " ";
  }
  
  async execute({id_account, id_friend, type, status  }: IRequest): Promise<void> {
    const findAccount = await this.accountRepository.findByIdAccount(id_account);
    const findFriend = await this.accountRepository.findByIdFriend(id_friend);

      await this.accountRepository.create({
        id_account, id_friend, type, status
        
      });

  }
}

export { CreateFriendsUseCase };
