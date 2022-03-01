import { Order} from "../entity/order.entity";
import { OrderDto } from "../dto/order.dto";
import { Injectable, Controller } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from 'typeorm';




@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(Order)
        private orderRepository: Repository<Order>
    ){
    }

    async findAll(): Promise<Order[]> {
        return await this.orderRepository.find();
    }

    async findOne(uuid: string): Promise<Order> {
        return await this.orderRepository.findOne(uuid);
    }

    async create(dto : OrderDto): Promise<Order> {
        return await this.orderRepository.save(dto);
    }

    async update(order: Order): Promise<Order> {
        return await this.orderRepository.save(order);

    }

    async delete(uuid: string): Promise<DeleteResult> {
        return await this.orderRepository.delete(uuid);
    }
}