(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_law_search_law_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/law-search/law-search.component */ "./src/app/components/law-search/law-search.component.ts");
/* harmony import */ var _components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/search-results/search-results.component */ "./src/app/components/search-results/search-results.component.ts");






const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'law-search' },
    { path: 'law-search', component: _components_law_search_law_search_component__WEBPACK_IMPORTED_MODULE_2__["LawSearchComponent"] },
    { path: 'search-results', component: _components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_3__["SearchResultsComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/base-layout/base-layout.component */ "./src/app/components/base-layout/base-layout.component.ts");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-base-layout");
    } }, directives: [_components_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_1__["BaseLayoutComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/article-list/article-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/article-list/article-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: ArticleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleListComponent", function() { return ArticleListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_articles_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/articles.service */ "./src/app/services/articles.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");











function ArticleListComponent_mat_list_item_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0456\u0432 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const article_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r1.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", article_r1.text, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !article_r1.documentsCount)("matBadge", article_r1.documentsCount)("matBadgeColor", article_r1.documentsCount ? "accent" : "warn");
} }
class ArticleListComponent {
    constructor(articlesService) {
        this.articlesService = articlesService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ngOnInit() {
        this.articlesService.articles$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$)).subscribe(articles => {
            this.articlesList = articles;
        });
    }
}
ArticleListComponent.ɵfac = function ArticleListComponent_Factory(t) { return new (t || ArticleListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_articles_service__WEBPACK_IMPORTED_MODULE_3__["ArticlesService"])); };
ArticleListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArticleListComponent, selectors: [["app-article-list"]], decls: 7, vars: 1, consts: [[1, "article-list-card"], ["mat-subheader", "", 1, "article-list-card__header"], [4, "ngFor", "ngForOf"], [1, "article-number"], [1, "badge", "badge-warning"], [1, "article-text"], [1, "action-button"], ["mat-raised-button", "", "color", "primary", "matBadgePosition", "after", 3, "disabled", "matBadge", "matBadgeColor"]], template: function ArticleListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0421\u0442\u0430\u0442\u0442\u0456 \u043A\u043E\u0434\u0435\u043A\u0441\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ArticleListComponent_mat_list_item_6_Template, 9, 5, "mat-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.articlesList);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListSubheaderCssMatStyler"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDivider"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListItem"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadge"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n[_nghost-%COMP%]   .article-list-card[_ngcontent-%COMP%] {\n  height: 100%;\n  min-height: 400px;\n}\n[_nghost-%COMP%]   .article-list-card__header[_ngcontent-%COMP%] {\n  color: #333333;\n}\n[_nghost-%COMP%]   .article-list-card[_ngcontent-%COMP%]   .mat-card-content[_ngcontent-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   .article-list-card[_ngcontent-%COMP%]   .mat-list[_ngcontent-%COMP%] {\n  height: calc(100% - 60px);\n  overflow: auto;\n}\n[_nghost-%COMP%]   .mat-list-item[_ngcontent-%COMP%] {\n  height: auto;\n  min-height: 60px;\n}\n[_nghost-%COMP%]   .action-button[_ngcontent-%COMP%] {\n  flex: 0 0 140px;\n}\n[_nghost-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n[_nghost-%COMP%]   .article-number[_ngcontent-%COMP%] {\n  flex: 0 0 80px;\n}\n[_nghost-%COMP%]   .article-number[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n}\n[_nghost-%COMP%]   .article-text[_ngcontent-%COMP%] {\n  color: #777777;\n  flex: 1 1 auto;\n  padding: 14px 20px;\n}\n[_nghost-%COMP%]     .mat-button-wrapper {\n  padding-right: 20px;\n}\n[_nghost-%COMP%]     .mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  top: 6px;\n  right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyaWkubW9pc2VpZW5rby9Eb2N1bWVudHMvcHJvamVjdHMvd2VibGF3L3NyYy9hcHAvY29tcG9uZW50cy9hcnRpY2xlLWxpc3QvYXJ0aWNsZS1saXN0LmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9jb21wb25lbnRzL2FydGljbGUtbGlzdC9hcnRpY2xlLWxpc3QuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFDQyxjQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNDRjtBREFFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FDRUo7QURESTtFQUNFLGNBQUE7QUNHTjtBREZJO0VBQ0UsWUFBQTtBQ0lOO0FESEk7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUNLTjtBREpFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FDTUo7QURMRTtFQUNFLGVBQUE7QUNPSjtBRExFO0VBQ0UsaUJBQUE7QUNPSjtBRE5FO0VBQ0UsY0FBQTtBQ1FKO0FEUEk7RUFDRSxpQkFBQTtBQ1NOO0FEUkU7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDVUo7QURQSTtFQUNFLG1CQUFBO0FDU047QURSSTtFQUNFLFFBQUE7RUFDQSxVQUFBO0FDVU4iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FydGljbGUtbGlzdC9hcnRpY2xlLWxpc3QuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcXDpob3N0XG4gIGRpc3BsYXk6IGJsb2NrXG4gIGhlaWdodDogMTAwJVxuICBwYWRkaW5nLXRvcDogMjBweFxuICBwYWRkaW5nLWJvdHRvbTogMjBweFxuICAuYXJ0aWNsZS1saXN0LWNhcmRcbiAgICBoZWlnaHQ6IDEwMCVcbiAgICBtaW4taGVpZ2h0OiA0MDBweFxuICAgICZfX2hlYWRlclxuICAgICAgY29sb3I6ICMzMzMzMzNcbiAgICAubWF0LWNhcmQtY29udGVudFxuICAgICAgaGVpZ2h0OiAxMDAlXG4gICAgLm1hdC1saXN0XG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDYwcHgpXG4gICAgICBvdmVyZmxvdzogYXV0b1xuICAubWF0LWxpc3QtaXRlbVxuICAgIGhlaWdodDogYXV0b1xuICAgIG1pbi1oZWlnaHQ6IDYwcHhcbiAgLmFjdGlvbi1idXR0b25cbiAgICBmbGV4OiAwIDAgMTQwcHhcblxuICAubWF0LXJhaXNlZC1idXR0b25cbiAgICBtYXJnaW4tbGVmdDogYXV0b1xuICAuYXJ0aWNsZS1udW1iZXJcbiAgICBmbGV4OiAwIDAgODBweFxuICAgIC5iYWRnZVxuICAgICAgcGFkZGluZzogNnB4IDEycHhcbiAgLmFydGljbGUtdGV4dFxuICAgIGNvbG9yOiAjNzc3Nzc3XG4gICAgZmxleDogMSAxIGF1dG9cbiAgICBwYWRkaW5nOiAxNHB4ICAgMjBweFxuXG4gIDo6bmctZGVlcFxuICAgIC5tYXQtYnV0dG9uLXdyYXBwZXJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHhcbiAgICAubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50XG4gICAgICB0b3A6IDZweFxuICAgICAgcmlnaHQ6IDhweFxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG46aG9zdCAuYXJ0aWNsZS1saXN0LWNhcmQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xufVxuOmhvc3QgLmFydGljbGUtbGlzdC1jYXJkX19oZWFkZXIge1xuICBjb2xvcjogIzMzMzMzMztcbn1cbjpob3N0IC5hcnRpY2xlLWxpc3QtY2FyZCAubWF0LWNhcmQtY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbn1cbjpob3N0IC5hcnRpY2xlLWxpc3QtY2FyZCAubWF0LWxpc3Qge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDYwcHgpO1xuICBvdmVyZmxvdzogYXV0bztcbn1cbjpob3N0IC5tYXQtbGlzdC1pdGVtIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtaW4taGVpZ2h0OiA2MHB4O1xufVxuOmhvc3QgLmFjdGlvbi1idXR0b24ge1xuICBmbGV4OiAwIDAgMTQwcHg7XG59XG46aG9zdCAubWF0LXJhaXNlZC1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbjpob3N0IC5hcnRpY2xlLW51bWJlciB7XG4gIGZsZXg6IDAgMCA4MHB4O1xufVxuOmhvc3QgLmFydGljbGUtbnVtYmVyIC5iYWRnZSB7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xufVxuOmhvc3QgLmFydGljbGUtdGV4dCB7XG4gIGNvbG9yOiAjNzc3Nzc3O1xuICBmbGV4OiAxIDEgYXV0bztcbiAgcGFkZGluZzogMTRweCAyMHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXdyYXBwZXIge1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnQge1xuICB0b3A6IDZweDtcbiAgcmlnaHQ6IDhweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-article-list',
                templateUrl: './article-list.component.html',
                styleUrls: ['./article-list.component.sass']
            }]
    }], function () { return [{ type: _services_articles_service__WEBPACK_IMPORTED_MODULE_3__["ArticlesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/base-layout/base-layout.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/base-layout/base-layout.component.ts ***!
  \*****************************************************************/
/*! exports provided: BaseLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseLayoutComponent", function() { return BaseLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class BaseLayoutComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
BaseLayoutComponent.ɵfac = function BaseLayoutComponent_Factory(t) { return new (t || BaseLayoutComponent)(); };
BaseLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BaseLayoutComponent, selectors: [["app-base-layout"]], decls: 11, vars: 0, consts: [["color", "primary"], [1, "header-label"], ["aria-hidden", "false", 1, "header-icon"]], template: function BaseLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "KKU ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "pro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u041C\u0438 \u043D\u0430 \u0424\u0411");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "public");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "router-outlet");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarRow"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  padding-top: 64px;\n  background-color: #f8f8f8;\n  overflow: hidden;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 64px;\n  z-index: 100;\n}\n\n.header-icon[_ngcontent-%COMP%], .header-label[_ngcontent-%COMP%] {\n  padding: 4px 0 0 10px;\n}\n\n.header-label[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 16px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyaWkubW9pc2VpZW5rby9Eb2N1bWVudHMvcHJvamVjdHMvd2VibGF3L3NyYy9hcHAvY29tcG9uZW50cy9iYXNlLWxheW91dC9iYXNlLWxheW91dC5jb21wb25lbnQuc2FzcyIsIi9Vc2Vycy9hbmRyaWkubW9pc2VpZW5rby9Eb2N1bWVudHMvcHJvamVjdHMvd2VibGF3L3NyYy9zYXNzL192YXJpYWJsZXMuc2FzcyIsInNyYy9hcHAvY29tcG9uZW50cy9iYXNlLWxheW91dC9iYXNlLWxheW91dC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQztFQUNDLGNBQUE7RUFDQSxpQkNKYztFREtkLHlCQUFBO0VBQ0EsZ0JBQUE7QUVERjs7QUZHQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlDWmM7RURhZCxZQUFBO0FFQUY7O0FGRUE7O0VBRUUscUJBQUE7QUVDRjs7QUZDQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FFRUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Jhc2UtbGF5b3V0L2Jhc2UtbGF5b3V0LmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndmFyaWFibGVzJ1xuXG5cXDpob3N0XG4gIGRpc3BsYXk6IGJsb2NrXG4gIHBhZGRpbmctdG9wOiAkaGVhZGVyLWhlaWdodFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4XG4gIG92ZXJmbG93OiBoaWRkZW5cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5XG4gIHBvc2l0aW9uOiBmaXhlZFxuICB0b3A6IDBcbiAgd2lkdGg6IDEwMCVcbiAgaGVpZ2h0OiAkaGVhZGVyLWhlaWdodFxuICB6LWluZGV4OiAxMDBcblxuLmhlYWRlci1pY29uLFxuLmhlYWRlci1sYWJlbFxuICBwYWRkaW5nOiA0cHggMCAwIDEwcHhcblxuLmhlYWRlci1sYWJlbFxuICBtYXJnaW4tbGVmdDogYXV0b1xuICBmb250LXNpemU6IDE2cHhcbiAgZm9udC13ZWlnaHQ6IDQwMFxuIiwiJGhlYWRlci1oZWlnaHQ6IDY0cHhcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctdG9wOiA2NHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjRweDtcbiAgei1pbmRleDogMTAwO1xufVxuXG4uaGVhZGVyLWljb24sXG4uaGVhZGVyLWxhYmVsIHtcbiAgcGFkZGluZzogNHB4IDAgMCAxMHB4O1xufVxuXG4uaGVhZGVyLWxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-base-layout',
                templateUrl: './base-layout.component.html',
                styleUrls: ['./base-layout.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/law-search/law-search.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/law-search/law-search.component.ts ***!
  \***************************************************************/
/*! exports provided: LawSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LawSearchComponent", function() { return LawSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../article-list/article-list.component */ "./src/app/components/article-list/article-list.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");





class LawSearchComponent {
    constructor() {
        this.topGap = 64;
    }
    ngOnInit() {
    }
}
LawSearchComponent.ɵfac = function LawSearchComponent_Factory(t) { return new (t || LawSearchComponent)(); };
LawSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LawSearchComponent, selectors: [["app-law-search"]], decls: 14, vars: 0, consts: [[1, "container", "full-height-container"], [1, "row"], [1, "col-sm-12", "col-md-9"], [1, "col-sm-12", "col-md-3", "search-sidebar"], ["mat-button", ""]], template: function LawSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-article-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "LIKE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "SHARE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_article_list_article_list_component__WEBPACK_IMPORTED_MODULE_1__["ArticleListComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]], styles: [".search-sidebar[_ngcontent-%COMP%] {\n  width: 340px;\n  background-color: #eeeeee;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n[_nghost-%COMP%]  .full-height-container {\n  height: calc(100vh - 64px);\n}\n\n[_nghost-%COMP%]  .full-height-container .row {\n  height: 100%;\n}\n\n[_nghost-%COMP%]  .full-height-container .row [class^=col-] {\n  height: 100%;\n}\n\n[_nghost-%COMP%]  .list-card.mat-card {\n  width: calc(100% - 300px);\n  max-width: 800px;\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyaWkubW9pc2VpZW5rby9Eb2N1bWVudHMvcHJvamVjdHMvd2VibGF3L3NyYy9hcHAvY29tcG9uZW50cy9sYXctc2VhcmNoL2xhdy1zZWFyY2guY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbGF3LXNlYXJjaC9sYXctc2VhcmNoLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ0RGOztBRElFO0VBQ0UsMEJBQUE7QUNESjs7QURFSTtFQUNFLFlBQUE7QUNBTjs7QURDTTtFQUNFLFlBQUE7QUNDUjs7QURHRTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYXctc2VhcmNoL2xhdy1zZWFyY2guY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwidmFyaWFibGVzXCJcblxuLnNlYXJjaC1zaWRlYmFyXG4gIHdpZHRoOiAzNDBweFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlXG4gIHBhZGRpbmctdG9wOiAyMHB4XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4XG5cblxcOmhvc3Q6Om5nLWRlZXBcbiAgLmZ1bGwtaGVpZ2h0LWNvbnRhaW5lclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtICN7JGhlYWRlci1oZWlnaHR9KVxuICAgIC5yb3dcbiAgICAgIGhlaWdodDogMTAwJVxuICAgICAgW2NsYXNzXj1cImNvbC1cIl1cbiAgICAgICAgaGVpZ2h0OiAxMDAlXG5cblxuXG4gIC5saXN0LWNhcmQubWF0LWNhcmRcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzAwcHgpXG4gICAgbWF4LXdpZHRoOiA4MDBweFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvXG4iLCIuc2VhcmNoLXNpZGViYXIge1xuICB3aWR0aDogMzQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuOmhvc3Q6Om5nLWRlZXAgLmZ1bGwtaGVpZ2h0LWNvbnRhaW5lciB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xufVxuOmhvc3Q6Om5nLWRlZXAgLmZ1bGwtaGVpZ2h0LWNvbnRhaW5lciAucm93IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuOmhvc3Q6Om5nLWRlZXAgLmZ1bGwtaGVpZ2h0LWNvbnRhaW5lciAucm93IFtjbGFzc149Y29sLV0ge1xuICBoZWlnaHQ6IDEwMCU7XG59XG46aG9zdDo6bmctZGVlcCAubGlzdC1jYXJkLm1hdC1jYXJkIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwMHB4KTtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LawSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-law-search',
                templateUrl: './law-search.component.html',
                styleUrls: ['./law-search.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/search-results/search-results.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/search-results/search-results.component.ts ***!
  \***********************************************************************/
/*! exports provided: SearchResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultsComponent", function() { return SearchResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SearchResultsComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
SearchResultsComponent.ɵfac = function SearchResultsComponent_Factory(t) { return new (t || SearchResultsComponent)(); };
SearchResultsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchResultsComponent, selectors: [["app-search-results"]], decls: 2, vars: 0, template: function SearchResultsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "search-results works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoLXJlc3VsdHMvc2VhcmNoLXJlc3VsdHMuY29tcG9uZW50LnNhc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchResultsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search-results',
                templateUrl: './search-results.component.html',
                styleUrls: ['./search-results.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");










const materialModules = [
    _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__["MatBadgeModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
];
class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ...materialModules,
        ],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__["MatBadgeModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__["MatBadgeModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"]], exports: [_angular_material_badge__WEBPACK_IMPORTED_MODULE_7__["MatBadgeModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ...materialModules,
                ],
                exports: [...materialModules],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/articles.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/articles.service.ts ***!
  \**********************************************/
/*! exports provided: ArticlesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesService", function() { return ArticlesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class ArticlesService {
    constructor() {
        this.articles = [
            { id: 1, number: 75, text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.', documentsCount: 4 },
            { id: 1, number: 75.1, text: 'A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.', documentsCount: 6 },
            { id: 2, number: 75.2, text: 'A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.', documentsCount: 2 },
            { id: 3, number: 75.3, text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.', documentsCount: 4 },
            { id: 4, number: 75.4, text: 'lorem', documentsCount: 0 },
            { id: 5, number: 75.5, text: 'lorem', documentsCount: 1 },
            { id: 5, number: 75.5, text: 'lorem', documentsCount: 1 },
            { id: 5, number: 75.5, text: 'lorem', documentsCount: 1 },
            { id: 5, number: 75.5, text: 'lorem', documentsCount: 1 },
            { id: 5, number: 75.5, text: 'lorem', documentsCount: 1 },
            { id: 5, number: 75.5, text: 'lorem', documentsCount: 1 },
            { id: 5, number: 75.5, text: 'lorem', documentsCount: 1 },
            { id: 5, number: 75.5, text: 'lorem', documentsCount: 1 },
        ];
        this.articles$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.articles);
    }
}
ArticlesService.ɵfac = function ArticlesService_Factory(t) { return new (t || ArticlesService)(); };
ArticlesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ArticlesService, factory: ArticlesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticlesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/base-layout/base-layout.component */ "./src/app/components/base-layout/base-layout.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_law_search_law_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/law-search/law-search.component */ "./src/app/components/law-search/law-search.component.ts");
/* harmony import */ var _components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/search-results/search-results.component */ "./src/app/components/search-results/search-results.component.ts");
/* harmony import */ var _components_article_list_article_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/article-list/article-list.component */ "./src/app/components/article-list/article-list.component.ts");









class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_2__["BaseLayoutComponent"], _components_law_search_law_search_component__WEBPACK_IMPORTED_MODULE_5__["LawSearchComponent"], _components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_6__["SearchResultsComponent"], _components_article_list_article_list_component__WEBPACK_IMPORTED_MODULE_7__["ArticleListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]], exports: [_components_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_2__["BaseLayoutComponent"], _components_law_search_law_search_component__WEBPACK_IMPORTED_MODULE_5__["LawSearchComponent"], _components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_6__["SearchResultsComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_2__["BaseLayoutComponent"], _components_law_search_law_search_component__WEBPACK_IMPORTED_MODULE_5__["LawSearchComponent"], _components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_6__["SearchResultsComponent"], _components_article_list_article_list_component__WEBPACK_IMPORTED_MODULE_7__["ArticleListComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                    _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                ],
                exports: [_components_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_2__["BaseLayoutComponent"], _components_law_search_law_search_component__WEBPACK_IMPORTED_MODULE_5__["LawSearchComponent"], _components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_6__["SearchResultsComponent"]]
            }]
    }], null, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/andrii.moiseienko/Documents/projects/weblaw/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map