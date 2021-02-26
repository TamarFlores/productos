import {Products, ProductsManagement} from "./products.js";
class Ui {
    constructor(){
        this.uiName = document.getElementById("name");
        this.uiDescrption = document.getElementById("description");
        this.uiQuantity = document.getElementById("quantity");
        this.uiForm = document.getElementById("form-data");
        this.container = document.getElementById("container-table");
        this.manger = new ProductsManagement();
        let p1 = new Products ("Pollo","Pollo sofia", 20);
        let p2 = new Products ("Galletas","Galletas Mabel", 50);
        let p3 = new Products ("Pollo","Pollo Imba", 20);
        this.manger.addProducts(p1);
        this.manger.addProducts(p2);
        this.manger.addProducts(p3);
        this.loadEvents();
    }
    loadEvents(){
        this.uiForm.addEventListener("submit", (e) =>{
            e.preventDefault();
            this.addProducts(
                this.uiName.value,
                this.uiDescrption.value,
                this.uiQuantity.value);

        });

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
    addProducts(name,description,quantity){
        let p1 = new Products (name,description, quantity);
        this.manger.addProducts(p1);
        this.loadTable();

    }
}
let ui = new Ui();
ui.loadTable();