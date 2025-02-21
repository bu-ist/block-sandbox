/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/caterpillar/edit.js":
/*!****************************************!*\
  !*** ./src/blocks/caterpillar/edit.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_inspector_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/inspector.mjs */ "./src/blocks/caterpillar/modules/inspector.mjs");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/caterpillar/editor.scss");
/* harmony import */ var _includes_umlautEverything__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../includes/umlautEverything */ "./src/blocks/includes/umlautEverything.js");
/* harmony import */ var _modules_functions_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/functions.mjs */ "./src/blocks/caterpillar/modules/functions.mjs");

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */



/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


// @todo document


// Import custom assets from within the block folder.


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param  props
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
function Edit(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    title,
    excerpt,
    caterpillarName,
    caterpillarColor,
    caterpillarHat,
    caterpillarMood,
    caterpillarSegments,
    caterpillarLife
  } = attributes;
  const onChangeTitle = newTitle => {
    setAttributes({
      title: (0,_includes_umlautEverything__WEBPACK_IMPORTED_MODULE_5__.gimmieUmlauts)(newTitle)
    });
  };
  const onChangeExcerpt = newExcerpt => {
    setAttributes({
      excerpt: (0,_includes_umlautEverything__WEBPACK_IMPORTED_MODULE_5__.gimmieUmlauts)(newExcerpt)
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_modules_inspector_mjs__WEBPACK_IMPORTED_MODULE_3__.CaterpillarInspectorControls, {
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block--block-sandbox-caterpillar--container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    className: "wp-block--block-sandbox-caterpillar--title",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Callout Title', 'block-sandbox'),
    tagName: "h2",
    onChange: onChangeTitle,
    value: title,
    allowedFormats: []
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_modules_functions_mjs__WEBPACK_IMPORTED_MODULE_6__.introduceCaterpillar)(caterpillarName, caterpillarMood, caterpillarSegments)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'wp-block--block-sandbox-caterpillar--color-' + attributes.caterpillarColor
  }, (0,_modules_functions_mjs__WEBPACK_IMPORTED_MODULE_6__.buildCaterpillar)(caterpillarHat, caterpillarSegments, caterpillarLife)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Excerpt', 'block-sandbox'),
    tagName: "p",
    classname: "wp-block--block-sandbox-caterpillar--excerpt",
    onChange: onChangeExcerpt,
    value: excerpt,
    allowedFormats: ['core/italic', 'core/bold', 'core/link']
  }))));
}

/***/ }),

/***/ "./src/blocks/caterpillar/index.js":
/*!*****************************************!*\
  !*** ./src/blocks/caterpillar/index.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/caterpillar/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/caterpillar/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/caterpillar/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */

// import Save from './save';


/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-attributes/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  attributes: {
    title: {
      type: 'string'
    },
    excerpt: {
      type: 'string'
    },
    caterpillarName: {
      type: 'string'
    },
    caterpillarColor: {
      type: 'string'
    },
    caterpillarHat: {
      type: 'string'
    },
    caterpillarMood: {
      type: 'boolean'
    },
    caterpillarSegments: {
      type: 'number'
    },
    caterpillarLife: {
      type: 'boolean'
    }
  },
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @param root0
   * @param root0.attributes
   * @see ./save.js
   */
  save: ({
    attributes
  }) => null,
  icon: {
    src: _block_json__WEBPACK_IMPORTED_MODULE_3__.icon,
    foreground: '#cc0000'
  }
});

/***/ }),

/***/ "./src/blocks/includes/umlautEverything.js":
/*!*************************************************!*\
  !*** ./src/blocks/includes/umlautEverything.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gimmieUmlauts: function() { return /* binding */ gimmieUmlauts; }
/* harmony export */ });
function gimmieUmlauts(text) {
  text = text.replaceAll('a', 'ä');
  text = text.replaceAll('o', 'ö');
  text = text.replaceAll('u', 'ü');
  return text;
}

/***/ }),

/***/ "./src/blocks/caterpillar/editor.scss":
/*!********************************************!*\
  !*** ./src/blocks/caterpillar/editor.scss ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/caterpillar/modules/inspector-editor.scss":
/*!**************************************************************!*\
  !*** ./src/blocks/caterpillar/modules/inspector-editor.scss ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/caterpillar/style.scss":
/*!*******************************************!*\
  !*** ./src/blocks/caterpillar/style.scss ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/blocks/caterpillar/modules/functions.mjs":
/*!******************************************************!*\
  !*** ./src/blocks/caterpillar/modules/functions.mjs ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildCaterpillar: function() { return /* binding */ buildCaterpillar; },
/* harmony export */   buildFace: function() { return /* binding */ buildFace; },
/* harmony export */   buildHat: function() { return /* binding */ buildHat; },
/* harmony export */   getToeCount: function() { return /* binding */ getToeCount; },
/* harmony export */   introduceCaterpillar: function() { return /* binding */ introduceCaterpillar; }
/* harmony export */ });
function getToeCount(a, b) {
  return 'I have ' + (a + 1) * b + ' toes...';
}
function introduceCaterpillar(caterpillarName, caterpillarMood, caterpillarSegments) {
  // @todo ternary
  let moodAsText = "not feelin' much";
  if (caterpillarMood) {
    moodAsText = 'so mad';
  } else {
    moodAsText = 'calm af';
  }
  return 'Hello world, my name is ' + caterpillarName + ", and I'm " + moodAsText + '! Also, please note that ' + getToeCount(caterpillarSegments, 2);
}
function buildCaterpillar(caterpillarHat, caterpillarSegments, caterpillarLife) {
  const myFace = buildFace(caterpillarLife);
  const myHat = buildHat(caterpillarHat);
  const bodyAir = '   ';
  const bodyTop = '.__';
  const bodyMid = '(  ';
  const bodyBottom = '(__';
  const bodyLegs = '^  ';
  return `
   ` + bodyAir.repeat(caterpillarSegments) + ` •  ` + myHat[0] + `  •
   ` + bodyTop.repeat(caterpillarSegments) + `.| ` + myHat[1] + ` ` + myHat[2] + ` |
   ` + bodyMid.repeat(caterpillarSegments) + `)[ ` + myFace[0] + ` ` + myFace[1] + ` ]
 < ` + bodyMid.repeat(caterpillarSegments) + `) [ ` + myFace[2] + ` ]
   ` + bodyBottom.repeat(caterpillarSegments) + `)
   ` + bodyLegs.repeat(caterpillarSegments) + `^
`;
}
function buildFace(caterpillarLife) {
  if (caterpillarLife) {
    return ['X', 'X', '~'];
  }
  return ['O', 'O', '='];
}
function buildHat(caterpillarHat) {
  if ('tophat' == caterpillarHat) {
    return ['_', '|', '|'];
  }
  return [' ', ' ', ' '];
}

//                            •   _   •
//    ,,,,,,,,,,,,,,,,,,,,,,,, \ / \ /
//  / (  (  (  (  (  (  (  (  )[ O X ]
// <  (  (  (  (  (  (  (  (  ) [ ‿ ]︵
//  \ (__(__(__(__(__(__(__(__)
//    %  ^  ^  ^  ^  ^  ^  ^  ^

/***/ }),

/***/ "./src/blocks/caterpillar/modules/inspector.mjs":
/*!******************************************************!*\
  !*** ./src/blocks/caterpillar/modules/inspector.mjs ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CaterpillarInspectorControls: function() { return /* binding */ CaterpillarInspectorControls; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _functions_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions.mjs */ "./src/blocks/caterpillar/modules/functions.mjs");
/* harmony import */ var _includes_umlautEverything_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../includes/umlautEverything.js */ "./src/blocks/includes/umlautEverything.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _inspector_editor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inspector-editor.scss */ "./src/blocks/caterpillar/modules/inspector-editor.scss");

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 * @todo https://developer.wordpress.org/coding-standards/wordpress-coding-standards/javascript/
 * @todo https://github.com/WordPress/gutenberg/blob/trunk/packages/block-editor/src/components/inspector-controls/README.md
 * @todo https://developer.wordpress.org/block-editor/reference-guides/components/
 */


// Import WP assets.


// Import custom assets from within the block folder.


// Import custom shared assets from within the src folder.


// Import WP assets.


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


// React requires that the first letter of components be capitalized. JSX will use this capitalization to tell the difference between an HTML tag and a component instance. If the first letter of a name is capitalized, then JSX knows it's a component instance; if not, then it's an HTML element.
const CaterpillarInspectorControls = ({
  attributes,
  setAttributes
}) => {
  const {
    caterpillarName,
    caterpillarColor,
    caterpillarHat,
    caterpillarMood,
    caterpillarSegments,
    caterpillarLife
  } = attributes;
  function setCaterpillarName(newValue) {
    setAttributes({
      caterpillarName: (0,_includes_umlautEverything_js__WEBPACK_IMPORTED_MODULE_4__.gimmieUmlauts)(newValue)
    });
  }
  function setCaterpillarColor(newValue) {
    setAttributes({
      caterpillarColor: newValue
    });
  }
  function setCaterpillarHat(newValue) {
    setAttributes({
      caterpillarHat: newValue
    });
  }
  function setCaterpillarMood(newValue) {
    setAttributes({
      caterpillarMood: newValue
    });
  }
  function setCaterpillarSegments(newValue) {
    setAttributes({
      caterpillarSegments: newValue
    });
  }
  function onChangeCaterpillarLife(newValue) {
    setAttributes({
      caterpillarLife: newValue
    });
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Caterpillar Configuration'),
    className: "block-sandbox-caterpillar--panel"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: "Name",
    help: "Who are you?",
    className: "block-sandbox-caterpillar--name",
    value: caterpillarName,
    onChange: setCaterpillarName
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: "Color",
    value: caterpillarColor,
    options: [{
      label: 'Red',
      value: 'red'
    }, {
      label: 'Green',
      value: 'green'
    }, {
      label: 'Blue',
      value: 'blue'
    }],
    onChange: setCaterpillarColor
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RadioControl, {
    label: "The type of the current hat is...",
    selected: caterpillarHat,
    options: [{
      label: 'Top Hat',
      value: 'tophat'
    }, {
      label: 'None',
      value: 'none'
    }],
    onChange: setCaterpillarHat
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.CheckboxControl, {
    label: "Is angry?",
    help: "What mood are we in today, Mister Rumples?",
    checked: caterpillarMood,
    onChange: setCaterpillarMood
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
    label: "Segments",
    value: caterpillarSegments,
    onChange: setCaterpillarSegments,
    initialPosition: 1,
    min: 1,
    max: 10,
    help: value => (0,_functions_mjs__WEBPACK_IMPORTED_MODULE_3__.getToeCount)(value, 2)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: "Is dead?",
    help: "Oh boy!",
    checked: caterpillarLife,
    onChange: onChangeCaterpillarLife
  })));
};

/***/ }),

/***/ "./src/blocks/caterpillar/block.json":
/*!*******************************************!*\
  !*** ./src/blocks/caterpillar/block.json ***!
  \*******************************************/
/***/ (function(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"block-sandbox/caterpillar","version":"0.1.0","title":"BU Demo Block: Caterpillar","category":"block-sandbox","icon":"ellipsis","description":"Example block using the insect order Lepidoptera.","example":{},"supports":{"html":false},"attributes":{"textField":{"type":"string"}},"textdomain":"block-sandbox","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php","viewScript":"file:./view.js"}');

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"blocks/caterpillar/index": 0,
/******/ 			"blocks/caterpillar/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkblock_sandbox"] = self["webpackChunkblock_sandbox"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/caterpillar/style-index"], function() { return __webpack_require__("./src/blocks/caterpillar/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map