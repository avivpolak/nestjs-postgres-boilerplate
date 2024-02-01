import { Injectable } from '@nestjs/common';
import { CreateApiDto } from './dto/create-api.dto';
import { UpdateApiDto } from './dto/update-api.dto';
import { DistributionSessionService } from '../distribution-session/distribution-session.service';
import { CollectionPointService } from '../collection-point/collection-point.service';
import { CustomerService } from '../customer/customer.service';
import { OrderService } from '../order/order.service';
import { ProductService } from '../product/product.service';
import { SellerService } from '../seller/seller.service';
import { Seller } from '../seller/seller.entity';
import { Product } from '../product/product.entity';
//import { DistributionSession } from '../distribution-session/distribution-session.entity';
//import { DistributionSessionService } from '../distribution-session/distribution-session.service';

@Injectable()
export class ApiService {
  constructor(
    private readonly distributionSessionService: DistributionSessionService,
    private readonly collectionPointService: CollectionPointService,
    private readonly customerService: CustomerService,
    private readonly orderService: OrderService,
    private readonly productService: ProductService,
    private readonly sellerService: SellerService,
  ) {}

  create(createApiDto: CreateApiDto) {
    this.distributionSessionService.getAll;
    return 'This action adds a new api';
  }

  async getDistributionSessionsList() {
    const allDs = await this.distributionSessionService.getAll();
    const futureDs = allDs.filter((ds) => new Date(ds.time) > new Date());
    const result = futureDs
      .map(
        (ds, i) =>
          `${numberToEmoji(i + 1)}* ${ds.collectionPoint.city}* - ${ds.time} (${
            ds.collectionPoint.address
          })\n`,
      )
      .join('');
    const idArray = futureDs.map((ds) => ds.id);

    return { result, optionsAmount: futureDs.length, idArray };
  }

  async getSellersList(distributionSessionId: number) {
    const sellers = (
      await this.distributionSessionService.get(distributionSessionId)
    )?.sellers;
    const result = sellers
      .map(
        (seller, i) =>
          `${numberToEmoji(i + 1)} *${seller.name}* - ${seller.specialty}\n`,
      )
      .join('');
    const idArray = sellers.map((seller) => seller.id);
    return { result, optionsAmount: sellers.length, idArray };
  }

  async getProductsList(sellerId: number) {
    const products = (await this.sellerService.get(sellerId))?.products;
    const availableProducts = filterUnavailableProducts(products);
    const result = availableProducts
      .map(
        (product, i) =>
          `${numberToEmoji(i + 1)} *${product.name}* - ${product.price}\n`,
      )
      .join('');
    const idArray = availableProducts.map((product) => product.id);
    return { result, optionsAmount: products.length, idArray };
  }

  async getPaymentFormsList(sellerId: number) {
    const paymentFormCodes = getPaymentFormsCodes(
      await this.sellerService.get(sellerId),
    );
    const result = paymentFormCodes
      .map(
        (paymentFormCode, i) =>
          `${numberToEmoji(i + 1)} *${paymentFormsEnum[paymentFormCode]}*\n`,
      )
      .join('');
    return { result, optionsAmount: paymentFormCodes.length };
  }

  findOne(id: number) {
    return `This action returns a #${id} api`;
  }

  update(id: number, updateApiDto: UpdateApiDto) {
    return `This action updates a #${id} api`;
  }

  remove(id: number) {
    return `This action removes a #${id} api`;
  }
}

function InjectModel(
  distributionSession: any,
): (target: ApiService, propertyKey: 'distributionSessionModel') => void {
  throw new Error('Function not implemented.');
}

const paymentFormsEnum = {
  1: 'פייבוקס 🗳️',
  2: 'ביט ♦️',
  3: 'מזומן במדוייק בעת האיסוף 💸',
  4: 'אשראי בעת האיסוף 💳',
  5: 'קישור לתשלום מאובטח 🌐',
};
function filterUnavailableProducts(products: Product[]): Product[] {
  return products.filter(
    (product) => product.orders.length < product.inventory,
  );
}
function getPaymentFormsCodes(seller: Seller): number[] {
  const {
    payboxLink,
    bitPhoneNumber,
    acceptingCash,
    acceptingCreditCard,
    securePaymentLink,
  } = seller;
  const paymentFormsCodes = Object.entries({
    1: payboxLink,
    2: bitPhoneNumber,
    3: acceptingCash,
    4: acceptingCreditCard,
    5: securePaymentLink,
  })
    .filter(([_, condition]) => condition)
    .map(([formCode]) => parseInt(formCode));

  return paymentFormsCodes;
}
function numberToEmoji(number: number) {
  // יצירת מערך של ספרות המתאימות לאימוג'ים
  const emojiDigits = [
    '0️⃣',
    '1️⃣',
    '2️⃣',
    '3️⃣',
    '4️⃣',
    '5️⃣',
    '6️⃣',
    '7️⃣',
    '8️⃣',
    '9️⃣',
  ];

  // קבלת ספרות המקבילות למספר והמרה לאימוג'ים
  const emojiArray = Array.from(
    String(number).split('').reverse().join(''),
    (digit) => emojiDigits[digit],
  );

  // שלב האימוג'ים למחרוזת והחזרה
  return emojiArray.join('');
}
