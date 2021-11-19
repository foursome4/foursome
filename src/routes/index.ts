import { Router } from "express";

import { groupsRoutes } from "./groups/groups.routes";
import { membersgroups } from "./groups/membersgroups.routes";
import { usersRoutes } from "./users/users.routes";

const router = Router();

router.use("/groups", groupsRoutes);
router.use("/membersgroups", membersgroups);
router.use("/users", usersRoutes);

export { router };
