import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListPostGroupsTypeUseCase } from "./ListPostGroupsTypeUseCase";

class ListPostGroupsTypeController {
  constructor(private ListPostGroupsTypeeCase: ListPostGroupsTypeUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
              const {idGroup, type} = req.params;
              console.log({idGroup, type})
   await collections.post.find({idGroup, type}).sort( { created_at: -1 } ).toArray(function(err, result){
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

export { ListPostGroupsTypeController };
