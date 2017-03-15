import { browser, element, by } from 'protractor';

export class FeNewsProjPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('np-root h1')).getText();
  }
}
