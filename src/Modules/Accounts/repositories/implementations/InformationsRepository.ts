import { Informations } from "../../models/Informations";
import { IInformationsRepository, IInformationsDTO } from "../IInformationsRepository";
import { collections } from '../../../../../services/database.service'
import { ObjectId } from "mongodb";

interface TypeId {
  _id: ObjectId;
}
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

  
    async update({ id, avatar, cover, relationship, city, uf, lookingFor}: IInformationsDTO) {
      const information: Informations = new Informations();
      Object.assign(information, {
        id,avatar, cover, relationship, city, uf, lookingFor
      });
  
      this.informations.push(information);
      console.log({ id, avatar, cover, relationship, city, uf, lookingFor})
    await collections.accounts.findOneAndUpdate(
      {id},{$set:
      {avatar: avatar,
      cover:cover, 
      relationship: relationship,
      city: city,
      uf: uf,
      lookingFor: lookingFor
      }},{upsert: true}).then((result) => {
        console.log(result)
      }).catch(error => {
        console.log("Erro: " + error)
      })
    }
    
}

export { InformationsRepository };
