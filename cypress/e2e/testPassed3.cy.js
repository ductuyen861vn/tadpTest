describe('template spec', () => {
  it('passes', { tags: ['smoke'] },() => {
    cy.visit('/')
    cy.get('h1').contains('Congratulations!!!')
    cy.get('p').contains('You ran your first container.')
  })
})