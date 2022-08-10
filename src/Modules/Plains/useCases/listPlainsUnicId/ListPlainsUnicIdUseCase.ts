import { collections } from "../../../../../services/database.service";
import { Plains } from "../../models/Plains";
import { IPlainsRepository } from "../../repositories/IPlainsRepository";

class ListPlainsUnicIdUseCase {
  constructor(private PlainssRepository: IPlainsRepository) {
    " ";
  }

  async execute() {
    
   const Plains = await collections.plains.find({});
   const PlainsAll = Plains.toArray(function(err, result){
    console.log(result)
    return result;
   })
//console.log(PlainsAll)
        }
  }

export { ListPlainsUnicIdUseCase };
