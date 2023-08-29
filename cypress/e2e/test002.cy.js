describe('template spec', () => {
  it('fails', () => {
    cy.visit('/')
    cy.get('h1').contains('Congratulations!!!1')
    cy.get('p').contains('You ran your first container..')
  })
})