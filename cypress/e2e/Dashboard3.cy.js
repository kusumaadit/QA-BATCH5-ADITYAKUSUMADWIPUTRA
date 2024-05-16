describe('Dashboard', () => {
    it('Dashboard pass', () => {
      cy.viewport('macbook-13')
      cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Login')
      cy.wait(1000)
  
      cy.get('input[id="Input_UsernameVal"]').type("cecil.anderson")
  
      cy.get('input[id="Input_PasswordVal"]').type("123456")
  
      cy.get('[data-button=""]').click();

      cy.get('a[href="/ClaimPortal/Dashboard"]').click();

      cy.wait(4000)

      cy.get('a[href="/ClaimPortal/Invoices"]').click()

      cy.wait(4000)

      cy.get('a[href="/ClaimPortal/Dashboard"]').click();

    
    })
  })