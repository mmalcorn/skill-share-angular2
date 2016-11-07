import { SkillShareAngular2Page } from './app.po';

describe('skill-share-angular2 App', function() {
  let page: SkillShareAngular2Page;

  beforeEach(() => {
    page = new SkillShareAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
