import { Product } from "../entity/product.entity";
import { ProductDto } from "../dto/product.dto";
import { ProductService } from '../service/product.service';
import { DeleteResult } from "typeorm";
import { ApiTags } from "@nestjs/swagger";
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";



@ApiTags('Products')
@Controller('product')

export class ProductController {
    constructor(private productService: ProductService){

    }

    @Get()
    findAll(): Promise<Product[]> {
        return this.productService.findAll();
    }

    @Get(':uuid')
    findById(@Param('uuid') uuid:string): Promise<Product> {
        return this.productService.findOne(uuid);
    }

    @Post()
    create(@Body() dto: ProductDto): Promise<Product> {
        return this.productService.create(dto);
    }

    @Put()
    update(@Body() product: Product): Promise<Product> {
        return this.productService.update(product);
    }   

    @Delete(':uuid')
    delete(@Param('uuid') uuid: string): Promise<DeleteResult> {
        return this.productService.remove(uuid);
    }

}