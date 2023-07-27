// Utilizando massa de dados: criar um documento - usuarios.json dentro da pasta fixtures
// recurso de arquivo externo serve para ter uma massa de dados para alimentar o teste

//importando a classe e passando o caminho do diretório onde esta o arquivo
import Cadastro from '../support/pages/cadastro/pagina-cadastro'

describe('Página de cadastro', () => {

    beforeEach(() => {
      cy.visit('http://localhost:4200/#/home')
    })
        
        it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
          
          Cadastro.acessarPaginaDeCadastro();
          Cadastro.preencherFormulario();
          Cadastro.submeterCadastro()
          
        })
    })
  
    