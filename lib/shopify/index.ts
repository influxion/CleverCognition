import { HIDDEN_PRODUCT_TAG, SHOPIFY_GRAPHQL_API_ENDPOINT } from 'lib/constants';
import { isShopifyError } from 'lib/type-guards';
import {
  addToCartMutation,
  createCartMutation,
  editCartItemsMutation,
  removeFromCartMutation,
  updateBuyerIdentityMutation
} from './mutations/cart';
import { getCartQuery } from './queries/cart';
import {
  getCollectionProductsQuery,
  getCollectionQuery,
  getCollectionsQuery
} from './queries/collection';
import { getCustomerQuery } from './queries/customer';
import {
  createAccessTokenMutation,
  createCustomerMutation,
  customerAddressCreateMutation,
  customerAddressDeleteMutation,
  customerAddressUpdateMutation,
  customerDefaultAddressUpdateMutation,
  customerRecoverMutation,
  customerUpdateMutation,
  deleteAccessTokenMutation,
  renewAccessTokenMutation
} from './mutations/customer';
import { getMenuQuery } from './queries/menu';
import { getPageQuery, getPagesQuery } from './queries/page';
import {
  getProductQuery,
  getProductRecommendationsQuery,
  getProductsQuery
} from './queries/product';
import { Connection } from './types/__global';
import { Menu, ShopifyMenuOperation } from './types/menu';
import {
  Collection,
  ShopifyCollection,
  ShopifyCollectionOperation,
  ShopifyCollectionProductsOperation,
  ShopifyCollectionsOperation
} from './types/collection';
import { Page, ShopifyPageOperation, ShopifyPagesOperation } from './types/page';
import {
  Product,
  ShopifyProduct,
  ShopifyProductOperation,
  ShopifyProductRecommendationsOperation,
  ShopifyProductsOperation
} from './types/product';
import {
  Cart,
  ShopifyAddToCartOperation,
  ShopifyCart,
  ShopifyCartOperation,
  ShopifyCreateCartOperation,
  ShopifyRemoveFromCartOperation,
  ShopifyUpdateCartOperation
} from './types/cart';
import {
  Customer,
  ShopifCustomerRecoverOperation,
  ShopifyAccessToken,
  ShopifyAccessTokenCreate,
  ShopifyAccessTokenCreateOperation,
  ShopifyAccessTokenDeleteOperation,
  ShopifyAccessTokenRenewOperation,
  ShopifyBuyerIdentityInput,
  ShopifyCustomer,
  ShopifyCustomerAddressCreateOperation,
  ShopifyCustomerAddressDeleteOperation,
  ShopifyCustomerAddressUpdateOperation,
  ShopifyCustomerCreate,
  ShopifyCustomerCreateOperation,
  ShopifyCustomerDefaultAddressUpdateOperation,
  ShopifyCustomerOperation,
  ShopifyCustomerUpdateInput,
  ShopifyCustomerUpdateOperation,
  ShopifyMailingAddressInput,
  ShopifyUpdateBuyerIdentityOperation
} from './types/customer';
import { setCookie } from 'utils/cookie';

const domain = `https://${process.env.SHOPIFY_STORE_DOMAIN!}`;
const endpoint = `${domain}${SHOPIFY_GRAPHQL_API_ENDPOINT}`;
const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!;

type ExtractVariables<T> = T extends { variables: object } ? T['variables'] : never;

export async function shopifyFetch<T>({
  query,
  variables,
  headers,
  cache,
  revalidate = false
}: {
  query: string;
  variables?: ExtractVariables<T>;
  headers?: HeadersInit;
  cache?: RequestCache;
  revalidate?: boolean;
}): Promise<{ status: number; body: T } | never> {
  try {
    const result = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': key,
        ...headers
      },
      body: JSON.stringify({
        ...(query && { query }),
        ...(variables && { variables })
      }),
      cache: cache ? cache : undefined,
      next: revalidate ? { revalidate: 900 } : undefined
    });

    const body = await result.json();

    if (body.errors) {
      throw body.errors[0];
    }

    return {
      status: result.status,
      body
    };
  } catch (e) {
    if (isShopifyError(e)) {
      throw {
        status: e.status || 500,
        message: e.message,
        query
      };
    }

    throw {
      error: e,
      query
    };
  }
}

const removeEdgesAndNodes = (array: Connection<any>) => {
  return array.edges.map((edge) => edge?.node);
};

const reshapeCart = (cart: ShopifyCart): Cart => {
  if (!cart.cost?.totalTaxAmount) {
    cart.cost.totalTaxAmount = {
      amount: '0.0',
      currencyCode: 'USD'
    };
  }

  return {
    ...cart,
    lines: removeEdgesAndNodes(cart.lines)
  };
};

const reshapeCollection = (collection: ShopifyCollection): Collection | undefined => {
  if (!collection) {
    return undefined;
  }

  return {
    ...collection,
    path: `/search/${collection.handle}`
  };
};

const reshapeCollections = (collections: ShopifyCollection[]) => {
  const reshapedCollections = [];

  for (const collection of collections) {
    if (collection) {
      const reshapedCollection = reshapeCollection(collection);

      if (reshapedCollection) {
        reshapedCollections.push(reshapedCollection);
      }
    }
  }

  return reshapedCollections;
};

const reshapeProduct = (product: ShopifyProduct, filterHiddenProducts: boolean = true) => {
  if (!product || (filterHiddenProducts && product.tags.includes(HIDDEN_PRODUCT_TAG))) {
    return undefined;
  }

  const { images, variants, ...rest } = product;

  return {
    ...rest,
    images: removeEdgesAndNodes(images),
    variants: removeEdgesAndNodes(variants)
  };
};

const reshapeProducts = (products: ShopifyProduct[]) => {
  const reshapedProducts = [];

  for (const product of products) {
    if (product) {
      const reshapedProduct = reshapeProduct(product);

      if (reshapedProduct) {
        reshapedProducts.push(reshapedProduct);
      }
    }
  }

  return reshapedProducts;
};

const reshapeCustomer = (customer: ShopifyCustomer) => {
  return {
    ...customer,
    addresses: removeEdgesAndNodes(customer.addresses),
    orders: removeEdgesAndNodes(customer.orders)
  };
};

export async function createCart(): Promise<Cart> {
  const res = await shopifyFetch<ShopifyCreateCartOperation>({
    query: createCartMutation,
    cache: 'no-store'
  });

  return reshapeCart(res.body.data.cartCreate.cart);
}

export async function addToCart(
  cartId: string,
  lines: { merchandiseId: string; quantity: number }[]
): Promise<Cart> {
  const res = await shopifyFetch<ShopifyAddToCartOperation>({
    query: addToCartMutation,
    variables: {
      cartId,
      lines
    },
    cache: 'no-store'
  });
  return reshapeCart(res.body.data.cartLinesAdd.cart);
}

export async function removeFromCart(cartId: string, lineIds: string[]): Promise<Cart> {
  const res = await shopifyFetch<ShopifyRemoveFromCartOperation>({
    query: removeFromCartMutation,
    variables: {
      cartId,
      lineIds
    },
    cache: 'no-store'
  });

  return reshapeCart(res.body.data.cartLinesRemove.cart);
}

export async function updateCart(
  cartId: string,
  lines: { id: string; merchandiseId: string; quantity: number }[]
): Promise<Cart> {
  const res = await shopifyFetch<ShopifyUpdateCartOperation>({
    query: editCartItemsMutation,
    variables: {
      cartId,
      lines
    },
    cache: 'no-store'
  });

  return reshapeCart(res.body.data.cartLinesUpdate.cart);
}

export async function getCart(cartId: string): Promise<Cart | null> {
  const res = await shopifyFetch<ShopifyCartOperation>({
    query: getCartQuery,
    variables: { cartId },
    cache: 'no-store'
  });

  if (!res.body.data.cart) {
    return null;
  }

  return reshapeCart(res.body.data.cart);
}

export async function getCollection(handle: string): Promise<Collection | undefined> {
  const res = await shopifyFetch<ShopifyCollectionOperation>({
    query: getCollectionQuery,
    variables: {
      handle
    },
    cache: 'force-cache'
  });

  return reshapeCollection(res.body.data.collection);
}

export async function getCollectionProducts({
  handle,
  reverse,
  sortKey
}: {
  handle: string;
  reverse?: boolean;
  sortKey?: string;
}): Promise<Product[]> {
  const res = await shopifyFetch<ShopifyCollectionProductsOperation>({
    query: getCollectionProductsQuery,
    variables: {
      handle,
      sortKey,
      reverse
    },
    cache: 'force-cache'
  });

  if (!res.body.data.collection) {
    console.log('No collection found for handle', handle);
    return [];
  }

  return reshapeProducts(removeEdgesAndNodes(res.body.data.collection.products));
}

export async function getCollections(): Promise<Collection[]> {
  const res = await shopifyFetch<ShopifyCollectionsOperation>({
    query: getCollectionsQuery,
    cache: 'force-cache'
  });
  const shopifyCollections = removeEdgesAndNodes(res.body?.data?.collections);
  const collections = [
    {
      handle: '',
      title: 'All',
      description: 'All products',
      seo: {
        title: 'All',
        description: 'All products'
      },
      path: '/search',
      updatedAt: new Date().toISOString()
    },
    // Filter out the `hidden` collections.
    // Collections that start with `hidden-*` need to be hidden on the search page.
    ...reshapeCollections(shopifyCollections).filter(
      (collection) => !collection.handle.startsWith('hidden')
    )
  ];

  return collections;
}

export async function getMenu(handle: string): Promise<Menu[]> {
  const res = await shopifyFetch<ShopifyMenuOperation>({
    query: getMenuQuery,
    cache: 'force-cache',
    variables: {
      handle
    }
  });

  return (
    res.body?.data?.menu?.items.map((item: { title: string; url: string }) => ({
      title: item.title,
      path: item.url.replace(domain, '').replace('/collections', '/search').replace('/pages', '')
    })) || []
  );
}

export async function getPage(handle: string): Promise<Page> {
  const res = await shopifyFetch<ShopifyPageOperation>({
    query: getPageQuery,
    variables: { handle },
    cache: 'force-cache'
  });

  return res.body.data.pageByHandle;
}

export async function getPages(): Promise<Page[]> {
  const res = await shopifyFetch<ShopifyPagesOperation>({
    query: getPagesQuery,
    cache: 'force-cache'
  });

  return removeEdgesAndNodes(res.body.data.pages);
}

export async function getProduct(handle: string): Promise<Product | undefined> {
  const res = await shopifyFetch<ShopifyProductOperation>({
    query: getProductQuery,
    variables: {
      handle
    },
    cache: 'force-cache'
  });

  return reshapeProduct(res.body.data.product, false);
}

export async function getProductRecommendations(productId: string): Promise<Product[]> {
  const res = await shopifyFetch<ShopifyProductRecommendationsOperation>({
    query: getProductRecommendationsQuery,
    variables: {
      productId
    },
    cache: 'force-cache'
  });

  return reshapeProducts(res.body.data.productRecommendations);
}

export async function getProducts({
  query,
  reverse,
  sortKey
}: {
  query?: string;
  reverse?: boolean;
  sortKey?: string;
}): Promise<Product[]> {
  const res = await shopifyFetch<ShopifyProductsOperation>({
    query: getProductsQuery,
    variables: {
      query,
      reverse,
      sortKey
    },
    cache: 'force-cache'
  });

  return reshapeProducts(removeEdgesAndNodes(res.body.data.products));
}

export async function createCustomer(input: ShopifyCustomerCreate): Promise<ShopifyCustomer> {
  const res = await shopifyFetch<ShopifyCustomerCreateOperation>({
    query: createCustomerMutation,
    variables: {
      input
    },
    cache: 'no-store'
  });
  const gqlResponse = res.body.data.customerCreate;

  if (gqlResponse?.customerUserErrors?.length) console.log(gqlResponse.customerUserErrors);

  return gqlResponse.customer;
}

export async function createAccessToken(
  input: ShopifyAccessTokenCreate
): Promise<ShopifyAccessToken> {
  const res = await shopifyFetch<ShopifyAccessTokenCreateOperation>({
    query: createAccessTokenMutation,
    variables: {
      input
    },
    cache: 'no-store'
  });
  const gqlResponse = res.body.data.customerAccessTokenCreate;

  if (gqlResponse?.customerUserErrors?.length) console.log(gqlResponse.customerUserErrors);

  return gqlResponse.customerAccessToken;
}

export async function renewAccessToken(customerAccessToken: string): Promise<ShopifyAccessToken> {
  const res = await shopifyFetch<ShopifyAccessTokenRenewOperation>({
    query: renewAccessTokenMutation,
    variables: {
      customerAccessToken
    },
    cache: 'no-store'
  });

  return res.body.data.customerAccessTokenRenew.customerAccessToken;
}

export async function deleteAccessToken(customerAccessToken: string): Promise<string> {
  const res = await shopifyFetch<ShopifyAccessTokenDeleteOperation>({
    query: deleteAccessTokenMutation,
    variables: {
      customerAccessToken
    },
    cache: 'no-store'
  });

  return res.body.data.customerAccessTokenDelete.deletedAccessToken;
}

export async function getCustomer(customerAccessToken: string): Promise<Customer | null> {
  const res = await shopifyFetch<ShopifyCustomerOperation>({
    query: getCustomerQuery,
    variables: {
      customerAccessToken
    },
    cache: 'no-store'
  });

  if (!res.body.data.customer) {
    return null;
  }

  return reshapeCustomer(res.body.data.customer);
}

export async function updateBuyerIdentity({
  cartId,
  buyerIdentity
}: {
  cartId: string;
  buyerIdentity: ShopifyBuyerIdentityInput;
}): Promise<Cart | null> {
  const res = await shopifyFetch<ShopifyUpdateBuyerIdentityOperation>({
    query: updateBuyerIdentityMutation,
    variables: { cartId, buyerIdentity },
    cache: 'no-store'
  });
  console.log(res.body.data)

  if (!res.body.data.cart) {
    return null;
  }

  return reshapeCart(res.body.data.cart);
}

export async function customerRecover(email: string): Promise<Boolean> {
  const res = await shopifyFetch<ShopifCustomerRecoverOperation>({
    query: customerRecoverMutation,
    variables: { email },
    cache: 'no-store'
  });

  const gqlResponse = res.body.data.customerRecover;

  if (gqlResponse?.customerUserErrors?.length) {
    console.log(gqlResponse.customerUserErrors);
    return false;
  }

  return true;
}

export async function customerUpdate({
  customer,
  customerAccessToken
}: {
  customer: ShopifyCustomerUpdateInput;
  customerAccessToken: string;
}): Promise<Boolean> {
  const res = await shopifyFetch<ShopifyCustomerUpdateOperation>({
    query: customerUpdateMutation,
    variables: { customer, customerAccessToken },
    cache: 'no-store'
  });

  const gqlResponse = res.body.data.customerUpdate;

  if (gqlResponse?.customerUserErrors?.length) {
    console.log(gqlResponse.customerUserErrors);
    return false;
  }

  return true;
}

export async function customerAddressCreate({
  customerAccessToken,
  address
}: {
  customerAccessToken: string;
  address: ShopifyMailingAddressInput;
}): Promise<Boolean> {
  const res = await shopifyFetch<ShopifyCustomerAddressCreateOperation>({
    query: customerAddressCreateMutation,
    variables: { customerAccessToken, address },
    cache: 'no-store'
  });

  const gqlResponse = res.body.data.customerAddressCreate;

  if (gqlResponse?.customerUserErrors?.length) {
    console.log(gqlResponse.customerUserErrors);
    return false;
  }

  return true;
}

export async function customerAddressUpdate({
  customerAccessToken,
  address,
  id
}: {
  customerAccessToken: string;
  address: ShopifyMailingAddressInput;
  id: string;
}): Promise<Boolean> {
  const res = await shopifyFetch<ShopifyCustomerAddressUpdateOperation>({
    query: customerAddressUpdateMutation,
    variables: { customerAccessToken, address, id },
    cache: 'no-store'
  });

  const gqlResponse = res.body.data.customerAddressUpdate;
  console.log(gqlResponse);

  if (gqlResponse?.customerUserErrors?.length) {
    console.log(gqlResponse.customerUserErrors);
    return false;
  }

  return true;
}

export async function customerDefaultAddressUpdate({
  customerAccessToken,
  addressId
}: {
  customerAccessToken: string;
  addressId: string;
}): Promise<Boolean> {
  const res = await shopifyFetch<ShopifyCustomerDefaultAddressUpdateOperation>({
    query: customerDefaultAddressUpdateMutation,
    variables: { customerAccessToken, addressId },
    cache: 'no-store'
  });

  const gqlResponse = res.body.data.customerDefaultAddressUpdate;

  if (gqlResponse?.customerUserErrors?.length) {
    console.log(gqlResponse.customerUserErrors);
    return false;
  }

  return true;
}

export async function customerAddressDelete({
  customerAccessToken,
  id
}: {
  customerAccessToken: string;
  id: string;
}): Promise<Boolean> {
  const res = await shopifyFetch<ShopifyCustomerAddressDeleteOperation>({
    query: customerAddressDeleteMutation,
    variables: { customerAccessToken, id },
    cache: 'no-store'
  });

  const gqlResponse = res.body.data.customerAddressDelete;

  if (gqlResponse?.customerUserErrors?.length) {
    console.log(gqlResponse.customerUserErrors);
    return false;
  }

  return true;
}
