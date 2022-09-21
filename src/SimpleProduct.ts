import { AbstractProduct } from "./AbstractProduct";

export class SimpleProduct extends AbstractProduct{
    protected brand: string;

    constructor(name: string, price: number, brand: string) {
        super(name, price);
        this.brand = brand;
    }
}