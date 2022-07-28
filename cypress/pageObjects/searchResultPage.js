class searchResultPage {
    elements = {
        itemResultsByElement: () => cy.get(".s-result-item"),
        sortByDropDownButton: () => cy.get('.a-dropdown-label'),
        sortBy: {
            featuredOption: '',
            priceL2HOption: '',
            priceH2LOption: () => cy.get('#s-result-sort-select_2'),
            avgCustomerReviewOption: '',
            newestArrivalsOption: ''
        }
    }

    selectItemResultByIndex(index) {
        this.elements.itemResultsByElement().eq(index).find("a").eq(1).invoke('removeAttr', 'target').click();
    }

    sortItemsByOptionPriceHighToLow() {
        this.elements.sortByDropDownButton().click();
        this.elements.sortBy.priceH2LOption().click();
    }
}

module.exports = new searchResultPage();