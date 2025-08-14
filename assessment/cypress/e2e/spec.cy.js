describe("Alphabet Buttons App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173"); // Change to your Vite dev URL
  });

  it("should display the title, subtitle, and output area", () => {
    cy.contains("Alphabet Buttons").should("be.visible");
    cy.contains("Click letters").should("be.visible");
    cy.get(".output").should("exist");
  });

  it("should render all 26 alphabet buttons", () => {
    cy.contains("A").should("be.visible");
    cy.contains("M").should("be.visible");
    cy.contains("Z").should("be.visible");
  });

  it("should allow clicking on alphabet buttons to update output", () => {
    cy.get(".key").contains("A").click();
    cy.get(".key").contains("B").click();
    cy.get(".output").should("contain.text", "AB");
  });

  it("should allow using the Backspace button to remove characters", () => {
    cy.get(".key").contains("C").click();
    cy.get(".output").should("contain.text", "C");
    cy.contains("Backspace").click();
    cy.get(".output").should("not.contain.text", "C");
  });
});
