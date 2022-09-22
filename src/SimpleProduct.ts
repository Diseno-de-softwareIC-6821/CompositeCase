import { AbstractProduct, eIva } from "./AbstractProduct";

export class SimpleProduct extends AbstractProduct{
    protected brand: string;

    constructor(name: string, price: number, brand: string, iva: eIva) {
        super(name, price, iva);
        this.brand = brand;
    }
    getPrice(): number {
        return this.price;
    }
    getPriceWithAmount(): number {
        return this.price * this.amount;
    }
    getIvaAmount(): eIva{
        return this.iva;
    }

    getIva(): number {
        let iva = this.price* this.iva * this.amount;
        return iva;
    }
}