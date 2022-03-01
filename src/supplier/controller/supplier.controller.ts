import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Supplier } from "../entity/supplier.entity";
import { SupplierDto } from "../dto/supplier.dto";
import { SupplierService } from "../service/supplier.service";
import { DeleteResult } from "typeorm";




@ApiTags('Suppliers')
@Controller('supplier')

export class SupplierController {
    constructor(private supplierService: SupplierService){

    }

    @Get()
    findAll(): Promise<Supplier[]> {
        return this.supplierService.findAll();
    }

    @Get(':uuid')
    findById(@Param('uuid') uuid: string): Promise<Supplier> {
        return this.supplierService.findOne(uuid);
    }

    @Post()
    create(@Body() dto: SupplierDto): Promise<Supplier> {
        return this.supplierService.create(dto);
    }

    @Put()
    update(@Body() supplier: Supplier): Promise<Supplier> {
        return this.supplierService.update(supplier);
    }

    @Delete(':uuid')
    delete(@Param('uuid') uuid: string): Promise<DeleteResult> {
        return this.supplierService.delete(uuid);
    }
}
