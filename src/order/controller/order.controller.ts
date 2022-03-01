import { Order } from "../entity/order.entity";
import { OrderDto } from "../dto/order.dto";
import { OrderService } from "../service/order.service";
import { ApiTags } from "@nestjs/swagger";
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { DeleteResult } from 'typeorm';




@ApiTags('Orders')
@Controller('order')

export class OrderController {
    constructor(private orderService: OrderService){

    }

    @Get()
    findAll(): Promise<Order[]> {
        return this.orderService.findAll();
    }

    @Get(':uuid')
    findById(@Param('uuid') uuid:string): Promise<Order> {
        return this.orderService.findOne(uuid);
    }

    @Post()
    create(@Body() dto: OrderDto): Promise<Order> {
        return this.orderService.create(dto);
    }

    @Put()
    update(@Body() order: Order): Promise<Order> {
        return this.orderService.update(order);
    }

    @Delete()
    delete(@Param('uuid') uuid: string): Promise<DeleteResult> {
        return this.orderService.delete(uuid);
    }
}