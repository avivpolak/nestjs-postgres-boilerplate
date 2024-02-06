// export const MockService = { to make it work on production mode, needs to move all jest functions to test files
//   create: jest.fn((dto) => {
//     return {
//       id: 1,
//       ...dto,
//     };
//   }),
//   update: jest.fn((id, dto) => {
//     return {
//       id,
//       ...dto,
//     };
//   }),
// };
const MockCustomerDto = {
  id: 1,
  name: 'string',
  manychatID: "1",
  whatsappID: "971531356707",
  orders: [],
};
const MockDistributionSessionDto = {
  id: 1,
  time: 'string',
  collectionPoint: {
    id: 1,
    city: 'string',
    address: 'string',
    distributionSessions: [],
  },
  sellers: [],
  orders: [],
  hide: true,
};

const MockSellerDto = {
  id: 1,
  name: 'string',
  specialty: 'string',
  welcomeMessage: 'string',
  productDescriptionMessage: 'string',
  payboxLink: 'string',
  bitPhoneNumber: 'string',
  questionsPhoneNumber: 'string',
  contactPhoneNumber: 'string',
  minAmountPerDistribution: 1,
  visibilityCutoffHours: 1,
  products: [],
  orders: [],
  distributionSessions: [],
};
const MockCollectionPointDto = {
  city: 'string',
  address: 'string',
  distributionSessions: [],
};
const MockOrder = {
    id:1,
    time: 'string',
    totalCost: 1,
    proofOfPay: 'string',
    customer: MockCustomerDto,
    seller: MockSellerDto,
    distributionSession: MockDistributionSessionDto,
    products:[]
}
const MockProduct = {
  id:1,
  name: "string",
  price: 1,
  priceForTwo: 1,
  image: "string",
  inventory: 1,
  seller: 1,
}
export const MockDto = {
  customer: MockCustomerDto,
  distributionSession: MockDistributionSessionDto,
  order: MockOrder,
  seller: MockSellerDto,
  collectionPoint:MockCollectionPointDto,
  product:MockProduct,
};
