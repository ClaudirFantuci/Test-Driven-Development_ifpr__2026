const validatePassword = require('../src/Service/passwordValidator');
const PASSWORD_TEST_DATA = require('../src/Util/constantes');

describe('validar senhas', () => {


    test('deve ter no mínimo 8 caracteres', () => {
        // Arrange
        const password = PASSWORD_TEST_DATA.SHORT_PASSWORD;

        // Act
        const result = validatePassword(password);
        
        // Assert
        expect(result).toBe(false);
    });

    test('deve ter pelo menus uma maiscula', () => {
        // Arrange
        const password = PASSWORD_TEST_DATA.NO_UPPERCASE;

        // Act
        const result = validatePassword(password);

        // Assert
        expect(result).toBe(false);
    });
    test('deve ter pelo menus uma minuscula', () => {
        // Arrange
        const password = PASSWORD_TEST_DATA.NO_LOWERCASE;

        // Act
        const result = validatePassword(password);

        // Assert
        expect(result).toBe(false);
    });

    test('deve te um numero', () => {
        // Arrange
        const password = PASSWORD_TEST_DATA.NO_NUMBER;
        // Act
        const result = validatePassword(password);
        // Assert
        expect(result).toBe(false);
    });

    test('deve ter caracter especial', () => {
        // Arrange
        const password = PASSWORD_TEST_DATA.NO_SPECIAL_CHAR;
        // Act
        const result = validatePassword(password);
        // Assert
        expect(result).toBe(false);
    });
    
    test('nao pode ter espaços', () => {
        // Arrange
        const password = PASSWORD_TEST_DATA.WITH_SPACES;
        // Act
        const result = validatePassword(password);
        // Assert
        expect(result).toBe(false);
    });

    test('deve ser uma senha valida', () => {
        // Arrange
        const password = PASSWORD_TEST_DATA.VALID_PASSWORD;
        // Act
        const result = validatePassword(password);
        // Assert
        expect(result).toBe(true);
    });

})