import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { Address } from '../entity/address.entity';
import { AddressDto } from '../dto/address.dto';


@Injectable()
export class AddressService {
    constructor(
        @InjectRepository(Address)
        private addressRepository: Repository<Address>
    ){
    }

    async findAll(): Promise<Address[]> {
        return await this.addressRepository.find();
    }

    async findOne(uuid: string): Promise<Address> {
        return await this.addressRepository.findOne(uuid);
    }

    async create(dto: AddressDto): Promise<Address> {
        return await this.addressRepository.save(dto);
    }

    async update(address: Address): Promise<Address> {
        return await this.addressRepository.save(address);
    }

    async delete(uuid: string): Promise<DeleteResult> {
        return await this.addressRepository.delete(uuid);
    }
}