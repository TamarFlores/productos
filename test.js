import {Products, ProductsManagement} from "./products.js";

let p1 = new Products ("Pollo","Pollo sofia", 20);
let p2 = new Products ("Galletas","Galletas Mabel", 50);
let p3 = new Products ("Pollo","Pollo Imba", 20);
let manger = new ProductsManagement();
manger.addProducts(p1);
manger.addProducts(p2);
//manger.removeProducts(p1);
manger.updateProducts(p1, p3);
console.log(manger.showProducts());