import { collections } from "../../../../../services/database.service";
import { News } from "../../models/News";
import { INewsRepository } from "../../repositories/INewsRepository";

class ListNewsUnicUseCase {
  constructor(private NewssRepository: INewsRepository) {
    " ";
  }

  async execute() {
    
   const News = await collections.news.find({});
   const NewsAll = News.toArray(function(err, result){
    console.log(result)
    return result;
   })
//console.log(NewsAll)
        }
  }

export { ListNewsUnicUseCase };
