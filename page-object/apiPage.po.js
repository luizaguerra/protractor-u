var ApiPage = function(){
    this.title = 'AngularJS: API: API Reference'
    this.dirNgBind = element(by.linkText('ngBind'));
    this.searchField = element(by.name('as_q'));
};

ApiPage.prototype.visit = function(){
    browser.get('https://docs.angularjs.org/api');
};

module.exports = ApiPage;