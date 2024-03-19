const ENV_URL = Cypress.env("BASE_API_URL") || "http://localhost:3000/api";

/**
 * Most basic test to check the app runs.
 */
describe("App", () => {
  it("Renders home page", () => {
    cy.visit("/");
    cy.get("h1").should("contain", "Welcome to Golden Egg 2024");
  });
});
