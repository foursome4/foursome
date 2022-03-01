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

  async findById(idAccount: string, idPost: string): Promise<void>  {
    const findIdAccount = await collections.reactions.findOne({idAccount, idPost})
    
        if(findIdAccount) {
          throw new Error("Email already exists!")
        } 
    }
 
 async create({ 
  idAccount, idPost, username, 
  }: IReactionsDTO) {
    const reactions: Reactions = new Reactions();
    const _id = uuidv4()
    Object.assign(reactions, {
      _id,
      id: _id,
      idAccount, idPost, username, 
      created_at: new Date(),
    });

    this.reactions.push(reactions);
    console.log(reactions)

    await collections.reactions.insertOne(reactions).then((result) => {
      console.log(result) 
    }).catch(error => {
      console.log(error)
    })
  }
  list(): Reactions[] {
    return this.reactions;
  }

  async delete({id}) {
    await collections.reactions.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }
}



export { ReactionsRepository };
