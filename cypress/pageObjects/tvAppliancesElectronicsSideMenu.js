class tvAppliancesSideMenu {
    elements = {
        televisionsButton: () => cy.get(".hmenu-item").contains("Televisions"),
    }

    clickTelevisionsButton() {
        this.elements.televisionsButton().click();
    }
}

module.exports = new tvAppliancesSideMenu();