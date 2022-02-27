import { IForunsRepository } from "../../repositories/IForunsRepository";

interface IRequest {
  name: string;
  description: string;
  avatar: string;
  cover: string;
  theme: string;
  idAccount: string;
  username: string;
  nickname: string;
  avatarUser: string;
}

class CreateForunsUseCase {
  constructor(private forunsRepository: IForunsRepository) {
    " ";
  }

  execute({ name, description, avatar, cover, theme, idAccount, username,nickname,  avatarUser }: IRequest): void {
    this.forunsRepository.findByName(name);


    this.forunsRepository.create({
      name, description, avatar, cover, theme, idAccount, username, nickname, avatarUser
    });
  }
}

export { CreateForunsUseCase };
