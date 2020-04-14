const { gql } = require('apollo-server-express');
const typeDefs = gql` 

type Repo {
      id: ID!
      name: String!
      description: String!
      url: String!
      language: String!
  }

type Query {
        repos: [Repo]
        repo(id: ID!): Repo
    } 

    type Mutation {
        createRepo(name: String!, description: String!, url: String!, language: String!): Repo!
    }
`;

module.exports = typeDefs
