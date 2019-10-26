(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Container-ercot-forcaster-tool-esiid-discrepancy-module"],{

/***/ "./src/app/Container/ercot/forcaster-tool/esiid-discrepancy/module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/Container/ercot/forcaster-tool/esiid-discrepancy/module.ts ***!
  \****************************************************************************/
/*! exports provided: Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routing */ "./src/app/Container/ercot/forcaster-tool/esiid-discrepancy/routing.ts");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../app-material.module */ "./src/app/app-material.module.ts");
/* harmony import */ var _esiid_discrepancy_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./esiid-discrepancy.component */ "./src/app/Container/ercot/forcaster-tool/esiid-discrepancy/esiid-discrepancy.component.ts");






var Module = /** @class */ (function () {
    function Module() {
    }
    Module = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _esiid_discrepancy_component__WEBPACK_IMPORTED_MODULE_5__["EsiidDiscrepancyComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _app_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _routing__WEBPACK_IMPORTED_MODULE_3__["RoutingModule"]
            ],
            entryComponents: [],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]
            ],
        })
    ], Module);
    return Module;
}());



/***/ }),

/***/ "./src/app/Container/ercot/forcaster-tool/esiid-discrepancy/routing.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/Container/ercot/forcaster-tool/esiid-discrepancy/routing.ts ***!
  \*****************************************************************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../index */ "./src/app/Container/index.ts");




var routes = [
    { path: '', component: _index__WEBPACK_IMPORTED_MODULE_3__["Containers"].EsiidDiscrepancyComponent },
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=Container-ercot-forcaster-tool-esiid-discrepancy-module.js.map