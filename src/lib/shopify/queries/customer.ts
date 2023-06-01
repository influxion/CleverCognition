import customerFragment from '../fragments/customer';

export const getCustomerQuery = /* GraphQL */ `
  query getCustomer($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      ...customer
    }
  }
  ${customerFragment}
`;
