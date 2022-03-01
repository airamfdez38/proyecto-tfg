import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { ApiTags } from "@nestjs/swagger";
import { InvoiceService } from '../service/invoice.service';
import { Invoice } from '../entity/invoice.entity';
import { InvoiceDto } from '../dto/invoice.dto';
import { DeleteResult } from 'typeorm';



@ApiTags('Invoices')
@Controller('invoice')

export class InvoiceController {
    constructor(private invoiceService: InvoiceService){

    }

    @Get()
    findAll(): Promise<Invoice[]> {
        return this.invoiceService.findAll();
    }

    @Get(':uuid')
    findById(@Param('uuid') uuid: string): Promise<Invoice> {
        return this.invoiceService.findOne(uuid);
    }

    @Post()
    create(@Body() dto: InvoiceDto): Promise<Invoice> {
        return this.invoiceService.create(dto);
    }

    @Put()
    update(@Body() invoice: Invoice): Promise<Invoice> {
        return this.invoiceService.update(invoice);
    }

    @Delete(':uuid')
    delete(@Param('uuid') uuid: string): Promise<DeleteResult> {
        return this.invoiceService.delete(uuid);
    }
}