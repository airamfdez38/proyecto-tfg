import { Supplier } from "../entity/supplier.entity";
import { SupplierDto } from "../dto/supplier.dto";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from 'typeorm';


@Injectable()
export class SupplierService {
    constructor(
        @InjectRepository(Supplier)
        private supplierRepository: Repository<Supplier>    
    ){
    }

    async findAll(): Promise<Supplier[]> {
        return await this.supplierRepository.find()
    }

    async findOne(uuid: string): Promise<Supplier> {
        return await this.supplierRepository.findOne(uuid);
    }

    async create(dto: SupplierDto): Promise<Supplier> {
        return await this.supplierRepository.save(dto);
    }

    async update(supplier: Supplier): Promise<Supplier> {
        return await this.supplierRepository.save(supplier);
    }

    async delete(uuid: string): Promise<DeleteResult> {
        return await this.supplierRepository.delete(uuid);
    }

}