const { ApolloServer } = require("apollo-server");
const { readFileSync } = require("fs");
const { users, photos, tags } = require("./sample_data");

let typeDefs = readFileSync("./typeDefs.graphql", "UTF-8");

let _id = 0;

const resolvers = {
  Query: {
    totalPhotos: () => photos.length,
    allPhotos: () => photos,
  },
  Mutation: {
    postPhoto(parent, args) {
      let newPhoto = {
        id: _id++,
        ...args.input,
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
        .filter((uid) => users.filter((u) => u.githubLogin === uid));
    },
  },
  User: {
    inPhotos: (parent) => {
      tags
        .filter((tag) => tag.userID === parent.userID)
        .map((tag) => tag.photoID)
        .filter((pid) => photos.filter((p) => p.githubLogin === pid));
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server
  .listen()
  .then(({ url }) => console.log(`GraphQL Service running on ${url}`));
