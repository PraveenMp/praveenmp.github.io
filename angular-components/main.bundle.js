webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

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

module.exports = "<div class=\"header\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"header-title\">\n          Angular Components\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n      </div>\n      <div class=\"col-md-2\">\n        <div class=\"github-logo\">\n          <a href=\"https://praveenmp.github.io/\" title=\"https://praveenmp.github.io/\"><img alt=\"https://praveenmp.github.io/\" src=\"assets/github-logo.svg\"/> GITHUB</a>\n        </div>\n      </div>\n    </div>\n  </div>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-2\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item active\">Contents</li>\n        <li class=\"list-group-item\"><a routerLink=\"/title\">Title</a></li>\n        <li class=\"list-group-item\"><a routerLink=\"/pagination\">Pagination</a></li>\n        <li class=\"list-group-item\"><a routerLink=\"/services\">Services</a></li>\n        <li class=\"list-group-item\"><a routerLink=\"/other\">other</a></li>\n      </ul>\n    </div>\n    <div class=\"col-md-10\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_highlightjs__ = __webpack_require__("../../../../ngx-highlightjs/modules/ngx-highlightjs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__title_title_component__ = __webpack_require__("../../../../../src/app/title/title.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pagination_pagination_component__ = __webpack_require__("../../../../../src/app/pagination/pagination.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_shared_services_title_service__ = __webpack_require__("../../../../../src/app/shared/services/title.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_shared_services_pagination_service__ = __webpack_require__("../../../../../src/app/shared/services/pagination.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__title_title_component__["a" /* TitleComponent */],
            __WEBPACK_IMPORTED_MODULE_6__pagination_pagination_component__["a" /* PaginationComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_routing__["a" /* AppRouterModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_highlightjs__["a" /* HighlightModule */].forRoot({ theme: 'monokai-sublime' })
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8_app_shared_services_title_service__["a" /* TitleService */],
            __WEBPACK_IMPORTED_MODULE_9_app_shared_services_pagination_service__["a" /* PagerService */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pagination_pagination_component__ = __webpack_require__("../../../../../src/app/pagination/pagination.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__title_title_component__ = __webpack_require__("../../../../../src/app/title/title.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_components_pagenotfound_component__ = __webpack_require__("../../../../../src/app/shared/components/pagenotfound.component.ts");
/* unused harmony export appRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouterModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__title_title_component__["a" /* TitleComponent */]
    },
    {
        path: 'title',
        component: __WEBPACK_IMPORTED_MODULE_3__title_title_component__["a" /* TitleComponent */]
    },
    {
        path: 'pagination',
        component: __WEBPACK_IMPORTED_MODULE_0__pagination_pagination_component__["a" /* PaginationComponent */]
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_4__shared_components_pagenotfound_component__["a" /* PageNotFoundComponent */]
    }
];
var AppRouterModule = (function () {
    function AppRouterModule() {
    }
    return AppRouterModule;
}());
AppRouterModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes)],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__shared_components_pagenotfound_component__["a" /* PageNotFoundComponent */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]]
    })
], AppRouterModule);

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/pagination/pagination-component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    Title\r\n  </div>\r\n  <div class=\"card-block\">\r\n    <h4 class=\"card-title\">Page/Module specific title in angular</h4>\r\n    <p class=\"card-text\">Steps</p>\r\n    <hr>\r\n    <p class=\"card-text\">npm install --save underscore@1.8.3</p>\r\n    <p class=\"card-text\">Step 1: Place pager service in your app</p>\r\n    <p class=\"card-text\">Step 2: Add pager serivce to your module as provider</p>\r\n    <p class=\"card-text\">Step 3: Declare Pagination service in your component </p>\r\n    <p class=\"card-text\">Step 4: Define pager objects and initialize setPage method </p>\r\n    <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#component\" role=\"tab\">OutPut</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#service\" role=\"tab\">Pager service.ts</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#module\" role=\"tab\">component.ts</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#index\" role=\"tab\">component.html</a>\r\n      </li>\r\n    </ul>\r\n\r\n    <!-- Tab panes -->\r\n    <div class=\"tab-content\">\r\n      <div class=\"tab-pane active\" id=\"component\" role=\"tabpanel\">\r\n        <table class=\"table table-bordered\" style=\"margin:15px 0px;\">\r\n          <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <th>First name</th>\r\n              <th>Last name</th>\r\n              <th>Email</th>\r\n              <th>Gender</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let agent of pagedItems;let i=index\">\r\n              <th scope=\"row\">{{i+1}}</th>\r\n              <td>{{agent.first_name}}</td>\r\n              <td>{{agent.last_name}}</td>\r\n              <td>{{agent.email}}</td>\r\n              <td>{{agent.gender}}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <nav aria-label=\"Page navigation example\">\r\n          <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\r\n            <li [ngClass]=\"{disabled:pager.currentPage === 1}\" class=\"page-item\">\r\n              <a (click)=\"setPage(1)\" class=\"page-link\">First</a>\r\n            </li>\r\n            <li [ngClass]=\"{disabled:pager.currentPage === 1}\" class=\"page-item\">\r\n              <a (click)=\"setPage(pager.currentPage - 1)\" class=\"page-link\">Previous</a>\r\n            </li>\r\n            <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\" class=\"page-item\">\r\n              <a (click)=\"setPage(page)\" class=\"page-link\">{{page}}</a>\r\n            </li>\r\n            <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\" class=\"page-item\">\r\n              <a (click)=\"setPage(pager.currentPage + 1)\" class=\"page-link\">Next</a>\r\n            </li>\r\n            <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\" class=\"page-item\">\r\n              <a (click)=\"setPage(pager.totalPages)\" class=\"page-link\">Last</a>\r\n            </li>\r\n          </ul>\r\n        </nav>\r\n      </div>\r\n      <div class=\"tab-pane\" id=\"service\" role=\"tabpanel\">\r\n        <pre><code highlight [textContent]=\"serviceCode\">\r\n         </code></pre>\r\n      </div>\r\n      <div class=\"tab-pane\" id=\"module\" role=\"tabpanel\">\r\n        <pre><code highlight [textContent]=\"componentTsCode\">\r\n\r\n        </code></pre>\r\n      </div>\r\n      <div class=\"tab-pane\" id=\"index\" role=\"tabpanel\">\r\n        <pre><code highlight [textContent]=\"componentHtmlCode\">\r\n\r\n    </code></pre>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pagination/pagination.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_title_service__ = __webpack_require__("../../../../../src/app/shared/services/title.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_pagination_service__ = __webpack_require__("../../../../../src/app/shared/services/pagination.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Add Pagination service to your compoenent

var PaginationComponent = (function () {
    // consume the service
    function PaginationComponent(title, pagerService) {
        this.pagerService = pagerService;
        this.sampleJSon = [];
        // pager object
        this.pager = {};
        title.setTitle('Pagination');
    }
    PaginationComponent.prototype.ngOnInit = function () {
        this.sampleJSon = [{
                'id': 1,
                'first_name': 'Jeanette',
                'last_name': 'Penddreth',
                'email': 'jpenddreth0@census.gov',
                'gender': 'Female',
                'ip_address': '26.58.193.2'
            }, {
                'id': 2,
                'first_name': 'Giavani',
                'last_name': 'Frediani',
                'email': 'gfrediani1@senate.gov',
                'gender': 'Male',
                'ip_address': '229.179.4.212'
            }, {
                'id': 3,
                'first_name': 'Noell',
                'last_name': 'Bea',
                'email': 'nbea2@imageshack.us',
                'gender': 'Female',
                'ip_address': '180.66.162.255'
            }, {
                'id': 4,
                'first_name': 'Willard',
                'last_name': 'Valek',
                'email': 'wvalek3@vk.com',
                'gender': 'Male',
                'ip_address': '67.76.188.26'
            }];
        this.setPage(1);
        this.getAllCode();
    };
    PaginationComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        // Pass your json Object here in the example we have passed this.sampleJSon and count 3
        this.pager = this.pagerService.getPager(this.sampleJSon.length, page, 3);
        // get current page of items
        this.pagedItems = this.sampleJSon.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    PaginationComponent.prototype.getAllCode = function () {
        this.serviceCode = "  import { Injectable } from '@angular/core'\n    import * as _ from 'underscore';\n\n    @Injectable()\n    export class PagerService {\n        getPager(totalItems: number, currentPage: number = 1, pageSize: number = 10) {\n            // calculate total pages\n            let totalPages = Math.ceil(totalItems / pageSize);\n\n            let startPage: number, endPage: number;\n\n            if (totalPages <= 10) {\n                // less than 10 total pages so show all\n                startPage = 1;\n                endPage = totalPages;\n            } else {\n                // more than 10 total pages so calculate start and end pages\n                if (currentPage <= 6) {\n                    startPage = 1;\n                    endPage = 10;\n                } else if (currentPage + 4 >= totalPages) {\n                    startPage = totalPages - 9;\n                    endPage = totalPages;\n                } else {\n                    startPage = currentPage - 5;\n                    endPage = currentPage + 4;\n                }\n            }\n\n            // calculate start and end item indexes\n            let startIndex = (currentPage - 1) * pageSize;\n            let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);\n\n            // create an array of pages to ng-repeat in the pager control\n            let pages = _.range(startPage, endPage + 1);\n\n            // return object with all pager properties required by the view\n            return {\n                totalItems: totalItems,\n                currentPage: currentPage,\n                pageSize: pageSize,\n                totalPages: totalPages,\n                startPage: startPage,\n                endPage: endPage,\n                startIndex: startIndex,\n                endIndex: endIndex,\n                pages: pages\n            };\n        }\n    }\n";
        this.componentTsCode = "\n    import { TitleService } from './../shared/services/title.service';\n    import { Component, OnInit } from '@angular/core';\n\n    // Add Pagination service to your compoenent\n    import { PagerService } from './../shared/services/pagination.service';\n    import * as _ from 'underscore';\n\n    @Component({\n      templateUrl: './pagination-component.html',\n    })\n\n    export class PaginationComponent implements OnInit  {\n    public sampleJSon: any = [];\n    // pager object\n    pager: any = {};\n    // paged items\n    pagedItems: any[];\n\n      // consume the service\n      constructor(title: TitleService, private pagerService: PagerService) {\n        title.setTitle('Pagination');\n      }\n\n      ngOnInit() {\n        this.sampleJSon = [{\n          'id': 1,\n          'first_name': 'Jeanette',\n          'last_name': 'Penddreth',\n          'email': 'jpenddreth0@census.gov',\n          'gender': 'Female',\n          'ip_address': '26.58.193.2'\n        }, {\n          'id': 2,\n          'first_name': 'Giavani',\n          'last_name': 'Frediani',\n          'email': 'gfrediani1@senate.gov',\n          'gender': 'Male',\n          'ip_address': '229.179.4.212'\n        }, {\n          'id': 3,\n          'first_name': 'Noell',\n          'last_name': 'Bea',\n          'email': 'nbea2@imageshack.us',\n          'gender': 'Female',\n          'ip_address': '180.66.162.255'\n        }, {\n          'id': 4,\n          'first_name': 'Willard',\n          'last_name': 'Valek',\n          'email': 'wvalek3@vk.com',\n          'gender': 'Male',\n          'ip_address': '67.76.188.26'\n        }]\n\n        // Don't forget to initialize pager method\n        this.setPage(1);\n      }\n\n\n\n      setPage(page: number) {\n        if (page < 1 || page > this.pager.totalPages) {\n          return;\n        }\n\n        // get pager object from service\n        // Pass your json Object here in the example we have passed this.sampleJSon and count 3\n        this.pager = this.pagerService.getPager(this.sampleJSon.length, page, 3);\n\n        // get current page of items\n        this.pagedItems = this.sampleJSon.slice(this.pager.startIndex, this.pager.endIndex + 1);\n      }\n\n\n    }\n\n    ";
        this.componentHtmlCode = "   <table class=\"table table-bordered\" style=\"margin:15px 0px;\">\n    <thead>\n        <tr>\n            <th>#</th>\n            <th>First name</th>\n            <th>Last name</th>\n            <th>Email</th>\n            <th>Gender</th>\n        </tr>\n    </thead>\n    <tbody *ngIf=\"!errorMessage\">\n        <tr *ngFor=\"let agent of pagedItems;let i=index\">\n            <td>{{i+1}}</td>\n            <td>{{agent.first_name}}</td>\n            <td>{{agent.last_name}}</td>\n            <td>{{agent.email}}</td>\n            <td>{{agent.gender}}</td>\n        </tr>\n    </tbody>\n</table>\n<nav aria-label=\"Page navigation example\">\n<ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\n    <li [ngClass]=\"{disabled:pager.currentPage === 1}\" class=\"page-item\">\n        <a (click)=\"setPage(1)\" class=\"page-link\">First</a>\n    </li>\n    <li [ngClass]=\"{disabled:pager.currentPage === 1}\" class=\"page-item\">\n        <a (click)=\"setPage(pager.currentPage - 1)\" class=\"page-link\">Previous</a>\n    </li>\n    <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\" class=\"page-item\">\n        <a (click)=\"setPage(page)\" class=\"page-link\">{{page}}</a>\n    </li>\n    <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\" class=\"page-item\">\n        <a (click)=\"setPage(pager.currentPage + 1)\" class=\"page-link\">Next</a>\n    </li>\n    <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\" class=\"page-item\">\n        <a (click)=\"setPage(pager.totalPages)\" class=\"page-link\">Last</a>\n    </li>\n</ul>\n</nav>";
    };
    return PaginationComponent;
}());
PaginationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_11" /* Component */])({
        template: __webpack_require__("../../../../../src/app/pagination/pagination-component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_title_service__["a" /* TitleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_title_service__["a" /* TitleService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_pagination_service__["a" /* PagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_pagination_service__["a" /* PagerService */]) === "function" && _b || Object])
], PaginationComponent);

var _a, _b;
//# sourceMappingURL=pagination.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/pagenotfound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        template: "<h1>Page Not Found 404</h1>"
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=pagenotfound.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/pagination.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_underscore__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PagerService = (function () {
    function PagerService() {
    }
    PagerService.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 10; }
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        var pages = __WEBPACK_IMPORTED_MODULE_1_underscore__["range"](startPage, endPage + 1);
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    return PagerService;
}());
PagerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], PagerService);

//# sourceMappingURL=pagination.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/title.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitleService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TitleService = (function () {
    function TitleService(title) {
        this.title = title;
    }
    TitleService.prototype.setTitle = function (val) {
        this.currentTitle = 'Angular Components - ' + (val || '');
        this.title.setTitle(this.currentTitle);
    };
    TitleService.prototype.getTitle = function () {
        return this.currentTitle;
    };
    return TitleService;
}());
TitleService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* Title */]) === "function" && _a || Object])
], TitleService);

var _a;
//# sourceMappingURL=title.service.js.map

/***/ }),

/***/ "../../../../../src/app/title/title-component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    Title\r\n  </div>\r\n  <div class=\"card-block\">\r\n    <h4 class=\"card-title\">Page/Module specific title in angular</h4>\r\n    <p class=\"card-text\">Steps</p>\r\n    <hr>\r\n    <p class=\"card-text\">Step 1: Create title service file</p>\r\n    <p class=\"card-text\">Step 2: Add title service in your module as a provider</p>\r\n    <p class=\"card-text\">Step 3: Consume title service in your component </p>\r\n    <p class=\"card-text\">Step 4: Using service pass the appropriate title </p>\r\n    <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#component\" role=\"tab\">Your component </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#service\" role=\"tab\">Service</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#module\" role=\"tab\">Module</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#index\" role=\"tab\">Index.html</a>\r\n      </li>\r\n    </ul>\r\n\r\n    <!-- Tab panes -->\r\n    <div class=\"tab-content\">\r\n      <div class=\"tab-pane active\" id=\"component\" role=\"tabpanel\">\r\n        <pre><code highlight [textContent]=\"componentCode\">\r\n      </code>\r\n    </pre>\r\n      </div>\r\n      <div class=\"tab-pane\" id=\"service\" role=\"tabpanel\">\r\n        <pre><code highlight [textContent]=\"serviceCode\">\r\n          </code>\r\n          </pre>\r\n      </div>\r\n      <div class=\"tab-pane\" id=\"module\" role=\"tabpanel\">\r\n        <pre><code highlight [textContent]=\"moduleCode\">\r\n\r\n          </code>\r\n          </pre>\r\n      </div>\r\n      <div class=\"tab-pane\" id=\"index\" role=\"tabpanel\">\r\n        <pre><code highlight [textContent]=\"indexCode\">\r\n          </code>\r\n          </pre>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/title/title.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_title_service__ = __webpack_require__("../../../../../src/app/shared/services/title.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TitleComponent = (function () {
    function TitleComponent(title) {
        title.setTitle('How to set page specific title in Angular');
    }
    TitleComponent.prototype.ngOnInit = function () {
        this.componentCode = "\n    import { TitleService } from './../shared/services/title.serives';\n    import { Component } from '@angular/core';\n\n      @Component({\n        templateUrl: './some-componet.html',\n      })\n\n      export class SomeComponent  {\n\n        constructor(title: TitleService) {\n          title.setTitle('Set page specific title in Angular');\n        }\n\n      }";
        this.serviceCode = "\n      import { Title } from '@angular/platform-browser';\n      import { Injectable } from '@angular/core';\n\n      @Injectable()\n      export class TitleService {\n        private currentTitle: string;\n\n        constructor(private title: Title) {\n        }\n\n        public setTitle(val: string) {\n          this.currentTitle = 'Angular Components - ' + (val || '');\n          this.title.setTitle(this.currentTitle);\n        }\n\n        public getTitle() {\n          return this.currentTitle;\n        }\n      }";
        this.moduleCode = "\n      import { BrowserModule } from '@angular/platform-browser';\n      import { NgModule } from '@angular/core';\n\n      import { AppComponent } from './app.component';\n      import { TitleComponent } from './title/title.component';\n\n      import { AppRouterModule } from './app.routing';\n      import { TitleService } from 'app/shared/services/title.serives';\n\n      @NgModule({\n        declarations: [\n          AppComponent,\n          TitleComponent\n        ],\n        imports: [\n          BrowserModule,\n          AppRouterModule,\n\n        ],\n        providers: [TitleService],\n        bootstrap: [AppComponent]\n      })\n      export class AppModule {\n\n      }";
        this.indexCode = "<!doctype html>\n      <html lang=\"en\">\n      <head>\n        <meta charset=\"utf-8\">\n        <title>Angular Components</title>\n        <base href=\"/\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n      </head>\n      <body>\n        <app-root></app-root>\n      </body>\n      </html>\n     ";
    };
    return TitleComponent;
}());
TitleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_11" /* Component */])({
        template: __webpack_require__("../../../../../src/app/title/title-component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_title_service__["a" /* TitleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_title_service__["a" /* TitleService */]) === "function" && _a || Object])
], TitleComponent);

var _a;
//# sourceMappingURL=title.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map