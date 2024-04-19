Feature: Brands Groups functionality

    Scenario: Visting the brand group page
        When I visit the brand group page
        Then I should see the list of brands

    Scenario: Verify brand name and description
        Given I am on the list of brands page
        When I select any brand from list
        Then The brand title "OJ’s" should be visible
        And The brand brand description "$0 delivery fee over $12" should be visible
