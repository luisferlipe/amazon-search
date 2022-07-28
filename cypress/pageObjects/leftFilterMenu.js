class leftFilterMenu {
    elements = {
        brands: {
            samsungCheckBox: () => cy.get(".a-list-item").contains("Samsung"),
        }
    }

    selectBrandSamsungCheckBox() {
        this.elements.brands.samsungCheckBox().click();
    }
}

module.exports = new leftFilterMenu();