describe('template spec', () => {
  it('passes', { tags: ['smoke'] },() => {
    cy.visit('/')
    cy.get('h1').contains('Congratulations!!!')
    cy.get('p').contains('You ran your first container.')
  })
})

//  it('Run test case : EDQAENG-20273, EDQAENG-20274, EDQAENG-20275', { tags: ['smoke'] }, () => {
