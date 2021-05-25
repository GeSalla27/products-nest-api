import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Product } from "./model/product.model";

@Controller('products')
export class ProductController {

    products: Array<Product> = [
        new Product(1, "Livro01", "Livro teste 1", 29),
        new Product(2, "Livro02", "Livro teste 2", 29),
        new Product(3, "Livro03", "Livro teste 3", 29),
    ];

    @Get()
    getAll(): Array<Product> {
        return this.products;
    }

    @Get(':id')
    get(@Param() param): Product {
        return this.products[this.products.findIndex(x => x.code == param.id)];
    }

    @Post()
    create(@Body() product: Product) {
        this.products.push(product);
    }

    @Put()
    update(@Body() product) {
        let productIndex = this.products.findIndex(x => x.code == product.code);
        this.products[productIndex] = product;
    }

    @Delete(':id')
    delete(@Param() param): string {
        let productIndex = this.products.findIndex(x => x.id == param.id);
        this.products.splice(productIndex, 1);
        return `Produto ${param.id} apagado.`
    }
}