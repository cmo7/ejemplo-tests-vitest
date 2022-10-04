import {beforeEach, describe, test, expect} from 'vitest'
import Pila from '../Pila'


describe('Mi Pila', () => {

    let pila;

    beforeEach(() => {
        pila = new Pila;
    })
    test('se crea vacia', () => {
        expect(pila.top).toBe(-1);
        expect(pila.items).toEqual({});
    });
    test('se pueden añadidr elementos por arriba', () => {
        pila.push("El Señor de los Anillos");
        expect(pila.top).toBe(0);
        expect(pila.peek()).toBe("El Señor de los Anillos");
    });
    test('se pueden sacar elementos por arriba', () => {
        pila.push('Elemento 1');
        pila.push('Elemento 2');
        const x = pila.pop();
        expect(pila.top).toBe(0);
        expect(pila.peek()).toBe('Elemento 1');
        expect(x).toBe('Elemento 2');
    });
})