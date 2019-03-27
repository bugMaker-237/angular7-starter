(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../dist/genesis/fesm5/genesis.js":
/*!*********************************************************************!*\
  !*** D:/MY PROJECTS/angular7-starter/dist/genesis/fesm5/genesis.js ***!
  \*********************************************************************/
/*! exports provided: MaterialModule, GenesisModule, DataService, MessageService, StorageService, UserService, ToastService, User, HttpOptions, Module, NavigationComponent, AuthGuard, ɵa, ɵc, ɵd, ɵl, ɵb, ɵf, ɵj, ɵe, ɵi, ɵk, ɵh, ɵp, ɵg, ɵo, ɵr, ɵm, ɵq, ɵn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenesisModule", function() { return GenesisModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpOptions", function() { return HttpOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return NavigationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return AuthRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return AuthComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return AuthGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return AuthModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return AuthService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return LoginComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return UserConnectedGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return StorageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return ToastService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return UserService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return StorageService$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return DataService$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return DataService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function() { return MessageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return StorageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return ToastService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return UserService; });
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/input */ "../../node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/autocomplete */ "../../node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/datepicker */ "../../node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "../../node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/radio */ "../../node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "../../node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slider */ "../../node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slide-toggle */ "../../node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "../../node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ "../../node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ "../../node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ "../../node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/grid-list */ "../../node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "../../node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/stepper */ "../../node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tabs */ "../../node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/expansion */ "../../node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button-toggle */ "../../node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/chips */ "../../node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-spinner */ "../../node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/progress-bar */ "../../node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/tooltip */ "../../node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/table */ "../../node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/sort */ "../../node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/paginator */ "../../node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/snack-bar */ "../../node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/cdk/layout */ "../../node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");










































/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_40__["NgModule"], args: [{
                    imports: [
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_28__["MatCheckboxModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_28__["MatCheckboxModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_28__["MatButtonModule"],
                        _angular_material_input__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                        _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                        _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                        _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"],
                        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"],
                        _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
                        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
                        _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
                        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
                        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__["MatStepperModule"],
                        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"],
                        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__["MatExpansionModule"],
                        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_18__["MatButtonToggleModule"],
                        _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChipsModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"],
                        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
                        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__["MatProgressBarModule"],
                        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"],
                        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["MatTooltipModule"],
                        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__["MatSnackBarModule"],
                        _angular_material_table__WEBPACK_IMPORTED_MODULE_25__["MatTableModule"],
                        _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__["MatSortModule"],
                        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__["MatPaginatorModule"]
                    ],
                    exports: [
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_28__["MatCheckboxModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_28__["MatCheckboxModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_28__["MatButtonModule"],
                        _angular_material_input__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                        _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                        _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                        _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"],
                        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"],
                        _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
                        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
                        _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
                        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
                        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__["MatStepperModule"],
                        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"],
                        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__["MatExpansionModule"],
                        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_18__["MatButtonToggleModule"],
                        _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChipsModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"],
                        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
                        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__["MatProgressBarModule"],
                        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"],
                        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["MatTooltipModule"],
                        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__["MatSnackBarModule"],
                        _angular_material_table__WEBPACK_IMPORTED_MODULE_25__["MatTableModule"],
                        _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__["MatSortModule"],
                        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__["MatPaginatorModule"]
                    ]
                },] }
    ];
    return MaterialModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// import { slideInAnimation } fro../../../../../contacts/src/app/route-container/animationsons';
var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(breakpointObserver, route) {
        this.breakpointObserver = breakpointObserver;
        this.route = route;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_39__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_33__["map"])(function (result) { return result.matches; }));
    }
    /**
     * @return {?}
     */
    NavigationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.route.data
            .subscribe(function (data) {
            _this.user = data.user;
            _this.menus = data.menus;
            _this.appModule = data.appModule;
        });
    };
    NavigationComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_40__["Component"], args: [{
                    selector: 'genesis-nav',
                    template: "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav\n    #drawer\n    class=\"sidenav\"\n    fixedInViewport=\"true\"\n    [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n    [opened]=\"!(isHandset$ | async)\"\n  >\n    <mat-toolbar\n      fxLayout=\"column\"\n      fxLayoutAlign=\"end start\"\n      fxLayoutGap=\"0px\"\n    >\n      <div\n        fxLayout=\"column\"\n        fxLayoutAlign=\"end start\"\n        fxLayoutGap=\"0px\"\n        class=\"user-info\"\n      >\n        <span class=\"mat-body\"><b>{{user.name}}</b></span>\n        <span class=\"mat-small\">{{user.email}}</span>\n      </div>\n    </mat-toolbar>\n    <mat-nav-list>\n      <a\n        mat-list-item\n        [routerLink]=\"m.path\"\n        routerLinkActive=\"active\"\n        *ngFor=\"let m of menus\"\n      >\n        <mat-icon mat-list-icon>{{m.icon}}</mat-icon> <span mat-line>{{m.name}}</span>\n      </a>\n      <mat-divider></mat-divider>\n      <h3 mat-subheader>More Info</h3>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar\n      color=\"primary\"\n      class=\"mat-elevation-z4\"\n    >\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        *ngIf=\"isHandset$ | async\"\n      >\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <span>{{appModule.toUpperCase()}}</span>\n    </mat-toolbar>\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n",
                    styles: [".sidenav-container{height:100vh}.sidenav{width:260px}.sidenav .mat-toolbar{background:inherit;height:180px;background:linear-gradient(0deg,rgba(69,79,168,.6) 68%,rgba(69,79,168,.6) 68%),url(/assets/back-nav.png);background-size:cover;background-position:center}.mat-toolbar.mat-primary{position:-webkit-sticky;position:sticky;top:0;z-index:1}mat-icon{color:rgba(0,0,0,.54)}.user-info{color:#f5f5f5}"]
                }] }
    ];
    /** @nocollapse */
    NavigationComponent.ctorParameters = function () { return [
        { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_39__["BreakpointObserver"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_36__["ActivatedRoute"] }
    ]; };
    return NavigationComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StorageService = /** @class */ (function () {
    function StorageService() {
    }
    /**
     *
     * @param {String} key
     * @returns {T}
     */
    /**
     *
     * @template T
     * @param {?} key
     * @return {?}
     */
    StorageService.prototype.getObject = /**
     *
     * @template T
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var val = localStorage.getItem(key);
        if (typeof val === undefined)
            return undefined;
        if (val === 'null')
            return null;
        if (val === 'undefined')
            return undefined;
        return JSON.parse(val);
    };
    /**
     *
     * @param {String} key
     * @returns {String}
     */
    /**
     *
     * @param {?} key
     * @return {?}
     */
    StorageService.prototype.getString = /**
     *
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return localStorage.getItem(key);
    };
    /**
     *
     * @param {String} key
     */
    /**
     *
     * @param {?} key
     * @return {?}
     */
    StorageService.prototype.remove = /**
     *
     * @param {?} key
     * @return {?}
     */
    function (key) {
        localStorage.removeItem(key);
    };
    /**
     *
     * @param {String} key
     * @param {T} data
     */
    /**
     *
     * @template T
     * @param {?} key
     * @param {?} data
     * @return {?}
     */
    StorageService.prototype.set = /**
     *
     * @template T
     * @param {?} key
     * @param {?} data
     * @return {?}
     */
    function (key, data) {
        /** @type {?} */
        var str;
        if (typeof data === 'object') {
            str = JSON.stringify(data);
        }
        else {
            str = data;
        }
        localStorage.setItem(key, (/** @type {?} */ (str)));
    };
    /**
     *
     * @param {String} key
     * @param {T} data
     * @param {StorageOptions} options
     */
    /**
     *
     * @template T
     * @param {?} key
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    StorageService.prototype.appendToLocal = /**
     *
     * @template T
     * @param {?} key
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    function (key, data, options) {
        /** @type {?} */
        var val = (/** @type {?} */ (this.getObject(key)));
        if (val === undefined || val === null)
            if (!options.createIfNotExist)
                return;
            else {
                if (options.type === 'object')
                    val = {};
                else if (options.type === 'array')
                    val = [];
                else {
                    throw new Error('Option.type not supproted : ' + options.type);
                }
            }
        if (Array.isArray(val)) {
            val.push(data);
        }
        else {
            if (typeof options.objPropName === 'undefined')
                throw new Error('options.objPropName cannot be undefined when setting type object');
            Object.defineProperty(val, options.objPropName, {
                value: data,
                writable: true,
                enumerable: true,
                configurable: true
            });
        }
        this.set(key, (/** @type {?} */ (val)));
    };
    StorageService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_40__["Injectable"], args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */ StorageService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_40__["defineInjectable"])({ factory: function StorageService_Factory() { return new StorageService(); }, token: StorageService, providedIn: "root" });
    return StorageService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HttpOptions = /** @class */ (function () {
    function HttpOptions() {
        this.params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_34__["HttpParams"]();
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_34__["HttpHeaders"]();
        return this;
    }
    /**
     * @param {...?} headers
     * @return {?}
     */
    HttpOptions.prototype.setHeader = /**
     * @param {...?} headers
     * @return {?}
     */
    function () {
        var _this = this;
        var headers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            headers[_i] = arguments[_i];
        }
        if (headers == null)
            return this;
        headers.forEach(function (h) { return _this.headers = _this.headers.set(h.key, h.value); });
        return this;
    };
    /**
     * @param {...?} params
     * @return {?}
     */
    HttpOptions.prototype.addParams = /**
     * @param {...?} params
     * @return {?}
     */
    function () {
        var _this = this;
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        // this.params.set = new Array(param.key, param.value);
        if (typeof params === 'undefined' || params == null)
            return this;
        params.forEach(function (p) {
            _this.params = _this.params.set(p.key, p.value);
        });
        return this;
    };
    /**
     * @return {?}
     */
    HttpOptions.prototype.getOptions = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var opt = {
            headers: this.headers,
            observe: this.observe,
            params: this.params,
            reportProgress: this.reportProgress,
            responseType: this.responseType,
            withCredentials: this.withCredentials
        };
        return opt;
    };
    return HttpOptions;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DataService = /** @class */ (function () {
    function DataService(http, storage, localStorageKey) {
        this.http = http;
        this.storage = storage;
        this.localStorageKey = localStorageKey;
        this._options = new HttpOptions()
            .setHeader({ key: 'Content-Type', value: 'application/json' });
        this._baseUrl = "https://my-json-server.typicode.com/bugMaker-237/angular7-starter-db/";
    }
    /**
     * @protected
     * @template T
     * @param {?} path
     * @param {...?} params
     * @return {?}
     */
    DataService.prototype.get = /**
     * @protected
     * @template T
     * @param {?} path
     * @param {...?} params
     * @return {?}
     */
    function (path) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var _a;
        return this.http.get(this._baseUrl + path, (_a = this._options).addParams.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_31__["__spread"])(params)).getOptions()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_33__["catchError"])(this.errorHandler("get")));
    };
    /**
     * @protected
     * @template T
     * @param {?} path
     * @param {?=} body
     * @param {...?} params
     * @return {?}
     */
    DataService.prototype.put = /**
     * @protected
     * @template T
     * @param {?} path
     * @param {?=} body
     * @param {...?} params
     * @return {?}
     */
    function (path, body) {
        if (body === void 0) { body = null; }
        var params = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            params[_i - 2] = arguments[_i];
        }
        var _a;
        return this.http.put(this._baseUrl + path, body, (_a = this._options).addParams.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_31__["__spread"])(params)).getOptions()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_33__["catchError"])(this.errorHandler("put")));
    };
    /**
     * @protected
     * @template T
     * @param {?} path
     * @param {?=} body
     * @param {...?} params
     * @return {?}
     */
    DataService.prototype.post = /**
     * @protected
     * @template T
     * @param {?} path
     * @param {?=} body
     * @param {...?} params
     * @return {?}
     */
    function (path, body) {
        if (body === void 0) { body = null; }
        var params = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            params[_i - 2] = arguments[_i];
        }
        var _a;
        return this.http.post(this._baseUrl + path, body, (_a = this._options).addParams.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_31__["__spread"])(params)).getOptions()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_33__["catchError"])(this.errorHandler("post")));
    };
    /**
     * @protected
     * @template T
     * @param {?} path
     * @param {?=} body
     * @param {...?} params
     * @return {?}
     */
    DataService.prototype.patch = /**
     * @protected
     * @template T
     * @param {?} path
     * @param {?=} body
     * @param {...?} params
     * @return {?}
     */
    function (path, body) {
        if (body === void 0) { body = null; }
        var params = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            params[_i - 2] = arguments[_i];
        }
        var _a;
        return this.http.patch(this._baseUrl + path, body, (_a = this._options).addParams.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_31__["__spread"])(params)).getOptions()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_33__["catchError"])(this.errorHandler("patch")));
    };
    /**
     * @protected
     * @template T
     * @param {?} path
     * @param {...?} params
     * @return {?}
     */
    DataService.prototype.head = /**
     * @protected
     * @template T
     * @param {?} path
     * @param {...?} params
     * @return {?}
     */
    function (path) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var _a;
        return this.http.head(this._baseUrl + path, (_a = this._options).addParams.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_31__["__spread"])(params)).getOptions()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_33__["catchError"])(this.errorHandler("head")));
    };
    /**
     * @protected
     * @template T
     * @param {?} path
     * @param {...?} params
     * @return {?}
     */
    DataService.prototype.options = /**
     * @protected
     * @template T
     * @param {?} path
     * @param {...?} params
     * @return {?}
     */
    function (path) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var _a;
        return this.http.options(this._baseUrl + path, (_a = this._options).addParams.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_31__["__spread"])(params)).getOptions()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_33__["catchError"])(this.errorHandler("options")));
    };
    /**
     * @protected
     * @param {?} path
     * @param {?} callBackParam
     * @return {?}
     */
    DataService.prototype.jsonp = /**
     * @protected
     * @param {?} path
     * @param {?} callBackParam
     * @return {?}
     */
    function (path, callBackParam) {
        return this.http.jsonp(this._baseUrl + path, callBackParam);
    };
    /**
     * @protected
     * @template T
     * @param {?} path
     * @param {...?} params
     * @return {?}
     */
    DataService.prototype.delete = /**
     * @protected
     * @template T
     * @param {?} path
     * @param {...?} params
     * @return {?}
     */
    function (path) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var _a;
        return this.http.delete(this._baseUrl + path, (_a = this._options).addParams.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_31__["__spread"])(params)).getOptions()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_33__["catchError"])(this.errorHandler("delete")));
    };
    /**
     * @private
     * @template T
     * @param {?} op
     * @return {?}
     */
    DataService.prototype.errorHandler = /**
     * @private
     * @template T
     * @param {?} op
     * @return {?}
     */
    function (op) {
        return function (err, caught) {
            // TODO: send the error to remote logging infrastructure
            console.error(err); // log to console instead
            // TODO: better job of transforming error for user consumption
            // this.log(`${op} failed: ${err.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_32__["of"])((/** @type {?} */ ({})));
        };
    };
    return DataService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UserService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_31__["__extends"])(UserService, _super);
    function UserService(http, storage) {
        var _this = _super.call(this, http, storage, 'User') || this;
        _this.http = http;
        _this.storage = storage;
        return _this;
    }
    /**
     * @param {?} userId
     * @return {?}
     */
    UserService.prototype.getUsermenus = /**
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        // return this.get<IUserMenu>('usermenus/' + userId)
        //     .pipe(map((ums: IUserMenu) => ums.menus));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_32__["of"])((/** @type {?} */ ([{
                "path": "/persons",
                "name": "Persons",
                "icon": "contacts"
            },
            {
                "path": "/enterprises",
                "name": "Enterprises",
                "icon": "business"
            },
            {
                "path": "/settings",
                "name": "settings",
                "icon": "settings"
            }
        ])));
    };
    /**
     * @return {?}
     */
    UserService.prototype.getUser = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var key = (/** @type {?} */ (this.localStorageKey));
        return this.storage.getObject(key);
    };
    UserService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_40__["Injectable"], args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_34__["HttpClient"] },
        { type: StorageService }
    ]; };
    /** @nocollapse */ UserService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_40__["defineInjectable"])({ factory: function UserService_Factory() { return new UserService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_40__["inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_34__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_40__["inject"])(StorageService)); }, token: UserService, providedIn: "root" });
    return UserService;
}(DataService));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = new Array();
        this.lastId = 0;
        this.messageWorker();
    }
    /**
     * @param {?} message
     * @return {?}
     */
    MessageService.prototype.push = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.messages.push({
            text: message.text,
            persit: message.persit,
            timeout: message.timeout,
            id: this.lastId
        });
        this.lastId++;
    };
    /**
     * @return {?}
     */
    MessageService.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.messages = [];
    };
    /**
     * @private
     * @return {?}
     */
    MessageService.prototype.messageWorker = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!MessageService.started) {
            MessageService.timer = window.setInterval(function (_) {
                if (_this.messages.length > 0) {
                    _this.show(_this.messages.pop());
                }
            }, MessageService.interval);
            MessageService.started = true;
        }
    };
    /**
     * @private
     * @return {?}
     */
    MessageService.destroyWorker = /**
     * @private
     * @return {?}
     */
    function () {
        clearInterval(MessageService.timer);
    };
    MessageService.started = false;
    MessageService.timer = 0;
    MessageService.interval = 400;
    return MessageService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ToastService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_31__["__extends"])(ToastService, _super);
    /**
     *
     */
    function ToastService(snackBarRef) {
        var _this = _super.call(this) || this;
        _this.snackBarRef = snackBarRef;
        return _this;
    }
    /**
     * @protected
     * @param {?} param
     * @return {?}
     */
    ToastService.prototype.show = /**
     * @protected
     * @param {?} param
     * @return {?}
     */
    function (param) {
        /** @type {?} */
        var conf = new _angular_material__WEBPACK_IMPORTED_MODULE_28__["MatSnackBarConfig"]();
        conf.duration = param.timeout;
        this.snackBarRef.open(param.text, null, conf);
    };
    ToastService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_40__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ToastService.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_28__["MatSnackBar"] }
    ]; };
    /** @nocollapse */ ToastService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_40__["defineInjectable"])({ factory: function ToastService_Factory() { return new ToastService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_40__["inject"])(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__["MatSnackBar"])); }, token: ToastService, providedIn: "root" });
    return ToastService;
}(MessageService));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DataService$1 = /** @class */ (function () {
    function DataService(http, storage, localStorageKey) {
        this.http = http;
        this.storage = storage;
        this.localStorageKey = localStorageKey;
        this._options = new HttpOptions()
            .setHeader({ key: 'Content-Type', value: 'application/json' });
        this._baseUrl = "https://my-json-server.typicode.com/bugMaker-237/angular7-starter-db/";
    }
    /**
     * @protected
     * @template T
     * @param {?} path
     * @param {...?} params
     * @return {?}
     */
    DataService.prototype.get = /**
     * @protected
     * @template T
     * @param {?} path
     * @param {...?} params
     * @return {?}
     */
    function (path) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var _a;
        return this.http.get(this._baseUrl + path, (_a = this._options).addParams.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_31__["__spread"])(params)).getOptions()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_33__["catchError"])(this.errorHandler("get")));
    };
    /**
     * @protected
     * @template T
     * @param {?} path
     * @param {?=} body
     * @param {...?} params
     * @return {?}
     */
    DataService.prototype.put = /**
     * @protected
     * @template T
     * @param {?} path
     * @param {?=} body
     * @param {...?} params
     * @return {?}
     */
    function (path, body) {
        if (body === void 0) { body = null; }
        var params = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            params[_i - 2] = arguments[_i];
        }
        var _a;
        return this.http.put(this._baseUrl + path, body, (_a = this._options).addParams.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_31__["__spread"])(params)).getOptions()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_33__["catchError"])(this.errorHandler("put")));
    };
    /**
     * @protected
     * @template T
     * @param {?} path
     * @param {?=} body
     * @param {...?} params
     * @return {?}
     */
    DataService.prototype.post = /**
     * @protected
     * @template T
     * @param {?} path
     * @param {?=} body
     * @param {...?} params
     * @return {?}
     */
    function (path, body) {
        if (body === void 0) { body = null; }
        var params = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            params[_i - 2] = arguments[_i];
        }
        var _a;
        return this.http.post(this._baseUrl + path, body, (_a = this._options).addParams.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_31__["__spread"])(params)).getOptions()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_33__["catchError"])(this.errorHandler("post")));
    };
    /**
     * @protected
     * @template T
     * @param {?} path
     * @param {?=} body
     * @param {...?} params
     * @return {?}
     */
    DataService.prototype.patch = /**
     * @protected
     * @template T
     * @param {?} path
     * @param {?=} body
     * @param {...?} params
     * @return {?}
     */
    function (path, body) {
        if (body === void 0) { body = null; }
        var params = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            params[_i - 2] = arguments[_i];
        }
        var _a;
        return this.http.patch(this._baseUrl + path, body, (_a = this._options).addParams.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_31__["__spread"])(params)).getOptions()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_33__["catchError"])(this.errorHandler("patch")));
    };
    /**
     * @protected
     * @template T
     * @param {?} path
     * @param {...?} params
     * @return {?}
     */
    DataService.prototype.head = /**
     * @protected
     * @template T
     * @param {?} path
     * @param {...?} params
     * @return {?}
     */
    function (path) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var _a;
        return this.http.head(this._baseUrl + path, (_a = this._options).addParams.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_31__["__spread"])(params)).getOptions()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_33__["catchError"])(this.errorHandler("head")));
    };
    /**
     * @protected
     * @template T
     * @param {?} path
     * @param {...?} params
     * @return {?}
     */
    DataService.prototype.options = /**
     * @protected
     * @template T
     * @param {?} path
     * @param {...?} params
     * @return {?}
     */
    function (path) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var _a;
        return this.http.options(this._baseUrl + path, (_a = this._options).addParams.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_31__["__spread"])(params)).getOptions()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_33__["catchError"])(this.errorHandler("options")));
    };
    /**
     * @protected
     * @param {?} path
     * @param {?} callBackParam
     * @return {?}
     */
    DataService.prototype.jsonp = /**
     * @protected
     * @param {?} path
     * @param {?} callBackParam
     * @return {?}
     */
    function (path, callBackParam) {
        return this.http.jsonp(this._baseUrl + path, callBackParam);
    };
    /**
     * @protected
     * @template T
     * @param {?} path
     * @param {...?} params
     * @return {?}
     */
    DataService.prototype.delete = /**
     * @protected
     * @template T
     * @param {?} path
     * @param {...?} params
     * @return {?}
     */
    function (path) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var _a;
        return this.http.delete(this._baseUrl + path, (_a = this._options).addParams.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_31__["__spread"])(params)).getOptions()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_33__["catchError"])(this.errorHandler("delete")));
    };
    /**
     * @private
     * @template T
     * @param {?} op
     * @return {?}
     */
    DataService.prototype.errorHandler = /**
     * @private
     * @template T
     * @param {?} op
     * @return {?}
     */
    function (op) {
        return function (err, caught) {
            // TODO: send the error to remote logging infrastructure
            console.error(err); // log to console instead
            // TODO: better job of transforming error for user consumption
            // this.log(`${op} failed: ${err.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_32__["of"])((/** @type {?} */ ({})));
        };
    };
    return DataService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var MessageService$1 = /** @class */ (function () {
    function MessageService() {
        this.messages = new Array();
        this.lastId = 0;
        this.messageWorker();
    }
    /**
     * @param {?} message
     * @return {?}
     */
    MessageService.prototype.push = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.messages.push({
            text: message.text,
            persit: message.persit,
            timeout: message.timeout,
            id: this.lastId
        });
        this.lastId++;
    };
    /**
     * @return {?}
     */
    MessageService.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.messages = [];
    };
    /**
     * @private
     * @return {?}
     */
    MessageService.prototype.messageWorker = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!MessageService.started) {
            MessageService.timer = window.setInterval(function (_) {
                if (_this.messages.length > 0) {
                    _this.show(_this.messages.pop());
                }
            }, MessageService.interval);
            MessageService.started = true;
        }
    };
    /**
     * @private
     * @return {?}
     */
    MessageService.destroyWorker = /**
     * @private
     * @return {?}
     */
    function () {
        clearInterval(MessageService.timer);
    };
    MessageService.started = false;
    MessageService.timer = 0;
    MessageService.interval = 400;
    return MessageService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var User = /** @class */ (function () {
    function User(user) {
        this.id = user.id;
        this.name = user.name;
        this.email = user.email;
        this.address = user.address;
        this.phone = user.phone;
        this.website = user.website;
        this.company = user.company;
        this.picture = "";
    }
    return User;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var Module = {
    Contacts: 0,
    Inventory: 1,
    Settings: 2,
};
Module[Module.Contacts] = 'Contacts';
Module[Module.Inventory] = 'Inventory';
Module[Module.Settings] = 'Settings';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AuthService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_31__["__extends"])(AuthService, _super);
    function AuthService(http, userService, storage) {
        var _this = _super.call(this, http, storage, 'User') || this;
        _this.http = http;
        _this.userService = userService;
        _this.storage = storage;
        _this.isLoggedIn = false;
        /** @type {?} */
        var user = _this.userService.getUser();
        _this.isLoggedIn = typeof user !== 'undefined' && user !== null && user !== undefined;
        return _this;
    }
    /**
     * @param {?} username
     * @param {?} password
     * @return {?}
     */
    AuthService.prototype.login = /**
     * @param {?} username
     * @param {?} password
     * @return {?}
     */
    function (username, password) {
        var _this = this;
        return this.get('users', { key: 'username', value: username })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_33__["map"])(function (u) {
            if (u && u.length > 0)
                return new User(u[0]);
            else
                return null;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_33__["tap"])(function (u) {
            if (!u || !u.id) {
                _this.isLoggedIn = false;
            }
            else {
                _this.isLoggedIn = true;
                _this.storage.set(_this.localStorageKey, u);
            }
        }));
    };
    /**
     * @return {?}
     */
    AuthService.prototype.logout = /**
     * @return {?}
     */
    function () {
        this.isLoggedIn = false;
    };
    AuthService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_40__["Injectable"], args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    AuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_34__["HttpClient"] },
        { type: UserService },
        { type: StorageService }
    ]; };
    /** @nocollapse */ AuthService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_40__["defineInjectable"])({ factory: function AuthService_Factory() { return new AuthService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_40__["inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_34__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_40__["inject"])(UserService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_40__["inject"])(StorageService)); }, token: AuthService, providedIn: "root" });
    return AuthService;
}(DataService$1));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, toastService) {
        this.authService = authService;
        this.router = router;
        this.toastService = toastService;
        this.hide = true;
        this.processing = false;
    }
    /**
     * @return {?}
     */
    LoginComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.username = new _angular_forms__WEBPACK_IMPORTED_MODULE_35__["FormControl"]({
            value: '',
            disabled: this.processing
        }, _angular_forms__WEBPACK_IMPORTED_MODULE_35__["Validators"].required);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_35__["FormControl"]({
            value: '',
            disabled: this.processing
        }, _angular_forms__WEBPACK_IMPORTED_MODULE_35__["Validators"].required);
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_35__["FormGroup"]({
            username: this.username,
            password: this.password,
        });
    };
    /**
     * @return {?}
     */
    LoginComponent.prototype.login = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.loginForm.valid) {
            this.password.disable();
            this.username.disable();
            this.processing = true;
            this.authService.login(this.username.value, this.password.value).subscribe(function () {
                if (_this.authService.isLoggedIn) {
                    console.log('connected');
                    /** @type {?} */
                    var redirect = _this.authService.redirectUrl ? _this.authService.redirectUrl : '';
                    /** @type {?} */
                    var navigationExtras = {
                        queryParamsHandling: 'preserve',
                        preserveFragment: true
                    };
                    // Redirect the user
                    _this.router.navigate([redirect], navigationExtras);
                    // this.processing = false;
                }
                else {
                    //Todo
                    _this.toastService.push({
                        text: 'Compte ou mot de passe incorrect!',
                        timeout: 1000,
                        persit: false
                    });
                    _this.processing = false;
                }
            }, function (error) {
                _this.toastService.push({
                    text: error.message,
                    timeout: 1000,
                    persit: false
                });
                _this.processing = false;
            });
        }
    };
    LoginComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_40__["Component"], args: [{
                    selector: 'genesis-login',
                    template: "<form\n  class=\"mat-elevation-z8\"\n  (ngSubmit)=\"login()\"\n  name=\"loginForm\"\n  [formGroup]=\"loginForm\"\n  fxLayout=\"column\"\n>\n  <img\n    mat-card-image\n    src=\"/assets/login.jpg\"\n    alt=\"Guard\"\n  >\n  <mat-progress-bar\n    class=\"example-margin\"\n    color=\"primary\"\n    mode=\"indeterminate\"\n    [style.display]=\"processing?'inherit':'none'\"\n  >\n  </mat-progress-bar>\n\n  <div\n    fxLayout=\"column\"\n    class=\"content  mat-app-background\"\n  >\n    <mat-form-field\n      appearance=\"fill\"\n      floatLabel=\"never\"\n    >\n      <mat-label>Username</mat-label>\n      <input\n        matInput\n        formControlName=\"username\"\n        required\n        name=\"username\"\n        placeholder=\"\"\n      >\n      <mat-icon matSuffix>person</mat-icon>\n    </mat-form-field>\n\n    <mat-form-field\n      appearance=\"fill\"\n      floatLabel=\"never\"\n    >\n      <mat-label>Password</mat-label>\n      <input\n        matInput\n        [type]=\"hide ? 'password' : 'text'\"\n        name=\"password\"\n        formControlName=\"password\"\n        required\n        placeholder=\"\"\n      >\n      <mat-icon\n        matSuffix\n        (click)=\"hide = !hide\"\n      >{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n    </mat-form-field>\n    <button\n      mat-raised-button\n      color=\"primary\"\n      type=\"submit\"\n      [disabled]=\"processing\"\n    >LOGIN</button>\n\n  </div>\n\n</form>\n",
                    styles: ["form{width:300px;border-radius:8px;background-color:#f5f5f5}form .content{padding:16px;border-radius:0 0 8px 8px}form .content button[type=submit]{width:100%;height:48px}form img{width:300px;height:200px;border-radius:8px 8px 0 0;-o-object-fit:cover;object-fit:cover}"]
                }] }
    ];
    /** @nocollapse */
    LoginComponent.ctorParameters = function () { return [
        { type: AuthService },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_36__["Router"] },
        { type: ToastService }
    ]; };
    return LoginComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AuthComponent = /** @class */ (function () {
    function AuthComponent() {
    }
    AuthComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_40__["Component"], args: [{
                    selector: 'genesis-auth',
                    template: "<div\r\n  fxLayout=\"row\"\r\n  fxLayoutAlign=\"center center\"\r\n  class=\"outer mat-app-background\"\r\n>\r\n  <div class=\"wrapper\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n",
                    styles: [".outer{height:100vh}"]
                }] }
    ];
    /** @nocollapse */
    AuthComponent.ctorParameters = function () { return []; };
    return AuthComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UserConnectedGuard = /** @class */ (function () {
    function UserConnectedGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    UserConnectedGuard.prototype.canActivate = /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    function (next, state) {
        /** @type {?} */
        var url;
        if (typeof next.url === 'undefined' || next.url === null || next.url === undefined)
            url = ['/'];
        else
            url = next.url;
        return this.checkLogin(url);
    };
    /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    UserConnectedGuard.prototype.canActivateChild = /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    function (next, state) {
        return this.canActivate(next, state);
    };
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    UserConnectedGuard.prototype.checkLogin = /**
     * @private
     * @param {?} url
     * @return {?}
     */
    function (url) {
        if (this.authService.isLoggedIn) {
            this.router.navigate(url);
            return false;
        }
        return true;
    };
    UserConnectedGuard.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_40__["Injectable"], args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    UserConnectedGuard.ctorParameters = function () { return [
        { type: AuthService },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_36__["Router"] }
    ]; };
    /** @nocollapse */ UserConnectedGuard.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_40__["defineInjectable"])({ factory: function UserConnectedGuard_Factory() { return new UserConnectedGuard(Object(_angular_core__WEBPACK_IMPORTED_MODULE_40__["inject"])(AuthService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_40__["inject"])(_angular_router__WEBPACK_IMPORTED_MODULE_36__["Router"])); }, token: UserConnectedGuard, providedIn: "root" });
    return UserConnectedGuard;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var authRoutes = [{
        path: 'auth',
        component: AuthComponent,
        canActivate: [UserConnectedGuard],
        children: [
            {
                path: '',
                canActivateChild: [UserConnectedGuard],
                children: [
                    {
                        path: 'login',
                        component: LoginComponent
                    }
                ]
            }
        ]
    }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_40__["NgModule"], args: [{
                    imports: [
                        _angular_router__WEBPACK_IMPORTED_MODULE_36__["RouterModule"].forChild(authRoutes)
                    ],
                    exports: [
                        _angular_router__WEBPACK_IMPORTED_MODULE_36__["RouterModule"]
                    ]
                },] }
    ];
    return AuthRoutingModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    AuthGuard.prototype.canActivate = /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    function (next, state) {
        /** @type {?} */
        var url = state.url;
        return this.checkLogin(url);
    };
    /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    AuthGuard.prototype.canActivateChild = /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    function (next, state) {
        return this.canActivate(next, state);
    };
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    AuthGuard.prototype.checkLogin = /**
     * @private
     * @param {?} url
     * @return {?}
     */
    function (url) {
        if (this.authService.isLoggedIn)
            return true;
        // Store the attempted URL for redirecting
        this.authService.redirectUrl = url;
        // Navigate to the login page with extras
        this.router.navigate(['/auth/login']);
        return false;
    };
    AuthGuard.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_40__["Injectable"], args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    AuthGuard.ctorParameters = function () { return [
        { type: AuthService },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_36__["Router"] }
    ]; };
    /** @nocollapse */ AuthGuard.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_40__["defineInjectable"])({ factory: function AuthGuard_Factory() { return new AuthGuard(Object(_angular_core__WEBPACK_IMPORTED_MODULE_40__["inject"])(AuthService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_40__["inject"])(_angular_router__WEBPACK_IMPORTED_MODULE_36__["Router"])); }, token: AuthGuard, providedIn: "root" });
    return AuthGuard;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_40__["NgModule"], args: [{
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_37__["BrowserModule"],
                        _angular_common__WEBPACK_IMPORTED_MODULE_30__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_35__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_35__["ReactiveFormsModule"],
                        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_39__["LayoutModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_38__["FlexLayoutModule"],
                        MaterialModule,
                        AuthRoutingModule
                    ],
                    declarations: [
                        AuthComponent,
                        LoginComponent
                    ],
                    providers: [AuthGuard]
                },] }
    ];
    return AuthModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GenesisModule = /** @class */ (function () {
    function GenesisModule() {
    }
    GenesisModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_40__["NgModule"], args: [{
                    declarations: [
                        NavigationComponent
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_37__["BrowserModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_36__["RouterModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_34__["HttpClientModule"],
                        MaterialModule,
                        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_39__["LayoutModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_38__["FlexLayoutModule"],
                        AuthModule
                    ],
                    exports: [
                        NavigationComponent,
                        AuthModule,
                        MaterialModule
                    ],
                    providers: [StorageService, UserService, ToastService]
                },] }
    ];
    return GenesisModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StorageService$1 = /** @class */ (function () {
    function StorageService() {
    }
    /**
     *
     * @param {String} key
     * @returns {T}
     */
    /**
     *
     * @template T
     * @param {?} key
     * @return {?}
     */
    StorageService.prototype.getObject = /**
     *
     * @template T
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var val = localStorage.getItem(key);
        if (typeof val === undefined)
            return undefined;
        if (val === 'null')
            return null;
        if (val === 'undefined')
            return undefined;
        return JSON.parse(val);
    };
    /**
     *
     * @param {String} key
     * @returns {String}
     */
    /**
     *
     * @param {?} key
     * @return {?}
     */
    StorageService.prototype.getString = /**
     *
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return localStorage.getItem(key);
    };
    /**
     *
     * @param {String} key
     */
    /**
     *
     * @param {?} key
     * @return {?}
     */
    StorageService.prototype.remove = /**
     *
     * @param {?} key
     * @return {?}
     */
    function (key) {
        localStorage.removeItem(key);
    };
    /**
     *
     * @param {String} key
     * @param {T} data
     */
    /**
     *
     * @template T
     * @param {?} key
     * @param {?} data
     * @return {?}
     */
    StorageService.prototype.set = /**
     *
     * @template T
     * @param {?} key
     * @param {?} data
     * @return {?}
     */
    function (key, data) {
        /** @type {?} */
        var str;
        if (typeof data === 'object') {
            str = JSON.stringify(data);
        }
        else {
            str = data;
        }
        localStorage.setItem(key, (/** @type {?} */ (str)));
    };
    /**
     *
     * @param {String} key
     * @param {T} data
     * @param {StorageOptions} options
     */
    /**
     *
     * @template T
     * @param {?} key
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    StorageService.prototype.appendToLocal = /**
     *
     * @template T
     * @param {?} key
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    function (key, data, options) {
        /** @type {?} */
        var val = (/** @type {?} */ (this.getObject(key)));
        if (val === undefined || val === null)
            if (!options.createIfNotExist)
                return;
            else {
                if (options.type === 'object')
                    val = {};
                else if (options.type === 'array')
                    val = [];
                else {
                    throw new Error('Option.type not supproted : ' + options.type);
                }
            }
        if (Array.isArray(val)) {
            val.push(data);
        }
        else {
            if (typeof options.objPropName === 'undefined')
                throw new Error('options.objPropName cannot be undefined when setting type object');
            Object.defineProperty(val, options.objPropName, {
                value: data,
                writable: true,
                enumerable: true,
                configurable: true
            });
        }
        this.set(key, (/** @type {?} */ (val)));
    };
    StorageService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_40__["Injectable"], args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */ StorageService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_40__["defineInjectable"])({ factory: function StorageService_Factory() { return new StorageService(); }, token: StorageService, providedIn: "root" });
    return StorageService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=genesis.js.map

/***/ }),

/***/ "../../environments/environment.ts":
/*!*******************************************************************!*\
  !*** D:/MY PROJECTS/angular7-starter/environments/environment.ts ***!
  \*******************************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    hmr: false
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

/***/ "../hmr.ts":
/*!*****************!*\
  !*** ../hmr.ts ***!
  \*****************/
/*! exports provided: hmrBootstrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hmrBootstrap", function() { return hmrBootstrap; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angularclass/hmr */ "../../node_modules/@angularclass/hmr/dist/index.js");
/* harmony import */ var _angularclass_hmr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__);


var hmrBootstrap = function (module, bootstrap) {
    var ngModule;
    module.hot.accept();
    bootstrap().then(function (mod) { return (ngModule = mod); });
    module.hot.dispose(function () {
        var appRef = ngModule.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]);
        var elements = appRef.components.map(function (c) { return c.location.nativeElement; });
        var makeVisible = Object(_angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__["createNewHosts"])(elements);
        ngModule.destroy();
        makeVisible();
    });
};


/***/ }),

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _persons_persons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./persons/persons.component */ "./src/app/persons/persons.component.ts");
/* harmony import */ var _genesis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @genesis */ "../../dist/genesis/fesm5/genesis.js");
/* harmony import */ var _user_connected_resolver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-connected-resolver.service */ "./src/app/user-connected-resolver.service.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _route_animator_route_animator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./route-animator/route-animator.component */ "./src/app/route-animator/route-animator.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        canActivate: [_genesis__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        component: _genesis__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"],
        data: {
            appModule: 'Contacts'
        },
        resolve: {
            user: _user_connected_resolver_service__WEBPACK_IMPORTED_MODULE_4__["UserConnectedResolverService"],
            menus: _user_connected_resolver_service__WEBPACK_IMPORTED_MODULE_4__["UserMenusResolverService"]
        },
        children: [
            {
                path: '',
                canActivateChild: [_genesis__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
                component: _route_animator_route_animator_component__WEBPACK_IMPORTED_MODULE_6__["RouteAnimatorComponent"],
                children: [
                    {
                        path: 'persons',
                        component: _persons_persons_component__WEBPACK_IMPORTED_MODULE_2__["PersonsComponent"],
                        data: {
                            animation: 'persons'
                        }
                    },
                    {
                        path: '',
                        component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                        data: {
                            animation: 'home'
                        }
                    },
                    {
                        path: '**',
                        redirectTo: ''
                    }
                ]
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9jb250YWN0cy9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _genesis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @genesis */ "../../dist/genesis/fesm5/genesis.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(toastRef) {
        this.toastRef = toastRef;
        this.title = 'contacts';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: "<router-outlet></router-outlet>",
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_genesis__WEBPACK_IMPORTED_MODULE_1__["ToastService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _persons_persons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./persons/persons.component */ "./src/app/persons/persons.component.ts");
/* harmony import */ var _genesis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @genesis */ "../../dist/genesis/fesm5/genesis.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "../../node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _route_animator_route_animator_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./route-animator/route-animator.component */ "./src/app/route-animator/route-animator.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _persons_persons_component__WEBPACK_IMPORTED_MODULE_4__["PersonsComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _route_animator_route_animator_component__WEBPACK_IMPORTED_MODULE_10__["RouteAnimatorComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _genesis__WEBPACK_IMPORTED_MODULE_5__["GenesisModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  fxLayout=\"row\"\n  fxLayoutAlign=\"center center\"\n  fxLayoutGap=\"0px\"\n>\n  <img\n    width=\"300\"\n    alt=\"Angular Logo\"\n    class=\"logo\"\n    src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\"\n  >\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  margin-top: 32px;\n  -webkit-filter: invert(0.3);\n          filter: invert(0.3);\n  width: 300px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2NvbnRhY3RzL3NyYy9hcHAvaG9tZS9EOlxcTVkgUFJPSkVDVFNcXGFuZ3VsYXI3LXN0YXJ0ZXIvcHJvamVjdHNcXGNvbnRhY3RzXFxzcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFnQjtFQUNoQiw0QkFBa0I7VUFBbEIsb0JBQWtCO0VBQ2xCLGFBQVksRUFDYiIsImZpbGUiOiJwcm9qZWN0cy9jb250YWN0cy9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcclxuICBtYXJnaW4tdG9wOiAzMnB4O1xyXG4gIGZpbHRlcjogaW52ZXJ0KC4zKTtcclxuICB3aWR0aDogMzAwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/persons/persons.component.html":
/*!************************************************!*\
  !*** ./src/app/persons/persons.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  fxLayout=\"row\"\n  fxLayoutAlign=\"center center\"\n  fxLayoutGap=\"0px\"\n  class=\"content\"\n>\n  <div fxLayout=\"column\">\n    <mat-form-field>\n      <input\n        matInput\n        (keyup)=\"applyFilter($event.target.value)\"\n        placeholder=\"Filter\"\n      >\n    </mat-form-field>\n    <div\n      class=\"mat-elevation-z8\"\n      fxLayout=\"column\"\n    >\n      <div class=\"tabParent\">\n        <table\n          mat-table\n          #table\n          matSort\n          fxFlex\n          [dataSource]=\"dataSource\"\n        >\n\n          <ng-container matColumnDef=\"select\">\n            <th\n              mat-header-cell\n              *matHeaderCellDef\n            >\n              <mat-checkbox\n                (change)=\"$event ? masterToggle() : null\"\n                [checked]=\"selection.hasValue() && isAllSelected()\"\n                [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\n              >\n              </mat-checkbox>\n            </th>\n            <td\n              mat-cell\n              *matCellDef=\"let row\"\n            >\n              <mat-checkbox\n                (click)=\"$event.stopPropagation()\"\n                (change)=\"$event ? selection.toggle(row) : null\"\n                [checked]=\"selection.isSelected(row)\"\n              >\n              </mat-checkbox>\n            </td>\n          </ng-container>\n\n          <!-- Position Column -->\n          <ng-container matColumnDef=\"position\">\n            <th\n              mat-header-cell\n              *matHeaderCellDef\n            > No. </th>\n            <td\n              mat-cell\n              *matCellDef=\"let element\"\n            > {{element.position}} </td>\n          </ng-container>\n\n          <!-- Name Column -->\n          <ng-container matColumnDef=\"name\">\n            <th\n              mat-header-cell\n              *matHeaderCellDef\n              mat-sort-header\n            > Name </th>\n            <td\n              mat-cell\n              *matCellDef=\"let element\"\n            > {{element.name}} </td>\n          </ng-container>\n\n          <!-- Weight Column -->\n          <ng-container matColumnDef=\"weight\">\n            <th\n              mat-header-cell\n              *matHeaderCellDef\n            > Weight </th>\n            <td\n              mat-cell\n              *matCellDef=\"let element\"\n            > {{element.weight}} </td>\n          </ng-container>\n\n          <!-- Symbol Column -->\n          <ng-container matColumnDef=\"symbol\">\n            <th\n              mat-header-cell\n              *matHeaderCellDef\n            > Symbol </th>\n            <td\n              mat-cell\n              *matCellDef=\"let element\"\n            > {{element.symbol}} </td>\n          </ng-container>\n\n          <tr\n            mat-header-row\n            *matHeaderRowDef=\"displayedColumns;  sticky: true\"\n          ></tr>\n          <tr\n            mat-row\n            *matRowDef=\"let row; columns: displayedColumns;\"\n          ></tr>\n        </table>\n      </div>\n      <mat-paginator\n        [pageSizeOptions]=\"[5, 10, 20]\"\n        showFirstLastButtons\n      ></mat-paginator>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/persons/persons.component.scss":
/*!************************************************!*\
  !*** ./src/app/persons/persons.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  padding: 32px; }\n  .content .mat-form-field {\n    font-size: 14px;\n    width: 100%; }\n  .content > div {\n    min-width: 100%; }\n  .content > div .tabParent {\n      overflow: auto; }\n  .content > div table {\n      width: 100%;\n      min-width: 500px; }\n  .content > div table .mat-table-sticky {\n        background-color: #e0e0e0; }\n  .content > div .mat-column-select {\n      overflow: initial; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2NvbnRhY3RzL3NyYy9hcHAvcGVyc29ucy9EOlxcTVkgUFJPSkVDVFNcXGFuZ3VsYXI3LXN0YXJ0ZXIvcHJvamVjdHNcXGNvbnRhY3RzXFxzcmNcXGFwcFxccGVyc29uc1xccGVyc29ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWEsRUEyQmQ7RUE1QkQ7SUFJSSxnQkFBZTtJQUNmLFlBQVcsRUFDWjtFQU5IO0lBU0ksZ0JBQWUsRUFrQmhCO0VBM0JIO01BWU0sZUFBYyxFQUNmO0VBYkw7TUFnQk0sWUFBVztNQUNYLGlCQUFnQixFQUtqQjtFQXRCTDtRQW9CUSwwQkFBeUIsRUFDMUI7RUFyQlA7TUF5Qk0sa0JBQWlCLEVBQ2xCIiwiZmlsZSI6InByb2plY3RzL2NvbnRhY3RzL3NyYy9hcHAvcGVyc29ucy9wZXJzb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDMycHg7XHJcblxyXG4gIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gID5kaXYge1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG5cclxuICAgIC50YWJQYXJlbnQge1xyXG4gICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICB0YWJsZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtaW4td2lkdGg6IDUwMHB4O1xyXG5cclxuICAgICAgLm1hdC10YWJsZS1zdGlja3kge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubWF0LWNvbHVtbi1zZWxlY3Qge1xyXG4gICAgICBvdmVyZmxvdzogaW5pdGlhbDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/persons/persons.component.ts":
/*!**********************************************!*\
  !*** ./src/app/persons/persons.component.ts ***!
  \**********************************************/
/*! exports provided: PersonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonsComponent", function() { return PersonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "../../node_modules/@angular/cdk/esm5/collections.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PersonsComponent = /** @class */ (function () {
    function PersonsComponent() {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
        this.displayedColumns = ['select', 'position', 'name', 'weight', 'symbol'];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](true, []);
    }
    PersonsComponent.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
    };
    PersonsComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    /** Whether the number of selected elements matches the total number of rows. */
    PersonsComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected == numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    PersonsComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], PersonsComponent.prototype, "paginator", void 0);
    PersonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-persons',
            template: __webpack_require__(/*! ./persons.component.html */ "./src/app/persons/persons.component.html"),
            styles: [__webpack_require__(/*! ./persons.component.scss */ "./src/app/persons/persons.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PersonsComponent);
    return PersonsComponent;
}());

var ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];


/***/ }),

/***/ "./src/app/route-animator/animations.ts":
/*!**********************************************!*\
  !*** ./src/app/route-animator/animations.ts ***!
  \**********************************************/
/*! exports provided: slideInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInAnimation", function() { return slideInAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "../../node_modules/@angular/animations/fesm5/animations.js");

var animatedRoutes = [
    'home <=> persons'
];
// Routable animations
var slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(animatedRoutes.join(','), [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ top: '100px', opacity: 0 })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ top: '100px', opacity: 0 }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ bottom: 0, top: 0, opacity: 1 }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ])
]);


/***/ }),

/***/ "./src/app/route-animator/route-animator.component.ts":
/*!************************************************************!*\
  !*** ./src/app/route-animator/route-animator.component.ts ***!
  \************************************************************/
/*! exports provided: RouteAnimatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteAnimatorComponent", function() { return RouteAnimatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animations */ "./src/app/route-animator/animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RouteAnimatorComponent = /** @class */ (function () {
    function RouteAnimatorComponent() {
    }
    RouteAnimatorComponent.prototype.ngOnInit = function () {
    };
    RouteAnimatorComponent.prototype.getAnimationData = function (outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    };
    RouteAnimatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-route-container',
            template: "<div [@routeAnimation]=\"getAnimationData(routerOutlet)\">\n              <router-outlet #routerOutlet=\"outlet\"></router-outlet>\n            </div>",
            animations: [_animations__WEBPACK_IMPORTED_MODULE_1__["slideInAnimation"]]
        }),
        __metadata("design:paramtypes", [])
    ], RouteAnimatorComponent);
    return RouteAnimatorComponent;
}());



/***/ }),

/***/ "./src/app/user-connected-resolver.service.ts":
/*!****************************************************!*\
  !*** ./src/app/user-connected-resolver.service.ts ***!
  \****************************************************/
/*! exports provided: UserConnectedResolverService, UserMenusResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserConnectedResolverService", function() { return UserConnectedResolverService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMenusResolverService", function() { return UserMenusResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _genesis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @genesis */ "../../dist/genesis/fesm5/genesis.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserConnectedResolverService = /** @class */ (function () {
    function UserConnectedResolverService(userService) {
        this.userService = userService;
    }
    UserConnectedResolverService.prototype.resolve = function (route, state) {
        return this.userService.getUser();
    };
    UserConnectedResolverService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_genesis__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], UserConnectedResolverService);
    return UserConnectedResolverService;
}());

var UserMenusResolverService = /** @class */ (function () {
    function UserMenusResolverService(userService) {
        this.userService = userService;
    }
    UserMenusResolverService.prototype.resolve = function (route, state) {
        var u = this.userService.getUser();
        return this.userService.getUsermenus(u.id);
    };
    UserMenusResolverService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_genesis__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], UserMenusResolverService);
    return UserMenusResolverService;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "../../environments/environment.ts");
/* harmony import */ var _hmr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hmr */ "../hmr.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hammerjs */ "../../node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);






if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
var bootstrap = function () { return Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__["AppModule"]); };
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].hmr) {
    if (false) {}
    else {
        console.error('HMR is not enabled for webpack-dev-server!');
        console.log('Are you using the --hmr flag for ng serve?');
    }
}
else {
    bootstrap().catch(function (err) { return console.log(err); });
}
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\MY PROJECTS\angular7-starter\projects\contacts\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map