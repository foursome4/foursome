import { IMembersGroupRepository } from "../../repositories/IMembersRepository";

interface IRequest {
  id_account: string;
  role: string;
  status: string;
  id_group: string;
}

class CreateMemberGroupUseCase {
  constructor(private membersGroupsRepository: IMembersGroupRepository) {
    ("");
  }

  execute({ id_account, role, status, id_group }: IRequest): void {
    const membersGroupAlreadyExists =
      this.membersGroupsRepository.findById(id_account);

    if (membersGroupAlreadyExists) {
      throw new Error("Member of Group Already Exists! ");
    }
    this.membersGroupsRepository.create({
      id_account,
      role,
      status,
      id_group,
    });
  }
}

export { CreateMemberGroupUseCase };
