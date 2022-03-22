import { collections } from "../../../../../services/database.service";
import { NavigateUser } from "../../models/NavigateUser";
import { INavigateUserRepository } from "../../repositories/INavigateUserRepository";

class ListNavigateUserUnicUseCase {
  constructor(private NavigateUserRepository: INavigateUserRepository) {
    " ";
  }

  async execute() {
   const NavigateUser = await collections.navigator.find({});
   const NavigateUserAll = NavigateUser.toArray(function(err, result){
    console.log(result)
    return result;
   })
  //console.log(NavigateUserAll)
        }
  }

export { ListNavigateUserUnicUseCase };
