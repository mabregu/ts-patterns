// component
class ProductComponent {
    constructor(name) {
        this.name = name;
    }

    getDetails() {
        return this.name;
    }
}

// decorator
class ProductDecorator {
    constructor(productComponent) {
        this.productComponent = productComponent;
    }

    getDetails() {
        return this.productComponent.getDetails();
    }
}

class CommercialDecorator extends ProductDecorator {
    constructor(productComponent, tradename, brand) {
        super(productComponent);
        this.tradename = tradename;
        this.brand = brand;
    }

    getDetails() {
        return `${this.tradename} ${this.brand} ${super.getDetails()}`;
    }
}

// decorator 2
class StoreProductDecorator extends ProductDecorator {
    constructor(productComponent, price) {
        super(productComponent);
        this.price = price;
    }

    getDetails() {
        return `${super.getDetails()} $${this.price}`;
    }
}

// decorator 3
class HTMLProductDecorator extends ProductDecorator {

    getDetails() {
        return `
            <h1>Detalle del producto</h1>
            <p>${super.getDetails()}</p>
        `;
    }
}

const productComponent = new ProductComponent("Iphone 11 Pro");
console.log(productComponent.getDetails());

// decorator pattern
const commercialDecorator = new CommercialDecorator(productComponent, 'Smartphone', 'Apple');
console.log(commercialDecorator.getDetails());

// decorator pattern 2
const storeProductDecorator = new StoreProductDecorator(productComponent, 1000);
console.log(storeProductDecorator.getDetails());

// decorator 2 con 1
const product = new StoreProductDecorator(new CommercialDecorator(productComponent, 'Smartphone', 'Apple'), 1000);
console.log(product.getDetails());

// decorator 3
const htmlProductDecorator = new HTMLProductDecorator(productComponent);
app.htmlProductDecorator.innerHTML = htmlProductDecorator.getDetails();
