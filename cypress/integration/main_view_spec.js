describe('Main View User Flows', () => {
  beforeEach(() => {
     cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {fixture: 'movies.json'})
     .visit('http://localhost:3000');
  });

  it('should be able to visit the url', () => {
    cy.url()
    .should('eq', 'http://localhost:3000/');
  });
  
  it('should be able to see a header', () => {
    cy.get('h1')
    .contains('Rotten Tomatillos');
  })
});

//TEST URL in the describe block
// .url
// .includes
//it should display movies details when a movie is clicked & intercept the URL for that movie (heroku app link url) and replace it with indvidual url
//test clicking  
//cypress commands 
