import { Connection } from './__global';
import { ShopifyCart } from './cart';

/* eslint-disable */
export enum CountryCode {
  AC = 'AC',
  AD = 'AD',
  AE = 'AE',
  AF = 'AF',
  AG = 'AG',
  AI = 'AI',
  AL = 'AL',
  AM = 'AM',
  AN = 'AN',
  AO = 'AO',
  AR = 'AR',
  AT = 'AT',
  AU = 'AU',
  AW = 'AW',
  AX = 'AX',
  AZ = 'AZ',
  BA = 'BA',
  BB = 'BB',
  BD = 'BD',
  BE = 'BE',
  BF = 'BF',
  BG = 'BG',
  BH = 'BH',
  BI = 'BI',
  BJ = 'BJ',
  BL = 'BL',
  BM = 'BM',
  BN = 'BN',
  BO = 'BO',
  BQ = 'BQ',
  BR = 'BR',
  BS = 'BS',
  BT = 'BT',
  BV = 'BV',
  BW = 'BW',
  BY = 'BY',
  BZ = 'BZ',
  CA = 'CA',
  CC = 'CC',
  CD = 'CD',
  CF = 'CF',
  CG = 'CG',
  CH = 'CH',
  CI = 'CI',
  CK = 'CK',
  CL = 'CL',
  CM = 'CM',
  CN = 'CN',
  CO = 'CO',
  CR = 'CR',
  CU = 'CU',
  CV = 'CV',
  CW = 'CW',
  CX = 'CX',
  CY = 'CY',
  CZ = 'CZ',
  DE = 'DE',
  DJ = 'DJ',
  DK = 'DK',
  DM = 'DM',
  DO = 'DO',
  DZ = 'DZ',
  EC = 'EC',
  EE = 'EE',
  EG = 'EG',
  EH = 'EH',
  ER = 'ER',
  ES = 'ES',
  ET = 'ET',
  FI = 'FI',
  FJ = 'FJ',
  FK = 'FK',
  FO = 'FO',
  FR = 'FR',
  GA = 'GA',
  GB = 'GB',
  GD = 'GD',
  GE = 'GE',
  GF = 'GF',
  GG = 'GG',
  GH = 'GH',
  GI = 'GI',
  GL = 'GL',
  GM = 'GM',
  GN = 'GN',
  GP = 'GP',
  GQ = 'GQ',
  GR = 'GR',
  GS = 'GS',
  GT = 'GT',
  GW = 'GW',
  GY = 'GY',
  HK = 'HK',
  HM = 'HM',
  HN = 'HN',
  HR = 'HR',
  HT = 'HT',
  HU = 'HU',
  ID = 'ID',
  IE = 'IE',
  IL = 'IL',
  IM = 'IM',
  IN = 'IN',
  IO = 'IO',
  IQ = 'IQ',
  IR = 'IR',
  IS = 'IS',
  IT = 'IT',
  JE = 'JE',
  JM = 'JM',
  JO = 'JO',
  JP = 'JP',
  KE = 'KE',
  KG = 'KG',
  KH = 'KH',
  KI = 'KI',
  KM = 'KM',
  KN = 'KN',
  KP = 'KP',
  KR = 'KR',
  KW = 'KW',
  KY = 'KY',
  KZ = 'KZ',
  LA = 'LA',
  LB = 'LB',
  LC = 'LC',
  LI = 'LI',
  LK = 'LK',
  LR = 'LR',
  LS = 'LS',
  LT = 'LT',
  LU = 'LU',
  LV = 'LV',
  LY = 'LY',
  MA = 'MA',
  MC = 'MC',
  MD = 'MD',
  ME = 'ME',
  MF = 'MF',
  MG = 'MG',
  MK = 'MK',
  ML = 'ML',
  MM = 'MM',
  MN = 'MN',
  MO = 'MO',
  MQ = 'MQ',
  MR = 'MR',
  MS = 'MS',
  MT = 'MT',
  MU = 'MU',
  MV = 'MV',
  MW = 'MW',
  MX = 'MX',
  MY = 'MY',
  MZ = 'MZ',
  NA = 'NA',
  NC = 'NC',
  NE = 'NE',
  NF = 'NF',
  NG = 'NG',
  NI = 'NI',
  NL = 'NL',
  NO = 'NO',
  NP = 'NP',
  NR = 'NR',
  NU = 'NU',
  NZ = 'NZ',
  OM = 'OM',
  PA = 'PA',
  PE = 'PE',
  PF = 'PF',
  PG = 'PG',
  PH = 'PH',
  PK = 'PK',
  PL = 'PL',
  PM = 'PM',
  PN = 'PN',
  PS = 'PS',
  PT = 'PT',
  PY = 'PY',
  QA = 'QA',
  RE = 'RE',
  RO = 'RO',
  RS = 'RS',
  RU = 'RU',
  RW = 'RW',
  SA = 'SA',
  SB = 'SB',
  SC = 'SC',
  SD = 'SD',
  SE = 'SE',
  SG = 'SG',
  SH = 'SH',
  SI = 'SI',
  SJ = 'SJ',
  SK = 'SK',
  SL = 'SL',
  SM = 'SM',
  SN = 'SN',
  SO = 'SO',
  SR = 'SR',
  SS = 'SS',
  ST = 'ST',
  SV = 'SV',
  SX = 'SX',
  SY = 'SY',
  SZ = 'SZ',
  TA = 'TA',
  TC = 'TC',
  TD = 'TD',
  TF = 'TF',
  TG = 'TG',
  TH = 'TH',
  TJ = 'TJ',
  TK = 'TK',
  TL = 'TL',
  TM = 'TM',
  TN = 'TN',
  TO = 'TO',
  TR = 'TR',
  TT = 'TT',
  TV = 'TV',
  TW = 'TW',
  TZ = 'TZ',
  UA = 'UA',
  UG = 'UG',
  UM = 'UM',
  US = 'US',
  UY = 'UY',
  UZ = 'UZ',
  VA = 'VA',
  VC = 'VC',
  VE = 'VE',
  VG = 'VG',
  VI = 'VI',
  VN = 'VN',
  VU = 'VU',
  WF = 'WF',
  WS = 'WS',
  XK = 'XK',
  YE = 'YE',
  YT = 'YT',
  ZA = 'ZA',
  ZM = 'ZM',
  ZW = 'ZW',
  ZZ = 'ZZ'
}

// enum CustomerErrorCode {
//   ALREADY_ENABLED = 'ALREADY_ENABLED',
//   BAD_DOMAIN = 'BAD_DOMAIN',
//   BLANK = 'BLANK',
//   CONTAINS_HTML_TAGS = 'CONTAINS_HTML_TAGS',
//   CONTAINS_URL = 'CONTAINS_URL',
//   CUSTOMER_DISABLED = 'CUSTOMER_DISABLED',
//   INVALID = 'INVALID',
//   INVALID_MULTIPASS_REQUEST = 'INVALID_MULTIPASS_REQUEST',
//   NOT_FOUND = 'NOT_FOUND',
//   PASSWORD_STARTS_OR_ENDS_WITH_WHITESPACE = 'PASSWORD_STARTS_OR_ENDS_WITH_WHITESPACE',
//   TAKEN = 'TAKEN',
//   TOKEN_INVALID = 'TOKEN_INVALID',
//   TOO_LONG = 'TOO_LONG',
//   TOO_SHORT = 'TOO_SHORT',
//   UNIDENTIFIED_CUSTOMER = 'UNIDENTIFIED_CUSTOMER'
// }


export type ShopifyCustomerCreate = {
  acceptsMarketing?: boolean | null;
  email: string;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  phone?: string | null;
};

export type ShopifyAccessTokenCreate = {
  email: string;
  password: string;
};

export type ShopifyAccessToken = {
  accessToken: string;
  expiresAt: Date;
};

export type ShopifyDeleteAccessToken = {
  deletedAccessToken: string;
  deletedCustomerAccessTokenId: string;
};

export type ShopifyCustomerUserErrors = {
  field: string[];
  message: string;
};

export type ShopifyUserErrors = {
  field: string[];
  message: string;
};

export type ShopifyCustomer = {
  acceptsMarketing: boolean;
  createdAt: Date;
  defaultAddress?: MailingAddress;
  displayName: string;
  email?: string;
  firstName?: string;
  id: string;
  lastName?: string;
  numberOfOrders: number;
  phone?: string;
  tags: string[];
  updatedAt: Date;
  addresses: Connection<MailingAddress[]>;
  orders: Connection<ShopifyOrder[]>;
};

export type Customer = {
  acceptsMarketing: boolean;
  createdAt: Date;
  defaultAddress?: MailingAddress;
  displayName: string;
  email?: string;
  firstName?: string;
  id: string;
  lastName?: string;
  numberOfOrders: number;
  phone?: string;
  tags: string[];
  updatedAt: Date;
  addresses: MailingAddress[];
  orders: ShopifyOrder[];
};

export type ShopifyOrder = {
  billingAddress?: MailingAddress;
  cancelReason?: string;
  canceledAt?: Date;
  currencyCode: string;
  currentSubtotalPrice: MoneyV2;
  currentTotalDuties?: MoneyV2;
  currentTotalPrice: MoneyV2;
  currentTotalTax: MoneyV2;
  customAttributes: Attribute[];
  customerLocale?: string;
  customerUrl?: string;
  edited: boolean;
  email?: string;
  financialStatus?: string;
  fulfillmentStatus: string;
  id: string;
  name: string;
  orderNumber: number;
  originalTotalDuties?: MoneyV2;
  originalTotalPrice: MoneyV2;
  phone?: string;
  processedAt: Date;
  shippingAddress?: MailingAddress;
  shippingDiscountAllocations: DiscountAllocation[];
  statusUrl: string;
  subtotalPrice?: MoneyV2;
  successfulFulfillments?: Fulfillment[];
  totalPrice: MoneyV2;
  totalRefunded: MoneyV2;
  totalShippingPrice: MoneyV2;
  totalTax?: MoneyV2;
};

export type MoneyV2 = {
  key: string;
  value?: string;
};

export type PricingPercentageValue = {
  percentage: number;
};

export type Fulfillment = {
  trackingCompany: string;
  trackingInfo: FulfillmentTrackingInfo[];
};

export type FulfillmentTrackingInfo = {
  number: string;
  url: string;
};

export type Attribute = {
  amount: number;
  currencyCode: string;
};

export type DiscountAllocation = {
  allocatedAmount: MoneyV2;
  discountApplication: DiscountApplication;
};

interface DiscountApplication {
  allocationMethod: string;
  targetSelection: string;
  targetType: string;
  value: PricingValue; // Assuming PricingValue is another interface or type
}

type PricingValue = MoneyV2 | PricingPercentageValue;

export type ShopifyBuyerIdentityInput = {
  countryCode?: CountryCode; // The country where the buyer is located.
  customerAccessToken?: string; // The access token used to identify the customer associated with the cart.
  deliveryAddressPreferences?: DeliveryAddressInput[]; // An ordered set of delivery addresses tied to the buyer that is interacting with the cart.
  email?: string; // The email address of the buyer that is interacting with the cart.
  phone?: string; // The phone number of the buyer that is interacting with the cart.
  walletPreferences?: string[]; // A set of wallet preferences tied to the buyer that is interacting with the cart.
};

export type DeliveryAddressInput = {
  customerAddressId?: string; // The ID of a customer address that is associated with the buyer that is interacting with the cart.
  deliveryAddress?: MailingAddressInput; // Specifies the fields accepted to create or update a mailing address.
};

export type MailingAddressInput = {
  address1?: string; // The first line of the address. Typically the street address or PO Box number.
  address2?: string; // The second line of the address. Typically the number of the apartment, suite, or unit.
  city?: string; // The name of the city, district, village, or town.
  company?: string; // The name of the customer's company or organization.
  country?: string; // The name of the country.
  firstName?: string; // The first name of the customer.
  lastName?: string; // The last name of the customer.
  phone?: string; // A unique phone number for the customer. Formatted using E.164 standard. For example, +16135551111.
  province?: string; // The region of the address, such as the province, state, or district.
  zip?: string; // The zip code of the address.
};

export type MailingAddress = {
  address1?: string;
  address2?: string;
  city?: string;
  company?: string;
  country?: string;
  countryCodeV2?: CountryCode;
  firstName?: string;
  formatted: string[];
  formattedArea?: string;
  id: string;
  lastName?: string;
  latitude?: number;
  longitude?: number;
  name?: string;
  phone?: string;
  province?: string;
  provinceCode?: string;
  zip?: string;
};

export type ShopifyCustomerCreateOperation = {
  data: {
    customerCreate: {
      customer: ShopifyCustomer;
      customerUserErrors: ShopifyCustomerUserErrors[];
    };
  };
  variables: {
    input: ShopifyCustomerCreate;
  };
};

export type ShopifyAccessTokenCreateOperation = {
  data: {
    customerAccessTokenCreate: {
      customerAccessToken: ShopifyAccessToken;
      customerUserErrors: ShopifyCustomerUserErrors[];
    };
  };
  variables: {
    input: ShopifyAccessTokenCreate;
  };
};

export type ShopifyAccessTokenRenewOperation = {
  data: {
    customerAccessTokenRenew: {
      customerAccessToken: ShopifyAccessToken;
    };
  };
  variables: {
    customerAccessToken: string;
  };
};

export type ShopifyAccessTokenDeleteOperation = {
  data: {
    customerAccessTokenDelete: {
      deletedAccessToken: string;
      deletedCustomerAccessTokenId: string;
    };
  };
  variables: {
    customerAccessToken: string;
  };
};

export type ShopifyCustomerOperation = {
  data: {
    customer: ShopifyCustomer;
  };
  variables: {
    customerAccessToken: string;
  };
};

export type ShopifyUpdateBuyerIdentityOperation = {
  data: {
    cart: ShopifyCart;
  };
  variables: {
    cartId: string;
    buyerIdentity: ShopifyBuyerIdentityInput;
  };
};
