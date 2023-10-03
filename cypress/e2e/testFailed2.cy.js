describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('p').contains('Congratulations!!!')
    cy.get('p').contains('You ran your first container.')
  })
})