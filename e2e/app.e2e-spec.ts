import { FeNewsProjPage } from './app.po';

describe('fe-news-proj App', function() {
  let page: FeNewsProjPage;

  beforeEach(() => {
    page = new FeNewsProjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('np works!');
  });
});
