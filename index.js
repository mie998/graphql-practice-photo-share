const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { MongoClient } = require("mongodb");
const { readFileSync } = require("fs");
const expressPlayground =
  require("graphql-playground-middleware-express").default;
const resolvers = require("./resolvers");
const fetch = require("node-fetch");

require("dotenv").config();
var typeDefs = readFileSync("./typeDefs.graphql", "UTF-8");

async function start() {
  const app = express();
  const MONGO_DB = process.env.DB_HOST;
  let db;

  try {
    const client = await MongoClient.connect(MONGO_DB, {
      useNewUrlParser: true,
    });
    db = client.db();
  } catch (error) {
    console.log(`
      Mongo DB Host not found!
      please add DB_HOST environment variable to .env file
      exiting...
    `);
    process.exit(1);
  }

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req }) => {
      const githubToken = req.headers.authorization;
      const currentUser = await db.collection("users").findOne({ githubToken });
      return { db, currentUser };
    },
  });

  server.applyMiddleware({ app });

  app.get("/playground", expressPlayground({ endpoint: "/graphql" }));
  app.get("/", (req, res) => {
    // res.set("client_id", process.env.CLIENT_ID);
    // res.set("scope", "user");
    res.end(
      `<button onclick="getGithubCode()">Sign In with Github</button>
      <script>
        const getGithubCode = () => {
          const url = "https://github.com/login/oauth/authorize";
          const method = "GET";
          const headers = {
            Authorization: "token ${process.env.CLIENT_ID}",
          };
          fetch(url, { method, mode: 'no-cors', headers })
            .then((res) => res.json())
            .then(console.log)
            .catch(console.error);
        };
      </script>
      `
    );
  });

  app.listen({ port: 4000 }, () =>
    console.log(
      `GraphQL Server running at http://localhost:4000${server.graphqlPath}`
    )
  );
}

start();
