Feature: SignUp & SignIn Testcases

  Background:
    Given I have generated user details

  Scenario: Create an account
    Given I visit the Yoga collection page
    When I click on the create an account link
    Then I should be on the create new customer account page
    When I fill in the personal information form
    And I fill in the sign-in information form
    And I click on the create an account button
    Then I should see the registration confirmation message
    
  Scenario: Sign In
    Given I visit the Yoga collection page
    When I click on the sign in link
    Then I should be on the customer login page
    When I fill in the email and password
    Then I click on the sign in button
    