import { Characteristics } from "../../models/Characteristics";
import { ICharacteristicsRepository, ICharacteristicsDTO } from "../ICharacteristicsRepository";
import { collections } from '../../../../../services/database.service';

import { v4 as uuidv4 } from "uuid";

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
      const _id = uuidv4()
      Object.assign(characteristic, {
        _id,
        id: _id,
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
    
}

export { CharacteristicsRepository };
