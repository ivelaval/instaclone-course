const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./gql/schema");
const resolver = require("./gql/resolver");

require("dotenv").config({ path: ".env" });

mongoose.connect(
  process.env.SRV_MONGO_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
  },
  (error) => {
    if (error) {
      console.log(`MongoDB Conecction Failure :( \n ${error}`);
    } else {
      console.log(`MongoDB Connection established :)`);
      server();
    }
  }
);

const server = () => {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolver,
  });

  apolloServer
    .listen()
    .then(({ url }) =>
      console.log(`Appollo server is up and running! on ${url} :)`)
    );
};
