import { collections } from "../../../../../services/database.service";
import { Preferences } from "../../models/Preferences";
import { IPreferencesRepository } from "../../repositories/IPreferencesRepository";

class ListPreferencesUseCase {
  constructor(private PreferencesRepository: IPreferencesRepository) {
    " ";
  }

  async execute() {
    const preferences = await collections.preferences.find({});
   const preferencesAll = preferences.toArray(function(err, result){
    console.log(result)
    return result;
   })
//console.log(preferencesAll)
        }
  }

export { ListPreferencesUseCase };
