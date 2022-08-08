/// <reference types="cypress" />

describe('Cypress 101 assignment', () => {
    it('test', () => {
        cy.visit('https://www.lambdatest.com/selenium-playground/input-form-demo')
        cy.viewport(414, 846)
        cy.viewport('samsung-note9')
        cy.contains('Input Forms').click().should('be.visible')
        cy.contains('Input Form Submit').click({force: true})
        //cy.injectAxe()
        //cy.checkA11y('.loginform')
        cy.get('#name').type('Sanjay')
        //cy.xpath('//input[@id="inputEmail4"]').type('lamdatestsanjay@gmail.com')
        cy.get('#inputEmail4').type('lamdatestsanjay@gmail.com')
        cy.get('#inputPassword4').type('Sanjay12345')
        cy.get('#company').type('test')
        cy.get('#websitename').type('www.gogo.com')
        //cy.get(':nth-child(3) > .pr-20 > .w-full').click()
        cy.get('#inputCity').type('kathmandu')
        cy.get('#inputAddress1').type('coke')
        cy.get('#inputAddress2').type('fanta')
        cy.get('#inputState').type('kathmandu')
        cy.get('#inputZip').type('44600')
        //cy.xpath('//button[@type="submit"]').click()
        cy.contains('Submit').click() 

        const threshold = {
            performance: 96,
            accessibility: 98,
            "best-practices": 83,
            seo: 86,
        }
        
        const lighthouseConfig = {
            formfactor: "mobile",
            screenEmulation: {
                disabled: true,
            }
        }
    
        cy.lighthouse(threshold, lighthouseConfig)
    
           })
          
    
    })