const page = {
  searchField: () => cy.get('#search-query'),
  movies: () => cy.get('.card'),

  assertMovieTitle: (index, title) => {
    page.movies().eq(index).find('.title').should('have.text', title);
  }
}

let failed = false;

Cypress.on('fail', (e) => {
  failed = true;
  throw e;
});

describe('Page', () => {
  beforeEach(() => {
    if (failed) Cypress.runner.stop();

    cy.visit('/')
  });

  it('should have an empty search field', () => {
    page.searchField().should('have.value', '');
  });

  it('should show all the movies by default', () => {
    page.movies().should('have.length', 5);

    page.assertMovieTitle(0, 'Inception');
    page.assertMovieTitle(4, 'The Holiday');
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
    page.searchField().type('Love Actually');

    page.movies().should('have.length', 1);
    page.assertMovieTitle(0, 'Love Actually');
  });

  it('should search by a start of a title', () => {
    page.searchField().type('Rogue');

    page.movies().should('have.length', 1);
    page.assertMovieTitle(0, 'Rogue One');
  });

  it('should search by a part of a title', () => {
    page.searchField().type('Day After');

    page.movies().should('have.length', 1);
    page.assertMovieTitle(0, 'The Day After Tomorrow');
  });

  it('should search by a lower case part of a title', () => {
    page.searchField().type('day after');

    page.movies().should('have.length', 1);
    page.assertMovieTitle(0, 'The Day After Tomorrow');
  });

  it('should search by an upper case part of a title', () => {
    page.searchField().type('DAY AFTER');

    page.movies().should('have.length', 1)
    page.assertMovieTitle(0, 'The Day After Tomorrow');
  });

  it('should search by a mixed case part of a title', () => {
    page.searchField().type('DaY aFTer');

    page.movies().should('have.length', 1);
    page.assertMovieTitle(0, 'The Day After Tomorrow');
  });

  it('should search by a part of a description', () => {
    page.searchField().type('interrelated tales');

    page.movies().should('have.length', 1);
    page.assertMovieTitle(0, 'Inception');
  });

  it('should search by a mixed case part of a description', () => {
    page.searchField().type('interRELATED taLES');

    page.movies().should('have.length', 1);
    page.assertMovieTitle(0, 'Inception');
  });

  it('should show all the matched movies', () => {
    page.searchField().type('love');

    page.movies().should('have.length', 3)

    page.assertMovieTitle(0, 'Inception');
    page.assertMovieTitle(1, 'Love Actually');
    page.assertMovieTitle(2, 'The Holiday');
  });

  it('should update search results on type', () => {
    page.searchField().type('l');
    page.movies().should('have.length', 5);

    page.searchField().type('o');
    page.movies().should('have.length', 4);

    page.searchField().type('ve');
    page.movies().should('have.length', 3);
  });

  it('should work if user types extra spaces before or after the query', () => {
    page.searchField().type('   love     ');
    page.movies().should('have.length', 3);
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
