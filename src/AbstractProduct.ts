export abstract class AbstractProduct{
    protected name: string;
    protected price: number;
    protected amount: number;
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
        this.amount = 1;//deberá empezar en 1 ya que al usar el super() es por que se va a crear un producto
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
    getAmount(): number {
        return this.amount;
    }

    setPrice(price: number): void {
        this.price = price;
    }
    addAmount(): void {
        this.amount++;
    }
    

}