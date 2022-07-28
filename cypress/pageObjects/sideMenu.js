class sideMenu {
    elements = {
        tv_appliances_electronicsButton:  () => cy.get('.hmenu-item').contains("TV, Appliances, Electronics"),
    }

    clickTVAppliancesElectronicsButton() {
        this.elements.tv_appliances_electronicsButton().click();
    } 
}

module.exports = new sideMenu();