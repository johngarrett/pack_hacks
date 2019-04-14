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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./playlist/playlist.component */ "./src/app/playlist/playlist.component.ts");
/* harmony import */ var _groups_groups_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./groups/groups.component */ "./src/app/groups/groups.component.ts");





var routes = [
    {
        path: "playlist",
        pathMatch: "full",
        component: _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_3__["PlaylistComponent"]
    },
    {
        path: "groups",
        pathMatch: "full",
        component: _groups_groups_component__WEBPACK_IMPORTED_MODULE_4__["GroupsComponent"]
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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".space-filler {\n  flex: 1 1 auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3BhY2UtZmlsbGVyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"text-success\">TuneFish</span>\n\n<div *ngIf=\"givenName\">\n  <h2>Hi, {{givenName}}</h2>\n  <button (click)=\"logout()\">Logout</button>\n</div>\n\n<div *ngIf=\"!givenName\">\n  <button (click)=\"login()\">Login</button>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: authConfig, AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authConfig", function() { return authConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _spotify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spotify.service */ "./src/app/spotify.service.ts");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/esm5/angular-oauth2-oidc.js");





var authConfig = {
    issuer: "/spotify/authorize",
    redirectUri: window.location.origin,
    clientId: '5fe01282e44241328a84e7c5cc169165',
    scope: "user-read-private user-read-email",
    responseType: "code",
    customQueryParams: {
        "state": "NsRIsWxdcsDmSL0J",
        "showDialog": "true"
    },
    requireHttps: false
};
var AppComponent = /** @class */ (function () {
    function AppComponent(db, sp, oauthService) {
        this.oauthService = oauthService;
        this.items = db.collection('/time_of_day').valueChanges();
        oauthService.configure(authConfig);
        oauthService.tokenValidationHandler = new angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_4__["JwksValidationHandler"]();
        oauthService.loadDiscoveryDocumentAndTryLogin().then(function (_) {
            console.log("Logged in!");
        }).catch(function (err) {
            console.error(err);
        });
    }
    AppComponent.prototype.login = function () {
        this.oauthService.initImplicitFlow();
        console.log("attempting login");
    };
    AppComponent.prototype.logout = function () {
        this.oauthService.logOut();
    };
    Object.defineProperty(AppComponent.prototype, "givenName", {
        get: function () {
            var claims = this.oauthService.getIdentityClaims();
            if (!claims) {
                return null;
            }
            return claims['name'];
        },
        enumerable: true,
        configurable: true
    });
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _spotify_service__WEBPACK_IMPORTED_MODULE_3__["SpotifyService"], angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_4__["OAuthService"]])
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
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./playlist/playlist.component */ "./src/app/playlist/playlist.component.ts");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/esm5/angular-oauth2-oidc.js");
/* harmony import */ var _groups_groups_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./groups/groups.component */ "./src/app/groups/groups.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_11__["PlaylistComponent"],
                _groups_groups_component__WEBPACK_IMPORTED_MODULE_13__["GroupsComponent"]
            ],
            imports: [
                angularfire2__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].firebase),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestoreModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
                angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_12__["OAuthModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/groups/groups.component.css":
/*!*********************************************!*\
  !*** ./src/app/groups/groups.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".thumbnail {\n  height: 100px;\n  width: auto;\n  position: relative;\n  display: inline-block;\n  overflow: hidden;\n  display: block;\n  margin: auto;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  padding-bottom: 10px;\n}\n\n.title{\n  margin-top: 20px;\n  margin-left: 10px;\n}\n\n.profile{\n  margin-top: 12.5px;\n  padding-right:20px;\n  height: 75px;\n  width: 75px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  /* border-radius: 50%; */\n  /* display: block; */\n}\n\n.subtext{\n  margin-bottom: 10px;\n  margin-left: 10px;\n}\n\n.media{\n  margin-left: 10%;\n  margin-right: 10%;\n  margin-bottom: 20px;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXBzL2dyb3Vwcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qiw2QkFBNkI7RUFDN0IsNkJBQTZCO0VBQzdCLHFCQUFxQjtDQUN0Qjs7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7Q0FDbkI7O0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLDZCQUE2QjtFQUM3Qiw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLHFCQUFxQjtDQUN0Qjs7QUFFRDtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixxQ0FBcUM7Q0FDdEMiLCJmaWxlIjoic3JjL2FwcC9ncm91cHMvZ3JvdXBzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGh1bWJuYWlsIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLnRpdGxle1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5wcm9maWxle1xuICBtYXJnaW4tdG9wOiAxMi41cHg7XG4gIHBhZGRpbmctcmlnaHQ6MjBweDtcbiAgaGVpZ2h0OiA3NXB4O1xuICB3aWR0aDogNzVweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgLyogYm9yZGVyLXJhZGl1czogNTAlOyAqL1xuICAvKiBkaXNwbGF5OiBibG9jazsgKi9cbn1cblxuLnN1YnRleHR7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4ubWVkaWF7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIG1hcmdpbi1yaWdodDogMTAlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/groups/groups.component.html":
/*!**********************************************!*\
  !*** ./src/app/groups/groups.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"media media-middle\" *ngFor=\"let group of groups\">\n  <div class=\"media-body\">\n    <h5 class=\"mt-0\" class = \"title\">{{group.name}}</h5>\n    <p class = \"subtext\">{{group.runtime}} hours</p>\n  </div>\n  <div *ngFor= \"let user of group.users\">\n    <img class=\"ml-3 thumbnail profile\" [src]=\"user.image\" alt=\"Profile image\">\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/groups/groups.component.ts":
/*!********************************************!*\
  !*** ./src/app/groups/groups.component.ts ***!
  \********************************************/
/*! exports provided: GroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsComponent", function() { return GroupsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GroupsComponent = /** @class */ (function () {
    function GroupsComponent() {
        this.groups = [
            {
                name: "Tune-Fish Squad",
                runtime: 1.3,
                users: [
                    {
                        image: "https://levinescholars.uncc.edu/sites/levinescholars.uncc.edu/files/styles/portrait_image/public/fields/field_photo/photo/SSI_3987.jpg?itok=5N0KThLp"
                    },
                    {
                        image: "https://levinescholars.uncc.edu/sites/levinescholars.uncc.edu/files/styles/faces_detail_page/public/fields/field_photo/photo/SSI_3862.jpg?itok=tv5NpJG0"
                    },
                    {
                        image: "https://media.licdn.com/dms/image/C4E03AQGEjTY0r8g1Eg/profile-displayphoto-shrink_800_800/0?e=1560988800&v=beta&t=e7vk7wDxwYLogvbUmCwRbjya54B2Us8xpc_E3OuJmrQ"
                    }
                ]
            },
            {
                name: "Niner Gang",
                runtime: 1.9,
                users: [
                    {
                        image: "https://levinescholars.uncc.edu/sites/levinescholars.uncc.edu/files/styles/portrait_image/public/fields/field_photo/photo/SSI_3987.jpg?itok=5N0KThLp"
                    },
                    {
                        image: "https://levinescholars.uncc.edu/sites/levinescholars.uncc.edu/files/styles/faces_detail_page/public/fields/field_photo/photo/SSI_3862.jpg?itok=tv5NpJG0"
                    },
                    {
                        image: "data:image/jpeg;base64,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"
                    }
                ]
            },
            {
                name: "Denver Nuggets",
                runtime: 1.1,
                users: [
                    {
                        image: "https://www.nba.com/nuggets/sites/nuggets/files/styles/story_main_photo/public/getty-images-1057904050.jpg?itok=BHcL1Uri"
                    },
                    {
                        image: "https://www.denverpost.com/wp-content/uploads/2018/10/f02da59b7fc141228ff5843ef1288038.jpg?w=525"
                    }
                ]
            }
        ];
    }
    GroupsComponent.prototype.ngOnInit = function () {
    };
    GroupsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-groups',
            template: __webpack_require__(/*! ./groups.component.html */ "./src/app/groups/groups.component.html"),
            styles: [__webpack_require__(/*! ./groups.component.css */ "./src/app/groups/groups.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GroupsComponent);
    return GroupsComponent;
}());



/***/ }),

/***/ "./src/app/playlist/playlist.component.css":
/*!*************************************************!*\
  !*** ./src/app/playlist/playlist.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".thumbnail {\n    height: 90px;\n    width: 90px;\n    position: relative;\n    display: inline-block;\n    overflow: hidden;\n    display: block;\n    margin: auto;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: 50% 50%;\n    margin-top: 5px;\n    margin-left: 5px;\n    margin-bottom: 5px;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: 50% 50%;\n}\n\n.title{\n    margin-top: 20px;\n    color: white;\n    font-size: 20px;\n}\n\n.body_text{\n    color: whitesmoke;\n}\n\n.profile{\n    margin-top: 12.5px;\n    padding-right:20px;\n    height: 75px;\n    width: 75px;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: 50% 50%;\n    /* border-radius: 50%; */\n    /* display: block; */\n}\n\n.media{\n    margin-left: 10%;\n    margin-right: 10%;\n    margin-bottom: 20px;\n    background-color: #565457;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWxpc3QvcGxheWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsNkJBQTZCO0lBQzdCLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsNkJBQTZCO0lBQzdCLDZCQUE2QjtDQUNoQzs7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksa0JBQWtCO0NBQ3JCOztBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsWUFBWTtJQUNaLHVCQUF1QjtJQUN2Qiw2QkFBNkI7SUFDN0IsNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6QixxQkFBcUI7Q0FDeEI7O0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQiwwQkFBMEI7Q0FDN0IiLCJmaWxlIjoic3JjL2FwcC9wbGF5bGlzdC9wbGF5bGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRodW1ibmFpbCB7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xufVxuXG4udGl0bGV7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uYm9keV90ZXh0e1xuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuLnByb2ZpbGV7XG4gICAgbWFyZ2luLXRvcDogMTIuNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6MjBweDtcbiAgICBoZWlnaHQ6IDc1cHg7XG4gICAgd2lkdGg6IDc1cHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gICAgLyogYm9yZGVyLXJhZGl1czogNTAlOyAqL1xuICAgIC8qIGRpc3BsYXk6IGJsb2NrOyAqL1xufVxuXG4ubWVkaWF7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NjU0NTc7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/playlist/playlist.component.html":
/*!**************************************************!*\
  !*** ./src/app/playlist/playlist.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"media media-middle\" *ngFor=\"let song of songs\">\n        <img [src]=\"song.image\" class=\"mr-3 thumbnail\" alt=\"album_png\">\n    <div class=\"media-body\">\n        <h5 class=\"mt-0\" class = \"title\">{{song.title}}</h5>\n        <p class=\"body_text\">{{song.time}}</p>\n    </div>\n    <div *ngFor= \"let user of song.users\">\n        <img class=\"ml-3 profile\" [src]=\"user.image\" alt=\"Profile image\">\n</div>\n</div>"

/***/ }),

/***/ "./src/app/playlist/playlist.component.ts":
/*!************************************************!*\
  !*** ./src/app/playlist/playlist.component.ts ***!
  \************************************************/
/*! exports provided: PlaylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistComponent", function() { return PlaylistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PlaylistComponent = /** @class */ (function () {
    function PlaylistComponent() {
        this.disableRipple = true;
        this.songs = [
            {
                image: "http://extras.mnginteractive.com/live/media/site21/2018/0523/20180523__24DCABVSw~1.jpg",
                title: "The title of the song",
                time: "3:07",
                users: [
                    {
                        image: "https://levinescholars.uncc.edu/sites/levinescholars.uncc.edu/files/styles/portrait_image/public/fields/field_photo/photo/SSI_3987.jpg?itok=5N0KThLp"
                    }
                ],
            },
            {
                image: "http://extras.mnginteractive.com/live/media/site21/2018/0523/20180523__24DCABVSw~1.jpg",
                title: "The title of the song",
                time: "3:07",
                users: [
                    {
                        image: "https://levinescholars.uncc.edu/sites/levinescholars.uncc.edu/files/styles/portrait_image/public/fields/field_photo/photo/SSI_3987.jpg?itok=5N0KThLp"
                    }
                ],
            },
            {
                image: "http://extras.mnginteractive.com/live/media/site21/2018/0523/20180523__24DCABVSw~1.jpg",
                title: "The title of the song",
                time: "3:07",
                users: [
                    {
                        image: "https://levinescholars.uncc.edu/sites/levinescholars.uncc.edu/files/styles/portrait_image/public/fields/field_photo/photo/SSI_3987.jpg?itok=5N0KThLp"
                    }
                ],
            }
        ];
    }
    PlaylistComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PlaylistComponent.prototype, "disableRipple", void 0);
    PlaylistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-playlist',
            template: __webpack_require__(/*! ./playlist.component.html */ "./src/app/playlist/playlist.component.html"),
            styles: [__webpack_require__(/*! ./playlist.component.css */ "./src/app/playlist/playlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PlaylistComponent);
    return PlaylistComponent;
}());



/***/ }),

/***/ "./src/app/spotify.service.ts":
/*!************************************!*\
  !*** ./src/app/spotify.service.ts ***!
  \************************************/
/*! exports provided: SpotifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpotifyService", function() { return SpotifyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SpotifyService = /** @class */ (function () {
    function SpotifyService(httpClient) {
        this.httpClient = httpClient;
    }
    SpotifyService.prototype.authorize = function () {
        var state = this.generateRandomString(16);
        document.cookie = "spotify_auth_state=" + state;
        // location.href = "https://accounts.spotify.com/authorize?response_type=code&client_id=67f4df5a3037476aaf5e3cf792bc44d6&scope=user-read-private%20user-read-email&redirect_uri=http://tune-fish.com&state=NsRIsWxdcsDmSL0J&show_dialog=true";
        // let httpParams = new HttpParams()
        //   .append("response_type", "code")
        //   .append("client_id", "67f4df5a3037476aaf5e3cf792bc44d6")
        //   .append("scope", "user-read-private user-read-email")
        //   .append("redirect_uri", "http://localhost:8888/")
        //   .append("state", state)
        //   .append("show_dialog", "true");
        // this.httpClient.get("/spotify/authorize", {
        //   params: httpParams
        // }).subscribe(
        //   result => console.log(result),
        //   error => console.log(error)
        // );
    };
    SpotifyService.prototype.generateRandomString = function (length) {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };
    ;
    SpotifyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SpotifyService);
    return SpotifyService;
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
    firebase: {
        apiKey: "AIzaSyBAMTvZISVKpaRlizJW4WBkUNatchMEKXo",
        authDomain: "pack-hack.firebaseapp.com",
        databaseURL: "https://pack-hack.firebaseio.com",
        projectId: "pack-hack",
        storageBucket: "pack-hack.appspot.com",
        messagingSenderId: "150932035513"
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

module.exports = __webpack_require__(/*! /Users/samperlmutter/dev/intellij/pack_hacks/angular/pack-hacks/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map