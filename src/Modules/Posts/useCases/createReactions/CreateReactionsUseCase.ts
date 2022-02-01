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

    const findEmail = await this.ReactionsRepository.findById(idAccount);

   await this.ReactionsRepository.create({
      idAccount, idPost, username,
    });
  }
}

export { CreateReactionsUseCase };
