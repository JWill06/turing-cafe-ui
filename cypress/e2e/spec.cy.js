describe('Renders page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
      statusCode: 200,
      fixture: 'example.json'
    })
    .visit('http://localhost:3000/')
  });
  it('Should display the form', () => {
    cy.get('form').should('be.visible');
  cy.contains('Make Reservation').should('be.visible')
  })
  it('should display cards', () => {
    cy.get('.cardContainer').should('contain', 'Birtha')
    .and('contain', '05/14')
    .and('contain', '7:10')
    .and('contain', 'Number of guests: 6')
  })
  it('Should display a users input', () => {
    cy.get('input[name="name"]').type('John Doe')
    cy.get('input[name="date"]').type('07/14')
    cy.get('input[name="time"]').type('05:15')
    cy.get('input[name="number"]').type('6')
  })
})