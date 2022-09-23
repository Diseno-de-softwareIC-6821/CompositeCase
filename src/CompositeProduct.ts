import { AbstractProduct } from "./AbstractProduct";

export class CompositeProduct extends AbstractProduct{

    private products: AbstractProduct[] = [];
    

    constructor(name: string, iva: number) {
        super(name, 0, iva);
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
        this.setPrice()
        return this.price * this.iva;
    }

    getIvaAmount(): number{
        return this.iva;
    }

    setPrice(): void {
        //Unsopported
    }

    addProduct(product: AbstractProduct): void {
        
        this.price += product.getIva();

        const productName = product.getName();
        if(this.searchProduct(productName)){
            this.searchProduct(productName)?.addAmount();
        }
        else{
            this.products.push(product);
        }
    }


    searchProduct(name: string): AbstractProduct | undefined {
        
        return this.products.find(product => product.getName() === name);
    }

    removeProduct(product: AbstractProduct): boolean {
        const prod = this.searchProduct(product.getName())
        try{
            if(prod!.getAmount() > 1){
                prod?.restAmount()
            }
            else{
                const index = this.products.indexOf(prod!);
                this.products.splice(index, 1);
            }
            return true;
        }
        catch{
            return false;
        }
    }


}