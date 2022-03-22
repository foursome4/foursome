import { NavigateUser } from "../../models/NavigateUser";
import { INavigateUserRepository, INavigateUserDTO } from "../INavigateUserRepository";
import { collections } from '../../../../../services/database.service';
import { v1 as uuidv4 } from "uuid";

class NavigateUserRepository implements INavigateUserRepository {
  private navigate: NavigateUser[];

  private static INSTANCE: NavigateUserRepository;

  private constructor() {
    this.navigate = [];
  }

  public static getInstance(): NavigateUserRepository {
    if (!NavigateUserRepository.INSTANCE) {
      NavigateUserRepository.INSTANCE = new NavigateUserRepository();
    }

    return NavigateUserRepository.INSTANCE;
  }



  async create({username, idAccount, navigator }: INavigateUserDTO) {
    const navigate: NavigateUser = new NavigateUser();
    const v4 = uuidv4()
    const _id = (v4.substring(0, 6))
    
      Object.assign(navigate, {
        _id, id: _id, username, idAccount, navigator ,created_at: new Date(),
      });
      this.navigate.push(navigate);
      
      await collections.navigator.insertOne(navigate).then((result) => {
        //console.log(result)
      }).catch(error => {
        console.log(error)
      })
        }


  list(){ }

   async delete({id}) {
    await collections.navigator.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }


}

export { NavigateUserRepository };




