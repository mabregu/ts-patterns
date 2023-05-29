class Form {
    constructor(controls, action) {
        this.controls = controls;
        this.action = action;
    }
    
    getLabel(control) {
        return `<label>${control.name}</label>`;
    }
    
    getInput(control) {
        return `<input type="${control.type}" name="${control.name}" value="${control.value}" />`;
    }
    
    getForm() {
        return `
            <form action="${this.action}">
                ${this.controls.map(control => this.getLabel(control) + this.getInput(control)).join('')}
                <button type="submit">Send</button>
            </form>
        `;
    }
    
    render() {
        document.body.innerHTML = this.getForm();
    }
}

class FormBuilder {
    constructor() {
        this.reset();
    }

    reset() {
        this.form = new Form();
        this.form.controls = [];
    }

    setAction(action) {
        this.form.action = action;
        return this;
    }

    setInput(name, type, value) {
        this.form.controls.push({
            name: name,
            type: type,
            value: value
        });
        return this;
    }

    build() {
        const form = this.form;
        this.reset();
        return form;
    }
}

const formBuilder = new FormBuilder();
const form = formBuilder
    .setAction('http://localhost:3000')
    .setInput('name', 'text', 'John')
    .setInput('lastname', 'text', 'Doe')
    .setInput('email', 'email', 'johndoe@mail.com')
    .setInput('age', 'number', 30)
    .setInput('address', 'text', 'Fake Street 123')
    .setInput('Remember me', 'checkbox', true)
    .build();

console.log(form);
form.render();