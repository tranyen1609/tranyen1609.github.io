(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/@angular/compiler/src sync recursive":
/*!*************************************************!*\
  !*** ./node_modules/@angular/compiler/src sync ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/@angular/compiler/src sync recursive";

/***/ }),

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

/***/ "./src/app/Modal/user-address/user-address.component.css":
/*!***************************************************************!*\
  !*** ./src/app/Modal/user-address/user-address.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-action{\r\n    display: flex;\r\n    justify-content: center;\r\n}"

/***/ }),

/***/ "./src/app/Modal/user-address/user-address.component.html":
/*!****************************************************************!*\
  !*** ./src/app/Modal/user-address/user-address.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">CREATE ACCOUNT</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <form novalidate [formGroup]=\"formUsers\" (ngSubmit)=\"createUser()\">\n      <table class=\"table table-borderless\">\n        <tbody>\n          <tr>\n            <th>User name*</th>\n            <td>\n              <input class=\"form-control\" type=\"text\" formControlName=\"username\" placeholder=\"Username is at least 2 characters\">\n              <app-validate [control]=\"formUsers.controls.username\" [namecontrol]=\"Username\"></app-validate>\n            </td>\n          </tr>\n          <tr>\n            <th>Password*</th>\n            <td>\n              <input class=\"form-control\" type=\"password\" formControlName=\"password\" placeholder=\"Password is at least 5 characters\">\n            </td>\n          </tr>\n          <tr>\n            <th>Phone Number</th>\n            <td>\n              <input class=\"form-control\" type=\"text\" formControlName=\"phone\">\n            </td>\n          </tr>\n          <tr>\n            <th>Email</th>\n            <td>\n              <input class=\"form-control\" type=\"text\" formControlName=\"email\" placeholder=\"Ex: a@b.c\">\n              <!-- <app-validate [control]=\"formUsers.controls.email\" [name-control]=\"email\"></app-validate> -->\n            </td>\n          </tr>\n          <!-- <tr>\n            <th>Day of Birth</th>\n            <td>\n              <input type=\"date\" class=\"form-control\" [(ngModel)]=\"newBirthday\" name=\"day\">\n            </td>\n          </tr> -->\n        </tbody>\n      </table>\n      <fieldset formGroupName=\"addressHome\">\n        <div id=\"accordion\">\n          <div class=\"card\">\n            <a class=\"card-header card-link\" data-toggle=\"collapse\" href=\"#collapseOne\">\n              Home address\n              <img src=\"../../assets/images/expandmore.png\">\n            </a>\n            <div id=\"collapseOne\" class=\"collapse\" data-parent=\"#accordion\">\n              <div class=\"card-body\">\n                <table class=\"table table-borderless\">\n                  <tbody>\n                    <tr class=\"form-group\">\n                      <th for=\"my-input\">Country</th>\n                      <td>\n                        <select class=\"form-control\" formControlName=\"idCountry_Home\" (change)=\"getCitiesFromId_Home($event.target.value)\">\n                          <option [value]=\"0\">Select country</option>\n                          <option *ngFor=\"let ctr of countryData_Home.countries\" [value]=\"ctr.id\">{{ ctr.name }}</option>\n                        </select>\n                      </td>\n                    </tr>\n                    <tr class=\"form-group\">\n                      <th for=\"my-input\">City</th>\n                      <td>\n                        <select id=\"my-input\" class=\"form-control\" formControlName=\"idCity_Home\" (change)=\"getDistrictsFromId_Home($event.target.value)\">\n                          <option [value]=\"0\">Select city</option>\n                          <option *ngFor=\"let ct of cityData_Home.cities\" [value]=\"ct.id\">{{ ct.name }}</option>\n                        </select>\n                      </td>\n                    </tr>\n                    <tr class=\"form-group\">\n                      <th for=\"my-input\">District</th>\n                      <td>\n                        <select id=\"my-input\" class=\"form-control\" formControlName=\"idDistrict_Home\">\n                          <option [value]=\"0\">Select district</option>\n                          <option *ngFor=\"let d of districtData_Home.districts\" [value]=\"d.id\">{{ d.name }}</option>\n                        </select>\n                      </td>\n                    </tr>\n                    <tr>\n                      <th>Street</th>\n                      <td>\n                        <input class=\"form-control\" type=\"text\" formControlName=\"newStreet_Home\">\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n      </fieldset>\n\n      <fieldset formGroupName=\"addressWork\">\n        <div id=\"accordion\">\n          <div class=\"card\">\n            <a class=\"card-header card-link\" data-toggle=\"collapse\" href=\"#collapseWork\">\n              Work address\n              <img src=\"../../assets/images/expandmore.png\">\n            </a>\n            <div id=\"collapseWork\" class=\"collapse\" data-parent=\"#accordion\">\n              <div class=\"card-body\">\n                <table class=\"table table-borderless\">\n                  <tbody>\n                    <tr class=\"form-group\">\n                      <th for=\"my-input\">Country</th>\n                      <td>\n                        <select class=\"form-control\" formControlName=\"idCountry_Work\" (change)=\"getCitiesFromId_Work($event.target.value)\">\n                          <option [value]=\"0\">Select country</option>\n                          <option *ngFor=\"let ctr of countryData_Work.countries\" [value]=\"ctr.id\">{{ ctr.name }}</option>\n                        </select>\n                      </td>\n                    </tr>\n                    <tr class=\"form-group\">\n                      <th for=\"my-input\">City</th>\n                      <td>\n                        <select id=\"my-input\" class=\"form-control\" formControlName=\"idCity_Work\" (change)=\"getDistrictsFromId_Work($event.target.value)\">\n                          <option [value]=\"0\">Select city</option>\n                          <option *ngFor=\"let ct of cityData_Work.cities\" [value]=\"ct.id\">{{ ct.name }}</option>\n                        </select>\n                      </td>\n                    </tr>\n                    <tr class=\"form-group\">\n                      <th for=\"my-input\">District</th>\n                      <td>\n                        <select id=\"my-input\" class=\"form-control\" formControlName=\"idDistrict_Work\">\n                          <option [value]=\"0\">Select district</option>\n                          <option *ngFor=\"let d of districtData_Work.districts\" [value]=\"d.id\">{{ d.name }}</option>\n                        </select>\n                      </td>\n                    </tr>\n                    <tr>\n                      <th>Street</th>\n                      <td>\n                        <input class=\"form-control\" type=\"text\" formControlName=\"newStreet_Work\">\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n      </fieldset>\n\n      <div class=\"modal-footer\">\n        <button type=\"submit\" class=\"btn btn-primary\" data-dismiss=\"modal\" [disabled]=\"formUsers.invalid\">Save</button>\n      </div>\n    </form>\n  </div>\n</ng-template>\n\n<div class=\"btn-action\">\n  <button class=\"btn btn-primary\" (click)=\"open(content)\">ADD USER</button>\n</div>"

/***/ }),

/***/ "./src/app/Modal/user-address/user-address.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/Modal/user-address/user-address.component.ts ***!
  \**************************************************************/
/*! exports provided: UserAddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAddressComponent", function() { return UserAddressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_address_address_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/address/address.service */ "./src/services/address/address.service.ts");
/* harmony import */ var _models_country__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/country */ "./src/models/country.ts");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/user */ "./src/models/user.ts");
/* harmony import */ var _models_address__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models/address */ "./src/models/address.ts");
/* harmony import */ var _models_city__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../models/city */ "./src/models/city.ts");
/* harmony import */ var _models_district__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../models/district */ "./src/models/district.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var UserAddressComponent = /** @class */ (function () {
    function UserAddressComponent(modalService, addressService, fb) {
        this.modalService = modalService;
        this.addressService = addressService;
        this.fb = fb;
        this.countryData_Home = new _models_country__WEBPACK_IMPORTED_MODULE_4__["CountryData"]();
        this.cityData_Home = new _models_city__WEBPACK_IMPORTED_MODULE_7__["CityData"]();
        this.districtData_Home = new _models_district__WEBPACK_IMPORTED_MODULE_8__["DistrictData"]();
        this.countryData_Work = new _models_country__WEBPACK_IMPORTED_MODULE_4__["CountryData"]();
        this.cityData_Work = new _models_city__WEBPACK_IMPORTED_MODULE_7__["CityData"]();
        this.districtData_Work = new _models_district__WEBPACK_IMPORTED_MODULE_8__["DistrictData"]();
    }
    UserAddressComponent.prototype.ngOnInit = function () {
        this.createForm();
        this.getCountries_Home();
        this.getCountries_Work();
    };
    UserAddressComponent.prototype.createForm = function () {
        this.formUsers = this.fb.group({
            username: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)
                ]],
            password: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)
                ]],
            phone: [''],
            email: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
                ]],
            addressHome: this.fb.group({
                idCountry_Home: [0],
                idCity_Home: [0],
                idDistrict_Home: [0],
                newStreet_Home: [''],
            }),
            addressWork: this.fb.group({
                idCountry_Work: [0],
                idCity_Work: [0],
                idDistrict_Work: [0],
                newStreet_Work: [''],
            })
        });
    };
    UserAddressComponent.prototype.createUser = function () {
        var user = new _models_user__WEBPACK_IMPORTED_MODULE_5__["User"](this.formUsers.get('username').value, this.formUsers.get('password').value);
        var address = new _models_address__WEBPACK_IMPORTED_MODULE_6__["Address"](1, this.formUsers.get('addressHome.idCountry_Home').value, this.formUsers.get('addressHome.idCity_Home').value, this.formUsers.get('addressHome.idDistrict_Home').value, this.formUsers.get('addressHome.newStreet_Home').value);
        var address2 = new _models_address__WEBPACK_IMPORTED_MODULE_6__["Address"](2, this.formUsers.get('addressWork.idCountry_Work').value, this.formUsers.get('addressWork.idCity_Work').value, this.formUsers.get('addressWork.idDistrict_Work').value, this.formUsers.get('addressWork.newStreet_Work').value);
        var addresses = [address, address2];
        return this.addressService.createUserAddress(user, addresses).subscribe(function (data) {
            window.location.reload();
        });
    };
    //Home address
    UserAddressComponent.prototype.getCountries_Home = function () {
        var _this = this;
        return this.addressService.getCountries().subscribe(function (data) {
            _this.countryData_Home = data;
        });
    };
    UserAddressComponent.prototype.getCitiesFromId_Home = function (id) {
        var _this = this;
        return this.addressService.getCitiesFromId(id).subscribe(function (data) {
            _this.cityData_Home = data;
            _this.getDistrictsFromId_Home(0);
            _this.formUsers.get('addressHome').patchValue({
                idCity_Home: 0,
                idDistrict_Home: 0
            });
        });
    };
    UserAddressComponent.prototype.getDistrictsFromId_Home = function (id) {
        var _this = this;
        return this.addressService.getDistrictsFromId(id).subscribe(function (data) {
            _this.districtData_Home = data;
        });
    };
    //Work address
    UserAddressComponent.prototype.getCountries_Work = function () {
        var _this = this;
        return this.addressService.getCountries().subscribe(function (data) {
            _this.countryData_Work = data;
        });
    };
    UserAddressComponent.prototype.getCitiesFromId_Work = function (id) {
        var _this = this;
        return this.addressService.getCitiesFromId(id).subscribe(function (data) {
            _this.cityData_Work = data;
            _this.getDistrictsFromId_Work(0);
            _this.formUsers.get('addressWork').patchValue({
                idCity_Work: 0,
                idDistrict_Work: 0
            });
        });
    };
    UserAddressComponent.prototype.getDistrictsFromId_Work = function (id) {
        var _this = this;
        return this.addressService.getDistrictsFromId(id).subscribe(function (data) {
            _this.districtData_Work = data;
        });
    };
    UserAddressComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', backdrop: "static", size: "lg" }).result.then(function (result) {
            _this.createForm();
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            _this.createForm();
        });
    };
    UserAddressComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    UserAddressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-address',
            template: __webpack_require__(/*! ./user-address.component.html */ "./src/app/Modal/user-address/user-address.component.html"),
            styles: [__webpack_require__(/*! ./user-address.component.css */ "./src/app/Modal/user-address/user-address.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], _services_address_address_service__WEBPACK_IMPORTED_MODULE_3__["AddressService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], UserAddressComponent);
    return UserAddressComponent;
}());



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
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-detail/user-detail.component */ "./src/app/user-detail/user-detail.component.ts");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import { CommonModule } from '@angular/common';

//import các module cần điều hướng



// import { ContactComponent } from './contact/contact.component';


var routes = [
    //khai báo route mặc định, tức là khi ko chỉ định path cụ thể thì sẽ mở màn hình này đầu tiên
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    //Khai báo các route
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'user', component: _users_users_component__WEBPACK_IMPORTED_MODULE_5__["UsersComponent"] },
    // {path: 'contact', component : ContactComponent},
    //Truyền vào id để xem chi tiết
    { path: 'detail/:id', component: _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_3__["UserDetailComponent"] },
    //Khi nhập sai link sẽ tự chuyển vào component này (Dòng này phải được đặt cuối cùng của route)
    { path: '**', component: _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_4__["PagenotfoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                //CommonModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes) //Khởi chạy đầu tiên khi app chúng ta chạy
            ],
            //Không dùng đến declarations
            //declarations: []
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

module.exports = ".header{\r\n    width: 100%;\r\n    height: 50px;\r\n    background-color: #4267B2;\r\n    padding: 10px 10px;   \r\n}\r\n.main-body{\r\n    clear: both;\r\n    background-color: #E9EBEE;\r\n    display: flex;\r\n    justify-content: center;\r\n    height: 900px;\r\n}\r\n.container-body{\r\n    \r\n    width: 80%;\r\n}\r\n.side-bar{\r\n    clear: both;\r\n    float: left;\r\n    width: 30%;\r\n    /* border-right: 1px solid gray; */\r\n    background-color: #E9EBEE;\r\n    padding-top: 10px;\r\n}\r\n.content{\r\n    float: right;\r\n    width: 70%;\r\n    background-color: #E9EBEE;\r\n    padding-top: 10px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"getStaticEToken(); else abc\">\r\n    <div class=\"header\">\r\n        <app-header></app-header>\r\n    </div>\r\n    <div class=\"main-body\">\r\n        <div class=\"container-body\">\r\n            <div class=\"side-bar\">\r\n                <app-sidebar></app-sidebar>\r\n            </div>\r\n            <div class=\"content\">\r\n                <router-outlet></router-outlet>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<ng-template #abc>\r\n        <app-login></app-login>\r\n</ng-template>\r\n\r\n"

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
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
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
    function AppComponent(token) {
        this.token = token;
        this.checkToken();
    }
    AppComponent_1 = AppComponent;
    AppComponent.prototype.getStaticEToken = function () {
        return AppComponent_1.expiredToken;
    };
    AppComponent.prototype.checkToken = function () {
        var isExpired;
        try {
            isExpired = this.token.isTokenExpired(localStorage.getItem("token"));
            if (isExpired === true) {
                AppComponent_1.expiredToken = false;
                console.log("token hết hạn");
            }
            else {
                AppComponent_1.expiredToken = true;
                console.log("token còn hạn");
            }
        }
        catch (err) {
            AppComponent_1.expiredToken = false;
            localStorage.removeItem("token");
        }
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = AppComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtHelperService"]])
    ], AppComponent);
    return AppComponent;
    var AppComponent_1;
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _modal_addressDetails_addressDetails_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal/addressDetails/addressDetails.Modal */ "./src/app/modal/addressDetails/addressDetails.Modal.ts");
/* harmony import */ var _modal_user_detail_modal_user_detail_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal/user-detail-modal/user-detail.modal */ "./src/app/modal/user-detail-modal/user-detail.modal.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _services_users_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/users/user.service */ "./src/services/users/user.service.ts");
/* harmony import */ var _services_address_address_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/address/address.service */ "./src/services/address/address.service.ts");
/* harmony import */ var _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-detail/user-detail.component */ "./src/app/user-detail/user-detail.component.ts");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _Modal_user_address_user_address_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Modal/user-address/user-address.component */ "./src/app/Modal/user-address/user-address.component.ts");
/* harmony import */ var _validate_validate_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./validate/validate.component */ "./src/app/validate/validate.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























// import { ContactComponent } from './contact/contact.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_12__["UserDetailComponent"],
                _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_13__["PagenotfoundComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_14__["UsersComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_17__["SidebarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
                _modal_addressDetails_addressDetails_Modal__WEBPACK_IMPORTED_MODULE_5__["NgbdModalBasic"],
                _modal_user_detail_modal_user_detail_modal__WEBPACK_IMPORTED_MODULE_6__["UserDetailModal"],
                _Modal_user_address_user_address_component__WEBPACK_IMPORTED_MODULE_21__["UserAddressComponent"],
                _validate_validate_component__WEBPACK_IMPORTED_MODULE_22__["ValidateComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_15__["NgxPaginationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_20__["AngularFontAwesomeModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_19__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: function () {
                            return localStorage.getItem("token");
                        },
                        whitelistedDomains: ['localhost:5000'],
                        skipWhenExpired: true
                    }
                })
            ],
            providers: [
                _services_users_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"],
                _services_address_address_service__WEBPACK_IMPORTED_MODULE_11__["AddressService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"logo\">\r\n        <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\">\r\n            <img src=\"../../assets/images/dxcLogo.svg\">\r\n            <span>DXC VIETNAM</span>\r\n        </a>\r\n    </div>\r\n    <div class=\"info\">\r\n        Hello\r\n        <strong>{{ name }}</strong>!\r\n        <button class=\"logout\" (click)=\"logoutUser()\">Logout</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 80%; }\n\n.info {\n  float: right;\n  color: white; }\n\n.logout {\n  color: white;\n  border: none;\n  background-color: #4267B2;\n  border-left: 1px solid black; }\n\n.logout :hover {\n    background-color: #3B5DA0;\n    border-radius: 5px; }\n\n.logo {\n  float: left;\n  color: white; }\n\n.logo img {\n    width: 40px;\n    height: auto;\n    float: left;\n    margin-top: -8px; }\n\n.logo span {\n    color: black;\n    margin-left: 5px;\n    font-weight: bold;\n    font-size: 20px;\n    margin-top: -10px;\n    float: left; }\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
        this.name = localStorage.getItem("user");
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.logoutUser = function () {
        localStorage.removeItem("token");
        _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].expiredToken = false;
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home\">\r\n    <p>Welcome to my website!</p>\r\n    <video src=\"../../assets/video/dxc.mp4\" autoplay autobuffer autoloop loop controls></video>\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home {\n  background-color: white;\n  border-radius: 5px;\n  height: 450px; }\n  .home p {\n    padding-top: 10px;\n    text-align: center;\n    font-size: 20px;\n    font-weight: bold; }\n  .home video {\n    margin-left: 35px;\n    width: 90%; }\n"

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


var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    HomeComponent.prototype.ngOnInit = function () {
        // this.router.navigate(['main']);
        // this.activatedRoute.params['main'];
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login\">\r\n  \r\n  <div class=\"frm-login\">\r\n    <p>{{ status }}</p><br>\r\n    <h1>LOGIN</h1>\r\n    <form (ngSubmit)=\"loginUser()\" #form=\"ngForm\">\r\n      <table class=\"table table-borderless\">\r\n        <tbody>\r\n          <tr>\r\n            <td>User name:</td>\r\n            <td><input type=\"text\" required [(ngModel)]=\"myName\" name=\"user\" #name=\"ngModel\" autofocus></td>\r\n            <td><div class=\"status\" *ngIf=\"name?.errors?.required && name?.touched\">Enter your user name!</div></td>\r\n          </tr>\r\n          <tr>\r\n            <td>Password:</td>\r\n            <td><input type=\"password\" required [(ngModel)]=\"myPassword\" name=\"pass\" #pass=\"ngModel\"></td>\r\n            <td><div class=\"status\" *ngIf=\"pass?.errors?.required && pass?.touched\">Enter your password!</div></td>\r\n          </tr> \r\n        </tbody>\r\n      </table>\r\n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"form.invalid\">Login</button><br>\r\n    </form>\r\n    \r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login {\n  height: 600px;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center; }\n  .login p {\n    color: red; }\n  .status {\n  color: red; }\n  input.ng-invalid.ng-touched {\n  border: 1px solid red; }\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/user */ "./src/models/user.ts");
/* harmony import */ var _services_users_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/users/user.service */ "./src/services/users/user.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(location, router, userService) {
        this.location = location;
        this.router = router;
        this.userService = userService;
        this.status = "";
        this.userdata = new _models_user__WEBPACK_IMPORTED_MODULE_2__["UserData"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("token")) {
            this.router.navigate(['home']);
        }
    };
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        //Tạo user truyền 2 tham số nhập vào
        var user = new _models_user__WEBPACK_IMPORTED_MODULE_2__["User"](this.myName, this.myPassword);
        //Gọi hàm loginUser truyền tham số vào và Subcribe là thực hiện các lệnh
        return this.userService.loginUser(user).subscribe(function (data) {
            _this.userdata = data;
            if (data.status === 0)
                _this.status = "error code " + data.status + " and error detail: " + data.message;
            else {
                localStorage.setItem("token", data["token"]);
                if (localStorage.getItem("token") != "") {
                    localStorage.setItem("user", _this.myName);
                    _this.router.navigate(['home']);
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"].expiredToken = true;
                }
                else {
                    _this.status = _this.userdata.error.message;
                }
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_users_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/modal/addressDetails/addressDetails.Modal.ts":
/*!**************************************************************!*\
  !*** ./src/app/modal/addressDetails/addressDetails.Modal.ts ***!
  \**************************************************************/
/*! exports provided: NgbdModalBasic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalBasic", function() { return NgbdModalBasic; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_address_address_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/address/address.service */ "./src/services/address/address.service.ts");
/* harmony import */ var _models_address__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/address */ "./src/models/address.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NgbdModalBasic = /** @class */ (function () {
    function NgbdModalBasic(modalService, data, fb) {
        this.modalService = modalService;
        this.data = data;
        this.fb = fb;
        this._addressDetail = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NgbdModalBasic.prototype.ngOnInit = function () {
        if (this.modalType === 'edit')
            this.getUserAddressOfId();
        else if (this.modalType === 'add') {
            this.addressIds = new _models_address__WEBPACK_IMPORTED_MODULE_3__["Address"]();
            this.getAddressType();
            this.getCountry();
            this.createForm();
        }
    };
    NgbdModalBasic.prototype.createForm = function () {
        this.formUsers = this.fb.group({
            id: [this.modalUDId],
            addressTypeId: [this.addressIds.addressTypeId, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
                ]],
            countryId: [this.addressIds.countryId, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
                ]],
            cityId: [this.addressIds.cityId, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
                ]],
            districtId: [this.addressIds.districtId, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
                ]],
            street: [this.addressIds.street, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
                ]]
        });
    };
    NgbdModalBasic.prototype.getUserAddressOfId = function () {
        var _this = this;
        this.data.AgetAddressFromId(this.modalUDId).subscribe(function (result) {
            _this.addressIds = result.address;
            _this.getAddressType();
            _this.getCountry();
            _this.getCitiesOfCountryId(_this.addressIds.countryId);
            _this.getDistrictsOfCityId(_this.addressIds.cityId);
            _this.createForm();
        });
    };
    NgbdModalBasic.prototype.getAddressType = function () {
        var _this = this;
        this.data.AgetAddressTypes().subscribe(function (result) {
            _this.addressTypes = result.addressTypes;
        });
    };
    NgbdModalBasic.prototype.getCountry = function () {
        var _this = this;
        this.data.AgetCountries().subscribe(function (result) {
            _this.countries = result.countries;
        });
    };
    NgbdModalBasic.prototype.getCitiesOfCountryId = function (id) {
        var _this = this;
        this.data.AgetCitiesOfCountryId(id).subscribe(function (result) {
            _this.cities = result.cities;
        });
    };
    NgbdModalBasic.prototype.getDistrictsOfCityId = function (id) {
        var _this = this;
        this.data.AgetDistrictOfCityId(id).subscribe(function (result) {
            _this.districts = result.districts;
        });
    };
    NgbdModalBasic.prototype.changeCountry = function (id) {
        this.addressIds = null;
        this.districts = null;
        this.getCitiesOfCountryId(id);
        this.formUsers.patchValue({
            cityId: null,
        });
    };
    NgbdModalBasic.prototype.changeCity = function (id) {
        if (id != null)
            this.getDistrictsOfCityId(id);
        this.formUsers.patchValue({
            districtId: null,
            street: ""
        });
    };
    NgbdModalBasic.prototype.actionAddress = function () {
        var _this = this;
        var addressType = this.addressTypes.find(function (obj) { return obj.id === _this.formUsers.value.addressTypeId; });
        var district = this.districts.find(function (obj) { return obj.id === _this.formUsers.value.districtId; });
        var city = this.cities.find(function (obj) { return obj.id === _this.formUsers.value.cityId; });
        var country = this.countries.find(function (obj) { return obj.id === _this.formUsers.value.countryId; });
        if (this.modalType === 'edit') {
            this.data.AupdateAddressFromId(this.modalUDId, this.formUsers.value).subscribe(function () {
                if (district && city && country)
                    _this._addressDetail.emit({
                        modalType: _this.modalType,
                        addressInfo: {
                            id: _this.formUsers.value.id,
                            street: _this.formUsers.value.street,
                            addressType: addressType.name,
                            district: district.name,
                            city: city.name,
                            country: country.name
                        }
                    });
            }, function (err) { return console.log("error subscribe: " + err); }, function () { return console.log("not error!"); });
        }
        else if (this.modalType === 'add') {
            this.data.AaddAddress(this.userId, this.formUsers.value).subscribe(function (result) {
                var addressId = result.address.id;
                if (district && city && country)
                    _this._addressDetail.emit({
                        modalType: _this.modalType,
                        addressInfo: {
                            id: addressId,
                            street: _this.formUsers.value.street,
                            addressType: addressType.name,
                            district: district.name,
                            city: city.name,
                            country: country.name
                        }
                    });
            }, function (err) { return console.log("loi subscribe: " + err); }, function () {
            });
        }
    };
    NgbdModalBasic.prototype.open = function (content) {
        var _this = this;
        //reset form when user click add from time of two.
        if (this.modalType === 'add') {
            this.addressIds = new _models_address__WEBPACK_IMPORTED_MODULE_3__["Address"]();
            this.createForm();
        }
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', backdrop: "static" }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
            _this.actionAddress();
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    NgbdModalBasic.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], NgbdModalBasic.prototype, "modalUDId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], NgbdModalBasic.prototype, "userId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NgbdModalBasic.prototype, "modalType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NgbdModalBasic.prototype, "_addressDetail", void 0);
    NgbdModalBasic = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-modal-basic',
            template: __webpack_require__(/*! ./addressDetails.modal.html */ "./src/app/modal/addressDetails/addressDetails.modal.html")
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], _services_address_address_service__WEBPACK_IMPORTED_MODULE_2__["AddressService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], NgbdModalBasic);
    return NgbdModalBasic;
}());



/***/ }),

/***/ "./src/app/modal/addressDetails/addressDetails.modal.html":
/*!****************************************************************!*\
  !*** ./src/app/modal/addressDetails/addressDetails.modal.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">Edit Address Infomation</h4>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n  \r\n      <form [formGroup]=\"formUsers\" (ngSubmit)=\"c('Save click')\" autocomplete=\"off\">\r\n  \r\n        <div class=\"form-group row\">\r\n          <div class=\"col-sm-4\">Address type:</div>\r\n          <div class=\"col-sm-8\">\r\n            <select formControlName=\"addressTypeId\" class=\"form-control\">\r\n              <option value=\"null\"> -- select address type -- </option>\r\n              <option *ngFor=\"let type of addressTypes\" [ngValue]=\"type.id\">\r\n                {{ type.name }}\r\n              </option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n  \r\n        <div class=\"form-group row\">\r\n          <div class=\"col-sm-4\">Country:</div>\r\n          <div class=\"col-sm-8\">\r\n            <select (ngModelChange)=\"changeCountry($event)\" formControlName=\"countryId\" class=\"form-control\">\r\n              <option value=\"null\"> -- select Country -- </option>\r\n              <option *ngFor=\"let country of countries\" [ngValue]=\"country.id\">\r\n                {{ country.name }}\r\n              </option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n  \r\n        <div class=\"form-group row\">\r\n          <div class=\"col-sm-4\">City:</div>\r\n          <div class=\"col-sm-8\">\r\n            <select formControlName=\"cityId\" (ngModelChange)=\"changeCity($event)\" class=\"form-control\">\r\n              <option [ngValue]=\"null\"> -- select City -- </option>\r\n              <option *ngFor=\"let city of cities\" [ngValue]=\"city.id\">\r\n                {{ city.name }}\r\n              </option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n  \r\n        <div class=\"form-group row\">\r\n          <div class=\"col-sm-4\">District:</div>\r\n          <div class=\"col-sm-8\">\r\n            <select formControlName=\"districtId\" class=\"form-control\">\r\n              <option [value]=\"null\"> -- select District -- </option>\r\n              <option *ngFor=\"let district of districts\" [ngValue]=\"district.id\">\r\n                {{ district.name }}\r\n              </option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n  \r\n        <div class=\"form-group row\">\r\n          <div class=\"col-sm-4\">Street:</div>\r\n          <div class=\"col-sm-8\">\r\n            <input class=\"form-control\" type=\"text\" formControlName=\"street\">\r\n          </div>\r\n        </div>\r\n  \r\n        <div class=\"modal-footer\">\r\n          <button type=\"submit\" class=\"btn btn-outline-dark\" [disabled]=\"formUsers.invalid\">\r\n            {{ modalType === 'edit' ? 'Save' : 'Add' }}\r\n          </button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </ng-template>\r\n  \r\n  <a (click)=\"open(content)\">\r\n      <i class=\"fa fa-pencil-square-o\" style=\"color: blue\"></i>{{ modalType === 'edit' ? 'Edit' : 'Add' }} </a>"

/***/ }),

/***/ "./src/app/modal/user-detail-modal/user-detail.modal.css":
/*!***************************************************************!*\
  !*** ./src/app/modal/user-detail-modal/user-detail.modal.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.ng-invalid{\r\n    border: 1px solid red;\r\n    color: red;\r\n}"

/***/ }),

/***/ "./src/app/modal/user-detail-modal/user-detail.modal.html":
/*!****************************************************************!*\
  !*** ./src/app/modal/user-detail-modal/user-detail.modal.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">Edit User Infomation</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n  \n      <form [formGroup]=\"formUser\" (ngSubmit)=\"onSubmit()\">\n  \n        <div class=\"form-group row\">\n          <div class=\"col-sm-3\">Username:</div>\n          <div class=\"col-sm-9\">\n            <input class=\"form-control\" type=\"text\" formControlName=\"username\">\n            <app-validate [control]=\"formUser.controls.username\" [namecontrol]=\"Username\"></app-validate>\n          </div>\n        </div>\n\n        <div class=\"form-group row\">\n            <div class=\"col-sm-3\">Password:</div>\n            <div class=\"col-sm-9\">\n              <input class=\"form-control\" type=\"text\" formControlName=\"password\">\n              <app-validate [control]=\"formUser.controls.password\" [namecontrol]=\"password\"></app-validate>\n            </div>\n          </div>\n  \n        <div class=\"modal-footer\">\n          <!-- <button type=\"submit\" class=\"btn btn-outline-primary\" [disabled]=\"formUser.invalid\">Save</button> -->\n          <button type=\"submit\" class=\"btn btn-outline-primary\" [disabled]=\"formUser.invalid\">Save</button>\n        </div>\n      </form>\n    </div>\n  \n  \n  </ng-template>\n  <a (click)=\"open(content)\">\n    <i class=\"fa fa-pencil-square-o\" style=\"color: blue\"></i>Edit </a>"

/***/ }),

/***/ "./src/app/modal/user-detail-modal/user-detail.modal.ts":
/*!**************************************************************!*\
  !*** ./src/app/modal/user-detail-modal/user-detail.modal.ts ***!
  \**************************************************************/
/*! exports provided: UserDetailModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailModal", function() { return UserDetailModal; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/users/user.service */ "./src/services/users/user.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserDetailModal = /** @class */ (function () {
    function UserDetailModal(router, modalService, userService, fb) {
        this.router = router;
        this.modalService = modalService;
        this.userService = userService;
        this.fb = fb;
    }
    UserDetailModal.prototype.ngOnInit = function () {
        this.getUserFromId();
    };
    UserDetailModal.prototype.createForm = function () {
        this.formUser = this.fb.group({
            username: [this.user.name, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)
                ]],
            password: [this.user.password, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)
                ]]
        });
    };
    UserDetailModal.prototype.getUserFromId = function () {
        var _this = this;
        this.userService.getUserFromId(this.idUser).subscribe(function (data) {
            _this.userData = data;
            _this.user = _this.userData.users[0];
            _this.createForm();
        });
    };
    UserDetailModal.prototype.onSubmit = function () {
        return this.userService.updateUser(this.idUser, this.formUser.get('username').value, this.formUser.get('password').value).subscribe(function (data) {
            return window.location.reload();
        });
    };
    UserDetailModal.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', backdrop: "static" }).result.then(function (result) {
            _this.createForm();
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.createForm();
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    UserDetailModal.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('idUser'),
        __metadata("design:type", Object)
    ], UserDetailModal.prototype, "idUser", void 0);
    UserDetailModal = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-detail-modal',
            template: __webpack_require__(/*! ./user-detail.modal.html */ "./src/app/modal/user-detail-modal/user-detail.modal.html"),
            styles: [__webpack_require__(/*! ./user-detail.modal.css */ "./src/app/modal/user-detail-modal/user-detail.modal.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], _services_users_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], UserDetailModal);
    return UserDetailModal;
}());



/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pagenotfound h1{\r\n    color: red;\r\n}\r\n.pagenotfound{\r\n    background-color: white;\r\n    border-radius: 5px;\r\n    height: 100px;  \r\n}"

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pagenotfound\">\r\n  <h1>PAGE NOT FOUND!</h1>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.ts ***!
  \********************************************************/
/*! exports provided: PagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function() { return PagenotfoundComponent; });
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

var PagenotfoundComponent = /** @class */ (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    PagenotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagenotfound',
            template: __webpack_require__(/*! ./pagenotfound.component.html */ "./src/app/pagenotfound/pagenotfound.component.html"),
            styles: [__webpack_require__(/*! ./pagenotfound.component.css */ "./src/app/pagenotfound/pagenotfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PagenotfoundComponent);
    return PagenotfoundComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav flex-column\">\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\">\r\n            <i class=\"fa fa-home\"></i> HOME</a>\r\n    </li>\r\n    <li class=\"nav-item\" *ngIf=\"authentication\">\r\n        <a class=\"nav-link\" routerLink=\"/user\" routerLinkActive=\"active\">\r\n            <i class=\"fa fa-group\"></i> USER MANAGEMENT</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/detail/{{idUser}}\" routerLinkActive=\"active\">\r\n            <i class=\"fa fa-address-book\"></i> PERSONAL INFORMATION</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/contact\" routerLinkActive=\"active\">\r\n            <i class=\"fa fa-phone\"></i> CONTACT</a>\r\n    </li>\r\n</nav>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.scss":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active {\n  color: black;\n  background-color: #F6F7F9;\n  width: 300px;\n  border-radius: 4px;\n  font-weight: bold; }\n\n.nav-link {\n  margin-bottom: 2px;\n  color: black; }\n\n.nav-link :hover {\n    background-color: #F6F7F9;\n    width: 300px;\n    border-radius: 4px; }\n\n.nav-item {\n  display: block; }\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(jwt) {
        this.jwt = jwt;
        // this.getAuthentication();
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.getClaimOfToken();
    };
    SidebarComponent.prototype.getClaimOfToken = function () {
        var decodedToken = this.jwt.decodeToken(localStorage.getItem("token"));
        this.idUser = decodedToken.userId;
        // console.log(decodedToken.permissionCount);
        localStorage.setItem("permissionCount", decodedToken.permissionCount);
        if (decodedToken.permissionCount == 3) {
            this.authentication = true;
        }
        else {
            this.authentication = false;
        }
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtHelperService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/user-detail/user-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/user-detail/user-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-detail\" *ngIf=\"isBoolean; else user\">\r\n    <p>USER DETAIL</p>\r\n    <div class=\"\">\r\n        <div class=\"form-group row\">\r\n            <label for=\"inputId\" class=\"col-sm-3\">Id</label>\r\n            <div class=\"col-sm-6\">\r\n                {{ userAddresses?.user.id }}\r\n            </div>\r\n            <div class=\"col-sm-3\"></div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n            <div class=\"col-sm-3\">\r\n                <label for=\"inputUserName\">Username</label>\r\n                <br>\r\n                <br>\r\n                <label for=\"inputPassword\">Password</label>\r\n            </div>\r\n\r\n            <div class=\"col-sm-6\">\r\n                {{ userAddresses?.user.name }}\r\n                <br>\r\n                <br> {{ userAddresses?.user.password }}\r\n            </div>\r\n            <div class=\"col-sm-3 btn-edit\" *ngIf=\"userAddresses?.user\">\r\n                <app-user-detail-modal [idUser]=\"userAddresses.user.id\"></app-user-detail-modal>\r\n            </div>\r\n        </div>\r\n        <hr>\r\n        <div class=\"add-address\">\r\n            <!-- <a [hidden]=\"userAddresses?.addresses.length == 2\" (click)=\"addAddress()\">+ Add address</a> -->\r\n            <ngbd-modal-basic [modalType]=\"'add'\" [userId]=\"userAddresses?.user.id\" [hidden]=\"userAddresses?.addresses.length == 2\" (_addressDetail)=\"actionAddresses($event)\"></ngbd-modal-basic>\r\n        </div>\r\n        <div *ngFor=\"let address of userAddresses?.addresses\">\r\n            <div class=\"form-group row\">\r\n                <label for=\"inputPassword\" class=\"col-sm-3\">{{ address?.addressType }} Address</label>\r\n                <div class=\"col-sm-6\">\r\n                    {{ address?.street + \"- \" + address?.district + \"- \" + address?.city + \"- \" + address?.country }}\r\n                </div>\r\n                <div class=\"col-sm-3 action\">\r\n                    <!-- <ngbd-modal-basic [modalUDId]=\"address.id\"></ngbd-modal-basic> -->\r\n                    <ngbd-modal-basic [modalType]=\"'edit'\" [modalUDId]=\"address.id\" (_addressDetail)=\"actionAddresses($event)\"></ngbd-modal-basic>\r\n                    <a (click)=\"deleteAddress(address.id)\" class=\"btn-delete\">\r\n                        <i class=\"fa fa-times\" style=\"color: red\"></i>Delete</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<ng-template #user>\r\n    <div class=\"user-detail\">\r\n        <p>USER DETAIL</p>\r\n        <div class=\"\">\r\n            <div class=\"form-group row\">\r\n                <label for=\"inputId\" class=\"col-sm-3\">Id</label>\r\n                <div class=\"col-sm-6\">\r\n                    {{ userData?.id }}\r\n                </div>\r\n                <div class=\"col-sm-3\"></div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <div class=\"col-sm-3\">\r\n                    <label for=\"inputUserName\">Username</label>\r\n                    <br>\r\n                    <br>\r\n                    <label for=\"inputPassword\">Password</label>\r\n                </div>\r\n\r\n                <div class=\"col-sm-6\">\r\n                    {{ userData?.name }}\r\n                    <br>\r\n                    <br> {{ userData?.password }}\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/user-detail/user-detail.component.scss":
/*!********************************************************!*\
  !*** ./src/app/user-detail/user-detail.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-detail {\n  background-color: white;\n  border-radius: 5px;\n  padding: 20px; }\n  .user-detail p {\n    text-align: center;\n    font-size: 20px;\n    font-weight: bold; }\n  label {\n  font-weight: bold; }\n  .btn-edit {\n  cursor: pointer;\n  color: blue;\n  display: flex;\n  align-items: center; }\n  .btn-edit :hover {\n    text-decoration: underline; }\n  .action a {\n  border-left: 1px solid gray;\n  padding-left: 5px;\n  cursor: pointer;\n  color: red; }\n  .action a :hover {\n    text-decoration: underline; }\n  .action ngbd-modal-basic {\n  cursor: pointer;\n  color: blue; }\n  .action ngbd-modal-basic :hover {\n    text-decoration: underline; }\n  .add-address {\n  cursor: pointer;\n  color: blue; }\n  .add-address :hover {\n    text-decoration: underline; }\n  .form-group:hover {\n  background-color: #F6F7F9;\n  border-radius: 5px; }\n"

/***/ }),

/***/ "./src/app/user-detail/user-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/user-detail/user-detail.component.ts ***!
  \******************************************************/
/*! exports provided: UserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function() { return UserDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_address_address_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/address/address.service */ "./src/services/address/address.service.ts");
/* harmony import */ var _services_users_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/users/user.service */ "./src/services/users/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserDetailComponent = /** @class */ (function () {
    function UserDetailComponent(addressService, userService, route) {
        this.addressService = addressService;
        this.userService = userService;
        this.route = route;
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("permissionCount") == "3") {
            this.isBoolean = true;
            this.getUserAddresses();
        }
        else {
            this.isBoolean = false;
            this.getUserFromId();
        }
    };
    UserDetailComponent.prototype.getUserAddresses = function () {
        var _this = this;
        this.id = +this.route.snapshot.paramMap.get('id');
        this.addressService.getUserAddressesOfUserId(this.id).subscribe(function (data) {
            // console.log(data);
            _this.userAddresses = data.pop();
        });
    };
    UserDetailComponent.prototype.getUserFromId = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.userService.getUserFromId(id).subscribe(function (result) {
            console.log("aad");
            console.log(result.users[0]);
            // this.userAddresses = new UserData();
            _this.userData = result.users[0];
        });
    };
    UserDetailComponent.prototype.actionAddresses = function (info) {
        if (info.modalType === 'edit') {
            var addresses_1 = [];
            this.userAddresses.addresses.map(function (obj) {
                if (obj.id === info.addressInfo.id) {
                    addresses_1.push(info.addressInfo);
                }
                else
                    addresses_1.push(obj);
            });
            this.userAddresses.addresses = addresses_1;
        }
        else if (info.modalType === 'add') {
            this.userAddresses.addresses.push(info.addressInfo);
        }
    };
    UserDetailComponent.prototype.deleteAddress = function (id) {
        var _this = this;
        if (this.userAddresses.user.address2 === id) {
            this.userAddresses.user.address2 = null;
        }
        if (this.userAddresses.user.address1 === id) {
            this.userAddresses.user.address1 = null;
        }
        this.addressService.AdeleteAddressFromId(id).subscribe(function () {
            _this.userService.AupdateUser(_this.userAddresses.user.id, _this.userAddresses.user).subscribe();
            _this.userAddresses.addresses = _this.userAddresses.addresses.filter(function (obj) { return obj.id !== id; });
        }, function (err) { return console.log("error of subscribe AdeleteAddressFromId(): " + err); }, function () { return console.log("delete address success!"); });
    };
    UserDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-detail',
            template: __webpack_require__(/*! ./user-detail.component.html */ "./src/app/user-detail/user-detail.component.html"),
            styles: [__webpack_require__(/*! ./user-detail.component.scss */ "./src/app/user-detail/user-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_address_address_service__WEBPACK_IMPORTED_MODULE_2__["AddressService"], _services_users_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], UserDetailComponent);
    return UserDetailComponent;
}());



/***/ }),

/***/ "./src/app/users/users.component.html":
/*!********************************************!*\
  !*** ./src/app/users/users.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-container\">\r\n        <p>USERS LIST</p>\r\n        <form>\r\n            <input type=\"text\" placeholder=\"Search user\" [(ngModel)]=\"searchValue\" name=\"search\" (ngModelChange)=\"AresetCurrentPage()\" >\r\n            <button type=\"submit\" (click)=\"AgetSearchValue()\"><i class=\"fa fa-search\"></i></button>\r\n        </form>\r\n    </div>\r\n\r\n<div class=\"users-list\">\r\n    <table class=\"table table-hover\">\r\n        <thead>\r\n            <tr>\r\n                <th>ID</th>\r\n                <th>Name</th>\r\n                <th>Password</th>\r\n                <th>Detail</th>\r\n                <th>Delete</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let x of userdata.users | paginate: {itemsPerPage: 4, currentPage: p, totalItems: totalItems}\">\r\n                <td>{{ x.id }}</td>\r\n                <td>{{ x.name }}</td>\r\n                <td>{{ x.password }}</td>\r\n                <td>\r\n                    <button type=\"button\" class=\"btn btn-default\" routerLink=\"/detail/{{ x.id }}\">Edit</button>\r\n                </td>\r\n                <td>\r\n                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteUser(x.id)\">Delete</button>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n    <div class=\"pagination\">\r\n        <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\r\n    </div>\r\n    \r\n    <app-user-address></app-user-address>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/users/users.component.scss":
/*!********************************************!*\
  !*** ./src/app/users/users.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".status {\n  color: red; }\n\n.nav-link {\n  float: left; }\n\n.nav-link :hover:not(.active) {\n    background-color: #ddd;\n    border-radius: 5px; }\n\n.active {\n  background-color: #007BFF;\n  color: white;\n  border-radius: 5px; }\n\n.btn {\n  display: block;\n  clear: both; }\n\ninput.ng-invalid.ng-touched {\n  border: 1px solid red; }\n\n.modal-body input {\n  width: 100%; }\n\n.users-list {\n  background-color: white;\n  border-radius: 5px;\n  clear: both; }\n\n.btn {\n  margin: 4px;\n  width: 100px; }\n\n.pagination {\n  display: flex;\n  justify-content: center; }\n\n.search-container {\n  background-color: white;\n  border-radius: 5px;\n  margin-bottom: 5px;\n  padding: 5px;\n  height: 40px; }\n\n.search-container p {\n    float: left;\n    font-size: 20px;\n    font-weight: bold; }\n\n.search-container form {\n    float: right; }\n\n.gender {\n  display: flex;\n  justify-content: center;\n  font-weight: bold; }\n\n.card-left {\n  font-weight: bold;\n  color: black;\n  width: 500px; }\n"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_users_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/users/user.service */ "./src/services/users/user.service.ts");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/user */ "./src/models/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersComponent = /** @class */ (function () {
    function UsersComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.userdata = new _models_user__WEBPACK_IMPORTED_MODULE_3__["UserData"]();
        this.p = 1;
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UsersComponent.prototype.pageChanged = function (page) {
        this.p = page;
        this.getUsers();
    };
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers(4, this.p).subscribe(function (data) {
            if (Object.keys(data).length > 0) {
                _this.userdata = data;
                _this.totalItems = data.pagination.totalItems;
                _this.totalPages = Math.ceil(_this.totalItems / 4);
            }
            else {
                _this.router.navigate(['login']);
            }
        });
    };
    UsersComponent.prototype.deleteUser = function (id) {
        var _this = this;
        return this.userService.deleteUser(id).subscribe(function (data) {
            return _this.getUsers();
        });
    };
    UsersComponent.prototype.AresetCurrentPage = function () {
        this.p = 1;
        this.AgetSearchValue();
    };
    UsersComponent.prototype.AgetSearchValue = function () {
        var _this = this;
        this.userService.AsearchUser(this.searchValue, 4, this.p).subscribe(function (result) {
            _this.userdata = result;
            if (result.pagination != null)
                _this.totalItems = result.pagination.totalItems;
            else
                _this.totalItems = 0;
        });
    };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.scss */ "./src/app/users/users.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_users_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/validate/validate.component.css":
/*!*************************************************!*\
  !*** ./src/app/validate/validate.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".label-danger{\r\n    color: red;\r\n}"

/***/ }),

/***/ "./src/app/validate/validate.component.html":
/*!**************************************************!*\
  !*** ./src/app/validate/validate.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"label-danger\" *ngIf=\"message\">{{ message }}</span>"

/***/ }),

/***/ "./src/app/validate/validate.component.ts":
/*!************************************************!*\
  !*** ./src/app/validate/validate.component.ts ***!
  \************************************************/
/*! exports provided: ValidateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateComponent", function() { return ValidateComponent; });
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

var ValidateComponent = /** @class */ (function () {
    function ValidateComponent() {
    }
    ValidateComponent.prototype.ngOnInit = function () {
        console.log(this.namecontrol);
    };
    Object.defineProperty(ValidateComponent.prototype, "message", {
        get: function () {
            for (var er in this.control.errors) {
                if (this.control.dirty) {
                    return this.getErrorMessage(er, this.control.errors[er]);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    ValidateComponent.prototype.getErrorMessage = function (er, value) {
        // let message = {
        //   'required' : `Vui lòng nhập ${this.namecontrol}`,
        //   'minlength' : `${this.namecontrol} tối thiểu ${value.requiredLength} kí tự`,
        //   'maxlength' : `${this.namecontrol} tối đa ${value.requiredLength} kí tự`,
        //   'pattern' : `${this.namecontrol} không đúng định dạng`
        // }
        var message = {
            'required': "This is required!",
            'minlength': "You must enter at least " + value.requiredLength + " characters",
            'maxlength': "You must enter a max " + value.requiredLength + " characters",
            'pattern': "You enter is invalid"
        };
        return message[er];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ValidateComponent.prototype, "control", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ValidateComponent.prototype, "namecontrol", void 0);
    ValidateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-validate',
            template: __webpack_require__(/*! ./validate.component.html */ "./src/app/validate/validate.component.html"),
            styles: [__webpack_require__(/*! ./validate.component.css */ "./src/app/validate/validate.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ValidateComponent);
    return ValidateComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/models/address.ts":
/*!*******************************!*\
  !*** ./src/models/address.ts ***!
  \*******************************/
/*! exports provided: AddressData, UserAddress, Address, UserAddressesDetail, AddressDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressData", function() { return AddressData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAddress", function() { return UserAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return Address; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAddressesDetail", function() { return UserAddressesDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressDetail", function() { return AddressDetail; });
var AddressData = /** @class */ (function () {
    function AddressData() {
    }
    return AddressData;
}());

var UserAddress = /** @class */ (function () {
    function UserAddress(u, a) {
        this.user = u;
        this.addresses = a;
    }
    return UserAddress;
}());

var Address = /** @class */ (function () {
    function Address(addresstypeid, countryid, cityid, districtid, st) {
        this.addressTypeId = addresstypeid;
        this.countryId = countryid;
        this.cityId = cityid;
        this.districtId = districtid;
        this.street = st;
    }
    return Address;
}());

var UserAddressesDetail = /** @class */ (function () {
    function UserAddressesDetail() {
    }
    return UserAddressesDetail;
}());

var AddressDetail = /** @class */ (function () {
    function AddressDetail() {
    }
    return AddressDetail;
}());



/***/ }),

/***/ "./src/models/city.ts":
/*!****************************!*\
  !*** ./src/models/city.ts ***!
  \****************************/
/*! exports provided: CityData, Cities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityData", function() { return CityData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cities", function() { return Cities; });
var CityData = /** @class */ (function () {
    function CityData() {
    }
    return CityData;
}());

var Cities = /** @class */ (function () {
    function Cities() {
    }
    return Cities;
}());



/***/ }),

/***/ "./src/models/country.ts":
/*!*******************************!*\
  !*** ./src/models/country.ts ***!
  \*******************************/
/*! exports provided: CountryData, Country */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryData", function() { return CountryData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Country", function() { return Country; });
var CountryData = /** @class */ (function () {
    function CountryData() {
    }
    return CountryData;
}());

var Country = /** @class */ (function () {
    function Country() {
    }
    return Country;
}());



/***/ }),

/***/ "./src/models/district.ts":
/*!********************************!*\
  !*** ./src/models/district.ts ***!
  \********************************/
/*! exports provided: DistrictData, Districts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistrictData", function() { return DistrictData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Districts", function() { return Districts; });
var DistrictData = /** @class */ (function () {
    function DistrictData() {
    }
    return DistrictData;
}());

var Districts = /** @class */ (function () {
    function Districts() {
    }
    return Districts;
}());



/***/ }),

/***/ "./src/models/user.ts":
/*!****************************!*\
  !*** ./src/models/user.ts ***!
  \****************************/
/*! exports provided: UserData, User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserData", function() { return UserData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var UserData = /** @class */ (function () {
    function UserData() {
    }
    return UserData;
}());

var User = /** @class */ (function () {
    function User(name, password) {
        if (name === void 0) { name = ""; }
        if (password === void 0) { password = ""; }
        this.name = name;
        this.password = password;
    }
    return User;
}());



/***/ }),

/***/ "./src/services/address/address.service.ts":
/*!*************************************************!*\
  !*** ./src/services/address/address.service.ts ***!
  \*************************************************/
/*! exports provided: AddressService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressService", function() { return AddressService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_address__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/address */ "./src/models/address.ts");
/* harmony import */ var _angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/compiler/src/util */ "./node_modules/@angular/compiler/src/util.js");
/* harmony import */ var _angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddressService = /** @class */ (function () {
    function AddressService(http) {
        this.http = http;
        this.apiCountries = 'http://localhost:5000/api/countries';
        this.apiCitiesOfCountryId = 'http://localhost:5000/api/cities/country';
        this.apiDistrictsOfCityId = 'http://localhost:5000/api/districts/city';
        this.apiUserAddresses = 'http://localhost:5000/api/addresses';
        this.apiAddressType = 'http://localhost:5000/api/addresstype';
    }
    AddressService.prototype.getUserAddresses = function (size, current) {
        var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + localStorage.getItem("token")
            })
        };
        var url = this.apiUserAddresses + "/page?size=" + size + "&current=" + current;
        return this.http.get(url);
    };
    AddressService.prototype.checkValiToken = function () {
        var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            })
        };
        return this.http.get(this.apiCountries, options);
    };
    AddressService.prototype.createUserAddress = function (u, a) {
        var useradd = new _models_address__WEBPACK_IMPORTED_MODULE_3__["UserAddress"](u, a);
        var options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") }) };
        return this.http.post(this.apiUserAddresses, useradd, options).pipe(
        // map ( Response => JSON.stringify(Response) ),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(_angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_4__["error"]));
    };
    AddressService.prototype.getUserAddressesOfUserId = function (id) {
        var url = this.apiUserAddresses + "/user/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            console.log("error of getUserAddressesFromId(id): " + err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(err);
        }));
    };
    AddressService.prototype.AgetAddressFromId = function (id) {
        var url = this.apiUserAddresses + "/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            console.log("error of AgetAddressFromId(): " + err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(err);
        }));
    };
    AddressService.prototype.AgetAddressTypes = function () {
        var url = "" + this.apiAddressType;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            console.log("error of AgetAddressType(): " + err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(err);
        }));
    };
    AddressService.prototype.AgetCountries = function () {
        return this.http.get(this.apiCountries).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            console.log("error of AgetCountries(): " + err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(err);
        }));
    };
    AddressService.prototype.AgetCitiesOfCountryId = function (id) {
        var url = this.apiCitiesOfCountryId + "/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            console.log("error of AgetCitiesOfCountryId(): " + err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(err);
        }));
    };
    AddressService.prototype.AgetDistrictOfCityId = function (id) {
        var url = this.apiDistrictsOfCityId + "/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            console.log("error of AgetDistrictOfCityId(): " + err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(err);
        }));
    };
    AddressService.prototype.AupdateAddressFromId = function (id, address) {
        var url = this.apiUserAddresses + "/" + id;
        return this.http.put(url, address).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            console.log("error of this.AupdateAddressFromId(): " + err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(err);
        }));
    };
    AddressService.prototype.AdeleteAddressFromId = function (id) {
        var url = this.apiUserAddresses + "/" + id;
        return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            console.log("error of AdeleteAddressFromId(): " + err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(err);
        }));
    };
    AddressService.prototype.AaddAddress = function (id, address) {
        var url = this.apiUserAddresses + "/user/" + id;
        return this.http.post(url, address).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            console.log("error of AaddAddress(): " + err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(err);
        }));
    };
    AddressService.prototype.getAddressFromId = function (id) {
        var options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Authorization': 'Bearer ' + localStorage.getItem("token") }) };
        var url = (this.apiUserAddresses) + '/' + (id);
        return this.http.get(url, options).pipe(
        // map ( Response => JSON.stringify(Response) ),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(_angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_4__["error"]));
    };
    AddressService.prototype.updateAddressFromId = function (id, address) {
        var options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") }) };
        var url = (this.apiUserAddresses) + '/' + (id);
        return this.http.put(url, address, options);
    };
    AddressService.prototype.getCountries = function () {
        var options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Authorization': 'Bearer ' + localStorage.getItem("token") }) };
        return this.http.get(this.apiCountries, options).pipe(
        // map ( Response => JSON.stringify(Response) ),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(_angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_4__["error"]));
    };
    AddressService.prototype.getCitiesFromId = function (id) {
        var options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Authorization': 'Bearer ' + localStorage.getItem("token") }) };
        var url = this.apiCitiesOfCountryId + '/' + id;
        return this.http.get(url, options).pipe(
        // map ( Response => JSON.stringify(Response) ),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(_angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_4__["error"]));
    };
    AddressService.prototype.getDistrictsFromId = function (id) {
        var options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Authorization': 'Bearer ' + localStorage.getItem("token") }) };
        var url = this.apiDistrictsOfCityId + '/' + id;
        return this.http.get(url, options).pipe(
        // map ( Response => JSON.stringify(Response) ),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(_angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_4__["error"]));
    };
    AddressService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AddressService);
    return AddressService;
}());



/***/ }),

/***/ "./src/services/users/user.service.ts":
/*!********************************************!*\
  !*** ./src/services/users/user.service.ts ***!
  \********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/user */ "./src/models/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/compiler/src/util */ "./node_modules/@angular/compiler/src/util.js");
/* harmony import */ var _angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserService = /** @class */ (function () {
    function UserService(http, router) {
        this.http = http;
        this.router = router;
        this.apiUrl = 'http://localhost:5000/api/users';
        this.apiLogin = 'http://localhost:5000/api/token';
    }
    UserService.prototype.AupdateUser = function (id, user) {
        var url = this.apiUrl + "/" + id;
        return this.http.put(url, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            console.log("error of AupdateUser(): " + err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(err);
        }));
    };
    UserService.prototype.loginUser = function (user) {
        //Gửi về server cần có Headers và RequestOptions
        //C1:
        //let header1 = new Headers( { 'Content-Type': 'application/json' } );
        //let options = new RequestOptions({headers: header1});
        //C2:
        var options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        //Sử dụng post truyền dữ liệu xuống Server, tham số của post cần: link api, tài khoản login và options
        return this.http.post(this.apiLogin, user, options).pipe(
        //Nếu có kết quả sẽ map kết quả thành json, ngược lại sẽ xuất lỗi
        // map ( Response => JSON.stringify(Response) ),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            console.log("Loi login of user service: " + error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(error);
        }));
    };
    UserService.prototype.getUsers = function (pS, pN) {
        var options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Authorization': 'Bearer ' + localStorage.getItem("token") }) };
        var url = (this.apiUrl) + '/page?size=' + pS + '&current=' + pN;
        return this.http.get(url, options).pipe(
        // tap ( Response => Response ),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(_angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_5__["error"]));
    };
    UserService.prototype.getUserFromId = function (id) {
        var options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Authorization': 'Bearer ' + localStorage.getItem("token") }) };
        var url = (this.apiUrl) + '/' + id;
        return this.http.get(url, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(_angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_5__["error"]));
    };
    UserService.prototype.deleteUser = function (id) {
        var options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Authorization': 'Bearer ' + localStorage.getItem("token") }) };
        var url = (this.apiUrl) + '/' + (id);
        return this.http.delete(url, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) { return JSON.stringify(Response); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(_angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_5__["error"]));
    };
    UserService.prototype.updateUser = function (id, username, pass) {
        var user = new _models_user__WEBPACK_IMPORTED_MODULE_3__["User"](username, pass);
        var url = (this.apiUrl) + '/' + (id);
        var options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") }) };
        console.log(user);
        return this.http.put(url, user, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) { return JSON.stringify(Response); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(_angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_5__["error"]));
    };
    UserService.prototype.AsearchUser = function (searchValue, size, current) {
        var url = this.apiUrl + "/page?search=" + searchValue + "&size=" + size + "&current=" + current;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            console.log("error of AsearchUser(): " + JSON.stringify(err));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(err);
        }));
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\yentranduy1609\Desktop\FRONTEND\FULL\Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map