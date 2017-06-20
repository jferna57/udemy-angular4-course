import { WrongServiceCounterPage } from './app.po';

describe('wrong-service-counter App', () => {
  let page: WrongServiceCounterPage;

  beforeEach(() => {
    page = new WrongServiceCounterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
