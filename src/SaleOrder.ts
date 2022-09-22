import { AbstractProduct} from './AbstractProduct';
import { Iva } from './Iva';

export class SaleOrder{
    private orderId: number;
    private customer: string;
    private products: AbstractProduct[] = [];

    constructor(orderId: number, customer: string) {
        this.orderId = orderId;
        this.customer = customer;
    }

    getProduct(): AbstractProduct[] {
        return this.products;
    }

    getPrice(): number {
        let price = 0;
        for (let product of this.products) {
            price += product.getPrice() * product.getAmount();
        }
        return price;
    }

    addProduct(product: AbstractProduct): void {

        const productName = product.getName();
        if(this.searchProduct(productName)){
            this.searchProduct(productName)?.addAmount();
        }
        else{
            this.products.push(product);
        }
    }
    getIva(): number {
        let iva = 0;
        for (let product of this.products){
            //console.log(`${product.getIva() + product.getName()}`)
            iva += product.getIva();
        }

        return iva;
    }
    getIvaPrc(product:AbstractProduct): string {

        switch(product.getIvaAmount()) { 
            case Iva.IVA_0: { 
               return "0% IVA"

            } 
            case Iva.IVA_2: { 
                return "2% IVA"

            } 
              case Iva.IVA_4: { 
                return "4% IVA"

            } 
              case Iva.IVA_8: { 
                return "8% IVA"

            } 
            case Iva.IVA_13: {
                return "13% IVA"

            } 
            default: { 
                return "Iva no especificado"

            } 
         }
    }
    
    searchProduct(name: string): AbstractProduct | undefined {
        return this.products.find(product => product.getName() === name);
    }
    

    
    
    printOrder(): void {
        console.log(`\n--------------------------------------------------------\n`);
        console.log(`Order #${this.orderId} for ${this.customer}\n Amount |  Products  | Unit Price | Price*amount | IVA`);
        for (let product of this.products) {
            console.log(`${product.getAmount()} \t  ${product.getName()} \t ${product.getPrice()} \t${product.getPriceWithAmount()}  \t ${this.getIvaPrc(product)}`);
        }
        console.log(`Subtotal: ` + this.getPrice());
        console.log(`IVA: ` + this.getIva());
        console.log(`Total price ${this.getPrice()+this.getIva()}`);
    }


}