import { Members } from "../../models/Members";
import {
  IMembersDTO,
  IMembersRepository,
} from "../IMembersRepository";
import { v4 as uuidv4} from 'uuid'
import { collections } from "../../../../../services/database.service";

class MembersRepository implements IMembersRepository {
  private members: Members[];

  private static INSTANCE: MembersRepository;

  private constructor() {
    this.members = [];
  }

  public static getInstance(): MembersRepository {
    if (!MembersRepository.INSTANCE) {
      MembersRepository.INSTANCE = new MembersRepository();
    }

    return MembersRepository.INSTANCE;
  }

  async create({
    idAccount, idGroup, role, status, avatar, username, nickname
  }: IMembersDTO) {
    const member: Members = new Members();
    const _id = uuidv4()
    Object.assign(member, {
      _id, id: _id, idAccount, idGroup, role, status, avatar, username, nickname,
      created_at: new Date(),
    });

    this.members.push(member);
    console.log(member)
    await collections.members_groups.insertOne(member).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }
  findById(idAccount: string): Members {
    const member = this.members.find((member) => member.idAccount === idAccount);
    return member;
  }
  list(){}
}

export { MembersRepository };
