//comandos personalizados: é um recurso do Cypress que ajuda a repetir o mesmo comportamento, 
//-sem precisar reescrever o código novamente
Cypress.Commands.add('login', (nome, senha) => {
    cy.get('[data-test="loginUserName"]').type(nome);
    cy.get('[data-test="loginPassword"]').type(senha);
    cy.get('[data-test="loginBtn"]').click();
    
})