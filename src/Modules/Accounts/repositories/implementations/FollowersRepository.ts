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

  
  async findByIdAccount(id_account: string): Promise<void> {
    const findEmail = await collections.followers.findOne({id_account})
      if(findEmail) {
        throw new Error("Email already exists!")
      }   
  }
  async findByIdFriend(id_friends: string): Promise<void>  {
    const findUsername = await collections.friends.findOne({id_friends})
    if(findUsername) {
      throw new Error("Username already exists!")
    } 
  }

    async create({ id_account, id_friend, type, status}: IFollowersDTO) {
      const followers: Followers = new Followers();
      const _id = uuidv4();
      
        Object.assign(followers, {
          _id,
          id: _id,
          id_account,
          id_friend,
          type,
          status,
          created_at: new Date(),
        });
        this.followers.push(followers);
        console.log("Followers: " + followers)
        
        await collections.followers.insertOne(followers).then((result) => 
        console.log(result)
        ).catch(err => {
          console.log(err)
        })
          }

  list(): Followers[] {
    return this.followers;
  }
}

export { FollowersRepository };

