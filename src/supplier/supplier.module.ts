import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Supplier } from "./entity/supplier.entity";
import { SupplierService } from './service/supplier.service';
import { SupplierController } from './controller/supplier.controller';


@Module({
    imports: [TypeOrmModule.forFeature([Supplier])],
    controllers: [SupplierController],
    providers: [SupplierService]
})

export class SupplierModule{}