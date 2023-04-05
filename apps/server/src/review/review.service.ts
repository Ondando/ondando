import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Review, ReviewDocument } from './review.schema';

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel(Review.name) private reviewModel: Model<ReviewDocument>,
  ) {}

  async findAll(): Promise<Review[]> {
    return this.reviewModel.find().exec();
  }

  async findOne(id: string): Promise<Review> {
    return this.reviewModel.findById(id).exec();
  }

  async create(createReviewDto: any): Promise<Review> {
    const createdReview = new this.reviewModel(createReviewDto);
    return createdReview.save();
  }
}
