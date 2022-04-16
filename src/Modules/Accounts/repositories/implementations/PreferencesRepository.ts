import { Preferences } from "../../models/Preferences";
import { IPreferencesRepository, IPreferencesDTO } from "../IPreferencesRepository";
import { collections } from '../../../../../services/database.service';
import { v4 as uuidv4 } from "uuid";

class PreferencesRepository implements IPreferencesRepository {
  private preferences: Preferences[];

  private static INSTANCE: PreferencesRepository;

  private constructor() {
    this.preferences = [];
  }

  public static getInstance(): PreferencesRepository {
    if (!PreferencesRepository.INSTANCE) {
      PreferencesRepository.INSTANCE = new PreferencesRepository();
    }

    return PreferencesRepository.INSTANCE;
  }

  
  async findById(idAccount): Promise<void> {
    const findIdAccount = await collections.preferences.findOne({idAccount})
      if(findIdAccount) {
        throw new Error("Email already exists!")
      } 
  }

    async create({ id, idAccount, men, woman, couple, trisal, transvestites, transsexuals, groups, proposal }: IPreferencesDTO) {
      const preferences: Preferences = new Preferences();
      
        Object.assign(preferences, {
          id, _id: id, idAccount, men, woman, couple, trisal, transvestites, transsexuals, groups, proposal ,created_at: new Date(),
        });
        this.preferences.push(preferences);
        
        await collections.preferences.insertOne(preferences).then((result) => {
         // console.log(result)
        }).catch(error => {
          console.log(error)
        })
          }
    
  list(){ }
  update({ men, woman, couple, trisal, transvestites, transsexuals, groups, proposal}):void {}
  async delete({idAccount}) {
    await collections.accounts.deleteOne(idAccount).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }
}

export { PreferencesRepository };

