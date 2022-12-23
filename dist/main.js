/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./coffee-bg.jpg */ "./src/coffee-bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Caramel&family=Josefin+Sans:wght@500&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\r\n    ---light-brown: #DFC9B8;\r\n    ---light-brown-30: #dfc9b85a;\r\n    ---light-brown-50: #dfc9b887;\r\n    --brown: #2C1912;\r\n    --light-brown: #BE6E46;\r\n    --light-blue: #0582CA;\r\n    --darker-blue: #006494\r\n}\r\n\r\nbody{\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: 'Josefin Sans', sans-serif;\r\n    overflow-y: hidden;\r\n}\r\n\r\np, ul{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nh1{\r\n    font-size: 3.5rem;\r\n    padding: 0;\r\n    margin: 0;\r\n    color: #000;\r\n    text-shadow: 0px 0px 30px var(---light-brown);\r\n\r\n}\r\n\r\nh2{\r\n    padding: 0;\r\n    margin: 0;\r\n    font-family: 'Caramel', cursive;\r\n    font-size: 5rem;\r\n    color: var(--light-blue);\r\n    text-shadow: 0px 0px 30px var(---light-brown);\r\n    margin-top: 5rem;\r\n}\r\n\r\n\r\n\r\na{\r\n    text-decoration: none;\r\n    color: #000;\r\n}\r\n\r\n#content{\r\n    position: relative;\r\n}\r\n\r\n\r\n\r\n\r\n.bg-img{\r\n    height: 100vh;\r\n    width: 100vw;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-size: cover;\r\n    background-position: center center;\r\n    background-repeat: no-repeat;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: -1;\r\n}\r\n\r\n\r\nbutton{\r\n    border: none;\r\n    padding: 0.7rem 1rem;\r\n    background-color: var(--light-blue);\r\n    color: #fff;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n    border-radius: 2px;\r\n    transition: all .2s;\r\n    margin: 3rem 0;\r\n}\r\n\r\nbutton:hover{\r\n    color: #000;\r\n    cursor: pointer;\r\n}\r\n\r\nhr {\r\n    width: 50vh;\r\n    border-top: 1px solid var(--darker-blue);\r\n    border-bottom: 1px solid var(--darker-blue);\r\n    border-left: none;\r\n    border-right: none;\r\n}\r\n\r\n/* **** display none *** */\r\n.hide{\r\n    opacity: 0 !important;\r\n    transition: all .5s;\r\n    z-index: -100;\r\n}\r\n\r\n.not-hide{\r\n    opacity: 1 !important;\r\n    transition: all .5s;\r\n}\r\n\r\nnav{\r\n    width: 100%;\r\n    background-color: var(---light-brown-30);\r\n    border-bottom: 2px solid var(--darker-blue);\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 1;\r\n    \r\n}\r\n\r\nnav ul{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 3rem;\r\n    list-style: none;\r\n    height: 5rem;\r\n\r\n}\r\n\r\nnav ul li a{\r\n    text-underline-offset: 0px;\r\n    transition: all .2s;\r\n    text-transform: uppercase;\r\n}\r\n\r\nnav ul li a:hover{\r\n    text-decoration: underline var(--darker-blue);\r\n    text-decoration-thickness: .125em;\r\n    text-underline-offset: 8px;\r\n    font-weight: 600   \r\n}\r\n\r\n\r\nnav ul li a.active{\r\n    font-weight: 600    ;\r\n}\r\n\r\n.container{\r\n    position: absolute;\r\n    top: 5rem;\r\n    left: 0;\r\n    padding-top: 7rem;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    max-height: calc(100vh - 17rem);    /*5 top + 5 del footer + 7 del padding*/\r\n    overflow-y: scroll;\r\n}\r\n\r\n\r\n/* inside container scrollbar */\r\n\r\n.container::-webkit-scrollbar {\r\n    width: 7px;\r\n  }\r\n\r\n.container::-webkit-scrollbar-track {\r\n    background: rgba(0, 0, 0, 0);\r\n}\r\n\r\n\r\n.container::-webkit-scrollbar-thumb {\r\n    background: var(--darker-blue); \r\n    outline: 1px solid var(--light-blue);\r\n  }\r\n\r\n\r\n\r\n/* menu */\r\n\r\n.menu-container{\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    grid-template-rows: repeat(2, 1fr);\r\n    row-gap: 2rem;\r\n    margin: 1rem 0 2rem 0;\r\n    background-color: var(---light-brown-50);\r\n    padding-left: 3rem;\r\n    padding-bottom: 2rem;\r\n    border-radius: 4px;\r\n}\r\n\r\n.menu-container > div > p {\r\n    text-transform: uppercase;\r\n    color: var(--darker-blue);\r\n    font-weight: 600;\r\n    margin: 1rem auto;\r\n}\r\n\r\n.menu-container > div > div {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    column-gap: 1rem;\r\n    row-gap: .5rem;\r\n}\r\n\r\n/* about */\r\n#about > p {\r\n    padding: 1rem;\r\n    max-width: 600px;\r\n    text-align: center;\r\n} \r\n\r\n\r\nfooter{\r\n    margin-top: 5rem;\r\n    width: 100%;\r\n    height: 5rem;\r\n    background-color: var(---light-brown-30);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border-top: 2px solid var(--darker-blue);\r\n    position: fixed;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 1;\r\n    font-size: 0.8rem;\r\n}\r\n\r\nfooter a{\r\n    text-decoration: underline;\r\n    color: var(--brown);\r\n    transition: all .2s;\r\n}\r\n\r\n\r\nfooter a:hover{\r\n    text-decoration-thickness: .125em;\r\n}\r\n\r\n\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAGA;IACI,uBAAuB;IACvB,4BAA4B;IAC5B,4BAA4B;IAC5B,gBAAgB;IAChB,sBAAsB;IACtB,qBAAqB;IACrB;AACJ;;AAEA;IACI,SAAS;IACT,UAAU;IACV,uCAAuC;IACvC,kBAAkB;AACtB;;AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,iBAAiB;IACjB,UAAU;IACV,SAAS;IACT,WAAW;IACX,6CAA6C;;AAEjD;;AAEA;IACI,UAAU;IACV,SAAS;IACT,+BAA+B;IAC/B,eAAe;IACf,wBAAwB;IACxB,6CAA6C;IAC7C,gBAAgB;AACpB;;;;AAIA;IACI,qBAAqB;IACrB,WAAW;AACf;;AAEA;IACI,kBAAkB;AACtB;;;;;AAKA;IACI,aAAa;IACb,YAAY;IACZ,mDAAkC;IAClC,sBAAsB;IACtB,kCAAkC;IAClC,4BAA4B;IAC5B,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;AACf;;;AAGA;IACI,YAAY;IACZ,oBAAoB;IACpB,mCAAmC;IACnC,WAAW;IACX,yBAAyB;IACzB,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,wCAAwC;IACxC,2CAA2C;IAC3C,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA,0BAA0B;AAC1B;IACI,qBAAqB;IACrB,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,wCAAwC;IACxC,2CAA2C;IAC3C,eAAe;IACf,MAAM;IACN,OAAO;IACP,UAAU;;AAEd;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,gBAAgB;IAChB,YAAY;;AAEhB;;AAEA;IACI,0BAA0B;IAC1B,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,6CAA6C;IAC7C,iCAAiC;IACjC,0BAA0B;IAC1B;AACJ;;;AAGA;IACI,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,OAAO;IACP,iBAAiB;IACjB,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,+BAA+B,KAAK,uCAAuC;IAC3E,kBAAkB;AACtB;;;AAGA,+BAA+B;;AAE/B;IACI,UAAU;EACZ;;AAEF;IACI,4BAA4B;AAChC;;;AAGA;IACI,8BAA8B;IAC9B,oCAAoC;EACtC;;;;AAIF,SAAS;;AAET;IACI,aAAa;IACb,qCAAqC;IACrC,kCAAkC;IAClC,aAAa;IACb,qBAAqB;IACrB,wCAAwC;IACxC,kBAAkB;IAClB,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,yBAAyB;IACzB,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,gBAAgB;IAChB,cAAc;AAClB;;AAEA,UAAU;AACV;IACI,aAAa;IACb,gBAAgB;IAChB,kBAAkB;AACtB;;;AAGA;IACI,gBAAgB;IAChB,WAAW;IACX,YAAY;IACZ,wCAAwC;IACxC,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,wCAAwC;IACxC,eAAe;IACf,SAAS;IACT,OAAO;IACP,UAAU;IACV,iBAAiB;AACrB;;AAEA;IACI,0BAA0B;IAC1B,mBAAmB;IACnB,mBAAmB;AACvB;;;AAGA;IACI,iCAAiC;AACrC","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Caramel&family=Josefin+Sans:wght@500&display=swap');\r\n\r\n\r\n:root{\r\n    ---light-brown: #DFC9B8;\r\n    ---light-brown-30: #dfc9b85a;\r\n    ---light-brown-50: #dfc9b887;\r\n    --brown: #2C1912;\r\n    --light-brown: #BE6E46;\r\n    --light-blue: #0582CA;\r\n    --darker-blue: #006494\r\n}\r\n\r\nbody{\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: 'Josefin Sans', sans-serif;\r\n    overflow-y: hidden;\r\n}\r\n\r\np, ul{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nh1{\r\n    font-size: 3.5rem;\r\n    padding: 0;\r\n    margin: 0;\r\n    color: #000;\r\n    text-shadow: 0px 0px 30px var(---light-brown);\r\n\r\n}\r\n\r\nh2{\r\n    padding: 0;\r\n    margin: 0;\r\n    font-family: 'Caramel', cursive;\r\n    font-size: 5rem;\r\n    color: var(--light-blue);\r\n    text-shadow: 0px 0px 30px var(---light-brown);\r\n    margin-top: 5rem;\r\n}\r\n\r\n\r\n\r\na{\r\n    text-decoration: none;\r\n    color: #000;\r\n}\r\n\r\n#content{\r\n    position: relative;\r\n}\r\n\r\n\r\n\r\n\r\n.bg-img{\r\n    height: 100vh;\r\n    width: 100vw;\r\n    background: url('./coffee-bg.jpg');\r\n    background-size: cover;\r\n    background-position: center center;\r\n    background-repeat: no-repeat;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: -1;\r\n}\r\n\r\n\r\nbutton{\r\n    border: none;\r\n    padding: 0.7rem 1rem;\r\n    background-color: var(--light-blue);\r\n    color: #fff;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n    border-radius: 2px;\r\n    transition: all .2s;\r\n    margin: 3rem 0;\r\n}\r\n\r\nbutton:hover{\r\n    color: #000;\r\n    cursor: pointer;\r\n}\r\n\r\nhr {\r\n    width: 50vh;\r\n    border-top: 1px solid var(--darker-blue);\r\n    border-bottom: 1px solid var(--darker-blue);\r\n    border-left: none;\r\n    border-right: none;\r\n}\r\n\r\n/* **** display none *** */\r\n.hide{\r\n    opacity: 0 !important;\r\n    transition: all .5s;\r\n    z-index: -100;\r\n}\r\n\r\n.not-hide{\r\n    opacity: 1 !important;\r\n    transition: all .5s;\r\n}\r\n\r\nnav{\r\n    width: 100%;\r\n    background-color: var(---light-brown-30);\r\n    border-bottom: 2px solid var(--darker-blue);\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 1;\r\n    \r\n}\r\n\r\nnav ul{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 3rem;\r\n    list-style: none;\r\n    height: 5rem;\r\n\r\n}\r\n\r\nnav ul li a{\r\n    text-underline-offset: 0px;\r\n    transition: all .2s;\r\n    text-transform: uppercase;\r\n}\r\n\r\nnav ul li a:hover{\r\n    text-decoration: underline var(--darker-blue);\r\n    text-decoration-thickness: .125em;\r\n    text-underline-offset: 8px;\r\n    font-weight: 600   \r\n}\r\n\r\n\r\nnav ul li a.active{\r\n    font-weight: 600    ;\r\n}\r\n\r\n.container{\r\n    position: absolute;\r\n    top: 5rem;\r\n    left: 0;\r\n    padding-top: 7rem;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    max-height: calc(100vh - 17rem);    /*5 top + 5 del footer + 7 del padding*/\r\n    overflow-y: scroll;\r\n}\r\n\r\n\r\n/* inside container scrollbar */\r\n\r\n.container::-webkit-scrollbar {\r\n    width: 7px;\r\n  }\r\n\r\n.container::-webkit-scrollbar-track {\r\n    background: rgba(0, 0, 0, 0);\r\n}\r\n\r\n\r\n.container::-webkit-scrollbar-thumb {\r\n    background: var(--darker-blue); \r\n    outline: 1px solid var(--light-blue);\r\n  }\r\n\r\n\r\n\r\n/* menu */\r\n\r\n.menu-container{\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    grid-template-rows: repeat(2, 1fr);\r\n    row-gap: 2rem;\r\n    margin: 1rem 0 2rem 0;\r\n    background-color: var(---light-brown-50);\r\n    padding-left: 3rem;\r\n    padding-bottom: 2rem;\r\n    border-radius: 4px;\r\n}\r\n\r\n.menu-container > div > p {\r\n    text-transform: uppercase;\r\n    color: var(--darker-blue);\r\n    font-weight: 600;\r\n    margin: 1rem auto;\r\n}\r\n\r\n.menu-container > div > div {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    column-gap: 1rem;\r\n    row-gap: .5rem;\r\n}\r\n\r\n/* about */\r\n#about > p {\r\n    padding: 1rem;\r\n    max-width: 600px;\r\n    text-align: center;\r\n} \r\n\r\n\r\nfooter{\r\n    margin-top: 5rem;\r\n    width: 100%;\r\n    height: 5rem;\r\n    background-color: var(---light-brown-30);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border-top: 2px solid var(--darker-blue);\r\n    position: fixed;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 1;\r\n    font-size: 0.8rem;\r\n}\r\n\r\nfooter a{\r\n    text-decoration: underline;\r\n    color: var(--brown);\r\n    transition: all .2s;\r\n}\r\n\r\n\r\nfooter a:hover{\r\n    text-decoration-thickness: .125em;\r\n}\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "about": () => (/* binding */ about)
/* harmony export */ });
const about = () => {
    const element = document.createElement('div')
    element.setAttribute('id','about');
    element.classList.add('container')
    element.classList.add('hide')
    element.innerHTML = `<h2>Let's talk</h2>
    <h1>About us</h1>
    <hr>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet ultrices porttitor, ex ex aliquet purus, pellentesque rhoncus felis ipsum nec purus. Donec id enim in risus pellentesque blandit. Proin sed nibh nec arcu mollis rhoncus in sit amet augue. Suspendisse magna nisl, eleifend non tempor et, luctus id quam. Nulla bibendum vulputate ante, non malesuada eros lobortis euismod`

    return element
}



/***/ }),

/***/ "./src/backgroundImage.js":
/*!********************************!*\
  !*** ./src/backgroundImage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "backgroundImage": () => (/* binding */ backgroundImage)
/* harmony export */ });
const  backgroundImage = () => {
    const element = document.createElement('div');
    element.classList.add('bg-img')

    return element;
}



/***/ }),

/***/ "./src/container.js":
/*!**************************!*\
  !*** ./src/container.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "container": () => (/* binding */ container)
/* harmony export */ });

const container = () => {
    const element = document.createElement('div')
    element.setAttribute('id','home');
    element.classList.add('container')
    element.innerHTML = `<h2>Welcome to,</h2>
    <h1>La Cafetería</h1>
    <hr>
    <p>Café de especialidad, cerveza artesana, juegos de mesa, repostería casera ¿Te vienes?</p>
    <button id="btn-menu">Ver el menú</button>
    `

    return element
}



/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "footer": () => (/* binding */ footer)
/* harmony export */ });
const footer = () => {
    const element = document.createElement('footer')
    element.innerHTML = ` <p>Developed by <a href="https://github.com/DavitBoo/">DavidBoo</a></p>
    <p>Foto de <a href="https://unsplash.com/@zarakvg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Zarak Khan</a> en <a href="https://unsplash.com/es/fotos/69ilqMz0p1s?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>`

    return element
}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
const menu = () => {
    const element = document.createElement('div')
    element.setAttribute('id','menu');
    element.classList.add('container')
    element.classList.add('hide')
    element.innerHTML = `<h2>You can check,</h2>
    <h1>Our Menú</h1>
    <hr>
    <div class="menu-container">
        <div>  
            <p>Café</p> 
            <div>
                <p>Espresso</p><p>1,30</p>
                <p>Doble espresso</p><p>1,30</p>
                <p>Café con leche</p><p>1,30</p>
                <p>Capuccino</p><p>1,30</p>
                <p>Black white</p><p>1,30</p>
            </div>                  
        </div>
        <div>   
            <p>Infusiones</p>
            <div>
                <p>Tibetana</p><p>1,30</p>
                <p>African Chai</p><p>1,30</p>
                <p>Té Negro</p><p>1,30</p>
                <p>Earl Grey</p><p>1,30</p>
                <p>English Breakfast</p><p>1,30</p>
            </div>    
        </div>
        <div>  
            <p>Cervezas</p>
            <div>
                <p>Cervezas lager</p><p>1,30</p>
                <p>Pilsen</p><p>1,30</p>
                <p>CSpezial</p><p>1,30</p>
                <p>Dortmunster</p><p>1,30</p>
                <p>Schwarzbier</p><p>1,30</p>
            </div>    
        </div>
        <div>    
            <p>Dulces & Pintxos</p>
            <div>
                <p>Tortilla</p><p>1,30</p>
                <p>Croissant Relleno</p><p>1,30</p>
                <p>Cookie</p><p>1,30</p>
                <p>Tarta de queso</p><p>1,30</p>
            </div>    
        </div>
    </div>`

    return element
}



/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navbar": () => (/* binding */ navbar)
/* harmony export */ });
const navbar = () => {
    const nav = document.createElement('nav')
    nav.innerHTML = `<ul>
    <li><a href="">Home</a></li>
    <li><a href="">Menu</a></li>
    <li><a href="">About</a></li>
</ul>`

    return nav
}



/***/ }),

/***/ "./src/coffee-bg.jpg":
/*!***************************!*\
  !*** ./src/coffee-bg.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1cb572b5e293ab72a01a.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _backgroundImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./backgroundImage */ "./src/backgroundImage.js");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar */ "./src/navbar.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./container */ "./src/container.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _coffee_bg_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./coffee-bg.jpg */ "./src/coffee-bg.jpg");










const contentDiv = document.getElementById('content')

contentDiv.appendChild((0,_backgroundImage__WEBPACK_IMPORTED_MODULE_0__.backgroundImage)());
contentDiv.appendChild((0,_navbar__WEBPACK_IMPORTED_MODULE_1__.navbar)());

contentDiv.appendChild((0,_container__WEBPACK_IMPORTED_MODULE_3__.container)());
contentDiv.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_4__.menu)());
contentDiv.appendChild((0,_about__WEBPACK_IMPORTED_MODULE_5__.about)());

contentDiv.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_2__.footer)());

const homePage = document.getElementById('home')
const menuPage = document.getElementById('menu')
const aboutPage = document.getElementById('about')

const btnMenu = document.getElementById('btn-menu')

const pages = document.querySelectorAll('nav > ul > li > a')

//default value for Home page => page.classList.add('active')
pages[0].classList.add('active')


const activatePage = (p) => {
    p.classList.remove('hide')
    p.classList.add('not-hide')
}

const deactivatePage = (p) => {
    p.classList.add('hide')
    p.classList.remove('not-hide')
}

function checkDisplayMode() {
    if(pages[0].classList.contains('active'))  activatePage(homePage)
    else deactivatePage(homePage)

    if(pages[1].classList.contains('active')) activatePage(menuPage)
    else deactivatePage(menuPage)

    if(pages[2].classList.contains('active')) activatePage(aboutPage)
    else deactivatePage(aboutPage)
}

pages.forEach(page => {
    page.addEventListener('click', (e)  => {
        e.preventDefault();
        
        pages[0].classList.remove('active')
        pages[1].classList.remove('active')
        pages[2].classList.remove('active')
        page.classList.add('active')

        checkDisplayMode()
    })
})

btnMenu.addEventListener('click', () => {
    pages[0].classList.remove('active')
    pages[1].classList.add('active')

    checkDisplayMode()
})




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FtRDtBQUNsQjtBQUNDO0FBQ007QUFDVjtBQUNFO0FBQ2hDO0FBQ3FCO0FBQ2lCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixpRUFBZTtBQUN0Qyx1QkFBdUIsK0NBQU07QUFDN0I7QUFDQSx1QkFBdUIscURBQVM7QUFDaEMsdUJBQXVCLDJDQUFJO0FBQzNCLHVCQUF1Qiw2Q0FBSztBQUM1QjtBQUNBLHVCQUF1QiwrQ0FBTTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanMtcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9qcy1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2pzLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vanMtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vanMtcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2pzLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qcy1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2pzLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9qcy1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vanMtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vanMtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vanMtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL2pzLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9iYWNrZ3JvdW5kSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vanMtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9qcy1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL2pzLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL2pzLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vanMtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pzLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qcy1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pzLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2pzLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pzLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pzLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9qcy1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vanMtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9qcy1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vY29mZmVlLWJnLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q2FyYW1lbCZmYW1pbHk9Sm9zZWZpbitTYW5zOndnaHRANTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdHtcXHJcXG4gICAgLS0tbGlnaHQtYnJvd246ICNERkM5Qjg7XFxyXFxuICAgIC0tLWxpZ2h0LWJyb3duLTMwOiAjZGZjOWI4NWE7XFxyXFxuICAgIC0tLWxpZ2h0LWJyb3duLTUwOiAjZGZjOWI4ODc7XFxyXFxuICAgIC0tYnJvd246ICMyQzE5MTI7XFxyXFxuICAgIC0tbGlnaHQtYnJvd246ICNCRTZFNDY7XFxyXFxuICAgIC0tbGlnaHQtYmx1ZTogIzA1ODJDQTtcXHJcXG4gICAgLS1kYXJrZXItYmx1ZTogIzAwNjQ5NFxcclxcbn1cXHJcXG5cXHJcXG5ib2R5e1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5wLCB1bHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5oMXtcXHJcXG4gICAgZm9udC1zaXplOiAzLjVyZW07XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDMwcHggdmFyKC0tLWxpZ2h0LWJyb3duKTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuaDJ7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdDYXJhbWVsJywgY3Vyc2l2ZTtcXHJcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XFxyXFxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDMwcHggdmFyKC0tLWxpZ2h0LWJyb3duKTtcXHJcXG4gICAgbWFyZ2luLXRvcDogNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuYXtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnR7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmJnLWltZ3tcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgei1pbmRleDogLTE7XFxyXFxufVxcclxcblxcclxcblxcclxcbmJ1dHRvbntcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAwLjdyZW0gMXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XFxyXFxuICAgIG1hcmdpbjogM3JlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXJ7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmhyIHtcXHJcXG4gICAgd2lkdGg6IDUwdmg7XFxyXFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1kYXJrZXItYmx1ZSk7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kYXJrZXItYmx1ZSk7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcclxcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qICoqKiogZGlzcGxheSBub25lICoqKiAqL1xcclxcbi5oaWRle1xcclxcbiAgICBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XFxyXFxuICAgIHotaW5kZXg6IC0xMDA7XFxyXFxufVxcclxcblxcclxcbi5ub3QtaGlkZXtcXHJcXG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xcclxcbn1cXHJcXG5cXHJcXG5uYXZ7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS0tbGlnaHQtYnJvd24tMzApO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tZGFya2VyLWJsdWUpO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbm5hdiB1bHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogM3JlbTtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgaGVpZ2h0OiA1cmVtO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5uYXYgdWwgbGkgYXtcXHJcXG4gICAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAwcHg7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxufVxcclxcblxcclxcbm5hdiB1bCBsaSBhOmhvdmVye1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSB2YXIoLS1kYXJrZXItYmx1ZSk7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IC4xMjVlbTtcXHJcXG4gICAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiA4cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDAgICBcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxubmF2IHVsIGxpIGEuYWN0aXZle1xcclxcbiAgICBmb250LXdlaWdodDogNjAwICAgIDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lcntcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDVyZW07XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA3cmVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxN3JlbSk7ICAgIC8qNSB0b3AgKyA1IGRlbCBmb290ZXIgKyA3IGRlbCBwYWRkaW5nKi9cXHJcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBpbnNpZGUgY29udGFpbmVyIHNjcm9sbGJhciAqL1xcclxcblxcclxcbi5jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgd2lkdGg6IDdweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4uY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZGFya2VyLWJsdWUpOyBcXHJcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LWJsdWUpO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcblxcclxcbi8qIG1lbnUgKi9cXHJcXG5cXHJcXG4ubWVudS1jb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxyXFxuICAgIHJvdy1nYXA6IDJyZW07XFxyXFxuICAgIG1hcmdpbjogMXJlbSAwIDJyZW0gMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tLWxpZ2h0LWJyb3duLTUwKTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1jb250YWluZXIgPiBkaXYgPiBwIHtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWRhcmtlci1ibHVlKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5tZW51LWNvbnRhaW5lciA+IGRpdiA+IGRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDFyZW07XFxyXFxuICAgIHJvdy1nYXA6IC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBhYm91dCAqL1xcclxcbiNhYm91dCA+IHAge1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufSBcXHJcXG5cXHJcXG5cXHJcXG5mb290ZXJ7XFxyXFxuICAgIG1hcmdpbi10b3A6IDVyZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLS1saWdodC1icm93bi0zMCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tZGFya2VyLWJsdWUpO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBhe1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWJyb3duKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuZm9vdGVyIGE6aG92ZXJ7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IC4xMjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtJQUNJLHVCQUF1QjtJQUN2Qiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHVDQUF1QztJQUN2QyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixTQUFTO0lBQ1QsV0FBVztJQUNYLDZDQUE2Qzs7QUFFakQ7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULCtCQUErQjtJQUMvQixlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLDZDQUE2QztJQUM3QyxnQkFBZ0I7QUFDcEI7Ozs7QUFJQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7Ozs7O0FBS0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG1EQUFrQztJQUNsQyxzQkFBc0I7SUFDdEIsa0NBQWtDO0lBQ2xDLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0FBQ2Y7OztBQUdBO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixtQ0FBbUM7SUFDbkMsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsd0NBQXdDO0lBQ3hDLDJDQUEyQztJQUMzQyxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBLDBCQUEwQjtBQUMxQjtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsd0NBQXdDO0lBQ3hDLDJDQUEyQztJQUMzQyxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxVQUFVOztBQUVkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGdCQUFnQjtJQUNoQixZQUFZOztBQUVoQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksNkNBQTZDO0lBQzdDLGlDQUFpQztJQUNqQywwQkFBMEI7SUFDMUI7QUFDSjs7O0FBR0E7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULE9BQU87SUFDUCxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QiwrQkFBK0IsS0FBSyx1Q0FBdUM7SUFDM0Usa0JBQWtCO0FBQ3RCOzs7QUFHQSwrQkFBK0I7O0FBRS9CO0lBQ0ksVUFBVTtFQUNaOztBQUVGO0lBQ0ksNEJBQTRCO0FBQ2hDOzs7QUFHQTtJQUNJLDhCQUE4QjtJQUM5QixvQ0FBb0M7RUFDdEM7Ozs7QUFJRixTQUFTOztBQUVUO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxrQ0FBa0M7SUFDbEMsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQix3Q0FBd0M7SUFDeEMsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBLFVBQVU7QUFDVjtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOzs7QUFHQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHdDQUF3QztJQUN4QyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsd0NBQXdDO0lBQ3hDLGVBQWU7SUFDZixTQUFTO0lBQ1QsT0FBTztJQUNQLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7O0FBR0E7SUFDSSxpQ0FBaUM7QUFDckNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q2FyYW1lbCZmYW1pbHk9Sm9zZWZpbitTYW5zOndnaHRANTAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcblxcclxcbjpyb290e1xcclxcbiAgICAtLS1saWdodC1icm93bjogI0RGQzlCODtcXHJcXG4gICAgLS0tbGlnaHQtYnJvd24tMzA6ICNkZmM5Yjg1YTtcXHJcXG4gICAgLS0tbGlnaHQtYnJvd24tNTA6ICNkZmM5Yjg4NztcXHJcXG4gICAgLS1icm93bjogIzJDMTkxMjtcXHJcXG4gICAgLS1saWdodC1icm93bjogI0JFNkU0NjtcXHJcXG4gICAgLS1saWdodC1ibHVlOiAjMDU4MkNBO1xcclxcbiAgICAtLWRhcmtlci1ibHVlOiAjMDA2NDk0XFxyXFxufVxcclxcblxcclxcbmJvZHl7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbnAsIHVse1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmgxe1xcclxcbiAgICBmb250LXNpemU6IDMuNXJlbTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMzBweCB2YXIoLS0tbGlnaHQtYnJvd24pO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5oMntcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LWZhbWlseTogJ0NhcmFtZWwnLCBjdXJzaXZlO1xcclxcbiAgICBmb250LXNpemU6IDVyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMzBweCB2YXIoLS0tbGlnaHQtYnJvd24pO1xcclxcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5he1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uYmctaW1ne1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi9jb2ZmZWUtYmcuanBnJyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB6LWluZGV4OiAtMTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuYnV0dG9ue1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDAuN3JlbSAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycztcXHJcXG4gICAgbWFyZ2luOiAzcmVtIDA7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjpob3ZlcntcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaHIge1xcclxcbiAgICB3aWR0aDogNTB2aDtcXHJcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWRhcmtlci1ibHVlKTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWRhcmtlci1ibHVlKTtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogKioqKiBkaXNwbGF5IG5vbmUgKioqICovXFxyXFxuLmhpZGV7XFxyXFxuICAgIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcXHJcXG4gICAgei1pbmRleDogLTEwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5vdC1oaWRle1xcclxcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XFxyXFxufVxcclxcblxcclxcbm5hdntcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLS1saWdodC1icm93bi0zMCk7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1kYXJrZXItYmx1ZSk7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxubmF2IHVse1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAzcmVtO1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBoZWlnaHQ6IDVyZW07XFxyXFxuXFxyXFxufVxcclxcblxcclxcbm5hdiB1bCBsaSBhe1xcclxcbiAgICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDBweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycztcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHVsIGxpIGE6aG92ZXJ7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIHZhcigtLWRhcmtlci1ibHVlKTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogLjEyNWVtO1xcclxcbiAgICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDhweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMCAgIFxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5uYXYgdWwgbGkgYS5hY3RpdmV7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDAgICAgO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVye1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNXJlbTtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDdyZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDE3cmVtKTsgICAgLyo1IHRvcCArIDUgZGVsIGZvb3RlciArIDcgZGVsIHBhZGRpbmcqL1xcclxcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIGluc2lkZSBjb250YWluZXIgc2Nyb2xsYmFyICovXFxyXFxuXFxyXFxuLmNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgICB3aWR0aDogN3B4O1xcclxcbiAgfVxcclxcblxcclxcbi5jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrZXItYmx1ZSk7IFxcclxcbiAgICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tbGlnaHQtYmx1ZSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogbWVudSAqL1xcclxcblxcclxcbi5tZW51LWNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gICAgcm93LWdhcDogMnJlbTtcXHJcXG4gICAgbWFyZ2luOiAxcmVtIDAgMnJlbSAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS0tbGlnaHQtYnJvd24tNTApO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWNvbnRhaW5lciA+IGRpdiA+IHAge1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGFya2VyLWJsdWUpO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtY29udGFpbmVyID4gZGl2ID4gZGl2IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gICAgY29sdW1uLWdhcDogMXJlbTtcXHJcXG4gICAgcm93LWdhcDogLjVyZW07XFxyXFxufVxcclxcblxcclxcbi8qIGFib3V0ICovXFxyXFxuI2Fib3V0ID4gcCB7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIG1heC13aWR0aDogNjAwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59IFxcclxcblxcclxcblxcclxcbmZvb3RlcntcXHJcXG4gICAgbWFyZ2luLXRvcDogNXJlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tLWxpZ2h0LWJyb3duLTMwKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1kYXJrZXItYmx1ZSk7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIGF7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgICBjb2xvcjogdmFyKC0tYnJvd24pO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5mb290ZXIgYTpob3ZlcntcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogLjEyNWVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgYWJvdXQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsJ2Fib3V0Jyk7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpXHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxyXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBgPGgyPkxldCdzIHRhbGs8L2gyPlxyXG4gICAgPGgxPkFib3V0IHVzPC9oMT5cclxuICAgIDxocj5cclxuICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFBlbGxlbnRlc3F1ZSBwbGFjZXJhdCwgdGVsbHVzIHNpdCBhbWV0IHVsdHJpY2VzIHBvcnR0aXRvciwgZXggZXggYWxpcXVldCBwdXJ1cywgcGVsbGVudGVzcXVlIHJob25jdXMgZmVsaXMgaXBzdW0gbmVjIHB1cnVzLiBEb25lYyBpZCBlbmltIGluIHJpc3VzIHBlbGxlbnRlc3F1ZSBibGFuZGl0LiBQcm9pbiBzZWQgbmliaCBuZWMgYXJjdSBtb2xsaXMgcmhvbmN1cyBpbiBzaXQgYW1ldCBhdWd1ZS4gU3VzcGVuZGlzc2UgbWFnbmEgbmlzbCwgZWxlaWZlbmQgbm9uIHRlbXBvciBldCwgbHVjdHVzIGlkIHF1YW0uIE51bGxhIGJpYmVuZHVtIHZ1bHB1dGF0ZSBhbnRlLCBub24gbWFsZXN1YWRhIGVyb3MgbG9ib3J0aXMgZXVpc21vZGBcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudFxyXG59XHJcblxyXG5leHBvcnQgeyBhYm91dCB9IiwiY29uc3QgIGJhY2tncm91bmRJbWFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYmctaW1nJylcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IHsgYmFja2dyb3VuZEltYWdlIH07IiwiXHJcbmNvbnN0IGNvbnRhaW5lciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywnaG9tZScpO1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKVxyXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBgPGgyPldlbGNvbWUgdG8sPC9oMj5cclxuICAgIDxoMT5MYSBDYWZldGVyw61hPC9oMT5cclxuICAgIDxocj5cclxuICAgIDxwPkNhZsOpIGRlIGVzcGVjaWFsaWRhZCwgY2VydmV6YSBhcnRlc2FuYSwganVlZ29zIGRlIG1lc2EsIHJlcG9zdGVyw61hIGNhc2VyYSDCv1RlIHZpZW5lcz88L3A+XHJcbiAgICA8YnV0dG9uIGlkPVwiYnRuLW1lbnVcIj5WZXIgZWwgbWVuw7o8L2J1dHRvbj5cclxuICAgIGBcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudFxyXG59XHJcblxyXG5leHBvcnQgeyBjb250YWluZXIgfSIsImNvbnN0IGZvb3RlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKVxyXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBgIDxwPkRldmVsb3BlZCBieSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0Rhdml0Qm9vL1wiPkRhdmlkQm9vPC9hPjwvcD5cclxuICAgIDxwPkZvdG8gZGUgPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0B6YXJha3ZnP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPlphcmFrIEtoYW48L2E+IGVuIDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9lcy9mb3Rvcy82OWlscU16MHAxcz91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5VbnNwbGFzaDwvYT48L3A+YFxyXG5cclxuICAgIHJldHVybiBlbGVtZW50XHJcbn1cclxuXHJcbmV4cG9ydCB7IGZvb3RlciB9IiwiY29uc3QgbWVudSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywnbWVudScpO1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKVxyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRlJylcclxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gYDxoMj5Zb3UgY2FuIGNoZWNrLDwvaDI+XHJcbiAgICA8aDE+T3VyIE1lbsO6PC9oMT5cclxuICAgIDxocj5cclxuICAgIDxkaXYgY2xhc3M9XCJtZW51LWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXY+ICBcclxuICAgICAgICAgICAgPHA+Q2Fmw6k8L3A+IFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHA+RXNwcmVzc288L3A+PHA+MSwzMDwvcD5cclxuICAgICAgICAgICAgICAgIDxwPkRvYmxlIGVzcHJlc3NvPC9wPjxwPjEsMzA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5DYWbDqSBjb24gbGVjaGU8L3A+PHA+MSwzMDwvcD5cclxuICAgICAgICAgICAgICAgIDxwPkNhcHVjY2lubzwvcD48cD4xLDMwPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+QmxhY2sgd2hpdGU8L3A+PHA+MSwzMDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj4gICBcclxuICAgICAgICAgICAgPHA+SW5mdXNpb25lczwvcD5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwPlRpYmV0YW5hPC9wPjxwPjEsMzA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5BZnJpY2FuIENoYWk8L3A+PHA+MSwzMDwvcD5cclxuICAgICAgICAgICAgICAgIDxwPlTDqSBOZWdybzwvcD48cD4xLDMwPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+RWFybCBHcmV5PC9wPjxwPjEsMzA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5FbmdsaXNoIEJyZWFrZmFzdDwvcD48cD4xLDMwPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj4gIFxyXG4gICAgICAgICAgICA8cD5DZXJ2ZXphczwvcD5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwPkNlcnZlemFzIGxhZ2VyPC9wPjxwPjEsMzA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5QaWxzZW48L3A+PHA+MSwzMDwvcD5cclxuICAgICAgICAgICAgICAgIDxwPkNTcGV6aWFsPC9wPjxwPjEsMzA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5Eb3J0bXVuc3RlcjwvcD48cD4xLDMwPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+U2Nod2FyemJpZXI8L3A+PHA+MSwzMDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+ICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+ICAgIFxyXG4gICAgICAgICAgICA8cD5EdWxjZXMgJiBQaW50eG9zPC9wPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHA+VG9ydGlsbGE8L3A+PHA+MSwzMDwvcD5cclxuICAgICAgICAgICAgICAgIDxwPkNyb2lzc2FudCBSZWxsZW5vPC9wPjxwPjEsMzA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5Db29raWU8L3A+PHA+MSwzMDwvcD5cclxuICAgICAgICAgICAgICAgIDxwPlRhcnRhIGRlIHF1ZXNvPC9wPjxwPjEsMzA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PmBcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudFxyXG59XHJcblxyXG5leHBvcnQgeyBtZW51IH0iLCJjb25zdCBuYXZiYXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKVxyXG4gICAgbmF2LmlubmVySFRNTCA9IGA8dWw+XHJcbiAgICA8bGk+PGEgaHJlZj1cIlwiPkhvbWU8L2E+PC9saT5cclxuICAgIDxsaT48YSBocmVmPVwiXCI+TWVudTwvYT48L2xpPlxyXG4gICAgPGxpPjxhIGhyZWY9XCJcIj5BYm91dDwvYT48L2xpPlxyXG48L3VsPmBcclxuXHJcbiAgICByZXR1cm4gbmF2XHJcbn1cclxuXHJcbmV4cG9ydCB7IG5hdmJhciB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGJhY2tncm91bmRJbWFnZSB9IGZyb20gXCIuL2JhY2tncm91bmRJbWFnZVwiXHJcbmltcG9ydCB7IG5hdmJhcn0gZnJvbSAgXCIuL25hdmJhclwiXHJcbmltcG9ydCB7IGZvb3RlciB9IGZyb20gXCIuL2Zvb3RlclwiO1xyXG5pbXBvcnQgeyBjb250YWluZXIgfSBmcm9tIFwiLi9jb250YWluZXJcIjtcclxuaW1wb3J0IHsgbWVudSB9IGZyb20gXCIuL21lbnVcIjtcclxuaW1wb3J0IHsgYWJvdXQgfSBmcm9tIFwiLi9hYm91dFwiO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBjb2ZmZWVCZyBmcm9tIFwiLi9jb2ZmZWUtYmcuanBnXCJcclxuXHJcbmNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXHJcblxyXG5jb250ZW50RGl2LmFwcGVuZENoaWxkKGJhY2tncm91bmRJbWFnZSgpKTtcclxuY29udGVudERpdi5hcHBlbmRDaGlsZChuYXZiYXIoKSk7XHJcblxyXG5jb250ZW50RGl2LmFwcGVuZENoaWxkKGNvbnRhaW5lcigpKTtcclxuY29udGVudERpdi5hcHBlbmRDaGlsZChtZW51KCkpO1xyXG5jb250ZW50RGl2LmFwcGVuZENoaWxkKGFib3V0KCkpO1xyXG5cclxuY29udGVudERpdi5hcHBlbmRDaGlsZChmb290ZXIoKSk7XHJcblxyXG5jb25zdCBob21lUGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJylcclxuY29uc3QgbWVudVBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpXHJcbmNvbnN0IGFib3V0UGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhYm91dCcpXHJcblxyXG5jb25zdCBidG5NZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1tZW51JylcclxuXHJcbmNvbnN0IHBhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbmF2ID4gdWwgPiBsaSA+IGEnKVxyXG5cclxuLy9kZWZhdWx0IHZhbHVlIGZvciBIb21lIHBhZ2UgPT4gcGFnZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG5wYWdlc1swXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG5cclxuXHJcbmNvbnN0IGFjdGl2YXRlUGFnZSA9IChwKSA9PiB7XHJcbiAgICBwLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxyXG4gICAgcC5jbGFzc0xpc3QuYWRkKCdub3QtaGlkZScpXHJcbn1cclxuXHJcbmNvbnN0IGRlYWN0aXZhdGVQYWdlID0gKHApID0+IHtcclxuICAgIHAuY2xhc3NMaXN0LmFkZCgnaGlkZScpXHJcbiAgICBwLmNsYXNzTGlzdC5yZW1vdmUoJ25vdC1oaWRlJylcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tEaXNwbGF5TW9kZSgpIHtcclxuICAgIGlmKHBhZ2VzWzBdLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpICBhY3RpdmF0ZVBhZ2UoaG9tZVBhZ2UpXHJcbiAgICBlbHNlIGRlYWN0aXZhdGVQYWdlKGhvbWVQYWdlKVxyXG5cclxuICAgIGlmKHBhZ2VzWzFdLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIGFjdGl2YXRlUGFnZShtZW51UGFnZSlcclxuICAgIGVsc2UgZGVhY3RpdmF0ZVBhZ2UobWVudVBhZ2UpXHJcblxyXG4gICAgaWYocGFnZXNbMl0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgYWN0aXZhdGVQYWdlKGFib3V0UGFnZSlcclxuICAgIGVsc2UgZGVhY3RpdmF0ZVBhZ2UoYWJvdXRQYWdlKVxyXG59XHJcblxyXG5wYWdlcy5mb3JFYWNoKHBhZ2UgPT4ge1xyXG4gICAgcGFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSAgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBcclxuICAgICAgICBwYWdlc1swXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgICAgIHBhZ2VzWzFdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICAgICAgcGFnZXNbMl0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgICAgICBwYWdlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcblxyXG4gICAgICAgIGNoZWNrRGlzcGxheU1vZGUoKVxyXG4gICAgfSlcclxufSlcclxuXHJcbmJ0bk1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBwYWdlc1swXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgcGFnZXNbMV0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuXHJcbiAgICBjaGVja0Rpc3BsYXlNb2RlKClcclxufSlcclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9