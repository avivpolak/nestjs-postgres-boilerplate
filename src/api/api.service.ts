import { Injectable } from '@nestjs/common';
import { CreateApiDto } from './dto/create-api.dto';
import { UpdateApiDto } from './dto/update-api.dto';
import { DistributionSessionService } from '../distribution-session/distribution-session.service';
import { CollectionPointService } from '../collection-point/collection-point.service';
import { CustomerService } from '../customer/customer.service';
import { OrderService } from '../order/order.service';
import { ProductService } from '../product/product.service';
import { SellerService } from '../seller/seller.service';
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
    this.distributionSessionService.getAll
    return 'This action adds a new api';
  }

  async getDistributionSessionsList() {
    const allDs = await this.distributionSessionService.getAll()
    const filteredDs =  allDs.filter((ds)=>{
      const time = new Date(ds.time)
      const now  = new Date()
      return time>now
    })
    return filteredDs.map((ds,i)=>`${numberToEmoji(i+1)}* ${(ds.collectionPoint).city}* - ${ds.time} (${ds.collectionPoint.address})\n`).join("")
  }

  async getSellersList(distributionSessionId:number) {
    return (await this.distributionSessionService.get(distributionSessionId))?.sellers?.map((seller,i)=>
    `${numberToEmoji(i+1)} *${seller.name}* - ${seller.specialty}\n`).join("")
  }

  async getProductsList(sellerId:number) {
    return (await this.sellerService.get(sellerId))?.products?.map((product,i)=>
    `${numberToEmoji(i+1)} *${product.name}* - ${product.price}\n`).join("")
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
function InjectModel(distributionSession: any): (target: ApiService, propertyKey: "distributionSessionModel") => void {
  throw new Error('Function not implemented.');
}

function numberToEmoji(number:number) {
  // יצירת מערך של ספרות המתאימות לאימוג'ים
  const emojiDigits = ["0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"];
  
  // קבלת ספרות המקבילות למספר והמרה לאימוג'ים
  const emojiArray = Array.from(String(number).split("").reverse().join(""), digit => emojiDigits[digit]);

  // שלב האימוג'ים למחרוזת והחזרה
  return emojiArray.join("");
}
