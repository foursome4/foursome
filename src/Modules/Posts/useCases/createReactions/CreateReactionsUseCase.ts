import { IReactionsRepository } from "../../repositories/IReactionsRepository";

interface IRequest {
  idAccount: string;
  idPost: string;
}

class CreateReactionsUseCase {
  constructor(private ReactionsRepository: IReactionsRepository) {
    ("");
  }

  async execute({
    idAccount,
    idPost,
  }: IRequest): Promise<void>{

   await this.ReactionsRepository.create({
      idAccount,
    idPost,
    });
  }
}

export { CreateReactionsUseCase };
