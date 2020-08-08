const resolver = {
  Query: {
    getUser: () => {
      console.log("getting the user");
      return null;
    },
  },
};

module.exports = resolver;
