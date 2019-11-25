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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"Ismaincontainer\">\n  <h1 class=\"text-center\">Find Falcone !</h1>\n  <h3 class=\"text-center\">select Planets you want to Search ?</h3>\n    <div class=\"row\">\n      <div class=\"col-sm-2\">\n     <label class=\"maxWidth\">Destination 1: </label>\n          <select  name=\"Planet1\" [(ngModel)]=\"Planet1\" (ngModelChange)=\"Plane1Change()\"  class=\"form-control\">\n            <option value=\"0\">--All--</option>\n            <option *ngFor=\"let Planet of planetList\" value={{Planet.name}}>\n                {{Planet.name}}\n            </option>\n          </select>\n        </div>\n      <div class=\"col-sm-2\">\n     <label class=\"maxWidth\">Destination 2: </label>\n          <select  name=\"Planet2\" [(ngModel)]=\"Planet2\" (ngModelChange)=\"Plane2Change()\" class=\"form-control\">\n            <option value=\"0\">--All--</option>\n            <option *ngFor=\"let Planet of planetList2\" value={{Planet.name}}>\n                {{Planet.name}}\n            </option>\n          </select>\n        </div>\n        <div  class=\"col-sm-2\">\n            <label class=\"maxWidth\"> Destination 3: </label>\n            <select  name=\"Planet3\" [(ngModel)]=\"Planet3\" (ngModelChange)=\"Plane3Change()\" class=\"form-control\">\n              <option value=\"0\">--All--</option>\n              <option *ngFor=\"let Planet of planetList3\" value={{Planet.name}}>\n                  {{Planet.name}}\n              </option>\n            </select>\n          </div>\n          <div  class=\"col-sm-2\">\n              <label class=\"maxWidth\">Destination 4: </label>\n              <select  name=\"Planet4\" [(ngModel)]=\"Planet4\"  (ngModelChange)=\"Plane4Change()\" class=\"form-control\">\n                <option value=\"0\">--All--</option>\n                <option *ngFor=\"let Planet of planetList4\" value={{Planet.name}}>\n                    {{Planet.name}}\n                </option>\n              </select>\n            </div>\n            <div class=\"col-sm-2\"></div>\n      </div>\n\n\n  <div class=\"row\">\n    <div class=\"col-sm-2\">\n       <div *ngIf=\"isPlanet1Selected\">\n          <div class=\"form-check\" *ngFor=\"let Vehicle of vehicleList\">\n                <input class=\"form-check-input\"  [(ngModel)]=\"dest1\" type=\"radio\" (ngModelChange)=\"changePlanet1(Vehicle)\"  name=\"dest1\" id=\"{{Vehicle.name}}+1\" value=\"{{Vehicle.name}}\">\n                <label class=\"form-check-label\" for=\"{{Vehicle.name}}+1\">\n                <p>{{Vehicle.name}} <span #radio1>({{Vehicle.total_no}}) </span> </p> \n                </label>\n          </div> \n        </div>\n      </div>\n      <div class=\"col-sm-2\" >\n          <div class=\"\" *ngIf=\"isPlanet2Selected\">\n                <div class=\"form-check\" *ngFor=\"let Vehicle2 of vehicleList2\">\n                  <input class=\"form-check-input\"    type=\"radio\"  [(ngModel)]=\"dest2\" (ngModelChange)=\"changePlanet2(Vehicle2)\" name=\"Planet2\" id=\"{{Vehicle2.name}}+2\" value=\"{{Vehicle2.name}}\">\n                  <label class=\"form-check-label\" for=\"{{Vehicle2.name}}+2\">\n                    <p>{{Vehicle2.name}} <span>({{Vehicle2.total_no -totalno}}) </span> </p> \n                  </label>\n              </div> \n         </div>\n      </div>\n      <div class=\"col-sm-2\">\n        <div class=\"\" *ngIf=\"isPlanet3Selected\">\n          <div class=\"form-check\" *ngFor=\"let Vehicle3 of vehicleList3\">\n                  <input class=\"form-check-input\" [disabled]=\"Vehicle3.name==dest1 || Vehicle3.name==dest2\" [(ngModel)]=\"dest3\" (ngModelChange)=\"changePlanet3(Vehicle3)\" type=\"radio\" name=\"dest3\" id=\"{{Vehicle3.name}}+3\" value=\"{{Vehicle3.name}}\">\n                  <label class=\"form-check-label\" for=\"{{Vehicle3.name}}+3\">\n                    <p [class.disabled]=\"Vehicle3.name==dest1 || Vehicle3.name==dest2\">{{Vehicle3.name}} <span> ({{Vehicle3.total_no}}) </span> </p> \n                  </label>\n          </div> \n         </div>\n      </div>\n      <div class=\"col-sm-2\">\n          <div class=\"\" *ngIf=\"isPlanet4Selected\">\n        <div class=\"form-check\" *ngFor=\"let Vehicle4 of vehicleList4;let i =index\">\n                  <input class=\"form-check-input\" [disabled]=\"Vehicle4.name!=dest3 \" [(ngModel)]=\"dest4\" (ngModelChange)=\"changePlanet4(Vehicle4)\" type=\"radio\" name=\"dest4\" id=\"{{Vehicle4.name}}+4\" value=\"{{Vehicle4.name}}\">\n                  <label class=\"form-check-label\"  for=\"{{Vehicle4.name}}+4\">\n                    <p [class.disabled]=\"Vehicle4.name!=dest3\">{{Vehicle4.name}} <span>({{Vehicle4.total_no}}) </span> </p> \n                  </label>\n        </div>\n       </div>\n      </div>\n      <div class=\"col-sm-2\">\n        <h3>Time taken: {{timeTaken1 +timeTaken2+timeTaken3+timeTaken4}}</h3>\n      </div>\n  </div>\n\n\n\n  <div class=\"row\">\n      <div class=\"text-center\">\n          <button class=\"btn btn-sm text-center btn-primary\" (click)=\"Post()\" [disabled]=\"!isFormValid\" >Find Falcone </button>\n        </div>\n</div>\n</div>\n<div class=\"container-fluid\"  *ngIf=\"isresult\">\n<div class=\"row text-center\"  *ngIf=\"FinalResult\">\n    <h2>Finding Falcone</h2>\n    <p>Success! Congratulations on Finding Falcone. King Shan is mightly pleased</p>\n    <p>Time taken: {{timeTaken1 +timeTaken2+timeTaken3+timeTaken4}}</p>\n    <p>Planet Found: {{FinalResult.planet_name}} </p>\n    <button class=\"btn btn-sm text-center btn-primary\" (click)=\"reset()\">Start Again </button>\n</div>\n  \n</div>\n\n\n"

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



var routes = [];
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

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-container {\n  display: flex;\n  padding: auto;\n  margin: auto;\n}\n\n.flex-container > div {\n  background-color: #f1f1f1;\n  margin: 10px;\n  padding: 20px;\n}\n\n.maxWidth {\n  width: 100%;\n}\n\n.flex-container .form-control {\n  display: initial;\n}\n\n.disabled {\n  color: lightgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRjpcXE1vbm9jZXB0RmFsY29uZS1tYXN0ZXIxMjMvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDQ0o7O0FER0U7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDQUo7O0FER0U7RUFDSSxXQUFBO0FDQU47O0FERUU7RUFDRixnQkFBQTtBQ0NBOztBRENFO0VBQ0UsZ0JBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOmF1dG87XG4gICAgbWFyZ2luOmF1dG87XG4gICAgXG4gIH1cbiAgXG4gIC5mbGV4LWNvbnRhaW5lciA+IGRpdiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBcbiAgfVxuICAubWF4V2lkdGh7XG4gICAgICB3aWR0aDoxMDAlO1xuICB9XG4gIC5mbGV4LWNvbnRhaW5lciAuZm9ybS1jb250cm9se1xuZGlzcGxheTppbml0aWFsO1xuICB9XG4gIC5kaXNhYmxlZHtcbiAgICBjb2xvcjpsaWdodGdyYXk7XG4gIH0iLCIuZmxleC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiBhdXRvO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5mbGV4LWNvbnRhaW5lciA+IGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gIG1hcmdpbjogMTBweDtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLm1heFdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mbGV4LWNvbnRhaW5lciAuZm9ybS1jb250cm9sIHtcbiAgZGlzcGxheTogaW5pdGlhbDtcbn1cblxuLmRpc2FibGVkIHtcbiAgY29sb3I6IGxpZ2h0Z3JheTtcbn0iXX0= */"

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
/* harmony import */ var _services_falcone_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/falcone.service */ "./src/app/services/falcone.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AppComponent = /** @class */ (function () {
    function AppComponent(falconeServie, router) {
        this.falconeServie = falconeServie;
        this.router = router;
        this.title = 'Falconemonocept';
        this.planetList = [];
        this.planetList2 = [];
        this.planetList3 = [];
        this.planetList4 = [];
        this.vehicleList = [];
        this.vehicleList2 = [];
        this.vehicleList3 = [];
        this.vehicleList4 = [];
        this.planet_names = [];
        this.vehicle_names = [];
        this.dest1 = "";
        this.dest2 = "";
        this.dest3 = "";
        this.dest4 = "";
        this.Ismaincontainer = true;
        this.isresult = false;
        this.Planet1 = "";
        this.Planet2 = "";
        this.Planet3 = "";
        this.Planet4 = "";
        this.timeTaken1 = 0;
        this.timeTaken2 = 0;
        this.timeTaken3 = 0;
        this.timeTaken4 = 0;
        this.totalno = 0;
        this.isPlanet1Selected = false;
        this.isPlanet2Selected = false;
        this.isPlanet3Selected = false;
        this.isPlanet4Selected = false;
        this.isFormValid = false;
        this.userDataSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getPlanets();
        this.getVehicles();
        this.falconeServie.getTokenFromAPI().subscribe(function (x) {
            console.log(x.token);
            localStorage.setItem('TOKEN', x.token);
        });
    };
    AppComponent.prototype.getPlanets = function () {
        var _this = this;
        this.falconeServie.getPlanets().subscribe(function (data) {
            var _a, _b;
            (_a = _this.planetList).push.apply(_a, data);
            (_b = _this.planetList2).push.apply(_b, data);
        });
        console.log(this.planetList);
    };
    AppComponent.prototype.getVehicles = function () {
        var _this = this;
        this.falconeServie.getVehicles().subscribe(function (data) {
            var _a, _b, _c, _d;
            _this.userDataSource.next(data);
            _this.vehicleList = [];
            _this.vehicleList2 = [];
            _this.vehicleList3 = [];
            _this.vehicleList4 = [];
            (_a = _this.vehicleList).push.apply(_a, data);
            (_b = _this.vehicleList2).push.apply(_b, data);
            (_c = _this.vehicleList3).push.apply(_c, data);
            (_d = _this.vehicleList4).push.apply(_d, data);
        });
        // console.log(this.vehicleList);
        // console.log("this.vehicleList");
    };
    AppComponent.prototype.changePlanet1 = function (filterVal) {
        var _this = this;
        //console.log(this.vehicleList);
        if (this.vehicleList.find(function (x) { return x.name == filterVal.name; })) {
            this.falconeServie.getVehicles().subscribe(function (data) {
                _this.vehicleList = data;
                _this.vehicleList.find(function (x) { return x.name == filterVal.name; }).total_no = (data.find(function (x) { return x.name == filterVal.name; }).total_no - 1);
                _this.vehicleList2.find(function (x) { return x.name == filterVal.name; }).total_no = _this.vehicleList.find(function (x) { return x.name == filterVal.name; }).total_no;
            });
        }
        this.timeTaken1 = (filterVal.max_distance - this.planetList.find(function (x) { return x.name == _this.Planet1; }).distance) / filterVal.speed;
        this.isValid();
    };
    AppComponent.prototype.changePlanet2 = function (filterVal) {
        var _this = this;
        if (this.vehicleList2.find(function (x) { return x.name == filterVal.name; })) {
            //  this.vehicleList2 =this.vehicleList; 
            this.vehicleList2.find(function (x) { return x.name == filterVal.name; }).total_no = (this.vehicleList.find(function (x) { return x.name == filterVal.name; }).total_no) - 1;
        }
        this.timeTaken2 = (filterVal.max_distance - this.planetList.find(function (x) { return x.name == _this.Planet2; }).distance) / filterVal.speed;
        this.isValid();
    };
    AppComponent.prototype.changePlanet3 = function (filterVal) {
        var _this = this;
        console.log(this.dest1);
        console.log(this.dest2);
        if (this.vehicleList2.find(function (x) { return x.name == filterVal.name; })) {
            this.vehicleList2.find(function (x) { return x.name == filterVal.name; }).total_no = (this.vehicleList.find(function (x) { return x.name == filterVal.name; }).total_no) - 1;
        }
        this.timeTaken3 = (filterVal.max_distance - this.planetList.find(function (x) { return x.name == _this.Planet3; }).distance) / filterVal.speed;
        this.isValid();
    };
    AppComponent.prototype.changePlanet4 = function (filterVal) {
        var _this = this;
        this.timeTaken4 = (filterVal.max_distance - this.planetList.find(function (x) { return x.name == _this.Planet4; }).distance) / filterVal.speed;
        this.isValid();
    };
    AppComponent.prototype.Post = function () {
        var _this = this;
        this.planet_names = [];
        this.vehicle_names = [];
        this.planet_names.push(this.Planet1);
        this.planet_names.push(this.Planet2);
        this.planet_names.push(this.Planet3);
        this.planet_names.push(this.Planet4);
        this.vehicle_names.push(this.dest1);
        this.vehicle_names.push(this.dest2);
        this.vehicle_names.push(this.dest3);
        this.vehicle_names.push(this.dest4);
        console.log(this.planet_names);
        console.log(this.vehicle_names);
        this.falconeServie.FindFalcon(this.planet_names, this.vehicle_names).subscribe(function (x) {
            console.log(x);
            _this.FinalResult = x;
        });
        this.Ismaincontainer = false;
        this.isresult = true;
    };
    AppComponent.prototype.Plane3Change = function () {
        var _this = this;
        this.isPlanet3Selected = true;
        this.planetList4 = [];
        this.planetList3.forEach(function (x) {
            if (x.name != _this.Planet3) {
                _this.planetList4.push(x);
            }
        });
        this.isValid();
    };
    AppComponent.prototype.Plane1Change = function () {
        var _this = this;
        this.isPlanet1Selected = true;
        this.planetList2 = [];
        this.planetList.forEach(function (x) {
            if (x.name != _this.Planet1) {
                _this.planetList2.push(x);
            }
        });
        this.isValid();
    };
    AppComponent.prototype.Plane2Change = function () {
        var _this = this;
        this.isPlanet2Selected = true;
        this.planetList3 = [];
        this.planetList2.forEach(function (x) {
            if (x.name != _this.Planet2) {
                _this.planetList3.push(x);
            }
        });
        this.isValid();
    };
    AppComponent.prototype.Plane4Change = function () {
        var _this = this;
        this.isPlanet4Selected = true;
        this.planetList4 = [];
        this.planetList3.forEach(function (x) {
            if (x.name != _this.Planet3) {
                _this.planetList4.push(x);
            }
        });
        this.isValid();
    };
    AppComponent.prototype.isValid = function () {
        if (this.dest1.length > 0 && this.dest2.length > 0 && this.dest3.length > 0 && this.dest4.length > 0 && this.Planet1.length > 0 && this.Planet2.length > 0 && this.Planet3 && this.Planet4.length > 0) {
            this.isFormValid = true;
        }
        else {
            this.isFormValid = false;
        }
    };
    AppComponent.prototype.reset = function () {
        this.isresult = false;
        this.isFormValid = false;
        // this.planetList=[];
        // this.planetList=[];
        // this.planetList2=[];
        // this.planetList3=[];
        // this.planetList4=[];
        this.vehicleList = [];
        this.vehicleList2 = [];
        this.vehicleList3 = [];
        this.vehicleList4 = [];
        this.planet_names = [];
        this.vehicle_names = [];
        this.Ismaincontainer = true;
        this.timeTaken1 = 0;
        this.timeTaken2 = 0;
        this.timeTaken3 = 0;
        this.timeTaken4 = 0;
        //     this.falconeServie.getTokenFromAPI().subscribe(x=>{
        //     console.log(x.token);
        //     localStorage.setItem('TOKEN',x.token);
        //  })
    };
    AppComponent.ctorParameters = function () { return [
        { type: _services_falcone_service__WEBPACK_IMPORTED_MODULE_2__["FalconeService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('radio1', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AppComponent.prototype, "currentradio", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default,
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_falcone_service__WEBPACK_IMPORTED_MODULE_2__["FalconeService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_falcone_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/falcone.service */ "./src/app/services/falcone.service.ts");
/* harmony import */ var _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/token-interceptor.service */ "./src/app/services/token-interceptor.service.ts");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");












var routes = [
    { path: '', component: _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_11__["BsDropdownModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes),
            ],
            providers: [_services_falcone_service__WEBPACK_IMPORTED_MODULE_9__["FalconeService"], _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_10__["TokenInterceptorService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
                    useClass: _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_10__["TokenInterceptorService"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/services/falcone.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/falcone.service.ts ***!
  \*********************************************/
/*! exports provided: FalconeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FalconeService", function() { return FalconeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var FalconeService = /** @class */ (function () {
    function FalconeService(http) {
        this.http = http;
        this.planets_url = 'https://findfalcone.herokuapp.com/planets';
        this.vehicles_url = 'https://findfalcone.herokuapp.com/vehicles';
        this.token = 'https://findfalcone.herokuapp.com/token';
        this.find = 'https://findfalcone.herokuapp.com/find';
    }
    FalconeService.prototype.getPlanets = function () {
        return this.http.get(this.planets_url);
    };
    FalconeService.prototype.getVehicles = function () {
        return this.http.get(this.vehicles_url);
    };
    FalconeService.prototype.getTokenFromAPI = function () {
        return this.http.post(this.token, null, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Accept': 'application/json' }) });
    };
    FalconeService.prototype.getGeneatetoken = function () {
        return !!localStorage.getItem('TOKEN');
    };
    FalconeService.prototype.getToken = function () {
        return localStorage.getItem('TOKEN');
    };
    FalconeService.prototype.FindFalcon = function (planetnames, vehiclenames) {
        var request = {
            "token": localStorage.getItem('TOKEN'),
            "planet_names": planetnames,
            "vehicle_names": vehiclenames
        };
        console.log(request);
        return this.http.post(this.find, JSON.stringify(request), { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Accept': 'application/json', 'Content-Type': 'application/json' }) });
    };
    FalconeService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    FalconeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FalconeService);
    return FalconeService;
}());



/***/ }),

/***/ "./src/app/services/token-interceptor.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/token-interceptor.service.ts ***!
  \*******************************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _falcone_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./falcone.service */ "./src/app/services/falcone.service.ts");



var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService(injector) {
        this.injector = injector;
    }
    TokenInterceptorService.prototype.intercept = function (request, next) {
        var falconeService = this.injector.get(_falcone_service__WEBPACK_IMPORTED_MODULE_2__["FalconeService"]);
        var tokenreq = request.clone({
        //  setHeaders:{
        //    authorization:'xx yyx x',
        //  }
        });
        return next.handle(tokenreq);
    };
    TokenInterceptorService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
    ]; };
    TokenInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], TokenInterceptorService);
    return TokenInterceptorService;
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

module.exports = __webpack_require__(/*! F:\MonoceptFalcone-master123\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map