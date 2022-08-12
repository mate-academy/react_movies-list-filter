const page = {
  searchField: () => cy.get('#search-query'),
  movies: () => cy.get('.card'),
}

describe('Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have an empty search field', () => {
    page.searchField()
      .should('have.value', '');
  });

  it('should show all the movies by default', () => {
    page.movies()
      .should('have.length', 5);

    page.movies().eq(0)
      .find('.title')
      .should('have.text', 'Inception');

    page.movies().eq(4)
      .find('.title')
      .should('have.text', 'The Holiday');
  });

  it('should allow to enter some text', () => {
    page.searchField()
      .type('Hello')
      .should('have.value', 'Hello');
  });

  it('should allow to remove entered text', () => {
    page.searchField()
      .type('Hello')
      .type('{selectAll}{backspace}')
      .should('have.value', '');
  });
  
  it('should search by exact title', () => {
    page.searchField()
      .type('Love Actually');

    page.movies()
      .should('have.length', 1)
      .eq(0)
      .find('.title')
      .should('have.text', 'Love Actually');
  });

  it('should search by a start of a title', () => {
    page.searchField()
      .type('Rogue');

    page.movies()
      .should('have.length', 1)
      .eq(0)
      .find('.title')
      .should('have.text', 'Rogue One');
  });

  it('should search by a part of a title', () => {
    page.searchField()
      .type('Day After');
    
    page.movies()
      .should('have.length', 1)
      .eq(0)
      .find('.title')
      .should('have.text', 'The Day After Tomorrow');
  });

  it('should search by a lower case part of a title', () => {
    page.searchField()
      .type('day after');
    
    page.movies()
      .should('have.length', 1)
      .eq(0)
      .find('.title')
      .should('have.text', 'The Day After Tomorrow');
  });

  it('should search by an upper case part of a title', () => {
    page.searchField()
      .type('DAY AFTER');
    
    page.movies()
      .should('have.length', 1)
      .eq(0)
      .find('.title')
      .should('have.text', 'The Day After Tomorrow');
  });

  it('should search by a mixed case part of a title', () => {
    page.searchField()
      .type('DaY aFTer');
    
    page.movies()
      .should('have.length', 1)
      .eq(0)
      .find('.title')
      .should('have.text', 'The Day After Tomorrow');
  });

  it('should search by a part of a description', () => {
    page.searchField()
      .type('interrelated tales');
    
    page.movies()
      .should('have.length', 1)
      .eq(0)
      .find('.title')
      .should('have.text', 'Inception');
  });

  it('should search by a mixed case part of a description', () => {
    page.searchField()
      .type('interRELATED taLES');
    
    page.movies()
      .should('have.length', 1)
      .eq(0)
      .find('.title')
      .should('have.text', 'Inception');
  });

  it('should show all the matched movies', () => {
    page.searchField()
      .type('love');
    
    page.movies().should('have.length', 3)
      
    page.movies().eq(0).find('.title').should('have.text', 'Inception');
    page.movies().eq(1).find('.title').should('have.text', 'Love Actually');
    page.movies().eq(2).find('.title').should('have.text', 'The Holiday');
  });

  it('should update movies on type', () => {
    page.searchField().type('love');
    page.movies().should('have.length', 3);

    page.searchField().type(' ');
    page.movies().should('have.length', 2);
  });

  it('should show no movies if query does not match any title or description', () => {
    page.searchField().type('loves');
    page.movies().should('not.exist');
  });

  it('should restore movies after if the query starts matching', () => {
    page.searchField().type('loves');
    page.movies().should('not.exist');

    page.searchField().type('{backspace}');
    page.movies().should('have.length', 3);
  });
});
