import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListPostsAccountsTypeUseCase } from "./ListPostsAccountsTypeUseCase";

class ListPostsAccountsTypeController {
  constructor(private listPostsAccountsTypeeCase: ListPostsAccountsTypeUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
              const {idAccount, type} = req.params;
              console.log({idAccount, type})
   await collections.post.find({idAccount, type}).sort( { created_at: -1 } ).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
    //  console.log(result)
      return result;
     })

  }
}

export { ListPostsAccountsTypeController };
