import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { Product } from "./model/product.model";
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductController {

    constructor(private productService: ProductsService) { }

    @Get()
    async getAll(): Promise<Array<Product>> {
        return this.productService.getAll();
    }

    @Get(':id')
    async get(@Param() param): Promise<Product> {
        return this.productService.get(param.id);
    }

    @Post()
    async create(@Body() product: Product) {
        this.productService.create(product);
    }

	@Put('')
    async update(@Param() param, @Body() product): Promise<[number, Product[]]> {
        return this.productService.update(product.id, product)
    }

    @Patch(':id')
    async updatePatch(@Param() param, @Body() product): Promise<[number, Product[]]> {
        return this.productService.update(param.id, product)
    }

    @Delete(':id')
    async delete(@Param() param) {
        this.productService.delete(param.id)
    }
}