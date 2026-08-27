import dividir from './dividir';
//paso 1 crear metodo dara error al principio
describe("Dividir", () => {
    it("deberia dividir dos numeros enteros", () => {
        expect(dividir(10, 5)).toEqual(2);
    });
});
//paso 2 la prueba se satifara

// paso 3 para q alargo plazo dse mantenga 
// estos 3 pasos hacen el TDD test driven developer, 
// la primera prueba  es funcion a funcion poco a poco,
//vamos incrementalmente