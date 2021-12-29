import { Group } from "../../models/Group";
import { IGroupsRepository } from "../../repositories/IGroupsRepository";

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
