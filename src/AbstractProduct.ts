

export abstract class AbstractProduct{
    protected name: string;
    protected price: number;
    protected amount: number;
    protected iva: number;

    constructor(name: string, price: number, iva: number) {
        this.name = name;
        this.price = price;
        this.amount = 1;
        this.iva = iva;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getPrice(): number {
        return this.price;
    }
    getAmount(){
        return this.amount;
    }

    setPrice(price: number): void {
        this.price = price;
    }
    addAmount(){
        this.amount++;
    }
    restAmount(){
        this.amount--;
    }
    abstract getPriceWithAmount(): number;

    getIva(): number {
        return this.iva;
    }

    getIvaAmount(): number {
        return this.iva;
    }

    setIva(iva: number): void {
        this.iva = iva;
    }
}
