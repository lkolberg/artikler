import { ArtiklerPage } from './app.po';

describe('artikler App', function() {
  let page: ArtiklerPage;

  beforeEach(() => {
    page = new ArtiklerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
