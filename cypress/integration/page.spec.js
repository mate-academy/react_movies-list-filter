import movies from "../../src/api/movies.json"

describe('Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  
  it('should search lowercase title "rogue one"', () => {
    cy.get('#search-query')
      .type('rogue one');
    cy.get('.title')
      .should('have.text', movies[3].title);
    cy.get('#search-query')
      .type('{selectAll}{backspace}');
  });
  
  it('should search uppercase title "ROGUE ONE"', () => {
    cy.get('#search-query')
      .type('ROGUE ONE');
    cy.get('.title')
      .should('have.text', movies[3].title);
    cy.get('#search-query')
      .type('{selectAll}{backspace}');
  });
  
  it('should search for a match in movie content', () => {
    cy.get('#search-query')
      .type('daring');
    cy.get('.content')
      .should('contain', 'daring');
    cy.get('#search-query')
      .type('{selectAll}{backspace}');
  });
  
  it('should search partial match', () => {
    cy.get('#search-query')
      .type('pla');
    cy.get('.card')
      .should('have.length', 3);
    cy.get('.card')
      .find('.content')
      .should('contain', 'pla');
    cy.get('#search-query')
      .type('{selectAll}{backspace}');
  });
});
