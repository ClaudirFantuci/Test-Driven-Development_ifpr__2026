# Test-Driven-Development_ifpr__2026 Validador de Senhas — TDD com Jest


## Sobre o projeto
Módulo de validação de senhas desenvolvido com a metodologia TDD (Test-Driven Development)
para a discuplina de teste de software do IFPR.

## Regras de validação
- Mínimo de 8 caracteres
- Pelo menos uma letra maiúscula
- Pelo menos uma letra minúscula
- Pelo menos um número
- Pelo menos um caractere especial 
- Sem espaços em branco

## Tecnologias
- Node.js
- Jest

## Como rodar os testes
```bash
npm install
npm test
```

## Ciclo TDD aplicado

### Red
Todos os testes foram escritos antes de qualquer implementação.
Ao rodar os testes inicialmente, todos falhavam(comportamento esperado no TDD.)

### Green
Foi implementado o código mínimo necessário para cada teste passar,
sem otimizações prematuras.


## Desafios encontrados
- Manter o ciclo red → green → refactor sem pular etapas.
- Garantir commits incrementais e descritivos ao longo de todo o processo.
