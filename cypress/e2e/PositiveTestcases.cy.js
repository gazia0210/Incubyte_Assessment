import { faker } from "@faker-js/faker";

describe("SignUp & SignIn Testcases", () => {
  let firstName;
  let lastName;
  let email;
  let password;
  before(() => {
    firstName = faker.person.firstName();
    lastName = faker.person.lastName();
    email = faker.internet.email();
    password = faker.internet.password();
  });
  it("Create an account", () => {
    cy.visit(
      "https://magento.softwaretestingboard.com/collections/yoga-new.html"
    );
    cy.findByRole("link", { name: /create an account/i })
      .should("be.visible")
      .click();
    cy.url().should("include", "/customer/account/create/");
    cy.findAllByText(/create new customer account/i).should("be.visible");
    cy.findByText(/personal information/i).should("be.visible");
    cy.findByRole("textbox", { name: /first name/i }).type(firstName);
    cy.findByRole("textbox", { name: /last name/i }).type(lastName);
    cy.findByText(/sign-in information/i).should("be.visible");
    cy.findByRole("textbox", { name: /email/i }).type(email);
    cy.get("#password").type(password);
    cy.findByLabelText(/confirm password/i).type(password);
    cy.findByRole("button", { name: /create an account/i }).click();
    cy.findByText(
      /thank you for registering with main website store\./i
    ).should("be.visible");
  });
  it("Sign In", () => {
    cy.visit(
      "https://magento.softwaretestingboard.com/collections/yoga-new.html"
    );
    cy.findAllByRole("link", { name: /sign in/i })
      .should("be.visible")
      .click();
    cy.findAllByText(/customer login/i).should("be.visible");
    cy.findByRole("textbox", { name: /email/i }).type(email);
    cy.findByLabelText(/password password/i).type(password);
    cy.findByRole("button", { name: /sign in/i }).click();
  });
});









