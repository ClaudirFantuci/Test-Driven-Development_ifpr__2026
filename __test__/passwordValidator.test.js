const validadePassword = require('../src/passwordValidator');

describe('validar senhas', () => {


    test('deve ter no mínimo 8 caracteres', () => {
        // Arrange
        const password = '1234567';

        // Act
        const result = validadePassword(password);
        
        // Assert
        expect(result).toBe(false);
    });

})