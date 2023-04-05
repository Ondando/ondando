import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { SellerProductService } from './seller_product.service';
import { SellerProduct } from './seller_product.schema';

@Controller('seller-products')
export class SellerProductController {
  constructor(private readonly sellerProductService: SellerProductService) {}

  @Get()
  async findAll(): Promise<SellerProduct[]> {
    return this.sellerProductService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<SellerProduct> {
    return this.sellerProductService.findOne(id);
  }

  @Post()
  async create(
    @Body() createSellerProductDto: Partial<SellerProduct>,
  ): Promise<SellerProduct> {
    return this.sellerProductService.create(createSellerProductDto);
  }
}
