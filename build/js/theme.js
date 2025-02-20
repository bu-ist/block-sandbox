/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@bostonuniversity/burf-theme/js-dev/dist/toggle.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@bostonuniversity/burf-theme/js-dev/dist/toggle.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.toggle = toggle;
var _jquery = _interopRequireDefault(__webpack_require__(/*! jquery */ "jquery"));
/**
 * Toggle behavior for navigation / search buttons.
 *
 * @package ResponsiveFoundation
 */

function toggle() {
  var $body = (0, _jquery.default)('body');
  var $toggle = (0, _jquery.default)('.js-nav-toggle');
  var $toggleAriaLabelWhenOpen = $toggle.children('.nav-toggle-label-open').text();
  var $toggleAriaLabelWhenClosed = $toggle.children('.nav-toggle-label-closed').text();
  var $toggleitems = $toggle.add('nav');
  var $searchtoggle = (0, _jquery.default)('.js-search-toggle');
  var $searchitems = $searchtoggle.add('#quicksearch');

  // Add aria attributes for control/expanded if JS is available
  $searchtoggle.attr('aria-expanded', 'false').attr('aria-controls', 'quicksearch');
  $toggle.attr('aria-expanded', 'false').attr('aria-controls', 'primary-nav-menu');
  $toggle.on('click', function (e) {
    e.preventDefault();
    if ($toggle.attr('aria-expanded') === 'false') {
      $toggle.attr('aria-expanded', 'true').attr('aria-label', $toggleAriaLabelWhenOpen);
    } else {
      $toggle.attr('aria-expanded', 'false').attr('aria-label', $toggleAriaLabelWhenClosed);
    }
    $toggleitems.toggleClass('is-open');
    $searchitems.removeClass('is-open');
    $body.toggleClass('nav-open').removeClass('search-open');
  });
  function toggleSearchPanel(focus) {
    $toggleitems.removeClass('is-open');
    if (focus === true && !(0, _jquery.default)(this).hasClass('is-open')) {
      setTimeout(function () {
        (0, _jquery.default)('#q').focus();
      }, 100);
    }
    if ($searchtoggle.attr('aria-expanded') === 'false') {
      $searchtoggle.attr('aria-expanded', 'true').attr('aria-label', 'Close search');
    } else {
      $searchtoggle.attr('aria-expanded', 'false').attr('aria-label', 'Open search');
    }
    $searchitems.toggleClass('is-open');
    $body.toggleClass('search-open').removeClass('nav-open');
  }
  $searchtoggle.on({
    click: function click(e) {
      e.preventDefault();
      toggleSearchPanel(true);
    },
    keypress: function keypress(e) {
      if (e.keyCode === 13) {
        e.preventDefault();
        toggleSearchPanel(false);
      }
    }
  });
}


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = window["jQuery"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ (function(module) {

function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    "default": e
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*************************!*\
  !*** ./src/js/theme.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bostonuniversity_burf_theme_js_dev_dist_toggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bostonuniversity/burf-theme/js-dev/dist/toggle */ "./node_modules/@bostonuniversity/burf-theme/js-dev/dist/toggle.js");
/**
 * The entry point for theme scripts.
 *
 * Modules are imported and compiled into one resulting `script.js` file.
 *
 * @package
 */

// Import Foundation scripts.


// Run JS scripts here.
(0,_bostonuniversity_burf_theme_js_dev_dist_toggle__WEBPACK_IMPORTED_MODULE_0__.toggle)();
console.log('block-sandbox js/theme.js has loaded and cannot wait to play the bongos.');
}();
/******/ })()
;
//# sourceMappingURL=theme.js.map