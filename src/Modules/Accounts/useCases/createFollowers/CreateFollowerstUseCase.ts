import { IFollowersRepository } from "../../repositories/IFollowersRepository";

interface IRequest {
  id_account: string;
  id_friend: string;
  type: string;
  status: string;
}

class CreateFollowersUseCase {
  constructor(private accountRepository: IFollowersRepository) {
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

export { CreateFollowersUseCase };
