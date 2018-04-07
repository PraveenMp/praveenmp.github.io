webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_twit_service__ = __webpack_require__("../../../../../src/app/service/twit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(router, twitterService) {
        this.router = router;
        this.twitterService = twitterService;
        this.title = 'app';
        this.hideSeacrh = false;
        //
    }
    AppComponent.prototype.search = function (value) {
        //  this.twitterService.searchedData();
        this.router.navigate(['/dashboard']);
        this.hideSeacrh = true;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_0__service_twit_service__["a" /* TwitterService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_twit_service__ = __webpack_require__("../../../../../src/app/service/twit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes__ = __webpack_require__("../../../../../src/app/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search_component__ = __webpack_require__("../../../../../src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_historical_historical_component__ = __webpack_require__("../../../../../src/app/dashboard/historical/historical.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_twitter_twitter_component__ = __webpack_require__("../../../../../src/app/dashboard/twitter/twitter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_highcharts__ = __webpack_require__("../../../../angular2-highcharts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular2_highcharts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_7__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_8__dashboard_historical_historical_component__["a" /* HistoricalComponent */],
                __WEBPACK_IMPORTED_MODULE_9__dashboard_twitter_twitter_component__["a" /* TwitterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__routes__["a" /* AppRoutes */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_10_angular2_highcharts__["ChartModule"].forRoot(__webpack_require__("../../../../highcharts/highcharts.js"))
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_0__service_twit_service__["a" /* TwitterService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dashboard {\r\n  background: #f4f6f9;\r\n  min-height: 100vh;\r\n  -webkit-transition: all .2s ease;\r\n  transition: all .2s ease;\r\n}\r\n.dashboard-header {\r\n  background: #fff;\r\n  padding: 15px 0px;\r\n  color: #0f9aee;\r\n  font-size: 1.875rem;\r\n  border-bottom: 1px solid #f4f6f9;\r\n}\r\n.dashboard-sidebar {\r\n  background: #FFF;\r\n  min-height: 89vh;\r\n}\r\n.dashboard-sidebar .item {\r\n  color: #495057;\r\n  font-size: 24px;\r\n  padding: 15px 0px;\r\n  border-bottom: 1px solid #f4f6f9;\r\n  cursor: pointer;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid dashboard\">\r\n  <div class=\"row dashboard-header\">\r\n    <div class=\"col-md-5\">\r\n      <h2>Dark Knight - {{ stockName | uppercase }} </h2>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n    </div>\r\n    <div class=\"col-md-1\">\r\n      <button class=\"btn btn-primary\" (click)=\"navigateSearch('search')\">Search <i class=\"fa fa-search\" aria-hidden=\"true\"></i></button>\r\n      </div>\r\n</div>\r\n<div class=\"content\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-2 dashboard-sidebar\">\r\n      <div class=\"item\">\r\n          <span (click)=\"navigate('twitter')\"> <i class=\"fa fa-twitter\" aria-hidden=\"true\"></i> Twitter Sentiment </span>\r\n      </div>\r\n      <div class=\"item\">\r\n       <span (click)=\"navigate('historical')\"><i class=\"fa fa-bar-chart\" aria-hidden=\"true\"></i> Historical </span>\r\n      </div>\r\n    </div>\r\n  <div class=\"col-md-10\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router) {
        this.router = router;
        this.title = 'search';
        //
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.stockName = localStorage.getItem('searchValue');
    };
    DashboardComponent.prototype.navigateSearch = function (value) {
        this.router.navigate(['/' + value]);
    };
    DashboardComponent.prototype.navigate = function (value) {
        this.router.navigate(['/dashboard/' + value]);
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/historical/historical.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".historical {\r\n  padding: 15px 0px;\r\n}\r\n.card-sm {\r\n  padding: 25px;\r\n  text-align: center;\r\n}\r\n.text-white {\r\n  color: #fff;\r\n}\r\n.text-black {\r\n  color: #000;\r\n}\r\n.card-blue {\r\n  background-color: #0f9aee !important;\r\n}\r\n.card-green {\r\n  background-color:#37c936 !important\r\n}\r\n.card-pink {\r\n  background-color: #ff3c7e !important;\r\n}\r\n.card-orange {\r\n  background-color: #DDB218 !important;\r\n}\r\n.card-white {\r\n  background-color: #FFFFFF !important;\r\n}\r\n.margin-top-15 {\r\n  margin-top: 15px;\r\n}\r\nh3 {\r\n  font-size: 16px !important;\r\n}\r\n.loading {\r\n  position: absolute;\r\n  left: 0px;\r\n  top: 0px;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 9999;\r\n  background: url(https://praveenmp.github.io/dark-knight/../../assets/loading.gif) 50% 22% no-repeat rgb(249,249,249);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/historical/historical.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"historical\">\r\n    <div class=\"loading\" *ngIf=\"loading\">\r\n      </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-3 margin-top-small\">\r\n            <div class=\"card-sm card-blue text-white\">\r\n              <h1> {{highestProfit.length}}</h1>\r\n              <h3> Trade Days </h3>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3 margin-top-small\">\r\n            <div class=\"card-sm card-white text-black\">\r\n              <h1> {{ calCulations['profitEarned'] }}</h1>\r\n              <h3> Number of days profit earned  </h3>\r\n            </div>\r\n          </div>\r\n        <div class=\"col-md-3 margin-top-small\">\r\n            <div class=\"card-sm card-pink text-white\">\r\n                <h1> {{calCulations['lossOccured']}}</h1>\r\n                <h3> Number of days Loss occured </h3>\r\n              </div>\r\n        </div>\r\n        <div class=\"col-md-3 margin-top-small\">\r\n            <div class=\"card-sm card-green text-white\">\r\n                <h1> {{calCulations['lossOccured'] -  calCulations['profitEarned']}} </h1>\r\n                <h3> Trade Gap </h3>\r\n              </div>\r\n          </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-7 margin-top-15\">\r\n      <div class=\"card-sm card-white\">\r\n          <chart [options]=\"options\"></chart>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- <div class=\"row\">\r\n    <div class=\"col-md-5\">\r\n      <h4>Day-wise Analysis on profit earned</h4>\r\n      <table>\r\n        <thead>\r\n          <th>Day</th>\r\n          <th>Number of times Profit earned</th>\r\n          <th>Chance of eraning %</th>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td>\r\n              Monday\r\n            </td>\r\n            <td>\r\n              {{calCulations['mondayProfit']}}\r\n            </td>\r\n            <td>\r\n              {{calCulations['mondayProfit'] * 100 / highestProfit.length }}\r\n            </td>\r\n\r\n          </tr>\r\n          <tr>\r\n            <td>\r\n              Tuesday\r\n            </td>\r\n            <td>\r\n              {{calCulations['tuesdayProfit']}}\r\n\r\n            </td>\r\n            <td>\r\n              {{calCulations['tuesdayProfit'] * 100 / highestProfit.length }}\r\n            </td>\r\n\r\n          </tr>\r\n          <tr>\r\n            <td>\r\n              Wednseday\r\n            </td>\r\n            <td>\r\n              {{calCulations['wednesdayProfit']}}\r\n\r\n            </td>\r\n            <td>\r\n              {{calCulations['wednesdayProfit'] * 100 / highestProfit.length }}\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>\r\n              Thursday\r\n            </td>\r\n            <td>\r\n              {{calCulations['thursdayProfit']}}\r\n\r\n            </td>\r\n            <td>\r\n              {{calCulations['thursdayProfit'] * 100 / highestProfit.length }}\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>\r\n              Friday\r\n            </td>\r\n            <td>\r\n              {{calCulations['fridayProfit']}}\r\n\r\n            </td>\r\n            <td>\r\n              {{calCulations['fridayProfit'] * 100 / highestProfit.length }}\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>\r\n              <b>  Total</b>\r\n            </td>\r\n            <td>\r\n              <b>{{ calCulations['profitEarned'] }}</b>\r\n\r\n            </td>\r\n            <td>\r\n              <b>  {{ calCulations['profitEarned'] * 100 / highestProfit.length }}</b>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-6 col-md-4\">\r\n        <h2>Profit</h2>\r\n        <table *ngIf=\"stockData\">\r\n          <thead>\r\n            <th>Date</th>\r\n            <th>Day</th>\r\n            <th>Day Profit</th>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let stockdata of highestProfit\">\r\n              <td> {{ stockdata['Date']}} </td>\r\n              <td> {{ stockdata['dayName']}} </td>\r\n              <td> {{ stockdata['dayProfit']}}\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div class=\"col-6 col-md-4\">\r\n        <h4> Total traded Days = {{highestProfit.length}}</h4>\r\n        <h4> Number of days profit made = {{ calCulations['profitEarned'] }}</h4>\r\n        <h4> Number of days loss occured = {{calCulations['lossOccured']}}</h4>\r\n        <hr>\r\n        <h4>Day-wise Analysis on profit earned</h4>\r\n        <table>\r\n          <thead>\r\n            <th>Day</th>\r\n            <th>Number of times Profit earned</th>\r\n            <th>Chance of eraning %</th>\r\n          </thead>\r\n          <tbody>\r\n            <tr>\r\n              <td>\r\n                Monday\r\n              </td>\r\n              <td>\r\n                {{calCulations['mondayProfit']}}\r\n              </td>\r\n              <td>\r\n                {{calCulations['mondayProfit'] * 100 / highestProfit.length }}\r\n              </td>\r\n\r\n            </tr>\r\n            <tr>\r\n              <td>\r\n                Tuesday\r\n              </td>\r\n              <td>\r\n                {{calCulations['tuesdayProfit']}}\r\n\r\n              </td>\r\n              <td>\r\n                {{calCulations['tuesdayProfit'] * 100 / highestProfit.length }}\r\n              </td>\r\n\r\n            </tr>\r\n            <tr>\r\n              <td>\r\n                Wednseday\r\n              </td>\r\n              <td>\r\n                {{calCulations['wednesdayProfit']}}\r\n\r\n              </td>\r\n              <td>\r\n                {{calCulations['wednesdayProfit'] * 100 / highestProfit.length }}\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>\r\n                Thursday\r\n              </td>\r\n              <td>\r\n                {{calCulations['thursdayProfit']}}\r\n\r\n              </td>\r\n              <td>\r\n                {{calCulations['thursdayProfit'] * 100 / highestProfit.length }}\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>\r\n                Friday\r\n              </td>\r\n              <td>\r\n                {{calCulations['fridayProfit']}}\r\n\r\n              </td>\r\n              <td>\r\n                {{calCulations['fridayProfit'] * 100 / highestProfit.length }}\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>\r\n                <b>  Total</b>\r\n              </td>\r\n              <td>\r\n                <b>{{ calCulations['profitEarned'] }}</b>\r\n\r\n              </td>\r\n              <td>\r\n              <b>  {{ calCulations['profitEarned'] * 100 / highestProfit.length }}</b>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <hr>\r\n        <h4>Day-wise Analysis on loss occured</h4>\r\n        <table>\r\n          <thead>\r\n            <th>Day</th>\r\n            <th>Number of times loss occured</th>\r\n          </thead>\r\n          <tbody>\r\n            <tr>\r\n              <td>\r\n                Monday\r\n              </td>\r\n              <td>\r\n                {{calCulations['mondayLoss']}}\r\n\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>\r\n                Tuesday\r\n              </td>\r\n              <td>\r\n                {{calCulations['tuesdayLoss']}}\r\n\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>\r\n                Wednseday\r\n              </td>\r\n              <td>\r\n                {{calCulations['wednesdayLoss']}}\r\n\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>\r\n                Thursday\r\n              </td>\r\n              <td>\r\n                {{calCulations['thursdayLoss']}}\r\n\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>\r\n                Friday\r\n              </td>\r\n              <td>\r\n                {{calCulations['fridayLoss']}}\r\n\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div class=\"col-6 col-md-4\">.col-6 .col-md-4</div>\r\n    </div>\r\n  </div>\r\n\r\n  <div style=\"text-align:center\">\r\n    <h1>\r\n      Welcome to {{ title }}!\r\n    </h1>\r\n  </div>\r\n  <div>\r\n    <h2>Days which are more traded</h2>\r\n    <table *ngIf=\"stockData\">\r\n      <thead>\r\n        <th>Date</th>\r\n        <th>Day</th>\r\n        <th>Total Traded Quantity</th>\r\n        <th> Day Profit</th>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let stockdata of moreTradedDays\">\r\n          <td> {{ stockdata['Date']}} </td>\r\n          <td> {{ stockdata['dayName']}} </td>\r\n          <td> {{ stockdata['Total Traded Quantity']}} </td>\r\n          <td> {{ stockdata['dayProfit']}} </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n -->\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/historical/historical.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoricalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_twit_service__ = __webpack_require__("../../../../../src/app/service/twit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HistoricalComponent = /** @class */ (function () {
    function HistoricalComponent(appSerive) {
        this.appSerive = appSerive;
        this.title = 'historical';
        this.stockData = [];
        this.moreTradedDays = [];
        this.highestProfit = [];
        this.calCulations = {};
        this.loading = true;
        //
    }
    HistoricalComponent.prototype.ngOnInit = function () {
        var _this = this;
        var getSearchQuery = localStorage.getItem('searchValue');
        if (getSearchQuery === 'hdfcbank') {
            getSearchQuery = 'hdfc';
        }
        else {
            getSearchQuery = 'hdfc';
        }
        this.appSerive.getHistoricalData(getSearchQuery).subscribe(function (result) {
            _this.loading = false;
            _this.stockData = result;
            _this.stockData.forEach(function (data) {
                var d = new Date(data['Date']);
                data['dayName'] = d.toString().split(' ')[0];
                data['dayProfit'] = data['Last Price'] - data['Open Price'];
            });
            console.log(_this.stockData);
            _this.moreTradedDays = __WEBPACK_IMPORTED_MODULE_2_lodash__["orderBy"](_this.stockData, ['Total Traded Quantity'], ['desc']);
            _this.highestProfit = __WEBPACK_IMPORTED_MODULE_2_lodash__["orderBy"](_this.stockData, ['dayProfit'], ['desc']);
            _this.calCulations['profitEarned'] = 0;
            _this.calCulations['lossOccured'] = 0;
            _this.calCulations['mondayProfit'] = 0;
            _this.calCulations['tuesdayProfit'] = 0;
            _this.calCulations['wednesdayProfit'] = 0;
            _this.calCulations['thursdayProfit'] = 0;
            _this.calCulations['fridayProfit'] = 0;
            _this.calCulations['mondayLoss'] = 0;
            _this.calCulations['tuesdayLoss'] = 0;
            _this.calCulations['wednesdayLoss'] = 0;
            _this.calCulations['thursdayLoss'] = 0;
            _this.calCulations['fridayLoss'] = 0;
            _this.highestProfit.forEach(function (data) {
                if (data['dayProfit'] >= 0) {
                    _this.calCulations['profitEarned']++;
                    switch (data['dayName']) {
                        case 'Mon':
                            _this.calCulations['mondayProfit']++;
                            break;
                        case 'Tue':
                            _this.calCulations['tuesdayProfit']++;
                            break;
                        case 'Wed':
                            _this.calCulations['wednesdayProfit']++;
                            break;
                        case 'Thu':
                            _this.calCulations['thursdayProfit']++;
                            break;
                        case 'Fri':
                            _this.calCulations['fridayProfit']++;
                            break;
                    }
                }
                else {
                    _this.calCulations['lossOccured']++;
                    switch (data['dayName']) {
                        case 'Mon':
                            _this.calCulations['mondayLoss']++;
                            break;
                        case 'Tue':
                            _this.calCulations['tuesdayLoss']++;
                            break;
                        case 'Wed':
                            _this.calCulations['wednesdayLoss']++;
                            break;
                        case 'Thu':
                            _this.calCulations['thursdayLoss']++;
                            break;
                        case 'Fri':
                            _this.calCulations['fridayLoss']++;
                            break;
                    }
                }
            });
            _this.getChartData();
        });
    };
    HistoricalComponent.prototype.getChartData = function () {
        console.log(this.calCulations['mondayProfit'] * 100 / this.highestProfit.length);
        this.options = {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Average market share by day wise'
            },
            xAxis: {
                type: 'category'
            },
            yAxis: {
                title: {
                    text: 'Profit earned on day wise'
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        format: '{point.y:.1f}%'
                    }
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
            },
            series: [{
                    name: 'Brands',
                    colorByPoint: true,
                    data: [{
                            name: 'Monday',
                            y: this.calCulations['mondayProfit'] * 100 / this.highestProfit.length,
                            drilldown: 'Microsoft Internet Explorer'
                        }, {
                            name: 'Tuesday',
                            y: this.calCulations['tuesdayProfit'] * 100 / this.highestProfit.length,
                            drilldown: 'Chrome'
                        }, {
                            name: 'Wednesday',
                            y: this.calCulations['wednesdayProfit'] * 100 / this.highestProfit.length,
                            drilldown: 'Firefox'
                        }, {
                            name: 'Thursday',
                            y: this.calCulations['thursdayProfit'] * 100 / this.highestProfit.length,
                            drilldown: 'Safari'
                        }, {
                            name: 'Friday',
                            y: this.calCulations['fridayProfit'] * 100 / this.highestProfit.length,
                            drilldown: 'Opera'
                        }]
                }]
        };
    };
    HistoricalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'historical',
            template: __webpack_require__("../../../../../src/app/dashboard/historical/historical.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/historical/historical.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__service_twit_service__["a" /* TwitterService */]])
    ], HistoricalComponent);
    return HistoricalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/twitter/twitter.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".twitterdata {\r\n  padding: 15px 0px;\r\n}\r\n.card-min-height {\r\nheight: 450px;\r\noverflow: auto;\r\n}\r\n.card-sm {\r\n  padding: 25px;\r\n}\r\n.text-white {\r\n  color: #fff;\r\n}\r\n.text-black {\r\n  color: #000;\r\n}\r\n.card-blue {\r\n  background-color: #0f9aee !important;\r\n}\r\n.card-green {\r\n  background-color:#37c936 !important\r\n}\r\n.card-pink {\r\n  background-color: #ff3c7e !important;\r\n}\r\n.card-orange {\r\n  background-color: #DDB218 !important;\r\n}\r\n.card-white {\r\n  background-color: #FFFFFF !important;\r\n}\r\n.margin-top-15 {\r\n  margin-top: 15px;\r\n}\r\n.twittext {\r\n  border-bottom: 1px solid #f4f6f9;\r\n  padding-bottom: 15px;\r\n  padding: 8px;\r\n}\r\n.headerfix {\r\n  position: absolute;\r\n  background: #fff;\r\n  width: 81%;\r\n  top: 0px;\r\n  padding: 15px 0px;\r\n}\r\n.loading {\r\n  position: absolute;\r\n  left: 0px;\r\n  top: 0px;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 9999;\r\n  background: url(https://praveenmp.github.io/dark-knight/../../assets/loading.gif) 50% 22% no-repeat rgb(249,249,249);\r\n}\r\n.chart-box {\r\n  height: 45px;\r\n  width: 45px;\r\n  float: left;\r\n  border: 1px solid;\r\n  margin-right: 20px;\r\n}\r\n.chart-indicator {\r\n  font-size: 24px;\r\n}\r\n.strong-sell {\r\n  background: #8d0000;\r\n}\r\n.sell {\r\n  background: #e57878;\r\n}\r\n.neutral {\r\n  background: #99f6ff;\r\n}\r\n.buy {\r\n  background: #2cfc7f;\r\n}\r\n.strong-buy {\r\n  background: #00762f;\r\n}\r\n.chart-box-ul {\r\n  padding: 25px 0px;\r\n}\r\n.guage {\r\n      padding-right: 0px;\r\n      background: #fff;\r\n      margin-left: 15px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/twitter/twitter.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"twitterdata\">\r\n  <div class=\"loading\" *ngIf=\"loading\">\r\n  </div>\r\n<div class=\"row\">\r\n    <div class=\"col-md-7\">\r\n      <div class=\"card-sm card-white\">\r\n          <chart [options]=\"options\"></chart>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-5 margin-top-small\">\r\n        <div class=\"card-sm card-white card-min-height small-device\">\r\n          <h3 class=\"headerfix\"> Tweets</h3>\r\n           <div class=\"twittext\" *ngFor=\"let res of twitterResult\">\r\n             {{ res['text'] }}\r\n           </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n  <div class=\"row margin-top-15\">\r\n    <div class=\"col-md-7 guage\">\r\n      <div class=\"card-sm card-white\">\r\n        <chart [options]=\"guageChart\"></chart>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4\" style=\"padding-left:0px;\">\r\n      <div class=\"chart-box-wrapper card-sm card-white\">\r\n        <h2>Indicators</h2>\r\n        <div class=\"chart-box-ul\">\r\n          <div class=\"chart-box strong-sell\"></div>\r\n          <div class=\"chart-indicator\">Strong Sell</div>\r\n        </div>\r\n        <div class=\"chart-box-ul\">\r\n          <div class=\"chart-box sell\"></div>\r\n          <div class=\"chart-indicator\">Sell</div>\r\n        </div>\r\n        <div class=\"chart-box-ul\">\r\n          <div class=\"chart-box neutral\"></div>\r\n          <div class=\"chart-indicator\">Neutral</div>\r\n        </div>\r\n        <div class=\"chart-box-ul\">\r\n          <div class=\"chart-box buy\"></div>\r\n          <div class=\"chart-indicator\">Buy</div>\r\n        </div>\r\n        <div class=\"chart-box-ul\">\r\n          <div class=\"chart-box strong-buy\"></div>\r\n          <div class=\"chart-indicator\">Strong Buy</div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/twitter/twitter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwitterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_twit_service__ = __webpack_require__("../../../../../src/app/service/twit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highcharts__ = __webpack_require__("../../../../highcharts/highcharts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_highcharts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChartModuleMore = __webpack_require__("../../../../highcharts/highcharts-more.js");
var HCSoldGauge = __webpack_require__("../../../../highcharts/modules/solid-gauge.js");

ChartModuleMore(__WEBPACK_IMPORTED_MODULE_3_highcharts__);
HCSoldGauge(__WEBPACK_IMPORTED_MODULE_3_highcharts__);
var TwitterComponent = /** @class */ (function () {
    function TwitterComponent(twitterService, route) {
        this.twitterService = twitterService;
        this.route = route;
        this.title = 'historical';
        this.serachquery = '';
        this.loading = true;
        //
    }
    TwitterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serachquery = this.route.snapshot.queryParams['search'];
        if (!this.serachquery) {
            this.serachquery = localStorage.getItem('searchValue');
        }
        if (!this.twitterResult) {
            this.loading = true;
            this.twitterService.searchStock(this.serachquery).subscribe(function (result) {
                _this.loading = false;
                console.log(result);
                _this.getChartData(result);
                _this.twitterResult = result;
                _this.getGuageData(result);
            });
        }
        else {
            this.loading = false;
            this.getChartData(this.twitterResult);
            this.getGuageData(this.twitterResult);
        }
    };
    TwitterComponent.prototype.getChartData = function (result) {
        var resdata = [];
        var resultTime = [];
        result.forEach(function (res) {
            resdata.push(res['Score'].toFixed(4) * 100);
            resultTime.push(res['TweetDate'].split(' ')[3].split(':')[0]);
        });
        console.log(resdata);
        this.options = {
            chart: {
                type: 'line'
            },
            title: {
                text: 'Twitter sentiment data for ' + this.serachquery
            },
            subtitle: {
                text: 'Source : Dark Knight'
            },
            xAxis: {
                categories: resultTime
            },
            yAxis: {
                title: {
                    text: 'Sentimental (%)'
                }
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true
                    },
                    enableMouseTracking: false
                }
            },
            series: [{
                    name: this.serachquery,
                    data: resdata
                }]
        };
    };
    TwitterComponent.prototype.getGuageData = function (result) {
        var resdata = [];
        var resultTime = [];
        result.forEach(function (res) {
            resdata.push(res['Score'].toFixed(4) * 100);
        });
        var sum = 0;
        resdata.forEach(function (r) {
            sum = sum + r;
        });
        var indicator = sum / resdata.length;
        console.log(sum / resdata.length);
        this.guageChart = {
            chart: {
                type: 'gauge',
                plotBackgroundColor: null,
                plotBackgroundImage: null,
                plotBorderWidth: 0,
                plotShadow: false
            },
            title: {
                text: 'Sentiment Oscillators'
            },
            pane: {
                startAngle: -150,
                endAngle: 150,
                background: [{
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                            stops: [
                                [0, '#FFF'],
                                [1, '#333']
                            ]
                        },
                        borderWidth: 0,
                        outerRadius: '109%'
                    }, {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                            stops: [
                                [0, '#333'],
                                [1, '#FFF']
                            ]
                        },
                        borderWidth: 1,
                        outerRadius: '107%'
                    }, {}, {
                        backgroundColor: '#DDD',
                        borderWidth: 0,
                        outerRadius: '105%',
                        innerRadius: '103%'
                    }]
            },
            // the value axis
            yAxis: {
                min: 0,
                max: 100,
                minorTickInterval: 'auto',
                minorTickWidth: 1,
                minorTickLength: 10,
                minorTickPosition: 'inside',
                minorTickColor: '#666',
                tickPixelInterval: 30,
                tickWidth: 2,
                tickPosition: 'inside',
                tickLength: 10,
                tickColor: '#666',
                labels: {
                    step: 2,
                    rotation: 'auto'
                },
                title: {
                    text: 'Recommandation'
                },
                plotBands: [{
                        from: 0,
                        to: 20,
                        text: 'strong',
                        color: '#8d0000' // green
                    }, {
                        from: 20,
                        to: 40,
                        color: '#e57878' // yellow
                    },
                    {
                        from: 40,
                        to: 60,
                        color: '#99f6ff' // red
                    }, {
                        from: 60,
                        to: 80,
                        color: '#2cfc7f' // red
                    },
                    {
                        from: 80,
                        to: 100,
                        color: '#00762f' // red
                    }]
            },
            series: [{
                    name: 'Speed',
                    data: [indicator],
                    tooltip: {
                        valueSuffix: 'recommandation'
                    }
                }]
        },
            // Add some life
            function (chart) {
                if (!chart.renderer.forExport) {
                    setInterval(function () {
                        //
                    }, 5);
                }
            };
    };
    TwitterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'twitter',
            template: __webpack_require__("../../../../../src/app/dashboard/twitter/twitter.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/twitter/twitter.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__service_twit_service__["a" /* TwitterService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], TwitterComponent);
    return TwitterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search_component__ = __webpack_require__("../../../../../src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_historical_historical_component__ = __webpack_require__("../../../../../src/app/dashboard/historical/historical.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_twitter_twitter_component__ = __webpack_require__("../../../../../src/app/dashboard/twitter/twitter.component.ts");





var AppRoutes = __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot([
    {
        path: 'search',
        component: __WEBPACK_IMPORTED_MODULE_2__search_search_component__["a" /* SearchComponent */],
        data: { title: 'search stock' }
    },
    {
        path: '',
        redirectTo: '/search',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard_component__["a" /* DashboardComponent */],
        children: [
            {
                path: '',
                redirectTo: 'twitter',
                pathMatch: 'full'
            },
            { path: 'historical', component: __WEBPACK_IMPORTED_MODULE_3__dashboard_historical_historical_component__["a" /* HistoricalComponent */] },
            { path: 'twitter', component: __WEBPACK_IMPORTED_MODULE_4__dashboard_twitter_twitter_component__["a" /* TwitterComponent */] },
        ]
    },
    {
        path: 'dashboard/:search',
        component: __WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard_component__["a" /* DashboardComponent */],
        children: [
            {
                path: '',
                redirectTo: 'twitter/:search',
                pathMatch: 'full'
            },
            { path: 'historical', component: __WEBPACK_IMPORTED_MODULE_3__dashboard_historical_historical_component__["a" /* HistoricalComponent */] },
            { path: 'twitter', component: __WEBPACK_IMPORTED_MODULE_4__dashboard_twitter_twitter_component__["a" /* TwitterComponent */] },
        ]
    }
]);


/***/ }),

/***/ "../../../../../src/app/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-screen {\r\n  padding-top: 150px;\r\n  }\r\n\r\n  .login-sidebar {\r\n    background-image: url(" + escape(__webpack_require__("../../../../../src/assets/bkg1.png")) + ");\r\n    width: 400px;\r\n    height: 500px;\r\n    background-size: cover;\r\n    padding: 20px;\r\n    color: #FFF;\r\n  }\r\n\r\n  .login-sidebar h1 {\r\n    padding-top: 120px;\r\n  }\r\n\r\n  .login-form {\r\n    padding: 150px;\r\n    background: #f8f8f8;\r\n    height: 500px;\r\n  }\r\n\r\n  input[type=\"text\"]  {\r\n    background-color: #fff;\r\n    padding-left: 20px;\r\n    border-radius: 0;\r\n    border: 2px solid #dedede;\r\n    margin-bottom: 16px;\r\n    color: #999;\r\n    height: 54px;\r\n  }\r\n\r\n  .signin {\r\n    padding-top: 14px;\r\n    padding-bottom: 14px;\r\n    background-color: #363567;\r\n    color: #fff;\r\n    -webkit-transition: background-color 300ms linear;\r\n    transition: background-color 300ms linear;\r\n    border-radius: 0px;\r\n  }\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"login-screen\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4 login-sidebar\">\r\n        <h1>Dark Knight</h1>\r\n        <h4>Stock analysis based on social media sentiment </h4>\r\n      </div>\r\n      <div class=\"col-md-8 login-form\">\r\n        <form>\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" #query id=\"un_1\" class=\"form-control\" placeholder=\"Search stock\" required=\"required\">\r\n          <button id=\"signIn_1\" type=\"submit\" class=\"btn btn-block signin\" (click)=\"search(query.value)\">Search</button>\r\n        </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchComponent = /** @class */ (function () {
    function SearchComponent(router) {
        this.router = router;
        this.title = 'app';
        this.hideSeacrh = false;
        //
    }
    SearchComponent.prototype.search = function (value) {
        localStorage.setItem('searchValue', value);
        this.router.navigate(['/dashboard'], { queryParams: { search: value } });
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'search-root',
            template: __webpack_require__("../../../../../src/app/search/search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/service/twit.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwitterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TwitterService = /** @class */ (function () {
    function TwitterService(http) {
        this.http = http;
        //
    }
    TwitterService.prototype.ngOnInit = function () {
        //
    };
    TwitterService.prototype.searchStock = function (args) {
        var url = 'https://darkknightwebapi.azurewebsites.net/api/values?text=%23' + args;
        return this.http.get(url)
            .map(function (response) {
            return response;
        });
    };
    TwitterService.prototype.getHistoricalData = function (company) {
        // get users from api
        return this.http.get('assets/data/' + company + '.json')
            .map(function (response) {
            return response;
        });
    };
    TwitterService.prototype.getApiHeaders = function (method, token) {
        var retVal = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'jsonformat': 'compact'
        });
        if (method && method !== 'get') {
            retVal = retVal.append('Content-Type', 'application/json');
        }
        if (token) {
            retVal = retVal.append('Authorization', 'Bearer ' + token);
        }
        return retVal;
    };
    TwitterService.prototype.handleError = function (error) {
        console.log(error);
    };
    TwitterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TwitterService);
    return TwitterService;
}());



/***/ }),

/***/ "../../../../../src/assets/bkg1.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bkg1.3dbac522ef28c2f9d60b.png";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map