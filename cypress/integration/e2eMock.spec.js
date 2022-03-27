describe('e2e happy path', () => {

  beforeEach(() => {
    cy.intercept('GET', 'https://www.reddit.com/hot.json', { fixture: 'hotMockData.json' });
    cy.intercept('GET', 'https://www.reddit.com/new.json', { fixture: 'newMockData.json' });
    cy.intercept('GET', 'https://www.reddit.com/r/greentext/comments/tep5ud/anon_is_a_rapist/.json', { fixture: 'commentMockData.json' });
  });
  
  it('renders detail view with comments when post title is clicked and returns to home page', () => {
    cy.visit('https://tangerine-dango-2a2c01.netlify.app');

    // Renders posts
    cy.contains('r/greentext');
    cy.contains('Anon is a rapist ukraine');
    cy.contains('No-Possibility-8258');
    cy.contains('18578');
    cy.contains('206');
    cy.contains('r/Genshin_Impact_Leaks');
    cy.contains('2.6 First Banners Via Lumie');
    cy.contains('dzeevaed');
    cy.contains('5299');
    cy.contains('1496');

    // Filters posts
    cy.get('.header')
      .find('input')
      .type('ukraine')
      .should('have.value', 'ukraine');
    cy.contains('second post title').should('not.exist');

    // Click post title that routes to detail view
    cy.contains('Anon is a rapist ukraine').click();

    // Render post information in detail view format
    cy.contains('r/greentext');
    cy.contains('Anon is a rapist ukraine');
    cy.contains('No-Possibility-8258');
    cy.contains('18578');
    cy.contains('206');

    // Render all comments
    cy.contains('Do you need consent to go fuck yourself');
    cy.contains('thelivinlegend');
    cy.contains('84');
    cy.contains('You touched her model penis, later virgins');
    cy.contains('OhSnap404');
    cy.contains('83');
    cy.get('.commentBlock').should('have.length', 3);

    // Return home to main screen
    cy.get('.homeLink').click();

    // Renders two posts
    cy.contains('r/greentext');
    cy.contains('Anon is a rapist ukraine');
    cy.contains('No-Possibility-8258');
    cy.contains('18578');
    cy.contains('206');
    cy.contains('r/Genshin_Impact_Leaks');
    cy.contains('2.6 First Banners Via Lumie');
    cy.contains('dzeevaed');
    cy.contains('5299');
    cy.contains('1496');
    

  });

  it('renders new posts', () => {
    cy.visit('https://tangerine-dango-2a2c01.netlify.app');

    // Switch to New posts
    cy.contains('New').click();

    // Renders new post
    cy.contains('r/ukraine');
    cy.contains('Russia is scary');
    cy.contains('Adept_of_Blue');
    cy.contains('26548');
    cy.contains('1531');
    cy.contains('r/meirl');
    cy.contains('meirl');
    cy.contains('Rivalski');
    cy.contains('28303');
    cy.contains('994');
    
  });
});