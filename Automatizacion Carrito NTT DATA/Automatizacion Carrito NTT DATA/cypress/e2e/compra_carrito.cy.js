describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://opencart.abstracta.us/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[onclick="cart.add(\'40\');"]').click();
    cy.get('[onclick="cart.add(\'30\');"] > .fa').click();
    cy.get('#input-option226').select('15');
    cy.get('#button-cart').click();
    cy.get('#cart-total').click();
    cy.get('[href="http://opencart.abstracta.us:80/index.php?route=checkout/cart"] > strong').click();
    cy.get('.pull-right > .btn').click();
    cy.get(':nth-child(1) > :nth-child(4) > label').click();
    cy.get(':nth-child(4) > label > input').check();
    cy.get('#button-account').click();
    cy.get('#input-payment-firstname').clear('M');
    cy.get('#input-payment-firstname').type('Michael');
    cy.get('#input-payment-lastname').clear();
    cy.get('#input-payment-lastname').type('Perez');
    cy.get('#input-payment-email').clear('m');
    cy.get('#input-payment-email').type('mac-stev1996@hotmail.com');
    cy.get('#input-payment-telephone').clear('0');
    cy.get('#input-payment-telephone').type('0978908852');
    cy.get('#input-payment-company').clear('N');
    cy.get('#input-payment-company').type('NttData');
    cy.get('#input-payment-address-1').clear('M');
    cy.get('#input-payment-address-1').type('Mapasingue Este Coop. Mirador de Mapasingue Mz. 201 Solar 29');
    cy.get('#input-payment-city').clear('G');
    cy.get('#input-payment-city').type('Guayaquil');
    cy.get('#input-payment-postcode').clear('0');
    cy.get('#input-payment-postcode').type('090112');
    cy.get('#input-payment-country').select('62');
    cy.get('#input-payment-zone').select('988');
    cy.get('#button-guest').click();
    cy.get('.panel-body > :nth-child(5) > .form-control').click();
    cy.get('#button-shipping-method').click();
    cy.get('.pull-right > [type="checkbox"]').check();
    cy.get('#button-payment-method').click();
    cy.get('#button-confirm').click();
    cy.get('.pull-right > .btn').click();
    /* ==== End Cypress Studio ==== */
  })
})