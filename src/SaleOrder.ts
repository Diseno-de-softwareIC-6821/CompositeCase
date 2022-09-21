import { AbstractProduct } from "./AbstractProduct";

export class SaleOrder{
    private orderId: number;
    private customer: string;
    private products: AbstractProduct[] = [];

    constructor(orderId: number, customer: string) {
        this.orderId = orderId;
        this.customer = customer;
    }

    getPrice(): number {
        let price = 0;
        for (let product of this.products) {
            price += product.getPrice();
        }
        return price;
    }

    addProduct(product: AbstractProduct): void {
        this.products.push(product);
    }

    printOrder(): void {
        console.log(`Order #${this.orderId} for ${this.customer} has a total price of ${this.getPrice()}`);
    }


}