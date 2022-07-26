import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListAllPostsUseCase } from "./ListAllPostsUseCase";

class ListAllPostsController {
  constructor(private listPostseCase: ListAllPostsUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const page = req.query.page;
    const limit = req.query.limit;


    
console.log(page)
console.log(limit)
await collections.post.find({}).sort( { created_at: -1 } ).skip(Number(page) > 0 ? (( Number(page) - 1) * Number(limit)) : 0).limit( Number(limit) ).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
        console.log(result)
        console.log(result.length)
      }
      return result;
     })

  }
}

export { ListAllPostsController };
