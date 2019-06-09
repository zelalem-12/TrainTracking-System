(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/welcome/welcome.component */ "./src/app/components/welcome/welcome.component.ts");
/* harmony import */ var _components_train_train_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/train/train.component */ "./src/app/components/train/train.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Common components and services





// Defining Route mocdule
var appRoutes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'welcome', component: _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"] },
    { path: 'train', component: _components_train_train_component__WEBPACK_IMPORTED_MODULE_4__["TrainComponent"] },
    { path: 'about-us', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"] },
    { path: 'contact-us', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] },
    { path: '404', component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"] },
    { path: '**', redirectTo: '/404' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nfooter{\r\n    background: none !important; \r\n    position: fixed; \r\n    left: 0; \r\n    bottom: 0;\r\n}\r\nfooter p{\r\n    margin-bottom: 0px;\r\n    color: #2A66A7 !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar> </app-navbar>\r\n    <div class=\"container\">\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n   <footer class=\"container\">\r\n        <br/> <br/>\r\n        <p class=\"text-center\">&copy; 2018 - Addis Ababa Institute of Technology. All Rights Reserved.</p>\r\n    </footer>\r\n    \r\n    "

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'trainTrackingSystem';
        this.lat = 51.678418;
        this.lng = 7.809007;
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/welcome/welcome.component */ "./src/app/components/welcome/welcome.component.ts");
/* harmony import */ var _components_train_train_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/train/train.component */ "./src/app/components/train/train.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"],
                _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_11__["WelcomeComponent"],
                _components_train_train_component__WEBPACK_IMPORTED_MODULE_12__["TrainComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"]
            ],
            imports: [
                // Imported Angualr Modules
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyDMEHw_39T8jfLcruOcV7NasH5RmRDwvL0'
                }),
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"],
                // Angular material design modules
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"],
            ],
            providers: [
                _services_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"],
                _services_validate_service__WEBPACK_IMPORTED_MODULE_16__["ValidateService"]
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".separator-type, .title-type, .intro-type, .content-type .intro-type p {\r\n    position: relative;\r\n  }\r\n  .intro-type .container {\r\n    padding: 107px 0px 102px 0px !important;\r\n  }\r\n  #product-header-section, .intro-type .container {\r\n    padding: 68px 15px 72px !important;\r\n  }\r\n  @media (min-width: 1630px){\r\n  .container {\r\n    width: 1630px;\r\n  }\r\n  }\r\n  .parallax {\r\n    background-attachment: inherit !important;\r\n  }\r\n  .parallax {\r\n    background-attachment: inherit !important;\r\n    background-repeat: repeat;\r\n    background-size: cover;\r\n    position: absolute;\r\n    top: 0px;\r\n    bottom: 0px;\r\n    width: 100%;\r\n    z-index: -10;\r\n  }\r\n  .company-heading h1 {\r\n    margin-bottom: 40px;\r\n    line-height: 80px;\r\n    color: #000;\r\n    font-weight: 700 !important;\r\n    text-align: center;\r\n  }\r\n  .seo-header, .product-header, .intro-type .container h1.white, .company-heading h1 {\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-weight: 100 !important;\r\n    text-transform: capitalize;\r\n    font-size: 65px;\r\n    margin-bottom: 20px;\r\n  }\r\n  .company-sections h2, .careers-sections h2, .perks-section h2 {\r\n    font-weight: 800;\r\n    font-size: 50px;\r\n  }\r\n  .company-sections h2, .company-sections h3, .careers-sections h2, .perks-section h2 {\r\n    font-family: 'proxima-nova', sans-serif;\r\n  }\r\n  .company-sections h3 {\r\n    font-size: 25px;\r\n    font-weight: 700;\r\n    margin: 14px 0;\r\n    font-family: 'proxima-nova', sans-serif;\r\n    text-transform: capitalize;\r\n  }\r\n  .red-border {\r\n    width: 50%;\r\n    border-bottom: 1px solid #d2282e;\r\n    margin: 0 auto;\r\n    height: 16px;\r\n  }\r\n  .company-sections p {\r\n    margin-top: 20px;\r\n  }\r\n  .ct-u-size22 {\r\n    font-size: 22px;\r\n  }\r\n  .ct-u-fontWeight300 {\r\n    font-weight: 300;\r\n  }\r\n  .marginTop40 {\r\n    margin-top: 40px !important;\r\n  }\r\n  .ct-u-paddingBoth100 {\r\n    padding: 100px 15px;\r\n  }\r\n  .culture-section {\r\n    background: linear-gradient(rgba(0, 0, 0, 0.45),rgba(0, 0, 0, 0.45)), url(https://www.solodev.com/assets/culture.jpg) top no-repeat;\r\n    /* background-color: #095c87; */\r\n    /* color: #fff; */\r\n  }\r\n  .company-sections, .careers-sections, .left-headquarter-section-img, .right-headquarter-section-img {\r\n    text-align: center;\r\n  }\r\n  .ct-u-paddingBoth100 {\r\n    padding: 100px 15px;\r\n  }\r\n  .company-sections h2, .careers-sections h2, .perks-section h2 {\r\n    font-weight: 800;\r\n    font-size: 50px;\r\n  }\r\n  .company-sections h2, .company-sections h3, .careers-sections h2, .perks-section h2 {\r\n    font-family: 'proxima-nova', sans-serif;\r\n  }\r\n  .slick-slider {\r\n    margin-bottom: 0;\r\n  }\r\n  .slick-slider {\r\n    position: relative;\r\n    display: block;\r\n    box-sizing: border-box;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    -webkit-touch-callout: none;\r\n    -khtml-user-select: none;\r\n    touch-action: pan-y;\r\n    -webkit-tap-highlight-color: transparent;\r\n  }\r\n  .slick-slider .slick-track, .slick-slider .slick-list {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n  .slick-list {\r\n    position: relative;\r\n    display: block;\r\n    overflow: hidden;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  .slick-track {\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n    display: block;\r\n  }\r\n  .slider .item {\r\n    overflow: hidden;\r\n  }\r\n  .slick-slide {\r\n    display: none;\r\n    float: left;\r\n    height: 100%;\r\n    min-height: 1px;\r\n  }\r\n  .logos {\r\n    margin-right: -5px;\r\n    margin-left: -5px;\r\n  }\r\n  ul.logos li {\r\n    cursor: pointer;\r\n  }\r\n  .logos > li {\r\n    float: left;\r\n    width: 16.66666%;\r\n    padding: 5px;\r\n  }\r\n  .logos .logos-inner {\r\n    position: relative;\r\n  }\r\n  .slick-slide img {\r\n    display: inline-block;\r\n  }\r\n  .logo-image {\r\n    position: relative;\r\n    width: 100%;\r\n  }\r\n  ul.logos li {\r\n    cursor: pointer;\r\n  }\r\n  .logos > li {\r\n    float: left;\r\n    width: 16.66666%;\r\n    padding: 5px;\r\n  }\r\n  .logos .logos-inner {\r\n    position: relative;\r\n  }\r\n  .slick-slide img {\r\n    display: inline-block;\r\n  }\r\n  img {\r\n    display: inline-block;\r\n    max-width: 100%;\r\n    vertical-align: middle;\r\n  }\r\n  .fa {\r\n  font-size: 42px;\r\n  }\r\n  .btn-solodev-red-reversed {\r\n    background-color: #fff;\r\n    color: #d2282e;\r\n    transition: all 0.3s ease;\r\n    padding: 12px 35px;\r\n  }\r\n  .btn, .btn-blk {\r\n    font-size: 18px !Important;\r\n  }\r\n  a:hover, a:focus {\r\n    text-decoration: none;\r\n  }\r\n  .ct-u-size19 {\r\n  margin-top: 40px;\r\n  }\r\n  a:hover {\r\n    color: #000;\r\n  }\r\n  section.clients-home .clients-logos .client-logos-repeater {\r\n    height: 260px;\r\n    border-right: 1px solid #ccc;\r\n    border-bottom: 1px solid #ccc;\r\n    cursor: pointer;\r\n  }\r\n  section.clients-home .clients-logos .client-logos-repeater img {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    margin: auto;\r\n    left: 0;\r\n    right: 0;\r\n  }\r\n  .logo-title {\r\n    position: absolute;\r\n    display: none;\r\n    top: 0px;\r\n    left: 0px;\r\n    width: 100%;\r\n    height: 100%;\r\n    font-size: 16px;\r\n    font-weight: 700;\r\n    line-height: 16px;\r\n    text-transform: uppercase;\r\n    color: #FFF;\r\n    background-color: #0079c2;\r\n  }\r\n  .ct-u-paddingBottom100 {\r\n  margin-top: 40px;\r\n  }\r\n  .culture-section {\r\n  background-size: cover;\r\n  color: #fff;\r\n  }\r\n  #parallax-cta{\r\n    background-image:url(\"data:image/jpeg;base64,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\")\r\n  }"

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ct-pageWrapper\" id=\"ct-js-wrapper\">\r\n  <section class=\"company-heading intro-type\" id=\"parallax-one\">\r\n     <div class=\"container\">\r\n        <div class=\"row product-title-info\">\r\n           <div class=\"col-md-12\">\r\n              <h1>\r\n                 About Us\r\n              </h1>\r\n           </div>\r\n        </div>\r\n     </div>\r\n     <div class=\"parallax\" id=\"parallax-cta\" style=\"background-image:url('../../../../assets/images.jpg');\">\r\n        &nbsp;\r\n     </div>\r\n  </section>\r\n  <section class=\"story-section company-sections ct-u-paddingBoth100 paddingBothHalf noTopMobilePadding\" id=\"section\">\r\n     <div class=\"container text-center\">\r\n        <h2>\r\n           WHAT DRIVES US\r\n        </h2>\r\n        <h3>\r\n         Wastage of Time\r\n        </h3>\r\n        <div class=\"col-md-8 col-md-offset-2\">\r\n           <div class=\"red-border\">\r\n              &nbsp;\r\n           </div>\r\n           <p class=\"ct-u-size22 ct-u-fontWeight300 marginTop40\">\r\n            If time be of all things the most precious, wasting time must be the greatest prodigality.\r\n           </p>\r\n           \r\n        </div>\r\n     </div>\r\n  </section>\r\n \r\n  <main>\r\n     <div class=\"container ct-u-paddingTop40 ct-u-paddingBottom100\">\r\n        <div class=\"row\">\r\n           <div class=\"col-md-12 ct-content\">\r\n              <section class=\"clients-home\">\r\n                 <div class=\"container\">\r\n                    <div class=\"clients-logos text-center\">\r\n                       <!-- starting row div -->\r\n                       <div class=\"row\">\r\n                          <div class=\"col-md-4 client-logos-repeater\">\r\n                             <a href=\"/path/to/detail/zeina.html\" class=\"Zeina\"><img alt=\"image/1jpg\" src=\"../../../assets/image/images1.jpg\"></a>\r\n                             <div class=\"logo-title\">\r\n                                <div class=\"displayTable\">\r\n                                   <div class=\"displayTableCell\">\r\n                                      Zeina - 0\r\n                                   </div>\r\n                                </div>\r\n                             </div>\r\n                          </div>\r\n                          <div class=\"col-md-4 client-logos-repeater\">\r\n                             <a href=\"/path/to/detail/logic.html\" class=\"Logic\"><img alt=\"images/logic.png\" src=\"../../../assets/image/index.jpg\"></a>\r\n                             <div class=\"logo-title\">\r\n                                <div class=\"displayTable\">\r\n                                   <div class=\"displayTableCell\">\r\n                                      Logic\r\n                                   </div>\r\n                                </div>\r\n                             </div>\r\n                          </div>\r\n                          <div class=\"col-md-4 client-logos-repeater\">\r\n                             <a href=\"/path/to/detail/smart.html\" class=\"Smart\"><img alt=\"images/client3.png\" src=\"../../../assets/image/4.jpg\"></a>\r\n                             <div class=\"logo-title\">\r\n                                <div class=\"displayTable\">\r\n                                   <div class=\"displayTableCell\">\r\n                                      Smart\r\n                                   </div>\r\n                                </div>\r\n                             </div>\r\n                          </div>\r\n                       </div>\r\n                       <div class=\"row\">\r\n                          <div class=\"col-md-4 client-logos-repeater\">\r\n                             <a href=\"/path/to/detail/softtech.html\" class=\"Softtech\"><img alt=\"images/softtech.png\" src=\"../../../assets/image/5.jpg\"></a>\r\n                             <div class=\"logo-title\">\r\n                                <div class=\"displayTable\">\r\n                                   <div class=\"displayTableCell\">\r\n                                      Softtech\r\n                                   </div>\r\n                                </div>\r\n                             </div>\r\n                          </div>\r\n                          <div class=\"col-md-4 client-logos-repeater\">\r\n                             <a href=\"/path/to/detail/wheel.html\" class=\"train\"><img alt=\"images/logo-target.png\" src=\"../../../assets/image/index1.jpg\"></a>\r\n                             <div class=\"logo-title\">\r\n                                <div class=\"displayTable\">\r\n                                   <div class=\"displayTableCell\">\r\n                                      Wheel\r\n                                   </div>\r\n                                </div>\r\n                             </div>\r\n                          </div>\r\n                          <div class=\"col-md-4 client-logos-repeater\">\r\n                             <a href=\"/path/to/detail/3designs.html\" class=\"3designs\"><img alt=\"images/designx.png\" src=\"../../../assets/image/et2.jpg\"></a>\r\n                             <div class=\"logo-title\">\r\n                                <div class=\"displayTable\">\r\n                                   <div class=\"displayTableCell\">\r\n                                      3designs\r\n                                   </div>\r\n                                </div>\r\n                             </div>\r\n                          </div>\r\n                       </div>\r\n                       <div class=\"row\">\r\n                          <div class=\"col-md-4 client-logos-repeater\">\r\n                             <a href=\"/path/to/detail/heart.html\" class=\"Heart\"><img alt=\"images/client7.png\" src=\"../../.././assets/image/index2.jpg\"></a>\r\n                             <div class=\"logo-title\">\r\n                                <div class=\"displayTable\">\r\n                                   <div class=\"displayTableCell\">\r\n                                      Heart\r\n                                   </div>\r\n                                </div>\r\n                             </div>\r\n                          </div>\r\n                          <div class=\"col-md-4 client-logos-repeater\">\r\n                             <a href=\"/path/to/detail/devtech.html\" class=\"Devtech\"><img alt=\"images/devtech.png\" src=\"../../../assets/images.jpg\"></a>\r\n                             <div class=\"logo-title\">\r\n                                <div class=\"displayTable\">\r\n                                   <div class=\"displayTableCell\">\r\n                                      Devtech\r\n                                   </div>\r\n                                </div>\r\n                             </div>\r\n                          </div>\r\n                          <div class=\"col-md-4 client-logos-repeater\">\r\n                             <a href=\"/path/to/detail/chartz.html\" class=\"Chartz\"><img alt=\"images/chartz.png\" src=\"../../../assets/images (2).jpg\"></a>\r\n                             <div class=\"logo-title\">\r\n                                <div class=\"displayTable\">\r\n                                   <div class=\"displayTableCell\">\r\n                                      Chartz\r\n                                   </div>\r\n                                </div>\r\n                             </div>\r\n                          </div>\r\n                       </div>\r\n                       <!-- closing row div -->\r\n                    </div>\r\n                 </div>\r\n              </section>\r\n           </div>\r\n        </div>\r\n     </div>\r\n</main>"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/contact/contact.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contacts{\r\n    margin-top: 1em;\r\n      width:100%;\r\n      height:100%;\r\n    font-family: 'Times New Roman', Times, serif;\r\n  }\r\n  .row{\r\n    width: 80%;\r\n    margin: 0 auto;\r\n  }\r\n  form .form-group{\r\n    width: 400%;\r\n    margin: 0 auto;\r\n  }\r\n  h1,h2,h3 {\r\n      margin:0 0 35px 0;\r\n      text-transform: uppercase;\r\n      letter-spacing:0.1em;\r\n  }\r\n  p{\r\n      margin:0 0 25px;\r\n      font-size:18px;\r\n      line-height:1.6em;\r\n  }\r\n  a{\r\n      color:#26a5d3;\r\n  }\r\n  a:hover,a:focus{\r\n      text-decoration:none;\r\n      color:#26a5d3;\r\n  }\r\n  #contact{\r\n      background:#333333;\r\n      color:#f4f4f4;\r\n      padding-bottom:80px;\r\n  }\r\n  textarea.form-control{\r\n      height:100px;\r\n  }"

/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contacts\">\r\n  <div class=\"container\">\r\n    <h2 class=\"text-center\">Contact Us</h2>\r\n    <p>Feel free to shout us by feeling the contact form or visiting our social network sites like Fackebook,Whatsapp,Twitter.</p>\r\n    <div class=\"row\">\r\n        <form class=\"form-horizontal\">\r\n          <div class=\"form-group\">\r\n            <label for=\"exampleInputName2\">Name</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"exampleInputName2\" placeholder=\"user name\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"exampleInputEmail2\">Email</label>\r\n            <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail2\" placeholder=\"user.name@example.com\">\r\n          </div>\r\n          <div class=\"form-group \">\r\n            <label for=\"exampleInputText\">Your Message</label>\r\n           <textarea  class=\"form-control\" placeholder=\"Description\"></textarea>\r\n          </div>\r\n          <button type=\"submit\" class=\"btn btn-default\">Send Message</button>\r\n        </form>\r\n      </div>\r\n      <div class=\"row text-center\">\r\n        <hr style=\"width:99%\">\r\n          <h2>our social sites</h2>\r\n        <ul class=\"list-inline banner-social-buttons\">\r\n          <li><a href=\"#\" class=\"btn btn-default btn-lg\"><i class=\"fa fa-twitter\"> <span class=\"network-name\">Twitter</span></i></a></li>\r\n          <li><a href=\"#\" class=\"btn btn-default btn-lg\"><i class=\"fa fa-facebook\"> <span class=\"network-name\">Facebook</span></i></a></li>\r\n          <li><a href=\"#\" class=\"btn btn-default btn-lg\"><i class=\"fa fa-youtube-play\"> <span class=\"network-name\">Youtube</span></i></a></li>\r\n        </ul>\r\n      </div>\r\n  </div>\r\n</div>\r\n<br/>\r\n<br/><br/>"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/components/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav{\r\n    background-color: lightseagreen !important;\r\n    color: rgba(0, 0, 0, 0.205);\r\n    font-family:Typonine Mono Regular;\r\n    margin-bottom: 2em;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\r\n   <!-- <a  class=\"navbar-brand\" href=\"#\"><img src=\"../../../assets/aaitLogo.png\" style=\"height:100px; margin-left:10em\"></a>-->\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n           <mat-icon></mat-icon>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/welcome']\">Home<span></span></a>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"navbar-nav ml-auto\">\r\n\r\n            <li style=\" font-family: 'Times New Roman', Times, serif; font-size: 1em;\r\n            font-style: normal;\"  class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n                <a class=\"nav-link\" [routerLink]=\"['about-us']\">About-Us <span></span></a>\r\n              </li>\r\n              <li style=\" font-family: 'Times New Roman', Times, serif; font-size: 1em;\r\n          font-style: normal;\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n              <a class=\"nav-link\" [routerLink]=\"['train']\">Trains <span></span></a>\r\n            </li>\r\n              <li style=\"font-family: 'Times New Roman', Times, serif; font-size: 1em;\r\n              font-style: normal;\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n                  <a class=\"nav-link\" [routerLink]=\"['contact-us']\">Contact-Us <span></span></a>\r\n                </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router) {
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () { };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\r\nbackground-color: #f00;\r\nwidth: 50%;\r\nposition: fixed;\r\nleft: 25%;\r\ntop: 25%;\r\n}"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\">\r\n <h1>Ops! Page is not found</h1>\r\n</div>"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/components/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/train/train.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/train/train.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nh1,h2,h3 {\r\n  margin:0 0 35px 0;\r\n  text-transform: unset;\r\n  letter-spacing:0.1em;\r\n}\r\np{\r\n  margin:0 0 25px;\r\n  font-size:18px;\r\n  line-height:1.6em;\r\n}\r\na{\r\n  color:#26a5d3;\r\n}\r\na:hover,a:focus{\r\n  text-decoration:none;\r\n  color:#26a5d3;\r\n}\r\n#train{\r\n  background:#333333;\r\n  color:#f4f4f4e0;\r\n  padding-bottom:80px;\r\n}\r\ntextarea.form-control{\r\n  height:100px;\r\n}\r\nbody {\r\n  width: 300px;\r\n  margin: 0 auto;\r\n  font-size: 1.2rem;\r\n  font-family: sans-serif;\r\n}\r\np {\r\n  line-height: 1.4;\r\n}\r\na {\r\n  outline: none;\r\n  text-decoration: none;\r\n  padding: 2px 1px 0;\r\n}\r\na:link {\r\n  color: #530101;\r\n}\r\na:visited {\r\n  color: rgb(122, 22, 27);\r\n}\r\na:focus {\r\n  border-bottom: 1px solid;\r\n  background: rgb(228, 152, 152);\r\n}\r\na:hover {\r\n  border-bottom: 1px solid;     \r\n  background: rgb(254, 170, 170);\r\n}\r\na:active {\r\n  background: #530101;\r\n  color: rgb(254, 170, 170);\r\n}\r\n.myTable {\r\n  border-collapse: collapse; /* Collapse borders */\r\n  width: 100%; /* Full-width */\r\n  border: 1px solid #ddd; /* Add a grey border */\r\n  font-size: 18px; /* Increase font-size */\r\n}\r\n.myTable th, .myTable td {\r\n  text-align: left; /* Left-align text */\r\n  padding: 12px; /* Add padding */\r\n}\r\n.myTable tr {\r\n  /* Add a bottom border to all table rows */\r\n  border-bottom: 1px solid #ddd;\r\n}\r\n.myTable tr.header, #myTable tr:hover {\r\n  /* Add a grey background color to the table header and on hover */\r\n  background-color: #f1f1f1;\r\n}\r\n.table {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n  width: 100%;\r\n  border: 1px solid #ddd;\r\n}\r\nth, td {\r\n  text-align: left;\r\n  padding: 8px;\r\n}\r\ntr:nth-child(even){background-color: #f2f2f2}\r\n.header h1{\r\npadding-bottom: 1em;\r\n\r\n}\r\n.separator-type, .title-type, .intro-type, .content-type .intro-type p {\r\n    position: relative;\r\n  }\r\n.intro-type .container {\r\n    padding: 107px 0px 102px 0px !important;\r\n  }\r\n#product-header-section, .intro-type .container {\r\n    padding: 68px 15px 72px !important;\r\n  }\r\n@media (min-width: 1630px){\r\n  .container {\r\n    width: 1630px;\r\n  }\r\n  }\r\n.parallax {\r\n    background-attachment: inherit !important;\r\n  }\r\n.parallax {\r\n    background-attachment: inherit !important;\r\n    background-repeat: repeat;\r\n    background-size: cover;\r\n    position: absolute;\r\n    top: 0px;\r\n    bottom: 0px;\r\n    width: 100%;\r\n    z-index: -10;\r\n  }\r\n.company-heading h1 {\r\n    margin-bottom: 40px;\r\n    line-height: 80px;\r\n    color: #000;\r\n    font-weight: 700 !important;\r\n    text-align: center;\r\n  }\r\n.seo-header, .product-header, .intro-type .container h1.white, .company-heading h1 {\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-weight: 100 !important;\r\n    text-transform: capitalize;\r\n    font-size: 65px;\r\n    margin-bottom: 20px;\r\n  }\r\n.company-sections h2, .careers-sections h2, .perks-section h2 {\r\n    font-weight: 800;\r\n    font-size: 50px;\r\n  }\r\n.company-sections h2, .company-sections h3, .careers-sections h2, .perks-section h2 {\r\n    font-family: 'proxima-nova', sans-serif;\r\n  }\r\n.company-sections h3 {\r\n    font-size: 25px;\r\n    font-weight: 700;\r\n    margin: 14px 0;\r\n    font-family: 'proxima-nova', sans-serif;\r\n    text-transform: capitalize;\r\n  }\r\n.red-border {\r\n    width: 50%;\r\n    border-bottom: 1px solid #d2282e;\r\n    margin: 0 auto;\r\n    height: 16px;\r\n  }\r\n.company-sections p {\r\n    margin-top: 20px;\r\n  }\r\n.ct-u-size22 {\r\n    font-size: 22px;\r\n  }\r\n.ct-u-fontWeight300 {\r\n    font-weight: 300;\r\n  }\r\n.marginTop40 {\r\n    margin-top: 40px !important;\r\n  }\r\n.ct-u-paddingBoth100 {\r\n    padding: 100px 15px;\r\n  }\r\n.culture-section {\r\n    background: linear-gradient(rgba(0, 0, 0, 0.45),rgba(0, 0, 0, 0.45)), url(https://www.solodev.com/assets/culture.jpg) top no-repeat;\r\n    /* background-color: #095c87; */\r\n    /* color: #fff; */\r\n  }\r\n.company-sections, .careers-sections, .left-headquarter-section-img, .right-headquarter-section-img {\r\n    text-align: center;\r\n  }\r\n.ct-u-paddingBoth100 {\r\n    padding: 100px 15px;\r\n  }\r\n.company-sections h2, .careers-sections h2, .perks-section h2 {\r\n    font-weight: 800;\r\n    font-size: 50px;\r\n  }\r\n.company-sections h2, .company-sections h3, .careers-sections h2, .perks-section h2 {\r\n    font-family: 'proxima-nova', sans-serif;\r\n  }\r\n.slick-slider {\r\n    margin-bottom: 0;\r\n  }\r\n.slick-slider {\r\n    position: relative;\r\n    display: block;\r\n    box-sizing: border-box;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    -webkit-touch-callout: none;\r\n    -khtml-user-select: none;\r\n    touch-action: pan-y;\r\n    -webkit-tap-highlight-color: transparent;\r\n  }\r\n.slick-slider .slick-track, .slick-slider .slick-list {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n.slick-list {\r\n    position: relative;\r\n    display: block;\r\n    overflow: hidden;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n.slick-track {\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n    display: block;\r\n  }\r\n.slider .item {\r\n    overflow: hidden;\r\n  }\r\n.slick-slide {\r\n    display: none;\r\n    float: left;\r\n    height: 100%;\r\n    min-height: 1px;\r\n  }\r\n.logos {\r\n    margin-right: -5px;\r\n    margin-left: -5px;\r\n  }\r\nul.logos li {\r\n    cursor: pointer;\r\n  }\r\n.logos > li {\r\n    float: left;\r\n    width: 16.66666%;\r\n    padding: 5px;\r\n  }\r\n.logos .logos-inner {\r\n    position: relative;\r\n  }\r\n.slick-slide img {\r\n    display: inline-block;\r\n  }\r\n.logo-image {\r\n    position: relative;\r\n    width: 100%;\r\n  }\r\nul.logos li {\r\n    cursor: pointer;\r\n  }\r\n.logos > li {\r\n    float: left;\r\n    width: 16.66666%;\r\n    padding: 5px;\r\n  }\r\n.logos .logos-inner {\r\n    position: relative;\r\n  }\r\n.slick-slide img {\r\n    display: inline-block;\r\n  }\r\nimg {\r\n    display: inline-block;\r\n    max-width: 100%;\r\n    vertical-align: middle;\r\n  }\r\n.fa {\r\n  font-size: 42px;\r\n  }\r\n.btn-solodev-red-reversed {\r\n    background-color: #fff;\r\n    color: #d2282e;\r\n    transition: all 0.3s ease;\r\n    padding: 12px 35px;\r\n  }\r\n.btn, .btn-blk {\r\n    font-size: 18px !Important;\r\n  }\r\na:hover, a:focus {\r\n    text-decoration: none;\r\n  }\r\n.ct-u-size19 {\r\n  margin-top: 40px;\r\n  }\r\na:hover {\r\n    color: #000;\r\n  }\r\nsection.clients-home .clients-logos .client-logos-repeater {\r\n    height: 260px;\r\n    border-right: 1px solid #ccc;\r\n    border-bottom: 1px solid #ccc;\r\n    cursor: pointer;\r\n  }\r\nsection.clients-home .clients-logos .client-logos-repeater img {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    margin: auto;\r\n    left: 0;\r\n    right: 0;\r\n  }\r\n.logo-title {\r\n    position: absolute;\r\n    display: none;\r\n    top: 0px;\r\n    left: 0px;\r\n    width: 100%;\r\n    height: 100%;\r\n    font-size: 16px;\r\n    font-weight: 700;\r\n    line-height: 16px;\r\n    text-transform: uppercase;\r\n    color: #FFF;\r\n    background-color: #0079c2;\r\n  }\r\n.ct-u-paddingBottom100 {\r\n  margin-top: 40px;\r\n  }\r\n.culture-section {\r\n  background-size: cover;\r\n  color: #fff;\r\n  }\r\n/*the container must be positioned relative:*/\r\n.custom-select {\r\n  position: relative;\r\n  font-family: Arial;\r\n}\r\n.custom-select select {\r\n  display: none; /*hide original SELECT element:*/\r\n}\r\n.select-selected {\r\n  background-color: DodgerBlue;\r\n}\r\n/*style the arrow inside the select element:*/\r\n.select-selected:after {\r\n  position: absolute;\r\n  content: \"\";\r\n  top: 14px;\r\n  right: 10px;\r\n  width: 0;\r\n  height: 0;\r\n  border: 6px solid transparent;\r\n  border-color: #fff transparent transparent transparent;\r\n}\r\n/*point the arrow upwards when the select box is open (active):*/\r\n.select-selected.select-arrow-active:after {\r\n  border-color: transparent transparent #fff transparent;\r\n  top: 7px;\r\n}\r\n/*style the items (options), including the selected item:*/\r\n.select-items div,.select-selected {\r\n  color: #ffffff;\r\n  padding: 8px 16px;\r\n  border: 1px solid transparent;\r\n  border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;\r\n  cursor: pointer;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\n/*style items (options):*/\r\n.select-items {\r\n  position: absolute;\r\n  background-color: DodgerBlue;\r\n  top: 100%;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 99;\r\n}\r\n/*hide the items when the select box is closed:*/\r\n.select-hide {\r\n  display: none;\r\n}\r\n.select-items div:hover, .same-as-selected {\r\n  background-color: rgba(0, 0, 0, 0.1);\r\n}\r\n/*the container must be positioned relative:*/\r\n.custom-select {\r\n  position: relative;\r\n  font-family: Arial;\r\n}\r\n.custom-select select {\r\n  display: none; /*hide original SELECT element:*/\r\n}\r\n.select-selected {\r\n  background-color: DodgerBlue;\r\n}\r\n/*style the arrow inside the select element:*/\r\n.select-selected:after {\r\n  position: absolute;\r\n  content: \"\";\r\n  top: 14px;\r\n  right: 10px;\r\n  width: 0;\r\n  height: 0;\r\n  border: 6px solid transparent;\r\n  border-color: #fff transparent transparent transparent;\r\n}\r\n/*point the arrow upwards when the select box is open (active):*/\r\n.select-selected.select-arrow-active:after {\r\n  border-color: transparent transparent #fff transparent;\r\n  top: 7px;\r\n}\r\n/*style the items (options), including the selected item:*/\r\n.select-items div,.select-selected {\r\n  color: #ffffff;\r\n  padding: 8px 16px;\r\n  border: 1px solid transparent;\r\n  border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;\r\n  cursor: pointer;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\n/*style items (options):*/\r\n.select-items {\r\n  position: absolute;\r\n  background-color: DodgerBlue;\r\n  top: 100%;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 99;\r\n}\r\n/*hide the items when the select box is closed:*/\r\n.select-hide {\r\n  display: none;\r\n}\r\n.select-items div:hover, .same-as-selected {\r\n  background-color: rgba(0, 0, 0, 0.1);\r\n}\r\n.btn {\r\n  background-color: #ddd;\r\n  border: none;\r\n  color: black;\r\n  padding: 16px 32px;\r\n  text-align: center;\r\n  font-size: 16px;\r\n  margin: 4px 2px;\r\n  transition: 0.3s;\r\n}\r\n.btn:hover {\r\n  background-color: #3e8e41;\r\n  color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/train/train.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/train/train.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n<h1 class=\"train text-center\">\r\n\r\n   <span style=\"color:darkgreen\">Train Tracking </span><span style=\"color:darkgreen\"> System</span></h1>\r\n  </div>\r\n</div>\r\n<div  *ngIf =  \"!nearTrains\" class=\"header\">\r\n  <h3 class=\"text-center\">{{msg}} </h3>\r\n  </div>\r\n\r\n<div  *ngIf =  \"nearTrains\" class=\"header\">\r\n  <h3 class=\"text-center\">The Train nearest to you is: </h3>\r\n        <table class=\"table table-striped\" style=\"width:100%; margin: 0 auto;\">\r\n          <thead>\r\n            <tr>\r\n              <th class=\"text-center\">Train number</th>\r\n               <th class=\"text-center\">Line</th>\r\n               <th class=\"text-center\">ariving_time</th>\r\n            </thead>\r\n            <thead *ngFor =  \"let train of nearTrains\">\r\n              <tr>\r\n                <th class=\"text-center\">{{train.trainId}}</th>\r\n                <th class=\"text-center\">{{train.line}}</th>\r\n                 <th class=\"text-center\">{{train.ariving_time}} <span>minutes</span></th>\r\n\r\n              </thead>\r\n              </table>\r\n              <div>\r\n"

/***/ }),

/***/ "./src/app/components/train/train.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/train/train.component.ts ***!
  \*****************************************************/
/*! exports provided: TrainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainComponent", function() { return TrainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrainComponent = /** @class */ (function () {
    function TrainComponent(authService) {
        this.authService = authService;
    }
    TrainComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (window.navigator && window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(function (position) {
                _this.geolocationPosition = position,
                    console.log(position.coords.latitude + ", " + position.coords.longitude);
                _this.authService.getNearlyTrain(position.coords.latitude, position.coords.longitude).subscribe(function (train) {
                    // tslint:disable-next-line:triple-equals
                    if (!train.success) {
                        _this.nearTrains = null;
                        _this.msg = train.msg;
                        // tslint:disable-next-line:triple-equals
                    }
                    else {
                        _this.nearTrains = train.data;
                        console.log(_this.nearTrains);
                    }
                });
            }, function (error) {
                switch (error.code) {
                    case 1:
                        console.log('Permission Denied');
                        break;
                    case 2:
                        console.log('Position Unavailable');
                        break;
                    case 3:
                        console.log('Timeout');
                        break;
                }
            });
        }
    };
    TrainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-train',
            template: __webpack_require__(/*! ./train.component.html */ "./src/app/components/train/train.component.html"),
            styles: [__webpack_require__(/*! ./train.component.css */ "./src/app/components/train/train.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], TrainComponent);
    return TrainComponent;
}());



/***/ }),

/***/ "./src/app/components/welcome/welcome.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/welcome/welcome.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.welcome{\r\n  height: 100%;\r\n  letter-spacing: .1em;\r\n  font-size: 36px;\r\n  line-height: 60px;\r\n  color: #0f0;\r\n  word-spacing: .1em ;\r\n  font-family: Georgia;\r\n  font-style: oblique;\r\n}\r\n.bd{\r\n  margin: 0 auto;\r\n  width: 50%;\r\n  margin-top: 3em;\r\n}"

/***/ }),

/***/ "./src/app/components/welcome/welcome.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/welcome/welcome.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n<h1 class=\"welcome text-center\">\r\n  \r\n  <span style=\"color:#0f0\">Welcome</span> to <span style=\"color:#ff0\">Train Tracking </span><span style=\"color:#f00\"> System</span>\r\n  \r\n</h1>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row bd\" >\r\n<img src=    \"../../../assets/ethiopian-lightrail-done.jpg\"   alt=\" Train \">\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/welcome/welcome.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/welcome/welcome.component.ts ***!
  \*********************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/components/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/components/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        //  this.isDev = true;  // Change to false before deployment
    }
    AuthService.prototype.getTrain = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('get-train', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getNearlyTrain = function (lat, long) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get("trains/get-train/" + lat + "/" + long, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    // Train register
    AuthService.prototype.TrainRegister = function (train) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('train', train, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { FarmerComponent } from 'src/app/farmer/farmer.component';
// import { FlashMessagesModule } from 'angular2-flash-messages';
var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    // Start of validating farmer
    ValidateService.prototype.validateRegister = function (farmer) {
        if (farmer.firstName === undefined ||
            farmer.middleName === undefined ||
            farmer.lastName === undefined ||
            farmer.username === undefined ||
            farmer.email === undefined ||
            farmer.phone === undefined ||
            farmer.password === undefined ||
            farmer.phone === undefined ||
            farmer.password === undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    // //    validateEmail(email) {
    // //  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))
    //  @((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // //    return re.test(email);
    // //   }
    ValidateService.prototype.confirmPassword = function (farmer) {
        if (farmer.password !== farmer.confirmPassword) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateLogin = function (farmer) {
        if (farmer.username === undefined || farmer.password === undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    // End validating farmer
    // Start of validating  crop
    ValidateService.prototype.validateCropRegister = function (crop) {
        if (crop.crop_name === undefined ||
            crop.soil_optimum_temprature === undefined ||
            crop.soil_optimum_moisture === undefined ||
            crop.soil_optimum_ph_level === undefined ||
            crop.soil_optimum_light_intensity === undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    // End of crop validatr
    // Start of Farmland validator
    ValidateService.prototype.validateFarmlandRegister = function (farmland) {
        if (farmland.gps === undefined ||
            farmland.soil_type === undefined ||
            farmland.physical_location === undefined ||
            farmland.enviromental_climate === undefined ||
            farmland.farmland_experiance === undefined ||
            farmland.farmland_description === undefined) {
            console.log(farmland);
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\projects\train-tracking-system\client-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map