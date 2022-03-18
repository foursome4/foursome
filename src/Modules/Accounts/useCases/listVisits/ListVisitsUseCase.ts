import { collections } from "../../../../../services/database.service";
import { Visits } from "../../models/Visits";
import { IVisitsRepository } from "../../repositories/IVisitsRepository";

class ListVisitsUseCase {
  constructor(private VisitsRepository: IVisitsRepository) {
    " ";
  }

  async execute() {
   const Visits = await collections.visits.find({});
   const VisitsAll = Visits.toArray(function(err, result){
    console.log(result)
    return result;
   })
  //console.log(VisitsAll)
        }
  }

export { ListVisitsUseCase };
