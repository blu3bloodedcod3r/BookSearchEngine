import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation loginUser($username: String!, $email: String!, $password: String!) {
        _id
        username!
        savedBooks
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $Password: String!) {
        addUser($username: String!, $email: String!, $Password: String!) {
            token 
            user{ 
                _id
                username: String!
                password: String!
                email: String!
                savedBooks: String
            }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook() {
        bookID: Int!
        title: String!
        authors: String
        description: String!
    }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook(){
        bookID: Int!
        title: String!
        authors: String
        image: String
        link: String
        description: String!
    }
`;