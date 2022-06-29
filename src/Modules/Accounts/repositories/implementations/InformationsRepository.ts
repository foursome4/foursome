import { Informations } from "../../models/Informations";
import { IInformationsRepository, IInformationsDTO } from "../IInformationsRepository";
import { collections } from '../../../../../services/database.service';


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
        throw new Error("Informação existente em nosso banco de dados!")
      } 
  }

    async create({id, idAccount, nickname, avatar, cover, relationship, city, uf, país }: IInformationsDTO) {
      const informations: Informations = new Informations();
      
        Object.assign(informations, {
          id, _id: id, idAccount, nickname, avatar, cover, relationship, city, uf, país ,created_at: new Date(),
        });
        this.informations.push(informations);
        
        await collections.informations.insertOne(informations).then((result) => {
         // console.log(result)
        }).catch(error => {
          console.log(error)
        })
          }

  list(){ }

  async delete({idAccount}) {
    await collections.accounts.deleteOne(idAccount).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }
  update({    nickname, avatar, cover, relationship, city, uf, país}):void {}

  
}

export { InformationsRepository };

