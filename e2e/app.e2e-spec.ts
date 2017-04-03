import { DashboardVorhPage } from './app.po';

describe('dashboard-vorh App', function() {
  let page: DashboardVorhPage;

  beforeEach(() => {
    page = new DashboardVorhPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
