(function () {
  function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }

  function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new Error('failed to set property'); } return value; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+1PG":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-studies/my-studies.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function PG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div *ngIf=\"loading\">\r\n    <mat-spinner></mat-spinner>\r\n</div>\r\n<div *ngFor=\"let keyData of studies; let index = index\">\r\n    <mat-card>\r\n        <div class=\"card-container\">\r\n            <mat-card-title class=\"card-container-left\">{{ keyData.name }}</mat-card-title>\r\n            <div class=\"buttonrow\">\r\n                <button *ngIf=\"keyData.studyStatus == 0\" mat-flat-button class=\"greenButton\" (click)=\"onEditClick(keyData)\">\r\n                    <mat-icon>edit</mat-icon>&nbsp;Bearbeiten\r\n                </button>\r\n\r\n                <button *ngIf=\"keyData.studyStatus == 0\" mat-flat-button class=\"brownButton\" (click)=\"publish(keyData)\">\r\n                    <mat-icon>publish</mat-icon>&nbsp;Veröffentlichen\r\n                </button>\r\n\r\n                <button *ngIf=\"keyData.studyStatus == 1\" mat-flat-button class=\"greenButton\" (click)=\"onEndClick(keyData)\">\r\n                    <mat-icon>clear</mat-icon>&nbsp;Beenden\r\n                </button>\r\n\r\n                <button *ngIf=\"keyData.studyStatus == 2\" mat-flat-button class=\"brownButton\" (click)=\"resetStudy(keyData.id)\">\r\n                    <mat-icon>replay</mat-icon>&nbsp;Zurücksetzen\r\n                </button>\r\n\r\n                <button *ngIf=\"keyData.studyStatus == 2\" mat-flat-button class=\"greenButton\" (click)=\"getCSV(keyData.id)\">\r\n                    <mat-icon>assessment</mat-icon>&nbsp;Ergebnisse\r\n                </button>\r\n\r\n                <button *ngIf=\"keyData.studyStatus == 2\" mat-flat-button class=\"greenButton\" (click)=\"getParticipants(keyData.id)\">\r\n                    <mat-icon>supervisor_account</mat-icon>&nbsp;Teilnehmerliste\r\n                </button>\r\n\r\n                <button mat-flat-button class=\"redButton\" (click)=\"onDelete(keyData)\" style=\"margin-left: 15px\">\r\n                    <mat-icon>delete</mat-icon>&nbsp;Löschen\r\n                </button>\r\n            </div>\r\n        </div><br>\r\n        <mat-divider></mat-divider><br>\r\n        <mat-card-content style=\"word-wrap: normal;\">\r\n            {{keyData.shortDescription.text}}\r\n        </mat-card-content>\r\n    </mat-card>\r\n    <br />\r\n</div>\r\n<a mat-fab class=\"greenButton\" (click)=\"onNewClick()\" style=\"display: block; margin: auto;\">\r\n    <mat-icon>add</mat-icon>\r\n</a>";
      /***/
    },

    /***/
    "+nPA":
    /*!*************************************************!*\
      !*** ./src/app/register/register.component.css ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function nPA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".full-page {\r\n    height: 100%;\r\n    display: flex;\r\n    background-color: #303030;\r\n  }\r\n  \r\n  .login-card {\r\n    margin: auto;\r\n    width: 350px;\r\n  }\r\n  \r\n  .login-field {\r\n    width: 100%;\r\n  }\r\n  \r\n  mat-card {\r\n    padding: 50px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFRjtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtcGFnZSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luLWNhcmQge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gIH1cclxuICBcclxuICAubG9naW4tZmllbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxubWF0LWNhcmQge1xyXG4gICAgcGFkZGluZzogNTBweDtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "/3i5":
    /*!*****************************************************!*\
      !*** ./src/app/Model/Study/StudyObjects/Section.ts ***!
      \*****************************************************/

    /*! exports provided: Section */

    /***/
    function i5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Section", function () {
        return Section;
      });
      /* harmony import */


      var _Types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Types */
      "ozSw");
      /* harmony import */


      var _AbstractStudyObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./AbstractStudyObject */
      "Q9Pm");
      /**
       * Eine Section stellt einen logischen Abschnitt einer Studie dar, das nur Section-Elemente, also
       * nur Objekte der Klasse AbstractSectionElement, enthalten darf.
       */


      var Section = /*#__PURE__*/function (_AbstractStudyObject_) {
        _inherits(Section, _AbstractStudyObject_);

        var _super = _createSuper(Section);

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
        function Section(id, name, skippable, resultRelevant, randomStrategy) {
          var _this;

          _classCallCheck(this, Section);

          _this = _super.call(this, id, name);
          /**
           * In dem Attribut sind mittels ID Referenzen auf jene Elemente gespeichert, die innerhalb einer Section liegen.
           */

          _this._sectionElements = [];
          _this._skippable = skippable;
          _this._resultRelevant = resultRelevant;
          _this._randomStrategy = randomStrategy;
          return _this;
        }

        _createClass(Section, [{
          key: "addStudyObject",

          /**
           * Fügt entweder einen Test oder einen Playground hinzu.
           *
           * @param studyObject ist die Referenz auf das StudyObject, das hinzugefügt werden soll.
           * @param index ist die Stelle, an die das Objekt hinzugefügt werden soll. Bei null wird es am Ende der Liste hinzugefügt.
           * @throws Error, falls es kein Test oder Playground ist.
           */
          value: function addStudyObject(studyObject, index) {
            var typeOfReferenceTuple = this.verifier.getType(studyObject);

            if (!(typeOfReferenceTuple === _Types__WEBPACK_IMPORTED_MODULE_0__["Types"].SECTIONELEMENT)) {
              throw new Error("In eine Section können nur SectionElements eingefügt werden.");
            }

            if (index == null) {
              this.sectionElements.push(studyObject);
            } else {
              this.sectionElements.splice(index, 0, studyObject);
            }
          }
        }, {
          key: "verifier",
          get: function get() {
            return this._verifier;
          },
          set: function set(verifier) {
            this._verifier = verifier;
          }
        }, {
          key: "skippable",
          get: function get() {
            return this._skippable;
          },
          set: function set(skippable) {
            if (skippable == null) {
              throw new Error("Skippable darf nicht null sein.");
            }

            this._skippable = skippable;
          }
        }, {
          key: "resultRelevant",
          get: function get() {
            return this._resultRelevant;
          },
          set: function set(resultRelevant) {
            if (resultRelevant == null) {
              throw new Error("ResultRelevant darf nicht null sein.");
            }

            this._resultRelevant = resultRelevant;
          }
        }, {
          key: "randomStrategy",
          get: function get() {
            return this._randomStrategy;
          },
          set: function set(randomStrategy) {
            if (randomStrategy == null) {
              throw new Error("RandomStrategy darf nicht null sein.");
            }

            this._randomStrategy = randomStrategy;
          }
        }, {
          key: "sectionElements",
          get: function get() {
            return this._sectionElements;
          },
          set: function set(sectionElements) {
            this._sectionElements = sectionElements;
          }
        }]);

        return Section;
      }(_AbstractStudyObject__WEBPACK_IMPORTED_MODULE_1__["AbstractStudyObject"]);
      /***/

    },

    /***/
    "/lzh":
    /*!***************************************************************!*\
      !*** ./src/app/dashboard/my-studies/my-studies.component.css ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function lzh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".card-container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\nbutton {\r\n    margin-left: 15px;\r\n    padding-bottom: 3px;\r\n}\r\n\r\nmat-card-title {\r\n    padding-top: 10px;\r\n}\r\n\r\n.greenButton {\r\n    background-color: #3e753b;\r\n    color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL215LXN0dWRpZXMvbXktc3R1ZGllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9teS1zdHVkaWVzL215LXN0dWRpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xyXG59XHJcblxyXG5tYXQtY2FyZC10aXRsZSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLmdyZWVuQnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZTc1M2I7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0iXX0= */";
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
      /*! G:\_Studium\PSE\pse-vibrostudies\Implementation\vibrostudies\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0HUV":
    /*!*******************************************************!*\
      !*** ./src/app/Model/Study/StudyObjects/TextBlock.ts ***!
      \*******************************************************/

    /*! exports provided: TextBlock */

    /***/
    function HUV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextBlock", function () {
        return TextBlock;
      });
      /* harmony import */


      var _AbstractStudyObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./AbstractStudyObject */
      "Q9Pm");
      /**
       * Ein TextBlock stellt ein Studienobjekt dar, das nur einen unformatierten
       * Text enthält.
       */


      var TextBlock = /*#__PURE__*/function (_AbstractStudyObject_2) {
        _inherits(TextBlock, _AbstractStudyObject_2);

        var _super2 = _createSuper(TextBlock);

        /**
         * @param text ist der Inhalt, also der Text des TextBlocks
         * @param id ist die eindeutige Identifikationsnummer des TextBlocks
         * @param fixed entscheidet, ob der TextBlock innerhalb eines Section-Elements eine feste Position hat oder die
         * Position von Studieninstanz zu Studieninstanz mit Hilfe von Randomisierung variiert
         */
        function TextBlock(id, name, text) {
          var _this2;

          _classCallCheck(this, TextBlock);

          _this2 = _super2.call(this, id, name);
          _this2.objectType = "TextBlock";
          _this2.text = text;
          return _this2;
        }

        _createClass(TextBlock, [{
          key: "text",
          get: function get() {
            return this._text;
          },
          set: function set(text) {
            this._text = text;
          }
        }]);

        return TextBlock;
      }(_AbstractStudyObject__WEBPACK_IMPORTED_MODULE_0__["AbstractStudyObject"]);
      /***/

    },

    /***/
    "1N3c":
    /*!**************************************************************!*\
      !*** ./src/app/Model/Study/StudyObjects/VibrationElement.ts ***!
      \**************************************************************/

    /*! exports provided: VibrationElement */

    /***/
    function N3c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VibrationElement", function () {
        return VibrationElement;
      });
      /* harmony import */


      var _AbstractVibrationPatternElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./AbstractVibrationPatternElement */
      "jdIE");

      var VibrationElement = /*#__PURE__*/function (_AbstractVibrationPat) {
        _inherits(VibrationElement, _AbstractVibrationPat);

        var _super3 = _createSuper(VibrationElement);

        function VibrationElement(duration, amplitude) {
          var _this3;

          _classCallCheck(this, VibrationElement);

          _this3 = _super3.call(this, duration);

          _this3.ensure8bitNumber(amplitude);

          _this3._amplitude = amplitude;
          return _this3;
        }

        _createClass(VibrationElement, [{
          key: "ensure8bitNumber",
          // Stellt sicher, dass der Parameter im erlaubten Bereich von 0 bis 255 liegt
          value: function ensure8bitNumber(amplitude) {
            if (!Number.isInteger(amplitude)) {
              throw new Error("Es sind nur Ganzzahlen erlaubt.");
            }

            if (!(amplitude > 0 && amplitude <= 255)) {
              throw new Error("Es sind nur Werte zwischen 1 und 255 erlaubt.");
            }
          }
        }, {
          key: "amplitude",
          get: function get() {
            return this._amplitude;
          },
          set: function set(amplitude) {
            if (amplitude == null) {
              throw new Error("Amplitude konnte nicht gesetzt werden, da sie undefiniert ist.");
            }

            var temp = Number(amplitude);
            this.ensure8bitNumber(temp);
            this._amplitude = temp;
          }
        }]);

        return VibrationElement;
      }(_AbstractVibrationPatternElement__WEBPACK_IMPORTED_MODULE_0__["AbstractVibrationPatternElement"]);
      /***/

    },

    /***/
    "1W4x":
    /*!************************************************!*\
      !*** ./src/app/register/register.component.ts ***!
      \************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function W4x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./register.component.html */
      "OOnH");
      /* harmony import */


      var _register_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./register.component.css */
      "+nPA");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _Model_User_EMail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../Model/User/EMail */
      "BfXG");
      /* harmony import */


      var _Model_User_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../Model/User/User */
      "rPx+");
      /* harmony import */


      var _Model_User_UserDao_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../Model/User/UserDao.service */
      "Jz4F");
      /* harmony import */


      var _Model_User_UserPermission__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../Model/User/UserPermission */
      "rhQZ");
      /* harmony import */


      var _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../services/alert/alert.service */
      "kyzu");
      /* harmony import */


      var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../services/auth/auth.service */
      "9ans");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };

      var RegisterComponent = /*#__PURE__*/function () {
        /**
         * Konstruktor der RegisterComponent. Darin werden sämtliche Services initialisert,
         * die für das Registrieren gebraucht werden.
         * @param router router Router Singleton, zum Routen des Pfads nach Eintritt eines Ereignisses
         * @param authService authService AuthService Singleton, ist für die Authentifizierung des Nutzers zuständig
         * @param userService
         */
        function RegisterComponent(router, authService, userService, alertService) {
          _classCallCheck(this, RegisterComponent);

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


        _createClass(RegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this4 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.authService.isAuthenticated().then(function (result) {
                        if (result) {
                          _this4.router.navigate(["dashboard"], {
                            replaceUrl: true
                          });
                        }
                      });

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
          /**
           * Registriert für den Nutzer einen User in der Datenbank, falls er alle Eingabefelde
           * korrekt eingetragen hat.
           */

        }, {
          key: "register",
          value: function register() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this5 = this;

              var user;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!(this.firstName != "" && this.lastName != "" && this.email != "" && this.password != "" && this.password == this.confirmPassword)) {
                        _context2.next = 4;
                        break;
                      }

                      user = new _Model_User_User__WEBPACK_IMPORTED_MODULE_5__["User"](0, this.firstName, this.lastName, _Model_User_UserPermission__WEBPACK_IMPORTED_MODULE_7__["UserPermission"].CREATOR, new _Model_User_EMail__WEBPACK_IMPORTED_MODULE_4__["EMail"](this.email));
                      _context2.next = 4;
                      return this.userService.save(user, "", this.password).then(function (result) {
                        if (result) {
                          _this5.router.navigate(["login"], {
                            replaceUrl: true
                          });
                        } else {
                          _this5.alertService.alert("Registration fehlgeschlagen. Vermutlich existiert bereits ein Account unter dieser E-Mail.");
                        }
                      });

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return RegisterComponent;
      }();

      RegisterComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]
        }, {
          type: _Model_User_UserDao_service__WEBPACK_IMPORTED_MODULE_6__["UserDao"]
        }, {
          type: _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"]
        }];
      };

      RegisterComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_register_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })
      /**
       * Die Registrierungskomponente ist für die Registrierung von Nutzern zuständig,
       * die noch nicht in der Datenbank stehen.
       */
      , __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"], _Model_User_UserDao_service__WEBPACK_IMPORTED_MODULE_6__["UserDao"], _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"]])], RegisterComponent);
      /***/
    },

    /***/
    "24n0":
    /*!*********************************!*\
      !*** ./src/app/app-settings.ts ***!
      \*********************************/

    /*! exports provided: AppSettings */

    /***/
    function n0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppSettings", function () {
        return AppSettings;
      });

      var AppSettings = function AppSettings() {
        _classCallCheck(this, AppSettings);
      };

      AppSettings.baseURL = "https://bitschi.hopto.org/";
      /***/
    },

    /***/
    "7I3w":
    /*!******************************************************************!*\
      !*** ./src/app/Model/Study/CSVConverter/csvconverter.service.ts ***!
      \******************************************************************/

    /*! exports provided: CSVConverter */

    /***/
    function I3w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CSVConverter", function () {
        return CSVConverter;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var export_to_csv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! export-to-csv */
      "8j+T");
      /* harmony import */


      var export_to_csv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(export_to_csv__WEBPACK_IMPORTED_MODULE_1__);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var CSVConverter = /*#__PURE__*/function () {
        function CSVConverter() {
          _classCallCheck(this, CSVConverter);

          this.metaDataHeaders = ["Zeit in Millisekunden", "Marke", "Gerät", "Display", "Hardware", "Hersteller", "Model", "Produkt", "AndroidSDK", "Amplitude"];
        }

        _createClass(CSVConverter, [{
          key: "generateResultCSV",
          value: function generateResultCSV(study, results, download) {
            var data = [];
            var headers = this.generateHeaders(results[0].results);
            var numberOfQuestions = headers.length - this.metaDataHeaders.length;
            data = this.convertAllResultsToData(results, numberOfQuestions, data);
            var csvExporter = new export_to_csv__WEBPACK_IMPORTED_MODULE_1__["ExportToCsv"](this.setOptions(headers, study, "Ergebnisse"));
            return csvExporter.generateCsv(data, download);
          }
        }, {
          key: "giveResultCSV",
          value: function giveResultCSV(study, results) {
            return this.generateResultCSV(study, results, false);
          }
        }, {
          key: "generateParticipantsCSV",
          value: function generateParticipantsCSV(study, results, download) {
            var headers = ["Vorname", "Nachname", "E-Mail"];
            var data = [];
            var participants = [];
            results.forEach(function (triple) {
              participants.push(triple.user);
            });
            var shuffeldUser = participants.map(function (a) {
              return {
                sort: Math.random(),
                value: a
              };
            }).sort(function (a, b) {
              return a.sort - b.sort;
            }).map(function (a) {
              return a.value;
            });
            data = this.convertParticipantsToData(shuffeldUser, data);
            var csvExporter = new export_to_csv__WEBPACK_IMPORTED_MODULE_1__["ExportToCsv"](this.setOptions(headers, study, "Teilnehmerliste"));
            return csvExporter.generateCsv(data, download);
          }
        }, {
          key: "giveParticipantsCSV",
          value: function giveParticipantsCSV(study, results) {
            return this.generateParticipantsCSV(study, results, false);
          }
        }, {
          key: "convertParticipantsToData",
          value: function convertParticipantsToData(participants, data) {
            participants.forEach(function (participant) {
              data.push({
                firstName: participant.firstName,
                lastName: participant.lastName,
                email: participant.email.email
              });
            });
            return data;
          }
        }, {
          key: "setOptions",
          value: function setOptions(headers, study, fileType) {
            var studyKeyData = study.keyData;
            var options = {
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
              nullToEmptyString: true
            };
            return options;
          }
        }, {
          key: "generateHeaders",
          value: function generateHeaders(questions) {
            var headers = [];
            var sortedQuestions = this.sortQuestionsByID(questions);
            sortedQuestions.forEach(function (question) {
              headers.push(question.name + "(" + question.id + ")");
            });
            headers = headers.concat(this.metaDataHeaders);
            return headers;
          }
        }, {
          key: "sortQuestionsByID",
          value: function sortQuestionsByID(questions) {
            return questions.sort(function (a, b) {
              return a.id > b.id ? 1 : -1;
            });
          }
        }, {
          key: "convertAllResultsToData",
          value: function convertAllResultsToData(results, numberOfQuestions, data) {
            var _this6 = this;

            results.forEach(function (tuple) {
              var answeredQuestions = tuple.results;

              if (answeredQuestions.length !== numberOfQuestions) {
                throw new Error("Es wurden nicht alle Fragen beantwortet.");
              }

              data = _this6.convertResultToData(answeredQuestions, tuple.metaData, data);
            });
            return data;
          }
        }, {
          key: "convertResultToData",
          value: function convertResultToData(result, metaData, data) {
            var sortedAnsweredQuestions = this.sortQuestionsByID(result);
            var csvObj = {};
            sortedAnsweredQuestions.forEach(function (question) {
              var nameOfProp = "question" + question.id;
              csvObj[nameOfProp] = question.answer;
            });
            csvObj = this.insertMetaData(csvObj, metaData);
            data.push(csvObj);
            return data;
          }
        }, {
          key: "insertMetaData",
          value: function insertMetaData(csvObject, metaData) {
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
        }, {
          key: "booleanToReadableString",
          value: function booleanToReadableString(bool) {
            if (bool) {
              return "Ja";
            }

            return "Nein";
          }
        }]);

        return CSVConverter;
      }();

      CSVConverter.ctorParameters = function () {
        return [];
      };

      CSVConverter = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [])], CSVConverter);
      /***/
    },

    /***/
    "80h2":
    /*!********************************************************!*\
      !*** ./src/app/dashboard/profile/profile.component.ts ***!
      \********************************************************/

    /*! exports provided: ProfileComponent */

    /***/
    function h2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
        return ProfileComponent;
      });
      /* harmony import */


      var _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./profile.component.html */
      "adfr");
      /* harmony import */


      var _profile_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./profile.component.css */
      "JUn6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _src_app_Model_User_UserDao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @src/app/Model/User/UserDao.service */
      "Jz4F");
      /* harmony import */


      var _src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @src/app/services/alert/alert.service */
      "kyzu");
      /* harmony import */


      var _src_app_services_dialogs_confirmDialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @src/app/services/dialogs/confirmDialog.service */
      "Nj1j");
      /* harmony import */


      var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/auth/auth.service */
      "9ans");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };

      var ProfileComponent = /*#__PURE__*/function () {
        function ProfileComponent(authService, userService, alertService, confirmDialogService) {
          _classCallCheck(this, ProfileComponent);

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


        _createClass(ProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.user = this.authService.getUser();

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
          /**
           * Speichert den neuen Nutzer innerhalb der Datenbank und dem lokalen Speicher ab.
           */

        }, {
          key: "saveUser",
          value: function saveUser() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this7 = this;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.userService.checkPassword(this.user.id, this.oldPassword).then(function (isValid) {
                        return __awaiter(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                          var _this8 = this;

                          return regeneratorRuntime.wrap(function _callee4$(_context4) {
                            while (1) {
                              switch (_context4.prev = _context4.next) {
                                case 0:
                                  if (!isValid) {
                                    _context4.next = 3;
                                    break;
                                  }

                                  _context4.next = 3;
                                  return this.userService.save(this.user, this.oldPassword, this.oldPassword).then(function (result) {
                                    if (result) {
                                      _this8.alertService.alert("Accountdaten erfolgreich gespeichert!");

                                      _this8.authService.setUser(_this8.user);

                                      _this8.oldPassword = "";
                                    } else {
                                      _this8.alertService.alert("Das vorherige Passwort ist nicht korrekt. Accountdaten wurden nicht geändert.");
                                    }
                                  });

                                case 3:
                                case "end":
                                  return _context4.stop();
                              }
                            }
                          }, _callee4, this);
                        }));
                      });

                    case 2:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
          /**
           * Entfernt den Nutzer aus der Datenbank und loggt ihn aus der Anwendung aus.
           */

        }, {
          key: "deleteUser",
          value: function deleteUser() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this9 = this;

              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      this.confirmDialogService.openDialog("Hiermit werden alle deine Daten, inklusive deiner erstellten Studien, unwiderruflich gelöscht!").then(function (isConfirmed) {
                        return __awaiter(_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                          var _this10 = this;

                          return regeneratorRuntime.wrap(function _callee6$(_context6) {
                            while (1) {
                              switch (_context6.prev = _context6.next) {
                                case 0:
                                  if (!isConfirmed) {
                                    _context6.next = 4;
                                    break;
                                  }

                                  _context6.next = 3;
                                  return this.userService["delete"](this.user).then(function (response) {
                                    if (response) {
                                      _this10.alertService.alert("Account erfolgreich gelöscht!");
                                    }
                                  });

                                case 3:
                                  this.authService.logout();

                                case 4:
                                case "end":
                                  return _context6.stop();
                              }
                            }
                          }, _callee6, this);
                        }));
                      });

                    case 1:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
          /**
           * Speichert das neue Passwort ab.
           */

        }, {
          key: "savePassword",
          value: function savePassword() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var _this11 = this;

              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      if (!(this.newPassword == this.newPasswordRepeat)) {
                        _context9.next = 3;
                        break;
                      }

                      _context9.next = 3;
                      return this.userService.save(this.user, this.oldPassword, this.newPassword).then(function (result) {
                        return __awaiter(_this11, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                          return regeneratorRuntime.wrap(function _callee8$(_context8) {
                            while (1) {
                              switch (_context8.prev = _context8.next) {
                                case 0:
                                  if (!result) {
                                    _context8.next = 9;
                                    break;
                                  }

                                  _context8.next = 3;
                                  return this.authService.login(this.user.email.email, this.newPassword);

                                case 3:
                                  this.newPassword = "";
                                  this.newPasswordRepeat = "";
                                  this.oldPassword = "";
                                  this.alertService.alert("Passwort erfolgreich geändert!");
                                  _context8.next = 10;
                                  break;

                                case 9:
                                  this.alertService.alert("Das vorherige Passwort ist nicht korrekt. Das Passwort wurde nicht geändert.");

                                case 10:
                                case "end":
                                  return _context8.stop();
                              }
                            }
                          }, _callee8, this);
                        }));
                      });

                    case 3:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }]);

        return ProfileComponent;
      }();

      ProfileComponent.ctorParameters = function () {
        return [{
          type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }, {
          type: _src_app_Model_User_UserDao_service__WEBPACK_IMPORTED_MODULE_3__["UserDao"]
        }, {
          type: _src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
        }, {
          type: _src_app_services_dialogs_confirmDialog_service__WEBPACK_IMPORTED_MODULE_5__["ConfirmDialogService"]
        }];
      };

      ProfileComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_profile_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })
      /**
       * Die ProfileComponent befähigt den Nutzer dazu alle Accountdaten zu verwalten,
       * die er momentan in der Datenbank abgespeichert hat. Dafür wird dem Nutzer
       * die Profil-Ansicht angeboten.
       */
      , __metadata("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _src_app_Model_User_UserDao_service__WEBPACK_IMPORTED_MODULE_3__["UserDao"], _src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"], _src_app_services_dialogs_confirmDialog_service__WEBPACK_IMPORTED_MODULE_5__["ConfirmDialogService"]])], ProfileComponent);
      /***/
    },

    /***/
    "9ans":
    /*!***********************************************!*\
      !*** ./src/app/services/auth/auth.service.ts ***!
      \***********************************************/

    /*! exports provided: AuthService */

    /***/
    function ans(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _src_app_app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @src/app/app-settings */
      "24n0");
      /* harmony import */


      var _src_app_Model_User_EMail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @src/app/Model/User/EMail */
      "BfXG");
      /* harmony import */


      var _src_app_Model_User_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @src/app/Model/User/User */
      "rPx+");
      /* harmony import */


      var _alert_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../alert/alert.service */
      "kyzu");
      /* harmony import */


      var _storage_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../storage/storage.service */
      "E2f4");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };

      var AuthService = /*#__PURE__*/function () {
        /**
         * Konstruktor des AuthService. Darin werden sämtliche Services initialisert,
         * die für eine Authentifizierung des Nutzers gebraucht werden.
         * @param router Router Singleton, zum Routen des Pfads nach Eintritt eines Ereignisses
         * @param http HttpClient der zurückgi
         * @param storageService StorageService, zum Ablegen des authentifizierten Nutzers in den lokalen Speicher
         * @param alertService
         */
        function AuthService(http, router, storageService, alertService) {
          _classCallCheck(this, AuthService);

          this.http = http;
          this.router = router;
          this.storageService = storageService;
          this.alertService = alertService;
        }
        /**
         * Löscht den registrierten Nutzer aus dem lokalen Speicher.
         */


        _createClass(AuthService, [{
          key: "clear",
          value: function clear() {
            this.storageService.clear();
          }
          /**
           * Überprüft ob ein gegebener User in der Datenbank existiert
           * und auch autehntifiziert werden kann.
           * @returns Promise<boolean>, je nachdem ob der Nutzer existiert oder nicht
           */

        }, {
          key: "isAuthenticated",
          value: function isAuthenticated() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var _this12 = this;

              var result;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      result = false;

                      if (this.isTokenExpired()) {
                        _context10.next = 5;
                        break;
                      }

                      if (!(this.getUser() && this.getAuthToken())) {
                        _context10.next = 5;
                        break;
                      }

                      _context10.next = 5;
                      return this.userIsValid(this.getUser().id, this.getAuthToken()).then(function (response) {
                        if (response) {
                          result = true;
                        } else {
                          _this12.alertService.alert("Login-Session abgelaufen. Bitte erneut anmelden!");
                        }
                      });

                    case 5:
                      return _context10.abrupt("return", result);

                    case 6:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
          /**
           * Checkt ob ein Nutzer valide ist.
           * @param id number des User-Objekts vom Nutzer
           * @param token string Token des Nutzers
           */

        }, {
          key: "userIsValid",
          value: function userIsValid(id, token) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var isValid;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      isValid = false;
                      _context11.next = 3;
                      return this.http.post(_src_app_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].baseURL + "VerifyUser/", {
                        id: id,
                        token: token
                      }).toPromise().then(function (result) {
                        if (result) {
                          isValid = true;
                        }
                      });

                    case 3:
                      return _context11.abrupt("return", isValid);

                    case 4:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
          /**
           * Checkt ob ein Token für die Sitzung mit dem Nutzer schon abgelaufen ist oder nicht.
           * @returns boolean ob Token abgelaufen ist oder nicht
           */

        }, {
          key: "isTokenExpired",
          value: function isTokenExpired() {
            try {
              this.storageService.get("userToken");
            } catch (err) {
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

        }, {
          key: "login",
          value: function login(email, password) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var _this13 = this;

              var user;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.next = 2;
                      return this.http.post(_src_app_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].baseURL + "Login/", {
                        email: email,
                        password: password
                      }).toPromise().then(function (data) {
                        if (data.id) {
                          user = new _src_app_Model_User_User__WEBPACK_IMPORTED_MODULE_5__["User"](data.id, data.firstName, data.lastName, data.permission, new _src_app_Model_User_EMail__WEBPACK_IMPORTED_MODULE_4__["EMail"](data.email));

                          _this13.setUser(user);

                          _this13.setAuthToken(data.token);
                        } else {
                          throw new Error("No such user found in database.");
                        }
                      });

                    case 2:
                      return _context12.abrupt("return", user != undefined);

                    case 3:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
          /**
           * Setzt ein Authentifizierungstoken im lokalen Speicher.
           * @param token string des Tokens
           */

        }, {
          key: "setAuthToken",
          value: function setAuthToken(token) {
            this.storageService.set("token", token);
          }
          /**
           * Holt den Authentifizierungstoke aus dem lokalen Speicher.
           */

        }, {
          key: "getAuthToken",
          value: function getAuthToken() {
            return this.storageService.get("token");
          }
          /**
           * Generiert einen Standardnutzer welcher durch den Nutzer, der im userToken spezifiziert wurde, überschrieben
           * wird. Dieser wird dann anschließend als registrierter Nutzer zurückgeschrieben.
           * @returns User-Objekt des aktuell registrierten Nutzers
           * @throws Error, wenn kein Nutzer im lokalen Speicher enthalten ist
           */

        }, {
          key: "getUser",
          value: function getUser() {
            var user;

            if (this.storageService.get("userToken") != undefined) {
              var userToken = JSON.parse(this.storageService.get("userToken"));
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

        }, {
          key: "setUser",
          value: function setUser(user) {
            if (user == null) {
              throw new Error("Setting the User to null or undefined is not allowed.");
            }

            this.storageService.set("userToken", JSON.stringify(user));
          }
          /**
           * Entfernt den registrieten Nutzer aus dem lokalen Speicher und navigiert zur Login-Ansicht.
           */

        }, {
          key: "logout",
          value: function logout() {
            this.clear();
            this.router.navigate(["login"], {
              replaceUrl: true
            });
          }
        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _storage_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"]
        }, {
          type: _alert_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]
        }];
      };

      AuthService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })
      /**
       * Der AuthService verwaltet die Authentifizierung, Registrierung und
       * Abmeldung des Nutzers in der Anwendung.
       */
      , __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _storage_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"], _alert_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]])], AuthService);
      /***/
    },

    /***/
    "9rjs":
    /*!******************************************************************!*\
      !*** ./src/app/Model/Study/Result/UserResultTupleDAO.service.ts ***!
      \******************************************************************/

    /*! exports provided: UserResultTupleDAO */

    /***/
    function rjs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserResultTupleDAO", function () {
        return UserResultTupleDAO;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @src/app/app-settings */
      "24n0");
      /* harmony import */


      var _src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @src/app/services/auth/auth.service */
      "9ans");
      /* harmony import */


      var _User_EMail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../User/EMail */
      "BfXG");
      /* harmony import */


      var _User_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../User/User */
      "rPx+");
      /* harmony import */


      var _User_UserPermission__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../User/UserPermission */
      "rhQZ");
      /* harmony import */


      var _StudyPrototypeDAO_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../StudyPrototypeDAO.service */
      "osms");
      /* harmony import */


      var _UserResultTuple__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./UserResultTuple */
      "hVaG");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! lodash */
      "LvDl");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };

      var UserResultTupleDAO = /*#__PURE__*/function () {
        function UserResultTupleDAO(http, studyService, authService) {
          _classCallCheck(this, UserResultTupleDAO);

          this.http = http;
          this.studyService = studyService;
          this.authService = authService;
        }
        /**
         * Die Methode gibt asynchron ein UserResultTuple zurück, welches eindeutig durch die id identifiziert wird.
         * @param studyId number ist die ID des UserResultTuple, der aus der Datenbank geholt werden soll
         */


        _createClass(UserResultTupleDAO, [{
          key: "get",
          value: function get(studyId) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var userResult, study;
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      userResult = [];
                      _context13.next = 3;
                      return this.studyService.get(studyId).then(function (studyResult) {
                        study = studyResult;
                      });

                    case 3:
                      _context13.next = 5;
                      return this.http.post(_src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].baseURL + "Result/" + studyId + "/", {
                        token: this.authService.getAuthToken()
                      }).toPromise().then(function (result) {
                        var _iterator = _createForOfIteratorHelper(result),
                            _step;

                        try {
                          for (_iterator.s(); !(_step = _iterator.n()).done;) {
                            var element = _step.value;
                            var answers = [];
                            var index = 0;

                            var _iterator2 = _createForOfIteratorHelper(element.answers),
                                _step2;

                            try {
                              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                                var questionAnswer = _step2.value;

                                var _iterator3 = _createForOfIteratorHelper(study.studyObjects),
                                    _step3;

                                try {
                                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                                    var studyObject = _step3.value;

                                    if (studyObject.id == questionAnswer.objectId) {
                                      var copied = lodash__WEBPACK_IMPORTED_MODULE_9__["cloneDeep"](studyObject);
                                      copied.id = index++;
                                      copied.answer = questionAnswer.answer;
                                      answers.push(copied);
                                    }
                                  }
                                } catch (err) {
                                  _iterator3.e(err);
                                } finally {
                                  _iterator3.f();
                                }
                              }
                            } catch (err) {
                              _iterator2.e(err);
                            } finally {
                              _iterator2.f();
                            }

                            userResult.push(new _UserResultTuple__WEBPACK_IMPORTED_MODULE_8__["UserResultTuple"](new _User_User__WEBPACK_IMPORTED_MODULE_5__["User"](0, element.participant.firstName, element.participant.lastName, _User_UserPermission__WEBPACK_IMPORTED_MODULE_6__["UserPermission"].PARTICIPANT, new _User_EMail__WEBPACK_IMPORTED_MODULE_4__["EMail"](element.participant.email)), answers, element.metaData));
                          }
                        } catch (err) {
                          _iterator.e(err);
                        } finally {
                          _iterator.f();
                        }
                      });

                    case 5:
                      return _context13.abrupt("return", userResult);

                    case 6:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          }
          /**
           * Die Methode speichert asynchron ein UserResultTuple in einer Datenbank, welches nachdem
           * es gespeichert wurde wieder mit get aufgerufen werden kann.
           * @param studyId number Id der Studie
           * @param idUser number Id des Users der an der Studie teilgenomment hat
           * @param object UserResultTuple ist der UserResultTuple, der gespeichert werden soll
           * @param participantId number Id die der User innerhalb der Studie zugewiesen bekommen hat
           */

        }, {
          key: "save",
          value: function save(studyId, idUser, object, participantId) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var success;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      success = false;
                      _context14.next = 3;
                      return this.http.post(_src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].baseURL + "SaveResult/", {
                        participantId: participantId,
                        studyId: studyId,
                        userId: idUser,
                        metaData: object.metaData,
                        answeredQuestions: object.answeredQuestions,
                        token: this.authService.getAuthToken()
                      }).toPromise().then(function (result) {
                        if (result) {
                          success = true;
                        }
                      });

                    case 3:
                      return _context14.abrupt("return", success);

                    case 4:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          }
          /**
           * Startet die Ausführung einer bestimmten Studie für einen Nutzer
           * @param studyId number id der Studie die gestartet wird
           * @param userId number id des Users der an der Studie teilnimmt
           */

        }, {
          key: "startStudy",
          value: function startStudy(studyId, userId) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              var returnId;
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      returnId = -1;
                      _context15.next = 3;
                      return this.http.post(_src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].baseURL + "StartStudy/", {
                        studyId: studyId,
                        userId: userId,
                        token: this.authService.getAuthToken()
                      }).toPromise().then(function (result) {
                        if (result != -1) {
                          returnId = result;
                        }
                      });

                    case 3:
                      return _context15.abrupt("return", returnId);

                    case 4:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));
          }
        }]);

        return UserResultTupleDAO;
      }();

      UserResultTupleDAO.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }, {
          type: _StudyPrototypeDAO_service__WEBPACK_IMPORTED_MODULE_7__["StudyPrototypeDAO"]
        }, {
          type: _src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }];
      };

      UserResultTupleDAO = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
      }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _StudyPrototypeDAO_service__WEBPACK_IMPORTED_MODULE_7__["StudyPrototypeDAO"], _src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])], UserResultTupleDAO);
      /***/
    },

    /***/
    "A3xY":
    /*!***********************************!*\
      !*** ./src/app/app.component.css ***!
      \***********************************/

    /*! exports provided: default */

    /***/
    function A3xY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
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

      /***/
    },

    /***/
    "B6Ro":
    /*!**************************************************************!*\
      !*** ./src/app/dashboard/my-studies/my-studies.component.ts ***!
      \**************************************************************/

    /*! exports provided: MyStudiesComponent */

    /***/
    function B6Ro(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyStudiesComponent", function () {
        return MyStudiesComponent;
      });
      /* harmony import */


      var _raw_loader_my_studies_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./my-studies.component.html */
      "+1PG");
      /* harmony import */


      var _my_studies_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./my-studies.component.css */
      "/lzh");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _src_app_Model_Study_KeyData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @src/app/Model/Study/KeyData */
      "r/57");
      /* harmony import */


      var _src_app_Model_Study_KeyDataDAO_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @src/app/Model/Study/KeyDataDAO.service */
      "ROf3");
      /* harmony import */


      var _src_app_Model_Study_ShortDescription__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @src/app/Model/Study/ShortDescription */
      "FerX");
      /* harmony import */


      var _src_app_Model_Study_StudyPrototypeDAO_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @src/app/Model/Study/StudyPrototypeDAO.service */
      "osms");
      /* harmony import */


      var _src_app_Model_Study_StudyStatus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @src/app/Model/Study/StudyStatus */
      "iqOD");
      /* harmony import */


      var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../services/auth/auth.service */
      "9ans");
      /* harmony import */


      var _src_app_services_study_wrapper_study_wrapper_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @src/app/services/study-wrapper/study-wrapper.service */
      "pzGZ");
      /* harmony import */


      var _src_app_Model_Study_CSVConverter_csvconverter_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @src/app/Model/Study/CSVConverter/csvconverter.service */
      "7I3w");
      /* harmony import */


      var _src_app_Model_Study_StudyPrototype__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @src/app/Model/Study/StudyPrototype */
      "hRBY");
      /* harmony import */


      var _src_app_Model_Study_Result_UserResultTupleDAO_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @src/app/Model/Study/Result/UserResultTupleDAO.service */
      "9rjs");
      /* harmony import */


      var _src_app_Model_Randomizing_RandomizingStrategies__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @src/app/Model/Randomizing/RandomizingStrategies */
      "TQet");
      /* harmony import */


      var _src_app_services_dialogs_confirmDialog_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @src/app/services/dialogs/confirmDialog.service */
      "Nj1j");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };

      var MyStudiesComponent = /*#__PURE__*/function () {
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
        function MyStudiesComponent(router, studywrapper, keyDataService, studyService, authService, csvService, resultService, confirmDialogService) {
          _classCallCheck(this, MyStudiesComponent);

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
        }
        /**
         * Initialisiert die AvailableStudiesComponent.
         */


        _createClass(MyStudiesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      if (!(this.authService.getUser().permission == 0)) {
                        _context16.next = 4;
                        break;
                      }

                      this.router.navigate(["dashboard"], {
                        replaceUrl: true
                      });
                      _context16.next = 6;
                      break;

                    case 4:
                      _context16.next = 6;
                      return this.getStudies();

                    case 6:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));
          }
          /**
           * Holt die vom Nutzer erstellten Studien.
           */

        }, {
          key: "getStudies",
          value: function getStudies() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              var _this14 = this;

              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      this.loading = true;
                      _context17.next = 3;
                      return this.keyDataService.getFromUserId(this.authService.getUser().id).then(function (keyDataResults) {
                        if (keyDataResults.length > 0) {
                          _this14.studies = keyDataResults;
                        } else {
                          _this14.studies = [];
                        }

                        _this14.loading = false;
                      });

                    case 3:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));
          }
          /**
           * Navigiert den Nutzer zur Studienerstellung-Ansicht, der jeweiligen ausgewählten Studie.
           * @param keyData KeyData sind die Schlüsselinformationen der ausgewählten Studie
           */

        }, {
          key: "onEditClick",
          value: function onEditClick(keyData) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
              var _this15 = this;

              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      _context18.next = 2;
                      return this.studyService.get(keyData.id).then(function (studyResult) {
                        _this15.studywrapper.study = studyResult;
                      });

                    case 2:
                      this.router.navigate(["studycreation/general-editing"], {
                        replaceUrl: true
                      });

                    case 3:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));
          }
          /**
           * Löscht die ausgewählte Studie aus der Datenbank.
           * @param keyData KeyData sind die Schlüsselinformationen der ausgewählten Studie
           */

        }, {
          key: "onDelete",
          value: function onDelete(keyData) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
              var _this16 = this;

              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      this.confirmDialogService.openDialog("Hiermit wird die Studie unwiderruflich gelöscht!").then(function (isConfirmed) {
                        return __awaiter(_this16, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
                          var _this17 = this;

                          return regeneratorRuntime.wrap(function _callee19$(_context19) {
                            while (1) {
                              switch (_context19.prev = _context19.next) {
                                case 0:
                                  if (!isConfirmed) {
                                    _context19.next = 3;
                                    break;
                                  }

                                  _context19.next = 3;
                                  return this.keyDataService["delete"](keyData.id).then(function (keyDataResult) {
                                    _this17.getStudies();
                                  });

                                case 3:
                                case "end":
                                  return _context19.stop();
                              }
                            }
                          }, _callee19, this);
                        }));
                      });

                    case 1:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
            }));
          }
          /**
           * Beendet eine veröffentlichte Studie des Nutzers.
           * @param keyData KeyData sind die Schlüsselinformationen der ausgewählten Studie
           */

        }, {
          key: "onEndClick",
          value: function onEndClick(keyData) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
              var _this18 = this;

              return regeneratorRuntime.wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      keyData.studyStatus = _src_app_Model_Study_StudyStatus__WEBPACK_IMPORTED_MODULE_8__["StudyStatus"].FINISHED;
                      _context21.next = 3;
                      return this.keyDataService.updateStudyState(keyData.id, _src_app_Model_Study_StudyStatus__WEBPACK_IMPORTED_MODULE_8__["StudyStatus"].FINISHED).then(function (result) {
                        if (result) {
                          _this18.getStudies();
                        }
                      });

                    case 3:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21, this);
            }));
          }
          /**
           * Navigiert den Nutzer zur Studienerstellung-Ansicht, um eine neue Studie anzulegen.
           */

        }, {
          key: "onNewClick",
          value: function onNewClick() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
              var _this19 = this;

              var user, keyData, study;
              return regeneratorRuntime.wrap(function _callee23$(_context23) {
                while (1) {
                  switch (_context23.prev = _context23.next) {
                    case 0:
                      if (this.creating) {
                        _context23.next = 10;
                        break;
                      }

                      this.creating = true;
                      _context23.next = 4;
                      return this.authService.getUser();

                    case 4:
                      user = _context23.sent;
                      keyData = new _src_app_Model_Study_KeyData__WEBPACK_IMPORTED_MODULE_4__["KeyData"](-1, user, _src_app_Model_Study_StudyStatus__WEBPACK_IMPORTED_MODULE_8__["StudyStatus"].CREATED, new _src_app_Model_Study_ShortDescription__WEBPACK_IMPORTED_MODULE_6__["ShortDescription"]("Neue Studie"), "Neue Studie", false, "Neue Studie");
                      study = new _src_app_Model_Study_StudyPrototype__WEBPACK_IMPORTED_MODULE_12__["StudyPrototype"](keyData);
                      study.randomStrategy = _src_app_Model_Randomizing_RandomizingStrategies__WEBPACK_IMPORTED_MODULE_14__["RandomizingStrategies"].STANDARD;
                      _context23.next = 10;
                      return this.studyService.save(study).then(function (result) {
                        return __awaiter(_this19, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
                          var _this20 = this;

                          return regeneratorRuntime.wrap(function _callee22$(_context22) {
                            while (1) {
                              switch (_context22.prev = _context22.next) {
                                case 0:
                                  if (!result) {
                                    _context22.next = 3;
                                    break;
                                  }

                                  _context22.next = 3;
                                  return this.studyService.get(result).then(function (studyResult) {
                                    _this20.studywrapper.study = studyResult;
                                    _this20.creating = false;

                                    _this20.router.navigate(["studycreation/general-editing"], {
                                      replaceUrl: true
                                    });
                                  });

                                case 3:
                                case "end":
                                  return _context22.stop();
                              }
                            }
                          }, _callee22, this);
                        }));
                      });

                    case 10:
                    case "end":
                      return _context23.stop();
                  }
                }
              }, _callee23, this);
            }));
          }
          /**
           * Konvertiert die Ergebnisse in eine .csv-Datei und legt diese auf dem Endsystem des Nutzers ab.
           * @param studyId number ist die ID der Studie, dessen Ergebnisse exportiert werden
           */

        }, {
          key: "getCSV",
          value: function getCSV(studyId) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
              var study, userResult;
              return regeneratorRuntime.wrap(function _callee24$(_context24) {
                while (1) {
                  switch (_context24.prev = _context24.next) {
                    case 0:
                      _context24.next = 2;
                      return this.studyService.get(studyId).then(function (studyResult) {
                        study = studyResult;
                      });

                    case 2:
                      _context24.next = 4;
                      return this.resultService.get(studyId).then(function (result) {
                        userResult = result;
                      });

                    case 4:
                      this.csvService.giveResultCSV(study, userResult);

                    case 5:
                    case "end":
                      return _context24.stop();
                  }
                }
              }, _callee24, this);
            }));
          }
          /**
           * Trägt alle Teilnehmer einer ausgewählten Studie in eine .csv-Datei ein und
           * legt diese auf dem Endsystem des Nutzers ab.
           * @param studyId number ist die ID der Studie, dessen Ergebnisse exportiert werden
           */

        }, {
          key: "getParticipants",
          value: function getParticipants(studyId) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
              var study, userResult;
              return regeneratorRuntime.wrap(function _callee25$(_context25) {
                while (1) {
                  switch (_context25.prev = _context25.next) {
                    case 0:
                      _context25.next = 2;
                      return this.studyService.get(studyId).then(function (studyResult) {
                        study = studyResult;
                      });

                    case 2:
                      _context25.next = 4;
                      return this.resultService.get(studyId).then(function (result) {
                        userResult = result;
                      });

                    case 4:
                      this.csvService.giveParticipantsCSV(study, userResult);

                    case 5:
                    case "end":
                      return _context25.stop();
                  }
                }
              }, _callee25, this);
            }));
          }
          /**
           * Setzt eine Studie zurück.
           * @param studyId number ist die ID der Studie, die zurückgesetzt wird
           */

        }, {
          key: "resetStudy",
          value: function resetStudy(studyId) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
              var _this21 = this;

              return regeneratorRuntime.wrap(function _callee27$(_context27) {
                while (1) {
                  switch (_context27.prev = _context27.next) {
                    case 0:
                      this.confirmDialogService.openDialog("Beim Zurücksetzen der Studie werden auch alle Studienergebnisse gelöscht!").then(function (isConfirmed) {
                        return __awaiter(_this21, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
                          var study;
                          return regeneratorRuntime.wrap(function _callee26$(_context26) {
                            while (1) {
                              switch (_context26.prev = _context26.next) {
                                case 0:
                                  if (!isConfirmed) {
                                    _context26.next = 9;
                                    break;
                                  }

                                  _context26.next = 3;
                                  return this.studyService.get(studyId).then(function (studyResult) {
                                    study = studyResult;
                                  });

                                case 3:
                                  study.keyData.studyStatus = _src_app_Model_Study_StudyStatus__WEBPACK_IMPORTED_MODULE_8__["StudyStatus"].CREATED;
                                  _context26.next = 6;
                                  return this.keyDataService["delete"](study.keyData.id);

                                case 6:
                                  _context26.next = 8;
                                  return this.studyService.save(study);

                                case 8:
                                  this.getStudies();

                                case 9:
                                case "end":
                                  return _context26.stop();
                              }
                            }
                          }, _callee26, this);
                        }));
                      });

                    case 1:
                    case "end":
                      return _context27.stop();
                  }
                }
              }, _callee27, this);
            }));
          }
          /**
           * Veröffentlicht eine ausgewählte Studie.
           * @param keyData KeyData sind die Schlüsselinformationen der ausgewählten Studie
           */

        }, {
          key: "publish",
          value: function publish(keyData) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
              var _this22 = this;

              return regeneratorRuntime.wrap(function _callee28$(_context28) {
                while (1) {
                  switch (_context28.prev = _context28.next) {
                    case 0:
                      keyData.studyStatus = _src_app_Model_Study_StudyStatus__WEBPACK_IMPORTED_MODULE_8__["StudyStatus"].PUBLISHED;
                      _context28.next = 3;
                      return this.keyDataService.updateStudyState(keyData.id, _src_app_Model_Study_StudyStatus__WEBPACK_IMPORTED_MODULE_8__["StudyStatus"].PUBLISHED).then(function (result) {
                        if (result) {
                          _this22.getStudies();
                        }
                      });

                    case 3:
                    case "end":
                      return _context28.stop();
                  }
                }
              }, _callee28, this);
            }));
          }
        }]);

        return MyStudiesComponent;
      }();

      MyStudiesComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _src_app_services_study_wrapper_study_wrapper_service__WEBPACK_IMPORTED_MODULE_10__["StudyWrapperService"]
        }, {
          type: _src_app_Model_Study_KeyDataDAO_service__WEBPACK_IMPORTED_MODULE_5__["KeyDataDao"]
        }, {
          type: _src_app_Model_Study_StudyPrototypeDAO_service__WEBPACK_IMPORTED_MODULE_7__["StudyPrototypeDAO"]
        }, {
          type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]
        }, {
          type: _src_app_Model_Study_CSVConverter_csvconverter_service__WEBPACK_IMPORTED_MODULE_11__["CSVConverter"]
        }, {
          type: _src_app_Model_Study_Result_UserResultTupleDAO_service__WEBPACK_IMPORTED_MODULE_13__["UserResultTupleDAO"]
        }, {
          type: _src_app_services_dialogs_confirmDialog_service__WEBPACK_IMPORTED_MODULE_15__["ConfirmDialogService"]
        }];
      };

      MyStudiesComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-my-studies',
        template: _raw_loader_my_studies_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_my_studies_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })
      /**
       * Die MyStudiesComponent blendet dem Nutzer alle Studien ein, welcher er selbst erstellt hat.
       * In der "Meine-Studien"-Ansicht kann der Nutzer seine eigenen Studien bearbeiten, veröffentlichen,
       * beenden und die Ergebnisse einsehen, sowie exportieren.
       */
      , __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _src_app_services_study_wrapper_study_wrapper_service__WEBPACK_IMPORTED_MODULE_10__["StudyWrapperService"], _src_app_Model_Study_KeyDataDAO_service__WEBPACK_IMPORTED_MODULE_5__["KeyDataDao"], _src_app_Model_Study_StudyPrototypeDAO_service__WEBPACK_IMPORTED_MODULE_7__["StudyPrototypeDAO"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"], _src_app_Model_Study_CSVConverter_csvconverter_service__WEBPACK_IMPORTED_MODULE_11__["CSVConverter"], _src_app_Model_Study_Result_UserResultTupleDAO_service__WEBPACK_IMPORTED_MODULE_13__["UserResultTupleDAO"], _src_app_services_dialogs_confirmDialog_service__WEBPACK_IMPORTED_MODULE_15__["ConfirmDialogService"]])], MyStudiesComponent);
      /***/
    },

    /***/
    "BfXG":
    /*!*************************************!*\
      !*** ./src/app/Model/User/EMail.ts ***!
      \*************************************/

    /*! exports provided: EMail */

    /***/
    function BfXG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EMail", function () {
        return EMail;
      });
      /**
       *Die public class Email definiert eine E-Mail Adresse
       */


      var EMail = /*#__PURE__*/function () {
        /**
         * Hier wird eine neue E-Mail erstellt und ihre Gültigkeit sichergestellt.
         * @param email
         */
        function EMail(email) {
          _classCallCheck(this, EMail);

          if (this.ensureValidation(email)) {
            this._email = email;
          }
        }

        _createClass(EMail, [{
          key: "ensureValidation",
          value: function ensureValidation(email) {
            if (!email) {
              throw new Error("Email kann nicht null oder leer sein.");
            }

            return true;
          }
        }, {
          key: "email",
          get: function get() {
            return this._email;
          }
          /**
           * Das Attribut email wird gesetzt und ihre Gültigkeit sichergestellt.
           * @param email
           */
          ,
          set: function set(email) {
            if (this.ensureValidation(email)) {
              this._email = email;
            }
          }
        }]);

        return EMail;
      }();
      /***/

    },

    /***/
    "E2f4":
    /*!*****************************************************!*\
      !*** ./src/app/services/storage/storage.service.ts ***!
      \*****************************************************/

    /*! exports provided: StorageService */

    /***/
    function E2f4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StorageService", function () {
        return StorageService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var StorageService = /*#__PURE__*/function () {
        /**
         * Standardkonstruktor eines Services
         */
        function StorageService() {
          _classCallCheck(this, StorageService);
        }
        /**
         * Gibt das Item, welches den Schlüssel hat, aus dem lokalen Speicher zurück.
         * @param key string ist der Schlüssel des Items
         * @returns string des Items
         * @throws Error sobald das zurückgegebene Item null ist
         */


        _createClass(StorageService, [{
          key: "get",
          value: function get(key) {
            var item = localStorage.getItem(key);

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

        }, {
          key: "set",
          value: function set(key, data) {
            if (key == null || data == null) {
              throw new Error("Key or data is null or undefined.");
            }

            localStorage.setItem(key, data);
          }
          /**
           * Löscht alle abgelegten Items innerhalb des lokalen Speichers.
           */

        }, {
          key: "clear",
          value: function clear() {
            localStorage.clear();
          }
          /**
           * Löscht ein Item, welches den Schlüssel hat, aus dem lokalen Speicher.
           * @param key String ist der Schlüssel des Items
           */

        }, {
          key: "remove",
          value: function remove(key) {
            localStorage.removeItem(key);
          }
        }]);

        return StorageService;
      }();

      StorageService.ctorParameters = function () {
        return [];
      };

      StorageService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      })
      /**
       * Der StorageService verwaltet die Speicherung, Bearbeitung und Löschen von Items, welche
       * im lokalen Speicher der Sitzung abgelegt werden.
       */
      , __metadata("design:paramtypes", [])], StorageService);
      /***/
    },

    /***/
    "FerX":
    /*!*************************************************!*\
      !*** ./src/app/Model/Study/ShortDescription.ts ***!
      \*************************************************/

    /*! exports provided: ShortDescription */

    /***/
    function FerX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShortDescription", function () {
        return ShortDescription;
      });
      /**
       * Die Konstante definiert, wie lang in Zeichen der String einer ShortDescription sein darf
       */


      var maxLength = 200;
      /**
       * ShortDescription enthält die Kurzbeschreibung, die in der Studienübersicht angezeigt wird
       */

      var ShortDescription = /*#__PURE__*/function () {
        /**
         * Erzeugt eine Kurzbeschreibung dabei kann wahlweise direkt der Text mitgegeben werden,
         * der in der Kurzbeschreibung stehen soll.
         * @param text
         */
        function ShortDescription(text) {
          _classCallCheck(this, ShortDescription);

          if (this.ensureTextValidation(text)) {
            this._text = text;
          }
        }

        _createClass(ShortDescription, [{
          key: "ensureTextValidation",
          value: function ensureTextValidation(toValidate) {
            if (toValidate.length > maxLength) {
              return false;
            }

            return true;
          }
        }, {
          key: "text",
          get: function get() {
            return this._text;
          }
          /**
           * Setzt den Text der Kurzbeschreibung und prüft ob die Beschreibung kürzer als die maximal erlaubte Länge ist
           * @param text Text der Kurzbeschreibung
           */
          ,
          set: function set(text) {
            if (this.ensureTextValidation(text)) {
              this._text = text;
            }
          }
        }]);

        return ShortDescription;
      }();
      /***/

    },

    /***/
    "GhTv":
    /*!**********************************************************************************!*\
      !*** ./src/app/dashboard/participated-studies/participated-studies.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: ParticipatedStudiesComponent */

    /***/
    function GhTv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ParticipatedStudiesComponent", function () {
        return ParticipatedStudiesComponent;
      });
      /* harmony import */


      var _raw_loader_participated_studies_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./participated-studies.component.html */
      "av4J");
      /* harmony import */


      var _participated_studies_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./participated-studies.component.css */
      "X8SS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var ParticipatedStudiesComponent = /*#__PURE__*/function () {
        function ParticipatedStudiesComponent() {
          _classCallCheck(this, ParticipatedStudiesComponent);
        }

        _createClass(ParticipatedStudiesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "exampleStudieListItems",
          get: function get() {
            return this._exampleStudieListItems;
          }
        }]);

        return ParticipatedStudiesComponent;
      }();

      ParticipatedStudiesComponent.ctorParameters = function () {
        return [];
      };

      ParticipatedStudiesComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-participated-studies',
        template: _raw_loader_participated_studies_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_participated_studies_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [])], ParticipatedStudiesComponent);
      /***/
    },

    /***/
    "H/d9":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function HD9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mat-toolbar>\r\n    <img src=\"assets/images/Icon.png\" style=\"height: 4vh;\" />\r\n    <span>&nbsp;&nbsp;VibroStudies</span>\r\n    <span class=\"flexExpand\"></span>\r\n    <a class=\"helpButton\" mat-flat-button href=\"https://www.youtube.com/watch?v=RfdquOH7AxI\" target=\"_blank\">\r\n        <mat-icon>help</mat-icon>&nbsp;Hilfe\r\n    </a>\r\n</mat-toolbar>\r\n<mat-sidenav-container>\r\n    <mat-sidenav opened mode=\"side\">\r\n        <mat-nav-list><br>\r\n            <div style=\"margin-left: 15px;\">\r\n                <h2>Hallo {{ this.authService.getUser().firstName }}!&nbsp;<mat-icon\r\n                        style=\"position:relative;top: 5px;\">emoji_people</mat-icon>\r\n                </h2>\r\n            </div>\r\n            <mat-divider></mat-divider>\r\n            <a mat-list-item [routerLink]=\"['profile']\">\r\n                <mat-icon>person</mat-icon>&nbsp;Profil\r\n            </a>\r\n            <div *ngIf=\"this.authService.getUser().permission != 0\">\r\n                <mat-divider></mat-divider>\r\n                <a mat-list-item [routerLink]=\"['my-studies']\">\r\n                    <mat-icon>question_answer</mat-icon>&nbsp;Meine Studien\r\n                </a>\r\n            </div>\r\n            <mat-divider></mat-divider>\r\n\r\n            <div class=\"bottomrow\">\r\n                <mat-divider></mat-divider>\r\n                <a mat-list-item (click)=\"logout()\" class>\r\n                    <mat-icon>exit_to_app</mat-icon>&nbsp;Abmelden\r\n                </a>\r\n            </div>\r\n\r\n        </mat-nav-list>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content>\r\n        <router-outlet></router-outlet>\r\n        <br><br>\r\n    </mat-sidenav-content>\r\n</mat-sidenav-container>";
      /***/
    },

    /***/
    "HEL/":
    /*!************************************************************!*\
      !*** ./src/app/Model/Study/StudyObjects/SectionElement.ts ***!
      \************************************************************/

    /*! exports provided: SectionElement */

    /***/
    function HEL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SectionElement", function () {
        return SectionElement;
      });
      /* harmony import */


      var _AbstractStudyObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./AbstractStudyObject */
      "Q9Pm");
      /**
       * Ein SectionElement bezeichnet einen allgemeinen Container, in den man,
       * abhängig von der konkreten Unterklasse, nur bestimmte Studienobjekte einfügen kann.
       */


      var SectionElement = /*#__PURE__*/function (_AbstractStudyObject_3) {
        _inherits(SectionElement, _AbstractStudyObject_3);

        var _super4 = _createSuper(SectionElement);

        /**
         * Ein Attribut, was nicht als Parameter übergeben wird, ist studyObjects. Dieses ist eine
         * AbstractStudyObjectProduct-Liste, das die vom Studienleiter in das Section-Element eingefügten Studienobjekte enthält
         *
         * @param name ist der Name des Section-Elements
         * @param fixed entscheidet, ob das Section-Element eine feste Position in einer Section hat oder die
         * Position von Studieninstanz zu Studieninstanz mit Hilfe von Randomisierung variiert
         */
        function SectionElement(id, name, randomStrategy, studyObjects, verifier) {
          var _this23;

          _classCallCheck(this, SectionElement);

          _this23 = _super4.call(this, id, name);
          /**
           * Das Attribut gibt an, ob ein SectionElement für den Studienteilnehmer überspringbar sein soll.
           */

          _this23._skippable = false;
          /**
           * In dem Attribut sind mittels ID Referenzen auf jene Elemente gespeichert, die innerhalb eines SectionElements liegen.
           */

          _this23._studyObjects = [];
          /**
           * Das Attribut gibt an, ob ein SectionElement in die Ergebnisauswertung miteinbezogen wird.
           */

          _this23._resultRelevant = true;

          if (studyObjects == null) {
            _this23._studyObjects = [];
          } else {
            _this23._studyObjects = studyObjects;
          }

          _this23._verifier = verifier;
          _this23._randomStrategy = randomStrategy;
          return _this23;
        }

        _createClass(SectionElement, [{
          key: "swapStudyObject",

          /**
           * Die Methode tauscht ein StudyObject an den angegebenen Index.
           * @Deprecated
           * @param oldIndex ist der Index, an dem das StudyObject liegt.
           * @param newIndex ist der gewünschte Index, an dem das StudyObject liegen soll.
           * @throws RangeError, wenn der Index außerhalb des Bereiches der Liste war.
           */
          value: function swapStudyObject(oldIndex, newIndex) {
            var highestIndex = this.studyObjects.length - 1;

            if (oldIndex > highestIndex || newIndex > highestIndex || oldIndex < 0 || newIndex < 0) {
              throw new RangeError("Index liegt außerhalb des Bereich.");
            }

            var temp = this._studyObjects[oldIndex];
            this._studyObjects[oldIndex] = this._studyObjects[newIndex];
            this._studyObjects[newIndex] = temp;
          }
          /**
           * Löscht ein StudyObject.
           * @Deprecated
           * @param id ist die ID des zu löschenden Objektes.
           */

        }, {
          key: "removeStudyObject",
          value: function removeStudyObject(id) {
            this.studyObjects = this.studyObjects.filter(function (element) {
              return element.ID !== id;
            });
          }
          /**
           * Fügt ein StudyObject hinzu.
           * @Deprecated
           * @param studyObject ist die Referenz auf das StudyObject, das hinzugefügt werden soll.
           * @param index ist die Stelle, an die das Objekt hinzugefügt werden soll. Bei null wird es am Ende der Liste hinzugefügt.
           */

        }, {
          key: "addStudyObject",
          value: function addStudyObject(studyObject, index) {
            if (index == null) {
              this.studyObjects.push(studyObject);
            } else if (this.studyObjects == null && index === 0) {
              this.studyObjects.push(studyObject);
            } else if (this.studyObjects == null && index !== 0) {
              throw new Error("Index des Section Elements fehlerhaft!");
            } else if (0 <= index && index <= this.studyObjects.length) {
              this.studyObjects.splice(index, 0, studyObject);
            } else {
              throw new Error("Index des Section Elements fehlerhaft!");
            }
          }
        }, {
          key: "verifier",
          get: function get() {
            return this._verifier;
          },
          set: function set(verifier) {
            this._verifier = verifier;
          }
        }, {
          key: "skippable",
          get: function get() {
            return this._skippable;
          },
          set: function set(skippable) {
            if (skippable == null) {
              throw new Error("Skippable darf nicht null sein.");
            }

            this._skippable = skippable;
          }
        }, {
          key: "studyObjects",
          get: function get() {
            return this._studyObjects;
          },
          set: function set(studyObjects) {
            this._studyObjects = studyObjects;
          }
        }, {
          key: "randomStrategy",
          get: function get() {
            return this._randomStrategy;
          },
          set: function set(randomStrategy) {
            if (randomStrategy == null) {
              throw new Error("RandomStrategy darf nicht null sein.");
            }

            this._randomStrategy = randomStrategy;
          }
        }, {
          key: "resultRelevant",
          get: function get() {
            return this._resultRelevant;
          },
          set: function set(resultRelevant) {
            if (resultRelevant == null) {
              throw new Error("ResultRelevant darf nicht null sein.");
            }

            this._resultRelevant = resultRelevant;
          }
        }]);

        return SectionElement;
      }(_AbstractStudyObject__WEBPACK_IMPORTED_MODULE_0__["AbstractStudyObject"]);
      /***/

    },

    /***/
    "HfNz":
    /*!***********************************************!*\
      !*** ./src/app/Model/Study/ReferenceTuple.ts ***!
      \***********************************************/

    /*! exports provided: ReferenceTuple */

    /***/
    function HfNz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReferenceTuple", function () {
        return ReferenceTuple;
      });
      /**
       * Ein ReferenceTuple liegt in einer Container Objekt und speichert die ID des Elements,
       * welches dem Container zugeordnet werden soll, sowie die Information, ob das entspechende
       * Objekt bei einer Randomisierung des Containers seine Position behalten soll.
       */


      var ReferenceTuple = /*#__PURE__*/function () {
        function ReferenceTuple(ID, isFixed) {
          _classCallCheck(this, ReferenceTuple);

          this._ID = ID;
          this._isFixed = isFixed;
        }

        _createClass(ReferenceTuple, [{
          key: "ID",
          get: function get() {
            return this._ID;
          },
          set: function set(ID) {
            this._ID = ID;
          }
        }, {
          key: "isFixed",
          get: function get() {
            return this._isFixed;
          },
          set: function set(isFixed) {
            this._isFixed = isFixed;
          }
        }]);

        return ReferenceTuple;
      }();
      /***/

    },

    /***/
    "JSb+":
    /*!***********************************************************!*\
      !*** ./src/app/studycreation/studycreation.component.css ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function JSb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "mat-sidenav-container {\r\n    height: 94vh;\r\n}\r\n\r\nmat-sidenav-content {\r\n    padding: 15px;\r\n}\r\n\r\nmat-sidenav {\r\n    width: 13vw;\r\n}\r\n\r\nmat-toolbar {\r\n    height: 6vh;\r\n}\r\n\r\n.bottomrow {\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 100%;\r\n}\r\n\r\n.flexExpand {\r\n    flex: 1 1 auto;\r\n  }\r\n\r\n.helpButton {\r\n    background-color: #3e753b;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZHljcmVhdGlvbi9zdHVkeWNyZWF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsT0FBTztJQUNQLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7RUFDaEI7O0FBRUY7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9zdHVkeWNyZWF0aW9uL3N0dWR5Y3JlYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDk0dmg7XHJcbn1cclxuXHJcbm1hdC1zaWRlbmF2LWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxubWF0LXNpZGVuYXYge1xyXG4gICAgd2lkdGg6IDEzdnc7XHJcbn1cclxuXHJcbm1hdC10b29sYmFyIHtcclxuICAgIGhlaWdodDogNnZoO1xyXG59XHJcblxyXG4uYm90dG9tcm93IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZsZXhFeHBhbmQge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgfVxyXG4gIFxyXG4uaGVscEJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2U3NTNiO1xyXG59Il19 */";
      /***/
    },

    /***/
    "JUn6":
    /*!*********************************************************!*\
      !*** ./src/app/dashboard/profile/profile.component.css ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function JUn6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".full-page {\r\n    height: 100%;\r\n    display: flex;\r\n  }\r\n  \r\n  .login-card {\r\n    margin: auto;\r\n    width: 350px;\r\n  }\r\n  \r\n  .login-field {\r\n    width: 100%;\r\n  }\r\n  \r\n  mat-card {\r\n    padding: 50px;\r\n}\r\n  \r\n  .header {\r\n  font-size: 18px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFlBQVk7SUFDWixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUY7SUFDSSxhQUFhO0FBQ2pCOztFQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXBhZ2Uge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luLWNhcmQge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gIH1cclxuICBcclxuICAubG9naW4tZmllbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxubWF0LWNhcmQge1xyXG4gICAgcGFkZGluZzogNTBweDtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59Il19 */";
      /***/
    },

    /***/
    "Jz4F":
    /*!***********************************************!*\
      !*** ./src/app/Model/User/UserDao.service.ts ***!
      \***********************************************/

    /*! exports provided: UserDao */

    /***/
    function Jz4F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserDao", function () {
        return UserDao;
      });
      /* harmony import */


      var _User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./User */
      "rPx+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _EMail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./EMail */
      "BfXG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _src_app_app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @src/app/app-settings */
      "24n0");
      /* harmony import */


      var _src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @src/app/services/auth/auth.service */
      "9ans");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };

      var UserDao = /*#__PURE__*/function () {
        function UserDao(http, authService) {
          _classCallCheck(this, UserDao);

          this.http = http;
          this.authService = authService;
          this.userURL = _src_app_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].baseURL + "User/";
        }
        /**
         * Die Methode gibt asynchron ein User Objekt zurück, welches eindeutig durch die id identifiziert wird.
         * @param id number ist die ID des Users, der aus der Datenbank geholt werden soll
         */


        _createClass(UserDao, [{
          key: "get",
          value: function get(id) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee29() {
              var user;
              return regeneratorRuntime.wrap(function _callee29$(_context29) {
                while (1) {
                  switch (_context29.prev = _context29.next) {
                    case 0:
                      _context29.next = 2;
                      return this.http.post(this.userURL + id + "/", {
                        token: this.authService.getAuthToken()
                      }).toPromise().then(function (data) {
                        user = new _User__WEBPACK_IMPORTED_MODULE_0__["User"](data.id, data.firstName, data.lastName, data.userPermission, new _EMail__WEBPACK_IMPORTED_MODULE_2__["EMail"](data.email));
                      });

                    case 2:
                      return _context29.abrupt("return", user);

                    case 3:
                    case "end":
                      return _context29.stop();
                  }
                }
              }, _callee29, this);
            }));
          }
          /**
           * Prüft, ob das gegebene Passwort zum Passwort des User in der Datenbank passt
           * @param userId number ID des User
           * @param password string Passwort das zu prüfen ist
           */

        }, {
          key: "checkPassword",
          value: function checkPassword(userId, password) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee30() {
              var result;
              return regeneratorRuntime.wrap(function _callee30$(_context30) {
                while (1) {
                  switch (_context30.prev = _context30.next) {
                    case 0:
                      result = false;
                      _context30.next = 3;
                      return this.http.post(_src_app_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].baseURL + "CheckPassword/", {
                        id: userId,
                        password: password,
                        token: this.authService.getAuthToken()
                      }).toPromise().then(function (response) {
                        if (response) {
                          result = true;
                        }
                      });

                    case 3:
                      return _context30.abrupt("return", result);

                    case 4:
                    case "end":
                      return _context30.stop();
                  }
                }
              }, _callee30, this);
            }));
          }
          /**
           * Die Methode speichert asynchron object in einer Datenbank, welches nachdem es gespeichert wurde wieder mit get aufgerufen werden kann.
           * @param object User ist der Nutzer, der gespeichert werden soll
           * @param oldPassword string altes Passwort des User
           * @param newPassword string neues Passwort des User
           */

        }, {
          key: "save",
          value: function save(object, oldPassword, newPassword) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee31() {
              var result;
              return regeneratorRuntime.wrap(function _callee31$(_context31) {
                while (1) {
                  switch (_context31.prev = _context31.next) {
                    case 0:
                      result = false;
                      _context31.next = 3;
                      return this.http.post(_src_app_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].baseURL + "SaveUser/", {
                        id: object.id,
                        firstName: object.firstName,
                        lastName: object.lastName,
                        oldPassword: oldPassword,
                        newPassword: newPassword,
                        email: object.email.email
                      }).toPromise().then(function (data) {
                        if (data) {
                          result = true;
                        }
                      });

                    case 3:
                      return _context31.abrupt("return", result);

                    case 4:
                    case "end":
                      return _context31.stop();
                  }
                }
              }, _callee31, this);
            }));
          }
          /**
           * Löscht das User Objekt object aus der Datenbank.
           * @param object User ist der Nutzer, der gelöscht werden soll
           */

        }, {
          key: "delete",
          value: function _delete(object) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee32() {
              var success;
              return regeneratorRuntime.wrap(function _callee32$(_context32) {
                while (1) {
                  switch (_context32.prev = _context32.next) {
                    case 0:
                      success = false;
                      _context32.next = 3;
                      return this.http.post(_src_app_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].baseURL + "DeleteUser/" + object.id + "/", {
                        token: this.authService.getAuthToken()
                      }).toPromise().then(function (data) {
                        if (data) {
                          success = true;
                        }
                      });

                    case 3:
                      return _context32.abrupt("return", success);

                    case 4:
                    case "end":
                      return _context32.stop();
                  }
                }
              }, _callee32, this);
            }));
          }
        }]);

        return UserDao;
      }();

      UserDao.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }];
      };

      UserDao = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: "root"
      })
      /**
       * Das UserDAO ist für den Zugriff auf die User Objekte in der Datenbank verantwortlich.
       */
      , __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])], UserDao);
      /***/
    },

    /***/
    "MEPm":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/dialogs/dialog-template.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function MEPm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1 mat-dialog-title>Bist du dir sicher?</h1>\r\n<div mat-dialog-content>\r\n  <p>{{data.message}}</p>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onCancel()\">Abbrechen</button>\r\n  <button mat-button (click)=\"onConfirm()\">Bestätigen</button>\r\n</div>";
      /***/
    },

    /***/
    "MsGT":
    /*!******************************************************************************!*\
      !*** ./src/app/Model/Study/StudyObjects/Questions/MultipleChoiceQuestion.ts ***!
      \******************************************************************************/

    /*! exports provided: MultipleChoiceQuestion */

    /***/
    function MsGT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MultipleChoiceQuestion", function () {
        return MultipleChoiceQuestion;
      });
      /* harmony import */


      var _AbstractQuestion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./AbstractQuestion */
      "zfOo");
      /**
       * Ein MultipleChoiceQuestion ist ein Fragenobjekt, das sowohl mehrere Antworten
       * anbieten als auch mehrere Antworten akzeptieren kann
       */


      var MultipleChoiceQuestion = /*#__PURE__*/function (_AbstractQuestion__WE) {
        _inherits(MultipleChoiceQuestion, _AbstractQuestion__WE);

        var _super5 = _createSuper(MultipleChoiceQuestion);

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
        function MultipleChoiceQuestion(id, name, questionText, displayName, answerOptions, maxChoices) {
          var _thisSuper, _this24;

          _classCallCheck(this, MultipleChoiceQuestion);

          _this24 = _super5.call(this, id, name, questionText, displayName);
          _this24.objectType = "MultipleChoiceQuestion";
          _this24.maxChoices = maxChoices;
          _this24.answerOptions = answerOptions;

          _set((_thisSuper = _assertThisInitialized(_this24), _getPrototypeOf(MultipleChoiceQuestion.prototype)), "answer", [], _thisSuper, true);

          return _this24;
        }

        _createClass(MultipleChoiceQuestion, [{
          key: "maxChoices",
          get: function get() {
            return this._maxChoices;
          },
          set: function set(maxChoices) {
            if (maxChoices == null) {
              throw new Error("MaxChoices darf nicht null sein.");
            }

            if (maxChoices < 1) {
              throw new Error("Es muss mindestens eine Antwort angegeben werden können");
            }

            this._maxChoices = maxChoices;
          }
        }, {
          key: "answerOptions",
          get: function get() {
            return this._answerOptions;
          },
          set: function set(answerOptions) {
            this._answerOptions = answerOptions;
          }
        }]);

        return MultipleChoiceQuestion;
      }(_AbstractQuestion__WEBPACK_IMPORTED_MODULE_0__["AbstractQuestion"]);
      /***/

    },

    /***/
    "Nj1j":
    /*!***********************************************************!*\
      !*** ./src/app/services/dialogs/confirmDialog.service.ts ***!
      \***********************************************************/

    /*! exports provided: ConfirmDialogService, DialogTemplate */

    /***/
    function Nj1j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmDialogService", function () {
        return ConfirmDialogService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DialogTemplate", function () {
        return DialogTemplate;
      });
      /* harmony import */


      var _raw_loader_dialog_template_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./dialog-template.html */
      "MEPm");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };

      var ConfirmDialogService = /*#__PURE__*/function () {
        function ConfirmDialogService(dialog) {
          _classCallCheck(this, ConfirmDialogService);

          this.dialog = dialog;
        }

        _createClass(ConfirmDialogService, [{
          key: "openDialog",
          value: function openDialog(msg) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee33() {
              var isConfirmed, dialogRef;
              return regeneratorRuntime.wrap(function _callee33$(_context33) {
                while (1) {
                  switch (_context33.prev = _context33.next) {
                    case 0:
                      isConfirmed = false;
                      dialogRef = this.dialog.open(DialogTemplate, {
                        data: {
                          message: msg
                        }
                      });
                      _context33.next = 4;
                      return dialogRef.afterClosed().toPromise().then(function (result) {
                        isConfirmed = result;
                      });

                    case 4:
                      return _context33.abrupt("return", isConfirmed);

                    case 5:
                    case "end":
                      return _context33.stop();
                  }
                }
              }, _callee33, this);
            }));
          }
        }]);

        return ConfirmDialogService;
      }();

      ConfirmDialogService.ctorParameters = function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
        }];
      };

      ConfirmDialogService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])], ConfirmDialogService);

      var DialogTemplate = /*#__PURE__*/function () {
        function DialogTemplate(dialogRef, data) {
          _classCallCheck(this, DialogTemplate);

          this.dialogRef = dialogRef;
          this.data = data;
        }

        _createClass(DialogTemplate, [{
          key: "onCancel",
          value: function onCancel() {
            this.dialogRef.close(false);
          }
        }, {
          key: "onConfirm",
          value: function onConfirm() {
            this.dialogRef.close(true);
          }
        }]);

        return DialogTemplate;
      }();

      DialogTemplate.ctorParameters = function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
          }]
        }];
      };

      DialogTemplate = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dialog-template',
        template: _raw_loader_dialog_template_html__WEBPACK_IMPORTED_MODULE_0__["default"]
      }), __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])], DialogTemplate);
      /***/
    },

    /***/
    "OOnH":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function OOnH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"full-page\">\r\n    <mat-card class=\"login-card\">\r\n        <mat-card-title style=\"text-align: center;\">\r\n            <img src=\"../../assets/images/Icon.png\" width=\"100\"><br><br>\r\n            VibroStudies Registrierung\r\n        </mat-card-title>\r\n        <mat-card-content>\r\n            <mat-form-field class=\"login-field\">\r\n                <input matInput placeholder=\"Vorname\" name=\"firstName\" [(ngModel)]=\"firstName\" type=\"text\"\r\n                    (keyup.enter)=\"register()\" />\r\n            </mat-form-field>\r\n            <mat-form-field class=\"login-field\">\r\n                <input matInput placeholder=\"Nachname\" name=\"lastName\" [(ngModel)]=\"lastName\" type=\"text\"\r\n                    (keyup.enter)=\"register()\" />\r\n            </mat-form-field>\r\n            <mat-form-field class=\"login-field\">\r\n                <input matInput placeholder=\"E-Mail\" name=\"email\" [(ngModel)]=\"email\" type=\"email\"\r\n                    (keyup.enter)=\"register()\" />\r\n            </mat-form-field>\r\n            <mat-form-field class=\"login-field\">\r\n                <input matInput placeholder=\"Passwort\" name=\"password\" [(ngModel)]=\"password\" type=\"password\"\r\n                    (keyup.enter)=\"register()\" />\r\n            </mat-form-field>\r\n            <mat-form-field class=\"login-field\">\r\n                <input matInput placeholder=\"Passwort wiederholen\" name=\"password\" [(ngModel)]=\"confirmPassword\"\r\n                    type=\"password\" (keyup.enter)=\"register()\" />\r\n            </mat-form-field>\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n        <div style=\"text-align: center\">\r\n            <button mat-raised-button class=\"greenButton\" (click)=\"register()\" type=\"submit\">\r\n                Registrieren\r\n            </button>\r\n        </div>\r\n        </mat-card-actions>\r\n        <div style=\"text-align: center\">\r\n            <button mat-flat-button class=\"redButton\" [routerLink]=\"['../login']\">Zurück</button>\r\n        </div>\r\n    </mat-card>\r\n</div>";
      /***/
    },

    /***/
    "OmuS":
    /*!***************************************************!*\
      !*** ./src/app/guards/role/role-guard.service.ts ***!
      \***************************************************/

    /*! exports provided: RoleGuardService */

    /***/
    function OmuS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoleGuardService", function () {
        return RoleGuardService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @src/app/services/auth/auth.service */
      "9ans");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var RoleGuardService = /*#__PURE__*/function () {
        /**
         * Konstruktor des RoleGuardService. Darin werden sämtliche Services initialisert,
         * die für den RoleGuardService gebraucht werden.
         * @param authService AuthService Singleton, ist für das Aufrufen des registrierten Nutzers zuständig
         * @param router Router Singleton, zum Routen des Pfads nach Eintritt eines Ereignisses
         */
        function RoleGuardService(router, authService) {
          _classCallCheck(this, RoleGuardService);

          this.router = router;
          this.authService = authService;
        }
        /**
         * Die vom Interface zu implementierende Methode, welche den Guard aktiviert oder deaktiviert.
         * @param route ActivatedRouteSnapshot ist der aktuellen Zustand der aktivierten Route
         * @param state RouterSnapshot ist der aktuelle Zustand des Routers
         * @returns Promise<boolean>, je nachdem ob der Nutzer die benötigte Rolle für das Aufrufen der Ansicht besitzt oder nicht.
         */


        _createClass(RoleGuardService, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            if (!this.authService.getUser().permission >= route.data.expectedRole) {
              this.router.navigate(["login"], {
                replaceUrl: true
              });
              return false;
            }

            return true;
          }
        }]);

        return RoleGuardService;
      }();

      RoleGuardService.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      };

      RoleGuardService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      })
      /**
       * Der RoleGuardService ist ein Guard, also für die Navigation der Route innerhalb der Anwendung zuständig.
       * Dieser Guard ist für die Identifikation der Rolle des Nutzers zuständig (CREATOR, PARTICIPANT, ADMIN).
       * Dazu verwendet es das CanActivate Interface, welches von jedem anderen Guard verwendet wird.
       * Nur wenn alle Guards wahr sind, kann auf die gewünschte Ansicht navigiert werden, sonst nicht.
       */
      , __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])], RoleGuardService);
      /***/
    },

    /***/
    "Oy4E":
    /*!*******************************************************!*\
      !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: DashboardRoutingModule */

    /***/
    function Oy4E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function () {
        return DashboardRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _dashboard_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dashboard.routes */
      "X8dr");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var DashboardRoutingModule = function DashboardRoutingModule() {
        _classCallCheck(this, DashboardRoutingModule);
      };

      DashboardRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_dashboard_routes__WEBPACK_IMPORTED_MODULE_2__["routes"])],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      })], DashboardRoutingModule);
      /***/
    },

    /***/
    "Q2gg":
    /*!*****************************************************************************!*\
      !*** ./src/app/dashboard/available-studies/available-studies.component.css ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function Q2gg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9hdmFpbGFibGUtc3R1ZGllcy9hdmFpbGFibGUtc3R1ZGllcy5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "Q9Pm":
    /*!*****************************************************************!*\
      !*** ./src/app/Model/Study/StudyObjects/AbstractStudyObject.ts ***!
      \*****************************************************************/

    /*! exports provided: AbstractStudyObject */

    /***/
    function Q9Pm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbstractStudyObject", function () {
        return AbstractStudyObject;
      });
      /**
       * Eine abstrakte Oberklasse für alle Elemente, die eine Studie beinhaltet.
       */


      var AbstractStudyObject = /*#__PURE__*/function () {
        /**
         * @param id ist die eindeutige Identifikationsnummer des Studienobjekts
         * @param fixed entscheidet, ob das Studienobjekt innerhalb eines Section-Elements eine feste Position hat oder die
         * Position von Studieninstanz zu Studieninstanz mit Hilfe von Randomisierung variiert
         */
        function AbstractStudyObject(id, name) {
          _classCallCheck(this, AbstractStudyObject);

          if (id == null) {
            throw new Error("Id darf nicht null sein.");
          }

          this._id = id;
          this._name = name;
        }

        _createClass(AbstractStudyObject, [{
          key: "id",
          get: function get() {
            return this._id;
          },
          set: function set(id) {
            if (id == null) {
              throw new Error("Id darf nicht null sein.");
            }

            this._id = id;
          }
        }, {
          key: "name",
          get: function get() {
            return this._name;
          },
          set: function set(name) {
            this._name = name;
          }
        }]);

        return AbstractStudyObject;
      }();
      /***/

    },

    /***/
    "QX6l":
    /*!**************************************************!*\
      !*** ./src/app/dashboard/dashboard.component.ts ***!
      \**************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function QX6l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "H/d9");
      /* harmony import */


      var _dashboard_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dashboard.component.css */
      "VKVo");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/auth/auth.service */
      "9ans");
      /* harmony import */


      var _services_study_wrapper_study_wrapper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/study-wrapper/study-wrapper.service */
      "pzGZ");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };

      var DashboardComponent = /*#__PURE__*/function () {
        /**
         * Konstruktor der AvailableStudiesComponent. Darin werden sämtliche Services initialisert,
         * die für die "Verfügbare Studien"-Ansicht gebraucht werden.
         * @param authService AuthService Singleton, ist für die Authentifizierung des Nutzers zuständig
         * @param route ActivatedRoute ist die aktivierte Route
         */
        function DashboardComponent(studywrapper, authService, route) {
          _classCallCheck(this, DashboardComponent);

          this.studywrapper = studywrapper;
          this.authService = authService;
          this.route = route;
        }
        /**
         * Initialisiert die DashboardComponent.
         */


        _createClass(DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee34() {
              return regeneratorRuntime.wrap(function _callee34$(_context34) {
                while (1) {
                  switch (_context34.prev = _context34.next) {
                    case 0:
                      this.studywrapper.study = undefined;

                    case 1:
                    case "end":
                      return _context34.stop();
                  }
                }
              }, _callee34, this);
            }));
          }
          /**
           * Loggt den Nutzer aus der Anwendung aus und navigiert ihn zurück zur Login-Ansicht.
           */

        }, {
          key: "logout",
          value: function logout() {
            this.authService.logout();
          }
        }]);

        return DashboardComponent;
      }();

      DashboardComponent.ctorParameters = function () {
        return [{
          type: _services_study_wrapper_study_wrapper_service__WEBPACK_IMPORTED_MODULE_5__["StudyWrapperService"]
        }, {
          type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      };

      DashboardComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_dashboard_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })
      /**
       * Die DashboardComponent enthält die Seitenansicht in der Anwendung.
       * Darin sind alle Dienste festgehalten, die invariant zu jeder anderen Sicht (außer der Studienerstellung und -teilnahme) sind.
       */
      , __metadata("design:paramtypes", [_services_study_wrapper_study_wrapper_service__WEBPACK_IMPORTED_MODULE_5__["StudyWrapperService"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], DashboardComponent);
      /***/
    },

    /***/
    "ROf3":
    /*!***************************************************!*\
      !*** ./src/app/Model/Study/KeyDataDAO.service.ts ***!
      \***************************************************/

    /*! exports provided: KeyDataDao */

    /***/
    function ROf3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KeyDataDao", function () {
        return KeyDataDao;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _KeyData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./KeyData */
      "r/57");
      /* harmony import */


      var _ShortDescription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./ShortDescription */
      "FerX");
      /* harmony import */


      var _User_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../User/User */
      "rPx+");
      /* harmony import */


      var _User_EMail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../User/EMail */
      "BfXG");
      /* harmony import */


      var _src_app_app_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @src/app/app-settings */
      "24n0");
      /* harmony import */


      var _User_UserPermission__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../User/UserPermission */
      "rhQZ");
      /* harmony import */


      var _src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @src/app/services/auth/auth.service */
      "9ans");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };

      var KeyDataDao = /*#__PURE__*/function () {
        function KeyDataDao(http, authService) {
          _classCallCheck(this, KeyDataDao);

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


        _createClass(KeyDataDao, [{
          key: "getFromUserId",
          value: function getFromUserId(userId) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee35() {
              var _this25 = this;

              var keyData;
              return regeneratorRuntime.wrap(function _callee35$(_context35) {
                while (1) {
                  switch (_context35.prev = _context35.next) {
                    case 0:
                      keyData = [];
                      _context35.next = 3;
                      return this.http.post(_src_app_app_settings__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].baseURL + "MyStudies/" + userId + "/", {
                        token: this.authService.getAuthToken()
                      }).toPromise().then(function (studiesResult) {
                        var _iterator4 = _createForOfIteratorHelper(studiesResult),
                            _step4;

                        try {
                          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                            var element = _step4.value;
                            keyData.push(new _KeyData__WEBPACK_IMPORTED_MODULE_2__["KeyData"](element.id, _this25.authService.getUser(), element.studyStatus, new _ShortDescription__WEBPACK_IMPORTED_MODULE_3__["ShortDescription"](element.shortDescription), element.fullDescription, element.isAmplitudeNecessary, element.name));
                          }
                        } catch (err) {
                          _iterator4.e(err);
                        } finally {
                          _iterator4.f();
                        }
                      });

                    case 3:
                      return _context35.abrupt("return", keyData);

                    case 4:
                    case "end":
                      return _context35.stop();
                  }
                }
              }, _callee35, this);
            }));
          }
          /**
           * Liefert alle Studien an denen der Benutzer mit der id userId bereits teilgenommen hat.
           * @param userId number des Users
           */

        }, {
          key: "getParticipated",
          value: function getParticipated(userId) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee36() {
              var result;
              return regeneratorRuntime.wrap(function _callee36$(_context36) {
                while (1) {
                  switch (_context36.prev = _context36.next) {
                    case 0:
                      result = [];
                      _context36.next = 3;
                      return this.http.post(_src_app_app_settings__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].baseURL + "ParticipatedStudies/" + userId + "/", {
                        token: this.authService.getAuthToken()
                      }).toPromise().then(function (keyDatas) {
                        var _iterator5 = _createForOfIteratorHelper(keyDatas),
                            _step5;

                        try {
                          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                            var element = _step5.value;
                            result.push(new _KeyData__WEBPACK_IMPORTED_MODULE_2__["KeyData"](element.id, new _User_User__WEBPACK_IMPORTED_MODULE_4__["User"](0, element.author.firstName, element.author.lastName, _User_UserPermission__WEBPACK_IMPORTED_MODULE_7__["UserPermission"].CREATOR, new _User_EMail__WEBPACK_IMPORTED_MODULE_5__["EMail"](element.author.email)), element.studyStatus, new _ShortDescription__WEBPACK_IMPORTED_MODULE_3__["ShortDescription"](element.shortDescription), element.fullDescription, element.isAmplitudeNecessary, element.name));
                          }
                        } catch (err) {
                          _iterator5.e(err);
                        } finally {
                          _iterator5.f();
                        }
                      });

                    case 3:
                      return _context36.abrupt("return", result);

                    case 4:
                    case "end":
                      return _context36.stop();
                  }
                }
              }, _callee36, this);
            }));
          }
          /**
           * Die Methode gibt asynchron eine Liste aller KeyData Objekte zurück, die für einen Benutzer verfügbar sind.
           * @param userId number des Users der die Studien anfordert
           * @param hasAmplitude boolean Info ob der Nutzer eine Amplitudenunterstützung braucht.
           */

        }, {
          key: "getAvailableStudies",
          value: function getAvailableStudies(userId, hasAmplitude) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee37() {
              var result;
              return regeneratorRuntime.wrap(function _callee37$(_context37) {
                while (1) {
                  switch (_context37.prev = _context37.next) {
                    case 0:
                      result = [];
                      _context37.next = 3;
                      return this.http.post(_src_app_app_settings__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].baseURL + "AvailableStudies/?userId=" + userId + "&hasAmplitude=" + hasAmplitude, {
                        token: this.authService.getAuthToken()
                      }).toPromise().then(function (availableResult) {
                        var _iterator6 = _createForOfIteratorHelper(availableResult),
                            _step6;

                        try {
                          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                            var study = _step6.value;
                            result.push(new _KeyData__WEBPACK_IMPORTED_MODULE_2__["KeyData"](study.id, new _User_User__WEBPACK_IMPORTED_MODULE_4__["User"](0, study.author.firstName, study.author.lastName, _User_UserPermission__WEBPACK_IMPORTED_MODULE_7__["UserPermission"].CREATOR, new _User_EMail__WEBPACK_IMPORTED_MODULE_5__["EMail"](study.author.email)), study.studyStatus, study.shortDescription, study.fullDescription, study.amplitudeNecessary, study.name));
                          }
                        } catch (err) {
                          _iterator6.e(err);
                        } finally {
                          _iterator6.f();
                        }
                      });

                    case 3:
                      return _context37.abrupt("return", result);

                    case 4:
                    case "end":
                      return _context37.stop();
                  }
                }
              }, _callee37, this);
            }));
          }
          /**
           * Die Methode aktualisiert den Status einer Studie
           * @param id number ist die Id der Studie deren Status aktualisiert wird
           * @param state number ist der Status auf den aktualisiert wird
           */

        }, {
          key: "updateStudyState",
          value: function updateStudyState(id, state) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee38() {
              var result;
              return regeneratorRuntime.wrap(function _callee38$(_context38) {
                while (1) {
                  switch (_context38.prev = _context38.next) {
                    case 0:
                      result = false;
                      _context38.next = 3;
                      return this.http.post(_src_app_app_settings__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].baseURL + "UpdateStudyState/" + id + "/", {
                        token: this.authService.getAuthToken(),
                        state: state
                      }).toPromise().then(function (response) {
                        if (response) {
                          result = true;
                        }
                      });

                    case 3:
                      return _context38.abrupt("return", result);

                    case 4:
                    case "end":
                      return _context38.stop();
                  }
                }
              }, _callee38, this);
            }));
          }
          /**
           * Löscht das KeyData Objekt object aus der Datenbank.
           * @param id number sind die Schlüsselinformationen, die gelöscht werden sollen
           */

        }, {
          key: "delete",
          value: function _delete(id) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee39() {
              var success;
              return regeneratorRuntime.wrap(function _callee39$(_context39) {
                while (1) {
                  switch (_context39.prev = _context39.next) {
                    case 0:
                      success = false;
                      _context39.next = 3;
                      return this.http.post(_src_app_app_settings__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].baseURL + "DeleteStudy/" + id + "/", {
                        token: this.authService.getAuthToken(),
                        id: id
                      }).toPromise().then(function (result) {
                        if (result) {
                          success = true;
                        }
                      });

                    case 3:
                      return _context39.abrupt("return", success);

                    case 4:
                    case "end":
                      return _context39.stop();
                  }
                }
              }, _callee39, this);
            }));
          }
        }]);

        return KeyDataDao;
      }();

      KeyDataDao.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }, {
          type: _src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]
        }];
      };

      KeyDataDao = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
      })
      /**
       * Das KeyDataDAO ist für den Zugriff auf die KeyData Objekte in der Datenbank verantwortlich.
       */
      , __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]])], KeyDataDao);
      /***/
    },

    /***/
    "RUEf":
    /*!*******************************!*\
      !*** ./src/app/app.routes.ts ***!
      \*******************************/

    /*! exports provided: routes */

    /***/
    function RUEf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routes", function () {
        return routes;
      });
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      "QX6l");
      /* harmony import */


      var _guards_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./guards/auth/auth-guard.service */
      "cRx8");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login/login.component */
      "vtpD");
      /* harmony import */


      var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./register/register.component */
      "1W4x");
      /* harmony import */


      var _studycreation_studycreation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./studycreation/studycreation.component */
      "jA02");

      var routes = [{
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      }, {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
      }, {
        path: "register",
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]
      }, {
        path: "dashboard",
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"],
        canActivate: [_guards_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]],
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! @src/app/dashboard/dashboard.module */
          "TDBs")).then(function (m) {
            return m.DashboardModule;
          });
        }
      }, {
        path: "studycreation",
        component: _studycreation_studycreation_component__WEBPACK_IMPORTED_MODULE_4__["StudyCreationComponent"],
        canActivate: [_guards_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]],
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | src-app-studycreation-studycreation-module */
          "src-app-studycreation-studycreation-module").then(__webpack_require__.bind(null,
          /*! @src/app/studycreation/studycreation.module */
          "Q8vR")).then(function (m) {
            return m.StudycreationModule;
          });
        }
      }];
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component.css */
      "A3xY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _services_app_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./services/app-settings/app-settings.service */
      "zd4C");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(appSettingsService) {
          _classCallCheck(this, AppComponent);

          this.appSettingsService = appSettingsService;
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _services_app_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_3__["AppSettingsService"]
        }];
      };

      AppComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_services_app_settings_app_settings_service__WEBPACK_IMPORTED_MODULE_3__["AppSettingsService"]])], AppComponent);
      /***/
    },

    /***/
    "TDBs":
    /*!***********************************************!*\
      !*** ./src/app/dashboard/dashboard.module.ts ***!
      \***********************************************/

    /*! exports provided: DashboardModule */

    /***/
    function TDBs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
        return DashboardModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _src_app_dashboard_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @src/app/dashboard/dashboard-routing.module */
      "Oy4E");
      /* harmony import */


      var _src_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @src/material.module */
      "wLiR");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _src_app_dashboard_my_studies_my_studies_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @src/app/dashboard/my-studies/my-studies.component */
      "B6Ro");
      /* harmony import */


      var _src_app_dashboard_available_studies_available_studies_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @src/app/dashboard/available-studies/available-studies.component */
      "xpyY");
      /* harmony import */


      var _src_app_dashboard_participated_studies_participated_studies_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @src/app/dashboard/participated-studies/participated-studies.component */
      "GhTv");
      /* harmony import */


      var _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./profile/profile.component */
      "80h2");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var DashboardModule = function DashboardModule() {
        _classCallCheck(this, DashboardModule);
      };

      DashboardModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"], _src_app_dashboard_my_studies_my_studies_component__WEBPACK_IMPORTED_MODULE_5__["MyStudiesComponent"], _src_app_dashboard_available_studies_available_studies_component__WEBPACK_IMPORTED_MODULE_6__["AvailableStudiesComponent"], _src_app_dashboard_participated_studies_participated_studies_component__WEBPACK_IMPORTED_MODULE_7__["ParticipatedStudiesComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _src_app_dashboard_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"], _src_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]]
      })], DashboardModule);
      /***/
    },

    /***/
    "TQet":
    /*!************************************************************!*\
      !*** ./src/app/Model/Randomizing/RandomizingStrategies.ts ***!
      \************************************************************/

    /*! exports provided: RandomizingStrategies */

    /***/
    function TQet(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RandomizingStrategies", function () {
        return RandomizingStrategies;
      });

      var RandomizingStrategies;

      (function (RandomizingStrategies) {
        RandomizingStrategies[RandomizingStrategies["NONE"] = 0] = "NONE";
        RandomizingStrategies[RandomizingStrategies["STANDARD"] = 1] = "STANDARD";
      })(RandomizingStrategies || (RandomizingStrategies = {}));
      /***/

    },

    /***/
    "Tcgm":
    /*!***************************************************************************!*\
      !*** ./src/app/Model/Study/StudyObjects/Questions/LinearScaleQuestion.ts ***!
      \***************************************************************************/

    /*! exports provided: LinearScaleQuestion */

    /***/
    function Tcgm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LinearScaleQuestion", function () {
        return LinearScaleQuestion;
      });
      /* harmony import */


      var _AbstractQuestion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./AbstractQuestion */
      "zfOo");
      /**
       * Ein LinearScaleQuestion ist ein Fragenobjekt, das eine lineare Skala darstellt.
       * Auf der Skala können nur natürliche Zahlen angezeigt werden.
       * Es kann nur ein Wert auf der Skala als Antwort ausgewählt werden.
       */


      var LinearScaleQuestion = /*#__PURE__*/function (_AbstractQuestion__WE2) {
        _inherits(LinearScaleQuestion, _AbstractQuestion__WE2);

        var _super6 = _createSuper(LinearScaleQuestion);

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
        function LinearScaleQuestion(id, name, questionText, displayName, numberOfChoices, leftLabel, rightLabel) {
          var _thisSuper2, _this26;

          _classCallCheck(this, LinearScaleQuestion);

          _this26 = _super6.call(this, id, name, questionText, displayName);
          _this26.objectType = "LinearScaleQuestion";
          _this26._numberOfChoices = numberOfChoices;
          _this26._leftLabel = leftLabel;
          _this26._rightLabel = rightLabel;

          _set((_thisSuper2 = _assertThisInitialized(_this26), _getPrototypeOf(LinearScaleQuestion.prototype)), "answer", -1, _thisSuper2, true);

          return _this26;
        }

        _createClass(LinearScaleQuestion, [{
          key: "numberOfChoices",
          get: function get() {
            return this._numberOfChoices;
          },
          set: function set(numberOfChoices) {
            if (numberOfChoices == null) {
              throw new Error("NumberOfChoices darf nicht null sein.");
            }

            if (numberOfChoices < 2) {
              throw new Error("NumberOfChoices muss mindestens 2 sein.");
            }

            this._numberOfChoices = numberOfChoices;
          }
        }, {
          key: "leftLabel",
          get: function get() {
            return this._leftLabel;
          },
          set: function set(leftLabel) {
            this._leftLabel = leftLabel;
          }
        }, {
          key: "rightLabel",
          get: function get() {
            return this._rightLabel;
          },
          set: function set(rightLabel) {
            this._rightLabel = rightLabel;
          }
        }]);

        return LinearScaleQuestion;
      }(_AbstractQuestion__WEBPACK_IMPORTED_MODULE_0__["AbstractQuestion"]);
      /***/

    },

    /***/
    "USEZ":
    /*!*****************************************************************!*\
      !*** ./src/app/Model/Study/ReferenceTupleMembershipVerifier.ts ***!
      \*****************************************************************/

    /*! exports provided: ReferenceTupleMembershipVerifier */

    /***/
    function USEZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReferenceTupleMembershipVerifier", function () {
        return ReferenceTupleMembershipVerifier;
      });
      /* harmony import */


      var _Types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./Types */
      "ozSw");
      /* harmony import */


      var _StudyObjects_Section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./StudyObjects/Section */
      "/3i5");
      /* harmony import */


      var _StudyObjects_Questions_AbstractQuestion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./StudyObjects/Questions/AbstractQuestion */
      "zfOo");
      /* harmony import */


      var _StudyObjects_VibrationPattern__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./StudyObjects/VibrationPattern */
      "tJs4");
      /* harmony import */


      var _StudyObjects_TextBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./StudyObjects/TextBlock */
      "0HUV");
      /* harmony import */


      var _StudyObjects_SectionElement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./StudyObjects/SectionElement */
      "HEL/");
      /**
       * Der ReferenceTupleMembershipVerifier kann innerhalb einer Studie festellen, welchen
       * Typ ein ReferenceTuple hat und das Objekt zurückgeben, welches auf das ReferenceTuple zeigt.
       */


      var ReferenceTupleMembershipVerifier = /*#__PURE__*/function () {
        function ReferenceTupleMembershipVerifier(studyPrototype) {
          _classCallCheck(this, ReferenceTupleMembershipVerifier);

          this._studyPrototype = studyPrototype;
        }

        _createClass(ReferenceTupleMembershipVerifier, [{
          key: "getType",

          /**
           * Gibt zu ref den Typ des Objekts an, zu dem die ID in ref gehört.
           * @param ref ReferenceTuple ist das Referenztupel zu dem der Typ ermittelt werden soll
           */
          value: function getType(ref) {
            var search = this.searchForId(this.studyPrototype.sections, ref); // TODO: entcopypasten

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

        }, {
          key: "getObject",
          value: function getObject(ref) {
            var search = this.searchForId(this.studyPrototype.sections, ref); // TODO: entcopypasten

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
        }, {
          key: "searchForId",
          value: function searchForId(list, ref) {
            if (list == null) {
              return [null, false];
            }

            for (var i = 0; i < list.length; i = i + 1) {
              if (list[i].id === ref.ID) {
                return [list[i], true];
              }
            }

            return [null, false];
          }
        }, {
          key: "assignType",
          value: function assignType(element) {
            switch (true) {
              case element instanceof _StudyObjects_SectionElement__WEBPACK_IMPORTED_MODULE_5__["SectionElement"]:
                {
                  return _Types__WEBPACK_IMPORTED_MODULE_0__["Types"].SECTIONELEMENT;
                }

              case element instanceof _StudyObjects_Questions_AbstractQuestion__WEBPACK_IMPORTED_MODULE_2__["AbstractQuestion"]:
                {
                  return _Types__WEBPACK_IMPORTED_MODULE_0__["Types"].QUESTION;
                }

              case element instanceof _StudyObjects_TextBlock__WEBPACK_IMPORTED_MODULE_4__["TextBlock"]:
                {
                  return _Types__WEBPACK_IMPORTED_MODULE_0__["Types"].TEXT;
                }

              case element instanceof _StudyObjects_Section__WEBPACK_IMPORTED_MODULE_1__["Section"]:
                {
                  return _Types__WEBPACK_IMPORTED_MODULE_0__["Types"].SECTION;
                }

              case element instanceof _StudyObjects_VibrationPattern__WEBPACK_IMPORTED_MODULE_3__["VibrationPattern"]:
                {
                  return _Types__WEBPACK_IMPORTED_MODULE_0__["Types"].VIBRATIONPATTERN;
                }

              default:
                {
                  throw new Error("Kein passender Typ gefunden.");
                }
            }
          }
        }, {
          key: "studyPrototype",
          get: function get() {
            return this._studyPrototype;
          },
          set: function set(studyPrototype) {
            this._studyPrototype = studyPrototype;
          }
        }]);

        return ReferenceTupleMembershipVerifier;
      }();
      /***/

    },

    /***/
    "VKVo":
    /*!***************************************************!*\
      !*** ./src/app/dashboard/dashboard.component.css ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function VKVo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "mat-sidenav-container {\r\n    height: 94vh;\r\n  }\r\n  \r\n  mat-sidenav-content {\r\n    padding: 15px;\r\n  }\r\n  \r\n  mat-sidenav {\r\n    width: 250px;\r\n  }\r\n  \r\n  mat-toolbar {\r\n    height: 6vh;\r\n  }\r\n  \r\n  .bottomrow {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n}\r\n  \r\n  .flexExpand {\r\n  flex: 1 1 auto;\r\n}\r\n  \r\n  .helpButton {\r\n  background-color: #3e753b;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVGO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsV0FBVztBQUNiOztFQUVBO0VBQ0UsY0FBYztBQUNoQjs7RUFFQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDk0dmg7XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1zaWRlbmF2LWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgbWF0LXNpZGVuYXYge1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gIH1cclxuICBcclxuICBtYXQtdG9vbGJhciB7XHJcbiAgICBoZWlnaHQ6IDZ2aDtcclxuICB9XHJcbiAgXHJcbi5ib3R0b21yb3cge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZsZXhFeHBhbmQge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4uaGVscEJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlNzUzYjtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<router-outlet></router-outlet>";
      /***/
    },

    /***/
    "X8SS":
    /*!***********************************************************************************!*\
      !*** ./src/app/dashboard/participated-studies/participated-studies.component.css ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function X8SS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9wYXJ0aWNpcGF0ZWQtc3R1ZGllcy9wYXJ0aWNpcGF0ZWQtc3R1ZGllcy5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "X8dr":
    /*!***********************************************!*\
      !*** ./src/app/dashboard/dashboard.routes.ts ***!
      \***********************************************/

    /*! exports provided: routes */

    /***/
    function X8dr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routes", function () {
        return routes;
      });
      /* harmony import */


      var _guards_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../guards/auth/auth-guard.service */
      "cRx8");
      /* harmony import */


      var _guards_role_role_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../guards/role/role-guard.service */
      "OmuS");
      /* harmony import */


      var _Model_User_UserPermission__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../Model/User/UserPermission */
      "rhQZ");
      /* harmony import */


      var _available_studies_available_studies_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./available-studies/available-studies.component */
      "xpyY");
      /* harmony import */


      var _my_studies_my_studies_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./my-studies/my-studies.component */
      "B6Ro");
      /* harmony import */


      var _participated_studies_participated_studies_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./participated-studies/participated-studies.component */
      "GhTv");
      /* harmony import */


      var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./profile/profile.component */
      "80h2");

      var routes = [{
        path: "",
        redirectTo: "my-studies",
        pathMatch: "full"
      }, {
        path: "profile",
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
        canActivate: [_guards_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__["AuthGuardService"]]
      }, {
        path: "my-studies",
        component: _my_studies_my_studies_component__WEBPACK_IMPORTED_MODULE_4__["MyStudiesComponent"],
        canActivate: [_guards_role_role_guard_service__WEBPACK_IMPORTED_MODULE_1__["RoleGuardService"], _guards_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__["AuthGuardService"]],
        data: {
          expectedRole: _Model_User_UserPermission__WEBPACK_IMPORTED_MODULE_2__["UserPermission"].CREATOR
        }
      }, {
        path: "available-studies",
        component: _available_studies_available_studies_component__WEBPACK_IMPORTED_MODULE_3__["AvailableStudiesComponent"],
        canActivate: [_guards_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__["AuthGuardService"]]
      }, {
        path: "participated-studies",
        component: _participated_studies_participated_studies_component__WEBPACK_IMPORTED_MODULE_5__["ParticipatedStudiesComponent"],
        canActivate: [_guards_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__["AuthGuardService"]]
      }];
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @src/app/app-routing.module */
      "vY5A");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "omvX");
      /* harmony import */


      var _src_app_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @src/app/login/login.component */
      "vtpD");
      /* harmony import */


      var _src_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @src/material.module */
      "wLiR");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _src_app_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @src/app/register/register.component */
      "1W4x");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _src_app_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @src/app/dashboard/dashboard.component */
      "QX6l");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _src_app_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @src/app/dashboard/dashboard.module */
      "TDBs");
      /* harmony import */


      var _src_app_studycreation_studycreation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @src/app/studycreation/studycreation.component */
      "jA02");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _src_app_services_dialogs_confirmDialog_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @src/app/services/dialogs/confirmDialog.service */
      "Nj1j");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"], _src_app_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _src_app_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"], _src_app_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"], _src_app_studycreation_studycreation_component__WEBPACK_IMPORTED_MODULE_12__["StudyCreationComponent"], _src_app_services_dialogs_confirmDialog_service__WEBPACK_IMPORTED_MODULE_14__["DialogTemplate"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _src_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _src_app_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_11__["DashboardModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"]],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]],
        entryComponents: [_src_app_services_dialogs_confirmDialog_service__WEBPACK_IMPORTED_MODULE_14__["DialogTemplate"]]
      })], AppModule);
      /***/
    },

    /***/
    "adfr":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/profile/profile.component.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function adfr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mat-card>\r\n    <mat-card-title class=\"header\">\r\n        Accountdaten\r\n    </mat-card-title><br>\r\n    <mat-divider></mat-divider><br><br>\r\n    <mat-card-content>\r\n        <mat-form-field class=\"login-field\">\r\n            <input matInput placeholder=\"Vorname\" name=\"firstName\" [(ngModel)]=\"this.user.firstName\" type=\"text\" />\r\n        </mat-form-field>\r\n        <mat-form-field class=\"login-field\">\r\n            <input matInput placeholder=\"Nachname\" name=\"lastName\" [(ngModel)]=\"this.user.lastName\" type=\"text\" />\r\n        </mat-form-field>\r\n        <mat-form-field class=\"login-field\">\r\n            <input matInput placeholder=\"E-Mail\" name=\"email\" [(ngModel)]=\"this.user.email.email\" type=\"email\" />\r\n        </mat-form-field>\r\n        <mat-form-field class=\"login-field\">\r\n            <input matInput placeholder=\"Vorheriges Passwort\" name=\"oldPassword\" [(ngModel)]=\"this.oldPassword\" type=\"password\" />\r\n        </mat-form-field>\r\n    </mat-card-content>\r\n    <button mat-flat-button class=\"greenButton\" (click)=\"saveUser()\">Speichern</button>\r\n</mat-card>\r\n<br>\r\n<mat-card>\r\n    <mat-card-title class=\"header\">\r\n        Passwort ändern\r\n    </mat-card-title><br>\r\n    <mat-divider></mat-divider><br><br>\r\n    <mat-card-content>\r\n        <mat-form-field class=\"login-field\">\r\n            <input matInput placeholder=\"Vorheriges Passwort\" name=\"oldPassword\" [(ngModel)]=\"this.oldPassword\" type=\"password\" />\r\n        </mat-form-field>\r\n        <mat-form-field class=\"login-field\">\r\n            <input matInput placeholder=\"Neues Passwort\" name=\"newPassword\" [(ngModel)]=\"this.newPassword\" type=\"password\" />\r\n        </mat-form-field>\r\n        <mat-form-field class=\"login-field\">\r\n            <input matInput placeholder=\"Neues Passwort erneut eingeben\" name=\"newPasswordRepeat\" [(ngModel)]=\"this.newPasswordRepeat\" type=\"password\" />\r\n        </mat-form-field>\r\n    </mat-card-content>\r\n    <button mat-flat-button class=\"greenButton\" (click)=\"savePassword()\">Speichern</button>\r\n</mat-card>\r\n<br>\r\n<!--<mat-card>\r\n    <mat-card-title>\r\n        Accountrechte\r\n    </mat-card-title><br>\r\n    <mat-divider></mat-divider><br><br>\r\n    <mat-card-content>\r\n\r\n    </mat-card-content>\r\n</mat-card>\r\n<br>-->\r\n<mat-card>\r\n    <mat-card-title class=\"header\">\r\n        Account löschen\r\n    </mat-card-title><br>\r\n    <mat-divider></mat-divider><br><br>\r\n    <mat-card-content>\r\n        <button mat-flat-button class=\"redButton\" (click)=\"deleteUser()\">Endgültig löschen</button>\r\n    </mat-card-content>\r\n</mat-card>";
      /***/
    },

    /***/
    "av4J":
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/participated-studies/participated-studies.component.html ***!
      \**************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function av4J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>participated-studies works!</p>\r\n";
      /***/
    },

    /***/
    "cRx8":
    /*!***************************************************!*\
      !*** ./src/app/guards/auth/auth-guard.service.ts ***!
      \***************************************************/

    /*! exports provided: AuthGuardService */

    /***/
    function cRx8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
        return AuthGuardService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @src/app/services/auth/auth.service */
      "9ans");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };

      var AuthGuardService = /*#__PURE__*/function () {
        /**
         * Konstruktor des AuthGuardService. Darin werden sämtliche Services initialisert,
         * die für den AuthGuardService gebraucht werden.
         * @param authService AuthService Singleton, ist für die Authentifizierung des Nutzers zuständig
         * @param router Router Singleton, zum Routen des Pfads nach Eintritt eines Ereignisses
         */
        function AuthGuardService(authService, router) {
          _classCallCheck(this, AuthGuardService);

          this.authService = authService;
          this.router = router;
        }
        /**
         * Die vom Interface zu implementierende Methode, welche den Guard aktiviert oder deaktiviert.
         * @param route ActivatedRouteSnapshot ist der aktuellen Zustand der aktivierten Route
         * @param state RouterSnapshot ist der aktuelle Zustand des Routers
         * @returns Promise<boolean>, je nachdem ob der Nutzer authentifizierbar ist oder nicht
         */


        _createClass(AuthGuardService, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee40() {
              var isAuthenticated;
              return regeneratorRuntime.wrap(function _callee40$(_context40) {
                while (1) {
                  switch (_context40.prev = _context40.next) {
                    case 0:
                      isAuthenticated = false;
                      _context40.next = 3;
                      return this.authService.isAuthenticated().then(function (result) {
                        return isAuthenticated = result;
                      });

                    case 3:
                      if (isAuthenticated) {
                        _context40.next = 9;
                        break;
                      }

                      this.router.navigate(["login"], {
                        replaceUrl: true
                      });
                      this.authService.clear();
                      return _context40.abrupt("return", isAuthenticated);

                    case 9:
                      return _context40.abrupt("return", isAuthenticated);

                    case 10:
                    case "end":
                      return _context40.stop();
                  }
                }
              }, _callee40, this);
            }));
          }
        }]);

        return AuthGuardService;
      }();

      AuthGuardService.ctorParameters = function () {
        return [{
          type: _src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      };

      AuthGuardService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      })
      /**
       * Der AuthGuardService ist ein Guard, also für die Navigation der Route innerhalb der Anwendung zuständig.
       * Dieser Guard ist für die Authentifizierung des Nutzers zuständig.
       * Dazu verwendet es das CanActivate Interface, welches von jedem anderen Guard verwendet wird.
       * Nur wenn alle Guards wahr sind, kann auf die gewünschte Ansicht navigiert werden, sonst nicht.
       */
      , __metadata("design:paramtypes", [_src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], AuthGuardService);
      /***/
    },

    /***/
    "eH3k":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/available-studies/available-studies.component.html ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function eH3k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>available-studies works!</p>\r\n";
      /***/
    },

    /***/
    "hRBY":
    /*!***********************************************!*\
      !*** ./src/app/Model/Study/StudyPrototype.ts ***!
      \***********************************************/

    /*! exports provided: StudyPrototype */

    /***/
    function hRBY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StudyPrototype", function () {
        return StudyPrototype;
      });
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! lodash */
      "LvDl");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
      /**
       * Die Klasse public class StudyPrototype ist ein Template für die Instanz einer Studie,
       *  in der gleichzeitig das Ergebnis nach Ausführung der Studie durch einen User gespeichert wird.
       */


      var StudyPrototype = /*#__PURE__*/function () {
        /**
         * Erzeugt einen neuen StudyPrototype
         *
         * @param metaDataOfDevice;
         * @param sections;
         * @param randomStrategy;
         */
        function StudyPrototype(keyData) {
          _classCallCheck(this, StudyPrototype);

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

        _createClass(StudyPrototype, [{
          key: "clone",

          /**
           * Erzeugt ein neues Objekt vom Typ StudyPrototype mit den selben Werten wie das aktuelle
           */
          value: function clone() {
            return lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"](this);
          }
        }, {
          key: "addAnsweredQuestion",
          value: function addAnsweredQuestion(answer) {
            this._answeredQuestion.push(answer);
          }
        }, {
          key: "keyData",
          get: function get() {
            return this._keyData;
          },
          set: function set(keyData) {
            this._keyData = keyData;
          }
        }, {
          key: "metaDataOfDevice",
          get: function get() {
            return this._metaDataOfDevice;
          },
          set: function set(metaDataOfDevice) {
            if (!metaDataOfDevice) {
              throw new Error("Parameter darf nicht null sein!");
            }

            this._metaDataOfDevice = metaDataOfDevice;
          }
        }, {
          key: "refSections",
          get: function get() {
            return this._refSections;
          },
          set: function set(refSections) {
            if (refSections == null) {
              throw new Error("RefSections darf nicht null sein!");
            }

            this._refSections = refSections;
          }
        }, {
          key: "sections",
          get: function get() {
            return this._sections;
          },
          set: function set(sections) {
            if (!sections) {
              throw new Error("Sections darf nicht null sein!");
            }

            this._sections = sections;
          }
        }, {
          key: "sectionElements",
          get: function get() {
            return this._sectionElements;
          },
          set: function set(sectionElements) {
            if (sectionElements == null) {
              throw new Error("SectionElements darf nicht null sein!");
            }

            this._sectionElements = sectionElements;
          }
        }, {
          key: "studyObjects",
          get: function get() {
            return this._studyObjects;
          },
          set: function set(studyObjects) {
            if (studyObjects == null) {
              throw new Error("StudyObjects darf nicht null sein!");
            }

            this._studyObjects = studyObjects;
          }
        }, {
          key: "answeredQuestion",
          get: function get() {
            return this._answeredQuestion;
          }
        }, {
          key: "randomStrategy",
          get: function get() {
            return this._randomStrategy;
          },
          set: function set(randomStrategy) {
            this._randomStrategy = randomStrategy;
          }
        }]);

        return StudyPrototype;
      }();
      /***/

    },

    /***/
    "hVaG":
    /*!*******************************************************!*\
      !*** ./src/app/Model/Study/Result/UserResultTuple.ts ***!
      \*******************************************************/

    /*! exports provided: UserResultTuple */

    /***/
    function hVaG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserResultTuple", function () {
        return UserResultTuple;
      });
      /**
       * Die Klasse enthält die Ausführung einer Studie zu einem Nutzer.
       */


      var UserResultTuple = /*#__PURE__*/function () {
        function UserResultTuple(user, results, metaData) {
          _classCallCheck(this, UserResultTuple);

          /**
           * Referenzen auf die Fragen mit der orginalen Id aus der Study
           */
          this.answeredQuestions = [];
          this._user = user;
          this._results = results;
          this._metaData = metaData;
        }

        _createClass(UserResultTuple, [{
          key: "user",
          get: function get() {
            return this._user;
          },
          set: function set(user) {
            this._user = user;
          }
        }, {
          key: "results",
          get: function get() {
            return this._results;
          },
          set: function set(results) {
            this._results = results;
          }
        }, {
          key: "metaData",
          get: function get() {
            return this._metaData;
          },
          set: function set(metaData) {
            this._metaData = metaData;
          }
        }]);

        return UserResultTuple;
      }();
      /***/

    },

    /***/
    "in5m":
    /*!**********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function in5m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"full-page\">\r\n  <mat-card class=\"login-card\">\r\n    <mat-card-title style=\"text-align: center;\">\r\n      <img src=\"../../assets/images/Icon.png\" width=\"100\"><br><br>\r\n      VibroStudies Login\r\n    </mat-card-title>\r\n    <mat-card-content>\r\n      <mat-form-field class=\"login-field\">\r\n        <input matInput placeholder=\"E-Mail\" name=\"email\" [(ngModel)]=\"email\" type=\"email\" (keyup.enter)=\"login()\" />\r\n      </mat-form-field>\r\n      <mat-form-field class=\"login-field\">\r\n        <input matInput placeholder=\"Passwort\" name=\"password\" [(ngModel)]=\"password\" type=\"password\"\r\n          (keyup.enter)=\"login()\" />\r\n      </mat-form-field>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n    <div style=\"text-align: center\">\r\n      <button mat-raised-button class=\"greenButton\" (click)=\"login()\" type=\"submit\">\r\n        Login\r\n      </button>\r\n       </div>\r\n    </mat-card-actions>\r\n    <mat-divider></mat-divider><br>\r\n    <div style=\"text-align: center\">\r\n      <h3>Neu hier?</h3>\r\n      <button mat-flat-button class=\"redButton\" (click)=\"toRegister()\">Jetzt Registrieren</button>\r\n    </div>\r\n  </mat-card>\r\n</div>";
      /***/
    },

    /***/
    "iqOD":
    /*!********************************************!*\
      !*** ./src/app/Model/Study/StudyStatus.ts ***!
      \********************************************/

    /*! exports provided: StudyStatus */

    /***/
    function iqOD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StudyStatus", function () {
        return StudyStatus;
      });

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
      /***/

    },

    /***/
    "j7zN":
    /*!**********************************************************!*\
      !*** ./src/app/Model/Study/StudyObjects/PauseElement.ts ***!
      \**********************************************************/

    /*! exports provided: PauseElement */

    /***/
    function j7zN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PauseElement", function () {
        return PauseElement;
      });
      /* harmony import */


      var _AbstractVibrationPatternElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./AbstractVibrationPatternElement */
      "jdIE");

      var PauseElement = /*#__PURE__*/function (_AbstractVibrationPat2) {
        _inherits(PauseElement, _AbstractVibrationPat2);

        var _super7 = _createSuper(PauseElement);

        function PauseElement(duration) {
          _classCallCheck(this, PauseElement);

          return _super7.call(this, duration);
        }

        return PauseElement;
      }(_AbstractVibrationPatternElement__WEBPACK_IMPORTED_MODULE_0__["AbstractVibrationPatternElement"]);
      /***/

    },

    /***/
    "jA02":
    /*!**********************************************************!*\
      !*** ./src/app/studycreation/studycreation.component.ts ***!
      \**********************************************************/

    /*! exports provided: StudyCreationComponent */

    /***/
    function jA02(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StudyCreationComponent", function () {
        return StudyCreationComponent;
      });
      /* harmony import */


      var _raw_loader_studycreation_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./studycreation.component.html */
      "rUpu");
      /* harmony import */


      var _studycreation_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./studycreation.component.css */
      "JSb+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _Model_Study_StudyPrototypeDAO_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../Model/Study/StudyPrototypeDAO.service */
      "osms");
      /* harmony import */


      var _services_study_wrapper_study_wrapper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/study-wrapper/study-wrapper.service */
      "pzGZ");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };

      var StudyCreationComponent = /*#__PURE__*/function () {
        function StudyCreationComponent(router, studywrapper, studyService) {
          _classCallCheck(this, StudyCreationComponent);

          this.router = router;
          this.studywrapper = studywrapper;
          this.studyService = studyService;
          this.saving = false;
        }

        _createClass(StudyCreationComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {}
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this27 = this;

            if (!this.studywrapper.study) {
              this.router.navigate(["dashboard"]);
            } else {
              this.savingInterval = setInterval(function () {
                if (_this27.studywrapper.study) {
                  _this27.save();
                } else {
                  clearInterval(_this27.savingInterval);
                }
              }, 10000);
            }
          }
        }, {
          key: "save",
          value: function save() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee41() {
              var _this28 = this;

              return regeneratorRuntime.wrap(function _callee41$(_context41) {
                while (1) {
                  switch (_context41.prev = _context41.next) {
                    case 0:
                      if (this.saving) {
                        _context41.next = 4;
                        break;
                      }

                      this.saving = true;
                      _context41.next = 4;
                      return this.studyService.save(this.studywrapper.study).then(function (result) {
                        if (result) {
                          setTimeout(function () {
                            _this28.saving = false;
                          }, 1000);
                        }
                      });

                    case 4:
                    case "end":
                      return _context41.stop();
                  }
                }
              }, _callee41, this);
            }));
          }
        }]);

        return StudyCreationComponent;
      }();

      StudyCreationComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _services_study_wrapper_study_wrapper_service__WEBPACK_IMPORTED_MODULE_5__["StudyWrapperService"]
        }, {
          type: _Model_Study_StudyPrototypeDAO_service__WEBPACK_IMPORTED_MODULE_4__["StudyPrototypeDAO"]
        }];
      };

      StudyCreationComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-studycreation',
        template: _raw_loader_studycreation_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_studycreation_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_study_wrapper_study_wrapper_service__WEBPACK_IMPORTED_MODULE_5__["StudyWrapperService"], _Model_Study_StudyPrototypeDAO_service__WEBPACK_IMPORTED_MODULE_4__["StudyPrototypeDAO"]])], StudyCreationComponent);
      /***/
    },

    /***/
    "jdIE":
    /*!*****************************************************************************!*\
      !*** ./src/app/Model/Study/StudyObjects/AbstractVibrationPatternElement.ts ***!
      \*****************************************************************************/

    /*! exports provided: AbstractVibrationPatternElement */

    /***/
    function jdIE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbstractVibrationPatternElement", function () {
        return AbstractVibrationPatternElement;
      });
      /**
       * Ein AbstractVibrationPatternElement ist ein abstraktes Element, aus dem Vibrationen
       * erstellt werden können. Die Klasse spezialisiert sich in Pause und VibrationElemente.
       */


      var AbstractVibrationPatternElement = /*#__PURE__*/function () {
        /**
         * Dieser Konstruktor prüft, bevor es ein AbstractVibrationPatternElement erstellt, den Paramter duration, da
         * dieser nur Werte zwischen 0 und 2^(64) - 1 annehmen darf.
         * @param duration beschreibt die Dauer in ms
         */
        function AbstractVibrationPatternElement(duration) {
          _classCallCheck(this, AbstractVibrationPatternElement);

          this.duration = duration;
        }

        _createClass(AbstractVibrationPatternElement, [{
          key: "ensure64BitNumber",
          value: function ensure64BitNumber(duration) {
            if (duration == null) {
              throw new Error("Duration darf nicht null sein.");
            }

            if (!(duration >= 0 && duration < Math.pow(2, 64))) {
              throw new Error("Es sind nur positive long Werte, also Werte zwischen 0 und 2^(64) - 1, akzeptiert.");
            }
          }
        }, {
          key: "duration",
          get: function get() {
            return this._duration;
          } // 2^64 weil long. Long weil es gecastet werden muss
          ,
          set: function set(duration) {
            this.ensure64BitNumber(duration);
            this._duration = duration;
          }
        }]);

        return AbstractVibrationPatternElement;
      }();
      /***/

    },

    /***/
    "kyzu":
    /*!*************************************************!*\
      !*** ./src/app/services/alert/alert.service.ts ***!
      \*************************************************/

    /*! exports provided: AlertService */

    /***/
    function kyzu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertService", function () {
        return AlertService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "zHaW");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };

      var AlertService = /*#__PURE__*/function () {
        function AlertService(snackBar) {
          _classCallCheck(this, AlertService);

          this.snackBar = snackBar;
        }

        _createClass(AlertService, [{
          key: "alert",
          value: function alert(message) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee42() {
              var result;
              return regeneratorRuntime.wrap(function _callee42$(_context42) {
                while (1) {
                  switch (_context42.prev = _context42.next) {
                    case 0:
                      result = false;
                      _context42.next = 3;
                      return this.snackBar.open(message, "Ok", {
                        panelClass: "snackbar-style"
                      }).afterDismissed().toPromise().then(function (response) {
                        if (response.dismissedByAction) {
                          result = true;
                        }
                      });

                    case 3:
                      return _context42.abrupt("return", result);

                    case 4:
                    case "end":
                      return _context42.stop();
                  }
                }
              }, _callee42, this);
            }));
          }
        }]);

        return AlertService;
      }();

      AlertService.ctorParameters = function () {
        return [{
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]
        }];
      };

      AlertService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])], AlertService);
      /***/
    },

    /***/
    "lGoz":
    /*!********************************************************************!*\
      !*** ./src/app/Model/Study/StudyObjects/Questions/DateQuestion.ts ***!
      \********************************************************************/

    /*! exports provided: DateQuestion */

    /***/
    function lGoz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateQuestion", function () {
        return DateQuestion;
      });
      /* harmony import */


      var _AbstractQuestion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./AbstractQuestion */
      "zfOo");
      /**
       * Ein DateQuestion stellt ein Fragenobjekt dar, bei dem man nur ein Kalenderdatum vom Typ
       * Date als Antwort angeben kann.
       */


      var DateQuestion = /*#__PURE__*/function (_AbstractQuestion__WE3) {
        _inherits(DateQuestion, _AbstractQuestion__WE3);

        var _super8 = _createSuper(DateQuestion);

        /**
         * Ein Attribut, was nicht als Parameter übergeben wird, ist answer. Dieses bezeichnet die Antwort,
         * die auf die Frage gegeben wird. Die Antwort stellt ein Datum vom Typ Date dar.
         *
         * @param questionText ist die Frage, die gestellt werden soll
         * @param id ist die eindeutige Identifikationsnummer des DateQuestions
         * @param fixed entscheidet, ob DateQuestion innerhalb eines Section-Elements eine feste Position hat oder die
         * Position von Studieninstanz zu Studieninstanz mit Hilfe von Randomisierung variiert
         */
        function DateQuestion(id, name, questionText, displayName, start, end) {
          var _thisSuper3, _this29;

          _classCallCheck(this, DateQuestion);

          _this29 = _super8.call(this, id, name, questionText, displayName);
          _this29.objectType = "DateQuestion";
          _this29.start = start;
          _this29.end = end;

          _set((_thisSuper3 = _assertThisInitialized(_this29), _getPrototypeOf(DateQuestion.prototype)), "answer", "", _thisSuper3, true);

          return _this29;
        }

        _createClass(DateQuestion, [{
          key: "start",
          get: function get() {
            return this._start;
          },
          set: function set(start) {
            this._start = start;
          }
        }, {
          key: "end",
          get: function get() {
            return this._end;
          },
          set: function set(end) {
            this._end = end;
          }
        }]);

        return DateQuestion;
      }(_AbstractQuestion__WEBPACK_IMPORTED_MODULE_0__["AbstractQuestion"]);
      /***/

    },

    /***/
    "n7sk":
    /*!*******************************************!*\
      !*** ./src/app/login/login.component.css ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function n7sk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".full-page {\r\n    height: 100%;\r\n    display: flex;\r\n    background-color: #303030;\r\n}\r\n\r\n.login-card {\r\n    margin: auto;\r\n    width: 350px;\r\n}\r\n\r\n.login-field {\r\n    width: 100%;\r\n}\r\n\r\nmat-card {\r\n    padding: 50px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXBhZ2Uge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XHJcbn1cclxuXHJcbi5sb2dpbi1jYXJkIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiAzNTBweDtcclxufVxyXG5cclxuLmxvZ2luLWZpZWxkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgICBwYWRkaW5nOiA1MHB4O1xyXG59Il19 */";
      /***/
    },

    /***/
    "osms":
    /*!**********************************************************!*\
      !*** ./src/app/Model/Study/StudyPrototypeDAO.service.ts ***!
      \**********************************************************/

    /*! exports provided: StudyPrototypeDAO */

    /***/
    function osms(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StudyPrototypeDAO", function () {
        return StudyPrototypeDAO;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _User_EMail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../User/EMail */
      "BfXG");
      /* harmony import */


      var _User_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../User/User */
      "rPx+");
      /* harmony import */


      var _KeyData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./KeyData */
      "r/57");
      /* harmony import */


      var _ReferenceTuple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./ReferenceTuple */
      "HfNz");
      /* harmony import */


      var _StudyObjects_SectionElement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./StudyObjects/SectionElement */
      "HEL/");
      /* harmony import */


      var _StudyObjects_Section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./StudyObjects/Section */
      "/3i5");
      /* harmony import */


      var _ShortDescription__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./ShortDescription */
      "FerX");
      /* harmony import */


      var _StudyObjects_PauseElement__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./StudyObjects/PauseElement */
      "j7zN");
      /* harmony import */


      var _StudyObjects_Questions_DateQuestion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./StudyObjects/Questions/DateQuestion */
      "lGoz");
      /* harmony import */


      var _StudyObjects_Questions_LinearScaleQuestion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./StudyObjects/Questions/LinearScaleQuestion */
      "Tcgm");
      /* harmony import */


      var _StudyObjects_Questions_MultipleChoiceQuestion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./StudyObjects/Questions/MultipleChoiceQuestion */
      "MsGT");
      /* harmony import */


      var _StudyObjects_Questions_TextQuestion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./StudyObjects/Questions/TextQuestion */
      "r8Zv");
      /* harmony import */


      var _StudyObjects_TextBlock__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./StudyObjects/TextBlock */
      "0HUV");
      /* harmony import */


      var _StudyObjects_VibrationElement__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./StudyObjects/VibrationElement */
      "1N3c");
      /* harmony import */


      var _StudyObjects_VibrationPattern__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./StudyObjects/VibrationPattern */
      "tJs4");
      /* harmony import */


      var _StudyPrototype__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./StudyPrototype */
      "hRBY");
      /* harmony import */


      var _src_app_app_settings__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @src/app/app-settings */
      "24n0");
      /* harmony import */


      var _src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @src/app/services/auth/auth.service */
      "9ans");
      /* harmony import */


      var _StudyObjects_Questions_QualificationQuestion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./StudyObjects/Questions/QualificationQuestion */
      "qPq2");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };

      var StudyPrototypeDAO = /*#__PURE__*/function () {
        function StudyPrototypeDAO(authService, http) {
          _classCallCheck(this, StudyPrototypeDAO);

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


        _createClass(StudyPrototypeDAO, [{
          key: "get",
          value: function get(id) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee43() {
              var study;
              return regeneratorRuntime.wrap(function _callee43$(_context43) {
                while (1) {
                  switch (_context43.prev = _context43.next) {
                    case 0:
                      _context43.next = 2;
                      return this.http.post(_src_app_app_settings__WEBPACK_IMPORTED_MODULE_18__["AppSettings"].baseURL + "StudyNew/" + id + "/", {
                        token: this.authService.getAuthToken()
                      }).toPromise().then(function (studyResult) {
                        var keyData = new _KeyData__WEBPACK_IMPORTED_MODULE_4__["KeyData"](studyResult.keyData.id, new _User_User__WEBPACK_IMPORTED_MODULE_3__["User"](studyResult.keyData.author.id, studyResult.keyData.author.firstName, studyResult.keyData.author.lastName, studyResult.keyData.author.permission, new _User_EMail__WEBPACK_IMPORTED_MODULE_2__["EMail"](studyResult.keyData.author.email)), studyResult.keyData.studyStatus, new _ShortDescription__WEBPACK_IMPORTED_MODULE_8__["ShortDescription"](studyResult.keyData.shortDescription), studyResult.keyData.fullDescription, studyResult.keyData.amplitudeNecessary, studyResult.keyData.name);

                        var _iterator7 = _createForOfIteratorHelper(studyResult.keyData.qualiQuestions),
                            _step7;

                        try {
                          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                            var qualiQuestion = _step7.value;
                            var toInsert = new _StudyObjects_Questions_QualificationQuestion__WEBPACK_IMPORTED_MODULE_20__["QualificationQuestion"](qualiQuestion.id, qualiQuestion.name, qualiQuestion.questionText, qualiQuestion.displayName, qualiQuestion.requiredAnswer);
                            keyData.qualiQuestions.push(toInsert);
                          }
                        } catch (err) {
                          _iterator7.e(err);
                        } finally {
                          _iterator7.f();
                        }

                        study = new _StudyPrototype__WEBPACK_IMPORTED_MODULE_17__["StudyPrototype"](keyData);
                        study.randomStrategy = studyResult.randomStrategy;
                        var sectionRef = [];

                        var _iterator8 = _createForOfIteratorHelper(studyResult.refSections),
                            _step8;

                        try {
                          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                            var ref = _step8.value;
                            sectionRef.push(new _ReferenceTuple__WEBPACK_IMPORTED_MODULE_5__["ReferenceTuple"](ref.ID, ref.isFixed));
                          }
                        } catch (err) {
                          _iterator8.e(err);
                        } finally {
                          _iterator8.f();
                        }

                        study.refSections = sectionRef;
                        var sections = [];

                        var _iterator9 = _createForOfIteratorHelper(studyResult.sections),
                            _step9;

                        try {
                          for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                            var section = _step9.value;
                            var refArray = [];

                            var _iterator12 = _createForOfIteratorHelper(section.sectionElements),
                                _step12;

                            try {
                              for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                                var _ref = _step12.value;
                                refArray.push(new _ReferenceTuple__WEBPACK_IMPORTED_MODULE_5__["ReferenceTuple"](_ref.ID, _ref.isFixed));
                              }
                            } catch (err) {
                              _iterator12.e(err);
                            } finally {
                              _iterator12.f();
                            }

                            var _toInsert = new _StudyObjects_Section__WEBPACK_IMPORTED_MODULE_7__["Section"](section.id, section.name, section.skippable, section.resultRelevant, section.randomStrategy);

                            _toInsert.sectionElements = refArray;
                            sections.push(_toInsert);
                          }
                        } catch (err) {
                          _iterator9.e(err);
                        } finally {
                          _iterator9.f();
                        }

                        study.sections = sections;
                        var sectionElements = [];

                        var _iterator10 = _createForOfIteratorHelper(studyResult.sectionElements),
                            _step10;

                        try {
                          for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                            var sectionElement = _step10.value;
                            var _refArray = [];

                            var _iterator13 = _createForOfIteratorHelper(sectionElement.studyObjects),
                                _step13;

                            try {
                              for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                                var _ref2 = _step13.value;

                                _refArray.push(new _ReferenceTuple__WEBPACK_IMPORTED_MODULE_5__["ReferenceTuple"](_ref2.ID, _ref2.isFixed));
                              }
                            } catch (err) {
                              _iterator13.e(err);
                            } finally {
                              _iterator13.f();
                            }

                            sectionElements.push(new _StudyObjects_SectionElement__WEBPACK_IMPORTED_MODULE_6__["SectionElement"](sectionElement.id, sectionElement.name, sectionElement.randomStrategy, _refArray));
                          }
                        } catch (err) {
                          _iterator10.e(err);
                        } finally {
                          _iterator10.f();
                        }

                        study.sectionElements = sectionElements;
                        var studyObjects = [];

                        var _iterator11 = _createForOfIteratorHelper(studyResult.studyObjects),
                            _step11;

                        try {
                          for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                            var studyObject = _step11.value;

                            switch (studyObject.studyObjectTypes) {
                              case 3:
                                // TEXTBLOCK
                                studyObjects.push(new _StudyObjects_TextBlock__WEBPACK_IMPORTED_MODULE_14__["TextBlock"](studyObject.id, studyObject.name, studyObject.text));
                                break;

                              case 4:
                                // QUESTION
                                switch (studyObject.questionType) {
                                  case 0:
                                    // DATE
                                    studyObjects.push(new _StudyObjects_Questions_DateQuestion__WEBPACK_IMPORTED_MODULE_10__["DateQuestion"](studyObject.id, studyObject.name, studyObject.questionText, studyObject.displayName));
                                    break;

                                  case 1:
                                    // LINEAR SCALE
                                    studyObjects.push(new _StudyObjects_Questions_LinearScaleQuestion__WEBPACK_IMPORTED_MODULE_11__["LinearScaleQuestion"](studyObject.id, studyObject.name, studyObject.questionText, studyObject.displayName, studyObject.numberOfChoices, studyObject.leftLabel, studyObject.rightLabel));
                                    break;

                                  case 2:
                                    // MULTIPLE
                                    studyObjects.push(new _StudyObjects_Questions_MultipleChoiceQuestion__WEBPACK_IMPORTED_MODULE_12__["MultipleChoiceQuestion"](studyObject.id, studyObject.name, studyObject.questionText, studyObject.displayName, studyObject.answerOptions, studyObject.maxChoices));
                                    break;

                                  case 3:
                                    // TEXT
                                    studyObjects.push(new _StudyObjects_Questions_TextQuestion__WEBPACK_IMPORTED_MODULE_13__["TextQuestion"](studyObject.id, studyObject.name, studyObject.questionText, studyObject.displayName));
                                    break;
                                }

                                break;

                              case 5:
                                // VIBRATIONPATTERN
                                var vibrationElements = [];

                                var _iterator14 = _createForOfIteratorHelper(studyObject.vibrationPatternElements),
                                    _step14;

                                try {
                                  for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                                    var _vibElement = _step14.value;

                                    if (_vibElement.amplitude == 0) {
                                      vibrationElements.push(new _StudyObjects_PauseElement__WEBPACK_IMPORTED_MODULE_9__["PauseElement"](_vibElement.duration));
                                    } else {
                                      vibrationElements.push(new _StudyObjects_VibrationElement__WEBPACK_IMPORTED_MODULE_15__["VibrationElement"](_vibElement.duration, _vibElement.amplitude));
                                    }
                                  }
                                } catch (err) {
                                  _iterator14.e(err);
                                } finally {
                                  _iterator14.f();
                                }

                                var vibElement = new _StudyObjects_VibrationPattern__WEBPACK_IMPORTED_MODULE_16__["VibrationPattern"](studyObject.id, studyObject.name);
                                vibElement.vibrationPatternElements = vibrationElements;
                                studyObjects.push(vibElement);
                                break;
                            }
                          }
                        } catch (err) {
                          _iterator11.e(err);
                        } finally {
                          _iterator11.f();
                        }

                        study.studyObjects = studyObjects;
                      });

                    case 2:
                      return _context43.abrupt("return", study);

                    case 3:
                    case "end":
                      return _context43.stop();
                  }
                }
              }, _callee43, this);
            }));
          }
          /**
           * Die Methode speichert asynchron object in einer Datenbank, welches nachdem es gespeichert wurde wieder mit get aufgerufen werden kann.
           * @param study StudyPrototype ist die Studie, die gespeichert werden soll
           */

        }, {
          key: "save",
          value: function save(study) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee44() {
              var id;
              return regeneratorRuntime.wrap(function _callee44$(_context44) {
                while (1) {
                  switch (_context44.prev = _context44.next) {
                    case 0:
                      id = -1;
                      _context44.next = 3;
                      return this.http.post(_src_app_app_settings__WEBPACK_IMPORTED_MODULE_18__["AppSettings"].baseURL + "SaveStudy/", {
                        study: study,
                        token: this.authService.getAuthToken()
                      }).toPromise().then(function (result) {
                        if (result != -1) {
                          id = result;
                        }
                      });

                    case 3:
                      return _context44.abrupt("return", id);

                    case 4:
                    case "end":
                      return _context44.stop();
                  }
                }
              }, _callee44, this);
            }));
          }
          /**
           * Die Methode aktualisiert object mit der Datenbank asynchron anhand seiner id.
           * @param object StudyPrototype ist die Studie, die aktualisiert werden soll
           */

        }, {
          key: "update",
          value: function update(object) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee45() {
              return regeneratorRuntime.wrap(function _callee45$(_context45) {
                while (1) {
                  switch (_context45.prev = _context45.next) {
                    case 0:
                      _context45.next = 2;
                      return this.save(object);

                    case 2:
                      return _context45.abrupt("return", true);

                    case 3:
                    case "end":
                      return _context45.stop();
                  }
                }
              }, _callee45, this);
            }));
          }
        }]);

        return StudyPrototypeDAO;
      }();

      StudyPrototypeDAO.ctorParameters = function () {
        return [{
          type: _src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_19__["AuthService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }];
      };

      StudyPrototypeDAO = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
      })
      /**
       * Das StudyPrototypeDAO ist für den Zugriff auf die StudyPrototype Objekte in der Datenbank verantwortlich.
       */
      , __metadata("design:paramtypes", [_src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_19__["AuthService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])], StudyPrototypeDAO);
      /***/
    },

    /***/
    "ozSw":
    /*!**************************************!*\
      !*** ./src/app/Model/Study/Types.ts ***!
      \**************************************/

    /*! exports provided: Types */

    /***/
    function ozSw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Types", function () {
        return Types;
      });

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
      /***/

    },

    /***/
    "pzGZ":
    /*!*****************************************************************!*\
      !*** ./src/app/services/study-wrapper/study-wrapper.service.ts ***!
      \*****************************************************************/

    /*! exports provided: StudyWrapperService */

    /***/
    function pzGZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StudyWrapperService", function () {
        return StudyWrapperService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _src_app_Model_Study_ReferenceTupleMembershipVerifier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @src/app/Model/Study/ReferenceTupleMembershipVerifier */
      "USEZ");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var StudyWrapperService = /*#__PURE__*/function () {
        /**
         * Setzt für den StudyWrapperService den ReferenceTupleMembershipVerifier. Dieser war dann undefiniert.
         */
        function StudyWrapperService() {
          _classCallCheck(this, StudyWrapperService);

          this.isDemo = false;
          this.referenceTupleMembershipVerifier = new _src_app_Model_Study_ReferenceTupleMembershipVerifier__WEBPACK_IMPORTED_MODULE_1__["ReferenceTupleMembershipVerifier"](undefined);
        }

        _createClass(StudyWrapperService, [{
          key: "getLastID",

          /**
           * Gibt die höchste bzw. letzte ID innerhalb der Menge von Sections, SectionElements, StudyObjects
           * und QualificationQuestions zurück.
           */
          value: function getLastID() {
            var lastID = 0;

            if (this._study) {
              var _iterator15 = _createForOfIteratorHelper(this._study.sections),
                  _step15;

              try {
                for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                  var section = _step15.value;

                  if (section.id > lastID) {
                    lastID = section.id;
                  }
                }
              } catch (err) {
                _iterator15.e(err);
              } finally {
                _iterator15.f();
              }

              var _iterator16 = _createForOfIteratorHelper(this._study.sectionElements),
                  _step16;

              try {
                for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                  var sectionelement = _step16.value;

                  if (sectionelement.id > lastID) {
                    lastID = sectionelement.id;
                  }
                }
              } catch (err) {
                _iterator16.e(err);
              } finally {
                _iterator16.f();
              }

              var _iterator17 = _createForOfIteratorHelper(this._study.studyObjects),
                  _step17;

              try {
                for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                  var studyobject = _step17.value;

                  if (studyobject.id > lastID) {
                    lastID = studyobject.id;
                  }
                }
              } catch (err) {
                _iterator17.e(err);
              } finally {
                _iterator17.f();
              }

              var _iterator18 = _createForOfIteratorHelper(this._study.keyData.qualiQuestions),
                  _step18;

              try {
                for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                  var qualiquestion = _step18.value;

                  if (qualiquestion.id > lastID) {
                    lastID = qualiquestion.id;
                  }
                }
              } catch (err) {
                _iterator18.e(err);
              } finally {
                _iterator18.f();
              }
            }

            return lastID;
          }
          /**
           * Holt sich zu einer bestimmten number den Zufallstypen ab.
           * @param value number für den Zufallstypen der zurückgegeben wird
           */

        }, {
          key: "getRandomizerName",
          value: function getRandomizerName(value) {
            switch (value) {
              case 0:
                return "Keine";

              case 1:
                return "Einfacher Zufall";
            }
          }
        }, {
          key: "study",
          get: function get() {
            return this._study;
          },
          set: function set(study) {
            this._study = study;
            this.referenceTupleMembershipVerifier.studyPrototype = this._study;
            this.lastID = this.getLastID();
          }
        }, {
          key: "lastID",
          set: function set(lastID) {
            if (lastID == null) {
              throw new Error("Setting the last ID to null or undefined is not allowed.");
            }

            this._lastID = lastID;
          }
          /**
           * Auf jeden get()-Aufruf wird die aktuelle lastID inkrementiert zurückgegeben.
           */
          ,
          get: function get() {
            this._lastID += 1;
            return this._lastID;
          }
        }]);

        return StudyWrapperService;
      }();

      StudyWrapperService.ctorParameters = function () {
        return [];
      };

      StudyWrapperService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      })
      /**
       * Der StudyWrapperService setzt eine beliebige Studie als Property des Services, sodass man mit dieser
       * in der Studienteilnahme, sowie Studienerstellung umgehen kann.
       */
      , __metadata("design:paramtypes", [])], StudyWrapperService);
      /***/
    },

    /***/
    "qPq2":
    /*!*****************************************************************************!*\
      !*** ./src/app/Model/Study/StudyObjects/Questions/QualificationQuestion.ts ***!
      \*****************************************************************************/

    /*! exports provided: QualificationQuestion */

    /***/
    function qPq2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QualificationQuestion", function () {
        return QualificationQuestion;
      });
      /* harmony import */


      var _AbstractQuestion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./AbstractQuestion */
      "zfOo");
      /**
       * Ein QualificationQuestion ist ein Fragenobjekt, das eine Ausschlussfrage modellieren soll
       * (als Teilnahmevoraussetzung zu einer Studie). Man kann nur zwei, selbst definierbare,
       * Antwortoptionen zur Verfügung stellen. Damit soll eine Ja-Nein-Ausschlussfrage realisiert werden.
       * Man kann dann auch nur eine Antwortoption auswählen.
       */


      var QualificationQuestion = /*#__PURE__*/function (_AbstractQuestion__WE4) {
        _inherits(QualificationQuestion, _AbstractQuestion__WE4);

        var _super9 = _createSuper(QualificationQuestion);

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
        function QualificationQuestion(id, name, questionText, displayName, requiredAnswer) {
          var _this30;

          _classCallCheck(this, QualificationQuestion);

          _this30 = _super9.call(this, id, name, questionText, displayName);
          _this30.requiredAnswer = requiredAnswer;
          return _this30;
        }

        _createClass(QualificationQuestion, [{
          key: "requiredAnswer",
          get: function get() {
            return this._requiredAnswer;
          },
          set: function set(requiredAnswer) {
            if (requiredAnswer == null) {
              throw new Error("RequiredAnswer darf nicht null sein.");
            }

            this._requiredAnswer = requiredAnswer;
          }
        }]);

        return QualificationQuestion;
      }(_AbstractQuestion__WEBPACK_IMPORTED_MODULE_0__["AbstractQuestion"]);
      /***/

    },

    /***/
    "r/57":
    /*!****************************************!*\
      !*** ./src/app/Model/Study/KeyData.ts ***!
      \****************************************/

    /*! exports provided: KeyData */

    /***/
    function r57(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KeyData", function () {
        return KeyData;
      });
      /**
       * Die Klasse public class KeyData enthählt alle wichtigen Schlüsselinformationen die für eine Studie benötigt werden.
       */


      var KeyData = /*#__PURE__*/function () {
        function KeyData(id, author, studyStatus, shortdescription, fulldescription, amplitudeNecessary, name) {
          _classCallCheck(this, KeyData);

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

        _createClass(KeyData, [{
          key: "id",
          get: function get() {
            return this._id;
          },
          set: function set(id) {
            this._id = id;
          }
        }, {
          key: "author",
          get: function get() {
            return this._author;
          },
          set: function set(user) {
            this._author = user;
          }
        }, {
          key: "amplitudeNecessary",
          get: function get() {
            return this._amplitudeNecessary;
          },
          set: function set(amplitudeNecessary) {
            if (amplitudeNecessary == null) {
              throw new Error("Parameter darf nicht null sein!");
            }

            this._amplitudeNecessary = amplitudeNecessary;
          }
        }, {
          key: "studyStatus",
          get: function get() {
            return this._studyStatus;
          },
          set: function set(studyStatus) {
            if (studyStatus == null) {
              throw new Error("Parameter darf nicht null sein!");
            }

            this._studyStatus = studyStatus;
          }
        }, {
          key: "name",
          get: function get() {
            return this._name;
          },
          set: function set(name) {
            if (!name) {
              throw new Error("Parameter darf nicht null sein!");
            }

            this._name = name;
          }
        }, {
          key: "shortDescription",
          get: function get() {
            return this._shortDescription;
          },
          set: function set(shortDescription) {
            this._shortDescription = shortDescription;
          }
        }, {
          key: "fullDescription",
          get: function get() {
            return this._fullDescription;
          },
          set: function set(fullDescription) {
            this._fullDescription = fullDescription;
          }
        }, {
          key: "qualiQuestions",
          get: function get() {
            return this._qualiQuestions;
          },
          set: function set(qualiQuestions) {
            this._qualiQuestions = qualiQuestions;
          }
        }]);

        return KeyData;
      }();
      /***/

    },

    /***/
    "r8Zv":
    /*!********************************************************************!*\
      !*** ./src/app/Model/Study/StudyObjects/Questions/TextQuestion.ts ***!
      \********************************************************************/

    /*! exports provided: TextQuestion */

    /***/
    function r8Zv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextQuestion", function () {
        return TextQuestion;
      });
      /* harmony import */


      var _AbstractQuestion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./AbstractQuestion */
      "zfOo");
      /**
       * Ein TextQuestion ist ein Fragenobjekt, bei dem man als Antwort
       * nur einen Text schreiben kann.
       */


      var TextQuestion = /*#__PURE__*/function (_AbstractQuestion__WE5) {
        _inherits(TextQuestion, _AbstractQuestion__WE5);

        var _super10 = _createSuper(TextQuestion);

        /**
         * Ein Attribut, was nicht als Parameter übergeben wird, ist answer. Dieses bezeichnet die Antwort,
         * die auf die Frage gegeben wird. Die Antwort stellt einen Text vom Typ string dar.
         *
         * @param questionText ist die Frage, die gestellt werden soll
         * @param id ist die eindeutige Identifikationsnummer des TextQuestions
         * @param fixed entscheidet, ob TextQuestion innerhalb eines Section-Elements eine feste Position hat oder die
         * Position von Studieninstanz zu Studieninstanz mit Hilfe von Randomisierung variiert
         */
        function TextQuestion(id, name, questionText, displayName, length) {
          var _thisSuper4, _this31;

          _classCallCheck(this, TextQuestion);

          _this31 = _super10.call(this, id, name, questionText, displayName);
          _this31.objectType = "TextQuestion";
          _this31.length = length;

          _set((_thisSuper4 = _assertThisInitialized(_this31), _getPrototypeOf(TextQuestion.prototype)), "answer", "", _thisSuper4, true);

          return _this31;
        }

        _createClass(TextQuestion, [{
          key: "length",
          get: function get() {
            return this._length;
          },
          set: function set(length) {
            this._length = length;
          }
        }]);

        return TextQuestion;
      }(_AbstractQuestion__WEBPACK_IMPORTED_MODULE_0__["AbstractQuestion"]);
      /***/

    },

    /***/
    "rPx+":
    /*!************************************!*\
      !*** ./src/app/Model/User/User.ts ***!
      \************************************/

    /*! exports provided: User */

    /***/
    function rPx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "User", function () {
        return User;
      });
      /**
       * Die Klasse User stellt einen Benutzer da.
       */


      var User = /*#__PURE__*/function () {
        /**
         * Ein neuer Benutzer wird erstellt und dabei wird sichergestellt, dass die Parameter gültig sind.
         * @param id
         * @param firstName
         * @param lastName
         * @param permission sagt aus, welche Aktionen ein Benuter durchführen kann
         * @param password
         * @param email
         */
        function User(id, firstName, lastName, permission, email) {
          _classCallCheck(this, User);

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

        _createClass(User, [{
          key: "ensureNameValidation",
          value: function ensureNameValidation(toValidate) {
            if (!toValidate) {
              throw new Error("Name kann nicht null oder leer sein.");
            }

            return true;
          }
        }, {
          key: "ensurePermissionValidation",
          value: function ensurePermissionValidation(permission) {
            if (permission == undefined) {
              throw new Error("Userpermission kann nicht null oder leer sein.");
            }

            return true;
          }
          /**
           * Überprüft, ob der angegebene User toCompare mit dem aktuellen User übereinstimmt.
           * @param toCompare
           */

        }, {
          key: "equals",
          value: function equals(toCompare) {
            if (this.firstName == toCompare.firstName && this.id == toCompare.id && this.lastName == toCompare.lastName && this.permission == toCompare.permission) {
              return true;
            }

            return false;
          }
        }, {
          key: "id",
          get: function get() {
            return this._id;
          },
          set: function set(id) {
            this._id = id;
          }
        }, {
          key: "firstName",
          get: function get() {
            return this._firstName;
          },
          set: function set(firstName) {
            if (this.ensureNameValidation(firstName)) {
              this._firstName = firstName;
            }
          }
        }, {
          key: "lastName",
          get: function get() {
            return this._lastName;
          },
          set: function set(lastName) {
            if (this.ensureNameValidation(lastName)) {
              this._lastName = lastName;
            }
          }
        }, {
          key: "permission",
          get: function get() {
            return this._permission;
          },
          set: function set(permission) {
            if (this.ensurePermissionValidation(permission)) {
              this._permission = permission;
            }
          }
        }, {
          key: "email",
          get: function get() {
            return this._email;
          },
          set: function set(email) {
            this._email = email;
          }
        }]);

        return User;
      }();
      /***/

    },

    /***/
    "rUpu":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/studycreation/studycreation.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function rUpu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mat-toolbar>\r\n    <img src=\"assets/images/Icon.png\" style=\"height: 4vh;\" />\r\n    <span>&nbsp;&nbsp;Neue Studie erstellen</span>\r\n    <span class=\"flexExpand\"></span>\r\n    <a class=\"helpButton\" mat-flat-button href=\"https://www.youtube.com/watch?v=RfdquOH7AxI\" target=\"_blank\">\r\n        <mat-icon>help</mat-icon>&nbsp;Hilfe\r\n    </a>\r\n</mat-toolbar>\r\n<mat-sidenav-container>\r\n    <mat-sidenav opened mode=\"side\">\r\n        <mat-nav-list>\r\n            <a mat-list-item [routerLink]=\"['general-editing']\">\r\n                <mat-icon>settings_applications</mat-icon>&nbsp;Allgemein\r\n            </a>\r\n            <mat-divider></mat-divider>\r\n            <a mat-list-item [routerLink]=\"['question-editing']\">\r\n                <mat-icon>speaker_notes</mat-icon>&nbsp;Fragen\r\n            </a>\r\n            <a mat-list-item [routerLink]=\"['textblock-editing']\">\r\n                <mat-icon>article</mat-icon>&nbsp;Texte\r\n            </a>\r\n            <a mat-list-item [routerLink]=\"['vibrationpattern-editing']\">\r\n                <mat-icon>vibration</mat-icon>&nbsp;Vibrationsmuster\r\n            </a>\r\n            <mat-divider></mat-divider>\r\n            <a mat-list-item [routerLink]=\"['sectionelement-editing']\">\r\n                <mat-icon>view_carousel</mat-icon>&nbsp;Studienseiten\r\n            </a>\r\n            <mat-divider></mat-divider>\r\n            <a mat-list-item [routerLink]=\"['section-editing']\">\r\n                <mat-icon>receipt</mat-icon>&nbsp;Abschnitte\r\n            </a>\r\n            <mat-divider></mat-divider>\r\n            <a mat-list-item [routerLink]=\"['sequence-editing']\">\r\n                <mat-icon>reorder</mat-icon>&nbsp;Studienablauf\r\n            </a>\r\n            <mat-divider></mat-divider>\r\n\r\n            <div class=\"bottomrow\">\r\n                <mat-divider></mat-divider>\r\n                <a mat-list-item (click)=\"save()\">\r\n\r\n                    <mat-icon>save</mat-icon>&nbsp;Speichern&nbsp;<mat-spinner *ngIf=\"this.saving\" color=\"accent\"\r\n                        diameter=\"25\"></mat-spinner>\r\n                </a>\r\n                <mat-divider></mat-divider>\r\n                <a mat-list-item [routerLink]=\"['../dashboard/my-studies']\">\r\n                    <mat-icon>keyboard_backspace</mat-icon>&nbsp;Zurück\r\n                </a>\r\n            </div>\r\n        </mat-nav-list>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content>\r\n        <router-outlet></router-outlet>\r\n        <br><br>\r\n    </mat-sidenav-content>\r\n</mat-sidenav-container>";
      /***/
    },

    /***/
    "rhQZ":
    /*!**********************************************!*\
      !*** ./src/app/Model/User/UserPermission.ts ***!
      \**********************************************/

    /*! exports provided: UserPermission */

    /***/
    function rhQZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserPermission", function () {
        return UserPermission;
      });
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
      /***/

    },

    /***/
    "tJs4":
    /*!**************************************************************!*\
      !*** ./src/app/Model/Study/StudyObjects/VibrationPattern.ts ***!
      \**************************************************************/

    /*! exports provided: VibrationPattern */

    /***/
    function tJs4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VibrationPattern", function () {
        return VibrationPattern;
      });
      /* harmony import */


      var _AbstractStudyObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./AbstractStudyObject */
      "Q9Pm");
      /**
       * Ein VibrationPattern stellt ein Studienobjekt dar, mit dem benutzerdefinierte
       * Vibrationsmuster, bestehend aus einstellbaren Pause- und Vibrieren-Elementen, erstellt werden können.
       */


      var VibrationPattern = /*#__PURE__*/function (_AbstractStudyObject_4) {
        _inherits(VibrationPattern, _AbstractStudyObject_4);

        var _super11 = _createSuper(VibrationPattern);

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
        function VibrationPattern(id, name) {
          var _this32;

          _classCallCheck(this, VibrationPattern);

          _this32 = _super11.call(this, id, name);
          _this32.objectType = "VibrationPattern";
          _this32.vibrationPatternElements = [];
          return _this32;
        }

        _createClass(VibrationPattern, [{
          key: "vibrationPatternElements",
          get: function get() {
            return this._vibrationPatternElements;
          },
          set: function set(vibrationPatternElements) {
            if (vibrationPatternElements == null) {
              throw new Error("Die Liste vibrationPatternElements konnte nicht gesetzt werden, da sie undefiniert ist.");
            }

            this._vibrationPatternElements = vibrationPatternElements;
          }
        }]);

        return VibrationPattern;
      }(_AbstractStudyObject__WEBPACK_IMPORTED_MODULE_0__["AbstractStudyObject"]);
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _src_app_app_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @src/app/app.routes */
      "RUEf");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(_src_app_app_routes__WEBPACK_IMPORTED_MODULE_2__["routes"])],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "vtpD":
    /*!******************************************!*\
      !*** ./src/app/login/login.component.ts ***!
      \******************************************/

    /*! exports provided: LoginComponent */

    /***/
    function vtpD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./login.component.html */
      "in5m");
      /* harmony import */


      var _login_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login.component.css */
      "n7sk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/alert/alert.service */
      "kyzu");
      /* harmony import */


      var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/auth/auth.service */
      "9ans");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };

      var LoginComponent = /*#__PURE__*/function () {
        /**
         * Konstruktor der LoginComponent. Darin werden sämtliche Services initialisert,
         * die für das Anmelden gebraucht werden.
         * @param router Router Singleton, zum Routen des Pfads nach Eintritt eines Ereignisses
         * @param authService AuthService Singleton, ist für die Authentifizierung des Nutzers zuständig
         */
        function LoginComponent(router, authService, alertService) {
          _classCallCheck(this, LoginComponent);

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


        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.authService.isAuthenticated()) {
              this.toDashboard();
            }

            this.email = "";
            this.password = "";
          }
          /**
           * Loggt einen User mit den Klassenattributen ein.
           */

        }, {
          key: "login",
          value: function login() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee46() {
              var _this33 = this;

              return regeneratorRuntime.wrap(function _callee46$(_context46) {
                while (1) {
                  switch (_context46.prev = _context46.next) {
                    case 0:
                      if (!(this.email != "" && this.password != "" && this.email != undefined && this.password != undefined)) {
                        _context46.next = 3;
                        break;
                      }

                      _context46.next = 3;
                      return this.authService.login(this.email, this.password).then(function (result) {
                        if (result) {
                          _this33.toDashboard();
                        } else {
                          _this33.alertService.alert("Anmeldung fehlgeschlagen. Überprüfe die eingegebene E-Mail und das Passwort.");
                        }
                      });

                    case 3:
                    case "end":
                      return _context46.stop();
                  }
                }
              }, _callee46, this);
            }));
          }
          /**
           * Navigiert den User zur Registrierungsansicht.
           */

        }, {
          key: "toRegister",
          value: function toRegister() {
            this.router.navigate(["register"], {
              replaceUrl: true
            });
          }
        }, {
          key: "toDashboard",
          value: function toDashboard() {
            this.router.navigate(["dashboard"], {
              replaceUrl: true
            });
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
        }];
      };

      LoginComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })
      /**
       * Die LoginComponent ist zum Anmelden des Users zuständig. Falls der Nutzer noch nicht
       * registriert ist, wird er durch die LoginComponent in die Registrier-Ansicht navigiert.
       * Falls er bereits authentifiziert wurde, gelangt er durch Anmeldung automatisch in die Anwendung.
       */
      , __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])], LoginComponent);
      /***/
    },

    /***/
    "wLiR":
    /*!********************************!*\
      !*** ./src/material.module.ts ***!
      \********************************/

    /*! exports provided: MaterialModule */

    /***/
    function wLiR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
        return MaterialModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "1O3W");
      /* harmony import */


      var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/tree */
      "y7ui");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "1z/I");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "vrAh");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "Ynp+");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "pMoy");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/chips */
      "f44v");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/divider */
      "BSbQ");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/expansion */
      "o4Yh");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/list */
      "SqCe");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/menu */
      "rJgo");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/paginator */
      "5QHs");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "pu8Q");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/select */
      "ZTz/");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "q7Ft");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "zHaW");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/sort */
      "LUZP");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/table */
      "OaSA");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/tabs */
      "M9ds");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "l0rg");
      /* harmony import */


      var _angular_material_tree__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/tree */
      "OLiY");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "jMqV");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var materialModules = [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__["CdkTreeModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_24__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__["MatToolbarModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_27__["MatTreeModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_28__["MatSlideToggleModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogModule"]];

      var MaterialModule = function MaterialModule() {
        _classCallCheck(this, MaterialModule);
      };

      MaterialModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [].concat(materialModules),
        exports: [].concat(materialModules)
      })], MaterialModule);
      /***/
    },

    /***/
    "xpyY":
    /*!****************************************************************************!*\
      !*** ./src/app/dashboard/available-studies/available-studies.component.ts ***!
      \****************************************************************************/

    /*! exports provided: AvailableStudiesComponent */

    /***/
    function xpyY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AvailableStudiesComponent", function () {
        return AvailableStudiesComponent;
      });
      /* harmony import */


      var _raw_loader_available_studies_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./available-studies.component.html */
      "eH3k");
      /* harmony import */


      var _available_studies_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./available-studies.component.css */
      "Q2gg");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var AvailableStudiesComponent = /*#__PURE__*/function () {
        function AvailableStudiesComponent() {
          _classCallCheck(this, AvailableStudiesComponent);
        }

        _createClass(AvailableStudiesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AvailableStudiesComponent;
      }();

      AvailableStudiesComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-available-studies',
        template: _raw_loader_available_studies_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_available_studies_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], AvailableStudiesComponent);
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "wAiw");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @src/environments/environment */
      "AytR");

      if (_src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "zd4C":
    /*!***************************************************************!*\
      !*** ./src/app/services/app-settings/app-settings.service.ts ***!
      \***************************************************************/

    /*! exports provided: AppSettingsService */

    /***/
    function zd4C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppSettingsService", function () {
        return AppSettingsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var AppSettingsService = /*#__PURE__*/function () {
        /**
         * Standardkonstruktor für den AppSettingsService.
         */
        function AppSettingsService() {
          _classCallCheck(this, AppSettingsService);

          this._hasVibrator = false;
          this._hasAmplitude = false;
        }

        _createClass(AppSettingsService, [{
          key: "hasVibrator",
          get: function get() {
            return this._hasVibrator;
          },
          set: function set(hasVibrator) {
            if (hasVibrator == null) {
              throw new Error("Setting hasVibrator to null or undefined is not allowed.");
            }

            this._hasVibrator = hasVibrator;
          }
        }, {
          key: "hasAmplitude",
          get: function get() {
            return this._hasAmplitude;
          },
          set: function set(hasAmplitude) {
            if (hasAmplitude == null) {
              throw new Error("Setting hasAmplitude to null or undefined is not allowed.");
            }

            this._hasAmplitude = hasAmplitude;
          }
        }]);

        return AppSettingsService;
      }();

      AppSettingsService.ctorParameters = function () {
        return [];
      };

      AppSettingsService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      })
      /**
       * Der AppSettingsService verwaltet die Speicherung und Bearbeitung
       * der App-Einstellungn. Zu diesen Einstellungen zählt, ob das mobile Endgerät vibrieren kann
       * und ob sie Amplituden unterstützt.
       */
      , __metadata("design:paramtypes", [])], AppSettingsService);
      /***/
    },

    /***/
    "zfOo":
    /*!************************************************************************!*\
      !*** ./src/app/Model/Study/StudyObjects/Questions/AbstractQuestion.ts ***!
      \************************************************************************/

    /*! exports provided: AbstractQuestion */

    /***/
    function zfOo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbstractQuestion", function () {
        return AbstractQuestion;
      });
      /* harmony import */


      var _AbstractStudyObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../AbstractStudyObject */
      "Q9Pm");
      /**
       * Ein AbstractQuestion stellt ein allgemeines Fragenobjekt dar.
       */


      var AbstractQuestion = /*#__PURE__*/function (_AbstractStudyObject_5) {
        _inherits(AbstractQuestion, _AbstractStudyObject_5);

        var _super12 = _createSuper(AbstractQuestion);

        /**
         * Ein Attribut, was nicht als Parameter übergeben wird, ist answer. Dieses bezeichnet die Antwort,
         * die auf die Frage gegeben wird kann und dessen Typ bzw. Antwortmöglichkeit von der erbenden Klasse abhängt
         *
         * @param questionText ist die Frage, die gestellt werden soll
         * @param id ist die eindeutige Identifikationsnummer des Fragenobjekts
         */
        function AbstractQuestion(id, name, questionText, displayName) {
          var _this34;

          _classCallCheck(this, AbstractQuestion);

          _this34 = _super12.call(this, id, name);
          _this34._displayName = "";
          _this34._questionText = "";
          _this34.questionText = questionText;
          _this34._answer = undefined;
          _this34.displayName = displayName;
          return _this34;
        }

        _createClass(AbstractQuestion, [{
          key: "displayName",
          get: function get() {
            return this._displayName;
          },
          set: function set(displayName) {
            this._displayName = displayName;
          }
        }, {
          key: "questionText",
          get: function get() {
            return this._questionText;
          },
          set: function set(questionText) {
            this._questionText = questionText;
          }
        }, {
          key: "answer",
          get: function get() {
            return this._answer;
          },
          set: function set(answer) {
            if (answer == null) {
              throw new Error("Answer darf nicht null sein.");
            }

            this._answer = answer;
          }
        }]);

        return AbstractQuestion;
      }(_AbstractStudyObject__WEBPACK_IMPORTED_MODULE_0__["AbstractStudyObject"]);
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
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
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map