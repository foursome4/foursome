import { collections } from "../../../../../services/database.service";
import { Payments } from "../../models/Payments";
import { IPaymentsRepository } from "../../repositories/IPaymentsRepository";

class ListPaymentsAllUseCase {
  constructor(private PaymentssRepository: IPaymentsRepository) {
    " ";
  }

  async execute() {
    
   const Payments = await collections.payments.find({});
   const PaymentsAll = Payments.toArray(function(err, result){
    console.log(result)
    return result;
   })
//console.log(PaymentsAll)
        }
  }

export { ListPaymentsAllUseCase };
