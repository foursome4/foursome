import { IFollowersRepository } from "../../repositories/IFollowersRepository";

interface IRequest {
  idAccount: string;
  idFriend: string;
  type: string;
  status: string;
}

class CreateFollowersUseCase {
  constructor(private accountRepository: IFollowersRepository) {
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

export { CreateFollowersUseCase };
