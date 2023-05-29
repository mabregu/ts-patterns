class Person {
    constructor(name, lastname, age, address, hobbies) {
        this.name = name;
        this.lastname = lastname;
        this.age = age;
        this.address = address;
        this.hobbies = hobbies;
    }
    
    getFullName() {
        return `${this.name} ${this.lastname}`;
    }
}

class PersonBuilder {
    constructor() {
        this.reset();
    }

    reset() {
        this.person = new Person();
        this.person.hobbies = [];
    }

    setName(name) {
        this.person.name = name;
        return this;
    }

    setLastname(lastname) {
        this.person.lastname = lastname;
        return this;
    }

    setAge(age) {
        this.person.age = age;
        return this;
    }

    setAddress(address) {
        this.person.address = address;
        return this;
    }

    addHobby(hobby) {
        this.person.hobbies.push(hobby);
        return this;
    }

    build() {
        const person = this.person;
        this.reset();
        return person;
    }
}

const personBuilder = new PersonBuilder();
const person = personBuilder
    .setName('John')
    .setLastname('Doe')
    .setAge(30)
    .setAddress('123 Main St')
    .addHobby('Football')
    .addHobby('Basketball')
    .build()
;

console.log(person);

const person2 = personBuilder
    .setName('Jane')
    .setLastname('Doe')
    .build()
;

console.log(person2);