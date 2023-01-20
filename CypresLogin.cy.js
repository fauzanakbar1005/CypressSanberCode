#TestPositive
describe('Login', () => {
    it('input valid username dan password then Login', () => {
      cy.visit('https://the-internet.herokuapp.com/login')
      cy.get('#username').type("tomsmith")
      cy.get('#password').type("SuperSecretPassword!")
      cy.get('.radius').click()
    })
  })

#TestNegative
  describe('Login', () => {
    it('input invalid username dan password then Login', () => {
      cy.visit('https://the-internet.herokuapp.com/login')
      cy.get('#username').type("fauzan")
      cy.get('#password').type("rahasia")
      cy.get('.radius').click()
      cy.get('#flash')
    })
  })
