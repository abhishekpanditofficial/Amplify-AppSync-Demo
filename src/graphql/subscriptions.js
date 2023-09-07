/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBook = /* GraphQL */ `
  subscription OnCreateBook($filter: ModelSubscriptionBookFilterInput) {
    onCreateBook(filter: $filter) {
      id
      title
      description
      price
      author
      createdAt
      updatedAt
      orderBooksId
      __typename
    }
  }
`;
export const onUpdateBook = /* GraphQL */ `
  subscription OnUpdateBook($filter: ModelSubscriptionBookFilterInput) {
    onUpdateBook(filter: $filter) {
      id
      title
      description
      price
      author
      createdAt
      updatedAt
      orderBooksId
      __typename
    }
  }
`;
export const onDeleteBook = /* GraphQL */ `
  subscription OnDeleteBook($filter: ModelSubscriptionBookFilterInput) {
    onDeleteBook(filter: $filter) {
      id
      title
      description
      price
      author
      createdAt
      updatedAt
      orderBooksId
      __typename
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onCreateOrder(filter: $filter) {
      id
      books {
        items {
          id
          title
          description
          price
          author
          createdAt
          updatedAt
          orderBooksId
          __typename
        }
        nextToken
        __typename
      }
      total
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onUpdateOrder(filter: $filter) {
      id
      books {
        items {
          id
          title
          description
          price
          author
          createdAt
          updatedAt
          orderBooksId
          __typename
        }
        nextToken
        __typename
      }
      total
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
    onDeleteOrder(filter: $filter) {
      id
      books {
        items {
          id
          title
          description
          price
          author
          createdAt
          updatedAt
          orderBooksId
          __typename
        }
        nextToken
        __typename
      }
      total
      createdAt
      updatedAt
      __typename
    }
  }
`;
