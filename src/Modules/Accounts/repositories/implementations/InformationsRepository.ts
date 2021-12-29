import { Informations } from "../../models/Informations";
import { IInformationsRepository, IInformationsDTO } from "../IInformationsRepository";
import { collections } from '../../../../../services/database.service'

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

  
    async create({ id_account, avatar, status, relationship, signo, date_birth, orientation, education, city, uf,}: IInformationsDTO) {
      const information: Informations = new Informations();
      Object.assign(information, {
        id_account, avatar, status, relationship, signo, date_birth, orientation, education, city, uf, created_at: new Date(),
      });
  
      this.informations.push(information);
      console.log(information)
    await collections.informations.insertOne(information).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
    }
    
  

  list(): Informations[] {
    return this.informations;
  }
}

export { InformationsRepository };
