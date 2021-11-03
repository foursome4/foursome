import { Group } from "../../models/Group";
import { ICreateGroupDTO, IGroupsRepository } from "../IGroupsRepository";

class GroupsRepository implements IGroupsRepository {
  private groups: Group[];

  private static INSTANCE: GroupsRepository;

  private constructor() {
    this.groups = [];
  }

  public static getInstance(): GroupsRepository {
    if (!GroupsRepository.INSTANCE) {
      GroupsRepository.INSTANCE = new GroupsRepository();
    }

    return GroupsRepository.INSTANCE;
  }

  create({
    name,
    description,
    avatar,
    theme,
    privacity,
  }: ICreateGroupDTO): void {
    const group: Group = new Group();
    Object.assign(group, {
      name,
      description,
      avatar,
      theme,
      privacity,
      created_at: new Date(),
    });

    this.groups.push(group);
  }
  findByName(name: string): Group {
    const group = this.groups.find((group) => group.name === name);
    return group;
  }
  list(): Group[] {
    return this.groups;
  }
}

export { GroupsRepository };
