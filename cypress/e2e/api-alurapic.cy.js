//requisição em API REST (API: interfaces de programação de aplicação)
//REST: utiliza os metodos http - get, post, put e delete

//Protegendo dados sensíveis : criar arquivo cypress.env.json com dados como username e password 
describe('Api Alurapic', () => {
    // it('Dados da API', () => {
    //   cy.request({
    //     method:'GET',
    //     url: 'https://3076-cypress-alurapic-front.vercel.app/#/user/carowl'
    //     importa os dados de dentro do arquivo env
    //     body: Cypress.env()
    //   }).then((res) => {
    //     expect(res.status).to.be.equal(200)
    //     expect(res.body).is.not.empty
    //     expect(res.body[0]).to.have.property('description')
    //     expect(res.body[0].description).to.be.equal('porquinho')
    //     expect(res.body).to.have.property('id')
    //     expect(res.body.id).to.be.equal(4)
    //   })
    // })
    
      it('Fotos do usuário', () => {
        //flaky test
        //const tempoEsperado = Math.random() * 50;
        cy.request({
          method:'GET',
          //na web clique em inspecionar-Network para copiar a URL
          url: 'http://localhost:4200/#/user/flavio', 
          //.then(res) : faz verificações com a resposta que o GET traz
        }).then((res) => {
          //verifica se o status vai ser 200
          expect(res.status).to.be.equal(200)
          //verificar se a resposta tem um body
          expect(res.body).is.not.empty
          //verificar se a descrição esta correta
          expect(res.body[0]).is.not.empty
          //expect(res.duration).to.be.lte(tempoEsperado)       
        })
    })

  })