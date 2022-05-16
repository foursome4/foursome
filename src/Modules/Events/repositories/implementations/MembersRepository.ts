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
    idAccount, idEvent, role, status, username
   }: IMembersDTO) {
    const member: Members = new Members();
    const _id = uuidv4()
    Object.assign(member, {
      _id, id: _id, idAccount, idEvent, role, status, username,
      created_at: new Date(),
    });

    this.members.push(member);
    console.log(member)
    await collections.membersEvent.insertOne(member).then((result) => {
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

  async update({ }){}

  async delete({id}) {
    await collections.membersEvent.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }
}

export { MembersRepository };
