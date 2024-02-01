import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Patch,
  Param,
  Delete,
  Logger,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { BaseController } from '../base/base.controller';
import { Customer } from './customer.entity';

@Controller('customer')
export class CustomerController extends BaseController<Customer> {
  constructor(private readonly customerService: CustomerService) {
    super(customerService);
  }

  @Post()
  async create(@Body() entity: CreateCustomerDto): Promise<number> {
    return this.customerService.create(entity);
  }

  @Put(':id')
  async update(
    @Body() entity: UpdateCustomerDto,
    @Param('id') id: number,
  ): Promise<UpdateCustomerDto> {
    return this.customerService.update(entity, id);
  }
}
