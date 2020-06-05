
context('Testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/armyList')
  })

  it( 'testing button press', () => {
    cy.get('[data-cy=to-collapse-id-Imperium]')
        .should('be.visible')

    cy.get('[data-cy=to-collapse-id-Chaos]')
        .should('be.visible')

    cy.get('[data-cy=to-collapse-id-Xenos]')
        .should('be.visible')

    cy.get('[data-cy=to-collapse-id-Imperium]')
        .click()

    cy.get('[data-cy=to-collapse-id-Chaos]')
        .click()

    cy.get('[data-cy=to-collapse-id-Xenos]')
        .click()

   cy.get('[data-cy=img-id-BloodAngels]').trigger('mouseover')

  })
})
