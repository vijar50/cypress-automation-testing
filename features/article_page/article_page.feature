Feature: Article page
    Wikipedia article page

    Background:
        Given the Wikipedia home page has been opened
        And the user has an article page for Earth opened

    Scenario: 01 A user is able to navigate to term definitions from information panel
        Given a user can view the information panel
        When the user chooses to view information on "Aphelion" 
        Then the user is taken to the article section for "Aphelion"