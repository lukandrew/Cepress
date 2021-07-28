describe('Login Test', () => {
    it('Visit the Login page', () => {
        cy.visit('https://www.some_url.com')

        cy.get('input[id="UserLogin_email"]').type('login')
        cy.get('input[id="continueBtn"]').click()
        cy.get('input[id="UserLogin_password"]').type('12345')
        cy.get('input[id="SigninBtn"]').click()

        cy.get('li[role="alert"]').should('be.visible')
    })
})