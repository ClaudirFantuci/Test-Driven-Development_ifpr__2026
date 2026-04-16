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

    test('deve ter pelo menus uma maiscula', () => {
        // Arrange
        const password = '12345678';

        // Act
        const result = validatePassword(password);

        // Assert
        expect(result).toBe(false);
    });
    test('deve ter pelo menus uma minuscula', () => {
        // Arrange
        const password = 'M2345678';

        // Act
        const result = validatePassword(password);

        // Assert
        expect(result).toBe(false);
    });

    test('deve te um numero', () => {
        // Arrange
        const password = 'Maedaesd';
        // Act
        const result = validatePassword(password);
        // Assert
        expect(result).toBe(false);
    });

    test('deve ter caracter especial', () => {
        // Arrange
        const password = 'Maedaesd1';
        // Act
        const result = validatePassword(password);
        // Assert
        expect(result).toBe(false);
    });

})