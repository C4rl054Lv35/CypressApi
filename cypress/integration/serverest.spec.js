describe('GET usuarios', () => {
    it('busca usuários corretamente', () => {
        cy.request({
            method: 'GET',
            url: 'https://serverest.dev/usuarios'
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.usuarios[0].nome).to.equal('Fulano da Silva')
                //expect(response.body.usuarios[0].email).to.equal('fulano@qa.com')
        })
    })
})