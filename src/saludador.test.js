import saludador from './saludador';

describe('saludador', () => {
    it('deberia saludar a una persona en ingles', () => {
        expect(saludador('Juan', 'masculino','25','en')).toEqual('Good morning, Young man Juan!');
    });
    it('deberia saludar a una persona en español', () => {
        expect(saludador('Juan', 'masculino','25','es')).toEqual('Buenos días, Joven Juan!');
    });
});