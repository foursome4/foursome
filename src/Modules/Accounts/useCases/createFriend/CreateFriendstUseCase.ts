import { hash } from "bcrypt";
import { IFriendsRepository } from "../../repositories/IFriendsRepository";
import { Request, Response } from "express";

interface IRequest {
  idAccount: string;
  idFriend: string;
  type: string;
  status: string;
}

class CreateFriendsUseCase {
  constructor(private accountRepository: IFriendsRepository) {
    " ";
  }
  
  async execute({idAccount, idFriend, type, status  }: IRequest): Promise<void> {
    const findAccount = await this.accountRepository.findByIdAccount(idAccount);
    const findFriend = await this.accountRepository.findByIdFriend(idFriend);

      await this.accountRepository.create({
        idAccount, idFriend, type, status
      });

  }
}

export { CreateFriendsUseCase };
