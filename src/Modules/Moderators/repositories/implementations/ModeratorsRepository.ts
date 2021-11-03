import { Members } from "../../models/Moderators";
import {
  IMembersGroupDTO,
  IMembersGroupRepository,
} from "../IModeratorsRepository";

class MembersGroupRepository implements IMembersGroupRepository {
  private members: Members[];

  private static INSTANCE: MembersGroupRepository;

  private constructor() {
    this.members = [];
  }

  public static getInstance(): MembersGroupRepository {
    if (!MembersGroupRepository.INSTANCE) {
      MembersGroupRepository.INSTANCE = new MembersGroupRepository();
    }

    return MembersGroupRepository.INSTANCE;
  }

  create({
    username,
    id_user,
    role,
    status,
    id_group,
  }: IMembersGroupDTO): void {
    const member: Members = new Members();
    Object.assign(member, {
      username,
      id_user,
      role,
      status,
      id_group,
      created_at: new Date(),
    });

    this.members.push(member);
  }
  findByName(username: string): Members {
    const member = this.members.find((member) => member.username === username);
    return member;
  }
  list(): Members[] {
    return this.members;
  }
}

export { MembersGroupRepository };
