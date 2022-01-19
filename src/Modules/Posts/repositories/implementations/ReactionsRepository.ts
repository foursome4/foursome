import { Reactions } from "../../models/Reactions";
import { IReactionsDTO, IReactionsRepository } from "../IReactionsRepository";
import {v4 as uuidv4} from 'uuid'
import { collections } from "../../../../../services/database.service";

class ReactionsRepository implements IReactionsRepository {
  private reactions: Reactions[];

  private static INSTANCE: ReactionsRepository;

  private constructor() {
    this.reactions = [];
  }

  public static getInstance(): ReactionsRepository {
    if (!ReactionsRepository.INSTANCE) {
      ReactionsRepository.INSTANCE = new ReactionsRepository();
    }

    return ReactionsRepository.INSTANCE;
  }

  async findById(idAccount: string): Promise<void>  {
    const findIdAccount = await collections.reactions.findOne({idAccount})
    if(findIdAccount) {
      throw new Error("idAccount already exists!")
    } 
  }

 async create({ 
    idAccount,
    idPost,
  }: IReactionsDTO) {
    const post: Reactions = new Reactions();
    const _id = uuidv4()
    Object.assign(post, {
      _id,
      id: _id,
      idAccount,
      idPost,
      created_at: new Date(),
    });

    this.reactions.push(post);
    console.log(post)

    await collections.reactions.insertOne(post).then((result) => {
      console.log(result) 
    }).catch(error => {
      console.log(error)
    })
  }
  list(): Reactions[] {
    return this.reactions;
  }
}

export { ReactionsRepository };
