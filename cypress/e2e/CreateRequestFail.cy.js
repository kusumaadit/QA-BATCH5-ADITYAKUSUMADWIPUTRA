describe('Create New Request Fail', () => {

    it('New Request Fail', () => {
        cy.viewport('macbook-13')
      cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Login')
      cy.wait(1000)
  
      cy.get('input[id="Input_UsernameVal"]').type("nancy.martin")
  
      cy.get('input[id="Input_PasswordVal"]').type("123456")
  
      cy.get('[data-button=""]').click();
  
      cy.get(".margin-left-m").click()
      
      cy.get("div[id='ListInvoices_NewInvoice'] button[class='btn']").click()

      cy.get('input[id="Input_InvoiceNumber"]').type("TestInvoice1")

      cy.wait(5000)

      cy.get('button[class = "btn btn-primary"]').click()

    
      })
  })