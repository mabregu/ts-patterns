class SaleContext {
    
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }
    
    calculate(amount) {
        return this.strategy.calculate(amount);
    }
}

class NormalStrategy {
    
    constructor(tax) {
        this.tax = tax;
    }
    
    calculate(amount) {
        return amount * this.tax;
    }
}

class SpecialStrategy {
    
    constructor(tax, discount) {
        this.tax = tax;
        this.discount = discount;
    }
    
    calculate(amount) {
        return (amount * this.tax) - this.discount;
    }
}

class ForeignStrategy {
    
    calculate(amount) {
        return amount * this.getDollarValue();
    }
    
    getDollarValue() {
        return 460;
    }
}

// const sale = new SaleContext(new NormalStrategy(1.21));

// console.log(sale.calculate(100));

// sale.setStrategy(new SpecialStrategy(1.21, 10));

// console.log(sale.calculate(100));

// sale.setStrategy(new ForeignStrategy());

// console.log(sale.calculate(100));

const products = [
    { name: 'iPhone', price: 1000, image: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_new-iphone-se-white_04152020_big.jpg.large.jpg' },
    { name: 'iPad', price: 1500, image: 'https://www.apple.com/newsroom/images/product/ipad/standard/Apple_new-ipad-pro_03252020_big.jpg.large.jpg' },
    { name: 'MacBook', price: 2000, image: 'https://www.apple.com/newsroom/images/product/mac/standard/Apple_new-macbook-air_03182020_big.jpg.large.jpg' },
    { name: 'iMac', price: 2500, image: 'https://www.apple.com/newsroom/images/product/imac/standard/Apple_new-imac-27-inch_08042020_big.jpg.large.jpg' },
    { name: 'MacPro', price: 3000, image: 'https://www.apple.com/newsroom/images/product/mac-pro/standard/Apple_mac-pro_12092019_big.jpg.large.jpg' },
];

class InfoContext {
    
    constructor(strategy, data, element) {
        this.strategy = strategy;
        this.data = data;
        this.element = element;
    }
    
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    
    setElement(element) {
        this.element = element;
    }
    
    setData(data) {
        this.data = data;
    }
    
    render() {
        this.strategy.render(this.data, this.element);
    }
}

class ListStrategy {
    
    render(data, element) {
        element.innerHTML = '<ul>' + data.map(item => `<li>${item.name} - ${item.price}</li>`).join('') + '</ul>';
    }
}

class TableStrategy {
    
    render(data, element) {
        element.innerHTML = '<table>' + data.map(item => `<tr><td>${item.name}</td><td>${item.price}</td></tr>`).join('') + '</table>';
    }
}

class ListWithImagesStrategy {
    
    render(data, element) {
        element.innerHTML = '<ul>' + data.map(item => `<li><img src="${item.image}" width='150' />${item.name} - ${item.price}</li>`).join('') + '</ul>';
    }
}

const strategiesTypes = [
    { name: 'List', strategy: new ListStrategy() },
    { name: 'Table', strategy: new TableStrategy() },
    { name: 'List-image', strategy: new ListWithImagesStrategy() },
]

const list = new InfoContext(new ListStrategy(), products, document.getElementById('app'));

list.render();

const select = document.getElementById("options");
select.addEventListener('change', (e) => {
    const strategy = strategiesTypes.find(strategyType => strategyType.name === e.target.value).strategy;
    list.setStrategy(strategy);
    list.render();
});