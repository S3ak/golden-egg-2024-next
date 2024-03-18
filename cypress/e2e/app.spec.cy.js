describe("App", () => {
  it("Renders home page", () => {
    cy.visit("/");
    cy.get("h1").should("contain", "Welcome to Golden Egg 2024");
  });
});
