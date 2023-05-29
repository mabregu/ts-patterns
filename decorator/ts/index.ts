interface IComponent {
    getDescrition(): string;
}

class Coffee implements IComponent {
    protected description: string;
    
    constructor(description: string) {
        this.description = description;
    }

    public getDescrition(): string {
        return this.description;
    }
}

abstract class CoffeeDecorator implements IComponent {
    protected decoratedCoffee: IComponent;

    constructor(decoratedCoffee: IComponent) {
        this.decoratedCoffee = decoratedCoffee;
    }

    public getDescrition(): string {
        return this.decoratedCoffee.getDescrition();
    }
}

class Milk extends CoffeeDecorator {
    constructor(coffee: IComponent) {
        super(coffee);
    }

    public getDescrition(): string {
        return super.getDescrition() + ', Milk';
    }
}

class CommercialInfoDecorator extends CoffeeDecorator {
    private tradename: string;
    private brand: string;

    constructor(coffee: IComponent, tradename: string, brand: string) {
        super(coffee);
        this.tradename = tradename;
        this.brand = brand;
    }

    public getDescrition(): string {
        return super.getDescrition() + `, ${this.tradename}, ${this.brand}`;
    }
}

class StoreCoffeeDecorator extends CoffeeDecorator {
    private price: number;
    
    constructor(coffee: IComponent, price: number) {
        super(coffee);
        this.price = price;
    }
    
    public getDescrition(): string {
        return super.getDescrition() + `, $${this.price}`;
    }
}

class HTMLCoffeeDecorator extends CoffeeDecorator {
    constructor(coffee: IComponent) {
        super(coffee);
    }

    public getDescrition(): string {
        return `<h1>Product</h1>
            <p>${super.getDescrition()}</p>
        `;
    }
}
    
    

const coffee = new Coffee('Coffee');
const coffeeWithMilk = new Milk(coffee);
const coffeeWithMilkAndCommercialInfo = new CommercialInfoDecorator(coffeeWithMilk, 'Nescafe', 'Nestle');

console.log(coffee.getDescrition());
console.log(coffeeWithMilk.getDescrition());
console.log(coffeeWithMilkAndCommercialInfo.getDescrition());

const storeCoffee = new StoreCoffeeDecorator(coffee, 1.5);
console.log(storeCoffee.getDescrition());

const storeCoffeeWithMilk = new StoreCoffeeDecorator(coffeeWithMilk, 1.5);
console.log(storeCoffeeWithMilk.getDescrition());

const storeCoffeeWithMilkAndCommercialInfo = new StoreCoffeeDecorator(coffeeWithMilkAndCommercialInfo, 1.5);
console.log(storeCoffeeWithMilkAndCommercialInfo.getDescrition());

const htmlCoffee = new HTMLCoffeeDecorator(storeCoffeeWithMilkAndCommercialInfo);
console.log(htmlCoffee.getDescrition());