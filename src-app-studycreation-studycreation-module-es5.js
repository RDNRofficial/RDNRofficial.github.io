(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-studycreation-studycreation-module"], {
    /***/
    "3c42":
    /*!**********************************************************************************************!*\
      !*** ./src/app/studycreation/vibrationpattern-editing/vibrationpattern-editing.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: VibrationPatternEditingComponent */

    /***/
    function c42(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VibrationPatternEditingComponent", function () {
        return VibrationPatternEditingComponent;
      });
      /* harmony import */


      var _raw_loader_vibrationpattern_editing_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./vibrationpattern-editing.component.html */
      "lt1v");
      /* harmony import */


      var _vibrationpattern_editing_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./vibrationpattern-editing.component.css */
      "qQFY");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "ltgo");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _src_app_Model_Study_StudyObjects_PauseElement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @src/app/Model/Study/StudyObjects/PauseElement */
      "j7zN");
      /* harmony import */


      var _src_app_Model_Study_StudyObjects_VibrationElement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @src/app/Model/Study/StudyObjects/VibrationElement */
      "1N3c");
      /* harmony import */


      var _src_app_Model_Study_StudyObjects_VibrationPattern__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @src/app/Model/Study/StudyObjects/VibrationPattern */
      "tJs4");
      /* harmony import */


      var _services_study_wrapper_study_wrapper_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../services/study-wrapper/study-wrapper.service */
      "pzGZ");
      /* harmony import */


      var _error_state_matchers_NumberErrorStateMatcher__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../error-state-matchers/NumberErrorStateMatcher */
      "D3xR");

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

      var VibrationPatternEditingComponent = /*#__PURE__*/function () {
        function VibrationPatternEditingComponent(studywrapper) {
          _classCallCheck(this, VibrationPatternEditingComponent);

          this.studywrapper = studywrapper;
          /**
           * Einfaches vorinitialisiertes VibrationElement
           */

          this.compareVibration = new _src_app_Model_Study_StudyObjects_VibrationElement__WEBPACK_IMPORTED_MODULE_6__["VibrationElement"](1, 1);
          /**
           * Einfaches vorinitialisiertes PauseELement
           */

          this.comparePause = new _src_app_Model_Study_StudyObjects_PauseElement__WEBPACK_IMPORTED_MODULE_5__["PauseElement"](0);
          /**
           * Toolbox in der das compareVibration Element und comparePause Element liegen.
           */

          this.toolbox = [this.compareVibration, this.comparePause];
          /**
           * Array in dem alle VibrationPattern die erstellt wurden liegen.
           */

          this.vibrationpatterns = [];
          this.formControls = [];
          this.matcher = new _error_state_matchers_NumberErrorStateMatcher__WEBPACK_IMPORTED_MODULE_9__["NumberErrorStateMatcher"]();
        }
        /**
         * VibrationPattern aus der Study werden in das vibrationpatterns Array in der Klasse geladen.
         */


        _createClass(VibrationPatternEditingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.studywrapper.study.studyObjects.forEach(function (studyobject) {
              if (studyobject instanceof _src_app_Model_Study_StudyObjects_VibrationPattern__WEBPACK_IMPORTED_MODULE_7__["VibrationPattern"]) {
                _this.vibrationpatterns.unshift(studyobject);

                _this.formControls.unshift([[]]);
              }
            });
            var i = 0;

            var _iterator = _createForOfIteratorHelper(this.vibrationpatterns),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var vibPattern = _step.value;
                var j = 0;

                var _iterator2 = _createForOfIteratorHelper(vibPattern.vibrationPatternElements),
                    _step2;

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var vpE = _step2.value;
                    this.addVibrationFormControl(i, j, vpE);
                    j++;
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }

                i++;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
          /**
           *
           * @param vibIndex
           * @param placeIndex
           * @param vibrationPatternElement
           */

        }, {
          key: "addVibrationFormControl",
          value: function addVibrationFormControl(vibIndex, placeIndex, vibrationPatternElement) {
            var durationControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(0)]
            });
            var amplitudeControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(255)]
            });
            this.formControls[vibIndex].splice(placeIndex, 0, [durationControl, amplitudeControl]);
            durationControl.patchValue(vibrationPatternElement.duration);
            var toInsert = 1;

            if (vibrationPatternElement.amplitude) {
              toInsert = vibrationPatternElement.amplitude;
            }

            amplitudeControl.patchValue(toInsert);
            durationControl.valueChanges.subscribe(function (value) {
              var toChange = value;

              if (value < 0) {
                toChange = 0;
              }

              if (!Number(value)) {
                toChange = 1;
              }

              vibrationPatternElement.duration = toChange;
            });
            amplitudeControl.valueChanges.subscribe(function (value) {
              var toChange = value;

              if (value < 1) {
                toChange = 1;
              }

              if (value > 255) {
                toChange = 255;
              }

              if (!Number(value)) {
                toChange = 1;
              }

              vibrationPatternElement.amplitude = toChange;
            });
          }
          /**
           * Ein neues leeres VibrationPattern wird erstellt.
           */

        }, {
          key: "onAddVibrationPattern",
          value: function onAddVibrationPattern() {
            var toInsert = new _src_app_Model_Study_StudyObjects_VibrationPattern__WEBPACK_IMPORTED_MODULE_7__["VibrationPattern"](this.studywrapper.lastID, "", "");
            this.vibrationpatterns.unshift(toInsert);
            this.studywrapper.study.studyObjects.unshift(toInsert);
            this.formControls.unshift([[]]);
          }
          /**
           * Beim draggen eines Vibration oder PauseElements wird das VibrationPattern entsprechend editiert
           * @param event
           * @param vibIndex
           */

        }, {
          key: "onDrop",
          value: function onDrop(event, vibIndex) {
            if (event.previousContainer.id == "toolbox") {
              var toInsert;

              if (event.previousContainer.data[event.previousIndex] instanceof _src_app_Model_Study_StudyObjects_VibrationElement__WEBPACK_IMPORTED_MODULE_6__["VibrationElement"]) {
                toInsert = new _src_app_Model_Study_StudyObjects_VibrationElement__WEBPACK_IMPORTED_MODULE_6__["VibrationElement"](1, 1);
              } else {
                toInsert = new _src_app_Model_Study_StudyObjects_PauseElement__WEBPACK_IMPORTED_MODULE_5__["PauseElement"](1);
              }

              event.container.data.splice(event.currentIndex, 0, toInsert);
              this.addVibrationFormControl(vibIndex, event.currentIndex, toInsert);
            }

            if (event.previousContainer === event.container) {
              Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
              Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(this.formControls[vibIndex], event.previousIndex, event.currentIndex);
            }
          }
          /**
           * Das VibrationPattern mit der angegebene id wird aus der Studie und der Webapp entfernt.
           * @param index
           * @param id
           */

        }, {
          key: "removeFromStudy",
          value: function removeFromStudy(index, id) {
            this.vibrationpatterns.splice(index, 1);
            this.removeFromSectionElement(id);
            this.formControls.splice(index, 1);
            this.studywrapper.study.studyObjects = this.studywrapper.study.studyObjects.filter(function (element) {
              return element.id != id;
            });
          }
          /**
           * Entfernt ein VibrationPattern von allen SectionElements in der Studie
           * @param id
           */

        }, {
          key: "removeFromSectionElement",
          value: function removeFromSectionElement(id) {
            var _iterator3 = _createForOfIteratorHelper(this.studywrapper.study.sectionElements),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var sectionelement = _step3.value;
                var index = 0;

                var _iterator4 = _createForOfIteratorHelper(sectionelement.studyObjects),
                    _step4;

                try {
                  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                    var studyObjectRef = _step4.value;

                    if (studyObjectRef.ID == id) {
                      sectionelement.studyObjects.splice(index, 1);
                    }

                    index++;
                  }
                } catch (err) {
                  _iterator4.e(err);
                } finally {
                  _iterator4.f();
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
          /**
           * Entfernt ein Element aus dem Array
           * @param targetArray
           * @param index
           */

        }, {
          key: "removeFromArray",
          value: function removeFromArray(targetArray, index) {
            targetArray.splice(index, 1);
          }
          /**
           * Entfernt ein Vibration oder Pause Element von einem VibrationPattern
           * @param vibIndex
           * @param elIndex
           */

        }, {
          key: "removeFromVibrationPattern",
          value: function removeFromVibrationPattern(vibIndex, elIndex) {
            this.vibrationpatterns[vibIndex].vibrationPatternElements.splice(elIndex, 1);
            this.formControls[vibIndex].splice(elIndex, 1);
          }
          /**
           * Prüft, ob ein Element vom Typ VibrationElement ist.
           * @param val
           */

        }, {
          key: "isVibration",
          value: function isVibration(val) {
            return val instanceof _src_app_Model_Study_StudyObjects_VibrationElement__WEBPACK_IMPORTED_MODULE_6__["VibrationElement"];
          }
          /**
           * Prüft, ob ein Element vom Typ PauseElement ist.
           * @param val
           */

        }, {
          key: "isPause",
          value: function isPause(val) {
            return val instanceof _src_app_Model_Study_StudyObjects_PauseElement__WEBPACK_IMPORTED_MODULE_5__["PauseElement"];
          }
        }]);

        return VibrationPatternEditingComponent;
      }();

      VibrationPatternEditingComponent.ctorParameters = function () {
        return [{
          type: _services_study_wrapper_study_wrapper_service__WEBPACK_IMPORTED_MODULE_8__["StudyWrapperService"]
        }];
      };

      VibrationPatternEditingComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-vibrationpattern-editing',
        template: _raw_loader_vibrationpattern_editing_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_vibrationpattern_editing_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_services_study_wrapper_study_wrapper_service__WEBPACK_IMPORTED_MODULE_8__["StudyWrapperService"]])], VibrationPatternEditingComponent);
      /***/
    },

    /***/
    "4XXs":
    /*!******************************************************************************!*\
      !*** ./src/app/studycreation/question-editing/question-editing.component.ts ***!
      \******************************************************************************/

    /*! exports provided: QuestionEditingComponent */

    /***/
    function XXs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuestionEditingComponent", function () {
        return QuestionEditingComponent;
      });
      /* harmony import */


      var _raw_loader_question_editing_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./question-editing.component.html */
      "RFVM");
      /* harmony import */


      var _question_editing_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./question-editing.component.css */
      "cbKi");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _src_app_Model_Study_StudyObjects_Questions_AbstractQuestion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @src/app/Model/Study/StudyObjects/Questions/AbstractQuestion */
      "zfOo");
      /* harmony import */


      var _services_study_wrapper_study_wrapper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/study-wrapper/study-wrapper.service */
      "pzGZ");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _src_app_Model_Study_StudyObjects_Questions_LinearScaleQuestion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @src/app/Model/Study/StudyObjects/Questions/LinearScaleQuestion */
      "Tcgm");
      /* harmony import */


      var _src_app_Model_Study_StudyObjects_Questions_MultipleChoiceQuestion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @src/app/Model/Study/StudyObjects/Questions/MultipleChoiceQuestion */
      "MsGT");
      /* harmony import */


      var _question_selection_dialog_question_selection_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./question-selection-dialog/question-selection-dialog.component */
      "Uyn7");
      /* harmony import */


      var _src_app_Model_Study_StudyObjects_VibrationPattern__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @src/app/Model/Study/StudyObjects/VibrationPattern */
      "tJs4");
      /* harmony import */


      var _src_app_Model_Study_StudyObjects_TextBlock__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @src/app/Model/Study/StudyObjects/TextBlock */
      "0HUV");
      /* harmony import */


      var _src_app_Model_Study_StudyObjects_Questions_DateQuestion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @src/app/Model/Study/StudyObjects/Questions/DateQuestion */
      "lGoz");
      /* harmony import */


      var _src_app_Model_Study_StudyObjects_Questions_TextQuestion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @src/app/Model/Study/StudyObjects/Questions/TextQuestion */
      "r8Zv");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _error_state_matchers_NumberErrorStateMatcher__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../error-state-matchers/NumberErrorStateMatcher */
      "D3xR");

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

      var QuestionEditingComponent = /*#__PURE__*/function () {
        function QuestionEditingComponent(studywrapper, dialog) {
          _classCallCheck(this, QuestionEditingComponent);

          this.studywrapper = studywrapper;
          this.dialog = dialog;
          this.questions = [];
          this.questionTypes = ["Datum/Zeit", "Lineare Skala", "Multiple Choice", "Text"];
          this.formControls = [];
          this.matcher = new _error_state_matchers_NumberErrorStateMatcher__WEBPACK_IMPORTED_MODULE_14__["NumberErrorStateMatcher"]();
        }
        /**
         * Überträgt aus einer gegebenen Studie alle Fragen in das questions Array
         */


        _createClass(QuestionEditingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.studywrapper.study.studyObjects.forEach(function (studyobject) {
              if (studyobject instanceof _src_app_Model_Study_StudyObjects_Questions_AbstractQuestion__WEBPACK_IMPORTED_MODULE_3__["AbstractQuestion"]) {
                _this2.questions.unshift(studyobject);

                _this2.addFormControl(studyobject);
              }
            });
          }
          /**
           * Prüft, ob ein bestimmtes Objekt eine LinearScaleQuestion oder eine
           * MultipleChoiceQuestion ist. Der entsprechende Typ wird als string zurückgegeben.
           * @param question
           */

        }, {
          key: "isLinearScaleQuestion",
          value: function isLinearScaleQuestion(question) {
            if (question instanceof _src_app_Model_Study_StudyObjects_Questions_LinearScaleQuestion__WEBPACK_IMPORTED_MODULE_6__["LinearScaleQuestion"]) {
              return "linearScale";
            } else if (question instanceof _src_app_Model_Study_StudyObjects_Questions_MultipleChoiceQuestion__WEBPACK_IMPORTED_MODULE_7__["MultipleChoiceQuestion"]) {
              return "multipleChoice";
            }
          }
          /**
           * Ergänzt die übergebene MultipleChoiceQuestion um eine vordefinierte Antwort Option
           * @param question
           */

        }, {
          key: "addFormControl",
          value: function addFormControl(question) {
            var maxChoicesControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormControl"]("", {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].required]
            });
            var choicesControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormControl"]("", {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].min(2), _angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].max(12), _angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].required]
            });
            this.formControls.unshift([maxChoicesControl, choicesControl]);
            maxChoicesControl.patchValue(question.maxChoices);
            choicesControl.patchValue(question.numberOfChoices);
            maxChoicesControl.valueChanges.subscribe(function (value) {
              var toChange = value;

              if (value < 0) {
                toChange = 0;
              }

              if (!Number(value)) {
                toChange = 1;
              }

              question.maxChoices = toChange;
            });
            choicesControl.valueChanges.subscribe(function (value) {
              var toChange = value;

              if (value < 2) {
                toChange = 2;
              }

              if (value > 12) {
                toChange = 12;
              }

              if (!Number(value)) {
                toChange = 1;
              }

              question.numberOfChoices = toChange;
            });
          }
          /**
           * Ergänzt die übergebene MultipleChoiceQuestion um eine vordefinierte Antwort Option
           * @param question
           */

        }, {
          key: "onAddAnswerChoice",
          value: function onAddAnswerChoice(question) {
            question.answerOptions.push("");
          }
          /**
           * Fügt die erstellte Frage in die Studie und die questions Liste ein
           */

        }, {
          key: "onAddQuestion",
          value: function onAddQuestion() {
            var _this3 = this;

            var dialogRef = this.dialog.open(_question_selection_dialog_question_selection_dialog_component__WEBPACK_IMPORTED_MODULE_8__["QuestionSelectionDialogComponent"]);
            dialogRef.afterClosed().subscribe(function (result) {
              if (result) {
                _this3.questions.unshift(result);

                _this3.studywrapper.study.studyObjects.unshift(result);

                _this3.addFormControl(result);
              }
            });
          }
          /**
           * Entfernt aus dem Array targetArray an der Stelle index einen Eintrag.
           * @param targetArray
           * @param index
           */

        }, {
          key: "removeFromArray",
          value: function removeFromArray(targetArray, index) {
            targetArray.splice(index, 1);
          }
          /**
           * Die AntwortOption in einer MultipleChoiceQuestion an der Stelle index wird aktualisiert.
           * @param question
           * @param index
           * @param event
           */

        }, {
          key: "valueUpdate",
          value: function valueUpdate(question, index, event) {
            question.answerOptions[index] = event.target.value;
          }
          /**
           * Entfernt das Element an der Stelle index aus der Liste questions und entfernt das
           * Element mit der id aus der Liste studyObjects in StudyPrototype.
           * @param index
           * @param id
           */

        }, {
          key: "removeFromStudy",
          value: function removeFromStudy(index, id) {
            this.questions.splice(index, 1);
            this.removeFromSectionElement(id);
            this.formControls.splice(index, 1);
            this.studywrapper.study.studyObjects = this.studywrapper.study.studyObjects.filter(function (element) {
              return element.id != id;
            });
          }
          /**
           * Entfernt das Element an der Stelle index aus der Liste questions und
           * entfernt das Element mit der id aus der Liste studyObjects in StudyPrototype.
           * @param id
           */

        }, {
          key: "removeFromSectionElement",
          value: function removeFromSectionElement(id) {
            var _iterator5 = _createForOfIteratorHelper(this.studywrapper.study.sectionElements),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var sectionelement = _step5.value;
                var index = 0;

                var _iterator6 = _createForOfIteratorHelper(sectionelement.studyObjects),
                    _step6;

                try {
                  for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                    var studyObjectRef = _step6.value;

                    if (studyObjectRef.ID == id) {
                      sectionelement.studyObjects.splice(index, 1);
                    }

                    index++;
                  }
                } catch (err) {
                  _iterator6.e(err);
                } finally {
                  _iterator6.f();
                }
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          }
          /**
           * Gibt den Text zurück, welchen der User für einen bestimmten Objekttyp sehen soll.
           * @param studyObject
           */

        }, {
          key: "getStudyObjectTypeName",
          value: function getStudyObjectTypeName(studyObject) {
            switch (true) {
              case studyObject instanceof _src_app_Model_Study_StudyObjects_VibrationPattern__WEBPACK_IMPORTED_MODULE_9__["VibrationPattern"]:
                return "VibrationPattern";

              case studyObject instanceof _src_app_Model_Study_StudyObjects_TextBlock__WEBPACK_IMPORTED_MODULE_10__["TextBlock"]:
                return "TextBlock";

              case studyObject instanceof _src_app_Model_Study_StudyObjects_Questions_DateQuestion__WEBPACK_IMPORTED_MODULE_11__["DateQuestion"]:
                return "Datum";

              case studyObject instanceof _src_app_Model_Study_StudyObjects_Questions_LinearScaleQuestion__WEBPACK_IMPORTED_MODULE_6__["LinearScaleQuestion"]:
                return "Lineare Skala";

              case studyObject instanceof _src_app_Model_Study_StudyObjects_Questions_MultipleChoiceQuestion__WEBPACK_IMPORTED_MODULE_7__["MultipleChoiceQuestion"]:
                return "Multiple Choice";

              case studyObject instanceof _src_app_Model_Study_StudyObjects_Questions_TextQuestion__WEBPACK_IMPORTED_MODULE_12__["TextQuestion"]:
                return "Freitext";

              default:
                return "undefined";
            }
          }
        }]);

        return QuestionEditingComponent;
      }();

      QuestionEditingComponent.ctorParameters = function () {
        return [{
          type: _services_study_wrapper_study_wrapper_service__WEBPACK_IMPORTED_MODULE_4__["StudyWrapperService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
        }];
      };

      QuestionEditingComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-question-editing',
        template: _raw_loader_question_editing_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_question_editing_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_services_study_wrapper_study_wrapper_service__WEBPACK_IMPORTED_MODULE_4__["StudyWrapperService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])], QuestionEditingComponent);
      /***/
    },

    /***/
    "8/Jw":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/studycreation/toolboxes/vibrationpattern-toolbox/vibrationpattern-toolbox.component.css ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Jw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "mat-card {\r\n    text-align: center;\r\n}\r\n\r\nmat-chip {\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZHljcmVhdGlvbi90b29sYm94ZXMvdmlicmF0aW9ucGF0dGVybi10b29sYm94L3ZpYnJhdGlvbnBhdHRlcm4tdG9vbGJveC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvc3R1ZHljcmVhdGlvbi90b29sYm94ZXMvdmlicmF0aW9ucGF0dGVybi10b29sYm94L3ZpYnJhdGlvbnBhdHRlcm4tdG9vbGJveC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5tYXQtY2hpcCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "8CWr":
    /*!****************************************************************************!*\
      !*** ./src/app/studycreation/general-editing/general-editing.component.ts ***!
      \****************************************************************************/

    /*! exports provided: GeneralEditingComponent */

    /***/
    function CWr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeneralEditingComponent", function () {
        return GeneralEditingComponent;
      });
      /* harmony import */


      var _raw_loader_general_editing_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./general-editing.component.html */
      "eC3E");
      /* harmony import */


      var _general_editing_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./general-editing.component.css */
      "ycu6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _src_app_Model_Study_StudyObjects_Questions_QualificationQuestion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @src/app/Model/Study/StudyObjects/Questions/QualificationQuestion */
      "qPq2");
      /* harmony import */


      var _services_study_wrapper_study_wrapper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/study-wrapper/study-wrapper.service */
      "pzGZ");
      /* harmony import */


      var _error_state_matchers_ValidErrorStateMatcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../error-state-matchers/ValidErrorStateMatcher */
      "CQWE");

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

      var GeneralEditingComponent = /*#__PURE__*/function () {
        function GeneralEditingComponent(studywrapper) {
          _classCallCheck(this, GeneralEditingComponent);

          this.studywrapper = studywrapper;
          this.shortControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", {
            validators: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(200)
          });
          this.matcher = new _error_state_matchers_ValidErrorStateMatcher__WEBPACK_IMPORTED_MODULE_6__["ValidErrorStateMatcher"]();
        }
        /**
         * Initialisiert den Wert der ShortDescription
         */


        _createClass(GeneralEditingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.shortControl.patchValue(this.studywrapper.study.keyData.shortDescription.text);
            this.shortControl.valueChanges.subscribe(function (value) {
              var toChange = value;

              if (value.length > 200) {
                toChange = value.substr(0, 200);
              }

              _this4.studywrapper.study.keyData.shortDescription.text = toChange;
            });
          }
        }, {
          key: "onStateChange",
          value: function onStateChange() {}
          /**
           * Erstellt eine neue Ausschlussfrage und fügt sie der Studie hinzu
           */

        }, {
          key: "onAddQualificationQuestion",
          value: function onAddQualificationQuestion() {
            this.studywrapper.study.keyData.qualiQuestions.push(new _src_app_Model_Study_StudyObjects_Questions_QualificationQuestion__WEBPACK_IMPORTED_MODULE_4__["QualificationQuestion"](this.studywrapper.lastID, "", "", "", false));
          }
          /**
           * Entfernt aus dem Array targetArray an der Stelle index einen Eintrag.
           * @param targetArray
           * @param index
           */

        }, {
          key: "removeFromArray",
          value: function removeFromArray(targetArray, index) {
            targetArray.splice(index, 1);
          }
        }]);

        return GeneralEditingComponent;
      }();

      GeneralEditingComponent.ctorParameters = function () {
        return [{
          type: _services_study_wrapper_study_wrapper_service__WEBPACK_IMPORTED_MODULE_5__["StudyWrapperService"]
        }];
      };

      GeneralEditingComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-general-editing',
        template: _raw_loader_general_editing_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_general_editing_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_services_study_wrapper_study_wrapper_service__WEBPACK_IMPORTED_MODULE_5__["StudyWrapperService"]])], GeneralEditingComponent);
      /***/
    },

    /***/
    "CQWE":
    /*!******************************************************************************!*\
      !*** ./src/app/studycreation/error-state-matchers/ValidErrorStateMatcher.ts ***!
      \******************************************************************************/

    /*! exports provided: ValidErrorStateMatcher */

    /***/
    function CQWE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ValidErrorStateMatcher", function () {
        return ValidErrorStateMatcher;
      });

      var ValidErrorStateMatcher = /*#__PURE__*/function () {
        function ValidErrorStateMatcher() {
          _classCallCheck(this, ValidErrorStateMatcher);
        }

        _createClass(ValidErrorStateMatcher, [{
          key: "isErrorState",
          value: function isErrorState(control, form) {
            return !control.valid;
          }
        }]);

        return ValidErrorStateMatcher;
      }();
      /***/

    },

    /***/
    "D3xR":
    /*!*******************************************************************************!*\
      !*** ./src/app/studycreation/error-state-matchers/NumberErrorStateMatcher.ts ***!
      \*******************************************************************************/

    /*! exports provided: NumberErrorStateMatcher */

    /***/
    function D3xR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NumberErrorStateMatcher", function () {
        return NumberErrorStateMatcher;
      });

      var NumberErrorStateMatcher = /*#__PURE__*/function () {
        function NumberErrorStateMatcher() {
          _classCallCheck(this, NumberErrorStateMatcher);
        }

        _createClass(NumberErrorStateMatcher, [{
          key: "isErrorState",
          value: function isErrorState(control, form) {
            var success = true;
            var value = Number(control.value);

            if (!value && value != 0) {
              success = false;
            }

            return !success || !control.valid;
          }
        }]);

        return NumberErrorStateMatcher;
      }();
      /***/

    },

    /***/
    "HrJD":
    /*!**************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/studycreation/toolboxes/studyobject-toolbox/studyobject-toolbox.component.html ***!
      \**************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function HrJD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mat-card class=\"scrollable\" style=\"background-color: #212121;\"><br>\r\n    <mat-card-title>Werkzeugkasten</mat-card-title>\r\n    <div style=\"margin-top: 10px;\">\r\n        <mat-card-subtitle>Erstellte Objekte per Drag and Drog links einfügen</mat-card-subtitle>\r\n    </div>\r\n    <mat-card-content [style.overflow]=\"'auto'\" [style.height.vh]=\"'77'\" >\r\n        <mat-divider></mat-divider>\r\n        <br />\r\n        <mat-accordion multi>\r\n            <mat-expansion-panel *ngIf=\"getAmount('DateQuestion') > 0\" style=\"background-color: #856e68;\">\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        Datumfragen\r\n                    </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <div cdkDropList id=\"toolbox\" [cdkDropListConnectedTo]=\"connectedLists\" [cdkDropListData]=\"getObjectsPerType('DateQuestion')\">\r\n                    <div *ngFor=\"let element of toolbox\">\r\n                        <div *ngIf=\"this.colorService.getStudyObjectType(element) == 'DateQuestion'\">\r\n                            <mat-card cdkDrag style=\"cursor: move; height: 20px\" [style.background-color]=\"this.colorService.getStudyObjectColor(element)\">{{ element.name }}</mat-card>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </mat-expansion-panel>\r\n            <mat-expansion-panel *ngIf=\"getAmount('TextQuestion') > 0\" style=\"background-color: #747d80;\">\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        Freitextfragen\r\n                    </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <div cdkDropList id=\"toolbox\" [cdkDropListConnectedTo]=\"connectedLists\" [cdkDropListData]=\"getObjectsPerType('TextQuestion')\">\r\n                    <div *ngFor=\"let element of toolbox\">\r\n                        <div *ngIf=\"this.colorService.getStudyObjectType(element) == 'TextQuestion'\">\r\n                            <mat-card cdkDrag style=\"cursor: move;\" [style.background-color]=\"this.colorService.getStudyObjectColor(element)\">{{ element.name }}</mat-card>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </mat-expansion-panel>\r\n            <mat-expansion-panel *ngIf=\"getAmount('LinearScaleQuestion') > 0\" style=\"background-color: #6f8aab;\">\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        Lineare Skalen\r\n                    </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <div cdkDropList id=\"toolbox\" [cdkDropListConnectedTo]=\"connectedLists\" [cdkDropListData]=\"getObjectsPerType('LinearScaleQuestion')\">\r\n                    <div *ngFor=\"let element of toolbox\">\r\n                        <div *ngIf=\"this.colorService.getStudyObjectType(element) == 'LinearScaleQuestion'\">\r\n                            <mat-card cdkDrag style=\"cursor: move;\" [style.background-color]=\"this.colorService.getStudyObjectColor(element)\">{{ element.name }}</mat-card>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </mat-expansion-panel>\r\n            <mat-expansion-panel *ngIf=\"getAmount('MultipleChoiceQuestion') > 0\" style=\"background-color: #a68a79;\">\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        Multiple Choice Fragen\r\n                    </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <div cdkDropList id=\"toolbox\" [cdkDropListConnectedTo]=\"connectedLists\" [cdkDropListData]=\"getObjectsPerType('MultipleChoiceQuestion')\">\r\n                    <div *ngFor=\"let element of toolbox\">\r\n                        <div *ngIf=\"this.colorService.getStudyObjectType(element) == 'MultipleChoiceQuestion'\">\r\n                            <mat-card cdkDrag style=\"cursor: move;\" [style.background-color]=\"this.colorService.getStudyObjectColor(element)\">{{ element.name }}</mat-card>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </mat-expansion-panel>\r\n            <mat-expansion-panel *ngIf=\"getAmount('TextBlock') > 0\" style=\"background-color: #7da278;\">\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        Textblöcke\r\n                    </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <div cdkDropList id=\"toolbox\" [cdkDropListConnectedTo]=\"connectedLists\" [cdkDropListData]=\"getObjectsPerType('TextBlock')\">\r\n                    <div *ngFor=\"let element of toolbox\">\r\n                        <div *ngIf=\"this.colorService.getStudyObjectType(element) == 'TextBlock'\">\r\n                            <mat-card cdkDrag style=\"cursor: move;\" [style.background-color]=\"this.colorService.getStudyObjectColor(element)\">{{ element.name }}</mat-card>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </mat-expansion-panel>\r\n            <mat-expansion-panel *ngIf=\"getAmount('VibrationPattern') > 0\" style=\"background-color: #A65C4E;\">\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        Vibrationsmuster\r\n                    </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <div cdkDropList id=\"toolbox\" [cdkDropListConnectedTo]=\"connectedLists\" [cdkDropListData]=\"getObjectsPerType('VibrationPattern')\">\r\n                    <div *ngFor=\"let element of toolbox\">\r\n                        <div *ngIf=\"this.colorService.getStudyObjectType(element) == 'VibrationPattern'\">\r\n                            <mat-card cdkDrag style=\"cursor: move;\" [style.background-color]=\"this.colorService.getStudyObjectColor(element)\">{{ element.name }}</mat-card>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </mat-expansion-panel>\r\n            <mat-expansion-panel *ngIf=\"getAmount('SectionElement') > 0\" style=\"background-color: #9dbae1;\">\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        Studienseiten\r\n                    </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <div cdkDropList id=\"toolbox\" [cdkDropListConnectedTo]=\"connectedLists\" [cdkDropListData]=\"getObjectsPerType('SectionElement')\">\r\n                    <div *ngFor=\"let element of toolbox\">\r\n                        <div *ngIf=\"this.colorService.getStudyObjectType(element) == 'SectionElement'\">\r\n                            <mat-card cdkDrag style=\"cursor: move;\" [style.background-color]=\"this.colorService.getStudyObjectColor(element)\">{{ element.name }}</mat-card>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </mat-expansion-panel>\r\n            <mat-expansion-panel *ngIf=\"getAmount('Section') > 0\" style=\"background-color: #dd9fb2;\">\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        Abschnitte\r\n                    </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <div cdkDropList id=\"toolbox\" [cdkDropListConnectedTo]=\"connectedLists\" [cdkDropListData]=\"getObjectsPerType('Section')\">\r\n                    <div *ngFor=\"let element of toolbox\">\r\n                        <div *ngIf=\"this.colorService.getStudyObjectType(element) == 'Section'\">\r\n                            <mat-card cdkDrag style=\"cursor: move;\" [style.background-color]=\"this.colorService.getStudyObjectColor(element)\">{{ element.name }}</mat-card>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </mat-expansion-panel>\r\n        </mat-accordion>\r\n\r\n    </mat-card-content>\r\n</mat-card>";
      /***/
    },

    /***/
    "J5kB":
    /*!*****************************************************************************!*\
      !*** ./src/app/studycreation/section-editing/section-editing.component.css ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function J5kB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "mat-sidenav-container {\r\n    height: 91vh;\r\n}\r\n\r\n.studyObjectList {\r\n    border-style: dashed;\r\n    border-width: 5px;\r\n    border-radius: 10px;\r\n    font-size: 18px;\r\n    padding: 15px;\r\n    margin-top: 15px;\r\n}\r\n\r\n.toolbox {\r\n    width: 250px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    overflow-x: hidden;\r\n    right: 15px;\r\n}\r\n\r\n.mainContent {\r\n    margin-right: 265px;\r\n}\r\n\r\n.droplistSubtitle {\r\n    margin-top: 10px;\r\n    font-size: 14px;\r\n    text-align: center;\r\n}\r\n\r\n.greenButton {\r\n    background-color: #3e753b;\r\n    color: white;\r\n}\r\n\r\n.redButton {\r\n    color: #6D0000;\r\n    background-color: #FF000000;\r\n}\r\n\r\n.trashCan {\r\n    font-size: 40px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZHljcmVhdGlvbi9zZWN0aW9uLWVkaXRpbmcvc2VjdGlvbi1lZGl0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvc3R1ZHljcmVhdGlvbi9zZWN0aW9uLWVkaXRpbmcvc2VjdGlvbi1lZGl0aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtc2lkZW5hdi1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiA5MXZoO1xyXG59XHJcblxyXG4uc3R1ZHlPYmplY3RMaXN0IHtcclxuICAgIGJvcmRlci1zdHlsZTogZGFzaGVkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi50b29sYm94IHtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICByaWdodDogMTVweDtcclxufVxyXG5cclxuLm1haW5Db250ZW50IHtcclxuICAgIG1hcmdpbi1yaWdodDogMjY1cHg7XHJcbn1cclxuXHJcbi5kcm9wbGlzdFN1YnRpdGxlIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ncmVlbkJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2U3NTNiO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucmVkQnV0dG9uIHtcclxuICAgIGNvbG9yOiAjNkQwMDAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMDAwMDAwO1xyXG59XHJcblxyXG4udHJhc2hDYW4ge1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG59Il19 */";
      /***/
    },

    /***/
    "Ky/Q":
    /*!*******************************************************************************************!*\
      !*** ./src/app/studycreation/sectionelement-editing/sectionelement-editing.component.css ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function KyQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".vibration-container {\r\n    height: 91vh;\r\n}\r\n\r\n.studyObjectList {\r\n    border-style: dashed;\r\n    border-width: 5px;\r\n    border-radius: 10px;\r\n    font-size: 16px;\r\n    padding: 15px;\r\n    margin-top: 15px;\r\n}\r\n\r\n.toolbox {\r\n    width: 300px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    overflow-x: hidden;\r\n    right: 15px;\r\n}\r\n\r\n.mainContent {\r\n    margin-right: 315px;\r\n}\r\n\r\n.droplistSubtitle {\r\n    margin-top: 10px;\r\n    font-size: 14px;\r\n    text-align: center;\r\n}\r\n\r\n.greenButton {\r\n    background-color: #3e753b;\r\n    color: white;\r\n}\r\n\r\n.redButton {\r\n    color: #6D0000;\r\n    background-color: #FF000000;\r\n}\r\n\r\n.grayButton {\r\n    color: gray;\r\n    background-color: #FF000000;\r\n}\r\n\r\n.trashCan {\r\n    font-size: 40px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZHljcmVhdGlvbi9zZWN0aW9uZWxlbWVudC1lZGl0aW5nL3NlY3Rpb25lbGVtZW50LWVkaXRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvc3R1ZHljcmVhdGlvbi9zZWN0aW9uZWxlbWVudC1lZGl0aW5nL3NlY3Rpb25lbGVtZW50LWVkaXRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi52aWJyYXRpb24tY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogOTF2aDtcclxufVxyXG5cclxuLnN0dWR5T2JqZWN0TGlzdCB7XHJcbiAgICBib3JkZXItc3R5bGU6IGRhc2hlZDtcclxuICAgIGJvcmRlci13aWR0aDogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4udG9vbGJveCB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5tYWluQ29udGVudCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMxNXB4O1xyXG59XHJcblxyXG4uZHJvcGxpc3RTdWJ0aXRsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZ3JlZW5CdXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNlNzUzYjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnJlZEJ1dHRvbiB7XHJcbiAgICBjb2xvcjogIzZEMDAwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjAwMDAwMDtcclxufVxyXG5cclxuLmdyYXlCdXR0b24ge1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYwMDAwMDA7XHJcbn1cclxuXHJcbi50cmFzaENhbiB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "M/E+":
    /*!******************************************************************************************************************!*\
      !*** ./src/app/studycreation/question-editing/question-selection-dialog/question-selection-dialog.component.css ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ME(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "button {\r\n    margin-bottom: 5px;\r\n    color: white;\r\n    background-color: #3e753b;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZHljcmVhdGlvbi9xdWVzdGlvbi1lZGl0aW5nL3F1ZXN0aW9uLXNlbGVjdGlvbi1kaWFsb2cvcXVlc3Rpb24tc2VsZWN0aW9uLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9zdHVkeWNyZWF0aW9uL3F1ZXN0aW9uLWVkaXRpbmcvcXVlc3Rpb24tc2VsZWN0aW9uLWRpYWxvZy9xdWVzdGlvbi1zZWxlY3Rpb24tZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNlNzUzYjtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "MWis":
    /*!**********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/studycreation/sectionelement-editing/sectionelement-editing.component.html ***!
      \**********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function MWis(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"vibration-contianer\">\r\n    <div class=\"toolbox\">\r\n        <app-studyobject-toolbox [toolbox]=\"this.toolbox\" [playgroundCount]=\"sectionelements.length\">\r\n        </app-studyobject-toolbox>\r\n    </div>\r\n\r\n    <div class=\"mainContent\">\r\n        <a mat-fab class=\"greenButton\" (click)=\"onAddPlayground()\" style=\"display: block; margin: auto;\">\r\n            <mat-icon>add</mat-icon>\r\n        </a><br>\r\n        <div *ngFor=\"let sectionelement of sectionelements; let index = index\">\r\n            <mat-card>\r\n                <mat-card-title>\r\n                    <mat-form-field class=\"example-full-width\" style=\"width: 50%; font-size:18px\">\r\n                        <input matInput placeholder=\"Interne Bezeichnung\" [(ngModel)]=\"sectionelement.name\" /> </mat-form-field>\r\n                    &nbsp;&nbsp;\r\n                    <mat-form-field class=\"example-full-width\" style=\"width: 50%; font-size:18px\">\r\n                        <input matInput placeholder=\"Anzeigename\" [(ngModel)]=\"sectionelement.displayName\" /> </mat-form-field>\r\n                    &nbsp;&nbsp;\r\n                    <mat-form-field style=\"width: 20%; font-size:18px\">\r\n                        <mat-label>Randomisierung</mat-label>\r\n                        <mat-select [(value)]=\"sectionelement.randomStrategy\">\r\n                            <mat-option *ngFor=\"let randomizer of randomizers; let index = index\" [value]=\"index\">\r\n                                {{ this.studywrapper.getRandomizerName(index) }}\r\n                            </mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field><button mat-icon-button class=\"redButton\" (click)=\"deleteTest(index, sectionelement.id)\">\r\n                        <mat-icon class=\"trashCan\">delete</mat-icon>\r\n                    </button>\r\n                </mat-card-title>\r\n                Für das Ergebnis relevant? &nbsp;&nbsp; Nein &nbsp;\r\n                <mat-slide-toggle [(ngModel)]=\"sectionelement.resultRelevant\"></mat-slide-toggle>\r\n                &nbsp;&nbsp;&nbsp;Ja<br>\r\n                <hr>\r\n                <div cdkDropList class=\"studyObjectList\" id=\"studyObjectList{{ index }}\"\r\n                    [cdkDropListData]=\"sectionelement.studyObjects\"\r\n                    (cdkDropListDropped)=\"onDrop($event, sectionelement)\">\r\n                    <div *ngFor=\"let ref of sectionelement.studyObjects; let index = index\">\r\n                        <mat-card cdkDrag\r\n                            [style.background-color]=\"this.colorService.getStudyObjectColor(findStudyObjectById(ref.ID))\"\r\n                            style=\"font-size:18px; cursor: move;\">{{(index+1) + \". \" + \r\n              this.studywrapper.referenceTupleMembershipVerifier.getObject(ref).name\r\n              }}&nbsp;&nbsp;&nbsp;&nbsp;<mat-slide-toggle [(ngModel)]=\"ref.isFixed\">Fixiert</mat-slide-toggle><button\r\n                                mat-icon-button class=\"grayButton\"\r\n                                (click)=\"removeFromArray(sectionelement.studyObjects, index)\">\r\n                                <mat-icon class=\"trashCan\">delete</mat-icon>\r\n                            </button>\r\n                        </mat-card>\r\n                        <div *ngIf=\"index+1 != sectionelement.studyObjects.length\">\r\n                            <br />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"droplistSubtitle\">Hier Elemente aus dem Wergzeugkasten einfügen, um eine Abfolge\r\n                        festzulegen.</div>\r\n                </div>\r\n            </mat-card>\r\n            <br>\r\n        </div>\r\n    </div>\r\n\r\n</div>";
      /***/
    },

    /***/
    "My1a":
    /*!********************************************************************************!*\
      !*** ./src/app/studycreation/textblock-editing/textblock-editing.component.ts ***!
      \********************************************************************************/

    /*! exports provided: TextBlockEditingComponent */

    /***/
    function My1a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextBlockEditingComponent", function () {
        return TextBlockEditingComponent;
      });
      /* harmony import */


      var _raw_loader_textblock_editing_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./textblock-editing.component.html */
      "lvtZ");
      /* harmony import */


      var _textblock_editing_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./textblock-editing.component.css */
      "wdvh");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _src_app_Model_Study_StudyObjects_TextBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @src/app/Model/Study/StudyObjects/TextBlock */
      "0HUV");
      /* harmony import */


      var _services_study_wrapper_study_wrapper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/study-wrapper/study-wrapper.service */
      "pzGZ");
      /* harmony import */


      var _error_state_matchers_ValidErrorStateMatcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../error-state-matchers/ValidErrorStateMatcher */
      "CQWE");

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

      var TextBlockEditingComponent = /*#__PURE__*/function () {
        function TextBlockEditingComponent(studywrapper) {
          _classCallCheck(this, TextBlockEditingComponent);

          this.studywrapper = studywrapper;
          /**
           * In dem Array befinden sich alle Textblöcke die bereits erstellt wurden.
           */

          this.textblocks = [];
          this.formControls = [];
          this.matcher = new _error_state_matchers_ValidErrorStateMatcher__WEBPACK_IMPORTED_MODULE_6__["ValidErrorStateMatcher"]();
        }
        /**
         * Die Methode kopiert alle TextBlöcke die sich bereits in der Studie befinden in das teckblocks array.
         */


        _createClass(TextBlockEditingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.studywrapper.study.studyObjects.forEach(function (studyobject) {
              if (studyobject instanceof _src_app_Model_Study_StudyObjects_TextBlock__WEBPACK_IMPORTED_MODULE_4__["TextBlock"]) {
                _this5.textblocks.unshift(studyobject);

                _this5.addFormControl(studyobject);
              }
            });
          }
          /**
           * Einem TextBlock wird eine FormControl hinzugefügt
           * @param textblock
           */

        }, {
          key: "addFormControl",
          value: function addFormControl(textblock) {
            var titleControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", []);
            var textControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", []);
            this.formControls.unshift([titleControl, textControl]);
            titleControl.patchValue(textblock.name);
            textControl.patchValue(textblock.text);
            titleControl.valueChanges.subscribe(function (value) {
              textblock.name = value;
            });
            textControl.valueChanges.subscribe(function (value) {
              textblock.text = value;
            });
          }
          /**
           * Ein default TextBlock wird erstellt und in das textblocks Array und die Studie geschrieben.
           */

        }, {
          key: "onAddTextBlock",
          value: function onAddTextBlock() {
            var toInsert = new _src_app_Model_Study_StudyObjects_TextBlock__WEBPACK_IMPORTED_MODULE_4__["TextBlock"](this.studywrapper.lastID, "", "", "");
            this.addFormControl(toInsert);
            this.textblocks.unshift(toInsert);
            this.studywrapper.study.studyObjects.unshift(toInsert);
          }
          /**
           * Der Textblock mit der gegebenen id wird von allen sectionElements entfernt.
           * @param id
           */

        }, {
          key: "removeFromSectionElement",
          value: function removeFromSectionElement(id) {
            var _iterator7 = _createForOfIteratorHelper(this.studywrapper.study.sectionElements),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var sectionelement = _step7.value;
                var index = 0;

                var _iterator8 = _createForOfIteratorHelper(sectionelement.studyObjects),
                    _step8;

                try {
                  for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                    var studyObjectRef = _step8.value;

                    if (studyObjectRef.ID == id) {
                      sectionelement.studyObjects.splice(index, 1);
                    }

                    index++;
                  }
                } catch (err) {
                  _iterator8.e(err);
                } finally {
                  _iterator8.f();
                }
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
          }
          /**
           * Ein Textblock wird aus der Studie und dem textblocks Array entfernt.
           * @param index
           * @param id
           */

        }, {
          key: "removeFromStudy",
          value: function removeFromStudy(index, id) {
            this.textblocks.splice(index, 1);
            this.formControls.splice(index, 1);
            this.removeFromSectionElement(id);
            this.studywrapper.study.studyObjects = this.studywrapper.study.studyObjects.filter(function (element) {
              return element.id != id;
            });
          }
        }]);

        return TextBlockEditingComponent;
      }();

      TextBlockEditingComponent.ctorParameters = function () {
        return [{
          type: _services_study_wrapper_study_wrapper_service__WEBPACK_IMPORTED_MODULE_5__["StudyWrapperService"]
        }];
      };

      TextBlockEditingComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-textblock-editing',
        template: _raw_loader_textblock_editing_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_textblock_editing_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_services_study_wrapper_study_wrapper_service__WEBPACK_IMPORTED_MODULE_5__["StudyWrapperService"]])], TextBlockEditingComponent);
      /***/
    },

    /***/
    "PTz0":
    /*!*******************************************************************************!*\
      !*** ./src/app/studycreation/sequence-editing/sequence-editing.component.css ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function PTz0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".vibration-container {\r\n    height: 91vh;\r\n}\r\n\r\n\r\n.studyObjectList {\r\n    border-style: dashed;\r\n    border-width: 5px;\r\n    border-radius: 10px;\r\n    font-size: 16px;\r\n    padding: 15px;\r\n    margin-top: 15px;\r\n}\r\n\r\n\r\n.toolbox {\r\n    width: 250px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    overflow-x: hidden;\r\n    right: 15px;\r\n}\r\n\r\n\r\n.mainContent {\r\n    margin-right: 265px;\r\n}\r\n\r\n\r\n.droplistSubtitle {\r\n    margin-top: 10px;\r\n    font-size: 14px;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.redButton {\r\n    color: #6D0000;\r\n    background-color: #FF000000;\r\n}\r\n\r\n\r\n.trashCan {\r\n    font-size: 40px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZHljcmVhdGlvbi9zZXF1ZW5jZS1lZGl0aW5nL3NlcXVlbmNlLWVkaXRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7OztBQUdBO0lBQ0ksb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksY0FBYztJQUNkLDJCQUEyQjtBQUMvQjs7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvc3R1ZHljcmVhdGlvbi9zZXF1ZW5jZS1lZGl0aW5nL3NlcXVlbmNlLWVkaXRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi52aWJyYXRpb24tY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogOTF2aDtcclxufVxyXG5cclxuXHJcbi5zdHVkeU9iamVjdExpc3Qge1xyXG4gICAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLnRvb2xib3gge1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4ubWFpbkNvbnRlbnQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNjVweDtcclxufVxyXG5cclxuLmRyb3BsaXN0U3VidGl0bGUge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnJlZEJ1dHRvbiB7XHJcbiAgICBjb2xvcjogIzZEMDAwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjAwMDAwMDtcclxufVxyXG5cclxuLnRyYXNoQ2FuIHtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "Q8vR":
    /*!*******************************************************!*\
      !*** ./src/app/studycreation/studycreation.module.ts ***!
      \*******************************************************/

    /*! exports provided: StudycreationModule */

    /***/
    function Q8vR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StudycreationModule", function () {
        return StudycreationModule;
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


      var _src_app_studycreation_studycreation_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @src/app/studycreation/studycreation-routing.module */
      "a03t");
      /* harmony import */


      var _src_app_studycreation_general_editing_general_editing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @src/app/studycreation/general-editing/general-editing.component */
      "8CWr");
      /* harmony import */


      var _src_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @src/material.module */
      "wLiR");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _src_app_studycreation_question_editing_question_editing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @src/app/studycreation/question-editing/question-editing.component */
      "4XXs");
      /* harmony import */


      var _src_app_studycreation_section_editing_section_editing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @src/app/studycreation/section-editing/section-editing.component */
      "jfxa");
      /* harmony import */


      var _src_app_studycreation_sectionelement_editing_sectionelement_editing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @src/app/studycreation/sectionelement-editing/sectionelement-editing.component */
      "acHD");
      /* harmony import */


      var _src_app_studycreation_sequence_editing_sequence_editing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @src/app/studycreation/sequence-editing/sequence-editing.component */
      "Zltt");
      /* harmony import */


      var _src_app_studycreation_textblock_editing_textblock_editing_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @src/app/studycreation/textblock-editing/textblock-editing.component */
      "My1a");
      /* harmony import */


      var _src_app_studycreation_vibrationpattern_editing_vibrationpattern_editing_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @src/app/studycreation/vibrationpattern-editing/vibrationpattern-editing.component */
      "3c42");
      /* harmony import */


      var _src_app_studycreation_question_editing_question_selection_dialog_question_selection_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @src/app/studycreation/question-editing/question-selection-dialog/question-selection-dialog.component */
      "Uyn7");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "ltgo");
      /* harmony import */


      var _src_app_studycreation_toolboxes_vibrationpattern_toolbox_vibrationpattern_toolbox_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @src/app/studycreation/toolboxes/vibrationpattern-toolbox/vibrationpattern-toolbox.component */
      "lIQF");
      /* harmony import */


      var _src_app_studycreation_toolboxes_studyobject_toolbox_studyobject_toolbox_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @src/app/studycreation/toolboxes/studyobject-toolbox/studyobject-toolbox.component */
      "zVIr");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var StudycreationModule = function StudycreationModule() {
        _classCallCheck(this, StudycreationModule);
      };

      StudycreationModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_src_app_studycreation_general_editing_general_editing_component__WEBPACK_IMPORTED_MODULE_3__["GeneralEditingComponent"], _src_app_studycreation_question_editing_question_editing_component__WEBPACK_IMPORTED_MODULE_6__["QuestionEditingComponent"], _src_app_studycreation_section_editing_section_editing_component__WEBPACK_IMPORTED_MODULE_7__["SectionEditingComponent"], _src_app_studycreation_sectionelement_editing_sectionelement_editing_component__WEBPACK_IMPORTED_MODULE_8__["SectionElementEditingComponent"], _src_app_studycreation_sequence_editing_sequence_editing_component__WEBPACK_IMPORTED_MODULE_9__["SequenceEditingComponent"], _src_app_studycreation_textblock_editing_textblock_editing_component__WEBPACK_IMPORTED_MODULE_10__["TextBlockEditingComponent"], _src_app_studycreation_vibrationpattern_editing_vibrationpattern_editing_component__WEBPACK_IMPORTED_MODULE_11__["VibrationPatternEditingComponent"], _src_app_studycreation_question_editing_question_selection_dialog_question_selection_dialog_component__WEBPACK_IMPORTED_MODULE_12__["QuestionSelectionDialogComponent"], _src_app_studycreation_toolboxes_vibrationpattern_toolbox_vibrationpattern_toolbox_component__WEBPACK_IMPORTED_MODULE_14__["VibrationPatternToolboxComponent"], _src_app_studycreation_toolboxes_studyobject_toolbox_studyobject_toolbox_component__WEBPACK_IMPORTED_MODULE_15__["StudyObjectToolboxComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _src_app_studycreation_studycreation_routing_module__WEBPACK_IMPORTED_MODULE_2__["StudyCreationRoutingModule"], _src_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__["DragDropModule"]]
      })], StudycreationModule);
      /***/
    },

    /***/
    "RFVM":
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/studycreation/question-editing/question-editing.component.html ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function RFVM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<a mat-fab class=\"greenButton\" (click)=\"onAddQuestion()\" style=\"display: block; margin: auto;\">\r\n    <mat-icon>add</mat-icon>\r\n</a><br>\r\n<div *ngFor=\"let question of questions; let index = index\">\r\n    <mat-card>\r\n        <mat-card-title>\r\n            <h3>{{this.getStudyObjectTypeName(question)}}</h3>\r\n            <mat-form-field class=\"example-full-width\" style=\"width: 50%;font-size:18px\">\r\n                <input matInput placeholder=\"Interne Bezeichnung\" [(ngModel)]=\"question.name\" />\r\n            </mat-form-field>&nbsp;&nbsp;\r\n            <mat-form-field class=\"example-full-width\" style=\"width: 50%;font-size:18px\">\r\n                <input matInput placeholder=\"Anzeigename\" [(ngModel)]=\"question.displayName\" />\r\n            </mat-form-field>&nbsp;&nbsp;\r\n            <button mat-icon-button class=\"redButton\" (click)=\"removeFromStudy(index, question.id)\">\r\n                <mat-icon class=\"trashCan\">delete</mat-icon>\r\n            </button>\r\n        </mat-card-title>\r\n        <!--FRAGEINHALT-->\r\n        <mat-form-field class=\"example-full-width\" style=\"width: 50%;\">\r\n            <input matInput placeholder=\"Fragestellung\" [(ngModel)]=\"question.questionText\" />\r\n        </mat-form-field>\r\n\r\n\r\n        <div *ngIf=\"isLinearScaleQuestion(question) == 'linearScale'\">\r\n            <mat-form-field class=\"example-full-width\" style=\"width: 32%;\">\r\n                <input matInput placeholder=\"Anzahl der Wahlmöglichkeiten (2 bis 12)\" [formControl]=\"this.formControls[index][1]\" [errorStateMatcher]=\"this.matcher\" />\r\n                <mat-error *ngIf=\"this.formControls[index][1].invalid\">Fehlerhafte Eingabe.</mat-error>\r\n            </mat-form-field>&nbsp;&nbsp;\r\n            <mat-form-field class=\"example-full-width\" style=\"width: 32%;\">\r\n                <input matInput placeholder=\"Linkes Label\" [(ngModel)]=\"question.leftLabel\" />\r\n            </mat-form-field>&nbsp;&nbsp;\r\n            <mat-form-field class=\"example-full-width\" style=\"width: 32%;\">\r\n                <input matInput placeholder=\"Rechtes Label\" [(ngModel)]=\"question.rightLabel\" />\r\n            </mat-form-field>\r\n        </div>\r\n        <div *ngIf=\"isLinearScaleQuestion(question) == 'multipleChoice'\">\r\n            <!--<mat-form-field class=\"example-full-width\" style=\"width: 20%;\">\r\n                <input matInput placeholder=\"Mindestens auszuwählen\" [(ngModel)]=\"question.minSelectable\" />\r\n            </mat-form-field>&nbsp;&nbsp;-->\r\n            <mat-form-field class=\"example-full-width\" style=\"width: 20%;\">\r\n                <input matInput placeholder=\"Maximal auswählbar\" [formControl]=\"this.formControls[index][0]\" [errorStateMatcher]=\"this.matcher\" />\r\n                <mat-error *ngIf=\"this.formControls[index][0].invalid\">Fehlerhafte Eingabe.</mat-error>\r\n            </mat-form-field><br>\r\n            <label>Antwortmöglichkeiten</label><br><br>\r\n            <div *ngFor=\"let answerChoice of question.answerOptions; let index = index\">\r\n                <mat-form-field class=\"example-full-width\" style=\"width: 32%;\">\r\n                    <input matInput placeholder={{index+1}} [ngModel]=\"question.answerOptions[index]\" (change)=\"valueUpdate(question, index, $event)\"/>\r\n                </mat-form-field>\r\n                <button mat-icon-button class=\"redButton\" (click)=\"removeFromArray(question.answerOptions, index)\">\r\n                    <mat-icon class=\"trashCan\">delete</mat-icon>\r\n                </button>\r\n            </div>\r\n            <a mat-fab class=\"greenButton\" (click)=\"onAddAnswerChoice(question)\" style=\"display: block; margin: auto;\">\r\n                <mat-icon>add</mat-icon>\r\n            </a>\r\n        </div>\r\n\r\n    </mat-card>\r\n    <br>\r\n</div>";
      /***/
    },

    /***/
    "Uyn7":
    /*!*****************************************************************************************************************!*\
      !*** ./src/app/studycreation/question-editing/question-selection-dialog/question-selection-dialog.component.ts ***!
      \*****************************************************************************************************************/

    /*! exports provided: QuestionSelectionDialogComponent */

    /***/
    function Uyn7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuestionSelectionDialogComponent", function () {
        return QuestionSelectionDialogComponent;
      });
      /* harmony import */


      var _raw_loader_question_selection_dialog_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./question-selection-dialog.component.html */
      "ypjz");
      /* harmony import */


      var _question_selection_dialog_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./question-selection-dialog.component.css */
      "M/E+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _src_app_Model_Study_StudyObjects_Questions_DateQuestion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @src/app/Model/Study/StudyObjects/Questions/DateQuestion */
      "lGoz");
      /* harmony import */


      var _src_app_Model_Study_StudyObjects_Questions_LinearScaleQuestion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @src/app/Model/Study/StudyObjects/Questions/LinearScaleQuestion */
      "Tcgm");
      /* harmony import */


      var _src_app_Model_Study_StudyObjects_Questions_MultipleChoiceQuestion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @src/app/Model/Study/StudyObjects/Questions/MultipleChoiceQuestion */
      "MsGT");
      /* harmony import */


      var _src_app_Model_Study_StudyObjects_Questions_TextQuestion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @src/app/Model/Study/StudyObjects/Questions/TextQuestion */
      "r8Zv");
      /* harmony import */


      var _services_study_wrapper_study_wrapper_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../services/study-wrapper/study-wrapper.service */
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

      var QuestionSelectionDialogComponent = /*#__PURE__*/function () {
        function QuestionSelectionDialogComponent(studywrapper, dialogRef) {
          _classCallCheck(this, QuestionSelectionDialogComponent);

          this.studywrapper = studywrapper;
          this.dialogRef = dialogRef;
        }

        _createClass(QuestionSelectionDialogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
          /**
           * Aus dem Parameter wird der Fragetyp abgeleitet, eine default Frage erstellt und zurückgegeben.
           * @param questionType
           */

        }, {
          key: "onButtonClick",
          value: function onButtonClick(questionType) {
            var questionResult = undefined;

            switch (questionType) {
              case 0:
                questionResult = new _src_app_Model_Study_StudyObjects_Questions_DateQuestion__WEBPACK_IMPORTED_MODULE_4__["DateQuestion"](this.studywrapper.lastID, "", "", "");
                break;

              case 1:
                questionResult = new _src_app_Model_Study_StudyObjects_Questions_LinearScaleQuestion__WEBPACK_IMPORTED_MODULE_5__["LinearScaleQuestion"](this.studywrapper.lastID, "", "", "", 5, "", "");
                break;

              case 2:
                questionResult = new _src_app_Model_Study_StudyObjects_Questions_MultipleChoiceQuestion__WEBPACK_IMPORTED_MODULE_6__["MultipleChoiceQuestion"](this.studywrapper.lastID, "", "", "", [], 1);
                break;

              case 3:
                questionResult = new _src_app_Model_Study_StudyObjects_Questions_TextQuestion__WEBPACK_IMPORTED_MODULE_7__["TextQuestion"](this.studywrapper.lastID, "", "", "");
                break;
            }

            this.dialogRef.close(questionResult);
          }
        }]);

        return QuestionSelectionDialogComponent;
      }();

      QuestionSelectionDialogComponent.ctorParameters = function () {
        return [{
          type: _services_study_wrapper_study_wrapper_service__WEBPACK_IMPORTED_MODULE_8__["StudyWrapperService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
        }];
      };

      QuestionSelectionDialogComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-question-selection-dialog',
        template: _raw_loader_question_selection_dialog_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_question_selection_dialog_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_services_study_wrapper_study_wrapper_service__WEBPACK_IMPORTED_MODULE_8__["StudyWrapperService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]])], QuestionSelectionDialogComponent);
      /***/
    },

    /***/
    "Zltt":
    /*!******************************************************************************!*\
      !*** ./src/app/studycreation/sequence-editing/sequence-editing.component.ts ***!
      \******************************************************************************/

    /*! exports provided: SequenceEditingComponent */

    /***/
    function Zltt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SequenceEditingComponent", function () {
        return SequenceEditingComponent;
      });
      /* harmony import */


      var _raw_loader_sequence_editing_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./sequence-editing.component.html */
      "sbJu");
      /* harmony import */


      var _sequence_editing_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./sequence-editing.component.css */
      "PTz0");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "ltgo");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _src_app_Model_Randomizing_RandomizingStrategies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @src/app/Model/Randomizing/RandomizingStrategies */
      "TQet");
      /* harmony import */


      var _src_app_Model_Study_ReferenceTuple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @src/app/Model/Study/ReferenceTuple */
      "HfNz");
      /* harmony import */


      var _services_study_wrapper_study_wrapper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/study-wrapper/study-wrapper.service */
      "pzGZ");
      /* harmony import */


      var _services_color_color_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/color/color.service */
      "atCH");

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

      var SequenceEditingComponent = /*#__PURE__*/function () {
        function SequenceEditingComponent(studywrapper, colorService) {
          _classCallCheck(this, SequenceEditingComponent);

          this.studywrapper = studywrapper;
          this.colorService = colorService;
          /**
           * In dem toolbox Array befinden sich alle Elemente, die erstellt wurden und einer Section hinzugefügt werden können.
           */

          this.toolbox = [];
          /**
           * In diesem Array befinden sich alle Randomisierungsstrategien, die innerhalb einer Section verwendet werden können.
           */

          this.randomizers = [];

          for (var randomizer in _src_app_Model_Randomizing_RandomizingStrategies__WEBPACK_IMPORTED_MODULE_4__["RandomizingStrategies"]) {
            if (typeof _src_app_Model_Randomizing_RandomizingStrategies__WEBPACK_IMPORTED_MODULE_4__["RandomizingStrategies"][randomizer] === "number") {
              this.randomizers.push(randomizer);
            }
          }
        }
        /**
         * Bereits erstellte Sections und SectionElements werden in das sections bzw. toolbox Array geladen.
         */


        _createClass(SequenceEditingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _iterator9 = _createForOfIteratorHelper(this.studywrapper.study.sections),
                _step9;

            try {
              for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                var section = _step9.value;
                this.toolbox.push(section);
              }
            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }
          }
          /**
           * Sucht die Id in der Liste sectionElements aus StudyPrototype und gibt es zurück wenn es gefunden wird
           * @param id
           */

        }, {
          key: "findSectionById",
          value: function findSectionById(id) {
            var _iterator10 = _createForOfIteratorHelper(this.studywrapper.study.sections),
                _step10;

            try {
              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                var section = _step10.value;

                if (id == section.id) {
                  return section;
                }
              }
            } catch (err) {
              _iterator10.e(err);
            } finally {
              _iterator10.f();
            }
          }
          /**
           * Die Aktion die mit den Toolbox Elementen ausgeführt wurde wird in den entsprechenden Datenstrukturen aktualisiert
           * @param event
           */

        }, {
          key: "onDrop",
          value: function onDrop(event) {
            if (event.previousContainer.id == "toolbox" && event.container.id != "toolbox") {
              this.studywrapper.study.refSections.push(new _src_app_Model_Study_ReferenceTuple__WEBPACK_IMPORTED_MODULE_5__["ReferenceTuple"](event.previousContainer.data[event.previousIndex].id, false));
            } else {
              if (event.previousContainer === event.container) {
                Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
              }
            }
          }
          /**
           * Entfernt aus dem Array targetArray an der Stelle index einen Eintrag.
           * @param targetArray
           * @param index
           */

        }, {
          key: "removeFromArray",
          value: function removeFromArray(targetArray, index) {
            targetArray.splice(index, 1);
          }
        }]);

        return SequenceEditingComponent;
      }();

      SequenceEditingComponent.ctorParameters = function () {
        return [{
          type: _services_study_wrapper_study_wrapper_service__WEBPACK_IMPORTED_MODULE_6__["StudyWrapperService"]
        }, {
          type: _services_color_color_service__WEBPACK_IMPORTED_MODULE_7__["ColorService"]
        }];
      };

      SequenceEditingComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sequence-editing',
        template: _raw_loader_sequence_editing_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_sequence_editing_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_services_study_wrapper_study_wrapper_service__WEBPACK_IMPORTED_MODULE_6__["StudyWrapperService"], _services_color_color_service__WEBPACK_IMPORTED_MODULE_7__["ColorService"]])], SequenceEditingComponent);
      /***/
    },

    /***/
    "a03t":
    /*!***************************************************************!*\
      !*** ./src/app/studycreation/studycreation-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: StudyCreationRoutingModule */

    /***/
    function a03t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StudyCreationRoutingModule", function () {
        return StudyCreationRoutingModule;
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


      var _studycreation_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./studycreation.routes */
      "znyf");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var StudyCreationRoutingModule = function StudyCreationRoutingModule() {
        _classCallCheck(this, StudyCreationRoutingModule);
      };

      StudyCreationRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_studycreation_routes__WEBPACK_IMPORTED_MODULE_2__["routes"])],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      })], StudyCreationRoutingModule);
      /***/
    },

    /***/
    "acHD":
    /*!******************************************************************************************!*\
      !*** ./src/app/studycreation/sectionelement-editing/sectionelement-editing.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: SectionElementEditingComponent */

    /***/
    function acHD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SectionElementEditingComponent", function () {
        return SectionElementEditingComponent;
      });
      /* harmony import */


      var _raw_loader_sectionelement_editing_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./sectionelement-editing.component.html */
      "MWis");
      /* harmony import */


      var _sectionelement_editing_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./sectionelement-editing.component.css */
      "Ky/Q");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "ltgo");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _src_app_Model_Randomizing_RandomizingStrategies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @src/app/Model/Randomizing/RandomizingStrategies */
      "TQet");
      /* harmony import */


      var _src_app_Model_Study_ReferenceTuple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @src/app/Model/Study/ReferenceTuple */
      "HfNz");
      /* harmony import */


      var _src_app_Model_Study_StudyObjects_SectionElement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @src/app/Model/Study/StudyObjects/SectionElement */
      "HEL/");
      /* harmony import */


      var _services_study_wrapper_study_wrapper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/study-wrapper/study-wrapper.service */
      "pzGZ");
      /* harmony import */


      var _services_color_color_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../services/color/color.service */
      "atCH");

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

      var SectionElementEditingComponent = /*#__PURE__*/function () {
        function SectionElementEditingComponent(studywrapper, colorService) {
          _classCallCheck(this, SectionElementEditingComponent);

          this.studywrapper = studywrapper;
          this.colorService = colorService;
          /**
           * In dem toolbox Array befinden sich alle Elemente, die erstellt wurden und einer Section hinzugefügt werden können.
           */

          this.toolbox = [];
          /**
           * In dem sectionelements Array befinden sich alle SectionElements die in dieser Sicht erstellt wurden.
           */

          this.sectionelements = [];
          /**
           * In diesem Array befinden sich alle Randomisierungsstrategien, die innerhalb einer Section verwendet werden können.
           */

          this.randomizers = [];

          for (var randomizer in _src_app_Model_Randomizing_RandomizingStrategies__WEBPACK_IMPORTED_MODULE_4__["RandomizingStrategies"]) {
            if (typeof _src_app_Model_Randomizing_RandomizingStrategies__WEBPACK_IMPORTED_MODULE_4__["RandomizingStrategies"][randomizer] === "number") {
              this.randomizers.push(randomizer);
            }
          }
        }
        /**
         * Bereits erstellte SectionElements und StudyObjects werden in das sections bzw. toolbox Array geladen.
         */


        _createClass(SectionElementEditingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _iterator11 = _createForOfIteratorHelper(this.studywrapper.study.sectionElements),
                _step11;

            try {
              for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                var sectionelement = _step11.value;

                if (sectionelement instanceof _src_app_Model_Study_StudyObjects_SectionElement__WEBPACK_IMPORTED_MODULE_6__["SectionElement"]) {
                  this.sectionelements.push(sectionelement);
                }
              }
            } catch (err) {
              _iterator11.e(err);
            } finally {
              _iterator11.f();
            }

            var _iterator12 = _createForOfIteratorHelper(this.studywrapper.study.studyObjects),
                _step12;

            try {
              for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                var studyobject = _step12.value;
                this.toolbox.push(studyobject);
              }
            } catch (err) {
              _iterator12.e(err);
            } finally {
              _iterator12.f();
            }
          }
          /**
           * Sucht die Id in der Liste studyObjects aus StudyPrototype und gibt es zurück wenn das Element gefunden wurde.
           * @param id
           */

        }, {
          key: "findStudyObjectById",
          value: function findStudyObjectById(id) {
            var _iterator13 = _createForOfIteratorHelper(this.studywrapper.study.studyObjects),
                _step13;

            try {
              for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                var studyobject = _step13.value;

                if (id == studyobject.id) {
                  return studyobject;
                }
              }
            } catch (err) {
              _iterator13.e(err);
            } finally {
              _iterator13.f();
            }

            throw new Error("AbstractStudyObject mit der id " + id + " gibt es nicht.");
          }
          /**
           * Ein neues SectionElement wird erzeugt und in die Listen eingebunden
           */

        }, {
          key: "onAddPlayground",
          value: function onAddPlayground() {
            var toInsert = new _src_app_Model_Study_StudyObjects_SectionElement__WEBPACK_IMPORTED_MODULE_6__["SectionElement"](this.studywrapper.lastID, "", "", 1);
            this.sectionelements.unshift(toInsert);
            this.studywrapper.study.sectionElements.unshift(toInsert);
          }
          /**
           * Die Aktion die mit den Toolbox Elementen ausgeführt wurde wird
           * in den entsprechenden Datenstrukturen aktualisiert
           * @param event
           * @param sectionelement
           */

        }, {
          key: "onDrop",
          value: function onDrop(event, sectionelement) {
            if (event.previousContainer.id.startsWith("toolbox") && event.container.id != "toolbox") {
              sectionelement.studyObjects.push(new _src_app_Model_Study_ReferenceTuple__WEBPACK_IMPORTED_MODULE_5__["ReferenceTuple"](event.previousContainer.data[event.previousIndex].id, false));
            } else {
              if (event.previousContainer === event.container) {
                Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
              }
            }
          }
          /**
           * Entfernt aus dem Array targetArray an der Stelle index einen Eintrag.
           * @param targetArray
           * @param index
           */

        }, {
          key: "removeFromArray",
          value: function removeFromArray(targetArray, index) {
            targetArray.splice(index, 1);
          }
          /**
           * Entfernt ein sectionElement mit der gegebenen Id von allen Sections
           * @param id
           */

        }, {
          key: "removeFromSection",
          value: function removeFromSection(id) {
            var _iterator14 = _createForOfIteratorHelper(this.studywrapper.study.sections),
                _step14;

            try {
              for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                var section = _step14.value;
                var index = 0;

                var _iterator15 = _createForOfIteratorHelper(section.sectionElements),
                    _step15;

                try {
                  for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                    var sectionElementRef = _step15.value;

                    if (sectionElementRef.ID == id) {
                      section.sectionElements.splice(index, 1);
                    }

                    index++;
                  }
                } catch (err) {
                  _iterator15.e(err);
                } finally {
                  _iterator15.f();
                }
              }
            } catch (err) {
              _iterator14.e(err);
            } finally {
              _iterator14.f();
            }
          }
          /**
           * Löscht ein StudyObject aus der Studie und aus dem toolbox Array.
           * @param index
           * @param id
           */

        }, {
          key: "deleteTest",
          value: function deleteTest(index, id) {
            this.studywrapper.study.sectionElements.splice(index, 1);
            this.removeFromSection(id);
            this.sectionelements.splice(index, 1);
          }
        }]);

        return SectionElementEditingComponent;
      }();

      SectionElementEditingComponent.ctorParameters = function () {
        return [{
          type: _services_study_wrapper_study_wrapper_service__WEBPACK_IMPORTED_MODULE_7__["StudyWrapperService"]
        }, {
          type: _services_color_color_service__WEBPACK_IMPORTED_MODULE_8__["ColorService"]
        }];
      };

      SectionElementEditingComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sectionelement-editing',
        template: _raw_loader_sectionelement_editing_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_sectionelement_editing_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_services_study_wrapper_study_wrapper_service__WEBPACK_IMPORTED_MODULE_7__["StudyWrapperService"], _services_color_color_service__WEBPACK_IMPORTED_MODULE_8__["ColorService"]])], SectionElementEditingComponent);
      /***/
    },

    /***/
    "atCH":
    /*!***************************************************************!*\
      !*** ./src/app/studycreation/services/color/color.service.ts ***!
      \***************************************************************/

    /*! exports provided: ColorService */

    /***/
    function atCH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ColorService", function () {
        return ColorService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _src_app_Model_Study_StudyObjects_Questions_DateQuestion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @src/app/Model/Study/StudyObjects/Questions/DateQuestion */
      "lGoz");
      /* harmony import */


      var _src_app_Model_Study_StudyObjects_Questions_LinearScaleQuestion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @src/app/Model/Study/StudyObjects/Questions/LinearScaleQuestion */
      "Tcgm");
      /* harmony import */


      var _src_app_Model_Study_StudyObjects_Questions_MultipleChoiceQuestion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @src/app/Model/Study/StudyObjects/Questions/MultipleChoiceQuestion */
      "MsGT");
      /* harmony import */


      var _src_app_Model_Study_StudyObjects_Questions_TextQuestion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @src/app/Model/Study/StudyObjects/Questions/TextQuestion */
      "r8Zv");
      /* harmony import */


      var _src_app_Model_Study_StudyObjects_Section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @src/app/Model/Study/StudyObjects/Section */
      "/3i5");
      /* harmony import */


      var _src_app_Model_Study_StudyObjects_SectionElement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @src/app/Model/Study/StudyObjects/SectionElement */
      "HEL/");
      /* harmony import */


      var _src_app_Model_Study_StudyObjects_TextBlock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @src/app/Model/Study/StudyObjects/TextBlock */
      "0HUV");
      /* harmony import */


      var _src_app_Model_Study_StudyObjects_VibrationPattern__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @src/app/Model/Study/StudyObjects/VibrationPattern */
      "tJs4");

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

      var ColorService = /*#__PURE__*/function () {
        function ColorService() {
          _classCallCheck(this, ColorService);
        }
        /**
         * Gibt einem Objekt den Typ seines Objekts als String zurück.
         * @param item
         */


        _createClass(ColorService, [{
          key: "getStudyObjectType",
          value: function getStudyObjectType(item) {
            switch (true) {
              case item instanceof _src_app_Model_Study_StudyObjects_VibrationPattern__WEBPACK_IMPORTED_MODULE_8__["VibrationPattern"]:
                return "VibrationPattern";

              case item instanceof _src_app_Model_Study_StudyObjects_TextBlock__WEBPACK_IMPORTED_MODULE_7__["TextBlock"]:
                return "TextBlock";

              case item instanceof _src_app_Model_Study_StudyObjects_Questions_DateQuestion__WEBPACK_IMPORTED_MODULE_1__["DateQuestion"]:
                return "DateQuestion";

              case item instanceof _src_app_Model_Study_StudyObjects_Questions_LinearScaleQuestion__WEBPACK_IMPORTED_MODULE_2__["LinearScaleQuestion"]:
                return "LinearScaleQuestion";

              case item instanceof _src_app_Model_Study_StudyObjects_Questions_MultipleChoiceQuestion__WEBPACK_IMPORTED_MODULE_3__["MultipleChoiceQuestion"]:
                return "MultipleChoiceQuestion";

              case item instanceof _src_app_Model_Study_StudyObjects_Questions_TextQuestion__WEBPACK_IMPORTED_MODULE_4__["TextQuestion"]:
                return "TextQuestion";

              case item instanceof _src_app_Model_Study_StudyObjects_SectionElement__WEBPACK_IMPORTED_MODULE_6__["SectionElement"]:
                return "SectionElement";

              case item instanceof _src_app_Model_Study_StudyObjects_Section__WEBPACK_IMPORTED_MODULE_5__["Section"]:
                return "Section";

              default:
                return "undefined";
            }
          }
          /**
           * Gibt einem Objekt den Farbcode als String zurück, den das Objekt haben soll.
           * @param item
           */

        }, {
          key: "getStudyObjectColor",
          value: function getStudyObjectColor(item) {
            switch (true) {
              case item instanceof _src_app_Model_Study_StudyObjects_VibrationPattern__WEBPACK_IMPORTED_MODULE_8__["VibrationPattern"]:
                return "#6D0000";

              case item instanceof _src_app_Model_Study_StudyObjects_TextBlock__WEBPACK_IMPORTED_MODULE_7__["TextBlock"]:
                return "#3e753b";

              case item instanceof _src_app_Model_Study_StudyObjects_Questions_DateQuestion__WEBPACK_IMPORTED_MODULE_1__["DateQuestion"]:
                return "#4c2f27";

              case item instanceof _src_app_Model_Study_StudyObjects_Questions_LinearScaleQuestion__WEBPACK_IMPORTED_MODULE_2__["LinearScaleQuestion"]:
                return "#1b5583";

              case item instanceof _src_app_Model_Study_StudyObjects_Questions_MultipleChoiceQuestion__WEBPACK_IMPORTED_MODULE_3__["MultipleChoiceQuestion"]:
                return "#79553d";

              case item instanceof _src_app_Model_Study_StudyObjects_Questions_TextQuestion__WEBPACK_IMPORTED_MODULE_4__["TextQuestion"]:
                return "#374447";

              case item instanceof _src_app_Model_Study_StudyObjects_SectionElement__WEBPACK_IMPORTED_MODULE_6__["SectionElement"]:
                return "#669ad2";

              case item instanceof _src_app_Model_Study_StudyObjects_Section__WEBPACK_IMPORTED_MODULE_5__["Section"]:
                return "#c8708e";

              default:
                return "";
            }
          }
        }]);

        return ColorService;
      }();

      ColorService.ctorParameters = function () {
        return [];
      };

      ColorService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      })
      /**
       * Der Service ist dafür zuständig, einzelnen Objekten die richtige Farbe und das richtige Label zuzuordnen
       */
      , __metadata("design:paramtypes", [])], ColorService);
      /***/
    },

    /***/
    "cbKi":
    /*!*******************************************************************************!*\
      !*** ./src/app/studycreation/question-editing/question-editing.component.css ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function cbKi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".redButton {\r\n    color: #6D0000;\r\n    background-color: #FF000000;\r\n}\r\n\r\n.greenButton {\r\n    background-color: #3e753b;\r\n    color: white;\r\n}\r\n\r\n.trashCan {\r\n    font-size: 40px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZHljcmVhdGlvbi9xdWVzdGlvbi1lZGl0aW5nL3F1ZXN0aW9uLWVkaXRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9zdHVkeWNyZWF0aW9uL3F1ZXN0aW9uLWVkaXRpbmcvcXVlc3Rpb24tZWRpdGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZEJ1dHRvbiB7XHJcbiAgICBjb2xvcjogIzZEMDAwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjAwMDAwMDtcclxufVxyXG5cclxuLmdyZWVuQnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZTc1M2I7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi50cmFzaENhbiB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "eC3E":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/studycreation/general-editing/general-editing.component.html ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function eC3E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mat-card>\r\n    <mat-card-title>\r\n        <mat-form-field style=\"width: 45vw;font-size:18px\">\r\n            <input matInput placeholder=\"Name der Studie\" [(ngModel)]=\"this.studywrapper.study.keyData.name\"\r\n                 /> </mat-form-field>\r\n    </mat-card-title>\r\n    <mat-form-field class=\"textblock-textarea\">\r\n        <textarea matInput [formControl]=\"this.shortControl\" [errorStateMatcher]=\"this.matcher\"\r\n            [placeholder]=\"'Kurzbeschreibung (' + this.studywrapper.study.keyData.shortDescription.text.length + '/200)'\"></textarea>\r\n            <mat-error *ngIf=\"this.shortControl.invalid\">Maximal 200 Zeichen erlaubt.</mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"textblock-textarea\">\r\n        <textarea matInput [(ngModel)]=\"this.studywrapper.study.keyData.fullDescription\"\r\n            placeholder=\"Vollständige Beschreibung\"></textarea>\r\n    </mat-form-field>\r\n</mat-card>\r\n<br>\r\n<mat-card>\r\n    <mat-card-title style = \"font-size: 18px\">Ausschlussfragen</mat-card-title>\r\n    <hr />\r\n    Amplitude im teilnehmenden Gerät verpflichtend?&nbsp;&nbsp;<mat-slide-toggle\r\n        [(ngModel)]=\"this.studywrapper.study.keyData.amplitudeNecessary\"></mat-slide-toggle>\r\n    <hr><br>\r\n    <a mat-fab class=\"greenButton\" (click)=\"onAddQualificationQuestion()\" style=\"display: block; margin: auto;\">\r\n        <mat-icon>add</mat-icon>\r\n    </a>\r\n    <br>\r\n    <div *ngFor=\"let qualiQuestion of this.studywrapper.study.keyData.qualiQuestions; let index=index\">\r\n        <mat-card>\r\n            <mat-form-field style=\"font-size: 18px; width: 45vw;\">\r\n                <input matInput placeholder=\"Frage\" [(ngModel)]=\"qualiQuestion.questionText\" />\r\n            </mat-form-field>\r\n            &nbsp;&nbsp; Notwendige Antwort: &nbsp;&nbsp; Nein &nbsp;\r\n            <mat-slide-toggle [(ngModel)]=\"qualiQuestion.requiredAnswer\"></mat-slide-toggle>&nbsp;&nbsp;&nbsp;Ja<button\r\n                mat-icon-button class=\"redButton\" (click)=\"removeFromArray(this.studywrapper.study.keyData.qualiQuestions, index)\">\r\n                <mat-icon class=\"trashCan\">delete</mat-icon>\r\n            </button>\r\n        </mat-card>\r\n        <br>\r\n    </div>    \r\n</mat-card>";
      /***/
    },

    /***/
    "fPCq":
    /*!***********************************************************************************************!*\
      !*** ./src/app/studycreation/toolboxes/studyobject-toolbox/studyobject-toolbox.component.css ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function fPCq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "mat-card {\r\n    margin-bottom: 15px;\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZHljcmVhdGlvbi90b29sYm94ZXMvc3R1ZHlvYmplY3QtdG9vbGJveC9zdHVkeW9iamVjdC10b29sYm94LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvc3R1ZHljcmVhdGlvbi90b29sYm94ZXMvc3R1ZHlvYmplY3QtdG9vbGJveC9zdHVkeW9iamVjdC10b29sYm94LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */";
      /***/
    },

    /***/
    "jfxa":
    /*!****************************************************************************!*\
      !*** ./src/app/studycreation/section-editing/section-editing.component.ts ***!
      \****************************************************************************/

    /*! exports provided: SectionEditingComponent */

    /***/
    function jfxa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SectionEditingComponent", function () {
        return SectionEditingComponent;
      });
      /* harmony import */


      var _raw_loader_section_editing_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./section-editing.component.html */
      "rsRg");
      /* harmony import */


      var _section_editing_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./section-editing.component.css */
      "J5kB");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _src_app_Model_Randomizing_RandomizingStrategies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @src/app/Model/Randomizing/RandomizingStrategies */
      "TQet");
      /* harmony import */


      var _src_app_Model_Study_StudyObjects_Section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @src/app/Model/Study/StudyObjects/Section */
      "/3i5");
      /* harmony import */


      var _services_study_wrapper_study_wrapper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/study-wrapper/study-wrapper.service */
      "pzGZ");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "ltgo");
      /* harmony import */


      var _src_app_Model_Study_ReferenceTuple__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @src/app/Model/Study/ReferenceTuple */
      "HfNz");
      /* harmony import */


      var _services_color_color_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../services/color/color.service */
      "atCH");

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

      var SectionEditingComponent = /*#__PURE__*/function () {
        function SectionEditingComponent(studywrapper, colorService) {
          _classCallCheck(this, SectionEditingComponent);

          this.studywrapper = studywrapper;
          this.colorService = colorService;
          /**
           * In dem toolbox Array befinden sich alle Elemente, die erstellt wurden und einer Section hinzugefügt werden können.
           */

          this.toolbox = [];
          /**
           * In dem sections Array befinden sich alle Section die in dieser Sicht erstellt wurden.
           */

          this.sections = [];
          /**
           * In diesem Array befinden sich alle Randomisierungsstrategien, die innerhalb einer Section verwendet werden können.
           */

          this.randomizers = [];

          for (var randomizer in _src_app_Model_Randomizing_RandomizingStrategies__WEBPACK_IMPORTED_MODULE_3__["RandomizingStrategies"]) {
            if (typeof _src_app_Model_Randomizing_RandomizingStrategies__WEBPACK_IMPORTED_MODULE_3__["RandomizingStrategies"][randomizer] === "number") {
              this.randomizers.push(randomizer);
            }
          }
        }
        /**
         * Bereits erstellte Sections und SectionElements werden in das sections bzw. toolbox Array geladen.
         */


        _createClass(SectionEditingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _iterator16 = _createForOfIteratorHelper(this.studywrapper.study.sections),
                _step16;

            try {
              for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                var section = _step16.value;
                this.sections.push(section);
              }
            } catch (err) {
              _iterator16.e(err);
            } finally {
              _iterator16.f();
            }

            var _iterator17 = _createForOfIteratorHelper(this.studywrapper.study.sectionElements),
                _step17;

            try {
              for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                var sectionelement = _step17.value;
                this.toolbox.push(sectionelement);
              }
            } catch (err) {
              _iterator17.e(err);
            } finally {
              _iterator17.f();
            }
          }
          /**
           * Sucht die Id in der Liste sectionElements aus StudyPrototype und gibt es zurück wenn es gefunden wird
           * @param id
           */

        }, {
          key: "findSectionElementById",
          value: function findSectionElementById(id) {
            var _iterator18 = _createForOfIteratorHelper(this.studywrapper.study.sectionElements),
                _step18;

            try {
              for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                var sectionelement = _step18.value;

                if (id == sectionelement.id) {
                  return sectionelement;
                }
              }
            } catch (err) {
              _iterator18.e(err);
            } finally {
              _iterator18.f();
            }
          }
          /**
           * Eine neue default Section wird erstellt und der Studie und dem sections Array hinzugefügt.
           */

        }, {
          key: "onAddSection",
          value: function onAddSection() {
            var toInsert = new _src_app_Model_Study_StudyObjects_Section__WEBPACK_IMPORTED_MODULE_4__["Section"](this.studywrapper.lastID, "", "", false, true, 1);
            this.sections.unshift(toInsert);
            this.studywrapper.study.sections.unshift(toInsert);
          }
          /**
           * Updated je nach Event section und synchronisiert das Model
           * @param event
           * @param section
           */

        }, {
          key: "onDrop",
          value: function onDrop(event, section) {
            if (event.previousContainer.id == "toolbox" && event.container.id != "toolbox") {
              section.sectionElements.push(new _src_app_Model_Study_ReferenceTuple__WEBPACK_IMPORTED_MODULE_7__["ReferenceTuple"](event.previousContainer.data[event.previousIndex].id, false));
            } else {
              if (event.previousContainer === event.container) {
                Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
              }
            }
          }
          /**
           * Entfernt aus dem Array targetArray an der Stelle index einen Eintrag.
           */

        }, {
          key: "removeFromArray",
          value: function removeFromArray(targetArray, index) {
            targetArray.splice(index, 1);
          }
          /**
           * Entfernt aus dem Array refsection in der Studie das Element an der Stelle Id
           * @param id
           */

        }, {
          key: "removeFromReference",
          value: function removeFromReference(id) {
            var index = 0;

            var _iterator19 = _createForOfIteratorHelper(this.studywrapper.study.refSections),
                _step19;

            try {
              for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                var ref = _step19.value;

                if (ref.ID == id) {
                  this.studywrapper.study.refSections.splice(index, 1);
                }

                index++;
              }
            } catch (err) {
              _iterator19.e(err);
            } finally {
              _iterator19.f();
            }
          }
          /**
           * Löscht eine Section aus der Studie und aus dem sections Array.
           * @param index
           * @param number
           */

        }, {
          key: "deleteSection",
          value: function deleteSection(index, id) {
            this.studywrapper.study.sections.splice(index, 1);
            this.removeFromReference(id);
            this.sections.splice(index, 1);
          }
        }]);

        return SectionEditingComponent;
      }();

      SectionEditingComponent.ctorParameters = function () {
        return [{
          type: _services_study_wrapper_study_wrapper_service__WEBPACK_IMPORTED_MODULE_5__["StudyWrapperService"]
        }, {
          type: _services_color_color_service__WEBPACK_IMPORTED_MODULE_8__["ColorService"]
        }];
      };

      SectionEditingComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-section-editing',
        template: _raw_loader_section_editing_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_section_editing_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })
      /**
       * Die Klasse ist zur Verwaltung der Operationen, die beim editieren von Sections benötigt werden.
       */
      , __metadata("design:paramtypes", [_services_study_wrapper_study_wrapper_service__WEBPACK_IMPORTED_MODULE_5__["StudyWrapperService"], _services_color_color_service__WEBPACK_IMPORTED_MODULE_8__["ColorService"]])], SectionEditingComponent);
      /***/
    },

    /***/
    "lIQF":
    /*!********************************************************************************************************!*\
      !*** ./src/app/studycreation/toolboxes/vibrationpattern-toolbox/vibrationpattern-toolbox.component.ts ***!
      \********************************************************************************************************/

    /*! exports provided: VibrationPatternToolboxComponent */

    /***/
    function lIQF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VibrationPatternToolboxComponent", function () {
        return VibrationPatternToolboxComponent;
      });
      /* harmony import */


      var _raw_loader_vibrationpattern_toolbox_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./vibrationpattern-toolbox.component.html */
      "nyDt");
      /* harmony import */


      var _vibrationpattern_toolbox_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./vibrationpattern-toolbox.component.css */
      "8/Jw");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _src_app_Model_Study_StudyObjects_PauseElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @src/app/Model/Study/StudyObjects/PauseElement */
      "j7zN");
      /* harmony import */


      var _src_app_Model_Study_StudyObjects_VibrationElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @src/app/Model/Study/StudyObjects/VibrationElement */
      "1N3c");

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

      var VibrationPatternToolboxComponent = /*#__PURE__*/function () {
        function VibrationPatternToolboxComponent() {
          _classCallCheck(this, VibrationPatternToolboxComponent);
        }
        /**
         * Initialisiert die connectedLists mit der Anzahl der VibrationPattern die sie enthalten sollen.
         */


        _createClass(VibrationPatternToolboxComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initConnectedLists(this.vibrationpatternCount);
          }
          /**
           * Initialisiert die die connectedLists mit der Anzahl numOfLists.
           * @param numOfLists
           */

        }, {
          key: "initConnectedLists",
          value: function initConnectedLists(numOfLists) {
            this.connectedLists = undefined;

            for (var i = 0; i < numOfLists; i++) {
              if (this.connectedLists == undefined) {
                this.connectedLists = ["vibrationpatternList" + i];
              } else {
                this.connectedLists.push("vibrationpatternList" + i);
              }
            }
          }
          /**
           * Ruft initConnectedLists auf, wenn sich die VibrationPatternCount geändert hat
           * @param changes
           */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes["vibrationpatternCount"]) {
              this.initConnectedLists(this.vibrationpatternCount);
            }
          }
          /**
           * Prüft, ob ein Element vom Typ VibrationElement ist.
           * @param val
           */

        }, {
          key: "isVibration",
          value: function isVibration(val) {
            return val instanceof _src_app_Model_Study_StudyObjects_VibrationElement__WEBPACK_IMPORTED_MODULE_4__["VibrationElement"];
          }
          /**
           * Prüft, ob ein Element vom Typ PauseElement ist.
           * @param val
           */

        }, {
          key: "isPause",
          value: function isPause(val) {
            return val instanceof _src_app_Model_Study_StudyObjects_PauseElement__WEBPACK_IMPORTED_MODULE_3__["PauseElement"];
          }
        }]);

        return VibrationPatternToolboxComponent;
      }();

      VibrationPatternToolboxComponent.ctorParameters = function () {
        return [];
      };

      VibrationPatternToolboxComponent.propDecorators = {
        toolbox: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        vibrationpatternCount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      VibrationPatternToolboxComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-vibrationpattern-toolbox',
        template: _raw_loader_vibrationpattern_toolbox_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_vibrationpattern_toolbox_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [])], VibrationPatternToolboxComponent);
      /***/
    },

    /***/
    "lt1v":
    /*!**************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/studycreation/vibrationpattern-editing/vibrationpattern-editing.component.html ***!
      \**************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function lt1v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"vibration-contianer\">\r\n    <div class=\"toolbox\">\r\n        <app-vibrationpattern-toolbox [toolbox]=\"toolbox\" [vibrationpatternCount]=\"vibrationpatterns.length\">\r\n        </app-vibrationpattern-toolbox>\r\n    </div>\r\n\r\n    <div class=\"mainContent\">\r\n        <a mat-fab class=\"greenButton\" (click)=\"onAddVibrationPattern()\" style=\"display: block; margin: auto;\">\r\n            <mat-icon>add</mat-icon>\r\n        </a><br>\r\n        <div *ngFor=\"let vibrationpattern of vibrationpatterns; let index = index\">\r\n            <mat-card>\r\n                <mat-card-title>\r\n                    <mat-form-field class=\"example-full-width\" style=\"width: 50%; font-size:18px\">\r\n                        <input matInput placeholder=\"Interne Bezeichnung\" [(ngModel)]=\"vibrationpattern.name\" />\r\n                    </mat-form-field>\r\n                    &nbsp;&nbsp;\r\n                    <mat-form-field class=\"example-full-width\" style=\"width: 50%; font-size:18px\">\r\n                        <input matInput placeholder=\"Anzeigename\" [(ngModel)]=\"vibrationpattern.displayName\" />\r\n                    </mat-form-field>\r\n                    <button mat-icon-button class=\"redButton\" (click)=\"removeFromStudy(index, vibrationpattern.id)\">\r\n                        <mat-icon class=\"trashCan\">delete</mat-icon>\r\n                    </button>\r\n                </mat-card-title>\r\n                <div cdkDropList class=\"vibrationpatternList\" id=\"vibrationpatternList{{ index }}\"\r\n                    [cdkDropListData]=\"vibrationpattern.vibrationPatternElements\"\r\n                    (cdkDropListDropped)=\"onDrop($event, index)\">\r\n                    <div *ngFor=\"let item of vibrationpattern.vibrationPatternElements; let elIndex = index\">\r\n                        <div *ngIf=\"isVibration(item); then showVibration; else showPause\"></div>\r\n\r\n                        <ng-template #showVibration>\r\n                            <mat-card class=\"vibration-card\" cdkDrag>{{elIndex+1}}. Vibration&nbsp;&nbsp;\r\n                                <mat-form-field>\r\n                                    <input matInput placeholder=\"Länge in ms\"\r\n                                        [formControl]=\"this.formControls[index][elIndex][0]\"\r\n                                        [errorStateMatcher]=\"this.matcher\" />\r\n                                    <mat-error *ngIf=\"this.formControls[index][elIndex][0].invalid\">Falsche Eingabe.\r\n                                    </mat-error>\r\n                                </mat-form-field>&nbsp;&nbsp;\r\n                                <mat-form-field>\r\n                                    <input matInput placeholder=\"Amplitude (1 bis 255)\"\r\n                                        [formControl]=\"this.formControls[index][elIndex][1]\"\r\n                                        [errorStateMatcher]=\"this.matcher\" />\r\n                                    <mat-error *ngIf=\"this.formControls[index][elIndex][1].invalid\">Falsche Eingabe.\r\n                                    </mat-error>\r\n                                </mat-form-field><button mat-icon-button class=\"redButton\"\r\n                                    (click)=\"removeFromVibrationPattern(index, elIndex)\">\r\n                                    <mat-icon class=\"trashCan\">delete</mat-icon>\r\n                                </button>\r\n                            </mat-card>\r\n                        </ng-template>\r\n                        <ng-template #showPause>\r\n                            <mat-card class=\"pause-card\" cdkDrag>{{elIndex+1}}. Pause&nbsp;&nbsp;<mat-form-field>\r\n                                    <input matInput placeholder=\"Länge in ms\"\r\n                                        [formControl]=\"this.formControls[index][elIndex][0]\"\r\n                                        [errorStateMatcher]=\"this.matcher\" />\r\n                                    <mat-error *ngIf=\"this.formControls[index][elIndex][0].invalid\">Falsche Eingabe.\r\n                                    </mat-error>\r\n\r\n                                </mat-form-field><button mat-icon-button class=\"redButton\"\r\n                                    (click)=\"removeFromVibrationPattern(index, elIndex)\">\r\n                                    <mat-icon class=\"trashCan\">delete</mat-icon>\r\n                                </button></mat-card>\r\n                        </ng-template>\r\n                        <div *ngIf=\"elIndex+1 != vibrationpattern.vibrationPatternElements.length\">\r\n                            <br />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"droplistSubtitle\">Hier Elemente aus dem Wergzeugkasten einfügen, um eine Abfolge\r\n                        festzulegen.</div>\r\n                </div>\r\n            </mat-card>\r\n            <br>\r\n        </div>\r\n    </div>\r\n\r\n</div>";
      /***/
    },

    /***/
    "ltgo":
    /*!*********************************************************!*\
      !*** ./node_modules/@angular/cdk/fesm2015/drag-drop.js ***!
      \*********************************************************/

    /*! exports provided: CDK_DRAG_CONFIG, CDK_DRAG_HANDLE, CDK_DRAG_PARENT, CDK_DRAG_PLACEHOLDER, CDK_DRAG_PREVIEW, CDK_DROP_LIST, CDK_DROP_LIST_GROUP, CdkDrag, CdkDragHandle, CdkDragPlaceholder, CdkDragPreview, CdkDropList, CdkDropListGroup, DragDrop, DragDropModule, DragDropRegistry, DragRef, DropListRef, copyArrayItem, moveItemInArray, transferArrayItem */

    /***/
    function ltgo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CDK_DRAG_CONFIG", function () {
        return CDK_DRAG_CONFIG;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CDK_DRAG_HANDLE", function () {
        return CDK_DRAG_HANDLE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CDK_DRAG_PARENT", function () {
        return CDK_DRAG_PARENT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CDK_DRAG_PLACEHOLDER", function () {
        return CDK_DRAG_PLACEHOLDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CDK_DRAG_PREVIEW", function () {
        return CDK_DRAG_PREVIEW;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CDK_DROP_LIST", function () {
        return CDK_DROP_LIST;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CDK_DROP_LIST_GROUP", function () {
        return CDK_DROP_LIST_GROUP;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkDrag", function () {
        return CdkDrag;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkDragHandle", function () {
        return CdkDragHandle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkDragPlaceholder", function () {
        return CdkDragPlaceholder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkDragPreview", function () {
        return CdkDragPreview;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkDropList", function () {
        return CdkDropList;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkDropListGroup", function () {
        return CdkDropListGroup;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DragDrop", function () {
        return DragDrop;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DragDropModule", function () {
        return DragDropModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DragDropRegistry", function () {
        return DragDropRegistry;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DragRef", function () {
        return DragRef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DropListRef", function () {
        return DropListRef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "copyArrayItem", function () {
        return copyArrayItem;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "moveItemInArray", function () {
        return moveItemInArray;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "transferArrayItem", function () {
        return transferArrayItem;
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


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "7KAL");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "SCoL");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "9gLZ");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Shallow-extends a stylesheet object with another stylesheet object.
       * @docs-private
       */


      function extendStyles(dest, source) {
        for (var key in source) {
          if (source.hasOwnProperty(key)) {
            dest[key] = source[key];
          }
        }

        return dest;
      }
      /**
       * Toggles whether the native drag interactions should be enabled for an element.
       * @param element Element on which to toggle the drag interactions.
       * @param enable Whether the drag interactions should be enabled.
       * @docs-private
       */


      function toggleNativeDragInteractions(element, enable) {
        var userSelect = enable ? '' : 'none';
        extendStyles(element.style, {
          touchAction: enable ? '' : 'none',
          webkitUserDrag: enable ? '' : 'none',
          webkitTapHighlightColor: enable ? '' : 'transparent',
          userSelect: userSelect,
          msUserSelect: userSelect,
          webkitUserSelect: userSelect,
          MozUserSelect: userSelect
        });
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Parses a CSS time value to milliseconds. */


      function parseCssTimeUnitsToMs(value) {
        // Some browsers will return it in seconds, whereas others will return milliseconds.
        var multiplier = value.toLowerCase().indexOf('ms') > -1 ? 1 : 1000;
        return parseFloat(value) * multiplier;
      }
      /** Gets the transform transition duration, including the delay, of an element in milliseconds. */


      function getTransformTransitionDurationInMs(element) {
        var computedStyle = getComputedStyle(element);
        var transitionedProperties = parseCssPropertyValue(computedStyle, 'transition-property');
        var property = transitionedProperties.find(function (prop) {
          return prop === 'transform' || prop === 'all';
        }); // If there's no transition for `all` or `transform`, we shouldn't do anything.

        if (!property) {
          return 0;
        } // Get the index of the property that we're interested in and match
        // it up to the same index in `transition-delay` and `transition-duration`.


        var propertyIndex = transitionedProperties.indexOf(property);
        var rawDurations = parseCssPropertyValue(computedStyle, 'transition-duration');
        var rawDelays = parseCssPropertyValue(computedStyle, 'transition-delay');
        return parseCssTimeUnitsToMs(rawDurations[propertyIndex]) + parseCssTimeUnitsToMs(rawDelays[propertyIndex]);
      }
      /** Parses out multiple values from a computed style into an array. */


      function parseCssPropertyValue(computedStyle, name) {
        var value = computedStyle.getPropertyValue(name);
        return value.split(',').map(function (part) {
          return part.trim();
        });
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Gets a mutable version of an element's bounding `ClientRect`. */


      function getMutableClientRect(element) {
        var clientRect = element.getBoundingClientRect(); // We need to clone the `clientRect` here, because all the values on it are readonly
        // and we need to be able to update them. Also we can't use a spread here, because
        // the values on a `ClientRect` aren't own properties. See:
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect#Notes

        return {
          top: clientRect.top,
          right: clientRect.right,
          bottom: clientRect.bottom,
          left: clientRect.left,
          width: clientRect.width,
          height: clientRect.height
        };
      }
      /**
       * Checks whether some coordinates are within a `ClientRect`.
       * @param clientRect ClientRect that is being checked.
       * @param x Coordinates along the X axis.
       * @param y Coordinates along the Y axis.
       */


      function isInsideClientRect(clientRect, x, y) {
        var top = clientRect.top,
            bottom = clientRect.bottom,
            left = clientRect.left,
            right = clientRect.right;
        return y >= top && y <= bottom && x >= left && x <= right;
      }
      /**
       * Updates the top/left positions of a `ClientRect`, as well as their bottom/right counterparts.
       * @param clientRect `ClientRect` that should be updated.
       * @param top Amount to add to the `top` position.
       * @param left Amount to add to the `left` position.
       */


      function adjustClientRect(clientRect, top, left) {
        clientRect.top += top;
        clientRect.bottom = clientRect.top + clientRect.height;
        clientRect.left += left;
        clientRect.right = clientRect.left + clientRect.width;
      }
      /**
       * Checks whether the pointer coordinates are close to a ClientRect.
       * @param rect ClientRect to check against.
       * @param threshold Threshold around the ClientRect.
       * @param pointerX Coordinates along the X axis.
       * @param pointerY Coordinates along the Y axis.
       */


      function isPointerNearClientRect(rect, threshold, pointerX, pointerY) {
        var top = rect.top,
            right = rect.right,
            bottom = rect.bottom,
            left = rect.left,
            width = rect.width,
            height = rect.height;
        var xThreshold = width * threshold;
        var yThreshold = height * threshold;
        return pointerY > top - yThreshold && pointerY < bottom + yThreshold && pointerX > left - xThreshold && pointerX < right + xThreshold;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Keeps track of the scroll position and dimensions of the parents of an element. */


      var ParentPositionTracker = /*#__PURE__*/function () {
        function ParentPositionTracker(_document, _viewportRuler) {
          _classCallCheck(this, ParentPositionTracker);

          this._document = _document;
          this._viewportRuler = _viewportRuler;
          /** Cached positions of the scrollable parent elements. */

          this.positions = new Map();
        }
        /** Clears the cached positions. */


        _createClass(ParentPositionTracker, [{
          key: "clear",
          value: function clear() {
            this.positions.clear();
          }
          /** Caches the positions. Should be called at the beginning of a drag sequence. */

        }, {
          key: "cache",
          value: function cache(elements) {
            var _this6 = this;

            this.clear();
            this.positions.set(this._document, {
              scrollPosition: this._viewportRuler.getViewportScrollPosition()
            });
            elements.forEach(function (element) {
              _this6.positions.set(element, {
                scrollPosition: {
                  top: element.scrollTop,
                  left: element.scrollLeft
                },
                clientRect: getMutableClientRect(element)
              });
            });
          }
          /** Handles scrolling while a drag is taking place. */

        }, {
          key: "handleScroll",
          value: function handleScroll(event) {
            var target = event.target;
            var cachedPosition = this.positions.get(target);

            if (!cachedPosition) {
              return null;
            } // Used when figuring out whether an element is inside the scroll parent. If the scrolled
            // parent is the `document`, we use the `documentElement`, because IE doesn't support
            // `contains` on the `document`.


            var scrolledParentNode = target === this._document ? target.documentElement : target;
            var scrollPosition = cachedPosition.scrollPosition;
            var newTop;
            var newLeft;

            if (target === this._document) {
              var viewportScrollPosition = this._viewportRuler.getViewportScrollPosition();

              newTop = viewportScrollPosition.top;
              newLeft = viewportScrollPosition.left;
            } else {
              newTop = target.scrollTop;
              newLeft = target.scrollLeft;
            }

            var topDifference = scrollPosition.top - newTop;
            var leftDifference = scrollPosition.left - newLeft; // Go through and update the cached positions of the scroll
            // parents that are inside the element that was scrolled.

            this.positions.forEach(function (position, node) {
              if (position.clientRect && target !== node && scrolledParentNode.contains(node)) {
                adjustClientRect(position.clientRect, topDifference, leftDifference);
              }
            });
            scrollPosition.top = newTop;
            scrollPosition.left = newLeft;
            return {
              top: topDifference,
              left: leftDifference
            };
          }
        }]);

        return ParentPositionTracker;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Creates a deep clone of an element. */


      function deepCloneNode(node) {
        var clone = node.cloneNode(true);
        var descendantsWithId = clone.querySelectorAll('[id]');
        var nodeName = node.nodeName.toLowerCase(); // Remove the `id` to avoid having multiple elements with the same id on the page.

        clone.removeAttribute('id');

        for (var i = 0; i < descendantsWithId.length; i++) {
          descendantsWithId[i].removeAttribute('id');
        }

        if (nodeName === 'canvas') {
          transferCanvasData(node, clone);
        } else if (nodeName === 'input' || nodeName === 'select' || nodeName === 'textarea') {
          transferInputData(node, clone);
        }

        transferData('canvas', node, clone, transferCanvasData);
        transferData('input, textarea, select', node, clone, transferInputData);
        return clone;
      }
      /** Matches elements between an element and its clone and allows for their data to be cloned. */


      function transferData(selector, node, clone, callback) {
        var descendantElements = node.querySelectorAll(selector);

        if (descendantElements.length) {
          var cloneElements = clone.querySelectorAll(selector);

          for (var i = 0; i < descendantElements.length; i++) {
            callback(descendantElements[i], cloneElements[i]);
          }
        }
      } // Counter for unique cloned radio button names.


      var cloneUniqueId = 0;
      /** Transfers the data of one input element to another. */

      function transferInputData(source, clone) {
        clone.value = source.value; // Radio button `name` attributes must be unique for radio button groups
        // otherwise original radio buttons can lose their checked state
        // once the clone is inserted in the DOM.

        if (clone.type === 'radio' && clone.name) {
          clone.name = "mat-clone-".concat(clone.name, "-").concat(cloneUniqueId++);
        }
      }
      /** Transfers the data of one canvas element to another. */


      function transferCanvasData(source, clone) {
        var context = clone.getContext('2d');

        if (context) {
          // In some cases `drawImage` can throw (e.g. if the canvas size is 0x0).
          // We can't do much about it so just ignore the error.
          try {
            context.drawImage(source, 0, 0);
          } catch (_a) {}
        }
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Options that can be used to bind a passive event listener. */


      var passiveEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["normalizePassiveListenerOptions"])({
        passive: true
      });
      /** Options that can be used to bind an active event listener. */

      var activeEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["normalizePassiveListenerOptions"])({
        passive: false
      });
      /**
       * Time in milliseconds for which to ignore mouse events, after
       * receiving a touch event. Used to avoid doing double work for
       * touch devices where the browser fires fake mouse events, in
       * addition to touch events.
       */

      var MOUSE_EVENT_IGNORE_TIME = 800;
      /**
       * Reference to a draggable item. Used to manipulate or dispose of the item.
       */

      var DragRef = /*#__PURE__*/function () {
        function DragRef(element, _config, _document, _ngZone, _viewportRuler, _dragDropRegistry) {
          var _this7 = this;

          _classCallCheck(this, DragRef);

          this._config = _config;
          this._document = _document;
          this._ngZone = _ngZone;
          this._viewportRuler = _viewportRuler;
          this._dragDropRegistry = _dragDropRegistry;
          /**
           * CSS `transform` applied to the element when it isn't being dragged. We need a
           * passive transform in order for the dragged element to retain its new position
           * after the user has stopped dragging and because we need to know the relative
           * position in case they start dragging again. This corresponds to `element.style.transform`.
           */

          this._passiveTransform = {
            x: 0,
            y: 0
          };
          /** CSS `transform` that is applied to the element while it's being dragged. */

          this._activeTransform = {
            x: 0,
            y: 0
          };
          /** Emits when the item is being moved. */

          this._moveEvents = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /** Subscription to pointer movement events. */

          this._pointerMoveSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
          /** Subscription to the event that is dispatched when the user lifts their pointer. */

          this._pointerUpSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
          /** Subscription to the viewport being scrolled. */

          this._scrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
          /** Subscription to the viewport being resized. */

          this._resizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
          /** Cached reference to the boundary element. */

          this._boundaryElement = null;
          /** Whether the native dragging interactions have been enabled on the root element. */

          this._nativeInteractionsEnabled = true;
          /** Elements that can be used to drag the draggable item. */

          this._handles = [];
          /** Registered handles that are currently disabled. */

          this._disabledHandles = new Set();
          /** Layout direction of the item. */

          this._direction = 'ltr';
          /**
           * Amount of milliseconds to wait after the user has put their
           * pointer down before starting to drag the element.
           */

          this.dragStartDelay = 0;
          this._disabled = false;
          /** Emits as the drag sequence is being prepared. */

          this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /** Emits when the user starts dragging the item. */

          this.started = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /** Emits when the user has released a drag item, before any animations have started. */

          this.released = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /** Emits when the user stops dragging an item in the container. */

          this.ended = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /** Emits when the user has moved the item into a new container. */

          this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /** Emits when the user removes the item its container by dragging it into another container. */

          this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /** Emits when the user drops the item inside a container. */

          this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /**
           * Emits as the user is dragging the item. Use with caution,
           * because this event will fire for every pixel that the user has dragged.
           */

          this.moved = this._moveEvents;
          /** Handler for the `mousedown`/`touchstart` events. */

          this._pointerDown = function (event) {
            _this7.beforeStarted.next(); // Delegate the event based on whether it started from a handle or the element itself.


            if (_this7._handles.length) {
              var targetHandle = _this7._handles.find(function (handle) {
                var target = event.target;
                return !!target && (target === handle || handle.contains(target));
              });

              if (targetHandle && !_this7._disabledHandles.has(targetHandle) && !_this7.disabled) {
                _this7._initializeDragSequence(targetHandle, event);
              }
            } else if (!_this7.disabled) {
              _this7._initializeDragSequence(_this7._rootElement, event);
            }
          };
          /** Handler that is invoked when the user moves their pointer after they've initiated a drag. */


          this._pointerMove = function (event) {
            // Prevent the default action as early as possible in order to block
            // native actions like dragging the selected text or images with the mouse.
            event.preventDefault();

            var pointerPosition = _this7._getPointerPositionOnPage(event);

            if (!_this7._hasStartedDragging) {
              var distanceX = Math.abs(pointerPosition.x - _this7._pickupPositionOnPage.x);
              var distanceY = Math.abs(pointerPosition.y - _this7._pickupPositionOnPage.y);
              var isOverThreshold = distanceX + distanceY >= _this7._config.dragStartThreshold; // Only start dragging after the user has moved more than the minimum distance in either
              // direction. Note that this is preferrable over doing something like `skip(minimumDistance)`
              // in the `pointerMove` subscription, because we're not guaranteed to have one move event
              // per pixel of movement (e.g. if the user moves their pointer quickly).

              if (isOverThreshold) {
                var isDelayElapsed = Date.now() >= _this7._dragStartTime + _this7._getDragStartDelay(event);

                if (!isDelayElapsed) {
                  _this7._endDragSequence(event);

                  return;
                } // Prevent other drag sequences from starting while something in the container is still
                // being dragged. This can happen while we're waiting for the drop animation to finish
                // and can cause errors, because some elements might still be moving around.


                if (!_this7._dropContainer || !_this7._dropContainer.isDragging()) {
                  _this7._hasStartedDragging = true;

                  _this7._ngZone.run(function () {
                    return _this7._startDragSequence(event);
                  });
                }
              }

              return;
            } // We only need the preview dimensions if we have a boundary element.


            if (_this7._boundaryElement) {
              // Cache the preview element rect if we haven't cached it already or if
              // we cached it too early before the element dimensions were computed.
              if (!_this7._previewRect || !_this7._previewRect.width && !_this7._previewRect.height) {
                _this7._previewRect = (_this7._preview || _this7._rootElement).getBoundingClientRect();
              }
            }

            var constrainedPointerPosition = _this7._getConstrainedPointerPosition(pointerPosition);

            _this7._hasMoved = true;
            _this7._lastKnownPointerPosition = pointerPosition;

            _this7._updatePointerDirectionDelta(constrainedPointerPosition);

            if (_this7._dropContainer) {
              _this7._updateActiveDropContainer(constrainedPointerPosition, pointerPosition);
            } else {
              var activeTransform = _this7._activeTransform;
              activeTransform.x = constrainedPointerPosition.x - _this7._pickupPositionOnPage.x + _this7._passiveTransform.x;
              activeTransform.y = constrainedPointerPosition.y - _this7._pickupPositionOnPage.y + _this7._passiveTransform.y;

              _this7._applyRootElementTransform(activeTransform.x, activeTransform.y); // Apply transform as attribute if dragging and svg element to work for IE


              if (typeof SVGElement !== 'undefined' && _this7._rootElement instanceof SVGElement) {
                var appliedTransform = "translate(".concat(activeTransform.x, " ").concat(activeTransform.y, ")");

                _this7._rootElement.setAttribute('transform', appliedTransform);
              }
            } // Since this event gets fired for every pixel while dragging, we only
            // want to fire it if the consumer opted into it. Also we have to
            // re-enter the zone because we run all of the events on the outside.


            if (_this7._moveEvents.observers.length) {
              _this7._ngZone.run(function () {
                _this7._moveEvents.next({
                  source: _this7,
                  pointerPosition: constrainedPointerPosition,
                  event: event,
                  distance: _this7._getDragDistance(constrainedPointerPosition),
                  delta: _this7._pointerDirectionDelta
                });
              });
            }
          };
          /** Handler that is invoked when the user lifts their pointer up, after initiating a drag. */


          this._pointerUp = function (event) {
            _this7._endDragSequence(event);
          };

          this.withRootElement(element);
          this._parentPositions = new ParentPositionTracker(_document, _viewportRuler);

          _dragDropRegistry.registerDragItem(this);
        }
        /** Whether starting to drag this element is disabled. */


        _createClass(DragRef, [{
          key: "getPlaceholderElement",

          /**
           * Returns the element that is being used as a placeholder
           * while the current element is being dragged.
           */
          value: function getPlaceholderElement() {
            return this._placeholder;
          }
          /** Returns the root draggable element. */

        }, {
          key: "getRootElement",
          value: function getRootElement() {
            return this._rootElement;
          }
          /**
           * Gets the currently-visible element that represents the drag item.
           * While dragging this is the placeholder, otherwise it's the root element.
           */

        }, {
          key: "getVisibleElement",
          value: function getVisibleElement() {
            return this.isDragging() ? this.getPlaceholderElement() : this.getRootElement();
          }
          /** Registers the handles that can be used to drag the element. */

        }, {
          key: "withHandles",
          value: function withHandles(handles) {
            this._handles = handles.map(function (handle) {
              return Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(handle);
            });

            this._handles.forEach(function (handle) {
              return toggleNativeDragInteractions(handle, false);
            });

            this._toggleNativeDragInteractions();

            return this;
          }
          /**
           * Registers the template that should be used for the drag preview.
           * @param template Template that from which to stamp out the preview.
           */

        }, {
          key: "withPreviewTemplate",
          value: function withPreviewTemplate(template) {
            this._previewTemplate = template;
            return this;
          }
          /**
           * Registers the template that should be used for the drag placeholder.
           * @param template Template that from which to stamp out the placeholder.
           */

        }, {
          key: "withPlaceholderTemplate",
          value: function withPlaceholderTemplate(template) {
            this._placeholderTemplate = template;
            return this;
          }
          /**
           * Sets an alternate drag root element. The root element is the element that will be moved as
           * the user is dragging. Passing an alternate root element is useful when trying to enable
           * dragging on an element that you might not have access to.
           */

        }, {
          key: "withRootElement",
          value: function withRootElement(rootElement) {
            var _this8 = this;

            var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(rootElement);

            if (element !== this._rootElement) {
              if (this._rootElement) {
                this._removeRootElementListeners(this._rootElement);
              }

              this._ngZone.runOutsideAngular(function () {
                element.addEventListener('mousedown', _this8._pointerDown, activeEventListenerOptions);
                element.addEventListener('touchstart', _this8._pointerDown, passiveEventListenerOptions);
              });

              this._initialTransform = undefined;
              this._rootElement = element;
            }

            if (typeof SVGElement !== 'undefined' && this._rootElement instanceof SVGElement) {
              this._ownerSVGElement = this._rootElement.ownerSVGElement;
            }

            return this;
          }
          /**
           * Element to which the draggable's position will be constrained.
           */

        }, {
          key: "withBoundaryElement",
          value: function withBoundaryElement(boundaryElement) {
            var _this9 = this;

            this._boundaryElement = boundaryElement ? Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(boundaryElement) : null;

            this._resizeSubscription.unsubscribe();

            if (boundaryElement) {
              this._resizeSubscription = this._viewportRuler.change(10).subscribe(function () {
                return _this9._containInsideBoundaryOnResize();
              });
            }

            return this;
          }
          /** Removes the dragging functionality from the DOM element. */

        }, {
          key: "dispose",
          value: function dispose() {
            this._removeRootElementListeners(this._rootElement); // Do this check before removing from the registry since it'll
            // stop being considered as dragged once it is removed.


            if (this.isDragging()) {
              // Since we move out the element to the end of the body while it's being
              // dragged, we have to make sure that it's removed if it gets destroyed.
              removeNode(this._rootElement);
            }

            removeNode(this._anchor);

            this._destroyPreview();

            this._destroyPlaceholder();

            this._dragDropRegistry.removeDragItem(this);

            this._removeSubscriptions();

            this.beforeStarted.complete();
            this.started.complete();
            this.released.complete();
            this.ended.complete();
            this.entered.complete();
            this.exited.complete();
            this.dropped.complete();

            this._moveEvents.complete();

            this._handles = [];

            this._disabledHandles.clear();

            this._dropContainer = undefined;

            this._resizeSubscription.unsubscribe();

            this._parentPositions.clear();

            this._boundaryElement = this._rootElement = this._ownerSVGElement = this._placeholderTemplate = this._previewTemplate = this._anchor = null;
          }
          /** Checks whether the element is currently being dragged. */

        }, {
          key: "isDragging",
          value: function isDragging() {
            return this._hasStartedDragging && this._dragDropRegistry.isDragging(this);
          }
          /** Resets a standalone drag item to its initial position. */

        }, {
          key: "reset",
          value: function reset() {
            this._rootElement.style.transform = this._initialTransform || '';
            this._activeTransform = {
              x: 0,
              y: 0
            };
            this._passiveTransform = {
              x: 0,
              y: 0
            };
          }
          /**
           * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
           * @param handle Handle element that should be disabled.
           */

        }, {
          key: "disableHandle",
          value: function disableHandle(handle) {
            if (this._handles.indexOf(handle) > -1) {
              this._disabledHandles.add(handle);
            }
          }
          /**
           * Enables a handle, if it has been disabled.
           * @param handle Handle element to be enabled.
           */

        }, {
          key: "enableHandle",
          value: function enableHandle(handle) {
            this._disabledHandles["delete"](handle);
          }
          /** Sets the layout direction of the draggable item. */

        }, {
          key: "withDirection",
          value: function withDirection(direction) {
            this._direction = direction;
            return this;
          }
          /** Sets the container that the item is part of. */

        }, {
          key: "_withDropContainer",
          value: function _withDropContainer(container) {
            this._dropContainer = container;
          }
          /**
           * Gets the current position in pixels the draggable outside of a drop container.
           */

        }, {
          key: "getFreeDragPosition",
          value: function getFreeDragPosition() {
            var position = this.isDragging() ? this._activeTransform : this._passiveTransform;
            return {
              x: position.x,
              y: position.y
            };
          }
          /**
           * Sets the current position in pixels the draggable outside of a drop container.
           * @param value New position to be set.
           */

        }, {
          key: "setFreeDragPosition",
          value: function setFreeDragPosition(value) {
            this._activeTransform = {
              x: 0,
              y: 0
            };
            this._passiveTransform.x = value.x;
            this._passiveTransform.y = value.y;

            if (!this._dropContainer) {
              this._applyRootElementTransform(value.x, value.y);
            }

            return this;
          }
          /** Updates the item's sort order based on the last-known pointer position. */

        }, {
          key: "_sortFromLastPointerPosition",
          value: function _sortFromLastPointerPosition() {
            var position = this._lastKnownPointerPosition;

            if (position && this._dropContainer) {
              this._updateActiveDropContainer(this._getConstrainedPointerPosition(position), position);
            }
          }
          /** Unsubscribes from the global subscriptions. */

        }, {
          key: "_removeSubscriptions",
          value: function _removeSubscriptions() {
            this._pointerMoveSubscription.unsubscribe();

            this._pointerUpSubscription.unsubscribe();

            this._scrollSubscription.unsubscribe();
          }
          /** Destroys the preview element and its ViewRef. */

        }, {
          key: "_destroyPreview",
          value: function _destroyPreview() {
            if (this._preview) {
              removeNode(this._preview);
            }

            if (this._previewRef) {
              this._previewRef.destroy();
            }

            this._preview = this._previewRef = null;
          }
          /** Destroys the placeholder element and its ViewRef. */

        }, {
          key: "_destroyPlaceholder",
          value: function _destroyPlaceholder() {
            if (this._placeholder) {
              removeNode(this._placeholder);
            }

            if (this._placeholderRef) {
              this._placeholderRef.destroy();
            }

            this._placeholder = this._placeholderRef = null;
          }
          /**
           * Clears subscriptions and stops the dragging sequence.
           * @param event Browser event object that ended the sequence.
           */

        }, {
          key: "_endDragSequence",
          value: function _endDragSequence(event) {
            var _this10 = this;

            // Note that here we use `isDragging` from the service, rather than from `this`.
            // The difference is that the one from the service reflects whether a dragging sequence
            // has been initiated, whereas the one on `this` includes whether the user has passed
            // the minimum dragging threshold.
            if (!this._dragDropRegistry.isDragging(this)) {
              return;
            }

            this._removeSubscriptions();

            this._dragDropRegistry.stopDragging(this);

            this._toggleNativeDragInteractions();

            if (this._handles) {
              this._rootElement.style.webkitTapHighlightColor = this._rootElementTapHighlight;
            }

            if (!this._hasStartedDragging) {
              return;
            }

            this.released.next({
              source: this
            });

            if (this._dropContainer) {
              // Stop scrolling immediately, instead of waiting for the animation to finish.
              this._dropContainer._stopScrolling();

              this._animatePreviewToPlaceholder().then(function () {
                _this10._cleanupDragArtifacts(event);

                _this10._cleanupCachedDimensions();

                _this10._dragDropRegistry.stopDragging(_this10);
              });
            } else {
              // Convert the active transform into a passive one. This means that next time
              // the user starts dragging the item, its position will be calculated relatively
              // to the new passive transform.
              this._passiveTransform.x = this._activeTransform.x;
              this._passiveTransform.y = this._activeTransform.y;

              this._ngZone.run(function () {
                _this10.ended.next({
                  source: _this10,
                  distance: _this10._getDragDistance(_this10._getPointerPositionOnPage(event))
                });
              });

              this._cleanupCachedDimensions();

              this._dragDropRegistry.stopDragging(this);
            }
          }
          /** Starts the dragging sequence. */

        }, {
          key: "_startDragSequence",
          value: function _startDragSequence(event) {
            if (isTouchEvent(event)) {
              this._lastTouchEventTime = Date.now();
            }

            this._toggleNativeDragInteractions();

            var dropContainer = this._dropContainer;

            if (dropContainer) {
              var element = this._rootElement;
              var parent = element.parentNode;

              var preview = this._preview = this._createPreviewElement();

              var placeholder = this._placeholder = this._createPlaceholderElement();

              var anchor = this._anchor = this._anchor || this._document.createComment(''); // Insert an anchor node so that we can restore the element's position in the DOM.


              parent.insertBefore(anchor, element); // We move the element out at the end of the body and we make it hidden, because keeping it in
              // place will throw off the consumer's `:last-child` selectors. We can't remove the element
              // from the DOM completely, because iOS will stop firing all subsequent events in the chain.

              element.style.display = 'none';

              this._document.body.appendChild(parent.replaceChild(placeholder, element));

              getPreviewInsertionPoint(this._document).appendChild(preview);
              this.started.next({
                source: this
              }); // Emit before notifying the container.

              dropContainer.start();
              this._initialContainer = dropContainer;
              this._initialIndex = dropContainer.getItemIndex(this);
            } else {
              this.started.next({
                source: this
              });
              this._initialContainer = this._initialIndex = undefined;
            } // Important to run after we've called `start` on the parent container
            // so that it has had time to resolve its scrollable parents.


            this._parentPositions.cache(dropContainer ? dropContainer.getScrollableParents() : []);
          }
          /**
           * Sets up the different variables and subscriptions
           * that will be necessary for the dragging sequence.
           * @param referenceElement Element that started the drag sequence.
           * @param event Browser event object that started the sequence.
           */

        }, {
          key: "_initializeDragSequence",
          value: function _initializeDragSequence(referenceElement, event) {
            var _this11 = this;

            // Always stop propagation for the event that initializes
            // the dragging sequence, in order to prevent it from potentially
            // starting another sequence for a draggable parent somewhere up the DOM tree.
            event.stopPropagation();
            var isDragging = this.isDragging();
            var isTouchSequence = isTouchEvent(event);
            var isAuxiliaryMouseButton = !isTouchSequence && event.button !== 0;
            var rootElement = this._rootElement;
            var isSyntheticEvent = !isTouchSequence && this._lastTouchEventTime && this._lastTouchEventTime + MOUSE_EVENT_IGNORE_TIME > Date.now(); // If the event started from an element with the native HTML drag&drop, it'll interfere
            // with our own dragging (e.g. `img` tags do it by default). Prevent the default action
            // to stop it from happening. Note that preventing on `dragstart` also seems to work, but
            // it's flaky and it fails if the user drags it away quickly. Also note that we only want
            // to do this for `mousedown` since doing the same for `touchstart` will stop any `click`
            // events from firing on touch devices.

            if (event.target && event.target.draggable && event.type === 'mousedown') {
              event.preventDefault();
            } // Abort if the user is already dragging or is using a mouse button other than the primary one.


            if (isDragging || isAuxiliaryMouseButton || isSyntheticEvent) {
              return;
            } // If we've got handles, we need to disable the tap highlight on the entire root element,
            // otherwise iOS will still add it, even though all the drag interactions on the handle
            // are disabled.


            if (this._handles.length) {
              this._rootElementTapHighlight = rootElement.style.webkitTapHighlightColor || '';
              rootElement.style.webkitTapHighlightColor = 'transparent';
            }

            this._hasStartedDragging = this._hasMoved = false; // Avoid multiple subscriptions and memory leaks when multi touch
            // (isDragging check above isn't enough because of possible temporal and/or dimensional delays)

            this._removeSubscriptions();

            this._pointerMoveSubscription = this._dragDropRegistry.pointerMove.subscribe(this._pointerMove);
            this._pointerUpSubscription = this._dragDropRegistry.pointerUp.subscribe(this._pointerUp);
            this._scrollSubscription = this._dragDropRegistry.scroll.subscribe(function (scrollEvent) {
              _this11._updateOnScroll(scrollEvent);
            });

            if (this._boundaryElement) {
              this._boundaryRect = getMutableClientRect(this._boundaryElement);
            } // If we have a custom preview we can't know ahead of time how large it'll be so we position
            // it next to the cursor. The exception is when the consumer has opted into making the preview
            // the same size as the root element, in which case we do know the size.


            var previewTemplate = this._previewTemplate;
            this._pickupPositionInElement = previewTemplate && previewTemplate.template && !previewTemplate.matchSize ? {
              x: 0,
              y: 0
            } : this._getPointerPositionInElement(referenceElement, event);

            var pointerPosition = this._pickupPositionOnPage = this._lastKnownPointerPosition = this._getPointerPositionOnPage(event);

            this._pointerDirectionDelta = {
              x: 0,
              y: 0
            };
            this._pointerPositionAtLastDirectionChange = {
              x: pointerPosition.x,
              y: pointerPosition.y
            };
            this._dragStartTime = Date.now();

            this._dragDropRegistry.startDragging(this, event);
          }
          /** Cleans up the DOM artifacts that were added to facilitate the element being dragged. */

        }, {
          key: "_cleanupDragArtifacts",
          value: function _cleanupDragArtifacts(event) {
            var _this12 = this;

            // Restore the element's visibility and insert it at its old position in the DOM.
            // It's important that we maintain the position, because moving the element around in the DOM
            // can throw off `NgFor` which does smart diffing and re-creates elements only when necessary,
            // while moving the existing elements in all other cases.
            this._rootElement.style.display = '';

            this._anchor.parentNode.replaceChild(this._rootElement, this._anchor);

            this._destroyPreview();

            this._destroyPlaceholder();

            this._boundaryRect = this._previewRect = undefined; // Re-enter the NgZone since we bound `document` events on the outside.

            this._ngZone.run(function () {
              var container = _this12._dropContainer;
              var currentIndex = container.getItemIndex(_this12);

              var pointerPosition = _this12._getPointerPositionOnPage(event);

              var distance = _this12._getDragDistance(_this12._getPointerPositionOnPage(event));

              var isPointerOverContainer = container._isOverContainer(pointerPosition.x, pointerPosition.y);

              _this12.ended.next({
                source: _this12,
                distance: distance
              });

              _this12.dropped.next({
                item: _this12,
                currentIndex: currentIndex,
                previousIndex: _this12._initialIndex,
                container: container,
                previousContainer: _this12._initialContainer,
                isPointerOverContainer: isPointerOverContainer,
                distance: distance
              });

              container.drop(_this12, currentIndex, _this12._initialContainer, isPointerOverContainer, distance, _this12._initialIndex);
              _this12._dropContainer = _this12._initialContainer;
            });
          }
          /**
           * Updates the item's position in its drop container, or moves it
           * into a new one, depending on its current drag position.
           */

        }, {
          key: "_updateActiveDropContainer",
          value: function _updateActiveDropContainer(_ref, _ref2) {
            var _this13 = this;

            var x = _ref.x,
                y = _ref.y;
            var rawX = _ref2.x,
                rawY = _ref2.y;

            // Drop container that draggable has been moved into.
            var newContainer = this._initialContainer._getSiblingContainerFromPosition(this, x, y); // If we couldn't find a new container to move the item into, and the item has left its
            // initial container, check whether the it's over the initial container. This handles the
            // case where two containers are connected one way and the user tries to undo dragging an
            // item into a new container.


            if (!newContainer && this._dropContainer !== this._initialContainer && this._initialContainer._isOverContainer(x, y)) {
              newContainer = this._initialContainer;
            }

            if (newContainer && newContainer !== this._dropContainer) {
              this._ngZone.run(function () {
                // Notify the old container that the item has left.
                _this13.exited.next({
                  item: _this13,
                  container: _this13._dropContainer
                });

                _this13._dropContainer.exit(_this13); // Notify the new container that the item has entered.


                _this13._dropContainer = newContainer;

                _this13._dropContainer.enter(_this13, x, y, newContainer === _this13._initialContainer && // If we're re-entering the initial container and sorting is disabled,
                // put item the into its starting index to begin with.
                newContainer.sortingDisabled ? _this13._initialIndex : undefined);

                _this13.entered.next({
                  item: _this13,
                  container: newContainer,
                  currentIndex: newContainer.getItemIndex(_this13)
                });
              });
            }

            this._dropContainer._startScrollingIfNecessary(rawX, rawY);

            this._dropContainer._sortItem(this, x, y, this._pointerDirectionDelta);

            this._preview.style.transform = getTransform(x - this._pickupPositionInElement.x, y - this._pickupPositionInElement.y);
          }
          /**
           * Creates the element that will be rendered next to the user's pointer
           * and will be used as a preview of the element that is being dragged.
           */

        }, {
          key: "_createPreviewElement",
          value: function _createPreviewElement() {
            var previewConfig = this._previewTemplate;
            var previewClass = this.previewClass;
            var previewTemplate = previewConfig ? previewConfig.template : null;
            var preview;

            if (previewTemplate && previewConfig) {
              // Measure the element before we've inserted the preview
              // since the insertion could throw off the measurement.
              var rootRect = previewConfig.matchSize ? this._rootElement.getBoundingClientRect() : null;
              var viewRef = previewConfig.viewContainer.createEmbeddedView(previewTemplate, previewConfig.context);
              viewRef.detectChanges();
              preview = getRootNode(viewRef, this._document);
              this._previewRef = viewRef;

              if (previewConfig.matchSize) {
                matchElementSize(preview, rootRect);
              } else {
                preview.style.transform = getTransform(this._pickupPositionOnPage.x, this._pickupPositionOnPage.y);
              }
            } else {
              var element = this._rootElement;
              preview = deepCloneNode(element);
              matchElementSize(preview, element.getBoundingClientRect());
            }

            extendStyles(preview.style, {
              // It's important that we disable the pointer events on the preview, because
              // it can throw off the `document.elementFromPoint` calls in the `CdkDropList`.
              pointerEvents: 'none',
              // We have to reset the margin, because it can throw off positioning relative to the viewport.
              margin: '0',
              position: 'fixed',
              top: '0',
              left: '0',
              zIndex: "".concat(this._config.zIndex || 1000)
            });
            toggleNativeDragInteractions(preview, false);
            preview.classList.add('cdk-drag-preview');
            preview.setAttribute('dir', this._direction);

            if (previewClass) {
              if (Array.isArray(previewClass)) {
                previewClass.forEach(function (className) {
                  return preview.classList.add(className);
                });
              } else {
                preview.classList.add(previewClass);
              }
            }

            return preview;
          }
          /**
           * Animates the preview element from its current position to the location of the drop placeholder.
           * @returns Promise that resolves when the animation completes.
           */

        }, {
          key: "_animatePreviewToPlaceholder",
          value: function _animatePreviewToPlaceholder() {
            var _this14 = this;

            // If the user hasn't moved yet, the transitionend event won't fire.
            if (!this._hasMoved) {
              return Promise.resolve();
            }

            var placeholderRect = this._placeholder.getBoundingClientRect(); // Apply the class that adds a transition to the preview.


            this._preview.classList.add('cdk-drag-animating'); // Move the preview to the placeholder position.


            this._preview.style.transform = getTransform(placeholderRect.left, placeholderRect.top); // If the element doesn't have a `transition`, the `transitionend` event won't fire. Since
            // we need to trigger a style recalculation in order for the `cdk-drag-animating` class to
            // apply its style, we take advantage of the available info to figure out whether we need to
            // bind the event in the first place.

            var duration = getTransformTransitionDurationInMs(this._preview);

            if (duration === 0) {
              return Promise.resolve();
            }

            return this._ngZone.runOutsideAngular(function () {
              return new Promise(function (resolve) {
                var handler = function handler(event) {
                  if (!event || event.target === _this14._preview && event.propertyName === 'transform') {
                    _this14._preview.removeEventListener('transitionend', handler);

                    resolve();
                    clearTimeout(timeout);
                  }
                }; // If a transition is short enough, the browser might not fire the `transitionend` event.
                // Since we know how long it's supposed to take, add a timeout with a 50% buffer that'll
                // fire if the transition hasn't completed when it was supposed to.


                var timeout = setTimeout(handler, duration * 1.5);

                _this14._preview.addEventListener('transitionend', handler);
              });
            });
          }
          /** Creates an element that will be shown instead of the current element while dragging. */

        }, {
          key: "_createPlaceholderElement",
          value: function _createPlaceholderElement() {
            var placeholderConfig = this._placeholderTemplate;
            var placeholderTemplate = placeholderConfig ? placeholderConfig.template : null;
            var placeholder;

            if (placeholderTemplate) {
              this._placeholderRef = placeholderConfig.viewContainer.createEmbeddedView(placeholderTemplate, placeholderConfig.context);

              this._placeholderRef.detectChanges();

              placeholder = getRootNode(this._placeholderRef, this._document);
            } else {
              placeholder = deepCloneNode(this._rootElement);
            }

            placeholder.classList.add('cdk-drag-placeholder');
            return placeholder;
          }
          /**
           * Figures out the coordinates at which an element was picked up.
           * @param referenceElement Element that initiated the dragging.
           * @param event Event that initiated the dragging.
           */

        }, {
          key: "_getPointerPositionInElement",
          value: function _getPointerPositionInElement(referenceElement, event) {
            var elementRect = this._rootElement.getBoundingClientRect();

            var handleElement = referenceElement === this._rootElement ? null : referenceElement;
            var referenceRect = handleElement ? handleElement.getBoundingClientRect() : elementRect;
            var point = isTouchEvent(event) ? event.targetTouches[0] : event;

            var scrollPosition = this._getViewportScrollPosition();

            var x = point.pageX - referenceRect.left - scrollPosition.left;
            var y = point.pageY - referenceRect.top - scrollPosition.top;
            return {
              x: referenceRect.left - elementRect.left + x,
              y: referenceRect.top - elementRect.top + y
            };
          }
          /** Determines the point of the page that was touched by the user. */

        }, {
          key: "_getPointerPositionOnPage",
          value: function _getPointerPositionOnPage(event) {
            var scrollPosition = this._getViewportScrollPosition();

            var point = isTouchEvent(event) ? // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
            // Also note that on real devices we're guaranteed for either `touches` or `changedTouches`
            // to have a value, but Firefox in device emulation mode has a bug where both can be empty
            // for `touchstart` and `touchend` so we fall back to a dummy object in order to avoid
            // throwing an error. The value returned here will be incorrect, but since this only
            // breaks inside a developer tool and the value is only used for secondary information,
            // we can get away with it. See https://bugzilla.mozilla.org/show_bug.cgi?id=1615824.
            event.touches[0] || event.changedTouches[0] || {
              pageX: 0,
              pageY: 0
            } : event;
            var x = point.pageX - scrollPosition.left;
            var y = point.pageY - scrollPosition.top; // if dragging SVG element, try to convert from the screen coordinate system to the SVG
            // coordinate system

            if (this._ownerSVGElement) {
              var svgMatrix = this._ownerSVGElement.getScreenCTM();

              if (svgMatrix) {
                var svgPoint = this._ownerSVGElement.createSVGPoint();

                svgPoint.x = x;
                svgPoint.y = y;
                return svgPoint.matrixTransform(svgMatrix.inverse());
              }
            }

            return {
              x: x,
              y: y
            };
          }
          /** Gets the pointer position on the page, accounting for any position constraints. */

        }, {
          key: "_getConstrainedPointerPosition",
          value: function _getConstrainedPointerPosition(point) {
            var dropContainerLock = this._dropContainer ? this._dropContainer.lockAxis : null;

            var _ref3 = this.constrainPosition ? this.constrainPosition(point, this) : point,
                x = _ref3.x,
                y = _ref3.y;

            if (this.lockAxis === 'x' || dropContainerLock === 'x') {
              y = this._pickupPositionOnPage.y;
            } else if (this.lockAxis === 'y' || dropContainerLock === 'y') {
              x = this._pickupPositionOnPage.x;
            }

            if (this._boundaryRect) {
              var _this$_pickupPosition = this._pickupPositionInElement,
                  pickupX = _this$_pickupPosition.x,
                  pickupY = _this$_pickupPosition.y;
              var boundaryRect = this._boundaryRect;
              var previewRect = this._previewRect;
              var minY = boundaryRect.top + pickupY;
              var maxY = boundaryRect.bottom - (previewRect.height - pickupY);
              var minX = boundaryRect.left + pickupX;
              var maxX = boundaryRect.right - (previewRect.width - pickupX);
              x = clamp(x, minX, maxX);
              y = clamp(y, minY, maxY);
            }

            return {
              x: x,
              y: y
            };
          }
          /** Updates the current drag delta, based on the user's current pointer position on the page. */

        }, {
          key: "_updatePointerDirectionDelta",
          value: function _updatePointerDirectionDelta(pointerPositionOnPage) {
            var x = pointerPositionOnPage.x,
                y = pointerPositionOnPage.y;
            var delta = this._pointerDirectionDelta;
            var positionSinceLastChange = this._pointerPositionAtLastDirectionChange; // Amount of pixels the user has dragged since the last time the direction changed.

            var changeX = Math.abs(x - positionSinceLastChange.x);
            var changeY = Math.abs(y - positionSinceLastChange.y); // Because we handle pointer events on a per-pixel basis, we don't want the delta
            // to change for every pixel, otherwise anything that depends on it can look erratic.
            // To make the delta more consistent, we track how much the user has moved since the last
            // delta change and we only update it after it has reached a certain threshold.

            if (changeX > this._config.pointerDirectionChangeThreshold) {
              delta.x = x > positionSinceLastChange.x ? 1 : -1;
              positionSinceLastChange.x = x;
            }

            if (changeY > this._config.pointerDirectionChangeThreshold) {
              delta.y = y > positionSinceLastChange.y ? 1 : -1;
              positionSinceLastChange.y = y;
            }

            return delta;
          }
          /** Toggles the native drag interactions, based on how many handles are registered. */

        }, {
          key: "_toggleNativeDragInteractions",
          value: function _toggleNativeDragInteractions() {
            if (!this._rootElement || !this._handles) {
              return;
            }

            var shouldEnable = this._handles.length > 0 || !this.isDragging();

            if (shouldEnable !== this._nativeInteractionsEnabled) {
              this._nativeInteractionsEnabled = shouldEnable;
              toggleNativeDragInteractions(this._rootElement, shouldEnable);
            }
          }
          /** Removes the manually-added event listeners from the root element. */

        }, {
          key: "_removeRootElementListeners",
          value: function _removeRootElementListeners(element) {
            element.removeEventListener('mousedown', this._pointerDown, activeEventListenerOptions);
            element.removeEventListener('touchstart', this._pointerDown, passiveEventListenerOptions);
          }
          /**
           * Applies a `transform` to the root element, taking into account any existing transforms on it.
           * @param x New transform value along the X axis.
           * @param y New transform value along the Y axis.
           */

        }, {
          key: "_applyRootElementTransform",
          value: function _applyRootElementTransform(x, y) {
            var transform = getTransform(x, y); // Cache the previous transform amount only after the first drag sequence, because
            // we don't want our own transforms to stack on top of each other.

            if (this._initialTransform == null) {
              this._initialTransform = this._rootElement.style.transform || '';
            } // Preserve the previous `transform` value, if there was one. Note that we apply our own
            // transform before the user's, because things like rotation can affect which direction
            // the element will be translated towards.


            this._rootElement.style.transform = this._initialTransform ? transform + ' ' + this._initialTransform : transform;
          }
          /**
           * Gets the distance that the user has dragged during the current drag sequence.
           * @param currentPosition Current position of the user's pointer.
           */

        }, {
          key: "_getDragDistance",
          value: function _getDragDistance(currentPosition) {
            var pickupPosition = this._pickupPositionOnPage;

            if (pickupPosition) {
              return {
                x: currentPosition.x - pickupPosition.x,
                y: currentPosition.y - pickupPosition.y
              };
            }

            return {
              x: 0,
              y: 0
            };
          }
          /** Cleans up any cached element dimensions that we don't need after dragging has stopped. */

        }, {
          key: "_cleanupCachedDimensions",
          value: function _cleanupCachedDimensions() {
            this._boundaryRect = this._previewRect = undefined;

            this._parentPositions.clear();
          }
          /**
           * Checks whether the element is still inside its boundary after the viewport has been resized.
           * If not, the position is adjusted so that the element fits again.
           */

        }, {
          key: "_containInsideBoundaryOnResize",
          value: function _containInsideBoundaryOnResize() {
            var _this$_passiveTransfo = this._passiveTransform,
                x = _this$_passiveTransfo.x,
                y = _this$_passiveTransfo.y;

            if (x === 0 && y === 0 || this.isDragging() || !this._boundaryElement) {
              return;
            }

            var boundaryRect = this._boundaryElement.getBoundingClientRect();

            var elementRect = this._rootElement.getBoundingClientRect(); // It's possible that the element got hidden away after dragging (e.g. by switching to a
            // different tab). Don't do anything in this case so we don't clear the user's position.


            if (boundaryRect.width === 0 && boundaryRect.height === 0 || elementRect.width === 0 && elementRect.height === 0) {
              return;
            }

            var leftOverflow = boundaryRect.left - elementRect.left;
            var rightOverflow = elementRect.right - boundaryRect.right;
            var topOverflow = boundaryRect.top - elementRect.top;
            var bottomOverflow = elementRect.bottom - boundaryRect.bottom; // If the element has become wider than the boundary, we can't
            // do much to make it fit so we just anchor it to the left.

            if (boundaryRect.width > elementRect.width) {
              if (leftOverflow > 0) {
                x += leftOverflow;
              }

              if (rightOverflow > 0) {
                x -= rightOverflow;
              }
            } else {
              x = 0;
            } // If the element has become taller than the boundary, we can't
            // do much to make it fit so we just anchor it to the top.


            if (boundaryRect.height > elementRect.height) {
              if (topOverflow > 0) {
                y += topOverflow;
              }

              if (bottomOverflow > 0) {
                y -= bottomOverflow;
              }
            } else {
              y = 0;
            }

            if (x !== this._passiveTransform.x || y !== this._passiveTransform.y) {
              this.setFreeDragPosition({
                y: y,
                x: x
              });
            }
          }
          /** Gets the drag start delay, based on the event type. */

        }, {
          key: "_getDragStartDelay",
          value: function _getDragStartDelay(event) {
            var value = this.dragStartDelay;

            if (typeof value === 'number') {
              return value;
            } else if (isTouchEvent(event)) {
              return value.touch;
            }

            return value ? value.mouse : 0;
          }
          /** Updates the internal state of the draggable element when scrolling has occurred. */

        }, {
          key: "_updateOnScroll",
          value: function _updateOnScroll(event) {
            var scrollDifference = this._parentPositions.handleScroll(event);

            if (scrollDifference) {
              var target = event.target; // ClientRect dimensions are based on the scroll position of the page and its parent node so
              // we have to update the cached boundary ClientRect if the user has scrolled. Check for
              // the `document` specifically since IE doesn't support `contains` on it.

              if (this._boundaryRect && (target === this._document || target !== this._boundaryElement && target.contains(this._boundaryElement))) {
                adjustClientRect(this._boundaryRect, scrollDifference.top, scrollDifference.left);
              }

              this._pickupPositionOnPage.x += scrollDifference.left;
              this._pickupPositionOnPage.y += scrollDifference.top; // If we're in free drag mode, we have to update the active transform, because
              // it isn't relative to the viewport like the preview inside a drop list.

              if (!this._dropContainer) {
                this._activeTransform.x -= scrollDifference.left;
                this._activeTransform.y -= scrollDifference.top;

                this._applyRootElementTransform(this._activeTransform.x, this._activeTransform.y);
              }
            }
          }
          /** Gets the scroll position of the viewport. */

        }, {
          key: "_getViewportScrollPosition",
          value: function _getViewportScrollPosition() {
            var cachedPosition = this._parentPositions.positions.get(this._document);

            return cachedPosition ? cachedPosition.scrollPosition : this._viewportRuler.getViewportScrollPosition();
          }
        }, {
          key: "disabled",
          get: function get() {
            return this._disabled || !!(this._dropContainer && this._dropContainer.disabled);
          },
          set: function set(value) {
            var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);

            if (newValue !== this._disabled) {
              this._disabled = newValue;

              this._toggleNativeDragInteractions();
            }
          }
        }]);

        return DragRef;
      }();
      /**
       * Gets a 3d `transform` that can be applied to an element.
       * @param x Desired position of the element along the X axis.
       * @param y Desired position of the element along the Y axis.
       */


      function getTransform(x, y) {
        // Round the transforms since some browsers will
        // blur the elements for sub-pixel transforms.
        return "translate3d(".concat(Math.round(x), "px, ").concat(Math.round(y), "px, 0)");
      }
      /** Clamps a value between a minimum and a maximum. */


      function clamp(value, min, max) {
        return Math.max(min, Math.min(max, value));
      }
      /**
       * Helper to remove a node from the DOM and to do all the necessary null checks.
       * @param node Node to be removed.
       */


      function removeNode(node) {
        if (node && node.parentNode) {
          node.parentNode.removeChild(node);
        }
      }
      /** Determines whether an event is a touch event. */


      function isTouchEvent(event) {
        // This function is called for every pixel that the user has dragged so we need it to be
        // as fast as possible. Since we only bind mouse events and touch events, we can assume
        // that if the event's name starts with `t`, it's a touch event.
        return event.type[0] === 't';
      }
      /** Gets the element into which the drag preview should be inserted. */


      function getPreviewInsertionPoint(documentRef) {
        // We can't use the body if the user is in fullscreen mode,
        // because the preview will render under the fullscreen element.
        // TODO(crisbeto): dedupe this with the `FullscreenOverlayContainer` eventually.
        return documentRef.fullscreenElement || documentRef.webkitFullscreenElement || documentRef.mozFullScreenElement || documentRef.msFullscreenElement || documentRef.body;
      }
      /**
       * Gets the root HTML element of an embedded view.
       * If the root is not an HTML element it gets wrapped in one.
       */


      function getRootNode(viewRef, _document) {
        var rootNodes = viewRef.rootNodes;

        if (rootNodes.length === 1 && rootNodes[0].nodeType === _document.ELEMENT_NODE) {
          return rootNodes[0];
        }

        var wrapper = _document.createElement('div');

        rootNodes.forEach(function (node) {
          return wrapper.appendChild(node);
        });
        return wrapper;
      }
      /**
       * Matches the target element's size to the source's size.
       * @param target Element that needs to be resized.
       * @param sourceRect Dimensions of the source element.
       */


      function matchElementSize(target, sourceRect) {
        target.style.width = "".concat(sourceRect.width, "px");
        target.style.height = "".concat(sourceRect.height, "px");
        target.style.transform = getTransform(sourceRect.left, sourceRect.top);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Moves an item one index in an array to another.
       * @param array Array in which to move the item.
       * @param fromIndex Starting index of the item.
       * @param toIndex Index to which the item should be moved.
       */


      function moveItemInArray(array, fromIndex, toIndex) {
        var from = clamp$1(fromIndex, array.length - 1);
        var to = clamp$1(toIndex, array.length - 1);

        if (from === to) {
          return;
        }

        var target = array[from];
        var delta = to < from ? -1 : 1;

        for (var i = from; i !== to; i += delta) {
          array[i] = array[i + delta];
        }

        array[to] = target;
      }
      /**
       * Moves an item from one array to another.
       * @param currentArray Array from which to transfer the item.
       * @param targetArray Array into which to put the item.
       * @param currentIndex Index of the item in its current array.
       * @param targetIndex Index at which to insert the item.
       */


      function transferArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
        var from = clamp$1(currentIndex, currentArray.length - 1);
        var to = clamp$1(targetIndex, targetArray.length);

        if (currentArray.length) {
          targetArray.splice(to, 0, currentArray.splice(from, 1)[0]);
        }
      }
      /**
       * Copies an item from one array to another, leaving it in its
       * original position in current array.
       * @param currentArray Array from which to copy the item.
       * @param targetArray Array into which is copy the item.
       * @param currentIndex Index of the item in its current array.
       * @param targetIndex Index at which to insert the item.
       *
       */


      function copyArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
        var to = clamp$1(targetIndex, targetArray.length);

        if (currentArray.length) {
          targetArray.splice(to, 0, currentArray[currentIndex]);
        }
      }
      /** Clamps a number between zero and a maximum. */


      function clamp$1(value, max) {
        return Math.max(0, Math.min(max, value));
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Proximity, as a ratio to width/height, at which a
       * dragged item will affect the drop container.
       */


      var DROP_PROXIMITY_THRESHOLD = 0.05;
      /**
       * Proximity, as a ratio to width/height at which to start auto-scrolling the drop list or the
       * viewport. The value comes from trying it out manually until it feels right.
       */

      var SCROLL_PROXIMITY_THRESHOLD = 0.05;
      /**
       * Number of pixels to scroll for each frame when auto-scrolling an element.
       * The value comes from trying it out manually until it feels right.
       */

      var AUTO_SCROLL_STEP = 2;
      /**
       * Reference to a drop list. Used to manipulate or dispose of the container.
       */

      var DropListRef = /*#__PURE__*/function () {
        function DropListRef(element, _dragDropRegistry, _document, _ngZone, _viewportRuler) {
          var _this15 = this;

          _classCallCheck(this, DropListRef);

          this._dragDropRegistry = _dragDropRegistry;
          this._ngZone = _ngZone;
          this._viewportRuler = _viewportRuler;
          /** Whether starting a dragging sequence from this container is disabled. */

          this.disabled = false;
          /** Whether sorting items within the list is disabled. */

          this.sortingDisabled = false;
          /**
           * Whether auto-scrolling the view when the user
           * moves their pointer close to the edges is disabled.
           */

          this.autoScrollDisabled = false;
          /**
           * Function that is used to determine whether an item
           * is allowed to be moved into a drop container.
           */

          this.enterPredicate = function () {
            return true;
          };
          /** Emits right before dragging has started. */


          this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /**
           * Emits when the user has moved a new drag item into this container.
           */

          this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /**
           * Emits when the user removes an item from the container
           * by dragging it into another container.
           */

          this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /** Emits when the user drops an item inside the container. */

          this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /** Emits as the user is swapping items while actively dragging. */

          this.sorted = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /** Whether an item in the list is being dragged. */

          this._isDragging = false;
          /** Cache of the dimensions of all the items inside the container. */

          this._itemPositions = [];
          /**
           * Keeps track of the item that was last swapped with the dragged item, as well as what direction
           * the pointer was moving in when the swap occured and whether the user's pointer continued to
           * overlap with the swapped item after the swapping occurred.
           */

          this._previousSwap = {
            drag: null,
            delta: 0,
            overlaps: false
          };
          /** Drop lists that are connected to the current one. */

          this._siblings = [];
          /** Direction in which the list is oriented. */

          this._orientation = 'vertical';
          /** Connected siblings that currently have a dragged item. */

          this._activeSiblings = new Set();
          /** Layout direction of the drop list. */

          this._direction = 'ltr';
          /** Subscription to the window being scrolled. */

          this._viewportScrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
          /** Vertical direction in which the list is currently scrolling. */

          this._verticalScrollDirection = 0
          /* NONE */
          ;
          /** Horizontal direction in which the list is currently scrolling. */

          this._horizontalScrollDirection = 0
          /* NONE */
          ;
          /** Used to signal to the current auto-scroll sequence when to stop. */

          this._stopScrollTimers = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /** Shadow root of the current element. Necessary for `elementFromPoint` to resolve correctly. */

          this._cachedShadowRoot = null;
          /** Starts the interval that'll auto-scroll the element. */

          this._startScrollInterval = function () {
            _this15._stopScrolling();

            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["interval"])(0, rxjs__WEBPACK_IMPORTED_MODULE_5__["animationFrameScheduler"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(_this15._stopScrollTimers)).subscribe(function () {
              var node = _this15._scrollNode;

              if (_this15._verticalScrollDirection === 1
              /* UP */
              ) {
                  incrementVerticalScroll(node, -AUTO_SCROLL_STEP);
                } else if (_this15._verticalScrollDirection === 2
              /* DOWN */
              ) {
                  incrementVerticalScroll(node, AUTO_SCROLL_STEP);
                }

              if (_this15._horizontalScrollDirection === 1
              /* LEFT */
              ) {
                  incrementHorizontalScroll(node, -AUTO_SCROLL_STEP);
                } else if (_this15._horizontalScrollDirection === 2
              /* RIGHT */
              ) {
                  incrementHorizontalScroll(node, AUTO_SCROLL_STEP);
                }
            });
          };

          this.element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(element);
          this._document = _document;
          this.withScrollableParents([this.element]);

          _dragDropRegistry.registerDropContainer(this);

          this._parentPositions = new ParentPositionTracker(_document, _viewportRuler);
        }
        /** Removes the drop list functionality from the DOM element. */


        _createClass(DropListRef, [{
          key: "dispose",
          value: function dispose() {
            this._stopScrolling();

            this._stopScrollTimers.complete();

            this._viewportScrollSubscription.unsubscribe();

            this.beforeStarted.complete();
            this.entered.complete();
            this.exited.complete();
            this.dropped.complete();
            this.sorted.complete();

            this._activeSiblings.clear();

            this._scrollNode = null;

            this._parentPositions.clear();

            this._dragDropRegistry.removeDropContainer(this);
          }
          /** Whether an item from this list is currently being dragged. */

        }, {
          key: "isDragging",
          value: function isDragging() {
            return this._isDragging;
          }
          /** Starts dragging an item. */

        }, {
          key: "start",
          value: function start() {
            var _this16 = this;

            var styles = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element).style;
            this.beforeStarted.next();
            this._isDragging = true; // We need to disable scroll snapping while the user is dragging, because it breaks automatic
            // scrolling. The browser seems to round the value based on the snapping points which means
            // that we can't increment/decrement the scroll position.

            this._initialScrollSnap = styles.msScrollSnapType || styles.scrollSnapType || '';
            styles.scrollSnapType = styles.msScrollSnapType = 'none';

            this._cacheItems();

            this._siblings.forEach(function (sibling) {
              return sibling._startReceiving(_this16);
            });

            this._viewportScrollSubscription.unsubscribe();

            this._listenToScrollEvents();
          }
          /**
           * Emits an event to indicate that the user moved an item into the container.
           * @param item Item that was moved into the container.
           * @param pointerX Position of the item along the X axis.
           * @param pointerY Position of the item along the Y axis.
           * @param index Index at which the item entered. If omitted, the container will try to figure it
           *   out automatically.
           */

        }, {
          key: "enter",
          value: function enter(item, pointerX, pointerY, index) {
            this.start(); // If sorting is disabled, we want the item to return to its starting
            // position if the user is returning it to its initial container.

            var newIndex;

            if (index == null) {
              newIndex = this.sortingDisabled ? this._draggables.indexOf(item) : -1;

              if (newIndex === -1) {
                // We use the coordinates of where the item entered the drop
                // zone to figure out at which index it should be inserted.
                newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY);
              }
            } else {
              newIndex = index;
            }

            var activeDraggables = this._activeDraggables;
            var currentIndex = activeDraggables.indexOf(item);
            var placeholder = item.getPlaceholderElement();
            var newPositionReference = activeDraggables[newIndex]; // If the item at the new position is the same as the item that is being dragged,
            // it means that we're trying to restore the item to its initial position. In this
            // case we should use the next item from the list as the reference.

            if (newPositionReference === item) {
              newPositionReference = activeDraggables[newIndex + 1];
            } // Since the item may be in the `activeDraggables` already (e.g. if the user dragged it
            // into another container and back again), we have to ensure that it isn't duplicated.


            if (currentIndex > -1) {
              activeDraggables.splice(currentIndex, 1);
            } // Don't use items that are being dragged as a reference, because
            // their element has been moved down to the bottom of the body.


            if (newPositionReference && !this._dragDropRegistry.isDragging(newPositionReference)) {
              var element = newPositionReference.getRootElement();
              element.parentElement.insertBefore(placeholder, element);
              activeDraggables.splice(newIndex, 0, item);
            } else if (this._shouldEnterAsFirstChild(pointerX, pointerY)) {
              var reference = activeDraggables[0].getRootElement();
              reference.parentNode.insertBefore(placeholder, reference);
              activeDraggables.unshift(item);
            } else {
              Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element).appendChild(placeholder);
              activeDraggables.push(item);
            } // The transform needs to be cleared so it doesn't throw off the measurements.


            placeholder.style.transform = ''; // Note that the positions were already cached when we called `start` above,
            // but we need to refresh them since the amount of items has changed and also parent rects.

            this._cacheItemPositions();

            this._cacheParentPositions();

            this.entered.next({
              item: item,
              container: this,
              currentIndex: this.getItemIndex(item)
            });
          }
          /**
           * Removes an item from the container after it was dragged into another container by the user.
           * @param item Item that was dragged out.
           */

        }, {
          key: "exit",
          value: function exit(item) {
            this._reset();

            this.exited.next({
              item: item,
              container: this
            });
          }
          /**
           * Drops an item into this container.
           * @param item Item being dropped into the container.
           * @param currentIndex Index at which the item should be inserted.
           * @param previousContainer Container from which the item got dragged in.
           * @param isPointerOverContainer Whether the user's pointer was over the
           *    container when the item was dropped.
           * @param distance Distance the user has dragged since the start of the dragging sequence.
           * @param previousIndex Index of the item when dragging started.
           *
           * @breaking-change 11.0.0 `previousIndex` parameter to become required.
           */

        }, {
          key: "drop",
          value: function drop(item, currentIndex, previousContainer, isPointerOverContainer, distance, previousIndex) {
            this._reset(); // @breaking-change 11.0.0 Remove this fallback logic once `previousIndex` is a required param.


            if (previousIndex == null) {
              previousIndex = previousContainer.getItemIndex(item);
            }

            this.dropped.next({
              item: item,
              currentIndex: currentIndex,
              previousIndex: previousIndex,
              container: this,
              previousContainer: previousContainer,
              isPointerOverContainer: isPointerOverContainer,
              distance: distance
            });
          }
          /**
           * Sets the draggable items that are a part of this list.
           * @param items Items that are a part of this list.
           */

        }, {
          key: "withItems",
          value: function withItems(items) {
            var _this17 = this;

            var previousItems = this._draggables;
            this._draggables = items;
            items.forEach(function (item) {
              return item._withDropContainer(_this17);
            });

            if (this.isDragging()) {
              var draggedItems = previousItems.filter(function (item) {
                return item.isDragging();
              }); // If all of the items being dragged were removed
              // from the list, abort the current drag sequence.

              if (draggedItems.every(function (item) {
                return items.indexOf(item) === -1;
              })) {
                this._reset();
              } else {
                this._cacheItems();
              }
            }

            return this;
          }
          /** Sets the layout direction of the drop list. */

        }, {
          key: "withDirection",
          value: function withDirection(direction) {
            this._direction = direction;
            return this;
          }
          /**
           * Sets the containers that are connected to this one. When two or more containers are
           * connected, the user will be allowed to transfer items between them.
           * @param connectedTo Other containers that the current containers should be connected to.
           */

        }, {
          key: "connectedTo",
          value: function connectedTo(_connectedTo) {
            this._siblings = _connectedTo.slice();
            return this;
          }
          /**
           * Sets the orientation of the container.
           * @param orientation New orientation for the container.
           */

        }, {
          key: "withOrientation",
          value: function withOrientation(orientation) {
            this._orientation = orientation;
            return this;
          }
          /**
           * Sets which parent elements are can be scrolled while the user is dragging.
           * @param elements Elements that can be scrolled.
           */

        }, {
          key: "withScrollableParents",
          value: function withScrollableParents(elements) {
            var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element); // We always allow the current element to be scrollable
            // so we need to ensure that it's in the array.

            this._scrollableElements = elements.indexOf(element) === -1 ? [element].concat(_toConsumableArray(elements)) : elements.slice();
            return this;
          }
          /** Gets the scrollable parents that are registered with this drop container. */

        }, {
          key: "getScrollableParents",
          value: function getScrollableParents() {
            return this._scrollableElements;
          }
          /**
           * Figures out the index of an item in the container.
           * @param item Item whose index should be determined.
           */

        }, {
          key: "getItemIndex",
          value: function getItemIndex(item) {
            if (!this._isDragging) {
              return this._draggables.indexOf(item);
            } // Items are sorted always by top/left in the cache, however they flow differently in RTL.
            // The rest of the logic still stands no matter what orientation we're in, however
            // we need to invert the array when determining the index.


            var items = this._orientation === 'horizontal' && this._direction === 'rtl' ? this._itemPositions.slice().reverse() : this._itemPositions;
            return findIndex(items, function (currentItem) {
              return currentItem.drag === item;
            });
          }
          /**
           * Whether the list is able to receive the item that
           * is currently being dragged inside a connected drop list.
           */

        }, {
          key: "isReceiving",
          value: function isReceiving() {
            return this._activeSiblings.size > 0;
          }
          /**
           * Sorts an item inside the container based on its position.
           * @param item Item to be sorted.
           * @param pointerX Position of the item along the X axis.
           * @param pointerY Position of the item along the Y axis.
           * @param pointerDelta Direction in which the pointer is moving along each axis.
           */

        }, {
          key: "_sortItem",
          value: function _sortItem(item, pointerX, pointerY, pointerDelta) {
            // Don't sort the item if sorting is disabled or it's out of range.
            if (this.sortingDisabled || !isPointerNearClientRect(this._clientRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
              return;
            }

            var siblings = this._itemPositions;

            var newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY, pointerDelta);

            if (newIndex === -1 && siblings.length > 0) {
              return;
            }

            var isHorizontal = this._orientation === 'horizontal';
            var currentIndex = findIndex(siblings, function (currentItem) {
              return currentItem.drag === item;
            });
            var siblingAtNewPosition = siblings[newIndex];
            var currentPosition = siblings[currentIndex].clientRect;
            var newPosition = siblingAtNewPosition.clientRect;
            var delta = currentIndex > newIndex ? 1 : -1; // How many pixels the item's placeholder should be offset.

            var itemOffset = this._getItemOffsetPx(currentPosition, newPosition, delta); // How many pixels all the other items should be offset.


            var siblingOffset = this._getSiblingOffsetPx(currentIndex, siblings, delta); // Save the previous order of the items before moving the item to its new index.
            // We use this to check whether an item has been moved as a result of the sorting.


            var oldOrder = siblings.slice(); // Shuffle the array in place.

            moveItemInArray(siblings, currentIndex, newIndex);
            this.sorted.next({
              previousIndex: currentIndex,
              currentIndex: newIndex,
              container: this,
              item: item
            });
            siblings.forEach(function (sibling, index) {
              // Don't do anything if the position hasn't changed.
              if (oldOrder[index] === sibling) {
                return;
              }

              var isDraggedItem = sibling.drag === item;
              var offset = isDraggedItem ? itemOffset : siblingOffset;
              var elementToOffset = isDraggedItem ? item.getPlaceholderElement() : sibling.drag.getRootElement(); // Update the offset to reflect the new position.

              sibling.offset += offset; // Since we're moving the items with a `transform`, we need to adjust their cached
              // client rects to reflect their new position, as well as swap their positions in the cache.
              // Note that we shouldn't use `getBoundingClientRect` here to update the cache, because the
              // elements may be mid-animation which will give us a wrong result.

              if (isHorizontal) {
                // Round the transforms since some browsers will
                // blur the elements, for sub-pixel transforms.
                elementToOffset.style.transform = "translate3d(".concat(Math.round(sibling.offset), "px, 0, 0)");
                adjustClientRect(sibling.clientRect, 0, offset);
              } else {
                elementToOffset.style.transform = "translate3d(0, ".concat(Math.round(sibling.offset), "px, 0)");
                adjustClientRect(sibling.clientRect, offset, 0);
              }
            }); // Note that it's important that we do this after the client rects have been adjusted.

            this._previousSwap.overlaps = isInsideClientRect(newPosition, pointerX, pointerY);
            this._previousSwap.drag = siblingAtNewPosition.drag;
            this._previousSwap.delta = isHorizontal ? pointerDelta.x : pointerDelta.y;
          }
          /**
           * Checks whether the user's pointer is close to the edges of either the
           * viewport or the drop list and starts the auto-scroll sequence.
           * @param pointerX User's pointer position along the x axis.
           * @param pointerY User's pointer position along the y axis.
           */

        }, {
          key: "_startScrollingIfNecessary",
          value: function _startScrollingIfNecessary(pointerX, pointerY) {
            var _this18 = this;

            if (this.autoScrollDisabled) {
              return;
            }

            var scrollNode;
            var verticalScrollDirection = 0
            /* NONE */
            ;
            var horizontalScrollDirection = 0
            /* NONE */
            ; // Check whether we should start scrolling any of the parent containers.

            this._parentPositions.positions.forEach(function (position, element) {
              // We have special handling for the `document` below. Also this would be
              // nicer with a  for...of loop, but it requires changing a compiler flag.
              if (element === _this18._document || !position.clientRect || scrollNode) {
                return;
              }

              if (isPointerNearClientRect(position.clientRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
                var _getElementScrollDire = getElementScrollDirections(element, position.clientRect, pointerX, pointerY);

                var _getElementScrollDire2 = _slicedToArray(_getElementScrollDire, 2);

                verticalScrollDirection = _getElementScrollDire2[0];
                horizontalScrollDirection = _getElementScrollDire2[1];

                if (verticalScrollDirection || horizontalScrollDirection) {
                  scrollNode = element;
                }
              }
            }); // Otherwise check if we can start scrolling the viewport.


            if (!verticalScrollDirection && !horizontalScrollDirection) {
              var _this$_viewportRuler$ = this._viewportRuler.getViewportSize(),
                  width = _this$_viewportRuler$.width,
                  height = _this$_viewportRuler$.height;

              var clientRect = {
                width: width,
                height: height,
                top: 0,
                right: width,
                bottom: height,
                left: 0
              };
              verticalScrollDirection = getVerticalScrollDirection(clientRect, pointerY);
              horizontalScrollDirection = getHorizontalScrollDirection(clientRect, pointerX);
              scrollNode = window;
            }

            if (scrollNode && (verticalScrollDirection !== this._verticalScrollDirection || horizontalScrollDirection !== this._horizontalScrollDirection || scrollNode !== this._scrollNode)) {
              this._verticalScrollDirection = verticalScrollDirection;
              this._horizontalScrollDirection = horizontalScrollDirection;
              this._scrollNode = scrollNode;

              if ((verticalScrollDirection || horizontalScrollDirection) && scrollNode) {
                this._ngZone.runOutsideAngular(this._startScrollInterval);
              } else {
                this._stopScrolling();
              }
            }
          }
          /** Stops any currently-running auto-scroll sequences. */

        }, {
          key: "_stopScrolling",
          value: function _stopScrolling() {
            this._stopScrollTimers.next();
          }
          /** Caches the positions of the configured scrollable parents. */

        }, {
          key: "_cacheParentPositions",
          value: function _cacheParentPositions() {
            var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element);

            this._parentPositions.cache(this._scrollableElements); // The list element is always in the `scrollableElements`
            // so we can take advantage of the cached `ClientRect`.


            this._clientRect = this._parentPositions.positions.get(element).clientRect;
          }
          /** Refreshes the position cache of the items and sibling containers. */

        }, {
          key: "_cacheItemPositions",
          value: function _cacheItemPositions() {
            var isHorizontal = this._orientation === 'horizontal';
            this._itemPositions = this._activeDraggables.map(function (drag) {
              var elementToMeasure = drag.getVisibleElement();
              return {
                drag: drag,
                offset: 0,
                clientRect: getMutableClientRect(elementToMeasure)
              };
            }).sort(function (a, b) {
              return isHorizontal ? a.clientRect.left - b.clientRect.left : a.clientRect.top - b.clientRect.top;
            });
          }
          /** Resets the container to its initial state. */

        }, {
          key: "_reset",
          value: function _reset() {
            var _this19 = this;

            this._isDragging = false;
            var styles = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element).style;
            styles.scrollSnapType = styles.msScrollSnapType = this._initialScrollSnap; // TODO(crisbeto): may have to wait for the animations to finish.

            this._activeDraggables.forEach(function (item) {
              var rootElement = item.getRootElement();

              if (rootElement) {
                rootElement.style.transform = '';
              }
            });

            this._siblings.forEach(function (sibling) {
              return sibling._stopReceiving(_this19);
            });

            this._activeDraggables = [];
            this._itemPositions = [];
            this._previousSwap.drag = null;
            this._previousSwap.delta = 0;
            this._previousSwap.overlaps = false;

            this._stopScrolling();

            this._viewportScrollSubscription.unsubscribe();

            this._parentPositions.clear();
          }
          /**
           * Gets the offset in pixels by which the items that aren't being dragged should be moved.
           * @param currentIndex Index of the item currently being dragged.
           * @param siblings All of the items in the list.
           * @param delta Direction in which the user is moving.
           */

        }, {
          key: "_getSiblingOffsetPx",
          value: function _getSiblingOffsetPx(currentIndex, siblings, delta) {
            var isHorizontal = this._orientation === 'horizontal';
            var currentPosition = siblings[currentIndex].clientRect;
            var immediateSibling = siblings[currentIndex + delta * -1];
            var siblingOffset = currentPosition[isHorizontal ? 'width' : 'height'] * delta;

            if (immediateSibling) {
              var start = isHorizontal ? 'left' : 'top';
              var end = isHorizontal ? 'right' : 'bottom'; // Get the spacing between the start of the current item and the end of the one immediately
              // after it in the direction in which the user is dragging, or vice versa. We add it to the
              // offset in order to push the element to where it will be when it's inline and is influenced
              // by the `margin` of its siblings.

              if (delta === -1) {
                siblingOffset -= immediateSibling.clientRect[start] - currentPosition[end];
              } else {
                siblingOffset += currentPosition[start] - immediateSibling.clientRect[end];
              }
            }

            return siblingOffset;
          }
          /**
           * Gets the offset in pixels by which the item that is being dragged should be moved.
           * @param currentPosition Current position of the item.
           * @param newPosition Position of the item where the current item should be moved.
           * @param delta Direction in which the user is moving.
           */

        }, {
          key: "_getItemOffsetPx",
          value: function _getItemOffsetPx(currentPosition, newPosition, delta) {
            var isHorizontal = this._orientation === 'horizontal';
            var itemOffset = isHorizontal ? newPosition.left - currentPosition.left : newPosition.top - currentPosition.top; // Account for differences in the item width/height.

            if (delta === -1) {
              itemOffset += isHorizontal ? newPosition.width - currentPosition.width : newPosition.height - currentPosition.height;
            }

            return itemOffset;
          }
          /**
           * Checks if pointer is entering in the first position
           * @param pointerX Position of the user's pointer along the X axis.
           * @param pointerY Position of the user's pointer along the Y axis.
           */

        }, {
          key: "_shouldEnterAsFirstChild",
          value: function _shouldEnterAsFirstChild(pointerX, pointerY) {
            if (!this._activeDraggables.length) {
              return false;
            }

            var itemPositions = this._itemPositions;
            var isHorizontal = this._orientation === 'horizontal'; // `itemPositions` are sorted by position while `activeDraggables` are sorted by child index
            // check if container is using some sort of "reverse" ordering (eg: flex-direction: row-reverse)

            var reversed = itemPositions[0].drag !== this._activeDraggables[0];

            if (reversed) {
              var lastItemRect = itemPositions[itemPositions.length - 1].clientRect;
              return isHorizontal ? pointerX >= lastItemRect.right : pointerY >= lastItemRect.bottom;
            } else {
              var firstItemRect = itemPositions[0].clientRect;
              return isHorizontal ? pointerX <= firstItemRect.left : pointerY <= firstItemRect.top;
            }
          }
          /**
           * Gets the index of an item in the drop container, based on the position of the user's pointer.
           * @param item Item that is being sorted.
           * @param pointerX Position of the user's pointer along the X axis.
           * @param pointerY Position of the user's pointer along the Y axis.
           * @param delta Direction in which the user is moving their pointer.
           */

        }, {
          key: "_getItemIndexFromPointerPosition",
          value: function _getItemIndexFromPointerPosition(item, pointerX, pointerY, delta) {
            var _this20 = this;

            var isHorizontal = this._orientation === 'horizontal';
            return findIndex(this._itemPositions, function (_ref4, _, array) {
              var drag = _ref4.drag,
                  clientRect = _ref4.clientRect;

              if (drag === item) {
                // If there's only one item left in the container, it must be
                // the dragged item itself so we use it as a reference.
                return array.length < 2;
              }

              if (delta) {
                var direction = isHorizontal ? delta.x : delta.y; // If the user is still hovering over the same item as last time, their cursor hasn't left
                // the item after we made the swap, and they didn't change the direction in which they're
                // dragging, we don't consider it a direction swap.

                if (drag === _this20._previousSwap.drag && _this20._previousSwap.overlaps && direction === _this20._previousSwap.delta) {
                  return false;
                }
              }

              return isHorizontal ? // Round these down since most browsers report client rects with
              // sub-pixel precision, whereas the pointer coordinates are rounded to pixels.
              pointerX >= Math.floor(clientRect.left) && pointerX < Math.floor(clientRect.right) : pointerY >= Math.floor(clientRect.top) && pointerY < Math.floor(clientRect.bottom);
            });
          }
          /** Caches the current items in the list and their positions. */

        }, {
          key: "_cacheItems",
          value: function _cacheItems() {
            this._activeDraggables = this._draggables.slice();

            this._cacheItemPositions();

            this._cacheParentPositions();
          }
          /**
           * Checks whether the user's pointer is positioned over the container.
           * @param x Pointer position along the X axis.
           * @param y Pointer position along the Y axis.
           */

        }, {
          key: "_isOverContainer",
          value: function _isOverContainer(x, y) {
            return isInsideClientRect(this._clientRect, x, y);
          }
          /**
           * Figures out whether an item should be moved into a sibling
           * drop container, based on its current position.
           * @param item Drag item that is being moved.
           * @param x Position of the item along the X axis.
           * @param y Position of the item along the Y axis.
           */

        }, {
          key: "_getSiblingContainerFromPosition",
          value: function _getSiblingContainerFromPosition(item, x, y) {
            return this._siblings.find(function (sibling) {
              return sibling._canReceive(item, x, y);
            });
          }
          /**
           * Checks whether the drop list can receive the passed-in item.
           * @param item Item that is being dragged into the list.
           * @param x Position of the item along the X axis.
           * @param y Position of the item along the Y axis.
           */

        }, {
          key: "_canReceive",
          value: function _canReceive(item, x, y) {
            if (!isInsideClientRect(this._clientRect, x, y) || !this.enterPredicate(item, this)) {
              return false;
            }

            var elementFromPoint = this._getShadowRoot().elementFromPoint(x, y); // If there's no element at the pointer position, then
            // the client rect is probably scrolled out of the view.


            if (!elementFromPoint) {
              return false;
            }

            var nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element); // The `ClientRect`, that we're using to find the container over which the user is
            // hovering, doesn't give us any information on whether the element has been scrolled
            // out of the view or whether it's overlapping with other containers. This means that
            // we could end up transferring the item into a container that's invisible or is positioned
            // below another one. We use the result from `elementFromPoint` to get the top-most element
            // at the pointer position and to find whether it's one of the intersecting drop containers.

            return elementFromPoint === nativeElement || nativeElement.contains(elementFromPoint);
          }
          /**
           * Called by one of the connected drop lists when a dragging sequence has started.
           * @param sibling Sibling in which dragging has started.
           */

        }, {
          key: "_startReceiving",
          value: function _startReceiving(sibling) {
            var activeSiblings = this._activeSiblings;

            if (!activeSiblings.has(sibling)) {
              activeSiblings.add(sibling);

              this._cacheParentPositions();

              this._listenToScrollEvents();
            }
          }
          /**
           * Called by a connected drop list when dragging has stopped.
           * @param sibling Sibling whose dragging has stopped.
           */

        }, {
          key: "_stopReceiving",
          value: function _stopReceiving(sibling) {
            this._activeSiblings["delete"](sibling);

            this._viewportScrollSubscription.unsubscribe();
          }
          /**
           * Starts listening to scroll events on the viewport.
           * Used for updating the internal state of the list.
           */

        }, {
          key: "_listenToScrollEvents",
          value: function _listenToScrollEvents() {
            var _this21 = this;

            this._viewportScrollSubscription = this._dragDropRegistry.scroll.subscribe(function (event) {
              if (_this21.isDragging()) {
                var scrollDifference = _this21._parentPositions.handleScroll(event);

                if (scrollDifference) {
                  // Since we know the amount that the user has scrolled we can shift all of the
                  // client rectangles ourselves. This is cheaper than re-measuring everything and
                  // we can avoid inconsistent behavior where we might be measuring the element before
                  // its position has changed.
                  _this21._itemPositions.forEach(function (_ref5) {
                    var clientRect = _ref5.clientRect;
                    adjustClientRect(clientRect, scrollDifference.top, scrollDifference.left);
                  }); // We need two loops for this, because we want all of the cached
                  // positions to be up-to-date before we re-sort the item.


                  _this21._itemPositions.forEach(function (_ref6) {
                    var drag = _ref6.drag;

                    if (_this21._dragDropRegistry.isDragging(drag)) {
                      // We need to re-sort the item manually, because the pointer move
                      // events won't be dispatched while the user is scrolling.
                      drag._sortFromLastPointerPosition();
                    }
                  });
                }
              } else if (_this21.isReceiving()) {
                _this21._cacheParentPositions();
              }
            });
          }
          /**
           * Lazily resolves and returns the shadow root of the element. We do this in a function, rather
           * than saving it in property directly on init, because we want to resolve it as late as possible
           * in order to ensure that the element has been moved into the shadow DOM. Doing it inside the
           * constructor might be too early if the element is inside of something like `ngFor` or `ngIf`.
           */

        }, {
          key: "_getShadowRoot",
          value: function _getShadowRoot() {
            if (!this._cachedShadowRoot) {
              var shadowRoot = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["_getShadowRoot"])(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element));
              this._cachedShadowRoot = shadowRoot || this._document;
            }

            return this._cachedShadowRoot;
          }
        }]);

        return DropListRef;
      }();
      /**
       * Finds the index of an item that matches a predicate function. Used as an equivalent
       * of `Array.prototype.findIndex` which isn't part of the standard Google typings.
       * @param array Array in which to look for matches.
       * @param predicate Function used to determine whether an item is a match.
       */


      function findIndex(array, predicate) {
        for (var i = 0; i < array.length; i++) {
          if (predicate(array[i], i, array)) {
            return i;
          }
        }

        return -1;
      }
      /**
       * Increments the vertical scroll position of a node.
       * @param node Node whose scroll position should change.
       * @param amount Amount of pixels that the `node` should be scrolled.
       */


      function incrementVerticalScroll(node, amount) {
        if (node === window) {
          node.scrollBy(0, amount);
        } else {
          // Ideally we could use `Element.scrollBy` here as well, but IE and Edge don't support it.
          node.scrollTop += amount;
        }
      }
      /**
       * Increments the horizontal scroll position of a node.
       * @param node Node whose scroll position should change.
       * @param amount Amount of pixels that the `node` should be scrolled.
       */


      function incrementHorizontalScroll(node, amount) {
        if (node === window) {
          node.scrollBy(amount, 0);
        } else {
          // Ideally we could use `Element.scrollBy` here as well, but IE and Edge don't support it.
          node.scrollLeft += amount;
        }
      }
      /**
       * Gets whether the vertical auto-scroll direction of a node.
       * @param clientRect Dimensions of the node.
       * @param pointerY Position of the user's pointer along the y axis.
       */


      function getVerticalScrollDirection(clientRect, pointerY) {
        var top = clientRect.top,
            bottom = clientRect.bottom,
            height = clientRect.height;
        var yThreshold = height * SCROLL_PROXIMITY_THRESHOLD;

        if (pointerY >= top - yThreshold && pointerY <= top + yThreshold) {
          return 1
          /* UP */
          ;
        } else if (pointerY >= bottom - yThreshold && pointerY <= bottom + yThreshold) {
          return 2
          /* DOWN */
          ;
        }

        return 0
        /* NONE */
        ;
      }
      /**
       * Gets whether the horizontal auto-scroll direction of a node.
       * @param clientRect Dimensions of the node.
       * @param pointerX Position of the user's pointer along the x axis.
       */


      function getHorizontalScrollDirection(clientRect, pointerX) {
        var left = clientRect.left,
            right = clientRect.right,
            width = clientRect.width;
        var xThreshold = width * SCROLL_PROXIMITY_THRESHOLD;

        if (pointerX >= left - xThreshold && pointerX <= left + xThreshold) {
          return 1
          /* LEFT */
          ;
        } else if (pointerX >= right - xThreshold && pointerX <= right + xThreshold) {
          return 2
          /* RIGHT */
          ;
        }

        return 0
        /* NONE */
        ;
      }
      /**
       * Gets the directions in which an element node should be scrolled,
       * assuming that the user's pointer is already within it scrollable region.
       * @param element Element for which we should calculate the scroll direction.
       * @param clientRect Bounding client rectangle of the element.
       * @param pointerX Position of the user's pointer along the x axis.
       * @param pointerY Position of the user's pointer along the y axis.
       */


      function getElementScrollDirections(element, clientRect, pointerX, pointerY) {
        var computedVertical = getVerticalScrollDirection(clientRect, pointerY);
        var computedHorizontal = getHorizontalScrollDirection(clientRect, pointerX);
        var verticalScrollDirection = 0
        /* NONE */
        ;
        var horizontalScrollDirection = 0
        /* NONE */
        ; // Note that we here we do some extra checks for whether the element is actually scrollable in
        // a certain direction and we only assign the scroll direction if it is. We do this so that we
        // can allow other elements to be scrolled, if the current element can't be scrolled anymore.
        // This allows us to handle cases where the scroll regions of two scrollable elements overlap.

        if (computedVertical) {
          var scrollTop = element.scrollTop;

          if (computedVertical === 1
          /* UP */
          ) {
              if (scrollTop > 0) {
                verticalScrollDirection = 1
                /* UP */
                ;
              }
            } else if (element.scrollHeight - scrollTop > element.clientHeight) {
            verticalScrollDirection = 2
            /* DOWN */
            ;
          }
        }

        if (computedHorizontal) {
          var scrollLeft = element.scrollLeft;

          if (computedHorizontal === 1
          /* LEFT */
          ) {
              if (scrollLeft > 0) {
                horizontalScrollDirection = 1
                /* LEFT */
                ;
              }
            } else if (element.scrollWidth - scrollLeft > element.clientWidth) {
            horizontalScrollDirection = 2
            /* RIGHT */
            ;
          }
        }

        return [verticalScrollDirection, horizontalScrollDirection];
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Event options that can be used to bind an active, capturing event. */


      var activeCapturingEventOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["normalizePassiveListenerOptions"])({
        passive: false,
        capture: true
      });
      /**
       * Service that keeps track of all the drag item and drop container
       * instances, and manages global event listeners on the `document`.
       * @docs-private
       */
      // Note: this class is generic, rather than referencing CdkDrag and CdkDropList directly, in order
      // to avoid circular imports. If we were to reference them here, importing the registry into the
      // classes that are registering themselves will introduce a circular import.

      var DragDropRegistry = /*#__PURE__*/function () {
        function DragDropRegistry(_ngZone, _document) {
          var _this22 = this;

          _classCallCheck(this, DragDropRegistry);

          this._ngZone = _ngZone;
          /** Registered drop container instances. */

          this._dropInstances = new Set();
          /** Registered drag item instances. */

          this._dragInstances = new Set();
          /** Drag item instances that are currently being dragged. */

          this._activeDragInstances = new Set();
          /** Keeps track of the event listeners that we've bound to the `document`. */

          this._globalListeners = new Map();
          /**
           * Emits the `touchmove` or `mousemove` events that are dispatched
           * while the user is dragging a drag item instance.
           */

          this.pointerMove = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /**
           * Emits the `touchend` or `mouseup` events that are dispatched
           * while the user is dragging a drag item instance.
           */

          this.pointerUp = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /** Emits when the viewport has been scrolled while the user is dragging an item. */

          this.scroll = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /**
           * Event listener that will prevent the default browser action while the user is dragging.
           * @param event Event whose default action should be prevented.
           */

          this._preventDefaultWhileDragging = function (event) {
            if (_this22._activeDragInstances.size) {
              event.preventDefault();
            }
          };
          /** Event listener for `touchmove` that is bound even if no dragging is happening. */


          this._persistentTouchmoveListener = function (event) {
            if (_this22._activeDragInstances.size) {
              event.preventDefault();

              _this22.pointerMove.next(event);
            }
          };

          this._document = _document;
        }
        /** Adds a drop container to the registry. */


        _createClass(DragDropRegistry, [{
          key: "registerDropContainer",
          value: function registerDropContainer(drop) {
            if (!this._dropInstances.has(drop)) {
              this._dropInstances.add(drop);
            }
          }
          /** Adds a drag item instance to the registry. */

        }, {
          key: "registerDragItem",
          value: function registerDragItem(drag) {
            var _this23 = this;

            this._dragInstances.add(drag); // The `touchmove` event gets bound once, ahead of time, because WebKit
            // won't preventDefault on a dynamically-added `touchmove` listener.
            // See https://bugs.webkit.org/show_bug.cgi?id=184250.


            if (this._dragInstances.size === 1) {
              this._ngZone.runOutsideAngular(function () {
                // The event handler has to be explicitly active,
                // because newer browsers make it passive by default.
                _this23._document.addEventListener('touchmove', _this23._persistentTouchmoveListener, activeCapturingEventOptions);
              });
            }
          }
          /** Removes a drop container from the registry. */

        }, {
          key: "removeDropContainer",
          value: function removeDropContainer(drop) {
            this._dropInstances["delete"](drop);
          }
          /** Removes a drag item instance from the registry. */

        }, {
          key: "removeDragItem",
          value: function removeDragItem(drag) {
            this._dragInstances["delete"](drag);

            this.stopDragging(drag);

            if (this._dragInstances.size === 0) {
              this._document.removeEventListener('touchmove', this._persistentTouchmoveListener, activeCapturingEventOptions);
            }
          }
          /**
           * Starts the dragging sequence for a drag instance.
           * @param drag Drag instance which is being dragged.
           * @param event Event that initiated the dragging.
           */

        }, {
          key: "startDragging",
          value: function startDragging(drag, event) {
            var _this24 = this;

            // Do not process the same drag twice to avoid memory leaks and redundant listeners
            if (this._activeDragInstances.has(drag)) {
              return;
            }

            this._activeDragInstances.add(drag);

            if (this._activeDragInstances.size === 1) {
              var _isTouchEvent = event.type.startsWith('touch'); // We explicitly bind __active__ listeners here, because newer browsers will default to
              // passive ones for `mousemove` and `touchmove`. The events need to be active, because we
              // use `preventDefault` to prevent the page from scrolling while the user is dragging.


              this._globalListeners.set(_isTouchEvent ? 'touchend' : 'mouseup', {
                handler: function handler(e) {
                  return _this24.pointerUp.next(e);
                },
                options: true
              }).set('scroll', {
                handler: function handler(e) {
                  return _this24.scroll.next(e);
                },
                // Use capturing so that we pick up scroll changes in any scrollable nodes that aren't
                // the document. See https://github.com/angular/components/issues/17144.
                options: true
              }) // Preventing the default action on `mousemove` isn't enough to disable text selection
              // on Safari so we need to prevent the selection event as well. Alternatively this can
              // be done by setting `user-select: none` on the `body`, however it has causes a style
              // recalculation which can be expensive on pages with a lot of elements.
              .set('selectstart', {
                handler: this._preventDefaultWhileDragging,
                options: activeCapturingEventOptions
              }); // We don't have to bind a move event for touch drag sequences, because
              // we already have a persistent global one bound from `registerDragItem`.


              if (!_isTouchEvent) {
                this._globalListeners.set('mousemove', {
                  handler: function handler(e) {
                    return _this24.pointerMove.next(e);
                  },
                  options: activeCapturingEventOptions
                });
              }

              this._ngZone.runOutsideAngular(function () {
                _this24._globalListeners.forEach(function (config, name) {
                  _this24._document.addEventListener(name, config.handler, config.options);
                });
              });
            }
          }
          /** Stops dragging a drag item instance. */

        }, {
          key: "stopDragging",
          value: function stopDragging(drag) {
            this._activeDragInstances["delete"](drag);

            if (this._activeDragInstances.size === 0) {
              this._clearGlobalListeners();
            }
          }
          /** Gets whether a drag item instance is currently being dragged. */

        }, {
          key: "isDragging",
          value: function isDragging(drag) {
            return this._activeDragInstances.has(drag);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _this25 = this;

            this._dragInstances.forEach(function (instance) {
              return _this25.removeDragItem(instance);
            });

            this._dropInstances.forEach(function (instance) {
              return _this25.removeDropContainer(instance);
            });

            this._clearGlobalListeners();

            this.pointerMove.complete();
            this.pointerUp.complete();
          }
          /** Clears out the global event listeners from the `document`. */

        }, {
          key: "_clearGlobalListeners",
          value: function _clearGlobalListeners() {
            var _this26 = this;

            this._globalListeners.forEach(function (config, name) {
              _this26._document.removeEventListener(name, config.handler, config.options);
            });

            this._globalListeners.clear();
          }
        }]);

        return DragDropRegistry;
      }();

      DragDropRegistry.ɵfac = function DragDropRegistry_Factory(t) {
        return new (t || DragDropRegistry)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
      };

      DragDropRegistry.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function DragDropRegistry_Factory() {
          return new DragDropRegistry(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
        },
        token: DragDropRegistry,
        providedIn: "root"
      });

      DragDropRegistry.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DragDropRegistry, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Default configuration to be used when creating a `DragRef`. */


      var DEFAULT_CONFIG = {
        dragStartThreshold: 5,
        pointerDirectionChangeThreshold: 5
      };
      /**
       * Service that allows for drag-and-drop functionality to be attached to DOM elements.
       */

      var DragDrop = /*#__PURE__*/function () {
        function DragDrop(_document, _ngZone, _viewportRuler, _dragDropRegistry) {
          _classCallCheck(this, DragDrop);

          this._document = _document;
          this._ngZone = _ngZone;
          this._viewportRuler = _viewportRuler;
          this._dragDropRegistry = _dragDropRegistry;
        }
        /**
         * Turns an element into a draggable item.
         * @param element Element to which to attach the dragging functionality.
         * @param config Object used to configure the dragging behavior.
         */


        _createClass(DragDrop, [{
          key: "createDrag",
          value: function createDrag(element) {
            var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_CONFIG;
            return new DragRef(element, config, this._document, this._ngZone, this._viewportRuler, this._dragDropRegistry);
          }
          /**
           * Turns an element into a drop list.
           * @param element Element to which to attach the drop list functionality.
           */

        }, {
          key: "createDropList",
          value: function createDropList(element) {
            return new DropListRef(element, this._dragDropRegistry, this._document, this._ngZone, this._viewportRuler);
          }
        }]);

        return DragDrop;
      }();

      DragDrop.ɵfac = function DragDrop_Factory(t) {
        return new (t || DragDrop)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](DragDropRegistry));
      };

      DragDrop.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function DragDrop_Factory() {
          return new DragDrop(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(DragDropRegistry));
        },
        token: DragDrop,
        providedIn: "root"
      });

      DragDrop.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ViewportRuler"]
        }, {
          type: DragDropRegistry
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DragDrop, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ViewportRuler"]
          }, {
            type: DragDropRegistry
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Injection token that can be used for a `CdkDrag` to provide itself as a parent to the
       * drag-specific child directive (`CdkDragHandle`, `CdkDragPreview` etc.). Used primarily
       * to avoid circular imports.
       * @docs-private
       */


      var CDK_DRAG_PARENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CDK_DRAG_PARENT');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Injection token that can be used to reference instances of `CdkDropListGroup`. It serves as
       * alternative token to the actual `CdkDropListGroup` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */

      var CDK_DROP_LIST_GROUP = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CdkDropListGroup');
      /**
       * Declaratively connects sibling `cdkDropList` instances together. All of the `cdkDropList`
       * elements that are placed inside a `cdkDropListGroup` will be connected to each other
       * automatically. Can be used as an alternative to the `cdkDropListConnectedTo` input
       * from `cdkDropList`.
       */

      var CdkDropListGroup = /*#__PURE__*/function () {
        function CdkDropListGroup() {
          _classCallCheck(this, CdkDropListGroup);

          /** Drop lists registered inside the group. */
          this._items = new Set();
          this._disabled = false;
        }
        /** Whether starting a dragging sequence from inside this group is disabled. */


        _createClass(CdkDropListGroup, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._items.clear();
          }
        }, {
          key: "disabled",
          get: function get() {
            return this._disabled;
          },
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
          }
        }]);

        return CdkDropListGroup;
      }();

      CdkDropListGroup.ɵfac = function CdkDropListGroup_Factory(t) {
        return new (t || CdkDropListGroup)();
      };

      CdkDropListGroup.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkDropListGroup,
        selectors: [["", "cdkDropListGroup", ""]],
        inputs: {
          disabled: ["cdkDropListGroupDisabled", "disabled"]
        },
        exportAs: ["cdkDropListGroup"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: CDK_DROP_LIST_GROUP,
          useExisting: CdkDropListGroup
        }])]
      });
      CdkDropListGroup.propDecorators = {
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListGroupDisabled']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDropListGroup, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[cdkDropListGroup]',
            exportAs: 'cdkDropListGroup',
            providers: [{
              provide: CDK_DROP_LIST_GROUP,
              useExisting: CdkDropListGroup
            }]
          }]
        }], function () {
          return [];
        }, {
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListGroupDisabled']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Injection token that can be used to configure the
       * behavior of the drag&drop-related components.
       */


      var CDK_DRAG_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CDK_DRAG_CONFIG');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Counter used to generate unique ids for drop zones. */

      var _uniqueIdCounter = 0;
      /**
       * Injection token that can be used to reference instances of `CdkDropList`. It serves as
       * alternative token to the actual `CdkDropList` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */

      var CDK_DROP_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CdkDropList');
      var ɵ0 = undefined;
      /** Container that wraps a set of draggable items. */

      var CdkDropList = /*#__PURE__*/function () {
        function CdkDropList(
        /** Element that the drop list is attached to. */
        element, dragDrop, _changeDetectorRef, _dir, _group,
        /**
         * @deprecated _scrollDispatcher parameter to become required.
         * @breaking-change 11.0.0
         */
        _scrollDispatcher, config) {
          var _this27 = this;

          _classCallCheck(this, CdkDropList);

          this.element = element;
          this._changeDetectorRef = _changeDetectorRef;
          this._dir = _dir;
          this._group = _group;
          this._scrollDispatcher = _scrollDispatcher;
          /** Emits when the list has been destroyed. */

          this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /**
           * Other draggable containers that this container is connected to and into which the
           * container's items can be transferred. Can either be references to other drop containers,
           * or their unique IDs.
           */

          this.connectedTo = [];
          /**
           * Unique ID for the drop zone. Can be used as a reference
           * in the `connectedTo` of another `CdkDropList`.
           */

          this.id = "cdk-drop-list-".concat(_uniqueIdCounter++);
          /**
           * Function that is used to determine whether an item
           * is allowed to be moved into a drop container.
           */

          this.enterPredicate = function () {
            return true;
          };
          /** Emits when the user drops an item inside the container. */


          this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * Emits when the user has moved a new drag item into this container.
           */

          this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * Emits when the user removes an item from the container
           * by dragging it into another container.
           */

          this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /** Emits as the user is swapping items while actively dragging. */

          this.sorted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * Keeps track of the items that are registered with this container. Historically we used to
           * do this with a `ContentChildren` query, however queries don't handle transplanted views very
           * well which means that we can't handle cases like dragging the headers of a `mat-table`
           * correctly. What we do instead is to have the items register themselves with the container
           * and then we sort them based on their position in the DOM.
           */

          this._unsortedItems = new Set();
          this._dropListRef = dragDrop.createDropList(element);
          this._dropListRef.data = this;

          if (config) {
            this._assignDefaults(config);
          }

          this._dropListRef.enterPredicate = function (drag, drop) {
            return _this27.enterPredicate(drag.data, drop.data);
          };

          this._setupInputSyncSubscription(this._dropListRef);

          this._handleEvents(this._dropListRef);

          CdkDropList._dropLists.push(this);

          if (_group) {
            _group._items.add(this);
          }
        }
        /** Whether starting a dragging sequence from this container is disabled. */


        _createClass(CdkDropList, [{
          key: "addItem",

          /** Registers an items with the drop list. */
          value: function addItem(item) {
            this._unsortedItems.add(item);

            if (this._dropListRef.isDragging()) {
              this._syncItemsWithRef();
            }
          }
          /** Removes an item from the drop list. */

        }, {
          key: "removeItem",
          value: function removeItem(item) {
            this._unsortedItems["delete"](item);

            if (this._dropListRef.isDragging()) {
              this._syncItemsWithRef();
            }
          }
          /** Gets the registered items in the list, sorted by their position in the DOM. */

        }, {
          key: "getSortedItems",
          value: function getSortedItems() {
            return Array.from(this._unsortedItems).sort(function (a, b) {
              var documentPosition = a._dragRef.getVisibleElement().compareDocumentPosition(b._dragRef.getVisibleElement()); // `compareDocumentPosition` returns a bitmask so we have to use a bitwise operator.
              // https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
              // tslint:disable-next-line:no-bitwise


              return documentPosition & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var index = CdkDropList._dropLists.indexOf(this);

            if (index > -1) {
              CdkDropList._dropLists.splice(index, 1);
            }

            if (this._group) {
              this._group._items["delete"](this);
            }

            this._unsortedItems.clear();

            this._dropListRef.dispose();

            this._destroyed.next();

            this._destroyed.complete();
          }
          /** Syncs the inputs of the CdkDropList with the options of the underlying DropListRef. */

        }, {
          key: "_setupInputSyncSubscription",
          value: function _setupInputSyncSubscription(ref) {
            var _this28 = this;

            if (this._dir) {
              this._dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(this._dir.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._destroyed)).subscribe(function (value) {
                return ref.withDirection(value);
              });
            }

            ref.beforeStarted.subscribe(function () {
              var siblings = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(_this28.connectedTo).map(function (drop) {
                if (typeof drop === 'string') {
                  var correspondingDropList = CdkDropList._dropLists.find(function (list) {
                    return list.id === drop;
                  });

                  if (!correspondingDropList && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                    console.warn("CdkDropList could not find connected drop list with id \"".concat(drop, "\""));
                  }

                  return correspondingDropList;
                }

                return drop;
              });

              if (_this28._group) {
                _this28._group._items.forEach(function (drop) {
                  if (siblings.indexOf(drop) === -1) {
                    siblings.push(drop);
                  }
                });
              } // Note that we resolve the scrollable parents here so that we delay the resolution
              // as long as possible, ensuring that the element is in its final place in the DOM.
              // @breaking-change 11.0.0 Remove null check for _scrollDispatcher once it's required.


              if (!_this28._scrollableParentsResolved && _this28._scrollDispatcher) {
                var scrollableParents = _this28._scrollDispatcher.getAncestorScrollContainers(_this28.element).map(function (scrollable) {
                  return scrollable.getElementRef().nativeElement;
                });

                _this28._dropListRef.withScrollableParents(scrollableParents); // Only do this once since it involves traversing the DOM and the parents
                // shouldn't be able to change without the drop list being destroyed.


                _this28._scrollableParentsResolved = true;
              }

              ref.disabled = _this28.disabled;
              ref.lockAxis = _this28.lockAxis;
              ref.sortingDisabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(_this28.sortingDisabled);
              ref.autoScrollDisabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(_this28.autoScrollDisabled);
              ref.connectedTo(siblings.filter(function (drop) {
                return drop && drop !== _this28;
              }).map(function (list) {
                return list._dropListRef;
              })).withOrientation(_this28.orientation);
            });
          }
          /** Handles events from the underlying DropListRef. */

        }, {
          key: "_handleEvents",
          value: function _handleEvents(ref) {
            var _this29 = this;

            ref.beforeStarted.subscribe(function () {
              _this29._syncItemsWithRef();

              _this29._changeDetectorRef.markForCheck();
            });
            ref.entered.subscribe(function (event) {
              _this29.entered.emit({
                container: _this29,
                item: event.item.data,
                currentIndex: event.currentIndex
              });
            });
            ref.exited.subscribe(function (event) {
              _this29.exited.emit({
                container: _this29,
                item: event.item.data
              });

              _this29._changeDetectorRef.markForCheck();
            });
            ref.sorted.subscribe(function (event) {
              _this29.sorted.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                container: _this29,
                item: event.item.data
              });
            });
            ref.dropped.subscribe(function (event) {
              _this29.dropped.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                previousContainer: event.previousContainer.data,
                container: event.container.data,
                item: event.item.data,
                isPointerOverContainer: event.isPointerOverContainer,
                distance: event.distance
              }); // Mark for check since all of these events run outside of change
              // detection and we're not guaranteed for something else to have triggered it.


              _this29._changeDetectorRef.markForCheck();
            });
          }
          /** Assigns the default input values based on a provided config object. */

        }, {
          key: "_assignDefaults",
          value: function _assignDefaults(config) {
            var lockAxis = config.lockAxis,
                draggingDisabled = config.draggingDisabled,
                sortingDisabled = config.sortingDisabled,
                listAutoScrollDisabled = config.listAutoScrollDisabled,
                listOrientation = config.listOrientation;
            this.disabled = draggingDisabled == null ? false : draggingDisabled;
            this.sortingDisabled = sortingDisabled == null ? false : sortingDisabled;
            this.autoScrollDisabled = listAutoScrollDisabled == null ? false : listAutoScrollDisabled;
            this.orientation = listOrientation || 'vertical';

            if (lockAxis) {
              this.lockAxis = lockAxis;
            }
          }
          /** Syncs up the registered drag items with underlying drop list ref. */

        }, {
          key: "_syncItemsWithRef",
          value: function _syncItemsWithRef() {
            this._dropListRef.withItems(this.getSortedItems().map(function (item) {
              return item._dragRef;
            }));
          }
        }, {
          key: "disabled",
          get: function get() {
            return this._disabled || !!this._group && this._group.disabled;
          },
          set: function set(value) {
            // Usually we sync the directive and ref state right before dragging starts, in order to have
            // a single point of failure and to avoid having to use setters for everything. `disabled` is
            // a special case, because it can prevent the `beforeStarted` event from firing, which can lock
            // the user in a disabled state, so we also need to sync it as it's being set.
            this._dropListRef.disabled = this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
          }
        }]);

        return CdkDropList;
      }();

      CdkDropList.ɵfac = function CdkDropList_Factory(t) {
        return new (t || CdkDropList)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DragDrop), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_DROP_LIST_GROUP, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_DRAG_CONFIG, 8));
      };

      CdkDropList.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkDropList,
        selectors: [["", "cdkDropList", ""], ["cdk-drop-list"]],
        hostAttrs: [1, "cdk-drop-list"],
        hostVars: 7,
        hostBindings: function CdkDropList_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cdk-drop-list-disabled", ctx.disabled)("cdk-drop-list-dragging", ctx._dropListRef.isDragging())("cdk-drop-list-receiving", ctx._dropListRef.isReceiving());
          }
        },
        inputs: {
          connectedTo: ["cdkDropListConnectedTo", "connectedTo"],
          id: "id",
          enterPredicate: ["cdkDropListEnterPredicate", "enterPredicate"],
          disabled: ["cdkDropListDisabled", "disabled"],
          sortingDisabled: ["cdkDropListSortingDisabled", "sortingDisabled"],
          autoScrollDisabled: ["cdkDropListAutoScrollDisabled", "autoScrollDisabled"],
          orientation: ["cdkDropListOrientation", "orientation"],
          lockAxis: ["cdkDropListLockAxis", "lockAxis"],
          data: ["cdkDropListData", "data"]
        },
        outputs: {
          dropped: "cdkDropListDropped",
          entered: "cdkDropListEntered",
          exited: "cdkDropListExited",
          sorted: "cdkDropListSorted"
        },
        exportAs: ["cdkDropList"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([// Prevent child drop lists from picking up the same group as their parent.
        {
          provide: CDK_DROP_LIST_GROUP,
          useValue: ɵ0
        }, {
          provide: CDK_DROP_LIST,
          useExisting: CdkDropList
        }])]
      });
      /** Keeps track of the drop lists that are currently on the page. */

      CdkDropList._dropLists = [];

      CdkDropList.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: DragDrop
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }, {
          type: CdkDropListGroup,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [CDK_DROP_LIST_GROUP]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollDispatcher"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [CDK_DRAG_CONFIG]
          }]
        }];
      };

      CdkDropList.propDecorators = {
        connectedTo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListConnectedTo']
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListData']
        }],
        orientation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListOrientation']
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        lockAxis: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListLockAxis']
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListDisabled']
        }],
        sortingDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListSortingDisabled']
        }],
        enterPredicate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListEnterPredicate']
        }],
        autoScrollDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListAutoScrollDisabled']
        }],
        dropped: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDropListDropped']
        }],
        entered: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDropListEntered']
        }],
        exited: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDropListExited']
        }],
        sorted: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDropListSorted']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDropList, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[cdkDropList], cdk-drop-list',
            exportAs: 'cdkDropList',
            providers: [// Prevent child drop lists from picking up the same group as their parent.
            {
              provide: CDK_DROP_LIST_GROUP,
              useValue: ɵ0
            }, {
              provide: CDK_DROP_LIST,
              useExisting: CdkDropList
            }],
            host: {
              'class': 'cdk-drop-list',
              '[id]': 'id',
              '[class.cdk-drop-list-disabled]': 'disabled',
              '[class.cdk-drop-list-dragging]': '_dropListRef.isDragging()',
              '[class.cdk-drop-list-receiving]': '_dropListRef.isReceiving()'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: DragDrop
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }, {
            type: CdkDropListGroup,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [CDK_DROP_LIST_GROUP]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }]
          }, {
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollDispatcher"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [CDK_DRAG_CONFIG]
            }]
          }];
        }, {
          connectedTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListConnectedTo']
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          enterPredicate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListEnterPredicate']
          }],
          dropped: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDropListDropped']
          }],
          entered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDropListEntered']
          }],
          exited: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDropListExited']
          }],
          sorted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDropListSorted']
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListDisabled']
          }],
          sortingDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListSortingDisabled']
          }],
          autoScrollDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListAutoScrollDisabled']
          }],
          orientation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListOrientation']
          }],
          lockAxis: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListLockAxis']
          }],
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListData']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Injection token that can be used to reference instances of `CdkDragHandle`. It serves as
       * alternative token to the actual `CdkDragHandle` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */


      var CDK_DRAG_HANDLE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CdkDragHandle');
      /** Handle that can be used to drag a CdkDrag instance. */

      var CdkDragHandle = /*#__PURE__*/function () {
        function CdkDragHandle(element, parentDrag) {
          _classCallCheck(this, CdkDragHandle);

          this.element = element;
          /** Emits when the state of the handle has changed. */

          this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          this._disabled = false;
          this._parentDrag = parentDrag;
        }
        /** Whether starting to drag through this handle is disabled. */


        _createClass(CdkDragHandle, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._stateChanges.complete();
          }
        }, {
          key: "disabled",
          get: function get() {
            return this._disabled;
          },
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);

            this._stateChanges.next(this);
          }
        }]);

        return CdkDragHandle;
      }();

      CdkDragHandle.ɵfac = function CdkDragHandle_Factory(t) {
        return new (t || CdkDragHandle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_DRAG_PARENT, 12));
      };

      CdkDragHandle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkDragHandle,
        selectors: [["", "cdkDragHandle", ""]],
        hostAttrs: [1, "cdk-drag-handle"],
        inputs: {
          disabled: ["cdkDragHandleDisabled", "disabled"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: CDK_DRAG_HANDLE,
          useExisting: CdkDragHandle
        }])]
      });

      CdkDragHandle.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [CDK_DRAG_PARENT]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }]
        }];
      };

      CdkDragHandle.propDecorators = {
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragHandleDisabled']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDragHandle, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[cdkDragHandle]',
            host: {
              'class': 'cdk-drag-handle'
            },
            providers: [{
              provide: CDK_DRAG_HANDLE,
              useExisting: CdkDragHandle
            }]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [CDK_DRAG_PARENT]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }]
          }];
        }, {
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragHandleDisabled']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Injection token that can be used to reference instances of `CdkDragPlaceholder`. It serves as
       * alternative token to the actual `CdkDragPlaceholder` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */


      var CDK_DRAG_PLACEHOLDER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CdkDragPlaceholder');
      /**
       * Element that will be used as a template for the placeholder of a CdkDrag when
       * it is being dragged. The placeholder is displayed in place of the element being dragged.
       */

      var CdkDragPlaceholder = function CdkDragPlaceholder(templateRef) {
        _classCallCheck(this, CdkDragPlaceholder);

        this.templateRef = templateRef;
      };

      CdkDragPlaceholder.ɵfac = function CdkDragPlaceholder_Factory(t) {
        return new (t || CdkDragPlaceholder)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
      };

      CdkDragPlaceholder.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkDragPlaceholder,
        selectors: [["ng-template", "cdkDragPlaceholder", ""]],
        inputs: {
          data: "data"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: CDK_DRAG_PLACEHOLDER,
          useExisting: CdkDragPlaceholder
        }])]
      });

      CdkDragPlaceholder.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      };

      CdkDragPlaceholder.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDragPlaceholder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'ng-template[cdkDragPlaceholder]',
            providers: [{
              provide: CDK_DRAG_PLACEHOLDER,
              useExisting: CdkDragPlaceholder
            }]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
          }];
        }, {
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Injection token that can be used to reference instances of `CdkDragPreview`. It serves as
       * alternative token to the actual `CdkDragPreview` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */


      var CDK_DRAG_PREVIEW = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CdkDragPreview');
      /**
       * Element that will be used as a template for the preview
       * of a CdkDrag when it is being dragged.
       */

      var CdkDragPreview = /*#__PURE__*/function () {
        function CdkDragPreview(templateRef) {
          _classCallCheck(this, CdkDragPreview);

          this.templateRef = templateRef;
          this._matchSize = false;
        }
        /** Whether the preview should preserve the same size as the item that is being dragged. */


        _createClass(CdkDragPreview, [{
          key: "matchSize",
          get: function get() {
            return this._matchSize;
          },
          set: function set(value) {
            this._matchSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
          }
        }]);

        return CdkDragPreview;
      }();

      CdkDragPreview.ɵfac = function CdkDragPreview_Factory(t) {
        return new (t || CdkDragPreview)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
      };

      CdkDragPreview.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkDragPreview,
        selectors: [["ng-template", "cdkDragPreview", ""]],
        inputs: {
          matchSize: "matchSize",
          data: "data"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: CDK_DRAG_PREVIEW,
          useExisting: CdkDragPreview
        }])]
      });

      CdkDragPreview.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      };

      CdkDragPreview.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        matchSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDragPreview, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'ng-template[cdkDragPreview]',
            providers: [{
              provide: CDK_DRAG_PREVIEW,
              useExisting: CdkDragPreview
            }]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
          }];
        }, {
          matchSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Element that can be moved inside a CdkDropList container. */


      var CdkDrag = /*#__PURE__*/function () {
        function CdkDrag(
        /** Element that the draggable is attached to. */
        element,
        /** Droppable container that the draggable is a part of. */
        dropContainer, _document, _ngZone, _viewContainerRef, config, _dir, dragDrop, _changeDetectorRef, _selfHandle) {
          var _this30 = this;

          _classCallCheck(this, CdkDrag);

          this.element = element;
          this.dropContainer = dropContainer;
          this._document = _document;
          this._ngZone = _ngZone;
          this._viewContainerRef = _viewContainerRef;
          this._dir = _dir;
          this._changeDetectorRef = _changeDetectorRef;
          this._selfHandle = _selfHandle;
          this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /** Emits when the user starts dragging the item. */

          this.started = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /** Emits when the user has released a drag item, before any animations have started. */

          this.released = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /** Emits when the user stops dragging an item in the container. */

          this.ended = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /** Emits when the user has moved the item into a new container. */

          this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /** Emits when the user removes the item its container by dragging it into another container. */

          this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /** Emits when the user drops the item inside a container. */

          this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * Emits as the user is dragging the item. Use with caution,
           * because this event will fire for every pixel that the user has dragged.
           */

          this.moved = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](function (observer) {
            var subscription = _this30._dragRef.moved.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (movedEvent) {
              return {
                source: _this30,
                pointerPosition: movedEvent.pointerPosition,
                event: movedEvent.event,
                delta: movedEvent.delta,
                distance: movedEvent.distance
              };
            })).subscribe(observer);

            return function () {
              subscription.unsubscribe();
            };
          });
          this._dragRef = dragDrop.createDrag(element, {
            dragStartThreshold: config && config.dragStartThreshold != null ? config.dragStartThreshold : 5,
            pointerDirectionChangeThreshold: config && config.pointerDirectionChangeThreshold != null ? config.pointerDirectionChangeThreshold : 5,
            zIndex: config === null || config === void 0 ? void 0 : config.zIndex
          });
          this._dragRef.data = this;

          if (config) {
            this._assignDefaults(config);
          } // Note that usually the container is assigned when the drop list is picks up the item, but in
          // some cases (mainly transplanted views with OnPush, see #18341) we may end up in a situation
          // where there are no items on the first change detection pass, but the items get picked up as
          // soon as the user triggers another pass by dragging. This is a problem, because the item would
          // have to switch from standalone mode to drag mode in the middle of the dragging sequence which
          // is too late since the two modes save different kinds of information. We work around it by
          // assigning the drop container both from here and the list.


          if (dropContainer) {
            this._dragRef._withDropContainer(dropContainer._dropListRef);

            dropContainer.addItem(this);
          }

          this._syncInputs(this._dragRef);

          this._handleEvents(this._dragRef);
        }
        /** Whether starting to drag this element is disabled. */


        _createClass(CdkDrag, [{
          key: "getPlaceholderElement",

          /**
           * Returns the element that is being used as a placeholder
           * while the current element is being dragged.
           */
          value: function getPlaceholderElement() {
            return this._dragRef.getPlaceholderElement();
          }
          /** Returns the root draggable element. */

        }, {
          key: "getRootElement",
          value: function getRootElement() {
            return this._dragRef.getRootElement();
          }
          /** Resets a standalone drag item to its initial position. */

        }, {
          key: "reset",
          value: function reset() {
            this._dragRef.reset();
          }
          /**
           * Gets the pixel coordinates of the draggable outside of a drop container.
           */

        }, {
          key: "getFreeDragPosition",
          value: function getFreeDragPosition() {
            return this._dragRef.getFreeDragPosition();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this31 = this;

            // We need to wait for the zone to stabilize, in order for the reference
            // element to be in the proper place in the DOM. This is mostly relevant
            // for draggable elements inside portals since they get stamped out in
            // their original DOM position and then they get transferred to the portal.
            this._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._destroyed)).subscribe(function () {
              _this31._updateRootElement(); // Listen for any newly-added handles.


              _this31._handles.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(_this31._handles), // Sync the new handles with the DragRef.
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (handles) {
                var childHandleElements = handles.filter(function (handle) {
                  return handle._parentDrag === _this31;
                }).map(function (handle) {
                  return handle.element;
                }); // Usually handles are only allowed to be a descendant of the drag element, but if
                // the consumer defined a different drag root, we should allow the drag element
                // itself to be a handle too.

                if (_this31._selfHandle && _this31.rootElementSelector) {
                  childHandleElements.push(_this31.element);
                }

                _this31._dragRef.withHandles(childHandleElements);
              }), // Listen if the state of any of the handles changes.
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (handles) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"]).apply(void 0, _toConsumableArray(handles.map(function (item) {
                  return item._stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(item));
                })));
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(_this31._destroyed)).subscribe(function (handleInstance) {
                // Enabled/disable the handle that changed in the DragRef.
                var dragRef = _this31._dragRef;
                var handle = handleInstance.element.nativeElement;
                handleInstance.disabled ? dragRef.disableHandle(handle) : dragRef.enableHandle(handle);
              });

              if (_this31.freeDragPosition) {
                _this31._dragRef.setFreeDragPosition(_this31.freeDragPosition);
              }
            });
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var rootSelectorChange = changes['rootElementSelector'];
            var positionChange = changes['freeDragPosition']; // We don't have to react to the first change since it's being
            // handled in `ngAfterViewInit` where it needs to be deferred.

            if (rootSelectorChange && !rootSelectorChange.firstChange) {
              this._updateRootElement();
            } // Skip the first change since it's being handled in `ngAfterViewInit`.


            if (positionChange && !positionChange.firstChange && this.freeDragPosition) {
              this._dragRef.setFreeDragPosition(this.freeDragPosition);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.dropContainer) {
              this.dropContainer.removeItem(this);
            }

            this._destroyed.next();

            this._destroyed.complete();

            this._dragRef.dispose();
          }
          /** Syncs the root element with the `DragRef`. */

        }, {
          key: "_updateRootElement",
          value: function _updateRootElement() {
            var element = this.element.nativeElement;
            var rootElement = this.rootElementSelector ? getClosestMatchingAncestor(element, this.rootElementSelector) : element;

            if (rootElement && rootElement.nodeType !== this._document.ELEMENT_NODE && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw Error("cdkDrag must be attached to an element node. " + "Currently attached to \"".concat(rootElement.nodeName, "\"."));
            }

            this._dragRef.withRootElement(rootElement || element);
          }
          /** Gets the boundary element, based on the `boundaryElement` value. */

        }, {
          key: "_getBoundaryElement",
          value: function _getBoundaryElement() {
            var boundary = this.boundaryElement;

            if (!boundary) {
              return null;
            }

            if (typeof boundary === 'string') {
              return getClosestMatchingAncestor(this.element.nativeElement, boundary);
            }

            var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(boundary);

            if ((typeof ngDevMode === 'undefined' || ngDevMode) && !element.contains(this.element.nativeElement)) {
              throw Error('Draggable element is not inside of the node passed into cdkDragBoundary.');
            }

            return element;
          }
          /** Syncs the inputs of the CdkDrag with the options of the underlying DragRef. */

        }, {
          key: "_syncInputs",
          value: function _syncInputs(ref) {
            var _this32 = this;

            ref.beforeStarted.subscribe(function () {
              if (!ref.isDragging()) {
                var dir = _this32._dir;
                var dragStartDelay = _this32.dragStartDelay;
                var placeholder = _this32._placeholderTemplate ? {
                  template: _this32._placeholderTemplate.templateRef,
                  context: _this32._placeholderTemplate.data,
                  viewContainer: _this32._viewContainerRef
                } : null;
                var preview = _this32._previewTemplate ? {
                  template: _this32._previewTemplate.templateRef,
                  context: _this32._previewTemplate.data,
                  matchSize: _this32._previewTemplate.matchSize,
                  viewContainer: _this32._viewContainerRef
                } : null;
                ref.disabled = _this32.disabled;
                ref.lockAxis = _this32.lockAxis;
                ref.dragStartDelay = typeof dragStartDelay === 'object' && dragStartDelay ? dragStartDelay : Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceNumberProperty"])(dragStartDelay);
                ref.constrainPosition = _this32.constrainPosition;
                ref.previewClass = _this32.previewClass;
                ref.withBoundaryElement(_this32._getBoundaryElement()).withPlaceholderTemplate(placeholder).withPreviewTemplate(preview);

                if (dir) {
                  ref.withDirection(dir.value);
                }
              }
            });
          }
          /** Handles the events from the underlying `DragRef`. */

        }, {
          key: "_handleEvents",
          value: function _handleEvents(ref) {
            var _this33 = this;

            ref.started.subscribe(function () {
              _this33.started.emit({
                source: _this33
              }); // Since all of these events run outside of change detection,
              // we need to ensure that everything is marked correctly.


              _this33._changeDetectorRef.markForCheck();
            });
            ref.released.subscribe(function () {
              _this33.released.emit({
                source: _this33
              });
            });
            ref.ended.subscribe(function (event) {
              _this33.ended.emit({
                source: _this33,
                distance: event.distance
              }); // Since all of these events run outside of change detection,
              // we need to ensure that everything is marked correctly.


              _this33._changeDetectorRef.markForCheck();
            });
            ref.entered.subscribe(function (event) {
              _this33.entered.emit({
                container: event.container.data,
                item: _this33,
                currentIndex: event.currentIndex
              });
            });
            ref.exited.subscribe(function (event) {
              _this33.exited.emit({
                container: event.container.data,
                item: _this33
              });
            });
            ref.dropped.subscribe(function (event) {
              _this33.dropped.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                previousContainer: event.previousContainer.data,
                container: event.container.data,
                isPointerOverContainer: event.isPointerOverContainer,
                item: _this33,
                distance: event.distance
              });
            });
          }
          /** Assigns the default input values based on a provided config object. */

        }, {
          key: "_assignDefaults",
          value: function _assignDefaults(config) {
            var lockAxis = config.lockAxis,
                dragStartDelay = config.dragStartDelay,
                constrainPosition = config.constrainPosition,
                previewClass = config.previewClass,
                boundaryElement = config.boundaryElement,
                draggingDisabled = config.draggingDisabled,
                rootElementSelector = config.rootElementSelector;
            this.disabled = draggingDisabled == null ? false : draggingDisabled;
            this.dragStartDelay = dragStartDelay || 0;

            if (lockAxis) {
              this.lockAxis = lockAxis;
            }

            if (constrainPosition) {
              this.constrainPosition = constrainPosition;
            }

            if (previewClass) {
              this.previewClass = previewClass;
            }

            if (boundaryElement) {
              this.boundaryElement = boundaryElement;
            }

            if (rootElementSelector) {
              this.rootElementSelector = rootElementSelector;
            }
          }
        }, {
          key: "disabled",
          get: function get() {
            return this._disabled || this.dropContainer && this.dropContainer.disabled;
          },
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
            this._dragRef.disabled = this._disabled;
          }
        }]);

        return CdkDrag;
      }();

      CdkDrag.ɵfac = function CdkDrag_Factory(t) {
        return new (t || CdkDrag)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_DROP_LIST, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_DRAG_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DragDrop), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_DRAG_HANDLE, 10));
      };

      CdkDrag.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkDrag,
        selectors: [["", "cdkDrag", ""]],
        contentQueries: function CdkDrag_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CDK_DRAG_PREVIEW, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CDK_DRAG_PLACEHOLDER, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CDK_DRAG_HANDLE, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._previewTemplate = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._placeholderTemplate = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._handles = _t);
          }
        },
        hostAttrs: [1, "cdk-drag"],
        hostVars: 4,
        hostBindings: function CdkDrag_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cdk-drag-disabled", ctx.disabled)("cdk-drag-dragging", ctx._dragRef.isDragging());
          }
        },
        inputs: {
          disabled: ["cdkDragDisabled", "disabled"],
          dragStartDelay: ["cdkDragStartDelay", "dragStartDelay"],
          lockAxis: ["cdkDragLockAxis", "lockAxis"],
          constrainPosition: ["cdkDragConstrainPosition", "constrainPosition"],
          previewClass: ["cdkDragPreviewClass", "previewClass"],
          boundaryElement: ["cdkDragBoundary", "boundaryElement"],
          rootElementSelector: ["cdkDragRootElement", "rootElementSelector"],
          data: ["cdkDragData", "data"],
          freeDragPosition: ["cdkDragFreeDragPosition", "freeDragPosition"]
        },
        outputs: {
          started: "cdkDragStarted",
          released: "cdkDragReleased",
          ended: "cdkDragEnded",
          entered: "cdkDragEntered",
          exited: "cdkDragExited",
          dropped: "cdkDragDropped",
          moved: "cdkDragMoved"
        },
        exportAs: ["cdkDrag"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: CDK_DRAG_PARENT,
          useExisting: CdkDrag
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });

      CdkDrag.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [CDK_DROP_LIST]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [CDK_DRAG_CONFIG]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }, {
          type: DragDrop
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: CdkDragHandle,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [CDK_DRAG_HANDLE]
          }]
        }];
      };

      CdkDrag.propDecorators = {
        _handles: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [CDK_DRAG_HANDLE, {
            descendants: true
          }]
        }],
        _previewTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [CDK_DRAG_PREVIEW]
        }],
        _placeholderTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [CDK_DRAG_PLACEHOLDER]
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragData']
        }],
        lockAxis: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragLockAxis']
        }],
        rootElementSelector: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragRootElement']
        }],
        boundaryElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragBoundary']
        }],
        dragStartDelay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragStartDelay']
        }],
        freeDragPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragFreeDragPosition']
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragDisabled']
        }],
        constrainPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragConstrainPosition']
        }],
        previewClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragPreviewClass']
        }],
        started: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDragStarted']
        }],
        released: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDragReleased']
        }],
        ended: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDragEnded']
        }],
        entered: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDragEntered']
        }],
        exited: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDragExited']
        }],
        dropped: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDragDropped']
        }],
        moved: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDragMoved']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDrag, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[cdkDrag]',
            exportAs: 'cdkDrag',
            host: {
              'class': 'cdk-drag',
              '[class.cdk-drag-disabled]': 'disabled',
              '[class.cdk-drag-dragging]': '_dragRef.isDragging()'
            },
            providers: [{
              provide: CDK_DRAG_PARENT,
              useExisting: CdkDrag
            }]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [CDK_DROP_LIST]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [CDK_DRAG_CONFIG]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }, {
            type: DragDrop
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: CdkDragHandle,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [CDK_DRAG_HANDLE]
            }]
          }];
        }, {
          started: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragStarted']
          }],
          released: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragReleased']
          }],
          ended: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragEnded']
          }],
          entered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragEntered']
          }],
          exited: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragExited']
          }],
          dropped: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragDropped']
          }],
          moved: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragMoved']
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragDisabled']
          }],
          dragStartDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragStartDelay']
          }],
          lockAxis: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragLockAxis']
          }],
          constrainPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragConstrainPosition']
          }],
          previewClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragPreviewClass']
          }],
          boundaryElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragBoundary']
          }],
          rootElementSelector: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragRootElement']
          }],
          _handles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [CDK_DRAG_HANDLE, {
              descendants: true
            }]
          }],
          _previewTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [CDK_DRAG_PREVIEW]
          }],
          _placeholderTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [CDK_DRAG_PLACEHOLDER]
          }],
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragData']
          }],
          freeDragPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragFreeDragPosition']
          }]
        });
      })();
      /** Gets the closest ancestor of an element that matches a selector. */


      function getClosestMatchingAncestor(element, selector) {
        var currentElement = element.parentElement;

        while (currentElement) {
          // IE doesn't support `matches` so we have to fall back to `msMatchesSelector`.
          if (currentElement.matches ? currentElement.matches(selector) : currentElement.msMatchesSelector(selector)) {
            return currentElement;
          }

          currentElement = currentElement.parentElement;
        }

        return null;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var DragDropModule = function DragDropModule() {
        _classCallCheck(this, DragDropModule);
      };

      DragDropModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: DragDropModule
      });
      DragDropModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function DragDropModule_Factory(t) {
          return new (t || DragDropModule)();
        },
        providers: [DragDrop],
        imports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkScrollableModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DragDropModule, {
          declarations: function declarations() {
            return [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder];
          },
          exports: function exports() {
            return [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkScrollableModule"], CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DragDropModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder],
            exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkScrollableModule"], CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder],
            providers: [DragDrop]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=drag-drop.js.map

      /***/

    },

    /***/
    "lvtZ":
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/studycreation/textblock-editing/textblock-editing.component.html ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function lvtZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<a mat-fab class=\"greenButton\" (click)=\"onAddTextBlock()\" style=\"display: block; margin: auto;\">\r\n    <mat-icon>add</mat-icon>\r\n</a><br>\r\n<div *ngFor=\"let textblock of textblocks; let index = index\">\r\n    <mat-card>\r\n        <mat-card-title>\r\n            <mat-form-field class=\"example-full-width\" style=\"width: 50%; font-size:18px\">\r\n                <input matInput placeholder=\"Interne Bezeichnung\" [formControl]=\"this.formControls[index][0]\"\r\n                    [errorStateMatcher]=\"this.matcher\" />\r\n                <mat-hint style=\"font-size: 15px;color: #f44336;\"\r\n                    *ngIf=\"this.formControls[index][0].hasError('required')\">\r\n                    Feld\r\n                    darf nicht leer sein.</mat-hint>\r\n            </mat-form-field>\r\n            &nbsp;&nbsp;\r\n            <mat-form-field class=\"example-full-width\" style=\"width: 50%; font-size:18px\">\r\n                <input matInput placeholder=\"Anzeigename\" [(ngModel)]=\"textblock.displayName\" />\r\n            </mat-form-field>\r\n\r\n            <button mat-icon-button class=\"redButton\" (click)=\"removeFromStudy(index, textblock.id)\">\r\n                <mat-icon class=\"trashCan\">delete</mat-icon>\r\n            </button>\r\n        </mat-card-title>\r\n        <mat-form-field class=\"textblock-textarea\">\r\n            <mat-label>Text</mat-label>\r\n            <textarea matInput [formControl]=\"this.formControls[index][1]\"\r\n                [errorStateMatcher]=\"this.matcher\"></textarea>\r\n            <mat-hint style=\"font-size: 15px;color: #f44336;\" *ngIf=\"this.formControls[index][1].hasError('required')\">\r\n                Feld\r\n                darf nicht leer sein.</mat-hint>\r\n        </mat-form-field>\r\n        <br>\r\n    </mat-card>\r\n    <br>\r\n</div>";
      /***/
    },

    /***/
    "nyDt":
    /*!************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/studycreation/toolboxes/vibrationpattern-toolbox/vibrationpattern-toolbox.component.html ***!
      \************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function nyDt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mat-card style=\"background-color: #212121;\"><br>\r\n    <mat-card-title>Werkzeugkasten</mat-card-title>\r\n    <div style=\"margin-top: 10px;\">\r\n        <mat-card-subtitle>Vibrationen oder Pausen per Drag and Drog links einfügen</mat-card-subtitle>\r\n    </div>\r\n    <mat-chip-list></mat-chip-list>\r\n    <mat-card-content>\r\n        <mat-divider></mat-divider>\r\n        <br />\r\n        <div cdkDropList id=\"toolbox\" [cdkDropListConnectedTo]=\"connectedLists\" [cdkDropListData]=\"toolbox\">\r\n            <div *ngFor=\"let tool of toolbox\">\r\n                <div *ngIf=\"isVibration(tool); then showVibration; else showPause\"></div>\r\n                <ng-template #showVibration>\r\n                    <mat-chip style=\"background-color: #6f8aab; cursor: move;\" cdkDrag>Vibration</mat-chip>\r\n                </ng-template>\r\n                <ng-template #showPause>\r\n                    <mat-chip style=\"background-color: #ba624f; cursor: move;\" cdkDrag>Pause</mat-chip>\r\n                </ng-template>\r\n                <br /><br />\r\n            </div>\r\n        </div>\r\n    </mat-card-content>\r\n</mat-card>";
      /***/
    },

    /***/
    "qQFY":
    /*!***********************************************************************************************!*\
      !*** ./src/app/studycreation/vibrationpattern-editing/vibrationpattern-editing.component.css ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function qQFY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".vibration-container {\r\n    height: 91vh;\r\n}\r\n\r\n.toolbox {\r\n    width: 250px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    overflow-x: hidden;\r\n    right: 15px;\r\n}\r\n\r\n.mainContent {\r\n    margin-right: 265px;\r\n}\r\n\r\nmat-chip {\r\n    margin: 5px;\r\n}\r\n\r\n.vibration-card {\r\n    background-color:#6f8aab;\r\n    cursor: move;\r\n    font-size: 16px;\r\n}\r\n\r\n.pause-card {\r\n    background-color:#ba624f;\r\n    cursor: move;\r\n    font-size: 16px;\r\n}\r\n\r\n.vibrationpatternList {\r\n    border-style: dashed;\r\n    border-width: 5px;\r\n    border-radius: 10px;\r\n    font-size: large;\r\n    padding: 15px;\r\n}\r\n\r\n.droplistSubtitle {\r\n    margin-top: 10px;\r\n    font-size: 14px;\r\n    text-align: center;\r\n}\r\n\r\n.greenButton {\r\n    background-color: #3e753b;\r\n    color: white;\r\n}\r\n\r\n.redButton {\r\n    color: #6D0000;\r\n    background-color: #FF000000;\r\n}\r\n\r\n.trashCan {\r\n    font-size: 40px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZHljcmVhdGlvbi92aWJyYXRpb25wYXR0ZXJuLWVkaXRpbmcvdmlicmF0aW9ucGF0dGVybi1lZGl0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvc3R1ZHljcmVhdGlvbi92aWJyYXRpb25wYXR0ZXJuLWVkaXRpbmcvdmlicmF0aW9ucGF0dGVybi1lZGl0aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlicmF0aW9uLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDkxdmg7XHJcbn1cclxuXHJcbi50b29sYm94IHtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICByaWdodDogMTVweDtcclxufVxyXG5cclxuLm1haW5Db250ZW50IHtcclxuICAgIG1hcmdpbi1yaWdodDogMjY1cHg7XHJcbn1cclxuXHJcbm1hdC1jaGlwIHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4udmlicmF0aW9uLWNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNmY4YWFiO1xyXG4gICAgY3Vyc29yOiBtb3ZlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4ucGF1c2UtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNiYTYyNGY7XHJcbiAgICBjdXJzb3I6IG1vdmU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi52aWJyYXRpb25wYXR0ZXJuTGlzdCB7XHJcbiAgICBib3JkZXItc3R5bGU6IGRhc2hlZDtcclxuICAgIGJvcmRlci13aWR0aDogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG4uZHJvcGxpc3RTdWJ0aXRsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZ3JlZW5CdXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNlNzUzYjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnJlZEJ1dHRvbiB7XHJcbiAgICBjb2xvcjogIzZEMDAwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjAwMDAwMDtcclxufVxyXG5cclxuLnRyYXNoQ2FuIHtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "rsRg":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/studycreation/section-editing/section-editing.component.html ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function rsRg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"vibration-contianer\">\r\n    <div class=\"toolbox\">\r\n        <app-studyobject-toolbox [toolbox]=\"this.toolbox\" [playgroundCount]=\"sections.length\">\r\n        </app-studyobject-toolbox>\r\n    </div>\r\n\r\n\r\n    <div class=\"mainContent\">\r\n        <a mat-fab class=\"greenButton\" (click)=\"onAddSection()\" style=\"display: block; margin: auto;\">\r\n            <mat-icon>add</mat-icon>\r\n        </a><br>\r\n        <div *ngFor=\"let section of sections; let index = index\">\r\n            <mat-card>\r\n                <mat-card-title>\r\n                    <mat-form-field class=\"example-full-width\" style=\"width: 50%; font-size:18px\">\r\n                        <input matInput placeholder=\"Bezeichnung\" [(ngModel)]=\"section.name\" />\r\n                    </mat-form-field>&nbsp;&nbsp;\r\n                    <mat-form-field style=\"width: 20%; font-size:18px\">\r\n                        <mat-label>Randomisierung</mat-label>\r\n                        <mat-select [(value)]=\"section.randomStrategy\">\r\n                            <mat-option *ngFor=\"let randomizer of randomizers; let index = index\" [value]=\"index\">\r\n                                {{ this.studywrapper.getRandomizerName(index) }}\r\n                            </mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field><button mat-icon-button class=\"redButton\" (click)=\"deleteSection(index, section.id)\">\r\n                        <mat-icon class=\"trashCan\">delete</mat-icon>\r\n                    </button>\r\n                </mat-card-title>\r\n                Für das Ergebnis relevant? &nbsp;&nbsp; Nein &nbsp;\r\n                <mat-slide-toggle [(ngModel)]=\"section.resultRelevant\"></mat-slide-toggle>&nbsp;&nbsp;&nbsp;Ja<br>\r\n                <div cdkDropList class=\"studyObjectList\" id=\"studyObjectList{{ index }}\"\r\n                    [cdkDropListData]=\"section.sectionElements\" (cdkDropListDropped)=\"onDrop($event, section)\">\r\n                    <div *ngFor=\"let ref of section.sectionElements; let index = index\">\r\n                        <mat-card cdkDrag\r\n                            [style.background-color]=\"this.colorService.getStudyObjectColor(findSectionElementById(ref.ID))\"\r\n                            style=\"cursor: move; font-size:18px\">{{(index+1) + \". \"+\r\n                findSectionElementById(ref.ID).name\r\n              }}&nbsp;&nbsp;&nbsp;&nbsp;<mat-slide-toggle [(ngModel)]=\"ref.isFixed\">Fixiert</mat-slide-toggle><button\r\n                                mat-icon-button class=\"redButton\"\r\n                                (click)=\"removeFromArray(section.sectionElements, index)\">\r\n                                <mat-icon class=\"trashCan\">delete</mat-icon>\r\n                            </button>\r\n                        </mat-card>\r\n                        <div *ngIf=\"index+1 != section.sectionElements.length\">\r\n                            <br />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"droplistSubtitle\">Hier Elemente aus dem Wergzeugkasten einfügen, um eine Abfolge\r\n                        festzulegen.</div>\r\n                </div>\r\n            </mat-card>\r\n            <br>\r\n        </div>\r\n    </div>\r\n</div>";
      /***/
    },

    /***/
    "sbJu":
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/studycreation/sequence-editing/sequence-editing.component.html ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function sbJu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"vibration-contianer\">\r\n    <div class=\"toolbox\">\r\n        <app-studyobject-toolbox [toolbox]=\"this.toolbox\" [playgroundCount]=\"1\"></app-studyobject-toolbox>\r\n    </div>\r\n\r\n    <div class=\"mainContent\">\r\n        <mat-card>\r\n            \r\n                Studienablauf&nbsp;&nbsp;\r\n                <mat-form-field style=\"width:20%; font-size:18px\">\r\n                    <mat-label>Randomisierung</mat-label>\r\n                    <mat-select [(value)]=\"this.studywrapper.study.randomStrategy\">\r\n                        <mat-option *ngFor=\"let randomizer of randomizers; let index = index\" [value]=\"index\">\r\n                            {{ this.studywrapper.getRandomizerName(index) }}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n           \r\n            <div cdkDropList class=\"studyObjectList\" id=\"studyObjectList0\"\r\n                [cdkDropListData]=\"this.studywrapper.study.refSections\" (cdkDropListDropped)=\"onDrop($event)\">\r\n                <div *ngFor=\"let ref of this.studywrapper.study.refSections; let index = index\">\r\n                    <mat-card cdkDrag [style.background-color]=\"this.colorService.getStudyObjectColor(findSectionById(ref.ID))\" style=\"cursor: move;\">{{(index+1) + \". \" +\r\n                findSectionById(ref.ID).name\r\n              }}&nbsp;&nbsp;&nbsp;&nbsp;<mat-slide-toggle [(ngModel)]=\"ref.isFixed\">Fixiert</mat-slide-toggle><button\r\n                            mat-icon-button class=\"redButton\"\r\n                            (click)=\"removeFromArray(this.studywrapper.study.refSections, index)\">\r\n                            <mat-icon class=\"trashCan\">delete</mat-icon>\r\n                        </button>\r\n                    </mat-card>\r\n                    <div *ngIf=\"index+1 != this.studywrapper.study.refSections.length\">\r\n                        <br />\r\n                    </div>\r\n                </div>\r\n                <div class=\"droplistSubtitle\">Hier Elemente aus dem Wergzeugkasten einfügen, um eine Abfolge festzulegen.</div>\r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n    <br />\r\n</div>";
      /***/
    },

    /***/
    "wdvh":
    /*!*********************************************************************************!*\
      !*** ./src/app/studycreation/textblock-editing/textblock-editing.component.css ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function wdvh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".textblock-textarea {\r\n    width: 100%;\r\n  }\r\n\r\n  .greenButton {\r\n    background-color: #3e753b;\r\n    color: white;\r\n}\r\n\r\n  .redButton {\r\n  color: #6D0000;\r\n  background-color: #FF000000;\r\n}\r\n\r\n  .trashCan {\r\n  font-size: 40px;\r\n}\r\n  \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZHljcmVhdGlvbi90ZXh0YmxvY2stZWRpdGluZy90ZXh0YmxvY2stZWRpdGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztFQUNiOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0VBRUE7RUFDRSxjQUFjO0VBQ2QsMkJBQTJCO0FBQzdCOztFQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3N0dWR5Y3JlYXRpb24vdGV4dGJsb2NrLWVkaXRpbmcvdGV4dGJsb2NrLWVkaXRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0YmxvY2stdGV4dGFyZWEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuZ3JlZW5CdXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNlNzUzYjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnJlZEJ1dHRvbiB7XHJcbiAgY29sb3I6ICM2RDAwMDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMDAwMDAwO1xyXG59XHJcblxyXG4udHJhc2hDYW4ge1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG4gIFxyXG4iXX0= */";
      /***/
    },

    /***/
    "ycu6":
    /*!*****************************************************************************!*\
      !*** ./src/app/studycreation/general-editing/general-editing.component.css ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function ycu6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".textblock-textarea {\r\n    width: 100%;\r\n}\r\n\r\n.greenButton {\r\n    background-color: #3e753b;\r\n    color: white;\r\n}\r\n\r\n.redButton {\r\n    color: #6D0000;\r\n    background-color: #FF000000;\r\n}\r\n\r\n.trashCan {\r\n    font-size: 40px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZHljcmVhdGlvbi9nZW5lcmFsLWVkaXRpbmcvZ2VuZXJhbC1lZGl0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvc3R1ZHljcmVhdGlvbi9nZW5lcmFsLWVkaXRpbmcvZ2VuZXJhbC1lZGl0aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dGJsb2NrLXRleHRhcmVhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZ3JlZW5CdXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNlNzUzYjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnJlZEJ1dHRvbiB7XHJcbiAgICBjb2xvcjogIzZEMDAwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjAwMDAwMDtcclxufVxyXG5cclxuLnRyYXNoQ2FuIHtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "ypjz":
    /*!*********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/studycreation/question-editing/question-selection-dialog/question-selection-dialog.component.html ***!
      \*********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ypjz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h2 mat-dialog-title>Fragetyp wählen</h2>\r\n<mat-dialog-content style=\"text-align: center;\">\r\n    <button mat-flat-button color=\"#3e753b\" (click)=\"onButtonClick(0)\">Datum/Zeit</button><br>\r\n    <button mat-flat-button color=\"#3e753b\" (click)=\"onButtonClick(1)\">Lineare Skala</button><br>\r\n    <button mat-flat-button color=\"#3e753b\" (click)=\"onButtonClick(2)\">Multiple Choice</button><br>\r\n    <button mat-flat-button color=\"#3e753b\" (click)=\"onButtonClick(3)\">Freitext</button><br>\r\n</mat-dialog-content>\r\n";
      /***/
    },

    /***/
    "zVIr":
    /*!**********************************************************************************************!*\
      !*** ./src/app/studycreation/toolboxes/studyobject-toolbox/studyobject-toolbox.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: StudyObjectToolboxComponent */

    /***/
    function zVIr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StudyObjectToolboxComponent", function () {
        return StudyObjectToolboxComponent;
      });
      /* harmony import */


      var _raw_loader_studyobject_toolbox_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./studyobject-toolbox.component.html */
      "HrJD");
      /* harmony import */


      var _studyobject_toolbox_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./studyobject-toolbox.component.css */
      "fPCq");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _src_app_Model_Study_StudyObjects_Questions_DateQuestion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @src/app/Model/Study/StudyObjects/Questions/DateQuestion */
      "lGoz");
      /* harmony import */


      var _src_app_Model_Study_StudyObjects_Questions_LinearScaleQuestion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @src/app/Model/Study/StudyObjects/Questions/LinearScaleQuestion */
      "Tcgm");
      /* harmony import */


      var _src_app_Model_Study_StudyObjects_Questions_MultipleChoiceQuestion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @src/app/Model/Study/StudyObjects/Questions/MultipleChoiceQuestion */
      "MsGT");
      /* harmony import */


      var _src_app_Model_Study_StudyObjects_Questions_TextQuestion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @src/app/Model/Study/StudyObjects/Questions/TextQuestion */
      "r8Zv");
      /* harmony import */


      var _src_app_Model_Study_StudyObjects_Section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @src/app/Model/Study/StudyObjects/Section */
      "/3i5");
      /* harmony import */


      var _src_app_Model_Study_StudyObjects_SectionElement__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @src/app/Model/Study/StudyObjects/SectionElement */
      "HEL/");
      /* harmony import */


      var _src_app_Model_Study_StudyObjects_TextBlock__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @src/app/Model/Study/StudyObjects/TextBlock */
      "0HUV");
      /* harmony import */


      var _src_app_Model_Study_StudyObjects_VibrationPattern__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @src/app/Model/Study/StudyObjects/VibrationPattern */
      "tJs4");
      /* harmony import */


      var _services_color_color_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../services/color/color.service */
      "atCH");

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

      var StudyObjectToolboxComponent = /*#__PURE__*/function () {
        function StudyObjectToolboxComponent(colorService) {
          _classCallCheck(this, StudyObjectToolboxComponent);

          this.colorService = colorService;
          /**
           * Enthält alle Elemente, die in der Toolbox verfügbar sind.
           */

          this.toolbox = [];
        }
        /**
         * Initialisiert connectedLists mit default Werten und nummeriert diese von 0 bis zur Anzahl von playgroundCount.
         */


        _createClass(StudyObjectToolboxComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initConnectedLists(this.playgroundCount);
          }
          /**
           * Initialisiert connectedLists mit default Werten und nummeriert diese mit numOfLists.
           * @param numOfLists
           */

        }, {
          key: "initConnectedLists",
          value: function initConnectedLists(numOfLists) {
            this.connectedLists = undefined;

            for (var i = 0; i < numOfLists; i++) {
              if (this.connectedLists == undefined) {
                this.connectedLists = ["studyObjectList" + i];
              } else {
                this.connectedLists.push("studyObjectList" + i);
              }
            }
          }
          /**
           * Initialisiert connectedLists neu.
           * @param changes
           */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes["playgroundCount"]) {
              this.initConnectedLists(this.playgroundCount);
            }
          }
          /**
           * Liefert die Liste aller Objekte des Typs item in der toolbox zurück.
           * @param item
           */

        }, {
          key: "getObjectsPerType",
          value: function getObjectsPerType(item) {
            var result = [];

            switch (item) {
              case "DateQuestion":
                var _iterator20 = _createForOfIteratorHelper(this.toolbox),
                    _step20;

                try {
                  for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                    var element = _step20.value;
                    if (element instanceof _src_app_Model_Study_StudyObjects_Questions_DateQuestion__WEBPACK_IMPORTED_MODULE_3__["DateQuestion"]) result.push(element);
                  }
                } catch (err) {
                  _iterator20.e(err);
                } finally {
                  _iterator20.f();
                }

                break;

              case "VibrationPattern":
                var _iterator21 = _createForOfIteratorHelper(this.toolbox),
                    _step21;

                try {
                  for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                    var _element = _step21.value;
                    if (_element instanceof _src_app_Model_Study_StudyObjects_VibrationPattern__WEBPACK_IMPORTED_MODULE_10__["VibrationPattern"]) result.push(_element);
                  }
                } catch (err) {
                  _iterator21.e(err);
                } finally {
                  _iterator21.f();
                }

                break;

              case "TextBlock":
                var _iterator22 = _createForOfIteratorHelper(this.toolbox),
                    _step22;

                try {
                  for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                    var _element2 = _step22.value;
                    if (_element2 instanceof _src_app_Model_Study_StudyObjects_TextBlock__WEBPACK_IMPORTED_MODULE_9__["TextBlock"]) result.push(_element2);
                  }
                } catch (err) {
                  _iterator22.e(err);
                } finally {
                  _iterator22.f();
                }

                break;

              case "LinearScaleQuestion":
                var _iterator23 = _createForOfIteratorHelper(this.toolbox),
                    _step23;

                try {
                  for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
                    var _element3 = _step23.value;
                    if (_element3 instanceof _src_app_Model_Study_StudyObjects_Questions_LinearScaleQuestion__WEBPACK_IMPORTED_MODULE_4__["LinearScaleQuestion"]) result.push(_element3);
                  }
                } catch (err) {
                  _iterator23.e(err);
                } finally {
                  _iterator23.f();
                }

                break;

              case "MultipleChoiceQuestion":
                var _iterator24 = _createForOfIteratorHelper(this.toolbox),
                    _step24;

                try {
                  for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
                    var _element4 = _step24.value;
                    if (_element4 instanceof _src_app_Model_Study_StudyObjects_Questions_MultipleChoiceQuestion__WEBPACK_IMPORTED_MODULE_5__["MultipleChoiceQuestion"]) result.push(_element4);
                  }
                } catch (err) {
                  _iterator24.e(err);
                } finally {
                  _iterator24.f();
                }

                break;

              case "TextQuestion":
                var _iterator25 = _createForOfIteratorHelper(this.toolbox),
                    _step25;

                try {
                  for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
                    var _element5 = _step25.value;
                    if (_element5 instanceof _src_app_Model_Study_StudyObjects_Questions_TextQuestion__WEBPACK_IMPORTED_MODULE_6__["TextQuestion"]) result.push(_element5);
                  }
                } catch (err) {
                  _iterator25.e(err);
                } finally {
                  _iterator25.f();
                }

                break;

              case "SectionElement":
                var _iterator26 = _createForOfIteratorHelper(this.toolbox),
                    _step26;

                try {
                  for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
                    var _element6 = _step26.value;
                    if (_element6 instanceof _src_app_Model_Study_StudyObjects_SectionElement__WEBPACK_IMPORTED_MODULE_8__["SectionElement"]) result.push(_element6);
                  }
                } catch (err) {
                  _iterator26.e(err);
                } finally {
                  _iterator26.f();
                }

                break;

              case "Section":
                var _iterator27 = _createForOfIteratorHelper(this.toolbox),
                    _step27;

                try {
                  for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
                    var _element7 = _step27.value;
                    if (_element7 instanceof _src_app_Model_Study_StudyObjects_Section__WEBPACK_IMPORTED_MODULE_7__["Section"]) result.push(_element7);
                  }
                } catch (err) {
                  _iterator27.e(err);
                } finally {
                  _iterator27.f();
                }

                break;
            }

            return result;
          }
          /**
           * Zählt alle Objekte in der Toolbox.
           * @param item
           */

        }, {
          key: "getAmount",
          value: function getAmount(item) {
            var counter = 0;

            var _iterator28 = _createForOfIteratorHelper(this.toolbox),
                _step28;

            try {
              for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
                var element = _step28.value;

                switch (item) {
                  case "DateQuestion":
                    if (element instanceof _src_app_Model_Study_StudyObjects_Questions_DateQuestion__WEBPACK_IMPORTED_MODULE_3__["DateQuestion"]) counter++;
                    break;

                  case "VibrationPattern":
                    if (element instanceof _src_app_Model_Study_StudyObjects_VibrationPattern__WEBPACK_IMPORTED_MODULE_10__["VibrationPattern"]) counter++;
                    break;

                  case "TextBlock":
                    if (element instanceof _src_app_Model_Study_StudyObjects_TextBlock__WEBPACK_IMPORTED_MODULE_9__["TextBlock"]) counter++;
                    break;

                  case "LinearScaleQuestion":
                    if (element instanceof _src_app_Model_Study_StudyObjects_Questions_LinearScaleQuestion__WEBPACK_IMPORTED_MODULE_4__["LinearScaleQuestion"]) counter++;
                    break;

                  case "MultipleChoiceQuestion":
                    if (element instanceof _src_app_Model_Study_StudyObjects_Questions_MultipleChoiceQuestion__WEBPACK_IMPORTED_MODULE_5__["MultipleChoiceQuestion"]) counter++;
                    break;

                  case "TextQuestion":
                    if (element instanceof _src_app_Model_Study_StudyObjects_Questions_TextQuestion__WEBPACK_IMPORTED_MODULE_6__["TextQuestion"]) counter++;
                    break;

                  case "SectionElement":
                    if (element instanceof _src_app_Model_Study_StudyObjects_SectionElement__WEBPACK_IMPORTED_MODULE_8__["SectionElement"]) counter++;
                    break;

                  case "Section":
                    if (element instanceof _src_app_Model_Study_StudyObjects_Section__WEBPACK_IMPORTED_MODULE_7__["Section"]) counter++;
                    break;
                }
              }
            } catch (err) {
              _iterator28.e(err);
            } finally {
              _iterator28.f();
            }

            return counter;
          }
        }]);

        return StudyObjectToolboxComponent;
      }();

      StudyObjectToolboxComponent.ctorParameters = function () {
        return [{
          type: _services_color_color_service__WEBPACK_IMPORTED_MODULE_11__["ColorService"]
        }];
      };

      StudyObjectToolboxComponent.propDecorators = {
        toolbox: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        playgroundCount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      StudyObjectToolboxComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-studyobject-toolbox',
        template: _raw_loader_studyobject_toolbox_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_studyobject_toolbox_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_services_color_color_service__WEBPACK_IMPORTED_MODULE_11__["ColorService"]])], StudyObjectToolboxComponent);
      /***/
    },

    /***/
    "znyf":
    /*!*******************************************************!*\
      !*** ./src/app/studycreation/studycreation.routes.ts ***!
      \*******************************************************/

    /*! exports provided: routes */

    /***/
    function znyf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routes", function () {
        return routes;
      });
      /* harmony import */


      var _general_editing_general_editing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./general-editing/general-editing.component */
      "8CWr");
      /* harmony import */


      var _question_editing_question_editing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./question-editing/question-editing.component */
      "4XXs");
      /* harmony import */


      var _section_editing_section_editing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./section-editing/section-editing.component */
      "jfxa");
      /* harmony import */


      var _sectionelement_editing_sectionelement_editing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sectionelement-editing/sectionelement-editing.component */
      "acHD");
      /* harmony import */


      var _sequence_editing_sequence_editing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./sequence-editing/sequence-editing.component */
      "Zltt");
      /* harmony import */


      var _textblock_editing_textblock_editing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./textblock-editing/textblock-editing.component */
      "My1a");
      /* harmony import */


      var _vibrationpattern_editing_vibrationpattern_editing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./vibrationpattern-editing/vibrationpattern-editing.component */
      "3c42");

      var routes = [{
        path: "general-editing",
        component: _general_editing_general_editing_component__WEBPACK_IMPORTED_MODULE_0__["GeneralEditingComponent"]
      }, {
        path: "question-editing",
        component: _question_editing_question_editing_component__WEBPACK_IMPORTED_MODULE_1__["QuestionEditingComponent"]
      }, {
        path: "section-editing",
        component: _section_editing_section_editing_component__WEBPACK_IMPORTED_MODULE_2__["SectionEditingComponent"]
      }, {
        path: "sectionelement-editing",
        component: _sectionelement_editing_sectionelement_editing_component__WEBPACK_IMPORTED_MODULE_3__["SectionElementEditingComponent"]
      }, {
        path: "sequence-editing",
        component: _sequence_editing_sequence_editing_component__WEBPACK_IMPORTED_MODULE_4__["SequenceEditingComponent"]
      }, {
        path: "textblock-editing",
        component: _textblock_editing_textblock_editing_component__WEBPACK_IMPORTED_MODULE_5__["TextBlockEditingComponent"]
      }, {
        path: "vibrationpattern-editing",
        component: _vibrationpattern_editing_vibrationpattern_editing_component__WEBPACK_IMPORTED_MODULE_6__["VibrationPatternEditingComponent"]
      }];
      /***/
    }
  }]);
})();
//# sourceMappingURL=src-app-studycreation-studycreation-module-es5.js.map