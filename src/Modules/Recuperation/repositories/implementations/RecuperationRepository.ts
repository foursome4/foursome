import { Recuperation } from "../../models/Recuperation";
import { IRecuperationRepository, IRecuperationDTO } from "../IRecuperationRepository";
import { collections } from '../../../../../services/database.service';
import { v4 as uuidv4 } from "uuid";

class RecuperationRepository implements IRecuperationRepository {
  private recuperation: Recuperation[];

  private static INSTANCE: RecuperationRepository;

  private constructor() {
    this.recuperation = [];
  }

  public static getInstance(): RecuperationRepository {
    if (!RecuperationRepository.INSTANCE) {
      RecuperationRepository.INSTANCE = new RecuperationRepository();
    }

    return RecuperationRepository.INSTANCE;
  }

  
    async create({ code, email }: IRecuperationDTO) {
      const account: Recuperation = new Recuperation();
      const _id = uuidv4()
      
        Object.assign(account, {
          _id, id: _id, code, email,created_at: new Date(),
        });
        this.recuperation.push(account);
        
        await collections.recuperation.insertOne(account).then((result) => {
          console.log(result) 
        }).catch(error => {
          console.log(error)
        })
          }
    
  list(): Recuperation[] {
    return this.recuperation;
  }

  async update({ }){}

  async delete({id}) {
    await collections.recuperation.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

}

export { RecuperationRepository };

