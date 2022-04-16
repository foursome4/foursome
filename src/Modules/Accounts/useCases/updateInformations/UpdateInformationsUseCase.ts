import { IInformationsRepository } from "../../repositories/IInformationsRepository";

interface IRequest {
  id: string;
  nickname: string;
  avatar: string;
  cover: string;
  relationship: string;
  city: string;
  uf: string;
 created_at: Date;
}

class UpdateInformationsUseCase {
  constructor(private informationsRepository: IInformationsRepository) {
    " ";
  }
  
  async execute({nickname, avatar, cover, relationship, city, uf }: IRequest): Promise<void> {
         await this.informationsRepository.update({
       nickname, avatar, cover, relationship, city, uf
      });

  }
}

export { UpdateInformationsUseCase };
