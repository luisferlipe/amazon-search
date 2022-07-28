class itemDescriptionPage {
    elements = {
        aboutThisItem: () => cy.get('#feature-bullets'),
    }

    getAboutThisItemText() {
        this.elements.aboutThisItem().should('contain.text', 'About this item');
        this.elements.aboutThisItem().invoke('text').then((text) => {
            cy.log('About this item text: '+ text);
        });
    }
}

module.exports = new itemDescriptionPage();