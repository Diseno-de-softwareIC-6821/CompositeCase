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
            price += product.getPrice()* product.getAmount();
        }
        return price;
    }

    addProduct(product: AbstractProduct): void { 
        //busca el producto en el array de productos, si lo encuentra le suma 1 a la cantidad, si no lo encuentra lo agrega al array
        this.searchProduct(product)?.addAmount() || this.products.push(product);
    }
    searchProduct(product: AbstractProduct): AbstractProduct | undefined { //funcion que busca el producto en el array de productos
        for (let product of this.products) {
            if(product.getName() == product.getName()){
                return product;
            }
        }
        return undefined;
    }

    printOrder(): void {
        console.log(`Order #${this.orderId} for ${this.customer} has a total price of ${this.getPrice()}`);
    }


}