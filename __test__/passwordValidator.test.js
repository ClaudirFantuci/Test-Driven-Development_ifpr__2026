const validatePassword = require('../src/Service/passwordValidator');

describe('validar senhas', () => {


    test('deve ter no mínimo 8 caracteres', () => {
        // Arrange
        const password = '1234567';

        // Act
        const result = validatePassword(password);
        
        // Assert
        expect(result).toBe(false);
    });

})