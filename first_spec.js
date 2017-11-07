var ApiPage = require('./page-object/apiPage.po.js');
var NgBindPage = require('./page-object/ngBindPage.po.js');
var TextAreaPage = require('./page-object/textareaPage.po.js');

describe('Protractor Demo App', function() {
  var apiPage = new ApiPage();
  var ngBindPage = new NgBindPage();
  var textAreaPage = new TextAreaPage();

  beforeEach(function() {
    apiPage.visit();
    browser.driver.manage().window().maximize();
  });

  it('Deve conter um título', function() {
    expect(browser.getTitle()).toEqual(apiPage.title);
  });

  it('Deve acessar a diretivat ngBind', function(){
    apiPage.dirNgBind.click();
    expect(browser.getTitle()).toEqual(ngBindPage.title);
  });

  it('Devo realizar uma busca na homepage', function(){
    apiPage.searchField.sendKeys('textarea');
    textAreaPage.searchTextArea.click();
    expect(browser.getTitle()).toEqual(textAreaPage.title);
  });
});
