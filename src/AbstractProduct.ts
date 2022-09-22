export abstract class AbstractProduct{
    protected name: string;
    protected price: number;
    protected amount: number;
    protected iva:eIva ;

    constructor(name: string, price: number, iva: eIva) {
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
    abstract getPriceWithAmount(): number;

    getIva(): number {
        return this.iva;
    }

    getIvaEnum(): eIva {
        return this.iva;
    }

    setIva(iva: eIva): void {
        this.iva = iva;
    }
}

export enum eIva{
    IVA_0 = 0,
    IVA_2 = 0.02,
    IVA_4 = 0.04,
    IVA_8 = 0.08,
    IVA_13 = 0.13,
}