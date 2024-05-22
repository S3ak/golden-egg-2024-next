const ENV_URL = Cypress.env("BASE_API_URL") || "http://localhost:3000/api";

/**
 * Most basic test to check the app runs.
 */
describe("App", () => {
  it("Renders home page", () => {
    cy.visit("/");
    cy.get("h1").should("contain", "THE GOLDEN EGG 2024");
    cy.get("p").should(
      "contain",
      "Join us at The Golden Egg, Noroff's annual talent showcase and awards ceremony! It's your chance to shine and celebrate with fellow students."
    );
  });

  it("Renders an menu icon", () => {
    cy.visit("/");
    cy.get('[data-cy="home-icon"]').should("be.visible");
  });

  it.skip("Can navigate to the tickets page", () => {
    cy.visit("/");
    cy.get('[data-cy="tickets-link"]').click();
  });

  it("Can navigate to the nomination page", () => {
    cy.visit("/");

    cy.get('a[href*="/submissions/new"]').click();

    cy.url().should("include", "/submissions/new");

    cy.get("h1").contains("Nominate");
  });

  it("Can navigate to the tickets page", () => {
    cy.visit("/");

    cy.get('a[href*="/tickets"]').click();

    cy.url().should("include", "/tickets");

    cy.get("h1").contains("Tickets");

    cy.get('a[href*="/tickets/oslo"]').click();

    cy.url().should("include", "/tickets/oslo");
    cy.get("h1").contains("Tickets Oslo");

    cy.get("p").contains("The event starts at 18:30");
  });
});
