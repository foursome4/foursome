import { Invites } from "../../models/Invites";
import { IInvitesRepository, IInvitesDTO } from "../IInviteRepository";
import { collections } from '../../../../../services/database.service';
import { v4 as uuidv4 } from "uuid";

class InvitesRepository implements IInvitesRepository {
  private invites: Invites[];

  private static INSTANCE: InvitesRepository;

  private constructor() {
    this.invites = [];
  }

  public static getInstance(): InvitesRepository {
    if (!InvitesRepository.INSTANCE) {
      InvitesRepository.INSTANCE = new InvitesRepository();
    }

    return InvitesRepository.INSTANCE;
  }

  
  async findByInvites(email: string): Promise<void> {
    const findEmail = await collections.invites.findOne({email})
      if(findEmail) {
        throw new Error("Email already exists!")
      } 
  }

    async create({ code, idAccount, name, username, email, phone, type, active, resend }: IInvitesDTO) {
      const account: Invites = new Invites();
      const _id = uuidv4()
      
        Object.assign(account, {
          _id, id: _id, code, idAccount, username, name, email, phone, type, active, resend, created_at: new Date(),
        });
        this.invites.push(account);
        
        await collections.invites.insertOne(account).then((result) => {
          console.log(result) 
        }).catch(error => {
          console.log(error)
        })
          }
    
  list(): Invites[] {
    return this.invites;
  }

  async update({ }){}

  async delete({id}) {
    await collections.invites.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

}

export { InvitesRepository };

