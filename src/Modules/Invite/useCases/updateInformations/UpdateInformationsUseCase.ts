import { IInformationsRepository } from "../../repositories/IInformationsRepository";

interface IRequest {
  id: string;
  avatar: string;
  cover: string;
  relationship: string;
  city: string;
  uf: string;
  lookingFor: string;
}

class UpdateInformationsUseCase {
  constructor(private accountRepository: IInformationsRepository) {
    " ";
  }

  execute({id, avatar, cover, relationship, city, uf, lookingFor }: IRequest): void {


    this.accountRepository.update({
      id, avatar, cover, relationship, city, uf, lookingFor
    });
  }
}

export { UpdateInformationsUseCase };
