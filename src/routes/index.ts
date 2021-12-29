import { Router } from "express";
import { connectToDatabase } from "../../services/database.service";
import { groupsAccounts } from "./accounts/accounts.routes";
import { groupsCharacteristics } from "./accounts/characteristics.routes";
import { groupsInformations } from "./accounts/informations.routes";
import { groupsRoutes } from "./groups/groups.routes";
import { membersgroups } from "./groups/membersgroups.routes";
import { newsletterRoutes } from "./newsletter/newsletter.routes";

const router = Router();

connectToDatabase()
  .then(() => {
    router.use("/groups", groupsRoutes);
    router.use("/membersgroups", membersgroups);
    router.use("/newsletter", newsletterRoutes);
    router.use("/accounts", groupsAccounts);
    router.use("/informations", groupsInformations);
    router.use("/characteristics", groupsCharacteristics);
  }).catch((error: Error) => {
    console.error("Database connection failed", error);
    process.exit();
  });

export { router };
