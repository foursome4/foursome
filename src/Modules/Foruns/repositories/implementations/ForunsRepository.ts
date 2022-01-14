import { Foruns } from "../../models/Foruns";
import { ICreateForunsDTO, IForunsRepository } from "../IForunsRepository";
import { collections } from '../../../../../services/database.service'

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
    const forun = this.foruns.find((forun) => forun.name === name);
    try {
      const findName = collections.newsletter.findOne({ name })

      if (findName) {
        return
      }
    } catch {

    }
    return forun;
  }

  async create({
    name,
    description,
    avatar,
    theme,
    privacity,
  }: ICreateForunsDTO) {
    const forun: Foruns = new Foruns();
    Object.assign(forun, {
      name,
      description,
      avatar,
      theme,
      privacity,
      created_at: new Date()
    });

    this.foruns.push(forun);
    console.log(forun)
    await collections.foruns.insertOne(forun).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

  list(): Foruns[] {
    return this.foruns;
  }
}

export { ForunsRepository };
