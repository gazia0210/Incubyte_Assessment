import { Before, Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { faker } from "@faker-js/faker";

let firstName;
let lastName;
let email;
let password;

Before(() => {
  firstName = faker.person.firstName();
  lastName = faker.person.lastName();
  email = faker.internet.email();
  password = faker.internet.password();
});

Given("I have generated user details", () => {
  // User details are generated in the Before hook
});

Given("I visit the Yoga collection page", () => {
  cy.visit(
    "https://magento.softwaretestingboard.com/collections/yoga-new.html"
  );
});

When("I click on the create an account link", () => {
  cy.findByRole("link", { name: /create an account/i })
    .should("be.visible")
    .click();
});

Then("I should be on the create new customer account page", () => {
  cy.url().should("include", "/customer/account/create/");
  cy.findAllByText(/create new customer account/i).should("be.visible");
});

When("I fill in the personal information form", () => {
  cy.findByText(/personal information/i).should("be.visible");
  cy.findByRole("textbox", { name: /first name/i }).type(firstName);
  cy.findByRole("textbox", { name: /last name/i }).type(lastName);
});

When("I fill in the sign-in information form", () => {
  cy.findByText(/sign-in information/i).should("be.visible");
  cy.findByRole("textbox", { name: /email/i }).type(email);
  cy.get("#password").type(password);
  cy.findByLabelText(/confirm password/i).type(password);
});

When("I click on the create an account button", () => {
  cy.findByRole("button", { name: /create an account/i }).click();
});

Then("I should see the registration confirmation message", () => {
  cy.findByText(/thank you for registering with main website store\./i).should(
    "be.visible"
  );
});

When("I click on the sign in link", () => {
  cy.findAllByRole("link", { name: /sign in/i })
    .should("be.visible")
    .click();
});

Then("I should be on the customer login page", () => {
  cy.findAllByText(/customer login/i).should("be.visible");
});

When("I fill in the email and password", () => {
  cy.findByRole("textbox", { name: /email/i }).type(email);
  cy.findByLabelText(/password password/i).type(password);
});

Then("I click on the sign in button", () => {
  cy.findByRole("button", { name: /sign in/i }).click();
});


