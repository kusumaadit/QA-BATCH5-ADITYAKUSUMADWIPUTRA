describe('Login Test', () => {
    it('Login Test 1 Staff 2', () => {
        cy.viewport('macbook-13')
        cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Login')
      cy.wait(1000)
      
      cy.get('input[id="Input_UsernameVal"]').type("cecil.anderson")
  
      cy.get('input[id="Input_PasswordVal"]').type("123456")
  
      cy.get('[data-button=""]').click();
  
    })
  })