Feature: User Authentication

    User should be able to login with valid username and password


  Scenario: Sign in with valid login credentials
    Given User navigates to web application site
    And inputs username as "standard_user" and password as "secret_sauce"
    Then Clicks the Login button
    And waits for 5000 milliseconds
    Then Assert user login is successful