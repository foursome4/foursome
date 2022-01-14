import { IForunsRepository } from "../../repositories/IForunsRepository";

interface IRequest {
  name: string;
  description: string;
  avatar: string;
  theme: string;
  privacity: string;
}

class CreateForunsUseCase {
  constructor(private forunRepository: IForunsRepository) {
    " ";
  }

  execute({ name, description, avatar, theme, privacity }: IRequest): void {
    this.forunRepository.findByName(name);


    this.forunRepository.create({
      name,
      description,
      avatar,
      theme,
      privacity
    });
  }
}

export { CreateForunsUseCase };
