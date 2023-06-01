const addressFragment = /* GraphQL */ `
  fragment address on MailingAddress {
    id
    address1
    address2
    city
    company
    country
    countryCodeV2
    firstName
    formatted
    formattedArea
    lastName
    latitude
    longitude
    name
    phone
    province
    provinceCode
    zip
  }
`;

export default addressFragment;
