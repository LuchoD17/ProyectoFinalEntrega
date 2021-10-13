class Producto {
    constructor (id, title, price, stock, img, category, quantity) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.stock = stock;
        this.img = img;
        this.category = category;
        this.quantity = quantity;

    }

    validarStock (stock) {
        alert ("Hay stock disponible" + stock);
    }
}