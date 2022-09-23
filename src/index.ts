import { CompositeProduct } from "./CompositeProduct";
import { SaleOrder } from "./SaleOrder";
import {SimpleProduct} from "./simpleProduct"

import {Iva} from './Iva';

// run "npm run dev" to compile the typescript code


function main():void{

    let gammerPC;
    let homePC;
    let pc2x1;


    let random: number = Math.floor(Math.random() * 2147483647)
    const ram4gb: SimpleProduct = new SimpleProduct("Memoria RAM 4GB", 750, "KingStone", Iva.IVA_13)
    const ram8gb: SimpleProduct = new SimpleProduct("Memoria RAM 8GB", 1000, "KingStone", Iva.IVA_13)
    const disk500gb: SimpleProduct = new SimpleProduct("Disco Duro 500GB", 1500, "ACME", Iva.IVA_13)
    const disk1tb: SimpleProduct = new SimpleProduct("Disco Duro 1TB", 2000, "ACME", Iva.IVA_13)
    const cpuAMD: SimpleProduct = new SimpleProduct("AMD phenon", 4000, "AMD", Iva.IVA_13)
    const cpuIntel: SimpleProduct = new SimpleProduct("Intel i7", 4500, "Intel", Iva.IVA_13)
    const smallCabinete: SimpleProduct = new SimpleProduct("Gabinete pequeño", 2000, "ExCom", Iva.IVA_13)
    const bigCabinete: SimpleProduct = new SimpleProduct("Gabinete grande", 2200, "ExCom", Iva.IVA_13)
    const monitor20inch: SimpleProduct = new SimpleProduct("Monitor 20 pulgadas", 1500, "HP", Iva.IVA_13)
    const monitor30inch: SimpleProduct = new SimpleProduct("Monitor 30 pulgadas", 2000, "HP", Iva.IVA_0)
    const simpleMouse: SimpleProduct = new SimpleProduct("Raton simple", 150, "Genius", Iva.IVA_13)
    const gammerMouse: SimpleProduct = new SimpleProduct("Raton Gammer", 750, "Genius", Iva.IVA_13)

    const discount : SimpleProduct = new SimpleProduct("Descuento", -100, "Descuento", Iva.IVA_0)
  

    //Computadora para Gammer que incluye 8gb de ram,disco de 1tb,procesador Intel i7          
    //Gabinete grande, monitor de 30' y un mouse gammer
    gammerPC = new CompositeProduct("Gammer PC", Iva.IVA_SUM);   
    gammerPC.addProduct(ram8gb);   
    gammerPC.addProduct(disk1tb);   
    gammerPC.addProduct(cpuIntel);   
    gammerPC.addProduct(bigCabinete);   
    gammerPC.addProduct(monitor30inch);   
    gammerPC.addProduct(gammerMouse);
    gammerPC.addProduct(gammerMouse);
    gammerPC.addProduct(gammerMouse);
    
    //Computadora para Casa que incluye 4gb de ram,disco de 500gb, procesador AMD Phenon         
    //Gabinete chico, monitor de 20' y un mouse simple.           
    homePC = new CompositeProduct("Casa PC", Iva.IVA_SUM);
    homePC.addProduct(ram4gb);
    homePC.addProduct(disk500gb);
    homePC.addProduct(cpuAMD);
    homePC.addProduct(smallCabinete);
    homePC.addProduct(monitor20inch);
    homePC.addProduct(simpleMouse);
    
    //Paque compuesto de dos paquetes: paquete Gammer PC y Home PC           
    pc2x1 = new CompositeProduct("Paquete PC Gammer + Casa", Iva.IVA_SUM)   
    pc2x1.addProduct(gammerPC);
    pc2x1.addProduct(homePC);


    // const simpleProductOrder: SaleOrder = new SaleOrder(random, "Rene Mora");
    // simpleProductOrder.addProduct(ram4gb);
    // simpleProductOrder.addProduct(disk1tb);
    // simpleProductOrder.addProduct(simpleMouse);
    // simpleProductOrder.printOrder();   

    // const gammerOrder: SaleOrder = new SaleOrder(1, "Juan Perez");
    // gammerOrder.addProduct(gammerPC);
    // gammerOrder.printOrder();

    // const homeOrder: SaleOrder = new SaleOrder(2, "Marcos Guerra");
    // homeOrder.addProduct(homePC);   
    // homeOrder.printOrder(); 

    const customOrder: SaleOrder = new SaleOrder(4, "Diego Mora"); 
    customOrder.addProduct(homePC);
    customOrder.addProduct(homePC);
    customOrder.addProduct(ram8gb);
    customOrder.addProduct(ram4gb);   
    customOrder.addProduct(monitor30inch);
    customOrder.addProduct(gammerMouse);
    customOrder.addProduct(discount)
    customOrder.printOrder();

}

main()

