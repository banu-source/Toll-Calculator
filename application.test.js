
const {Header,CalculateTollButton,renderPolylineFromOSRM } = require('./application')
describe('Header Component', () => {
    it('renders the header with the correct ID', () => {
      cy.visit('/');
      cy.get('header#tollCalculatorHeader').should('exist');
    });
  });
  
  describe('CalculateTollButton Component', () => {
    it('renders the Calculate Toll button with the correct ID', () => {
      cy.visit('/');
      cy.get('button#calculateToll').should('exist');
    });
  
    it('clicking on Calculate Toll button triggers the expected behavior', () => {
      cy.visit('/');
      cy.get('button#calculateToll').click();
     
    });
  });
  
  describe('Polyline Rendering Component', () => {
    it('renders the polyline container with the correct ID', () => {
      cy.visit('/');
      cy.get('div#leafletMapContainer').should('exist');
    });
  
    it('checks the content or behavior of the rendered polyline', () => {
      cy.visit('/');
      
    });
  });