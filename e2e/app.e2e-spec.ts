import { XoxPage } from './app.po';

describe('xox App', function() {
  let page: XoxPage;

  beforeEach(() => {
    page = new XoxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
