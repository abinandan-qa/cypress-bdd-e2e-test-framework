class OrderPaymentPage{
    getOrderTotal(){
        return cy.get('.totalValue')
    }

    getUsername(){
        return cy.get('[name="usernameInOrderPayment"]')
    }

    getPassword(){
        return cy.get('[name="passwordInOrderPayment"]')
    }

    getLoginBtn(){
        return cy.get('#login_btnundefined')
    }

    getNextBtn(){
        return cy.get('#next_btn')
    }

    getPayNowBtn(){
        return cy.get('[name="pay_now_btn_MasterCredit"]')
    }

    getOrderStatusMessage(){
        return cy.get('#orderPaymentSuccess h2 span')
    }

    getOrderNumber(){
        return cy.get('#trackingNumberLabel')
    }
}

export default OrderPaymentPage
