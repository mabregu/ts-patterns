class Subject {
    constructor() {
        this.observers = [];
    }
    
    subscribe(observer) {
        this.observers.push(observer);
    }
    
    unsubscribe(observer) {
        this.observers = this.observers.filter(subscriber => subscriber !== observer);
    }
    
    notify(data) {
        this.observers.forEach(observer => observer.update(data));
    }
}

class ItemsSubject extends Subject {
    constructor() {
        super();
        this.items = [];
    }
    
    addItem(item) {
        this.items.push(item);
        this.notify(this.items);
    }
    
    removeItem(item) {
        this.items = this.items.filter(i => i !== item);
        this.notify(this.items);
    }
}

class HtmlObserver {
    constructor(element) {
        this.element = element;
    }

    update(data) {
        this.element.innerHTML = `
            <p>Items: ${data.length}</p>
            <ul>
                ${data.map(item => `<li>${item}</li>`).join('')}
            </ul>
        `;
    }
}

class Observer {
    constructor(fn) {
        this.fn = fn;
    }
    
    update(data) {
        this.fn(data);
    }
}
    

const items = new ItemsSubject();
const observer1 = new HtmlObserver(div1);
const observer2 = new Observer(data => console.log(data));

items.subscribe(observer1);
items.subscribe(observer2);

function add() {
    let name = txtName.value;
    items.addItem(name);
}