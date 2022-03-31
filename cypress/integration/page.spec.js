/// <reference types="cypress" />
/// <reference types="../support" />

import movies from "../../src/api/movies.json"

describe('movies list filter', () => {
  beforeEach('visit the page', () => {
    cy.visit('/');
  });

  it('search lowercase title "rogue one"', () => {
    cy.getByDataCy('search-field')
      .type('rogue one');
    
    cy.getByDataCy('movie-card')
      .should('have.length', 1);

    cy.getByDataCy('movie-title')
      .should('have.text', movies[3].title);
  });

  it('search uppercase title "ROGUE ONE"', () => {
    cy.getByDataCy('search-field')
      .type('ROGUE ONE');
    
    cy.getByDataCy('movie-card')
      .should('have.length', 1);

    cy.getByDataCy('movie-title')
      .should('have.text', movies[3].title);
  })

  it('search for coincidence in movie content', () => {
    cy.getByDataCy('search-field')
      .type('daring');

    cy.getByDataCy('movie-card')
      .should('have.length', 1);

    cy.getByDataCy('movie-content')
      .should('contain', 'daring');
  })

  it('search for partly coincidence', () => {
    cy.getByDataCy('search-field')
      .type('pla');

    cy.getByDataCy('movie-card')
      .should('have.length', 3);
    
    cy.getByDataCy('movie-card')
      .selectElement('movie-content')
      .should('contain', 'pla');

    cy.getByDataCy('movie-card')
      .selectElement('movie-content', 1)
      .should('contain', 'pla');

    cy.getByDataCy('movie-card')
      .selectElement('movie-content', 2)
      .should('contain', 'pla');
  })
});
