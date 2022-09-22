import { AbstractProduct, eIva } from "./AbstractProduct";

export class CompositeProduct extends AbstractProduct{

    private products: AbstractProduct[] = [];
    

    constructor(name: string) {
        super(name, 0, eIva.IVA_0);
    }

    getPrice(): number {
        let price = 0;
        for (let product of this.products) {
            price += product.getPrice() * product.getAmount();
        }
        return price;
    }
    getPriceWithAmount(): number {
        return this.getPrice() * this.amount;
    }
    getIva(): number {
        let iva = 0;
        for (let product of this.products){
            /*console.log(`${product.getPrice()}`)
            console.log(`${product.getIva() * product.getAmount()}`)
            console.log(`${product.getAmount()}`)
            console.log(`${product.getName()}`)*/
            iva += product.getIva();
        }
        return iva;
    }

    getIvaAmount(): eIva {
        let iva: eIva = eIva.IVA_0;
        for (let product of this.products){
            iva = product.getIvaEnum();
        }
        return iva;
    }

    setPrice(price: number): void {
        // unsupported
    }

    addProduct(product: AbstractProduct): void {
        this.searchProduct(product.getName())?.addAmount() || this.products.push(product);
    }
    searchProduct(name: string): AbstractProduct | undefined {
        return this.products.find(product => product.getName() === name);
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