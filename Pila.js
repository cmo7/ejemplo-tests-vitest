export default class Pila {
    constructor() {
        this.top = -1;
        this.items = {};
    }

    push(valor) {
        this.top++
        this.items[this.top] = valor;
    }

    peek() {
        return this.items[this.top]
    }

    pop() {
        return this.items[this.top--];
    }
}