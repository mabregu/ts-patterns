interface IComponent {
    operation(): void;
}

class Component implements IComponent {
    public operation(): void {
        console.log('Component operation');
    }
}

abstract class Decorator implements IComponent {
    protected component: IComponent;

    constructor(component: IComponent) {
        this.component = component;
    }

    public operation(): void {
        this.component.operation();
    }
}

class ConcreteDecoratorA extends Decorator {
    public operation(): void {
        super.operation();
        console.log('ConcreteDecoratorA operation');
    }
}

class ConcreteDecoratorB extends Decorator {
    public operation(): void {
        super.operation();
        console.log('ConcreteDecoratorB operation');
    }
}

const component = new Component();
const decoratorA = new ConcreteDecoratorA(component);
const decoratorB = new ConcreteDecoratorB(decoratorA);

decoratorB.operation();