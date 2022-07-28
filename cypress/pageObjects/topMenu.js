class topMenu {
    elements = {
        hamburgerButton: () => cy.get('.hm-icon'),
    }

    clickHamburgerButton() {
        this.elements.hamburgerButton().click();
    }
}

module.exports = new topMenu();