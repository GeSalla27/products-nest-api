import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Product } from "./model/product.model";

@Injectable()
export class ProductsService {
    constructor(
        @InjectModel(Product)
        private productModel: typeof Product
    ) { }

    async getAll(): Promise<Array<Product>> {
        return this.productModel.findAll();
    }

    async get(id: number): Promise<Product> {
        return this.productModel.findByPk(id);
    }

    async create(product: Product) {
        this.productModel.create(product);
    }

    async update(product: Product): Promise<[number, Product[]]> {
        return this.productModel.update(product, {
            where: { id: product.id }
        });
    }

    async delete(id: number) {
        const product: Product = await this.get(id);
        product.destroy();
    }
}