import { CodyslistPage } from './app.po';

describe('codyslist App', function() {
  let page: CodyslistPage;

  beforeEach(() => {
    page = new CodyslistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
