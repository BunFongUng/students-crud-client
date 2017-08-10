import { Ng4StudentsPage } from './app.po';

describe('ng4-students App', () => {
  let page: Ng4StudentsPage;

  beforeEach(() => {
    page = new Ng4StudentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
