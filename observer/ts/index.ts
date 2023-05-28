interface IObserver<T> {
    update: (data: T) => void;
}

interface ISubject<T> {
    
    observers: IObserver<T>[];
    
    subscribe: (observer: IObserver<T>) => void;
    
    unsubscribe: (observer: IObserver<T>) => void;
    
    notify: (data: T) => void;
}

class Subject<T> implements ISubject<T> {
    
    observers: IObserver<T>[];
    
    constructor() {
        this.observers = [];
    }
    
    subscribe(observer: IObserver<T>): void {
        this.observers.push(observer);
    }
    
    unsubscribe(observer: IObserver<T>): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    
    notify(data: T): void {
        this.observers.forEach(observer => observer.update(data));
    }
}

class Observer<T> implements IObserver<T> {
        
    private fn: (data: T) => void;

    constructor(fn: (data: T) => void) {
        this.fn = fn;
    }

    public update(data: T): void {
        this.fn(data);
    }
}

const subject = new Subject<number>();

const observer1 = new Observer<number>(data => console.log(`Observer 1: ${data}`));

const observer2 = new Observer<number>(data => console.log(`Observer 2: ${data}`));

subject.subscribe(observer1);
subject.subscribe(observer2);

subject.notify(1);
subject.notify(2.6);
subject.notify(3);

const subjectString = new Subject<string>();

const observer3 = new Observer<string>(data => console.log(`Observer 3: ${data}`));

subjectString.subscribe(observer3);

subjectString.notify('Hello');