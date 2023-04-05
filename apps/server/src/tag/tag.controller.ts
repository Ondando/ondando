import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TagService } from './tag.service';
import { Tag } from './tag.schema';

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Get()
  async findAll(): Promise<Tag[]> {
    return this.tagService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Tag> {
    return this.tagService.findOne(id);
  }

  @Post()
  async create(@Body() createTagDto: Partial<Tag>): Promise<Tag> {
    return this.tagService.create(createTagDto);
  }
}
