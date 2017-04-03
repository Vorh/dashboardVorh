import { dbdFrontendPage } from './app.po';

describe('dbd-frontend App', function() {
  let page: dbdFrontendPage;

  beforeEach(() => {
    page = new dbdFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
