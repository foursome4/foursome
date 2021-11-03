import { Router } from "express";

import { groupsRoutes } from "./groups/groups.routes";
import { membersgroups } from "./groups/membersgroups.routes";

const router = Router();

router.use("/groups", groupsRoutes);
router.use("/membersgroups", membersgroups);

export { router };
