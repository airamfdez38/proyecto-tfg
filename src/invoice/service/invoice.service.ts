import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { InvoiceDto } from "../dto/invoice.dto";
import { Invoice } from '../entity/invoice.entity';




@Injectable()
export class InvoiceService {
    constructor(
        @InjectRepository(Invoice)
        private invoiceRepository: Repository<Invoice>
    ){
    }

    async findAll(): Promise<Invoice[]> {
        return await this.invoiceRepository.find();
    }

    async findOne(uuid: string): Promise<Invoice> {
        return await this.invoiceRepository.findOne(uuid);
    }

    async create(dto: InvoiceDto): Promise<Invoice> {
        return await this.invoiceRepository.save(dto);
    }

    async update(invoice: Invoice): Promise<Invoice> {
        return await this.invoiceRepository.save(invoice);
    }

    async delete(uuid: string): Promise<DeleteResult> {
        return await this.invoiceRepository.delete(uuid);
    }

}