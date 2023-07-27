//Comando personalizado: é feito no arquivo commands dentro da pasta pages
describe('Página de login', () => {

    beforeEach(() => {
        cy.visit('http://localhost:4200/#/home')
    })

        it('Deve preencher os campos do formulário corretamente e realizar login', () => {
            cy.login('flavio', '123')
            })

})