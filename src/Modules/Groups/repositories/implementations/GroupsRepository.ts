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
    idAccount,
    username,
    avatarUser
  }){}
  async update({ }){}

  list(){  }

  async delete({id}) {
    await collections.groups.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

  
}

export { GroupsRepository };
