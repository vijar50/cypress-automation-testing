export const performSearch = (searchCriteria) => {
    cy.get('[id="simpleSearch"]').type(searchCriteria)
    cy.get('[id="searchButton"]').click()
}