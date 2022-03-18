import { Router } from "express";
import { connectToDatabase } from "../../services/database.service";
import { groupsAccounts } from "./accounts/accounts.routes";
import { groupsCharacteristics } from "./accounts/characteristics.routes";
import { informationsRoutes } from "./accounts/informations.routes";
import { preferencesRoutes } from "./accounts/preferences.routes";
import { sessionAccounts } from "./accounts/session.routes";
import { eventsRoutes } from "./events/events.routes";
import { groupsFollowers } from "./followers/followers.routes";
import { forunsRoutes } from "./foruns/foruns.routes";
import { groupsFriends } from "./friends/friends.routes";
import { groupsRoutes } from "./groups/groups.routes";
import { groupsInvites } from "./invites/invites.routes";
import { newsletterRoutes } from "./newsletter/newsletter.routes";
import { commentsRoutes } from "./posts/comments.routes";
import { postsRoutes } from "./posts/posts.routes";
import { reactionsRoutes } from "./posts/reactions.routes";
import { replyRoutes } from "./posts/reply.routes";
import { cnversationsRoutes } from "./realTime/conversations.routes";
import { messagesRoutes } from "./realTime/messages.routes";
import { usersOlineRoutes } from "./realTime/usersOnline.routes";
import {mailRoutes} from "./mail/mail"
import { membersRoutes } from "./events/members.routes";
import { notificationsRoutes } from "./realTime/notifications.routes";
import { dateReadRoutes } from "./realTime/dateread.routes";
import { visitsRoutes } from "./accounts/visits.routes";
const router = Router();

connectToDatabase()
  .then(() => {
    router.use("/groups", groupsRoutes);
    router.use("/members", membersRoutes);
    router.use("/newsletter", newsletterRoutes);
    router.use("/accounts", groupsAccounts);
    router.use("/informations", informationsRoutes);
    router.use("/friends", groupsFriends);
    router.use("/followers", groupsFollowers);
    router.use("/characteristics", groupsCharacteristics);
    router.use("/session", sessionAccounts);
    router.use("/invites", groupsInvites);
    router.use("/posts", postsRoutes);
    router.use("/comments", commentsRoutes);
    router.use("/reactions", reactionsRoutes);
    router.use("/reply", replyRoutes);
    router.use("/events", eventsRoutes);
    router.use("/foruns", forunsRoutes);
    router.use("/preferences", preferencesRoutes);
    router.use("/conversations", cnversationsRoutes);
    router.use("/messages", messagesRoutes);
    router.use("/online", usersOlineRoutes);
    router.use("/mail", mailRoutes);
    router.use("/notifications", notificationsRoutes);
    router.use("/dateread", dateReadRoutes);
    router.use("/visits", visitsRoutes);
  }).catch((error: Error) => {
    console.error("Database connection failed", error);
    process.exit();
  });

export { router };
