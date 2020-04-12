function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_law_search_law_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/law-search/law-search.component */
    "./src/app/components/law-search/law-search.component.ts");
    /* harmony import */


    var _components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/search-results/search-results.component */
    "./src/app/components/search-results/search-results.component.ts");

    var routes = [{
      path: '',
      pathMatch: 'full',
      redirectTo: 'law-search'
    }, {
      path: 'law-search',
      component: _components_law_search_law_search_component__WEBPACK_IMPORTED_MODULE_2__["LawSearchComponent"]
    }, {
      path: 'search-results',
      component: _components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_3__["SearchResultsComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/base-layout/base-layout.component */
    "./src/app/components/base-layout/base-layout.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-base-layout");
        }
      },
      directives: [_components_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_1__["BaseLayoutComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/article-list/article-list.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/article-list/article-list.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ArticleListComponent */

  /***/
  function srcAppComponentsArticleListArticleListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticleListComponent", function () {
      return ArticleListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services_articles_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/articles.service */
    "./src/app/services/articles.service.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");

    function ArticleListComponent_mat_list_item_6_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var article_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r1.number);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", article_r1.text, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !article_r1.documentsCount)("matBadge", article_r1.documentsCount)("matBadgeColor", article_r1.documentsCount ? "accent" : "warn");
      }
    }

    var ArticleListComponent =
    /*#__PURE__*/
    function () {
      function ArticleListComponent(articlesService) {
        _classCallCheck(this, ArticleListComponent);

        this.articlesService = articlesService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(ArticleListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.articlesService.articles$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$)).subscribe(function (articles) {
            _this.articlesList = articles;
          });
        }
      }]);

      return ArticleListComponent;
    }();

    ArticleListComponent.ɵfac = function ArticleListComponent_Factory(t) {
      return new (t || ArticleListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_articles_service__WEBPACK_IMPORTED_MODULE_3__["ArticlesService"]));
    };

    ArticleListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ArticleListComponent,
      selectors: [["app-article-list"]],
      decls: 7,
      vars: 1,
      consts: [[1, "article-list-card"], ["mat-subheader", "", 1, "article-list-card__header"], [4, "ngFor", "ngForOf"], [1, "article-number"], [1, "badge", "badge-warning"], [1, "article-text"], [1, "action-button"], ["mat-raised-button", "", "color", "primary", "matBadgePosition", "after", 3, "disabled", "matBadge", "matBadgeColor"]],
      template: function ArticleListComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.articlesList);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListSubheaderCssMatStyler"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDivider"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListItem"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadge"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n[_nghost-%COMP%]   .article-list-card[_ngcontent-%COMP%] {\n  height: 100%;\n  min-height: 400px;\n}\n[_nghost-%COMP%]   .article-list-card__header[_ngcontent-%COMP%] {\n  color: #333333;\n}\n[_nghost-%COMP%]   .article-list-card[_ngcontent-%COMP%]   .mat-card-content[_ngcontent-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   .article-list-card[_ngcontent-%COMP%]   .mat-list[_ngcontent-%COMP%] {\n  height: calc(100% - 60px);\n  overflow: auto;\n}\n[_nghost-%COMP%]   .mat-list-item[_ngcontent-%COMP%] {\n  height: auto;\n  min-height: 60px;\n}\n[_nghost-%COMP%]   .action-button[_ngcontent-%COMP%] {\n  flex: 0 0 140px;\n}\n[_nghost-%COMP%]   .article-number[_ngcontent-%COMP%] {\n  flex: 0 0 80px;\n}\n[_nghost-%COMP%]   .article-number[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n}\n[_nghost-%COMP%]   .article-text[_ngcontent-%COMP%] {\n  color: #777777;\n  flex: 1 1 auto;\n  padding: 14px 20px;\n}\n[_nghost-%COMP%]     .mat-raised-button {\n  margin-left: auto;\n}\n[_nghost-%COMP%]     .mat-raised-button[disabled] .mat-badge-content {\n  background-color: #aaaaaa;\n}\n[_nghost-%COMP%]     .mat-button-wrapper {\n  padding-right: 20px;\n}\n[_nghost-%COMP%]     .mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  top: 7px;\n  right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyaWkubW9pc2VpZW5rby9Eb2N1bWVudHMvcHJvamVjdHMvd2VibGF3L3NyYy9hcHAvY29tcG9uZW50cy9hcnRpY2xlLWxpc3QvYXJ0aWNsZS1saXN0LmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9jb21wb25lbnRzL2FydGljbGUtbGlzdC9hcnRpY2xlLWxpc3QuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFDQyxjQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNDRjtBREFFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FDRUo7QURESTtFQUNFLGNBQUE7QUNHTjtBREZJO0VBQ0UsWUFBQTtBQ0lOO0FESEk7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUNLTjtBREpFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FDTUo7QURMRTtFQUNFLGVBQUE7QUNPSjtBRExFO0VBQ0UsY0FBQTtBQ09KO0FETkk7RUFDRSxpQkFBQTtBQ1FOO0FEUEU7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDU0o7QUROSTtFQUNFLGlCQUFBO0FDUU47QUROUTtFQUNFLHlCQUFBO0FDUVY7QURQSTtFQUNFLG1CQUFBO0FDU047QURSSTtFQUNFLFFBQUE7RUFDQSxVQUFBO0FDVU4iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FydGljbGUtbGlzdC9hcnRpY2xlLWxpc3QuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcXDpob3N0XG4gIGRpc3BsYXk6IGJsb2NrXG4gIGhlaWdodDogMTAwJVxuICBwYWRkaW5nLXRvcDogMjBweFxuICBwYWRkaW5nLWJvdHRvbTogMjBweFxuICAuYXJ0aWNsZS1saXN0LWNhcmRcbiAgICBoZWlnaHQ6IDEwMCVcbiAgICBtaW4taGVpZ2h0OiA0MDBweFxuICAgICZfX2hlYWRlclxuICAgICAgY29sb3I6ICMzMzMzMzNcbiAgICAubWF0LWNhcmQtY29udGVudFxuICAgICAgaGVpZ2h0OiAxMDAlXG4gICAgLm1hdC1saXN0XG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDYwcHgpXG4gICAgICBvdmVyZmxvdzogYXV0b1xuICAubWF0LWxpc3QtaXRlbVxuICAgIGhlaWdodDogYXV0b1xuICAgIG1pbi1oZWlnaHQ6IDYwcHhcbiAgLmFjdGlvbi1idXR0b25cbiAgICBmbGV4OiAwIDAgMTQwcHhcblxuICAuYXJ0aWNsZS1udW1iZXJcbiAgICBmbGV4OiAwIDAgODBweFxuICAgIC5iYWRnZVxuICAgICAgcGFkZGluZzogNnB4IDEycHhcbiAgLmFydGljbGUtdGV4dFxuICAgIGNvbG9yOiAjNzc3Nzc3XG4gICAgZmxleDogMSAxIGF1dG9cbiAgICBwYWRkaW5nOiAxNHB4IDIwcHhcblxuICA6Om5nLWRlZXBcbiAgICAubWF0LXJhaXNlZC1idXR0b25cbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvXG4gICAgICAmW2Rpc2FibGVkXVxuICAgICAgICAubWF0LWJhZGdlLWNvbnRlbnRcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhYWFhXG4gICAgLm1hdC1idXR0b24td3JhcHBlclxuICAgICAgcGFkZGluZy1yaWdodDogMjBweFxuICAgIC5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnRcbiAgICAgIHRvcDogN3B4XG4gICAgICByaWdodDogOHB4XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbjpob3N0IC5hcnRpY2xlLWxpc3QtY2FyZCB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogNDAwcHg7XG59XG46aG9zdCAuYXJ0aWNsZS1saXN0LWNhcmRfX2hlYWRlciB7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuOmhvc3QgLmFydGljbGUtbGlzdC1jYXJkIC5tYXQtY2FyZC1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuOmhvc3QgLmFydGljbGUtbGlzdC1jYXJkIC5tYXQtbGlzdCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjBweCk7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuOmhvc3QgLm1hdC1saXN0LWl0ZW0ge1xuICBoZWlnaHQ6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG59XG46aG9zdCAuYWN0aW9uLWJ1dHRvbiB7XG4gIGZsZXg6IDAgMCAxNDBweDtcbn1cbjpob3N0IC5hcnRpY2xlLW51bWJlciB7XG4gIGZsZXg6IDAgMCA4MHB4O1xufVxuOmhvc3QgLmFydGljbGUtbnVtYmVyIC5iYWRnZSB7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xufVxuOmhvc3QgLmFydGljbGUtdGV4dCB7XG4gIGNvbG9yOiAjNzc3Nzc3O1xuICBmbGV4OiAxIDEgYXV0bztcbiAgcGFkZGluZzogMTRweCAyMHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtcmFpc2VkLWJ1dHRvbltkaXNhYmxlZF0gLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhYWFhYTtcbn1cbjpob3N0IDo6bmctZGVlcCAubWF0LWJ1dHRvbi13cmFwcGVyIHtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cbjpob3N0IDo6bmctZGVlcCAubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgdG9wOiA3cHg7XG4gIHJpZ2h0OiA4cHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-article-list',
          templateUrl: './article-list.component.html',
          styleUrls: ['./article-list.component.sass']
        }]
      }], function () {
        return [{
          type: _services_articles_service__WEBPACK_IMPORTED_MODULE_3__["ArticlesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/base-layout/base-layout.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/base-layout/base-layout.component.ts ***!
    \*****************************************************************/

  /*! exports provided: BaseLayoutComponent */

  /***/
  function srcAppComponentsBaseLayoutBaseLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseLayoutComponent", function () {
      return BaseLayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var BaseLayoutComponent =
    /*#__PURE__*/
    function () {
      function BaseLayoutComponent() {
        _classCallCheck(this, BaseLayoutComponent);
      }

      _createClass(BaseLayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BaseLayoutComponent;
    }();

    BaseLayoutComponent.ɵfac = function BaseLayoutComponent_Factory(t) {
      return new (t || BaseLayoutComponent)();
    };

    BaseLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BaseLayoutComponent,
      selectors: [["app-base-layout"]],
      decls: 11,
      vars: 0,
      consts: [["color", "primary"], [1, "header-label"], ["aria-hidden", "false", 1, "header-icon"]],
      template: function BaseLayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarRow"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  padding-top: 64px;\n  background-color: #f8f8f8;\n  overflow: hidden;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 64px;\n  z-index: 100;\n}\n\n.header-icon[_ngcontent-%COMP%], .header-label[_ngcontent-%COMP%] {\n  padding: 4px 0 0 10px;\n}\n\n.header-label[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 16px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyaWkubW9pc2VpZW5rby9Eb2N1bWVudHMvcHJvamVjdHMvd2VibGF3L3NyYy9hcHAvY29tcG9uZW50cy9iYXNlLWxheW91dC9iYXNlLWxheW91dC5jb21wb25lbnQuc2FzcyIsIi9Vc2Vycy9hbmRyaWkubW9pc2VpZW5rby9Eb2N1bWVudHMvcHJvamVjdHMvd2VibGF3L3NyYy9zYXNzL192YXJpYWJsZXMuc2FzcyIsInNyYy9hcHAvY29tcG9uZW50cy9iYXNlLWxheW91dC9iYXNlLWxheW91dC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQztFQUNDLGNBQUE7RUFDQSxpQkNKYztFREtkLHlCQUFBO0VBQ0EsZ0JBQUE7QUVERjs7QUZHQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlDWmM7RURhZCxZQUFBO0FFQUY7O0FGRUE7O0VBRUUscUJBQUE7QUVDRjs7QUZDQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FFRUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Jhc2UtbGF5b3V0L2Jhc2UtbGF5b3V0LmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndmFyaWFibGVzJ1xuXG5cXDpob3N0XG4gIGRpc3BsYXk6IGJsb2NrXG4gIHBhZGRpbmctdG9wOiAkaGVhZGVyLWhlaWdodFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4XG4gIG92ZXJmbG93OiBoaWRkZW5cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5XG4gIHBvc2l0aW9uOiBmaXhlZFxuICB0b3A6IDBcbiAgd2lkdGg6IDEwMCVcbiAgaGVpZ2h0OiAkaGVhZGVyLWhlaWdodFxuICB6LWluZGV4OiAxMDBcblxuLmhlYWRlci1pY29uLFxuLmhlYWRlci1sYWJlbFxuICBwYWRkaW5nOiA0cHggMCAwIDEwcHhcblxuLmhlYWRlci1sYWJlbFxuICBtYXJnaW4tbGVmdDogYXV0b1xuICBmb250LXNpemU6IDE2cHhcbiAgZm9udC13ZWlnaHQ6IDQwMFxuIiwiJGhlYWRlci1oZWlnaHQ6IDY0cHhcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctdG9wOiA2NHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjRweDtcbiAgei1pbmRleDogMTAwO1xufVxuXG4uaGVhZGVyLWljb24sXG4uaGVhZGVyLWxhYmVsIHtcbiAgcGFkZGluZzogNHB4IDAgMCAxMHB4O1xufVxuXG4uaGVhZGVyLWxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-base-layout',
          templateUrl: './base-layout.component.html',
          styleUrls: ['./base-layout.component.sass']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/law-search/law-search.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/law-search/law-search.component.ts ***!
    \***************************************************************/

  /*! exports provided: LawSearchComponent */

  /***/
  function srcAppComponentsLawSearchLawSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LawSearchComponent", function () {
      return LawSearchComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_articles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/articles.service */
    "./src/app/services/articles.service.ts");
    /* harmony import */


    var _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../article-list/article-list.component */
    "./src/app/components/article-list/article-list.component.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var LawSearchComponent =
    /*#__PURE__*/
    function () {
      function LawSearchComponent(articlesService) {
        _classCallCheck(this, LawSearchComponent);

        this.articlesService = articlesService;
        this.topGap = 64;
      }

      _createClass(LawSearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.filterControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        }
      }, {
        key: "applyFilter",
        value: function applyFilter() {
          this.articlesService.applyFilter$.next(this.filterControl.value);
        }
      }]);

      return LawSearchComponent;
    }();

    LawSearchComponent.ɵfac = function LawSearchComponent_Factory(t) {
      return new (t || LawSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_articles_service__WEBPACK_IMPORTED_MODULE_2__["ArticlesService"]));
    };

    LawSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LawSearchComponent,
      selectors: [["app-law-search"]],
      decls: 23,
      vars: 1,
      consts: [[1, "container", "full-height-container"], [1, "row"], [1, "col-sm-12", "col-md-9"], [1, "col-sm-12", "col-md-3", "search-sidebar"], ["matInput", "", "placeholder", "\u041D\u043E\u043C\u0435\u0440 \u0441\u0442\u0430\u0442\u0442\u0456", 3, "formControl"], ["mat-stroked-button", "", "color", "primary", 3, "click"], ["mat-stroked-button", "", "color", "primary"]],
      template: function LawSearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-article-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043D\u043E\u043C\u0435\u0440 \u0441\u0442\u0430\u0442\u0442\u0456 \u0434\u043B\u044F \u0448\u0432\u0438\u0434\u043A\u043E\u0433\u043E \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0443");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LawSearchComponent_Template_button_click_12_listener() {
            return ctx.applyFilter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "OK");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u041E\u0441\u0442\u0430\u043D\u043D\u0454 \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0431\u0430\u0437\u0438 04/04/2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0434\u043E\u0434\u0430\u043D\u043E 3000 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0456\u0432");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u043B\u0438\u0448\u0435 \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u0456 \u0441\u0442\u0430\u0442\u0442\u0456");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0456 \u0432\u0441\u044E \u043D\u0430\u044F\u0432\u043D\u0443 \u0431\u0430\u0437\u0443");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.filterControl);
        }
      },
      directives: [_article_list_article_list_component__WEBPACK_IMPORTED_MODULE_3__["ArticleListComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"]],
      styles: [".search-sidebar[_ngcontent-%COMP%] {\n  width: 340px;\n  background-color: #eeeeee;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n[_nghost-%COMP%]  .full-height-container {\n  height: calc(100vh - 64px);\n}\n\n[_nghost-%COMP%]  .full-height-container .row {\n  height: 100%;\n}\n\n[_nghost-%COMP%]  .full-height-container .row [class^=col-] {\n  height: 100%;\n}\n\n[_nghost-%COMP%]  .list-card.mat-card {\n  width: calc(100% - 300px);\n  max-width: 800px;\n  margin-left: auto;\n}\n\n[_nghost-%COMP%]  form {\n  display: flex;\n  align-items: center;\n}\n\n[_nghost-%COMP%]  form .mat-form-field-appearance-legacy .mat-form-field-infix {\n  width: auto;\n}\n\n[_nghost-%COMP%]  form mat-form-field {\n  flex-basis: calc(100% - 60px);\n}\n\n[_nghost-%COMP%]  form .mat-stroked-button {\n  flex-basis: 50px;\n  margin-left: 10px;\n  width: auto;\n  height: auto;\n}\n\n[_nghost-%COMP%]  .mat-card-actions {\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 10px !important;\n}\n\n[_nghost-%COMP%]  .mat-card-actions a {\n  margin: 0 0 10px;\n  flex-basis: 100%;\n}\n\n[_nghost-%COMP%]  .mat-card-actions .mat-button-wrapper {\n  display: inline-block;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  line-height: 1.4;\n  vertical-align: middle;\n  overflow: hidden;\n  white-space: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyaWkubW9pc2VpZW5rby9Eb2N1bWVudHMvcHJvamVjdHMvd2VibGF3L3NyYy9hcHAvY29tcG9uZW50cy9sYXctc2VhcmNoL2xhdy1zZWFyY2guY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbGF3LXNlYXJjaC9sYXctc2VhcmNoLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ0RGOztBRElFO0VBQ0UsMEJBQUE7QUNESjs7QURFSTtFQUNFLFlBQUE7QUNBTjs7QURDTTtFQUNFLFlBQUE7QUNDUjs7QURDRTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBRENFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQUk7RUFDRSxXQUFBO0FDRU47O0FEREk7RUFDRSw2QkFBQTtBQ0dOOztBREZJO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDSU47O0FERkU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwrQkFBQTtBQ0lKOztBREhJO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0tOOztBREhJO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNLTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF3LXNlYXJjaC9sYXctc2VhcmNoLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInZhcmlhYmxlc1wiXG5cbi5zZWFyY2gtc2lkZWJhclxuICB3aWR0aDogMzQwcHhcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZVxuICBwYWRkaW5nLXRvcDogMjBweFxuICBwYWRkaW5nLWJvdHRvbTogMjBweFxuXG5cXDpob3N0OjpuZy1kZWVwXG4gIC5mdWxsLWhlaWdodC1jb250YWluZXJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAjeyRoZWFkZXItaGVpZ2h0fSlcbiAgICAucm93XG4gICAgICBoZWlnaHQ6IDEwMCVcbiAgICAgIFtjbGFzc149XCJjb2wtXCJdXG4gICAgICAgIGhlaWdodDogMTAwJVxuXG4gIC5saXN0LWNhcmQubWF0LWNhcmRcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzAwcHgpXG4gICAgbWF4LXdpZHRoOiA4MDBweFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvXG5cbiAgZm9ybVxuICAgIGRpc3BsYXk6IGZsZXhcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXG4gICAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1pbmZpeFxuICAgICAgd2lkdGg6IGF1dG9cbiAgICBtYXQtZm9ybS1maWVsZFxuICAgICAgZmxleC1iYXNpczogY2FsYygxMDAlIC0gNjBweClcbiAgICAubWF0LXN0cm9rZWQtYnV0dG9uXG4gICAgICBmbGV4LWJhc2lzOiA1MHB4XG4gICAgICBtYXJnaW4tbGVmdDogMTBweFxuICAgICAgd2lkdGg6IGF1dG9cbiAgICAgIGhlaWdodDogYXV0b1xuXG4gIC5tYXQtY2FyZC1hY3Rpb25zXG4gICAgZGlzcGxheTogZmxleFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweCAhaW1wb3J0YW50XG4gICAgYVxuICAgICAgbWFyZ2luOiAwIDAgMTBweFxuICAgICAgZmxleC1iYXNpczogMTAwJVxuXG4gICAgLm1hdC1idXR0b24td3JhcHBlclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrXG4gICAgICBwYWRkaW5nLXRvcDogOHB4XG4gICAgICBwYWRkaW5nLWJvdHRvbTogOHB4XG4gICAgICBsaW5lLWhlaWdodDogMS40XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXG4gICAgICBvdmVyZmxvdzogaGlkZGVuXG4gICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsXG5cbiIsIi5zZWFyY2gtc2lkZWJhciB7XG4gIHdpZHRoOiAzNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG46aG9zdDo6bmctZGVlcCAuZnVsbC1oZWlnaHQtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjRweCk7XG59XG46aG9zdDo6bmctZGVlcCAuZnVsbC1oZWlnaHQtY29udGFpbmVyIC5yb3cge1xuICBoZWlnaHQ6IDEwMCU7XG59XG46aG9zdDo6bmctZGVlcCAuZnVsbC1oZWlnaHQtY29udGFpbmVyIC5yb3cgW2NsYXNzXj1jb2wtXSB7XG4gIGhlaWdodDogMTAwJTtcbn1cbjpob3N0OjpuZy1kZWVwIC5saXN0LWNhcmQubWF0LWNhcmQge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMzAwcHgpO1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbjpob3N0OjpuZy1kZWVwIGZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuOmhvc3Q6Om5nLWRlZXAgZm9ybSAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgd2lkdGg6IGF1dG87XG59XG46aG9zdDo6bmctZGVlcCBmb3JtIG1hdC1mb3JtLWZpZWxkIHtcbiAgZmxleC1iYXNpczogY2FsYygxMDAlIC0gNjBweCk7XG59XG46aG9zdDo6bmctZGVlcCBmb3JtIC5tYXQtc3Ryb2tlZC1idXR0b24ge1xuICBmbGV4LWJhc2lzOiA1MHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbn1cbjpob3N0OjpuZy1kZWVwIC5tYXQtY2FyZC1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbn1cbjpob3N0OjpuZy1kZWVwIC5tYXQtY2FyZC1hY3Rpb25zIGEge1xuICBtYXJnaW46IDAgMCAxMHB4O1xuICBmbGV4LWJhc2lzOiAxMDAlO1xufVxuOmhvc3Q6Om5nLWRlZXAgLm1hdC1jYXJkLWFjdGlvbnMgLm1hdC1idXR0b24td3JhcHBlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LawSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-law-search',
          templateUrl: './law-search.component.html',
          styleUrls: ['./law-search.component.sass']
        }]
      }], function () {
        return [{
          type: _services_articles_service__WEBPACK_IMPORTED_MODULE_2__["ArticlesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/search-results/search-results.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/search-results/search-results.component.ts ***!
    \***********************************************************************/

  /*! exports provided: SearchResultsComponent */

  /***/
  function srcAppComponentsSearchResultsSearchResultsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchResultsComponent", function () {
      return SearchResultsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SearchResultsComponent =
    /*#__PURE__*/
    function () {
      function SearchResultsComponent() {
        _classCallCheck(this, SearchResultsComponent);
      }

      _createClass(SearchResultsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SearchResultsComponent;
    }();

    SearchResultsComponent.ɵfac = function SearchResultsComponent_Factory(t) {
      return new (t || SearchResultsComponent)();
    };

    SearchResultsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchResultsComponent,
      selectors: [["app-search-results"]],
      decls: 2,
      vars: 0,
      template: function SearchResultsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "search-results works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoLXJlc3VsdHMvc2VhcmNoLXJlc3VsdHMuY29tcG9uZW50LnNhc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchResultsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-search-results',
          templateUrl: './search-results.component.html',
          styleUrls: ['./search-results.component.sass']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/enums/article-role.enum.ts":
  /*!********************************************!*\
    !*** ./src/app/enums/article-role.enum.ts ***!
    \********************************************/

  /*! exports provided: ArticleRole */

  /***/
  function srcAppEnumsArticleRoleEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticleRole", function () {
      return ArticleRole;
    });

    var ArticleRole;

    (function (ArticleRole) {
      ArticleRole[ArticleRole["MAIN"] = ArticleRole.MAIN] = "MAIN";
      ArticleRole[ArticleRole["SUB_ARTICLE"] = ArticleRole.SUB_ARTICLE] = "SUB_ARTICLE";
    })(ArticleRole || (ArticleRole = {}));
    /***/

  },

  /***/
  "./src/app/material/material.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/material/material.module.ts ***!
    \*********************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMaterialMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");

    var materialModules = [_angular_material_badge__WEBPACK_IMPORTED_MODULE_7__["MatBadgeModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"]];

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MaterialModule
    });
    MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MaterialModule_Factory(t) {
        return new (t || MaterialModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]].concat(materialModules), _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__["MatBadgeModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__["MatBadgeModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"]],
        exports: [_angular_material_badge__WEBPACK_IMPORTED_MODULE_7__["MatBadgeModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]].concat(materialModules),
          exports: [].concat(materialModules)
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/articles-source.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/articles-source.ts ***!
    \*********************************************/

  /*! exports provided: articlesList */

  /***/
  function srcAppServicesArticlesSourceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "articlesList", function () {
      return articlesList;
    });
    /* harmony import */


    var _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../enums/article-role.enum */
    "./src/app/enums/article-role.enum.ts");

    var articlesList = [{
      number: 15,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].MAIN,
      text: 'Замах на злочин',
      documentsCount: 4
    }, {
      number: 15.1,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 15.2,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 15.3,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 27,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].MAIN,
      text: '',
      documentsCount: 4
    }, {
      number: 28,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].MAIN,
      text: '',
      documentsCount: 4
    }, {
      number: 68,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].MAIN,
      text: 'Призначення більш м\'якого покарання, ніж передбачено законом',
      documentsCount: 4
    }, {
      number: 68.1,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 68.2,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 68.3,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 68.4,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 68.5,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 69,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].MAIN,
      text: 'Призначення більш м\'якого покарання, ніж передбачено законом',
      documentsCount: 4
    }, {
      number: 69.1,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 69.2,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 75,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].MAIN,
      text: 'Звільнення від відбування покарання з випробуванням',
      documentsCount: 4
    }, {
      number: 75.1,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 75.2,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 75.3,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 75.4,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 104,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].MAIN,
      text: 'Звільнення від відбування покарання з випробуванням',
      documentsCount: 4
    }, {
      number: 104.1,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 104.2,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 104.3,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 104.4,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 109,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].MAIN,
      text: 'Дії, спрямовані на насильницьку зміну чи повалення конституційного ладу або на захоплення державної влади',
      documentsCount: 4
    }, {
      number: 109.1,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 109.2,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 109.3,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 110,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].MAIN,
      text: 'Посягання на територіальну цілісність і недоторканність України',
      documentsCount: 4
    }, {
      number: 110.1,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 110.2,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 110.3,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 110 - 2,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].MAIN,
      text: 'Фінансування дій, вчинених з метою насильницької зміни чи повалення конституційного ладу або захоплення державної влади, зміни меж території або державного кордону України',
      documentsCount: 4
    }, {
      number: 110 - 2.1,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 110 - 2.2,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 110 - 2.3,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 110 - 2.4,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 110 - 2.5,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 111,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].MAIN,
      text: 'Державна зрада',
      documentsCount: 4
    }, {
      number: 111.1,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 111.2,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 112,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].MAIN,
      text: 'Посягання на життя державного чи громадського діяча',
      documentsCount: 4
    }, {
      number: 113,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].MAIN,
      text: 'Диверсія',
      documentsCount: 4
    }, {
      number: 114,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].MAIN,
      text: 'Шпигунство',
      documentsCount: 4
    }, {
      number: 114.1,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 114.2,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 114 - 1,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].MAIN,
      text: 'Перешкоджання законній діяльності Збройних Сил України та інших військових формувань',
      documentsCount: 4
    }, {
      number: 114 - 1.1,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 114 - 1.2,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 115,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].MAIN,
      text: 'Умисне вбивство',
      documentsCount: 4
    }, {
      number: 115.1,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 115.2,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 116,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].MAIN,
      text: 'Умисне вбивство, вчинене в стані сильного душевного хвилювання',
      documentsCount: 4
    }, {
      number: 117,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].MAIN,
      text: 'Умисне вбивство матір\'ю своєї новонародженої дитини',
      documentsCount: 4
    }, {
      number: 118,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].MAIN,
      text: 'Умисне вбивство при перевищенні меж необхідної оборони або у разі перевищення заходів, необхідних для затримання злочинця',
      documentsCount: 4
    }, {
      number: 119,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].MAIN,
      text: 'Вбивство через необережність',
      documentsCount: 4
    }, {
      number: 119.1,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 119.2,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 120,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].MAIN,
      text: 'Доведення до самогубства',
      documentsCount: 4
    }, {
      number: 120.1,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 120.2,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 120.3,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 121,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].MAIN,
      text: 'Умисне тяжке тілесне ушкодження',
      documentsCount: 4
    }, {
      number: 121.1,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 121.2,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 122,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].MAIN,
      text: 'Умисне середньої тяжкості тілесне ушкодження',
      documentsCount: 4
    }, {
      number: 122.1,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 122.2,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 123,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].MAIN,
      text: 'Умисне тяжке тілесне ушкодження, заподіяне у стані сильного душевного хвилювання',
      documentsCount: 4
    }, {
      number: 124,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].MAIN,
      text: 'Умисне заподіяння тяжких тілесних ушкоджень у разі перевищення меж необхідної оборони або у разі перевищення заходів, необхідних для затримання злочинця',
      documentsCount: 4
    }, {
      number: 125,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].MAIN,
      text: 'Умисне легке тілесне ушкодження',
      documentsCount: 4
    }, {
      number: 125.1,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 125.2,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 126,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].MAIN,
      text: 'Умисне середньої тяжкості тілесне ушкодження',
      documentsCount: 4
    }, {
      number: 126.1,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 126.2,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 126 - 1,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].MAIN,
      text: 'Домашнє насильство',
      documentsCount: 4
    }, {
      number: 127,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].MAIN,
      text: 'Катування',
      documentsCount: 4
    }, {
      number: 127.1,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 127.2,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 128,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].MAIN,
      text: 'Необережне тяжке або середньої тяжкості тілесне ушкодження',
      documentsCount: 4
    }, {
      number: 129,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].MAIN,
      text: 'Погроза вбивством',
      documentsCount: 4
    }, {
      number: 129.1,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 129.2,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 130,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].MAIN,
      text: 'Зараження вірусом імунодефіциту людини чи іншої невиліковної інфекційної хвороби',
      documentsCount: 4
    }, {
      number: 130.1,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 130.2,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 130.3,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 130.4,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 131,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].MAIN,
      text: 'Неналежне виконання професійних обов\'язків, що спричинило зараження особи вірусом імунодефіциту людини чи іншої невиліковної інфекційної хвороби',
      documentsCount: 4
    }, {
      number: 131.1,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 131.2,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 132,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].MAIN,
      text: 'Розголошення відомостей про проведення медичного огляду на виявлення зараження вірусом імунодефіциту людини чи іншої невиліковної інфекційної хвороби',
      documentsCount: 4
    }, {
      number: 133,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].MAIN,
      text: 'Зараження венеричною хворобою',
      documentsCount: 4
    }, {
      number: 133.1,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 133.2,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 134,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].MAIN,
      text: 'Незаконне проведення аборту або стерилізації',
      documentsCount: 4
    }, {
      number: 134.1,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 134.2,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 134.3,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 134.4,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 135,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].MAIN,
      text: 'Залишення в небезпеці',
      documentsCount: 4
    }, {
      number: 135.1,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 135.2,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 135.3,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 136,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].MAIN,
      text: 'Ненадання допомоги особі, яка перебуває в небезпечному для життя стані',
      documentsCount: 4
    }, {
      number: 136.1,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 136.2,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 136.3,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 137,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].MAIN,
      text: 'Неналежне виконання обов\'язків щодо охорони життя та здоров\'я дітей',
      documentsCount: 4
    }, {
      number: 137.1,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 137.2,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 138,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].MAIN,
      text: 'Незаконна лікувальна діяльність',
      documentsCount: 4
    }, {
      number: 139,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].MAIN,
      text: 'Ненадання допомоги хворому медичним працівником',
      documentsCount: 4
    }, {
      number: 139.1,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 139.2,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 140,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].MAIN,
      text: 'Неналежне виконання професійних обов\'язків медичним або фармацевтичним працівником',
      documentsCount: 4
    }, {
      number: 140.1,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 140.2,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 141,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].MAIN,
      text: 'Порушення прав пацієнта',
      documentsCount: 4
    }, {
      number: 142,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].MAIN,
      text: 'Незаконне проведення дослідів над людиною',
      documentsCount: 4
    }, {
      number: 142.1,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 142.2,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 143,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].MAIN,
      text: 'Порушення встановленого законом порядку трансплантації анатомічних матеріалів людини',
      documentsCount: 4
    }, {
      number: 143.1,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 143.2,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 143.3,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 143.4,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 143.5,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 144,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].MAIN,
      text: 'Насильницьке донорство',
      documentsCount: 4
    }, {
      number: 144.1,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 144.2,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 144.3,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 145,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].MAIN,
      text: 'Незаконне розголошення лікарської таємниці',
      documentsCount: 4
    }, {
      number: 146,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].MAIN,
      text: 'Незаконне позбавлення волі або викрадення людини',
      documentsCount: 4
    }, {
      number: 146.1,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 146.2,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 146.3,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 146 - 1,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].MAIN,
      text: 'Насильницьке зникнення',
      documentsCount: 4
    }, {
      number: 146 - 1.1,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }, {
      number: 146 - 1.2,
      role: _enums_article_role_enum__WEBPACK_IMPORTED_MODULE_0__["ArticleRole"].SUB_ARTICLE,
      text: '',
      documentsCount: 4
    }];
    /***/
  },

  /***/
  "./src/app/services/articles.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/articles.service.ts ***!
    \**********************************************/

  /*! exports provided: ArticlesService */

  /***/
  function srcAppServicesArticlesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticlesService", function () {
      return ArticlesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _articles_source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./articles-source */
    "./src/app/services/articles-source.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ArticlesService = function ArticlesService() {
      _classCallCheck(this, ArticlesService);

      this.applyFilter$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
      this.articles = _articles_source__WEBPACK_IMPORTED_MODULE_2__["articlesList"];
      this.articles$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.articles), this.applyFilter$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            articles = _ref2[0],
            filterString = _ref2[1];

        return articles.filter(function (article) {
          return String(article.number).includes(filterString);
        });
      }));
    };

    ArticlesService.ɵfac = function ArticlesService_Factory(t) {
      return new (t || ArticlesService)();
    };

    ArticlesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ArticlesService,
      factory: ArticlesService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticlesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../components/base-layout/base-layout.component */
    "./src/app/components/base-layout/base-layout.component.ts");
    /* harmony import */


    var _material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../material/material.module */
    "./src/app/material/material.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_law_search_law_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../components/law-search/law-search.component */
    "./src/app/components/law-search/law-search.component.ts");
    /* harmony import */


    var _components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../components/search-results/search-results.component */
    "./src/app/components/search-results/search-results.component.ts");
    /* harmony import */


    var _components_article_list_article_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../components/article-list/article-list.component */
    "./src/app/components/article-list/article-list.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        declarations: [_components_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_2__["BaseLayoutComponent"], _components_law_search_law_search_component__WEBPACK_IMPORTED_MODULE_5__["LawSearchComponent"], _components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_6__["SearchResultsComponent"], _components_article_list_article_list_component__WEBPACK_IMPORTED_MODULE_7__["ArticleListComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]],
        exports: [_components_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_2__["BaseLayoutComponent"], _components_law_search_law_search_component__WEBPACK_IMPORTED_MODULE_5__["LawSearchComponent"], _components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_6__["SearchResultsComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_2__["BaseLayoutComponent"], _components_law_search_law_search_component__WEBPACK_IMPORTED_MODULE_5__["LawSearchComponent"], _components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_6__["SearchResultsComponent"], _components_article_list_article_list_component__WEBPACK_IMPORTED_MODULE_7__["ArticleListComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]],
          exports: [_components_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_2__["BaseLayoutComponent"], _components_law_search_law_search_component__WEBPACK_IMPORTED_MODULE_5__["LawSearchComponent"], _components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_6__["SearchResultsComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/andrii.moiseienko/Documents/projects/weblaw/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map