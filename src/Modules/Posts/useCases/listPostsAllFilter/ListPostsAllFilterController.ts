import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListPostsAllFilterUseCase } from "./ListPostsAllFilterUseCase";

class ListPostsAllFilterController {
  constructor(private listPostseCase: ListPostsAllFilterUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const typeAccount = req.params;
    const cityAccount = req.params;
    const ufAccount = req.params;
    const page = req.query.page;
    const limit = req.query.limit;

    const data = req.body



   await collections.post.find(ufAccount).sort( { created_at: -1 } ).skip(Number(page) > 0 ? (( Number(page) - 1) * Number(limit)) : 0).limit( Number(limit) ).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {

        console.log(data.man)
        const filterResult = result.filter((results) =>
              results.typeAccount === data.man ||
              results.typeAccount === data.woman ||
              results.typeAccount === data.couple ||
              results.typeAccount === data.trisal ||
              results.typeAccount === data.transvestites ||
              results.typeAccount === data.transsexuals ||
              results.typeAccount === data.groups
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


