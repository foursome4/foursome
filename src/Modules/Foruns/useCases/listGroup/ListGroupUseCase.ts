import { Group } from "../../models/Foruns";
import { IGroupsRepository } from "../../repositories/IForunsRepository";

class ListGroupUseCase {
  constructor(private groupsRepository: IGroupsRepository) {
    " ";
  }

  execute(): Group[] {
    const groups = this.groupsRepository.list();

    return groups;
  }
}

export { ListGroupUseCase };
