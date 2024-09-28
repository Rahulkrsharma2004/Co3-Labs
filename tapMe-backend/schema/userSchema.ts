import { gql } from 'apollo-server';

export const userSchema = gql`
  type User {
    id: ID!
    coins: Int!
  }

  type Query {
    getUser(id: ID!): User
  }

  type Mutation {
    addCoins(id: ID!, coins: Int!): User
  }
`;
