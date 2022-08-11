import { collections } from "../../../../../services/database.service";
import { PeriodTest } from "../../models/PeriodTest";
import { IPeriodTestRepository } from "../../repositories/IPeriodTestRepository";

class ListPeriodTestUseCase {
  constructor(private PeriodTestRepository: IPeriodTestRepository) {
    " ";
  }

  async execute() {
   const PeriodTest = await collections.periodTest.find({});
   const PeriodTestAll = PeriodTest.toArray(function(err, result){
    console.log(result)
    return result;
   })
  //console.log(PeriodTestAll)
        }
  }

export { ListPeriodTestUseCase };
