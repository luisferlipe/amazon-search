import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const mainPage = require("../../pageObjects/mainPage");
const topMenu = require("../../pageObjects/topMenu");
const sideMenu = require("../../pageObjects/sideMenu");
const tvSideMenu = require("../../pageObjects/tvAppliancesElectronicsSideMenu");
const leftFilterMenu = require("../../pageObjects/leftFilterMenu");
const searchResultPage = require("../../pageObjects/searchResultPage");
const itemDescriptionPage = require("../../pageObjects/itemDescriptionPage")

Given("A user opens the amazon india web page", () => {
  cy.visit("/");
});

When("I select shop by department side menu", () => {
  topMenu.clickHamburgerButton();
  sideMenu.clickTVAppliancesElectronicsButton();
  tvSideMenu.clickTelevisionsButton();
  leftFilterMenu.selectBrandSamsungCheckBox();
  searchResultPage.sortItemsByOptionPriceHighToLow();
  searchResultPage.selectItemResultByIndex(2);
  itemDescriptionPage.getAboutThisItemText();
});