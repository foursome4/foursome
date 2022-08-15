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
import { notificationsMessageRoutes } from "./realTime/notificationsMessage.routes";
import { dateReadMessageRoutes } from "./realTime/datereadMessage.routes";
import { dateReadFeedRoutes } from "./realTime/datereadFeed.routes";
import { dateReadLoginRoutes } from "./realTime/datereadLogin.routes";
import { groupsRecuperation } from "./recuperation/recuperation.routes";
import { DistanceMatrixRoutes } from "./DistanceMatrix/DistanceMatrix";
import { plainsRoutes } from "./plains/plains.routes";
import { paymentsRoutes } from "./plains/payments.routes";
import { newsRoutes } from "./realTime/news.routes";
import { newsReplyRoutes } from "./realTime/newsReply.routes";
import { periodTestRoutes } from "./accounts/periodtest.routes";
const router = Router();




connectToDatabase()
  .then(() => {
    router.use("/groups", groupsRoutes);
    router.use("/membersevents", membersRoutes);
    router.use("/newsletter", newsletterRoutes);
    router.use("/accounts", groupsAccounts);
    router.use("/informations", informationsRoutes);
    router.use("/friends", groupsFriends);
    router.use("/followers", groupsFollowers);
    router.use("/characteristics", groupsCharacteristics);
    router.use("/session", sessionAccounts);
    router.use("/sessionfast", sessionAccounts);
    router.use("/invites", groupsInvites);
    router.use("/recuperation", groupsRecuperation);
    router.use("/posts", postsRoutes);
    router.use("/comments", commentsRoutes);
    router.use("/reactions", reactionsRoutes);
    router.use("/reply", replyRoutes);
    router.use("/events", eventsRoutes);
    router.use("/foruns", forunsRoutes);
    router.use("/preferences", preferencesRoutes);
    router.use("/conversations", cnversationsRoutes);
    router.use("/news", newsRoutes);
    router.use("/newsreply", newsReplyRoutes);
    router.use("/messages", messagesRoutes);
    router.use("/online", usersOlineRoutes);
    router.use("/mail", mailRoutes);
    router.use("/distance", DistanceMatrixRoutes);
    router.use("/notifications", notificationsRoutes);
    router.use("/notificationsmessage", notificationsMessageRoutes);
    router.use("/dateread", dateReadRoutes);
    router.use("/datereadmessage", dateReadMessageRoutes);
    router.use("/datereadfeed", dateReadFeedRoutes);
    router.use("/datereadlogin", dateReadLoginRoutes);
    router.use("/visits", visitsRoutes);
    router.use("/plains", plainsRoutes);
    router.use("/payments", paymentsRoutes);
    router.use("/periodtest", periodTestRoutes);
  }).catch((error: Error) => {
    console.error("Database connection failed", error);
    process.exit();
  });

export { router };