import { UsersOnline } from "../../models/UsersOnline";
import { IUsersOnlineDTO, IUsersOnlineRepository } from "../IUsersOnlineRepository";
import {v4 as uuidv4} from 'uuid'
import { collections } from "../../../../../services/database.service";

class UsersOnlineRepository implements IUsersOnlineRepository {
  private usersOnline: UsersOnline[];

  private static INSTANCE: UsersOnlineRepository;

  private constructor() {
    this.usersOnline = [];
  }

  public static getInstance(): UsersOnlineRepository {
    if (!UsersOnlineRepository.INSTANCE) {
      UsersOnlineRepository.INSTANCE = new UsersOnlineRepository();
    }

    return UsersOnlineRepository.INSTANCE;
  }

  async findById(idAccount: string): Promise<void>  {
    const findIdAccount = await collections.usersOnline.findOne({idAccount})
    
        if(findIdAccount) {
          throw new Error("User already exists!")
        } 
    }
  async findByUsername(username: string): Promise<void>  {
    const findUsername = await collections.usersOnline.findOne({username})
    
        if(findUsername) {
          throw new Error("User already exists!")
        } 
    }
  async findByNickname(nickname: string): Promise<void>  {
    const findByNickname = await collections.usersOnline.findOne({nickname})
    
        if(findByNickname) {
          throw new Error("User already exists!")
        } 
    }
 
 async create({ 
  idAccount, username, type, nickname, avatar, relationship, lat, long, city, uf, actualCity, actualUf, equalCity, plane, emoji, song, invisible 
  }: IUsersOnlineDTO) {
    const usersOnline: UsersOnline = new UsersOnline();
    const _id = uuidv4()
    Object.assign(usersOnline, {
      _id,
      id: _id,
      idAccount, username, type, nickname, avatar, relationship, lat, long, city, uf, actualCity, actualUf, equalCity, plane, emoji, song, invisible,
      created_at: new Date(),
    });

    this.usersOnline.push(usersOnline);
    console.log(UsersOnline)

    await collections.usersOnline.insertOne(usersOnline).then((result) => {
      console.log(result) 
    }).catch(error => {
      console.log(error)
    })
  }
  list(): UsersOnline[] {
    return this.usersOnline;
  }

  async delete({id}) {
    await collections.usersOnline.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }
  
  update({idAccount, username, type, nickname, avatar, relationship, lat, long, city, uf, actualCity, actualUf, equalCity, plane, emoji, song, invisible,}):void {}
}


export { UsersOnlineRepository };
