import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Seller, SellerDocument } from './seller.schema';

@Injectable()
export class SellerService {
  constructor(
    @InjectModel(Seller.name)
    private readonly sellerModel: Model<SellerDocument>,
  ) {}

  async findAll(): Promise<Seller[]> {
    return this.sellerModel.find().populate('user').exec();
  }

  async findOne(id: string): Promise<Seller> {
    return this.sellerModel.findById(id).populate('user').exec();
  }

  async create(seller: Partial<Seller>): Promise<Seller> {
    const createdSeller = new this.sellerModel(seller);
    return createdSeller.save();
  }
}
