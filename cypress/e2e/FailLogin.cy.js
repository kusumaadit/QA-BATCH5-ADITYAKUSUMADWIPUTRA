describe('Login Fail', () => {
    it('Login Test Fail 1 HC', () => {
      cy.viewport('macbook-13')
      cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Login')
      cy.wait(1000)
  
      cy.get('input[id="Input_UsernameVal"]').type("charles.esteveZS")
  
      cy.get('input[id="Input_PasswordVal"]').type("12345643")
  
      cy.get('[data-button=""]').click();
  
    })
  })