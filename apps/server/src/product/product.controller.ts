import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.schema';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Product> {
    return this.productService.findById(id);
  }

  @Post()
  async create(@Body() createProductDto: Partial<Product>): Promise<Product> {
    return this.productService.create(createProductDto);
  }
}
