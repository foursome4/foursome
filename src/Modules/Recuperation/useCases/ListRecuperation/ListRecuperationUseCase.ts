import { collections } from "../../../../../services/database.service";
import { IRecuperationRepository } from "../../repositories/IRecuperationRepository";

class ListRecuperationUseCase {
  constructor(private RecuperationRepository: IRecuperationRepository) {
    " ";
  }

  async execute() {
   const accounts = await collections.recuperation.find({});
   const accountsAll = accounts.toArray(function(err, result){
    console.log(result)
    return result;
   })
console.log(accountsAll)
        }
  }

export { ListRecuperationUseCase };
