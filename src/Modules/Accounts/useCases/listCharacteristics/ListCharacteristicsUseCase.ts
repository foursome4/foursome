import { collections } from "../../../../../services/database.service";
import { Characteristics } from "../../models/Characteristics";
import { ICharacteristicsRepository } from "../../repositories/ICharacteristicsRepository";

class ListCharacteristicsUseCase {
  constructor(private CharacteristicsRepository: ICharacteristicsRepository) {
    " ";
  }

  async execute() {
    const characteristics = await collections.characteristics.find({});
   const characteristicsAll = characteristics.toArray(function(err, result){
    console.log(result)
    return result;
   })
  // console.log(characteristicsAll)
        }
  }

export { ListCharacteristicsUseCase };
