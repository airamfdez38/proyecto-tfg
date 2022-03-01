import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from './entity/address.entity';
import { AddressController } from './controller/address.controller';
import { AddressService } from "./service/address.service";

@Module({
    imports: [TypeOrmModule.forFeature([Address])],
    controllers: [AddressController],
    providers: [AddressService]
})

export class AddressModule {}