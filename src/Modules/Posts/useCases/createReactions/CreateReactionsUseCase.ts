import { IReactionsRepository } from "../../repositories/IReactionsRepository";

interface IRequest {
  idAccount: string;
  avatar: string;
  username: string;
  nickname: string;
  idPost: string;
}

class CreateReactionsUseCase {
  constructor(private ReactionsRepository: IReactionsRepository) {
    ("");
  }

  async execute({
    idAccount, idPost, avatar, username, nickname, 
  }: IRequest): Promise<void>{

   await this.ReactionsRepository.create({
      idAccount, idPost, avatar, username, nickname, 
    });
  }
}

export { CreateReactionsUseCase };
