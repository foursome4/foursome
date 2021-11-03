import { IMembersGroupRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  username: string;
  id_user: string;
  role: string;
  status: string;
  id_group: string;
}

class CreateMemberGroupUseCase {
  constructor(private membersGroupsRepository: IMembersGroupRepository) {
    ("");
  }

  execute({ username, id_user, role, status, id_group }: IRequest): void {
    const membersGroupAlreadyExists =
      this.membersGroupsRepository.findByName(username);

    if (membersGroupAlreadyExists) {
      throw new Error("Member of Group Already Exists! ");
    }
    this.membersGroupsRepository.create({
      username,
      id_user,
      role,
      status,
      id_group,
    });
  }
}

export { CreateMemberGroupUseCase };
