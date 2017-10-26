describe('Protractor Demo App', function() {
  beforeEach(function() {
    browser.get('https://docs.angularjs.org/api');
    browser.driver.manage().window().maximize();
  });

  it('Deve conter um título', function() {
    expect(browser.getTitle()).toEqual('AngularJS: API: API Reference');
  });

  it('Deve acessar a diretiva ngBind', function(){
    dirNgBind = element(by.linkText('ngBind'));
    dirNgBind.click();
    expect(browser.getTitle()).toEqual('AngularJS: API: ngBind');
  });

});
