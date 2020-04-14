const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./graphQL/schemas/schema')
const resolvers = require('./graphQL/resolvers/resolvers')
const models = require('./models')
const { fetchGithub, url, query, auth } = require('./graphQL/github/githubfetch');

const server = new ApolloServer({ typeDefs, resolvers, context: { models } });
fetchGithub(url, query, auth)


const app = express();
server.applyMiddleware({ app });
models.sequelize.authenticate();
models.sequelize.sync();

app.listen({ port: 3000 }, () => console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`))
