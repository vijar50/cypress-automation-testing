Feature: Home Page
    The Home page for Wikipedia

    Background:
        Given the Wikipedia home page has been opened

    Scenario: 01 A user can view search results for Cypress
        When the user searches for "Cypress"
        Then the resulting article page title is "Cypress"

    Scenario Outline: 02 A user can view search results for different criteria
        When the user searches for "<criteria>"
        Then the resulting article page title is "<criteria>"
        Examples:
            | criteria  |
            | Telephone |
            | Fax       |

    Scenario: 03 A user can view information on sister projects
        When the user scrolls to the bottom of the homepage
        Then they are presented with links to the following projects:
            | linkNo | linkText    |
            | 1      | Commons     |
            | 2      | Wikidata    |
            | 3      | Wikispecies |
            | 4      | Wikivoyage  |