export default class Product {
    name: string;
    category: string;
    price: number;
    stockQuantity: number;
    static ID_static: number = 100;
    ID: number;

    constructor(name: string, category: string, price: number, stockQuantity: number) {
        this.name = name;
        this.category = category;
        this.price = price;
        this.stockQuantity = stockQuantity;
        Product.ID_static += 1;
        this.ID = Product.ID_static;
    }
}