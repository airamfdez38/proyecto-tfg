import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Address } from "../entity/address.entity";
import { AddressService } from '../service/address.service';
import { AddressDto } from '../dto/address.dto';
import { DeleteResult } from "typeorm";



@ApiTags('Addresses')
@Controller('address')

export class AddressController {
    constructor(private addressService: AddressService){

    }

    @Get()
    findAll(): Promise<Address[]> {
        return this.addressService.findAll();
    }

    @Get(':uuid')
    findById(@Param('uuid') uuid: string): Promise<Address> {
        return this.addressService.findOne(uuid);
    }

    @Post()
    create(@Body() dto: AddressDto): Promise<Address> {
        return this.addressService.create(dto);
    }

    @Put()
    update(@Body() address:Address): Promise<Address> {
        return this.addressService.update(address);
    }

    @Delete(':uuid')
    delete(@Param('uuid') uuid: string): Promise<DeleteResult> {
        return this.addressService.delete(uuid);
    }
}