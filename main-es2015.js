(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+1PG":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-studies/my-studies.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"loading\">\r\n    <mat-spinner></mat-spinner>\r\n</div>\r\n<div *ngFor=\"let keyData of studies; let index = index\">\r\n    <mat-card>\r\n        <div class=\"card-container\">\r\n            <mat-card-title class=\"card-container-left\">{{ keyData.name }}</mat-card-title>\r\n            <mat-card-subtitle>Ergebnisanzahl: {{ studyAmount[index] }}</mat-card-subtitle>\r\n            <div class=\"buttonrow\">\r\n                <button *ngIf=\"keyData.studyStatus == 0\" mat-flat-button class=\"greenButton\" (click)=\"onEditClick(keyData)\">\r\n                    <mat-icon>edit</mat-icon>&nbsp;Bearbeiten\r\n                </button>\r\n\r\n                <button *ngIf=\"keyData.studyStatus == 0\" mat-flat-button class=\"brownButton\" (click)=\"publish(keyData)\">\r\n                    <mat-icon>publish</mat-icon>&nbsp;Veröffentlichen\r\n                </button>\r\n\r\n                <button *ngIf=\"keyData.studyStatus == 1\" mat-flat-button class=\"greenButton\" (click)=\"onEndClick(keyData)\">\r\n                    <mat-icon>clear</mat-icon>&nbsp;Beenden\r\n                </button>\r\n\r\n                <button *ngIf=\"keyData.studyStatus == 2\" mat-flat-button class=\"brownButton\" (click)=\"resetStudy(keyData.id)\">\r\n                    <mat-icon>replay</mat-icon>&nbsp;Zurücksetzen\r\n                </button>\r\n\r\n                <button *ngIf=\"keyData.studyStatus == 2\" mat-flat-button class=\"greenButton\" (click)=\"getCSV(keyData.id)\">\r\n                    <mat-icon>assessment</mat-icon>&nbsp;Ergebnisse\r\n                </button>\r\n\r\n                <button *ngIf=\"keyData.studyStatus == 2\" mat-flat-button class=\"greenButton\" (click)=\"getParticipants(keyData.id)\">\r\n                    <mat-icon>supervisor_account</mat-icon>&nbsp;Teilnehmerliste\r\n                </button>\r\n\r\n                <button mat-flat-button class=\"redButton\" (click)=\"onDelete(keyData)\" style=\"margin-left: 15px\">\r\n                    <mat-icon>delete</mat-icon>&nbsp;Löschen\r\n                </button>\r\n            </div>\r\n        </div><br>\r\n        <mat-divider></mat-divider><br>\r\n        <mat-card-content style=\"word-wrap: normal;\">\r\n            {{keyData.shortDescription.text}}\r\n        </mat-card-content>\r\n    </mat-card>\r\n    <br />\r\n</div>\r\n<a mat-fab class=\"greenButton\" (click)=\"onNewClick()\" style=\"display: block; margin: auto;\">\r\n    <mat-icon>add</mat-icon>\r\n</a>");

/***/ }),

/***/ "+nPA":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".full-page {\r\n    height: 100%;\r\n    display: flex;\r\n    background-color: #303030;\r\n  }\r\n  \r\n  .login-card {\r\n    margin: auto;\r\n    width: 350px;\r\n  }\r\n  \r\n  .login-field {\r\n    width: 100%;\r\n  }\r\n  \r\n  mat-card {\r\n    padding: 50px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFRjtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtcGFnZSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luLWNhcmQge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gIH1cclxuICBcclxuICAubG9naW4tZmllbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxubWF0LWNhcmQge1xyXG4gICAgcGFkZGluZzogNTBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "/3i5":
/*!*****************************************************!*\
  !*** ./src/app/Model/Study/StudyObjects/Section.ts ***!
  \*****************************************************/
/*! exports provided: Section */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
/* harmony import */ var _Types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Types */ "ozSw");
/* harmony import */ var _AbstractStudyObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbstractStudyObject */ "Q9Pm");


/**
 * Eine Section stellt einen logischen Abschnitt einer Studie dar, das nur Section-Elemente, also
 * nur Objekte der Klasse AbstractSectionElement, enthalten darf.
 */
class Section extends _AbstractStudyObject__WEBPACK_IMPORTED_MODULE_1__["AbstractStudyObject"] {
    /**
     * Ein Attribut, was nicht als Parameter übergeben wird, ist sectionElements.
     * Dieses ist eine AbstractSectionElement-Liste, das die Section-Elemente
     * enthält, die der Studienleiter zu einer Section hinzufügt
     *
     * @param skippable erlaubt das Überspringen der Section innerhalb der Studie
     * @param name bezeichnet den Namen der Section
     * @param resultRelevant entscheidet, ob Ergebnisse der Section ins Endergebnis einer Studie mit
     * einfließen, z.B. ist eine Einführungs-Section mit einem Tutorial, um sich mit der Umgebung
     * vertraut zu machen, nicht von Bedeutung
     */
    constructor(id, name, displayName, skippable, resultRelevant, randomStrategy) {
        super(id, name, displayName);
        /**
         * In dem Attribut sind mittels ID Referenzen auf jene Elemente gespeichert, die innerhalb einer Section liegen.
         */
        this._sectionElements = [];
        this._skippable = skippable;
        this._resultRelevant = resultRelevant;
        this._randomStrategy = randomStrategy;
    }
    get verifier() {
        return this._verifier;
    }
    set verifier(verifier) {
        this._verifier = verifier;
    }
    get skippable() {
        return this._skippable;
    }
    set skippable(skippable) {
        if (skippable == null) {
            throw new Error("Skippable darf nicht null sein.");
        }
        this._skippable = skippable;
    }
    get resultRelevant() {
        return this._resultRelevant;
    }
    set resultRelevant(resultRelevant) {
        if (resultRelevant == null) {
            throw new Error("ResultRelevant darf nicht null sein.");
        }
        this._resultRelevant = resultRelevant;
    }
    get randomStrategy() {
        return this._randomStrategy;
    }
    set randomStrategy(randomStrategy) {
        if (randomStrategy == null) {
            throw new Error("RandomStrategy darf nicht null sein.");
        }
        this._randomStrategy = randomStrategy;
    }
    get sectionElements() {
        return this._sectionElements;
    }
    set sectionElements(sectionElements) {
        this._sectionElements = sectionElements;
    }
    /**
     * Fügt entweder einen Test oder einen Playground hinzu.
     *
     * @param studyObject ist die Referenz auf das StudyObject, das hinzugefügt werden soll.
     * @param index ist die Stelle, an die das Objekt hinzugefügt werden soll. Bei null wird es am Ende der Liste hinzugefügt.
     * @throws Error, falls es kein Test oder Playground ist.
     */
    addStudyObject(studyObject, index) {
        const typeOfReferenceTuple = this.verifier.getType(studyObject);
        if (!(typeOfReferenceTuple === _Types__WEBPACK_IMPORTED_MODULE_0__["Types"].SECTIONELEMENT)) {
            throw new Error("In eine Section können nur SectionElements eingefügt werden.");
        }
        if (index == null) {
            this.sectionElements.push(studyObject);
        }
        else {
            this.sectionElements.splice(index, 0, studyObject);
        }
    }
}


/***/ }),

/***/ "/lzh":
/*!***************************************************************!*\
  !*** ./src/app/dashboard/my-studies/my-studies.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\nbutton {\r\n    margin-left: 15px;\r\n    padding-bottom: 3px;\r\n}\r\n\r\nmat-card-title {\r\n    padding-top: 10px;\r\n}\r\n\r\n.greenButton {\r\n    background-color: #3e753b;\r\n    color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL215LXN0dWRpZXMvbXktc3R1ZGllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9teS1zdHVkaWVzL215LXN0dWRpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xyXG59XHJcblxyXG5tYXQtY2FyZC10aXRsZSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLmdyZWVuQnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZTc1M2I7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0iXX0= */");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\_Studium\PSE\pse-vibrostudies\Implementation\vibrostudies\src\main.ts */"zUnb");


/***/ }),

/***/ "0HUV":
/*!*******************************************************!*\
  !*** ./src/app/Model/Study/StudyObjects/TextBlock.ts ***!
  \*******************************************************/
/*! exports provided: TextBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextBlock", function() { return TextBlock; });
/* harmony import */ var _AbstractStudyObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractStudyObject */ "Q9Pm");

/**
 * Ein TextBlock stellt ein Studienobjekt dar, das nur einen unformatierten
 * Text enthält.
 */
class TextBlock extends _AbstractStudyObject__WEBPACK_IMPORTED_MODULE_0__["AbstractStudyObject"] {
    /**
     * @param text ist der Inhalt, also der Text des TextBlocks
     * @param id ist die eindeutige Identifikationsnummer des TextBlocks
     * @param fixed entscheidet, ob der TextBlock innerhalb eines Section-Elements eine feste Position hat oder die
     * Position von Studieninstanz zu Studieninstanz mit Hilfe von Randomisierung variiert
     */
    constructor(id, name, displayName, text) {
        super(id, name, displayName);
        this.objectType = "TextBlock";
        this.text = text;
    }
    get text() {
        return this._text;
    }
    set text(text) {
        this._text = text;
    }
}


/***/ }),

/***/ "1N3c":
/*!**************************************************************!*\
  !*** ./src/app/Model/Study/StudyObjects/VibrationElement.ts ***!
  \**************************************************************/
/*! exports provided: VibrationElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VibrationElement", function() { return VibrationElement; });
/* harmony import */ var _AbstractVibrationPatternElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractVibrationPatternElement */ "jdIE");

class VibrationElement extends _AbstractVibrationPatternElement__WEBPACK_IMPORTED_MODULE_0__["AbstractVibrationPatternElement"] {
    constructor(duration, amplitude) {
        super(duration);
        this.ensure8bitNumber(amplitude);
        this._amplitude = amplitude;
    }
    get amplitude() {
        return this._amplitude;
    }
    set amplitude(amplitude) {
        if (amplitude == null) {
            throw new Error("Amplitude konnte nicht gesetzt werden, da sie undefiniert ist.");
        }
        const temp = Number(amplitude);
        this.ensure8bitNumber(temp);
        this._amplitude = temp;
    }
    // Stellt sicher, dass der Parameter im erlaubten Bereich von 0 bis 255 liegt
    ensure8bitNumber(amplitude) {
        if (!Number.isInteger(amplitude)) {
            throw new Error("Es sind nur Ganzzahlen erlaubt.");
        }
        if (!(amplitude > 0 && amplitude <= 255)) {
            throw new Error("Es sind nur Werte zwischen 1 und 255 erlaubt.");
        }
    }
}


/***/ }),

/***/ "1W4x":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./register.component.html */ "OOnH");
/* harmony import */ var _register_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.component.css */ "+nPA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _Model_User_EMail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Model/User/EMail */ "BfXG");
/* harmony import */ var _Model_User_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Model/User/User */ "rPx+");
/* harmony import */ var _Model_User_UserDao_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Model/User/UserDao.service */ "Jz4F");
/* harmony import */ var _Model_User_UserPermission__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Model/User/UserPermission */ "rhQZ");
/* harmony import */ var _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/alert/alert.service */ "kyzu");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/auth/auth.service */ "9ans");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};










let RegisterComponent = class RegisterComponent {
    /**
     * Konstruktor der RegisterComponent. Darin werden sämtliche Services initialisert,
     * die für das Registrieren gebraucht werden.
     * @param router router Router Singleton, zum Routen des Pfads nach Eintritt eines Ereignisses
     * @param authService authService AuthService Singleton, ist für die Authentifizierung des Nutzers zuständig
     * @param userService
     */
    constructor(router, authService, userService, alertService) {
        this.router = router;
        this.authService = authService;
        this.userService = userService;
        this.alertService = alertService;
        /**
         * Das Feld, in das der Vorname eingetragen wird.
         */
        this.firstName = "";
        /**
         * Das Feld, in das der Nachname eingetragen wird.
         */
        this.lastName = "";
        /**
         * Das Feld, in das die EMail Adresse eingetragen wird.
         */
        this.email = "";
        /**
         * Das Feld, in das das Passwort eingetragen wird.
         */
        this.password = "";
        /**
         * Das Feld, in dem das Passwort wiederholt wird.
         */
        this.confirmPassword = "";
    }
    /**
     * Navigiert zum Dashboard wenn ein User authentifiziert wurde.
     */
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.authService.isAuthenticated().then(result => {
                if (result) {
                    this.router.navigate(["dashboard"], { replaceUrl: true });
                }
            });
        });
    }
    /**
     * Registriert für den Nutzer einen User in der Datenbank, falls er alle Eingabefelde
     * korrekt eingetragen hat.
     */
    register() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.firstName != "" && this.lastName != "" && this.email != ""
                && this.password != "" && this.password == this.confirmPassword) {
                let user = new _Model_User_User__WEBPACK_IMPORTED_MODULE_5__["User"](0, this.firstName, this.lastName, _Model_User_UserPermission__WEBPACK_IMPORTED_MODULE_7__["UserPermission"].CREATOR, new _Model_User_EMail__WEBPACK_IMPORTED_MODULE_4__["EMail"](this.email));
                yield this.userService.save(user, "", this.password).then(result => {
                    if (result) {
                        this.router.navigate(["login"], { replaceUrl: true });
                    }
                    else {
                        this.alertService.alert("Registration fehlgeschlagen. Vermutlich existiert bereits ein Account unter dieser E-Mail.");
                    }
                });
            }
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
    { type: _Model_User_UserDao_service__WEBPACK_IMPORTED_MODULE_6__["UserDao"] },
    { type: _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"] }
];
RegisterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_register_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
    /**
     * Die Registrierungskomponente ist für die Registrierung von Nutzern zuständig,
     * die noch nicht in der Datenbank stehen.
     */
    ,
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
        _Model_User_UserDao_service__WEBPACK_IMPORTED_MODULE_6__["UserDao"], _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"]])
], RegisterComponent);



/***/ }),

/***/ "24n0":
/*!*********************************!*\
  !*** ./src/app/app-settings.ts ***!
  \*********************************/
/*! exports provided: AppSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettings", function() { return AppSettings; });
class AppSettings {
}
AppSettings.baseURL = "https://vibrostudies.dmz.teco.edu/"; // HIER * DURCH BACKEND SERVER URL ERSETZEN


/***/ }),

/***/ "7I3w":
/*!******************************************************************!*\
  !*** ./src/app/Model/Study/CSVConverter/csvconverter.service.ts ***!
  \******************************************************************/
/*! exports provided: CSVConverter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSVConverter", function() { return CSVConverter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var export_to_csv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! export-to-csv */ "8j+T");
/* harmony import */ var export_to_csv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(export_to_csv__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let CSVConverter = class CSVConverter {
    constructor() {
        this.metaDataHeaders = ["Zeit in Millisekunden", "Marke", "Gerät", "Display", "Hardware", "Hersteller", "Model", "Produkt", "AndroidSDK", "Amplitude"];
    }
    generateResultCSV(study, results, download) {
        let data = [];
        const headers = this.generateHeaders(results[0].results);
        const numberOfQuestions = headers.length - this.metaDataHeaders.length;
        data = this.convertAllResultsToData(results, numberOfQuestions, data);
        const csvExporter = new export_to_csv__WEBPACK_IMPORTED_MODULE_1__["ExportToCsv"](this.setOptions(headers, study, "Ergebnisse"));
        return csvExporter.generateCsv(data, download);
    }
    giveResultCSV(study, results) {
        return this.generateResultCSV(study, results, false);
    }
    generateParticipantsCSV(study, results, download) {
        const headers = ["Vorname", "Nachname", "E-Mail"];
        let data = [];
        let participants = [];
        results.forEach(triple => { participants.push(triple.user); });
        const shuffeldUser = participants.map((a) => ({ sort: Math.random(), value: a }))
            .sort((a, b) => a.sort - b.sort)
            .map((a) => a.value);
        data = this.convertParticipantsToData(shuffeldUser, data);
        const csvExporter = new export_to_csv__WEBPACK_IMPORTED_MODULE_1__["ExportToCsv"](this.setOptions(headers, study, "Teilnehmerliste"));
        return csvExporter.generateCsv(data, download);
    }
    giveParticipantsCSV(study, results) {
        return this.generateParticipantsCSV(study, results, false);
    }
    convertParticipantsToData(participants, data) {
        participants.forEach(participant => {
            data.push({ firstName: participant.firstName, lastName: participant.lastName, email: participant.email.email });
        });
        return data;
    }
    setOptions(headers, study, fileType) {
        const studyKeyData = study.keyData;
        const options = {
            fieldSeparator: ';',
            filename: studyKeyData.name + " - " + fileType,
            quoteStrings: '"',
            decimalseparator: '.',
            showLabels: true,
            showTitle: true,
            title: fileType + ' ' + studyKeyData.name,
            useBom: true,
            noDownload: true,
            headers: headers,
            nullToEmptyString: true,
        };
        return options;
    }
    generateHeaders(questions) {
        let headers = [];
        const sortedQuestions = this.sortQuestionsByID(questions);
        sortedQuestions.forEach(question => {
            headers.push(question.name + "(" + question.id + ")");
        });
        headers = headers.concat(this.metaDataHeaders);
        return headers;
    }
    sortQuestionsByID(questions) {
        return questions.sort((a, b) => (a.id > b.id) ? 1 : -1);
    }
    convertAllResultsToData(results, numberOfQuestions, data) {
        results.forEach(tuple => {
            const answeredQuestions = tuple.results;
            if (answeredQuestions.length !== numberOfQuestions) {
                throw new Error("Es wurden nicht alle Fragen beantwortet.");
            }
            data = this.convertResultToData(answeredQuestions, tuple.metaData, data);
        });
        return data;
    }
    convertResultToData(result, metaData, data) {
        const sortedAnsweredQuestions = this.sortQuestionsByID(result);
        let csvObj = {};
        sortedAnsweredQuestions.forEach(question => {
            const nameOfProp = "question" + question.id;
            csvObj[nameOfProp] = question.answer;
        });
        csvObj = this.insertMetaData(csvObj, metaData);
        data.push(csvObj);
        return data;
    }
    insertMetaData(csvObject, metaData) {
        csvObject["time"] = metaData.timeInMs;
        csvObject["brand"] = metaData.brand;
        csvObject["device"] = metaData.device;
        csvObject["display"] = metaData.display;
        csvObject["hardware"] = metaData.hardware;
        csvObject["manufacturer"] = metaData.manufacturer;
        csvObject["model"] = metaData.model;
        csvObject["product"] = metaData.product;
        csvObject["androidsdk"] = metaData.androidsdk;
        csvObject["amplitude"] = this.booleanToReadableString(metaData.hasAmplitude);
        return csvObject;
    }
    booleanToReadableString(bool) {
        if (bool) {
            return "Ja";
        }
        return "Nein";
    }
};
CSVConverter.ctorParameters = () => [];
CSVConverter = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], CSVConverter);



/***/ }),

/***/ "80h2":
/*!********************************************************!*\
  !*** ./src/app/dashboard/profile/profile.component.ts ***!
  \********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./profile.component.html */ "adfr");
/* harmony import */ var _profile_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.component.css */ "JUn6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _src_app_Model_User_UserDao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/app/Model/User/UserDao.service */ "Jz4F");
/* harmony import */ var _src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/app/services/alert/alert.service */ "kyzu");
/* harmony import */ var _src_app_services_dialogs_confirmDialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/app/services/dialogs/confirmDialog.service */ "Nj1j");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth/auth.service */ "9ans");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







let ProfileComponent = class ProfileComponent {
    constructor(authService, userService, alertService, confirmDialogService) {
        this.authService = authService;
        this.userService = userService;
        this.alertService = alertService;
        this.confirmDialogService = confirmDialogService;
        this.oldPassword = "";
        this.newPassword = "";
        this.newPasswordRepeat = "";
    }
    /**
     * Initialisiert die ProfileComponent.
     */
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.user = this.authService.getUser();
        });
    }
    /**
     * Speichert den neuen Nutzer innerhalb der Datenbank und dem lokalen Speicher ab.
     */
    saveUser() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.userService.checkPassword(this.user.id, this.oldPassword).then((isValid) => __awaiter(this, void 0, void 0, function* () {
                if (isValid) {
                    yield this.userService.save(this.user, this.oldPassword, this.oldPassword).then(result => {
                        if (result) {
                            this.alertService.alert("Accountdaten erfolgreich gespeichert!");
                            this.authService.setUser(this.user);
                            this.oldPassword = "";
                        }
                        else {
                            this.alertService.alert("Das vorherige Passwort ist nicht korrekt. Accountdaten wurden nicht geändert.");
                        }
                    });
                }
            }));
        });
    }
    /**
     * Entfernt den Nutzer aus der Datenbank und loggt ihn aus der Anwendung aus.
     */
    deleteUser() {
        return __awaiter(this, void 0, void 0, function* () {
            this.confirmDialogService.openDialog("Hiermit werden alle deine Daten, inklusive deiner erstellten Studien, unwiderruflich gelöscht!").then((isConfirmed) => __awaiter(this, void 0, void 0, function* () {
                if (isConfirmed) {
                    yield this.userService.delete(this.user).then(response => {
                        if (response) {
                            this.alertService.alert("Account erfolgreich gelöscht!");
                        }
                    });
                    this.authService.logout();
                }
            }));
        });
    }
    /**
     * Speichert das neue Passwort ab.
     */
    savePassword() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.newPassword == this.newPasswordRepeat) {
                yield this.userService.save(this.user, this.oldPassword, this.newPassword).then((result) => __awaiter(this, void 0, void 0, function* () {
                    if (result) {
                        yield this.authService.login(this.user.email.email, this.newPassword);
                        this.newPassword = "";
                        this.newPasswordRepeat = "";
                        this.oldPassword = "";
                        this.alertService.alert("Passwort erfolgreich geändert!");
                    }
                    else {
                        this.alertService.alert("Das vorherige Passwort ist nicht korrekt. Das Passwort wurde nicht geändert.");
                    }
                }));
            }
        });
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _src_app_Model_User_UserDao_service__WEBPACK_IMPORTED_MODULE_3__["UserDao"] },
    { type: _src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _src_app_services_dialogs_confirmDialog_service__WEBPACK_IMPORTED_MODULE_5__["ConfirmDialogService"] }
];
ProfileComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_profile_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
    /**
     * Die ProfileComponent befähigt den Nutzer dazu alle Accountdaten zu verwalten,
     * die er momentan in der Datenbank abgespeichert hat. Dafür wird dem Nutzer
     * die Profil-Ansicht angeboten.
     */
    ,
    __metadata("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _src_app_Model_User_UserDao_service__WEBPACK_IMPORTED_MODULE_3__["UserDao"], _src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"], _src_app_services_dialogs_confirmDialog_service__WEBPACK_IMPORTED_MODULE_5__["ConfirmDialogService"]])
], ProfileComponent);



/***/ }),

/***/ "9ans":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _src_app_app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/app/app-settings */ "24n0");
/* harmony import */ var _src_app_Model_User_EMail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/app/Model/User/EMail */ "BfXG");
/* harmony import */ var _src_app_Model_User_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/app/Model/User/User */ "rPx+");
/* harmony import */ var _alert_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../alert/alert.service */ "kyzu");
/* harmony import */ var _storage_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../storage/storage.service */ "E2f4");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








let AuthService = class AuthService {
    /**
     * Konstruktor des AuthService. Darin werden sämtliche Services initialisert,
     * die für eine Authentifizierung des Nutzers gebraucht werden.
     * @param router Router Singleton, zum Routen des Pfads nach Eintritt eines Ereignisses
     * @param http HttpClient der zurückgi
     * @param storageService StorageService, zum Ablegen des authentifizierten Nutzers in den lokalen Speicher
     * @param alertService
     */
    constructor(http, router, storageService, alertService) {
        this.http = http;
        this.router = router;
        this.storageService = storageService;
        this.alertService = alertService;
    }
    /**
     * Löscht den registrierten Nutzer aus dem lokalen Speicher.
     */
    clear() {
        this.storageService.clear();
    }
    /**
     * Überprüft ob ein gegebener User in der Datenbank existiert
     * und auch autehntifiziert werden kann.
     * @returns Promise<boolean>, je nachdem ob der Nutzer existiert oder nicht
     */
    isAuthenticated() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = false;
            if (!this.isTokenExpired()) {
                if (this.getUser() && this.getAuthToken()) {
                    yield this.userIsValid(this.getUser().id, this.getAuthToken()).then(response => {
                        if (response) {
                            result = true;
                        }
                        else {
                            this.alertService.alert("Login-Session abgelaufen. Bitte erneut anmelden!");
                        }
                    });
                }
            }
            return result;
        });
    }
    /**
     * Checkt ob ein Nutzer valide ist.
     * @param id number des User-Objekts vom Nutzer
     * @param token string Token des Nutzers
     */
    userIsValid(id, token) {
        return __awaiter(this, void 0, void 0, function* () {
            let isValid = false;
            yield this.http.post(_src_app_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].baseURL + "VerifyUser/", { id: id, token: token }).toPromise().then(result => {
                if (result) {
                    isValid = true;
                }
            });
            return isValid;
        });
    }
    /**
     * Checkt ob ein Token für die Sitzung mit dem Nutzer schon abgelaufen ist oder nicht.
     * @returns boolean ob Token abgelaufen ist oder nicht
     */
    isTokenExpired() {
        try {
            this.storageService.get("userToken");
        }
        catch (err) {
            return true;
        }
        return false;
    }
    /**
     * Loggt einen Nutzer in die Anwendung ein, indem das User-Objekt aus der Datenbank geholt wird
     * und anschließend in den lokalen Speicher reingeladen wird, falls das eingegebene Passwort
     * mit dem des Nutzers in der Datenbank übereinstimmt.
     * @param email string für die E-Mail Adresse des Nutzers
     * @param password string für das Passwort des Nutzers
     * @throws Error, wenn kein solcher Nutzer in der Datenbank enthalten ist
     */
    login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            let user;
            yield this.http.post(_src_app_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].baseURL + "Login/", {
                email: email,
                password: password,
            }).toPromise().then(data => {
                if (data.id) {
                    user = new _src_app_Model_User_User__WEBPACK_IMPORTED_MODULE_5__["User"](data.id, data.firstName, data.lastName, data.permission, new _src_app_Model_User_EMail__WEBPACK_IMPORTED_MODULE_4__["EMail"](data.email));
                    this.setUser(user);
                    this.setAuthToken(data.token);
                }
                else {
                    throw new Error("No such user found in database.");
                }
            });
            return user != undefined;
        });
    }
    /**
     * Setzt ein Authentifizierungstoken im lokalen Speicher.
     * @param token string des Tokens
     */
    setAuthToken(token) {
        this.storageService.set("token", token);
    }
    /**
     * Holt den Authentifizierungstoke aus dem lokalen Speicher.
     */
    getAuthToken() {
        return this.storageService.get("token");
    }
    /**
     * Generiert einen Standardnutzer welcher durch den Nutzer, der im userToken spezifiziert wurde, überschrieben
     * wird. Dieser wird dann anschließend als registrierter Nutzer zurückgeschrieben.
     * @returns User-Objekt des aktuell registrierten Nutzers
     * @throws Error, wenn kein Nutzer im lokalen Speicher enthalten ist
     */
    getUser() {
        let user;
        if (this.storageService.get("userToken") != undefined) {
            let userToken = JSON.parse(this.storageService.get("userToken"));
            user = new _src_app_Model_User_User__WEBPACK_IMPORTED_MODULE_5__["User"](userToken._id, userToken._firstName, userToken._lastName, userToken._permission, new _src_app_Model_User_EMail__WEBPACK_IMPORTED_MODULE_4__["EMail"](userToken._email._email));
        }
        return user;
    }
    /**
     * Setzt einen Nutzer in den lokalen Speicher, indem sein User-Objekt
     * zu eiem JSON konvertiert und anschließend abgespeichert wird.
     * Hierbei wird im lokalen Speicher genau ein Nutzer abgelegt.
     * @param user User-Objekt des Nutzers, der in den lokalen Speicher gesetzt werden soll
     * @throws Error, wenn der Nutzer auf null oder undefined gesetzt wird
     */
    setUser(user) {
        if (user == null) {
            throw new Error("Setting the User to null or undefined is not allowed.");
        }
        this.storageService.set("userToken", JSON.stringify(user));
    }
    /**
     * Entfernt den registrieten Nutzer aus dem lokalen Speicher und navigiert zur Login-Ansicht.
     */
    logout() {
        this.clear();
        this.router.navigate(["login"], { replaceUrl: true });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _storage_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"] },
    { type: _alert_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] }
];
AuthService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
    /**
     * Der AuthService verwaltet die Authentifizierung, Registrierung und
     * Abmeldung des Nutzers in der Anwendung.
     */
    ,
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _storage_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"], _alert_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]])
], AuthService);



/***/ }),

/***/ "9rjs":
/*!******************************************************************!*\
  !*** ./src/app/Model/Study/Result/UserResultTupleDAO.service.ts ***!
  \******************************************************************/
/*! exports provided: UserResultTupleDAO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserResultTupleDAO", function() { return UserResultTupleDAO; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/app/app-settings */ "24n0");
/* harmony import */ var _src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/app/services/auth/auth.service */ "9ans");
/* harmony import */ var _User_EMail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../User/EMail */ "BfXG");
/* harmony import */ var _User_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../User/User */ "rPx+");
/* harmony import */ var _User_UserPermission__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../User/UserPermission */ "rhQZ");
/* harmony import */ var _StudyPrototypeDAO_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../StudyPrototypeDAO.service */ "osms");
/* harmony import */ var _UserResultTuple__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UserResultTuple */ "hVaG");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};










let UserResultTupleDAO = class UserResultTupleDAO {
    constructor(http, studyService, authService) {
        this.http = http;
        this.studyService = studyService;
        this.authService = authService;
    }
    /**
     * Die Methode gibt asynchron ein UserResultTuple zurück, welches eindeutig durch die id identifiziert wird.
     * @param studyId number ist die ID des UserResultTuple, der aus der Datenbank geholt werden soll
     */
    get(studyId) {
        return __awaiter(this, void 0, void 0, function* () {
            let userResult = [];
            let study;
            yield this.studyService.get(studyId).then(studyResult => {
                study = studyResult;
            });
            yield this.http.post(_src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].baseURL + "Result/" + studyId + "/", { token: this.authService.getAuthToken() })
                .toPromise().then(result => {
                for (let element of result) {
                    let answers = [];
                    let index = 0;
                    for (let questionAnswer of element.answers) {
                        for (let studyObject of study.studyObjects) {
                            if (studyObject.id == questionAnswer.objectId) {
                                let copied = lodash__WEBPACK_IMPORTED_MODULE_9__["cloneDeep"](studyObject);
                                copied.id = index++;
                                copied.answer = questionAnswer.answer;
                                answers.push(copied);
                            }
                        }
                    }
                    userResult.push(new _UserResultTuple__WEBPACK_IMPORTED_MODULE_8__["UserResultTuple"](new _User_User__WEBPACK_IMPORTED_MODULE_5__["User"](0, element.participant.firstName, element.participant.lastName, _User_UserPermission__WEBPACK_IMPORTED_MODULE_6__["UserPermission"].PARTICIPANT, new _User_EMail__WEBPACK_IMPORTED_MODULE_4__["EMail"](element.participant.email)), answers, element.metaData));
                }
            });
            return userResult;
        });
    }
    /**
     * Die Methode speichert asynchron ein UserResultTuple in einer Datenbank, welches nachdem
     * es gespeichert wurde wieder mit get aufgerufen werden kann.
     * @param studyId number Id der Studie
     * @param idUser number Id des Users der an der Studie teilgenomment hat
     * @param object UserResultTuple ist der UserResultTuple, der gespeichert werden soll
     * @param participantId number Id die der User innerhalb der Studie zugewiesen bekommen hat
     */
    save(studyId, idUser, object, participantId) {
        return __awaiter(this, void 0, void 0, function* () {
            let success = false;
            yield this.http.post(_src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].baseURL + "SaveResult/", {
                participantId: participantId,
                studyId: studyId,
                userId: idUser,
                metaData: object.metaData,
                answeredQuestions: object.answeredQuestions,
                token: this.authService.getAuthToken(),
            }).toPromise().then(result => {
                if (result) {
                    success = true;
                }
            });
            return success;
        });
    }
    /**
     * Startet die Ausführung einer bestimmten Studie für einen Nutzer
     * @param studyId number id der Studie die gestartet wird
     * @param userId number id des Users der an der Studie teilnimmt
     */
    startStudy(studyId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let returnId = -1;
            yield this.http.post(_src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].baseURL + "StartStudy/", { studyId: studyId, userId: userId,
                token: this.authService.getAuthToken() })
                .toPromise().then(result => {
                if (result != -1) {
                    returnId = result;
                }
            });
            return returnId;
        });
    }
};
UserResultTupleDAO.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] },
    { type: _StudyPrototypeDAO_service__WEBPACK_IMPORTED_MODULE_7__["StudyPrototypeDAO"] },
    { type: _src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
UserResultTupleDAO = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _StudyPrototypeDAO_service__WEBPACK_IMPORTED_MODULE_7__["StudyPrototypeDAO"], _src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], UserResultTupleDAO);



/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "B6Ro":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/my-studies/my-studies.component.ts ***!
  \**************************************************************/
/*! exports provided: MyStudiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyStudiesComponent", function() { return MyStudiesComponent; });
/* harmony import */ var _raw_loader_my_studies_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./my-studies.component.html */ "+1PG");
/* harmony import */ var _my_studies_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-studies.component.css */ "/lzh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _src_app_Model_Study_KeyData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/app/Model/Study/KeyData */ "r/57");
/* harmony import */ var _src_app_Model_Study_KeyDataDAO_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/app/Model/Study/KeyDataDAO.service */ "ROf3");
/* harmony import */ var _src_app_Model_Study_ShortDescription__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/app/Model/Study/ShortDescription */ "FerX");
/* harmony import */ var _src_app_Model_Study_StudyPrototypeDAO_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @src/app/Model/Study/StudyPrototypeDAO.service */ "osms");
/* harmony import */ var _src_app_Model_Study_StudyStatus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @src/app/Model/Study/StudyStatus */ "iqOD");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/auth/auth.service */ "9ans");
/* harmony import */ var _src_app_services_study_wrapper_study_wrapper_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @src/app/services/study-wrapper/study-wrapper.service */ "pzGZ");
/* harmony import */ var _src_app_Model_Study_CSVConverter_csvconverter_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @src/app/Model/Study/CSVConverter/csvconverter.service */ "7I3w");
/* harmony import */ var _src_app_Model_Study_StudyPrototype__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @src/app/Model/Study/StudyPrototype */ "hRBY");
/* harmony import */ var _src_app_Model_Study_Result_UserResultTupleDAO_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @src/app/Model/Study/Result/UserResultTupleDAO.service */ "9rjs");
/* harmony import */ var _src_app_Model_Randomizing_RandomizingStrategies__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @src/app/Model/Randomizing/RandomizingStrategies */ "TQet");
/* harmony import */ var _src_app_services_dialogs_confirmDialog_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @src/app/services/dialogs/confirmDialog.service */ "Nj1j");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
















let MyStudiesComponent = class MyStudiesComponent {
    /**
     * Konstruktor der MyStudiesComponent. Darin werden sämtliche Services initialisert,
     * die für die "Meine Studien"-Ansicht gebraucht werden.
     * @param router Router Singleton, zum Routen des Pfads nach Eintritt eines Ereignisses
     * @param studywrapper StudyWrapperService Singleton, indem die zu bearbeitende Studie enthalten ist
     * @param keyDataService KeyDataDao Singleton, um auf die Schlüsselinformationen aller verfügbaren Studien zuzugreifen
     * @param studyService StudyPrototypeDAO Singleton, um auf sämtliche Studien zuzugreifen, die vom Nutzer erstellt wurde
     * @param authService AuthService Singleton, ist für die Authentifizierung des Nutzers zuständig
     * @param csvService CSVConverter ist zum konvertierten der Ergebnisse und zum Abspeichern dieser da
     * @param resultService UserResultTupleDAO, um UserResultTuple aus der Datenbank anzusprechen
     */
    constructor(router, studywrapper, keyDataService, studyService, authService, csvService, resultService, confirmDialogService) {
        this.router = router;
        this.studywrapper = studywrapper;
        this.keyDataService = keyDataService;
        this.studyService = studyService;
        this.authService = authService;
        this.csvService = csvService;
        this.resultService = resultService;
        this.confirmDialogService = confirmDialogService;
        /**
         * Das Array<KeyData> enthält alle Studien, die der eingeloggte Nutzer erstellt hat.
         */
        this.studies = [];
        /**
         * boolean, welches zeigt, ob etwas lädt oder nicht.
         */
        this.loading = true;
        /**
         * boolean, welches zeigt, ob etwas erstellt wird oder nicht.
         */
        this.creating = false;
        this.studyAmount = [];
    }
    /**
     * Initialisiert die AvailableStudiesComponent.
     */
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.authService.getUser().permission == 0) {
                this.router.navigate(["dashboard"], { replaceUrl: true });
            }
            else {
                yield this.getStudies();
            }
        });
    }
    /**
     * Holt die vom Nutzer erstellten Studien.
     */
    getStudies() {
        return __awaiter(this, void 0, void 0, function* () {
            this.loading = true;
            yield this.keyDataService.getFromUserId(this.authService.getUser().id).then((keyDataResults) => __awaiter(this, void 0, void 0, function* () {
                if (keyDataResults.length > 0) {
                    this.studies = keyDataResults;
                    for (let i = 0; i < this.studies.length; i++) {
                        yield this.resultService.get(this.studies[i].id).then((result) => __awaiter(this, void 0, void 0, function* () {
                            this.studyAmount[i] = result.length;
                        }));
                    }
                }
                else {
                    this.studies = [];
                }
                this.loading = false;
            }));
        });
    }
    /**
     * Navigiert den Nutzer zur Studienerstellung-Ansicht, der jeweiligen ausgewählten Studie.
     * @param keyData KeyData sind die Schlüsselinformationen der ausgewählten Studie
     */
    onEditClick(keyData) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.studyService.get(keyData.id).then(studyResult => {
                this.studywrapper.study = studyResult;
            });
            this.router.navigate(["studycreation/general-editing"], { replaceUrl: true });
        });
    }
    /**
     * Löscht die ausgewählte Studie aus der Datenbank.
     * @param keyData KeyData sind die Schlüsselinformationen der ausgewählten Studie
     */
    onDelete(keyData) {
        return __awaiter(this, void 0, void 0, function* () {
            this.confirmDialogService.openDialog("Hiermit wird die Studie unwiderruflich gelöscht!").then((isConfirmed) => __awaiter(this, void 0, void 0, function* () {
                if (isConfirmed) {
                    yield this.keyDataService.delete(keyData.id).then(keyDataResult => {
                        this.getStudies();
                    });
                }
            }));
        });
    }
    /**
     * Beendet eine veröffentlichte Studie des Nutzers.
     * @param keyData KeyData sind die Schlüsselinformationen der ausgewählten Studie
     */
    onEndClick(keyData) {
        return __awaiter(this, void 0, void 0, function* () {
            keyData.studyStatus = _src_app_Model_Study_StudyStatus__WEBPACK_IMPORTED_MODULE_8__["StudyStatus"].FINISHED;
            yield this.keyDataService.updateStudyState(keyData.id, _src_app_Model_Study_StudyStatus__WEBPACK_IMPORTED_MODULE_8__["StudyStatus"].FINISHED).then(result => {
                if (result) {
                    this.getStudies();
                }
            });
        });
    }
    /**
     * Navigiert den Nutzer zur Studienerstellung-Ansicht, um eine neue Studie anzulegen.
     */
    onNewClick() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.creating) {
                this.creating = true;
                let user = yield this.authService.getUser();
                let keyData = new _src_app_Model_Study_KeyData__WEBPACK_IMPORTED_MODULE_4__["KeyData"](-1, user, _src_app_Model_Study_StudyStatus__WEBPACK_IMPORTED_MODULE_8__["StudyStatus"].CREATED, new _src_app_Model_Study_ShortDescription__WEBPACK_IMPORTED_MODULE_6__["ShortDescription"]("Neue Studie"), "Neue Studie", false, "Neue Studie");
                let study = new _src_app_Model_Study_StudyPrototype__WEBPACK_IMPORTED_MODULE_12__["StudyPrototype"](keyData);
                study.randomStrategy = _src_app_Model_Randomizing_RandomizingStrategies__WEBPACK_IMPORTED_MODULE_14__["RandomizingStrategies"].STANDARD;
                yield this.studyService.save(study).then((result) => __awaiter(this, void 0, void 0, function* () {
                    if (result) {
                        yield this.studyService.get(result).then(studyResult => {
                            this.studywrapper.study = studyResult;
                            this.creating = false;
                            this.router.navigate(["studycreation/general-editing"], { replaceUrl: true });
                        });
                    }
                }));
            }
        });
    }
    /**
     * Konvertiert die Ergebnisse in eine .csv-Datei und legt diese auf dem Endsystem des Nutzers ab.
     * @param studyId number ist die ID der Studie, dessen Ergebnisse exportiert werden
     */
    getCSV(studyId) {
        return __awaiter(this, void 0, void 0, function* () {
            let study;
            yield this.studyService.get(studyId).then(studyResult => {
                study = studyResult;
            });
            let userResult;
            yield this.resultService.get(studyId).then(result => {
                userResult = result;
            });
            this.csvService.giveResultCSV(study, userResult);
        });
    }
    getParticipantCount(studyId) {
        return __awaiter(this, void 0, void 0, function* () {
            return 0;
        });
    }
    /**
     * Trägt alle Teilnehmer einer ausgewählten Studie in eine .csv-Datei ein und
     * legt diese auf dem Endsystem des Nutzers ab.
     * @param studyId number ist die ID der Studie, dessen Ergebnisse exportiert werden
     */
    getParticipants(studyId) {
        return __awaiter(this, void 0, void 0, function* () {
            let study;
            yield this.studyService.get(studyId).then(studyResult => {
                study = studyResult;
            });
            let userResult;
            yield this.resultService.get(studyId).then(result => {
                userResult = result;
            });
            this.csvService.giveParticipantsCSV(study, userResult);
        });
    }
    /**
     * Setzt eine Studie zurück.
     * @param studyId number ist die ID der Studie, die zurückgesetzt wird
     */
    resetStudy(studyId) {
        return __awaiter(this, void 0, void 0, function* () {
            this.confirmDialogService.openDialog("Beim Zurücksetzen der Studie werden auch alle Studienergebnisse gelöscht!").then((isConfirmed) => __awaiter(this, void 0, void 0, function* () {
                if (isConfirmed) {
                    let study;
                    yield this.studyService.get(studyId).then(studyResult => {
                        study = studyResult;
                    });
                    study.keyData.studyStatus = _src_app_Model_Study_StudyStatus__WEBPACK_IMPORTED_MODULE_8__["StudyStatus"].CREATED;
                    yield this.keyDataService.delete(study.keyData.id);
                    yield this.studyService.save(study);
                    this.getStudies();
                }
            }));
        });
    }
    /**
     * Veröffentlicht eine ausgewählte Studie.
     * @param keyData KeyData sind die Schlüsselinformationen der ausgewählten Studie
     */
    publish(keyData) {
        return __awaiter(this, void 0, void 0, function* () {
            keyData.studyStatus = _src_app_Model_Study_StudyStatus__WEBPACK_IMPORTED_MODULE_8__["StudyStatus"].PUBLISHED;
            yield this.keyDataService.updateStudyState(keyData.id, _src_app_Model_Study_StudyStatus__WEBPACK_IMPORTED_MODULE_8__["StudyStatus"].PUBLISHED).then(result => {
                if (result) {
                    this.getStudies();
                }
            });
        });
    }
};
MyStudiesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _src_app_services_study_wrapper_study_wrapper_service__WEBPACK_IMPORTED_MODULE_10__["StudyWrapperService"] },
    { type: _src_app_Model_Study_KeyDataDAO_service__WEBPACK_IMPORTED_MODULE_5__["KeyDataDao"] },
    { type: _src_app_Model_Study_StudyPrototypeDAO_service__WEBPACK_IMPORTED_MODULE_7__["StudyPrototypeDAO"] },
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
    { type: _src_app_Model_Study_CSVConverter_csvconverter_service__WEBPACK_IMPORTED_MODULE_11__["CSVConverter"] },
    { type: _src_app_Model_Study_Result_UserResultTupleDAO_service__WEBPACK_IMPORTED_MODULE_13__["UserResultTupleDAO"] },
    { type: _src_app_services_dialogs_confirmDialog_service__WEBPACK_IMPORTED_MODULE_15__["ConfirmDialogService"] }
];
MyStudiesComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-my-studies',
        template: _raw_loader_my_studies_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_my_studies_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
    /**
     * Die MyStudiesComponent blendet dem Nutzer alle Studien ein, welcher er selbst erstellt hat.
     * In der "Meine-Studien"-Ansicht kann der Nutzer seine eigenen Studien bearbeiten, veröffentlichen,
     * beenden und die Ergebnisse einsehen, sowie exportieren.
     */
    ,
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _src_app_services_study_wrapper_study_wrapper_service__WEBPACK_IMPORTED_MODULE_10__["StudyWrapperService"],
        _src_app_Model_Study_KeyDataDAO_service__WEBPACK_IMPORTED_MODULE_5__["KeyDataDao"],
        _src_app_Model_Study_StudyPrototypeDAO_service__WEBPACK_IMPORTED_MODULE_7__["StudyPrototypeDAO"],
        _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
        _src_app_Model_Study_CSVConverter_csvconverter_service__WEBPACK_IMPORTED_MODULE_11__["CSVConverter"],
        _src_app_Model_Study_Result_UserResultTupleDAO_service__WEBPACK_IMPORTED_MODULE_13__["UserResultTupleDAO"],
        _src_app_services_dialogs_confirmDialog_service__WEBPACK_IMPORTED_MODULE_15__["ConfirmDialogService"]])
], MyStudiesComponent);



/***/ }),

/***/ "BfXG":
/*!*************************************!*\
  !*** ./src/app/Model/User/EMail.ts ***!
  \*************************************/
/*! exports provided: EMail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMail", function() { return EMail; });
/**
 *Die public class Email definiert eine E-Mail Adresse
 */
class EMail {
    /**
     * Hier wird eine neue E-Mail erstellt und ihre Gültigkeit sichergestellt.
     * @param email
     */
    constructor(email) {
        if (this.ensureValidation(email)) {
            this._email = email;
        }
    }
    get email() {
        return this._email;
    }
    /**
     * Das Attribut email wird gesetzt und ihre Gültigkeit sichergestellt.
     * @param email
     */
    set email(email) {
        if (this.ensureValidation(email)) {
            this._email = email;
        }
    }
    ensureValidation(email) {
        if (!email) {
            throw new Error("Email kann nicht null oder leer sein.");
        }
        return true;
    }
}


/***/ }),

/***/ "E2f4":
/*!*****************************************************!*\
  !*** ./src/app/services/storage/storage.service.ts ***!
  \*****************************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let StorageService = class StorageService {
    /**
     * Standardkonstruktor eines Services
     */
    constructor() { }
    /**
     * Gibt das Item, welches den Schlüssel hat, aus dem lokalen Speicher zurück.
     * @param key string ist der Schlüssel des Items
     * @returns string des Items
     * @throws Error sobald das zurückgegebene Item null ist
     */
    get(key) {
        const item = localStorage.getItem(key);
        if (item == null) {
            throw new Error("No such data with given key found in local storage.");
        }
        return localStorage.getItem(key);
    }
    /**
     * Legt ein Item im lokalen Speicher ab.
     * @param key string ist der Schlüssel des Items
     * @param data string sind die Nutzdaten des Items
     * @throws Error sobald key oder data null oder undefined ist
     */
    set(key, data) {
        if ((key == null) || (data == null)) {
            throw new Error("Key or data is null or undefined.");
        }
        localStorage.setItem(key, data);
    }
    /**
     * Löscht alle abgelegten Items innerhalb des lokalen Speichers.
     */
    clear() {
        localStorage.clear();
    }
    /**
     * Löscht ein Item, welches den Schlüssel hat, aus dem lokalen Speicher.
     * @param key String ist der Schlüssel des Items
     */
    remove(key) {
        localStorage.removeItem(key);
    }
};
StorageService.ctorParameters = () => [];
StorageService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    })
    /**
     * Der StorageService verwaltet die Speicherung, Bearbeitung und Löschen von Items, welche
     * im lokalen Speicher der Sitzung abgelegt werden.
     */
    ,
    __metadata("design:paramtypes", [])
], StorageService);



/***/ }),

/***/ "FerX":
/*!*************************************************!*\
  !*** ./src/app/Model/Study/ShortDescription.ts ***!
  \*************************************************/
/*! exports provided: ShortDescription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortDescription", function() { return ShortDescription; });
/**
 * Die Konstante definiert, wie lang in Zeichen der String einer ShortDescription sein darf
 */
const maxLength = 200;
/**
 * ShortDescription enthält die Kurzbeschreibung, die in der Studienübersicht angezeigt wird
 */
class ShortDescription {
    /**
     * Erzeugt eine Kurzbeschreibung dabei kann wahlweise direkt der Text mitgegeben werden,
     * der in der Kurzbeschreibung stehen soll.
     * @param text
     */
    constructor(text) {
        if (this.ensureTextValidation(text)) {
            this._text = text;
        }
    }
    get text() {
        return this._text;
    }
    /**
     * Setzt den Text der Kurzbeschreibung und prüft ob die Beschreibung kürzer als die maximal erlaubte Länge ist
     * @param text Text der Kurzbeschreibung
     */
    set text(text) {
        if (this.ensureTextValidation(text)) {
            this._text = text;
        }
    }
    ensureTextValidation(toValidate) {
        if (toValidate.length > maxLength) {
            return false;
        }
        return true;
    }
}


/***/ }),

/***/ "GhTv":
/*!**********************************************************************************!*\
  !*** ./src/app/dashboard/participated-studies/participated-studies.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ParticipatedStudiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipatedStudiesComponent", function() { return ParticipatedStudiesComponent; });
/* harmony import */ var _raw_loader_participated_studies_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./participated-studies.component.html */ "av4J");
/* harmony import */ var _participated_studies_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./participated-studies.component.css */ "X8SS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let ParticipatedStudiesComponent = class ParticipatedStudiesComponent {
    constructor() { }
    get exampleStudieListItems() {
        return this._exampleStudieListItems;
    }
    ngOnInit() {
    }
};
ParticipatedStudiesComponent.ctorParameters = () => [];
ParticipatedStudiesComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-participated-studies',
        template: _raw_loader_participated_studies_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_participated_studies_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [])
], ParticipatedStudiesComponent);



/***/ }),

/***/ "H/d9":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar>\r\n    <img src=\"assets/images/Icon.png\" style=\"height: 4vh;\" />\r\n    <span>&nbsp;&nbsp;VibroStudies</span>\r\n    <span class=\"flexExpand\"></span>\r\n    <a class=\"helpButton\" mat-flat-button href=\"https://www.youtube.com/watch?v=RfdquOH7AxI\" target=\"_blank\">\r\n        <mat-icon>help</mat-icon>&nbsp;Hilfe\r\n    </a>\r\n</mat-toolbar>\r\n<mat-sidenav-container>\r\n    <mat-sidenav opened mode=\"side\">\r\n        <mat-nav-list><br>\r\n            <div style=\"margin-left: 15px;\">\r\n                <h2>Hallo {{ this.authService.getUser().firstName }}!&nbsp;<mat-icon\r\n                        style=\"position:relative;top: 5px;\">emoji_people</mat-icon>\r\n                </h2>\r\n            </div>\r\n            <mat-divider></mat-divider>\r\n            <a mat-list-item [routerLink]=\"['profile']\">\r\n                <mat-icon>person</mat-icon>&nbsp;Profil\r\n            </a>\r\n            <div *ngIf=\"this.authService.getUser().permission != 0\">\r\n                <mat-divider></mat-divider>\r\n                <a mat-list-item [routerLink]=\"['my-studies']\">\r\n                    <mat-icon>question_answer</mat-icon>&nbsp;Meine Studien\r\n                </a>\r\n            </div>\r\n            <mat-divider></mat-divider>\r\n\r\n            <div class=\"bottomrow\">\r\n                <mat-divider></mat-divider>\r\n                <a mat-list-item (click)=\"logout()\" class>\r\n                    <mat-icon>exit_to_app</mat-icon>&nbsp;Abmelden\r\n                </a>\r\n            </div>\r\n\r\n        </mat-nav-list>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content>\r\n        <router-outlet></router-outlet>\r\n        <br><br>\r\n    </mat-sidenav-content>\r\n</mat-sidenav-container>");

/***/ }),

/***/ "HEL/":
/*!************************************************************!*\
  !*** ./src/app/Model/Study/StudyObjects/SectionElement.ts ***!
  \************************************************************/
/*! exports provided: SectionElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionElement", function() { return SectionElement; });
/* harmony import */ var _AbstractStudyObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractStudyObject */ "Q9Pm");

/**
 * Ein SectionElement bezeichnet einen allgemeinen Container, in den man,
 * abhängig von der konkreten Unterklasse, nur bestimmte Studienobjekte einfügen kann.
 */
class SectionElement extends _AbstractStudyObject__WEBPACK_IMPORTED_MODULE_0__["AbstractStudyObject"] {
    /**
     * Ein Attribut, was nicht als Parameter übergeben wird, ist studyObjects. Dieses ist eine
     * AbstractStudyObjectProduct-Liste, das die vom Studienleiter in das Section-Element eingefügten Studienobjekte enthält
     *
     * @param name ist der Name des Section-Elements
     * @param fixed entscheidet, ob das Section-Element eine feste Position in einer Section hat oder die
     * Position von Studieninstanz zu Studieninstanz mit Hilfe von Randomisierung variiert
     */
    constructor(id, name, displayName, randomStrategy, studyObjects, verifier) {
        super(id, name, displayName);
        /**
         * Das Attribut gibt an, ob ein SectionElement für den Studienteilnehmer überspringbar sein soll.
         */
        this._skippable = false;
        /**
         * In dem Attribut sind mittels ID Referenzen auf jene Elemente gespeichert, die innerhalb eines SectionElements liegen.
         */
        this._studyObjects = [];
        /**
         * Das Attribut gibt an, ob ein SectionElement in die Ergebnisauswertung miteinbezogen wird.
         */
        this._resultRelevant = true;
        if (studyObjects == null) {
            this._studyObjects = [];
        }
        else {
            this._studyObjects = studyObjects;
        }
        this._verifier = verifier;
        this._randomStrategy = randomStrategy;
    }
    get verifier() {
        return this._verifier;
    }
    set verifier(verifier) {
        this._verifier = verifier;
    }
    get skippable() {
        return this._skippable;
    }
    set skippable(skippable) {
        if (skippable == null) {
            throw new Error("Skippable darf nicht null sein.");
        }
        this._skippable = skippable;
    }
    get studyObjects() {
        return this._studyObjects;
    }
    set studyObjects(studyObjects) {
        this._studyObjects = studyObjects;
    }
    get randomStrategy() {
        return this._randomStrategy;
    }
    set randomStrategy(randomStrategy) {
        if (randomStrategy == null) {
            throw new Error("RandomStrategy darf nicht null sein.");
        }
        this._randomStrategy = randomStrategy;
    }
    get resultRelevant() {
        return this._resultRelevant;
    }
    set resultRelevant(resultRelevant) {
        if (resultRelevant == null) {
            throw new Error("ResultRelevant darf nicht null sein.");
        }
        this._resultRelevant = resultRelevant;
    }
    /**
     * Die Methode tauscht ein StudyObject an den angegebenen Index.
     * @Deprecated
     * @param oldIndex ist der Index, an dem das StudyObject liegt.
     * @param newIndex ist der gewünschte Index, an dem das StudyObject liegen soll.
     * @throws RangeError, wenn der Index außerhalb des Bereiches der Liste war.
     */
    swapStudyObject(oldIndex, newIndex) {
        const highestIndex = (this.studyObjects.length - 1);
        if (oldIndex > highestIndex || newIndex > highestIndex
            || oldIndex < 0 || newIndex < 0) {
            throw new RangeError("Index liegt außerhalb des Bereich.");
        }
        const temp = this._studyObjects[oldIndex];
        this._studyObjects[oldIndex] = this._studyObjects[newIndex];
        this._studyObjects[newIndex] = temp;
    }
    /**
     * Löscht ein StudyObject.
     * @Deprecated
     * @param id ist die ID des zu löschenden Objektes.
     */
    removeStudyObject(id) {
        this.studyObjects = this.studyObjects.filter(element => element.ID !== id);
    }
    /**
     * Fügt ein StudyObject hinzu.
     * @Deprecated
     * @param studyObject ist die Referenz auf das StudyObject, das hinzugefügt werden soll.
     * @param index ist die Stelle, an die das Objekt hinzugefügt werden soll. Bei null wird es am Ende der Liste hinzugefügt.
     */
    addStudyObject(studyObject, index) {
        if (index == null) {
            this.studyObjects.push(studyObject);
        }
        else if (this.studyObjects == null && index === 0) {
            this.studyObjects.push(studyObject);
        }
        else if (this.studyObjects == null && index !== 0) {
            throw new Error("Index des Section Elements fehlerhaft!");
        }
        else if (0 <= index && index <= this.studyObjects.length) {
            this.studyObjects.splice(index, 0, studyObject);
        }
        else {
            throw new Error("Index des Section Elements fehlerhaft!");
        }
    }
}


/***/ }),

/***/ "HfNz":
/*!***********************************************!*\
  !*** ./src/app/Model/Study/ReferenceTuple.ts ***!
  \***********************************************/
/*! exports provided: ReferenceTuple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferenceTuple", function() { return ReferenceTuple; });
/**
 * Ein ReferenceTuple liegt in einer Container Objekt und speichert die ID des Elements,
 * welches dem Container zugeordnet werden soll, sowie die Information, ob das entspechende
 * Objekt bei einer Randomisierung des Containers seine Position behalten soll.
 */
class ReferenceTuple {
    constructor(ID, isFixed) {
        this._ID = ID;
        this._isFixed = isFixed;
    }
    get ID() {
        return this._ID;
    }
    set ID(ID) {
        this._ID = ID;
    }
    get isFixed() {
        return this._isFixed;
    }
    set isFixed(isFixed) {
        this._isFixed = isFixed;
    }
}


/***/ }),

/***/ "JSb+":
/*!***********************************************************!*\
  !*** ./src/app/studycreation/studycreation.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-sidenav-container {\r\n    height: 94vh;\r\n}\r\n\r\nmat-sidenav-content {\r\n    padding: 15px;\r\n}\r\n\r\nmat-sidenav {\r\n    width: 13vw;\r\n}\r\n\r\nmat-toolbar {\r\n    height: 6vh;\r\n}\r\n\r\n.bottomrow {\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 100%;\r\n}\r\n\r\n.flexExpand {\r\n    flex: 1 1 auto;\r\n  }\r\n\r\n.helpButton {\r\n    background-color: #3e753b;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZHljcmVhdGlvbi9zdHVkeWNyZWF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsT0FBTztJQUNQLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7RUFDaEI7O0FBRUY7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9zdHVkeWNyZWF0aW9uL3N0dWR5Y3JlYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDk0dmg7XHJcbn1cclxuXHJcbm1hdC1zaWRlbmF2LWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxubWF0LXNpZGVuYXYge1xyXG4gICAgd2lkdGg6IDEzdnc7XHJcbn1cclxuXHJcbm1hdC10b29sYmFyIHtcclxuICAgIGhlaWdodDogNnZoO1xyXG59XHJcblxyXG4uYm90dG9tcm93IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZsZXhFeHBhbmQge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgfVxyXG4gIFxyXG4uaGVscEJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2U3NTNiO1xyXG59Il19 */");

/***/ }),

/***/ "JUn6":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/profile/profile.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".full-page {\r\n    height: 100%;\r\n    display: flex;\r\n  }\r\n  \r\n  .login-card {\r\n    margin: auto;\r\n    width: 350px;\r\n  }\r\n  \r\n  .login-field {\r\n    width: 100%;\r\n  }\r\n  \r\n  mat-card {\r\n    padding: 50px;\r\n}\r\n  \r\n  .header {\r\n  font-size: 18px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFlBQVk7SUFDWixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUY7SUFDSSxhQUFhO0FBQ2pCOztFQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXBhZ2Uge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luLWNhcmQge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gIH1cclxuICBcclxuICAubG9naW4tZmllbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxubWF0LWNhcmQge1xyXG4gICAgcGFkZGluZzogNTBweDtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59Il19 */");

/***/ }),

/***/ "Jz4F":
/*!***********************************************!*\
  !*** ./src/app/Model/User/UserDao.service.ts ***!
  \***********************************************/
/*! exports provided: UserDao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDao", function() { return UserDao; });
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User */ "rPx+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _EMail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EMail */ "BfXG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _src_app_app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/app/app-settings */ "24n0");
/* harmony import */ var _src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/app/services/auth/auth.service */ "9ans");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






let UserDao = class UserDao {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.userURL = _src_app_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].baseURL + "User/";
    }
    /**
     * Die Methode gibt asynchron ein User Objekt zurück, welches eindeutig durch die id identifiziert wird.
     * @param id number ist die ID des Users, der aus der Datenbank geholt werden soll
     */
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let user;
            yield this.http.post(this.userURL + id + "/", { token: this.authService.getAuthToken() }).toPromise().then(data => {
                user = new _User__WEBPACK_IMPORTED_MODULE_0__["User"](data.id, data.firstName, data.lastName, data.userPermission, new _EMail__WEBPACK_IMPORTED_MODULE_2__["EMail"](data.email));
            });
            return user;
        });
    }
    /**
     * Prüft, ob das gegebene Passwort zum Passwort des User in der Datenbank passt
     * @param userId number ID des User
     * @param password string Passwort das zu prüfen ist
     */
    checkPassword(userId, password) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = false;
            yield this.http.post(_src_app_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].baseURL + "CheckPassword/", {
                id: userId,
                password: password,
                token: this.authService.getAuthToken(),
            }).toPromise().then(response => {
                if (response) {
                    result = true;
                }
            });
            return result;
        });
    }
    /**
     * Die Methode speichert asynchron object in einer Datenbank, welches nachdem es gespeichert wurde wieder mit get aufgerufen werden kann.
     * @param object User ist der Nutzer, der gespeichert werden soll
     * @param oldPassword string altes Passwort des User
     * @param newPassword string neues Passwort des User
     */
    save(object, oldPassword, newPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = false;
            yield this.http.post(_src_app_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].baseURL + "SaveUser/", {
                id: object.id,
                firstName: object.firstName,
                lastName: object.lastName,
                oldPassword: oldPassword,
                newPassword: newPassword,
                email: object.email.email,
            }).toPromise().then(data => {
                if (data) {
                    result = true;
                }
            });
            return result;
        });
    }
    /**
     * Löscht das User Objekt object aus der Datenbank.
     * @param object User ist der Nutzer, der gelöscht werden soll
     */
    delete(object) {
        return __awaiter(this, void 0, void 0, function* () {
            let success = false;
            yield this.http.post(_src_app_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].baseURL + "DeleteUser/" + object.id + "/", { token: this.authService.getAuthToken() }).toPromise().then(data => {
                if (data) {
                    success = true;
                }
            });
            return success;
        });
    }
};
UserDao.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
UserDao = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: "root"
    })
    /**
     * Das UserDAO ist für den Zugriff auf die User Objekte in der Datenbank verantwortlich.
     */
    ,
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
], UserDao);



/***/ }),

/***/ "MEPm":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/dialogs/dialog-template.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Bist du dir sicher?</h1>\r\n<div mat-dialog-content>\r\n  <p>{{data.message}}</p>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onCancel()\">Abbrechen</button>\r\n  <button mat-button (click)=\"onConfirm()\">Bestätigen</button>\r\n</div>");

/***/ }),

/***/ "MsGT":
/*!******************************************************************************!*\
  !*** ./src/app/Model/Study/StudyObjects/Questions/MultipleChoiceQuestion.ts ***!
  \******************************************************************************/
/*! exports provided: MultipleChoiceQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultipleChoiceQuestion", function() { return MultipleChoiceQuestion; });
/* harmony import */ var _AbstractQuestion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractQuestion */ "zfOo");

/**
 * Ein MultipleChoiceQuestion ist ein Fragenobjekt, das sowohl mehrere Antworten
 * anbieten als auch mehrere Antworten akzeptieren kann
 */
class MultipleChoiceQuestion extends _AbstractQuestion__WEBPACK_IMPORTED_MODULE_0__["AbstractQuestion"] {
    /**
     * Ein Attribut, was nicht als Parameter übergeben wird, ist answerOptions. Dieses ist eine
     * String-Liste, dass vorkonfigurierte Antworten enthält
     *
     * Ein weiteres Attribut, was nicht als Parameter übergeben wird, ist answer. Dieses ist eine String-Liste, die
     * die ausgewählten Antwortoptionen als Antwort auf die Frage beinhaltet.
     *
     * @param maxChoices beschreibt die maximale Anzahl an Antworten, die man auf eine Frage geben kann
     * @param questionText ist die Frage, die gestellt werden soll
     * @param id ist die eindeutige Identifikationsnummer des MultipleChoiceQuestions
     * @param fixed entscheidet, ob MultipleChoiceQuestion innerhalb eines Section-Elements eine feste Position hat oder die
     * Position von Studieninstanz zu Studieninstanz mit Hilfe von Randomisierung variiert
     */
    constructor(id, name, questionText, displayName, answerOptions, maxChoices) {
        super(id, name, questionText, displayName);
        this.objectType = "MultipleChoiceQuestion";
        this.maxChoices = maxChoices;
        this.answerOptions = answerOptions;
        super.answer = [];
    }
    get maxChoices() {
        return this._maxChoices;
    }
    set maxChoices(maxChoices) {
        if (maxChoices == null) {
            throw new Error("MaxChoices darf nicht null sein.");
        }
        if (maxChoices < 1) {
            throw new Error("Es muss mindestens eine Antwort angegeben werden können");
        }
        this._maxChoices = maxChoices;
    }
    get answerOptions() {
        return this._answerOptions;
    }
    set answerOptions(answerOptions) {
        this._answerOptions = answerOptions;
    }
}


/***/ }),

/***/ "Nj1j":
/*!***********************************************************!*\
  !*** ./src/app/services/dialogs/confirmDialog.service.ts ***!
  \***********************************************************/
/*! exports provided: ConfirmDialogService, DialogTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogService", function() { return ConfirmDialogService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogTemplate", function() { return DialogTemplate; });
/* harmony import */ var _raw_loader_dialog_template_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./dialog-template.html */ "MEPm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



let ConfirmDialogService = class ConfirmDialogService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog(msg) {
        return __awaiter(this, void 0, void 0, function* () {
            let isConfirmed = false;
            const dialogRef = this.dialog.open(DialogTemplate, { data: { message: msg } });
            yield dialogRef.afterClosed().toPromise().then(result => {
                isConfirmed = result;
            });
            return isConfirmed;
        });
    }
};
ConfirmDialogService.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
ConfirmDialogService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
], ConfirmDialogService);

let DialogTemplate = class DialogTemplate {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onCancel() {
        this.dialogRef.close(false);
    }
    onConfirm() {
        this.dialogRef.close(true);
    }
};
DialogTemplate.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
DialogTemplate = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dialog-template',
        template: _raw_loader_dialog_template_html__WEBPACK_IMPORTED_MODULE_0__["default"],
    }),
    __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
], DialogTemplate);



/***/ }),

/***/ "OOnH":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"full-page\">\r\n    <mat-card class=\"login-card\">\r\n        <mat-card-title style=\"text-align: center;\">\r\n            <img src=\"../../assets/images/Icon.png\" width=\"100\"><br><br>\r\n            VibroStudies Registrierung\r\n        </mat-card-title>\r\n        <mat-card-content>\r\n            <mat-form-field class=\"login-field\">\r\n                <input matInput placeholder=\"Vorname\" name=\"firstName\" [(ngModel)]=\"firstName\" type=\"text\"\r\n                    (keyup.enter)=\"register()\" />\r\n            </mat-form-field>\r\n            <mat-form-field class=\"login-field\">\r\n                <input matInput placeholder=\"Nachname\" name=\"lastName\" [(ngModel)]=\"lastName\" type=\"text\"\r\n                    (keyup.enter)=\"register()\" />\r\n            </mat-form-field>\r\n            <mat-form-field class=\"login-field\">\r\n                <input matInput placeholder=\"E-Mail\" name=\"email\" [(ngModel)]=\"email\" type=\"email\"\r\n                    (keyup.enter)=\"register()\" />\r\n            </mat-form-field>\r\n            <mat-form-field class=\"login-field\">\r\n                <input matInput placeholder=\"Passwort\" name=\"password\" [(ngModel)]=\"password\" type=\"password\"\r\n                    (keyup.enter)=\"register()\" />\r\n            </mat-form-field>\r\n            <mat-form-field class=\"login-field\">\r\n                <input matInput placeholder=\"Passwort wiederholen\" name=\"password\" [(ngModel)]=\"confirmPassword\"\r\n                    type=\"password\" (keyup.enter)=\"register()\" />\r\n            </mat-form-field>\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n        <div style=\"text-align: center\">\r\n            <button mat-raised-button class=\"greenButton\" (click)=\"register()\" type=\"submit\">\r\n                Registrieren\r\n            </button>\r\n        </div>\r\n        </mat-card-actions>\r\n        <div style=\"text-align: center\">\r\n            <button mat-flat-button class=\"redButton\" [routerLink]=\"['../login']\">Zurück</button>\r\n        </div>\r\n    </mat-card>\r\n</div>");

/***/ }),

/***/ "OmuS":
/*!***************************************************!*\
  !*** ./src/app/guards/role/role-guard.service.ts ***!
  \***************************************************/
/*! exports provided: RoleGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleGuardService", function() { return RoleGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/app/services/auth/auth.service */ "9ans");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let RoleGuardService = class RoleGuardService {
    /**
     * Konstruktor des RoleGuardService. Darin werden sämtliche Services initialisert,
     * die für den RoleGuardService gebraucht werden.
     * @param authService AuthService Singleton, ist für das Aufrufen des registrierten Nutzers zuständig
     * @param router Router Singleton, zum Routen des Pfads nach Eintritt eines Ereignisses
     */
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    /**
     * Die vom Interface zu implementierende Methode, welche den Guard aktiviert oder deaktiviert.
     * @param route ActivatedRouteSnapshot ist der aktuellen Zustand der aktivierten Route
     * @param state RouterSnapshot ist der aktuelle Zustand des Routers
     * @returns Promise<boolean>, je nachdem ob der Nutzer die benötigte Rolle für das Aufrufen der Ansicht besitzt oder nicht.
     */
    canActivate(route, state) {
        if (!this.authService.getUser().permission >= route.data.expectedRole) {
            this.router.navigate(["login"], { replaceUrl: true });
            return false;
        }
        return true;
    }
};
RoleGuardService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
RoleGuardService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    })
    /**
     * Der RoleGuardService ist ein Guard, also für die Navigation der Route innerhalb der Anwendung zuständig.
     * Dieser Guard ist für die Identifikation der Rolle des Nutzers zuständig (CREATOR, PARTICIPANT, ADMIN).
     * Dazu verwendet es das CanActivate Interface, welches von jedem anderen Guard verwendet wird.
     * Nur wenn alle Guards wahr sind, kann auf die gewünschte Ansicht navigiert werden, sonst nicht.
     */
    ,
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], RoleGuardService);



/***/ }),

/***/ "Oy4E":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _dashboard_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.routes */ "X8dr");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let DashboardRoutingModule = class DashboardRoutingModule {
};
DashboardRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_dashboard_routes__WEBPACK_IMPORTED_MODULE_2__["routes"])],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], DashboardRoutingModule);



/***/ }),

/***/ "Q2gg":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/available-studies/available-studies.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9hdmFpbGFibGUtc3R1ZGllcy9hdmFpbGFibGUtc3R1ZGllcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "Q9Pm":
/*!*****************************************************************!*\
  !*** ./src/app/Model/Study/StudyObjects/AbstractStudyObject.ts ***!
  \*****************************************************************/
/*! exports provided: AbstractStudyObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractStudyObject", function() { return AbstractStudyObject; });
/**
 * Eine abstrakte Oberklasse für alle Elemente, die eine Studie beinhaltet.
 */
class AbstractStudyObject {
    /**
     * @param id ist die eindeutige Identifikationsnummer des Studienobjekts
     * @param fixed entscheidet, ob das Studienobjekt innerhalb eines Section-Elements eine feste Position hat oder die
     * Position von Studieninstanz zu Studieninstanz mit Hilfe von Randomisierung variiert
     */
    constructor(id, name, displayName) {
        if (id == null) {
            throw new Error("Id darf nicht null sein.");
        }
        this._id = id;
        this._name = name;
        this._displayName = displayName;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        if (id == null) {
            throw new Error("Id darf nicht null sein.");
        }
        this._id = id;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get displayName() {
        return this._displayName;
    }
    set displayName(displayName) {
        this._displayName = displayName;
    }
}


/***/ }),

/***/ "QX6l":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./dashboard.component.html */ "H/d9");
/* harmony import */ var _dashboard_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component.css */ "VKVo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth/auth.service */ "9ans");
/* harmony import */ var _services_study_wrapper_study_wrapper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/study-wrapper/study-wrapper.service */ "pzGZ");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






let DashboardComponent = class DashboardComponent {
    /**
     * Konstruktor der AvailableStudiesComponent. Darin werden sämtliche Services initialisert,
     * die für die "Verfügbare Studien"-Ansicht gebraucht werden.
     * @param authService AuthService Singleton, ist für die Authentifizierung des Nutzers zuständig
     * @param route ActivatedRoute ist die aktivierte Route
     */
    constructor(studywrapper, authService, route) {
        this.studywrapper = studywrapper;
        this.authService = authService;
        this.route = route;
    }
    /**
     * Initialisiert die DashboardComponent.
     */
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.studywrapper.study = undefined;
        });
    }
    /**
     * Loggt den Nutzer aus der Anwendung aus und navigiert ihn zurück zur Login-Ansicht.
     */
    logout() {
        this.authService.logout();
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _services_study_wrapper_study_wrapper_service__WEBPACK_IMPORTED_MODULE_5__["StudyWrapperService"] },
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
DashboardComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_dashboard_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
    /**
     * Die DashboardComponent enthält die Seitenansicht in der Anwendung.
     * Darin sind alle Dienste festgehalten, die invariant zu jeder anderen Sicht (außer der Studienerstellung und -teilnahme) sind.
     */
    ,
    __metadata("design:paramtypes", [_services_study_wrapper_study_wrapper_service__WEBPACK_IMPORTED_MODULE_5__["StudyWrapperService"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], DashboardComponent);



/***/ }),

/***/ "ROf3":
/*!***************************************************!*\
  !*** ./src/app/Model/Study/KeyDataDAO.service.ts ***!
  \***************************************************/
/*! exports provided: KeyDataDao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyDataDao", function() { return KeyDataDao; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _KeyData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./KeyData */ "r/57");
/* harmony import */ var _ShortDescription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShortDescription */ "FerX");
/* harmony import */ var _User_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../User/User */ "rPx+");
/* harmony import */ var _User_EMail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../User/EMail */ "BfXG");
/* harmony import */ var _src_app_app_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/app/app-settings */ "24n0");
/* harmony import */ var _User_UserPermission__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../User/UserPermission */ "rhQZ");
/* harmony import */ var _src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @src/app/services/auth/auth.service */ "9ans");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};









let KeyDataDao = class KeyDataDao {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.studyURL = _src_app_app_settings__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].baseURL + "Study/";
        this.qualiQuestionURL = _src_app_app_settings__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].baseURL + "QualificationQuestion/";
        this.userURL = _src_app_app_settings__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].baseURL + "User/";
    }
    /**
     * Die Methode gibt asynchron ein KeyData Objekt zurück, welches eindeutig durch die id identifiziert wird.
     * @param userId number ist die ID der KeyData, die aus der Datenbank geholt werden soll
     */
    getFromUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let keyData = [];
            yield this.http.post(_src_app_app_settings__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].baseURL + "MyStudies/" + userId
                + "/", { token: this.authService.getAuthToken() })
                .toPromise()
                .then(studiesResult => {
                for (let element of studiesResult) {
                    keyData.push(new _KeyData__WEBPACK_IMPORTED_MODULE_2__["KeyData"](element.id, this.authService.getUser(), element.studyStatus, new _ShortDescription__WEBPACK_IMPORTED_MODULE_3__["ShortDescription"](element.shortDescription), element.fullDescription, element.isAmplitudeNecessary, element.name));
                }
            });
            return keyData;
        });
    }
    /**
     * Liefert alle Studien an denen der Benutzer mit der id userId bereits teilgenommen hat.
     * @param userId number des Users
     */
    getParticipated(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = [];
            yield this.http.post(_src_app_app_settings__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].baseURL + "ParticipatedStudies/" +
                userId + "/", { token: this.authService.getAuthToken() })
                .toPromise()
                .then(keyDatas => {
                for (let element of keyDatas) {
                    result.push(new _KeyData__WEBPACK_IMPORTED_MODULE_2__["KeyData"](element.id, new _User_User__WEBPACK_IMPORTED_MODULE_4__["User"](0, element.author.firstName, element.author.lastName, _User_UserPermission__WEBPACK_IMPORTED_MODULE_7__["UserPermission"].CREATOR, new _User_EMail__WEBPACK_IMPORTED_MODULE_5__["EMail"](element.author.email)), element.studyStatus, new _ShortDescription__WEBPACK_IMPORTED_MODULE_3__["ShortDescription"](element.shortDescription), element.fullDescription, element.isAmplitudeNecessary, element.name));
                }
            });
            return result;
        });
    }
    /**
     * Die Methode gibt asynchron eine Liste aller KeyData Objekte zurück, die für einen Benutzer verfügbar sind.
     * @param userId number des Users der die Studien anfordert
     * @param hasAmplitude boolean Info ob der Nutzer eine Amplitudenunterstützung braucht.
     */
    getAvailableStudies(userId, hasAmplitude) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = [];
            yield this.http.post(_src_app_app_settings__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].baseURL + "AvailableStudies/?userId=" + userId +
                "&hasAmplitude=" + hasAmplitude, { token: this.authService.getAuthToken() }).toPromise().then(availableResult => {
                for (let study of availableResult) {
                    result.push(new _KeyData__WEBPACK_IMPORTED_MODULE_2__["KeyData"](study.id, new _User_User__WEBPACK_IMPORTED_MODULE_4__["User"](0, study.author.firstName, study.author.lastName, _User_UserPermission__WEBPACK_IMPORTED_MODULE_7__["UserPermission"].CREATOR, new _User_EMail__WEBPACK_IMPORTED_MODULE_5__["EMail"](study.author.email)), study.studyStatus, study.shortDescription, study.fullDescription, study.amplitudeNecessary, study.name));
                }
            });
            return result;
        });
    }
    /**
     * Die Methode aktualisiert den Status einer Studie
     * @param id number ist die Id der Studie deren Status aktualisiert wird
     * @param state number ist der Status auf den aktualisiert wird
     */
    updateStudyState(id, state) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = false;
            yield this.http.post(_src_app_app_settings__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].baseURL + "UpdateStudyState/" + id +
                "/", { token: this.authService.getAuthToken(), state: state }).toPromise().then(response => {
                if (response) {
                    result = true;
                }
            });
            return result;
        });
    }
    /**
     * Löscht das KeyData Objekt object aus der Datenbank.
     * @param id number sind die Schlüsselinformationen, die gelöscht werden sollen
     */
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let success = false;
            yield this.http.post(_src_app_app_settings__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].baseURL + "DeleteStudy/" + id
                + "/", { token: this.authService.getAuthToken(), id: id }).toPromise().then(result => {
                if (result) {
                    success = true;
                }
            });
            return success;
        });
    }
};
KeyDataDao.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] },
    { type: _src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] }
];
KeyDataDao = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
    /**
     * Das KeyDataDAO ist für den Zugriff auf die KeyData Objekte in der Datenbank verantwortlich.
     */
    ,
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]])
], KeyDataDao);



/***/ }),

/***/ "RUEf":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _guards_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guards/auth/auth-guard.service */ "cRx8");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _studycreation_studycreation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./studycreation/studycreation.component */ "jA02");





const routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
    },
    {
        path: "register",
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"],
    },
    {
        path: "dashboard",
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"],
        canActivate: [_guards_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]],
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @src/app/dashboard/dashboard.module */ "TDBs")).then(m => m.DashboardModule)
    },
    {
        path: "studycreation",
        component: _studycreation_studycreation_component__WEBPACK_IMPORTED_MODULE_4__["StudyCreationComponent"],
        canActivate: [_guards_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]],
        loadChildren: () => __webpack_require__.e(/*! import() | src-app-studycreation-studycreation-module */ "src-app-studycreation-studycreation-module").then(__webpack_require__.bind(null, /*! @src/app/studycreation/studycreation.module */ "Q8vR")).then(m => m.StudycreationModule)
    },
];


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_app_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/app-settings/app-settings.service */ "zd4C");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let AppComponent = class AppComponent {
    constructor(appSettingsService) {
        this.appSettingsService = appSettingsService;
    }
    ngOnInit() {
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_app_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_3__["AppSettingsService"] }
];
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [_services_app_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_3__["AppSettingsService"]])
], AppComponent);



/***/ }),

/***/ "TDBs":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _src_app_dashboard_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/app/dashboard/dashboard-routing.module */ "Oy4E");
/* harmony import */ var _src_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/material.module */ "wLiR");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _src_app_dashboard_my_studies_my_studies_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/app/dashboard/my-studies/my-studies.component */ "B6Ro");
/* harmony import */ var _src_app_dashboard_available_studies_available_studies_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/app/dashboard/available-studies/available-studies.component */ "xpyY");
/* harmony import */ var _src_app_dashboard_participated_studies_participated_studies_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @src/app/dashboard/participated-studies/participated-studies.component */ "GhTv");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/profile.component */ "80h2");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let DashboardModule = class DashboardModule {
};
DashboardModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"],
            _src_app_dashboard_my_studies_my_studies_component__WEBPACK_IMPORTED_MODULE_5__["MyStudiesComponent"],
            _src_app_dashboard_available_studies_available_studies_component__WEBPACK_IMPORTED_MODULE_6__["AvailableStudiesComponent"],
            _src_app_dashboard_participated_studies_participated_studies_component__WEBPACK_IMPORTED_MODULE_7__["ParticipatedStudiesComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _src_app_dashboard_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"],
            _src_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
        ]
    })
], DashboardModule);



/***/ }),

/***/ "TQet":
/*!************************************************************!*\
  !*** ./src/app/Model/Randomizing/RandomizingStrategies.ts ***!
  \************************************************************/
/*! exports provided: RandomizingStrategies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RandomizingStrategies", function() { return RandomizingStrategies; });
var RandomizingStrategies;
(function (RandomizingStrategies) {
    RandomizingStrategies[RandomizingStrategies["NONE"] = 0] = "NONE";
    RandomizingStrategies[RandomizingStrategies["STANDARD"] = 1] = "STANDARD";
})(RandomizingStrategies || (RandomizingStrategies = {}));


/***/ }),

/***/ "Tcgm":
/*!***************************************************************************!*\
  !*** ./src/app/Model/Study/StudyObjects/Questions/LinearScaleQuestion.ts ***!
  \***************************************************************************/
/*! exports provided: LinearScaleQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinearScaleQuestion", function() { return LinearScaleQuestion; });
/* harmony import */ var _AbstractQuestion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractQuestion */ "zfOo");

/**
 * Ein LinearScaleQuestion ist ein Fragenobjekt, das eine lineare Skala darstellt.
 * Auf der Skala können nur natürliche Zahlen angezeigt werden.
 * Es kann nur ein Wert auf der Skala als Antwort ausgewählt werden.
 */
class LinearScaleQuestion extends _AbstractQuestion__WEBPACK_IMPORTED_MODULE_0__["AbstractQuestion"] {
    /**
     * Ein Attribut, was nicht als Parameter übergeben wird, ist answer. Dieses bezeichnet die Wahl
     * auf der Skala als Antwort auf die Frage vom Typ number.
     *
     * @param numberOfChoices bezeichnet das Zahlenintervall, beginnend bei 1 und endet bei numberOfChoices
     * @param leftLabel ist eine Bezeichnung für den Anfang der Skala, z.B. gut
     * @param rightLabel ist eine Bezeichnung für das Ende der Skala, z.B. schlecht
     * @param questionText ist die Frage, die gestellt werden soll
     * @param id ist die eindeutige Identifikationsnummer des LinearScaleQuestions
     * @param fixed entscheidet, ob LinearScaleQuestion innerhalb eines Section-Elements eine feste Position hat oder die
     * Position von Studieninstanz zu Studieninstanz mit Hilfe von Randomisierung variiert
     */
    constructor(id, name, questionText, displayName, numberOfChoices, leftLabel, rightLabel) {
        super(id, name, questionText, displayName);
        this.objectType = "LinearScaleQuestion";
        this._numberOfChoices = numberOfChoices;
        this._leftLabel = leftLabel;
        this._rightLabel = rightLabel;
        super.answer = -1;
    }
    get numberOfChoices() {
        return this._numberOfChoices;
    }
    set numberOfChoices(numberOfChoices) {
        if (numberOfChoices == null) {
            throw new Error("NumberOfChoices darf nicht null sein.");
        }
        if (numberOfChoices < 2) {
            throw new Error("NumberOfChoices muss mindestens 2 sein.");
        }
        this._numberOfChoices = numberOfChoices;
    }
    get leftLabel() {
        return this._leftLabel;
    }
    set leftLabel(leftLabel) {
        this._leftLabel = leftLabel;
    }
    get rightLabel() {
        return this._rightLabel;
    }
    set rightLabel(rightLabel) {
        this._rightLabel = rightLabel;
    }
}


/***/ }),

/***/ "USEZ":
/*!*****************************************************************!*\
  !*** ./src/app/Model/Study/ReferenceTupleMembershipVerifier.ts ***!
  \*****************************************************************/
/*! exports provided: ReferenceTupleMembershipVerifier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferenceTupleMembershipVerifier", function() { return ReferenceTupleMembershipVerifier; });
/* harmony import */ var _Types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Types */ "ozSw");
/* harmony import */ var _StudyObjects_Section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StudyObjects/Section */ "/3i5");
/* harmony import */ var _StudyObjects_Questions_AbstractQuestion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StudyObjects/Questions/AbstractQuestion */ "zfOo");
/* harmony import */ var _StudyObjects_VibrationPattern__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StudyObjects/VibrationPattern */ "tJs4");
/* harmony import */ var _StudyObjects_TextBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StudyObjects/TextBlock */ "0HUV");
/* harmony import */ var _StudyObjects_SectionElement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StudyObjects/SectionElement */ "HEL/");






/**
 * Der ReferenceTupleMembershipVerifier kann innerhalb einer Studie festellen, welchen
 * Typ ein ReferenceTuple hat und das Objekt zurückgeben, welches auf das ReferenceTuple zeigt.
 */
class ReferenceTupleMembershipVerifier {
    constructor(studyPrototype) {
        this._studyPrototype = studyPrototype;
    }
    get studyPrototype() {
        return this._studyPrototype;
    }
    set studyPrototype(studyPrototype) {
        this._studyPrototype = studyPrototype;
    }
    /**
     * Gibt zu ref den Typ des Objekts an, zu dem die ID in ref gehört.
     * @param ref ReferenceTuple ist das Referenztupel zu dem der Typ ermittelt werden soll
     */
    getType(ref) {
        let search = this.searchForId(this.studyPrototype.sections, ref); // TODO: entcopypasten
        if (search[1]) {
            return this.assignType(search[0]);
        }
        search = this.searchForId(this.studyPrototype.answeredQuestion, ref);
        if (search[1]) {
            return this.assignType(search[0]);
        }
        search = this.searchForId(this.studyPrototype.sectionElements, ref);
        if (search[1]) {
            return this.assignType(search[0]);
        }
        search = this.searchForId(this.studyPrototype.studyObjects, ref);
        if (search[1]) {
            return this.assignType(search[0]);
        }
        throw new Error("Element mit der angegebenen ID befindet sich in keiner Liste.");
    }
    /**
     * Gibt zu ref das Objekt zurück, zu dem die ID in ref gehört.
     * @param ref ReferenceTuple ist das Referenztupel welches gedowncastet wird
     */
    getObject(ref) {
        let search = this.searchForId(this.studyPrototype.sections, ref); // TODO: entcopypasten
        if (search[1]) {
            return search[0];
        }
        search = this.searchForId(this.studyPrototype.answeredQuestion, ref);
        if (search[1]) {
            return search[0];
        }
        search = this.searchForId(this.studyPrototype.sectionElements, ref);
        if (search[1]) {
            return search[0];
        }
        search = this.searchForId(this.studyPrototype.studyObjects, ref);
        if (search[1]) {
            return search[0];
        }
        throw new Error("Element mit der angegebenen ID befindet sich in keiner Liste.");
    }
    searchForId(list, ref) {
        if (list == null) {
            return [null, false];
        }
        for (let i = 0; i < list.length; i = i + 1) {
            if (list[i].id === ref.ID) {
                return [list[i], true];
            }
        }
        return [null, false];
    }
    assignType(element) {
        switch (true) {
            case element instanceof _StudyObjects_SectionElement__WEBPACK_IMPORTED_MODULE_5__["SectionElement"]: {
                return _Types__WEBPACK_IMPORTED_MODULE_0__["Types"].SECTIONELEMENT;
            }
            case element instanceof _StudyObjects_Questions_AbstractQuestion__WEBPACK_IMPORTED_MODULE_2__["AbstractQuestion"]: {
                return _Types__WEBPACK_IMPORTED_MODULE_0__["Types"].QUESTION;
            }
            case element instanceof _StudyObjects_TextBlock__WEBPACK_IMPORTED_MODULE_4__["TextBlock"]: {
                return _Types__WEBPACK_IMPORTED_MODULE_0__["Types"].TEXT;
            }
            case element instanceof _StudyObjects_Section__WEBPACK_IMPORTED_MODULE_1__["Section"]: {
                return _Types__WEBPACK_IMPORTED_MODULE_0__["Types"].SECTION;
            }
            case element instanceof _StudyObjects_VibrationPattern__WEBPACK_IMPORTED_MODULE_3__["VibrationPattern"]: {
                return _Types__WEBPACK_IMPORTED_MODULE_0__["Types"].VIBRATIONPATTERN;
            }
            default: {
                throw new Error("Kein passender Typ gefunden.");
            }
        }
    }
}


/***/ }),

/***/ "VKVo":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-sidenav-container {\r\n    height: 94vh;\r\n  }\r\n  \r\n  mat-sidenav-content {\r\n    padding: 15px;\r\n  }\r\n  \r\n  mat-sidenav {\r\n    width: 250px;\r\n  }\r\n  \r\n  mat-toolbar {\r\n    height: 6vh;\r\n  }\r\n  \r\n  .bottomrow {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n}\r\n  \r\n  .flexExpand {\r\n  flex: 1 1 auto;\r\n}\r\n  \r\n  .helpButton {\r\n  background-color: #3e753b;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVGO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsV0FBVztBQUNiOztFQUVBO0VBQ0UsY0FBYztBQUNoQjs7RUFFQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDk0dmg7XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1zaWRlbmF2LWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgbWF0LXNpZGVuYXYge1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gIH1cclxuICBcclxuICBtYXQtdG9vbGJhciB7XHJcbiAgICBoZWlnaHQ6IDZ2aDtcclxuICB9XHJcbiAgXHJcbi5ib3R0b21yb3cge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZsZXhFeHBhbmQge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4uaGVscEJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlNzUzYjtcclxufSJdfQ== */");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "X8SS":
/*!***********************************************************************************!*\
  !*** ./src/app/dashboard/participated-studies/participated-studies.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9wYXJ0aWNpcGF0ZWQtc3R1ZGllcy9wYXJ0aWNpcGF0ZWQtc3R1ZGllcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "X8dr":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.routes.ts ***!
  \***********************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _guards_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../guards/auth/auth-guard.service */ "cRx8");
/* harmony import */ var _guards_role_role_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../guards/role/role-guard.service */ "OmuS");
/* harmony import */ var _Model_User_UserPermission__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Model/User/UserPermission */ "rhQZ");
/* harmony import */ var _available_studies_available_studies_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./available-studies/available-studies.component */ "xpyY");
/* harmony import */ var _my_studies_my_studies_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./my-studies/my-studies.component */ "B6Ro");
/* harmony import */ var _participated_studies_participated_studies_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./participated-studies/participated-studies.component */ "GhTv");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "80h2");







const routes = [
    {
        path: "",
        redirectTo: "my-studies",
        pathMatch: "full"
    },
    {
        path: "profile",
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
        canActivate: [_guards_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__["AuthGuardService"]],
    },
    {
        path: "my-studies",
        component: _my_studies_my_studies_component__WEBPACK_IMPORTED_MODULE_4__["MyStudiesComponent"],
        canActivate: [_guards_role_role_guard_service__WEBPACK_IMPORTED_MODULE_1__["RoleGuardService"], _guards_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__["AuthGuardService"]],
        data: {
            expectedRole: _Model_User_UserPermission__WEBPACK_IMPORTED_MODULE_2__["UserPermission"].CREATOR,
        }
    },
    {
        path: "available-studies",
        component: _available_studies_available_studies_component__WEBPACK_IMPORTED_MODULE_3__["AvailableStudiesComponent"],
        canActivate: [_guards_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__["AuthGuardService"]],
    },
    {
        path: "participated-studies",
        component: _participated_studies_participated_studies_component__WEBPACK_IMPORTED_MODULE_5__["ParticipatedStudiesComponent"],
        canActivate: [_guards_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__["AuthGuardService"]],
    }
];


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/app/app-routing.module */ "vY5A");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _src_app_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/app/login/login.component */ "vtpD");
/* harmony import */ var _src_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/material.module */ "wLiR");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _src_app_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @src/app/register/register.component */ "1W4x");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _src_app_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @src/app/dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _src_app_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @src/app/dashboard/dashboard.module */ "TDBs");
/* harmony import */ var _src_app_studycreation_studycreation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @src/app/studycreation/studycreation.component */ "jA02");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _src_app_services_dialogs_confirmDialog_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @src/app/services/dialogs/confirmDialog.service */ "Nj1j");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
            _src_app_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
            _src_app_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
            _src_app_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
            _src_app_studycreation_studycreation_component__WEBPACK_IMPORTED_MODULE_12__["StudyCreationComponent"],
            _src_app_services_dialogs_confirmDialog_service__WEBPACK_IMPORTED_MODULE_14__["DialogTemplate"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _src_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _src_app_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_11__["DashboardModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]],
        entryComponents: [
            _src_app_services_dialogs_confirmDialog_service__WEBPACK_IMPORTED_MODULE_14__["DialogTemplate"]
        ]
    })
], AppModule);



/***/ }),

/***/ "adfr":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/profile/profile.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\r\n    <mat-card-title class=\"header\">\r\n        Accountdaten\r\n    </mat-card-title><br>\r\n    <mat-divider></mat-divider><br><br>\r\n    <mat-card-content>\r\n        <mat-form-field class=\"login-field\">\r\n            <input matInput placeholder=\"Vorname\" name=\"firstName\" [(ngModel)]=\"this.user.firstName\" type=\"text\" />\r\n        </mat-form-field>\r\n        <mat-form-field class=\"login-field\">\r\n            <input matInput placeholder=\"Nachname\" name=\"lastName\" [(ngModel)]=\"this.user.lastName\" type=\"text\" />\r\n        </mat-form-field>\r\n        <mat-form-field class=\"login-field\">\r\n            <input matInput placeholder=\"E-Mail\" name=\"email\" [(ngModel)]=\"this.user.email.email\" type=\"email\" />\r\n        </mat-form-field>\r\n        <mat-form-field class=\"login-field\">\r\n            <input matInput placeholder=\"Vorheriges Passwort\" name=\"oldPassword\" [(ngModel)]=\"this.oldPassword\" type=\"password\" />\r\n        </mat-form-field>\r\n    </mat-card-content>\r\n    <button mat-flat-button class=\"greenButton\" (click)=\"saveUser()\">Speichern</button>\r\n</mat-card>\r\n<br>\r\n<mat-card>\r\n    <mat-card-title class=\"header\">\r\n        Passwort ändern\r\n    </mat-card-title><br>\r\n    <mat-divider></mat-divider><br><br>\r\n    <mat-card-content>\r\n        <mat-form-field class=\"login-field\">\r\n            <input matInput placeholder=\"Vorheriges Passwort\" name=\"oldPassword\" [(ngModel)]=\"this.oldPassword\" type=\"password\" />\r\n        </mat-form-field>\r\n        <mat-form-field class=\"login-field\">\r\n            <input matInput placeholder=\"Neues Passwort\" name=\"newPassword\" [(ngModel)]=\"this.newPassword\" type=\"password\" />\r\n        </mat-form-field>\r\n        <mat-form-field class=\"login-field\">\r\n            <input matInput placeholder=\"Neues Passwort erneut eingeben\" name=\"newPasswordRepeat\" [(ngModel)]=\"this.newPasswordRepeat\" type=\"password\" />\r\n        </mat-form-field>\r\n    </mat-card-content>\r\n    <button mat-flat-button class=\"greenButton\" (click)=\"savePassword()\">Speichern</button>\r\n</mat-card>\r\n<br>\r\n<!--<mat-card>\r\n    <mat-card-title>\r\n        Accountrechte\r\n    </mat-card-title><br>\r\n    <mat-divider></mat-divider><br><br>\r\n    <mat-card-content>\r\n\r\n    </mat-card-content>\r\n</mat-card>\r\n<br>-->\r\n<mat-card>\r\n    <mat-card-title class=\"header\">\r\n        Account löschen\r\n    </mat-card-title><br>\r\n    <mat-divider></mat-divider><br><br>\r\n    <mat-card-content>\r\n        <button mat-flat-button class=\"redButton\" (click)=\"deleteUser()\">Endgültig löschen</button>\r\n    </mat-card-content>\r\n</mat-card>");

/***/ }),

/***/ "av4J":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/participated-studies/participated-studies.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>participated-studies works!</p>\r\n");

/***/ }),

/***/ "cRx8":
/*!***************************************************!*\
  !*** ./src/app/guards/auth/auth-guard.service.ts ***!
  \***************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/app/services/auth/auth.service */ "9ans");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



let AuthGuardService = class AuthGuardService {
    /**
     * Konstruktor des AuthGuardService. Darin werden sämtliche Services initialisert,
     * die für den AuthGuardService gebraucht werden.
     * @param authService AuthService Singleton, ist für die Authentifizierung des Nutzers zuständig
     * @param router Router Singleton, zum Routen des Pfads nach Eintritt eines Ereignisses
     */
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    /**
     * Die vom Interface zu implementierende Methode, welche den Guard aktiviert oder deaktiviert.
     * @param route ActivatedRouteSnapshot ist der aktuellen Zustand der aktivierten Route
     * @param state RouterSnapshot ist der aktuelle Zustand des Routers
     * @returns Promise<boolean>, je nachdem ob der Nutzer authentifizierbar ist oder nicht
     */
    canActivate(route, state) {
        return __awaiter(this, void 0, void 0, function* () {
            let isAuthenticated = false;
            yield this.authService.isAuthenticated().then(result => isAuthenticated = result);
            if (!isAuthenticated) {
                this.router.navigate(["login"], { replaceUrl: true });
                this.authService.clear();
                return isAuthenticated;
            }
            else {
                return isAuthenticated;
            }
        });
    }
};
AuthGuardService.ctorParameters = () => [
    { type: _src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
AuthGuardService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    })
    /**
     * Der AuthGuardService ist ein Guard, also für die Navigation der Route innerhalb der Anwendung zuständig.
     * Dieser Guard ist für die Authentifizierung des Nutzers zuständig.
     * Dazu verwendet es das CanActivate Interface, welches von jedem anderen Guard verwendet wird.
     * Nur wenn alle Guards wahr sind, kann auf die gewünschte Ansicht navigiert werden, sonst nicht.
     */
    ,
    __metadata("design:paramtypes", [_src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], AuthGuardService);



/***/ }),

/***/ "eH3k":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/available-studies/available-studies.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>available-studies works!</p>\r\n");

/***/ }),

/***/ "hRBY":
/*!***********************************************!*\
  !*** ./src/app/Model/Study/StudyPrototype.ts ***!
  \***********************************************/
/*! exports provided: StudyPrototype */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudyPrototype", function() { return StudyPrototype; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Die Klasse public class StudyPrototype ist ein Template für die Instanz einer Studie,
 *  in der gleichzeitig das Ergebnis nach Ausführung der Studie durch einen User gespeichert wird.
 */
class StudyPrototype {
    /**
     * Erzeugt einen neuen StudyPrototype
     *
     * @param metaDataOfDevice;
     * @param sections;
     * @param randomStrategy;
     */
    constructor(keyData) {
        /**
         * Diese Liste repräsentiert die Reihenfolge in der Sections in der Studienausführung drankommen.
         */
        this._refSections = [];
        /**
         * Enthält alle Sections der Studie.
         */
        this._sections = [];
        /**
         * In dieser Liste werden alle Section Elemente einer Studie gespeichert.
         */
        this._sectionElements = [];
        /**
         * In dieser Liste werden bereits erstellte Study Objects einer Studie gepeichert.
         */
        this._studyObjects = [];
        this._answeredQuestion = []; // in der Reihenfolge, in der sie bearbeitet wurden
        this._keyData = keyData;
    }
    get keyData() {
        return this._keyData;
    }
    set keyData(keyData) {
        this._keyData = keyData;
    }
    get metaDataOfDevice() {
        return this._metaDataOfDevice;
    }
    set metaDataOfDevice(metaDataOfDevice) {
        if (!metaDataOfDevice) {
            throw new Error("Parameter darf nicht null sein!");
        }
        this._metaDataOfDevice = metaDataOfDevice;
    }
    get refSections() {
        return this._refSections;
    }
    set refSections(refSections) {
        if (refSections == null) {
            throw new Error("RefSections darf nicht null sein!");
        }
        this._refSections = refSections;
    }
    get sections() {
        return this._sections;
    }
    set sections(sections) {
        if (!sections) {
            throw new Error("Sections darf nicht null sein!");
        }
        this._sections = sections;
    }
    get sectionElements() {
        return this._sectionElements;
    }
    set sectionElements(sectionElements) {
        if (sectionElements == null) {
            throw new Error("SectionElements darf nicht null sein!");
        }
        this._sectionElements = sectionElements;
    }
    get studyObjects() {
        return this._studyObjects;
    }
    set studyObjects(studyObjects) {
        if (studyObjects == null) {
            throw new Error("StudyObjects darf nicht null sein!");
        }
        this._studyObjects = studyObjects;
    }
    get answeredQuestion() {
        return this._answeredQuestion;
    }
    get randomStrategy() {
        return this._randomStrategy;
    }
    set randomStrategy(randomStrategy) {
        this._randomStrategy = randomStrategy;
    }
    /**
     * Erzeugt ein neues Objekt vom Typ StudyPrototype mit den selben Werten wie das aktuelle
     */
    clone() {
        return lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"](this);
    }
    addAnsweredQuestion(answer) {
        this._answeredQuestion.push(answer);
    }
}


/***/ }),

/***/ "hVaG":
/*!*******************************************************!*\
  !*** ./src/app/Model/Study/Result/UserResultTuple.ts ***!
  \*******************************************************/
/*! exports provided: UserResultTuple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserResultTuple", function() { return UserResultTuple; });
/**
 * Die Klasse enthält die Ausführung einer Studie zu einem Nutzer.
 */
class UserResultTuple {
    constructor(user, results, metaData) {
        /**
         * Referenzen auf die Fragen mit der orginalen Id aus der Study
         */
        this.answeredQuestions = [];
        this._user = user;
        this._results = results;
        this._metaData = metaData;
    }
    get user() {
        return this._user;
    }
    set user(user) {
        this._user = user;
    }
    get results() {
        return this._results;
    }
    set results(results) {
        this._results = results;
    }
    get metaData() {
        return this._metaData;
    }
    set metaData(metaData) {
        this._metaData = metaData;
    }
}


/***/ }),

/***/ "in5m":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"full-page\">\r\n  <mat-card class=\"login-card\">\r\n    <mat-card-title style=\"text-align: center;\">\r\n      <img src=\"../../assets/images/Icon.png\" width=\"100\"><br><br>\r\n      VibroStudies Login\r\n    </mat-card-title>\r\n    <mat-card-content>\r\n      <mat-form-field class=\"login-field\">\r\n        <input matInput placeholder=\"E-Mail\" name=\"email\" [(ngModel)]=\"email\" type=\"email\" (keyup.enter)=\"login()\" />\r\n      </mat-form-field>\r\n      <mat-form-field class=\"login-field\">\r\n        <input matInput placeholder=\"Passwort\" name=\"password\" [(ngModel)]=\"password\" type=\"password\"\r\n          (keyup.enter)=\"login()\" />\r\n      </mat-form-field>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n    <div style=\"text-align: center\">\r\n      <button mat-raised-button class=\"greenButton\" (click)=\"login()\" type=\"submit\">\r\n        Login\r\n      </button>\r\n       </div>\r\n    </mat-card-actions>\r\n    <mat-divider></mat-divider><br>\r\n    <div style=\"text-align: center\">\r\n      <h3>Neu hier?</h3>\r\n      <button mat-flat-button class=\"redButton\" (click)=\"toRegister()\">Jetzt Registrieren</button>\r\n    </div>\r\n  </mat-card>\r\n</div>");

/***/ }),

/***/ "iqOD":
/*!********************************************!*\
  !*** ./src/app/Model/Study/StudyStatus.ts ***!
  \********************************************/
/*! exports provided: StudyStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudyStatus", function() { return StudyStatus; });
var StudyStatus;
(function (StudyStatus) {
    /**
     * Die Studie wurde erstellt und ist noch in Bearbeitung also nicht veröffentlicht
     */
    StudyStatus[StudyStatus["CREATED"] = 0] = "CREATED";
    /**
     * Die Studie wurde veröffentlicht und Studienteilnehmer können an der Studie teilnehmen
     */
    StudyStatus[StudyStatus["PUBLISHED"] = 1] = "PUBLISHED";
    /**
     * Es ist nicht mehr möglich an der Studie teilzunehmen.
     * Der Studienleiter kann nun die Ergebnisse auswerten
     */
    StudyStatus[StudyStatus["FINISHED"] = 2] = "FINISHED";
})(StudyStatus || (StudyStatus = {}));


/***/ }),

/***/ "j7zN":
/*!**********************************************************!*\
  !*** ./src/app/Model/Study/StudyObjects/PauseElement.ts ***!
  \**********************************************************/
/*! exports provided: PauseElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PauseElement", function() { return PauseElement; });
/* harmony import */ var _AbstractVibrationPatternElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractVibrationPatternElement */ "jdIE");

class PauseElement extends _AbstractVibrationPatternElement__WEBPACK_IMPORTED_MODULE_0__["AbstractVibrationPatternElement"] {
    constructor(duration) {
        super(duration);
    }
}


/***/ }),

/***/ "jA02":
/*!**********************************************************!*\
  !*** ./src/app/studycreation/studycreation.component.ts ***!
  \**********************************************************/
/*! exports provided: StudyCreationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudyCreationComponent", function() { return StudyCreationComponent; });
/* harmony import */ var _raw_loader_studycreation_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./studycreation.component.html */ "rUpu");
/* harmony import */ var _studycreation_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./studycreation.component.css */ "JSb+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _Model_Study_StudyPrototypeDAO_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Model/Study/StudyPrototypeDAO.service */ "osms");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth/auth.service */ "9ans");
/* harmony import */ var _services_study_wrapper_study_wrapper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/study-wrapper/study-wrapper.service */ "pzGZ");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







let StudyCreationComponent = class StudyCreationComponent {
    constructor(router, studywrapper, studyService, authService) {
        this.router = router;
        this.studywrapper = studywrapper;
        this.studyService = studyService;
        this.authService = authService;
        this.saving = false;
    }
    ngOnDestroy() {
    }
    ngOnInit() {
        if (!this.studywrapper.study) {
            this.router.navigate(["dashboard"]);
        }
        else {
            console.log(JSON.stringify({ study: this.studywrapper.study, token: this.authService.getAuthToken() }));
        }
    }
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.saving) {
                this.saving = true;
                yield this.studyService.save(this.studywrapper.study).then(result => {
                    if (result) {
                        setTimeout(() => {
                            this.saving = false;
                        }, 1000);
                    }
                });
            }
        });
    }
};
StudyCreationComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_study_wrapper_study_wrapper_service__WEBPACK_IMPORTED_MODULE_6__["StudyWrapperService"] },
    { type: _Model_Study_StudyPrototypeDAO_service__WEBPACK_IMPORTED_MODULE_4__["StudyPrototypeDAO"] },
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
StudyCreationComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-studycreation',
        template: _raw_loader_studycreation_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_studycreation_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_study_wrapper_study_wrapper_service__WEBPACK_IMPORTED_MODULE_6__["StudyWrapperService"],
        _Model_Study_StudyPrototypeDAO_service__WEBPACK_IMPORTED_MODULE_4__["StudyPrototypeDAO"],
        _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
], StudyCreationComponent);



/***/ }),

/***/ "jdIE":
/*!*****************************************************************************!*\
  !*** ./src/app/Model/Study/StudyObjects/AbstractVibrationPatternElement.ts ***!
  \*****************************************************************************/
/*! exports provided: AbstractVibrationPatternElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractVibrationPatternElement", function() { return AbstractVibrationPatternElement; });
/**
 * Ein AbstractVibrationPatternElement ist ein abstraktes Element, aus dem Vibrationen
 * erstellt werden können. Die Klasse spezialisiert sich in Pause und VibrationElemente.
 */
class AbstractVibrationPatternElement {
    /**
     * Dieser Konstruktor prüft, bevor es ein AbstractVibrationPatternElement erstellt, den Paramter duration, da
     * dieser nur Werte zwischen 0 und 2^(64) - 1 annehmen darf.
     * @param duration beschreibt die Dauer in ms
     */
    constructor(duration) {
        this.duration = duration;
    }
    get duration() {
        return this._duration;
    }
    // 2^64 weil long. Long weil es gecastet werden muss
    set duration(duration) {
        this.ensure64BitNumber(duration);
        this._duration = duration;
    }
    ensure64BitNumber(duration) {
        if (duration == null) {
            throw new Error("Duration darf nicht null sein.");
        }
        if (!(duration >= 0 && duration < Math.pow(2, 64))) {
            throw new Error("Es sind nur positive long Werte, also Werte zwischen 0 und 2^(64) - 1, akzeptiert.");
        }
    }
}


/***/ }),

/***/ "kyzu":
/*!*************************************************!*\
  !*** ./src/app/services/alert/alert.service.ts ***!
  \*************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


let AlertService = class AlertService {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    alert(message) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = false;
            yield this.snackBar.open(message, "Ok", { panelClass: "snackbar-style" }).afterDismissed().toPromise().then(response => {
                if (response.dismissedByAction) {
                    result = true;
                }
            });
            return result;
        });
    }
};
AlertService.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] }
];
AlertService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
], AlertService);



/***/ }),

/***/ "lGoz":
/*!********************************************************************!*\
  !*** ./src/app/Model/Study/StudyObjects/Questions/DateQuestion.ts ***!
  \********************************************************************/
/*! exports provided: DateQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateQuestion", function() { return DateQuestion; });
/* harmony import */ var _AbstractQuestion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractQuestion */ "zfOo");

/**
 * Ein DateQuestion stellt ein Fragenobjekt dar, bei dem man nur ein Kalenderdatum vom Typ
 * Date als Antwort angeben kann.
 */
class DateQuestion extends _AbstractQuestion__WEBPACK_IMPORTED_MODULE_0__["AbstractQuestion"] {
    /**
     * Ein Attribut, was nicht als Parameter übergeben wird, ist answer. Dieses bezeichnet die Antwort,
     * die auf die Frage gegeben wird. Die Antwort stellt ein Datum vom Typ Date dar.
     *
     * @param questionText ist die Frage, die gestellt werden soll
     * @param id ist die eindeutige Identifikationsnummer des DateQuestions
     * @param fixed entscheidet, ob DateQuestion innerhalb eines Section-Elements eine feste Position hat oder die
     * Position von Studieninstanz zu Studieninstanz mit Hilfe von Randomisierung variiert
     */
    constructor(id, name, questionText, displayName, start, end) {
        super(id, name, questionText, displayName);
        this.objectType = "DateQuestion";
        this.start = start;
        this.end = end;
        super.answer = "";
    }
    get start() {
        return this._start;
    }
    set start(start) {
        this._start = start;
    }
    get end() {
        return this._end;
    }
    set end(end) {
        this._end = end;
    }
}


/***/ }),

/***/ "n7sk":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".full-page {\r\n    height: 100%;\r\n    display: flex;\r\n    background-color: #303030;\r\n}\r\n\r\n.login-card {\r\n    margin: auto;\r\n    width: 350px;\r\n}\r\n\r\n.login-field {\r\n    width: 100%;\r\n}\r\n\r\nmat-card {\r\n    padding: 50px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXBhZ2Uge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XHJcbn1cclxuXHJcbi5sb2dpbi1jYXJkIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiAzNTBweDtcclxufVxyXG5cclxuLmxvZ2luLWZpZWxkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgICBwYWRkaW5nOiA1MHB4O1xyXG59Il19 */");

/***/ }),

/***/ "osms":
/*!**********************************************************!*\
  !*** ./src/app/Model/Study/StudyPrototypeDAO.service.ts ***!
  \**********************************************************/
/*! exports provided: StudyPrototypeDAO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudyPrototypeDAO", function() { return StudyPrototypeDAO; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _User_EMail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../User/EMail */ "BfXG");
/* harmony import */ var _User_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../User/User */ "rPx+");
/* harmony import */ var _KeyData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./KeyData */ "r/57");
/* harmony import */ var _ReferenceTuple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ReferenceTuple */ "HfNz");
/* harmony import */ var _StudyObjects_SectionElement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./StudyObjects/SectionElement */ "HEL/");
/* harmony import */ var _StudyObjects_Section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./StudyObjects/Section */ "/3i5");
/* harmony import */ var _ShortDescription__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ShortDescription */ "FerX");
/* harmony import */ var _StudyObjects_PauseElement__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./StudyObjects/PauseElement */ "j7zN");
/* harmony import */ var _StudyObjects_Questions_DateQuestion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./StudyObjects/Questions/DateQuestion */ "lGoz");
/* harmony import */ var _StudyObjects_Questions_LinearScaleQuestion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./StudyObjects/Questions/LinearScaleQuestion */ "Tcgm");
/* harmony import */ var _StudyObjects_Questions_MultipleChoiceQuestion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./StudyObjects/Questions/MultipleChoiceQuestion */ "MsGT");
/* harmony import */ var _StudyObjects_Questions_TextQuestion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./StudyObjects/Questions/TextQuestion */ "r8Zv");
/* harmony import */ var _StudyObjects_TextBlock__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./StudyObjects/TextBlock */ "0HUV");
/* harmony import */ var _StudyObjects_VibrationElement__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./StudyObjects/VibrationElement */ "1N3c");
/* harmony import */ var _StudyObjects_VibrationPattern__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./StudyObjects/VibrationPattern */ "tJs4");
/* harmony import */ var _StudyPrototype__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./StudyPrototype */ "hRBY");
/* harmony import */ var _src_app_app_settings__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @src/app/app-settings */ "24n0");
/* harmony import */ var _src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @src/app/services/auth/auth.service */ "9ans");
/* harmony import */ var _StudyObjects_Questions_QualificationQuestion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./StudyObjects/Questions/QualificationQuestion */ "qPq2");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





















let StudyPrototypeDAO = class StudyPrototypeDAO {
    constructor(authService, http) {
        this.authService = authService;
        this.http = http;
        this.studyURL = _src_app_app_settings__WEBPACK_IMPORTED_MODULE_18__["AppSettings"].baseURL + "Study/";
        this.qualiQuestionURL = _src_app_app_settings__WEBPACK_IMPORTED_MODULE_18__["AppSettings"].baseURL + "QualificationQuestion/";
        this.userURL = _src_app_app_settings__WEBPACK_IMPORTED_MODULE_18__["AppSettings"].baseURL + "User/";
    }
    /**
     * Die Methode gibt asynchron ein StudyPrototype Objekt zurück, welches eindeutig durch die id identifiziert wird.
     * @param id number ist die ID der StudyPrototype, die aus der Datenbank geholt werden soll
     */
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let study;
            yield this.http.post(_src_app_app_settings__WEBPACK_IMPORTED_MODULE_18__["AppSettings"].baseURL + "StudyNew/" + id + "/", { token: this.authService.getAuthToken() }).toPromise().then(studyResult => {
                let keyData = new _KeyData__WEBPACK_IMPORTED_MODULE_4__["KeyData"](studyResult.keyData.id, new _User_User__WEBPACK_IMPORTED_MODULE_3__["User"](studyResult.keyData.author.id, studyResult.keyData.author.firstName, studyResult.keyData.author.lastName, studyResult.keyData.author.permission, new _User_EMail__WEBPACK_IMPORTED_MODULE_2__["EMail"](studyResult.keyData.author.email)), studyResult.keyData.studyStatus, new _ShortDescription__WEBPACK_IMPORTED_MODULE_8__["ShortDescription"](studyResult.keyData.shortDescription), studyResult.keyData.fullDescription, studyResult.keyData.amplitudeNecessary, studyResult.keyData.name);
                for (let qualiQuestion of studyResult.keyData.qualiQuestions) {
                    let toInsert = new _StudyObjects_Questions_QualificationQuestion__WEBPACK_IMPORTED_MODULE_20__["QualificationQuestion"](qualiQuestion.id, qualiQuestion.name, qualiQuestion.questionText, qualiQuestion.displayName, qualiQuestion.requiredAnswer);
                    keyData.qualiQuestions.push(toInsert);
                }
                study = new _StudyPrototype__WEBPACK_IMPORTED_MODULE_17__["StudyPrototype"](keyData);
                study.randomStrategy = studyResult.randomStrategy;
                let sectionRef = [];
                for (let ref of studyResult.refSections) {
                    sectionRef.push(new _ReferenceTuple__WEBPACK_IMPORTED_MODULE_5__["ReferenceTuple"](ref.ID, ref.isFixed));
                }
                study.refSections = sectionRef;
                let sections = [];
                for (let section of studyResult.sections) {
                    let refArray = [];
                    for (let ref of section.sectionElements) {
                        refArray.push(new _ReferenceTuple__WEBPACK_IMPORTED_MODULE_5__["ReferenceTuple"](ref.ID, ref.isFixed));
                    }
                    let toInsert = new _StudyObjects_Section__WEBPACK_IMPORTED_MODULE_7__["Section"](section.id, section.name, section.displayName, section.skippable, section.resultRelevant, section.randomStrategy);
                    toInsert.sectionElements = refArray;
                    sections.push(toInsert);
                }
                study.sections = sections;
                let sectionElements = [];
                for (let sectionElement of studyResult.sectionElements) {
                    let refArray = [];
                    for (let ref of sectionElement.studyObjects) {
                        refArray.push(new _ReferenceTuple__WEBPACK_IMPORTED_MODULE_5__["ReferenceTuple"](ref.ID, ref.isFixed));
                    }
                    sectionElements.push(new _StudyObjects_SectionElement__WEBPACK_IMPORTED_MODULE_6__["SectionElement"](sectionElement.id, sectionElement.name, sectionElement.displayName, sectionElement.randomStrategy, refArray));
                }
                study.sectionElements = sectionElements;
                let studyObjects = [];
                for (let studyObject of studyResult.studyObjects) {
                    switch (studyObject.studyObjectTypes) {
                        case 3: // TEXTBLOCK
                            studyObjects.push(new _StudyObjects_TextBlock__WEBPACK_IMPORTED_MODULE_14__["TextBlock"](studyObject.id, studyObject.name, studyObject.displayName, studyObject.text));
                            break;
                        case 4: // QUESTION
                            switch (studyObject.questionType) {
                                case 0: // DATE
                                    studyObjects.push(new _StudyObjects_Questions_DateQuestion__WEBPACK_IMPORTED_MODULE_10__["DateQuestion"](studyObject.id, studyObject.name, studyObject.questionText, studyObject.displayName));
                                    break;
                                case 1: // LINEAR SCALE
                                    studyObjects.push(new _StudyObjects_Questions_LinearScaleQuestion__WEBPACK_IMPORTED_MODULE_11__["LinearScaleQuestion"](studyObject.id, studyObject.name, studyObject.questionText, studyObject.displayName, studyObject.numberOfChoices, studyObject.leftLabel, studyObject.rightLabel));
                                    break;
                                case 2: // MULTIPLE
                                    studyObjects.push(new _StudyObjects_Questions_MultipleChoiceQuestion__WEBPACK_IMPORTED_MODULE_12__["MultipleChoiceQuestion"](studyObject.id, studyObject.name, studyObject.questionText, studyObject.displayName, studyObject.answerOptions, studyObject.maxChoices));
                                    break;
                                case 3: // TEXT
                                    studyObjects.push(new _StudyObjects_Questions_TextQuestion__WEBPACK_IMPORTED_MODULE_13__["TextQuestion"](studyObject.id, studyObject.name, studyObject.questionText, studyObject.displayName));
                                    break;
                            }
                            break;
                        case 5: // VIBRATIONPATTERN
                            let vibrationElements = [];
                            for (let vibElement of studyObject.vibrationPatternElements) {
                                if (vibElement.amplitude == 0) {
                                    vibrationElements.push(new _StudyObjects_PauseElement__WEBPACK_IMPORTED_MODULE_9__["PauseElement"](vibElement.duration));
                                }
                                else {
                                    vibrationElements.push(new _StudyObjects_VibrationElement__WEBPACK_IMPORTED_MODULE_15__["VibrationElement"](vibElement.duration, vibElement.amplitude));
                                }
                            }
                            let vibElement = new _StudyObjects_VibrationPattern__WEBPACK_IMPORTED_MODULE_16__["VibrationPattern"](studyObject.id, studyObject.name, studyObject.displayName);
                            vibElement.vibrationPatternElements = vibrationElements;
                            studyObjects.push(vibElement);
                            break;
                    }
                }
                study.studyObjects = studyObjects;
            });
            return study;
        });
    }
    /**
     * Die Methode speichert asynchron object in einer Datenbank, welches nachdem es gespeichert wurde wieder mit get aufgerufen werden kann.
     * @param study StudyPrototype ist die Studie, die gespeichert werden soll
     */
    save(study) {
        return __awaiter(this, void 0, void 0, function* () {
            let id = -1;
            yield this.http.post(_src_app_app_settings__WEBPACK_IMPORTED_MODULE_18__["AppSettings"].baseURL + "SaveStudy/", { study: study, token: this.authService.getAuthToken() }).toPromise().then(result => {
                if (result != -1) {
                    id = result;
                }
            });
            return id;
        });
    }
    /**
     * Die Methode aktualisiert object mit der Datenbank asynchron anhand seiner id.
     * @param object StudyPrototype ist die Studie, die aktualisiert werden soll
     */
    update(object) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.save(object);
            return true;
        });
    }
};
StudyPrototypeDAO.ctorParameters = () => [
    { type: _src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_19__["AuthService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
];
StudyPrototypeDAO = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
    /**
     * Das StudyPrototypeDAO ist für den Zugriff auf die StudyPrototype Objekte in der Datenbank verantwortlich.
     */
    ,
    __metadata("design:paramtypes", [_src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_19__["AuthService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
], StudyPrototypeDAO);



/***/ }),

/***/ "ozSw":
/*!**************************************!*\
  !*** ./src/app/Model/Study/Types.ts ***!
  \**************************************/
/*! exports provided: Types */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Types", function() { return Types; });
var Types;
(function (Types) {
    /**
     * Ein SectionElement welches ein Container Objekt für die meisten StudyObjects ist und welches dem Container Section zugeordnet wird
     */
    Types[Types["SECTIONELEMENT"] = 0] = "SECTIONELEMENT";
    /**
     * Dieser Typ bezieht sich auf die Klasse VibrationPattern, aus der direkt eine Vibration generiert wird.
     */
    Types[Types["VIBRATIONPATTERN"] = 1] = "VIBRATIONPATTERN";
    /**
     * Allgemeiner Typ für alle Arten von Fragen
     */
    Types[Types["QUESTION"] = 2] = "QUESTION";
    /**
     * Eine Section ist ein Container Objekt für SectionElements
     */
    Types[Types["SECTION"] = 3] = "SECTION";
    /**
     * Texte beziehen sich auf die Klasse TextBlock, in welchen nur Texte gespeichert werden
     */
    Types[Types["TEXT"] = 4] = "TEXT";
})(Types || (Types = {}));


/***/ }),

/***/ "pzGZ":
/*!*****************************************************************!*\
  !*** ./src/app/services/study-wrapper/study-wrapper.service.ts ***!
  \*****************************************************************/
/*! exports provided: StudyWrapperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudyWrapperService", function() { return StudyWrapperService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _src_app_Model_Study_ReferenceTupleMembershipVerifier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/app/Model/Study/ReferenceTupleMembershipVerifier */ "USEZ");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let StudyWrapperService = class StudyWrapperService {
    /**
     * Setzt für den StudyWrapperService den ReferenceTupleMembershipVerifier. Dieser war dann undefiniert.
     */
    constructor() {
        this.isDemo = false;
        this.referenceTupleMembershipVerifier = new _src_app_Model_Study_ReferenceTupleMembershipVerifier__WEBPACK_IMPORTED_MODULE_1__["ReferenceTupleMembershipVerifier"](undefined);
    }
    get study() {
        return this._study;
    }
    set study(study) {
        this._study = study;
        this.referenceTupleMembershipVerifier.studyPrototype = this._study;
        this.lastID = this.getLastID();
    }
    set lastID(lastID) {
        if (lastID == null) {
            throw new Error("Setting the last ID to null or undefined is not allowed.");
        }
        this._lastID = lastID;
    }
    /**
     * Auf jeden get()-Aufruf wird die aktuelle lastID inkrementiert zurückgegeben.
     */
    get lastID() {
        this._lastID += 1;
        return this._lastID;
    }
    /**
     * Gibt die höchste bzw. letzte ID innerhalb der Menge von Sections, SectionElements, StudyObjects
     * und QualificationQuestions zurück.
     */
    getLastID() {
        let lastID = 0;
        if (this._study) {
            for (let section of this._study.sections) {
                if (section.id > lastID) {
                    lastID = section.id;
                }
            }
            for (let sectionelement of this._study.sectionElements) {
                if (sectionelement.id > lastID) {
                    lastID = sectionelement.id;
                }
            }
            for (let studyobject of this._study.studyObjects) {
                if (studyobject.id > lastID) {
                    lastID = studyobject.id;
                }
            }
            for (let qualiquestion of this._study.keyData.qualiQuestions) {
                if (qualiquestion.id > lastID) {
                    lastID = qualiquestion.id;
                }
            }
        }
        return lastID;
    }
    /**
     * Holt sich zu einer bestimmten number den Zufallstypen ab.
     * @param value number für den Zufallstypen der zurückgegeben wird
     */
    getRandomizerName(value) {
        switch (value) {
            case 0:
                return "Keine";
            case 1:
                return "Einfacher Zufall";
        }
    }
};
StudyWrapperService.ctorParameters = () => [];
StudyWrapperService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    })
    /**
     * Der StudyWrapperService setzt eine beliebige Studie als Property des Services, sodass man mit dieser
     * in der Studienteilnahme, sowie Studienerstellung umgehen kann.
     */
    ,
    __metadata("design:paramtypes", [])
], StudyWrapperService);



/***/ }),

/***/ "qPq2":
/*!*****************************************************************************!*\
  !*** ./src/app/Model/Study/StudyObjects/Questions/QualificationQuestion.ts ***!
  \*****************************************************************************/
/*! exports provided: QualificationQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QualificationQuestion", function() { return QualificationQuestion; });
/* harmony import */ var _AbstractQuestion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractQuestion */ "zfOo");

/**
 * Ein QualificationQuestion ist ein Fragenobjekt, das eine Ausschlussfrage modellieren soll
 * (als Teilnahmevoraussetzung zu einer Studie). Man kann nur zwei, selbst definierbare,
 * Antwortoptionen zur Verfügung stellen. Damit soll eine Ja-Nein-Ausschlussfrage realisiert werden.
 * Man kann dann auch nur eine Antwortoption auswählen.
 */
class QualificationQuestion extends _AbstractQuestion__WEBPACK_IMPORTED_MODULE_0__["AbstractQuestion"] {
    /**
     * Ein Attribut, was nicht als Parameter übergeben wird, ist answerOptions. Dieses ist eine
     * String-Liste, dass vorkonfigurierte Antworten enthält
     *
     * Ein weiteres Attribut, was nicht als Parameter übergeben wird, ist answer. Dieses ist ein String, das
     * die ausgewählte Antwortoption als Antwort auf die Frage darstellt.
     *
     * maxChoices ist 1, weil............
     *
     * @param questionText ist die Frage, die gestellt werden soll
     * @param id ist die eindeutige Identifikationsnummer des QualificationQuestions
     * @param fixed entscheidet, ob QualificationQuestion innerhalb eines Section-Elements eine feste Position hat oder die
     * Position von Studieninstanz zu Studieninstanz mit Hilfe von Randomisierung variiert
     */
    constructor(id, name, questionText, displayName, requiredAnswer) {
        super(id, name, questionText, displayName);
        this.requiredAnswer = requiredAnswer;
    }
    get requiredAnswer() {
        return this._requiredAnswer;
    }
    set requiredAnswer(requiredAnswer) {
        if (requiredAnswer == null) {
            throw new Error("RequiredAnswer darf nicht null sein.");
        }
        this._requiredAnswer = requiredAnswer;
    }
}


/***/ }),

/***/ "r/57":
/*!****************************************!*\
  !*** ./src/app/Model/Study/KeyData.ts ***!
  \****************************************/
/*! exports provided: KeyData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyData", function() { return KeyData; });
/**
 * Die Klasse public class KeyData enthählt alle wichtigen Schlüsselinformationen die für eine Studie benötigt werden.
 */
class KeyData {
    constructor(id, author, studyStatus, shortdescription, fulldescription, amplitudeNecessary, name) {
        /**
         * Die Liste enthält Ja Nein Fragen die alle korrekt beantwortet werden müssen, bevor ein Nutzer an einer Studie teilnehmen darf.
         */
        this._qualiQuestions = [];
        this._amplitudeNecessary = amplitudeNecessary;
        this._studyStatus = studyStatus;
        this._id = id;
        this._author = author;
        this._shortDescription = shortdescription;
        this._fullDescription = fulldescription;
        this._name = name;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get author() {
        return this._author;
    }
    set author(user) {
        this._author = user;
    }
    get amplitudeNecessary() {
        return this._amplitudeNecessary;
    }
    set amplitudeNecessary(amplitudeNecessary) {
        if (amplitudeNecessary == null) {
            throw new Error("Parameter darf nicht null sein!");
        }
        this._amplitudeNecessary = amplitudeNecessary;
    }
    get studyStatus() {
        return this._studyStatus;
    }
    set studyStatus(studyStatus) {
        if (studyStatus == null) {
            throw new Error("Parameter darf nicht null sein!");
        }
        this._studyStatus = studyStatus;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        if (!name) {
            throw new Error("Parameter darf nicht null sein!");
        }
        this._name = name;
    }
    get shortDescription() {
        return this._shortDescription;
    }
    set shortDescription(shortDescription) {
        this._shortDescription = shortDescription;
    }
    get fullDescription() {
        return this._fullDescription;
    }
    set fullDescription(fullDescription) {
        this._fullDescription = fullDescription;
    }
    get qualiQuestions() {
        return this._qualiQuestions;
    }
    set qualiQuestions(qualiQuestions) {
        this._qualiQuestions = qualiQuestions;
    }
}


/***/ }),

/***/ "r8Zv":
/*!********************************************************************!*\
  !*** ./src/app/Model/Study/StudyObjects/Questions/TextQuestion.ts ***!
  \********************************************************************/
/*! exports provided: TextQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextQuestion", function() { return TextQuestion; });
/* harmony import */ var _AbstractQuestion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractQuestion */ "zfOo");

/**
 * Ein TextQuestion ist ein Fragenobjekt, bei dem man als Antwort
 * nur einen Text schreiben kann.
 */
class TextQuestion extends _AbstractQuestion__WEBPACK_IMPORTED_MODULE_0__["AbstractQuestion"] {
    /**
     * Ein Attribut, was nicht als Parameter übergeben wird, ist answer. Dieses bezeichnet die Antwort,
     * die auf die Frage gegeben wird. Die Antwort stellt einen Text vom Typ string dar.
     *
     * @param questionText ist die Frage, die gestellt werden soll
     * @param id ist die eindeutige Identifikationsnummer des TextQuestions
     * @param fixed entscheidet, ob TextQuestion innerhalb eines Section-Elements eine feste Position hat oder die
     * Position von Studieninstanz zu Studieninstanz mit Hilfe von Randomisierung variiert
     */
    constructor(id, name, questionText, displayName, length) {
        super(id, name, questionText, displayName);
        this.objectType = "TextQuestion";
        this.length = length;
        super.answer = "";
    }
    get length() {
        return this._length;
    }
    set length(length) {
        this._length = length;
    }
}


/***/ }),

/***/ "rPx+":
/*!************************************!*\
  !*** ./src/app/Model/User/User.ts ***!
  \************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/**
 * Die Klasse User stellt einen Benutzer da.
 */
class User {
    /**
     * Ein neuer Benutzer wird erstellt und dabei wird sichergestellt, dass die Parameter gültig sind.
     * @param id
     * @param firstName
     * @param lastName
     * @param permission sagt aus, welche Aktionen ein Benuter durchführen kann
     * @param password
     * @param email
     */
    constructor(id, firstName, lastName, permission, email) {
        this.id = id;
        if (this.ensureNameValidation(firstName)) {
            this.firstName = firstName;
        }
        if (this.ensureNameValidation(lastName)) {
            this.lastName = lastName;
        }
        if (this.ensurePermissionValidation(permission)) {
            this.permission = permission;
        }
        this.email = email;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(firstName) {
        if (this.ensureNameValidation(firstName)) {
            this._firstName = firstName;
        }
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(lastName) {
        if (this.ensureNameValidation(lastName)) {
            this._lastName = lastName;
        }
    }
    get permission() {
        return this._permission;
    }
    set permission(permission) {
        if (this.ensurePermissionValidation(permission)) {
            this._permission = permission;
        }
    }
    get email() {
        return this._email;
    }
    set email(email) {
        this._email = email;
    }
    ensureNameValidation(toValidate) {
        if (!toValidate) {
            throw new Error("Name kann nicht null oder leer sein.");
        }
        return true;
    }
    ensurePermissionValidation(permission) {
        if (permission == undefined) {
            throw new Error("Userpermission kann nicht null oder leer sein.");
        }
        return true;
    }
    /**
     * Überprüft, ob der angegebene User toCompare mit dem aktuellen User übereinstimmt.
     * @param toCompare
     */
    equals(toCompare) {
        if (this.firstName == toCompare.firstName && this.id == toCompare.id &&
            this.lastName == toCompare.lastName && this.permission == toCompare.permission) {
            return true;
        }
        return false;
    }
}


/***/ }),

/***/ "rUpu":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/studycreation/studycreation.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar>\r\n    <img src=\"assets/images/Icon.png\" style=\"height: 4vh;\" />\r\n    <span>&nbsp;&nbsp;Neue Studie erstellen</span>\r\n    <span class=\"flexExpand\"></span>\r\n    <a class=\"helpButton\" mat-flat-button href=\"https://www.youtube.com/watch?v=RfdquOH7AxI\" target=\"_blank\">\r\n        <mat-icon>help</mat-icon>&nbsp;Hilfe\r\n    </a>\r\n</mat-toolbar>\r\n<mat-sidenav-container>\r\n    <mat-sidenav opened mode=\"side\">\r\n        <mat-nav-list>\r\n            <a mat-list-item [routerLink]=\"['general-editing']\">\r\n                <mat-icon>settings_applications</mat-icon>&nbsp;Allgemein\r\n            </a>\r\n            <mat-divider></mat-divider>\r\n            <a mat-list-item [routerLink]=\"['question-editing']\">\r\n                <mat-icon>speaker_notes</mat-icon>&nbsp;Fragen\r\n            </a>\r\n            <a mat-list-item [routerLink]=\"['textblock-editing']\">\r\n                <mat-icon>article</mat-icon>&nbsp;Texte\r\n            </a>\r\n            <a mat-list-item [routerLink]=\"['vibrationpattern-editing']\">\r\n                <mat-icon>vibration</mat-icon>&nbsp;Vibrationsmuster\r\n            </a>\r\n            <mat-divider></mat-divider>\r\n            <a mat-list-item [routerLink]=\"['sectionelement-editing']\">\r\n                <mat-icon>view_carousel</mat-icon>&nbsp;Studienseiten\r\n            </a>\r\n            <mat-divider></mat-divider>\r\n            <a mat-list-item [routerLink]=\"['section-editing']\">\r\n                <mat-icon>receipt</mat-icon>&nbsp;Abschnitte\r\n            </a>\r\n            <mat-divider></mat-divider>\r\n            <a mat-list-item [routerLink]=\"['sequence-editing']\">\r\n                <mat-icon>reorder</mat-icon>&nbsp;Studienablauf\r\n            </a>\r\n            <mat-divider></mat-divider>\r\n\r\n            <div class=\"bottomrow\">\r\n                <mat-divider></mat-divider>\r\n                <a mat-list-item (click)=\"save()\">\r\n\r\n                    <mat-icon>save</mat-icon>&nbsp;Speichern&nbsp;<mat-spinner *ngIf=\"this.saving\" color=\"accent\"\r\n                        diameter=\"25\"></mat-spinner>\r\n                </a>\r\n                <mat-divider></mat-divider>\r\n                <a mat-list-item [routerLink]=\"['../dashboard/my-studies']\">\r\n                    <mat-icon>keyboard_backspace</mat-icon>&nbsp;Zurück\r\n                </a>\r\n            </div>\r\n        </mat-nav-list>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content>\r\n        <router-outlet></router-outlet>\r\n        <br><br>\r\n    </mat-sidenav-content>\r\n</mat-sidenav-container>");

/***/ }),

/***/ "rhQZ":
/*!**********************************************!*\
  !*** ./src/app/Model/User/UserPermission.ts ***!
  \**********************************************/
/*! exports provided: UserPermission */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPermission", function() { return UserPermission; });
/**
 * Das public enum UserPermission definiert, welche Aktionen ein Benutzer ausführen darf.
 */
var UserPermission;
(function (UserPermission) {
    /**
     * Ein PARTICIPANT kann an einer Studie teilnehmen.
     */
    UserPermission[UserPermission["PARTICIPANT"] = 0] = "PARTICIPANT";
    /**
     * Ein CREATOR kann an einer Studie teilnehmen, die nicht von ihm erstellt wurde und eigene Studien erstellen.
     */
    UserPermission[UserPermission["CREATOR"] = 1] = "CREATOR";
    /**
     * Ein ADMINISTRATOR kann die Stufe eines Benutzers verändern. Außerdem kann er Studien erstellen und an ihnen teilnehmen.
     */
    UserPermission[UserPermission["ADMINISTRATOR"] = 2] = "ADMINISTRATOR";
})(UserPermission || (UserPermission = {}));


/***/ }),

/***/ "tJs4":
/*!**************************************************************!*\
  !*** ./src/app/Model/Study/StudyObjects/VibrationPattern.ts ***!
  \**************************************************************/
/*! exports provided: VibrationPattern */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VibrationPattern", function() { return VibrationPattern; });
/* harmony import */ var _AbstractStudyObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractStudyObject */ "Q9Pm");

/**
 * Ein VibrationPattern stellt ein Studienobjekt dar, mit dem benutzerdefinierte
 * Vibrationsmuster, bestehend aus einstellbaren Pause- und Vibrieren-Elementen, erstellt werden können.
 */
class VibrationPattern extends _AbstractStudyObject__WEBPACK_IMPORTED_MODULE_0__["AbstractStudyObject"] {
    /**
     * Ein Attribut, was nicht als Parameter übergeben wird, ist timings. Dieses ist eine Number-Liste, mit dem ein Vibrationsmuster
     * kodiert wird. Werte in dieser Liste stellen eine Zeitdauer in ms dar. Alle geraden Indizes in der Liste entsprechen
     * einem Pause-Element, wohingegen alle ungeraden Indizes in der Liste einem Vibrieren-Element entsprechen.
     *
     * Ein weiteres Attribut, was nicht als Parameter übergeben wird, ist amplitudes. Dieses bezeichnet eine Number-Liste,
     * das die Amplituden-Werte für die Pause- und Vibrieren-Elemente enthält. Hierbei entspricht der i-te Wert der pattern-Liste
     * dem i-ten Wert der amplitudes-Liste. In diesem Liste können Werte zwischen 0 und 255 vorkommen.
     *
     * @param id ist die eindeutige Identifikationsnummer des VibrationPatterns
     * @param fixed entscheidet, ob das VibrationPattern innerhalb eines Section-Elements eine feste Position hat oder die
     * Position von Studieninstanz zu Studieninstanz mit Hilfe von Randomisierung variiert
     */
    constructor(id, name, displayName) {
        super(id, name, displayName);
        this.objectType = "VibrationPattern";
        this.vibrationPatternElements = [];
    }
    get vibrationPatternElements() {
        return this._vibrationPatternElements;
    }
    set vibrationPatternElements(vibrationPatternElements) {
        if (vibrationPatternElements == null) {
            throw new Error("Die Liste vibrationPatternElements konnte nicht gesetzt werden, da sie undefiniert ist.");
        }
        this._vibrationPatternElements = vibrationPatternElements;
    }
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _src_app_app_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/app/app.routes */ "RUEf");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(_src_app_app_routes__WEBPACK_IMPORTED_MODULE_2__["routes"])],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./login.component.html */ "in5m");
/* harmony import */ var _login_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.css */ "n7sk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/alert/alert.service */ "kyzu");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth/auth.service */ "9ans");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






let LoginComponent = class LoginComponent {
    /**
     * Konstruktor der LoginComponent. Darin werden sämtliche Services initialisert,
     * die für das Anmelden gebraucht werden.
     * @param router Router Singleton, zum Routen des Pfads nach Eintritt eines Ereignisses
     * @param authService AuthService Singleton, ist für die Authentifizierung des Nutzers zuständig
     */
    constructor(router, authService, alertService) {
        this.router = router;
        this.authService = authService;
        this.alertService = alertService;
        /**
         * Das Attribut enthält die E-Mail Adresse des Users der sich einloggen will.
         */
        this.email = "";
        /**
         * Das Attribut enthält das Passwort zur zugehörigen E-Mail Adresse.
         */
        this.password = "";
    }
    /**
     * Navigiert zum Dashboard wenn ein User authentifiziert wurde.
     */
    ngOnInit() {
        if (this.authService.isAuthenticated()) {
            this.toDashboard();
        }
        this.email = "";
        this.password = "";
    }
    /**
     * Loggt einen User mit den Klassenattributen ein.
     */
    login() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.email != "" && this.password != "" && this.email != undefined && this.password != undefined) {
                yield this.authService.login(this.email, this.password).then(result => {
                    if (result) {
                        this.toDashboard();
                    }
                    else {
                        this.alertService.alert("Anmeldung fehlgeschlagen. Überprüfe die eingegebene E-Mail und das Passwort.");
                    }
                });
            }
        });
    }
    /**
     * Navigiert den User zur Registrierungsansicht.
     */
    toRegister() {
        this.router.navigate(["register"], { replaceUrl: true });
    }
    toDashboard() {
        this.router.navigate(["dashboard"], { replaceUrl: true });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }
];
LoginComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
    /**
     * Die LoginComponent ist zum Anmelden des Users zuständig. Falls der Nutzer noch nicht
     * registriert ist, wird er durch die LoginComponent in die Registrier-Ansicht navigiert.
     * Falls er bereits authentifiziert wurde, gelangt er durch Anmeldung automatisch in die Anwendung.
     */
    ,
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
], LoginComponent);



/***/ }),

/***/ "wLiR":
/*!********************************!*\
  !*** ./src/material.module.ts ***!
  \********************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ "1O3W");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/tree */ "y7ui");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ "1z/I");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/autocomplete */ "vrAh");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button-toggle */ "Ynp+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "pMoy");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/chips */ "f44v");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ "BSbQ");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ "o4Yh");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/list */ "SqCe");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/menu */ "rJgo");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/paginator */ "5QHs");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-spinner */ "pu8Q");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sidenav */ "q7Ft");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/sort */ "LUZP");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tabs */ "M9ds");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/toolbar */ "l0rg");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/tree */ "OLiY");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/slide-toggle */ "jMqV");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























const materialModules = [
    _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__["CdkTreeModule"],
    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
    _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
    _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"],
    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"],
    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"],
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__["MatSnackBarModule"],
    _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__["MatSortModule"],
    _angular_material_table__WEBPACK_IMPORTED_MODULE_24__["MatTableModule"],
    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__["MatTabsModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__["MatToolbarModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
    _angular_material_tree__WEBPACK_IMPORTED_MODULE_27__["MatTreeModule"],
    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"],
    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_28__["MatSlideToggleModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogModule"]
];
let MaterialModule = class MaterialModule {
};
MaterialModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            ...materialModules
        ],
        exports: [
            ...materialModules
        ],
    })
], MaterialModule);



/***/ }),

/***/ "xpyY":
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/available-studies/available-studies.component.ts ***!
  \****************************************************************************/
/*! exports provided: AvailableStudiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvailableStudiesComponent", function() { return AvailableStudiesComponent; });
/* harmony import */ var _raw_loader_available_studies_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./available-studies.component.html */ "eH3k");
/* harmony import */ var _available_studies_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./available-studies.component.css */ "Q2gg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let AvailableStudiesComponent = class AvailableStudiesComponent {
    ngOnInit() {
    }
};
AvailableStudiesComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-available-studies',
        template: _raw_loader_available_studies_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_available_studies_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], AvailableStudiesComponent);



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "wAiw");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/environments/environment */ "AytR");




if (_src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zd4C":
/*!***************************************************************!*\
  !*** ./src/app/services/app-settings/app-settings.service.ts ***!
  \***************************************************************/
/*! exports provided: AppSettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettingsService", function() { return AppSettingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let AppSettingsService = class AppSettingsService {
    /**
     * Standardkonstruktor für den AppSettingsService.
     */
    constructor() {
        this._hasVibrator = false;
        this._hasAmplitude = false;
    }
    get hasVibrator() {
        return this._hasVibrator;
    }
    set hasVibrator(hasVibrator) {
        if (hasVibrator == null) {
            throw new Error("Setting hasVibrator to null or undefined is not allowed.");
        }
        this._hasVibrator = hasVibrator;
    }
    get hasAmplitude() {
        return this._hasAmplitude;
    }
    set hasAmplitude(hasAmplitude) {
        if (hasAmplitude == null) {
            throw new Error("Setting hasAmplitude to null or undefined is not allowed.");
        }
        this._hasAmplitude = hasAmplitude;
    }
};
AppSettingsService.ctorParameters = () => [];
AppSettingsService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    })
    /**
     * Der AppSettingsService verwaltet die Speicherung und Bearbeitung
     * der App-Einstellungn. Zu diesen Einstellungen zählt, ob das mobile Endgerät vibrieren kann
     * und ob sie Amplituden unterstützt.
     */
    ,
    __metadata("design:paramtypes", [])
], AppSettingsService);



/***/ }),

/***/ "zfOo":
/*!************************************************************************!*\
  !*** ./src/app/Model/Study/StudyObjects/Questions/AbstractQuestion.ts ***!
  \************************************************************************/
/*! exports provided: AbstractQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractQuestion", function() { return AbstractQuestion; });
/* harmony import */ var _AbstractStudyObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AbstractStudyObject */ "Q9Pm");

/**
 * Ein AbstractQuestion stellt ein allgemeines Fragenobjekt dar.
 */
class AbstractQuestion extends _AbstractStudyObject__WEBPACK_IMPORTED_MODULE_0__["AbstractStudyObject"] {
    /**
     * Ein Attribut, was nicht als Parameter übergeben wird, ist answer. Dieses bezeichnet die Antwort,
     * die auf die Frage gegeben wird kann und dessen Typ bzw. Antwortmöglichkeit von der erbenden Klasse abhängt
     *
     * @param questionText ist die Frage, die gestellt werden soll
     * @param id ist die eindeutige Identifikationsnummer des Fragenobjekts
     */
    constructor(id, name, questionText, displayName) {
        super(id, name, displayName);
        this._questionText = "";
        this.questionText = questionText;
        this._answer = undefined;
        this.displayName = displayName;
    }
    get questionText() {
        return this._questionText;
    }
    set questionText(questionText) {
        this._questionText = questionText;
    }
    get answer() {
        return this._answer;
    }
    set answer(answer) {
        if (answer == null) {
            throw new Error("Answer darf nicht null sein.");
        }
        this._answer = answer;
    }
}


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map