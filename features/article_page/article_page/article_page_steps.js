import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { performSearch } from "../../common/common";
import ArticlePage from "../../common/pom/article_page_pom";

const articlePage = new ArticlePage();

Given("the user has an article page for Earth opened", () => {
  performSearch("Earth");
});

Given("a user can view the information panel", () => {
  articlePage.getInformationPanel().should("be.visible");
});

When("the user chooses to view information on {string}", (linkText) => {
  articlePage.getInformationPanel().contains(linkText).click();
});

When("the user is taken to the article section for {string}", (sectionName) => {
  articlePage.getAphelionHeading().contains(sectionName, { matchCase: false });
});
