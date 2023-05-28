class Singleton {
    
    private static instance: Singleton;
    public random: number;

    private constructor() {
        this.random = Math.random();
    }

    // static hace que el metodo sea de la clase y no de la instancia
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }
}

const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();

console.log(`Random s1: ${s1.random}`);
console.log(`Random s2: ${s2.random}`);