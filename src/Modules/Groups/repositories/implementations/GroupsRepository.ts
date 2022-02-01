import { Group } from "../../models/Group";
import { ICreateGroupDTO, IGroupsRepository } from "../IGroupsRepository";
import { collections } from '../../../../../services/database.service';
import { v4 as uuidv4 } from 'uuid'

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
    cover,
    theme,
    privacity,
  }: ICreateGroupDTO) {
    const group: Group = new Group();
    const _id = uuidv4()
    Object.assign(group, {
      _id, id: _id,
      name,
      description,
      avatar,
      cover,
      theme,
      privacity,
      created_at: new Date()
    });

    this.groups.push(group);
    console.log(group)
    await collections.groups.insertOne(group).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

  list(){  }
}

export { GroupsRepository };
