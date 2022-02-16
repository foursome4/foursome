import { collections } from "../../../../../services/database.service";
import { Informations } from "../../models/Informations";
import { IInformationsRepository } from "../../repositories/IInformationsRepository";

class ListInformationsUseCase {
  constructor(private InformationsRepository: IInformationsRepository) {
    " ";
  }

  async execute() {
    const informations = await collections.informations.find({});
   const informationsAll = informations.toArray(function(err, result){
    console.log(result)
    return result;
   })
//console.log(informationsAll)
        }
  }

export { ListInformationsUseCase };
