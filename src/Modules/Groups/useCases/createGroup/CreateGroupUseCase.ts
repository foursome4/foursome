import { IGroupsRepository } from "../../repositories/IGroupsRepository";

interface IRequest {
  name: string;
  description: string;
  avatar: string;
  cover: string;
  theme: string;
  privacity: string;
  idAccount: string;
  username: string;
  avatarUser: string;
}

class CreateGroupUseCase {
  constructor(private groupRepository: IGroupsRepository) {
    " ";
  }

  execute({ name, description, avatar, cover, theme, privacity, idAccount, username, avatarUser }: IRequest): void {
    this.groupRepository.findByName(name);


    this.groupRepository.create({
      name,
      description,
      avatar,
      cover,
      theme,
      privacity,
      idAccount,
      username,
      avatarUser
    });
  }
}

export { CreateGroupUseCase };
