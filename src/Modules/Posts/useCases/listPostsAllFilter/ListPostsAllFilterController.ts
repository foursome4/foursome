import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListPostsAllFilterUseCase } from "./ListPostsAllFilterUseCase";

class ListPostsAllFilterController {
  constructor(private listPostseCase: ListPostsAllFilterUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const ufAccount = req.params;
    const page = req.query.page;
    const limit = req.query.limit;
    const data = req.body

   await collections.post.find({
    "$or": [{ "ufAccount" : ufAccount.ufAccount },
    { "idAccount": "67789f" },
    { "idAccount": "503465" },
    { "idAccount": "2ac0f7" },
    { "idAccount": "e90897" },
    { "idAccount": "4aabed" },
    { "idAccount": "7b9f35" }]
}).sort( { created_at: -1 } ).skip(Number(page) > 0 ? (( Number(page) - 1) * Number(limit)) : 0).limit( Number(limit) ).toArray(function(err, result){
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
              results.typeAccount === data.groups ||
              results.idAccount !== "67789f" ||
              results.idAccount !== "503465" ||
              results.idAccount !== "2ac0f7" ||
              results.idAccount !== "e90897" ||
              results.idAccount !== "4aabed" ||
              results.idAccount !== "7b9f35" 
              )
        console.log(filterResult)
        res.status(200).json(filterResult)
      }
     // console.log(result)
      return result;
     })

  }
}

export { ListPostsAllFilterController };


