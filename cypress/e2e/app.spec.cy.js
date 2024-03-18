describe("App", () => {
  it("Renders home page", () => {
    cy.visit("/");
    cy.get("h1").should("contain", "Golden Egg Awards 2024");
  });
});
