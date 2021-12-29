import { Characteristics } from "../../models/Characteristics";
import { ICharacteristicsRepository, ICharacteristicsDTO } from "../ICharacteristicsRepository";
import { collections } from '../../../../../services/database.service'

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

  
    async create({ id_account, heigth, weight, physique, ethnicity, eyes, hair, tattos, smokes,}: ICharacteristicsDTO) {
      const characteristic: Characteristics = new Characteristics();
      Object.assign(characteristic, {
        id_account, heigth, weight, physique, ethnicity, eyes, hair, tattos, smokes, created_at: new Date(),
      });
  
      this.characteristics.push(characteristic);
      console.log(characteristic)
    await collections.characteristics.insertOne(characteristic).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
    }
    
  

  list(): Characteristics[] {
    return this.characteristics;
  }
}

export { CharacteristicsRepository };
