import movies from "../../src/api/movies.json"
 
describe('movies list filter', () => {
 beforeEach('visit the page', () => {
   cy.visit('/');
 });
 
 it('search lowercase title "rogue one"', () => {
   cy.get('#search-query').type('rogue one');
   cy.get('.title').should('have.text', movies[3].title);
 });
 
 it('search uppercase title "ROGUE ONE"', () => {
   cy.get('#search-query').type('ROGUE ONE');
   cy.get('.title').should('have.text', movies[3].title);
 })
 
 it('search for coincidence in movie content', () => {
   cy.get('#search-query').type('daring');
   cy.get('.content').should('contain', 'daring');
 })
 
 it('search for partly coincidence', () => {
   cy.get('#search-query').type('pla');
   cy.get('.card').should('have.length', 3);
   cy.get('.card')
     .find('.content')
     .should('contain', 'pla');
 })
});
