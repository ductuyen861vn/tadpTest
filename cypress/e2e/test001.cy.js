describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('h1').contains('Congratulations!!!')
    cy.get('p').contains('You ran your first container.')
  })
})