import { IForunsRepository } from "../../repositories/IForunsRepository";

interface IRequest {
  name: string;
  description: string;
  avatar: string;
  theme: string;
}

class CreateForunsUseCase {
  constructor(private forunsRepository: IForunsRepository) {
    " ";
  }

  execute({ name, description, avatar, theme }: IRequest): void {
    this.forunsRepository.findByName(name);


    this.forunsRepository.create({
      name,
      description,
      avatar,
      theme,
    });
  }
}

export { CreateForunsUseCase };
