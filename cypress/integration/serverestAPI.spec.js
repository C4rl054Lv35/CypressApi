// cypress/integration/serverestAPI.spec.js

const API_URL = Cypress.env('API_BASE_URL')
const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`

it('retrieves my user information', () => {
    cy.request({
        method: 'GET',
        url: `${API_URL}`,
        headers: { authorization }
    }).should(({ status, body }) => {
        const { alias, email, language } = body

        expect(status).to.eq(200)
        expect(alias).to.eq('Fulano da Silva')
        expect(email).to.eq('beltrano@qa.com.br')
        expect(language).to.eq('en')
    })
})