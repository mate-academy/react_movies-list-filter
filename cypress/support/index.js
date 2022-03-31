Cypress.Commands.add('getByDataCy', (selector) => {
    cy.get(`[data-cy="${selector}"]`);
});

Cypress.Commands.add('selectElement', {
  prevSubject: 'optional'
}, (subject, attribute, index = 0) => {
  cy.wrap(subject).eq(index).find(`[data-cy=${attribute}]`);
});
