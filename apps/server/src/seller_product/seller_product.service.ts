import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SellerProduct, SellerProductDocument } from './seller_product.schema';

@Injectable()
export class SellerProductService {
  constructor(
    @InjectModel(SellerProduct.name)
    private readonly sellerProductModel: Model<SellerProductDocument>,
  ) {}

  async findAll(): Promise<SellerProduct[]> {
    return this.sellerProductModel.find().exec();
  }

  async findOne(id: string): Promise<SellerProduct> {
    return this.sellerProductModel.findById(id).exec();
  }

  async create(
    createSellerProductDto: Partial<SellerProduct>,
  ): Promise<SellerProduct> {
    const createdSellerProduct = new this.sellerProductModel(
      createSellerProductDto,
    );
    return createdSellerProduct.save();
  }
}
