import addressFragment from "./address";
import orderFragment from "./order";

const customerFragment = /* GraphQL */ `
  fragment customer on Customer {
    id
    acceptsMarketing
    createdAt
    defaultAddress {
      ...address
    }
    displayName
    email
    firstName
    lastIncompleteCheckout {
      id
      createdAt
      updatedAt
      email
      webUrl
    }
    lastName
    numberOfOrders
    phone
    tags
    updatedAt
    addresses(first: 10) {
      edges {
        node {
          ...address
        }
      }
    }
    orders(first: 10) {
      edges {
        node {
          ...order
        }
      }
    }
  }
  ${addressFragment}
  ${orderFragment}
`;

export default customerFragment;
