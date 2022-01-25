import { Informations } from "../../models/Informations";
import { IInformationsRepository, IInformationsDTO } from "../IInformationsRepository";
import { collections } from '../../../../../services/database.service';
import { v4 as uuidv4 } from "uuid";

class InformationsRepository implements IInformationsRepository {
  private informations: Informations[];

  private static INSTANCE: InformationsRepository;

  private constructor() {
    this.informations = [];
  }

  public static getInstance(): InformationsRepository {
    if (!InformationsRepository.INSTANCE) {
      InformationsRepository.INSTANCE = new InformationsRepository();
    }

    return InformationsRepository.INSTANCE;
  }

  
  async findById(idAccount: string): Promise<void> {
    const findIdAccount = await collections.informations.findOne({idAccount})
      if(findIdAccount) {
        throw new Error("Informação existente!")
      } 
  }

    async create({idAccount, nickname, avatar, cover, relationship, city, uf }: IInformationsDTO) {
      const informations: Informations = new Informations();
      const _id = uuidv4()
      
        Object.assign(informations, {
          _id, id: _id, idAccount, nickname, avatar, cover, relationship, city, uf ,created_at: new Date(),
        });
        this.informations.push(informations);
        
        await collections.informations.insertOne(informations).then((result) => {
          console.log(result)
        }).catch(error => {
          console.log(error)
        })
          }

  list(){ }
}

export { InformationsRepository };

