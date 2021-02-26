import {Products, ProductsManagement} from "./products.js";
class Ui {
    constructor(){
        this.uiName = document.getElementById("name");
        this.uiDescrption = document.getElementById("description");
        this.uiQuantity = document.getElementById("naquantityme");
        this.uiForm = document.getElementById("form-data");
        this.container = document.getElementById("container-table");
        this.manger = new ProductsManagement();
        let p1 = new Products ("Pollo","Pollo sofia", 20);
        let p2 = new Products ("Galletas","Galletas Mabel", 50);
        let p3 = new Products ("Pollo","Pollo Imba", 20);
        this.manger.addProducts(p1);
        this.manger.addProducts(p2);
        this.manger.addProducts(p3);
    }
    loadTable () {
        var html = "";
        for (var i = 0; i < this.manger.showProducts().length; i++){
            html += `
            <tr>
                <td scope="row">
                ${this.manger.showProducts()[i].name}</td>
                <td>${this.manger.showProducts()[i].description}</td>
                <td>${this.manger.showProducts()[i].quantity}</td>
            <tr>`;

        }
        this.container.innerHTML = html;
    }
}
let ui = new Ui();
ui.loadTable();