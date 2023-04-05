import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PayoutService } from './payout.service';
import { Payout } from './payout.schema';

@Controller('payout')
export class PayoutController {
  constructor(private readonly payoutService: PayoutService) {}

  @Get()
  async findAll(): Promise<Payout[]> {
    return this.payoutService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Payout> {
    return this.payoutService.findOne(id);
  }

  @Post()
  async create(@Body() createPayoutDto: Partial<Payout>): Promise<Payout> {
    return this.payoutService.create(createPayoutDto);
  }
}
