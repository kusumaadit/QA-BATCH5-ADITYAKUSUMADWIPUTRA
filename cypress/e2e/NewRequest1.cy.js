describe('Create New Request', () => {

    it('New Request', () => {
        cy.viewport('macbook-13')
      cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Login')
      cy.wait(1000)
  
      cy.get('input[id="Input_UsernameVal"]').type("nancy.martin")
  
      cy.get('input[id="Input_PasswordVal"]').type("123456")
  
      cy.get('[data-button=""]').click();
  
      cy.get(".margin-left-m").click()
      
      cy.get("div[id='ListInvoices_NewInvoice'] button[class='btn']").click()

      cy.get('input[id="Input_InvoiceNumber"]').type("TestInvoice1")

      cy.get('input[id="Input_PeriodStartDate"]').type("2024-01-12T20:12")

      cy.get('input[id="Input_PeriodEndDate"]').type("2024-01-13T20:12")

      cy.get('input[id="Input_Amount"]').type('1000')

      cy.get('button[class = "btn btn-primary"]').click()

      cy.get('input[id="Input_SearchKeyword"]').type("TestInvoice1")

    
      })
  })