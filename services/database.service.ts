import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

export const collections: { groups?: mongoDB.Collection, newsletter?: mongoDB.Collection } = {}

export async function connectToDatabase() {
  dotenv.config();

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING);

  await client.connect();

  const db: mongoDB.Db = client.db(process.env.DB_NAME);

  const newsletterCollection: mongoDB.Collection = db.collection(process.env.NEWSLETTER_COLLECTION_NAME);

  collections.newsletter = newsletterCollection;

  console.log(`Successfully connected to database: ${db.databaseName} and collection: ${newsletterCollection.collectionName}`);

  const groupsCollection: mongoDB.Collection = db.collection(process.env.GROUPS_COLLECTION_NAME);

  collections.groups = groupsCollection;

  console.log(`Successfully connected to database: ${db.databaseName} and collection: ${groupsCollection.collectionName}`);
}