import { Members } from "../../models/Members";
import {
  IMembersGroupDTO,
  IMembersGroupRepository,
} from "../IMembersRepository";

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
    id_account,
    role,
    status,
    id_group,
  }: IMembersGroupDTO): void {
    const member: Members = new Members();
    Object.assign(member, {
      id_account,
      role,
      status,
      id_group,
      created_at: new Date(),
    });

    this.members.push(member);
  }
  findById(id_account: string): Members {
    const member = this.members.find((member) => member.id_account === id_account);
    return member;
  }
  list(): Members[] {
    return this.members;
  }
}

export { MembersGroupRepository };
