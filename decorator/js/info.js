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
// decorator 2
class UpperCaseClientDecorator extends ClientDecorator {
    async getData() {
        const data = await super.getData();
        const upperCaseData = data.map(item => {
            item.title = item.title.toUpperCase();
            return item;
        });

        return upperCaseData;
    }
}
// decorator 2
class HtmlClientDecorator extends ClientDecorator {
    async getData() {
        const data = await super.getData();
        const htmlData = data.map(item => {
            item.title = `<h1>${item.title}</h1>`;
            item.body = `<p>${item.body}</p>`;
            return item;
        });

        return htmlData;
    }
}
// usage
(async () => {
    const clientComponent = new ClientComponent('https://jsonplaceholder.typicode.com/posts');
    const data = await clientComponent.getData();
    console.log(data);

    const upperCaseClientDecorator = new UpperCaseClientDecorator(clientComponent);
    const upperCaseData = await upperCaseClientDecorator.getData();
    console.log(upperCaseData);
    
    const htmlClientDecorator = new HtmlClientDecorator(clientComponent);
    const htmlData = await htmlClientDecorator.getData();
    console.log(htmlData);
    content1.innerHTML = htmlData.map(item => item.title + item.body).join('');
})();