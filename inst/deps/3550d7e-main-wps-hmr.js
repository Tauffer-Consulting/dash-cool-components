webpackHotUpdatedash_cool_components("main",{

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./node_modules/is-what/dist/index.esm.js":
/*!************************************************!*\
  !*** ./node_modules/is-what/dist/index.esm.js ***!
  \************************************************/
/*! exports provided: getType, isAnyObject, isArray, isBlob, isBoolean, isDate, isEmptyArray, isEmptyObject, isEmptyString, isError, isFile, isFullString, isFunction, isMap, isNaNValue, isNull, isNullOrUndefined, isNumber, isObject, isObjectLike, isPlainObject, isPrimitive, isPromise, isRegExp, isSet, isString, isSymbol, isType, isUndefined, isWeakMap, isWeakSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getType", function() { return getType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAnyObject", function() { return isAnyObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBlob", function() { return isBlob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return isBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return isDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyArray", function() { return isEmptyArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyObject", function() { return isEmptyObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyString", function() { return isEmptyString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isError", function() { return isError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFile", function() { return isFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFullString", function() { return isFullString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMap", function() { return isMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNaNValue", function() { return isNaNValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNull", function() { return isNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNullOrUndefined", function() { return isNullOrUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObjectLike", function() { return isObjectLike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return isPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return isPrimitive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return isPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return isRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSet", function() { return isSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSymbol", function() { return isSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isType", function() { return isType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWeakMap", function() { return isWeakMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWeakSet", function() { return isWeakSet; });
/**
 * Returns the object type of the given payload
 *
 * @param {*} payload
 * @returns {string}
 */
function getType(payload) {
    return Object.prototype.toString.call(payload).slice(8, -1);
}
/**
 * Returns whether the payload is undefined
 *
 * @param {*} payload
 * @returns {payload is undefined}
 */
function isUndefined(payload) {
    return getType(payload) === 'Undefined';
}
/**
 * Returns whether the payload is null
 *
 * @param {*} payload
 * @returns {payload is null}
 */
function isNull(payload) {
    return getType(payload) === 'Null';
}
/**
 * Returns whether the payload is a plain JavaScript object (excluding special classes or objects with other prototypes)
 *
 * @param {*} payload
 * @returns {payload is {[key: string]: any}}
 */
function isPlainObject(payload) {
    if (getType(payload) !== 'Object')
        return false;
    return payload.constructor === Object && Object.getPrototypeOf(payload) === Object.prototype;
}
/**
 * Returns whether the payload is a plain JavaScript object (excluding special classes or objects with other prototypes)
 *
 * @param {*} payload
 * @returns {payload is {[key: string]: any}}
 */
function isObject(payload) {
    return isPlainObject(payload);
}
/**
 * Returns whether the payload is a an empty object (excluding special classes or objects with other prototypes)
 *
 * @param {*} payload
 * @returns {payload is {}}
 */
function isEmptyObject(payload) {
    return isPlainObject(payload) && Object.keys(payload).length === 0;
}
/**
 * Returns whether the payload is an any kind of object (including special classes or objects with different prototypes)
 *
 * @param {*} payload
 * @returns {payload is {[key: string]: any}}
 */
function isAnyObject(payload) {
    return getType(payload) === 'Object';
}
/**
 * Returns whether the payload is an object like a type passed in < >
 *
 * Usage: isObjectLike<{id: any}>(payload) // will make sure it's an object and has an `id` prop.
 *
 * @template T this must be passed in < >
 * @param {*} payload
 * @returns {payload is T}
 */
function isObjectLike(payload) {
    return isAnyObject(payload);
}
/**
 * Returns whether the payload is a function
 *
 * @param {*} payload
 * @returns {payload is Function}
 */
function isFunction(payload) {
    return getType(payload) === 'Function';
}
/**
 * Returns whether the payload is an array
 *
 * @param {*} payload
 * @returns {payload is undefined}
 */
function isArray(payload) {
    return getType(payload) === 'Array';
}
/**
 * Returns whether the payload is a an empty array
 *
 * @param {*} payload
 * @returns {payload is []}
 */
function isEmptyArray(payload) {
    return isArray(payload) && payload.length === 0;
}
/**
 * Returns whether the payload is a string
 *
 * @param {*} payload
 * @returns {payload is string}
 */
function isString(payload) {
    return getType(payload) === 'String';
}
/**
 * Returns whether the payload is a string, BUT returns false for ''
 *
 * @param {*} payload
 * @returns {payload is string}
 */
function isFullString(payload) {
    return isString(payload) && payload !== '';
}
/**
 * Returns whether the payload is ''
 *
 * @param {*} payload
 * @returns {payload is string}
 */
function isEmptyString(payload) {
    return payload === '';
}
/**
 * Returns whether the payload is a number
 *
 * This will return false for NaN
 *
 * @param {*} payload
 * @returns {payload is number}
 */
function isNumber(payload) {
    return getType(payload) === 'Number' && !isNaN(payload);
}
/**
 * Returns whether the payload is a boolean
 *
 * @param {*} payload
 * @returns {payload is boolean}
 */
function isBoolean(payload) {
    return getType(payload) === 'Boolean';
}
/**
 * Returns whether the payload is a regular expression (RegExp)
 *
 * @param {*} payload
 * @returns {payload is RegExp}
 */
function isRegExp(payload) {
    return getType(payload) === 'RegExp';
}
/**
 * Returns whether the payload is a Map
 *
 * @param {*} payload
 * @returns {payload is Map}
 */
function isMap(payload) {
    return getType(payload) === 'Map';
}
/**
 * Returns whether the payload is a WeakMap
 *
 * @param {*} payload
 * @returns {payload is WeakMap}
 */
function isWeakMap(payload) {
    return getType(payload) === 'WeakMap';
}
/**
 * Returns whether the payload is a Set
 *
 * @param {*} payload
 * @returns {payload is Set}
 */
function isSet(payload) {
    return getType(payload) === 'Set';
}
/**
 * Returns whether the payload is a WeakSet
 *
 * @param {*} payload
 * @returns {payload is WeakSet}
 */
function isWeakSet(payload) {
    return getType(payload) === 'WeakSet';
}
/**
 * Returns whether the payload is a Symbol
 *
 * @param {*} payload
 * @returns {payload is symbol}
 */
function isSymbol(payload) {
    return getType(payload) === 'Symbol';
}
/**
 * Returns whether the payload is a Date, and that the date is valid
 *
 * @param {*} payload
 * @returns {payload is Date}
 */
function isDate(payload) {
    return getType(payload) === 'Date' && !isNaN(payload);
}
/**
 * Returns whether the payload is a Blob
 *
 * @param {*} payload
 * @returns {payload is Blob}
 */
function isBlob(payload) {
    return getType(payload) === 'Blob';
}
/**
 * Returns whether the payload is a File
 *
 * @param {*} payload
 * @returns {payload is File}
 */
function isFile(payload) {
    return getType(payload) === 'File';
}
/**
 * Returns whether the payload is a Promise
 *
 * @param {*} payload
 * @returns {payload is Promise}
 */
function isPromise(payload) {
    return getType(payload) === 'Promise';
}
/**
 * Returns whether the payload is an Error
 *
 * @param {*} payload
 * @returns {payload is Error}
 */
function isError(payload) {
    return getType(payload) === 'Error';
}
/**
 * Returns whether the payload is `NaN` but also a `number`
 *
 * @param {*} payload
 * @returns {payload is typeof NaN}
 */
function isNaNValue(payload) {
    return getType(payload) === 'Number' && isNaN(payload);
}
/**
 * Returns whether the payload is a primitive type (eg. Boolean | Null | Undefined | Number | String | Symbol)
 *
 * @param {*} payload
 * @returns {(payload is boolean | null | undefined | number | string | symbol)}
 */
function isPrimitive(payload) {
    return (isBoolean(payload) ||
        isNull(payload) ||
        isUndefined(payload) ||
        isNumber(payload) ||
        isString(payload) ||
        isSymbol(payload));
}
/**
 * Returns true whether the payload is null or undefined
 *
 * @param {*} payload
 * @returns {(payload is null | undefined)}
 */
function isNullOrUndefined(payload) {
    return isNull(payload) || isUndefined(payload);
}
/**
 * Does a generic check to check that the given payload is of a given type.
 * In cases like Number, it will return true for NaN as NaN is a Number (thanks javascript!);
 * It will, however, differentiate between object and null
 *
 * @template T
 * @param {*} payload
 * @param {T} type
 * @throws {TypeError} Will throw type error if type is an invalid type
 * @returns {payload is T}
 */
function isType(payload, type) {
    if (!(type instanceof Function)) {
        throw new TypeError('Type must be a function');
    }
    if (!Object.prototype.hasOwnProperty.call(type, 'prototype')) {
        throw new TypeError('Type is not a class');
    }
    // Classes usually have names (as functions usually have names)
    var name = type.name;
    return getType(payload) === name || Boolean(payload && payload.constructor === type);
}




/***/ }),

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (newInputs[i] !== lastInputs[i]) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}

/* harmony default export */ __webpack_exports__["default"] = (memoizeOne);


/***/ }),

/***/ "./node_modules/merge-anything/dist/index.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/merge-anything/dist/index.esm.js ***!
  \*******************************************************/
/*! exports provided: default, concatArrays, merge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concatArrays", function() { return concatArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony import */ var is_what__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-what */ "./node_modules/is-what/dist/index.esm.js");


/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function assignProp(carry, key, newVal, originalObject) {
    var propType = originalObject.propertyIsEnumerable(key)
        ? 'enumerable'
        : 'nonenumerable';
    if (propType === 'enumerable')
        carry[key] = newVal;
    if (propType === 'nonenumerable') {
        Object.defineProperty(carry, key, {
            value: newVal,
            enumerable: false,
            writable: true,
            configurable: true
        });
    }
}
function mergeRecursively(origin, newComer, extensions) {
    // work directly on newComer if its not an object
    if (!Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(newComer)) {
        // extend merge rules
        if (extensions && Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isArray"])(extensions)) {
            extensions.forEach(function (extend) {
                newComer = extend(origin, newComer);
            });
        }
        return newComer;
    }
    // define newObject to merge all values upon
    var newObject = {};
    if (Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(origin)) {
        var props_1 = Object.getOwnPropertyNames(origin);
        var symbols_1 = Object.getOwnPropertySymbols(origin);
        newObject = __spreadArrays(props_1, symbols_1).reduce(function (carry, key) {
            // @ts-ignore
            var targetVal = origin[key];
            if ((!Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(key) && !Object.getOwnPropertyNames(newComer).includes(key)) ||
                (Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(key) && !Object.getOwnPropertySymbols(newComer).includes(key))) {
                assignProp(carry, key, targetVal, origin);
            }
            return carry;
        }, {});
    }
    var props = Object.getOwnPropertyNames(newComer);
    var symbols = Object.getOwnPropertySymbols(newComer);
    var result = __spreadArrays(props, symbols).reduce(function (carry, key) {
        // re-define the origin and newComer as targetVal and newVal
        var newVal = newComer[key];
        var targetVal = (Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(origin))
            // @ts-ignore
            ? origin[key]
            : undefined;
        // extend merge rules
        if (extensions && Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isArray"])(extensions)) {
            extensions.forEach(function (extend) {
                newVal = extend(targetVal, newVal);
            });
        }
        // When newVal is an object do the merge recursively
        if (targetVal !== undefined && Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(newVal)) {
            newVal = mergeRecursively(targetVal, newVal, extensions);
        }
        assignProp(carry, key, newVal, newComer);
        return carry;
    }, newObject);
    return result;
}
/**
 * Merge anything recursively.
 * Objects get merged, special objects (classes etc.) are re-assigned "as is".
 * Basic types overwrite objects or other basic types.
 *
 * @param {(IConfig | any)} origin
 * @param {...any[]} newComers
 * @returns the result
 */
function merge(origin) {
    var newComers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        newComers[_i - 1] = arguments[_i];
    }
    var extensions = null;
    var base = origin;
    if (Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(origin) && origin.extensions && Object.keys(origin).length === 1) {
        base = {};
        extensions = origin.extensions;
    }
    return newComers.reduce(function (result, newComer) {
        return mergeRecursively(result, newComer, extensions);
    }, base);
}

function concatArrays(originVal, newVal) {
    if (Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isArray"])(originVal) && Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isArray"])(newVal)) {
        // concat logic
        return originVal.concat(newVal);
    }
    return newVal; // always return newVal as fallback!!
}

/* harmony default export */ __webpack_exports__["default"] = (merge);



/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/reactjs-tag-input/dist/TagInput.js":
/*!*********************************************************!*\
  !*** ./node_modules/reactjs-tag-input/dist/TagInput.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styled_Wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled/Wrapper */ "./node_modules/reactjs-tag-input/dist/styled/Wrapper.js");
/* harmony import */ var _styled_Tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styled/Tag */ "./node_modules/reactjs-tag-input/dist/styled/Tag.js");
/* harmony import */ var _styled_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styled/Input */ "./node_modules/reactjs-tag-input/dist/styled/Input.js");
/* harmony import */ var _styled_TagDelete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styled/TagDelete */ "./node_modules/reactjs-tag-input/dist/styled/TagDelete.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n            ', '\n        '], ['\n            ', '\n        ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var TagInput = function (_Component) {
    _inherits(TagInput, _Component);

    function TagInput(props) {
        _classCallCheck(this, TagInput);

        var _this = _possibleConstructorReturn(this, (TagInput.__proto__ || Object.getPrototypeOf(TagInput)).call(this, props));

        _this.state = {
            selectedTags: []
        };
        _this.renderTags = _this.renderTags.bind(_this);
        _this.onInputKeyUp = _this.onInputKeyUp.bind(_this);
        _this.onInputKeyDown = _this.onInputKeyDown.bind(_this);
        _this.focusInput = _this.focusInput.bind(_this);
        _this.removeTag = _this.removeTag.bind(_this);
        _this.input = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
        return _this;
    }

    _createClass(TagInput, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var tags = this.props.tags;

            var propTags = tags.map(function (tag, index) {
                return Object.assign({
                    index: index
                }, tag);
            });

            this.setState(function (state) {
                return {
                    selectedTags: [].concat(_toConsumableArray(state.selectedTags), _toConsumableArray(propTags))
                };
            });
            this.focusInput();
        }
    }, {
        key: 'onInputKeyUp',
        value: function onInputKeyUp(e) {
            var _this2 = this;

            var _props = this.props,
                addTagOnEnterKeyPressed = _props.addTagOnEnterKeyPressed,
                onTagsChanged = _props.onTagsChanged;

            var inputValue = e.target.value;
            var inputNotEmpty = inputValue && inputValue.trim() !== '';
            var addTag = function addTag() {
                _this2.setState(function (state) {
                    return {
                        selectedTags: [].concat(_toConsumableArray(state.selectedTags), [{
                            index: state.selectedTags.length + 1,
                            displayValue: inputValue
                        }])
                    };
                }, function () {
                    var selectedTags = _this2.state.selectedTags;


                    _this2.clearInput();
                    onTagsChanged(selectedTags);
                });
            };

            if (e.key === 'Enter' && inputNotEmpty && addTagOnEnterKeyPressed) {
                addTag();
            }
        }
    }, {
        key: 'onInputKeyDown',
        value: function onInputKeyDown(e) {
            var _this3 = this;

            var onTagsChanged = this.props.onTagsChanged;

            var deleteLastTag = function deleteLastTag() {
                _this3.setState(function (state) {
                    return {
                        selectedTags: state.selectedTags.splice(0, state.selectedTags.length - 1)
                    };
                }, function () {
                    var selectedTags = _this3.state.selectedTags;

                    onTagsChanged(selectedTags);
                });
            };

            if (e.key === 'Backspace' && e.target.selectionStart === 0) {
                deleteLastTag();
            }
        }
    }, {
        key: 'clearInput',
        value: function clearInput() {
            this.input.value = '';
        }
    }, {
        key: 'focusInput',
        value: function focusInput() {
            this.input.focus();
        }
    }, {
        key: 'removeTag',
        value: function removeTag(index) {
            var _this4 = this;

            this.setState(function (state) {
                return {
                    selectedTags: state.selectedTags.filter(function (tag) {
                        return tag.index !== index;
                    })
                };
            }, function () {
                var selectedTags = _this4.state.selectedTags;
                var onTagsChanged = _this4.props.onTagsChanged;

                onTagsChanged(selectedTags);
            });
        }
    }, {
        key: 'renderTags',
        value: function renderTags() {
            var _this5 = this;

            var selectedTags = this.state.selectedTags;

            var TagComponent = this.getTagStyledComponent();
            var Delete = this.getTagDeleteComponent();
            var DeleteIcon = this.getDeleteIcon();

            return selectedTags.length > 0 ? selectedTags.map(function (tag, index) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    TagComponent,
                    { key: index },
                    tag.displayValue,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        Delete,
                        { index: tag.index, onClick: function onClick() {
                                return _this5.removeTag(tag.index);
                            } },
                        DeleteIcon
                    )
                );
            }) : null;
        }
    }, {
        key: 'renderPlaceholder',
        value: function renderPlaceholder() {
            var selectedTags = this.state.selectedTags;
            var _props2 = this.props,
                placeholder = _props2.placeholder,
                hideInputPlaceholderTextIfTagsPresent = _props2.hideInputPlaceholderTextIfTagsPresent;


            return hideInputPlaceholderTextIfTagsPresent && selectedTags.length > 0 ? null : placeholder;
        }
    }, {
        key: 'getDeleteIcon',
        value: function getDeleteIcon() {
            var tagDeleteIcon = this.props.tagDeleteIcon;

            return tagDeleteIcon || ' x';
        }
    }, {
        key: 'getTagDeleteComponent',
        value: function getTagDeleteComponent() {
            var tagDeleteStyle = this.props.tagDeleteStyle;


            return tagDeleteStyle ? Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_styled_TagDelete__WEBPACK_IMPORTED_MODULE_6__["default"])(_templateObject, tagDeleteStyle) : _styled_TagDelete__WEBPACK_IMPORTED_MODULE_6__["default"];
        }
    }, {
        key: 'getTagStyledComponent',
        value: function getTagStyledComponent() {
            var tagStyle = this.props.tagStyle;


            return tagStyle ? Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_styled_Tag__WEBPACK_IMPORTED_MODULE_4__["default"])(_templateObject, tagStyle) : _styled_Tag__WEBPACK_IMPORTED_MODULE_4__["default"];
        }
    }, {
        key: 'getInputWrapperStyledComponent',
        value: function getInputWrapperStyledComponent() {
            var wrapperStyle = this.props.wrapperStyle;


            return wrapperStyle ? Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_styled_Wrapper__WEBPACK_IMPORTED_MODULE_3__["default"])(_templateObject, wrapperStyle) : _styled_Wrapper__WEBPACK_IMPORTED_MODULE_3__["default"];
        }
    }, {
        key: 'getInputStyledComponent',
        value: function getInputStyledComponent() {
            var inputStyle = this.props.inputStyle;


            return inputStyle ? Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_styled_Input__WEBPACK_IMPORTED_MODULE_5__["default"])(_templateObject, inputStyle) : _styled_Input__WEBPACK_IMPORTED_MODULE_5__["default"];
        }
    }, {
        key: 'render',
        value: function render() {
            var _this6 = this;

            var onInputChanged = this.props.onInputChanged;

            var InputWrapper = this.getInputWrapperStyledComponent();
            var InputComponent = this.getInputStyledComponent();

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                InputWrapper,
                { onClick: this.focusInput },
                this.renderTags(),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputComponent, {
                    ref: function ref(el) {
                        return _this6.input = el;
                    },
                    onChange: onInputChanged,
                    placeholder: this.renderPlaceholder(),
                    type: 'text',
                    onKeyUp: this.onInputKeyUp,
                    onKeyDown: this.onInputKeyDown })
            );
        }
    }]);

    return TagInput;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

TagInput.propTypes = {
    tags: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
    onTagsChanged: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
    onInputChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    placeholder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    wrapperStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    inputStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    tagStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    tagDeleteStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    tagDeleteIcon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,
    addTagOnEnterKeyPressed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    hideInputPlaceholderTextIfTagsPresent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

TagInput.defaultProps = {
    placeholder: 'Type something and hit enter...',
    addTagOnEnterKeyPressed: true,
    hideInputPlaceholderTextIfTagsPresent: true
};

/* harmony default export */ __webpack_exports__["default"] = (TagInput);

/***/ }),

/***/ "./node_modules/reactjs-tag-input/dist/index.js":
/*!******************************************************!*\
  !*** ./node_modules/reactjs-tag-input/dist/index.js ***!
  \******************************************************/
/*! exports provided: TagInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TagInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TagInput */ "./node_modules/reactjs-tag-input/dist/TagInput.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TagInput", function() { return _TagInput__WEBPACK_IMPORTED_MODULE_0__["default"]; });





/***/ }),

/***/ "./node_modules/reactjs-tag-input/dist/styled/Input.js":
/*!*************************************************************!*\
  !*** ./node_modules/reactjs-tag-input/dist/styled/Input.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject = _taggedTemplateLiteral(['\n  background: #F1F3F4;\n  border: none;\n  border-radius: 3px;\n  outline: none;\n  font-size: large;\n  display: inline-block;\n  width: 100%;\n  color: #69626D;\n  font-weight: 400;\n  &::-webkit-input-placeholder {\n    font-weight: 100;\n    font-style: italic;\n    color: #69626D;\n  }\n'], ['\n  background: #F1F3F4;\n  border: none;\n  border-radius: 3px;\n  outline: none;\n  font-size: large;\n  display: inline-block;\n  width: 100%;\n  color: #69626D;\n  font-weight: 400;\n  &::-webkit-input-placeholder {\n    font-weight: 100;\n    font-style: italic;\n    color: #69626D;\n  }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Input = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].input(_templateObject);

/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./node_modules/reactjs-tag-input/dist/styled/Tag.js":
/*!***********************************************************!*\
  !*** ./node_modules/reactjs-tag-input/dist/styled/Tag.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject = _taggedTemplateLiteral(['\n    float: left;\n    background: #77B6EA;\n    color: #69626D;\n    border-radius: 5px;\n    color: white;\n    padding: 5px;\n    margin: 0 5px 5px 0;\n    letter-spacing: 1px;\n    cursor: pointer;\n'], ['\n    float: left;\n    background: #77B6EA;\n    color: #69626D;\n    border-radius: 5px;\n    color: white;\n    padding: 5px;\n    margin: 0 5px 5px 0;\n    letter-spacing: 1px;\n    cursor: pointer;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Tag = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span(_templateObject);

/* harmony default export */ __webpack_exports__["default"] = (Tag);

/***/ }),

/***/ "./node_modules/reactjs-tag-input/dist/styled/TagDelete.js":
/*!*****************************************************************!*\
  !*** ./node_modules/reactjs-tag-input/dist/styled/TagDelete.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject = _taggedTemplateLiteral(['\n    color: white;\n    font-size: 1em;\n    &:hover {\n        color: gray;\n    }\n'], ['\n    color: white;\n    font-size: 1em;\n    &:hover {\n        color: gray;\n    }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var TagDelete = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span.attrs(function (props) {
    return {
        'data-test': 'tag-delete-' + props.index
    };
})(_templateObject);

/* harmony default export */ __webpack_exports__["default"] = (TagDelete);

/***/ }),

/***/ "./node_modules/reactjs-tag-input/dist/styled/Wrapper.js":
/*!***************************************************************!*\
  !*** ./node_modules/reactjs-tag-input/dist/styled/Wrapper.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject = _taggedTemplateLiteral(['\n  background: #F1F3F4;\n  box-shadow: 3px 3px 10px rgba(0,0,0, 0.1);\n  font-family: \'Hind\', sans-serif;\n  font-weight: 400;\n  border-radius: 20px;\n  padding: 10px;\n  font-size: large;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 70%;\n'], ['\n  background: #F1F3F4;\n  box-shadow: 3px 3px 10px rgba(0,0,0, 0.1);\n  font-family: \'Hind\', sans-serif;\n  font-weight: 400;\n  border-radius: 20px;\n  padding: 10px;\n  font-size: large;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 70%;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject);

/* harmony default export */ __webpack_exports__["default"] = (Wrapper);

/***/ }),

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/styled-components/dist/styled-components.browser.esm.js ***!
  \******************************************************************************/
/*! exports provided: default, createGlobalStyle, css, isStyledComponent, keyframes, ServerStyleSheet, StyleSheetConsumer, StyleSheetContext, StyleSheetManager, ThemeConsumer, ThemeContext, ThemeProvider, withTheme, __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGlobalStyle", function() { return createGlobalStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStyledComponent", function() { return isStyledComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerStyleSheet", function() { return ServerStyleSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetConsumer", function() { return StyleSheetConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetContext", function() { return StyleSheetContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetManager", function() { return StyleSheetManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeConsumer", function() { return ThemeConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return withTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS", function() { return __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS; });
/* harmony import */ var stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stylis/stylis.min */ "./node_modules/stylis/stylis.min.js");
/* harmony import */ var stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stylis-rule-sheet */ "./node_modules/stylis-rule-sheet/index.js");
/* harmony import */ var stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js");
/* harmony import */ var merge_anything__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! merge-anything */ "./node_modules/merge-anything/dist/index.esm.js");










// 

var interleave = (function (strings, interpolations) {
  var result = [strings[0]];

  for (var i = 0, len = interpolations.length; i < len; i += 1) {
    result.push(interpolations[i], strings[i + 1]);
  }

  return result;
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

// 
var isPlainObject = (function (x) {
  return (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && x.constructor === Object;
});

// 
var EMPTY_ARRAY = Object.freeze([]);
var EMPTY_OBJECT = Object.freeze({});

// 
function isFunction(test) {
  return typeof test === 'function';
}

// 

function getComponentName(target) {
  return ( true ? typeof target === 'string' && target : undefined) || target.displayName || target.name || 'Component';
}

// 
function isStatelessFunction(test) {
  return typeof test === 'function' && !(test.prototype && test.prototype.isReactComponent);
}

// 
function isStyledComponent(target) {
  return target && typeof target.styledComponentId === 'string';
}

// 

var SC_ATTR = typeof process !== 'undefined' && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || 'data-styled';

var SC_VERSION_ATTR = 'data-styled-version';

var SC_STREAM_ATTR = 'data-styled-streamed';

var IS_BROWSER = typeof window !== 'undefined' && 'HTMLElement' in window;

var DISABLE_SPEEDY = typeof SC_DISABLE_SPEEDY === 'boolean' && SC_DISABLE_SPEEDY || typeof process !== 'undefined' && (process.env.REACT_APP_SC_DISABLE_SPEEDY || process.env.SC_DISABLE_SPEEDY) || "development" !== 'production';

// Shared empty execution context when generating static styles
var STATIC_EXECUTION_CONTEXT = {};

// 


/**
 * Parse errors.md and turn it into a simple hash of code: message
 */
var ERRORS =  true ? {
  "1": "Cannot create styled-component for component: %s.\n\n",
  "2": "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
  "3": "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
  "4": "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",
  "5": "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",
  "6": "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
  "7": "ThemeProvider: Please return an object from your \"theme\" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n",
  "8": "ThemeProvider: Please make your \"theme\" prop an object.\n\n",
  "9": "Missing document `<head>`\n\n",
  "10": "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
  "11": "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",
  "12": "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",
  "13": "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n"
} : undefined;

/**
 * super basic version of sprintf
 */
function format() {
  var a = arguments.length <= 0 ? undefined : arguments[0];
  var b = [];

  for (var c = 1, len = arguments.length; c < len; c += 1) {
    b.push(arguments.length <= c ? undefined : arguments[c]);
  }

  b.forEach(function (d) {
    a = a.replace(/%[a-z]/, d);
  });

  return a;
}

/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 */

var StyledComponentsError = function (_Error) {
  inherits(StyledComponentsError, _Error);

  function StyledComponentsError(code) {
    classCallCheck(this, StyledComponentsError);

    for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      interpolations[_key - 1] = arguments[_key];
    }

    if (false) { var _this; } else {
      var _this = possibleConstructorReturn(this, _Error.call(this, format.apply(undefined, [ERRORS[code]].concat(interpolations)).trim()));
    }
    return possibleConstructorReturn(_this);
  }

  return StyledComponentsError;
}(Error);

// 
var SC_COMPONENT_ID = /^[^\S\n]*?\/\* sc-component-id:\s*(\S+)\s+\*\//gm;

var extractComps = (function (maybeCSS) {
  var css = '' + (maybeCSS || ''); // Definitely a string, and a clone
  var existingComponents = [];
  css.replace(SC_COMPONENT_ID, function (match, componentId, matchIndex) {
    existingComponents.push({ componentId: componentId, matchIndex: matchIndex });
    return match;
  });
  return existingComponents.map(function (_ref, i) {
    var componentId = _ref.componentId,
        matchIndex = _ref.matchIndex;

    var nextComp = existingComponents[i + 1];
    var cssFromDOM = nextComp ? css.slice(matchIndex, nextComp.matchIndex) : css.slice(matchIndex);
    return { componentId: componentId, cssFromDOM: cssFromDOM };
  });
});

// 

var COMMENT_REGEX = /^\s*\/\/.*$/gm;

// NOTE: This stylis instance is only used to split rules from SSR'd style tags
var stylisSplitter = new stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0___default.a({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: false,
  compress: false,
  semicolon: true
});

var stylis = new stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0___default.a({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: true,
  compress: false,
  semicolon: false // NOTE: This means "autocomplete missing semicolons"
});

// Wrap `insertRulePlugin to build a list of rules,
// and then make our own plugin to return the rules. This
// makes it easier to hook into the existing SSR architecture

var parsingRules = [];

// eslint-disable-next-line consistent-return
var returnRulesPlugin = function returnRulesPlugin(context) {
  if (context === -2) {
    var parsedRules = parsingRules;
    parsingRules = [];
    return parsedRules;
  }
};

var parseRulesPlugin = stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1___default()(function (rule) {
  parsingRules.push(rule);
});

var _componentId = void 0;
var _selector = void 0;
var _selectorRegexp = void 0;

var selfReferenceReplacer = function selfReferenceReplacer(match, offset, string) {
  if (
  // the first self-ref is always untouched
  offset > 0 &&
  // there should be at least two self-refs to do a replacement (.b > .b)
  string.slice(0, offset).indexOf(_selector) !== -1 &&
  // no consecutive self refs (.b.b); that is a precedence boost and treated differently
  string.slice(offset - _selector.length, offset) !== _selector) {
    return '.' + _componentId;
  }

  return match;
};

/**
 * When writing a style like
 *
 * & + & {
 *   color: red;
 * }
 *
 * The second ampersand should be a reference to the static component class. stylis
 * has no knowledge of static class so we have to intelligently replace the base selector.
 */
var selfReferenceReplacementPlugin = function selfReferenceReplacementPlugin(context, _, selectors) {
  if (context === 2 && selectors.length && selectors[0].lastIndexOf(_selector) > 0) {
    // eslint-disable-next-line no-param-reassign
    selectors[0] = selectors[0].replace(_selectorRegexp, selfReferenceReplacer);
  }
};

stylis.use([selfReferenceReplacementPlugin, parseRulesPlugin, returnRulesPlugin]);
stylisSplitter.use([parseRulesPlugin, returnRulesPlugin]);

var splitByRules = function splitByRules(css) {
  return stylisSplitter('', css);
};

function stringifyRules(rules, selector, prefix) {
  var componentId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '&';

  var flatCSS = rules.join('').replace(COMMENT_REGEX, ''); // replace JS comments

  var cssStr = selector && prefix ? prefix + ' ' + selector + ' { ' + flatCSS + ' }' : flatCSS;

  // stylis has no concept of state to be passed to plugins
  // but since JS is single=threaded, we can rely on that to ensure
  // these properties stay in sync with the current stylis run
  _componentId = componentId;
  _selector = selector;
  _selectorRegexp = new RegExp('\\' + _selector + '\\b', 'g');

  return stylis(prefix || !selector ? '' : selector, cssStr);
}

// 
/* eslint-disable camelcase, no-undef */

var getNonce = (function () {
  return  true ? __webpack_require__.nc : undefined;
});

// 
/* These are helpers for the StyleTags to keep track of the injected
 * rule names for each (component) ID that they're keeping track of.
 * They're crucial for detecting whether a name has already been
 * injected.
 * (This excludes rehydrated names) */

/* adds a new ID:name pairing to a names dictionary */
var addNameForId = function addNameForId(names, id, name) {
  if (name) {
    // eslint-disable-next-line no-param-reassign
    var namesForId = names[id] || (names[id] = Object.create(null));
    namesForId[name] = true;
  }
};

/* resets an ID entirely by overwriting it in the dictionary */
var resetIdNames = function resetIdNames(names, id) {
  // eslint-disable-next-line no-param-reassign
  names[id] = Object.create(null);
};

/* factory for a names dictionary checking the existance of an ID:name pairing */
var hasNameForId = function hasNameForId(names) {
  return function (id, name) {
    return names[id] !== undefined && names[id][name];
  };
};

/* stringifies names for the html/element output */
var stringifyNames = function stringifyNames(names) {
  var str = '';
  // eslint-disable-next-line guard-for-in
  for (var id in names) {
    str += Object.keys(names[id]).join(' ') + ' ';
  }
  return str.trim();
};

/* clones the nested names dictionary */
var cloneNames = function cloneNames(names) {
  var clone = Object.create(null);
  // eslint-disable-next-line guard-for-in
  for (var id in names) {
    clone[id] = _extends({}, names[id]);
  }
  return clone;
};

// 

/* These are helpers that deal with the insertRule (aka speedy) API
 * They are used in the StyleTags and specifically the speedy tag
 */

/* retrieve a sheet for a given style tag */
var sheetForTag = function sheetForTag(tag) {
  // $FlowFixMe
  if (tag.sheet) return tag.sheet;

  /* Firefox quirk requires us to step through all stylesheets to find one owned by the given tag */
  var size = tag.ownerDocument.styleSheets.length;
  for (var i = 0; i < size; i += 1) {
    var sheet = tag.ownerDocument.styleSheets[i];
    // $FlowFixMe
    if (sheet.ownerNode === tag) return sheet;
  }

  /* we should always be able to find a tag */
  throw new StyledComponentsError(10);
};

/* insert a rule safely and return whether it was actually injected */
var safeInsertRule = function safeInsertRule(sheet, cssRule, index) {
  /* abort early if cssRule string is falsy */
  if (!cssRule) return false;

  var maxIndex = sheet.cssRules.length;

  try {
    /* use insertRule and cap passed index with maxIndex (no of cssRules) */
    sheet.insertRule(cssRule, index <= maxIndex ? index : maxIndex);
  } catch (err) {
    /* any error indicates an invalid rule */
    return false;
  }

  return true;
};

/* deletes `size` rules starting from `removalIndex` */
var deleteRules = function deleteRules(sheet, removalIndex, size) {
  var lowerBound = removalIndex - size;
  for (var i = removalIndex; i > lowerBound; i -= 1) {
    sheet.deleteRule(i);
  }
};

// 

/* this marker separates component styles and is important for rehydration */
var makeTextMarker = function makeTextMarker(id) {
  return '\n/* sc-component-id: ' + id + ' */\n';
};

/* add up all numbers in array up until and including the index */
var addUpUntilIndex = function addUpUntilIndex(sizes, index) {
  var totalUpToIndex = 0;
  for (var i = 0; i <= index; i += 1) {
    totalUpToIndex += sizes[i];
  }

  return totalUpToIndex;
};

/* create a new style tag after lastEl */
var makeStyleTag = function makeStyleTag(target, tagEl, insertBefore) {
  var targetDocument = document;
  if (target) targetDocument = target.ownerDocument;else if (tagEl) targetDocument = tagEl.ownerDocument;

  var el = targetDocument.createElement('style');
  el.setAttribute(SC_ATTR, '');
  el.setAttribute(SC_VERSION_ATTR, "4.4.1");

  var nonce = getNonce();
  if (nonce) {
    el.setAttribute('nonce', nonce);
  }

  /* Work around insertRule quirk in EdgeHTML */
  el.appendChild(targetDocument.createTextNode(''));

  if (target && !tagEl) {
    /* Append to target when no previous element was passed */
    target.appendChild(el);
  } else {
    if (!tagEl || !target || !tagEl.parentNode) {
      throw new StyledComponentsError(6);
    }

    /* Insert new style tag after the previous one */
    tagEl.parentNode.insertBefore(el, insertBefore ? tagEl : tagEl.nextSibling);
  }

  return el;
};

/* takes a css factory function and outputs an html styled tag factory */
var wrapAsHtmlTag = function wrapAsHtmlTag(css, names) {
  return function (additionalAttrs) {
    var nonce = getNonce();
    var attrs = [nonce && 'nonce="' + nonce + '"', SC_ATTR + '="' + stringifyNames(names) + '"', SC_VERSION_ATTR + '="' + "4.4.1" + '"', additionalAttrs];

    var htmlAttr = attrs.filter(Boolean).join(' ');
    return '<style ' + htmlAttr + '>' + css() + '</style>';
  };
};

/* takes a css factory function and outputs an element factory */
var wrapAsElement = function wrapAsElement(css, names) {
  return function () {
    var _props;

    var props = (_props = {}, _props[SC_ATTR] = stringifyNames(names), _props[SC_VERSION_ATTR] = "4.4.1", _props);

    var nonce = getNonce();
    if (nonce) {
      // $FlowFixMe
      props.nonce = nonce;
    }

    // eslint-disable-next-line react/no-danger
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement('style', _extends({}, props, { dangerouslySetInnerHTML: { __html: css() } }));
  };
};

var getIdsFromMarkersFactory = function getIdsFromMarkersFactory(markers) {
  return function () {
    return Object.keys(markers);
  };
};

/* speedy tags utilise insertRule */
var makeSpeedyTag = function makeSpeedyTag(el, getImportRuleTag) {
  var names = Object.create(null);
  var markers = Object.create(null);
  var sizes = [];

  var extractImport = getImportRuleTag !== undefined;
  /* indicates whether getImportRuleTag was called */
  var usedImportRuleTag = false;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    markers[id] = sizes.length;
    sizes.push(0);
    resetIdNames(names, id);

    return markers[id];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    var sheet = sheetForTag(el);
    var insertIndex = addUpUntilIndex(sizes, marker);

    var injectedRules = 0;
    var importRules = [];
    var cssRulesSize = cssRules.length;

    for (var i = 0; i < cssRulesSize; i += 1) {
      var cssRule = cssRules[i];
      var mayHaveImport = extractImport; /* @import rules are reordered to appear first */
      if (mayHaveImport && cssRule.indexOf('@import') !== -1) {
        importRules.push(cssRule);
      } else if (safeInsertRule(sheet, cssRule, insertIndex + injectedRules)) {
        mayHaveImport = false;
        injectedRules += 1;
      }
    }

    if (extractImport && importRules.length > 0) {
      usedImportRuleTag = true;
      // $FlowFixMe
      getImportRuleTag().insertRules(id + '-import', importRules);
    }

    sizes[marker] += injectedRules; /* add up no of injected rules */
    addNameForId(names, id, name);
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;
    // $FlowFixMe
    if (el.isConnected === false) return;

    var size = sizes[marker];
    var sheet = sheetForTag(el);
    var removalIndex = addUpUntilIndex(sizes, marker) - 1;
    deleteRules(sheet, removalIndex, size);
    sizes[marker] = 0;
    resetIdNames(names, id);

    if (extractImport && usedImportRuleTag) {
      // $FlowFixMe
      getImportRuleTag().removeRules(id + '-import');
    }
  };

  var css = function css() {
    var _sheetForTag = sheetForTag(el),
        cssRules = _sheetForTag.cssRules;

    var str = '';

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      str += makeTextMarker(id);
      var marker = markers[id];
      var end = addUpUntilIndex(sizes, marker);
      var size = sizes[marker];
      for (var i = end - size; i < end; i += 1) {
        var rule = cssRules[i];
        if (rule !== undefined) {
          str += rule.cssText;
        }
      }
    }

    return str;
  };

  return {
    clone: function clone() {
      throw new StyledComponentsError(5);
    },

    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: el,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };
};

var makeTextNode = function makeTextNode(targetDocument, id) {
  return targetDocument.createTextNode(makeTextMarker(id));
};

var makeBrowserTag = function makeBrowserTag(el, getImportRuleTag) {
  var names = Object.create(null);
  var markers = Object.create(null);

  var extractImport = getImportRuleTag !== undefined;

  /* indicates whether getImportRuleTag was called */
  var usedImportRuleTag = false;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    markers[id] = makeTextNode(el.ownerDocument, id);
    el.appendChild(markers[id]);
    names[id] = Object.create(null);

    return markers[id];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    var importRules = [];
    var cssRulesSize = cssRules.length;

    for (var i = 0; i < cssRulesSize; i += 1) {
      var rule = cssRules[i];
      var mayHaveImport = extractImport;
      if (mayHaveImport && rule.indexOf('@import') !== -1) {
        importRules.push(rule);
      } else {
        mayHaveImport = false;
        var separator = i === cssRulesSize - 1 ? '' : ' ';
        marker.appendData('' + rule + separator);
      }
    }

    addNameForId(names, id, name);

    if (extractImport && importRules.length > 0) {
      usedImportRuleTag = true;
      // $FlowFixMe
      getImportRuleTag().insertRules(id + '-import', importRules);
    }
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;

    /* create new empty text node and replace the current one */
    var newMarker = makeTextNode(el.ownerDocument, id);
    el.replaceChild(newMarker, marker);
    markers[id] = newMarker;
    resetIdNames(names, id);

    if (extractImport && usedImportRuleTag) {
      // $FlowFixMe
      getImportRuleTag().removeRules(id + '-import');
    }
  };

  var css = function css() {
    var str = '';

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      str += markers[id].data;
    }

    return str;
  };

  return {
    clone: function clone() {
      throw new StyledComponentsError(5);
    },

    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: el,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };
};

var makeServerTag = function makeServerTag(namesArg, markersArg) {
  var names = namesArg === undefined ? Object.create(null) : namesArg;
  var markers = markersArg === undefined ? Object.create(null) : markersArg;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    return markers[id] = [''];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    marker[0] += cssRules.join(' ');
    addNameForId(names, id, name);
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;
    marker[0] = '';
    resetIdNames(names, id);
  };

  var css = function css() {
    var str = '';
    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      var cssForId = markers[id][0];
      if (cssForId) {
        str += makeTextMarker(id) + cssForId;
      }
    }
    return str;
  };

  var clone = function clone() {
    var namesClone = cloneNames(names);
    var markersClone = Object.create(null);

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      markersClone[id] = [markers[id][0]];
    }

    return makeServerTag(namesClone, markersClone);
  };

  var tag = {
    clone: clone,
    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: null,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };

  return tag;
};

var makeTag = function makeTag(target, tagEl, forceServer, insertBefore, getImportRuleTag) {
  if (IS_BROWSER && !forceServer) {
    var el = makeStyleTag(target, tagEl, insertBefore);

    if (DISABLE_SPEEDY) {
      return makeBrowserTag(el, getImportRuleTag);
    } else {
      return makeSpeedyTag(el, getImportRuleTag);
    }
  }

  return makeServerTag();
};

var rehydrate = function rehydrate(tag, els, extracted) {
  /* add all extracted components to the new tag */
  for (var i = 0, len = extracted.length; i < len; i += 1) {
    var _extracted$i = extracted[i],
        componentId = _extracted$i.componentId,
        cssFromDOM = _extracted$i.cssFromDOM;

    var cssRules = splitByRules(cssFromDOM);
    tag.insertRules(componentId, cssRules);
  }

  /* remove old HTMLStyleElements, since they have been rehydrated */
  for (var _i = 0, _len = els.length; _i < _len; _i += 1) {
    var el = els[_i];
    if (el.parentNode) {
      el.parentNode.removeChild(el);
    }
  }
};

// 

var SPLIT_REGEX = /\s+/;

/* determine the maximum number of components before tags are sharded */
var MAX_SIZE = void 0;
if (IS_BROWSER) {
  /* in speedy mode we can keep a lot more rules in a sheet before a slowdown can be expected */
  MAX_SIZE = DISABLE_SPEEDY ? 40 : 1000;
} else {
  /* for servers we do not need to shard at all */
  MAX_SIZE = -1;
}

var sheetRunningId = 0;
var master = void 0;

var StyleSheet = function () {

  /* a map from ids to tags */

  /* deferred rules for a given id */

  /* this is used for not reinjecting rules via hasNameForId() */

  /* when rules for an id are removed using remove() we have to ignore rehydratedNames for it */

  /* a list of tags belonging to this StyleSheet */

  /* a tag for import rules */

  /* current capacity until a new tag must be created */

  /* children (aka clones) of this StyleSheet inheriting all and future injections */

  function StyleSheet() {
    var _this = this;

    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : IS_BROWSER ? document.head : null;
    var forceServer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    classCallCheck(this, StyleSheet);

    this.getImportRuleTag = function () {
      var importRuleTag = _this.importRuleTag;

      if (importRuleTag !== undefined) {
        return importRuleTag;
      }

      var firstTag = _this.tags[0];
      var insertBefore = true;

      return _this.importRuleTag = makeTag(_this.target, firstTag ? firstTag.styleTag : null, _this.forceServer, insertBefore);
    };

    sheetRunningId += 1;
    this.id = sheetRunningId;
    this.forceServer = forceServer;
    this.target = forceServer ? null : target;
    this.tagMap = {};
    this.deferred = {};
    this.rehydratedNames = {};
    this.ignoreRehydratedNames = {};
    this.tags = [];
    this.capacity = 1;
    this.clones = [];
  }

  /* rehydrate all SSR'd style tags */


  StyleSheet.prototype.rehydrate = function rehydrate$$1() {
    if (!IS_BROWSER || this.forceServer) return this;

    var els = [];
    var extracted = [];
    var isStreamed = false;

    /* retrieve all of our SSR style elements from the DOM */
    var nodes = document.querySelectorAll('style[' + SC_ATTR + '][' + SC_VERSION_ATTR + '="' + "4.4.1" + '"]');

    var nodesSize = nodes.length;

    /* abort rehydration if no previous style tags were found */
    if (!nodesSize) return this;

    for (var i = 0; i < nodesSize; i += 1) {
      var el = nodes[i];

      /* check if style tag is a streamed tag */
      if (!isStreamed) isStreamed = !!el.getAttribute(SC_STREAM_ATTR);

      /* retrieve all component names */
      var elNames = (el.getAttribute(SC_ATTR) || '').trim().split(SPLIT_REGEX);
      var elNamesSize = elNames.length;
      for (var j = 0, name; j < elNamesSize; j += 1) {
        name = elNames[j];
        /* add rehydrated name to sheet to avoid re-adding styles */
        this.rehydratedNames[name] = true;
      }

      /* extract all components and their CSS */
      extracted.push.apply(extracted, extractComps(el.textContent));

      /* store original HTMLStyleElement */
      els.push(el);
    }

    /* abort rehydration if nothing was extracted */
    var extractedSize = extracted.length;
    if (!extractedSize) return this;

    /* create a tag to be used for rehydration */
    var tag = this.makeTag(null);

    rehydrate(tag, els, extracted);

    /* reset capacity and adjust MAX_SIZE by the initial size of the rehydration */
    this.capacity = Math.max(1, MAX_SIZE - extractedSize);
    this.tags.push(tag);

    /* retrieve all component ids */
    for (var _j = 0; _j < extractedSize; _j += 1) {
      this.tagMap[extracted[_j].componentId] = tag;
    }

    return this;
  };

  /* retrieve a "master" instance of StyleSheet which is typically used when no other is available
   * The master StyleSheet is targeted by createGlobalStyle, keyframes, and components outside of any
    * StyleSheetManager's context */


  /* reset the internal "master" instance */
  StyleSheet.reset = function reset() {
    var forceServer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    master = new StyleSheet(undefined, forceServer).rehydrate();
  };

  /* adds "children" to the StyleSheet that inherit all of the parents' rules
   * while their own rules do not affect the parent */


  StyleSheet.prototype.clone = function clone() {
    var sheet = new StyleSheet(this.target, this.forceServer);

    /* add to clone array */
    this.clones.push(sheet);

    /* clone all tags */
    sheet.tags = this.tags.map(function (tag) {
      var ids = tag.getIds();
      var newTag = tag.clone();

      /* reconstruct tagMap */
      for (var i = 0; i < ids.length; i += 1) {
        sheet.tagMap[ids[i]] = newTag;
      }

      return newTag;
    });

    /* clone other maps */
    sheet.rehydratedNames = _extends({}, this.rehydratedNames);
    sheet.deferred = _extends({}, this.deferred);

    return sheet;
  };

  /* force StyleSheet to create a new tag on the next injection */


  StyleSheet.prototype.sealAllTags = function sealAllTags() {
    this.capacity = 1;

    this.tags.forEach(function (tag) {
      // eslint-disable-next-line no-param-reassign
      tag.sealed = true;
    });
  };

  StyleSheet.prototype.makeTag = function makeTag$$1(tag) {
    var lastEl = tag ? tag.styleTag : null;
    var insertBefore = false;

    return makeTag(this.target, lastEl, this.forceServer, insertBefore, this.getImportRuleTag);
  };

  /* get a tag for a given componentId, assign the componentId to one, or shard */
  StyleSheet.prototype.getTagForId = function getTagForId(id) {
    /* simply return a tag, when the componentId was already assigned one */
    var prev = this.tagMap[id];
    if (prev !== undefined && !prev.sealed) {
      return prev;
    }

    var tag = this.tags[this.tags.length - 1];

    /* shard (create a new tag) if the tag is exhausted (See MAX_SIZE) */
    this.capacity -= 1;

    if (this.capacity === 0) {
      this.capacity = MAX_SIZE;
      tag = this.makeTag(tag);
      this.tags.push(tag);
    }

    return this.tagMap[id] = tag;
  };

  /* mainly for createGlobalStyle to check for its id */


  StyleSheet.prototype.hasId = function hasId(id) {
    return this.tagMap[id] !== undefined;
  };

  /* caching layer checking id+name to already have a corresponding tag and injected rules */


  StyleSheet.prototype.hasNameForId = function hasNameForId(id, name) {
    /* exception for rehydrated names which are checked separately */
    if (this.ignoreRehydratedNames[id] === undefined && this.rehydratedNames[name]) {
      return true;
    }

    var tag = this.tagMap[id];
    return tag !== undefined && tag.hasNameForId(id, name);
  };

  /* registers a componentId and registers it on its tag */


  StyleSheet.prototype.deferredInject = function deferredInject(id, cssRules) {
    /* don't inject when the id is already registered */
    if (this.tagMap[id] !== undefined) return;

    var clones = this.clones;

    for (var i = 0; i < clones.length; i += 1) {
      clones[i].deferredInject(id, cssRules);
    }

    this.getTagForId(id).insertMarker(id);
    this.deferred[id] = cssRules;
  };

  /* injects rules for a given id with a name that will need to be cached */


  StyleSheet.prototype.inject = function inject(id, cssRules, name) {
    var clones = this.clones;


    for (var i = 0; i < clones.length; i += 1) {
      clones[i].inject(id, cssRules, name);
    }

    var tag = this.getTagForId(id);

    /* add deferred rules for component */
    if (this.deferred[id] !== undefined) {
      // Combine passed cssRules with previously deferred CSS rules
      // NOTE: We cannot mutate the deferred array itself as all clones
      // do the same (see clones[i].inject)
      var rules = this.deferred[id].concat(cssRules);
      tag.insertRules(id, rules, name);

      this.deferred[id] = undefined;
    } else {
      tag.insertRules(id, cssRules, name);
    }
  };

  /* removes all rules for a given id, which doesn't remove its marker but resets it */


  StyleSheet.prototype.remove = function remove(id) {
    var tag = this.tagMap[id];
    if (tag === undefined) return;

    var clones = this.clones;

    for (var i = 0; i < clones.length; i += 1) {
      clones[i].remove(id);
    }

    /* remove all rules from the tag */
    tag.removeRules(id);

    /* ignore possible rehydrated names */
    this.ignoreRehydratedNames[id] = true;

    /* delete possible deferred rules */
    this.deferred[id] = undefined;
  };

  StyleSheet.prototype.toHTML = function toHTML() {
    return this.tags.map(function (tag) {
      return tag.toHTML();
    }).join('');
  };

  StyleSheet.prototype.toReactElements = function toReactElements() {
    var id = this.id;


    return this.tags.map(function (tag, i) {
      var key = 'sc-' + id + '-' + i;
      return Object(react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"])(tag.toElement(), { key: key });
    });
  };

  createClass(StyleSheet, null, [{
    key: 'master',
    get: function get$$1() {
      return master || (master = new StyleSheet().rehydrate());
    }

    /* NOTE: This is just for backwards-compatibility with jest-styled-components */

  }, {
    key: 'instance',
    get: function get$$1() {
      return StyleSheet.master;
    }
  }]);
  return StyleSheet;
}();

// 

var Keyframes = function () {
  function Keyframes(name, rules) {
    var _this = this;

    classCallCheck(this, Keyframes);

    this.inject = function (styleSheet) {
      if (!styleSheet.hasNameForId(_this.id, _this.name)) {
        styleSheet.inject(_this.id, _this.rules, _this.name);
      }
    };

    this.toString = function () {
      throw new StyledComponentsError(12, String(_this.name));
    };

    this.name = name;
    this.rules = rules;

    this.id = 'sc-keyframes-' + name;
  }

  Keyframes.prototype.getName = function getName() {
    return this.name;
  };

  return Keyframes;
}();

// 

/**
 * inlined version of
 * https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/hyphenateStyleName.js
 */

var uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;

/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenateStyleName(string) {
  return string.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
}

// 

// Taken from https://github.com/facebook/react/blob/b87aabdfe1b7461e7331abb3601d9e6bb27544bc/packages/react-dom/src/shared/dangerousStyleValue.js
function addUnitIfNeeded(name, value) {
  // https://github.com/amilajack/eslint-plugin-flowtype-errors/issues/133
  // $FlowFixMe
  if (value == null || typeof value === 'boolean' || value === '') {
    return '';
  }

  if (typeof value === 'number' && value !== 0 && !(name in _emotion_unitless__WEBPACK_IMPORTED_MODULE_3__["default"])) {
    return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers
  }

  return String(value).trim();
}

// 

/**
 * It's falsish not falsy because 0 is allowed.
 */
var isFalsish = function isFalsish(chunk) {
  return chunk === undefined || chunk === null || chunk === false || chunk === '';
};

var objToCssArray = function objToCssArray(obj, prevKey) {
  var rules = [];
  var keys = Object.keys(obj);

  keys.forEach(function (key) {
    if (!isFalsish(obj[key])) {
      if (isPlainObject(obj[key])) {
        rules.push.apply(rules, objToCssArray(obj[key], key));

        return rules;
      } else if (isFunction(obj[key])) {
        rules.push(hyphenateStyleName(key) + ':', obj[key], ';');

        return rules;
      }
      rules.push(hyphenateStyleName(key) + ': ' + addUnitIfNeeded(key, obj[key]) + ';');
    }
    return rules;
  });

  return prevKey ? [prevKey + ' {'].concat(rules, ['}']) : rules;
};

function flatten(chunk, executionContext, styleSheet) {
  if (Array.isArray(chunk)) {
    var ruleSet = [];

    for (var i = 0, len = chunk.length, result; i < len; i += 1) {
      result = flatten(chunk[i], executionContext, styleSheet);

      if (result === null) continue;else if (Array.isArray(result)) ruleSet.push.apply(ruleSet, result);else ruleSet.push(result);
    }

    return ruleSet;
  }

  if (isFalsish(chunk)) {
    return null;
  }

  /* Handle other components */
  if (isStyledComponent(chunk)) {
    return '.' + chunk.styledComponentId;
  }

  /* Either execute or defer the function */
  if (isFunction(chunk)) {
    if (isStatelessFunction(chunk) && executionContext) {
      var _result = chunk(executionContext);

      if ( true && Object(react_is__WEBPACK_IMPORTED_MODULE_4__["isElement"])(_result)) {
        // eslint-disable-next-line no-console
        console.warn(getComponentName(chunk) + ' is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.');
      }

      return flatten(_result, executionContext, styleSheet);
    } else return chunk;
  }

  if (chunk instanceof Keyframes) {
    if (styleSheet) {
      chunk.inject(styleSheet);
      return chunk.getName();
    } else return chunk;
  }

  /* Handle objects */
  return isPlainObject(chunk) ? objToCssArray(chunk) : chunk.toString();
}

// 

function css(styles) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  if (isFunction(styles) || isPlainObject(styles)) {
    // $FlowFixMe
    return flatten(interleave(EMPTY_ARRAY, [styles].concat(interpolations)));
  }

  // $FlowFixMe
  return flatten(interleave(styles, interpolations));
}

// 

function constructWithOptions(componentConstructor, tag) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EMPTY_OBJECT;

  if (!Object(react_is__WEBPACK_IMPORTED_MODULE_4__["isValidElementType"])(tag)) {
    throw new StyledComponentsError(1, String(tag));
  }

  /* This is callable directly as a template function */
  // $FlowFixMe: Not typed to avoid destructuring arguments
  var templateFunction = function templateFunction() {
    return componentConstructor(tag, options, css.apply(undefined, arguments));
  };

  /* If config methods are called, wrap up a new template function and merge options */
  templateFunction.withConfig = function (config) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, config));
  };

  /* Modify/inject new props at runtime */
  templateFunction.attrs = function (attrs) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, {
      attrs: Array.prototype.concat(options.attrs, attrs).filter(Boolean)
    }));
  };

  return templateFunction;
}

// 
// Source: https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
function murmurhash(c) {
  for (var e = c.length | 0, a = e | 0, d = 0, b; e >= 4;) {
    b = c.charCodeAt(d) & 255 | (c.charCodeAt(++d) & 255) << 8 | (c.charCodeAt(++d) & 255) << 16 | (c.charCodeAt(++d) & 255) << 24, b = 1540483477 * (b & 65535) + ((1540483477 * (b >>> 16) & 65535) << 16), b ^= b >>> 24, b = 1540483477 * (b & 65535) + ((1540483477 * (b >>> 16) & 65535) << 16), a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16) ^ b, e -= 4, ++d;
  }
  switch (e) {
    case 3:
      a ^= (c.charCodeAt(d + 2) & 255) << 16;
    case 2:
      a ^= (c.charCodeAt(d + 1) & 255) << 8;
    case 1:
      a ^= c.charCodeAt(d) & 255, a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16);
  }
  a ^= a >>> 13;
  a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16);
  return (a ^ a >>> 15) >>> 0;
}

// 
/* eslint-disable no-bitwise */

/* This is the "capacity" of our alphabet i.e. 2x26 for all letters plus their capitalised
 * counterparts */
var charsLength = 52;

/* start at 75 for 'a' until 'z' (25) and then start at 65 for capitalised letters */
var getAlphabeticChar = function getAlphabeticChar(code) {
  return String.fromCharCode(code + (code > 25 ? 39 : 97));
};

/* input a number, usually a hash and convert it to base-52 */
function generateAlphabeticName(code) {
  var name = '';
  var x = void 0;

  /* get a char and divide by alphabet-length */
  for (x = code; x > charsLength; x = Math.floor(x / charsLength)) {
    name = getAlphabeticChar(x % charsLength) + name;
  }

  return getAlphabeticChar(x % charsLength) + name;
}

// 

function hasFunctionObjectKey(obj) {
  // eslint-disable-next-line guard-for-in, no-restricted-syntax
  for (var key in obj) {
    if (isFunction(obj[key])) {
      return true;
    }
  }

  return false;
}

function isStaticRules(rules, attrs) {
  for (var i = 0; i < rules.length; i += 1) {
    var rule = rules[i];

    // recursive case
    if (Array.isArray(rule) && !isStaticRules(rule, attrs)) {
      return false;
    } else if (isFunction(rule) && !isStyledComponent(rule)) {
      // functions are allowed to be static if they're just being
      // used to get the classname of a nested styled component
      return false;
    }
  }

  if (attrs.some(function (x) {
    return isFunction(x) || hasFunctionObjectKey(x);
  })) return false;

  return true;
}

// 

/* combines hashStr (murmurhash) and nameGenerator for convenience */
var hasher = function hasher(str) {
  return generateAlphabeticName(murmurhash(str));
};

/*
 ComponentStyle is all the CSS-specific stuff, not
 the React-specific stuff.
 */

var ComponentStyle = function () {
  function ComponentStyle(rules, attrs, componentId) {
    classCallCheck(this, ComponentStyle);

    this.rules = rules;
    this.isStatic =  false && false;
    this.componentId = componentId;

    if (!StyleSheet.master.hasId(componentId)) {
      StyleSheet.master.deferredInject(componentId, []);
    }
  }

  /*
   * Flattens a rule set into valid CSS
   * Hashes it, wraps the whole chunk in a .hash1234 {}
   * Returns the hash to be injected on render()
   * */


  ComponentStyle.prototype.generateAndInjectStyles = function generateAndInjectStyles(executionContext, styleSheet) {
    var isStatic = this.isStatic,
        componentId = this.componentId,
        lastClassName = this.lastClassName;

    if (IS_BROWSER && isStatic && typeof lastClassName === 'string' && styleSheet.hasNameForId(componentId, lastClassName)) {
      return lastClassName;
    }

    var flatCSS = flatten(this.rules, executionContext, styleSheet);
    var name = hasher(this.componentId + flatCSS.join(''));
    if (!styleSheet.hasNameForId(componentId, name)) {
      styleSheet.inject(this.componentId, stringifyRules(flatCSS, '.' + name, undefined, componentId), name);
    }

    this.lastClassName = name;
    return name;
  };

  ComponentStyle.generateName = function generateName(str) {
    return hasher(str);
  };

  return ComponentStyle;
}();

// 

var LIMIT = 200;

var createWarnTooManyClasses = (function (displayName) {
  var generatedClasses = {};
  var warningSeen = false;

  return function (className) {
    if (!warningSeen) {
      generatedClasses[className] = true;
      if (Object.keys(generatedClasses).length >= LIMIT) {
        // Unable to find latestRule in test environment.
        /* eslint-disable no-console, prefer-template */
        console.warn('Over ' + LIMIT + ' classes were generated for component ' + displayName + '. \n' + 'Consider using the attrs method, together with a style object for frequently changed styles.\n' + 'Example:\n' + '  const Component = styled.div.attrs(props => ({\n' + '    style: {\n' + '      background: props.background,\n' + '    },\n' + '  }))`width: 100%;`\n\n' + '  <Component />');
        warningSeen = true;
        generatedClasses = {};
      }
    }
  };
});

// 

var determineTheme = (function (props, fallbackTheme) {
  var defaultProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EMPTY_OBJECT;

  // Props should take precedence over ThemeProvider, which should take precedence over
  // defaultProps, but React automatically puts defaultProps on props.

  /* eslint-disable react/prop-types, flowtype-errors/show-errors */
  var isDefaultTheme = defaultProps ? props.theme === defaultProps.theme : false;
  var theme = props.theme && !isDefaultTheme ? props.theme : fallbackTheme || defaultProps.theme;
  /* eslint-enable */

  return theme;
});

// 
var escapeRegex = /[[\].#*$><+~=|^:(),"'`-]+/g;
var dashesAtEnds = /(^-|-$)/g;

/**
 * TODO: Explore using CSS.escape when it becomes more available
 * in evergreen browsers.
 */
function escape(str) {
  return str
  // Replace all possible CSS selectors
  .replace(escapeRegex, '-')

  // Remove extraneous hyphens at the start and end
  .replace(dashesAtEnds, '');
}

// 

function isTag(target) {
  return typeof target === 'string' && ( true ? target.charAt(0) === target.charAt(0).toLowerCase() : undefined);
}

// 

function generateDisplayName(target) {
  // $FlowFixMe
  return isTag(target) ? 'styled.' + target : 'Styled(' + getComponentName(target) + ')';
}

var _TYPE_STATICS;

var REACT_STATICS = {
  childContextTypes: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDerivedStateFromProps: true,
  propTypes: true,
  type: true
};

var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};

var TYPE_STATICS = (_TYPE_STATICS = {}, _TYPE_STATICS[react_is__WEBPACK_IMPORTED_MODULE_4__["ForwardRef"]] = {
  $$typeof: true,
  render: true
}, _TYPE_STATICS);

var defineProperty$1 = Object.defineProperty,
    getOwnPropertyNames = Object.getOwnPropertyNames,
    _Object$getOwnPropert = Object.getOwnPropertySymbols,
    getOwnPropertySymbols = _Object$getOwnPropert === undefined ? function () {
  return [];
} : _Object$getOwnPropert,
    getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor,
    getPrototypeOf = Object.getPrototypeOf,
    objectPrototype = Object.prototype;
var arrayPrototype = Array.prototype;


function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components

    var inheritedComponent = getPrototypeOf(sourceComponent);

    if (inheritedComponent && inheritedComponent !== objectPrototype) {
      hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
    }

    var keys = arrayPrototype.concat(getOwnPropertyNames(sourceComponent),
    // $FlowFixMe
    getOwnPropertySymbols(sourceComponent));

    var targetStatics = TYPE_STATICS[targetComponent.$$typeof] || REACT_STATICS;

    var sourceStatics = TYPE_STATICS[sourceComponent.$$typeof] || REACT_STATICS;

    var i = keys.length;
    var descriptor = void 0;
    var key = void 0;

    // eslint-disable-next-line no-plusplus
    while (i--) {
      key = keys[i];

      if (
      // $FlowFixMe
      !KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) &&
      // $FlowFixMe
      !(targetStatics && targetStatics[key])) {
        descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        if (descriptor) {
          try {
            // Avoid failures from read-only properties
            defineProperty$1(targetComponent, key, descriptor);
          } catch (e) {
            /* fail silently */
          }
        }
      }
    }

    return targetComponent;
  }

  return targetComponent;
}

// 
function isDerivedReactComponent(fn) {
  return !!(fn && fn.prototype && fn.prototype.isReactComponent);
}

// 
// Helper to call a given function, only once
var once = (function (cb) {
  var called = false;

  return function () {
    if (!called) {
      called = true;
      cb.apply(undefined, arguments);
    }
  };
});

// 

var ThemeContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])();

var ThemeConsumer = ThemeContext.Consumer;

/**
 * Provide a theme to an entire react component tree via context
 */

var ThemeProvider = function (_Component) {
  inherits(ThemeProvider, _Component);

  function ThemeProvider(props) {
    classCallCheck(this, ThemeProvider);

    var _this = possibleConstructorReturn(this, _Component.call(this, props));

    _this.getContext = Object(memoize_one__WEBPACK_IMPORTED_MODULE_5__["default"])(_this.getContext.bind(_this));
    _this.renderInner = _this.renderInner.bind(_this);
    return _this;
  }

  ThemeProvider.prototype.render = function render() {
    if (!this.props.children) return null;

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      ThemeContext.Consumer,
      null,
      this.renderInner
    );
  };

  ThemeProvider.prototype.renderInner = function renderInner(outerTheme) {
    var context = this.getContext(this.props.theme, outerTheme);

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      ThemeContext.Provider,
      { value: context },
      this.props.children
    );
  };

  /**
   * Get the theme from the props, supporting both (outerTheme) => {}
   * as well as object notation
   */


  ThemeProvider.prototype.getTheme = function getTheme(theme, outerTheme) {
    if (isFunction(theme)) {
      var mergedTheme = theme(outerTheme);

      if ( true && (mergedTheme === null || Array.isArray(mergedTheme) || (typeof mergedTheme === 'undefined' ? 'undefined' : _typeof(mergedTheme)) !== 'object')) {
        throw new StyledComponentsError(7);
      }

      return mergedTheme;
    }

    if (theme === null || Array.isArray(theme) || (typeof theme === 'undefined' ? 'undefined' : _typeof(theme)) !== 'object') {
      throw new StyledComponentsError(8);
    }

    return _extends({}, outerTheme, theme);
  };

  ThemeProvider.prototype.getContext = function getContext(theme, outerTheme) {
    return this.getTheme(theme, outerTheme);
  };

  return ThemeProvider;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

// 

var CLOSING_TAG_R = /^\s*<\/[a-z]/i;

var ServerStyleSheet = function () {
  function ServerStyleSheet() {
    classCallCheck(this, ServerStyleSheet);

    /* The master sheet might be reset, so keep a reference here */
    this.masterSheet = StyleSheet.master;
    this.instance = this.masterSheet.clone();
    this.sealed = false;
  }

  /**
   * Mark the ServerStyleSheet as being fully emitted and manually GC it from the
   * StyleSheet singleton.
   */


  ServerStyleSheet.prototype.seal = function seal() {
    if (!this.sealed) {
      /* Remove sealed StyleSheets from the master sheet */
      var index = this.masterSheet.clones.indexOf(this.instance);
      this.masterSheet.clones.splice(index, 1);
      this.sealed = true;
    }
  };

  ServerStyleSheet.prototype.collectStyles = function collectStyles(children) {
    if (this.sealed) {
      throw new StyledComponentsError(2);
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      StyleSheetManager,
      { sheet: this.instance },
      children
    );
  };

  ServerStyleSheet.prototype.getStyleTags = function getStyleTags() {
    this.seal();
    return this.instance.toHTML();
  };

  ServerStyleSheet.prototype.getStyleElement = function getStyleElement() {
    this.seal();
    return this.instance.toReactElements();
  };

  ServerStyleSheet.prototype.interleaveWithNodeStream = function interleaveWithNodeStream(readableStream) {
    var _this = this;

    {
      throw new StyledComponentsError(3);
    }

    /* the tag index keeps track of which tags have already been emitted */
    var instance = this.instance;

    var instanceTagIndex = 0;

    var streamAttr = SC_STREAM_ATTR + '="true"';

    var transformer = new stream.Transform({
      transform: function appendStyleChunks(chunk, /* encoding */_, callback) {
        var tags = instance.tags;

        var html = '';

        /* retrieve html for each new style tag */
        for (; instanceTagIndex < tags.length; instanceTagIndex += 1) {
          var tag = tags[instanceTagIndex];
          html += tag.toHTML(streamAttr);
        }

        /* force our StyleSheets to emit entirely new tags */
        instance.sealAllTags();

        var renderedHtml = chunk.toString();

        /* prepend style html to chunk, unless the start of the chunk is a closing tag in which case append right after that */
        if (CLOSING_TAG_R.test(renderedHtml)) {
          var endOfClosingTag = renderedHtml.indexOf('>');

          this.push(renderedHtml.slice(0, endOfClosingTag + 1) + html + renderedHtml.slice(endOfClosingTag + 1));
        } else this.push(html + renderedHtml);

        callback();
      }
    });

    readableStream.on('end', function () {
      return _this.seal();
    });

    readableStream.on('error', function (err) {
      _this.seal();

      // forward the error to the transform stream
      transformer.emit('error', err);
    });

    return readableStream.pipe(transformer);
  };

  return ServerStyleSheet;
}();

// 

var StyleSheetContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])();
var StyleSheetConsumer = StyleSheetContext.Consumer;

var StyleSheetManager = function (_Component) {
  inherits(StyleSheetManager, _Component);

  function StyleSheetManager(props) {
    classCallCheck(this, StyleSheetManager);

    var _this = possibleConstructorReturn(this, _Component.call(this, props));

    _this.getContext = Object(memoize_one__WEBPACK_IMPORTED_MODULE_5__["default"])(_this.getContext);
    return _this;
  }

  StyleSheetManager.prototype.getContext = function getContext(sheet, target) {
    if (sheet) {
      return sheet;
    } else if (target) {
      return new StyleSheet(target);
    } else {
      throw new StyledComponentsError(4);
    }
  };

  StyleSheetManager.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        sheet = _props.sheet,
        target = _props.target;


    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      StyleSheetContext.Provider,
      { value: this.getContext(sheet, target) },
       true ? react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.only(children) : undefined
    );
  };

  return StyleSheetManager;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);
 true ? StyleSheetManager.propTypes = {
  sheet: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.instanceOf(StyleSheet), prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.instanceOf(ServerStyleSheet)]),

  target: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.shape({
    appendChild: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired
  })
} : undefined;

// 

var identifiers = {};

/* We depend on components having unique IDs */
function generateId(_ComponentStyle, _displayName, parentComponentId) {
  var displayName = typeof _displayName !== 'string' ? 'sc' : escape(_displayName);

  /**
   * This ensures uniqueness if two components happen to share
   * the same displayName.
   */
  var nr = (identifiers[displayName] || 0) + 1;
  identifiers[displayName] = nr;

  var componentId = displayName + '-' + _ComponentStyle.generateName(displayName + nr);

  return parentComponentId ? parentComponentId + '-' + componentId : componentId;
}

// $FlowFixMe

var StyledComponent = function (_Component) {
  inherits(StyledComponent, _Component);

  function StyledComponent() {
    classCallCheck(this, StyledComponent);

    var _this = possibleConstructorReturn(this, _Component.call(this));

    _this.attrs = {};

    _this.renderOuter = _this.renderOuter.bind(_this);
    _this.renderInner = _this.renderInner.bind(_this);

    if (true) {
      _this.warnInnerRef = once(function (displayName) {
        return (
          // eslint-disable-next-line no-console
          console.warn('The "innerRef" API has been removed in styled-components v4 in favor of React 16 ref forwarding, use "ref" instead like a typical component. "innerRef" was detected on component "' + displayName + '".')
        );
      });

      _this.warnAttrsFnObjectKeyDeprecated = once(function (key, displayName) {
        return (
          // eslint-disable-next-line no-console
          console.warn('Functions as object-form attrs({}) keys are now deprecated and will be removed in a future version of styled-components. Switch to the new attrs(props => ({})) syntax instead for easier and more powerful composition. The attrs key in question is "' + key + '" on component "' + displayName + '".', '\n ' + new Error().stack)
        );
      });

      _this.warnNonStyledComponentAttrsObjectKey = once(function (key, displayName) {
        return (
          // eslint-disable-next-line no-console
          console.warn('It looks like you\'ve used a non styled-component as the value for the "' + key + '" prop in an object-form attrs constructor of "' + displayName + '".\n' + 'You should use the new function-form attrs constructor which avoids this issue: attrs(props => ({ yourStuff }))\n' + "To continue using the deprecated object syntax, you'll need to wrap your component prop in a function to make it available inside the styled component (you'll still get the deprecation warning though.)\n" + ('For example, { ' + key + ': () => InnerComponent } instead of { ' + key + ': InnerComponent }'))
        );
      });
    }
    return _this;
  }

  StyledComponent.prototype.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      StyleSheetConsumer,
      null,
      this.renderOuter
    );
  };

  StyledComponent.prototype.renderOuter = function renderOuter() {
    var styleSheet = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : StyleSheet.master;

    this.styleSheet = styleSheet;

    // No need to subscribe a static component to theme changes, it won't change anything
    if (this.props.forwardedComponent.componentStyle.isStatic) return this.renderInner();

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      ThemeConsumer,
      null,
      this.renderInner
    );
  };

  StyledComponent.prototype.renderInner = function renderInner(theme) {
    var _props$forwardedCompo = this.props.forwardedComponent,
        componentStyle = _props$forwardedCompo.componentStyle,
        defaultProps = _props$forwardedCompo.defaultProps,
        displayName = _props$forwardedCompo.displayName,
        foldedComponentIds = _props$forwardedCompo.foldedComponentIds,
        styledComponentId = _props$forwardedCompo.styledComponentId,
        target = _props$forwardedCompo.target;


    var generatedClassName = void 0;
    if (componentStyle.isStatic) {
      generatedClassName = this.generateAndInjectStyles(EMPTY_OBJECT, this.props);
    } else {
      generatedClassName = this.generateAndInjectStyles(determineTheme(this.props, theme, defaultProps) || EMPTY_OBJECT, this.props);
    }

    var elementToBeCreated = this.props.as || this.attrs.as || target;
    var isTargetTag = isTag(elementToBeCreated);

    var propsForElement = {};
    var computedProps = _extends({}, this.props, this.attrs);

    var key = void 0;
    // eslint-disable-next-line guard-for-in
    for (key in computedProps) {
      if ( true && key === 'innerRef' && isTargetTag) {
        this.warnInnerRef(displayName);
      }

      if (key === 'forwardedComponent' || key === 'as') {
        continue;
      } else if (key === 'forwardedRef') propsForElement.ref = computedProps[key];else if (key === 'forwardedAs') propsForElement.as = computedProps[key];else if (!isTargetTag || Object(_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_7__["default"])(key)) {
        // Don't pass through non HTML tags through to HTML elements
        propsForElement[key] = computedProps[key];
      }
    }

    if (this.props.style && this.attrs.style) {
      propsForElement.style = _extends({}, this.attrs.style, this.props.style);
    }

    propsForElement.className = Array.prototype.concat(foldedComponentIds, styledComponentId, generatedClassName !== styledComponentId ? generatedClassName : null, this.props.className, this.attrs.className).filter(Boolean).join(' ');

    return Object(react__WEBPACK_IMPORTED_MODULE_2__["createElement"])(elementToBeCreated, propsForElement);
  };

  StyledComponent.prototype.buildExecutionContext = function buildExecutionContext(theme, props, attrs) {
    var _this2 = this;

    var context = _extends({}, props, { theme: theme });

    if (!attrs.length) return context;

    this.attrs = {};

    attrs.forEach(function (attrDef) {
      var resolvedAttrDef = attrDef;
      var attrDefWasFn = false;
      var attr = void 0;
      var key = void 0;

      if (isFunction(resolvedAttrDef)) {
        // $FlowFixMe
        resolvedAttrDef = resolvedAttrDef(context);
        attrDefWasFn = true;
      }

      /* eslint-disable guard-for-in */
      // $FlowFixMe
      for (key in resolvedAttrDef) {
        attr = resolvedAttrDef[key];

        if (!attrDefWasFn) {
          if (isFunction(attr) && !isDerivedReactComponent(attr) && !isStyledComponent(attr)) {
            if (true) {
              _this2.warnAttrsFnObjectKeyDeprecated(key, props.forwardedComponent.displayName);
            }

            attr = attr(context);

            if ( true && react__WEBPACK_IMPORTED_MODULE_2___default.a.isValidElement(attr)) {
              _this2.warnNonStyledComponentAttrsObjectKey(key, props.forwardedComponent.displayName);
            }
          }
        }

        _this2.attrs[key] = attr;
        context[key] = attr;
      }
      /* eslint-enable */
    });

    return context;
  };

  StyledComponent.prototype.generateAndInjectStyles = function generateAndInjectStyles(theme, props) {
    var _props$forwardedCompo2 = props.forwardedComponent,
        attrs = _props$forwardedCompo2.attrs,
        componentStyle = _props$forwardedCompo2.componentStyle,
        warnTooManyClasses = _props$forwardedCompo2.warnTooManyClasses;

    // statically styled-components don't need to build an execution context object,
    // and shouldn't be increasing the number of class names

    if (componentStyle.isStatic && !attrs.length) {
      return componentStyle.generateAndInjectStyles(EMPTY_OBJECT, this.styleSheet);
    }

    var className = componentStyle.generateAndInjectStyles(this.buildExecutionContext(theme, props, attrs), this.styleSheet);

    if ( true && warnTooManyClasses) warnTooManyClasses(className);

    return className;
  };

  return StyledComponent;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

function createStyledComponent(target, options, rules) {
  var isTargetStyledComp = isStyledComponent(target);
  var isClass = !isTag(target);

  var _options$displayName = options.displayName,
      displayName = _options$displayName === undefined ? generateDisplayName(target) : _options$displayName,
      _options$componentId = options.componentId,
      componentId = _options$componentId === undefined ? generateId(ComponentStyle, options.displayName, options.parentComponentId) : _options$componentId,
      _options$ParentCompon = options.ParentComponent,
      ParentComponent = _options$ParentCompon === undefined ? StyledComponent : _options$ParentCompon,
      _options$attrs = options.attrs,
      attrs = _options$attrs === undefined ? EMPTY_ARRAY : _options$attrs;


  var styledComponentId = options.displayName && options.componentId ? escape(options.displayName) + '-' + options.componentId : options.componentId || componentId;

  // fold the underlying StyledComponent attrs up (implicit extend)
  var finalAttrs =
  // $FlowFixMe
  isTargetStyledComp && target.attrs ? Array.prototype.concat(target.attrs, attrs).filter(Boolean) : attrs;

  var componentStyle = new ComponentStyle(isTargetStyledComp ? // fold the underlying StyledComponent rules up (implicit extend)
  // $FlowFixMe
  target.componentStyle.rules.concat(rules) : rules, finalAttrs, styledComponentId);

  /**
   * forwardRef creates a new interim component, which we'll take advantage of
   * instead of extending ParentComponent to create _another_ interim class
   */
  var WrappedStyledComponent = void 0;
  var forwardRef = function forwardRef(props, ref) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ParentComponent, _extends({}, props, { forwardedComponent: WrappedStyledComponent, forwardedRef: ref }));
  };
  forwardRef.displayName = displayName;
  WrappedStyledComponent = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(forwardRef);
  WrappedStyledComponent.displayName = displayName;

  // $FlowFixMe
  WrappedStyledComponent.attrs = finalAttrs;
  // $FlowFixMe
  WrappedStyledComponent.componentStyle = componentStyle;

  // $FlowFixMe
  WrappedStyledComponent.foldedComponentIds = isTargetStyledComp ? // $FlowFixMe
  Array.prototype.concat(target.foldedComponentIds, target.styledComponentId) : EMPTY_ARRAY;

  // $FlowFixMe
  WrappedStyledComponent.styledComponentId = styledComponentId;

  // fold the underlying StyledComponent target up since we folded the styles
  // $FlowFixMe
  WrappedStyledComponent.target = isTargetStyledComp ? target.target : target;

  // $FlowFixMe
  WrappedStyledComponent.withComponent = function withComponent(tag) {
    var previousComponentId = options.componentId,
        optionsToCopy = objectWithoutProperties(options, ['componentId']);


    var newComponentId = previousComponentId && previousComponentId + '-' + (isTag(tag) ? tag : escape(getComponentName(tag)));

    var newOptions = _extends({}, optionsToCopy, {
      attrs: finalAttrs,
      componentId: newComponentId,
      ParentComponent: ParentComponent
    });

    return createStyledComponent(tag, newOptions, rules);
  };

  // $FlowFixMe
  Object.defineProperty(WrappedStyledComponent, 'defaultProps', {
    get: function get$$1() {
      return this._foldedDefaultProps;
    },
    set: function set$$1(obj) {
      // $FlowFixMe
      this._foldedDefaultProps = isTargetStyledComp ? Object(merge_anything__WEBPACK_IMPORTED_MODULE_8__["default"])(target.defaultProps, obj) : obj;
    }
  });

  if (true) {
    // $FlowFixMe
    WrappedStyledComponent.warnTooManyClasses = createWarnTooManyClasses(displayName);
  }

  // $FlowFixMe
  WrappedStyledComponent.toString = function () {
    return '.' + WrappedStyledComponent.styledComponentId;
  };

  if (isClass) {
    hoistNonReactStatics(WrappedStyledComponent, target, {
      // all SC-specific things should not be hoisted
      attrs: true,
      componentStyle: true,
      displayName: true,
      foldedComponentIds: true,
      styledComponentId: true,
      target: true,
      withComponent: true
    });
  }

  return WrappedStyledComponent;
}

// 
// Thanks to ReactDOMFactories for this handy list!

var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr',

// SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'marker', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

// 

var styled = function styled(tag) {
  return constructWithOptions(createStyledComponent, tag);
};

// Shorthands for all valid HTML Elements
domElements.forEach(function (domElement) {
  styled[domElement] = styled(domElement);
});

// 

var GlobalStyle = function () {
  function GlobalStyle(rules, componentId) {
    classCallCheck(this, GlobalStyle);

    this.rules = rules;
    this.componentId = componentId;
    this.isStatic = isStaticRules(rules, EMPTY_ARRAY);

    if (!StyleSheet.master.hasId(componentId)) {
      StyleSheet.master.deferredInject(componentId, []);
    }
  }

  GlobalStyle.prototype.createStyles = function createStyles(executionContext, styleSheet) {
    var flatCSS = flatten(this.rules, executionContext, styleSheet);
    var css = stringifyRules(flatCSS, '');

    styleSheet.inject(this.componentId, css);
  };

  GlobalStyle.prototype.removeStyles = function removeStyles(styleSheet) {
    var componentId = this.componentId;

    if (styleSheet.hasId(componentId)) {
      styleSheet.remove(componentId);
    }
  };

  // TODO: overwrite in-place instead of remove+create?


  GlobalStyle.prototype.renderStyles = function renderStyles(executionContext, styleSheet) {
    this.removeStyles(styleSheet);
    this.createStyles(executionContext, styleSheet);
  };

  return GlobalStyle;
}();

// 

// place our cache into shared context so it'll persist between HMRs
if (IS_BROWSER) {
  window.scCGSHMRCache = {};
}

function createGlobalStyle(strings) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(undefined, [strings].concat(interpolations));
  var id = 'sc-global-' + murmurhash(JSON.stringify(rules));
  var style = new GlobalStyle(rules, id);

  var GlobalStyleComponent = function (_React$Component) {
    inherits(GlobalStyleComponent, _React$Component);

    function GlobalStyleComponent(props) {
      classCallCheck(this, GlobalStyleComponent);

      var _this = possibleConstructorReturn(this, _React$Component.call(this, props));

      var _this$constructor = _this.constructor,
          globalStyle = _this$constructor.globalStyle,
          styledComponentId = _this$constructor.styledComponentId;


      if (IS_BROWSER) {
        window.scCGSHMRCache[styledComponentId] = (window.scCGSHMRCache[styledComponentId] || 0) + 1;
      }

      /**
       * This fixes HMR compatibility. Don't ask me why, but this combination of
       * caching the closure variables via statics and then persisting the statics in
       * state works across HMR where no other combination did. ¯\_(ツ)_/¯
       */
      _this.state = {
        globalStyle: globalStyle,
        styledComponentId: styledComponentId
      };
      return _this;
    }

    GlobalStyleComponent.prototype.componentWillUnmount = function componentWillUnmount() {
      if (window.scCGSHMRCache[this.state.styledComponentId]) {
        window.scCGSHMRCache[this.state.styledComponentId] -= 1;
      }
      /**
       * Depending on the order "render" is called this can cause the styles to be lost
       * until the next render pass of the remaining instance, which may
       * not be immediate.
       */
      if (window.scCGSHMRCache[this.state.styledComponentId] === 0) {
        this.state.globalStyle.removeStyles(this.styleSheet);
      }
    };

    GlobalStyleComponent.prototype.render = function render() {
      var _this2 = this;

      if ( true && react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.count(this.props.children)) {
        // eslint-disable-next-line no-console
        console.warn('The global style component ' + this.state.styledComponentId + ' was given child JSX. createGlobalStyle does not render children.');
      }

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
        StyleSheetConsumer,
        null,
        function (styleSheet) {
          _this2.styleSheet = styleSheet || StyleSheet.master;

          var globalStyle = _this2.state.globalStyle;


          if (globalStyle.isStatic) {
            globalStyle.renderStyles(STATIC_EXECUTION_CONTEXT, _this2.styleSheet);

            return null;
          } else {
            return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
              ThemeConsumer,
              null,
              function (theme) {
                // $FlowFixMe
                var defaultProps = _this2.constructor.defaultProps;


                var context = _extends({}, _this2.props);

                if (typeof theme !== 'undefined') {
                  context.theme = determineTheme(_this2.props, theme, defaultProps);
                }

                globalStyle.renderStyles(context, _this2.styleSheet);

                return null;
              }
            );
          }
        }
      );
    };

    return GlobalStyleComponent;
  }(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

  GlobalStyleComponent.globalStyle = style;
  GlobalStyleComponent.styledComponentId = id;


  return GlobalStyleComponent;
}

// 

var replaceWhitespace = function replaceWhitespace(str) {
  return str.replace(/\s|\\n/g, '');
};

function keyframes(strings) {
  /* Warning if you've used keyframes on React Native */
  if ( true && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    // eslint-disable-next-line no-console
    console.warn('`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.');
  }

  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(undefined, [strings].concat(interpolations));

  var name = generateAlphabeticName(murmurhash(replaceWhitespace(JSON.stringify(rules))));

  return new Keyframes(name, stringifyRules(rules, name, '@keyframes'));
}

// 

var withTheme = (function (Component$$1) {
  var WithTheme = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function (props, ref) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      ThemeConsumer,
      null,
      function (theme) {
        // $FlowFixMe
        var defaultProps = Component$$1.defaultProps;

        var themeProp = determineTheme(props, theme, defaultProps);

        if ( true && themeProp === undefined) {
          // eslint-disable-next-line no-console
          console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "' + getComponentName(Component$$1) + '"');
        }

        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component$$1, _extends({}, props, { theme: themeProp, ref: ref }));
      }
    );
  });

  hoistNonReactStatics(WithTheme, Component$$1);

  WithTheme.displayName = 'WithTheme(' + getComponentName(Component$$1) + ')';

  return WithTheme;
});

// 

/* eslint-disable */
var __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS = {
  StyleSheet: StyleSheet
};

// 

/* Warning if you've imported this file on React Native */
if ( true && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
  // eslint-disable-next-line no-console
  console.warn("It looks like you've imported 'styled-components' on React Native.\n" + "Perhaps you're looking to import 'styled-components/native'?\n" + 'Read more about this at https://www.styled-components.com/docs/basics#react-native');
}

/* Warning if there are several instances of styled-components */
if ( true && typeof window !== 'undefined' && typeof navigator !== 'undefined' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Node.js') === -1 && navigator.userAgent.indexOf('jsdom') === -1) {
  window['__styled-components-init__'] = window['__styled-components-init__'] || 0;

  if (window['__styled-components-init__'] === 1) {
    // eslint-disable-next-line no-console
    console.warn("It looks like there are several instances of 'styled-components' initialized in this application. " + 'This may cause dynamic styles not rendering properly, errors happening during rehydration process ' + 'and makes your application bigger without a good reason.\n\n' + 'See https://s-c.sh/2BAXzed for more info.');
  }

  window['__styled-components-init__'] += 1;
}

//

/* harmony default export */ __webpack_exports__["default"] = (styled);

//# sourceMappingURL=styled-components.browser.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/stylis-rule-sheet/index.js":
/*!*************************************************!*\
  !*** ./node_modules/stylis-rule-sheet/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (factory) {
	 true ? (module['exports'] = factory()) :
		undefined
}(function () {

	'use strict'

	return function (insertRule) {
		var delimiter = '/*|*/'
		var needle = delimiter+'}'

		function toSheet (block) {
			if (block)
				try {
					insertRule(block + '}')
				} catch (e) {}
		}

		return function ruleSheet (context, content, selectors, parents, line, column, length, ns, depth, at) {
			switch (context) {
				// property
				case 1:
					// @import
					if (depth === 0 && content.charCodeAt(0) === 64)
						return insertRule(content+';'), ''
					break
				// selector
				case 2:
					if (ns === 0)
						return content + delimiter
					break
				// at-rule
				case 3:
					switch (ns) {
						// @font-face, @page
						case 102:
						case 112:
							return insertRule(selectors[0]+content), ''
						default:
							return content + (at === 0 ? delimiter : '')
					}
				case -2:
					content.split(needle).forEach(toSheet)
			}
		}
	}
}))


/***/ }),

/***/ "./node_modules/stylis/stylis.min.js":
/*!*******************************************!*\
  !*** ./node_modules/stylis/stylis.min.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e){ true?module.exports=e(null):undefined}(function e(a){"use strict";var r=/^\0+/g,c=/[\0\r\f]/g,s=/: */g,t=/zoo|gra/,i=/([,: ])(transform)/g,f=/,+\s*(?![^(]*[)])/g,n=/ +\s*(?![^(]*[)])/g,l=/ *[\0] */g,o=/,\r+?/g,h=/([\t\r\n ])*\f?&/g,u=/:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,d=/\W+/g,b=/@(k\w+)\s*(\S*)\s*/,p=/::(place)/g,k=/:(read-only)/g,g=/\s+(?=[{\];=:>])/g,A=/([[}=:>])\s+/g,C=/(\{[^{]+?);(?=\})/g,w=/\s{2,}/g,v=/([^\(])(:+) */g,m=/[svh]\w+-[tblr]{2}/,x=/\(\s*(.*)\s*\)/g,$=/([\s\S]*?);/g,y=/-self|flex-/g,O=/[^]*?(:[rp][el]a[\w-]+)[^]*/,j=/stretch|:\s*\w+\-(?:conte|avail)/,z=/([^-])(image-set\()/,N="-webkit-",S="-moz-",F="-ms-",W=59,q=125,B=123,D=40,E=41,G=91,H=93,I=10,J=13,K=9,L=64,M=32,P=38,Q=45,R=95,T=42,U=44,V=58,X=39,Y=34,Z=47,_=62,ee=43,ae=126,re=0,ce=12,se=11,te=107,ie=109,fe=115,ne=112,le=111,oe=105,he=99,ue=100,de=112,be=1,pe=1,ke=0,ge=1,Ae=1,Ce=1,we=0,ve=0,me=0,xe=[],$e=[],ye=0,Oe=null,je=-2,ze=-1,Ne=0,Se=1,Fe=2,We=3,qe=0,Be=1,De="",Ee="",Ge="";function He(e,a,s,t,i){for(var f,n,o=0,h=0,u=0,d=0,g=0,A=0,C=0,w=0,m=0,$=0,y=0,O=0,j=0,z=0,R=0,we=0,$e=0,Oe=0,je=0,ze=s.length,Je=ze-1,Re="",Te="",Ue="",Ve="",Xe="",Ye="";R<ze;){if(C=s.charCodeAt(R),R===Je)if(h+d+u+o!==0){if(0!==h)C=h===Z?I:Z;d=u=o=0,ze++,Je++}if(h+d+u+o===0){if(R===Je){if(we>0)Te=Te.replace(c,"");if(Te.trim().length>0){switch(C){case M:case K:case W:case J:case I:break;default:Te+=s.charAt(R)}C=W}}if(1===$e)switch(C){case B:case q:case W:case Y:case X:case D:case E:case U:$e=0;case K:case J:case I:case M:break;default:for($e=0,je=R,g=C,R--,C=W;je<ze;)switch(s.charCodeAt(je++)){case I:case J:case W:++R,C=g,je=ze;break;case V:if(we>0)++R,C=g;case B:je=ze}}switch(C){case B:for(g=(Te=Te.trim()).charCodeAt(0),y=1,je=++R;R<ze;){switch(C=s.charCodeAt(R)){case B:y++;break;case q:y--;break;case Z:switch(A=s.charCodeAt(R+1)){case T:case Z:R=Qe(A,R,Je,s)}break;case G:C++;case D:C++;case Y:case X:for(;R++<Je&&s.charCodeAt(R)!==C;);}if(0===y)break;R++}if(Ue=s.substring(je,R),g===re)g=(Te=Te.replace(r,"").trim()).charCodeAt(0);switch(g){case L:if(we>0)Te=Te.replace(c,"");switch(A=Te.charCodeAt(1)){case ue:case ie:case fe:case Q:f=a;break;default:f=xe}if(je=(Ue=He(a,f,Ue,A,i+1)).length,me>0&&0===je)je=Te.length;if(ye>0)if(f=Ie(xe,Te,Oe),n=Pe(We,Ue,f,a,pe,be,je,A,i,t),Te=f.join(""),void 0!==n)if(0===(je=(Ue=n.trim()).length))A=0,Ue="";if(je>0)switch(A){case fe:Te=Te.replace(x,Me);case ue:case ie:case Q:Ue=Te+"{"+Ue+"}";break;case te:if(Ue=(Te=Te.replace(b,"$1 $2"+(Be>0?De:"")))+"{"+Ue+"}",1===Ae||2===Ae&&Le("@"+Ue,3))Ue="@"+N+Ue+"@"+Ue;else Ue="@"+Ue;break;default:if(Ue=Te+Ue,t===de)Ve+=Ue,Ue=""}else Ue="";break;default:Ue=He(a,Ie(a,Te,Oe),Ue,t,i+1)}Xe+=Ue,O=0,$e=0,z=0,we=0,Oe=0,j=0,Te="",Ue="",C=s.charCodeAt(++R);break;case q:case W:if((je=(Te=(we>0?Te.replace(c,""):Te).trim()).length)>1){if(0===z)if((g=Te.charCodeAt(0))===Q||g>96&&g<123)je=(Te=Te.replace(" ",":")).length;if(ye>0)if(void 0!==(n=Pe(Se,Te,a,e,pe,be,Ve.length,t,i,t)))if(0===(je=(Te=n.trim()).length))Te="\0\0";switch(g=Te.charCodeAt(0),A=Te.charCodeAt(1),g){case re:break;case L:if(A===oe||A===he){Ye+=Te+s.charAt(R);break}default:if(Te.charCodeAt(je-1)===V)break;Ve+=Ke(Te,g,A,Te.charCodeAt(2))}}O=0,$e=0,z=0,we=0,Oe=0,Te="",C=s.charCodeAt(++R)}}switch(C){case J:case I:if(h+d+u+o+ve===0)switch($){case E:case X:case Y:case L:case ae:case _:case T:case ee:case Z:case Q:case V:case U:case W:case B:case q:break;default:if(z>0)$e=1}if(h===Z)h=0;else if(ge+O===0&&t!==te&&Te.length>0)we=1,Te+="\0";if(ye*qe>0)Pe(Ne,Te,a,e,pe,be,Ve.length,t,i,t);be=1,pe++;break;case W:case q:if(h+d+u+o===0){be++;break}default:switch(be++,Re=s.charAt(R),C){case K:case M:if(d+o+h===0)switch(w){case U:case V:case K:case M:Re="";break;default:if(C!==M)Re=" "}break;case re:Re="\\0";break;case ce:Re="\\f";break;case se:Re="\\v";break;case P:if(d+h+o===0&&ge>0)Oe=1,we=1,Re="\f"+Re;break;case 108:if(d+h+o+ke===0&&z>0)switch(R-z){case 2:if(w===ne&&s.charCodeAt(R-3)===V)ke=w;case 8:if(m===le)ke=m}break;case V:if(d+h+o===0)z=R;break;case U:if(h+u+d+o===0)we=1,Re+="\r";break;case Y:case X:if(0===h)d=d===C?0:0===d?C:d;break;case G:if(d+h+u===0)o++;break;case H:if(d+h+u===0)o--;break;case E:if(d+h+o===0)u--;break;case D:if(d+h+o===0){if(0===O)switch(2*w+3*m){case 533:break;default:y=0,O=1}u++}break;case L:if(h+u+d+o+z+j===0)j=1;break;case T:case Z:if(d+o+u>0)break;switch(h){case 0:switch(2*C+3*s.charCodeAt(R+1)){case 235:h=Z;break;case 220:je=R,h=T}break;case T:if(C===Z&&w===T&&je+2!==R){if(33===s.charCodeAt(je+2))Ve+=s.substring(je,R+1);Re="",h=0}}}if(0===h){if(ge+d+o+j===0&&t!==te&&C!==W)switch(C){case U:case ae:case _:case ee:case E:case D:if(0===O){switch(w){case K:case M:case I:case J:Re+="\0";break;default:Re="\0"+Re+(C===U?"":"\0")}we=1}else switch(C){case D:if(z+7===R&&108===w)z=0;O=++y;break;case E:if(0==(O=--y))we=1,Re+="\0"}break;case K:case M:switch(w){case re:case B:case q:case W:case U:case ce:case K:case M:case I:case J:break;default:if(0===O)we=1,Re+="\0"}}if(Te+=Re,C!==M&&C!==K)$=C}}m=w,w=C,R++}if(je=Ve.length,me>0)if(0===je&&0===Xe.length&&0===a[0].length==false)if(t!==ie||1===a.length&&(ge>0?Ee:Ge)===a[0])je=a.join(",").length+2;if(je>0){if(f=0===ge&&t!==te?function(e){for(var a,r,s=0,t=e.length,i=Array(t);s<t;++s){for(var f=e[s].split(l),n="",o=0,h=0,u=0,d=0,b=f.length;o<b;++o){if(0===(h=(r=f[o]).length)&&b>1)continue;if(u=n.charCodeAt(n.length-1),d=r.charCodeAt(0),a="",0!==o)switch(u){case T:case ae:case _:case ee:case M:case D:break;default:a=" "}switch(d){case P:r=a+Ee;case ae:case _:case ee:case M:case E:case D:break;case G:r=a+r+Ee;break;case V:switch(2*r.charCodeAt(1)+3*r.charCodeAt(2)){case 530:if(Ce>0){r=a+r.substring(8,h-1);break}default:if(o<1||f[o-1].length<1)r=a+Ee+r}break;case U:a="";default:if(h>1&&r.indexOf(":")>0)r=a+r.replace(v,"$1"+Ee+"$2");else r=a+r+Ee}n+=r}i[s]=n.replace(c,"").trim()}return i}(a):a,ye>0)if(void 0!==(n=Pe(Fe,Ve,f,e,pe,be,je,t,i,t))&&0===(Ve=n).length)return Ye+Ve+Xe;if(Ve=f.join(",")+"{"+Ve+"}",Ae*ke!=0){if(2===Ae&&!Le(Ve,2))ke=0;switch(ke){case le:Ve=Ve.replace(k,":"+S+"$1")+Ve;break;case ne:Ve=Ve.replace(p,"::"+N+"input-$1")+Ve.replace(p,"::"+S+"$1")+Ve.replace(p,":"+F+"input-$1")+Ve}ke=0}}return Ye+Ve+Xe}function Ie(e,a,r){var c=a.trim().split(o),s=c,t=c.length,i=e.length;switch(i){case 0:case 1:for(var f=0,n=0===i?"":e[0]+" ";f<t;++f)s[f]=Je(n,s[f],r,i).trim();break;default:f=0;var l=0;for(s=[];f<t;++f)for(var h=0;h<i;++h)s[l++]=Je(e[h]+" ",c[f],r,i).trim()}return s}function Je(e,a,r,c){var s=a,t=s.charCodeAt(0);if(t<33)t=(s=s.trim()).charCodeAt(0);switch(t){case P:switch(ge+c){case 0:case 1:if(0===e.trim().length)break;default:return s.replace(h,"$1"+e.trim())}break;case V:switch(s.charCodeAt(1)){case 103:if(Ce>0&&ge>0)return s.replace(u,"$1").replace(h,"$1"+Ge);break;default:return e.trim()+s.replace(h,"$1"+e.trim())}default:if(r*ge>0&&s.indexOf("\f")>0)return s.replace(h,(e.charCodeAt(0)===V?"":"$1")+e.trim())}return e+s}function Ke(e,a,r,c){var l,o=0,h=e+";",u=2*a+3*r+4*c;if(944===u)return function(e){var a=e.length,r=e.indexOf(":",9)+1,c=e.substring(0,r).trim(),s=e.substring(r,a-1).trim();switch(e.charCodeAt(9)*Be){case 0:break;case Q:if(110!==e.charCodeAt(10))break;default:for(var t=s.split((s="",f)),i=0,r=0,a=t.length;i<a;r=0,++i){for(var l=t[i],o=l.split(n);l=o[r];){var h=l.charCodeAt(0);if(1===Be&&(h>L&&h<90||h>96&&h<123||h===R||h===Q&&l.charCodeAt(1)!==Q))switch(isNaN(parseFloat(l))+(-1!==l.indexOf("("))){case 1:switch(l){case"infinite":case"alternate":case"backwards":case"running":case"normal":case"forwards":case"both":case"none":case"linear":case"ease":case"ease-in":case"ease-out":case"ease-in-out":case"paused":case"reverse":case"alternate-reverse":case"inherit":case"initial":case"unset":case"step-start":case"step-end":break;default:l+=De}}o[r++]=l}s+=(0===i?"":",")+o.join(" ")}}if(s=c+s+";",1===Ae||2===Ae&&Le(s,1))return N+s+s;return s}(h);else if(0===Ae||2===Ae&&!Le(h,1))return h;switch(u){case 1015:return 97===h.charCodeAt(10)?N+h+h:h;case 951:return 116===h.charCodeAt(3)?N+h+h:h;case 963:return 110===h.charCodeAt(5)?N+h+h:h;case 1009:if(100!==h.charCodeAt(4))break;case 969:case 942:return N+h+h;case 978:return N+h+S+h+h;case 1019:case 983:return N+h+S+h+F+h+h;case 883:if(h.charCodeAt(8)===Q)return N+h+h;if(h.indexOf("image-set(",11)>0)return h.replace(z,"$1"+N+"$2")+h;return h;case 932:if(h.charCodeAt(4)===Q)switch(h.charCodeAt(5)){case 103:return N+"box-"+h.replace("-grow","")+N+h+F+h.replace("grow","positive")+h;case 115:return N+h+F+h.replace("shrink","negative")+h;case 98:return N+h+F+h.replace("basis","preferred-size")+h}return N+h+F+h+h;case 964:return N+h+F+"flex-"+h+h;case 1023:if(99!==h.charCodeAt(8))break;return l=h.substring(h.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),N+"box-pack"+l+N+h+F+"flex-pack"+l+h;case 1005:return t.test(h)?h.replace(s,":"+N)+h.replace(s,":"+S)+h:h;case 1e3:switch(o=(l=h.substring(13).trim()).indexOf("-")+1,l.charCodeAt(0)+l.charCodeAt(o)){case 226:l=h.replace(m,"tb");break;case 232:l=h.replace(m,"tb-rl");break;case 220:l=h.replace(m,"lr");break;default:return h}return N+h+F+l+h;case 1017:if(-1===h.indexOf("sticky",9))return h;case 975:switch(o=(h=e).length-10,u=(l=(33===h.charCodeAt(o)?h.substring(0,o):h).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|l.charCodeAt(7))){case 203:if(l.charCodeAt(8)<111)break;case 115:h=h.replace(l,N+l)+";"+h;break;case 207:case 102:h=h.replace(l,N+(u>102?"inline-":"")+"box")+";"+h.replace(l,N+l)+";"+h.replace(l,F+l+"box")+";"+h}return h+";";case 938:if(h.charCodeAt(5)===Q)switch(h.charCodeAt(6)){case 105:return l=h.replace("-items",""),N+h+N+"box-"+l+F+"flex-"+l+h;case 115:return N+h+F+"flex-item-"+h.replace(y,"")+h;default:return N+h+F+"flex-line-pack"+h.replace("align-content","").replace(y,"")+h}break;case 973:case 989:if(h.charCodeAt(3)!==Q||122===h.charCodeAt(4))break;case 931:case 953:if(true===j.test(e))if(115===(l=e.substring(e.indexOf(":")+1)).charCodeAt(0))return Ke(e.replace("stretch","fill-available"),a,r,c).replace(":fill-available",":stretch");else return h.replace(l,N+l)+h.replace(l,S+l.replace("fill-",""))+h;break;case 962:if(h=N+h+(102===h.charCodeAt(5)?F+h:"")+h,r+c===211&&105===h.charCodeAt(13)&&h.indexOf("transform",10)>0)return h.substring(0,h.indexOf(";",27)+1).replace(i,"$1"+N+"$2")+h}return h}function Le(e,a){var r=e.indexOf(1===a?":":"{"),c=e.substring(0,3!==a?r:10),s=e.substring(r+1,e.length-1);return Oe(2!==a?c:c.replace(O,"$1"),s,a)}function Me(e,a){var r=Ke(a,a.charCodeAt(0),a.charCodeAt(1),a.charCodeAt(2));return r!==a+";"?r.replace($," or ($1)").substring(4):"("+a+")"}function Pe(e,a,r,c,s,t,i,f,n,l){for(var o,h=0,u=a;h<ye;++h)switch(o=$e[h].call(Te,e,u,r,c,s,t,i,f,n,l)){case void 0:case false:case true:case null:break;default:u=o}if(u!==a)return u}function Qe(e,a,r,c){for(var s=a+1;s<r;++s)switch(c.charCodeAt(s)){case Z:if(e===T)if(c.charCodeAt(s-1)===T&&a+2!==s)return s+1;break;case I:if(e===Z)return s+1}return s}function Re(e){for(var a in e){var r=e[a];switch(a){case"keyframe":Be=0|r;break;case"global":Ce=0|r;break;case"cascade":ge=0|r;break;case"compress":we=0|r;break;case"semicolon":ve=0|r;break;case"preserve":me=0|r;break;case"prefix":if(Oe=null,!r)Ae=0;else if("function"!=typeof r)Ae=1;else Ae=2,Oe=r}}return Re}function Te(a,r){if(void 0!==this&&this.constructor===Te)return e(a);var s=a,t=s.charCodeAt(0);if(t<33)t=(s=s.trim()).charCodeAt(0);if(Be>0)De=s.replace(d,t===G?"":"-");if(t=1,1===ge)Ge=s;else Ee=s;var i,f=[Ge];if(ye>0)if(void 0!==(i=Pe(ze,r,f,f,pe,be,0,0,0,0))&&"string"==typeof i)r=i;var n=He(xe,f,r,0,0);if(ye>0)if(void 0!==(i=Pe(je,n,f,f,pe,be,n.length,0,0,0))&&"string"!=typeof(n=i))t=0;return De="",Ge="",Ee="",ke=0,pe=1,be=1,we*t==0?n:n.replace(c,"").replace(g,"").replace(A,"$1").replace(C,"$1").replace(w," ")}if(Te.use=function e(a){switch(a){case void 0:case null:ye=$e.length=0;break;default:if("function"==typeof a)$e[ye++]=a;else if("object"==typeof a)for(var r=0,c=a.length;r<c;++r)e(a[r]);else qe=0|!!a}return e},Te.set=Re,void 0!==a)Re(a);return Te});
//# sourceMappingURL=stylis.min.js.map

/***/ }),

/***/ "./src/lib/components/TagInput.js":
/*!****************************************!*\
  !*** ./src/lib/components/TagInput.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TagInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactjs_tag_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactjs-tag-input */ "./node_modules/reactjs-tag-input/dist/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




/*
 * Keyword tag component 
 */

var TagInput = /*#__PURE__*/function (_Component) {
  _inherits(TagInput, _Component);

  var _super = _createSuper(TagInput);

  function TagInput(props) {
    var _this;

    _classCallCheck(this, TagInput);

    _this = _super.call(this, props);
    _this.state = {
      tags: []
    };
    _this.onTagsChanged = _this.onTagsChanged.bind(_assertThisInitialized(_this));
    console.log('opa');
    return _this;
  }

  _createClass(TagInput, [{
    key: "onTagsChanged",
    value: function onTagsChanged(tags) {
      this.setState({
        tags: tags
      });
      var _this$props = this.props,
          value = _this$props.value,
          setProps = _this$props.setProps;
      setProps({
        value: tags
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          id = _this$props2.id,
          wrapperStyle = _this$props2.wrapperStyle,
          inputStyle = _this$props2.inputStyle,
          tagDeleteStyle = _this$props2.tagDeleteStyle,
          placeholder = _this$props2.placeholder,
          tagStyle = _this$props2.tagStyle;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactjs_tag_input__WEBPACK_IMPORTED_MODULE_2__["TagInput"], {
        tags: this.state.tags,
        onTagsChanged: this.onTagsChanged,
        wrapperStyle: wrapperStyle,
        inputStyle: inputStyle,
        tagDeleteStyle: tagDeleteStyle,
        placeholder: placeholder,
        tagStyle: tagStyle
      }));
    }
  }]);

  return TagInput;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


TagInput.defaultProps = {};
TagInput.propTypes = {
  // The ID used to identify this component in Dash callbacks.
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  // Wrapper style css
  wrapperStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  tagStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  // Input style css 
  inputStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  // Delete btn style
  tagDeleteStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  // Placeholder
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  // Tags Values
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ }),

/***/ "./src/lib/index.js":
/*!**************************!*\
  !*** ./src/lib/index.js ***!
  \**************************/
/*! exports provided: KeyedFileBrowser, DateTimePicker, TagInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_KeyedFileBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/KeyedFileBrowser */ "./src/lib/components/KeyedFileBrowser.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeyedFileBrowser", function() { return _components_KeyedFileBrowser__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _components_DateTimePicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/DateTimePicker */ "./src/lib/components/DateTimePicker.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateTimePicker", function() { return _components_DateTimePicker__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _components_TagInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/TagInput */ "./src/lib/components/TagInput.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TagInput", function() { return _components_TagInput__WEBPACK_IMPORTED_MODULE_2__["default"]; });








/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2Nvb2xfY29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9pcy1wcm9wLXZhbGlkL2Rpc3QvaXMtcHJvcC12YWxpZC5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9kYXNoX2Nvb2xfY29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9tZW1vaXplL2Rpc3QvbWVtb2l6ZS5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9kYXNoX2Nvb2xfY29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi91bml0bGVzcy9kaXN0L3VuaXRsZXNzLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL2Rhc2hfY29vbF9jb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL2lzLXdoYXQvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vZGFzaF9jb29sX2NvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvbWVtb2l6ZS1vbmUvZGlzdC9tZW1vaXplLW9uZS5lc20uanMiLCJ3ZWJwYWNrOi8vZGFzaF9jb29sX2NvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvbWVyZ2UtYW55dGhpbmcvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vZGFzaF9jb29sX2NvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL2Rhc2hfY29vbF9jb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3JlYWN0anMtdGFnLWlucHV0L2Rpc3QvVGFnSW5wdXQuanMiLCJ3ZWJwYWNrOi8vZGFzaF9jb29sX2NvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvcmVhY3Rqcy10YWctaW5wdXQvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9kYXNoX2Nvb2xfY29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy9yZWFjdGpzLXRhZy1pbnB1dC9kaXN0L3N0eWxlZC9JbnB1dC5qcyIsIndlYnBhY2s6Ly9kYXNoX2Nvb2xfY29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy9yZWFjdGpzLXRhZy1pbnB1dC9kaXN0L3N0eWxlZC9UYWcuanMiLCJ3ZWJwYWNrOi8vZGFzaF9jb29sX2NvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvcmVhY3Rqcy10YWctaW5wdXQvZGlzdC9zdHlsZWQvVGFnRGVsZXRlLmpzIiwid2VicGFjazovL2Rhc2hfY29vbF9jb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3JlYWN0anMtdGFnLWlucHV0L2Rpc3Qvc3R5bGVkL1dyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vZGFzaF9jb29sX2NvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvc3R5bGVkLWNvbXBvbmVudHMvZGlzdC9zdHlsZWQtY29tcG9uZW50cy5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9kYXNoX2Nvb2xfY29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy9zdHlsaXMtcnVsZS1zaGVldC9pbmRleC5qcyIsIndlYnBhY2s6Ly9kYXNoX2Nvb2xfY29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy9zdHlsaXMvc3R5bGlzLm1pbi5qcyIsIndlYnBhY2s6Ly9kYXNoX2Nvb2xfY29tcG9uZW50cy8uL3NyYy9saWIvY29tcG9uZW50cy9UYWdJbnB1dC5qcyIsIndlYnBhY2s6Ly9kYXNoX2Nvb2xfY29tcG9uZW50cy8uL3NyYy9saWIvaW5kZXguanMiXSwibmFtZXMiOlsiVGFnSW5wdXQiLCJwcm9wcyIsInN0YXRlIiwidGFncyIsIm9uVGFnc0NoYW5nZWQiLCJiaW5kIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwidmFsdWUiLCJzZXRQcm9wcyIsImlkIiwid3JhcHBlclN0eWxlIiwiaW5wdXRTdHlsZSIsInRhZ0RlbGV0ZVN0eWxlIiwicGxhY2Vob2xkZXIiLCJ0YWdTdHlsZSIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIm9iamVjdCIsImFycmF5IiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBdUM7O0FBRXZDLGs3SEFBazdIOztBQUVsN0gsWUFBWSxnRUFBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLG9FQUFLLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNkckI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxzRUFBTyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDUnZCO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLDJFQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNqRDVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFlBQVk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxZQUFZO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxZQUFZO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEM7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsWUFBWSxVQUFVO0FBQ3RCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWtXOzs7Ozs7Ozs7Ozs7O0FDalRsVztBQUFBO0FBQ0E7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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5Q0FBeUMsU0FBUztBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLFdBQVc7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QjtBQUN4Rjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNFFBQTRRLG1CQUFtQixzREFBc0QsV0FBVyxlQUFlO0FBQy9XO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esd0NBQXdDLEtBQXFDLHlEQUF5RCxTQUFJO0FBQzFJOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0NBQXNDLGdCQUFnQixtREFBVTtBQUNoRTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztB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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNEQUFzRCw4REFBSztBQUMzRDtBQUNBLEdBQUc7O0FBRUgsTUFBTSxJQUFxQztBQUMzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RkFBOEYsYUFBYTtBQUMzRztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFVBQVUsS0FBcUMsSUFBSSw0Q0FBSztBQUN4RDtBQUNBO0FBQ0E7O0FBRUEsYUFBYSw0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RUFBRVMsaURBQVMsQ0FBQ0MsTUFIRztBQU1qQjtBQUNBVCxjQUFZLEVBQUVRLGlEQUFTLENBQUNFLE1BUFA7QUFTakJOLFVBQVEsRUFBRUksaURBQVMsQ0FBQ0UsTUFUSDtBQVdqQjtBQUNBVCxZQUFVLEVBQUVPLGlEQUFTLENBQUNFLE1BWkw7QUFjakI7QUFDQVIsZ0JBQWMsRUFBRU0saURBQVMsQ0FBQ0UsTUFmVDtBQWlCakI7QUFDQVAsYUFBVyxFQUFFSyxpREFBUyxDQUFDQyxNQWxCTjtBQW9CakI7QUFDQVosT0FBSyxFQUFFVyxpREFBUyxDQUFDRyxLQXJCQTs7QUF1QmpCOzs7O0FBSUFiLFVBQVEsRUFBRVUsaURBQVMsQ0FBQ0k7QUEzQkgsQ0FBckIsQzs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFHQSIsImZpbGUiOiIzNTUwZDdlLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtZW1vaXplIGZyb20gJ0BlbW90aW9uL21lbW9pemUnO1xuXG52YXIgcmVhY3RQcm9wc1JlZ2V4ID0gL14oKGNoaWxkcmVufGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MfGtleXxyZWZ8YXV0b0ZvY3VzfGRlZmF1bHRWYWx1ZXxkZWZhdWx0Q2hlY2tlZHxpbm5lckhUTUx8c3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nfHN1cHByZXNzSHlkcmF0aW9uV2FybmluZ3x2YWx1ZUxpbmt8YWNjZXB0fGFjY2VwdENoYXJzZXR8YWNjZXNzS2V5fGFjdGlvbnxhbGxvd3xhbGxvd1VzZXJNZWRpYXxhbGxvd1BheW1lbnRSZXF1ZXN0fGFsbG93RnVsbFNjcmVlbnxhbGxvd1RyYW5zcGFyZW5jeXxhbHR8YXN5bmN8YXV0b0NvbXBsZXRlfGF1dG9QbGF5fGNhcHR1cmV8Y2VsbFBhZGRpbmd8Y2VsbFNwYWNpbmd8Y2hhbGxlbmdlfGNoYXJTZXR8Y2hlY2tlZHxjaXRlfGNsYXNzSUR8Y2xhc3NOYW1lfGNvbHN8Y29sU3Bhbnxjb250ZW50fGNvbnRlbnRFZGl0YWJsZXxjb250ZXh0TWVudXxjb250cm9sc3xjb250cm9sc0xpc3R8Y29vcmRzfGNyb3NzT3JpZ2lufGRhdGF8ZGF0ZVRpbWV8ZGVjb2Rpbmd8ZGVmYXVsdHxkZWZlcnxkaXJ8ZGlzYWJsZWR8ZGlzYWJsZVBpY3R1cmVJblBpY3R1cmV8ZG93bmxvYWR8ZHJhZ2dhYmxlfGVuY1R5cGV8Zm9ybXxmb3JtQWN0aW9ufGZvcm1FbmNUeXBlfGZvcm1NZXRob2R8Zm9ybU5vVmFsaWRhdGV8Zm9ybVRhcmdldHxmcmFtZUJvcmRlcnxoZWFkZXJzfGhlaWdodHxoaWRkZW58aGlnaHxocmVmfGhyZWZMYW5nfGh0bWxGb3J8aHR0cEVxdWl2fGlkfGlucHV0TW9kZXxpbnRlZ3JpdHl8aXN8a2V5UGFyYW1zfGtleVR5cGV8a2luZHxsYWJlbHxsYW5nfGxpc3R8bG9hZGluZ3xsb29wfGxvd3xtYXJnaW5IZWlnaHR8bWFyZ2luV2lkdGh8bWF4fG1heExlbmd0aHxtZWRpYXxtZWRpYUdyb3VwfG1ldGhvZHxtaW58bWluTGVuZ3RofG11bHRpcGxlfG11dGVkfG5hbWV8bm9uY2V8bm9WYWxpZGF0ZXxvcGVufG9wdGltdW18cGF0dGVybnxwbGFjZWhvbGRlcnxwbGF5c0lubGluZXxwb3N0ZXJ8cHJlbG9hZHxwcm9maWxlfHJhZGlvR3JvdXB8cmVhZE9ubHl8cmVmZXJyZXJQb2xpY3l8cmVsfHJlcXVpcmVkfHJldmVyc2VkfHJvbGV8cm93c3xyb3dTcGFufHNhbmRib3h8c2NvcGV8c2NvcGVkfHNjcm9sbGluZ3xzZWFtbGVzc3xzZWxlY3RlZHxzaGFwZXxzaXplfHNpemVzfHNsb3R8c3BhbnxzcGVsbENoZWNrfHNyY3xzcmNEb2N8c3JjTGFuZ3xzcmNTZXR8c3RhcnR8c3RlcHxzdHlsZXxzdW1tYXJ5fHRhYkluZGV4fHRhcmdldHx0aXRsZXx0eXBlfHVzZU1hcHx2YWx1ZXx3aWR0aHx3bW9kZXx3cmFwfGFib3V0fGRhdGF0eXBlfGlubGlzdHxwcmVmaXh8cHJvcGVydHl8cmVzb3VyY2V8dHlwZW9mfHZvY2FifGF1dG9DYXBpdGFsaXplfGF1dG9Db3JyZWN0fGF1dG9TYXZlfGNvbG9yfGluZXJ0fGl0ZW1Qcm9wfGl0ZW1TY29wZXxpdGVtVHlwZXxpdGVtSUR8aXRlbVJlZnxvbnxyZXN1bHRzfHNlY3VyaXR5fHVuc2VsZWN0YWJsZXxhY2NlbnRIZWlnaHR8YWNjdW11bGF0ZXxhZGRpdGl2ZXxhbGlnbm1lbnRCYXNlbGluZXxhbGxvd1Jlb3JkZXJ8YWxwaGFiZXRpY3xhbXBsaXR1ZGV8YXJhYmljRm9ybXxhc2NlbnR8YXR0cmlidXRlTmFtZXxhdHRyaWJ1dGVUeXBlfGF1dG9SZXZlcnNlfGF6aW11dGh8YmFzZUZyZXF1ZW5jeXxiYXNlbGluZVNoaWZ0fGJhc2VQcm9maWxlfGJib3h8YmVnaW58Ymlhc3xieXxjYWxjTW9kZXxjYXBIZWlnaHR8Y2xpcHxjbGlwUGF0aFVuaXRzfGNsaXBQYXRofGNsaXBSdWxlfGNvbG9ySW50ZXJwb2xhdGlvbnxjb2xvckludGVycG9sYXRpb25GaWx0ZXJzfGNvbG9yUHJvZmlsZXxjb2xvclJlbmRlcmluZ3xjb250ZW50U2NyaXB0VHlwZXxjb250ZW50U3R5bGVUeXBlfGN1cnNvcnxjeHxjeXxkfGRlY2VsZXJhdGV8ZGVzY2VudHxkaWZmdXNlQ29uc3RhbnR8ZGlyZWN0aW9ufGRpc3BsYXl8ZGl2aXNvcnxkb21pbmFudEJhc2VsaW5lfGR1cnxkeHxkeXxlZGdlTW9kZXxlbGV2YXRpb258ZW5hYmxlQmFja2dyb3VuZHxlbmR8ZXhwb25lbnR8ZXh0ZXJuYWxSZXNvdXJjZXNSZXF1aXJlZHxmaWxsfGZpbGxPcGFjaXR5fGZpbGxSdWxlfGZpbHRlcnxmaWx0ZXJSZXN8ZmlsdGVyVW5pdHN8Zmxvb2RDb2xvcnxmbG9vZE9wYWNpdHl8Zm9jdXNhYmxlfGZvbnRGYW1pbHl8Zm9udFNpemV8Zm9udFNpemVBZGp1c3R8Zm9udFN0cmV0Y2h8Zm9udFN0eWxlfGZvbnRWYXJpYW50fGZvbnRXZWlnaHR8Zm9ybWF0fGZyb218ZnJ8Znh8Znl8ZzF8ZzJ8Z2x5cGhOYW1lfGdseXBoT3JpZW50YXRpb25Ib3Jpem9udGFsfGdseXBoT3JpZW50YXRpb25WZXJ0aWNhbHxnbHlwaFJlZnxncmFkaWVudFRyYW5zZm9ybXxncmFkaWVudFVuaXRzfGhhbmdpbmd8aG9yaXpBZHZYfGhvcml6T3JpZ2luWHxpZGVvZ3JhcGhpY3xpbWFnZVJlbmRlcmluZ3xpbnxpbjJ8aW50ZXJjZXB0fGt8azF8azJ8azN8azR8a2VybmVsTWF0cml4fGtlcm5lbFVuaXRMZW5ndGh8a2VybmluZ3xrZXlQb2ludHN8a2V5U3BsaW5lc3xrZXlUaW1lc3xsZW5ndGhBZGp1c3R8bGV0dGVyU3BhY2luZ3xsaWdodGluZ0NvbG9yfGxpbWl0aW5nQ29uZUFuZ2xlfGxvY2FsfG1hcmtlckVuZHxtYXJrZXJNaWR8bWFya2VyU3RhcnR8bWFya2VySGVpZ2h0fG1hcmtlclVuaXRzfG1hcmtlcldpZHRofG1hc2t8bWFza0NvbnRlbnRVbml0c3xtYXNrVW5pdHN8bWF0aGVtYXRpY2FsfG1vZGV8bnVtT2N0YXZlc3xvZmZzZXR8b3BhY2l0eXxvcGVyYXRvcnxvcmRlcnxvcmllbnR8b3JpZW50YXRpb258b3JpZ2lufG92ZXJmbG93fG92ZXJsaW5lUG9zaXRpb258b3ZlcmxpbmVUaGlja25lc3N8cGFub3NlMXxwYWludE9yZGVyfHBhdGhMZW5ndGh8cGF0dGVybkNvbnRlbnRVbml0c3xwYXR0ZXJuVHJhbnNmb3JtfHBhdHRlcm5Vbml0c3xwb2ludGVyRXZlbnRzfHBvaW50c3xwb2ludHNBdFh8cG9pbnRzQXRZfHBvaW50c0F0WnxwcmVzZXJ2ZUFscGhhfHByZXNlcnZlQXNwZWN0UmF0aW98cHJpbWl0aXZlVW5pdHN8cnxyYWRpdXN8cmVmWHxyZWZZfHJlbmRlcmluZ0ludGVudHxyZXBlYXRDb3VudHxyZXBlYXREdXJ8cmVxdWlyZWRFeHRlbnNpb25zfHJlcXVpcmVkRmVhdHVyZXN8cmVzdGFydHxyZXN1bHR8cm90YXRlfHJ4fHJ5fHNjYWxlfHNlZWR8c2hhcGVSZW5kZXJpbmd8c2xvcGV8c3BhY2luZ3xzcGVjdWxhckNvbnN0YW50fHNwZWN1bGFyRXhwb25lbnR8c3BlZWR8c3ByZWFkTWV0aG9kfHN0YXJ0T2Zmc2V0fHN0ZERldmlhdGlvbnxzdGVtaHxzdGVtdnxzdGl0Y2hUaWxlc3xzdG9wQ29sb3J8c3RvcE9wYWNpdHl8c3RyaWtldGhyb3VnaFBvc2l0aW9ufHN0cmlrZXRocm91Z2hUaGlja25lc3N8c3RyaW5nfHN0cm9rZXxzdHJva2VEYXNoYXJyYXl8c3Ryb2tlRGFzaG9mZnNldHxzdHJva2VMaW5lY2FwfHN0cm9rZUxpbmVqb2lufHN0cm9rZU1pdGVybGltaXR8c3Ryb2tlT3BhY2l0eXxzdHJva2VXaWR0aHxzdXJmYWNlU2NhbGV8c3lzdGVtTGFuZ3VhZ2V8dGFibGVWYWx1ZXN8dGFyZ2V0WHx0YXJnZXRZfHRleHRBbmNob3J8dGV4dERlY29yYXRpb258dGV4dFJlbmRlcmluZ3x0ZXh0TGVuZ3RofHRvfHRyYW5zZm9ybXx1MXx1Mnx1bmRlcmxpbmVQb3NpdGlvbnx1bmRlcmxpbmVUaGlja25lc3N8dW5pY29kZXx1bmljb2RlQmlkaXx1bmljb2RlUmFuZ2V8dW5pdHNQZXJFbXx2QWxwaGFiZXRpY3x2SGFuZ2luZ3x2SWRlb2dyYXBoaWN8dk1hdGhlbWF0aWNhbHx2YWx1ZXN8dmVjdG9yRWZmZWN0fHZlcnNpb258dmVydEFkdll8dmVydE9yaWdpblh8dmVydE9yaWdpbll8dmlld0JveHx2aWV3VGFyZ2V0fHZpc2liaWxpdHl8d2lkdGhzfHdvcmRTcGFjaW5nfHdyaXRpbmdNb2RlfHh8eEhlaWdodHx4MXx4Mnx4Q2hhbm5lbFNlbGVjdG9yfHhsaW5rQWN0dWF0ZXx4bGlua0FyY3JvbGV8eGxpbmtIcmVmfHhsaW5rUm9sZXx4bGlua1Nob3d8eGxpbmtUaXRsZXx4bGlua1R5cGV8eG1sQmFzZXx4bWxuc3x4bWxuc1hsaW5rfHhtbExhbmd8eG1sU3BhY2V8eXx5MXx5Mnx5Q2hhbm5lbFNlbGVjdG9yfHp8em9vbUFuZFBhbnxmb3J8Y2xhc3N8YXV0b2ZvY3VzKXwoKFtEZF1bQWFdW1R0XVtBYV18W0FhXVtScl1bSWldW0FhXXx4KS0uKikpJC87IC8vIGh0dHBzOi8vZXNiZW5jaC5jb20vYmVuY2gvNWJmZWU2OGE0Y2Q3ZTYwMDllZjYxZDIzXG5cbnZhciBpbmRleCA9IG1lbW9pemUoZnVuY3Rpb24gKHByb3ApIHtcbiAgcmV0dXJuIHJlYWN0UHJvcHNSZWdleC50ZXN0KHByb3ApIHx8IHByb3AuY2hhckNvZGVBdCgwKSA9PT0gMTExXG4gIC8qIG8gKi9cbiAgJiYgcHJvcC5jaGFyQ29kZUF0KDEpID09PSAxMTBcbiAgLyogbiAqL1xuICAmJiBwcm9wLmNoYXJDb2RlQXQoMikgPCA5MTtcbn1cbi8qIForMSAqL1xuKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4iLCJmdW5jdGlvbiBtZW1vaXplKGZuKSB7XG4gIHZhciBjYWNoZSA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gKGFyZykge1xuICAgIGlmIChjYWNoZVthcmddID09PSB1bmRlZmluZWQpIGNhY2hlW2FyZ10gPSBmbihhcmcpO1xuICAgIHJldHVybiBjYWNoZVthcmddO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vaXplO1xuIiwidmFyIHVuaXRsZXNzS2V5cyA9IHtcbiAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6IDEsXG4gIGJvcmRlckltYWdlT3V0c2V0OiAxLFxuICBib3JkZXJJbWFnZVNsaWNlOiAxLFxuICBib3JkZXJJbWFnZVdpZHRoOiAxLFxuICBib3hGbGV4OiAxLFxuICBib3hGbGV4R3JvdXA6IDEsXG4gIGJveE9yZGluYWxHcm91cDogMSxcbiAgY29sdW1uQ291bnQ6IDEsXG4gIGNvbHVtbnM6IDEsXG4gIGZsZXg6IDEsXG4gIGZsZXhHcm93OiAxLFxuICBmbGV4UG9zaXRpdmU6IDEsXG4gIGZsZXhTaHJpbms6IDEsXG4gIGZsZXhOZWdhdGl2ZTogMSxcbiAgZmxleE9yZGVyOiAxLFxuICBncmlkUm93OiAxLFxuICBncmlkUm93RW5kOiAxLFxuICBncmlkUm93U3BhbjogMSxcbiAgZ3JpZFJvd1N0YXJ0OiAxLFxuICBncmlkQ29sdW1uOiAxLFxuICBncmlkQ29sdW1uRW5kOiAxLFxuICBncmlkQ29sdW1uU3BhbjogMSxcbiAgZ3JpZENvbHVtblN0YXJ0OiAxLFxuICBtc0dyaWRSb3c6IDEsXG4gIG1zR3JpZFJvd1NwYW46IDEsXG4gIG1zR3JpZENvbHVtbjogMSxcbiAgbXNHcmlkQ29sdW1uU3BhbjogMSxcbiAgZm9udFdlaWdodDogMSxcbiAgbGluZUhlaWdodDogMSxcbiAgb3BhY2l0eTogMSxcbiAgb3JkZXI6IDEsXG4gIG9ycGhhbnM6IDEsXG4gIHRhYlNpemU6IDEsXG4gIHdpZG93czogMSxcbiAgekluZGV4OiAxLFxuICB6b29tOiAxLFxuICBXZWJraXRMaW5lQ2xhbXA6IDEsXG4gIC8vIFNWRy1yZWxhdGVkIHByb3BlcnRpZXNcbiAgZmlsbE9wYWNpdHk6IDEsXG4gIGZsb29kT3BhY2l0eTogMSxcbiAgc3RvcE9wYWNpdHk6IDEsXG4gIHN0cm9rZURhc2hhcnJheTogMSxcbiAgc3Ryb2tlRGFzaG9mZnNldDogMSxcbiAgc3Ryb2tlTWl0ZXJsaW1pdDogMSxcbiAgc3Ryb2tlT3BhY2l0eTogMSxcbiAgc3Ryb2tlV2lkdGg6IDFcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVuaXRsZXNzS2V5cztcbiIsIi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBvYmplY3QgdHlwZSBvZiB0aGUgZ2l2ZW4gcGF5bG9hZFxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHBheWxvYWRcclxuICogQHJldHVybnMge3N0cmluZ31cclxuICovXHJcbmZ1bmN0aW9uIGdldFR5cGUocGF5bG9hZCkge1xyXG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwYXlsb2FkKS5zbGljZSg4LCAtMSk7XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciB0aGUgcGF5bG9hZCBpcyB1bmRlZmluZWRcclxuICpcclxuICogQHBhcmFtIHsqfSBwYXlsb2FkXHJcbiAqIEByZXR1cm5zIHtwYXlsb2FkIGlzIHVuZGVmaW5lZH1cclxuICovXHJcbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHBheWxvYWQpIHtcclxuICAgIHJldHVybiBnZXRUeXBlKHBheWxvYWQpID09PSAnVW5kZWZpbmVkJztcclxufVxyXG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIHRoZSBwYXlsb2FkIGlzIG51bGxcclxuICpcclxuICogQHBhcmFtIHsqfSBwYXlsb2FkXHJcbiAqIEByZXR1cm5zIHtwYXlsb2FkIGlzIG51bGx9XHJcbiAqL1xyXG5mdW5jdGlvbiBpc051bGwocGF5bG9hZCkge1xyXG4gICAgcmV0dXJuIGdldFR5cGUocGF5bG9hZCkgPT09ICdOdWxsJztcclxufVxyXG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIHRoZSBwYXlsb2FkIGlzIGEgcGxhaW4gSmF2YVNjcmlwdCBvYmplY3QgKGV4Y2x1ZGluZyBzcGVjaWFsIGNsYXNzZXMgb3Igb2JqZWN0cyB3aXRoIG90aGVyIHByb3RvdHlwZXMpXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gcGF5bG9hZFxyXG4gKiBAcmV0dXJucyB7cGF5bG9hZCBpcyB7W2tleTogc3RyaW5nXTogYW55fX1cclxuICovXHJcbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QocGF5bG9hZCkge1xyXG4gICAgaWYgKGdldFR5cGUocGF5bG9hZCkgIT09ICdPYmplY3QnKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiBwYXlsb2FkLmNvbnN0cnVjdG9yID09PSBPYmplY3QgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKHBheWxvYWQpID09PSBPYmplY3QucHJvdG90eXBlO1xyXG59XHJcbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHBheWxvYWQgaXMgYSBwbGFpbiBKYXZhU2NyaXB0IG9iamVjdCAoZXhjbHVkaW5nIHNwZWNpYWwgY2xhc3NlcyBvciBvYmplY3RzIHdpdGggb3RoZXIgcHJvdG90eXBlcylcclxuICpcclxuICogQHBhcmFtIHsqfSBwYXlsb2FkXHJcbiAqIEByZXR1cm5zIHtwYXlsb2FkIGlzIHtba2V5OiBzdHJpbmddOiBhbnl9fVxyXG4gKi9cclxuZnVuY3Rpb24gaXNPYmplY3QocGF5bG9hZCkge1xyXG4gICAgcmV0dXJuIGlzUGxhaW5PYmplY3QocGF5bG9hZCk7XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciB0aGUgcGF5bG9hZCBpcyBhIGFuIGVtcHR5IG9iamVjdCAoZXhjbHVkaW5nIHNwZWNpYWwgY2xhc3NlcyBvciBvYmplY3RzIHdpdGggb3RoZXIgcHJvdG90eXBlcylcclxuICpcclxuICogQHBhcmFtIHsqfSBwYXlsb2FkXHJcbiAqIEByZXR1cm5zIHtwYXlsb2FkIGlzIHt9fVxyXG4gKi9cclxuZnVuY3Rpb24gaXNFbXB0eU9iamVjdChwYXlsb2FkKSB7XHJcbiAgICByZXR1cm4gaXNQbGFpbk9iamVjdChwYXlsb2FkKSAmJiBPYmplY3Qua2V5cyhwYXlsb2FkKS5sZW5ndGggPT09IDA7XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciB0aGUgcGF5bG9hZCBpcyBhbiBhbnkga2luZCBvZiBvYmplY3QgKGluY2x1ZGluZyBzcGVjaWFsIGNsYXNzZXMgb3Igb2JqZWN0cyB3aXRoIGRpZmZlcmVudCBwcm90b3R5cGVzKVxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHBheWxvYWRcclxuICogQHJldHVybnMge3BheWxvYWQgaXMge1trZXk6IHN0cmluZ106IGFueX19XHJcbiAqL1xyXG5mdW5jdGlvbiBpc0FueU9iamVjdChwYXlsb2FkKSB7XHJcbiAgICByZXR1cm4gZ2V0VHlwZShwYXlsb2FkKSA9PT0gJ09iamVjdCc7XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciB0aGUgcGF5bG9hZCBpcyBhbiBvYmplY3QgbGlrZSBhIHR5cGUgcGFzc2VkIGluIDwgPlxyXG4gKlxyXG4gKiBVc2FnZTogaXNPYmplY3RMaWtlPHtpZDogYW55fT4ocGF5bG9hZCkgLy8gd2lsbCBtYWtlIHN1cmUgaXQncyBhbiBvYmplY3QgYW5kIGhhcyBhbiBgaWRgIHByb3AuXHJcbiAqXHJcbiAqIEB0ZW1wbGF0ZSBUIHRoaXMgbXVzdCBiZSBwYXNzZWQgaW4gPCA+XHJcbiAqIEBwYXJhbSB7Kn0gcGF5bG9hZFxyXG4gKiBAcmV0dXJucyB7cGF5bG9hZCBpcyBUfVxyXG4gKi9cclxuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHBheWxvYWQpIHtcclxuICAgIHJldHVybiBpc0FueU9iamVjdChwYXlsb2FkKTtcclxufVxyXG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIHRoZSBwYXlsb2FkIGlzIGEgZnVuY3Rpb25cclxuICpcclxuICogQHBhcmFtIHsqfSBwYXlsb2FkXHJcbiAqIEByZXR1cm5zIHtwYXlsb2FkIGlzIEZ1bmN0aW9ufVxyXG4gKi9cclxuZnVuY3Rpb24gaXNGdW5jdGlvbihwYXlsb2FkKSB7XHJcbiAgICByZXR1cm4gZ2V0VHlwZShwYXlsb2FkKSA9PT0gJ0Z1bmN0aW9uJztcclxufVxyXG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIHRoZSBwYXlsb2FkIGlzIGFuIGFycmF5XHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gcGF5bG9hZFxyXG4gKiBAcmV0dXJucyB7cGF5bG9hZCBpcyB1bmRlZmluZWR9XHJcbiAqL1xyXG5mdW5jdGlvbiBpc0FycmF5KHBheWxvYWQpIHtcclxuICAgIHJldHVybiBnZXRUeXBlKHBheWxvYWQpID09PSAnQXJyYXknO1xyXG59XHJcbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHBheWxvYWQgaXMgYSBhbiBlbXB0eSBhcnJheVxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHBheWxvYWRcclxuICogQHJldHVybnMge3BheWxvYWQgaXMgW119XHJcbiAqL1xyXG5mdW5jdGlvbiBpc0VtcHR5QXJyYXkocGF5bG9hZCkge1xyXG4gICAgcmV0dXJuIGlzQXJyYXkocGF5bG9hZCkgJiYgcGF5bG9hZC5sZW5ndGggPT09IDA7XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciB0aGUgcGF5bG9hZCBpcyBhIHN0cmluZ1xyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHBheWxvYWRcclxuICogQHJldHVybnMge3BheWxvYWQgaXMgc3RyaW5nfVxyXG4gKi9cclxuZnVuY3Rpb24gaXNTdHJpbmcocGF5bG9hZCkge1xyXG4gICAgcmV0dXJuIGdldFR5cGUocGF5bG9hZCkgPT09ICdTdHJpbmcnO1xyXG59XHJcbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHBheWxvYWQgaXMgYSBzdHJpbmcsIEJVVCByZXR1cm5zIGZhbHNlIGZvciAnJ1xyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHBheWxvYWRcclxuICogQHJldHVybnMge3BheWxvYWQgaXMgc3RyaW5nfVxyXG4gKi9cclxuZnVuY3Rpb24gaXNGdWxsU3RyaW5nKHBheWxvYWQpIHtcclxuICAgIHJldHVybiBpc1N0cmluZyhwYXlsb2FkKSAmJiBwYXlsb2FkICE9PSAnJztcclxufVxyXG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIHRoZSBwYXlsb2FkIGlzICcnXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gcGF5bG9hZFxyXG4gKiBAcmV0dXJucyB7cGF5bG9hZCBpcyBzdHJpbmd9XHJcbiAqL1xyXG5mdW5jdGlvbiBpc0VtcHR5U3RyaW5nKHBheWxvYWQpIHtcclxuICAgIHJldHVybiBwYXlsb2FkID09PSAnJztcclxufVxyXG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIHRoZSBwYXlsb2FkIGlzIGEgbnVtYmVyXHJcbiAqXHJcbiAqIFRoaXMgd2lsbCByZXR1cm4gZmFsc2UgZm9yIE5hTlxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHBheWxvYWRcclxuICogQHJldHVybnMge3BheWxvYWQgaXMgbnVtYmVyfVxyXG4gKi9cclxuZnVuY3Rpb24gaXNOdW1iZXIocGF5bG9hZCkge1xyXG4gICAgcmV0dXJuIGdldFR5cGUocGF5bG9hZCkgPT09ICdOdW1iZXInICYmICFpc05hTihwYXlsb2FkKTtcclxufVxyXG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIHRoZSBwYXlsb2FkIGlzIGEgYm9vbGVhblxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHBheWxvYWRcclxuICogQHJldHVybnMge3BheWxvYWQgaXMgYm9vbGVhbn1cclxuICovXHJcbmZ1bmN0aW9uIGlzQm9vbGVhbihwYXlsb2FkKSB7XHJcbiAgICByZXR1cm4gZ2V0VHlwZShwYXlsb2FkKSA9PT0gJ0Jvb2xlYW4nO1xyXG59XHJcbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHBheWxvYWQgaXMgYSByZWd1bGFyIGV4cHJlc3Npb24gKFJlZ0V4cClcclxuICpcclxuICogQHBhcmFtIHsqfSBwYXlsb2FkXHJcbiAqIEByZXR1cm5zIHtwYXlsb2FkIGlzIFJlZ0V4cH1cclxuICovXHJcbmZ1bmN0aW9uIGlzUmVnRXhwKHBheWxvYWQpIHtcclxuICAgIHJldHVybiBnZXRUeXBlKHBheWxvYWQpID09PSAnUmVnRXhwJztcclxufVxyXG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIHRoZSBwYXlsb2FkIGlzIGEgTWFwXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gcGF5bG9hZFxyXG4gKiBAcmV0dXJucyB7cGF5bG9hZCBpcyBNYXB9XHJcbiAqL1xyXG5mdW5jdGlvbiBpc01hcChwYXlsb2FkKSB7XHJcbiAgICByZXR1cm4gZ2V0VHlwZShwYXlsb2FkKSA9PT0gJ01hcCc7XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciB0aGUgcGF5bG9hZCBpcyBhIFdlYWtNYXBcclxuICpcclxuICogQHBhcmFtIHsqfSBwYXlsb2FkXHJcbiAqIEByZXR1cm5zIHtwYXlsb2FkIGlzIFdlYWtNYXB9XHJcbiAqL1xyXG5mdW5jdGlvbiBpc1dlYWtNYXAocGF5bG9hZCkge1xyXG4gICAgcmV0dXJuIGdldFR5cGUocGF5bG9hZCkgPT09ICdXZWFrTWFwJztcclxufVxyXG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIHRoZSBwYXlsb2FkIGlzIGEgU2V0XHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gcGF5bG9hZFxyXG4gKiBAcmV0dXJucyB7cGF5bG9hZCBpcyBTZXR9XHJcbiAqL1xyXG5mdW5jdGlvbiBpc1NldChwYXlsb2FkKSB7XHJcbiAgICByZXR1cm4gZ2V0VHlwZShwYXlsb2FkKSA9PT0gJ1NldCc7XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciB0aGUgcGF5bG9hZCBpcyBhIFdlYWtTZXRcclxuICpcclxuICogQHBhcmFtIHsqfSBwYXlsb2FkXHJcbiAqIEByZXR1cm5zIHtwYXlsb2FkIGlzIFdlYWtTZXR9XHJcbiAqL1xyXG5mdW5jdGlvbiBpc1dlYWtTZXQocGF5bG9hZCkge1xyXG4gICAgcmV0dXJuIGdldFR5cGUocGF5bG9hZCkgPT09ICdXZWFrU2V0JztcclxufVxyXG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIHRoZSBwYXlsb2FkIGlzIGEgU3ltYm9sXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gcGF5bG9hZFxyXG4gKiBAcmV0dXJucyB7cGF5bG9hZCBpcyBzeW1ib2x9XHJcbiAqL1xyXG5mdW5jdGlvbiBpc1N5bWJvbChwYXlsb2FkKSB7XHJcbiAgICByZXR1cm4gZ2V0VHlwZShwYXlsb2FkKSA9PT0gJ1N5bWJvbCc7XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciB0aGUgcGF5bG9hZCBpcyBhIERhdGUsIGFuZCB0aGF0IHRoZSBkYXRlIGlzIHZhbGlkXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gcGF5bG9hZFxyXG4gKiBAcmV0dXJucyB7cGF5bG9hZCBpcyBEYXRlfVxyXG4gKi9cclxuZnVuY3Rpb24gaXNEYXRlKHBheWxvYWQpIHtcclxuICAgIHJldHVybiBnZXRUeXBlKHBheWxvYWQpID09PSAnRGF0ZScgJiYgIWlzTmFOKHBheWxvYWQpO1xyXG59XHJcbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHBheWxvYWQgaXMgYSBCbG9iXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gcGF5bG9hZFxyXG4gKiBAcmV0dXJucyB7cGF5bG9hZCBpcyBCbG9ifVxyXG4gKi9cclxuZnVuY3Rpb24gaXNCbG9iKHBheWxvYWQpIHtcclxuICAgIHJldHVybiBnZXRUeXBlKHBheWxvYWQpID09PSAnQmxvYic7XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciB0aGUgcGF5bG9hZCBpcyBhIEZpbGVcclxuICpcclxuICogQHBhcmFtIHsqfSBwYXlsb2FkXHJcbiAqIEByZXR1cm5zIHtwYXlsb2FkIGlzIEZpbGV9XHJcbiAqL1xyXG5mdW5jdGlvbiBpc0ZpbGUocGF5bG9hZCkge1xyXG4gICAgcmV0dXJuIGdldFR5cGUocGF5bG9hZCkgPT09ICdGaWxlJztcclxufVxyXG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIHRoZSBwYXlsb2FkIGlzIGEgUHJvbWlzZVxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHBheWxvYWRcclxuICogQHJldHVybnMge3BheWxvYWQgaXMgUHJvbWlzZX1cclxuICovXHJcbmZ1bmN0aW9uIGlzUHJvbWlzZShwYXlsb2FkKSB7XHJcbiAgICByZXR1cm4gZ2V0VHlwZShwYXlsb2FkKSA9PT0gJ1Byb21pc2UnO1xyXG59XHJcbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHBheWxvYWQgaXMgYW4gRXJyb3JcclxuICpcclxuICogQHBhcmFtIHsqfSBwYXlsb2FkXHJcbiAqIEByZXR1cm5zIHtwYXlsb2FkIGlzIEVycm9yfVxyXG4gKi9cclxuZnVuY3Rpb24gaXNFcnJvcihwYXlsb2FkKSB7XHJcbiAgICByZXR1cm4gZ2V0VHlwZShwYXlsb2FkKSA9PT0gJ0Vycm9yJztcclxufVxyXG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIHRoZSBwYXlsb2FkIGlzIGBOYU5gIGJ1dCBhbHNvIGEgYG51bWJlcmBcclxuICpcclxuICogQHBhcmFtIHsqfSBwYXlsb2FkXHJcbiAqIEByZXR1cm5zIHtwYXlsb2FkIGlzIHR5cGVvZiBOYU59XHJcbiAqL1xyXG5mdW5jdGlvbiBpc05hTlZhbHVlKHBheWxvYWQpIHtcclxuICAgIHJldHVybiBnZXRUeXBlKHBheWxvYWQpID09PSAnTnVtYmVyJyAmJiBpc05hTihwYXlsb2FkKTtcclxufVxyXG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIHRoZSBwYXlsb2FkIGlzIGEgcHJpbWl0aXZlIHR5cGUgKGVnLiBCb29sZWFuIHwgTnVsbCB8IFVuZGVmaW5lZCB8IE51bWJlciB8IFN0cmluZyB8IFN5bWJvbClcclxuICpcclxuICogQHBhcmFtIHsqfSBwYXlsb2FkXHJcbiAqIEByZXR1cm5zIHsocGF5bG9hZCBpcyBib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZCB8IG51bWJlciB8IHN0cmluZyB8IHN5bWJvbCl9XHJcbiAqL1xyXG5mdW5jdGlvbiBpc1ByaW1pdGl2ZShwYXlsb2FkKSB7XHJcbiAgICByZXR1cm4gKGlzQm9vbGVhbihwYXlsb2FkKSB8fFxyXG4gICAgICAgIGlzTnVsbChwYXlsb2FkKSB8fFxyXG4gICAgICAgIGlzVW5kZWZpbmVkKHBheWxvYWQpIHx8XHJcbiAgICAgICAgaXNOdW1iZXIocGF5bG9hZCkgfHxcclxuICAgICAgICBpc1N0cmluZyhwYXlsb2FkKSB8fFxyXG4gICAgICAgIGlzU3ltYm9sKHBheWxvYWQpKTtcclxufVxyXG4vKipcclxuICogUmV0dXJucyB0cnVlIHdoZXRoZXIgdGhlIHBheWxvYWQgaXMgbnVsbCBvciB1bmRlZmluZWRcclxuICpcclxuICogQHBhcmFtIHsqfSBwYXlsb2FkXHJcbiAqIEByZXR1cm5zIHsocGF5bG9hZCBpcyBudWxsIHwgdW5kZWZpbmVkKX1cclxuICovXHJcbmZ1bmN0aW9uIGlzTnVsbE9yVW5kZWZpbmVkKHBheWxvYWQpIHtcclxuICAgIHJldHVybiBpc051bGwocGF5bG9hZCkgfHwgaXNVbmRlZmluZWQocGF5bG9hZCk7XHJcbn1cclxuLyoqXHJcbiAqIERvZXMgYSBnZW5lcmljIGNoZWNrIHRvIGNoZWNrIHRoYXQgdGhlIGdpdmVuIHBheWxvYWQgaXMgb2YgYSBnaXZlbiB0eXBlLlxyXG4gKiBJbiBjYXNlcyBsaWtlIE51bWJlciwgaXQgd2lsbCByZXR1cm4gdHJ1ZSBmb3IgTmFOIGFzIE5hTiBpcyBhIE51bWJlciAodGhhbmtzIGphdmFzY3JpcHQhKTtcclxuICogSXQgd2lsbCwgaG93ZXZlciwgZGlmZmVyZW50aWF0ZSBiZXR3ZWVuIG9iamVjdCBhbmQgbnVsbFxyXG4gKlxyXG4gKiBAdGVtcGxhdGUgVFxyXG4gKiBAcGFyYW0geyp9IHBheWxvYWRcclxuICogQHBhcmFtIHtUfSB0eXBlXHJcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gV2lsbCB0aHJvdyB0eXBlIGVycm9yIGlmIHR5cGUgaXMgYW4gaW52YWxpZCB0eXBlXHJcbiAqIEByZXR1cm5zIHtwYXlsb2FkIGlzIFR9XHJcbiAqL1xyXG5mdW5jdGlvbiBpc1R5cGUocGF5bG9hZCwgdHlwZSkge1xyXG4gICAgaWYgKCEodHlwZSBpbnN0YW5jZW9mIEZ1bmN0aW9uKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1R5cGUgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XHJcbiAgICB9XHJcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0eXBlLCAncHJvdG90eXBlJykpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUeXBlIGlzIG5vdCBhIGNsYXNzJyk7XHJcbiAgICB9XHJcbiAgICAvLyBDbGFzc2VzIHVzdWFsbHkgaGF2ZSBuYW1lcyAoYXMgZnVuY3Rpb25zIHVzdWFsbHkgaGF2ZSBuYW1lcylcclxuICAgIHZhciBuYW1lID0gdHlwZS5uYW1lO1xyXG4gICAgcmV0dXJuIGdldFR5cGUocGF5bG9hZCkgPT09IG5hbWUgfHwgQm9vbGVhbihwYXlsb2FkICYmIHBheWxvYWQuY29uc3RydWN0b3IgPT09IHR5cGUpO1xyXG59XG5cbmV4cG9ydCB7IGdldFR5cGUsIGlzQW55T2JqZWN0LCBpc0FycmF5LCBpc0Jsb2IsIGlzQm9vbGVhbiwgaXNEYXRlLCBpc0VtcHR5QXJyYXksIGlzRW1wdHlPYmplY3QsIGlzRW1wdHlTdHJpbmcsIGlzRXJyb3IsIGlzRmlsZSwgaXNGdWxsU3RyaW5nLCBpc0Z1bmN0aW9uLCBpc01hcCwgaXNOYU5WYWx1ZSwgaXNOdWxsLCBpc051bGxPclVuZGVmaW5lZCwgaXNOdW1iZXIsIGlzT2JqZWN0LCBpc09iamVjdExpa2UsIGlzUGxhaW5PYmplY3QsIGlzUHJpbWl0aXZlLCBpc1Byb21pc2UsIGlzUmVnRXhwLCBpc1NldCwgaXNTdHJpbmcsIGlzU3ltYm9sLCBpc1R5cGUsIGlzVW5kZWZpbmVkLCBpc1dlYWtNYXAsIGlzV2Vha1NldCB9O1xuIiwiZnVuY3Rpb24gYXJlSW5wdXRzRXF1YWwobmV3SW5wdXRzLCBsYXN0SW5wdXRzKSB7XG4gICAgaWYgKG5ld0lucHV0cy5sZW5ndGggIT09IGxhc3RJbnB1dHMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZXdJbnB1dHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKG5ld0lucHV0c1tpXSAhPT0gbGFzdElucHV0c1tpXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBtZW1vaXplT25lKHJlc3VsdEZuLCBpc0VxdWFsKSB7XG4gICAgaWYgKGlzRXF1YWwgPT09IHZvaWQgMCkgeyBpc0VxdWFsID0gYXJlSW5wdXRzRXF1YWw7IH1cbiAgICB2YXIgbGFzdFRoaXM7XG4gICAgdmFyIGxhc3RBcmdzID0gW107XG4gICAgdmFyIGxhc3RSZXN1bHQ7XG4gICAgdmFyIGNhbGxlZE9uY2UgPSBmYWxzZTtcbiAgICBmdW5jdGlvbiBtZW1vaXplZCgpIHtcbiAgICAgICAgdmFyIG5ld0FyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIG5ld0FyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FsbGVkT25jZSAmJiBsYXN0VGhpcyA9PT0gdGhpcyAmJiBpc0VxdWFsKG5ld0FyZ3MsIGxhc3RBcmdzKSkge1xuICAgICAgICAgICAgcmV0dXJuIGxhc3RSZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgbGFzdFJlc3VsdCA9IHJlc3VsdEZuLmFwcGx5KHRoaXMsIG5ld0FyZ3MpO1xuICAgICAgICBjYWxsZWRPbmNlID0gdHJ1ZTtcbiAgICAgICAgbGFzdFRoaXMgPSB0aGlzO1xuICAgICAgICBsYXN0QXJncyA9IG5ld0FyZ3M7XG4gICAgICAgIHJldHVybiBsYXN0UmVzdWx0O1xuICAgIH1cbiAgICByZXR1cm4gbWVtb2l6ZWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW9pemVPbmU7XG4iLCJpbXBvcnQgeyBpc1BsYWluT2JqZWN0LCBpc0FycmF5LCBpc1N5bWJvbCB9IGZyb20gJ2lzLXdoYXQnO1xuXG4vKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG5cclxuZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufVxuXG5mdW5jdGlvbiBhc3NpZ25Qcm9wKGNhcnJ5LCBrZXksIG5ld1ZhbCwgb3JpZ2luYWxPYmplY3QpIHtcclxuICAgIHZhciBwcm9wVHlwZSA9IG9yaWdpbmFsT2JqZWN0LnByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSlcclxuICAgICAgICA/ICdlbnVtZXJhYmxlJ1xyXG4gICAgICAgIDogJ25vbmVudW1lcmFibGUnO1xyXG4gICAgaWYgKHByb3BUeXBlID09PSAnZW51bWVyYWJsZScpXHJcbiAgICAgICAgY2Fycnlba2V5XSA9IG5ld1ZhbDtcclxuICAgIGlmIChwcm9wVHlwZSA9PT0gJ25vbmVudW1lcmFibGUnKSB7XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNhcnJ5LCBrZXksIHtcclxuICAgICAgICAgICAgdmFsdWU6IG5ld1ZhbCxcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBtZXJnZVJlY3Vyc2l2ZWx5KG9yaWdpbiwgbmV3Q29tZXIsIGV4dGVuc2lvbnMpIHtcclxuICAgIC8vIHdvcmsgZGlyZWN0bHkgb24gbmV3Q29tZXIgaWYgaXRzIG5vdCBhbiBvYmplY3RcclxuICAgIGlmICghaXNQbGFpbk9iamVjdChuZXdDb21lcikpIHtcclxuICAgICAgICAvLyBleHRlbmQgbWVyZ2UgcnVsZXNcclxuICAgICAgICBpZiAoZXh0ZW5zaW9ucyAmJiBpc0FycmF5KGV4dGVuc2lvbnMpKSB7XHJcbiAgICAgICAgICAgIGV4dGVuc2lvbnMuZm9yRWFjaChmdW5jdGlvbiAoZXh0ZW5kKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdDb21lciA9IGV4dGVuZChvcmlnaW4sIG5ld0NvbWVyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXdDb21lcjtcclxuICAgIH1cclxuICAgIC8vIGRlZmluZSBuZXdPYmplY3QgdG8gbWVyZ2UgYWxsIHZhbHVlcyB1cG9uXHJcbiAgICB2YXIgbmV3T2JqZWN0ID0ge307XHJcbiAgICBpZiAoaXNQbGFpbk9iamVjdChvcmlnaW4pKSB7XHJcbiAgICAgICAgdmFyIHByb3BzXzEgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvcmlnaW4pO1xyXG4gICAgICAgIHZhciBzeW1ib2xzXzEgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9yaWdpbik7XHJcbiAgICAgICAgbmV3T2JqZWN0ID0gX19zcHJlYWRBcnJheXMocHJvcHNfMSwgc3ltYm9sc18xKS5yZWR1Y2UoZnVuY3Rpb24gKGNhcnJ5LCBrZXkpIHtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0VmFsID0gb3JpZ2luW2tleV07XHJcbiAgICAgICAgICAgIGlmICgoIWlzU3ltYm9sKGtleSkgJiYgIU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG5ld0NvbWVyKS5pbmNsdWRlcyhrZXkpKSB8fFxyXG4gICAgICAgICAgICAgICAgKGlzU3ltYm9sKGtleSkgJiYgIU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMobmV3Q29tZXIpLmluY2x1ZGVzKGtleSkpKSB7XHJcbiAgICAgICAgICAgICAgICBhc3NpZ25Qcm9wKGNhcnJ5LCBrZXksIHRhcmdldFZhbCwgb3JpZ2luKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY2Fycnk7XHJcbiAgICAgICAgfSwge30pO1xyXG4gICAgfVxyXG4gICAgdmFyIHByb3BzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMobmV3Q29tZXIpO1xyXG4gICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG5ld0NvbWVyKTtcclxuICAgIHZhciByZXN1bHQgPSBfX3NwcmVhZEFycmF5cyhwcm9wcywgc3ltYm9scykucmVkdWNlKGZ1bmN0aW9uIChjYXJyeSwga2V5KSB7XHJcbiAgICAgICAgLy8gcmUtZGVmaW5lIHRoZSBvcmlnaW4gYW5kIG5ld0NvbWVyIGFzIHRhcmdldFZhbCBhbmQgbmV3VmFsXHJcbiAgICAgICAgdmFyIG5ld1ZhbCA9IG5ld0NvbWVyW2tleV07XHJcbiAgICAgICAgdmFyIHRhcmdldFZhbCA9IChpc1BsYWluT2JqZWN0KG9yaWdpbikpXHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgPyBvcmlnaW5ba2V5XVxyXG4gICAgICAgICAgICA6IHVuZGVmaW5lZDtcclxuICAgICAgICAvLyBleHRlbmQgbWVyZ2UgcnVsZXNcclxuICAgICAgICBpZiAoZXh0ZW5zaW9ucyAmJiBpc0FycmF5KGV4dGVuc2lvbnMpKSB7XHJcbiAgICAgICAgICAgIGV4dGVuc2lvbnMuZm9yRWFjaChmdW5jdGlvbiAoZXh0ZW5kKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdWYWwgPSBleHRlbmQodGFyZ2V0VmFsLCBuZXdWYWwpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gV2hlbiBuZXdWYWwgaXMgYW4gb2JqZWN0IGRvIHRoZSBtZXJnZSByZWN1cnNpdmVseVxyXG4gICAgICAgIGlmICh0YXJnZXRWYWwgIT09IHVuZGVmaW5lZCAmJiBpc1BsYWluT2JqZWN0KG5ld1ZhbCkpIHtcclxuICAgICAgICAgICAgbmV3VmFsID0gbWVyZ2VSZWN1cnNpdmVseSh0YXJnZXRWYWwsIG5ld1ZhbCwgZXh0ZW5zaW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFzc2lnblByb3AoY2FycnksIGtleSwgbmV3VmFsLCBuZXdDb21lcik7XHJcbiAgICAgICAgcmV0dXJuIGNhcnJ5O1xyXG4gICAgfSwgbmV3T2JqZWN0KTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuLyoqXHJcbiAqIE1lcmdlIGFueXRoaW5nIHJlY3Vyc2l2ZWx5LlxyXG4gKiBPYmplY3RzIGdldCBtZXJnZWQsIHNwZWNpYWwgb2JqZWN0cyAoY2xhc3NlcyBldGMuKSBhcmUgcmUtYXNzaWduZWQgXCJhcyBpc1wiLlxyXG4gKiBCYXNpYyB0eXBlcyBvdmVyd3JpdGUgb2JqZWN0cyBvciBvdGhlciBiYXNpYyB0eXBlcy5cclxuICpcclxuICogQHBhcmFtIHsoSUNvbmZpZyB8IGFueSl9IG9yaWdpblxyXG4gKiBAcGFyYW0gey4uLmFueVtdfSBuZXdDb21lcnNcclxuICogQHJldHVybnMgdGhlIHJlc3VsdFxyXG4gKi9cclxuZnVuY3Rpb24gbWVyZ2Uob3JpZ2luKSB7XHJcbiAgICB2YXIgbmV3Q29tZXJzID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIG5ld0NvbWVyc1tfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcclxuICAgIH1cclxuICAgIHZhciBleHRlbnNpb25zID0gbnVsbDtcclxuICAgIHZhciBiYXNlID0gb3JpZ2luO1xyXG4gICAgaWYgKGlzUGxhaW5PYmplY3Qob3JpZ2luKSAmJiBvcmlnaW4uZXh0ZW5zaW9ucyAmJiBPYmplY3Qua2V5cyhvcmlnaW4pLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIGJhc2UgPSB7fTtcclxuICAgICAgICBleHRlbnNpb25zID0gb3JpZ2luLmV4dGVuc2lvbnM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3Q29tZXJzLnJlZHVjZShmdW5jdGlvbiAocmVzdWx0LCBuZXdDb21lcikge1xyXG4gICAgICAgIHJldHVybiBtZXJnZVJlY3Vyc2l2ZWx5KHJlc3VsdCwgbmV3Q29tZXIsIGV4dGVuc2lvbnMpO1xyXG4gICAgfSwgYmFzZSk7XHJcbn1cblxuZnVuY3Rpb24gY29uY2F0QXJyYXlzKG9yaWdpblZhbCwgbmV3VmFsKSB7XHJcbiAgICBpZiAoaXNBcnJheShvcmlnaW5WYWwpICYmIGlzQXJyYXkobmV3VmFsKSkge1xyXG4gICAgICAgIC8vIGNvbmNhdCBsb2dpY1xyXG4gICAgICAgIHJldHVybiBvcmlnaW5WYWwuY29uY2F0KG5ld1ZhbCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3VmFsOyAvLyBhbHdheXMgcmV0dXJuIG5ld1ZhbCBhcyBmYWxsYmFjayEhXHJcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVyZ2U7XG5leHBvcnQgeyBjb25jYXRBcnJheXMsIG1lcmdlIH07XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwidmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF90ZW1wbGF0ZU9iamVjdCA9IF90YWdnZWRUZW1wbGF0ZUxpdGVyYWwoWydcXG4gICAgICAgICAgICAnLCAnXFxuICAgICAgICAnXSwgWydcXG4gICAgICAgICAgICAnLCAnXFxuICAgICAgICAnXSk7XG5cbmZ1bmN0aW9uIF90YWdnZWRUZW1wbGF0ZUxpdGVyYWwoc3RyaW5ncywgcmF3KSB7IHJldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHN0cmluZ3MsIHsgcmF3OiB7IHZhbHVlOiBPYmplY3QuZnJlZXplKHJhdykgfSB9KSk7IH1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFdyYXBwZXIgZnJvbSAnLi9zdHlsZWQvV3JhcHBlcic7XG5pbXBvcnQgVGFnIGZyb20gJy4vc3R5bGVkL1RhZyc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9zdHlsZWQvSW5wdXQnO1xuaW1wb3J0IFRhZ0RlbGV0ZSBmcm9tICcuL3N0eWxlZC9UYWdEZWxldGUnO1xuXG52YXIgVGFnSW5wdXQgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhUYWdJbnB1dCwgX0NvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBUYWdJbnB1dChwcm9wcykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGFnSW5wdXQpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChUYWdJbnB1dC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFRhZ0lucHV0KSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2VsZWN0ZWRUYWdzOiBbXVxuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5yZW5kZXJUYWdzID0gX3RoaXMucmVuZGVyVGFncy5iaW5kKF90aGlzKTtcbiAgICAgICAgX3RoaXMub25JbnB1dEtleVVwID0gX3RoaXMub25JbnB1dEtleVVwLmJpbmQoX3RoaXMpO1xuICAgICAgICBfdGhpcy5vbklucHV0S2V5RG93biA9IF90aGlzLm9uSW5wdXRLZXlEb3duLmJpbmQoX3RoaXMpO1xuICAgICAgICBfdGhpcy5mb2N1c0lucHV0ID0gX3RoaXMuZm9jdXNJbnB1dC5iaW5kKF90aGlzKTtcbiAgICAgICAgX3RoaXMucmVtb3ZlVGFnID0gX3RoaXMucmVtb3ZlVGFnLmJpbmQoX3RoaXMpO1xuICAgICAgICBfdGhpcy5pbnB1dCA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFRhZ0lucHV0LCBbe1xuICAgICAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgICAgIHZhciB0YWdzID0gdGhpcy5wcm9wcy50YWdzO1xuXG4gICAgICAgICAgICB2YXIgcHJvcFRhZ3MgPSB0YWdzLm1hcChmdW5jdGlvbiAodGFnLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4XG4gICAgICAgICAgICAgICAgfSwgdGFnKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVGFnczogW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShzdGF0ZS5zZWxlY3RlZFRhZ3MpLCBfdG9Db25zdW1hYmxlQXJyYXkocHJvcFRhZ3MpKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNJbnB1dCgpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdvbklucHV0S2V5VXAnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25JbnB1dEtleVVwKGUpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBhZGRUYWdPbkVudGVyS2V5UHJlc3NlZCA9IF9wcm9wcy5hZGRUYWdPbkVudGVyS2V5UHJlc3NlZCxcbiAgICAgICAgICAgICAgICBvblRhZ3NDaGFuZ2VkID0gX3Byb3BzLm9uVGFnc0NoYW5nZWQ7XG5cbiAgICAgICAgICAgIHZhciBpbnB1dFZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICB2YXIgaW5wdXROb3RFbXB0eSA9IGlucHV0VmFsdWUgJiYgaW5wdXRWYWx1ZS50cmltKCkgIT09ICcnO1xuICAgICAgICAgICAgdmFyIGFkZFRhZyA9IGZ1bmN0aW9uIGFkZFRhZygpIHtcbiAgICAgICAgICAgICAgICBfdGhpczIuc2V0U3RhdGUoZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFRhZ3M6IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoc3RhdGUuc2VsZWN0ZWRUYWdzKSwgW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogc3RhdGUuc2VsZWN0ZWRUYWdzLmxlbmd0aCArIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVZhbHVlOiBpbnB1dFZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XSlcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZFRhZ3MgPSBfdGhpczIuc3RhdGUuc2VsZWN0ZWRUYWdzO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgX3RoaXMyLmNsZWFySW5wdXQoKTtcbiAgICAgICAgICAgICAgICAgICAgb25UYWdzQ2hhbmdlZChzZWxlY3RlZFRhZ3MpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInICYmIGlucHV0Tm90RW1wdHkgJiYgYWRkVGFnT25FbnRlcktleVByZXNzZWQpIHtcbiAgICAgICAgICAgICAgICBhZGRUYWcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnb25JbnB1dEtleURvd24nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25JbnB1dEtleURvd24oZSkge1xuICAgICAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBvblRhZ3NDaGFuZ2VkID0gdGhpcy5wcm9wcy5vblRhZ3NDaGFuZ2VkO1xuXG4gICAgICAgICAgICB2YXIgZGVsZXRlTGFzdFRhZyA9IGZ1bmN0aW9uIGRlbGV0ZUxhc3RUYWcoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMzLnNldFN0YXRlKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRUYWdzOiBzdGF0ZS5zZWxlY3RlZFRhZ3Muc3BsaWNlKDAsIHN0YXRlLnNlbGVjdGVkVGFncy5sZW5ndGggLSAxKVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkVGFncyA9IF90aGlzMy5zdGF0ZS5zZWxlY3RlZFRhZ3M7XG5cbiAgICAgICAgICAgICAgICAgICAgb25UYWdzQ2hhbmdlZChzZWxlY3RlZFRhZ3MpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnQmFja3NwYWNlJyAmJiBlLnRhcmdldC5zZWxlY3Rpb25TdGFydCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZUxhc3RUYWcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY2xlYXJJbnB1dCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjbGVhcklucHV0KCkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdmb2N1c0lucHV0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGZvY3VzSW5wdXQoKSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbW92ZVRhZycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVUYWcoaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVGFnczogc3RhdGUuc2VsZWN0ZWRUYWdzLmZpbHRlcihmdW5jdGlvbiAodGFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFnLmluZGV4ICE9PSBpbmRleDtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZFRhZ3MgPSBfdGhpczQuc3RhdGUuc2VsZWN0ZWRUYWdzO1xuICAgICAgICAgICAgICAgIHZhciBvblRhZ3NDaGFuZ2VkID0gX3RoaXM0LnByb3BzLm9uVGFnc0NoYW5nZWQ7XG5cbiAgICAgICAgICAgICAgICBvblRhZ3NDaGFuZ2VkKHNlbGVjdGVkVGFncyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyVGFncycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJUYWdzKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBzZWxlY3RlZFRhZ3MgPSB0aGlzLnN0YXRlLnNlbGVjdGVkVGFncztcblxuICAgICAgICAgICAgdmFyIFRhZ0NvbXBvbmVudCA9IHRoaXMuZ2V0VGFnU3R5bGVkQ29tcG9uZW50KCk7XG4gICAgICAgICAgICB2YXIgRGVsZXRlID0gdGhpcy5nZXRUYWdEZWxldGVDb21wb25lbnQoKTtcbiAgICAgICAgICAgIHZhciBEZWxldGVJY29uID0gdGhpcy5nZXREZWxldGVJY29uKCk7XG5cbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RlZFRhZ3MubGVuZ3RoID4gMCA/IHNlbGVjdGVkVGFncy5tYXAoZnVuY3Rpb24gKHRhZywgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgVGFnQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgICB7IGtleTogaW5kZXggfSxcbiAgICAgICAgICAgICAgICAgICAgdGFnLmRpc3BsYXlWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgaW5kZXg6IHRhZy5pbmRleCwgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzNS5yZW1vdmVUYWcodGFnLmluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBEZWxldGVJY29uXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSkgOiBudWxsO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXJQbGFjZWhvbGRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJQbGFjZWhvbGRlcigpIHtcbiAgICAgICAgICAgIHZhciBzZWxlY3RlZFRhZ3MgPSB0aGlzLnN0YXRlLnNlbGVjdGVkVGFncztcbiAgICAgICAgICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9IF9wcm9wczIucGxhY2Vob2xkZXIsXG4gICAgICAgICAgICAgICAgaGlkZUlucHV0UGxhY2Vob2xkZXJUZXh0SWZUYWdzUHJlc2VudCA9IF9wcm9wczIuaGlkZUlucHV0UGxhY2Vob2xkZXJUZXh0SWZUYWdzUHJlc2VudDtcblxuXG4gICAgICAgICAgICByZXR1cm4gaGlkZUlucHV0UGxhY2Vob2xkZXJUZXh0SWZUYWdzUHJlc2VudCAmJiBzZWxlY3RlZFRhZ3MubGVuZ3RoID4gMCA/IG51bGwgOiBwbGFjZWhvbGRlcjtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0RGVsZXRlSWNvbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREZWxldGVJY29uKCkge1xuICAgICAgICAgICAgdmFyIHRhZ0RlbGV0ZUljb24gPSB0aGlzLnByb3BzLnRhZ0RlbGV0ZUljb247XG5cbiAgICAgICAgICAgIHJldHVybiB0YWdEZWxldGVJY29uIHx8ICcgeCc7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldFRhZ0RlbGV0ZUNvbXBvbmVudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRUYWdEZWxldGVDb21wb25lbnQoKSB7XG4gICAgICAgICAgICB2YXIgdGFnRGVsZXRlU3R5bGUgPSB0aGlzLnByb3BzLnRhZ0RlbGV0ZVN0eWxlO1xuXG5cbiAgICAgICAgICAgIHJldHVybiB0YWdEZWxldGVTdHlsZSA/IHN0eWxlZChUYWdEZWxldGUpKF90ZW1wbGF0ZU9iamVjdCwgdGFnRGVsZXRlU3R5bGUpIDogVGFnRGVsZXRlO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRUYWdTdHlsZWRDb21wb25lbnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VGFnU3R5bGVkQ29tcG9uZW50KCkge1xuICAgICAgICAgICAgdmFyIHRhZ1N0eWxlID0gdGhpcy5wcm9wcy50YWdTdHlsZTtcblxuXG4gICAgICAgICAgICByZXR1cm4gdGFnU3R5bGUgPyBzdHlsZWQoVGFnKShfdGVtcGxhdGVPYmplY3QsIHRhZ1N0eWxlKSA6IFRhZztcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0SW5wdXRXcmFwcGVyU3R5bGVkQ29tcG9uZW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldElucHV0V3JhcHBlclN0eWxlZENvbXBvbmVudCgpIHtcbiAgICAgICAgICAgIHZhciB3cmFwcGVyU3R5bGUgPSB0aGlzLnByb3BzLndyYXBwZXJTdHlsZTtcblxuXG4gICAgICAgICAgICByZXR1cm4gd3JhcHBlclN0eWxlID8gc3R5bGVkKFdyYXBwZXIpKF90ZW1wbGF0ZU9iamVjdCwgd3JhcHBlclN0eWxlKSA6IFdyYXBwZXI7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldElucHV0U3R5bGVkQ29tcG9uZW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldElucHV0U3R5bGVkQ29tcG9uZW50KCkge1xuICAgICAgICAgICAgdmFyIGlucHV0U3R5bGUgPSB0aGlzLnByb3BzLmlucHV0U3R5bGU7XG5cblxuICAgICAgICAgICAgcmV0dXJuIGlucHV0U3R5bGUgPyBzdHlsZWQoSW5wdXQpKF90ZW1wbGF0ZU9iamVjdCwgaW5wdXRTdHlsZSkgOiBJbnB1dDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgb25JbnB1dENoYW5nZWQgPSB0aGlzLnByb3BzLm9uSW5wdXRDaGFuZ2VkO1xuXG4gICAgICAgICAgICB2YXIgSW5wdXRXcmFwcGVyID0gdGhpcy5nZXRJbnB1dFdyYXBwZXJTdHlsZWRDb21wb25lbnQoKTtcbiAgICAgICAgICAgIHZhciBJbnB1dENvbXBvbmVudCA9IHRoaXMuZ2V0SW5wdXRTdHlsZWRDb21wb25lbnQoKTtcblxuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgSW5wdXRXcmFwcGVyLFxuICAgICAgICAgICAgICAgIHsgb25DbGljazogdGhpcy5mb2N1c0lucHV0IH0sXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJUYWdzKCksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dENvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzNi5pbnB1dCA9IGVsO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogb25JbnB1dENoYW5nZWQsXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiB0aGlzLnJlbmRlclBsYWNlaG9sZGVyKCksXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgb25LZXlVcDogdGhpcy5vbklucHV0S2V5VXAsXG4gICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bjogdGhpcy5vbklucHV0S2V5RG93biB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBUYWdJbnB1dDtcbn0oQ29tcG9uZW50KTtcblxuVGFnSW5wdXQucHJvcFR5cGVzID0ge1xuICAgIHRhZ3M6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICAgIG9uVGFnc0NoYW5nZWQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25JbnB1dENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgd3JhcHBlclN0eWxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGlucHV0U3R5bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGFnU3R5bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGFnRGVsZXRlU3R5bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGFnRGVsZXRlSWNvbjogUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgYWRkVGFnT25FbnRlcktleVByZXNzZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGhpZGVJbnB1dFBsYWNlaG9sZGVyVGV4dElmVGFnc1ByZXNlbnQ6IFByb3BUeXBlcy5ib29sXG59O1xuXG5UYWdJbnB1dC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgcGxhY2Vob2xkZXI6ICdUeXBlIHNvbWV0aGluZyBhbmQgaGl0IGVudGVyLi4uJyxcbiAgICBhZGRUYWdPbkVudGVyS2V5UHJlc3NlZDogdHJ1ZSxcbiAgICBoaWRlSW5wdXRQbGFjZWhvbGRlclRleHRJZlRhZ3NQcmVzZW50OiB0cnVlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYWdJbnB1dDsiLCJpbXBvcnQgVGFnSW5wdXQgZnJvbSBcIi4vVGFnSW5wdXRcIjtcblxuZXhwb3J0IHsgVGFnSW5wdXQgfTsiLCJ2YXIgX3RlbXBsYXRlT2JqZWN0ID0gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChbJ1xcbiAgYmFja2dyb3VuZDogI0YxRjNGNDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjb2xvcjogIzY5NjI2RDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBjb2xvcjogIzY5NjI2RDtcXG4gIH1cXG4nXSwgWydcXG4gIGJhY2tncm91bmQ6ICNGMUYzRjQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6ICM2OTYyNkQ7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgY29sb3I6ICM2OTYyNkQ7XFxuICB9XFxuJ10pO1xuXG5mdW5jdGlvbiBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsKHN0cmluZ3MsIHJhdykgeyByZXR1cm4gT2JqZWN0LmZyZWV6ZShPYmplY3QuZGVmaW5lUHJvcGVydGllcyhzdHJpbmdzLCB7IHJhdzogeyB2YWx1ZTogT2JqZWN0LmZyZWV6ZShyYXcpIH0gfSkpOyB9XG5cbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG52YXIgSW5wdXQgPSBzdHlsZWQuaW5wdXQoX3RlbXBsYXRlT2JqZWN0KTtcblxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7IiwidmFyIF90ZW1wbGF0ZU9iamVjdCA9IF90YWdnZWRUZW1wbGF0ZUxpdGVyYWwoWydcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIGJhY2tncm91bmQ6ICM3N0I2RUE7XFxuICAgIGNvbG9yOiAjNjk2MjZEO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBtYXJnaW46IDAgNXB4IDVweCAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuJ10sIFsnXFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBiYWNrZ3JvdW5kOiAjNzdCNkVBO1xcbiAgICBjb2xvcjogIzY5NjI2RDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgbWFyZ2luOiAwIDVweCA1cHggMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiddKTtcblxuZnVuY3Rpb24gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChzdHJpbmdzLCByYXcpIHsgcmV0dXJuIE9iamVjdC5mcmVlemUoT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoc3RyaW5ncywgeyByYXc6IHsgdmFsdWU6IE9iamVjdC5mcmVlemUocmF3KSB9IH0pKTsgfVxuXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxudmFyIFRhZyA9IHN0eWxlZC5zcGFuKF90ZW1wbGF0ZU9iamVjdCk7XG5cbmV4cG9ydCBkZWZhdWx0IFRhZzsiLCJ2YXIgX3RlbXBsYXRlT2JqZWN0ID0gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChbJ1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICAmOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiBncmF5O1xcbiAgICB9XFxuJ10sIFsnXFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgICY6aG92ZXIge1xcbiAgICAgICAgY29sb3I6IGdyYXk7XFxuICAgIH1cXG4nXSk7XG5cbmZ1bmN0aW9uIF90YWdnZWRUZW1wbGF0ZUxpdGVyYWwoc3RyaW5ncywgcmF3KSB7IHJldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHN0cmluZ3MsIHsgcmF3OiB7IHZhbHVlOiBPYmplY3QuZnJlZXplKHJhdykgfSB9KSk7IH1cblxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbnZhciBUYWdEZWxldGUgPSBzdHlsZWQuc3Bhbi5hdHRycyhmdW5jdGlvbiAocHJvcHMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAnZGF0YS10ZXN0JzogJ3RhZy1kZWxldGUtJyArIHByb3BzLmluZGV4XG4gICAgfTtcbn0pKF90ZW1wbGF0ZU9iamVjdCk7XG5cbmV4cG9ydCBkZWZhdWx0IFRhZ0RlbGV0ZTsiLCJ2YXIgX3RlbXBsYXRlT2JqZWN0ID0gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChbJ1xcbiAgYmFja2dyb3VuZDogI0YxRjNGNDtcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggMTBweCByZ2JhKDAsMCwwLCAwLjEpO1xcbiAgZm9udC1mYW1pbHk6IFxcJ0hpbmRcXCcsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHdpZHRoOiA3MCU7XFxuJ10sIFsnXFxuICBiYWNrZ3JvdW5kOiAjRjFGM0Y0O1xcbiAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IHJnYmEoMCwwLDAsIDAuMSk7XFxuICBmb250LWZhbWlseTogXFwnSGluZFxcJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgd2lkdGg6IDcwJTtcXG4nXSk7XG5cbmZ1bmN0aW9uIF90YWdnZWRUZW1wbGF0ZUxpdGVyYWwoc3RyaW5ncywgcmF3KSB7IHJldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHN0cmluZ3MsIHsgcmF3OiB7IHZhbHVlOiBPYmplY3QuZnJlZXplKHJhdykgfSB9KSk7IH1cblxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbnZhciBXcmFwcGVyID0gc3R5bGVkLmRpdihfdGVtcGxhdGVPYmplY3QpO1xuXG5leHBvcnQgZGVmYXVsdCBXcmFwcGVyOyIsImltcG9ydCBTdHlsaXMgZnJvbSAnc3R5bGlzL3N0eWxpcy5taW4nO1xuaW1wb3J0IF9pbnNlcnRSdWxlUGx1Z2luIGZyb20gJ3N0eWxpcy1ydWxlLXNoZWV0JztcbmltcG9ydCBSZWFjdCwgeyBjbG9uZUVsZW1lbnQsIGNyZWF0ZUNvbnRleHQsIENvbXBvbmVudCwgY3JlYXRlRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1bml0bGVzcyBmcm9tICdAZW1vdGlvbi91bml0bGVzcyc7XG5pbXBvcnQgeyBpc0VsZW1lbnQsIGlzVmFsaWRFbGVtZW50VHlwZSwgRm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0LWlzJztcbmltcG9ydCBtZW1vaXplIGZyb20gJ21lbW9pemUtb25lJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgdmFsaWRBdHRyIGZyb20gJ0BlbW90aW9uL2lzLXByb3AtdmFsaWQnO1xuaW1wb3J0IG1lcmdlIGZyb20gJ21lcmdlLWFueXRoaW5nJztcblxuLy8gXG5cbnZhciBpbnRlcmxlYXZlID0gKGZ1bmN0aW9uIChzdHJpbmdzLCBpbnRlcnBvbGF0aW9ucykge1xuICB2YXIgcmVzdWx0ID0gW3N0cmluZ3NbMF1dO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBpbnRlcnBvbGF0aW9ucy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgIHJlc3VsdC5wdXNoKGludGVycG9sYXRpb25zW2ldLCBzdHJpbmdzW2kgKyAxXSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG59O1xuXG52YXIgY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxudmFyIGNyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxudmFyIGluaGVyaXRzID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufTtcblxudmFyIG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzID0gZnVuY3Rpb24gKG9iaiwga2V5cykge1xuICB2YXIgdGFyZ2V0ID0ge307XG5cbiAgZm9yICh2YXIgaSBpbiBvYmopIHtcbiAgICBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlO1xuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlO1xuICAgIHRhcmdldFtpXSA9IG9ialtpXTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG52YXIgcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiA9IGZ1bmN0aW9uIChzZWxmLCBjYWxsKSB7XG4gIGlmICghc2VsZikge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xufTtcblxuLy8gXG52YXIgaXNQbGFpbk9iamVjdCA9IChmdW5jdGlvbiAoeCkge1xuICByZXR1cm4gKHR5cGVvZiB4ID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih4KSkgPT09ICdvYmplY3QnICYmIHguY29uc3RydWN0b3IgPT09IE9iamVjdDtcbn0pO1xuXG4vLyBcbnZhciBFTVBUWV9BUlJBWSA9IE9iamVjdC5mcmVlemUoW10pO1xudmFyIEVNUFRZX09CSkVDVCA9IE9iamVjdC5mcmVlemUoe30pO1xuXG4vLyBcbmZ1bmN0aW9uIGlzRnVuY3Rpb24odGVzdCkge1xuICByZXR1cm4gdHlwZW9mIHRlc3QgPT09ICdmdW5jdGlvbic7XG59XG5cbi8vIFxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lKHRhcmdldCkge1xuICByZXR1cm4gKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyB0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJyAmJiB0YXJnZXQgOiBmYWxzZSkgfHwgdGFyZ2V0LmRpc3BsYXlOYW1lIHx8IHRhcmdldC5uYW1lIHx8ICdDb21wb25lbnQnO1xufVxuXG4vLyBcbmZ1bmN0aW9uIGlzU3RhdGVsZXNzRnVuY3Rpb24odGVzdCkge1xuICByZXR1cm4gdHlwZW9mIHRlc3QgPT09ICdmdW5jdGlvbicgJiYgISh0ZXN0LnByb3RvdHlwZSAmJiB0ZXN0LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuLy8gXG5mdW5jdGlvbiBpc1N0eWxlZENvbXBvbmVudCh0YXJnZXQpIHtcbiAgcmV0dXJuIHRhcmdldCAmJiB0eXBlb2YgdGFyZ2V0LnN0eWxlZENvbXBvbmVudElkID09PSAnc3RyaW5nJztcbn1cblxuLy8gXG5cbnZhciBTQ19BVFRSID0gdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIChwcm9jZXNzLmVudi5SRUFDVF9BUFBfU0NfQVRUUiB8fCBwcm9jZXNzLmVudi5TQ19BVFRSKSB8fCAnZGF0YS1zdHlsZWQnO1xuXG52YXIgU0NfVkVSU0lPTl9BVFRSID0gJ2RhdGEtc3R5bGVkLXZlcnNpb24nO1xuXG52YXIgU0NfU1RSRUFNX0FUVFIgPSAnZGF0YS1zdHlsZWQtc3RyZWFtZWQnO1xuXG52YXIgSVNfQlJPV1NFUiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICdIVE1MRWxlbWVudCcgaW4gd2luZG93O1xuXG52YXIgRElTQUJMRV9TUEVFRFkgPSB0eXBlb2YgU0NfRElTQUJMRV9TUEVFRFkgPT09ICdib29sZWFuJyAmJiBTQ19ESVNBQkxFX1NQRUVEWSB8fCB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgKHByb2Nlc3MuZW52LlJFQUNUX0FQUF9TQ19ESVNBQkxFX1NQRUVEWSB8fCBwcm9jZXNzLmVudi5TQ19ESVNBQkxFX1NQRUVEWSkgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJztcblxuLy8gU2hhcmVkIGVtcHR5IGV4ZWN1dGlvbiBjb250ZXh0IHdoZW4gZ2VuZXJhdGluZyBzdGF0aWMgc3R5bGVzXG52YXIgU1RBVElDX0VYRUNVVElPTl9DT05URVhUID0ge307XG5cbi8vIFxuXG5cbi8qKlxuICogUGFyc2UgZXJyb3JzLm1kIGFuZCB0dXJuIGl0IGludG8gYSBzaW1wbGUgaGFzaCBvZiBjb2RlOiBtZXNzYWdlXG4gKi9cbnZhciBFUlJPUlMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8ge1xuICBcIjFcIjogXCJDYW5ub3QgY3JlYXRlIHN0eWxlZC1jb21wb25lbnQgZm9yIGNvbXBvbmVudDogJXMuXFxuXFxuXCIsXG4gIFwiMlwiOiBcIkNhbid0IGNvbGxlY3Qgc3R5bGVzIG9uY2UgeW91J3ZlIGNvbnN1bWVkIGEgYFNlcnZlclN0eWxlU2hlZXRgJ3Mgc3R5bGVzISBgU2VydmVyU3R5bGVTaGVldGAgaXMgYSBvbmUgb2ZmIGluc3RhbmNlIGZvciBlYWNoIHNlcnZlci1zaWRlIHJlbmRlciBjeWNsZS5cXG5cXG4tIEFyZSB5b3UgdHJ5aW5nIHRvIHJldXNlIGl0IGFjcm9zcyByZW5kZXJzP1xcbi0gQXJlIHlvdSBhY2NpZGVudGFsbHkgY2FsbGluZyBjb2xsZWN0U3R5bGVzIHR3aWNlP1xcblxcblwiLFxuICBcIjNcIjogXCJTdHJlYW1pbmcgU1NSIGlzIG9ubHkgc3VwcG9ydGVkIGluIGEgTm9kZS5qcyBlbnZpcm9ubWVudDsgUGxlYXNlIGRvIG5vdCB0cnkgdG8gY2FsbCB0aGlzIG1ldGhvZCBpbiB0aGUgYnJvd3Nlci5cXG5cXG5cIixcbiAgXCI0XCI6IFwiVGhlIGBTdHlsZVNoZWV0TWFuYWdlcmAgZXhwZWN0cyBhIHZhbGlkIHRhcmdldCBvciBzaGVldCBwcm9wIVxcblxcbi0gRG9lcyB0aGlzIGVycm9yIG9jY3VyIG9uIHRoZSBjbGllbnQgYW5kIGlzIHlvdXIgdGFyZ2V0IGZhbHN5P1xcbi0gRG9lcyB0aGlzIGVycm9yIG9jY3VyIG9uIHRoZSBzZXJ2ZXIgYW5kIGlzIHRoZSBzaGVldCBmYWxzeT9cXG5cXG5cIixcbiAgXCI1XCI6IFwiVGhlIGNsb25lIG1ldGhvZCBjYW5ub3QgYmUgdXNlZCBvbiB0aGUgY2xpZW50IVxcblxcbi0gQXJlIHlvdSBydW5uaW5nIGluIGEgY2xpZW50LWxpa2UgZW52aXJvbm1lbnQgb24gdGhlIHNlcnZlcj9cXG4tIEFyZSB5b3UgdHJ5aW5nIHRvIHJ1biBTU1Igb24gdGhlIGNsaWVudD9cXG5cXG5cIixcbiAgXCI2XCI6IFwiVHJ5aW5nIHRvIGluc2VydCBhIG5ldyBzdHlsZSB0YWcsIGJ1dCB0aGUgZ2l2ZW4gTm9kZSBpcyB1bm1vdW50ZWQhXFxuXFxuLSBBcmUgeW91IHVzaW5nIGEgY3VzdG9tIHRhcmdldCB0aGF0IGlzbid0IG1vdW50ZWQ/XFxuLSBEb2VzIHlvdXIgZG9jdW1lbnQgbm90IGhhdmUgYSB2YWxpZCBoZWFkIGVsZW1lbnQ/XFxuLSBIYXZlIHlvdSBhY2NpZGVudGFsbHkgcmVtb3ZlZCBhIHN0eWxlIHRhZyBtYW51YWxseT9cXG5cXG5cIixcbiAgXCI3XCI6IFwiVGhlbWVQcm92aWRlcjogUGxlYXNlIHJldHVybiBhbiBvYmplY3QgZnJvbSB5b3VyIFxcXCJ0aGVtZVxcXCIgcHJvcCBmdW5jdGlvbiwgZS5nLlxcblxcbmBgYGpzXFxudGhlbWU9eygpID0+ICh7fSl9XFxuYGBgXFxuXFxuXCIsXG4gIFwiOFwiOiBcIlRoZW1lUHJvdmlkZXI6IFBsZWFzZSBtYWtlIHlvdXIgXFxcInRoZW1lXFxcIiBwcm9wIGFuIG9iamVjdC5cXG5cXG5cIixcbiAgXCI5XCI6IFwiTWlzc2luZyBkb2N1bWVudCBgPGhlYWQ+YFxcblxcblwiLFxuICBcIjEwXCI6IFwiQ2Fubm90IGZpbmQgYSBTdHlsZVNoZWV0IGluc3RhbmNlLiBVc3VhbGx5IHRoaXMgaGFwcGVucyBpZiB0aGVyZSBhcmUgbXVsdGlwbGUgY29waWVzIG9mIHN0eWxlZC1jb21wb25lbnRzIGxvYWRlZCBhdCBvbmNlLiBDaGVjayBvdXQgdGhpcyBpc3N1ZSBmb3IgaG93IHRvIHRyb3VibGVzaG9vdCBhbmQgZml4IHRoZSBjb21tb24gY2FzZXMgd2hlcmUgdGhpcyBzaXR1YXRpb24gY2FuIGhhcHBlbjogaHR0cHM6Ly9naXRodWIuY29tL3N0eWxlZC1jb21wb25lbnRzL3N0eWxlZC1jb21wb25lbnRzL2lzc3Vlcy8xOTQxI2lzc3VlY29tbWVudC00MTc4NjIwMjFcXG5cXG5cIixcbiAgXCIxMVwiOiBcIl9UaGlzIGVycm9yIHdhcyByZXBsYWNlZCB3aXRoIGEgZGV2LXRpbWUgd2FybmluZywgaXQgd2lsbCBiZSBkZWxldGVkIGZvciB2NCBmaW5hbC5fIFtjcmVhdGVHbG9iYWxTdHlsZV0gcmVjZWl2ZWQgY2hpbGRyZW4gd2hpY2ggd2lsbCBub3QgYmUgcmVuZGVyZWQuIFBsZWFzZSB1c2UgdGhlIGNvbXBvbmVudCB3aXRob3V0IHBhc3NpbmcgY2hpbGRyZW4gZWxlbWVudHMuXFxuXFxuXCIsXG4gIFwiMTJcIjogXCJJdCBzZWVtcyB5b3UgYXJlIGludGVycG9sYXRpbmcgYSBrZXlmcmFtZSBkZWNsYXJhdGlvbiAoJXMpIGludG8gYW4gdW50YWdnZWQgc3RyaW5nLiBUaGlzIHdhcyBzdXBwb3J0ZWQgaW4gc3R5bGVkLWNvbXBvbmVudHMgdjMsIGJ1dCBpcyBub3QgbG9uZ2VyIHN1cHBvcnRlZCBpbiB2NCBhcyBrZXlmcmFtZXMgYXJlIG5vdyBpbmplY3RlZCBvbi1kZW1hbmQuIFBsZWFzZSB3cmFwIHlvdXIgc3RyaW5nIGluIHRoZSBjc3NcXFxcYFxcXFxgIGhlbHBlciB3aGljaCBlbnN1cmVzIHRoZSBzdHlsZXMgYXJlIGluamVjdGVkIGNvcnJlY3RseS4gU2VlIGh0dHBzOi8vd3d3LnN0eWxlZC1jb21wb25lbnRzLmNvbS9kb2NzL2FwaSNjc3NcXG5cXG5cIixcbiAgXCIxM1wiOiBcIiVzIGlzIG5vdCBhIHN0eWxlZCBjb21wb25lbnQgYW5kIGNhbm5vdCBiZSByZWZlcnJlZCB0byB2aWEgY29tcG9uZW50IHNlbGVjdG9yLiBTZWUgaHR0cHM6Ly93d3cuc3R5bGVkLWNvbXBvbmVudHMuY29tL2RvY3MvYWR2YW5jZWQjcmVmZXJyaW5nLXRvLW90aGVyLWNvbXBvbmVudHMgZm9yIG1vcmUgZGV0YWlscy5cXG5cIlxufSA6IHt9O1xuXG4vKipcbiAqIHN1cGVyIGJhc2ljIHZlcnNpb24gb2Ygc3ByaW50ZlxuICovXG5mdW5jdGlvbiBmb3JtYXQoKSB7XG4gIHZhciBhID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzBdO1xuICB2YXIgYiA9IFtdO1xuXG4gIGZvciAodmFyIGMgPSAxLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoOyBjIDwgbGVuOyBjICs9IDEpIHtcbiAgICBiLnB1c2goYXJndW1lbnRzLmxlbmd0aCA8PSBjID8gdW5kZWZpbmVkIDogYXJndW1lbnRzW2NdKTtcbiAgfVxuXG4gIGIuZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgIGEgPSBhLnJlcGxhY2UoLyVbYS16XS8sIGQpO1xuICB9KTtcblxuICByZXR1cm4gYTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYW4gZXJyb3IgZmlsZSBvdXQgb2YgZXJyb3JzLm1kIGZvciBkZXZlbG9wbWVudCBhbmQgYSBzaW1wbGUgd2ViIGxpbmsgdG8gdGhlIGZ1bGwgZXJyb3JzXG4gKiBpbiBwcm9kdWN0aW9uIG1vZGUuXG4gKi9cblxudmFyIFN0eWxlZENvbXBvbmVudHNFcnJvciA9IGZ1bmN0aW9uIChfRXJyb3IpIHtcbiAgaW5oZXJpdHMoU3R5bGVkQ29tcG9uZW50c0Vycm9yLCBfRXJyb3IpO1xuXG4gIGZ1bmN0aW9uIFN0eWxlZENvbXBvbmVudHNFcnJvcihjb2RlKSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgU3R5bGVkQ29tcG9uZW50c0Vycm9yKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBpbnRlcnBvbGF0aW9ucyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGludGVycG9sYXRpb25zW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfRXJyb3IuY2FsbCh0aGlzLCAnQW4gZXJyb3Igb2NjdXJyZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vc3R5bGVkLWNvbXBvbmVudHMvc3R5bGVkLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvcGFja2FnZXMvc3R5bGVkLWNvbXBvbmVudHMvc3JjL3V0aWxzL2Vycm9ycy5tZCMnICsgY29kZSArICcgZm9yIG1vcmUgaW5mb3JtYXRpb24uJyArIChpbnRlcnBvbGF0aW9ucy5sZW5ndGggPiAwID8gJyBBZGRpdGlvbmFsIGFyZ3VtZW50czogJyArIGludGVycG9sYXRpb25zLmpvaW4oJywgJykgOiAnJykpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfRXJyb3IuY2FsbCh0aGlzLCBmb3JtYXQuYXBwbHkodW5kZWZpbmVkLCBbRVJST1JTW2NvZGVdXS5jb25jYXQoaW50ZXJwb2xhdGlvbnMpKS50cmltKCkpKTtcbiAgICB9XG4gICAgcmV0dXJuIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMpO1xuICB9XG5cbiAgcmV0dXJuIFN0eWxlZENvbXBvbmVudHNFcnJvcjtcbn0oRXJyb3IpO1xuXG4vLyBcbnZhciBTQ19DT01QT05FTlRfSUQgPSAvXlteXFxTXFxuXSo/XFwvXFwqIHNjLWNvbXBvbmVudC1pZDpcXHMqKFxcUyspXFxzK1xcKlxcLy9nbTtcblxudmFyIGV4dHJhY3RDb21wcyA9IChmdW5jdGlvbiAobWF5YmVDU1MpIHtcbiAgdmFyIGNzcyA9ICcnICsgKG1heWJlQ1NTIHx8ICcnKTsgLy8gRGVmaW5pdGVseSBhIHN0cmluZywgYW5kIGEgY2xvbmVcbiAgdmFyIGV4aXN0aW5nQ29tcG9uZW50cyA9IFtdO1xuICBjc3MucmVwbGFjZShTQ19DT01QT05FTlRfSUQsIGZ1bmN0aW9uIChtYXRjaCwgY29tcG9uZW50SWQsIG1hdGNoSW5kZXgpIHtcbiAgICBleGlzdGluZ0NvbXBvbmVudHMucHVzaCh7IGNvbXBvbmVudElkOiBjb21wb25lbnRJZCwgbWF0Y2hJbmRleDogbWF0Y2hJbmRleCB9KTtcbiAgICByZXR1cm4gbWF0Y2g7XG4gIH0pO1xuICByZXR1cm4gZXhpc3RpbmdDb21wb25lbnRzLm1hcChmdW5jdGlvbiAoX3JlZiwgaSkge1xuICAgIHZhciBjb21wb25lbnRJZCA9IF9yZWYuY29tcG9uZW50SWQsXG4gICAgICAgIG1hdGNoSW5kZXggPSBfcmVmLm1hdGNoSW5kZXg7XG5cbiAgICB2YXIgbmV4dENvbXAgPSBleGlzdGluZ0NvbXBvbmVudHNbaSArIDFdO1xuICAgIHZhciBjc3NGcm9tRE9NID0gbmV4dENvbXAgPyBjc3Muc2xpY2UobWF0Y2hJbmRleCwgbmV4dENvbXAubWF0Y2hJbmRleCkgOiBjc3Muc2xpY2UobWF0Y2hJbmRleCk7XG4gICAgcmV0dXJuIHsgY29tcG9uZW50SWQ6IGNvbXBvbmVudElkLCBjc3NGcm9tRE9NOiBjc3NGcm9tRE9NIH07XG4gIH0pO1xufSk7XG5cbi8vIFxuXG52YXIgQ09NTUVOVF9SRUdFWCA9IC9eXFxzKlxcL1xcLy4qJC9nbTtcblxuLy8gTk9URTogVGhpcyBzdHlsaXMgaW5zdGFuY2UgaXMgb25seSB1c2VkIHRvIHNwbGl0IHJ1bGVzIGZyb20gU1NSJ2Qgc3R5bGUgdGFnc1xudmFyIHN0eWxpc1NwbGl0dGVyID0gbmV3IFN0eWxpcyh7XG4gIGdsb2JhbDogZmFsc2UsXG4gIGNhc2NhZGU6IHRydWUsXG4gIGtleWZyYW1lOiBmYWxzZSxcbiAgcHJlZml4OiBmYWxzZSxcbiAgY29tcHJlc3M6IGZhbHNlLFxuICBzZW1pY29sb246IHRydWVcbn0pO1xuXG52YXIgc3R5bGlzID0gbmV3IFN0eWxpcyh7XG4gIGdsb2JhbDogZmFsc2UsXG4gIGNhc2NhZGU6IHRydWUsXG4gIGtleWZyYW1lOiBmYWxzZSxcbiAgcHJlZml4OiB0cnVlLFxuICBjb21wcmVzczogZmFsc2UsXG4gIHNlbWljb2xvbjogZmFsc2UgLy8gTk9URTogVGhpcyBtZWFucyBcImF1dG9jb21wbGV0ZSBtaXNzaW5nIHNlbWljb2xvbnNcIlxufSk7XG5cbi8vIFdyYXAgYGluc2VydFJ1bGVQbHVnaW4gdG8gYnVpbGQgYSBsaXN0IG9mIHJ1bGVzLFxuLy8gYW5kIHRoZW4gbWFrZSBvdXIgb3duIHBsdWdpbiB0byByZXR1cm4gdGhlIHJ1bGVzLiBUaGlzXG4vLyBtYWtlcyBpdCBlYXNpZXIgdG8gaG9vayBpbnRvIHRoZSBleGlzdGluZyBTU1IgYXJjaGl0ZWN0dXJlXG5cbnZhciBwYXJzaW5nUnVsZXMgPSBbXTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG52YXIgcmV0dXJuUnVsZXNQbHVnaW4gPSBmdW5jdGlvbiByZXR1cm5SdWxlc1BsdWdpbihjb250ZXh0KSB7XG4gIGlmIChjb250ZXh0ID09PSAtMikge1xuICAgIHZhciBwYXJzZWRSdWxlcyA9IHBhcnNpbmdSdWxlcztcbiAgICBwYXJzaW5nUnVsZXMgPSBbXTtcbiAgICByZXR1cm4gcGFyc2VkUnVsZXM7XG4gIH1cbn07XG5cbnZhciBwYXJzZVJ1bGVzUGx1Z2luID0gX2luc2VydFJ1bGVQbHVnaW4oZnVuY3Rpb24gKHJ1bGUpIHtcbiAgcGFyc2luZ1J1bGVzLnB1c2gocnVsZSk7XG59KTtcblxudmFyIF9jb21wb25lbnRJZCA9IHZvaWQgMDtcbnZhciBfc2VsZWN0b3IgPSB2b2lkIDA7XG52YXIgX3NlbGVjdG9yUmVnZXhwID0gdm9pZCAwO1xuXG52YXIgc2VsZlJlZmVyZW5jZVJlcGxhY2VyID0gZnVuY3Rpb24gc2VsZlJlZmVyZW5jZVJlcGxhY2VyKG1hdGNoLCBvZmZzZXQsIHN0cmluZykge1xuICBpZiAoXG4gIC8vIHRoZSBmaXJzdCBzZWxmLXJlZiBpcyBhbHdheXMgdW50b3VjaGVkXG4gIG9mZnNldCA+IDAgJiZcbiAgLy8gdGhlcmUgc2hvdWxkIGJlIGF0IGxlYXN0IHR3byBzZWxmLXJlZnMgdG8gZG8gYSByZXBsYWNlbWVudCAoLmIgPiAuYilcbiAgc3RyaW5nLnNsaWNlKDAsIG9mZnNldCkuaW5kZXhPZihfc2VsZWN0b3IpICE9PSAtMSAmJlxuICAvLyBubyBjb25zZWN1dGl2ZSBzZWxmIHJlZnMgKC5iLmIpOyB0aGF0IGlzIGEgcHJlY2VkZW5jZSBib29zdCBhbmQgdHJlYXRlZCBkaWZmZXJlbnRseVxuICBzdHJpbmcuc2xpY2Uob2Zmc2V0IC0gX3NlbGVjdG9yLmxlbmd0aCwgb2Zmc2V0KSAhPT0gX3NlbGVjdG9yKSB7XG4gICAgcmV0dXJuICcuJyArIF9jb21wb25lbnRJZDtcbiAgfVxuXG4gIHJldHVybiBtYXRjaDtcbn07XG5cbi8qKlxuICogV2hlbiB3cml0aW5nIGEgc3R5bGUgbGlrZVxuICpcbiAqICYgKyAmIHtcbiAqICAgY29sb3I6IHJlZDtcbiAqIH1cbiAqXG4gKiBUaGUgc2Vjb25kIGFtcGVyc2FuZCBzaG91bGQgYmUgYSByZWZlcmVuY2UgdG8gdGhlIHN0YXRpYyBjb21wb25lbnQgY2xhc3MuIHN0eWxpc1xuICogaGFzIG5vIGtub3dsZWRnZSBvZiBzdGF0aWMgY2xhc3Mgc28gd2UgaGF2ZSB0byBpbnRlbGxpZ2VudGx5IHJlcGxhY2UgdGhlIGJhc2Ugc2VsZWN0b3IuXG4gKi9cbnZhciBzZWxmUmVmZXJlbmNlUmVwbGFjZW1lbnRQbHVnaW4gPSBmdW5jdGlvbiBzZWxmUmVmZXJlbmNlUmVwbGFjZW1lbnRQbHVnaW4oY29udGV4dCwgXywgc2VsZWN0b3JzKSB7XG4gIGlmIChjb250ZXh0ID09PSAyICYmIHNlbGVjdG9ycy5sZW5ndGggJiYgc2VsZWN0b3JzWzBdLmxhc3RJbmRleE9mKF9zZWxlY3RvcikgPiAwKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgc2VsZWN0b3JzWzBdID0gc2VsZWN0b3JzWzBdLnJlcGxhY2UoX3NlbGVjdG9yUmVnZXhwLCBzZWxmUmVmZXJlbmNlUmVwbGFjZXIpO1xuICB9XG59O1xuXG5zdHlsaXMudXNlKFtzZWxmUmVmZXJlbmNlUmVwbGFjZW1lbnRQbHVnaW4sIHBhcnNlUnVsZXNQbHVnaW4sIHJldHVyblJ1bGVzUGx1Z2luXSk7XG5zdHlsaXNTcGxpdHRlci51c2UoW3BhcnNlUnVsZXNQbHVnaW4sIHJldHVyblJ1bGVzUGx1Z2luXSk7XG5cbnZhciBzcGxpdEJ5UnVsZXMgPSBmdW5jdGlvbiBzcGxpdEJ5UnVsZXMoY3NzKSB7XG4gIHJldHVybiBzdHlsaXNTcGxpdHRlcignJywgY3NzKTtcbn07XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVJ1bGVzKHJ1bGVzLCBzZWxlY3RvciwgcHJlZml4KSB7XG4gIHZhciBjb21wb25lbnRJZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogJyYnO1xuXG4gIHZhciBmbGF0Q1NTID0gcnVsZXMuam9pbignJykucmVwbGFjZShDT01NRU5UX1JFR0VYLCAnJyk7IC8vIHJlcGxhY2UgSlMgY29tbWVudHNcblxuICB2YXIgY3NzU3RyID0gc2VsZWN0b3IgJiYgcHJlZml4ID8gcHJlZml4ICsgJyAnICsgc2VsZWN0b3IgKyAnIHsgJyArIGZsYXRDU1MgKyAnIH0nIDogZmxhdENTUztcblxuICAvLyBzdHlsaXMgaGFzIG5vIGNvbmNlcHQgb2Ygc3RhdGUgdG8gYmUgcGFzc2VkIHRvIHBsdWdpbnNcbiAgLy8gYnV0IHNpbmNlIEpTIGlzIHNpbmdsZT10aHJlYWRlZCwgd2UgY2FuIHJlbHkgb24gdGhhdCB0byBlbnN1cmVcbiAgLy8gdGhlc2UgcHJvcGVydGllcyBzdGF5IGluIHN5bmMgd2l0aCB0aGUgY3VycmVudCBzdHlsaXMgcnVuXG4gIF9jb21wb25lbnRJZCA9IGNvbXBvbmVudElkO1xuICBfc2VsZWN0b3IgPSBzZWxlY3RvcjtcbiAgX3NlbGVjdG9yUmVnZXhwID0gbmV3IFJlZ0V4cCgnXFxcXCcgKyBfc2VsZWN0b3IgKyAnXFxcXGInLCAnZycpO1xuXG4gIHJldHVybiBzdHlsaXMocHJlZml4IHx8ICFzZWxlY3RvciA/ICcnIDogc2VsZWN0b3IsIGNzc1N0cik7XG59XG5cbi8vIFxuLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlLCBuby11bmRlZiAqL1xuXG52YXIgZ2V0Tm9uY2UgPSAoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbn0pO1xuXG4vLyBcbi8qIFRoZXNlIGFyZSBoZWxwZXJzIGZvciB0aGUgU3R5bGVUYWdzIHRvIGtlZXAgdHJhY2sgb2YgdGhlIGluamVjdGVkXG4gKiBydWxlIG5hbWVzIGZvciBlYWNoIChjb21wb25lbnQpIElEIHRoYXQgdGhleSdyZSBrZWVwaW5nIHRyYWNrIG9mLlxuICogVGhleSdyZSBjcnVjaWFsIGZvciBkZXRlY3Rpbmcgd2hldGhlciBhIG5hbWUgaGFzIGFscmVhZHkgYmVlblxuICogaW5qZWN0ZWQuXG4gKiAoVGhpcyBleGNsdWRlcyByZWh5ZHJhdGVkIG5hbWVzKSAqL1xuXG4vKiBhZGRzIGEgbmV3IElEOm5hbWUgcGFpcmluZyB0byBhIG5hbWVzIGRpY3Rpb25hcnkgKi9cbnZhciBhZGROYW1lRm9ySWQgPSBmdW5jdGlvbiBhZGROYW1lRm9ySWQobmFtZXMsIGlkLCBuYW1lKSB7XG4gIGlmIChuYW1lKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdmFyIG5hbWVzRm9ySWQgPSBuYW1lc1tpZF0gfHwgKG5hbWVzW2lkXSA9IE9iamVjdC5jcmVhdGUobnVsbCkpO1xuICAgIG5hbWVzRm9ySWRbbmFtZV0gPSB0cnVlO1xuICB9XG59O1xuXG4vKiByZXNldHMgYW4gSUQgZW50aXJlbHkgYnkgb3ZlcndyaXRpbmcgaXQgaW4gdGhlIGRpY3Rpb25hcnkgKi9cbnZhciByZXNldElkTmFtZXMgPSBmdW5jdGlvbiByZXNldElkTmFtZXMobmFtZXMsIGlkKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICBuYW1lc1tpZF0gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xufTtcblxuLyogZmFjdG9yeSBmb3IgYSBuYW1lcyBkaWN0aW9uYXJ5IGNoZWNraW5nIHRoZSBleGlzdGFuY2Ugb2YgYW4gSUQ6bmFtZSBwYWlyaW5nICovXG52YXIgaGFzTmFtZUZvcklkID0gZnVuY3Rpb24gaGFzTmFtZUZvcklkKG5hbWVzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaWQsIG5hbWUpIHtcbiAgICByZXR1cm4gbmFtZXNbaWRdICE9PSB1bmRlZmluZWQgJiYgbmFtZXNbaWRdW25hbWVdO1xuICB9O1xufTtcblxuLyogc3RyaW5naWZpZXMgbmFtZXMgZm9yIHRoZSBodG1sL2VsZW1lbnQgb3V0cHV0ICovXG52YXIgc3RyaW5naWZ5TmFtZXMgPSBmdW5jdGlvbiBzdHJpbmdpZnlOYW1lcyhuYW1lcykge1xuICB2YXIgc3RyID0gJyc7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBndWFyZC1mb3ItaW5cbiAgZm9yICh2YXIgaWQgaW4gbmFtZXMpIHtcbiAgICBzdHIgKz0gT2JqZWN0LmtleXMobmFtZXNbaWRdKS5qb2luKCcgJykgKyAnICc7XG4gIH1cbiAgcmV0dXJuIHN0ci50cmltKCk7XG59O1xuXG4vKiBjbG9uZXMgdGhlIG5lc3RlZCBuYW1lcyBkaWN0aW9uYXJ5ICovXG52YXIgY2xvbmVOYW1lcyA9IGZ1bmN0aW9uIGNsb25lTmFtZXMobmFtZXMpIHtcbiAgdmFyIGNsb25lID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGd1YXJkLWZvci1pblxuICBmb3IgKHZhciBpZCBpbiBuYW1lcykge1xuICAgIGNsb25lW2lkXSA9IF9leHRlbmRzKHt9LCBuYW1lc1tpZF0pO1xuICB9XG4gIHJldHVybiBjbG9uZTtcbn07XG5cbi8vIFxuXG4vKiBUaGVzZSBhcmUgaGVscGVycyB0aGF0IGRlYWwgd2l0aCB0aGUgaW5zZXJ0UnVsZSAoYWthIHNwZWVkeSkgQVBJXG4gKiBUaGV5IGFyZSB1c2VkIGluIHRoZSBTdHlsZVRhZ3MgYW5kIHNwZWNpZmljYWxseSB0aGUgc3BlZWR5IHRhZ1xuICovXG5cbi8qIHJldHJpZXZlIGEgc2hlZXQgZm9yIGEgZ2l2ZW4gc3R5bGUgdGFnICovXG52YXIgc2hlZXRGb3JUYWcgPSBmdW5jdGlvbiBzaGVldEZvclRhZyh0YWcpIHtcbiAgLy8gJEZsb3dGaXhNZVxuICBpZiAodGFnLnNoZWV0KSByZXR1cm4gdGFnLnNoZWV0O1xuXG4gIC8qIEZpcmVmb3ggcXVpcmsgcmVxdWlyZXMgdXMgdG8gc3RlcCB0aHJvdWdoIGFsbCBzdHlsZXNoZWV0cyB0byBmaW5kIG9uZSBvd25lZCBieSB0aGUgZ2l2ZW4gdGFnICovXG4gIHZhciBzaXplID0gdGFnLm93bmVyRG9jdW1lbnQuc3R5bGVTaGVldHMubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7IGkgKz0gMSkge1xuICAgIHZhciBzaGVldCA9IHRhZy5vd25lckRvY3VtZW50LnN0eWxlU2hlZXRzW2ldO1xuICAgIC8vICRGbG93Rml4TWVcbiAgICBpZiAoc2hlZXQub3duZXJOb2RlID09PSB0YWcpIHJldHVybiBzaGVldDtcbiAgfVxuXG4gIC8qIHdlIHNob3VsZCBhbHdheXMgYmUgYWJsZSB0byBmaW5kIGEgdGFnICovXG4gIHRocm93IG5ldyBTdHlsZWRDb21wb25lbnRzRXJyb3IoMTApO1xufTtcblxuLyogaW5zZXJ0IGEgcnVsZSBzYWZlbHkgYW5kIHJldHVybiB3aGV0aGVyIGl0IHdhcyBhY3R1YWxseSBpbmplY3RlZCAqL1xudmFyIHNhZmVJbnNlcnRSdWxlID0gZnVuY3Rpb24gc2FmZUluc2VydFJ1bGUoc2hlZXQsIGNzc1J1bGUsIGluZGV4KSB7XG4gIC8qIGFib3J0IGVhcmx5IGlmIGNzc1J1bGUgc3RyaW5nIGlzIGZhbHN5ICovXG4gIGlmICghY3NzUnVsZSkgcmV0dXJuIGZhbHNlO1xuXG4gIHZhciBtYXhJbmRleCA9IHNoZWV0LmNzc1J1bGVzLmxlbmd0aDtcblxuICB0cnkge1xuICAgIC8qIHVzZSBpbnNlcnRSdWxlIGFuZCBjYXAgcGFzc2VkIGluZGV4IHdpdGggbWF4SW5kZXggKG5vIG9mIGNzc1J1bGVzKSAqL1xuICAgIHNoZWV0Lmluc2VydFJ1bGUoY3NzUnVsZSwgaW5kZXggPD0gbWF4SW5kZXggPyBpbmRleCA6IG1heEluZGV4KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgLyogYW55IGVycm9yIGluZGljYXRlcyBhbiBpbnZhbGlkIHJ1bGUgKi9cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qIGRlbGV0ZXMgYHNpemVgIHJ1bGVzIHN0YXJ0aW5nIGZyb20gYHJlbW92YWxJbmRleGAgKi9cbnZhciBkZWxldGVSdWxlcyA9IGZ1bmN0aW9uIGRlbGV0ZVJ1bGVzKHNoZWV0LCByZW1vdmFsSW5kZXgsIHNpemUpIHtcbiAgdmFyIGxvd2VyQm91bmQgPSByZW1vdmFsSW5kZXggLSBzaXplO1xuICBmb3IgKHZhciBpID0gcmVtb3ZhbEluZGV4OyBpID4gbG93ZXJCb3VuZDsgaSAtPSAxKSB7XG4gICAgc2hlZXQuZGVsZXRlUnVsZShpKTtcbiAgfVxufTtcblxuLy8gXG5cbi8qIHRoaXMgbWFya2VyIHNlcGFyYXRlcyBjb21wb25lbnQgc3R5bGVzIGFuZCBpcyBpbXBvcnRhbnQgZm9yIHJlaHlkcmF0aW9uICovXG52YXIgbWFrZVRleHRNYXJrZXIgPSBmdW5jdGlvbiBtYWtlVGV4dE1hcmtlcihpZCkge1xuICByZXR1cm4gJ1xcbi8qIHNjLWNvbXBvbmVudC1pZDogJyArIGlkICsgJyAqL1xcbic7XG59O1xuXG4vKiBhZGQgdXAgYWxsIG51bWJlcnMgaW4gYXJyYXkgdXAgdW50aWwgYW5kIGluY2x1ZGluZyB0aGUgaW5kZXggKi9cbnZhciBhZGRVcFVudGlsSW5kZXggPSBmdW5jdGlvbiBhZGRVcFVudGlsSW5kZXgoc2l6ZXMsIGluZGV4KSB7XG4gIHZhciB0b3RhbFVwVG9JbmRleCA9IDA7XG4gIGZvciAodmFyIGkgPSAwOyBpIDw9IGluZGV4OyBpICs9IDEpIHtcbiAgICB0b3RhbFVwVG9JbmRleCArPSBzaXplc1tpXTtcbiAgfVxuXG4gIHJldHVybiB0b3RhbFVwVG9JbmRleDtcbn07XG5cbi8qIGNyZWF0ZSBhIG5ldyBzdHlsZSB0YWcgYWZ0ZXIgbGFzdEVsICovXG52YXIgbWFrZVN0eWxlVGFnID0gZnVuY3Rpb24gbWFrZVN0eWxlVGFnKHRhcmdldCwgdGFnRWwsIGluc2VydEJlZm9yZSkge1xuICB2YXIgdGFyZ2V0RG9jdW1lbnQgPSBkb2N1bWVudDtcbiAgaWYgKHRhcmdldCkgdGFyZ2V0RG9jdW1lbnQgPSB0YXJnZXQub3duZXJEb2N1bWVudDtlbHNlIGlmICh0YWdFbCkgdGFyZ2V0RG9jdW1lbnQgPSB0YWdFbC5vd25lckRvY3VtZW50O1xuXG4gIHZhciBlbCA9IHRhcmdldERvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIGVsLnNldEF0dHJpYnV0ZShTQ19BVFRSLCAnJyk7XG4gIGVsLnNldEF0dHJpYnV0ZShTQ19WRVJTSU9OX0FUVFIsIFwiNC40LjFcIik7XG5cbiAgdmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcbiAgaWYgKG5vbmNlKSB7XG4gICAgZWwuc2V0QXR0cmlidXRlKCdub25jZScsIG5vbmNlKTtcbiAgfVxuXG4gIC8qIFdvcmsgYXJvdW5kIGluc2VydFJ1bGUgcXVpcmsgaW4gRWRnZUhUTUwgKi9cbiAgZWwuYXBwZW5kQ2hpbGQodGFyZ2V0RG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpKTtcblxuICBpZiAodGFyZ2V0ICYmICF0YWdFbCkge1xuICAgIC8qIEFwcGVuZCB0byB0YXJnZXQgd2hlbiBubyBwcmV2aW91cyBlbGVtZW50IHdhcyBwYXNzZWQgKi9cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoZWwpO1xuICB9IGVsc2Uge1xuICAgIGlmICghdGFnRWwgfHwgIXRhcmdldCB8fCAhdGFnRWwucGFyZW50Tm9kZSkge1xuICAgICAgdGhyb3cgbmV3IFN0eWxlZENvbXBvbmVudHNFcnJvcig2KTtcbiAgICB9XG5cbiAgICAvKiBJbnNlcnQgbmV3IHN0eWxlIHRhZyBhZnRlciB0aGUgcHJldmlvdXMgb25lICovXG4gICAgdGFnRWwucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWwsIGluc2VydEJlZm9yZSA/IHRhZ0VsIDogdGFnRWwubmV4dFNpYmxpbmcpO1xuICB9XG5cbiAgcmV0dXJuIGVsO1xufTtcblxuLyogdGFrZXMgYSBjc3MgZmFjdG9yeSBmdW5jdGlvbiBhbmQgb3V0cHV0cyBhbiBodG1sIHN0eWxlZCB0YWcgZmFjdG9yeSAqL1xudmFyIHdyYXBBc0h0bWxUYWcgPSBmdW5jdGlvbiB3cmFwQXNIdG1sVGFnKGNzcywgbmFtZXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhZGRpdGlvbmFsQXR0cnMpIHtcbiAgICB2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuICAgIHZhciBhdHRycyA9IFtub25jZSAmJiAnbm9uY2U9XCInICsgbm9uY2UgKyAnXCInLCBTQ19BVFRSICsgJz1cIicgKyBzdHJpbmdpZnlOYW1lcyhuYW1lcykgKyAnXCInLCBTQ19WRVJTSU9OX0FUVFIgKyAnPVwiJyArIFwiNC40LjFcIiArICdcIicsIGFkZGl0aW9uYWxBdHRyc107XG5cbiAgICB2YXIgaHRtbEF0dHIgPSBhdHRycy5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuICAgIHJldHVybiAnPHN0eWxlICcgKyBodG1sQXR0ciArICc+JyArIGNzcygpICsgJzwvc3R5bGU+JztcbiAgfTtcbn07XG5cbi8qIHRha2VzIGEgY3NzIGZhY3RvcnkgZnVuY3Rpb24gYW5kIG91dHB1dHMgYW4gZWxlbWVudCBmYWN0b3J5ICovXG52YXIgd3JhcEFzRWxlbWVudCA9IGZ1bmN0aW9uIHdyYXBBc0VsZW1lbnQoY3NzLCBuYW1lcykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfcHJvcHM7XG5cbiAgICB2YXIgcHJvcHMgPSAoX3Byb3BzID0ge30sIF9wcm9wc1tTQ19BVFRSXSA9IHN0cmluZ2lmeU5hbWVzKG5hbWVzKSwgX3Byb3BzW1NDX1ZFUlNJT05fQVRUUl0gPSBcIjQuNC4xXCIsIF9wcm9wcyk7XG5cbiAgICB2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuICAgIGlmIChub25jZSkge1xuICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgcHJvcHMubm9uY2UgPSBub25jZTtcbiAgICB9XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tZGFuZ2VyXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJywgX2V4dGVuZHMoe30sIHByb3BzLCB7IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7IF9faHRtbDogY3NzKCkgfSB9KSk7XG4gIH07XG59O1xuXG52YXIgZ2V0SWRzRnJvbU1hcmtlcnNGYWN0b3J5ID0gZnVuY3Rpb24gZ2V0SWRzRnJvbU1hcmtlcnNGYWN0b3J5KG1hcmtlcnMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMobWFya2Vycyk7XG4gIH07XG59O1xuXG4vKiBzcGVlZHkgdGFncyB1dGlsaXNlIGluc2VydFJ1bGUgKi9cbnZhciBtYWtlU3BlZWR5VGFnID0gZnVuY3Rpb24gbWFrZVNwZWVkeVRhZyhlbCwgZ2V0SW1wb3J0UnVsZVRhZykge1xuICB2YXIgbmFtZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB2YXIgbWFya2VycyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHZhciBzaXplcyA9IFtdO1xuXG4gIHZhciBleHRyYWN0SW1wb3J0ID0gZ2V0SW1wb3J0UnVsZVRhZyAhPT0gdW5kZWZpbmVkO1xuICAvKiBpbmRpY2F0ZXMgd2hldGhlciBnZXRJbXBvcnRSdWxlVGFnIHdhcyBjYWxsZWQgKi9cbiAgdmFyIHVzZWRJbXBvcnRSdWxlVGFnID0gZmFsc2U7XG5cbiAgdmFyIGluc2VydE1hcmtlciA9IGZ1bmN0aW9uIGluc2VydE1hcmtlcihpZCkge1xuICAgIHZhciBwcmV2ID0gbWFya2Vyc1tpZF07XG4gICAgaWYgKHByZXYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgbWFya2Vyc1tpZF0gPSBzaXplcy5sZW5ndGg7XG4gICAgc2l6ZXMucHVzaCgwKTtcbiAgICByZXNldElkTmFtZXMobmFtZXMsIGlkKTtcblxuICAgIHJldHVybiBtYXJrZXJzW2lkXTtcbiAgfTtcblxuICB2YXIgaW5zZXJ0UnVsZXMgPSBmdW5jdGlvbiBpbnNlcnRSdWxlcyhpZCwgY3NzUnVsZXMsIG5hbWUpIHtcbiAgICB2YXIgbWFya2VyID0gaW5zZXJ0TWFya2VyKGlkKTtcbiAgICB2YXIgc2hlZXQgPSBzaGVldEZvclRhZyhlbCk7XG4gICAgdmFyIGluc2VydEluZGV4ID0gYWRkVXBVbnRpbEluZGV4KHNpemVzLCBtYXJrZXIpO1xuXG4gICAgdmFyIGluamVjdGVkUnVsZXMgPSAwO1xuICAgIHZhciBpbXBvcnRSdWxlcyA9IFtdO1xuICAgIHZhciBjc3NSdWxlc1NpemUgPSBjc3NSdWxlcy5sZW5ndGg7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNzc1J1bGVzU2l6ZTsgaSArPSAxKSB7XG4gICAgICB2YXIgY3NzUnVsZSA9IGNzc1J1bGVzW2ldO1xuICAgICAgdmFyIG1heUhhdmVJbXBvcnQgPSBleHRyYWN0SW1wb3J0OyAvKiBAaW1wb3J0IHJ1bGVzIGFyZSByZW9yZGVyZWQgdG8gYXBwZWFyIGZpcnN0ICovXG4gICAgICBpZiAobWF5SGF2ZUltcG9ydCAmJiBjc3NSdWxlLmluZGV4T2YoJ0BpbXBvcnQnKSAhPT0gLTEpIHtcbiAgICAgICAgaW1wb3J0UnVsZXMucHVzaChjc3NSdWxlKTtcbiAgICAgIH0gZWxzZSBpZiAoc2FmZUluc2VydFJ1bGUoc2hlZXQsIGNzc1J1bGUsIGluc2VydEluZGV4ICsgaW5qZWN0ZWRSdWxlcykpIHtcbiAgICAgICAgbWF5SGF2ZUltcG9ydCA9IGZhbHNlO1xuICAgICAgICBpbmplY3RlZFJ1bGVzICs9IDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGV4dHJhY3RJbXBvcnQgJiYgaW1wb3J0UnVsZXMubGVuZ3RoID4gMCkge1xuICAgICAgdXNlZEltcG9ydFJ1bGVUYWcgPSB0cnVlO1xuICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgZ2V0SW1wb3J0UnVsZVRhZygpLmluc2VydFJ1bGVzKGlkICsgJy1pbXBvcnQnLCBpbXBvcnRSdWxlcyk7XG4gICAgfVxuXG4gICAgc2l6ZXNbbWFya2VyXSArPSBpbmplY3RlZFJ1bGVzOyAvKiBhZGQgdXAgbm8gb2YgaW5qZWN0ZWQgcnVsZXMgKi9cbiAgICBhZGROYW1lRm9ySWQobmFtZXMsIGlkLCBuYW1lKTtcbiAgfTtcblxuICB2YXIgcmVtb3ZlUnVsZXMgPSBmdW5jdGlvbiByZW1vdmVSdWxlcyhpZCkge1xuICAgIHZhciBtYXJrZXIgPSBtYXJrZXJzW2lkXTtcbiAgICBpZiAobWFya2VyID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICAvLyAkRmxvd0ZpeE1lXG4gICAgaWYgKGVsLmlzQ29ubmVjdGVkID09PSBmYWxzZSkgcmV0dXJuO1xuXG4gICAgdmFyIHNpemUgPSBzaXplc1ttYXJrZXJdO1xuICAgIHZhciBzaGVldCA9IHNoZWV0Rm9yVGFnKGVsKTtcbiAgICB2YXIgcmVtb3ZhbEluZGV4ID0gYWRkVXBVbnRpbEluZGV4KHNpemVzLCBtYXJrZXIpIC0gMTtcbiAgICBkZWxldGVSdWxlcyhzaGVldCwgcmVtb3ZhbEluZGV4LCBzaXplKTtcbiAgICBzaXplc1ttYXJrZXJdID0gMDtcbiAgICByZXNldElkTmFtZXMobmFtZXMsIGlkKTtcblxuICAgIGlmIChleHRyYWN0SW1wb3J0ICYmIHVzZWRJbXBvcnRSdWxlVGFnKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICBnZXRJbXBvcnRSdWxlVGFnKCkucmVtb3ZlUnVsZXMoaWQgKyAnLWltcG9ydCcpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgY3NzID0gZnVuY3Rpb24gY3NzKCkge1xuICAgIHZhciBfc2hlZXRGb3JUYWcgPSBzaGVldEZvclRhZyhlbCksXG4gICAgICAgIGNzc1J1bGVzID0gX3NoZWV0Rm9yVGFnLmNzc1J1bGVzO1xuXG4gICAgdmFyIHN0ciA9ICcnO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGd1YXJkLWZvci1pblxuICAgIGZvciAodmFyIGlkIGluIG1hcmtlcnMpIHtcbiAgICAgIHN0ciArPSBtYWtlVGV4dE1hcmtlcihpZCk7XG4gICAgICB2YXIgbWFya2VyID0gbWFya2Vyc1tpZF07XG4gICAgICB2YXIgZW5kID0gYWRkVXBVbnRpbEluZGV4KHNpemVzLCBtYXJrZXIpO1xuICAgICAgdmFyIHNpemUgPSBzaXplc1ttYXJrZXJdO1xuICAgICAgZm9yICh2YXIgaSA9IGVuZCAtIHNpemU7IGkgPCBlbmQ7IGkgKz0gMSkge1xuICAgICAgICB2YXIgcnVsZSA9IGNzc1J1bGVzW2ldO1xuICAgICAgICBpZiAocnVsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgc3RyICs9IHJ1bGUuY3NzVGV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdHI7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBjbG9uZTogZnVuY3Rpb24gY2xvbmUoKSB7XG4gICAgICB0aHJvdyBuZXcgU3R5bGVkQ29tcG9uZW50c0Vycm9yKDUpO1xuICAgIH0sXG5cbiAgICBjc3M6IGNzcyxcbiAgICBnZXRJZHM6IGdldElkc0Zyb21NYXJrZXJzRmFjdG9yeShtYXJrZXJzKSxcbiAgICBoYXNOYW1lRm9ySWQ6IGhhc05hbWVGb3JJZChuYW1lcyksXG4gICAgaW5zZXJ0TWFya2VyOiBpbnNlcnRNYXJrZXIsXG4gICAgaW5zZXJ0UnVsZXM6IGluc2VydFJ1bGVzLFxuICAgIHJlbW92ZVJ1bGVzOiByZW1vdmVSdWxlcyxcbiAgICBzZWFsZWQ6IGZhbHNlLFxuICAgIHN0eWxlVGFnOiBlbCxcbiAgICB0b0VsZW1lbnQ6IHdyYXBBc0VsZW1lbnQoY3NzLCBuYW1lcyksXG4gICAgdG9IVE1MOiB3cmFwQXNIdG1sVGFnKGNzcywgbmFtZXMpXG4gIH07XG59O1xuXG52YXIgbWFrZVRleHROb2RlID0gZnVuY3Rpb24gbWFrZVRleHROb2RlKHRhcmdldERvY3VtZW50LCBpZCkge1xuICByZXR1cm4gdGFyZ2V0RG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobWFrZVRleHRNYXJrZXIoaWQpKTtcbn07XG5cbnZhciBtYWtlQnJvd3NlclRhZyA9IGZ1bmN0aW9uIG1ha2VCcm93c2VyVGFnKGVsLCBnZXRJbXBvcnRSdWxlVGFnKSB7XG4gIHZhciBuYW1lcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHZhciBtYXJrZXJzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuICB2YXIgZXh0cmFjdEltcG9ydCA9IGdldEltcG9ydFJ1bGVUYWcgIT09IHVuZGVmaW5lZDtcblxuICAvKiBpbmRpY2F0ZXMgd2hldGhlciBnZXRJbXBvcnRSdWxlVGFnIHdhcyBjYWxsZWQgKi9cbiAgdmFyIHVzZWRJbXBvcnRSdWxlVGFnID0gZmFsc2U7XG5cbiAgdmFyIGluc2VydE1hcmtlciA9IGZ1bmN0aW9uIGluc2VydE1hcmtlcihpZCkge1xuICAgIHZhciBwcmV2ID0gbWFya2Vyc1tpZF07XG4gICAgaWYgKHByZXYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgbWFya2Vyc1tpZF0gPSBtYWtlVGV4dE5vZGUoZWwub3duZXJEb2N1bWVudCwgaWQpO1xuICAgIGVsLmFwcGVuZENoaWxkKG1hcmtlcnNbaWRdKTtcbiAgICBuYW1lc1tpZF0gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gICAgcmV0dXJuIG1hcmtlcnNbaWRdO1xuICB9O1xuXG4gIHZhciBpbnNlcnRSdWxlcyA9IGZ1bmN0aW9uIGluc2VydFJ1bGVzKGlkLCBjc3NSdWxlcywgbmFtZSkge1xuICAgIHZhciBtYXJrZXIgPSBpbnNlcnRNYXJrZXIoaWQpO1xuICAgIHZhciBpbXBvcnRSdWxlcyA9IFtdO1xuICAgIHZhciBjc3NSdWxlc1NpemUgPSBjc3NSdWxlcy5sZW5ndGg7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNzc1J1bGVzU2l6ZTsgaSArPSAxKSB7XG4gICAgICB2YXIgcnVsZSA9IGNzc1J1bGVzW2ldO1xuICAgICAgdmFyIG1heUhhdmVJbXBvcnQgPSBleHRyYWN0SW1wb3J0O1xuICAgICAgaWYgKG1heUhhdmVJbXBvcnQgJiYgcnVsZS5pbmRleE9mKCdAaW1wb3J0JykgIT09IC0xKSB7XG4gICAgICAgIGltcG9ydFJ1bGVzLnB1c2gocnVsZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYXlIYXZlSW1wb3J0ID0gZmFsc2U7XG4gICAgICAgIHZhciBzZXBhcmF0b3IgPSBpID09PSBjc3NSdWxlc1NpemUgLSAxID8gJycgOiAnICc7XG4gICAgICAgIG1hcmtlci5hcHBlbmREYXRhKCcnICsgcnVsZSArIHNlcGFyYXRvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYWRkTmFtZUZvcklkKG5hbWVzLCBpZCwgbmFtZSk7XG5cbiAgICBpZiAoZXh0cmFjdEltcG9ydCAmJiBpbXBvcnRSdWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICB1c2VkSW1wb3J0UnVsZVRhZyA9IHRydWU7XG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICBnZXRJbXBvcnRSdWxlVGFnKCkuaW5zZXJ0UnVsZXMoaWQgKyAnLWltcG9ydCcsIGltcG9ydFJ1bGVzKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHJlbW92ZVJ1bGVzID0gZnVuY3Rpb24gcmVtb3ZlUnVsZXMoaWQpIHtcbiAgICB2YXIgbWFya2VyID0gbWFya2Vyc1tpZF07XG4gICAgaWYgKG1hcmtlciA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG5cbiAgICAvKiBjcmVhdGUgbmV3IGVtcHR5IHRleHQgbm9kZSBhbmQgcmVwbGFjZSB0aGUgY3VycmVudCBvbmUgKi9cbiAgICB2YXIgbmV3TWFya2VyID0gbWFrZVRleHROb2RlKGVsLm93bmVyRG9jdW1lbnQsIGlkKTtcbiAgICBlbC5yZXBsYWNlQ2hpbGQobmV3TWFya2VyLCBtYXJrZXIpO1xuICAgIG1hcmtlcnNbaWRdID0gbmV3TWFya2VyO1xuICAgIHJlc2V0SWROYW1lcyhuYW1lcywgaWQpO1xuXG4gICAgaWYgKGV4dHJhY3RJbXBvcnQgJiYgdXNlZEltcG9ydFJ1bGVUYWcpIHtcbiAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgIGdldEltcG9ydFJ1bGVUYWcoKS5yZW1vdmVSdWxlcyhpZCArICctaW1wb3J0Jyk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBjc3MgPSBmdW5jdGlvbiBjc3MoKSB7XG4gICAgdmFyIHN0ciA9ICcnO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGd1YXJkLWZvci1pblxuICAgIGZvciAodmFyIGlkIGluIG1hcmtlcnMpIHtcbiAgICAgIHN0ciArPSBtYXJrZXJzW2lkXS5kYXRhO1xuICAgIH1cblxuICAgIHJldHVybiBzdHI7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBjbG9uZTogZnVuY3Rpb24gY2xvbmUoKSB7XG4gICAgICB0aHJvdyBuZXcgU3R5bGVkQ29tcG9uZW50c0Vycm9yKDUpO1xuICAgIH0sXG5cbiAgICBjc3M6IGNzcyxcbiAgICBnZXRJZHM6IGdldElkc0Zyb21NYXJrZXJzRmFjdG9yeShtYXJrZXJzKSxcbiAgICBoYXNOYW1lRm9ySWQ6IGhhc05hbWVGb3JJZChuYW1lcyksXG4gICAgaW5zZXJ0TWFya2VyOiBpbnNlcnRNYXJrZXIsXG4gICAgaW5zZXJ0UnVsZXM6IGluc2VydFJ1bGVzLFxuICAgIHJlbW92ZVJ1bGVzOiByZW1vdmVSdWxlcyxcbiAgICBzZWFsZWQ6IGZhbHNlLFxuICAgIHN0eWxlVGFnOiBlbCxcbiAgICB0b0VsZW1lbnQ6IHdyYXBBc0VsZW1lbnQoY3NzLCBuYW1lcyksXG4gICAgdG9IVE1MOiB3cmFwQXNIdG1sVGFnKGNzcywgbmFtZXMpXG4gIH07XG59O1xuXG52YXIgbWFrZVNlcnZlclRhZyA9IGZ1bmN0aW9uIG1ha2VTZXJ2ZXJUYWcobmFtZXNBcmcsIG1hcmtlcnNBcmcpIHtcbiAgdmFyIG5hbWVzID0gbmFtZXNBcmcgPT09IHVuZGVmaW5lZCA/IE9iamVjdC5jcmVhdGUobnVsbCkgOiBuYW1lc0FyZztcbiAgdmFyIG1hcmtlcnMgPSBtYXJrZXJzQXJnID09PSB1bmRlZmluZWQgPyBPYmplY3QuY3JlYXRlKG51bGwpIDogbWFya2Vyc0FyZztcblxuICB2YXIgaW5zZXJ0TWFya2VyID0gZnVuY3Rpb24gaW5zZXJ0TWFya2VyKGlkKSB7XG4gICAgdmFyIHByZXYgPSBtYXJrZXJzW2lkXTtcbiAgICBpZiAocHJldiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICByZXR1cm4gbWFya2Vyc1tpZF0gPSBbJyddO1xuICB9O1xuXG4gIHZhciBpbnNlcnRSdWxlcyA9IGZ1bmN0aW9uIGluc2VydFJ1bGVzKGlkLCBjc3NSdWxlcywgbmFtZSkge1xuICAgIHZhciBtYXJrZXIgPSBpbnNlcnRNYXJrZXIoaWQpO1xuICAgIG1hcmtlclswXSArPSBjc3NSdWxlcy5qb2luKCcgJyk7XG4gICAgYWRkTmFtZUZvcklkKG5hbWVzLCBpZCwgbmFtZSk7XG4gIH07XG5cbiAgdmFyIHJlbW92ZVJ1bGVzID0gZnVuY3Rpb24gcmVtb3ZlUnVsZXMoaWQpIHtcbiAgICB2YXIgbWFya2VyID0gbWFya2Vyc1tpZF07XG4gICAgaWYgKG1hcmtlciA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG4gICAgbWFya2VyWzBdID0gJyc7XG4gICAgcmVzZXRJZE5hbWVzKG5hbWVzLCBpZCk7XG4gIH07XG5cbiAgdmFyIGNzcyA9IGZ1bmN0aW9uIGNzcygpIHtcbiAgICB2YXIgc3RyID0gJyc7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGd1YXJkLWZvci1pblxuICAgIGZvciAodmFyIGlkIGluIG1hcmtlcnMpIHtcbiAgICAgIHZhciBjc3NGb3JJZCA9IG1hcmtlcnNbaWRdWzBdO1xuICAgICAgaWYgKGNzc0ZvcklkKSB7XG4gICAgICAgIHN0ciArPSBtYWtlVGV4dE1hcmtlcihpZCkgKyBjc3NGb3JJZDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbiAgfTtcblxuICB2YXIgY2xvbmUgPSBmdW5jdGlvbiBjbG9uZSgpIHtcbiAgICB2YXIgbmFtZXNDbG9uZSA9IGNsb25lTmFtZXMobmFtZXMpO1xuICAgIHZhciBtYXJrZXJzQ2xvbmUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGd1YXJkLWZvci1pblxuICAgIGZvciAodmFyIGlkIGluIG1hcmtlcnMpIHtcbiAgICAgIG1hcmtlcnNDbG9uZVtpZF0gPSBbbWFya2Vyc1tpZF1bMF1dO1xuICAgIH1cblxuICAgIHJldHVybiBtYWtlU2VydmVyVGFnKG5hbWVzQ2xvbmUsIG1hcmtlcnNDbG9uZSk7XG4gIH07XG5cbiAgdmFyIHRhZyA9IHtcbiAgICBjbG9uZTogY2xvbmUsXG4gICAgY3NzOiBjc3MsXG4gICAgZ2V0SWRzOiBnZXRJZHNGcm9tTWFya2Vyc0ZhY3RvcnkobWFya2VycyksXG4gICAgaGFzTmFtZUZvcklkOiBoYXNOYW1lRm9ySWQobmFtZXMpLFxuICAgIGluc2VydE1hcmtlcjogaW5zZXJ0TWFya2VyLFxuICAgIGluc2VydFJ1bGVzOiBpbnNlcnRSdWxlcyxcbiAgICByZW1vdmVSdWxlczogcmVtb3ZlUnVsZXMsXG4gICAgc2VhbGVkOiBmYWxzZSxcbiAgICBzdHlsZVRhZzogbnVsbCxcbiAgICB0b0VsZW1lbnQ6IHdyYXBBc0VsZW1lbnQoY3NzLCBuYW1lcyksXG4gICAgdG9IVE1MOiB3cmFwQXNIdG1sVGFnKGNzcywgbmFtZXMpXG4gIH07XG5cbiAgcmV0dXJuIHRhZztcbn07XG5cbnZhciBtYWtlVGFnID0gZnVuY3Rpb24gbWFrZVRhZyh0YXJnZXQsIHRhZ0VsLCBmb3JjZVNlcnZlciwgaW5zZXJ0QmVmb3JlLCBnZXRJbXBvcnRSdWxlVGFnKSB7XG4gIGlmIChJU19CUk9XU0VSICYmICFmb3JjZVNlcnZlcikge1xuICAgIHZhciBlbCA9IG1ha2VTdHlsZVRhZyh0YXJnZXQsIHRhZ0VsLCBpbnNlcnRCZWZvcmUpO1xuXG4gICAgaWYgKERJU0FCTEVfU1BFRURZKSB7XG4gICAgICByZXR1cm4gbWFrZUJyb3dzZXJUYWcoZWwsIGdldEltcG9ydFJ1bGVUYWcpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbWFrZVNwZWVkeVRhZyhlbCwgZ2V0SW1wb3J0UnVsZVRhZyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1ha2VTZXJ2ZXJUYWcoKTtcbn07XG5cbnZhciByZWh5ZHJhdGUgPSBmdW5jdGlvbiByZWh5ZHJhdGUodGFnLCBlbHMsIGV4dHJhY3RlZCkge1xuICAvKiBhZGQgYWxsIGV4dHJhY3RlZCBjb21wb25lbnRzIHRvIHRoZSBuZXcgdGFnICovXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBleHRyYWN0ZWQubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICB2YXIgX2V4dHJhY3RlZCRpID0gZXh0cmFjdGVkW2ldLFxuICAgICAgICBjb21wb25lbnRJZCA9IF9leHRyYWN0ZWQkaS5jb21wb25lbnRJZCxcbiAgICAgICAgY3NzRnJvbURPTSA9IF9leHRyYWN0ZWQkaS5jc3NGcm9tRE9NO1xuXG4gICAgdmFyIGNzc1J1bGVzID0gc3BsaXRCeVJ1bGVzKGNzc0Zyb21ET00pO1xuICAgIHRhZy5pbnNlcnRSdWxlcyhjb21wb25lbnRJZCwgY3NzUnVsZXMpO1xuICB9XG5cbiAgLyogcmVtb3ZlIG9sZCBIVE1MU3R5bGVFbGVtZW50cywgc2luY2UgdGhleSBoYXZlIGJlZW4gcmVoeWRyYXRlZCAqL1xuICBmb3IgKHZhciBfaSA9IDAsIF9sZW4gPSBlbHMubGVuZ3RoOyBfaSA8IF9sZW47IF9pICs9IDEpIHtcbiAgICB2YXIgZWwgPSBlbHNbX2ldO1xuICAgIGlmIChlbC5wYXJlbnROb2RlKSB7XG4gICAgICBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKTtcbiAgICB9XG4gIH1cbn07XG5cbi8vIFxuXG52YXIgU1BMSVRfUkVHRVggPSAvXFxzKy87XG5cbi8qIGRldGVybWluZSB0aGUgbWF4aW11bSBudW1iZXIgb2YgY29tcG9uZW50cyBiZWZvcmUgdGFncyBhcmUgc2hhcmRlZCAqL1xudmFyIE1BWF9TSVpFID0gdm9pZCAwO1xuaWYgKElTX0JST1dTRVIpIHtcbiAgLyogaW4gc3BlZWR5IG1vZGUgd2UgY2FuIGtlZXAgYSBsb3QgbW9yZSBydWxlcyBpbiBhIHNoZWV0IGJlZm9yZSBhIHNsb3dkb3duIGNhbiBiZSBleHBlY3RlZCAqL1xuICBNQVhfU0laRSA9IERJU0FCTEVfU1BFRURZID8gNDAgOiAxMDAwO1xufSBlbHNlIHtcbiAgLyogZm9yIHNlcnZlcnMgd2UgZG8gbm90IG5lZWQgdG8gc2hhcmQgYXQgYWxsICovXG4gIE1BWF9TSVpFID0gLTE7XG59XG5cbnZhciBzaGVldFJ1bm5pbmdJZCA9IDA7XG52YXIgbWFzdGVyID0gdm9pZCAwO1xuXG52YXIgU3R5bGVTaGVldCA9IGZ1bmN0aW9uICgpIHtcblxuICAvKiBhIG1hcCBmcm9tIGlkcyB0byB0YWdzICovXG5cbiAgLyogZGVmZXJyZWQgcnVsZXMgZm9yIGEgZ2l2ZW4gaWQgKi9cblxuICAvKiB0aGlzIGlzIHVzZWQgZm9yIG5vdCByZWluamVjdGluZyBydWxlcyB2aWEgaGFzTmFtZUZvcklkKCkgKi9cblxuICAvKiB3aGVuIHJ1bGVzIGZvciBhbiBpZCBhcmUgcmVtb3ZlZCB1c2luZyByZW1vdmUoKSB3ZSBoYXZlIHRvIGlnbm9yZSByZWh5ZHJhdGVkTmFtZXMgZm9yIGl0ICovXG5cbiAgLyogYSBsaXN0IG9mIHRhZ3MgYmVsb25naW5nIHRvIHRoaXMgU3R5bGVTaGVldCAqL1xuXG4gIC8qIGEgdGFnIGZvciBpbXBvcnQgcnVsZXMgKi9cblxuICAvKiBjdXJyZW50IGNhcGFjaXR5IHVudGlsIGEgbmV3IHRhZyBtdXN0IGJlIGNyZWF0ZWQgKi9cblxuICAvKiBjaGlsZHJlbiAoYWthIGNsb25lcykgb2YgdGhpcyBTdHlsZVNoZWV0IGluaGVyaXRpbmcgYWxsIGFuZCBmdXR1cmUgaW5qZWN0aW9ucyAqL1xuXG4gIGZ1bmN0aW9uIFN0eWxlU2hlZXQoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciB0YXJnZXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IElTX0JST1dTRVIgPyBkb2N1bWVudC5oZWFkIDogbnVsbDtcbiAgICB2YXIgZm9yY2VTZXJ2ZXIgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFN0eWxlU2hlZXQpO1xuXG4gICAgdGhpcy5nZXRJbXBvcnRSdWxlVGFnID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGltcG9ydFJ1bGVUYWcgPSBfdGhpcy5pbXBvcnRSdWxlVGFnO1xuXG4gICAgICBpZiAoaW1wb3J0UnVsZVRhZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBpbXBvcnRSdWxlVGFnO1xuICAgICAgfVxuXG4gICAgICB2YXIgZmlyc3RUYWcgPSBfdGhpcy50YWdzWzBdO1xuICAgICAgdmFyIGluc2VydEJlZm9yZSA9IHRydWU7XG5cbiAgICAgIHJldHVybiBfdGhpcy5pbXBvcnRSdWxlVGFnID0gbWFrZVRhZyhfdGhpcy50YXJnZXQsIGZpcnN0VGFnID8gZmlyc3RUYWcuc3R5bGVUYWcgOiBudWxsLCBfdGhpcy5mb3JjZVNlcnZlciwgaW5zZXJ0QmVmb3JlKTtcbiAgICB9O1xuXG4gICAgc2hlZXRSdW5uaW5nSWQgKz0gMTtcbiAgICB0aGlzLmlkID0gc2hlZXRSdW5uaW5nSWQ7XG4gICAgdGhpcy5mb3JjZVNlcnZlciA9IGZvcmNlU2VydmVyO1xuICAgIHRoaXMudGFyZ2V0ID0gZm9yY2VTZXJ2ZXIgPyBudWxsIDogdGFyZ2V0O1xuICAgIHRoaXMudGFnTWFwID0ge307XG4gICAgdGhpcy5kZWZlcnJlZCA9IHt9O1xuICAgIHRoaXMucmVoeWRyYXRlZE5hbWVzID0ge307XG4gICAgdGhpcy5pZ25vcmVSZWh5ZHJhdGVkTmFtZXMgPSB7fTtcbiAgICB0aGlzLnRhZ3MgPSBbXTtcbiAgICB0aGlzLmNhcGFjaXR5ID0gMTtcbiAgICB0aGlzLmNsb25lcyA9IFtdO1xuICB9XG5cbiAgLyogcmVoeWRyYXRlIGFsbCBTU1InZCBzdHlsZSB0YWdzICovXG5cblxuICBTdHlsZVNoZWV0LnByb3RvdHlwZS5yZWh5ZHJhdGUgPSBmdW5jdGlvbiByZWh5ZHJhdGUkJDEoKSB7XG4gICAgaWYgKCFJU19CUk9XU0VSIHx8IHRoaXMuZm9yY2VTZXJ2ZXIpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIGVscyA9IFtdO1xuICAgIHZhciBleHRyYWN0ZWQgPSBbXTtcbiAgICB2YXIgaXNTdHJlYW1lZCA9IGZhbHNlO1xuXG4gICAgLyogcmV0cmlldmUgYWxsIG9mIG91ciBTU1Igc3R5bGUgZWxlbWVudHMgZnJvbSB0aGUgRE9NICovXG4gICAgdmFyIG5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc3R5bGVbJyArIFNDX0FUVFIgKyAnXVsnICsgU0NfVkVSU0lPTl9BVFRSICsgJz1cIicgKyBcIjQuNC4xXCIgKyAnXCJdJyk7XG5cbiAgICB2YXIgbm9kZXNTaXplID0gbm9kZXMubGVuZ3RoO1xuXG4gICAgLyogYWJvcnQgcmVoeWRyYXRpb24gaWYgbm8gcHJldmlvdXMgc3R5bGUgdGFncyB3ZXJlIGZvdW5kICovXG4gICAgaWYgKCFub2Rlc1NpemUpIHJldHVybiB0aGlzO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlc1NpemU7IGkgKz0gMSkge1xuICAgICAgdmFyIGVsID0gbm9kZXNbaV07XG5cbiAgICAgIC8qIGNoZWNrIGlmIHN0eWxlIHRhZyBpcyBhIHN0cmVhbWVkIHRhZyAqL1xuICAgICAgaWYgKCFpc1N0cmVhbWVkKSBpc1N0cmVhbWVkID0gISFlbC5nZXRBdHRyaWJ1dGUoU0NfU1RSRUFNX0FUVFIpO1xuXG4gICAgICAvKiByZXRyaWV2ZSBhbGwgY29tcG9uZW50IG5hbWVzICovXG4gICAgICB2YXIgZWxOYW1lcyA9IChlbC5nZXRBdHRyaWJ1dGUoU0NfQVRUUikgfHwgJycpLnRyaW0oKS5zcGxpdChTUExJVF9SRUdFWCk7XG4gICAgICB2YXIgZWxOYW1lc1NpemUgPSBlbE5hbWVzLmxlbmd0aDtcbiAgICAgIGZvciAodmFyIGogPSAwLCBuYW1lOyBqIDwgZWxOYW1lc1NpemU7IGogKz0gMSkge1xuICAgICAgICBuYW1lID0gZWxOYW1lc1tqXTtcbiAgICAgICAgLyogYWRkIHJlaHlkcmF0ZWQgbmFtZSB0byBzaGVldCB0byBhdm9pZCByZS1hZGRpbmcgc3R5bGVzICovXG4gICAgICAgIHRoaXMucmVoeWRyYXRlZE5hbWVzW25hbWVdID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLyogZXh0cmFjdCBhbGwgY29tcG9uZW50cyBhbmQgdGhlaXIgQ1NTICovXG4gICAgICBleHRyYWN0ZWQucHVzaC5hcHBseShleHRyYWN0ZWQsIGV4dHJhY3RDb21wcyhlbC50ZXh0Q29udGVudCkpO1xuXG4gICAgICAvKiBzdG9yZSBvcmlnaW5hbCBIVE1MU3R5bGVFbGVtZW50ICovXG4gICAgICBlbHMucHVzaChlbCk7XG4gICAgfVxuXG4gICAgLyogYWJvcnQgcmVoeWRyYXRpb24gaWYgbm90aGluZyB3YXMgZXh0cmFjdGVkICovXG4gICAgdmFyIGV4dHJhY3RlZFNpemUgPSBleHRyYWN0ZWQubGVuZ3RoO1xuICAgIGlmICghZXh0cmFjdGVkU2l6ZSkgcmV0dXJuIHRoaXM7XG5cbiAgICAvKiBjcmVhdGUgYSB0YWcgdG8gYmUgdXNlZCBmb3IgcmVoeWRyYXRpb24gKi9cbiAgICB2YXIgdGFnID0gdGhpcy5tYWtlVGFnKG51bGwpO1xuXG4gICAgcmVoeWRyYXRlKHRhZywgZWxzLCBleHRyYWN0ZWQpO1xuXG4gICAgLyogcmVzZXQgY2FwYWNpdHkgYW5kIGFkanVzdCBNQVhfU0laRSBieSB0aGUgaW5pdGlhbCBzaXplIG9mIHRoZSByZWh5ZHJhdGlvbiAqL1xuICAgIHRoaXMuY2FwYWNpdHkgPSBNYXRoLm1heCgxLCBNQVhfU0laRSAtIGV4dHJhY3RlZFNpemUpO1xuICAgIHRoaXMudGFncy5wdXNoKHRhZyk7XG5cbiAgICAvKiByZXRyaWV2ZSBhbGwgY29tcG9uZW50IGlkcyAqL1xuICAgIGZvciAodmFyIF9qID0gMDsgX2ogPCBleHRyYWN0ZWRTaXplOyBfaiArPSAxKSB7XG4gICAgICB0aGlzLnRhZ01hcFtleHRyYWN0ZWRbX2pdLmNvbXBvbmVudElkXSA9IHRhZztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKiByZXRyaWV2ZSBhIFwibWFzdGVyXCIgaW5zdGFuY2Ugb2YgU3R5bGVTaGVldCB3aGljaCBpcyB0eXBpY2FsbHkgdXNlZCB3aGVuIG5vIG90aGVyIGlzIGF2YWlsYWJsZVxuICAgKiBUaGUgbWFzdGVyIFN0eWxlU2hlZXQgaXMgdGFyZ2V0ZWQgYnkgY3JlYXRlR2xvYmFsU3R5bGUsIGtleWZyYW1lcywgYW5kIGNvbXBvbmVudHMgb3V0c2lkZSBvZiBhbnlcbiAgICAqIFN0eWxlU2hlZXRNYW5hZ2VyJ3MgY29udGV4dCAqL1xuXG5cbiAgLyogcmVzZXQgdGhlIGludGVybmFsIFwibWFzdGVyXCIgaW5zdGFuY2UgKi9cbiAgU3R5bGVTaGVldC5yZXNldCA9IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIHZhciBmb3JjZVNlcnZlciA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZmFsc2U7XG5cbiAgICBtYXN0ZXIgPSBuZXcgU3R5bGVTaGVldCh1bmRlZmluZWQsIGZvcmNlU2VydmVyKS5yZWh5ZHJhdGUoKTtcbiAgfTtcblxuICAvKiBhZGRzIFwiY2hpbGRyZW5cIiB0byB0aGUgU3R5bGVTaGVldCB0aGF0IGluaGVyaXQgYWxsIG9mIHRoZSBwYXJlbnRzJyBydWxlc1xuICAgKiB3aGlsZSB0aGVpciBvd24gcnVsZXMgZG8gbm90IGFmZmVjdCB0aGUgcGFyZW50ICovXG5cblxuICBTdHlsZVNoZWV0LnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uIGNsb25lKCkge1xuICAgIHZhciBzaGVldCA9IG5ldyBTdHlsZVNoZWV0KHRoaXMudGFyZ2V0LCB0aGlzLmZvcmNlU2VydmVyKTtcblxuICAgIC8qIGFkZCB0byBjbG9uZSBhcnJheSAqL1xuICAgIHRoaXMuY2xvbmVzLnB1c2goc2hlZXQpO1xuXG4gICAgLyogY2xvbmUgYWxsIHRhZ3MgKi9cbiAgICBzaGVldC50YWdzID0gdGhpcy50YWdzLm1hcChmdW5jdGlvbiAodGFnKSB7XG4gICAgICB2YXIgaWRzID0gdGFnLmdldElkcygpO1xuICAgICAgdmFyIG5ld1RhZyA9IHRhZy5jbG9uZSgpO1xuXG4gICAgICAvKiByZWNvbnN0cnVjdCB0YWdNYXAgKi9cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaWRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHNoZWV0LnRhZ01hcFtpZHNbaV1dID0gbmV3VGFnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3VGFnO1xuICAgIH0pO1xuXG4gICAgLyogY2xvbmUgb3RoZXIgbWFwcyAqL1xuICAgIHNoZWV0LnJlaHlkcmF0ZWROYW1lcyA9IF9leHRlbmRzKHt9LCB0aGlzLnJlaHlkcmF0ZWROYW1lcyk7XG4gICAgc2hlZXQuZGVmZXJyZWQgPSBfZXh0ZW5kcyh7fSwgdGhpcy5kZWZlcnJlZCk7XG5cbiAgICByZXR1cm4gc2hlZXQ7XG4gIH07XG5cbiAgLyogZm9yY2UgU3R5bGVTaGVldCB0byBjcmVhdGUgYSBuZXcgdGFnIG9uIHRoZSBuZXh0IGluamVjdGlvbiAqL1xuXG5cbiAgU3R5bGVTaGVldC5wcm90b3R5cGUuc2VhbEFsbFRhZ3MgPSBmdW5jdGlvbiBzZWFsQWxsVGFncygpIHtcbiAgICB0aGlzLmNhcGFjaXR5ID0gMTtcblxuICAgIHRoaXMudGFncy5mb3JFYWNoKGZ1bmN0aW9uICh0YWcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgdGFnLnNlYWxlZCA9IHRydWU7XG4gICAgfSk7XG4gIH07XG5cbiAgU3R5bGVTaGVldC5wcm90b3R5cGUubWFrZVRhZyA9IGZ1bmN0aW9uIG1ha2VUYWckJDEodGFnKSB7XG4gICAgdmFyIGxhc3RFbCA9IHRhZyA/IHRhZy5zdHlsZVRhZyA6IG51bGw7XG4gICAgdmFyIGluc2VydEJlZm9yZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIG1ha2VUYWcodGhpcy50YXJnZXQsIGxhc3RFbCwgdGhpcy5mb3JjZVNlcnZlciwgaW5zZXJ0QmVmb3JlLCB0aGlzLmdldEltcG9ydFJ1bGVUYWcpO1xuICB9O1xuXG4gIC8qIGdldCBhIHRhZyBmb3IgYSBnaXZlbiBjb21wb25lbnRJZCwgYXNzaWduIHRoZSBjb21wb25lbnRJZCB0byBvbmUsIG9yIHNoYXJkICovXG4gIFN0eWxlU2hlZXQucHJvdG90eXBlLmdldFRhZ0ZvcklkID0gZnVuY3Rpb24gZ2V0VGFnRm9ySWQoaWQpIHtcbiAgICAvKiBzaW1wbHkgcmV0dXJuIGEgdGFnLCB3aGVuIHRoZSBjb21wb25lbnRJZCB3YXMgYWxyZWFkeSBhc3NpZ25lZCBvbmUgKi9cbiAgICB2YXIgcHJldiA9IHRoaXMudGFnTWFwW2lkXTtcbiAgICBpZiAocHJldiAhPT0gdW5kZWZpbmVkICYmICFwcmV2LnNlYWxlZCkge1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgdmFyIHRhZyA9IHRoaXMudGFnc1t0aGlzLnRhZ3MubGVuZ3RoIC0gMV07XG5cbiAgICAvKiBzaGFyZCAoY3JlYXRlIGEgbmV3IHRhZykgaWYgdGhlIHRhZyBpcyBleGhhdXN0ZWQgKFNlZSBNQVhfU0laRSkgKi9cbiAgICB0aGlzLmNhcGFjaXR5IC09IDE7XG5cbiAgICBpZiAodGhpcy5jYXBhY2l0eSA9PT0gMCkge1xuICAgICAgdGhpcy5jYXBhY2l0eSA9IE1BWF9TSVpFO1xuICAgICAgdGFnID0gdGhpcy5tYWtlVGFnKHRhZyk7XG4gICAgICB0aGlzLnRhZ3MucHVzaCh0YWcpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnRhZ01hcFtpZF0gPSB0YWc7XG4gIH07XG5cbiAgLyogbWFpbmx5IGZvciBjcmVhdGVHbG9iYWxTdHlsZSB0byBjaGVjayBmb3IgaXRzIGlkICovXG5cblxuICBTdHlsZVNoZWV0LnByb3RvdHlwZS5oYXNJZCA9IGZ1bmN0aW9uIGhhc0lkKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMudGFnTWFwW2lkXSAhPT0gdW5kZWZpbmVkO1xuICB9O1xuXG4gIC8qIGNhY2hpbmcgbGF5ZXIgY2hlY2tpbmcgaWQrbmFtZSB0byBhbHJlYWR5IGhhdmUgYSBjb3JyZXNwb25kaW5nIHRhZyBhbmQgaW5qZWN0ZWQgcnVsZXMgKi9cblxuXG4gIFN0eWxlU2hlZXQucHJvdG90eXBlLmhhc05hbWVGb3JJZCA9IGZ1bmN0aW9uIGhhc05hbWVGb3JJZChpZCwgbmFtZSkge1xuICAgIC8qIGV4Y2VwdGlvbiBmb3IgcmVoeWRyYXRlZCBuYW1lcyB3aGljaCBhcmUgY2hlY2tlZCBzZXBhcmF0ZWx5ICovXG4gICAgaWYgKHRoaXMuaWdub3JlUmVoeWRyYXRlZE5hbWVzW2lkXSA9PT0gdW5kZWZpbmVkICYmIHRoaXMucmVoeWRyYXRlZE5hbWVzW25hbWVdKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgdGFnID0gdGhpcy50YWdNYXBbaWRdO1xuICAgIHJldHVybiB0YWcgIT09IHVuZGVmaW5lZCAmJiB0YWcuaGFzTmFtZUZvcklkKGlkLCBuYW1lKTtcbiAgfTtcblxuICAvKiByZWdpc3RlcnMgYSBjb21wb25lbnRJZCBhbmQgcmVnaXN0ZXJzIGl0IG9uIGl0cyB0YWcgKi9cblxuXG4gIFN0eWxlU2hlZXQucHJvdG90eXBlLmRlZmVycmVkSW5qZWN0ID0gZnVuY3Rpb24gZGVmZXJyZWRJbmplY3QoaWQsIGNzc1J1bGVzKSB7XG4gICAgLyogZG9uJ3QgaW5qZWN0IHdoZW4gdGhlIGlkIGlzIGFscmVhZHkgcmVnaXN0ZXJlZCAqL1xuICAgIGlmICh0aGlzLnRhZ01hcFtpZF0gIT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuXG4gICAgdmFyIGNsb25lcyA9IHRoaXMuY2xvbmVzO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjbG9uZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNsb25lc1tpXS5kZWZlcnJlZEluamVjdChpZCwgY3NzUnVsZXMpO1xuICAgIH1cblxuICAgIHRoaXMuZ2V0VGFnRm9ySWQoaWQpLmluc2VydE1hcmtlcihpZCk7XG4gICAgdGhpcy5kZWZlcnJlZFtpZF0gPSBjc3NSdWxlcztcbiAgfTtcblxuICAvKiBpbmplY3RzIHJ1bGVzIGZvciBhIGdpdmVuIGlkIHdpdGggYSBuYW1lIHRoYXQgd2lsbCBuZWVkIHRvIGJlIGNhY2hlZCAqL1xuXG5cbiAgU3R5bGVTaGVldC5wcm90b3R5cGUuaW5qZWN0ID0gZnVuY3Rpb24gaW5qZWN0KGlkLCBjc3NSdWxlcywgbmFtZSkge1xuICAgIHZhciBjbG9uZXMgPSB0aGlzLmNsb25lcztcblxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjbG9uZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNsb25lc1tpXS5pbmplY3QoaWQsIGNzc1J1bGVzLCBuYW1lKTtcbiAgICB9XG5cbiAgICB2YXIgdGFnID0gdGhpcy5nZXRUYWdGb3JJZChpZCk7XG5cbiAgICAvKiBhZGQgZGVmZXJyZWQgcnVsZXMgZm9yIGNvbXBvbmVudCAqL1xuICAgIGlmICh0aGlzLmRlZmVycmVkW2lkXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBDb21iaW5lIHBhc3NlZCBjc3NSdWxlcyB3aXRoIHByZXZpb3VzbHkgZGVmZXJyZWQgQ1NTIHJ1bGVzXG4gICAgICAvLyBOT1RFOiBXZSBjYW5ub3QgbXV0YXRlIHRoZSBkZWZlcnJlZCBhcnJheSBpdHNlbGYgYXMgYWxsIGNsb25lc1xuICAgICAgLy8gZG8gdGhlIHNhbWUgKHNlZSBjbG9uZXNbaV0uaW5qZWN0KVxuICAgICAgdmFyIHJ1bGVzID0gdGhpcy5kZWZlcnJlZFtpZF0uY29uY2F0KGNzc1J1bGVzKTtcbiAgICAgIHRhZy5pbnNlcnRSdWxlcyhpZCwgcnVsZXMsIG5hbWUpO1xuXG4gICAgICB0aGlzLmRlZmVycmVkW2lkXSA9IHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFnLmluc2VydFJ1bGVzKGlkLCBjc3NSdWxlcywgbmFtZSk7XG4gICAgfVxuICB9O1xuXG4gIC8qIHJlbW92ZXMgYWxsIHJ1bGVzIGZvciBhIGdpdmVuIGlkLCB3aGljaCBkb2Vzbid0IHJlbW92ZSBpdHMgbWFya2VyIGJ1dCByZXNldHMgaXQgKi9cblxuXG4gIFN0eWxlU2hlZXQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZShpZCkge1xuICAgIHZhciB0YWcgPSB0aGlzLnRhZ01hcFtpZF07XG4gICAgaWYgKHRhZyA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG5cbiAgICB2YXIgY2xvbmVzID0gdGhpcy5jbG9uZXM7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNsb25lcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY2xvbmVzW2ldLnJlbW92ZShpZCk7XG4gICAgfVxuXG4gICAgLyogcmVtb3ZlIGFsbCBydWxlcyBmcm9tIHRoZSB0YWcgKi9cbiAgICB0YWcucmVtb3ZlUnVsZXMoaWQpO1xuXG4gICAgLyogaWdub3JlIHBvc3NpYmxlIHJlaHlkcmF0ZWQgbmFtZXMgKi9cbiAgICB0aGlzLmlnbm9yZVJlaHlkcmF0ZWROYW1lc1tpZF0gPSB0cnVlO1xuXG4gICAgLyogZGVsZXRlIHBvc3NpYmxlIGRlZmVycmVkIHJ1bGVzICovXG4gICAgdGhpcy5kZWZlcnJlZFtpZF0gPSB1bmRlZmluZWQ7XG4gIH07XG5cbiAgU3R5bGVTaGVldC5wcm90b3R5cGUudG9IVE1MID0gZnVuY3Rpb24gdG9IVE1MKCkge1xuICAgIHJldHVybiB0aGlzLnRhZ3MubWFwKGZ1bmN0aW9uICh0YWcpIHtcbiAgICAgIHJldHVybiB0YWcudG9IVE1MKCk7XG4gICAgfSkuam9pbignJyk7XG4gIH07XG5cbiAgU3R5bGVTaGVldC5wcm90b3R5cGUudG9SZWFjdEVsZW1lbnRzID0gZnVuY3Rpb24gdG9SZWFjdEVsZW1lbnRzKCkge1xuICAgIHZhciBpZCA9IHRoaXMuaWQ7XG5cblxuICAgIHJldHVybiB0aGlzLnRhZ3MubWFwKGZ1bmN0aW9uICh0YWcsIGkpIHtcbiAgICAgIHZhciBrZXkgPSAnc2MtJyArIGlkICsgJy0nICsgaTtcbiAgICAgIHJldHVybiBjbG9uZUVsZW1lbnQodGFnLnRvRWxlbWVudCgpLCB7IGtleToga2V5IH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNyZWF0ZUNsYXNzKFN0eWxlU2hlZXQsIG51bGwsIFt7XG4gICAga2V5OiAnbWFzdGVyJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgIHJldHVybiBtYXN0ZXIgfHwgKG1hc3RlciA9IG5ldyBTdHlsZVNoZWV0KCkucmVoeWRyYXRlKCkpO1xuICAgIH1cblxuICAgIC8qIE5PVEU6IFRoaXMgaXMganVzdCBmb3IgYmFja3dhcmRzLWNvbXBhdGliaWxpdHkgd2l0aCBqZXN0LXN0eWxlZC1jb21wb25lbnRzICovXG5cbiAgfSwge1xuICAgIGtleTogJ2luc3RhbmNlJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgIHJldHVybiBTdHlsZVNoZWV0Lm1hc3RlcjtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIFN0eWxlU2hlZXQ7XG59KCk7XG5cbi8vIFxuXG52YXIgS2V5ZnJhbWVzID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBLZXlmcmFtZXMobmFtZSwgcnVsZXMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgS2V5ZnJhbWVzKTtcblxuICAgIHRoaXMuaW5qZWN0ID0gZnVuY3Rpb24gKHN0eWxlU2hlZXQpIHtcbiAgICAgIGlmICghc3R5bGVTaGVldC5oYXNOYW1lRm9ySWQoX3RoaXMuaWQsIF90aGlzLm5hbWUpKSB7XG4gICAgICAgIHN0eWxlU2hlZXQuaW5qZWN0KF90aGlzLmlkLCBfdGhpcy5ydWxlcywgX3RoaXMubmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aHJvdyBuZXcgU3R5bGVkQ29tcG9uZW50c0Vycm9yKDEyLCBTdHJpbmcoX3RoaXMubmFtZSkpO1xuICAgIH07XG5cbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucnVsZXMgPSBydWxlcztcblxuICAgIHRoaXMuaWQgPSAnc2Mta2V5ZnJhbWVzLScgKyBuYW1lO1xuICB9XG5cbiAgS2V5ZnJhbWVzLnByb3RvdHlwZS5nZXROYW1lID0gZnVuY3Rpb24gZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9O1xuXG4gIHJldHVybiBLZXlmcmFtZXM7XG59KCk7XG5cbi8vIFxuXG4vKipcbiAqIGlubGluZWQgdmVyc2lvbiBvZlxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2ZianMvYmxvYi9tYXN0ZXIvcGFja2FnZXMvZmJqcy9zcmMvY29yZS9oeXBoZW5hdGVTdHlsZU5hbWUuanNcbiAqL1xuXG52YXIgdXBwZXJjYXNlUGF0dGVybiA9IC8oW0EtWl0pL2c7XG52YXIgbXNQYXR0ZXJuID0gL15tcy0vO1xuXG4vKipcbiAqIEh5cGhlbmF0ZXMgYSBjYW1lbGNhc2VkIENTUyBwcm9wZXJ0eSBuYW1lLCBmb3IgZXhhbXBsZTpcbiAqXG4gKiAgID4gaHlwaGVuYXRlU3R5bGVOYW1lKCdiYWNrZ3JvdW5kQ29sb3InKVxuICogICA8IFwiYmFja2dyb3VuZC1jb2xvclwiXG4gKiAgID4gaHlwaGVuYXRlU3R5bGVOYW1lKCdNb3pUcmFuc2l0aW9uJylcbiAqICAgPCBcIi1tb3otdHJhbnNpdGlvblwiXG4gKiAgID4gaHlwaGVuYXRlU3R5bGVOYW1lKCdtc1RyYW5zaXRpb24nKVxuICogICA8IFwiLW1zLXRyYW5zaXRpb25cIlxuICpcbiAqIEFzIE1vZGVybml6ciBzdWdnZXN0cyAoaHR0cDovL21vZGVybml6ci5jb20vZG9jcy8jcHJlZml4ZWQpLCBhbiBgbXNgIHByZWZpeFxuICogaXMgY29udmVydGVkIHRvIGAtbXMtYC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGh5cGhlbmF0ZVN0eWxlTmFtZShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKHVwcGVyY2FzZVBhdHRlcm4sICctJDEnKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UobXNQYXR0ZXJuLCAnLW1zLScpO1xufVxuXG4vLyBcblxuLy8gVGFrZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi9iODdhYWJkZmUxYjc0NjFlNzMzMWFiYjM2MDFkOWU2YmIyNzU0NGJjL3BhY2thZ2VzL3JlYWN0LWRvbS9zcmMvc2hhcmVkL2Rhbmdlcm91c1N0eWxlVmFsdWUuanNcbmZ1bmN0aW9uIGFkZFVuaXRJZk5lZWRlZChuYW1lLCB2YWx1ZSkge1xuICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW1pbGFqYWNrL2VzbGludC1wbHVnaW4tZmxvd3R5cGUtZXJyb3JzL2lzc3Vlcy8xMzNcbiAgLy8gJEZsb3dGaXhNZVxuICBpZiAodmFsdWUgPT0gbnVsbCB8fCB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJyB8fCB2YWx1ZSA9PT0gJycpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiB2YWx1ZSAhPT0gMCAmJiAhKG5hbWUgaW4gdW5pdGxlc3MpKSB7XG4gICAgcmV0dXJuIHZhbHVlICsgJ3B4JzsgLy8gUHJlc3VtZXMgaW1wbGljaXQgJ3B4JyBzdWZmaXggZm9yIHVuaXRsZXNzIG51bWJlcnNcbiAgfVxuXG4gIHJldHVybiBTdHJpbmcodmFsdWUpLnRyaW0oKTtcbn1cblxuLy8gXG5cbi8qKlxuICogSXQncyBmYWxzaXNoIG5vdCBmYWxzeSBiZWNhdXNlIDAgaXMgYWxsb3dlZC5cbiAqL1xudmFyIGlzRmFsc2lzaCA9IGZ1bmN0aW9uIGlzRmFsc2lzaChjaHVuaykge1xuICByZXR1cm4gY2h1bmsgPT09IHVuZGVmaW5lZCB8fCBjaHVuayA9PT0gbnVsbCB8fCBjaHVuayA9PT0gZmFsc2UgfHwgY2h1bmsgPT09ICcnO1xufTtcblxudmFyIG9ialRvQ3NzQXJyYXkgPSBmdW5jdGlvbiBvYmpUb0Nzc0FycmF5KG9iaiwgcHJldktleSkge1xuICB2YXIgcnVsZXMgPSBbXTtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuXG4gIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKCFpc0ZhbHNpc2gob2JqW2tleV0pKSB7XG4gICAgICBpZiAoaXNQbGFpbk9iamVjdChvYmpba2V5XSkpIHtcbiAgICAgICAgcnVsZXMucHVzaC5hcHBseShydWxlcywgb2JqVG9Dc3NBcnJheShvYmpba2V5XSwga2V5KSk7XG5cbiAgICAgICAgcmV0dXJuIHJ1bGVzO1xuICAgICAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uKG9ialtrZXldKSkge1xuICAgICAgICBydWxlcy5wdXNoKGh5cGhlbmF0ZVN0eWxlTmFtZShrZXkpICsgJzonLCBvYmpba2V5XSwgJzsnKTtcblxuICAgICAgICByZXR1cm4gcnVsZXM7XG4gICAgICB9XG4gICAgICBydWxlcy5wdXNoKGh5cGhlbmF0ZVN0eWxlTmFtZShrZXkpICsgJzogJyArIGFkZFVuaXRJZk5lZWRlZChrZXksIG9ialtrZXldKSArICc7Jyk7XG4gICAgfVxuICAgIHJldHVybiBydWxlcztcbiAgfSk7XG5cbiAgcmV0dXJuIHByZXZLZXkgPyBbcHJldktleSArICcgeyddLmNvbmNhdChydWxlcywgWyd9J10pIDogcnVsZXM7XG59O1xuXG5mdW5jdGlvbiBmbGF0dGVuKGNodW5rLCBleGVjdXRpb25Db250ZXh0LCBzdHlsZVNoZWV0KSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGNodW5rKSkge1xuICAgIHZhciBydWxlU2V0ID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY2h1bmsubGVuZ3RoLCByZXN1bHQ7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgcmVzdWx0ID0gZmxhdHRlbihjaHVua1tpXSwgZXhlY3V0aW9uQ29udGV4dCwgc3R5bGVTaGVldCk7XG5cbiAgICAgIGlmIChyZXN1bHQgPT09IG51bGwpIGNvbnRpbnVlO2Vsc2UgaWYgKEFycmF5LmlzQXJyYXkocmVzdWx0KSkgcnVsZVNldC5wdXNoLmFwcGx5KHJ1bGVTZXQsIHJlc3VsdCk7ZWxzZSBydWxlU2V0LnB1c2gocmVzdWx0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcnVsZVNldDtcbiAgfVxuXG4gIGlmIChpc0ZhbHNpc2goY2h1bmspKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKiBIYW5kbGUgb3RoZXIgY29tcG9uZW50cyAqL1xuICBpZiAoaXNTdHlsZWRDb21wb25lbnQoY2h1bmspKSB7XG4gICAgcmV0dXJuICcuJyArIGNodW5rLnN0eWxlZENvbXBvbmVudElkO1xuICB9XG5cbiAgLyogRWl0aGVyIGV4ZWN1dGUgb3IgZGVmZXIgdGhlIGZ1bmN0aW9uICovXG4gIGlmIChpc0Z1bmN0aW9uKGNodW5rKSkge1xuICAgIGlmIChpc1N0YXRlbGVzc0Z1bmN0aW9uKGNodW5rKSAmJiBleGVjdXRpb25Db250ZXh0KSB7XG4gICAgICB2YXIgX3Jlc3VsdCA9IGNodW5rKGV4ZWN1dGlvbkNvbnRleHQpO1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBpc0VsZW1lbnQoX3Jlc3VsdCkpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgY29uc29sZS53YXJuKGdldENvbXBvbmVudE5hbWUoY2h1bmspICsgJyBpcyBub3QgYSBzdHlsZWQgY29tcG9uZW50IGFuZCBjYW5ub3QgYmUgcmVmZXJyZWQgdG8gdmlhIGNvbXBvbmVudCBzZWxlY3Rvci4gU2VlIGh0dHBzOi8vd3d3LnN0eWxlZC1jb21wb25lbnRzLmNvbS9kb2NzL2FkdmFuY2VkI3JlZmVycmluZy10by1vdGhlci1jb21wb25lbnRzIGZvciBtb3JlIGRldGFpbHMuJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmbGF0dGVuKF9yZXN1bHQsIGV4ZWN1dGlvbkNvbnRleHQsIHN0eWxlU2hlZXQpO1xuICAgIH0gZWxzZSByZXR1cm4gY2h1bms7XG4gIH1cblxuICBpZiAoY2h1bmsgaW5zdGFuY2VvZiBLZXlmcmFtZXMpIHtcbiAgICBpZiAoc3R5bGVTaGVldCkge1xuICAgICAgY2h1bmsuaW5qZWN0KHN0eWxlU2hlZXQpO1xuICAgICAgcmV0dXJuIGNodW5rLmdldE5hbWUoKTtcbiAgICB9IGVsc2UgcmV0dXJuIGNodW5rO1xuICB9XG5cbiAgLyogSGFuZGxlIG9iamVjdHMgKi9cbiAgcmV0dXJuIGlzUGxhaW5PYmplY3QoY2h1bmspID8gb2JqVG9Dc3NBcnJheShjaHVuaykgOiBjaHVuay50b1N0cmluZygpO1xufVxuXG4vLyBcblxuZnVuY3Rpb24gY3NzKHN0eWxlcykge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgaW50ZXJwb2xhdGlvbnMgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgaW50ZXJwb2xhdGlvbnNbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgaWYgKGlzRnVuY3Rpb24oc3R5bGVzKSB8fCBpc1BsYWluT2JqZWN0KHN0eWxlcykpIHtcbiAgICAvLyAkRmxvd0ZpeE1lXG4gICAgcmV0dXJuIGZsYXR0ZW4oaW50ZXJsZWF2ZShFTVBUWV9BUlJBWSwgW3N0eWxlc10uY29uY2F0KGludGVycG9sYXRpb25zKSkpO1xuICB9XG5cbiAgLy8gJEZsb3dGaXhNZVxuICByZXR1cm4gZmxhdHRlbihpbnRlcmxlYXZlKHN0eWxlcywgaW50ZXJwb2xhdGlvbnMpKTtcbn1cblxuLy8gXG5cbmZ1bmN0aW9uIGNvbnN0cnVjdFdpdGhPcHRpb25zKGNvbXBvbmVudENvbnN0cnVjdG9yLCB0YWcpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IEVNUFRZX09CSkVDVDtcblxuICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZSh0YWcpKSB7XG4gICAgdGhyb3cgbmV3IFN0eWxlZENvbXBvbmVudHNFcnJvcigxLCBTdHJpbmcodGFnKSk7XG4gIH1cblxuICAvKiBUaGlzIGlzIGNhbGxhYmxlIGRpcmVjdGx5IGFzIGEgdGVtcGxhdGUgZnVuY3Rpb24gKi9cbiAgLy8gJEZsb3dGaXhNZTogTm90IHR5cGVkIHRvIGF2b2lkIGRlc3RydWN0dXJpbmcgYXJndW1lbnRzXG4gIHZhciB0ZW1wbGF0ZUZ1bmN0aW9uID0gZnVuY3Rpb24gdGVtcGxhdGVGdW5jdGlvbigpIHtcbiAgICByZXR1cm4gY29tcG9uZW50Q29uc3RydWN0b3IodGFnLCBvcHRpb25zLCBjc3MuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpKTtcbiAgfTtcblxuICAvKiBJZiBjb25maWcgbWV0aG9kcyBhcmUgY2FsbGVkLCB3cmFwIHVwIGEgbmV3IHRlbXBsYXRlIGZ1bmN0aW9uIGFuZCBtZXJnZSBvcHRpb25zICovXG4gIHRlbXBsYXRlRnVuY3Rpb24ud2l0aENvbmZpZyA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICByZXR1cm4gY29uc3RydWN0V2l0aE9wdGlvbnMoY29tcG9uZW50Q29uc3RydWN0b3IsIHRhZywgX2V4dGVuZHMoe30sIG9wdGlvbnMsIGNvbmZpZykpO1xuICB9O1xuXG4gIC8qIE1vZGlmeS9pbmplY3QgbmV3IHByb3BzIGF0IHJ1bnRpbWUgKi9cbiAgdGVtcGxhdGVGdW5jdGlvbi5hdHRycyA9IGZ1bmN0aW9uIChhdHRycykge1xuICAgIHJldHVybiBjb25zdHJ1Y3RXaXRoT3B0aW9ucyhjb21wb25lbnRDb25zdHJ1Y3RvciwgdGFnLCBfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgICAgYXR0cnM6IEFycmF5LnByb3RvdHlwZS5jb25jYXQob3B0aW9ucy5hdHRycywgYXR0cnMpLmZpbHRlcihCb29sZWFuKVxuICAgIH0pKTtcbiAgfTtcblxuICByZXR1cm4gdGVtcGxhdGVGdW5jdGlvbjtcbn1cblxuLy8gXG4vLyBTb3VyY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9nYXJ5Y291cnQvbXVybXVyaGFzaC1qcy9ibG9iL21hc3Rlci9tdXJtdXJoYXNoMl9nYy5qc1xuZnVuY3Rpb24gbXVybXVyaGFzaChjKSB7XG4gIGZvciAodmFyIGUgPSBjLmxlbmd0aCB8IDAsIGEgPSBlIHwgMCwgZCA9IDAsIGI7IGUgPj0gNDspIHtcbiAgICBiID0gYy5jaGFyQ29kZUF0KGQpICYgMjU1IHwgKGMuY2hhckNvZGVBdCgrK2QpICYgMjU1KSA8PCA4IHwgKGMuY2hhckNvZGVBdCgrK2QpICYgMjU1KSA8PCAxNiB8IChjLmNoYXJDb2RlQXQoKytkKSAmIDI1NSkgPDwgMjQsIGIgPSAxNTQwNDgzNDc3ICogKGIgJiA2NTUzNSkgKyAoKDE1NDA0ODM0NzcgKiAoYiA+Pj4gMTYpICYgNjU1MzUpIDw8IDE2KSwgYiBePSBiID4+PiAyNCwgYiA9IDE1NDA0ODM0NzcgKiAoYiAmIDY1NTM1KSArICgoMTU0MDQ4MzQ3NyAqIChiID4+PiAxNikgJiA2NTUzNSkgPDwgMTYpLCBhID0gMTU0MDQ4MzQ3NyAqIChhICYgNjU1MzUpICsgKCgxNTQwNDgzNDc3ICogKGEgPj4+IDE2KSAmIDY1NTM1KSA8PCAxNikgXiBiLCBlIC09IDQsICsrZDtcbiAgfVxuICBzd2l0Y2ggKGUpIHtcbiAgICBjYXNlIDM6XG4gICAgICBhIF49IChjLmNoYXJDb2RlQXQoZCArIDIpICYgMjU1KSA8PCAxNjtcbiAgICBjYXNlIDI6XG4gICAgICBhIF49IChjLmNoYXJDb2RlQXQoZCArIDEpICYgMjU1KSA8PCA4O1xuICAgIGNhc2UgMTpcbiAgICAgIGEgXj0gYy5jaGFyQ29kZUF0KGQpICYgMjU1LCBhID0gMTU0MDQ4MzQ3NyAqIChhICYgNjU1MzUpICsgKCgxNTQwNDgzNDc3ICogKGEgPj4+IDE2KSAmIDY1NTM1KSA8PCAxNik7XG4gIH1cbiAgYSBePSBhID4+PiAxMztcbiAgYSA9IDE1NDA0ODM0NzcgKiAoYSAmIDY1NTM1KSArICgoMTU0MDQ4MzQ3NyAqIChhID4+PiAxNikgJiA2NTUzNSkgPDwgMTYpO1xuICByZXR1cm4gKGEgXiBhID4+PiAxNSkgPj4+IDA7XG59XG5cbi8vIFxuLyogZXNsaW50LWRpc2FibGUgbm8tYml0d2lzZSAqL1xuXG4vKiBUaGlzIGlzIHRoZSBcImNhcGFjaXR5XCIgb2Ygb3VyIGFscGhhYmV0IGkuZS4gMngyNiBmb3IgYWxsIGxldHRlcnMgcGx1cyB0aGVpciBjYXBpdGFsaXNlZFxuICogY291bnRlcnBhcnRzICovXG52YXIgY2hhcnNMZW5ndGggPSA1MjtcblxuLyogc3RhcnQgYXQgNzUgZm9yICdhJyB1bnRpbCAneicgKDI1KSBhbmQgdGhlbiBzdGFydCBhdCA2NSBmb3IgY2FwaXRhbGlzZWQgbGV0dGVycyAqL1xudmFyIGdldEFscGhhYmV0aWNDaGFyID0gZnVuY3Rpb24gZ2V0QWxwaGFiZXRpY0NoYXIoY29kZSkge1xuICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlICsgKGNvZGUgPiAyNSA/IDM5IDogOTcpKTtcbn07XG5cbi8qIGlucHV0IGEgbnVtYmVyLCB1c3VhbGx5IGEgaGFzaCBhbmQgY29udmVydCBpdCB0byBiYXNlLTUyICovXG5mdW5jdGlvbiBnZW5lcmF0ZUFscGhhYmV0aWNOYW1lKGNvZGUpIHtcbiAgdmFyIG5hbWUgPSAnJztcbiAgdmFyIHggPSB2b2lkIDA7XG5cbiAgLyogZ2V0IGEgY2hhciBhbmQgZGl2aWRlIGJ5IGFscGhhYmV0LWxlbmd0aCAqL1xuICBmb3IgKHggPSBjb2RlOyB4ID4gY2hhcnNMZW5ndGg7IHggPSBNYXRoLmZsb29yKHggLyBjaGFyc0xlbmd0aCkpIHtcbiAgICBuYW1lID0gZ2V0QWxwaGFiZXRpY0NoYXIoeCAlIGNoYXJzTGVuZ3RoKSArIG5hbWU7XG4gIH1cblxuICByZXR1cm4gZ2V0QWxwaGFiZXRpY0NoYXIoeCAlIGNoYXJzTGVuZ3RoKSArIG5hbWU7XG59XG5cbi8vIFxuXG5mdW5jdGlvbiBoYXNGdW5jdGlvbk9iamVjdEtleShvYmopIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGd1YXJkLWZvci1pbiwgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChpc0Z1bmN0aW9uKG9ialtrZXldKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBpc1N0YXRpY1J1bGVzKHJ1bGVzLCBhdHRycykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHJ1bGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIHJ1bGUgPSBydWxlc1tpXTtcblxuICAgIC8vIHJlY3Vyc2l2ZSBjYXNlXG4gICAgaWYgKEFycmF5LmlzQXJyYXkocnVsZSkgJiYgIWlzU3RhdGljUnVsZXMocnVsZSwgYXR0cnMpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uKHJ1bGUpICYmICFpc1N0eWxlZENvbXBvbmVudChydWxlKSkge1xuICAgICAgLy8gZnVuY3Rpb25zIGFyZSBhbGxvd2VkIHRvIGJlIHN0YXRpYyBpZiB0aGV5J3JlIGp1c3QgYmVpbmdcbiAgICAgIC8vIHVzZWQgdG8gZ2V0IHRoZSBjbGFzc25hbWUgb2YgYSBuZXN0ZWQgc3R5bGVkIGNvbXBvbmVudFxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChhdHRycy5zb21lKGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIGlzRnVuY3Rpb24oeCkgfHwgaGFzRnVuY3Rpb25PYmplY3RLZXkoeCk7XG4gIH0pKSByZXR1cm4gZmFsc2U7XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8vIFxuXG4vKiBjb21iaW5lcyBoYXNoU3RyIChtdXJtdXJoYXNoKSBhbmQgbmFtZUdlbmVyYXRvciBmb3IgY29udmVuaWVuY2UgKi9cbnZhciBoYXNoZXIgPSBmdW5jdGlvbiBoYXNoZXIoc3RyKSB7XG4gIHJldHVybiBnZW5lcmF0ZUFscGhhYmV0aWNOYW1lKG11cm11cmhhc2goc3RyKSk7XG59O1xuXG4vKlxuIENvbXBvbmVudFN0eWxlIGlzIGFsbCB0aGUgQ1NTLXNwZWNpZmljIHN0dWZmLCBub3RcbiB0aGUgUmVhY3Qtc3BlY2lmaWMgc3R1ZmYuXG4gKi9cblxudmFyIENvbXBvbmVudFN0eWxlID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBDb21wb25lbnRTdHlsZShydWxlcywgYXR0cnMsIGNvbXBvbmVudElkKSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29tcG9uZW50U3R5bGUpO1xuXG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuICAgIHRoaXMuaXNTdGF0aWMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIGlzU3RhdGljUnVsZXMocnVsZXMsIGF0dHJzKTtcbiAgICB0aGlzLmNvbXBvbmVudElkID0gY29tcG9uZW50SWQ7XG5cbiAgICBpZiAoIVN0eWxlU2hlZXQubWFzdGVyLmhhc0lkKGNvbXBvbmVudElkKSkge1xuICAgICAgU3R5bGVTaGVldC5tYXN0ZXIuZGVmZXJyZWRJbmplY3QoY29tcG9uZW50SWQsIFtdKTtcbiAgICB9XG4gIH1cblxuICAvKlxuICAgKiBGbGF0dGVucyBhIHJ1bGUgc2V0IGludG8gdmFsaWQgQ1NTXG4gICAqIEhhc2hlcyBpdCwgd3JhcHMgdGhlIHdob2xlIGNodW5rIGluIGEgLmhhc2gxMjM0IHt9XG4gICAqIFJldHVybnMgdGhlIGhhc2ggdG8gYmUgaW5qZWN0ZWQgb24gcmVuZGVyKClcbiAgICogKi9cblxuXG4gIENvbXBvbmVudFN0eWxlLnByb3RvdHlwZS5nZW5lcmF0ZUFuZEluamVjdFN0eWxlcyA9IGZ1bmN0aW9uIGdlbmVyYXRlQW5kSW5qZWN0U3R5bGVzKGV4ZWN1dGlvbkNvbnRleHQsIHN0eWxlU2hlZXQpIHtcbiAgICB2YXIgaXNTdGF0aWMgPSB0aGlzLmlzU3RhdGljLFxuICAgICAgICBjb21wb25lbnRJZCA9IHRoaXMuY29tcG9uZW50SWQsXG4gICAgICAgIGxhc3RDbGFzc05hbWUgPSB0aGlzLmxhc3RDbGFzc05hbWU7XG5cbiAgICBpZiAoSVNfQlJPV1NFUiAmJiBpc1N0YXRpYyAmJiB0eXBlb2YgbGFzdENsYXNzTmFtZSA9PT0gJ3N0cmluZycgJiYgc3R5bGVTaGVldC5oYXNOYW1lRm9ySWQoY29tcG9uZW50SWQsIGxhc3RDbGFzc05hbWUpKSB7XG4gICAgICByZXR1cm4gbGFzdENsYXNzTmFtZTtcbiAgICB9XG5cbiAgICB2YXIgZmxhdENTUyA9IGZsYXR0ZW4odGhpcy5ydWxlcywgZXhlY3V0aW9uQ29udGV4dCwgc3R5bGVTaGVldCk7XG4gICAgdmFyIG5hbWUgPSBoYXNoZXIodGhpcy5jb21wb25lbnRJZCArIGZsYXRDU1Muam9pbignJykpO1xuICAgIGlmICghc3R5bGVTaGVldC5oYXNOYW1lRm9ySWQoY29tcG9uZW50SWQsIG5hbWUpKSB7XG4gICAgICBzdHlsZVNoZWV0LmluamVjdCh0aGlzLmNvbXBvbmVudElkLCBzdHJpbmdpZnlSdWxlcyhmbGF0Q1NTLCAnLicgKyBuYW1lLCB1bmRlZmluZWQsIGNvbXBvbmVudElkKSwgbmFtZSk7XG4gICAgfVxuXG4gICAgdGhpcy5sYXN0Q2xhc3NOYW1lID0gbmFtZTtcbiAgICByZXR1cm4gbmFtZTtcbiAgfTtcblxuICBDb21wb25lbnRTdHlsZS5nZW5lcmF0ZU5hbWUgPSBmdW5jdGlvbiBnZW5lcmF0ZU5hbWUoc3RyKSB7XG4gICAgcmV0dXJuIGhhc2hlcihzdHIpO1xuICB9O1xuXG4gIHJldHVybiBDb21wb25lbnRTdHlsZTtcbn0oKTtcblxuLy8gXG5cbnZhciBMSU1JVCA9IDIwMDtcblxudmFyIGNyZWF0ZVdhcm5Ub29NYW55Q2xhc3NlcyA9IChmdW5jdGlvbiAoZGlzcGxheU5hbWUpIHtcbiAgdmFyIGdlbmVyYXRlZENsYXNzZXMgPSB7fTtcbiAgdmFyIHdhcm5pbmdTZWVuID0gZmFsc2U7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICBpZiAoIXdhcm5pbmdTZWVuKSB7XG4gICAgICBnZW5lcmF0ZWRDbGFzc2VzW2NsYXNzTmFtZV0gPSB0cnVlO1xuICAgICAgaWYgKE9iamVjdC5rZXlzKGdlbmVyYXRlZENsYXNzZXMpLmxlbmd0aCA+PSBMSU1JVCkge1xuICAgICAgICAvLyBVbmFibGUgdG8gZmluZCBsYXRlc3RSdWxlIGluIHRlc3QgZW52aXJvbm1lbnQuXG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUsIHByZWZlci10ZW1wbGF0ZSAqL1xuICAgICAgICBjb25zb2xlLndhcm4oJ092ZXIgJyArIExJTUlUICsgJyBjbGFzc2VzIHdlcmUgZ2VuZXJhdGVkIGZvciBjb21wb25lbnQgJyArIGRpc3BsYXlOYW1lICsgJy4gXFxuJyArICdDb25zaWRlciB1c2luZyB0aGUgYXR0cnMgbWV0aG9kLCB0b2dldGhlciB3aXRoIGEgc3R5bGUgb2JqZWN0IGZvciBmcmVxdWVudGx5IGNoYW5nZWQgc3R5bGVzLlxcbicgKyAnRXhhbXBsZTpcXG4nICsgJyAgY29uc3QgQ29tcG9uZW50ID0gc3R5bGVkLmRpdi5hdHRycyhwcm9wcyA9PiAoe1xcbicgKyAnICAgIHN0eWxlOiB7XFxuJyArICcgICAgICBiYWNrZ3JvdW5kOiBwcm9wcy5iYWNrZ3JvdW5kLFxcbicgKyAnICAgIH0sXFxuJyArICcgIH0pKWB3aWR0aDogMTAwJTtgXFxuXFxuJyArICcgIDxDb21wb25lbnQgLz4nKTtcbiAgICAgICAgd2FybmluZ1NlZW4gPSB0cnVlO1xuICAgICAgICBnZW5lcmF0ZWRDbGFzc2VzID0ge307XG4gICAgICB9XG4gICAgfVxuICB9O1xufSk7XG5cbi8vIFxuXG52YXIgZGV0ZXJtaW5lVGhlbWUgPSAoZnVuY3Rpb24gKHByb3BzLCBmYWxsYmFja1RoZW1lKSB7XG4gIHZhciBkZWZhdWx0UHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IEVNUFRZX09CSkVDVDtcblxuICAvLyBQcm9wcyBzaG91bGQgdGFrZSBwcmVjZWRlbmNlIG92ZXIgVGhlbWVQcm92aWRlciwgd2hpY2ggc2hvdWxkIHRha2UgcHJlY2VkZW5jZSBvdmVyXG4gIC8vIGRlZmF1bHRQcm9wcywgYnV0IFJlYWN0IGF1dG9tYXRpY2FsbHkgcHV0cyBkZWZhdWx0UHJvcHMgb24gcHJvcHMuXG5cbiAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcywgZmxvd3R5cGUtZXJyb3JzL3Nob3ctZXJyb3JzICovXG4gIHZhciBpc0RlZmF1bHRUaGVtZSA9IGRlZmF1bHRQcm9wcyA/IHByb3BzLnRoZW1lID09PSBkZWZhdWx0UHJvcHMudGhlbWUgOiBmYWxzZTtcbiAgdmFyIHRoZW1lID0gcHJvcHMudGhlbWUgJiYgIWlzRGVmYXVsdFRoZW1lID8gcHJvcHMudGhlbWUgOiBmYWxsYmFja1RoZW1lIHx8IGRlZmF1bHRQcm9wcy50aGVtZTtcbiAgLyogZXNsaW50LWVuYWJsZSAqL1xuXG4gIHJldHVybiB0aGVtZTtcbn0pO1xuXG4vLyBcbnZhciBlc2NhcGVSZWdleCA9IC9bW1xcXS4jKiQ+PCt+PXxeOigpLFwiJ2AtXSsvZztcbnZhciBkYXNoZXNBdEVuZHMgPSAvKF4tfC0kKS9nO1xuXG4vKipcbiAqIFRPRE86IEV4cGxvcmUgdXNpbmcgQ1NTLmVzY2FwZSB3aGVuIGl0IGJlY29tZXMgbW9yZSBhdmFpbGFibGVcbiAqIGluIGV2ZXJncmVlbiBicm93c2Vycy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlKHN0cikge1xuICByZXR1cm4gc3RyXG4gIC8vIFJlcGxhY2UgYWxsIHBvc3NpYmxlIENTUyBzZWxlY3RvcnNcbiAgLnJlcGxhY2UoZXNjYXBlUmVnZXgsICctJylcblxuICAvLyBSZW1vdmUgZXh0cmFuZW91cyBoeXBoZW5zIGF0IHRoZSBzdGFydCBhbmQgZW5kXG4gIC5yZXBsYWNlKGRhc2hlc0F0RW5kcywgJycpO1xufVxuXG4vLyBcblxuZnVuY3Rpb24gaXNUYWcodGFyZ2V0KSB7XG4gIHJldHVybiB0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJyAmJiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHRhcmdldC5jaGFyQXQoMCkgPT09IHRhcmdldC5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSA6IHRydWUpO1xufVxuXG4vLyBcblxuZnVuY3Rpb24gZ2VuZXJhdGVEaXNwbGF5TmFtZSh0YXJnZXQpIHtcbiAgLy8gJEZsb3dGaXhNZVxuICByZXR1cm4gaXNUYWcodGFyZ2V0KSA/ICdzdHlsZWQuJyArIHRhcmdldCA6ICdTdHlsZWQoJyArIGdldENvbXBvbmVudE5hbWUodGFyZ2V0KSArICcpJztcbn1cblxudmFyIF9UWVBFX1NUQVRJQ1M7XG5cbnZhciBSRUFDVF9TVEFUSUNTID0ge1xuICBjaGlsZENvbnRleHRUeXBlczogdHJ1ZSxcbiAgY29udGV4dFR5cGVzOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZSxcbiAgdHlwZTogdHJ1ZVxufTtcblxudmFyIEtOT1dOX1NUQVRJQ1MgPSB7XG4gIG5hbWU6IHRydWUsXG4gIGxlbmd0aDogdHJ1ZSxcbiAgcHJvdG90eXBlOiB0cnVlLFxuICBjYWxsZXI6IHRydWUsXG4gIGNhbGxlZTogdHJ1ZSxcbiAgYXJndW1lbnRzOiB0cnVlLFxuICBhcml0eTogdHJ1ZVxufTtcblxudmFyIFRZUEVfU1RBVElDUyA9IChfVFlQRV9TVEFUSUNTID0ge30sIF9UWVBFX1NUQVRJQ1NbRm9yd2FyZFJlZl0gPSB7XG4gICQkdHlwZW9mOiB0cnVlLFxuICByZW5kZXI6IHRydWVcbn0sIF9UWVBFX1NUQVRJQ1MpO1xuXG52YXIgZGVmaW5lUHJvcGVydHkkMSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSxcbiAgICBnZXRPd25Qcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMsXG4gICAgX09iamVjdCRnZXRPd25Qcm9wZXJ0ID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyxcbiAgICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBfT2JqZWN0JGdldE93blByb3BlcnQgPT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFtdO1xufSA6IF9PYmplY3QkZ2V0T3duUHJvcGVydCxcbiAgICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAgIGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mLFxuICAgIG9iamVjdFByb3RvdHlwZSA9IE9iamVjdC5wcm90b3R5cGU7XG52YXIgYXJyYXlQcm90b3R5cGUgPSBBcnJheS5wcm90b3R5cGU7XG5cblxuZnVuY3Rpb24gaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBzb3VyY2VDb21wb25lbnQsIGJsYWNrbGlzdCkge1xuICBpZiAodHlwZW9mIHNvdXJjZUNvbXBvbmVudCAhPT0gJ3N0cmluZycpIHtcbiAgICAvLyBkb24ndCBob2lzdCBvdmVyIHN0cmluZyAoaHRtbCkgY29tcG9uZW50c1xuXG4gICAgdmFyIGluaGVyaXRlZENvbXBvbmVudCA9IGdldFByb3RvdHlwZU9mKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICBpZiAoaW5oZXJpdGVkQ29tcG9uZW50ICYmIGluaGVyaXRlZENvbXBvbmVudCAhPT0gb2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIGluaGVyaXRlZENvbXBvbmVudCwgYmxhY2tsaXN0KTtcbiAgICB9XG5cbiAgICB2YXIga2V5cyA9IGFycmF5UHJvdG90eXBlLmNvbmNhdChnZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZUNvbXBvbmVudCksXG4gICAgLy8gJEZsb3dGaXhNZVxuICAgIGdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2VDb21wb25lbnQpKTtcblxuICAgIHZhciB0YXJnZXRTdGF0aWNzID0gVFlQRV9TVEFUSUNTW3RhcmdldENvbXBvbmVudC4kJHR5cGVvZl0gfHwgUkVBQ1RfU1RBVElDUztcblxuICAgIHZhciBzb3VyY2VTdGF0aWNzID0gVFlQRV9TVEFUSUNTW3NvdXJjZUNvbXBvbmVudC4kJHR5cGVvZl0gfHwgUkVBQ1RfU1RBVElDUztcblxuICAgIHZhciBpID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSB2b2lkIDA7XG4gICAgdmFyIGtleSA9IHZvaWQgMDtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wbHVzcGx1c1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmIChcbiAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgICFLTk9XTl9TVEFUSUNTW2tleV0gJiYgIShibGFja2xpc3QgJiYgYmxhY2tsaXN0W2tleV0pICYmICEoc291cmNlU3RhdGljcyAmJiBzb3VyY2VTdGF0aWNzW2tleV0pICYmXG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICAhKHRhcmdldFN0YXRpY3MgJiYgdGFyZ2V0U3RhdGljc1trZXldKSkge1xuICAgICAgICBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZUNvbXBvbmVudCwga2V5KTtcblxuICAgICAgICBpZiAoZGVzY3JpcHRvcikge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBBdm9pZCBmYWlsdXJlcyBmcm9tIHJlYWQtb25seSBwcm9wZXJ0aWVzXG4gICAgICAgICAgICBkZWZpbmVQcm9wZXJ0eSQxKHRhcmdldENvbXBvbmVudCwga2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvKiBmYWlsIHNpbGVudGx5ICovXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldENvbXBvbmVudDtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXRDb21wb25lbnQ7XG59XG5cbi8vIFxuZnVuY3Rpb24gaXNEZXJpdmVkUmVhY3RDb21wb25lbnQoZm4pIHtcbiAgcmV0dXJuICEhKGZuICYmIGZuLnByb3RvdHlwZSAmJiBmbi5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCk7XG59XG5cbi8vIFxuLy8gSGVscGVyIHRvIGNhbGwgYSBnaXZlbiBmdW5jdGlvbiwgb25seSBvbmNlXG52YXIgb25jZSA9IChmdW5jdGlvbiAoY2IpIHtcbiAgdmFyIGNhbGxlZCA9IGZhbHNlO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICBjYi5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9O1xufSk7XG5cbi8vIFxuXG52YXIgVGhlbWVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG52YXIgVGhlbWVDb25zdW1lciA9IFRoZW1lQ29udGV4dC5Db25zdW1lcjtcblxuLyoqXG4gKiBQcm92aWRlIGEgdGhlbWUgdG8gYW4gZW50aXJlIHJlYWN0IGNvbXBvbmVudCB0cmVlIHZpYSBjb250ZXh0XG4gKi9cblxudmFyIFRoZW1lUHJvdmlkZXIgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBpbmhlcml0cyhUaGVtZVByb3ZpZGVyLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBUaGVtZVByb3ZpZGVyKHByb3BzKSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgVGhlbWVQcm92aWRlcik7XG5cbiAgICB2YXIgX3RoaXMgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMuZ2V0Q29udGV4dCA9IG1lbW9pemUoX3RoaXMuZ2V0Q29udGV4dC5iaW5kKF90aGlzKSk7XG4gICAgX3RoaXMucmVuZGVySW5uZXIgPSBfdGhpcy5yZW5kZXJJbm5lci5iaW5kKF90aGlzKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBUaGVtZVByb3ZpZGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmNoaWxkcmVuKSByZXR1cm4gbnVsbDtcblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgVGhlbWVDb250ZXh0LkNvbnN1bWVyLFxuICAgICAgbnVsbCxcbiAgICAgIHRoaXMucmVuZGVySW5uZXJcbiAgICApO1xuICB9O1xuXG4gIFRoZW1lUHJvdmlkZXIucHJvdG90eXBlLnJlbmRlcklubmVyID0gZnVuY3Rpb24gcmVuZGVySW5uZXIob3V0ZXJUaGVtZSkge1xuICAgIHZhciBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KHRoaXMucHJvcHMudGhlbWUsIG91dGVyVGhlbWUpO1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBUaGVtZUNvbnRleHQuUHJvdmlkZXIsXG4gICAgICB7IHZhbHVlOiBjb250ZXh0IH0sXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IHRoZSB0aGVtZSBmcm9tIHRoZSBwcm9wcywgc3VwcG9ydGluZyBib3RoIChvdXRlclRoZW1lKSA9PiB7fVxuICAgKiBhcyB3ZWxsIGFzIG9iamVjdCBub3RhdGlvblxuICAgKi9cblxuXG4gIFRoZW1lUHJvdmlkZXIucHJvdG90eXBlLmdldFRoZW1lID0gZnVuY3Rpb24gZ2V0VGhlbWUodGhlbWUsIG91dGVyVGhlbWUpIHtcbiAgICBpZiAoaXNGdW5jdGlvbih0aGVtZSkpIHtcbiAgICAgIHZhciBtZXJnZWRUaGVtZSA9IHRoZW1lKG91dGVyVGhlbWUpO1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAobWVyZ2VkVGhlbWUgPT09IG51bGwgfHwgQXJyYXkuaXNBcnJheShtZXJnZWRUaGVtZSkgfHwgKHR5cGVvZiBtZXJnZWRUaGVtZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YobWVyZ2VkVGhlbWUpKSAhPT0gJ29iamVjdCcpKSB7XG4gICAgICAgIHRocm93IG5ldyBTdHlsZWRDb21wb25lbnRzRXJyb3IoNyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtZXJnZWRUaGVtZTtcbiAgICB9XG5cbiAgICBpZiAodGhlbWUgPT09IG51bGwgfHwgQXJyYXkuaXNBcnJheSh0aGVtZSkgfHwgKHR5cGVvZiB0aGVtZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodGhlbWUpKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHRocm93IG5ldyBTdHlsZWRDb21wb25lbnRzRXJyb3IoOCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCBvdXRlclRoZW1lLCB0aGVtZSk7XG4gIH07XG5cbiAgVGhlbWVQcm92aWRlci5wcm90b3R5cGUuZ2V0Q29udGV4dCA9IGZ1bmN0aW9uIGdldENvbnRleHQodGhlbWUsIG91dGVyVGhlbWUpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRUaGVtZSh0aGVtZSwgb3V0ZXJUaGVtZSk7XG4gIH07XG5cbiAgcmV0dXJuIFRoZW1lUHJvdmlkZXI7XG59KENvbXBvbmVudCk7XG5cbi8vIFxuXG52YXIgQ0xPU0lOR19UQUdfUiA9IC9eXFxzKjxcXC9bYS16XS9pO1xuXG52YXIgU2VydmVyU3R5bGVTaGVldCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU2VydmVyU3R5bGVTaGVldCgpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBTZXJ2ZXJTdHlsZVNoZWV0KTtcblxuICAgIC8qIFRoZSBtYXN0ZXIgc2hlZXQgbWlnaHQgYmUgcmVzZXQsIHNvIGtlZXAgYSByZWZlcmVuY2UgaGVyZSAqL1xuICAgIHRoaXMubWFzdGVyU2hlZXQgPSBTdHlsZVNoZWV0Lm1hc3RlcjtcbiAgICB0aGlzLmluc3RhbmNlID0gdGhpcy5tYXN0ZXJTaGVldC5jbG9uZSgpO1xuICAgIHRoaXMuc2VhbGVkID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogTWFyayB0aGUgU2VydmVyU3R5bGVTaGVldCBhcyBiZWluZyBmdWxseSBlbWl0dGVkIGFuZCBtYW51YWxseSBHQyBpdCBmcm9tIHRoZVxuICAgKiBTdHlsZVNoZWV0IHNpbmdsZXRvbi5cbiAgICovXG5cblxuICBTZXJ2ZXJTdHlsZVNoZWV0LnByb3RvdHlwZS5zZWFsID0gZnVuY3Rpb24gc2VhbCgpIHtcbiAgICBpZiAoIXRoaXMuc2VhbGVkKSB7XG4gICAgICAvKiBSZW1vdmUgc2VhbGVkIFN0eWxlU2hlZXRzIGZyb20gdGhlIG1hc3RlciBzaGVldCAqL1xuICAgICAgdmFyIGluZGV4ID0gdGhpcy5tYXN0ZXJTaGVldC5jbG9uZXMuaW5kZXhPZih0aGlzLmluc3RhbmNlKTtcbiAgICAgIHRoaXMubWFzdGVyU2hlZXQuY2xvbmVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB0aGlzLnNlYWxlZCA9IHRydWU7XG4gICAgfVxuICB9O1xuXG4gIFNlcnZlclN0eWxlU2hlZXQucHJvdG90eXBlLmNvbGxlY3RTdHlsZXMgPSBmdW5jdGlvbiBjb2xsZWN0U3R5bGVzKGNoaWxkcmVuKSB7XG4gICAgaWYgKHRoaXMuc2VhbGVkKSB7XG4gICAgICB0aHJvdyBuZXcgU3R5bGVkQ29tcG9uZW50c0Vycm9yKDIpO1xuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgU3R5bGVTaGVldE1hbmFnZXIsXG4gICAgICB7IHNoZWV0OiB0aGlzLmluc3RhbmNlIH0sXG4gICAgICBjaGlsZHJlblxuICAgICk7XG4gIH07XG5cbiAgU2VydmVyU3R5bGVTaGVldC5wcm90b3R5cGUuZ2V0U3R5bGVUYWdzID0gZnVuY3Rpb24gZ2V0U3R5bGVUYWdzKCkge1xuICAgIHRoaXMuc2VhbCgpO1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlLnRvSFRNTCgpO1xuICB9O1xuXG4gIFNlcnZlclN0eWxlU2hlZXQucHJvdG90eXBlLmdldFN0eWxlRWxlbWVudCA9IGZ1bmN0aW9uIGdldFN0eWxlRWxlbWVudCgpIHtcbiAgICB0aGlzLnNlYWwoKTtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS50b1JlYWN0RWxlbWVudHMoKTtcbiAgfTtcblxuICBTZXJ2ZXJTdHlsZVNoZWV0LnByb3RvdHlwZS5pbnRlcmxlYXZlV2l0aE5vZGVTdHJlYW0gPSBmdW5jdGlvbiBpbnRlcmxlYXZlV2l0aE5vZGVTdHJlYW0ocmVhZGFibGVTdHJlYW0pIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAge1xuICAgICAgdGhyb3cgbmV3IFN0eWxlZENvbXBvbmVudHNFcnJvcigzKTtcbiAgICB9XG5cbiAgICAvKiB0aGUgdGFnIGluZGV4IGtlZXBzIHRyYWNrIG9mIHdoaWNoIHRhZ3MgaGF2ZSBhbHJlYWR5IGJlZW4gZW1pdHRlZCAqL1xuICAgIHZhciBpbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2U7XG5cbiAgICB2YXIgaW5zdGFuY2VUYWdJbmRleCA9IDA7XG5cbiAgICB2YXIgc3RyZWFtQXR0ciA9IFNDX1NUUkVBTV9BVFRSICsgJz1cInRydWVcIic7XG5cbiAgICB2YXIgdHJhbnNmb3JtZXIgPSBuZXcgc3RyZWFtLlRyYW5zZm9ybSh7XG4gICAgICB0cmFuc2Zvcm06IGZ1bmN0aW9uIGFwcGVuZFN0eWxlQ2h1bmtzKGNodW5rLCAvKiBlbmNvZGluZyAqL18sIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciB0YWdzID0gaW5zdGFuY2UudGFncztcblxuICAgICAgICB2YXIgaHRtbCA9ICcnO1xuXG4gICAgICAgIC8qIHJldHJpZXZlIGh0bWwgZm9yIGVhY2ggbmV3IHN0eWxlIHRhZyAqL1xuICAgICAgICBmb3IgKDsgaW5zdGFuY2VUYWdJbmRleCA8IHRhZ3MubGVuZ3RoOyBpbnN0YW5jZVRhZ0luZGV4ICs9IDEpIHtcbiAgICAgICAgICB2YXIgdGFnID0gdGFnc1tpbnN0YW5jZVRhZ0luZGV4XTtcbiAgICAgICAgICBodG1sICs9IHRhZy50b0hUTUwoc3RyZWFtQXR0cik7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBmb3JjZSBvdXIgU3R5bGVTaGVldHMgdG8gZW1pdCBlbnRpcmVseSBuZXcgdGFncyAqL1xuICAgICAgICBpbnN0YW5jZS5zZWFsQWxsVGFncygpO1xuXG4gICAgICAgIHZhciByZW5kZXJlZEh0bWwgPSBjaHVuay50b1N0cmluZygpO1xuXG4gICAgICAgIC8qIHByZXBlbmQgc3R5bGUgaHRtbCB0byBjaHVuaywgdW5sZXNzIHRoZSBzdGFydCBvZiB0aGUgY2h1bmsgaXMgYSBjbG9zaW5nIHRhZyBpbiB3aGljaCBjYXNlIGFwcGVuZCByaWdodCBhZnRlciB0aGF0ICovXG4gICAgICAgIGlmIChDTE9TSU5HX1RBR19SLnRlc3QocmVuZGVyZWRIdG1sKSkge1xuICAgICAgICAgIHZhciBlbmRPZkNsb3NpbmdUYWcgPSByZW5kZXJlZEh0bWwuaW5kZXhPZignPicpO1xuXG4gICAgICAgICAgdGhpcy5wdXNoKHJlbmRlcmVkSHRtbC5zbGljZSgwLCBlbmRPZkNsb3NpbmdUYWcgKyAxKSArIGh0bWwgKyByZW5kZXJlZEh0bWwuc2xpY2UoZW5kT2ZDbG9zaW5nVGFnICsgMSkpO1xuICAgICAgICB9IGVsc2UgdGhpcy5wdXNoKGh0bWwgKyByZW5kZXJlZEh0bWwpO1xuXG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZWFkYWJsZVN0cmVhbS5vbignZW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLnNlYWwoKTtcbiAgICB9KTtcblxuICAgIHJlYWRhYmxlU3RyZWFtLm9uKCdlcnJvcicsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIF90aGlzLnNlYWwoKTtcblxuICAgICAgLy8gZm9yd2FyZCB0aGUgZXJyb3IgdG8gdGhlIHRyYW5zZm9ybSBzdHJlYW1cbiAgICAgIHRyYW5zZm9ybWVyLmVtaXQoJ2Vycm9yJywgZXJyKTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZWFkYWJsZVN0cmVhbS5waXBlKHRyYW5zZm9ybWVyKTtcbiAgfTtcblxuICByZXR1cm4gU2VydmVyU3R5bGVTaGVldDtcbn0oKTtcblxuLy8gXG5cbnZhciBTdHlsZVNoZWV0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcbnZhciBTdHlsZVNoZWV0Q29uc3VtZXIgPSBTdHlsZVNoZWV0Q29udGV4dC5Db25zdW1lcjtcblxudmFyIFN0eWxlU2hlZXRNYW5hZ2VyID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgaW5oZXJpdHMoU3R5bGVTaGVldE1hbmFnZXIsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFN0eWxlU2hlZXRNYW5hZ2VyKHByb3BzKSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgU3R5bGVTaGVldE1hbmFnZXIpO1xuXG4gICAgdmFyIF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF90aGlzLmdldENvbnRleHQgPSBtZW1vaXplKF90aGlzLmdldENvbnRleHQpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIFN0eWxlU2hlZXRNYW5hZ2VyLnByb3RvdHlwZS5nZXRDb250ZXh0ID0gZnVuY3Rpb24gZ2V0Q29udGV4dChzaGVldCwgdGFyZ2V0KSB7XG4gICAgaWYgKHNoZWV0KSB7XG4gICAgICByZXR1cm4gc2hlZXQ7XG4gICAgfSBlbHNlIGlmICh0YXJnZXQpIHtcbiAgICAgIHJldHVybiBuZXcgU3R5bGVTaGVldCh0YXJnZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgU3R5bGVkQ29tcG9uZW50c0Vycm9yKDQpO1xuICAgIH1cbiAgfTtcblxuICBTdHlsZVNoZWV0TWFuYWdlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgc2hlZXQgPSBfcHJvcHMuc2hlZXQsXG4gICAgICAgIHRhcmdldCA9IF9wcm9wcy50YXJnZXQ7XG5cblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgU3R5bGVTaGVldENvbnRleHQuUHJvdmlkZXIsXG4gICAgICB7IHZhbHVlOiB0aGlzLmdldENvbnRleHQoc2hlZXQsIHRhcmdldCkgfSxcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBSZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKSA6IGNoaWxkcmVuXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gU3R5bGVTaGVldE1hbmFnZXI7XG59KENvbXBvbmVudCk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBTdHlsZVNoZWV0TWFuYWdlci5wcm9wVHlwZXMgPSB7XG4gIHNoZWV0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuaW5zdGFuY2VPZihTdHlsZVNoZWV0KSwgUHJvcFR5cGVzLmluc3RhbmNlT2YoU2VydmVyU3R5bGVTaGVldCldKSxcblxuICB0YXJnZXQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgYXBwZW5kQ2hpbGQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfSlcbn0gOiB2b2lkIDA7XG5cbi8vIFxuXG52YXIgaWRlbnRpZmllcnMgPSB7fTtcblxuLyogV2UgZGVwZW5kIG9uIGNvbXBvbmVudHMgaGF2aW5nIHVuaXF1ZSBJRHMgKi9cbmZ1bmN0aW9uIGdlbmVyYXRlSWQoX0NvbXBvbmVudFN0eWxlLCBfZGlzcGxheU5hbWUsIHBhcmVudENvbXBvbmVudElkKSB7XG4gIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiBfZGlzcGxheU5hbWUgIT09ICdzdHJpbmcnID8gJ3NjJyA6IGVzY2FwZShfZGlzcGxheU5hbWUpO1xuXG4gIC8qKlxuICAgKiBUaGlzIGVuc3VyZXMgdW5pcXVlbmVzcyBpZiB0d28gY29tcG9uZW50cyBoYXBwZW4gdG8gc2hhcmVcbiAgICogdGhlIHNhbWUgZGlzcGxheU5hbWUuXG4gICAqL1xuICB2YXIgbnIgPSAoaWRlbnRpZmllcnNbZGlzcGxheU5hbWVdIHx8IDApICsgMTtcbiAgaWRlbnRpZmllcnNbZGlzcGxheU5hbWVdID0gbnI7XG5cbiAgdmFyIGNvbXBvbmVudElkID0gZGlzcGxheU5hbWUgKyAnLScgKyBfQ29tcG9uZW50U3R5bGUuZ2VuZXJhdGVOYW1lKGRpc3BsYXlOYW1lICsgbnIpO1xuXG4gIHJldHVybiBwYXJlbnRDb21wb25lbnRJZCA/IHBhcmVudENvbXBvbmVudElkICsgJy0nICsgY29tcG9uZW50SWQgOiBjb21wb25lbnRJZDtcbn1cblxuLy8gJEZsb3dGaXhNZVxuXG52YXIgU3R5bGVkQ29tcG9uZW50ID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgaW5oZXJpdHMoU3R5bGVkQ29tcG9uZW50LCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBTdHlsZWRDb21wb25lbnQoKSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgU3R5bGVkQ29tcG9uZW50KTtcblxuICAgIHZhciBfdGhpcyA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudC5jYWxsKHRoaXMpKTtcblxuICAgIF90aGlzLmF0dHJzID0ge307XG5cbiAgICBfdGhpcy5yZW5kZXJPdXRlciA9IF90aGlzLnJlbmRlck91dGVyLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLnJlbmRlcklubmVyID0gX3RoaXMucmVuZGVySW5uZXIuYmluZChfdGhpcyk7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgX3RoaXMud2FybklubmVyUmVmID0gb25jZShmdW5jdGlvbiAoZGlzcGxheU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUud2FybignVGhlIFwiaW5uZXJSZWZcIiBBUEkgaGFzIGJlZW4gcmVtb3ZlZCBpbiBzdHlsZWQtY29tcG9uZW50cyB2NCBpbiBmYXZvciBvZiBSZWFjdCAxNiByZWYgZm9yd2FyZGluZywgdXNlIFwicmVmXCIgaW5zdGVhZCBsaWtlIGEgdHlwaWNhbCBjb21wb25lbnQuIFwiaW5uZXJSZWZcIiB3YXMgZGV0ZWN0ZWQgb24gY29tcG9uZW50IFwiJyArIGRpc3BsYXlOYW1lICsgJ1wiLicpXG4gICAgICAgICk7XG4gICAgICB9KTtcblxuICAgICAgX3RoaXMud2FybkF0dHJzRm5PYmplY3RLZXlEZXByZWNhdGVkID0gb25jZShmdW5jdGlvbiAoa2V5LCBkaXNwbGF5TmFtZSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS53YXJuKCdGdW5jdGlvbnMgYXMgb2JqZWN0LWZvcm0gYXR0cnMoe30pIGtleXMgYXJlIG5vdyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgdmVyc2lvbiBvZiBzdHlsZWQtY29tcG9uZW50cy4gU3dpdGNoIHRvIHRoZSBuZXcgYXR0cnMocHJvcHMgPT4gKHt9KSkgc3ludGF4IGluc3RlYWQgZm9yIGVhc2llciBhbmQgbW9yZSBwb3dlcmZ1bCBjb21wb3NpdGlvbi4gVGhlIGF0dHJzIGtleSBpbiBxdWVzdGlvbiBpcyBcIicgKyBrZXkgKyAnXCIgb24gY29tcG9uZW50IFwiJyArIGRpc3BsYXlOYW1lICsgJ1wiLicsICdcXG4gJyArIG5ldyBFcnJvcigpLnN0YWNrKVxuICAgICAgICApO1xuICAgICAgfSk7XG5cbiAgICAgIF90aGlzLndhcm5Ob25TdHlsZWRDb21wb25lbnRBdHRyc09iamVjdEtleSA9IG9uY2UoZnVuY3Rpb24gKGtleSwgZGlzcGxheU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUud2FybignSXQgbG9va3MgbGlrZSB5b3VcXCd2ZSB1c2VkIGEgbm9uIHN0eWxlZC1jb21wb25lbnQgYXMgdGhlIHZhbHVlIGZvciB0aGUgXCInICsga2V5ICsgJ1wiIHByb3AgaW4gYW4gb2JqZWN0LWZvcm0gYXR0cnMgY29uc3RydWN0b3Igb2YgXCInICsgZGlzcGxheU5hbWUgKyAnXCIuXFxuJyArICdZb3Ugc2hvdWxkIHVzZSB0aGUgbmV3IGZ1bmN0aW9uLWZvcm0gYXR0cnMgY29uc3RydWN0b3Igd2hpY2ggYXZvaWRzIHRoaXMgaXNzdWU6IGF0dHJzKHByb3BzID0+ICh7IHlvdXJTdHVmZiB9KSlcXG4nICsgXCJUbyBjb250aW51ZSB1c2luZyB0aGUgZGVwcmVjYXRlZCBvYmplY3Qgc3ludGF4LCB5b3UnbGwgbmVlZCB0byB3cmFwIHlvdXIgY29tcG9uZW50IHByb3AgaW4gYSBmdW5jdGlvbiB0byBtYWtlIGl0IGF2YWlsYWJsZSBpbnNpZGUgdGhlIHN0eWxlZCBjb21wb25lbnQgKHlvdSdsbCBzdGlsbCBnZXQgdGhlIGRlcHJlY2F0aW9uIHdhcm5pbmcgdGhvdWdoLilcXG5cIiArICgnRm9yIGV4YW1wbGUsIHsgJyArIGtleSArICc6ICgpID0+IElubmVyQ29tcG9uZW50IH0gaW5zdGVhZCBvZiB7ICcgKyBrZXkgKyAnOiBJbm5lckNvbXBvbmVudCB9JykpXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgU3R5bGVkQ29tcG9uZW50LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBTdHlsZVNoZWV0Q29uc3VtZXIsXG4gICAgICBudWxsLFxuICAgICAgdGhpcy5yZW5kZXJPdXRlclxuICAgICk7XG4gIH07XG5cbiAgU3R5bGVkQ29tcG9uZW50LnByb3RvdHlwZS5yZW5kZXJPdXRlciA9IGZ1bmN0aW9uIHJlbmRlck91dGVyKCkge1xuICAgIHZhciBzdHlsZVNoZWV0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBTdHlsZVNoZWV0Lm1hc3RlcjtcblxuICAgIHRoaXMuc3R5bGVTaGVldCA9IHN0eWxlU2hlZXQ7XG5cbiAgICAvLyBObyBuZWVkIHRvIHN1YnNjcmliZSBhIHN0YXRpYyBjb21wb25lbnQgdG8gdGhlbWUgY2hhbmdlcywgaXQgd29uJ3QgY2hhbmdlIGFueXRoaW5nXG4gICAgaWYgKHRoaXMucHJvcHMuZm9yd2FyZGVkQ29tcG9uZW50LmNvbXBvbmVudFN0eWxlLmlzU3RhdGljKSByZXR1cm4gdGhpcy5yZW5kZXJJbm5lcigpO1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBUaGVtZUNvbnN1bWVyLFxuICAgICAgbnVsbCxcbiAgICAgIHRoaXMucmVuZGVySW5uZXJcbiAgICApO1xuICB9O1xuXG4gIFN0eWxlZENvbXBvbmVudC5wcm90b3R5cGUucmVuZGVySW5uZXIgPSBmdW5jdGlvbiByZW5kZXJJbm5lcih0aGVtZSkge1xuICAgIHZhciBfcHJvcHMkZm9yd2FyZGVkQ29tcG8gPSB0aGlzLnByb3BzLmZvcndhcmRlZENvbXBvbmVudCxcbiAgICAgICAgY29tcG9uZW50U3R5bGUgPSBfcHJvcHMkZm9yd2FyZGVkQ29tcG8uY29tcG9uZW50U3R5bGUsXG4gICAgICAgIGRlZmF1bHRQcm9wcyA9IF9wcm9wcyRmb3J3YXJkZWRDb21wby5kZWZhdWx0UHJvcHMsXG4gICAgICAgIGRpc3BsYXlOYW1lID0gX3Byb3BzJGZvcndhcmRlZENvbXBvLmRpc3BsYXlOYW1lLFxuICAgICAgICBmb2xkZWRDb21wb25lbnRJZHMgPSBfcHJvcHMkZm9yd2FyZGVkQ29tcG8uZm9sZGVkQ29tcG9uZW50SWRzLFxuICAgICAgICBzdHlsZWRDb21wb25lbnRJZCA9IF9wcm9wcyRmb3J3YXJkZWRDb21wby5zdHlsZWRDb21wb25lbnRJZCxcbiAgICAgICAgdGFyZ2V0ID0gX3Byb3BzJGZvcndhcmRlZENvbXBvLnRhcmdldDtcblxuXG4gICAgdmFyIGdlbmVyYXRlZENsYXNzTmFtZSA9IHZvaWQgMDtcbiAgICBpZiAoY29tcG9uZW50U3R5bGUuaXNTdGF0aWMpIHtcbiAgICAgIGdlbmVyYXRlZENsYXNzTmFtZSA9IHRoaXMuZ2VuZXJhdGVBbmRJbmplY3RTdHlsZXMoRU1QVFlfT0JKRUNULCB0aGlzLnByb3BzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuZXJhdGVkQ2xhc3NOYW1lID0gdGhpcy5nZW5lcmF0ZUFuZEluamVjdFN0eWxlcyhkZXRlcm1pbmVUaGVtZSh0aGlzLnByb3BzLCB0aGVtZSwgZGVmYXVsdFByb3BzKSB8fCBFTVBUWV9PQkpFQ1QsIHRoaXMucHJvcHMpO1xuICAgIH1cblxuICAgIHZhciBlbGVtZW50VG9CZUNyZWF0ZWQgPSB0aGlzLnByb3BzLmFzIHx8IHRoaXMuYXR0cnMuYXMgfHwgdGFyZ2V0O1xuICAgIHZhciBpc1RhcmdldFRhZyA9IGlzVGFnKGVsZW1lbnRUb0JlQ3JlYXRlZCk7XG5cbiAgICB2YXIgcHJvcHNGb3JFbGVtZW50ID0ge307XG4gICAgdmFyIGNvbXB1dGVkUHJvcHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgdGhpcy5hdHRycyk7XG5cbiAgICB2YXIga2V5ID0gdm9pZCAwO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBndWFyZC1mb3ItaW5cbiAgICBmb3IgKGtleSBpbiBjb21wdXRlZFByb3BzKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBrZXkgPT09ICdpbm5lclJlZicgJiYgaXNUYXJnZXRUYWcpIHtcbiAgICAgICAgdGhpcy53YXJuSW5uZXJSZWYoZGlzcGxheU5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoa2V5ID09PSAnZm9yd2FyZGVkQ29tcG9uZW50JyB8fCBrZXkgPT09ICdhcycpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2ZvcndhcmRlZFJlZicpIHByb3BzRm9yRWxlbWVudC5yZWYgPSBjb21wdXRlZFByb3BzW2tleV07ZWxzZSBpZiAoa2V5ID09PSAnZm9yd2FyZGVkQXMnKSBwcm9wc0ZvckVsZW1lbnQuYXMgPSBjb21wdXRlZFByb3BzW2tleV07ZWxzZSBpZiAoIWlzVGFyZ2V0VGFnIHx8IHZhbGlkQXR0cihrZXkpKSB7XG4gICAgICAgIC8vIERvbid0IHBhc3MgdGhyb3VnaCBub24gSFRNTCB0YWdzIHRocm91Z2ggdG8gSFRNTCBlbGVtZW50c1xuICAgICAgICBwcm9wc0ZvckVsZW1lbnRba2V5XSA9IGNvbXB1dGVkUHJvcHNba2V5XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5zdHlsZSAmJiB0aGlzLmF0dHJzLnN0eWxlKSB7XG4gICAgICBwcm9wc0ZvckVsZW1lbnQuc3R5bGUgPSBfZXh0ZW5kcyh7fSwgdGhpcy5hdHRycy5zdHlsZSwgdGhpcy5wcm9wcy5zdHlsZSk7XG4gICAgfVxuXG4gICAgcHJvcHNGb3JFbGVtZW50LmNsYXNzTmFtZSA9IEFycmF5LnByb3RvdHlwZS5jb25jYXQoZm9sZGVkQ29tcG9uZW50SWRzLCBzdHlsZWRDb21wb25lbnRJZCwgZ2VuZXJhdGVkQ2xhc3NOYW1lICE9PSBzdHlsZWRDb21wb25lbnRJZCA/IGdlbmVyYXRlZENsYXNzTmFtZSA6IG51bGwsIHRoaXMucHJvcHMuY2xhc3NOYW1lLCB0aGlzLmF0dHJzLmNsYXNzTmFtZSkuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcblxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KGVsZW1lbnRUb0JlQ3JlYXRlZCwgcHJvcHNGb3JFbGVtZW50KTtcbiAgfTtcblxuICBTdHlsZWRDb21wb25lbnQucHJvdG90eXBlLmJ1aWxkRXhlY3V0aW9uQ29udGV4dCA9IGZ1bmN0aW9uIGJ1aWxkRXhlY3V0aW9uQ29udGV4dCh0aGVtZSwgcHJvcHMsIGF0dHJzKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgY29udGV4dCA9IF9leHRlbmRzKHt9LCBwcm9wcywgeyB0aGVtZTogdGhlbWUgfSk7XG5cbiAgICBpZiAoIWF0dHJzLmxlbmd0aCkgcmV0dXJuIGNvbnRleHQ7XG5cbiAgICB0aGlzLmF0dHJzID0ge307XG5cbiAgICBhdHRycy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyRGVmKSB7XG4gICAgICB2YXIgcmVzb2x2ZWRBdHRyRGVmID0gYXR0ckRlZjtcbiAgICAgIHZhciBhdHRyRGVmV2FzRm4gPSBmYWxzZTtcbiAgICAgIHZhciBhdHRyID0gdm9pZCAwO1xuICAgICAgdmFyIGtleSA9IHZvaWQgMDtcblxuICAgICAgaWYgKGlzRnVuY3Rpb24ocmVzb2x2ZWRBdHRyRGVmKSkge1xuICAgICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICAgIHJlc29sdmVkQXR0ckRlZiA9IHJlc29sdmVkQXR0ckRlZihjb250ZXh0KTtcbiAgICAgICAgYXR0ckRlZldhc0ZuID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLyogZXNsaW50LWRpc2FibGUgZ3VhcmQtZm9yLWluICovXG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICBmb3IgKGtleSBpbiByZXNvbHZlZEF0dHJEZWYpIHtcbiAgICAgICAgYXR0ciA9IHJlc29sdmVkQXR0ckRlZltrZXldO1xuXG4gICAgICAgIGlmICghYXR0ckRlZldhc0ZuKSB7XG4gICAgICAgICAgaWYgKGlzRnVuY3Rpb24oYXR0cikgJiYgIWlzRGVyaXZlZFJlYWN0Q29tcG9uZW50KGF0dHIpICYmICFpc1N0eWxlZENvbXBvbmVudChhdHRyKSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgX3RoaXMyLndhcm5BdHRyc0ZuT2JqZWN0S2V5RGVwcmVjYXRlZChrZXksIHByb3BzLmZvcndhcmRlZENvbXBvbmVudC5kaXNwbGF5TmFtZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGF0dHIgPSBhdHRyKGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBSZWFjdC5pc1ZhbGlkRWxlbWVudChhdHRyKSkge1xuICAgICAgICAgICAgICBfdGhpczIud2Fybk5vblN0eWxlZENvbXBvbmVudEF0dHJzT2JqZWN0S2V5KGtleSwgcHJvcHMuZm9yd2FyZGVkQ29tcG9uZW50LmRpc3BsYXlOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpczIuYXR0cnNba2V5XSA9IGF0dHI7XG4gICAgICAgIGNvbnRleHRba2V5XSA9IGF0dHI7XG4gICAgICB9XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlICovXG4gICAgfSk7XG5cbiAgICByZXR1cm4gY29udGV4dDtcbiAgfTtcblxuICBTdHlsZWRDb21wb25lbnQucHJvdG90eXBlLmdlbmVyYXRlQW5kSW5qZWN0U3R5bGVzID0gZnVuY3Rpb24gZ2VuZXJhdGVBbmRJbmplY3RTdHlsZXModGhlbWUsIHByb3BzKSB7XG4gICAgdmFyIF9wcm9wcyRmb3J3YXJkZWRDb21wbzIgPSBwcm9wcy5mb3J3YXJkZWRDb21wb25lbnQsXG4gICAgICAgIGF0dHJzID0gX3Byb3BzJGZvcndhcmRlZENvbXBvMi5hdHRycyxcbiAgICAgICAgY29tcG9uZW50U3R5bGUgPSBfcHJvcHMkZm9yd2FyZGVkQ29tcG8yLmNvbXBvbmVudFN0eWxlLFxuICAgICAgICB3YXJuVG9vTWFueUNsYXNzZXMgPSBfcHJvcHMkZm9yd2FyZGVkQ29tcG8yLndhcm5Ub29NYW55Q2xhc3NlcztcblxuICAgIC8vIHN0YXRpY2FsbHkgc3R5bGVkLWNvbXBvbmVudHMgZG9uJ3QgbmVlZCB0byBidWlsZCBhbiBleGVjdXRpb24gY29udGV4dCBvYmplY3QsXG4gICAgLy8gYW5kIHNob3VsZG4ndCBiZSBpbmNyZWFzaW5nIHRoZSBudW1iZXIgb2YgY2xhc3MgbmFtZXNcblxuICAgIGlmIChjb21wb25lbnRTdHlsZS5pc1N0YXRpYyAmJiAhYXR0cnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gY29tcG9uZW50U3R5bGUuZ2VuZXJhdGVBbmRJbmplY3RTdHlsZXMoRU1QVFlfT0JKRUNULCB0aGlzLnN0eWxlU2hlZXQpO1xuICAgIH1cblxuICAgIHZhciBjbGFzc05hbWUgPSBjb21wb25lbnRTdHlsZS5nZW5lcmF0ZUFuZEluamVjdFN0eWxlcyh0aGlzLmJ1aWxkRXhlY3V0aW9uQ29udGV4dCh0aGVtZSwgcHJvcHMsIGF0dHJzKSwgdGhpcy5zdHlsZVNoZWV0KTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm5Ub29NYW55Q2xhc3Nlcykgd2FyblRvb01hbnlDbGFzc2VzKGNsYXNzTmFtZSk7XG5cbiAgICByZXR1cm4gY2xhc3NOYW1lO1xuICB9O1xuXG4gIHJldHVybiBTdHlsZWRDb21wb25lbnQ7XG59KENvbXBvbmVudCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlZENvbXBvbmVudCh0YXJnZXQsIG9wdGlvbnMsIHJ1bGVzKSB7XG4gIHZhciBpc1RhcmdldFN0eWxlZENvbXAgPSBpc1N0eWxlZENvbXBvbmVudCh0YXJnZXQpO1xuICB2YXIgaXNDbGFzcyA9ICFpc1RhZyh0YXJnZXQpO1xuXG4gIHZhciBfb3B0aW9ucyRkaXNwbGF5TmFtZSA9IG9wdGlvbnMuZGlzcGxheU5hbWUsXG4gICAgICBkaXNwbGF5TmFtZSA9IF9vcHRpb25zJGRpc3BsYXlOYW1lID09PSB1bmRlZmluZWQgPyBnZW5lcmF0ZURpc3BsYXlOYW1lKHRhcmdldCkgOiBfb3B0aW9ucyRkaXNwbGF5TmFtZSxcbiAgICAgIF9vcHRpb25zJGNvbXBvbmVudElkID0gb3B0aW9ucy5jb21wb25lbnRJZCxcbiAgICAgIGNvbXBvbmVudElkID0gX29wdGlvbnMkY29tcG9uZW50SWQgPT09IHVuZGVmaW5lZCA/IGdlbmVyYXRlSWQoQ29tcG9uZW50U3R5bGUsIG9wdGlvbnMuZGlzcGxheU5hbWUsIG9wdGlvbnMucGFyZW50Q29tcG9uZW50SWQpIDogX29wdGlvbnMkY29tcG9uZW50SWQsXG4gICAgICBfb3B0aW9ucyRQYXJlbnRDb21wb24gPSBvcHRpb25zLlBhcmVudENvbXBvbmVudCxcbiAgICAgIFBhcmVudENvbXBvbmVudCA9IF9vcHRpb25zJFBhcmVudENvbXBvbiA9PT0gdW5kZWZpbmVkID8gU3R5bGVkQ29tcG9uZW50IDogX29wdGlvbnMkUGFyZW50Q29tcG9uLFxuICAgICAgX29wdGlvbnMkYXR0cnMgPSBvcHRpb25zLmF0dHJzLFxuICAgICAgYXR0cnMgPSBfb3B0aW9ucyRhdHRycyA9PT0gdW5kZWZpbmVkID8gRU1QVFlfQVJSQVkgOiBfb3B0aW9ucyRhdHRycztcblxuXG4gIHZhciBzdHlsZWRDb21wb25lbnRJZCA9IG9wdGlvbnMuZGlzcGxheU5hbWUgJiYgb3B0aW9ucy5jb21wb25lbnRJZCA/IGVzY2FwZShvcHRpb25zLmRpc3BsYXlOYW1lKSArICctJyArIG9wdGlvbnMuY29tcG9uZW50SWQgOiBvcHRpb25zLmNvbXBvbmVudElkIHx8IGNvbXBvbmVudElkO1xuXG4gIC8vIGZvbGQgdGhlIHVuZGVybHlpbmcgU3R5bGVkQ29tcG9uZW50IGF0dHJzIHVwIChpbXBsaWNpdCBleHRlbmQpXG4gIHZhciBmaW5hbEF0dHJzID1cbiAgLy8gJEZsb3dGaXhNZVxuICBpc1RhcmdldFN0eWxlZENvbXAgJiYgdGFyZ2V0LmF0dHJzID8gQXJyYXkucHJvdG90eXBlLmNvbmNhdCh0YXJnZXQuYXR0cnMsIGF0dHJzKS5maWx0ZXIoQm9vbGVhbikgOiBhdHRycztcblxuICB2YXIgY29tcG9uZW50U3R5bGUgPSBuZXcgQ29tcG9uZW50U3R5bGUoaXNUYXJnZXRTdHlsZWRDb21wID8gLy8gZm9sZCB0aGUgdW5kZXJseWluZyBTdHlsZWRDb21wb25lbnQgcnVsZXMgdXAgKGltcGxpY2l0IGV4dGVuZClcbiAgLy8gJEZsb3dGaXhNZVxuICB0YXJnZXQuY29tcG9uZW50U3R5bGUucnVsZXMuY29uY2F0KHJ1bGVzKSA6IHJ1bGVzLCBmaW5hbEF0dHJzLCBzdHlsZWRDb21wb25lbnRJZCk7XG5cbiAgLyoqXG4gICAqIGZvcndhcmRSZWYgY3JlYXRlcyBhIG5ldyBpbnRlcmltIGNvbXBvbmVudCwgd2hpY2ggd2UnbGwgdGFrZSBhZHZhbnRhZ2Ugb2ZcbiAgICogaW5zdGVhZCBvZiBleHRlbmRpbmcgUGFyZW50Q29tcG9uZW50IHRvIGNyZWF0ZSBfYW5vdGhlcl8gaW50ZXJpbSBjbGFzc1xuICAgKi9cbiAgdmFyIFdyYXBwZWRTdHlsZWRDb21wb25lbnQgPSB2b2lkIDA7XG4gIHZhciBmb3J3YXJkUmVmID0gZnVuY3Rpb24gZm9yd2FyZFJlZihwcm9wcywgcmVmKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGFyZW50Q29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHsgZm9yd2FyZGVkQ29tcG9uZW50OiBXcmFwcGVkU3R5bGVkQ29tcG9uZW50LCBmb3J3YXJkZWRSZWY6IHJlZiB9KSk7XG4gIH07XG4gIGZvcndhcmRSZWYuZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcbiAgV3JhcHBlZFN0eWxlZENvbXBvbmVudCA9IFJlYWN0LmZvcndhcmRSZWYoZm9yd2FyZFJlZik7XG4gIFdyYXBwZWRTdHlsZWRDb21wb25lbnQuZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcblxuICAvLyAkRmxvd0ZpeE1lXG4gIFdyYXBwZWRTdHlsZWRDb21wb25lbnQuYXR0cnMgPSBmaW5hbEF0dHJzO1xuICAvLyAkRmxvd0ZpeE1lXG4gIFdyYXBwZWRTdHlsZWRDb21wb25lbnQuY29tcG9uZW50U3R5bGUgPSBjb21wb25lbnRTdHlsZTtcblxuICAvLyAkRmxvd0ZpeE1lXG4gIFdyYXBwZWRTdHlsZWRDb21wb25lbnQuZm9sZGVkQ29tcG9uZW50SWRzID0gaXNUYXJnZXRTdHlsZWRDb21wID8gLy8gJEZsb3dGaXhNZVxuICBBcnJheS5wcm90b3R5cGUuY29uY2F0KHRhcmdldC5mb2xkZWRDb21wb25lbnRJZHMsIHRhcmdldC5zdHlsZWRDb21wb25lbnRJZCkgOiBFTVBUWV9BUlJBWTtcblxuICAvLyAkRmxvd0ZpeE1lXG4gIFdyYXBwZWRTdHlsZWRDb21wb25lbnQuc3R5bGVkQ29tcG9uZW50SWQgPSBzdHlsZWRDb21wb25lbnRJZDtcblxuICAvLyBmb2xkIHRoZSB1bmRlcmx5aW5nIFN0eWxlZENvbXBvbmVudCB0YXJnZXQgdXAgc2luY2Ugd2UgZm9sZGVkIHRoZSBzdHlsZXNcbiAgLy8gJEZsb3dGaXhNZVxuICBXcmFwcGVkU3R5bGVkQ29tcG9uZW50LnRhcmdldCA9IGlzVGFyZ2V0U3R5bGVkQ29tcCA/IHRhcmdldC50YXJnZXQgOiB0YXJnZXQ7XG5cbiAgLy8gJEZsb3dGaXhNZVxuICBXcmFwcGVkU3R5bGVkQ29tcG9uZW50LndpdGhDb21wb25lbnQgPSBmdW5jdGlvbiB3aXRoQ29tcG9uZW50KHRhZykge1xuICAgIHZhciBwcmV2aW91c0NvbXBvbmVudElkID0gb3B0aW9ucy5jb21wb25lbnRJZCxcbiAgICAgICAgb3B0aW9uc1RvQ29weSA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9wdGlvbnMsIFsnY29tcG9uZW50SWQnXSk7XG5cblxuICAgIHZhciBuZXdDb21wb25lbnRJZCA9IHByZXZpb3VzQ29tcG9uZW50SWQgJiYgcHJldmlvdXNDb21wb25lbnRJZCArICctJyArIChpc1RhZyh0YWcpID8gdGFnIDogZXNjYXBlKGdldENvbXBvbmVudE5hbWUodGFnKSkpO1xuXG4gICAgdmFyIG5ld09wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgb3B0aW9uc1RvQ29weSwge1xuICAgICAgYXR0cnM6IGZpbmFsQXR0cnMsXG4gICAgICBjb21wb25lbnRJZDogbmV3Q29tcG9uZW50SWQsXG4gICAgICBQYXJlbnRDb21wb25lbnQ6IFBhcmVudENvbXBvbmVudFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNyZWF0ZVN0eWxlZENvbXBvbmVudCh0YWcsIG5ld09wdGlvbnMsIHJ1bGVzKTtcbiAgfTtcblxuICAvLyAkRmxvd0ZpeE1lXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShXcmFwcGVkU3R5bGVkQ29tcG9uZW50LCAnZGVmYXVsdFByb3BzJywge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2ZvbGRlZERlZmF1bHRQcm9wcztcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0JCQxKG9iaikge1xuICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgdGhpcy5fZm9sZGVkRGVmYXVsdFByb3BzID0gaXNUYXJnZXRTdHlsZWRDb21wID8gbWVyZ2UodGFyZ2V0LmRlZmF1bHRQcm9wcywgb2JqKSA6IG9iajtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gJEZsb3dGaXhNZVxuICAgIFdyYXBwZWRTdHlsZWRDb21wb25lbnQud2FyblRvb01hbnlDbGFzc2VzID0gY3JlYXRlV2FyblRvb01hbnlDbGFzc2VzKGRpc3BsYXlOYW1lKTtcbiAgfVxuXG4gIC8vICRGbG93Rml4TWVcbiAgV3JhcHBlZFN0eWxlZENvbXBvbmVudC50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gJy4nICsgV3JhcHBlZFN0eWxlZENvbXBvbmVudC5zdHlsZWRDb21wb25lbnRJZDtcbiAgfTtcblxuICBpZiAoaXNDbGFzcykge1xuICAgIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKFdyYXBwZWRTdHlsZWRDb21wb25lbnQsIHRhcmdldCwge1xuICAgICAgLy8gYWxsIFNDLXNwZWNpZmljIHRoaW5ncyBzaG91bGQgbm90IGJlIGhvaXN0ZWRcbiAgICAgIGF0dHJzOiB0cnVlLFxuICAgICAgY29tcG9uZW50U3R5bGU6IHRydWUsXG4gICAgICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgICAgIGZvbGRlZENvbXBvbmVudElkczogdHJ1ZSxcbiAgICAgIHN0eWxlZENvbXBvbmVudElkOiB0cnVlLFxuICAgICAgdGFyZ2V0OiB0cnVlLFxuICAgICAgd2l0aENvbXBvbmVudDogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIFdyYXBwZWRTdHlsZWRDb21wb25lbnQ7XG59XG5cbi8vIFxuLy8gVGhhbmtzIHRvIFJlYWN0RE9NRmFjdG9yaWVzIGZvciB0aGlzIGhhbmR5IGxpc3QhXG5cbnZhciBkb21FbGVtZW50cyA9IFsnYScsICdhYmJyJywgJ2FkZHJlc3MnLCAnYXJlYScsICdhcnRpY2xlJywgJ2FzaWRlJywgJ2F1ZGlvJywgJ2InLCAnYmFzZScsICdiZGknLCAnYmRvJywgJ2JpZycsICdibG9ja3F1b3RlJywgJ2JvZHknLCAnYnInLCAnYnV0dG9uJywgJ2NhbnZhcycsICdjYXB0aW9uJywgJ2NpdGUnLCAnY29kZScsICdjb2wnLCAnY29sZ3JvdXAnLCAnZGF0YScsICdkYXRhbGlzdCcsICdkZCcsICdkZWwnLCAnZGV0YWlscycsICdkZm4nLCAnZGlhbG9nJywgJ2RpdicsICdkbCcsICdkdCcsICdlbScsICdlbWJlZCcsICdmaWVsZHNldCcsICdmaWdjYXB0aW9uJywgJ2ZpZ3VyZScsICdmb290ZXInLCAnZm9ybScsICdoMScsICdoMicsICdoMycsICdoNCcsICdoNScsICdoNicsICdoZWFkJywgJ2hlYWRlcicsICdoZ3JvdXAnLCAnaHInLCAnaHRtbCcsICdpJywgJ2lmcmFtZScsICdpbWcnLCAnaW5wdXQnLCAnaW5zJywgJ2tiZCcsICdrZXlnZW4nLCAnbGFiZWwnLCAnbGVnZW5kJywgJ2xpJywgJ2xpbmsnLCAnbWFpbicsICdtYXAnLCAnbWFyaycsICdtYXJxdWVlJywgJ21lbnUnLCAnbWVudWl0ZW0nLCAnbWV0YScsICdtZXRlcicsICduYXYnLCAnbm9zY3JpcHQnLCAnb2JqZWN0JywgJ29sJywgJ29wdGdyb3VwJywgJ29wdGlvbicsICdvdXRwdXQnLCAncCcsICdwYXJhbScsICdwaWN0dXJlJywgJ3ByZScsICdwcm9ncmVzcycsICdxJywgJ3JwJywgJ3J0JywgJ3J1YnknLCAncycsICdzYW1wJywgJ3NjcmlwdCcsICdzZWN0aW9uJywgJ3NlbGVjdCcsICdzbWFsbCcsICdzb3VyY2UnLCAnc3BhbicsICdzdHJvbmcnLCAnc3R5bGUnLCAnc3ViJywgJ3N1bW1hcnknLCAnc3VwJywgJ3RhYmxlJywgJ3Rib2R5JywgJ3RkJywgJ3RleHRhcmVhJywgJ3Rmb290JywgJ3RoJywgJ3RoZWFkJywgJ3RpbWUnLCAndGl0bGUnLCAndHInLCAndHJhY2snLCAndScsICd1bCcsICd2YXInLCAndmlkZW8nLCAnd2JyJyxcblxuLy8gU1ZHXG4nY2lyY2xlJywgJ2NsaXBQYXRoJywgJ2RlZnMnLCAnZWxsaXBzZScsICdmb3JlaWduT2JqZWN0JywgJ2cnLCAnaW1hZ2UnLCAnbGluZScsICdsaW5lYXJHcmFkaWVudCcsICdtYXJrZXInLCAnbWFzaycsICdwYXRoJywgJ3BhdHRlcm4nLCAncG9seWdvbicsICdwb2x5bGluZScsICdyYWRpYWxHcmFkaWVudCcsICdyZWN0JywgJ3N0b3AnLCAnc3ZnJywgJ3RleHQnLCAndHNwYW4nXTtcblxuLy8gXG5cbnZhciBzdHlsZWQgPSBmdW5jdGlvbiBzdHlsZWQodGFnKSB7XG4gIHJldHVybiBjb25zdHJ1Y3RXaXRoT3B0aW9ucyhjcmVhdGVTdHlsZWRDb21wb25lbnQsIHRhZyk7XG59O1xuXG4vLyBTaG9ydGhhbmRzIGZvciBhbGwgdmFsaWQgSFRNTCBFbGVtZW50c1xuZG9tRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZG9tRWxlbWVudCkge1xuICBzdHlsZWRbZG9tRWxlbWVudF0gPSBzdHlsZWQoZG9tRWxlbWVudCk7XG59KTtcblxuLy8gXG5cbnZhciBHbG9iYWxTdHlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gR2xvYmFsU3R5bGUocnVsZXMsIGNvbXBvbmVudElkKSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgR2xvYmFsU3R5bGUpO1xuXG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuICAgIHRoaXMuY29tcG9uZW50SWQgPSBjb21wb25lbnRJZDtcbiAgICB0aGlzLmlzU3RhdGljID0gaXNTdGF0aWNSdWxlcyhydWxlcywgRU1QVFlfQVJSQVkpO1xuXG4gICAgaWYgKCFTdHlsZVNoZWV0Lm1hc3Rlci5oYXNJZChjb21wb25lbnRJZCkpIHtcbiAgICAgIFN0eWxlU2hlZXQubWFzdGVyLmRlZmVycmVkSW5qZWN0KGNvbXBvbmVudElkLCBbXSk7XG4gICAgfVxuICB9XG5cbiAgR2xvYmFsU3R5bGUucHJvdG90eXBlLmNyZWF0ZVN0eWxlcyA9IGZ1bmN0aW9uIGNyZWF0ZVN0eWxlcyhleGVjdXRpb25Db250ZXh0LCBzdHlsZVNoZWV0KSB7XG4gICAgdmFyIGZsYXRDU1MgPSBmbGF0dGVuKHRoaXMucnVsZXMsIGV4ZWN1dGlvbkNvbnRleHQsIHN0eWxlU2hlZXQpO1xuICAgIHZhciBjc3MgPSBzdHJpbmdpZnlSdWxlcyhmbGF0Q1NTLCAnJyk7XG5cbiAgICBzdHlsZVNoZWV0LmluamVjdCh0aGlzLmNvbXBvbmVudElkLCBjc3MpO1xuICB9O1xuXG4gIEdsb2JhbFN0eWxlLnByb3RvdHlwZS5yZW1vdmVTdHlsZXMgPSBmdW5jdGlvbiByZW1vdmVTdHlsZXMoc3R5bGVTaGVldCkge1xuICAgIHZhciBjb21wb25lbnRJZCA9IHRoaXMuY29tcG9uZW50SWQ7XG5cbiAgICBpZiAoc3R5bGVTaGVldC5oYXNJZChjb21wb25lbnRJZCkpIHtcbiAgICAgIHN0eWxlU2hlZXQucmVtb3ZlKGNvbXBvbmVudElkKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gVE9ETzogb3ZlcndyaXRlIGluLXBsYWNlIGluc3RlYWQgb2YgcmVtb3ZlK2NyZWF0ZT9cblxuXG4gIEdsb2JhbFN0eWxlLnByb3RvdHlwZS5yZW5kZXJTdHlsZXMgPSBmdW5jdGlvbiByZW5kZXJTdHlsZXMoZXhlY3V0aW9uQ29udGV4dCwgc3R5bGVTaGVldCkge1xuICAgIHRoaXMucmVtb3ZlU3R5bGVzKHN0eWxlU2hlZXQpO1xuICAgIHRoaXMuY3JlYXRlU3R5bGVzKGV4ZWN1dGlvbkNvbnRleHQsIHN0eWxlU2hlZXQpO1xuICB9O1xuXG4gIHJldHVybiBHbG9iYWxTdHlsZTtcbn0oKTtcblxuLy8gXG5cbi8vIHBsYWNlIG91ciBjYWNoZSBpbnRvIHNoYXJlZCBjb250ZXh0IHNvIGl0J2xsIHBlcnNpc3QgYmV0d2VlbiBITVJzXG5pZiAoSVNfQlJPV1NFUikge1xuICB3aW5kb3cuc2NDR1NITVJDYWNoZSA9IHt9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVHbG9iYWxTdHlsZShzdHJpbmdzKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBpbnRlcnBvbGF0aW9ucyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBpbnRlcnBvbGF0aW9uc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgcnVsZXMgPSBjc3MuYXBwbHkodW5kZWZpbmVkLCBbc3RyaW5nc10uY29uY2F0KGludGVycG9sYXRpb25zKSk7XG4gIHZhciBpZCA9ICdzYy1nbG9iYWwtJyArIG11cm11cmhhc2goSlNPTi5zdHJpbmdpZnkocnVsZXMpKTtcbiAgdmFyIHN0eWxlID0gbmV3IEdsb2JhbFN0eWxlKHJ1bGVzLCBpZCk7XG5cbiAgdmFyIEdsb2JhbFN0eWxlQ29tcG9uZW50ID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBpbmhlcml0cyhHbG9iYWxTdHlsZUNvbXBvbmVudCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBHbG9iYWxTdHlsZUNvbXBvbmVudChwcm9wcykge1xuICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgR2xvYmFsU3R5bGVDb21wb25lbnQpO1xuXG4gICAgICB2YXIgX3RoaXMgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICB2YXIgX3RoaXMkY29uc3RydWN0b3IgPSBfdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBnbG9iYWxTdHlsZSA9IF90aGlzJGNvbnN0cnVjdG9yLmdsb2JhbFN0eWxlLFxuICAgICAgICAgIHN0eWxlZENvbXBvbmVudElkID0gX3RoaXMkY29uc3RydWN0b3Iuc3R5bGVkQ29tcG9uZW50SWQ7XG5cblxuICAgICAgaWYgKElTX0JST1dTRVIpIHtcbiAgICAgICAgd2luZG93LnNjQ0dTSE1SQ2FjaGVbc3R5bGVkQ29tcG9uZW50SWRdID0gKHdpbmRvdy5zY0NHU0hNUkNhY2hlW3N0eWxlZENvbXBvbmVudElkXSB8fCAwKSArIDE7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogVGhpcyBmaXhlcyBITVIgY29tcGF0aWJpbGl0eS4gRG9uJ3QgYXNrIG1lIHdoeSwgYnV0IHRoaXMgY29tYmluYXRpb24gb2ZcbiAgICAgICAqIGNhY2hpbmcgdGhlIGNsb3N1cmUgdmFyaWFibGVzIHZpYSBzdGF0aWNzIGFuZCB0aGVuIHBlcnNpc3RpbmcgdGhlIHN0YXRpY3MgaW5cbiAgICAgICAqIHN0YXRlIHdvcmtzIGFjcm9zcyBITVIgd2hlcmUgbm8gb3RoZXIgY29tYmluYXRpb24gZGlkLiDCr1xcXyjjg4QpXy/Cr1xuICAgICAgICovXG4gICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgZ2xvYmFsU3R5bGU6IGdsb2JhbFN0eWxlLFxuICAgICAgICBzdHlsZWRDb21wb25lbnRJZDogc3R5bGVkQ29tcG9uZW50SWRcbiAgICAgIH07XG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgR2xvYmFsU3R5bGVDb21wb25lbnQucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBpZiAod2luZG93LnNjQ0dTSE1SQ2FjaGVbdGhpcy5zdGF0ZS5zdHlsZWRDb21wb25lbnRJZF0pIHtcbiAgICAgICAgd2luZG93LnNjQ0dTSE1SQ2FjaGVbdGhpcy5zdGF0ZS5zdHlsZWRDb21wb25lbnRJZF0gLT0gMTtcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogRGVwZW5kaW5nIG9uIHRoZSBvcmRlciBcInJlbmRlclwiIGlzIGNhbGxlZCB0aGlzIGNhbiBjYXVzZSB0aGUgc3R5bGVzIHRvIGJlIGxvc3RcbiAgICAgICAqIHVudGlsIHRoZSBuZXh0IHJlbmRlciBwYXNzIG9mIHRoZSByZW1haW5pbmcgaW5zdGFuY2UsIHdoaWNoIG1heVxuICAgICAgICogbm90IGJlIGltbWVkaWF0ZS5cbiAgICAgICAqL1xuICAgICAgaWYgKHdpbmRvdy5zY0NHU0hNUkNhY2hlW3RoaXMuc3RhdGUuc3R5bGVkQ29tcG9uZW50SWRdID09PSAwKSB7XG4gICAgICAgIHRoaXMuc3RhdGUuZ2xvYmFsU3R5bGUucmVtb3ZlU3R5bGVzKHRoaXMuc3R5bGVTaGVldCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIEdsb2JhbFN0eWxlQ29tcG9uZW50LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgUmVhY3QuQ2hpbGRyZW4uY291bnQodGhpcy5wcm9wcy5jaGlsZHJlbikpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgY29uc29sZS53YXJuKCdUaGUgZ2xvYmFsIHN0eWxlIGNvbXBvbmVudCAnICsgdGhpcy5zdGF0ZS5zdHlsZWRDb21wb25lbnRJZCArICcgd2FzIGdpdmVuIGNoaWxkIEpTWC4gY3JlYXRlR2xvYmFsU3R5bGUgZG9lcyBub3QgcmVuZGVyIGNoaWxkcmVuLicpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgU3R5bGVTaGVldENvbnN1bWVyLFxuICAgICAgICBudWxsLFxuICAgICAgICBmdW5jdGlvbiAoc3R5bGVTaGVldCkge1xuICAgICAgICAgIF90aGlzMi5zdHlsZVNoZWV0ID0gc3R5bGVTaGVldCB8fCBTdHlsZVNoZWV0Lm1hc3RlcjtcblxuICAgICAgICAgIHZhciBnbG9iYWxTdHlsZSA9IF90aGlzMi5zdGF0ZS5nbG9iYWxTdHlsZTtcblxuXG4gICAgICAgICAgaWYgKGdsb2JhbFN0eWxlLmlzU3RhdGljKSB7XG4gICAgICAgICAgICBnbG9iYWxTdHlsZS5yZW5kZXJTdHlsZXMoU1RBVElDX0VYRUNVVElPTl9DT05URVhULCBfdGhpczIuc3R5bGVTaGVldCk7XG5cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgVGhlbWVDb25zdW1lcixcbiAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgZnVuY3Rpb24gKHRoZW1lKSB7XG4gICAgICAgICAgICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgICAgICAgICAgIHZhciBkZWZhdWx0UHJvcHMgPSBfdGhpczIuY29uc3RydWN0b3IuZGVmYXVsdFByb3BzO1xuXG5cbiAgICAgICAgICAgICAgICB2YXIgY29udGV4dCA9IF9leHRlbmRzKHt9LCBfdGhpczIucHJvcHMpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGVtZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnRleHQudGhlbWUgPSBkZXRlcm1pbmVUaGVtZShfdGhpczIucHJvcHMsIHRoZW1lLCBkZWZhdWx0UHJvcHMpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGdsb2JhbFN0eWxlLnJlbmRlclN0eWxlcyhjb250ZXh0LCBfdGhpczIuc3R5bGVTaGVldCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfTtcblxuICAgIHJldHVybiBHbG9iYWxTdHlsZUNvbXBvbmVudDtcbiAgfShSZWFjdC5Db21wb25lbnQpO1xuXG4gIEdsb2JhbFN0eWxlQ29tcG9uZW50Lmdsb2JhbFN0eWxlID0gc3R5bGU7XG4gIEdsb2JhbFN0eWxlQ29tcG9uZW50LnN0eWxlZENvbXBvbmVudElkID0gaWQ7XG5cblxuICByZXR1cm4gR2xvYmFsU3R5bGVDb21wb25lbnQ7XG59XG5cbi8vIFxuXG52YXIgcmVwbGFjZVdoaXRlc3BhY2UgPSBmdW5jdGlvbiByZXBsYWNlV2hpdGVzcGFjZShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHN8XFxcXG4vZywgJycpO1xufTtcblxuZnVuY3Rpb24ga2V5ZnJhbWVzKHN0cmluZ3MpIHtcbiAgLyogV2FybmluZyBpZiB5b3UndmUgdXNlZCBrZXlmcmFtZXMgb24gUmVhY3QgTmF0aXZlICovXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLndhcm4oJ2BrZXlmcmFtZXNgIGNhbm5vdCBiZSB1c2VkIG9uIFJlYWN0TmF0aXZlLCBvbmx5IG9uIHRoZSB3ZWIuIFRvIGRvIGFuaW1hdGlvbiBpbiBSZWFjdE5hdGl2ZSBwbGVhc2UgdXNlIEFuaW1hdGVkLicpO1xuICB9XG5cbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGludGVycG9sYXRpb25zID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGludGVycG9sYXRpb25zW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciBydWxlcyA9IGNzcy5hcHBseSh1bmRlZmluZWQsIFtzdHJpbmdzXS5jb25jYXQoaW50ZXJwb2xhdGlvbnMpKTtcblxuICB2YXIgbmFtZSA9IGdlbmVyYXRlQWxwaGFiZXRpY05hbWUobXVybXVyaGFzaChyZXBsYWNlV2hpdGVzcGFjZShKU09OLnN0cmluZ2lmeShydWxlcykpKSk7XG5cbiAgcmV0dXJuIG5ldyBLZXlmcmFtZXMobmFtZSwgc3RyaW5naWZ5UnVsZXMocnVsZXMsIG5hbWUsICdAa2V5ZnJhbWVzJykpO1xufVxuXG4vLyBcblxudmFyIHdpdGhUaGVtZSA9IChmdW5jdGlvbiAoQ29tcG9uZW50JCQxKSB7XG4gIHZhciBXaXRoVGhlbWUgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBUaGVtZUNvbnN1bWVyLFxuICAgICAgbnVsbCxcbiAgICAgIGZ1bmN0aW9uICh0aGVtZSkge1xuICAgICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICAgIHZhciBkZWZhdWx0UHJvcHMgPSBDb21wb25lbnQkJDEuZGVmYXVsdFByb3BzO1xuXG4gICAgICAgIHZhciB0aGVtZVByb3AgPSBkZXRlcm1pbmVUaGVtZShwcm9wcywgdGhlbWUsIGRlZmF1bHRQcm9wcyk7XG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdGhlbWVQcm9wID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUud2FybignW3dpdGhUaGVtZV0gWW91IGFyZSBub3QgdXNpbmcgYSBUaGVtZVByb3ZpZGVyIG5vciBwYXNzaW5nIGEgdGhlbWUgcHJvcCBvciBhIHRoZW1lIGluIGRlZmF1bHRQcm9wcyBpbiBjb21wb25lbnQgY2xhc3MgXCInICsgZ2V0Q29tcG9uZW50TmFtZShDb21wb25lbnQkJDEpICsgJ1wiJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQkJDEsIF9leHRlbmRzKHt9LCBwcm9wcywgeyB0aGVtZTogdGhlbWVQcm9wLCByZWY6IHJlZiB9KSk7XG4gICAgICB9XG4gICAgKTtcbiAgfSk7XG5cbiAgaG9pc3ROb25SZWFjdFN0YXRpY3MoV2l0aFRoZW1lLCBDb21wb25lbnQkJDEpO1xuXG4gIFdpdGhUaGVtZS5kaXNwbGF5TmFtZSA9ICdXaXRoVGhlbWUoJyArIGdldENvbXBvbmVudE5hbWUoQ29tcG9uZW50JCQxKSArICcpJztcblxuICByZXR1cm4gV2l0aFRoZW1lO1xufSk7XG5cbi8vIFxuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xudmFyIF9fRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9IQVVOVEVEX0JZX1NQT09LWV9HSE9TVFMgPSB7XG4gIFN0eWxlU2hlZXQ6IFN0eWxlU2hlZXRcbn07XG5cbi8vIFxuXG4vKiBXYXJuaW5nIGlmIHlvdSd2ZSBpbXBvcnRlZCB0aGlzIGZpbGUgb24gUmVhY3QgTmF0aXZlICovXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ1JlYWN0TmF0aXZlJykge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICBjb25zb2xlLndhcm4oXCJJdCBsb29rcyBsaWtlIHlvdSd2ZSBpbXBvcnRlZCAnc3R5bGVkLWNvbXBvbmVudHMnIG9uIFJlYWN0IE5hdGl2ZS5cXG5cIiArIFwiUGVyaGFwcyB5b3UncmUgbG9va2luZyB0byBpbXBvcnQgJ3N0eWxlZC1jb21wb25lbnRzL25hdGl2ZSc/XFxuXCIgKyAnUmVhZCBtb3JlIGFib3V0IHRoaXMgYXQgaHR0cHM6Ly93d3cuc3R5bGVkLWNvbXBvbmVudHMuY29tL2RvY3MvYmFzaWNzI3JlYWN0LW5hdGl2ZScpO1xufVxuXG4vKiBXYXJuaW5nIGlmIHRoZXJlIGFyZSBzZXZlcmFsIGluc3RhbmNlcyBvZiBzdHlsZWQtY29tcG9uZW50cyAqL1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0JyAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbmF2aWdhdG9yLnVzZXJBZ2VudCA9PT0gJ3N0cmluZycgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdOb2RlLmpzJykgPT09IC0xICYmIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignanNkb20nKSA9PT0gLTEpIHtcbiAgd2luZG93WydfX3N0eWxlZC1jb21wb25lbnRzLWluaXRfXyddID0gd2luZG93WydfX3N0eWxlZC1jb21wb25lbnRzLWluaXRfXyddIHx8IDA7XG5cbiAgaWYgKHdpbmRvd1snX19zdHlsZWQtY29tcG9uZW50cy1pbml0X18nXSA9PT0gMSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS53YXJuKFwiSXQgbG9va3MgbGlrZSB0aGVyZSBhcmUgc2V2ZXJhbCBpbnN0YW5jZXMgb2YgJ3N0eWxlZC1jb21wb25lbnRzJyBpbml0aWFsaXplZCBpbiB0aGlzIGFwcGxpY2F0aW9uLiBcIiArICdUaGlzIG1heSBjYXVzZSBkeW5hbWljIHN0eWxlcyBub3QgcmVuZGVyaW5nIHByb3Blcmx5LCBlcnJvcnMgaGFwcGVuaW5nIGR1cmluZyByZWh5ZHJhdGlvbiBwcm9jZXNzICcgKyAnYW5kIG1ha2VzIHlvdXIgYXBwbGljYXRpb24gYmlnZ2VyIHdpdGhvdXQgYSBnb29kIHJlYXNvbi5cXG5cXG4nICsgJ1NlZSBodHRwczovL3MtYy5zaC8yQkFYemVkIGZvciBtb3JlIGluZm8uJyk7XG4gIH1cblxuICB3aW5kb3dbJ19fc3R5bGVkLWNvbXBvbmVudHMtaW5pdF9fJ10gKz0gMTtcbn1cblxuLy9cblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVkO1xuZXhwb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUsIGNzcywgaXNTdHlsZWRDb21wb25lbnQsIGtleWZyYW1lcywgU2VydmVyU3R5bGVTaGVldCwgU3R5bGVTaGVldENvbnN1bWVyLCBTdHlsZVNoZWV0Q29udGV4dCwgU3R5bGVTaGVldE1hbmFnZXIsIFRoZW1lQ29uc3VtZXIsIFRoZW1lQ29udGV4dCwgVGhlbWVQcm92aWRlciwgd2l0aFRoZW1lLCBfX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfSEFVTlRFRF9CWV9TUE9PS1lfR0hPU1RTIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHlsZWQtY29tcG9uZW50cy5icm93c2VyLmVzbS5qcy5tYXBcbiIsIihmdW5jdGlvbiAoZmFjdG9yeSkge1xuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyAobW9kdWxlWydleHBvcnRzJ10gPSBmYWN0b3J5KCkpIDpcblx0XHR0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZVsnYW1kJ10gPyBkZWZpbmUoZmFjdG9yeSgpKSA6XG5cdFx0XHQod2luZG93WydzdHlsaXNSdWxlU2hlZXQnXSA9IGZhY3RvcnkoKSlcbn0oZnVuY3Rpb24gKCkge1xuXG5cdCd1c2Ugc3RyaWN0J1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5zZXJ0UnVsZSkge1xuXHRcdHZhciBkZWxpbWl0ZXIgPSAnLyp8Ki8nXG5cdFx0dmFyIG5lZWRsZSA9IGRlbGltaXRlcisnfSdcblxuXHRcdGZ1bmN0aW9uIHRvU2hlZXQgKGJsb2NrKSB7XG5cdFx0XHRpZiAoYmxvY2spXG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0aW5zZXJ0UnVsZShibG9jayArICd9Jylcblx0XHRcdFx0fSBjYXRjaCAoZSkge31cblx0XHR9XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24gcnVsZVNoZWV0IChjb250ZXh0LCBjb250ZW50LCBzZWxlY3RvcnMsIHBhcmVudHMsIGxpbmUsIGNvbHVtbiwgbGVuZ3RoLCBucywgZGVwdGgsIGF0KSB7XG5cdFx0XHRzd2l0Y2ggKGNvbnRleHQpIHtcblx0XHRcdFx0Ly8gcHJvcGVydHlcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdC8vIEBpbXBvcnRcblx0XHRcdFx0XHRpZiAoZGVwdGggPT09IDAgJiYgY29udGVudC5jaGFyQ29kZUF0KDApID09PSA2NClcblx0XHRcdFx0XHRcdHJldHVybiBpbnNlcnRSdWxlKGNvbnRlbnQrJzsnKSwgJydcblx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHQvLyBzZWxlY3RvclxuXHRcdFx0XHRjYXNlIDI6XG5cdFx0XHRcdFx0aWYgKG5zID09PSAwKVxuXHRcdFx0XHRcdFx0cmV0dXJuIGNvbnRlbnQgKyBkZWxpbWl0ZXJcblx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHQvLyBhdC1ydWxlXG5cdFx0XHRcdGNhc2UgMzpcblx0XHRcdFx0XHRzd2l0Y2ggKG5zKSB7XG5cdFx0XHRcdFx0XHQvLyBAZm9udC1mYWNlLCBAcGFnZVxuXHRcdFx0XHRcdFx0Y2FzZSAxMDI6XG5cdFx0XHRcdFx0XHRjYXNlIDExMjpcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGluc2VydFJ1bGUoc2VsZWN0b3JzWzBdK2NvbnRlbnQpLCAnJ1xuXHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGNvbnRlbnQgKyAoYXQgPT09IDAgPyBkZWxpbWl0ZXIgOiAnJylcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGNhc2UgLTI6XG5cdFx0XHRcdFx0Y29udGVudC5zcGxpdChuZWVkbGUpLmZvckVhY2godG9TaGVldClcblx0XHRcdH1cblx0XHR9XG5cdH1cbn0pKVxuIiwiIWZ1bmN0aW9uKGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUobnVsbCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShlKG51bGwpKTp3aW5kb3cuc3R5bGlzPWUobnVsbCl9KGZ1bmN0aW9uIGUoYSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9L15cXDArL2csYz0vW1xcMFxcclxcZl0vZyxzPS86ICovZyx0PS96b298Z3JhLyxpPS8oWyw6IF0pKHRyYW5zZm9ybSkvZyxmPS8sK1xccyooPyFbXihdKlspXSkvZyxuPS8gK1xccyooPyFbXihdKlspXSkvZyxsPS8gKltcXDBdICovZyxvPS8sXFxyKz8vZyxoPS8oW1xcdFxcclxcbiBdKSpcXGY/Ji9nLHU9LzpnbG9iYWxcXCgoKD86W15cXChcXClcXFtcXF1dKnxcXFsuKlxcXXxcXChbXlxcKFxcKV0qXFwpKSopXFwpL2csZD0vXFxXKy9nLGI9L0Aoa1xcdyspXFxzKihcXFMqKVxccyovLHA9Lzo6KHBsYWNlKS9nLGs9LzoocmVhZC1vbmx5KS9nLGc9L1xccysoPz1be1xcXTs9Oj5dKS9nLEE9LyhbW309Oj5dKVxccysvZyxDPS8oXFx7W157XSs/KTsoPz1cXH0pL2csdz0vXFxzezIsfS9nLHY9LyhbXlxcKF0pKDorKSAqL2csbT0vW3N2aF1cXHcrLVt0YmxyXXsyfS8seD0vXFwoXFxzKiguKilcXHMqXFwpL2csJD0vKFtcXHNcXFNdKj8pOy9nLHk9Ly1zZWxmfGZsZXgtL2csTz0vW15dKj8oOltycF1bZWxdYVtcXHctXSspW15dKi8saj0vc3RyZXRjaHw6XFxzKlxcdytcXC0oPzpjb250ZXxhdmFpbCkvLHo9LyhbXi1dKShpbWFnZS1zZXRcXCgpLyxOPVwiLXdlYmtpdC1cIixTPVwiLW1vei1cIixGPVwiLW1zLVwiLFc9NTkscT0xMjUsQj0xMjMsRD00MCxFPTQxLEc9OTEsSD05MyxJPTEwLEo9MTMsSz05LEw9NjQsTT0zMixQPTM4LFE9NDUsUj05NSxUPTQyLFU9NDQsVj01OCxYPTM5LFk9MzQsWj00NyxfPTYyLGVlPTQzLGFlPTEyNixyZT0wLGNlPTEyLHNlPTExLHRlPTEwNyxpZT0xMDksZmU9MTE1LG5lPTExMixsZT0xMTEsb2U9MTA1LGhlPTk5LHVlPTEwMCxkZT0xMTIsYmU9MSxwZT0xLGtlPTAsZ2U9MSxBZT0xLENlPTEsd2U9MCx2ZT0wLG1lPTAseGU9W10sJGU9W10seWU9MCxPZT1udWxsLGplPS0yLHplPS0xLE5lPTAsU2U9MSxGZT0yLFdlPTMscWU9MCxCZT0xLERlPVwiXCIsRWU9XCJcIixHZT1cIlwiO2Z1bmN0aW9uIEhlKGUsYSxzLHQsaSl7Zm9yKHZhciBmLG4sbz0wLGg9MCx1PTAsZD0wLGc9MCxBPTAsQz0wLHc9MCxtPTAsJD0wLHk9MCxPPTAsaj0wLHo9MCxSPTAsd2U9MCwkZT0wLE9lPTAsamU9MCx6ZT1zLmxlbmd0aCxKZT16ZS0xLFJlPVwiXCIsVGU9XCJcIixVZT1cIlwiLFZlPVwiXCIsWGU9XCJcIixZZT1cIlwiO1I8emU7KXtpZihDPXMuY2hhckNvZGVBdChSKSxSPT09SmUpaWYoaCtkK3UrbyE9PTApe2lmKDAhPT1oKUM9aD09PVo/STpaO2Q9dT1vPTAsemUrKyxKZSsrfWlmKGgrZCt1K289PT0wKXtpZihSPT09SmUpe2lmKHdlPjApVGU9VGUucmVwbGFjZShjLFwiXCIpO2lmKFRlLnRyaW0oKS5sZW5ndGg+MCl7c3dpdGNoKEMpe2Nhc2UgTTpjYXNlIEs6Y2FzZSBXOmNhc2UgSjpjYXNlIEk6YnJlYWs7ZGVmYXVsdDpUZSs9cy5jaGFyQXQoUil9Qz1XfX1pZigxPT09JGUpc3dpdGNoKEMpe2Nhc2UgQjpjYXNlIHE6Y2FzZSBXOmNhc2UgWTpjYXNlIFg6Y2FzZSBEOmNhc2UgRTpjYXNlIFU6JGU9MDtjYXNlIEs6Y2FzZSBKOmNhc2UgSTpjYXNlIE06YnJlYWs7ZGVmYXVsdDpmb3IoJGU9MCxqZT1SLGc9QyxSLS0sQz1XO2plPHplOylzd2l0Y2gocy5jaGFyQ29kZUF0KGplKyspKXtjYXNlIEk6Y2FzZSBKOmNhc2UgVzorK1IsQz1nLGplPXplO2JyZWFrO2Nhc2UgVjppZih3ZT4wKSsrUixDPWc7Y2FzZSBCOmplPXplfX1zd2l0Y2goQyl7Y2FzZSBCOmZvcihnPShUZT1UZS50cmltKCkpLmNoYXJDb2RlQXQoMCkseT0xLGplPSsrUjtSPHplOyl7c3dpdGNoKEM9cy5jaGFyQ29kZUF0KFIpKXtjYXNlIEI6eSsrO2JyZWFrO2Nhc2UgcTp5LS07YnJlYWs7Y2FzZSBaOnN3aXRjaChBPXMuY2hhckNvZGVBdChSKzEpKXtjYXNlIFQ6Y2FzZSBaOlI9UWUoQSxSLEplLHMpfWJyZWFrO2Nhc2UgRzpDKys7Y2FzZSBEOkMrKztjYXNlIFk6Y2FzZSBYOmZvcig7UisrPEplJiZzLmNoYXJDb2RlQXQoUikhPT1DOyk7fWlmKDA9PT15KWJyZWFrO1IrK31pZihVZT1zLnN1YnN0cmluZyhqZSxSKSxnPT09cmUpZz0oVGU9VGUucmVwbGFjZShyLFwiXCIpLnRyaW0oKSkuY2hhckNvZGVBdCgwKTtzd2l0Y2goZyl7Y2FzZSBMOmlmKHdlPjApVGU9VGUucmVwbGFjZShjLFwiXCIpO3N3aXRjaChBPVRlLmNoYXJDb2RlQXQoMSkpe2Nhc2UgdWU6Y2FzZSBpZTpjYXNlIGZlOmNhc2UgUTpmPWE7YnJlYWs7ZGVmYXVsdDpmPXhlfWlmKGplPShVZT1IZShhLGYsVWUsQSxpKzEpKS5sZW5ndGgsbWU+MCYmMD09PWplKWplPVRlLmxlbmd0aDtpZih5ZT4wKWlmKGY9SWUoeGUsVGUsT2UpLG49UGUoV2UsVWUsZixhLHBlLGJlLGplLEEsaSx0KSxUZT1mLmpvaW4oXCJcIiksdm9pZCAwIT09bilpZigwPT09KGplPShVZT1uLnRyaW0oKSkubGVuZ3RoKSlBPTAsVWU9XCJcIjtpZihqZT4wKXN3aXRjaChBKXtjYXNlIGZlOlRlPVRlLnJlcGxhY2UoeCxNZSk7Y2FzZSB1ZTpjYXNlIGllOmNhc2UgUTpVZT1UZStcIntcIitVZStcIn1cIjticmVhaztjYXNlIHRlOmlmKFVlPShUZT1UZS5yZXBsYWNlKGIsXCIkMSAkMlwiKyhCZT4wP0RlOlwiXCIpKSkrXCJ7XCIrVWUrXCJ9XCIsMT09PUFlfHwyPT09QWUmJkxlKFwiQFwiK1VlLDMpKVVlPVwiQFwiK04rVWUrXCJAXCIrVWU7ZWxzZSBVZT1cIkBcIitVZTticmVhaztkZWZhdWx0OmlmKFVlPVRlK1VlLHQ9PT1kZSlWZSs9VWUsVWU9XCJcIn1lbHNlIFVlPVwiXCI7YnJlYWs7ZGVmYXVsdDpVZT1IZShhLEllKGEsVGUsT2UpLFVlLHQsaSsxKX1YZSs9VWUsTz0wLCRlPTAsej0wLHdlPTAsT2U9MCxqPTAsVGU9XCJcIixVZT1cIlwiLEM9cy5jaGFyQ29kZUF0KCsrUik7YnJlYWs7Y2FzZSBxOmNhc2UgVzppZigoamU9KFRlPSh3ZT4wP1RlLnJlcGxhY2UoYyxcIlwiKTpUZSkudHJpbSgpKS5sZW5ndGgpPjEpe2lmKDA9PT16KWlmKChnPVRlLmNoYXJDb2RlQXQoMCkpPT09UXx8Zz45NiYmZzwxMjMpamU9KFRlPVRlLnJlcGxhY2UoXCIgXCIsXCI6XCIpKS5sZW5ndGg7aWYoeWU+MClpZih2b2lkIDAhPT0obj1QZShTZSxUZSxhLGUscGUsYmUsVmUubGVuZ3RoLHQsaSx0KSkpaWYoMD09PShqZT0oVGU9bi50cmltKCkpLmxlbmd0aCkpVGU9XCJcXDBcXDBcIjtzd2l0Y2goZz1UZS5jaGFyQ29kZUF0KDApLEE9VGUuY2hhckNvZGVBdCgxKSxnKXtjYXNlIHJlOmJyZWFrO2Nhc2UgTDppZihBPT09b2V8fEE9PT1oZSl7WWUrPVRlK3MuY2hhckF0KFIpO2JyZWFrfWRlZmF1bHQ6aWYoVGUuY2hhckNvZGVBdChqZS0xKT09PVYpYnJlYWs7VmUrPUtlKFRlLGcsQSxUZS5jaGFyQ29kZUF0KDIpKX19Tz0wLCRlPTAsej0wLHdlPTAsT2U9MCxUZT1cIlwiLEM9cy5jaGFyQ29kZUF0KCsrUil9fXN3aXRjaChDKXtjYXNlIEo6Y2FzZSBJOmlmKGgrZCt1K28rdmU9PT0wKXN3aXRjaCgkKXtjYXNlIEU6Y2FzZSBYOmNhc2UgWTpjYXNlIEw6Y2FzZSBhZTpjYXNlIF86Y2FzZSBUOmNhc2UgZWU6Y2FzZSBaOmNhc2UgUTpjYXNlIFY6Y2FzZSBVOmNhc2UgVzpjYXNlIEI6Y2FzZSBxOmJyZWFrO2RlZmF1bHQ6aWYoej4wKSRlPTF9aWYoaD09PVopaD0wO2Vsc2UgaWYoZ2UrTz09PTAmJnQhPT10ZSYmVGUubGVuZ3RoPjApd2U9MSxUZSs9XCJcXDBcIjtpZih5ZSpxZT4wKVBlKE5lLFRlLGEsZSxwZSxiZSxWZS5sZW5ndGgsdCxpLHQpO2JlPTEscGUrKzticmVhaztjYXNlIFc6Y2FzZSBxOmlmKGgrZCt1K289PT0wKXtiZSsrO2JyZWFrfWRlZmF1bHQ6c3dpdGNoKGJlKyssUmU9cy5jaGFyQXQoUiksQyl7Y2FzZSBLOmNhc2UgTTppZihkK28raD09PTApc3dpdGNoKHcpe2Nhc2UgVTpjYXNlIFY6Y2FzZSBLOmNhc2UgTTpSZT1cIlwiO2JyZWFrO2RlZmF1bHQ6aWYoQyE9PU0pUmU9XCIgXCJ9YnJlYWs7Y2FzZSByZTpSZT1cIlxcXFwwXCI7YnJlYWs7Y2FzZSBjZTpSZT1cIlxcXFxmXCI7YnJlYWs7Y2FzZSBzZTpSZT1cIlxcXFx2XCI7YnJlYWs7Y2FzZSBQOmlmKGQraCtvPT09MCYmZ2U+MClPZT0xLHdlPTEsUmU9XCJcXGZcIitSZTticmVhaztjYXNlIDEwODppZihkK2grbytrZT09PTAmJno+MClzd2l0Y2goUi16KXtjYXNlIDI6aWYodz09PW5lJiZzLmNoYXJDb2RlQXQoUi0zKT09PVYpa2U9dztjYXNlIDg6aWYobT09PWxlKWtlPW19YnJlYWs7Y2FzZSBWOmlmKGQraCtvPT09MCl6PVI7YnJlYWs7Y2FzZSBVOmlmKGgrdStkK289PT0wKXdlPTEsUmUrPVwiXFxyXCI7YnJlYWs7Y2FzZSBZOmNhc2UgWDppZigwPT09aClkPWQ9PT1DPzA6MD09PWQ/QzpkO2JyZWFrO2Nhc2UgRzppZihkK2grdT09PTApbysrO2JyZWFrO2Nhc2UgSDppZihkK2grdT09PTApby0tO2JyZWFrO2Nhc2UgRTppZihkK2grbz09PTApdS0tO2JyZWFrO2Nhc2UgRDppZihkK2grbz09PTApe2lmKDA9PT1PKXN3aXRjaCgyKncrMyptKXtjYXNlIDUzMzpicmVhaztkZWZhdWx0Onk9MCxPPTF9dSsrfWJyZWFrO2Nhc2UgTDppZihoK3UrZCtvK3oraj09PTApaj0xO2JyZWFrO2Nhc2UgVDpjYXNlIFo6aWYoZCtvK3U+MClicmVhaztzd2l0Y2goaCl7Y2FzZSAwOnN3aXRjaCgyKkMrMypzLmNoYXJDb2RlQXQoUisxKSl7Y2FzZSAyMzU6aD1aO2JyZWFrO2Nhc2UgMjIwOmplPVIsaD1UfWJyZWFrO2Nhc2UgVDppZihDPT09WiYmdz09PVQmJmplKzIhPT1SKXtpZigzMz09PXMuY2hhckNvZGVBdChqZSsyKSlWZSs9cy5zdWJzdHJpbmcoamUsUisxKTtSZT1cIlwiLGg9MH19fWlmKDA9PT1oKXtpZihnZStkK28raj09PTAmJnQhPT10ZSYmQyE9PVcpc3dpdGNoKEMpe2Nhc2UgVTpjYXNlIGFlOmNhc2UgXzpjYXNlIGVlOmNhc2UgRTpjYXNlIEQ6aWYoMD09PU8pe3N3aXRjaCh3KXtjYXNlIEs6Y2FzZSBNOmNhc2UgSTpjYXNlIEo6UmUrPVwiXFwwXCI7YnJlYWs7ZGVmYXVsdDpSZT1cIlxcMFwiK1JlKyhDPT09VT9cIlwiOlwiXFwwXCIpfXdlPTF9ZWxzZSBzd2l0Y2goQyl7Y2FzZSBEOmlmKHorNz09PVImJjEwOD09PXcpej0wO089Kyt5O2JyZWFrO2Nhc2UgRTppZigwPT0oTz0tLXkpKXdlPTEsUmUrPVwiXFwwXCJ9YnJlYWs7Y2FzZSBLOmNhc2UgTTpzd2l0Y2godyl7Y2FzZSByZTpjYXNlIEI6Y2FzZSBxOmNhc2UgVzpjYXNlIFU6Y2FzZSBjZTpjYXNlIEs6Y2FzZSBNOmNhc2UgSTpjYXNlIEo6YnJlYWs7ZGVmYXVsdDppZigwPT09Tyl3ZT0xLFJlKz1cIlxcMFwifX1pZihUZSs9UmUsQyE9PU0mJkMhPT1LKSQ9Q319bT13LHc9QyxSKyt9aWYoamU9VmUubGVuZ3RoLG1lPjApaWYoMD09PWplJiYwPT09WGUubGVuZ3RoJiYwPT09YVswXS5sZW5ndGg9PWZhbHNlKWlmKHQhPT1pZXx8MT09PWEubGVuZ3RoJiYoZ2U+MD9FZTpHZSk9PT1hWzBdKWplPWEuam9pbihcIixcIikubGVuZ3RoKzI7aWYoamU+MCl7aWYoZj0wPT09Z2UmJnQhPT10ZT9mdW5jdGlvbihlKXtmb3IodmFyIGEscixzPTAsdD1lLmxlbmd0aCxpPUFycmF5KHQpO3M8dDsrK3Mpe2Zvcih2YXIgZj1lW3NdLnNwbGl0KGwpLG49XCJcIixvPTAsaD0wLHU9MCxkPTAsYj1mLmxlbmd0aDtvPGI7KytvKXtpZigwPT09KGg9KHI9ZltvXSkubGVuZ3RoKSYmYj4xKWNvbnRpbnVlO2lmKHU9bi5jaGFyQ29kZUF0KG4ubGVuZ3RoLTEpLGQ9ci5jaGFyQ29kZUF0KDApLGE9XCJcIiwwIT09bylzd2l0Y2godSl7Y2FzZSBUOmNhc2UgYWU6Y2FzZSBfOmNhc2UgZWU6Y2FzZSBNOmNhc2UgRDpicmVhaztkZWZhdWx0OmE9XCIgXCJ9c3dpdGNoKGQpe2Nhc2UgUDpyPWErRWU7Y2FzZSBhZTpjYXNlIF86Y2FzZSBlZTpjYXNlIE06Y2FzZSBFOmNhc2UgRDpicmVhaztjYXNlIEc6cj1hK3IrRWU7YnJlYWs7Y2FzZSBWOnN3aXRjaCgyKnIuY2hhckNvZGVBdCgxKSszKnIuY2hhckNvZGVBdCgyKSl7Y2FzZSA1MzA6aWYoQ2U+MCl7cj1hK3Iuc3Vic3RyaW5nKDgsaC0xKTticmVha31kZWZhdWx0OmlmKG88MXx8ZltvLTFdLmxlbmd0aDwxKXI9YStFZStyfWJyZWFrO2Nhc2UgVTphPVwiXCI7ZGVmYXVsdDppZihoPjEmJnIuaW5kZXhPZihcIjpcIik+MClyPWErci5yZXBsYWNlKHYsXCIkMVwiK0VlK1wiJDJcIik7ZWxzZSByPWErcitFZX1uKz1yfWlbc109bi5yZXBsYWNlKGMsXCJcIikudHJpbSgpfXJldHVybiBpfShhKTphLHllPjApaWYodm9pZCAwIT09KG49UGUoRmUsVmUsZixlLHBlLGJlLGplLHQsaSx0KSkmJjA9PT0oVmU9bikubGVuZ3RoKXJldHVybiBZZStWZStYZTtpZihWZT1mLmpvaW4oXCIsXCIpK1wie1wiK1ZlK1wifVwiLEFlKmtlIT0wKXtpZigyPT09QWUmJiFMZShWZSwyKSlrZT0wO3N3aXRjaChrZSl7Y2FzZSBsZTpWZT1WZS5yZXBsYWNlKGssXCI6XCIrUytcIiQxXCIpK1ZlO2JyZWFrO2Nhc2UgbmU6VmU9VmUucmVwbGFjZShwLFwiOjpcIitOK1wiaW5wdXQtJDFcIikrVmUucmVwbGFjZShwLFwiOjpcIitTK1wiJDFcIikrVmUucmVwbGFjZShwLFwiOlwiK0YrXCJpbnB1dC0kMVwiKStWZX1rZT0wfX1yZXR1cm4gWWUrVmUrWGV9ZnVuY3Rpb24gSWUoZSxhLHIpe3ZhciBjPWEudHJpbSgpLnNwbGl0KG8pLHM9Yyx0PWMubGVuZ3RoLGk9ZS5sZW5ndGg7c3dpdGNoKGkpe2Nhc2UgMDpjYXNlIDE6Zm9yKHZhciBmPTAsbj0wPT09aT9cIlwiOmVbMF0rXCIgXCI7Zjx0OysrZilzW2ZdPUplKG4sc1tmXSxyLGkpLnRyaW0oKTticmVhaztkZWZhdWx0OmY9MDt2YXIgbD0wO2ZvcihzPVtdO2Y8dDsrK2YpZm9yKHZhciBoPTA7aDxpOysraClzW2wrK109SmUoZVtoXStcIiBcIixjW2ZdLHIsaSkudHJpbSgpfXJldHVybiBzfWZ1bmN0aW9uIEplKGUsYSxyLGMpe3ZhciBzPWEsdD1zLmNoYXJDb2RlQXQoMCk7aWYodDwzMyl0PShzPXMudHJpbSgpKS5jaGFyQ29kZUF0KDApO3N3aXRjaCh0KXtjYXNlIFA6c3dpdGNoKGdlK2Mpe2Nhc2UgMDpjYXNlIDE6aWYoMD09PWUudHJpbSgpLmxlbmd0aClicmVhaztkZWZhdWx0OnJldHVybiBzLnJlcGxhY2UoaCxcIiQxXCIrZS50cmltKCkpfWJyZWFrO2Nhc2UgVjpzd2l0Y2gocy5jaGFyQ29kZUF0KDEpKXtjYXNlIDEwMzppZihDZT4wJiZnZT4wKXJldHVybiBzLnJlcGxhY2UodSxcIiQxXCIpLnJlcGxhY2UoaCxcIiQxXCIrR2UpO2JyZWFrO2RlZmF1bHQ6cmV0dXJuIGUudHJpbSgpK3MucmVwbGFjZShoLFwiJDFcIitlLnRyaW0oKSl9ZGVmYXVsdDppZihyKmdlPjAmJnMuaW5kZXhPZihcIlxcZlwiKT4wKXJldHVybiBzLnJlcGxhY2UoaCwoZS5jaGFyQ29kZUF0KDApPT09Vj9cIlwiOlwiJDFcIikrZS50cmltKCkpfXJldHVybiBlK3N9ZnVuY3Rpb24gS2UoZSxhLHIsYyl7dmFyIGwsbz0wLGg9ZStcIjtcIix1PTIqYSszKnIrNCpjO2lmKDk0ND09PXUpcmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciBhPWUubGVuZ3RoLHI9ZS5pbmRleE9mKFwiOlwiLDkpKzEsYz1lLnN1YnN0cmluZygwLHIpLnRyaW0oKSxzPWUuc3Vic3RyaW5nKHIsYS0xKS50cmltKCk7c3dpdGNoKGUuY2hhckNvZGVBdCg5KSpCZSl7Y2FzZSAwOmJyZWFrO2Nhc2UgUTppZigxMTAhPT1lLmNoYXJDb2RlQXQoMTApKWJyZWFrO2RlZmF1bHQ6Zm9yKHZhciB0PXMuc3BsaXQoKHM9XCJcIixmKSksaT0wLHI9MCxhPXQubGVuZ3RoO2k8YTtyPTAsKytpKXtmb3IodmFyIGw9dFtpXSxvPWwuc3BsaXQobik7bD1vW3JdOyl7dmFyIGg9bC5jaGFyQ29kZUF0KDApO2lmKDE9PT1CZSYmKGg+TCYmaDw5MHx8aD45NiYmaDwxMjN8fGg9PT1SfHxoPT09USYmbC5jaGFyQ29kZUF0KDEpIT09USkpc3dpdGNoKGlzTmFOKHBhcnNlRmxvYXQobCkpKygtMSE9PWwuaW5kZXhPZihcIihcIikpKXtjYXNlIDE6c3dpdGNoKGwpe2Nhc2VcImluZmluaXRlXCI6Y2FzZVwiYWx0ZXJuYXRlXCI6Y2FzZVwiYmFja3dhcmRzXCI6Y2FzZVwicnVubmluZ1wiOmNhc2VcIm5vcm1hbFwiOmNhc2VcImZvcndhcmRzXCI6Y2FzZVwiYm90aFwiOmNhc2VcIm5vbmVcIjpjYXNlXCJsaW5lYXJcIjpjYXNlXCJlYXNlXCI6Y2FzZVwiZWFzZS1pblwiOmNhc2VcImVhc2Utb3V0XCI6Y2FzZVwiZWFzZS1pbi1vdXRcIjpjYXNlXCJwYXVzZWRcIjpjYXNlXCJyZXZlcnNlXCI6Y2FzZVwiYWx0ZXJuYXRlLXJldmVyc2VcIjpjYXNlXCJpbmhlcml0XCI6Y2FzZVwiaW5pdGlhbFwiOmNhc2VcInVuc2V0XCI6Y2FzZVwic3RlcC1zdGFydFwiOmNhc2VcInN0ZXAtZW5kXCI6YnJlYWs7ZGVmYXVsdDpsKz1EZX19b1tyKytdPWx9cys9KDA9PT1pP1wiXCI6XCIsXCIpK28uam9pbihcIiBcIil9fWlmKHM9YytzK1wiO1wiLDE9PT1BZXx8Mj09PUFlJiZMZShzLDEpKXJldHVybiBOK3MrcztyZXR1cm4gc30oaCk7ZWxzZSBpZigwPT09QWV8fDI9PT1BZSYmIUxlKGgsMSkpcmV0dXJuIGg7c3dpdGNoKHUpe2Nhc2UgMTAxNTpyZXR1cm4gOTc9PT1oLmNoYXJDb2RlQXQoMTApP04raCtoOmg7Y2FzZSA5NTE6cmV0dXJuIDExNj09PWguY2hhckNvZGVBdCgzKT9OK2graDpoO2Nhc2UgOTYzOnJldHVybiAxMTA9PT1oLmNoYXJDb2RlQXQoNSk/TitoK2g6aDtjYXNlIDEwMDk6aWYoMTAwIT09aC5jaGFyQ29kZUF0KDQpKWJyZWFrO2Nhc2UgOTY5OmNhc2UgOTQyOnJldHVybiBOK2graDtjYXNlIDk3ODpyZXR1cm4gTitoK1MraCtoO2Nhc2UgMTAxOTpjYXNlIDk4MzpyZXR1cm4gTitoK1MraCtGK2graDtjYXNlIDg4MzppZihoLmNoYXJDb2RlQXQoOCk9PT1RKXJldHVybiBOK2graDtpZihoLmluZGV4T2YoXCJpbWFnZS1zZXQoXCIsMTEpPjApcmV0dXJuIGgucmVwbGFjZSh6LFwiJDFcIitOK1wiJDJcIikraDtyZXR1cm4gaDtjYXNlIDkzMjppZihoLmNoYXJDb2RlQXQoNCk9PT1RKXN3aXRjaChoLmNoYXJDb2RlQXQoNSkpe2Nhc2UgMTAzOnJldHVybiBOK1wiYm94LVwiK2gucmVwbGFjZShcIi1ncm93XCIsXCJcIikrTitoK0YraC5yZXBsYWNlKFwiZ3Jvd1wiLFwicG9zaXRpdmVcIikraDtjYXNlIDExNTpyZXR1cm4gTitoK0YraC5yZXBsYWNlKFwic2hyaW5rXCIsXCJuZWdhdGl2ZVwiKStoO2Nhc2UgOTg6cmV0dXJuIE4raCtGK2gucmVwbGFjZShcImJhc2lzXCIsXCJwcmVmZXJyZWQtc2l6ZVwiKStofXJldHVybiBOK2grRitoK2g7Y2FzZSA5NjQ6cmV0dXJuIE4raCtGK1wiZmxleC1cIitoK2g7Y2FzZSAxMDIzOmlmKDk5IT09aC5jaGFyQ29kZUF0KDgpKWJyZWFrO3JldHVybiBsPWguc3Vic3RyaW5nKGguaW5kZXhPZihcIjpcIiwxNSkpLnJlcGxhY2UoXCJmbGV4LVwiLFwiXCIpLnJlcGxhY2UoXCJzcGFjZS1iZXR3ZWVuXCIsXCJqdXN0aWZ5XCIpLE4rXCJib3gtcGFja1wiK2wrTitoK0YrXCJmbGV4LXBhY2tcIitsK2g7Y2FzZSAxMDA1OnJldHVybiB0LnRlc3QoaCk/aC5yZXBsYWNlKHMsXCI6XCIrTikraC5yZXBsYWNlKHMsXCI6XCIrUykraDpoO2Nhc2UgMWUzOnN3aXRjaChvPShsPWguc3Vic3RyaW5nKDEzKS50cmltKCkpLmluZGV4T2YoXCItXCIpKzEsbC5jaGFyQ29kZUF0KDApK2wuY2hhckNvZGVBdChvKSl7Y2FzZSAyMjY6bD1oLnJlcGxhY2UobSxcInRiXCIpO2JyZWFrO2Nhc2UgMjMyOmw9aC5yZXBsYWNlKG0sXCJ0Yi1ybFwiKTticmVhaztjYXNlIDIyMDpsPWgucmVwbGFjZShtLFwibHJcIik7YnJlYWs7ZGVmYXVsdDpyZXR1cm4gaH1yZXR1cm4gTitoK0YrbCtoO2Nhc2UgMTAxNzppZigtMT09PWguaW5kZXhPZihcInN0aWNreVwiLDkpKXJldHVybiBoO2Nhc2UgOTc1OnN3aXRjaChvPShoPWUpLmxlbmd0aC0xMCx1PShsPSgzMz09PWguY2hhckNvZGVBdChvKT9oLnN1YnN0cmluZygwLG8pOmgpLnN1YnN0cmluZyhlLmluZGV4T2YoXCI6XCIsNykrMSkudHJpbSgpKS5jaGFyQ29kZUF0KDApKygwfGwuY2hhckNvZGVBdCg3KSkpe2Nhc2UgMjAzOmlmKGwuY2hhckNvZGVBdCg4KTwxMTEpYnJlYWs7Y2FzZSAxMTU6aD1oLnJlcGxhY2UobCxOK2wpK1wiO1wiK2g7YnJlYWs7Y2FzZSAyMDc6Y2FzZSAxMDI6aD1oLnJlcGxhY2UobCxOKyh1PjEwMj9cImlubGluZS1cIjpcIlwiKStcImJveFwiKStcIjtcIitoLnJlcGxhY2UobCxOK2wpK1wiO1wiK2gucmVwbGFjZShsLEYrbCtcImJveFwiKStcIjtcIitofXJldHVybiBoK1wiO1wiO2Nhc2UgOTM4OmlmKGguY2hhckNvZGVBdCg1KT09PVEpc3dpdGNoKGguY2hhckNvZGVBdCg2KSl7Y2FzZSAxMDU6cmV0dXJuIGw9aC5yZXBsYWNlKFwiLWl0ZW1zXCIsXCJcIiksTitoK04rXCJib3gtXCIrbCtGK1wiZmxleC1cIitsK2g7Y2FzZSAxMTU6cmV0dXJuIE4raCtGK1wiZmxleC1pdGVtLVwiK2gucmVwbGFjZSh5LFwiXCIpK2g7ZGVmYXVsdDpyZXR1cm4gTitoK0YrXCJmbGV4LWxpbmUtcGFja1wiK2gucmVwbGFjZShcImFsaWduLWNvbnRlbnRcIixcIlwiKS5yZXBsYWNlKHksXCJcIikraH1icmVhaztjYXNlIDk3MzpjYXNlIDk4OTppZihoLmNoYXJDb2RlQXQoMykhPT1RfHwxMjI9PT1oLmNoYXJDb2RlQXQoNCkpYnJlYWs7Y2FzZSA5MzE6Y2FzZSA5NTM6aWYodHJ1ZT09PWoudGVzdChlKSlpZigxMTU9PT0obD1lLnN1YnN0cmluZyhlLmluZGV4T2YoXCI6XCIpKzEpKS5jaGFyQ29kZUF0KDApKXJldHVybiBLZShlLnJlcGxhY2UoXCJzdHJldGNoXCIsXCJmaWxsLWF2YWlsYWJsZVwiKSxhLHIsYykucmVwbGFjZShcIjpmaWxsLWF2YWlsYWJsZVwiLFwiOnN0cmV0Y2hcIik7ZWxzZSByZXR1cm4gaC5yZXBsYWNlKGwsTitsKStoLnJlcGxhY2UobCxTK2wucmVwbGFjZShcImZpbGwtXCIsXCJcIikpK2g7YnJlYWs7Y2FzZSA5NjI6aWYoaD1OK2grKDEwMj09PWguY2hhckNvZGVBdCg1KT9GK2g6XCJcIikraCxyK2M9PT0yMTEmJjEwNT09PWguY2hhckNvZGVBdCgxMykmJmguaW5kZXhPZihcInRyYW5zZm9ybVwiLDEwKT4wKXJldHVybiBoLnN1YnN0cmluZygwLGguaW5kZXhPZihcIjtcIiwyNykrMSkucmVwbGFjZShpLFwiJDFcIitOK1wiJDJcIikraH1yZXR1cm4gaH1mdW5jdGlvbiBMZShlLGEpe3ZhciByPWUuaW5kZXhPZigxPT09YT9cIjpcIjpcIntcIiksYz1lLnN1YnN0cmluZygwLDMhPT1hP3I6MTApLHM9ZS5zdWJzdHJpbmcocisxLGUubGVuZ3RoLTEpO3JldHVybiBPZSgyIT09YT9jOmMucmVwbGFjZShPLFwiJDFcIikscyxhKX1mdW5jdGlvbiBNZShlLGEpe3ZhciByPUtlKGEsYS5jaGFyQ29kZUF0KDApLGEuY2hhckNvZGVBdCgxKSxhLmNoYXJDb2RlQXQoMikpO3JldHVybiByIT09YStcIjtcIj9yLnJlcGxhY2UoJCxcIiBvciAoJDEpXCIpLnN1YnN0cmluZyg0KTpcIihcIithK1wiKVwifWZ1bmN0aW9uIFBlKGUsYSxyLGMscyx0LGksZixuLGwpe2Zvcih2YXIgbyxoPTAsdT1hO2g8eWU7KytoKXN3aXRjaChvPSRlW2hdLmNhbGwoVGUsZSx1LHIsYyxzLHQsaSxmLG4sbCkpe2Nhc2Ugdm9pZCAwOmNhc2UgZmFsc2U6Y2FzZSB0cnVlOmNhc2UgbnVsbDpicmVhaztkZWZhdWx0OnU9b31pZih1IT09YSlyZXR1cm4gdX1mdW5jdGlvbiBRZShlLGEscixjKXtmb3IodmFyIHM9YSsxO3M8cjsrK3Mpc3dpdGNoKGMuY2hhckNvZGVBdChzKSl7Y2FzZSBaOmlmKGU9PT1UKWlmKGMuY2hhckNvZGVBdChzLTEpPT09VCYmYSsyIT09cylyZXR1cm4gcysxO2JyZWFrO2Nhc2UgSTppZihlPT09WilyZXR1cm4gcysxfXJldHVybiBzfWZ1bmN0aW9uIFJlKGUpe2Zvcih2YXIgYSBpbiBlKXt2YXIgcj1lW2FdO3N3aXRjaChhKXtjYXNlXCJrZXlmcmFtZVwiOkJlPTB8cjticmVhaztjYXNlXCJnbG9iYWxcIjpDZT0wfHI7YnJlYWs7Y2FzZVwiY2FzY2FkZVwiOmdlPTB8cjticmVhaztjYXNlXCJjb21wcmVzc1wiOndlPTB8cjticmVhaztjYXNlXCJzZW1pY29sb25cIjp2ZT0wfHI7YnJlYWs7Y2FzZVwicHJlc2VydmVcIjptZT0wfHI7YnJlYWs7Y2FzZVwicHJlZml4XCI6aWYoT2U9bnVsbCwhcilBZT0wO2Vsc2UgaWYoXCJmdW5jdGlvblwiIT10eXBlb2YgcilBZT0xO2Vsc2UgQWU9MixPZT1yfX1yZXR1cm4gUmV9ZnVuY3Rpb24gVGUoYSxyKXtpZih2b2lkIDAhPT10aGlzJiZ0aGlzLmNvbnN0cnVjdG9yPT09VGUpcmV0dXJuIGUoYSk7dmFyIHM9YSx0PXMuY2hhckNvZGVBdCgwKTtpZih0PDMzKXQ9KHM9cy50cmltKCkpLmNoYXJDb2RlQXQoMCk7aWYoQmU+MClEZT1zLnJlcGxhY2UoZCx0PT09Rz9cIlwiOlwiLVwiKTtpZih0PTEsMT09PWdlKUdlPXM7ZWxzZSBFZT1zO3ZhciBpLGY9W0dlXTtpZih5ZT4wKWlmKHZvaWQgMCE9PShpPVBlKHplLHIsZixmLHBlLGJlLDAsMCwwLDApKSYmXCJzdHJpbmdcIj09dHlwZW9mIGkpcj1pO3ZhciBuPUhlKHhlLGYsciwwLDApO2lmKHllPjApaWYodm9pZCAwIT09KGk9UGUoamUsbixmLGYscGUsYmUsbi5sZW5ndGgsMCwwLDApKSYmXCJzdHJpbmdcIiE9dHlwZW9mKG49aSkpdD0wO3JldHVybiBEZT1cIlwiLEdlPVwiXCIsRWU9XCJcIixrZT0wLHBlPTEsYmU9MSx3ZSp0PT0wP246bi5yZXBsYWNlKGMsXCJcIikucmVwbGFjZShnLFwiXCIpLnJlcGxhY2UoQSxcIiQxXCIpLnJlcGxhY2UoQyxcIiQxXCIpLnJlcGxhY2UodyxcIiBcIil9aWYoVGUudXNlPWZ1bmN0aW9uIGUoYSl7c3dpdGNoKGEpe2Nhc2Ugdm9pZCAwOmNhc2UgbnVsbDp5ZT0kZS5sZW5ndGg9MDticmVhaztkZWZhdWx0OmlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGEpJGVbeWUrK109YTtlbHNlIGlmKFwib2JqZWN0XCI9PXR5cGVvZiBhKWZvcih2YXIgcj0wLGM9YS5sZW5ndGg7cjxjOysrcillKGFbcl0pO2Vsc2UgcWU9MHwhIWF9cmV0dXJuIGV9LFRlLnNldD1SZSx2b2lkIDAhPT1hKVJlKGEpO3JldHVybiBUZX0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGlzLm1pbi5qcy5tYXAiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBUYWdJbnB1dCBhcyBJbnB1dFRhZyB9IGZyb20gJ3JlYWN0anMtdGFnLWlucHV0J1xyXG5cclxuLypcclxuICogS2V5d29yZCB0YWcgY29tcG9uZW50IFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFnSW5wdXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgdGFnczogW10gfVxyXG4gICAgICAgIHRoaXMub25UYWdzQ2hhbmdlZCA9IHRoaXMub25UYWdzQ2hhbmdlZC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdvcGEnKVxyXG4gICAgfVxyXG5cclxuICAgIG9uVGFnc0NoYW5nZWQodGFncykge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0YWdzIH0pXHJcbiAgICAgICAgY29uc3QgeyB2YWx1ZSwgc2V0UHJvcHMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgc2V0UHJvcHMoeyB2YWx1ZTogdGFncyB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGlkLCB3cmFwcGVyU3R5bGUsIGlucHV0U3R5bGUsIHRhZ0RlbGV0ZVN0eWxlLCBwbGFjZWhvbGRlciwgdGFnU3R5bGUgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9e2lkfT5cclxuICAgICAgICAgICAgICAgIDxJbnB1dFRhZ1xyXG4gICAgICAgICAgICAgICAgICAgIHRhZ3M9e3RoaXMuc3RhdGUudGFnc31cclxuICAgICAgICAgICAgICAgICAgICBvblRhZ3NDaGFuZ2VkPXt0aGlzLm9uVGFnc0NoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlclN0eWxlPXt3cmFwcGVyU3R5bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRTdHlsZT17aW5wdXRTdHlsZX1cclxuICAgICAgICAgICAgICAgICAgICB0YWdEZWxldGVTdHlsZT17dGFnRGVsZXRlU3R5bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIHRhZ1N0eWxlPXt0YWdTdHlsZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblRhZ0lucHV0LmRlZmF1bHRQcm9wcyA9IHt9O1xyXG5cclxuVGFnSW5wdXQucHJvcFR5cGVzID0ge1xyXG5cclxuICAgIC8vIFRoZSBJRCB1c2VkIHRvIGlkZW50aWZ5IHRoaXMgY29tcG9uZW50IGluIERhc2ggY2FsbGJhY2tzLlxyXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG5cclxuICAgIC8vIFdyYXBwZXIgc3R5bGUgY3NzXHJcbiAgICB3cmFwcGVyU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcblxyXG4gICAgdGFnU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcblxyXG4gICAgLy8gSW5wdXQgc3R5bGUgY3NzIFxyXG4gICAgaW5wdXRTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuXHJcbiAgICAvLyBEZWxldGUgYnRuIHN0eWxlXHJcbiAgICB0YWdEZWxldGVTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuXHJcbiAgICAvLyBQbGFjZWhvbGRlclxyXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgLy8gVGFncyBWYWx1ZXNcclxuICAgIHZhbHVlOiBQcm9wVHlwZXMuYXJyYXksXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEYXNoLWFzc2lnbmVkIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byByZXBvcnQgcHJvcGVydHkgY2hhbmdlc1xyXG4gICAgICogdG8gRGFzaCwgdG8gbWFrZSB0aGVtIGF2YWlsYWJsZSBmb3IgY2FsbGJhY2tzLlxyXG4gICAgICovXHJcbiAgICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmNcclxufTtcclxuIiwiaW1wb3J0IEtleWVkRmlsZUJyb3dzZXIgZnJvbSAnLi9jb21wb25lbnRzL0tleWVkRmlsZUJyb3dzZXInO1xyXG5pbXBvcnQgRGF0ZVRpbWVQaWNrZXIgZnJvbSAnLi9jb21wb25lbnRzL0RhdGVUaW1lUGlja2VyJztcclxuaW1wb3J0IFRhZ0lucHV0IGZyb20gJy4vY29tcG9uZW50cy9UYWdJbnB1dCdcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBLZXllZEZpbGVCcm93c2VyXHJcbn07XHJcbmV4cG9ydCB7XHJcbiAgICBEYXRlVGltZVBpY2tlclxyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICAgIFRhZ0lucHV0XHJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==