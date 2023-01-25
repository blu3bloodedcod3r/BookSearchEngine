import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation loginUser($username: String!, $email: String!, $password: String!) {
        _id
        username
        savedBooks
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $Password: String!) {
        _id
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook() {

    }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook(){
        
    }
`;