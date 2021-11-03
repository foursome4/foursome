import { Router } from "express";

import { createMemberGroupController } from "../../Modules/Groups/useCases/createMembersGroup";

const membersgroups = Router();

membersgroups.post("/", (req, res) => {
  return createMemberGroupController.handle(req, res);
});

export { membersgroups };
