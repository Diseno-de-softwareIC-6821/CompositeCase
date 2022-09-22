import { AbstractProduct, eIva } from './AbstractProduct';

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
            price += product.getPrice() * product.getAmount();
        }
        return price;
    }

    addProduct(product: AbstractProduct): void {
        this.searchProduct(product.getName())?.addAmount() || this.products.push(product);
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
        //console.log(`${product.getIvaAmount()}`)
        switch(product.getIvaEnum()) { 
            case eIva.IVA_0: { 
               return "0% IVA"
               break; 
            } 
            case eIva.IVA_2: { 
                return "2% IVA"
               break; 
            } 
              case eIva.IVA_4: { 
                return "4% IVA"
               break; 
            } 
              case eIva.IVA_8: { 
                return "8% IVA"
               break; 
            } 
            case eIva.IVA_13: { 
                return "13% IVA"
               break; 
            } 
            default: { 
                return "Iva no especificado"
                break; 
            } 
         }
    }
    
    searchProduct(name: string): AbstractProduct | undefined {
        for (let product of this.products) {
            if (product.getName() === name) {
                return product;
            }
        }
        return undefined;
        
    }
    

    
    
    printOrder(): void {
        console.log(`\n--------------------------------------------------------\n`);
        console.log(`Order #${this.orderId} for ${this.customer}\n Amount |  Products   | unit | Price*amount | IVA`);
        for (let product of this.products) {
            console.log(`${product.getAmount()} \t  ${product.getName()} \t ${product.getPrice()} \t${product.getPriceWithAmount()}  \t ${this.getIvaPrc(product)}`);
        }
        console.log(`Subtotal: ` + this.getPrice());
        console.log(`IVA: ` + this.getIva());
        console.log(`Total price ${this.getPrice()+this.getIva()}`);
    }


}