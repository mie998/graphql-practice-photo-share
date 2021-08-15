const { ApolloServer } = require("apollo-server");
const { GraphQLScalarType } = require("graphql");
const { readFileSync } = require("fs");
const { users, photos, tags } = require("./sample_data");

let typeDefs = readFileSync("./typeDefs.graphql", "UTF-8");

let _id = 0;

const resolvers = {
  Query: {
    totalPhotos: () => photos.length,
    allPhotos: (parent, args) => {
      photos.filter((p) => new Date(p.created) >= new Date(args.after));
    },
  },
  Mutation: {
    postPhoto(parent, args) {
      let newPhoto = {
        id: _id++,
        ...args.input,
        created: new Date(),
      };
      photos.push(newPhoto);
      return newPhoto;
    },
  },
  Photo: {
    url: (parent) => `http://yoursite.com/img/${parent.id}.jpg`,
    taggedUsers: (parent) => {
      return tags
        .filter((t) => t.photoID === parent.id)
        .map((t) => t.userID)
        .map((uid) => users.find((u) => u.githubLogin === uid));
    },
  },
  User: {
    inPhotos: (parent) => {
      tags
        .filter((tag) => tag.userID === parent.id)
        .map((tag) => tag.photoID)
        .map((pid) => photos.find((p) => p.githubLogin === pid));
    },
  },
  DateTime: new GraphQLScalarType({
    name: `DateTime`,
    description: `A valid date time value.`,
    parseValue: (value) => new Date(value),
    serialize: (value) => new Date(value).toISOString(),
    parseLiteral: (ast) => ast.value,
  }),
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server
  .listen()
  .then(({ url }) => console.log(`GraphQL Service running on ${url}`));
