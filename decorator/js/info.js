// component
class ClientComponent {
    constructor(url) {
        this.url = url;
    }
    
    async getData() {
        const response = await fetch(this.url);
        const data = await response.json();
        return data;
    }
}
// decorator
class ClientDecorator {
    constructor(clientComponent) {
        this.clientComponent = clientComponent;
    }
    
    async getData() {
        return await this.clientComponent.getData();
    }
}