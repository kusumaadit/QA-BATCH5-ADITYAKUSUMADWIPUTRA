describe('Paid Test', () => {
    it('Paid', () => {
      cy.viewport('macbook-13')
      cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Login')
      cy.wait(1000)
      
      cy.get('input[id="Input_UsernameVal"]').type("angela.garcia")
  
      cy.get('input[id="Input_PasswordVal"]').type("123456")
  
      cy.get('[data-button=""]').click();

      cy.get('a[href="/ClaimPortal/Invoices"]').click()

      cy.get('input[id="Input_SearchKeyword').type("TestInvoice4")

      cy.contains('td[data-header="Invoice"] a', 'Testinvoice4').click();

      cy.get('button[class="btn btn-primary margin-bottom-m margint-left-m overview-button"]').click()

      cy.get('input[id="Input_HolderName"]').type("Aditya K")

      cy.get('input[id="Input_CardNumber"]').type("92930212")

      cy.get('div[id="Input_ExpMonth"]').click()

      cy.get('.dropdown-list .dropdown-popup-row').find('span:contains("8")').click();

      cy.get("div[id='Input_ExpYear']").click()

      cy.get('.dropdown-list .dropdown-popup-row').find('span:contains("2027")').click();

      cy.get("input[id='Input_CVV']").type("2")
    
      cy.get("button[class='btn btn-primary']").click("")
      

  
    })
  })