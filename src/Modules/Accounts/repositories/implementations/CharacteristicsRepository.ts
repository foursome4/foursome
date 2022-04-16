import { Characteristics } from "../../models/Characteristics";
import { ICharacteristicsRepository, ICharacteristicsDTO } from "../ICharacteristicsRepository";
import { collections } from '../../../../../services/database.service';


class CharacteristicsRepository implements ICharacteristicsRepository {
  private characteristics: Characteristics[];

  private static INSTANCE: CharacteristicsRepository;

  private constructor() {
    this.characteristics = [];
  }

  public static getInstance(): CharacteristicsRepository {
    if (!CharacteristicsRepository.INSTANCE) {
      CharacteristicsRepository.INSTANCE = new CharacteristicsRepository();
    }
    return CharacteristicsRepository.INSTANCE;
  }

    async findByIdAccount(id_account: string): Promise<void> {
      const findEmail = await collections.friends.findOne({id_account})
        if(findEmail) {
          throw new Error("Email already exists!")
        }   
    }
  
    async create({
      id,
      idAccount,
      birthDate,
      sex,
      sexualOption,
      education,
      sign,
      heigth,
      weight,
      physique,
      ethnicity,
      eyes,
      hair,
      tattos,
      smokes,
    }: ICharacteristicsDTO) {
      const characteristic: Characteristics = new Characteristics();
      Object.assign(characteristic, {
        id,
        _id: id,
        idAccount,
        birthDate,
        sex,
        sexualOption,
        education,
        sign,
        heigth,
        weight,
        physique,
        ethnicity,
        eyes,
        hair,
        tattos,
        smokes,
        created_at: new Date(),
      });
  
      this.characteristics.push(characteristic);
        //console.log(characteristic)
      await collections.characteristics.insertOne(characteristic).then((result) => {
       // console.log(result)
      }).catch(error => {
        console.log(error)
      })
    }
    list(){ }
    update({
      birthDate,
      sex,
      sexualOption,
      education,
      sign,
      heigth,
      weight,
      physique,
      ethnicity,
      eyes,
      hair,
      tattos,
      smokes}):void {}

      async delete({idAccount}) {
        await collections.characteristics.deleteOne(idAccount).then((result) => {
          console.log(result)
        }).catch(error => {
          console.log(error)
        })
      }
    
    
}

export { CharacteristicsRepository };
