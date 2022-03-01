import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvoiceController } from './controller/invoice.controller';
import { InvoiceService } from './service/invoice.service';
import { Invoice } from './entity/invoice.entity';


@Module({
    imports: [TypeOrmModule.forFeature([Invoice])],
    controllers: [InvoiceController],
    providers: [InvoiceService]
})

export class InvoiceModule {}