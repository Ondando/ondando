import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tag, TagDocument } from './tag.schema';

@Injectable()
export class TagService {
  constructor(@InjectModel(Tag.name) private tagModel: Model<TagDocument>) {}

  async findAll(): Promise<Tag[]> {
    return this.tagModel.find().populate('products').exec();
  }

  async findOne(id: string): Promise<Tag> {
    return this.tagModel.findById(id).populate('products').exec();
  }

  async create(createTagDto: Partial<Tag>): Promise<Tag> {
    const createdTag = new this.tagModel(createTagDto);
    return createdTag.save();
  }
}
