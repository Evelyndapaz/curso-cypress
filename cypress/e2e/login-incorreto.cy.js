describe('Página de login', () => {

    beforeEach(() => {
        cy.visit('http://localhost:4200/#/home')

        //dublê de teste: fazer com que o pop-up apareça, mesmo que coloquemos dados corretos nos campos para que seja validado o pop-up
        //neste caso esta utilizando um stub: mostra se o resultado do código retorna de acordo com os parâmetros passado
        //interação com a API
        cy.intercept('POST', 'http://localhost:4200/#/user/flavio', {
        //implementando o erro    
        statusCode: 400
        }).as('stubPost')
    })

        it('Verifica mensagens de campos obrigatórios na página de login', () => {
            cy.contains('User name is required!').should('be.visible');
            cy.contains('Password is required!').should('be.visible');
        
        })

        it('Deve falhar mesmo que os campos sejam preenchidos corretamente', () => {
            cy.login('flavio', '123');
            cy.wait('@stubPost')
        
        })
})