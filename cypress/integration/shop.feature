Feature: Cart Functionality

    User should be able to add product to cart
    User should be able to checkout 

    Background: Authenticate user 
      Given User navigates to web application site
      And inputs username as "standard_user" and password as "secret_sauce"
      Then Clicks the Login button
      And waits for 5000 milliseconds
      Then Assert user login is successful

    Scenario: Add product to cart
      Given User Adds to cart on a product
      Then Validate item is added to cart 
      And Click the cart basket icon
