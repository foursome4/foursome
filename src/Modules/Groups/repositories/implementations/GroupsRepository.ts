import { Group } from "../../models/Group";
import { ICreateGroupDTO, IGroupsRepository } from "../IGroupsRepository";
import { collections } from '../../../../../services/database.service'

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

  findByName(name: any): Group {
    const group = this.groups.find((group) => group.name === name);
    try {
      const findName = collections.newsletter.findOne({ name })

      if (findName) {
        return
      }
    } catch {

    }
    return group;
  }

  async create({
    name,
    description,
    avatar,
    theme,
    privacity,
  }: ICreateGroupDTO) {
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
    console.log(group)
    await collections.groups.insertOne(group).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

  list(): Group[] {
    return this.groups;
  }
}

export { GroupsRepository };
