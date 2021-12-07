import { IGroupsRepository } from "../../repositories/IGroupsRepository";

interface IRequest {
  name: string;
  description: string;
  avatar: string;
  theme: string;
  privacity: string;
}

class CreateGroupUseCase {
  constructor(private groupRepository: IGroupsRepository) {
    " ";
  }

  execute({ name, description, avatar, theme, privacity }: IRequest): void {
    this.groupRepository.findByName(name);


    this.groupRepository.create({
      name,
      description,
      avatar,
      theme,
      privacity,
    });
  }
}

export { CreateGroupUseCase };
