import { Router } from "express";
import { connectToDatabase } from "../../services/database.service";

import { groupsRoutes } from "./groups/groups.routes";
import { membersgroups } from "./groups/membersgroups.routes";
import { newsletterRoutes } from "./newsletter/newsletter.routes";

const router = Router();

connectToDatabase()
  .then(() => {
    router.use("/groups", groupsRoutes);
    router.use("/membersgroups", membersgroups);
    router.use("/newsletter", newsletterRoutes)
  }).catch((error: Error) => {
    console.error("Database connection failed", error);
    process.exit();
  });



export { router };
