import { AbstractProduct } from "./AbstractProduct";

export class CompositeProduct extends AbstractProduct{

    private products: AbstractProduct[] = [];

    constructor(name: string) {
        super(name, 0);
    }

    getPrice(): number {
        let price = 0;
        for (let product of this.products) {
            price += product.getPrice();
        }
        return price;
    }

    setPrice(price: number): void {
        // unsupported
    }

    addProduct(product: AbstractProduct): void {
        this.products.push(product);
    }

    removeProduct(product: AbstractProduct): boolean {
        let index = this.products.indexOf(product);
        if (index > -1) {
            this.products.splice(index, 1);
            return true
        }
        return false;
    }


}