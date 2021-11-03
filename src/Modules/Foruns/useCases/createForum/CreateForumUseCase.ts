import { IGroupsRepository } from "../../repositories/IForunsRepository";

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
    const groupAlreadyExists = this.groupRepository.findByName(name);

    if (groupAlreadyExists) {
      throw new Error("Group Already Exists");
    }
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
