import { Foruns } from "../../models/Foruns";
import { ICreateForunsDTO, IForunsRepository } from "../IForunsRepository";
import { collections } from '../../../../../services/database.service';
import { v4 as uuidv4 } from 'uuid'

class ForunsRepository implements IForunsRepository {
  private foruns: Foruns[];

  private static INSTANCE: ForunsRepository;

  private constructor() {
    this.foruns = [];
  }

  public static getInstance(): ForunsRepository {
    if (!ForunsRepository.INSTANCE) {
      ForunsRepository.INSTANCE = new ForunsRepository();
    }

    return ForunsRepository.INSTANCE;
  }

  findByName(name: any): Foruns {
    const foruns = this.foruns.find((foruns) => foruns.name === name);
    try {
      const findName = collections.newsletter.findOne({ name })

      if (findName) {
        return
      }
    } catch {

    }
    return foruns;
  }

  async create({
    name, description, avatar, cover, theme, idAccount, username, nickname, avatarUser
  }: ICreateForunsDTO) {
    const foruns: Foruns = new Foruns();
    const _id = uuidv4()
    Object.assign(foruns, {
      _id, id: _id,
      name, description, avatar, cover, theme, idAccount, username, nickname, avatarUser,
      created_at: new Date()
    });

    this.foruns.push(foruns);
    console.log(foruns)
    await collections.foruns.insertOne(foruns).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

  list(){  }

  async update({ }){}

  async delete({id}) {
    await collections.foruns.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }
}

export { ForunsRepository };
