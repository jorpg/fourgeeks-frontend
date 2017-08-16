import { FourGeeksPage } from './app.po';

describe('four-geeks App', function() {
  let page: FourGeeksPage;

  beforeEach(() => {
    page = new FourGeeksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
