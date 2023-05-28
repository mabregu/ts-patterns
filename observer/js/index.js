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
        this.observers.forEach(observer => observer.update(data));// observer.update(data)
    }
}

class Observer {

    constructor(cb) {
        this.cb = cb;
    }

    update(data) {
        this.cb(data);
    }
}

const subject = new Subject();

const observer1 = new Observer(data => console.log(`Observer 1: ${data}`));
const observer2 = new Observer(data => content1.innerHTML = data);

subject.subscribe(observer1);
subject.subscribe(observer2);

function changeText(value) {
    subject.notify(value);
}