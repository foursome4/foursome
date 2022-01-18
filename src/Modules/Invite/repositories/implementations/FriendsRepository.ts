import { Friends } from "../../models/Friends";
import { IFriendsRepository, IFriendsDTO } from "../IFriendsRepository";
import { collections } from '../../../../../services/database.service';
import { v4 as uuidv4 } from "uuid";

class FriendsRepository implements IFriendsRepository {
  private friends: Friends[];

  private static INSTANCE: FriendsRepository;
  
  private constructor() {
    this.friends = [];
  }

  public static getInstance(): FriendsRepository {
    if (!FriendsRepository.INSTANCE) {
      FriendsRepository.INSTANCE = new FriendsRepository();
    }

    return FriendsRepository.INSTANCE;
  }

  
  async findByIdAccount(id_account: string): Promise<void> {
    const findEmail = await collections.friends.findOne({id_account})
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

    async create({ id_account, id_friend, type, status}: IFriendsDTO) {
      const friend: Friends = new Friends();
      const friend2: Friends = new Friends();
      const _id = uuidv4();
      const _id2 = uuidv4();
      
        Object.assign(friend, {
          _id,
          id: _id,
          id_account,
          id_friend,
          type,
          status,
          created_at: new Date(),
        });
        Object.assign(friend2, {
          _id: _id2,
          id: _id2,
          id_account:id_friend ,
          id_friend: id_account,
          type,
          status,
          created_at: new Date(),
        });
        this.friends.push(friend);
        console.log(friend)
        console.log(friend2)
        
        await collections.friends.insertOne(friend).then( async () => 
          await collections.friends .insertOne(friend2).then((result) => {
            console.log(result)
          }).catch(err => {
            console.log(err)
          })
        ).catch(err => {
          console.log(err)
        })
          }

  list(): Friends[] {
    return this.friends;
  }
}

export { FriendsRepository };

