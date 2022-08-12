import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListPostsAllFilterNotUseCase } from "./ListPostsAllFilterNotUseCase";

class ListPostsAllFilterNotController {
  constructor(private listPostseCase: ListPostsAllFilterNotUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const ufAccount = req.params;
    const page = req.query.page;
    const limit = req.query.limit;
    const data = req.body

   await collections.post.find(
    {"ufAccount": {$ne: ufAccount.ufAccount},
    "idAccount" : {$nin : ["67789f", "503465", "2ac0f7", "e90897", "4aabed", "7b9f35"]}}
    ).sort( { created_at: -1 } ).skip(Number(page) > 0 ? (( Number(page) - 1) * Number(limit)) : 0).limit( Number(limit) ).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {

        const filterResult = result.filter((results) =>
              results.typeAccount === data.man ||
              results.typeAccount === data.woman ||
              results.typeAccount === data.couple ||
              results.typeAccount === data.trisal ||
              results.typeAccount === data.transvestites ||
              results.typeAccount === data.transsexuals ||
              results.typeAccount === data.groups
              )

        res.status(200).json(filterResult)
      }
     // console.log(result)
      return result;
     })

  }
}

export { ListPostsAllFilterNotController };


