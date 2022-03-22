import { Visits } from "../../models/Visits";
import { IVisitsRepository, IVisitsDTO } from "../IVisitsRepository";
import { collections } from '../../../../../services/database.service';
import { v4 as uuidv4 } from "uuid";

class VisitsRepository implements IVisitsRepository {
  private visits: Visits[];

  private static INSTANCE: VisitsRepository;
  
  private constructor() {
    this.visits = [];
  }

  public static getInstance(): VisitsRepository {
    if (!VisitsRepository.INSTANCE) {
      VisitsRepository.INSTANCE = new VisitsRepository();
    }

    return VisitsRepository.INSTANCE;
  }

  async findByIdAccount(idAccount: string): Promise<void> {
    const findidAccount = await collections.visits.findOne({idAccount})
      if(findidAccount) {
        throw new Error("idAccount already exists!")
      } 
  }

  
    async create({ idAccount, username, idFriend}: IVisitsDTO) {
      const visits: Visits = new Visits();
      const _id = uuidv4();
      
        Object.assign(visits, {
          _id,
          id: _id,
          idAccount,
          username,
          idFriend,
          created_at: new Date(),
        });

        this.visits.push(visits);
        console.log(visits);
        await collections.visits.insertOne(visits).then((result) =>{ 
        //  console.log(result)
        }).catch(err => {
          console.log(err);
        })
          }

  list(){}

}


export { VisitsRepository };

