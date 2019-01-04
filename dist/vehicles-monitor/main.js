(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./vehicles/vehicles.module": [
		"./src/app/vehicles/vehicles.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: 'vehicles',
        loadChildren: './vehicles/vehicles.module#VehiclesModule'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'vehicles-monitor';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'veh-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _vehicles_vehicles_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vehicles/vehicles.module */ "./src/app/vehicles/vehicles.module.ts");
/* harmony import */ var _store_store_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store/store.module */ "./src/app/store/store.module.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");












var AppModule = /** @class */ (function () {
    function AppModule(translate) {
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('sv');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('sv');
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                // angular
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                // Modules
                _vehicles_vehicles_module__WEBPACK_IMPORTED_MODULE_8__["VehiclesModule"],
                // Core, Shared
                _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                // App
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                //store
                _store_store_module__WEBPACK_IMPORTED_MODULE_9__["VehiclesStoreModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/core-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/core/core-routing.module.ts ***!
  \*********************************************/
/*! exports provided: CoreRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreRoutingModule", function() { return CoreRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var CoreRoutingModule = /** @class */ (function () {
    function CoreRoutingModule() {
    }
    CoreRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CoreRoutingModule);
    return CoreRoutingModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core-routing.module */ "./src/app/core/core-routing.module.ts");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/layout.module */ "./src/app/core/layout/layout.module.ts");
/* harmony import */ var _firebase_firebase_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./firebase/firebase.module */ "./src/app/core/firebase/firebase.module.ts");






var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"],
                _core_routing_module__WEBPACK_IMPORTED_MODULE_3__["CoreRoutingModule"],
                _firebase_firebase_module__WEBPACK_IMPORTED_MODULE_5__["FirebaseModule"]
            ],
            exports: [
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"],
                _core_routing_module__WEBPACK_IMPORTED_MODULE_3__["CoreRoutingModule"],
                _firebase_firebase_module__WEBPACK_IMPORTED_MODULE_5__["FirebaseModule"]
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/firebase/firebase-backend-simulator/firebase-backend-simulator.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/core/firebase/firebase-backend-simulator/firebase-backend-simulator.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/firebase/firebase-backend-simulator/firebase-backend-simulator.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/core/firebase/firebase-backend-simulator/firebase-backend-simulator.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZmlyZWJhc2UvZmlyZWJhc2UtYmFja2VuZC1zaW11bGF0b3IvZmlyZWJhc2UtYmFja2VuZC1zaW11bGF0b3IuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/core/firebase/firebase-backend-simulator/firebase-backend-simulator.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/core/firebase/firebase-backend-simulator/firebase-backend-simulator.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: FirebaseBackendSimulatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseBackendSimulatorComponent", function() { return FirebaseBackendSimulatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase.service */ "./src/app/core/firebase/firebase.service.ts");
/* harmony import */ var src_app_store_vehicles_all_vehicles_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/vehicles/all-vehicles/state-service */ "./src/app/store/vehicles/all-vehicles/state-service.ts");




var FirebaseBackendSimulatorComponent = /** @class */ (function () {
    function FirebaseBackendSimulatorComponent(fbService, stateService) {
        this.fbService = fbService;
        this.stateService = stateService;
    }
    Object.defineProperty(FirebaseBackendSimulatorComponent.prototype, "isUpdateRandomVehicles", {
        set: function (val) {
            var _this = this;
            if (val) {
                this.timer = setInterval(function () {
                    _this.updateRandomVehicleStatus();
                }, 500);
            }
            else {
                clearInterval(this.timer);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseBackendSimulatorComponent.prototype, "isStartListening", {
        set: function (val) {
            if (val) {
                this.startListening();
            }
            else {
                this.stopListening();
            }
        },
        enumerable: true,
        configurable: true
    });
    FirebaseBackendSimulatorComponent.prototype.ngOnInit = function () {
        this.getLookups();
    };
    FirebaseBackendSimulatorComponent.prototype.getLookups = function () {
        var _this = this;
        this.fbService.getAllVehicles().subscribe(function (v) {
            _this.allVehicles = (v.val()[0]) ? v.val() : v.val().slice(1);
            _this.stateService.dispatcLoadInitial(_this.allVehicles);
        });
        this.fbService.getAllStatus().subscribe(function (s) {
            _this.allStatus = s.val();
        });
    };
    FirebaseBackendSimulatorComponent.prototype.updateRandomVehicleStatus = function () {
        var randNumForVeh = Math.floor(Math.random() * ((Object.keys(this.allVehicles)).length - 2));
        var vehicleID = (this.allVehicles[randNumForVeh]) ? this.allVehicles[randNumForVeh].id : 1;
        var randNumForStatus = Math.floor(Math.random() * (this.allStatus.length - 1));
        var statusID = (this.allStatus[randNumForStatus]) ? this.allStatus[randNumForStatus].id : 1;
        this.fbService.updateVehicleStatus(vehicleID, statusID);
    };
    FirebaseBackendSimulatorComponent.prototype.startListening = function () {
        this.fbService.turnOnNotification();
    };
    FirebaseBackendSimulatorComponent.prototype.stopListening = function () {
        this.fbService.turnOffNotification();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], FirebaseBackendSimulatorComponent.prototype, "isUpdateRandomVehicles", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], FirebaseBackendSimulatorComponent.prototype, "isStartListening", null);
    FirebaseBackendSimulatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'veh-firebase-backend-simulator',
            template: __webpack_require__(/*! ./firebase-backend-simulator.component.html */ "./src/app/core/firebase/firebase-backend-simulator/firebase-backend-simulator.component.html"),
            styles: [__webpack_require__(/*! ./firebase-backend-simulator.component.scss */ "./src/app/core/firebase/firebase-backend-simulator/firebase-backend-simulator.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"], src_app_store_vehicles_all_vehicles_state_service__WEBPACK_IMPORTED_MODULE_3__["VehiclesStateService"]])
    ], FirebaseBackendSimulatorComponent);
    return FirebaseBackendSimulatorComponent;
}());



/***/ }),

/***/ "./src/app/core/firebase/firebase.module.ts":
/*!**************************************************!*\
  !*** ./src/app/core/firebase/firebase.module.ts ***!
  \**************************************************/
/*! exports provided: FirebaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseModule", function() { return FirebaseModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firebase.service */ "./src/app/core/firebase/firebase.service.ts");
/* harmony import */ var _firebase_backend_simulator_firebase_backend_simulator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./firebase-backend-simulator/firebase-backend-simulator.component */ "./src/app/core/firebase/firebase-backend-simulator/firebase-backend-simulator.component.ts");





var FirebaseModule = /** @class */ (function () {
    function FirebaseModule() {
    }
    FirebaseModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_firebase_backend_simulator_firebase_backend_simulator_component__WEBPACK_IMPORTED_MODULE_4__["FirebaseBackendSimulatorComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            providers: [
                _firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"]
            ],
            exports: [_firebase_backend_simulator_firebase_backend_simulator_component__WEBPACK_IMPORTED_MODULE_4__["FirebaseBackendSimulatorComponent"]]
        })
    ], FirebaseModule);
    return FirebaseModule;
}());



/***/ }),

/***/ "./src/app/core/firebase/firebase.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/firebase/firebase.service.ts ***!
  \***************************************************/
/*! exports provided: FirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function() { return FirebaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/database */ "./node_modules/firebase/database/dist/index.esm.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_store_vehicles_all_vehicles_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/store/vehicles/all-vehicles/state-service */ "./src/app/store/vehicles/all-vehicles/state-service.ts");






var FirebaseService = /** @class */ (function () {
    function FirebaseService(stateService) {
        this.stateService = stateService;
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyBT33oTNXihG0MU78PMUuFxR6KxijyDYRs",
            authDomain: "vehicles-monitor.firebaseapp.com",
            databaseURL: "https://vehicles-monitor.firebaseio.com",
            projectId: "vehicles-monitor",
            storageBucket: "vehicles-monitor.appspot.com",
            messagingSenderId: "992146194138"
        };
        firebase_app__WEBPACK_IMPORTED_MODULE_2__["initializeApp"](config);
        this.db = firebase_app__WEBPACK_IMPORTED_MODULE_2__["database"]();
    }
    FirebaseService.prototype.getAllClients = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.db.ref('clients').once('value'));
    };
    FirebaseService.prototype.getAllStatus = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.db.ref('status').once('value'));
    };
    FirebaseService.prototype.getAllVehicles = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.db.ref('vehicles').once('value'));
    };
    FirebaseService.prototype.updateVehicleStatus = function (vehicleID, status) {
        this.db.ref('vehicles/' + vehicleID).update({ status: status }, function (error) {
            if (error) {
                console.error(error);
            }
        });
    };
    FirebaseService.prototype.turnOnNotification = function () {
        var _this = this;
        this.db.ref('vehicles').on('child_changed', function (snapshot) {
            var updates = snapshot.val();
            _this.stateService.dispatchUpdateSuccess(updates);
        });
    };
    FirebaseService.prototype.turnOffNotification = function () {
        this.db.ref('vehicles').off('child_changed');
    };
    FirebaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_store_vehicles_all_vehicles_state_service__WEBPACK_IMPORTED_MODULE_5__["VehiclesStateService"]])
    ], FirebaseService);
    return FirebaseService;
}());



/***/ }),

/***/ "./src/app/core/layout/components/sidebar/sidebar.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/core/layout/components/sidebar/sidebar.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- sidebar -->\r\n<!-- ============================================================== -->\r\n<div class=\"user-profile\" style=\"background: url(assets/images/background/bg.jpg) no-repeat;background-size: cover;background-repeat: no-repeat;background-position: center center;\">\r\n  <!-- User profile image -->\r\n  <div class=\"profile-img\"> <img src=\"assets/images/users/profile.png\" alt=\"user\"> </div>\r\n  <!-- User profile text-->\r\n  <!-- ============================================================== -->\r\n  <!-- Profile - style you can find in header.scss -->\r\n  <!-- ============================================================== -->\r\n  <div class=\"profile-text\"><a class=\"\"> Sameh Felimon <i class=\"ti-angle-down font-12 m-l-5\"></i></a></div>\r\n \r\n  \r\n</div>\r\n<mat-nav-list appAccordion>\r\n  <mat-list-item appAccordionLink  routerLinkActive=\"selected\">\r\n      <a class=\"\" appAccordionToggle [routerLink]=\"['/dashboard']\">\r\n          <mat-icon>dashboard</mat-icon> \r\n          <span>{{ 'layout.menu.dashboard' | translate }}</span> \r\n          <span fxFlex></span> \r\n      </a>\r\n  </mat-list-item>\r\n\r\n  <mat-list-item appAccordionLink  routerLinkActive=\"selected\">\r\n      <a class=\"\" appAccordionToggle [routerLink]=\"['/vehicles']\">\r\n          <mat-icon>local_car_wash</mat-icon> \r\n          <span>{{ 'layout.menu.vehicles-list' | translate }}</span> \r\n          <span fxFlex></span> \r\n      </a>\r\n  </mat-list-item>\r\n\r\n</mat-nav-list>"

/***/ }),

/***/ "./src/app/core/layout/components/sidebar/sidebar.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/core/layout/components/sidebar/sidebar.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbGF5b3V0L2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/layout/components/sidebar/sidebar.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/core/layout/components/sidebar/sidebar.component.ts ***!
  \*********************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/menu-items/menu-items */ "./src/app/shared/menu-items/menu-items.ts");




var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(changeDetectorRef, media, menuItems) {
        this.menuItems = menuItems;
        this.mobileQuery = media.matchMedia('(min-width: 768px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    SidebarComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'veh-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/core/layout/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/core/layout/components/sidebar/sidebar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["MediaMatcher"],
            _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_3__["MenuItems"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/core/layout/components/spinner/spinner.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/core/layout/components/spinner/spinner.component.ts ***!
  \*********************************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent(router, document) {
        var _this = this;
        this.router = router;
        this.document = document;
        this.isSpinnerVisible = true;
        this.backgroundColor = 'rgba(0, 115, 170, 0.69)';
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                _this.isSpinnerVisible = true;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"] ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {
                _this.isSpinnerVisible = false;
            }
        }, function () {
            _this.isSpinnerVisible = false;
        });
    }
    SpinnerComponent.prototype.ngOnDestroy = function () {
        this.isSpinnerVisible = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpinnerComponent.prototype, "backgroundColor", void 0);
    SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'veh-spinner',
            template: "<div class=\"preloader\" *ngIf=\"isSpinnerVisible\">\n  <div class=\"spinner\">\n    <div class=\"double-bounce1\"></div>\n    <div class=\"double-bounce2\"></div>\n  </div>\n</div>",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            Document])
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/app/core/layout/components/topnav/topnav.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/core/layout/components/topnav/topnav.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"hidden-sm\" mat-icon-button [matMenuTriggerFor]=\"language\">\r\n    <mat-icon>language</mat-icon>\r\n</button>\r\n<mat-menu #language=\"matMenu\">\r\n    <button mat-menu-item (click)=\"changeLang('en')\">\r\n        <span>{{ 'layout.menu.language.en' | translate }}</span>\r\n    </button>\r\n    <button mat-menu-item (click)=\"changeLang('sv')\">\r\n        <span>{{ 'layout.menu.language.sv' | translate }}</span>\r\n    </button>\r\n</mat-menu>\r\n<button class=\"hidden-sm\" mat-icon-button [matMenuTriggerFor]=\"profile\">\r\n    <mat-icon>account_circle</mat-icon>\r\n</button>\r\n<mat-menu #profile=\"matMenu\" class=\"mymegamenu\">\r\n\r\n    <button mat-menu-item>\r\n        <mat-icon>settings</mat-icon>\r\n        {{ 'layout.menu.settings' | translate }}\r\n    </button>\r\n    <button mat-menu-item>\r\n        <mat-icon>exit_to_app</mat-icon>\r\n        {{ 'layout.menu.sign-out' | translate }}\r\n    </button>\r\n</mat-menu>\r\n\r\n<button class=\"hidden-sm\" mat-icon-button (click)=\"toggleFullscreen()\">\r\n    <mat-icon>{{(isFullScreen) ? 'fullscreen_exit' : 'fullscreen'}}</mat-icon>\r\n</button>"

/***/ }),

/***/ "./src/app/core/layout/components/topnav/topnav.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/core/layout/components/topnav/topnav.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbGF5b3V0L2NvbXBvbmVudHMvdG9wbmF2L3RvcG5hdi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/core/layout/components/topnav/topnav.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/core/layout/components/topnav/topnav.component.ts ***!
  \*******************************************************************/
/*! exports provided: TopnavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopnavComponent", function() { return TopnavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




var TopnavComponent = /** @class */ (function () {
    function TopnavComponent(translate, document) {
        this.translate = translate;
        this.document = document;
    }
    TopnavComponent.prototype.changeLang = function (lang) {
        this.translate.use(lang);
    };
    TopnavComponent.prototype.ngOnInit = function () {
        this.elem = document.documentElement;
        this.isFullScreen = false;
    };
    TopnavComponent.prototype.toggleFullscreen = function () {
        if (this.isFullScreen)
            this.closeFullscreen();
        else
            this.openFullscreen();
        this.isFullScreen = !this.isFullScreen;
    };
    TopnavComponent.prototype.openFullscreen = function () {
        if (this.elem.requestFullscreen) {
            this.elem.requestFullscreen();
        }
        else if (this.elem.mozRequestFullScreen) {
            /* Firefox */
            this.elem.mozRequestFullScreen();
        }
        else if (this.elem.webkitRequestFullscreen) {
            /* Chrome, Safari and Opera */
            this.elem.webkitRequestFullscreen();
        }
        else if (this.elem.msRequestFullscreen) {
            /* IE/Edge */
            this.elem.msRequestFullscreen();
        }
    };
    /* Close fullscreen */
    TopnavComponent.prototype.closeFullscreen = function () {
        if (this.document.exitFullscreen) {
            this.document.exitFullscreen();
        }
        else if (this.document.mozCancelFullScreen) {
            /* Firefox */
            this.document.mozCancelFullScreen();
        }
        else if (this.document.webkitExitFullscreen) {
            /* Chrome, Safari and Opera */
            this.document.webkitExitFullscreen();
        }
        else if (this.document.msExitFullscreen) {
            /* IE/Edge */
            this.document.msExitFullscreen();
        }
    };
    TopnavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'veh-topnav',
            template: __webpack_require__(/*! ./topnav.component.html */ "./src/app/core/layout/components/topnav/topnav.component.html"),
            styles: [__webpack_require__(/*! ./topnav.component.scss */ "./src/app/core/layout/components/topnav/topnav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], Object])
    ], TopnavComponent);
    return TopnavComponent;
}());



/***/ }),

/***/ "./src/app/core/layout/layout-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/core/layout/layout-routing.module.ts ***!
  \******************************************************/
/*! exports provided: LayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function() { return LayoutRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_layout_page_layout_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/layout-page/layout-page.component */ "./src/app/core/layout/pages/layout-page/layout-page.component.ts");




var routes = [
    {
        path: '',
        component: _pages_layout_page_layout_page_component__WEBPACK_IMPORTED_MODULE_3__["LayoutPageComponent"]
    }
];
var LayoutRoutingModule = /** @class */ (function () {
    function LayoutRoutingModule() {
    }
    LayoutRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LayoutRoutingModule);
    return LayoutRoutingModule;
}());



/***/ }),

/***/ "./src/app/core/layout/layout.module.ts":
/*!**********************************************!*\
  !*** ./src/app/core/layout/layout.module.ts ***!
  \**********************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout-routing.module */ "./src/app/core/layout/layout-routing.module.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/core/layout/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_topnav_topnav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/topnav/topnav.component */ "./src/app/core/layout/components/topnav/topnav.component.ts");
/* harmony import */ var _pages_layout_page_layout_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/layout-page/layout-page.component */ "./src/app/core/layout/pages/layout-page/layout-page.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/spinner/spinner.component */ "./src/app/core/layout/components/spinner/spinner.component.ts");









var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"],
                _components_topnav_topnav_component__WEBPACK_IMPORTED_MODULE_5__["TopnavComponent"],
                _pages_layout_page_layout_page_component__WEBPACK_IMPORTED_MODULE_6__["LayoutPageComponent"],
                _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_8__["SpinnerComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _layout_routing_module__WEBPACK_IMPORTED_MODULE_3__["LayoutRoutingModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/core/layout/pages/layout-page/layout-page.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/core/layout/pages/layout-page/layout-page.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n    <mat-toolbar color=\"primary\" class=\"topbar telative\">\r\n        <div class=\"navbar-header\">\r\n            <a class=\"navbar-brand\" href=\"index.html\">\r\n                <!-- Logo icon -->\r\n                <b>\r\n                    <img src=\"assets/images/logo-icon.png\" alt=\"homepage\" class=\"dark-logo\">\r\n                    <img src=\"assets/images/c3.png\" alt=\"homepage\" class=\"light-logo\" style=\"width:40px;\">\r\n                </b>\r\n                <!--End Logo icon -->\r\n                <!-- Logo text -->\r\n                <span fxShow=\"false\" fxShow.gt-xs>\r\n                    <img src=\"assets/images/logo-text.png\" alt=\"homepage\" class=\"dark-logo\">\r\n                    <img src=\"assets/images/logo-light-text.png\" class=\"light-logo\" alt=\"homepage\" style=\"width:160px;\">\r\n                </span> </a>\r\n        </div>\r\n\r\n        <button mat-icon-button (click)=\"snav.toggle()\" value=\"sidebarclosed\">\r\n            <mat-icon>menu</mat-icon>\r\n        </button>\r\n        <span fxFlex style=\"flex: 1 1 0%;box-sizing: border-box;\"></span>\r\n\r\n        <veh-topnav></veh-topnav>\r\n    </mat-toolbar>\r\n\r\n    <mat-sidenav-container class=\"example-sidenav-container\" [style.marginTop.px]=\"mobileQuery.matches ? 0 : 0\">\r\n        <mat-sidenav #snav id=\"snav\" class=\"dark-sidebar pl-xs\" [mode]=\"mobileQuery.matches ? 'side' : 'over'\"\r\n            fixedTopGap=\"0\" [opened]=\"mobileQuery.matches\" [disableClose]=\"mobileQuery.matches\">\r\n            <veh-sidebar></veh-sidebar>\r\n        </mat-sidenav>\r\n\r\n        <mat-sidenav-content class=\"page-wrapper\">\r\n            <div class=\"page-content\">\r\n                <router-outlet>\r\n                    <veh-spinner></veh-spinner>\r\n                </router-outlet>\r\n            </div>\r\n        </mat-sidenav-content>\r\n    </mat-sidenav-container>\r\n</div>"

/***/ }),

/***/ "./src/app/core/layout/pages/layout-page/layout-page.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/core/layout/pages/layout-page/layout-page.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbGF5b3V0L3BhZ2VzL2xheW91dC1wYWdlL2xheW91dC1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/layout/pages/layout-page/layout-page.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/core/layout/pages/layout-page/layout-page.component.ts ***!
  \************************************************************************/
/*! exports provided: LayoutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutPageComponent", function() { return LayoutPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var src_app_shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/menu-items/menu-items */ "./src/app/shared/menu-items/menu-items.ts");




var LayoutPageComponent = /** @class */ (function () {
    function LayoutPageComponent(changeDetectorRef, media, menuItems) {
        this.menuItems = menuItems;
        this.mobileQuery = media.matchMedia('(min-width: 768px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    LayoutPageComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    LayoutPageComponent.prototype.ngAfterViewInit = function () { };
    LayoutPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'veh-layout-page',
            template: __webpack_require__(/*! ./layout-page.component.html */ "./src/app/core/layout/pages/layout-page/layout-page.component.html"),
            styles: [__webpack_require__(/*! ./layout-page.component.scss */ "./src/app/core/layout/pages/layout-page/layout-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["MediaMatcher"],
            src_app_shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_3__["MenuItems"]])
    ], LayoutPageComponent);
    return LayoutPageComponent;
}());



/***/ }),

/***/ "./src/app/core/services/util.ts":
/*!***************************************!*\
  !*** ./src/app/core/services/util.ts ***!
  \***************************************/
/*! exports provided: insertByIndex, removeByIndex, removeByItem, addItem, getEntitesPerPage, pluck, filterAll, filter, filterNumbers, filterNumbersArray, dynamicSort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertByIndex", function() { return insertByIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeByIndex", function() { return removeByIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeByItem", function() { return removeByItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addItem", function() { return addItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntitesPerPage", function() { return getEntitesPerPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pluck", function() { return pluck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterAll", function() { return filterAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterNumbers", function() { return filterNumbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterNumbersArray", function() { return filterNumbersArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dynamicSort", function() { return dynamicSort; });
//#region Array-Functions
function insertByIndex(state, newItem, insertAt) {
    return state.slice(0, insertAt).concat([newItem], state.slice(insertAt + 1));
}
function removeByIndex(state, index) {
    return state.filter(function (item, idx) { return idx !== index; });
}
function removeByItem(state, obj) {
    return state.filter(function (item) { return item !== obj; });
}
function addItem(state, obj) {
    return state.concat(obj);
}
function getEntitesPerPage(state, pageIndex, pageSize) {
    if (!arguments)
        return state;
    var end = (pageIndex + 1) * pageSize;
    var start = pageIndex * pageSize;
    return state.slice(start, end);
}
function pluck(property, state) {
    if (!arguments)
        return state;
    if (state.length > 0) {
        return Array.from(new Set(state.map(function (item) { if (item.hasOwnProperty(property))
            return item[property]; })));
    }
}
function filterAll(state, filterObj) {
    var props = Object.keys(filterObj);
    props.forEach(function (prop) {
        return state.filter(function (item) { return filterObj[prop].some(function (data) { return data === item[prop]; }); }).slice();
    });
    return state;
}
function filter(state, prop, valuesToCompare) {
    if (valuesToCompare.hasOwnProperty(prop) && valuesToCompare[prop] && valuesToCompare[prop].length > 0)
        return state.filter(function (item) { return item[prop].toLowerCase().includes(valuesToCompare[prop].toLowerCase()); }).slice();
    return state;
}
function filterNumbers(state, prop, valuesToCompare) {
    if (valuesToCompare.hasOwnProperty(prop) && valuesToCompare[prop] && (typeof (valuesToCompare[prop] == "number")))
        return state.filter(function (item) { return item[prop] == valuesToCompare[prop]; }).slice();
    return state;
}
function filterNumbersArray(state, prop, valuesToCompare) {
    if (valuesToCompare.hasOwnProperty(prop) && valuesToCompare[prop] && valuesToCompare[prop].length > 0)
        return state.filter(function (item) { return valuesToCompare[prop].includes(item[prop]); }).slice();
    return state;
}
function dynamicSort(property) {
    var sortOrder = 1;
    if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a, b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    };
}
//#endregion


/***/ }),

/***/ "./src/app/shared/material/material.module.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/material/material.module.ts ***!
  \****************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                //NoopAnimationsModule,
                //BrowserAnimationsModule,
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"]
            ],
            exports: [
                //NoopAnimationsModule,
                //BrowserAnimationsModule,
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/shared/menu-items/menu-items.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/menu-items/menu-items.ts ***!
  \*************************************************/
/*! exports provided: MenuItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItems", function() { return MenuItems; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MENUITEMS = [
    { state: 'starter', type: 'link', name: 'Dashboard', icon: 'av_timer' },
    { state: 'vehicles', type: 'link', name: 'Vehicles List', icon: 'local_car_wash' }
];
var MenuItems = /** @class */ (function () {
    function MenuItems() {
    }
    MenuItems.prototype.getMenuitem = function () {
        return MENUITEMS;
    };
    MenuItems = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], MenuItems);
    return MenuItems;
}());



/***/ }),

/***/ "./src/app/shared/shared-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/shared-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SharedRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedRoutingModule", function() { return SharedRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var SharedRoutingModule = /** @class */ (function () {
    function SharedRoutingModule() {
    }
    SharedRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SharedRoutingModule);
    return SharedRoutingModule;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-routing.module */ "./src/app/shared/shared-routing.module.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material/material.module */ "./src/app/shared/material/material.module.ts");
/* harmony import */ var _menu_items_menu_items__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-items/menu-items */ "./src/app/shared/menu-items/menu-items.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");









var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_routing_module__WEBPACK_IMPORTED_MODULE_3__["SharedRoutingModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]
                    }
                })
            ],
            exports: [
                _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"]
            ],
            providers: [_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_5__["MenuItems"]]
        })
    ], SharedModule);
    return SharedModule;
}());

function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__["TranslateHttpLoader"](http, "/assets/i18n/", '.json');
}


/***/ }),

/***/ "./src/app/store/_super-classes/action-creator.ts":
/*!********************************************************!*\
  !*** ./src/app/store/_super-classes/action-creator.ts ***!
  \********************************************************/
/*! exports provided: ActionCreator, ActionCreatorFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionCreator", function() { return ActionCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionCreatorFactory", function() { return ActionCreatorFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ActionCreator = /** @class */ (function () {
    function ActionCreator(type, payload) {
        if (type === void 0) { type = 'NOT_SET'; }
        this.type = type;
        this.payload = payload;
    }
    return ActionCreator;
}());

var ActionCreatorFactory = /** @class */ (function () {
    function ActionCreatorFactory() {
    }
    ActionCreatorFactory_1 = ActionCreatorFactory;
    ActionCreatorFactory.create = function (type, defaultPayloadValue) {
        return function (payload) {
            var _payload = payload || typeof payload !== 'undefined' ? payload : defaultPayloadValue;
            return new ActionCreator(type, _payload);
        };
    };
    ActionCreatorFactory.prototype.create = function (type, defaultPayloadValue) {
        return ActionCreatorFactory_1.create(type, defaultPayloadValue);
    };
    var ActionCreatorFactory_1;
    ActionCreatorFactory = ActionCreatorFactory_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ActionCreatorFactory);
    return ActionCreatorFactory;
}());



/***/ }),

/***/ "./src/app/store/_super-classes/base-actions.ts":
/*!******************************************************!*\
  !*** ./src/app/store/_super-classes/base-actions.ts ***!
  \******************************************************/
/*! exports provided: BaseActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseActions", function() { return BaseActions; });
/* harmony import */ var _action_creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-creator */ "./src/app/store/_super-classes/action-creator.ts");

var BaseActions = /** @class */ (function () {
    function BaseActions(moduleName) {
        this.moduleName = moduleName;
        //Basic Actions
        this.LOAD = "[" + this.moduleName + "] Load";
        this.FILTER = "[" + this.moduleName + "] Filter";
        this.ADD = "[" + this.moduleName + "] Add";
        this.ADD_MANY = "[" + this.moduleName + "] Add_Many";
        this.ADD_SUCCESS = "[" + this.moduleName + "] Add_Success";
        this.SELECT_ITEM = "[" + this.moduleName + "] Select_Item";
        this.FAILED = "[" + this.moduleName + "] Failed";
        //CRUD Actions
        this.UPDATE = "[" + this.moduleName + "] Update";
        this.UPDATE_SUCCESS = "[" + this.moduleName + "] Update_Success";
        this.DELETE = "[" + this.moduleName + "] Delete";
        this.DELETE_SUCCESS = "[" + this.moduleName + "] Delete_SUCCESS";
        //Lookups Action
        this.LOADLOOKUPS = "[" + this.moduleName + "] LOAD_LOOKUPS";
        this.LOAD_ALL = "[" + this.moduleName + "] Load All";
        this.ADD_ALL_ITEMS = "[" + this.moduleName + "] Add All Items";
        //Basic Actions Creators
        this.createLoadAction = _action_creator__WEBPACK_IMPORTED_MODULE_0__["ActionCreatorFactory"].create(this.LOAD);
        this.createFilterAction = _action_creator__WEBPACK_IMPORTED_MODULE_0__["ActionCreatorFactory"].create(this.FILTER);
        this.createAddItemAction = _action_creator__WEBPACK_IMPORTED_MODULE_0__["ActionCreatorFactory"].create(this.ADD);
        this.createAddManyItemsAction = _action_creator__WEBPACK_IMPORTED_MODULE_0__["ActionCreatorFactory"].create(this.ADD_MANY);
        this.createAddSuccessAction = _action_creator__WEBPACK_IMPORTED_MODULE_0__["ActionCreatorFactory"].create(this.ADD_SUCCESS);
        this.createSelectItemAction = _action_creator__WEBPACK_IMPORTED_MODULE_0__["ActionCreatorFactory"].create(this.SELECT_ITEM);
        this.createOperationFailedAction = _action_creator__WEBPACK_IMPORTED_MODULE_0__["ActionCreatorFactory"].create(this.FAILED);
        //CRUD Action Creator
        this.createUpdateItemAction = _action_creator__WEBPACK_IMPORTED_MODULE_0__["ActionCreatorFactory"].create(this.UPDATE);
        this.createUpdateSuccessAction = _action_creator__WEBPACK_IMPORTED_MODULE_0__["ActionCreatorFactory"].create(this.UPDATE_SUCCESS);
        this.createDeleteItemAction = _action_creator__WEBPACK_IMPORTED_MODULE_0__["ActionCreatorFactory"].create(this.DELETE);
        this.createDeleteSuccessAction = _action_creator__WEBPACK_IMPORTED_MODULE_0__["ActionCreatorFactory"].create(this.DELETE_SUCCESS);
        //Lookups Actions
        this.createLoadLookupsAction = _action_creator__WEBPACK_IMPORTED_MODULE_0__["ActionCreatorFactory"].create(this.LOADLOOKUPS);
        this.createLoadAllAction = _action_creator__WEBPACK_IMPORTED_MODULE_0__["ActionCreatorFactory"].create(this.LOAD_ALL);
        this.createAddAllItemsAction = _action_creator__WEBPACK_IMPORTED_MODULE_0__["ActionCreatorFactory"].create(this.ADD_ALL_ITEMS);
    }
    return BaseActions;
}());



/***/ }),

/***/ "./src/app/store/_super-classes/base-state-service.ts":
/*!************************************************************!*\
  !*** ./src/app/store/_super-classes/base-state-service.ts ***!
  \************************************************************/
/*! exports provided: BaseStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseStateService", function() { return BaseStateService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


var BaseStateService = /** @class */ (function () {
    function BaseStateService(actionService, store, modulePath) {
        this.actionService = actionService;
        this.store = store;
        this.modulePath = modulePath;
    }
    BaseStateService.prototype.selectItems = function () {
        var _this = this;
        return this.store.select(function (s) { return eval("s." + _this.modulePath + ".items"); });
    };
    BaseStateService.prototype.selectIsItemsLoaded = function () {
        var _this = this;
        var result = false;
        this.store.select(function (s) { return eval("s." + _this.modulePath + ".items"); }).subscribe(function (r) {
            result = (r.length > 0);
        });
        return result;
    };
    BaseStateService.prototype.selectIsAllItemsLoaded = function () {
        var _this = this;
        var result = false;
        this.store.select(function (s) { return eval("s." + _this.modulePath + ".allItems"); }).subscribe(function (r) {
            result = (r.length > 0);
        });
        return result;
    };
    BaseStateService.prototype.selectItem = function (id) {
        var _this = this;
        return this.store
            .select(function (s) { return eval("s." + _this.modulePath + ".items"); })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (items) { return lodash__WEBPACK_IMPORTED_MODULE_1__["find"](items, function (i) { return i.ID == id; }); }));
    };
    BaseStateService.prototype.selectSortExpression = function () {
        var _this = this;
        return this.store.select(function (s) { return eval("s." + _this.modulePath + ".filter"); }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (f) { return ({
            sortField: f.sortFieldNames,
            assending: f.sortFieldDirections === 'desc' ? false : true
        }); }));
    };
    BaseStateService.prototype.selectPendingItem = function () {
        var _this = this;
        return this.store
            .select(function (s) { return eval("s." + _this.modulePath + ".pendingItem"); });
    };
    BaseStateService.prototype.selectIsSavedSuccess = function () {
        var _this = this;
        return this.store.select(function (s) { return eval("s." + _this.modulePath + ".isSuccess"); });
    };
    BaseStateService.prototype.selectModelState = function () {
        var _this = this;
        return this.store.select(function (s) { return eval("s." + _this.modulePath + ".modelState"); });
    };
    BaseStateService.prototype.selectPagingInfo = function () {
        var _this = this;
        return this.store.select(function (s) { return eval("s." + _this.modulePath); }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (p) { return ({
            pageSize: p.filter.objectsPerPage,
            pageIndex: p.filter.page,
            count: p.count
        }); }));
    };
    /************** Dispatchers ************** */
    BaseStateService.prototype.dispatchLoad = function () {
        this.store.dispatch(this.actionService.createLoadAction());
    };
    BaseStateService.prototype.dispatchFilter = function (filter) {
        this.store.dispatch(this.actionService.createFilterAction(filter));
    };
    BaseStateService.prototype.dispatchAdd = function (item) {
        this.store.dispatch(this.actionService.createAddItemAction(item));
    };
    BaseStateService.prototype.dispatchSelectId = function (id) {
        this.store.dispatch(this.actionService.createSelectItemAction(id));
    };
    BaseStateService.prototype.dispatchDelete = function (item) {
        this.store.dispatch(this.actionService.createDeleteItemAction(item));
    };
    BaseStateService.prototype.dispatchUpdate = function (item) {
        this.store.dispatch(this.actionService.createUpdateItemAction(item));
    };
    BaseStateService.prototype.dispatchUpdateSuccess = function (item) {
        this.store.dispatch(this.actionService.createUpdateSuccessAction(item));
    };
    return BaseStateService;
}());



/***/ }),

/***/ "./src/app/store/reducer.ts":
/*!**********************************!*\
  !*** ./src/app/store/reducer.ts ***!
  \**********************************/
/*! exports provided: reducerToken, getReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducerToken", function() { return reducerToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReducers", function() { return getReducers; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _vehicles_all_vehicles_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vehicles/all-vehicles/reducer */ "./src/app/store/vehicles/all-vehicles/reducer.ts");


var reducerToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Reducers');
function getReducers() {
    return {
        vehicles: _vehicles_all_vehicles_reducer__WEBPACK_IMPORTED_MODULE_1__["vehiclesReducers"]
    };
}


/***/ }),

/***/ "./src/app/store/state.ts":
/*!********************************!*\
  !*** ./src/app/store/state.ts ***!
  \********************************/
/*! exports provided: getInitialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialState", function() { return getInitialState; });
/* harmony import */ var _vehicles_all_vehicles_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vehicles/all-vehicles/state */ "./src/app/store/vehicles/all-vehicles/state.ts");

function getInitialState() {
    var strState = window.localStorage.getItem('$$Vehicles-Monitor$$');
    if (strState) {
        var state = JSON.parse(strState);
        return state;
    }
    return {
        vehicles: _vehicles_all_vehicles_state__WEBPACK_IMPORTED_MODULE_0__["VehiclesInitialState"],
    };
}
;


/***/ }),

/***/ "./src/app/store/store.module.ts":
/*!***************************************!*\
  !*** ./src/app/store/store.module.ts ***!
  \***************************************/
/*! exports provided: VehiclesStoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclesStoreModule", function() { return VehiclesStoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state */ "./src/app/store/state.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _vehicles_all_vehicles_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vehicles/all-vehicles/effects */ "./src/app/store/vehicles/all-vehicles/effects.ts");
/* harmony import */ var _vehicles_all_vehicles_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vehicles/all-vehicles/actions */ "./src/app/store/vehicles/all-vehicles/actions.ts");
/* harmony import */ var _vehicles_all_vehicles_state_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vehicles/all-vehicles/state-service */ "./src/app/store/vehicles/all-vehicles/state-service.ts");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reducer */ "./src/app/store/reducer.ts");












var VehiclesStoreModule = /** @class */ (function () {
    function VehiclesStoreModule(store) {
        store.subscribe(function (state) {
            window.localStorage.setItem('$$Vehicles-Monitor$$', JSON.stringify(state));
        });
    }
    VehiclesStoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forRoot(Object(_reducer__WEBPACK_IMPORTED_MODULE_11__["getReducers"])(), { initialState: _state__WEBPACK_IMPORTED_MODULE_4__["getInitialState"] }),
                !src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__["StoreDevtoolsModule"].instrument({ maxAge: 20 }) : [],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forRoot([
                    _vehicles_all_vehicles_effects__WEBPACK_IMPORTED_MODULE_8__["VehiclesEffectsService"]
                ])
            ],
            providers: [
                _vehicles_all_vehicles_actions__WEBPACK_IMPORTED_MODULE_9__["VehiclesActions"],
                _vehicles_all_vehicles_state_service__WEBPACK_IMPORTED_MODULE_10__["VehiclesStateService"],
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], VehiclesStoreModule);
    return VehiclesStoreModule;
}());



/***/ }),

/***/ "./src/app/store/vehicles/all-vehicles/actions.ts":
/*!********************************************************!*\
  !*** ./src/app/store/vehicles/all-vehicles/actions.ts ***!
  \********************************************************/
/*! exports provided: VehiclesActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclesActions", function() { return VehiclesActions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _super_classes_base_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_super-classes/base-actions */ "./src/app/store/_super-classes/base-actions.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var VehiclesActions = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](VehiclesActions, _super);
    function VehiclesActions() {
        return _super.call(this, "vehicles") || this;
    }
    VehiclesActions = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VehiclesActions);
    return VehiclesActions;
}(_super_classes_base_actions__WEBPACK_IMPORTED_MODULE_1__["BaseActions"]));



/***/ }),

/***/ "./src/app/store/vehicles/all-vehicles/effects.ts":
/*!********************************************************!*\
  !*** ./src/app/store/vehicles/all-vehicles/effects.ts ***!
  \********************************************************/
/*! exports provided: VehiclesEffectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclesEffectsService", function() { return VehiclesEffectsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ "./src/app/store/vehicles/all-vehicles/actions.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var emptyAction = { type: '[Vehicle] empty', payload: { list: null, count: null } };
var VehiclesEffectsService = /** @class */ (function () {
    function VehiclesEffectsService(actions$, store, itemActions) {
        this.actions$ = actions$;
        this.store = store;
        this.itemActions = itemActions;
    }
    VehiclesEffectsService.prototype.onFailed = function () {
        return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(this.itemActions.FAILED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (action) {
            console.error(action.payload);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(emptyAction);
        }));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], VehiclesEffectsService.prototype, "onFailed", null);
    VehiclesEffectsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _actions__WEBPACK_IMPORTED_MODULE_4__["VehiclesActions"]])
    ], VehiclesEffectsService);
    return VehiclesEffectsService;
}());



/***/ }),

/***/ "./src/app/store/vehicles/all-vehicles/reducer.ts":
/*!********************************************************!*\
  !*** ./src/app/store/vehicles/all-vehicles/reducer.ts ***!
  \********************************************************/
/*! exports provided: vehiclesReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vehiclesReducers", function() { return vehiclesReducers; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/app/store/vehicles/all-vehicles/actions.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_core_services_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/util */ "./src/app/core/services/util.ts");




function vehiclesReducers(state, action) {
    var itemActions = new _actions__WEBPACK_IMPORTED_MODULE_1__["VehiclesActions"]();
    switch (action.type) {
        case itemActions.ADD:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { modelState: null, isSuccess: false });
        case itemActions.ADD_SUCCESS:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { items: state.items.concat([
                    action.payload
                ]), modelState: null, isSuccess: true });
        case itemActions.ADD_MANY:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { items: action.payload.slice(), modelState: null, isSuccess: false });
        case itemActions.FILTER:
            var filteredEntities = Object(src_app_core_services_util__WEBPACK_IMPORTED_MODULE_3__["filter"])(state.allItems, 'vin', action.payload || state.filter.vin);
            filteredEntities = Object(src_app_core_services_util__WEBPACK_IMPORTED_MODULE_3__["filterNumbersArray"])(filteredEntities, 'client', action.payload || state.filter.client);
            filteredEntities = Object(src_app_core_services_util__WEBPACK_IMPORTED_MODULE_3__["filterNumbers"])(filteredEntities, 'status', action.payload || [state.filter.status]);
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { items: filteredEntities.slice(), filter: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.filter, action.payload), modelState: null, isSuccess: false });
        case itemActions.SELECT_ITEM:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { selectedId: action.payload, modelState: null, isSuccess: false });
        case itemActions.FAILED:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { modelState: action.payload, isSuccess: false });
        case itemActions.LOAD:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { modelState: null, isSuccess: false });
        case itemActions.UPDATE_SUCCESS:
            var v = lodash__WEBPACK_IMPORTED_MODULE_2__["find"](state.allItems, function (i) { return i.id == action.payload.id; });
            v.status = action.payload.status;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { items: state.items.slice(), modelState: null, isSuccess: true });
        case itemActions.LOAD_ALL:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { allItems: action.payload.list, modelState: null, isSuccess: false });
        case itemActions.ADD_ALL_ITEMS:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { allItems: action.payload, modelState: null, isSuccess: true });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/store/vehicles/all-vehicles/state-service.ts":
/*!**************************************************************!*\
  !*** ./src/app/store/vehicles/all-vehicles/state-service.ts ***!
  \**************************************************************/
/*! exports provided: VehiclesStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclesStateService", function() { return VehiclesStateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _super_classes_base_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_super-classes/base-state-service */ "./src/app/store/_super-classes/base-state-service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ "./src/app/store/vehicles/all-vehicles/actions.ts");





var VehiclesStateService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](VehiclesStateService, _super);
    function VehiclesStateService(store, actionService) {
        var _this = _super.call(this, actionService, store, "vehicles") || this;
        _this.store = store;
        _this.actionService = actionService;
        return _this;
    }
    VehiclesStateService.prototype.dispatchLoad = function () {
        if (!this.selectIsItemsLoaded())
            _super.prototype.dispatchLoad.call(this);
    };
    VehiclesStateService.prototype.dispatcLoadInitial = function (data) {
        if (!this.selectIsItemsLoaded()) {
            this.store.dispatch(this.actionService.createAddManyItemsAction(data));
        }
        if (!this.selectIsAllItemsLoaded()) {
            this.store.dispatch(this.actionService.createAddAllItemsAction(data));
        }
    };
    VehiclesStateService.prototype.dispatchUpdateSuccess = function (data) {
        this.store.dispatch(this.actionService.createUpdateSuccessAction(data));
    };
    VehiclesStateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _actions__WEBPACK_IMPORTED_MODULE_4__["VehiclesActions"]])
    ], VehiclesStateService);
    return VehiclesStateService;
}(_super_classes_base_state_service__WEBPACK_IMPORTED_MODULE_2__["BaseStateService"]));



/***/ }),

/***/ "./src/app/store/vehicles/all-vehicles/state.ts":
/*!******************************************************!*\
  !*** ./src/app/store/vehicles/all-vehicles/state.ts ***!
  \******************************************************/
/*! exports provided: VehiclesInitialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclesInitialState", function() { return VehiclesInitialState; });
;
var VehiclesInitialState = {
    allItems: [],
    items: [],
    filter: {
        vin: null,
        client: [],
        status: null
    },
    isSuccess: false
};
;


/***/ }),

/***/ "./src/app/vehicles/components/vehicles-filter/vehicles-filter.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/vehicles/components/vehicles-filter/vehicles-filter.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]='filterForm'>\r\n  <mat-card>\r\n    <mat-card-content>\r\n      <mat-card-title>{{ 'vehicles-list.filter.title' | translate }}</mat-card-title>\r\n\r\n\r\n      <!-- Row -->\r\n      <div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\r\n        <!-- column -->\r\n        <div fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"50\">\r\n            {{ 'vehicles-list.filter.sub-title' | translate }}\r\n          <br /><br />\r\n\r\n          <mat-accordion>\r\n            <mat-expansion-panel>\r\n              <mat-expansion-panel-header>\r\n                <mat-panel-title> {{ 'vehicles-list.filter.filter' | translate }} </mat-panel-title>\r\n                <mat-panel-description> {{ 'vehicles-list.filter.filter-epxand-title' | translate }} </mat-panel-description>\r\n              </mat-expansion-panel-header>\r\n              <section class=\"example-section\">\r\n                <mat-form-field class=\"example-margin\">\r\n                  <input matInput placeholder=\"VIN\" aria-label=\"VIN\" formControlName=\"VIN\" (keyup)=\"onVINChange($event)\" />\r\n                  <mat-hint>{{ 'vehicles-list.filter.filter-placeholder.vin-caption' | translate }}</mat-hint>\r\n                </mat-form-field>\r\n\r\n               \r\n\r\n                <mat-form-field class=\"example-margin\">\r\n                  <mat-select formControlName=\"status\" (selectionChange)=\"onStatusSelection($event.value)\" placeholder=\"{{ 'vehicles-list.filter.filter-placeholder.status' | translate }}\">\r\n                      <mat-option>\r\n                          \r\n                        </mat-option>\r\n                    <mat-option *ngFor=\"let s of statusList\" [value]=\"s.id\">\r\n                      {{ 'vehicles-list.filter.filter-placeholder.' + s.status | translate}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                  <mat-hint>{{ 'vehicles-list.filter.filter-placeholder.status-caption' | translate }}</mat-hint>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class=\"example-margin\">\r\n                    <mat-chip-list #chipClientList>\r\n                      <mat-chip *ngFor=\"let client of selectedClients\" selectable=\"true\" removable=\"true\"\r\n                        (removed)=\"remove(client)\" color=\"primary\" aria-orientation=\"horizontal\" selected>\r\n                        {{client}}\r\n                        <mat-icon matChipRemove>cancel</mat-icon>\r\n                      </mat-chip>\r\n                      <input #txtName matInput aria-label=\"Name\" [matAutocomplete]=\"autoName\" formControlName=\"name\"\r\n                      [matChipInputFor]=\"chipClientList\" [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" matChipInputAddOnBlur=\"true\" (matChipInputTokenEnd)=\"add($event)\" \r\n                      placeholder=\"{{ 'vehicles-list.filter.filter-placeholder.client' | translate }}\" />\r\n                      <mat-autocomplete #autoName=\"matAutocomplete\"  (optionSelected)=\"onClientSelection($event)\">\r\n                        <mat-option *ngFor=\"let client of filteredClients | async\" [value]=\"client.id\">\r\n                          <img style=\"vertical-align:middle;\" aria-hidden src=\"{{client.avatar}}\" height=\"40\" class=\"mr-6\" />\r\n                          <span>{{ client.name }}</span>\r\n                        </mat-option>\r\n                      </mat-autocomplete>\r\n                    </mat-chip-list>\r\n                    <mat-hint>{{ 'vehicles-list.filter.filter-placeholder.client-caption' | translate }}</mat-hint>\r\n                  </mat-form-field>\r\n              </section>\r\n            </mat-expansion-panel>\r\n          </mat-accordion>\r\n        </div>\r\n      </div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</form>"

/***/ }),

/***/ "./src/app/vehicles/components/vehicles-filter/vehicles-filter.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/vehicles/components/vehicles-filter/vehicles-filter.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px; }\n\n.example-margin {\n  margin: 10px; }\n\n.mr-6 {\n  margin-right: 6px; }\n\n.mat-standard-chip {\n  background-color: #26c6da;\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVoaWNsZXMvY29tcG9uZW50cy92ZWhpY2xlcy1maWx0ZXIvRTpcXHNiYVxccHJvamVjdHNcXEFsdGVuXFxjbGllbnRcXHZlaGljbGVzLW1vbml0b3Ivc3JjXFxhcHBcXHZlaGljbGVzXFxjb21wb25lbnRzXFx2ZWhpY2xlcy1maWx0ZXJcXHZlaGljbGVzLWZpbHRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGNBQWE7RUFDYixzQkFBcUI7RUFDckIsb0JBQW1CO0VBQ25CLGFBQVksRUFDZjs7QUFFRDtFQUNJLGFBQVksRUFDZjs7QUFFRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFFRDtFQUNJLDBCQUF5QjtFQUN6QixhQUFZLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC92ZWhpY2xlcy9jb21wb25lbnRzL3ZlaGljbGVzLWZpbHRlci92ZWhpY2xlcy1maWx0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmV4YW1wbGUtc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogNjBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtbWFyZ2luIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLm1yLTYge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbn1cclxuXHJcbi5tYXQtc3RhbmRhcmQtY2hpcHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNmM2ZGE7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/vehicles/components/vehicles-filter/vehicles-filter.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/vehicles/components/vehicles-filter/vehicles-filter.component.ts ***!
  \**********************************************************************************/
/*! exports provided: State, VehiclesFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclesFilterComponent", function() { return VehiclesFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_store_vehicles_all_vehicles_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/store/vehicles/all-vehicles/state-service */ "./src/app/store/vehicles/all-vehicles/state-service.ts");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");







var State = /** @class */ (function () {
    function State(name, population, flag) {
        this.name = name;
        this.population = population;
        this.flag = flag;
    }
    return State;
}());

var VehiclesFilterComponent = /** @class */ (function () {
    function VehiclesFilterComponent(fb, service) {
        this.fb = fb;
        this.service = service;
        this.currentVIN = null;
        this.currentClient = [];
        this.currentStatus = null;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["COMMA"]];
    }
    Object.defineProperty(VehiclesFilterComponent.prototype, "clients", {
        set: function (clientSnapshot) {
            if (clientSnapshot) {
                this.clientsList = (clientSnapshot.val()[0]) ? clientSnapshot.val() : clientSnapshot.val().slice(1);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VehiclesFilterComponent.prototype, "status", {
        set: function (statusSnapshot) {
            if (statusSnapshot) {
                this.statusList = (statusSnapshot.val()[0]) ? statusSnapshot.val() : statusSnapshot.val().slice(1);
            }
        },
        enumerable: true,
        configurable: true
    });
    VehiclesFilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filterAllParam();
        this.selectedClients = [];
        this.filterForm = this.fb.group({
            VIN: [],
            name: [[]],
            status: []
        });
        this.filteredClients = this.filterForm.controls["name"].valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
            return (value) ?
                _this.clientsList.filter(function (v) {
                    return v.name.toLowerCase().includes(value) &&
                        !_this.selectedClients.includes(v.name);
                }) :
                _this.clientsList.filter(function (v) { return !_this.selectedClients.includes(v.name); });
        }));
    };
    VehiclesFilterComponent.prototype.onVINChange = function (event) {
        this.currentVIN = event.target.value.toLowerCase();
        this.filterAllParam();
    };
    VehiclesFilterComponent.prototype.onStatusSelection = function (id) {
        this.currentStatus = id;
        this.filterAllParam();
    };
    VehiclesFilterComponent.prototype.onClientSelection = function (event) {
        this.currentClient.push(event.option.value);
        if ((event.option.viewValue || '').trim())
            this.selectedClients.push(event.option.viewValue);
        this.txtName.nativeElement.value = '';
        this.filterForm.controls["name"].setValue(null);
        this.filterAllParam();
    };
    VehiclesFilterComponent.prototype.filterAllParam = function () {
        this.service.dispatchFilter({ vin: this.currentVIN, status: this.currentStatus, client: this.currentClient });
    };
    VehiclesFilterComponent.prototype.add = function (event) {
        // Add client only when MatAutocomplete is not open
        // To make sure this does not conflict with OptionSelected Event
        if (!this.autoName.isOpen) {
            var input = event.input;
            var value = event.value;
            // Add our client
            if ((value || '').trim()) {
                this.selectedClients.push(value["name"]);
            }
            // Reset the input value
            if (input) {
                input.value = '';
            }
            this.filterForm.controls["name"].setValue(null);
        }
    };
    VehiclesFilterComponent.prototype.remove = function (item) {
        var index = this.selectedClients.indexOf(item);
        var index_current = this.currentClient.indexOf(this.clientsList.find(function (c) { return c.name == item; }).id);
        if (index >= 0) {
            this.selectedClients.splice(index, 1);
            this.currentClient.splice(index_current, 1);
            this.filterAllParam();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('autoName'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatAutocomplete"])
    ], VehiclesFilterComponent.prototype, "autoName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('txtName'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], VehiclesFilterComponent.prototype, "txtName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], VehiclesFilterComponent.prototype, "clients", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], VehiclesFilterComponent.prototype, "status", null);
    VehiclesFilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'veh-vehicles-filter',
            template: __webpack_require__(/*! ./vehicles-filter.component.html */ "./src/app/vehicles/components/vehicles-filter/vehicles-filter.component.html"),
            styles: [__webpack_require__(/*! ./vehicles-filter.component.scss */ "./src/app/vehicles/components/vehicles-filter/vehicles-filter.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_store_vehicles_all_vehicles_state_service__WEBPACK_IMPORTED_MODULE_4__["VehiclesStateService"]])
    ], VehiclesFilterComponent);
    return VehiclesFilterComponent;
}());



/***/ }),

/***/ "./src/app/vehicles/components/vehicles-grid/vehicles-grid.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/vehicles/components/vehicles-grid/vehicles-grid.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-content>\r\n    <mat-card-title>{{ 'vehicles-list.grid.title' | translate }}</mat-card-title>\r\n    <mat-card-subtitle>\r\n      <mat-slide-toggle [color]=\"Primary\" (change)=\"onChangeRealTime($event.checked)\" class=\"md-right\">\r\n        <code [class]=\"realTimeClass\">{{ 'vehicles-list.grid.sub-title' | translate }}</code>\r\n      </mat-slide-toggle>\r\n    </mat-card-subtitle>\r\n    <!-- Row -->\r\n\r\n    <div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\r\n      <!-- column -->\r\n      <div fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"50\">\r\n        <div class=\"mat-elevation-z2\">\r\n          <table mat-table [dataSource]=\"dataSource\" matSort>\r\n            <ng-container matColumnDef=\"vin\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> VIN </th>\r\n              <td mat-cell *matCellDef=\"let row\">\r\n                {{row.vin}}\r\n              </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"client\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> {{ 'vehicles-list.grid.client' | translate }} </th>\r\n              <td mat-cell *matCellDef=\"let row\">\r\n                {{row.clientName}}\r\n              </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"make\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> {{ 'vehicles-list.grid.make' | translate }} </th>\r\n              <td mat-cell *matCellDef=\"let row\">\r\n                {{row.make}}\r\n              </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"regNum\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> {{ 'vehicles-list.grid.register' | translate }} </th>\r\n              <td mat-cell *matCellDef=\"let row\">\r\n                {{row.regNum}}\r\n              </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"status\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> {{ 'vehicles-list.grid.status' | translate }} </th>\r\n              <td mat-cell *matCellDef=\"let row\" [style.color]=\"row.statusColor\">\r\n                {{ 'vehicles-list.filter.filter-placeholder.' + row.statusName | translate }}\r\n              </td>\r\n            </ng-container>\r\n\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n          </table>\r\n\r\n          <mat-paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/vehicles/components/vehicles-grid/vehicles-grid.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/vehicles/components/vehicles-grid/vehicles-grid.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\n.mat-column-make {\n  white-space: nowrap; }\n\ntd,\nth {\n  width: 25%; }\n\n.s1 {\n  color: green; }\n\n.s2 {\n  color: red; }\n\n.s3 {\n  color: gray; }\n\n.s4 {\n  color: yellow; }\n\n.md-right {\n  position: absolute;\n  right: 30px;\n  margin: 0;\n  top: 20px; }\n\n.green-snackbar {\n  background: green; }\n\n.red-snackbar {\n  background-color: red; }\n\n.real-time-green {\n  color: green; }\n\n.real-time-red {\n  color: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVoaWNsZXMvY29tcG9uZW50cy92ZWhpY2xlcy1ncmlkL0U6XFxzYmFcXHByb2plY3RzXFxBbHRlblxcY2xpZW50XFx2ZWhpY2xlcy1tb25pdG9yL3NyY1xcYXBwXFx2ZWhpY2xlc1xcY29tcG9uZW50c1xcdmVoaWNsZXMtZ3JpZFxcdmVoaWNsZXMtZ3JpZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVcsRUFDZDs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsWUFBVyxFQUNkOztBQUNEO0VBQ0ksb0JBQW1CLEVBQ3BCOztBQUNIOztFQUVJLFdBQVUsRUFDYjs7QUFFRDtFQUNJLGFBQVksRUFDZjs7QUFFRDtFQUNJLFdBQVUsRUFDYjs7QUFFRDtFQUNJLFlBQVcsRUFDZDs7QUFFRDtFQUNJLGNBQWEsRUFDaEI7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsWUFBVztFQUNYLFVBQVM7RUFDVCxVQUFTLEVBQ1o7O0FBRUQ7RUFDSSxrQkFBaUIsRUFDcEI7O0FBRUQ7RUFDSSxzQkFBcUIsRUFDeEI7O0FBRUQ7RUFDSSxhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxXQUFVLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC92ZWhpY2xlcy9jb21wb25lbnRzL3ZlaGljbGVzLWdyaWQvdmVoaWNsZXMtZ3JpZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm1hdC1jb2x1bW4tbWFrZSB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIH1cclxudGQsXHJcbnRoIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbn1cclxuXHJcbi5zMXtcclxuICAgIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLnMye1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLnMze1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbi5zNHtcclxuICAgIGNvbG9yOiB5ZWxsb3c7XHJcbn1cclxuXHJcbi5tZC1yaWdodHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uZ3JlZW4tc25hY2tiYXIge1xyXG4gICAgYmFja2dyb3VuZDogZ3JlZW47XHJcbn1cclxuXHJcbi5yZWQtc25hY2tiYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcblxyXG4ucmVhbC10aW1lLWdyZWVuIHtcclxuICAgIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLnJlYWwtdGltZS1yZWQge1xyXG4gICAgY29sb3I6IHJlZDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/vehicles/components/vehicles-grid/vehicles-grid.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/vehicles/components/vehicles-grid/vehicles-grid.component.ts ***!
  \******************************************************************************/
/*! exports provided: VehiclesGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclesGridComponent", function() { return VehiclesGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var VehiclesGridComponent = /** @class */ (function () {
    function VehiclesGridComponent(snackBar) {
        this.snackBar = snackBar;
        this.displayedColumns = ['vin', 'status', 'client', 'regNum', 'make'];
        this.isRealTime = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(VehiclesGridComponent.prototype, "clients", {
        set: function (data) {
            if (data)
                this._clients = data.val().slice(1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VehiclesGridComponent.prototype, "status", {
        set: function (data) {
            if (data)
                this._status = data.val().slice(1);
        },
        enumerable: true,
        configurable: true
    });
    VehiclesGridComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this._clients && this._status && this.items) {
            var result = this.items.map(function (v) { return _this.mapper(v); });
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](result);
            this.dataSource.data = result;
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        }
    };
    VehiclesGridComponent.prototype.mapper = function (item) {
        var clientFiltered = this._clients.find(function (c) { return c.id == item.client; });
        var statusFiltered = this._status.find(function (s) { return s.id == item.status; });
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, { clientName: (clientFiltered) ? clientFiltered.name : item.client, statusName: (statusFiltered) ? statusFiltered.status : item.status, statusColor: (statusFiltered) ? statusFiltered.color : 'black' });
    };
    VehiclesGridComponent.prototype.onChangeRealTime = function (isChecked) {
        this.isRealTime.emit(isChecked);
        this.realTimeClass = (isChecked) ? 'real-time-green' : 'real-time-red';
        this.snackBar.open('real-time updates', (isChecked) ? 'On' : 'Off', {
            duration: 2000,
            panelClass: [(isChecked) ? 'green-snackbar' : 'red-snackbar']
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VehiclesGridComponent.prototype, "isRealTime", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], VehiclesGridComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], VehiclesGridComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], VehiclesGridComponent.prototype, "clients", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], VehiclesGridComponent.prototype, "status", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], VehiclesGridComponent.prototype, "items", void 0);
    VehiclesGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'veh-vehicles-grid',
            template: __webpack_require__(/*! ./vehicles-grid.component.html */ "./src/app/vehicles/components/vehicles-grid/vehicles-grid.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./vehicles-grid.component.scss */ "./src/app/vehicles/components/vehicles-grid/vehicles-grid.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], VehiclesGridComponent);
    return VehiclesGridComponent;
}());



/***/ }),

/***/ "./src/app/vehicles/pages/vehicles-list-page/vehicles-list-page.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/vehicles/pages/vehicles-list-page/vehicles-list-page.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\r\n  <!-- column -->\r\n  <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n    <veh-firebase-backend-simulator [isUpdateRandomVehicles]=\"isUpdateRandomVehicles$ | async\" [isStartListening]=\"isStartListening$ | async\"></veh-firebase-backend-simulator>\r\n      <veh-vehicles-filter [clients]=\"clients$ | async\" [status]=\"status$ | async\"></veh-vehicles-filter>\r\n      <veh-vehicles-grid [clients]=\"clients$ | async\" [status]=\"status$ | async\"  [items]=\"vehicles$ | async\"  (isRealTime)=\"onIsRealTimeChanged($event)\"></veh-vehicles-grid>\r\n  </div>\r\n  <!-- column -->\r\n</div>"

/***/ }),

/***/ "./src/app/vehicles/pages/vehicles-list-page/vehicles-list-page.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/vehicles/pages/vehicles-list-page/vehicles-list-page.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlaGljbGVzL3BhZ2VzL3ZlaGljbGVzLWxpc3QtcGFnZS92ZWhpY2xlcy1saXN0LXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/vehicles/pages/vehicles-list-page/vehicles-list-page.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/vehicles/pages/vehicles-list-page/vehicles-list-page.component.ts ***!
  \***********************************************************************************/
/*! exports provided: VehiclesListPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclesListPageComponent", function() { return VehiclesListPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_store_vehicles_all_vehicles_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/vehicles/all-vehicles/state-service */ "./src/app/store/vehicles/all-vehicles/state-service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_core_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/firebase/firebase.service */ "./src/app/core/firebase/firebase.service.ts");





var VehiclesListPageComponent = /** @class */ (function () {
    function VehiclesListPageComponent(service, fbService) {
        this.service = service;
        this.fbService = fbService;
        this.vehicles$ = this.service.selectItems();
        this.clients$ = this.fbService.getAllClients();
        this.status$ = this.fbService.getAllStatus();
    }
    VehiclesListPageComponent.prototype.ngOnInit = function () {
    };
    VehiclesListPageComponent.prototype.onIsRealTimeChanged = function (isRealTime) {
        this.isStartListening$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(isRealTime);
        this.isUpdateRandomVehicles$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(isRealTime);
    };
    VehiclesListPageComponent.prototype.ngOnDestroy = function () {
        this.isStartListening$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
        this.isUpdateRandomVehicles$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
    };
    VehiclesListPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'veh-vehicles-list-page',
            template: __webpack_require__(/*! ./vehicles-list-page.component.html */ "./src/app/vehicles/pages/vehicles-list-page/vehicles-list-page.component.html"),
            styles: [__webpack_require__(/*! ./vehicles-list-page.component.scss */ "./src/app/vehicles/pages/vehicles-list-page/vehicles-list-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_store_vehicles_all_vehicles_state_service__WEBPACK_IMPORTED_MODULE_2__["VehiclesStateService"], src_app_core_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"]])
    ], VehiclesListPageComponent);
    return VehiclesListPageComponent;
}());



/***/ }),

/***/ "./src/app/vehicles/vehicles-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/vehicles/vehicles-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: VehiclesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclesRoutingModule", function() { return VehiclesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_layout_pages_layout_page_layout_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/layout/pages/layout-page/layout-page.component */ "./src/app/core/layout/pages/layout-page/layout-page.component.ts");
/* harmony import */ var _pages_vehicles_list_page_vehicles_list_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/vehicles-list-page/vehicles-list-page.component */ "./src/app/vehicles/pages/vehicles-list-page/vehicles-list-page.component.ts");





var routes = [
    {
        path: 'vehicles',
        component: _core_layout_pages_layout_page_layout_page_component__WEBPACK_IMPORTED_MODULE_3__["LayoutPageComponent"],
        children: [
            {
                path: '',
                component: _pages_vehicles_list_page_vehicles_list_page_component__WEBPACK_IMPORTED_MODULE_4__["VehiclesListPageComponent"]
            }
        ]
    }
];
var VehiclesRoutingModule = /** @class */ (function () {
    function VehiclesRoutingModule() {
    }
    VehiclesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], VehiclesRoutingModule);
    return VehiclesRoutingModule;
}());



/***/ }),

/***/ "./src/app/vehicles/vehicles.module.ts":
/*!*********************************************!*\
  !*** ./src/app/vehicles/vehicles.module.ts ***!
  \*********************************************/
/*! exports provided: VehiclesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclesModule", function() { return VehiclesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _vehicles_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vehicles-routing.module */ "./src/app/vehicles/vehicles-routing.module.ts");
/* harmony import */ var _pages_vehicles_list_page_vehicles_list_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/vehicles-list-page/vehicles-list-page.component */ "./src/app/vehicles/pages/vehicles-list-page/vehicles-list-page.component.ts");
/* harmony import */ var _components_vehicles_grid_vehicles_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/vehicles-grid/vehicles-grid.component */ "./src/app/vehicles/components/vehicles-grid/vehicles-grid.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_vehicles_filter_vehicles_filter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/vehicles-filter/vehicles-filter.component */ "./src/app/vehicles/components/vehicles-filter/vehicles-filter.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");











var VehiclesModule = /** @class */ (function () {
    function VehiclesModule() {
    }
    VehiclesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_pages_vehicles_list_page_vehicles_list_page_component__WEBPACK_IMPORTED_MODULE_4__["VehiclesListPageComponent"], _components_vehicles_grid_vehicles_grid_component__WEBPACK_IMPORTED_MODULE_5__["VehiclesGridComponent"], _components_vehicles_filter_vehicles_filter_component__WEBPACK_IMPORTED_MODULE_7__["VehiclesFilterComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _vehicles_routing_module__WEBPACK_IMPORTED_MODULE_3__["VehiclesRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"]
            ],
            providers: [_angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"]]
        })
    ], VehiclesModule);
    return VehiclesModule;
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
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyBT33oTNXihG0MU78PMUuFxR6KxijyDYRs",
        authDomain: "vehicles-monitor.firebaseapp.com",
        databaseURL: "https://vehicles-monitor.firebaseio.com",
        projectId: "vehicles-monitor",
        storageBucket: "vehicles-monitor.appspot.com",
        messagingSenderId: "992146194138"
    }
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

module.exports = __webpack_require__(/*! E:\sba\projects\Alten\client\vehicles-monitor\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map