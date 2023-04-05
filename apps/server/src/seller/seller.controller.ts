import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { SellerService } from './seller.service';
import { Seller } from './seller.schema';

@Controller('seller')
export class SellerController {
  constructor(private readonly sellerService: SellerService) {}

  @Get()
  async findAll(): Promise<Seller[]> {
    return this.sellerService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Seller> {
    return this.sellerService.findOne(id);
  }

  @Post()
  async create(@Body() createSellerDto: Partial<Seller>): Promise<Seller> {
    return this.sellerService.create(createSellerDto);
  }
}
