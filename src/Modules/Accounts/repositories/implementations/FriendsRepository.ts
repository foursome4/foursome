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
    const findAccount = await collections.friends.findOne({id_account})
      if(findAccount) {
        throw new Error("Account already exists!")
      }   
  }
  async findByIdFriend(idFriends: string): Promise<void>  {
    const findFriend = await collections.friends.findOne({idFriends})
    if(findFriend) {
      throw new Error("Friend already exists!")
    } 
  }

    async create({ idAccount, idFriend, type, status}: IFriendsDTO) {
      const friend: Friends = new Friends();
      const _id = uuidv4();
      
        Object.assign(friend, {
          _id,
          id: _id,
          idAccount,
          idFriend,
          type,
          status,
          created_at: new Date(),
        });

        this.friends.push(friend);
        console.log(friend);
        await collections.friends.insertOne(friend).then((result) =>{ 
        //  console.log(result)
        }).catch(err => {
          console.log(err);
        })
          }

  list(){}


  async update({status,id}: IFriendsDTO) {
    const friend: Friends = new Friends();
    Object.assign(friend, {
      status, id
    });

    this.friends.push(friend);
    console.log({status, id})
  await collections.friends.findOneAndUpdate(
    {id},{$set:
    {status: status}},{upsert: true}).then(async (result) => {
      // console.log(result)
    }).catch(error => {
      console.log("Erro: " + error)
    })
  }

  async delete({id}) {
    await collections.friends.deleteOne(id).then((result) => {
      // console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

}


export { FriendsRepository };

