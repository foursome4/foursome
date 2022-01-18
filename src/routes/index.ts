import { Router } from "express";
import { connectToDatabase } from "../../services/database.service";
import { groupsAccounts } from "./accounts/accounts.routes";
import { groupsCharacteristics } from "./accounts/characteristics.routes";
// import { groupsInformations } from "./accounts/informations.routes";
import { sessionAccounts } from "./accounts/session.routes";
import { groupsFollowers } from "./followers/followers.routes";
import { groupsFriends } from "./friends/friends.routes";
import { groupsRoutes } from "./groups/groups.routes";
import { groupsInvites } from "./invites/invites.routes";
import { newsletterRoutes } from "./newsletter/newsletter.routes";

const router = Router();

connectToDatabase()
  .then(() => {
    router.use("/groups", groupsRoutes);
    router.use("/newsletter", newsletterRoutes);
    router.use("/accounts", groupsAccounts);
    router.use("/friends", groupsFriends);
    router.use("/followers", groupsFollowers);
    router.use("/characteristics", groupsCharacteristics);
    router.use("/session", sessionAccounts);
    router.use("/invites", groupsInvites);
  }).catch((error: Error) => {
    console.error("Database connection failed", error);
    process.exit();
  });

export { router };
