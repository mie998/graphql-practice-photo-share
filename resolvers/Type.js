const { users, photos, tags } = require("./sample_data");
const { GraphQLScalarType } = require("graphql");

module.exports = {
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
