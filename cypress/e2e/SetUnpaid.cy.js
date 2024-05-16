describe('UnpaidTest', () => {

    it('Unpaid Test', () => {
        cy.viewport('macbook-13')
      cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Login')

      cy.wait(1000)
  
      cy.get('input[id="Input_UsernameVal"]').type("charles.estevez ")
  
      cy.get('input[id="Input_PasswordVal"]').type("123456")
  
      cy.get('[data-button=""]').click();
  
      cy.get('a[href="/ClaimPortal/Invoices"]').click()

      cy.get('input[id="Input_SearchKeyword').type("TestInvoice2")

      cy.contains('td[data-header="Invoice"] a', 'TestInvoice2').click();

      cy.get('button[class="btn ThemeGrid_MarginGutter"]').click()

      cy.get('input[id="Input_SearchKeyword').type("TestInvoice2")






    
      })
  })