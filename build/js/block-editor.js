/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/block-styles.js":
/*!************************************!*\
  !*** ./src/blocks/block-styles.js ***!
  \************************************/
/***/ (function() {

/**
 * Block Styles allow alternative styles to be applied to existing blocks. They work by adding a className to the block’s wrapper. This className can be used to provide an alternative styling for the block if the block style is selected.
 *
 * Styles registered with PHP can only be unregistered with PHP.
 * Styles registered with JavaScript can only be unregistered with JavaScript.
 *
 * @link https://developer.bu.edu/gutenberg/handbook/block-styles/
 */

const stylesToAddRemove = {
  'core/table': ['stripes', 'regular'],
  'core/pullquote': ['solid-color', 'default'] // removes from dd but not picker
};

/**
 * Unregister existing styles.
 */
wp.domReady(function () {
  Object.entries(stylesToAddRemove).forEach(([block, styles]) => {
    // console.log(block + " , " + styles);
    wp.blocks.unregisterBlockStyle(block, styles);
  });
});

/***/ }),

/***/ "./src/blocks/variations/index.js":
/*!****************************************!*\
  !*** ./src/blocks/variations/index.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _people_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./people.js */ "./src/blocks/variations/people.js");
/**
 * Block variations
 *
 * Used to import the variations contained within this folder.
 */

// import './*.js';

console.log('HEY Variations are here');

/***/ }),

/***/ "./src/blocks/variations/people.js":
/*!*****************************************!*\
  !*** ./src/blocks/variations/people.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Registers a new block variation provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-blocks/#registerBlockVariation
 */


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * Variations
 */

const CONTENT = [['core/heading', {
  level: 3,
  placeholder: 'Write a headline which speaks to the theme of this section'
}], ['core/columns', {}, [['core/column', {}, [['core/shortcode', {
  text: '[bu_list_profiles format="feature" include="74805"]'
}]]], ['core/column', {}, [['core/pullquote', {
  text: 'Write your quote here. The quote should be from same person in the featured profile to the left. Remember to change the include ID!'
}], ['core/buttons', {}, [['core/button', {
  className: 'is-style-outline',
  textColor: 'green',
  placeholder: 'Learn more about (Name Here)'
}]]]]]]], ['core/columns', {}, [['core/column', {}, [['core/paragraph', {
  placeholder: "Write 2-3 paragraphs tying these people together thematically, such as: We're collaborative, not cutthroat. To us, diversity is so much more than just an impressive class profile. We strive to bring a variety of professional, industry, identities, and life experiences to our MBA programs, fostering a vibrant and diverse learning environment."
}], ['core/paragraph', {
  placeholder: "By graduation, you'll have gained a unique network unlike any other—and joined a group of Questrom alumni that stands 51,000-strong."
}], ['core/paragraph', {
  placeholder: "Don't forget to update the profile IDs in each shortcode to match the profiles you would like to show."
}], ['core/buttons', {}, [['core/button', {
  className: 'is-style-outline',
  textColor: 'orange',
  placeholder: 'Explore the Curriculum'
}], ['core/button', {
  className: 'is-style-outline',
  textColor: 'orange',
  placeholder: 'Find your Focus Area'
}]]]]], ['core/column', {}, [['core/shortcode', {
  text: '[bu_list_profiles format="block" include="74795,77681,75020,54752"]'
}]]]]]];

/*
 * New `core/embed` block variation.
 */
const blockPeople = {
  name: 'responsi-section-people',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('People Section', 'responsive-child-starter-3x-block'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show a section with a featured profile, four related profiles, and content.', 'r-questrom'),
  scope: ['inserter'],
  attributes: {
    align: 'full'
  },
  icon: {
    background: '#AC1F2D',
    foreground: '#fff',
    src: 'layout'
  },
  innerBlocks: CONTENT
};
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockVariation)('core/group', blockPeople);

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
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
/*!********************************!*\
  !*** ./src/js/block-editor.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks_block_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blocks/block-styles */ "./src/blocks/block-styles.js");
/* harmony import */ var _blocks_block_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blocks_block_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blocks_variations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blocks/variations */ "./src/blocks/variations/index.js");
/**
 * Block editor only scripts.
 */
console.log('block-sandbox js/block-editor.js has loaded and hates schnozberries oh so much.');


/**
 * Register a block collection for this theme. This will display all blocks where the "textdomain" node in block.json matches the first argument of "registerBlockCollection". Namespace would be matched against a block prefix and included automatically in a registered collection.
 * @link https://github.com/godaddy-wordpress/coblocks/blob/e196c83d628e1139799ebf9ef94540578f430141/src/utils/helper.js
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockCollection)('block-sandbox', {
  title: 'BU: block-sandbox Collection (JS)'
});

/**
 * Unregister block styles.
 */


// Block variations.

}();
/******/ })()
;
//# sourceMappingURL=block-editor.js.map