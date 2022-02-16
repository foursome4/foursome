import { Followers } from "../../models/Followers";
import { IFollowersRepository, IFollowersDTO } from "../IFollowersRepository";
import { collections } from '../../../../../services/database.service';
import { v4 as uuidv4 } from "uuid";

class FollowersRepository implements IFollowersRepository {
  private followers: Followers[];

  private static INSTANCE: FollowersRepository;
  
  private constructor() {
    this.followers = [];
  }

  public static getInstance(): FollowersRepository {
    if (!FollowersRepository.INSTANCE) {
      FollowersRepository.INSTANCE = new FollowersRepository();
    }

    return FollowersRepository.INSTANCE;
  }

  
  async findByIdAccount(idAccount: string): Promise<void> {
    const findAccount = await collections.followers.findOne({idAccount})
      // if(findAccount) {
      //   throw new Error("Account already exists!")
      // }   
  }
  async findByIdFriend(idFriend: string): Promise<void>  {
    const findFriend = await collections.friends.findOne({idFriend})
    // if(findFriend) {
    //   throw new Error("Friend already exists!")
    // } 
  }

    async create({ idAccount, idFriend, type, status}: IFollowersDTO) {
      const followers: Followers = new Followers();
      const _id = uuidv4();
      
        Object.assign(followers, {
          _id,
          id: _id,
          idAccount,
          idFriend,
          type,
          status,
          created_at: new Date(),
        });
        this.followers.push(followers);
        console.log("Followers: " + followers)
        
        await collections.followers.insertOne(followers).then((result) => {
        }).catch(err => {
          console.log(err)
        })
          }

  list(): Followers[] {
    return this.followers;
  }


  async delete({id}) {
    await collections.followers.deleteOne(id).then((result) => {
      //console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }
}

export { FollowersRepository };

