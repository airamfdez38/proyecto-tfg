import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Product } from '../entity/product.entity';
import { ProductDto } from '../dto/product.dto';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>
    ){
    }
    
    async findAll(): Promise<Product[]> {
        return await this.productRepository.find()
    }

    async findOne(uuid:string): Promise<Product> {
        return await this.productRepository.findOne(uuid);
    }

    async create(dto: ProductDto): Promise<Product> {
        return await this.productRepository.save(dto);
    }

    async update(product: Product):Promise<Product> {
        return await this.productRepository.save(product);
    }

    async remove(uuid: string): Promise<DeleteResult> {
        return await this.productRepository.delete(uuid);
    }

}
