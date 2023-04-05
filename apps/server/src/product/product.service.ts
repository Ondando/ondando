import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './product.schema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productModel.find().populate('category tags wishlists').exec();
  }

  async findById(id: string): Promise<Product> {
    return this.productModel
      .findById(id)
      .populate('category tags wishlists')
      .exec();
  }

  async create(product: Partial<Product>): Promise<Product> {
    const createdProduct = new this.productModel(product);
    return createdProduct.save();
  }

  async update(id: string, product: Partial<Product>): Promise<Product> {
    return this.productModel
      .findByIdAndUpdate(id, product, { new: true })
      .populate('category tags wishlists')
      .exec();
  }

  async delete(id: string): Promise<Product> {
    return this.productModel
      .findByIdAndDelete(id)
      .populate('category tags wishlists')
      .exec();
  }
}
