import { collections } from "../../../../../services/database.service";
import { DateReadLogin } from "../../models/DateReadLogin";
import { IDateReadLoginRepository } from "../../repositories/IDateReadLoginRepository";

class ListDateReadLoginUseCase {
  constructor(private DateReadLoginsRepository: IDateReadLoginRepository) {
    " ";
  }

  async execute() {
   const post = await collections.dateReadLogin.find({});
   const postAll = post.toArray(function(err, result){
    console.log(result)
    return result;
   })
//console.log(postAll)
        }
  }

export { ListDateReadLoginUseCase };
