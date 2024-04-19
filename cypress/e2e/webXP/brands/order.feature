Feature: Automate End to End Buy Order functionality

    I want to visit brand group page
    I want to select product
    I want to add to cart
    I want to delete the items in the cart
    I want to give delivery details
    I want to complete order

    Scenario: Order confirmation with delivery option
        Given User is on brand group page
        When the user selects any product
        And the user selects option, proteins, extras and add special request
        And the user click on add to cart
        And the user update the counter
        And the user delete the item in the cart
        And the user click on checkout button
        And the user select delivery option
        And the user click on payments options
        And the user to confirm order
        Then the user should be able to place the order successfully

    Scenario: Order confirmation with pickup option
        Given User is on brand group page
        When the user selects any product
        And the user selects option, proteins, extras and add special request
        And the user click on add to cart
        And the user click on checkout button
        And the user select pickup option
        And the user click on payments options
        And the user to confirm order
        Then the user should be able to place the order successfully


    Scenario: Order confirmation with in building option
        Given User is on brand group page
        When the user selects any product
        And the user selects option, proteins, extras and add special request
        And the user click on add to cart
        And the user click on checkout button
        And the user select in building option
        And the user click on payments options
        And the user to confirm order
        Then the user should be able to place the order successfully


    Scenario: Input validations for name, phone number, email
        Given User is on brand group page
        When the user selects any product
        And the user selects option, proteins, extras and add special request
        And the user click on add to cart
        And the user click on checkout button
        Then the user is able to view name, phone number, email validation errors

    Scenario: Validate the presence of all images on the pages
        Given User is on brand group page
        When the user navigate to Brand Group sections
        Then the user should see all brand group images loaded successfully
        When the user selects any product
        Then the user should see product banner and products images loaded successfully
        When the user click on single product
        Then the user should see selected product image loaded successfully
        When the user click on add to cart button
        Then the user should see selected product image in the cart
        When the user click checkout button
        Then the user should see selected product image in summary box
        When the user click on payment button
        Then the user should see selected product image on payment page
        When the user click on confirm button
        Then the user should see selected product image on order details page

    Scenario: Veirfy sum of item and delivery total is correct
        Given User is on brand group page
        When the user selects any product
        And the user selects option, proteins, extras and add special request
        And the user click on add to cart
        And the user click on checkout button
        And the user select delivery option
        Then the user should see the correct total amount, including the sum of items and delivery fee
