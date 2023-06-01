const orderFragment = /* GraphQL */ `
  fragment order on Order {
    id
    billingAddress {
      ...address
    }
    cancelReason
    canceledAt
    currencyCode
    currentSubtotalPrice {
      amount
      currencyCode
    }
    currentTotalDuties {
      amount
      currencyCode
    }
    currentTotalPrice {
      amount
      currencyCode
    }
    currentTotalTax {
      amount
      currencyCode
    }
    customAttributes {
      key
      value
    }
    customerLocale
    customerUrl
    edited
    email
    financialStatus
    fulfillmentStatus
    name
    orderNumber
    originalTotalDuties {
      amount
      currencyCode
    }
    originalTotalPrice {
      amount
      currencyCode
    }
    phone
    processedAt
    shippingAddress {
      ...address
    }
    shippingDiscountAllocations {
      allocatedAmount {
        amount
        currencyCode
      }
      discountApplication {
        ... on DiscountCodeApplication {
          code
        }
      }
    }
    statusUrl
    subtotalPrice {
      amount
      currencyCode
    }
    totalPrice {
      amount
      currencyCode
    }
    totalRefunded {
      amount
      currencyCode
    }
    totalShippingPrice {
      amount
      currencyCode
    }
    totalTax {
      amount
      currencyCode
    }
  }
`;

export default orderFragment;
