class ArticlePage {

  getInformationPanel() {
    return cy.get('.infobox');
  }

  getAphelionHeading() {
      return cy.get('[id="Perihelion_and_aphelion"]')
  }
}

export default ArticlePage;
