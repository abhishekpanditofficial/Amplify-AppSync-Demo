/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBook = /* GraphQL */ `
  mutation CreateBook(
    $input: CreateBookInput!
    $condition: ModelBookConditionInput
  ) {
    createBook(input: $input, condition: $condition) {
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
export const updateBook = /* GraphQL */ `
  mutation UpdateBook(
    $input: UpdateBookInput!
    $condition: ModelBookConditionInput
  ) {
    updateBook(input: $input, condition: $condition) {
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
export const deleteBook = /* GraphQL */ `
  mutation DeleteBook(
    $input: DeleteBookInput!
    $condition: ModelBookConditionInput
  ) {
    deleteBook(input: $input, condition: $condition) {
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
