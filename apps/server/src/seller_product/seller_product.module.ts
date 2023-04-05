import { Module } from '@nestjs/common';
import { SellerProductService } from './seller_product.service';
import { SellerProductController } from './seller_product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SellerProduct, SellerProductSchema } from './seller_product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SellerProduct.name, schema: SellerProductSchema },
    ]),
  ],
  controllers: [SellerProductController],
  providers: [SellerProductService],
})
export class SellerProductModule {}
