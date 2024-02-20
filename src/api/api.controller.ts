import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get('DistributionSessionsList')
  getDistributionSessionsList() {
    return this.apiService.getDistributionSessionsList();
  }

  @Get('sellers-list/:distributionSessionId')
  getSellersList(@Param('distributionSessionId') distributionSessionId: number) {
    return this.apiService.getSellersList(distributionSessionId);
  }

  @Get('products-list/:sellerId')
  getProductsList(@Param('sellerId') sellerId: number) {
    return this.apiService.getProductsList(sellerId);
  }
}
