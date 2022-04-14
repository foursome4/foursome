import { IRecuperationRepository } from "../../repositories/IRecuperationRepository";


interface IRequest {
  email: string;
  code: string;
}

class CreateRecuperationUseCase {
  constructor(private RecuperationRepository: IRecuperationRepository) {
    " ";
  }
  
  async execute({code, email }: IRequest): Promise<void> {

      await this.RecuperationRepository.create({
        code, email
      });

  }
}

export { CreateRecuperationUseCase };
