const express = require("express");
const expressPlayground =
  require("graphql-playground-middleware-express").default;
const { MongoClient } = require("mongodb");
const { ApolloServer } = require("apollo-server-express");
const { readFileSync } = require("fs");

const typeDefs = readFileSync("./typeDefs.graphql", "UTF-8");
const resolvers = require("./resolvers");
require("dotenv").config();

let _id = 0;

const init = async () => {
  const MONGO_DB = process.env.ME_CONFIG_MONGODB_URL;
  const client = new MongoClient(MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
  } catch (e) {
    console.error(e);
  }

  const db = client.db();
  const context = { db };

  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context,
  });
  server.applyMiddleware({ app });

  app.get("/", (req, res) => res.end("Welcome to the PhotoShare API"));
  app.get("/playground", expressPlayground({ endpoint: "/graphql" }));

  app.listen({ port: 4000 }, () =>
    console.log(
      `GraphQL Server running @ http://localhost:4000${server.graphqlPath}`
    )
  );
};

init().catch(console.error);
