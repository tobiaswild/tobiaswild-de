/// <reference types="cypress" />

describe("my first test", () => {
  beforeEach(()=>{
    cy.visit("http://localhost:3000")
  })

  it("check for title", ()=>{
    cy.get("h1").should("contain.text", "Tobias Wild")
  })
})