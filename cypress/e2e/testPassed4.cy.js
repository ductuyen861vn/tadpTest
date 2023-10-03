describe('template spec', () => {
  it('passes',{ tags: ['smoked'] }, () => {
    cy.visit('/')
    cy.get('h1').contains('Congratulations!!!')
    cy.get('p').contains('You ran your first container.')
  })
})