import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { WishlistService } from './wishlist.service';
import { Wishlist } from './wishlist.schema';

@Controller('wishlists')
export class WishlistController {
  constructor(private readonly wishlistService: WishlistService) {}

  @Get()
  async findAll(): Promise<Wishlist[]> {
    return this.wishlistService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Wishlist> {
    return this.wishlistService.findOne(id);
  }

  @Post()
  async create(
    @Body() createWishlistDto: Partial<Wishlist>,
  ): Promise<Wishlist> {
    return this.wishlistService.create(createWishlistDto);
  }
}
