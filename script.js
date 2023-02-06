/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./style.css":
/*!*********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style.css ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody,\nbutton {\n  font-family: \"Montserrat\", sans-serif;\n}\n\nul {\n  list-style: none;\n}\n\n.active {\n  background-color: #fce641;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  background-color: #ff5e5b;\n  padding: 10px;\n  position: relative;\n  min-height: 100vh;\n}\n\nh1 {\n  text-align: center;\n  font-size: 48px;\n  color: #ffed66;\n}\n\nmain {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  gap: 10px;\n  flex: 1;\n}\n\n#menu {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\n#menu-row {\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n}\n\n#menu-row li:first-child {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n#menu-row > * {\n  flex: 1;\n}\n\n#board-size-container {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n#board-size-value {\n  text-align: center;\n  color: white;\n  font-weight: bold;\n}\n\n#board {\n  display: flex;\n  flex-direction: column;\n}\n\ninput[type=\"color\"] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  background-color: transparent;\n  border: none;\n  appearance: none;\n  cursor: pointer;\n  height: 49px;\n  width: 50px;\n}\n\ninput[type=\"color\"]::-webkit-color-swatch {\n  border-radius: 15px;\n  border: 3px solid black;\n}\ninput[type=\"color\"]::-moz-color-swatch {\n  border-radius: 15px;\n  border: 3px solid black;\n}\n\nbutton {\n  background-color: white;\n  border: none;\n  font-size: 16px;\n  padding: 15px;\n  width: 100%;\n}\n\nbutton:hover {\n  background-color: #ffed66;\n}\n\n#newGridConfirmation {\n  background-color: white;\n  border-radius: 5px;\n}\n\n.loader {\n  z-index: 3;\n  display: none;\n  border: 16px solid #f3f3f3;\n  border-top: 16px solid #3498db;\n  border-radius: 50%;\n  width: 120px;\n  height: 120px;\n  animation: spin 2s linear infinite;\n  position: absolute;\n  top: 40%;\n  left: 43%;\n  transform: translate(-50%, -50%);\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.overlay {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.9);\n  z-index: 2;\n  display: none;\n}\n\n.modal {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  right: 0;\n  bottom: 0;\n  transform: translate(-50%, -50%);\n  width: calc(0.8 * min(100vh, 100vw));\n  height: calc(0.8 * min(100vh, 100vw) + 54px);\n  z-index: 3;\n  display: none;\n}\n\n.img-to-download {\n  width: calc(0.8 * min(100vh, 100vw));\n}\n\n@media (max-width: 768px) {\n  main {\n    flex-direction: column-reverse;\n    padding: 20px 0;\n  }\n  #menu {\n    width: 100%;\n  }\n  #menu-row {\n    flex-direction: row;\n    max-width: 500px;\n    width: 100%;\n  }\n}\n", "",{"version":3,"sources":["webpack://./style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;;EAEE,qCAAqC;AACvC;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,yBAAyB;EACzB,aAAa;EACb,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,SAAS;EACT,OAAO;AACT;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,wBAAwB;EACxB,qBAAqB;EACrB,6BAA6B;EAC7B,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;EACvB,YAAY;EACZ,eAAe;EACf,aAAa;EACb,WAAW;AACb;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,0BAA0B;EAC1B,8BAA8B;EAC9B,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,kCAAkC;EAClC,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;AAClC;;AAEA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,QAAQ;EACR,8BAA8B;EAC9B,UAAU;EACV,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,oCAAoC;EACpC,4CAA4C;EAC5C,UAAU;EACV,aAAa;AACf;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE;IACE,8BAA8B;IAC9B,eAAe;EACjB;EACA;IACE,WAAW;EACb;EACA;IACE,mBAAmB;IACnB,gBAAgB;IAChB,WAAW;EACb;AACF","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody,\nbutton {\n  font-family: \"Montserrat\", sans-serif;\n}\n\nul {\n  list-style: none;\n}\n\n.active {\n  background-color: #fce641;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  background-color: #ff5e5b;\n  padding: 10px;\n  position: relative;\n  min-height: 100vh;\n}\n\nh1 {\n  text-align: center;\n  font-size: 48px;\n  color: #ffed66;\n}\n\nmain {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  gap: 10px;\n  flex: 1;\n}\n\n#menu {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\n#menu-row {\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n}\n\n#menu-row li:first-child {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n#menu-row > * {\n  flex: 1;\n}\n\n#board-size-container {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n#board-size-value {\n  text-align: center;\n  color: white;\n  font-weight: bold;\n}\n\n#board {\n  display: flex;\n  flex-direction: column;\n}\n\ninput[type=\"color\"] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  background-color: transparent;\n  border: none;\n  appearance: none;\n  cursor: pointer;\n  height: 49px;\n  width: 50px;\n}\n\ninput[type=\"color\"]::-webkit-color-swatch {\n  border-radius: 15px;\n  border: 3px solid black;\n}\ninput[type=\"color\"]::-moz-color-swatch {\n  border-radius: 15px;\n  border: 3px solid black;\n}\n\nbutton {\n  background-color: white;\n  border: none;\n  font-size: 16px;\n  padding: 15px;\n  width: 100%;\n}\n\nbutton:hover {\n  background-color: #ffed66;\n}\n\n#newGridConfirmation {\n  background-color: white;\n  border-radius: 5px;\n}\n\n.loader {\n  z-index: 3;\n  display: none;\n  border: 16px solid #f3f3f3;\n  border-top: 16px solid #3498db;\n  border-radius: 50%;\n  width: 120px;\n  height: 120px;\n  animation: spin 2s linear infinite;\n  position: absolute;\n  top: 40%;\n  left: 43%;\n  transform: translate(-50%, -50%);\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.overlay {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.9);\n  z-index: 2;\n  display: none;\n}\n\n.modal {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  right: 0;\n  bottom: 0;\n  transform: translate(-50%, -50%);\n  width: calc(0.8 * min(100vh, 100vw));\n  height: calc(0.8 * min(100vh, 100vw) + 54px);\n  z-index: 3;\n  display: none;\n}\n\n.img-to-download {\n  width: calc(0.8 * min(100vh, 100vw));\n}\n\n@media (max-width: 768px) {\n  main {\n    flex-direction: column-reverse;\n    padding: 20px 0;\n  }\n  #menu {\n    width: 100%;\n  }\n  #menu-row {\n    flex-direction: row;\n    max-width: 500px;\n    width: 100%;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/html-to-image/es/apply-style.js":
/*!******************************************************!*\
  !*** ./node_modules/html-to-image/es/apply-style.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyStyle": () => (/* binding */ applyStyle)
/* harmony export */ });
function applyStyle(node, options) {
    const { style } = node;
    if (options.backgroundColor) {
        style.backgroundColor = options.backgroundColor;
    }
    if (options.width) {
        style.width = `${options.width}px`;
    }
    if (options.height) {
        style.height = `${options.height}px`;
    }
    const manual = options.style;
    if (manual != null) {
        Object.keys(manual).forEach((key) => {
            style[key] = manual[key];
        });
    }
    return node;
}
//# sourceMappingURL=apply-style.js.map

/***/ }),

/***/ "./node_modules/html-to-image/es/clone-node.js":
/*!*****************************************************!*\
  !*** ./node_modules/html-to-image/es/clone-node.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cloneNode": () => (/* binding */ cloneNode)
/* harmony export */ });
/* harmony import */ var _clone_pseudos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clone-pseudos */ "./node_modules/html-to-image/es/clone-pseudos.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./node_modules/html-to-image/es/util.js");
/* harmony import */ var _mimes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mimes */ "./node_modules/html-to-image/es/mimes.js");
/* harmony import */ var _dataurl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dataurl */ "./node_modules/html-to-image/es/dataurl.js");




async function cloneCanvasElement(canvas) {
    const dataURL = canvas.toDataURL();
    if (dataURL === 'data:,') {
        return canvas.cloneNode(false);
    }
    return (0,_util__WEBPACK_IMPORTED_MODULE_1__.createImage)(dataURL);
}
async function cloneVideoElement(video, options) {
    if (video.currentSrc) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = video.clientWidth;
        canvas.height = video.clientHeight;
        ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const dataURL = canvas.toDataURL();
        return (0,_util__WEBPACK_IMPORTED_MODULE_1__.createImage)(dataURL);
    }
    const poster = video.poster;
    const contentType = (0,_mimes__WEBPACK_IMPORTED_MODULE_2__.getMimeType)(poster);
    const dataURL = await (0,_dataurl__WEBPACK_IMPORTED_MODULE_3__.resourceToDataURL)(poster, contentType, options);
    return (0,_util__WEBPACK_IMPORTED_MODULE_1__.createImage)(dataURL);
}
async function cloneIFrameElement(iframe) {
    var _a;
    try {
        if ((_a = iframe === null || iframe === void 0 ? void 0 : iframe.contentDocument) === null || _a === void 0 ? void 0 : _a.body) {
            return (await cloneNode(iframe.contentDocument.body, {}, true));
        }
    }
    catch (_b) {
        // Failed to clone iframe
    }
    return iframe.cloneNode(false);
}
async function cloneSingleNode(node, options) {
    if ((0,_util__WEBPACK_IMPORTED_MODULE_1__.isInstanceOfElement)(node, HTMLCanvasElement)) {
        return cloneCanvasElement(node);
    }
    if ((0,_util__WEBPACK_IMPORTED_MODULE_1__.isInstanceOfElement)(node, HTMLVideoElement)) {
        return cloneVideoElement(node, options);
    }
    if ((0,_util__WEBPACK_IMPORTED_MODULE_1__.isInstanceOfElement)(node, HTMLIFrameElement)) {
        return cloneIFrameElement(node);
    }
    return node.cloneNode(false);
}
const isSlotElement = (node) => node.tagName != null && node.tagName.toUpperCase() === 'SLOT';
async function cloneChildren(nativeNode, clonedNode, options) {
    var _a, _b;
    let children = [];
    if (isSlotElement(nativeNode) && nativeNode.assignedNodes) {
        children = (0,_util__WEBPACK_IMPORTED_MODULE_1__.toArray)(nativeNode.assignedNodes());
    }
    else if ((0,_util__WEBPACK_IMPORTED_MODULE_1__.isInstanceOfElement)(nativeNode, HTMLIFrameElement) &&
        ((_a = nativeNode.contentDocument) === null || _a === void 0 ? void 0 : _a.body)) {
        children = (0,_util__WEBPACK_IMPORTED_MODULE_1__.toArray)(nativeNode.contentDocument.body.childNodes);
    }
    else {
        children = (0,_util__WEBPACK_IMPORTED_MODULE_1__.toArray)(((_b = nativeNode.shadowRoot) !== null && _b !== void 0 ? _b : nativeNode).childNodes);
    }
    if (children.length === 0 ||
        (0,_util__WEBPACK_IMPORTED_MODULE_1__.isInstanceOfElement)(nativeNode, HTMLVideoElement)) {
        return clonedNode;
    }
    await children.reduce((deferred, child) => deferred
        .then(() => cloneNode(child, options))
        .then((clonedChild) => {
        if (clonedChild) {
            clonedNode.appendChild(clonedChild);
        }
    }), Promise.resolve());
    return clonedNode;
}
function cloneCSSStyle(nativeNode, clonedNode) {
    const targetStyle = clonedNode.style;
    if (!targetStyle) {
        return;
    }
    const sourceStyle = window.getComputedStyle(nativeNode);
    if (sourceStyle.cssText) {
        targetStyle.cssText = sourceStyle.cssText;
        targetStyle.transformOrigin = sourceStyle.transformOrigin;
    }
    else {
        (0,_util__WEBPACK_IMPORTED_MODULE_1__.toArray)(sourceStyle).forEach((name) => {
            let value = sourceStyle.getPropertyValue(name);
            if (name === 'font-size' && value.endsWith('px')) {
                const reducedFont = Math.floor(parseFloat(value.substring(0, value.length - 2))) - 0.1;
                value = `${reducedFont}px`;
            }
            if ((0,_util__WEBPACK_IMPORTED_MODULE_1__.isInstanceOfElement)(nativeNode, HTMLIFrameElement) &&
                name === 'display' &&
                value === 'inline') {
                value = 'block';
            }
            if (name === 'd' && clonedNode.getAttribute('d')) {
                value = `path(${clonedNode.getAttribute('d')})`;
            }
            targetStyle.setProperty(name, value, sourceStyle.getPropertyPriority(name));
        });
    }
}
function cloneInputValue(nativeNode, clonedNode) {
    if ((0,_util__WEBPACK_IMPORTED_MODULE_1__.isInstanceOfElement)(nativeNode, HTMLTextAreaElement)) {
        clonedNode.innerHTML = nativeNode.value;
    }
    if ((0,_util__WEBPACK_IMPORTED_MODULE_1__.isInstanceOfElement)(nativeNode, HTMLInputElement)) {
        clonedNode.setAttribute('value', nativeNode.value);
    }
}
function cloneSelectValue(nativeNode, clonedNode) {
    if ((0,_util__WEBPACK_IMPORTED_MODULE_1__.isInstanceOfElement)(nativeNode, HTMLSelectElement)) {
        const clonedSelect = clonedNode;
        const selectedOption = Array.from(clonedSelect.children).find((child) => nativeNode.value === child.getAttribute('value'));
        if (selectedOption) {
            selectedOption.setAttribute('selected', '');
        }
    }
}
function decorate(nativeNode, clonedNode) {
    if ((0,_util__WEBPACK_IMPORTED_MODULE_1__.isInstanceOfElement)(clonedNode, Element)) {
        cloneCSSStyle(nativeNode, clonedNode);
        (0,_clone_pseudos__WEBPACK_IMPORTED_MODULE_0__.clonePseudoElements)(nativeNode, clonedNode);
        cloneInputValue(nativeNode, clonedNode);
        cloneSelectValue(nativeNode, clonedNode);
    }
    return clonedNode;
}
async function ensureSVGSymbols(clone, options) {
    const uses = clone.querySelectorAll ? clone.querySelectorAll('use') : [];
    if (uses.length === 0) {
        return clone;
    }
    const processedDefs = {};
    for (let i = 0; i < uses.length; i++) {
        const use = uses[i];
        const id = use.getAttribute('xlink:href');
        if (id) {
            const exist = clone.querySelector(id);
            const definition = document.querySelector(id);
            if (!exist && definition && !processedDefs[id]) {
                // eslint-disable-next-line no-await-in-loop
                processedDefs[id] = (await cloneNode(definition, options, true));
            }
        }
    }
    const nodes = Object.values(processedDefs);
    if (nodes.length) {
        const ns = 'http://www.w3.org/1999/xhtml';
        const svg = document.createElementNS(ns, 'svg');
        svg.setAttribute('xmlns', ns);
        svg.style.position = 'absolute';
        svg.style.width = '0';
        svg.style.height = '0';
        svg.style.overflow = 'hidden';
        svg.style.display = 'none';
        const defs = document.createElementNS(ns, 'defs');
        svg.appendChild(defs);
        for (let i = 0; i < nodes.length; i++) {
            defs.appendChild(nodes[i]);
        }
        clone.appendChild(svg);
    }
    return clone;
}
async function cloneNode(node, options, isRoot) {
    if (!isRoot && options.filter && !options.filter(node)) {
        return null;
    }
    return Promise.resolve(node)
        .then((clonedNode) => cloneSingleNode(clonedNode, options))
        .then((clonedNode) => cloneChildren(node, clonedNode, options))
        .then((clonedNode) => decorate(node, clonedNode))
        .then((clonedNode) => ensureSVGSymbols(clonedNode, options));
}
//# sourceMappingURL=clone-node.js.map

/***/ }),

/***/ "./node_modules/html-to-image/es/clone-pseudos.js":
/*!********************************************************!*\
  !*** ./node_modules/html-to-image/es/clone-pseudos.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clonePseudoElements": () => (/* binding */ clonePseudoElements)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./node_modules/html-to-image/es/util.js");

function formatCSSText(style) {
    const content = style.getPropertyValue('content');
    return `${style.cssText} content: '${content.replace(/'|"/g, '')}';`;
}
function formatCSSProperties(style) {
    return (0,_util__WEBPACK_IMPORTED_MODULE_0__.toArray)(style)
        .map((name) => {
        const value = style.getPropertyValue(name);
        const priority = style.getPropertyPriority(name);
        return `${name}: ${value}${priority ? ' !important' : ''};`;
    })
        .join(' ');
}
function getPseudoElementStyle(className, pseudo, style) {
    const selector = `.${className}:${pseudo}`;
    const cssText = style.cssText
        ? formatCSSText(style)
        : formatCSSProperties(style);
    return document.createTextNode(`${selector}{${cssText}}`);
}
function clonePseudoElement(nativeNode, clonedNode, pseudo) {
    const style = window.getComputedStyle(nativeNode, pseudo);
    const content = style.getPropertyValue('content');
    if (content === '' || content === 'none') {
        return;
    }
    const className = (0,_util__WEBPACK_IMPORTED_MODULE_0__.uuid)();
    try {
        clonedNode.className = `${clonedNode.className} ${className}`;
    }
    catch (err) {
        return;
    }
    const styleElement = document.createElement('style');
    styleElement.appendChild(getPseudoElementStyle(className, pseudo, style));
    clonedNode.appendChild(styleElement);
}
function clonePseudoElements(nativeNode, clonedNode) {
    clonePseudoElement(nativeNode, clonedNode, ':before');
    clonePseudoElement(nativeNode, clonedNode, ':after');
}
//# sourceMappingURL=clone-pseudos.js.map

/***/ }),

/***/ "./node_modules/html-to-image/es/dataurl.js":
/*!**************************************************!*\
  !*** ./node_modules/html-to-image/es/dataurl.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchAsDataURL": () => (/* binding */ fetchAsDataURL),
/* harmony export */   "isDataUrl": () => (/* binding */ isDataUrl),
/* harmony export */   "makeDataUrl": () => (/* binding */ makeDataUrl),
/* harmony export */   "resourceToDataURL": () => (/* binding */ resourceToDataURL)
/* harmony export */ });
function getContentFromDataUrl(dataURL) {
    return dataURL.split(/,/)[1];
}
function isDataUrl(url) {
    return url.search(/^(data:)/) !== -1;
}
function makeDataUrl(content, mimeType) {
    return `data:${mimeType};base64,${content}`;
}
async function fetchAsDataURL(url, init, process) {
    const res = await fetch(url, init);
    if (res.status === 404) {
        throw new Error(`Resource "${res.url}" not found`);
    }
    const blob = await res.blob();
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onerror = reject;
        reader.onloadend = () => {
            try {
                resolve(process({ res, result: reader.result }));
            }
            catch (error) {
                reject(error);
            }
        };
        reader.readAsDataURL(blob);
    });
}
const cache = {};
function getCacheKey(url, contentType, includeQueryParams) {
    let key = url.replace(/\?.*/, '');
    if (includeQueryParams) {
        key = url;
    }
    // font resource
    if (/ttf|otf|eot|woff2?/i.test(key)) {
        key = key.replace(/.*\//, '');
    }
    return contentType ? `[${contentType}]${key}` : key;
}
async function resourceToDataURL(resourceUrl, contentType, options) {
    const cacheKey = getCacheKey(resourceUrl, contentType, options.includeQueryParams);
    if (cache[cacheKey] != null) {
        return cache[cacheKey];
    }
    // ref: https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Bypassing_the_cache
    if (options.cacheBust) {
        // eslint-disable-next-line no-param-reassign
        resourceUrl += (/\?/.test(resourceUrl) ? '&' : '?') + new Date().getTime();
    }
    let dataURL;
    try {
        const content = await fetchAsDataURL(resourceUrl, options.fetchRequestInit, ({ res, result }) => {
            if (!contentType) {
                // eslint-disable-next-line no-param-reassign
                contentType = res.headers.get('Content-Type') || '';
            }
            return getContentFromDataUrl(result);
        });
        dataURL = makeDataUrl(content, contentType);
    }
    catch (error) {
        dataURL = options.imagePlaceholder || '';
        let msg = `Failed to fetch resource: ${resourceUrl}`;
        if (error) {
            msg = typeof error === 'string' ? error : error.message;
        }
        if (msg) {
            console.warn(msg);
        }
    }
    cache[cacheKey] = dataURL;
    return dataURL;
}
//# sourceMappingURL=dataurl.js.map

/***/ }),

/***/ "./node_modules/html-to-image/es/embed-images.js":
/*!*******************************************************!*\
  !*** ./node_modules/html-to-image/es/embed-images.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "embedImages": () => (/* binding */ embedImages)
/* harmony export */ });
/* harmony import */ var _embed_resources__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./embed-resources */ "./node_modules/html-to-image/es/embed-resources.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./node_modules/html-to-image/es/util.js");
/* harmony import */ var _dataurl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataurl */ "./node_modules/html-to-image/es/dataurl.js");
/* harmony import */ var _mimes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mimes */ "./node_modules/html-to-image/es/mimes.js");




async function embedProp(propName, node, options) {
    var _a;
    const propValue = (_a = node.style) === null || _a === void 0 ? void 0 : _a.getPropertyValue(propName);
    if (propValue) {
        const cssString = await (0,_embed_resources__WEBPACK_IMPORTED_MODULE_0__.embedResources)(propValue, null, options);
        node.style.setProperty(propName, cssString, node.style.getPropertyPriority(propName));
        return true;
    }
    return false;
}
async function embedBackground(clonedNode, options) {
    if (!(await embedProp('background', clonedNode, options))) {
        await embedProp('background-image', clonedNode, options);
    }
    if (!(await embedProp('mask', clonedNode, options))) {
        await embedProp('mask-image', clonedNode, options);
    }
}
async function embedImageNode(clonedNode, options) {
    const isImageElement = (0,_util__WEBPACK_IMPORTED_MODULE_1__.isInstanceOfElement)(clonedNode, HTMLImageElement);
    if (!(isImageElement && !(0,_dataurl__WEBPACK_IMPORTED_MODULE_2__.isDataUrl)(clonedNode.src)) &&
        !((0,_util__WEBPACK_IMPORTED_MODULE_1__.isInstanceOfElement)(clonedNode, SVGImageElement) &&
            !(0,_dataurl__WEBPACK_IMPORTED_MODULE_2__.isDataUrl)(clonedNode.href.baseVal))) {
        return;
    }
    const url = isImageElement ? clonedNode.src : clonedNode.href.baseVal;
    const dataURL = await (0,_dataurl__WEBPACK_IMPORTED_MODULE_2__.resourceToDataURL)(url, (0,_mimes__WEBPACK_IMPORTED_MODULE_3__.getMimeType)(url), options);
    await new Promise((resolve, reject) => {
        clonedNode.onload = resolve;
        clonedNode.onerror = reject;
        const image = clonedNode;
        if (image.decode) {
            image.decode = resolve;
        }
        if (image.loading === 'lazy') {
            image.loading = 'eager';
        }
        if (isImageElement) {
            clonedNode.srcset = '';
            clonedNode.src = dataURL;
        }
        else {
            clonedNode.href.baseVal = dataURL;
        }
    });
}
async function embedChildren(clonedNode, options) {
    const children = (0,_util__WEBPACK_IMPORTED_MODULE_1__.toArray)(clonedNode.childNodes);
    const deferreds = children.map((child) => embedImages(child, options));
    await Promise.all(deferreds).then(() => clonedNode);
}
async function embedImages(clonedNode, options) {
    if ((0,_util__WEBPACK_IMPORTED_MODULE_1__.isInstanceOfElement)(clonedNode, Element)) {
        await embedBackground(clonedNode, options);
        await embedImageNode(clonedNode, options);
        await embedChildren(clonedNode, options);
    }
}
//# sourceMappingURL=embed-images.js.map

/***/ }),

/***/ "./node_modules/html-to-image/es/embed-resources.js":
/*!**********************************************************!*\
  !*** ./node_modules/html-to-image/es/embed-resources.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "embed": () => (/* binding */ embed),
/* harmony export */   "embedResources": () => (/* binding */ embedResources),
/* harmony export */   "parseURLs": () => (/* binding */ parseURLs),
/* harmony export */   "shouldEmbed": () => (/* binding */ shouldEmbed)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./node_modules/html-to-image/es/util.js");
/* harmony import */ var _mimes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mimes */ "./node_modules/html-to-image/es/mimes.js");
/* harmony import */ var _dataurl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataurl */ "./node_modules/html-to-image/es/dataurl.js");



const URL_REGEX = /url\((['"]?)([^'"]+?)\1\)/g;
const URL_WITH_FORMAT_REGEX = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g;
const FONT_SRC_REGEX = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function toRegex(url) {
    // eslint-disable-next-line no-useless-escape
    const escaped = url.replace(/([.*+?^${}()|\[\]\/\\])/g, '\\$1');
    return new RegExp(`(url\\(['"]?)(${escaped})(['"]?\\))`, 'g');
}
function parseURLs(cssText) {
    const urls = [];
    cssText.replace(URL_REGEX, (raw, quotation, url) => {
        urls.push(url);
        return raw;
    });
    return urls.filter((url) => !(0,_dataurl__WEBPACK_IMPORTED_MODULE_2__.isDataUrl)(url));
}
async function embed(cssText, resourceURL, baseURL, options, getContentFromUrl) {
    try {
        const resolvedURL = baseURL ? (0,_util__WEBPACK_IMPORTED_MODULE_0__.resolveUrl)(resourceURL, baseURL) : resourceURL;
        const contentType = (0,_mimes__WEBPACK_IMPORTED_MODULE_1__.getMimeType)(resourceURL);
        let dataURL;
        if (getContentFromUrl) {
            const content = await getContentFromUrl(resolvedURL);
            dataURL = (0,_dataurl__WEBPACK_IMPORTED_MODULE_2__.makeDataUrl)(content, contentType);
        }
        else {
            dataURL = await (0,_dataurl__WEBPACK_IMPORTED_MODULE_2__.resourceToDataURL)(resolvedURL, contentType, options);
        }
        return cssText.replace(toRegex(resourceURL), `$1${dataURL}$3`);
    }
    catch (error) {
        // pass
    }
    return cssText;
}
function filterPreferredFontFormat(str, { preferredFontFormat }) {
    return !preferredFontFormat
        ? str
        : str.replace(FONT_SRC_REGEX, (match) => {
            // eslint-disable-next-line no-constant-condition
            while (true) {
                const [src, , format] = URL_WITH_FORMAT_REGEX.exec(match) || [];
                if (!format) {
                    return '';
                }
                if (format === preferredFontFormat) {
                    return `src: ${src};`;
                }
            }
        });
}
function shouldEmbed(url) {
    return url.search(URL_REGEX) !== -1;
}
async function embedResources(cssText, baseUrl, options) {
    if (!shouldEmbed(cssText)) {
        return cssText;
    }
    const filteredCSSText = filterPreferredFontFormat(cssText, options);
    const urls = parseURLs(filteredCSSText);
    return urls.reduce((deferred, url) => deferred.then((css) => embed(css, url, baseUrl, options)), Promise.resolve(filteredCSSText));
}
//# sourceMappingURL=embed-resources.js.map

/***/ }),

/***/ "./node_modules/html-to-image/es/embed-webfonts.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-to-image/es/embed-webfonts.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "embedWebFonts": () => (/* binding */ embedWebFonts),
/* harmony export */   "getWebFontCSS": () => (/* binding */ getWebFontCSS)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./node_modules/html-to-image/es/util.js");
/* harmony import */ var _dataurl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataurl */ "./node_modules/html-to-image/es/dataurl.js");
/* harmony import */ var _embed_resources__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./embed-resources */ "./node_modules/html-to-image/es/embed-resources.js");



const cssFetchCache = {};
async function fetchCSS(url) {
    let cache = cssFetchCache[url];
    if (cache != null) {
        return cache;
    }
    const res = await fetch(url);
    const cssText = await res.text();
    cache = { url, cssText };
    cssFetchCache[url] = cache;
    return cache;
}
async function embedFonts(data, options) {
    let cssText = data.cssText;
    const regexUrl = /url\(["']?([^"')]+)["']?\)/g;
    const fontLocs = cssText.match(/url\([^)]+\)/g) || [];
    const loadFonts = fontLocs.map(async (loc) => {
        let url = loc.replace(regexUrl, '$1');
        if (!url.startsWith('https://')) {
            url = new URL(url, data.url).href;
        }
        return (0,_dataurl__WEBPACK_IMPORTED_MODULE_1__.fetchAsDataURL)(url, options.fetchRequestInit, ({ result }) => {
            cssText = cssText.replace(loc, `url(${result})`);
            return [loc, result];
        });
    });
    return Promise.all(loadFonts).then(() => cssText);
}
function parseCSS(source) {
    if (source == null) {
        return [];
    }
    const result = [];
    const commentsRegex = /(\/\*[\s\S]*?\*\/)/gi;
    // strip out comments
    let cssText = source.replace(commentsRegex, '');
    // eslint-disable-next-line prefer-regex-literals
    const keyframesRegex = new RegExp('((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})', 'gi');
    // eslint-disable-next-line no-constant-condition
    while (true) {
        const matches = keyframesRegex.exec(cssText);
        if (matches === null) {
            break;
        }
        result.push(matches[0]);
    }
    cssText = cssText.replace(keyframesRegex, '');
    const importRegex = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi;
    // to match css & media queries together
    const combinedCSSRegex = '((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]' +
        '*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})';
    // unified regex
    const unifiedRegex = new RegExp(combinedCSSRegex, 'gi');
    // eslint-disable-next-line no-constant-condition
    while (true) {
        let matches = importRegex.exec(cssText);
        if (matches === null) {
            matches = unifiedRegex.exec(cssText);
            if (matches === null) {
                break;
            }
            else {
                importRegex.lastIndex = unifiedRegex.lastIndex;
            }
        }
        else {
            unifiedRegex.lastIndex = importRegex.lastIndex;
        }
        result.push(matches[0]);
    }
    return result;
}
async function getCSSRules(styleSheets, options) {
    const ret = [];
    const deferreds = [];
    // First loop inlines imports
    styleSheets.forEach((sheet) => {
        if ('cssRules' in sheet) {
            try {
                (0,_util__WEBPACK_IMPORTED_MODULE_0__.toArray)(sheet.cssRules || []).forEach((item, index) => {
                    if (item.type === CSSRule.IMPORT_RULE) {
                        let importIndex = index + 1;
                        const url = item.href;
                        const deferred = fetchCSS(url)
                            .then((metadata) => embedFonts(metadata, options))
                            .then((cssText) => parseCSS(cssText).forEach((rule) => {
                            try {
                                sheet.insertRule(rule, rule.startsWith('@import')
                                    ? (importIndex += 1)
                                    : sheet.cssRules.length);
                            }
                            catch (error) {
                                console.error('Error inserting rule from remote css', {
                                    rule,
                                    error,
                                });
                            }
                        }))
                            .catch((e) => {
                            console.error('Error loading remote css', e.toString());
                        });
                        deferreds.push(deferred);
                    }
                });
            }
            catch (e) {
                const inline = styleSheets.find((a) => a.href == null) || document.styleSheets[0];
                if (sheet.href != null) {
                    deferreds.push(fetchCSS(sheet.href)
                        .then((metadata) => embedFonts(metadata, options))
                        .then((cssText) => parseCSS(cssText).forEach((rule) => {
                        inline.insertRule(rule, sheet.cssRules.length);
                    }))
                        .catch((err) => {
                        console.error('Error loading remote stylesheet', err);
                    }));
                }
                console.error('Error inlining remote css file', e);
            }
        }
    });
    return Promise.all(deferreds).then(() => {
        // Second loop parses rules
        styleSheets.forEach((sheet) => {
            if ('cssRules' in sheet) {
                try {
                    (0,_util__WEBPACK_IMPORTED_MODULE_0__.toArray)(sheet.cssRules || []).forEach((item) => {
                        ret.push(item);
                    });
                }
                catch (e) {
                    console.error(`Error while reading CSS rules from ${sheet.href}`, e);
                }
            }
        });
        return ret;
    });
}
function getWebFontRules(cssRules) {
    return cssRules
        .filter((rule) => rule.type === CSSRule.FONT_FACE_RULE)
        .filter((rule) => (0,_embed_resources__WEBPACK_IMPORTED_MODULE_2__.shouldEmbed)(rule.style.getPropertyValue('src')));
}
async function parseWebFontRules(node, options) {
    if (node.ownerDocument == null) {
        throw new Error('Provided element is not within a Document');
    }
    const styleSheets = (0,_util__WEBPACK_IMPORTED_MODULE_0__.toArray)(node.ownerDocument.styleSheets);
    const cssRules = await getCSSRules(styleSheets, options);
    return getWebFontRules(cssRules);
}
async function getWebFontCSS(node, options) {
    const rules = await parseWebFontRules(node, options);
    const cssTexts = await Promise.all(rules.map((rule) => {
        const baseUrl = rule.parentStyleSheet ? rule.parentStyleSheet.href : null;
        return (0,_embed_resources__WEBPACK_IMPORTED_MODULE_2__.embedResources)(rule.cssText, baseUrl, options);
    }));
    return cssTexts.join('\n');
}
async function embedWebFonts(clonedNode, options) {
    const cssText = options.fontEmbedCSS != null
        ? options.fontEmbedCSS
        : options.skipFonts
            ? null
            : await getWebFontCSS(clonedNode, options);
    if (cssText) {
        const styleNode = document.createElement('style');
        const sytleContent = document.createTextNode(cssText);
        styleNode.appendChild(sytleContent);
        if (clonedNode.firstChild) {
            clonedNode.insertBefore(styleNode, clonedNode.firstChild);
        }
        else {
            clonedNode.appendChild(styleNode);
        }
    }
}
//# sourceMappingURL=embed-webfonts.js.map

/***/ }),

/***/ "./node_modules/html-to-image/es/index.js":
/*!************************************************!*\
  !*** ./node_modules/html-to-image/es/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFontEmbedCSS": () => (/* binding */ getFontEmbedCSS),
/* harmony export */   "toBlob": () => (/* binding */ toBlob),
/* harmony export */   "toCanvas": () => (/* binding */ toCanvas),
/* harmony export */   "toJpeg": () => (/* binding */ toJpeg),
/* harmony export */   "toPixelData": () => (/* binding */ toPixelData),
/* harmony export */   "toPng": () => (/* binding */ toPng),
/* harmony export */   "toSvg": () => (/* binding */ toSvg)
/* harmony export */ });
/* harmony import */ var _clone_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clone-node */ "./node_modules/html-to-image/es/clone-node.js");
/* harmony import */ var _embed_images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./embed-images */ "./node_modules/html-to-image/es/embed-images.js");
/* harmony import */ var _apply_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apply-style */ "./node_modules/html-to-image/es/apply-style.js");
/* harmony import */ var _embed_webfonts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./embed-webfonts */ "./node_modules/html-to-image/es/embed-webfonts.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ "./node_modules/html-to-image/es/util.js");





async function toSvg(node, options = {}) {
    const { width, height } = (0,_util__WEBPACK_IMPORTED_MODULE_4__.getImageSize)(node, options);
    const clonedNode = (await (0,_clone_node__WEBPACK_IMPORTED_MODULE_0__.cloneNode)(node, options, true));
    await (0,_embed_webfonts__WEBPACK_IMPORTED_MODULE_3__.embedWebFonts)(clonedNode, options);
    await (0,_embed_images__WEBPACK_IMPORTED_MODULE_1__.embedImages)(clonedNode, options);
    (0,_apply_style__WEBPACK_IMPORTED_MODULE_2__.applyStyle)(clonedNode, options);
    const datauri = await (0,_util__WEBPACK_IMPORTED_MODULE_4__.nodeToDataURL)(clonedNode, width, height);
    return datauri;
}
async function toCanvas(node, options = {}) {
    const { width, height } = (0,_util__WEBPACK_IMPORTED_MODULE_4__.getImageSize)(node, options);
    const svg = await toSvg(node, options);
    const img = await (0,_util__WEBPACK_IMPORTED_MODULE_4__.createImage)(svg);
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const ratio = options.pixelRatio || (0,_util__WEBPACK_IMPORTED_MODULE_4__.getPixelRatio)();
    const canvasWidth = options.canvasWidth || width;
    const canvasHeight = options.canvasHeight || height;
    canvas.width = canvasWidth * ratio;
    canvas.height = canvasHeight * ratio;
    if (!options.skipAutoScale) {
        (0,_util__WEBPACK_IMPORTED_MODULE_4__.checkCanvasDimensions)(canvas);
    }
    canvas.style.width = `${canvasWidth}`;
    canvas.style.height = `${canvasHeight}`;
    if (options.backgroundColor) {
        context.fillStyle = options.backgroundColor;
        context.fillRect(0, 0, canvas.width, canvas.height);
    }
    context.drawImage(img, 0, 0, canvas.width, canvas.height);
    return canvas;
}
async function toPixelData(node, options = {}) {
    const { width, height } = (0,_util__WEBPACK_IMPORTED_MODULE_4__.getImageSize)(node, options);
    const canvas = await toCanvas(node, options);
    const ctx = canvas.getContext('2d');
    return ctx.getImageData(0, 0, width, height).data;
}
async function toPng(node, options = {}) {
    const canvas = await toCanvas(node, options);
    return canvas.toDataURL();
}
async function toJpeg(node, options = {}) {
    const canvas = await toCanvas(node, options);
    return canvas.toDataURL('image/jpeg', options.quality || 1);
}
async function toBlob(node, options = {}) {
    const canvas = await toCanvas(node, options);
    const blob = await (0,_util__WEBPACK_IMPORTED_MODULE_4__.canvasToBlob)(canvas);
    return blob;
}
async function getFontEmbedCSS(node, options = {}) {
    return (0,_embed_webfonts__WEBPACK_IMPORTED_MODULE_3__.getWebFontCSS)(node, options);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/html-to-image/es/mimes.js":
/*!************************************************!*\
  !*** ./node_modules/html-to-image/es/mimes.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMimeType": () => (/* binding */ getMimeType)
/* harmony export */ });
const WOFF = 'application/font-woff';
const JPEG = 'image/jpeg';
const mimes = {
    woff: WOFF,
    woff2: WOFF,
    ttf: 'application/font-truetype',
    eot: 'application/vnd.ms-fontobject',
    png: 'image/png',
    jpg: JPEG,
    jpeg: JPEG,
    gif: 'image/gif',
    tiff: 'image/tiff',
    svg: 'image/svg+xml',
    webp: 'image/webp',
};
function getExtension(url) {
    const match = /\.([^./]*?)$/g.exec(url);
    return match ? match[1] : '';
}
function getMimeType(url) {
    const extension = getExtension(url).toLowerCase();
    return mimes[extension] || '';
}
//# sourceMappingURL=mimes.js.map

/***/ }),

/***/ "./node_modules/html-to-image/es/util.js":
/*!***********************************************!*\
  !*** ./node_modules/html-to-image/es/util.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canvasToBlob": () => (/* binding */ canvasToBlob),
/* harmony export */   "checkCanvasDimensions": () => (/* binding */ checkCanvasDimensions),
/* harmony export */   "createImage": () => (/* binding */ createImage),
/* harmony export */   "delay": () => (/* binding */ delay),
/* harmony export */   "getImageSize": () => (/* binding */ getImageSize),
/* harmony export */   "getPixelRatio": () => (/* binding */ getPixelRatio),
/* harmony export */   "isInstanceOfElement": () => (/* binding */ isInstanceOfElement),
/* harmony export */   "nodeToDataURL": () => (/* binding */ nodeToDataURL),
/* harmony export */   "resolveUrl": () => (/* binding */ resolveUrl),
/* harmony export */   "svgToDataURL": () => (/* binding */ svgToDataURL),
/* harmony export */   "toArray": () => (/* binding */ toArray),
/* harmony export */   "uuid": () => (/* binding */ uuid)
/* harmony export */ });
function resolveUrl(url, baseUrl) {
    // url is absolute already
    if (url.match(/^[a-z]+:\/\//i)) {
        return url;
    }
    // url is absolute already, without protocol
    if (url.match(/^\/\//)) {
        return window.location.protocol + url;
    }
    // dataURI, mailto:, tel:, etc.
    if (url.match(/^[a-z]+:/i)) {
        return url;
    }
    const doc = document.implementation.createHTMLDocument();
    const base = doc.createElement('base');
    const a = doc.createElement('a');
    doc.head.appendChild(base);
    doc.body.appendChild(a);
    if (baseUrl) {
        base.href = baseUrl;
    }
    a.href = url;
    return a.href;
}
const uuid = (() => {
    // generate uuid for className of pseudo elements.
    // We should not use GUIDs, otherwise pseudo elements sometimes cannot be captured.
    let counter = 0;
    // ref: http://stackoverflow.com/a/6248722/2519373
    const random = () => 
    // eslint-disable-next-line no-bitwise
    `0000${((Math.random() * 36 ** 4) << 0).toString(36)}`.slice(-4);
    return () => {
        counter += 1;
        return `u${random()}${counter}`;
    };
})();
function delay(ms) {
    return (args) => new Promise((resolve) => {
        setTimeout(() => resolve(args), ms);
    });
}
function toArray(arrayLike) {
    const arr = [];
    for (let i = 0, l = arrayLike.length; i < l; i++) {
        arr.push(arrayLike[i]);
    }
    return arr;
}
function px(node, styleProperty) {
    const win = node.ownerDocument.defaultView || window;
    const val = win.getComputedStyle(node).getPropertyValue(styleProperty);
    return val ? parseFloat(val.replace('px', '')) : 0;
}
function getNodeWidth(node) {
    const leftBorder = px(node, 'border-left-width');
    const rightBorder = px(node, 'border-right-width');
    return node.clientWidth + leftBorder + rightBorder;
}
function getNodeHeight(node) {
    const topBorder = px(node, 'border-top-width');
    const bottomBorder = px(node, 'border-bottom-width');
    return node.clientHeight + topBorder + bottomBorder;
}
function getImageSize(targetNode, options = {}) {
    const width = options.width || getNodeWidth(targetNode);
    const height = options.height || getNodeHeight(targetNode);
    return { width, height };
}
function getPixelRatio() {
    let ratio;
    let FINAL_PROCESS;
    try {
        FINAL_PROCESS = process;
    }
    catch (e) {
        // pass
    }
    const val = FINAL_PROCESS && FINAL_PROCESS.env
        ? FINAL_PROCESS.env.devicePixelRatio
        : null;
    if (val) {
        ratio = parseInt(val, 10);
        if (Number.isNaN(ratio)) {
            ratio = 1;
        }
    }
    return ratio || window.devicePixelRatio || 1;
}
// @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas#maximum_canvas_size
const canvasDimensionLimit = 16384;
function checkCanvasDimensions(canvas) {
    if (canvas.width > canvasDimensionLimit ||
        canvas.height > canvasDimensionLimit) {
        if (canvas.width > canvasDimensionLimit &&
            canvas.height > canvasDimensionLimit) {
            if (canvas.width > canvas.height) {
                canvas.height *= canvasDimensionLimit / canvas.width;
                canvas.width = canvasDimensionLimit;
            }
            else {
                canvas.width *= canvasDimensionLimit / canvas.height;
                canvas.height = canvasDimensionLimit;
            }
        }
        else if (canvas.width > canvasDimensionLimit) {
            canvas.height *= canvasDimensionLimit / canvas.width;
            canvas.width = canvasDimensionLimit;
        }
        else {
            canvas.width *= canvasDimensionLimit / canvas.height;
            canvas.height = canvasDimensionLimit;
        }
    }
}
function canvasToBlob(canvas, options = {}) {
    if (canvas.toBlob) {
        return new Promise((resolve) => {
            canvas.toBlob(resolve, options.type ? options.type : 'image/png', options.quality ? options.quality : 1);
        });
    }
    return new Promise((resolve) => {
        const binaryString = window.atob(canvas
            .toDataURL(options.type ? options.type : undefined, options.quality ? options.quality : undefined)
            .split(',')[1]);
        const len = binaryString.length;
        const binaryArray = new Uint8Array(len);
        for (let i = 0; i < len; i += 1) {
            binaryArray[i] = binaryString.charCodeAt(i);
        }
        resolve(new Blob([binaryArray], {
            type: options.type ? options.type : 'image/png',
        }));
    });
}
function createImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.decode = () => resolve(img);
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.crossOrigin = 'anonymous';
        img.decoding = 'async';
        img.src = url;
    });
}
async function svgToDataURL(svg) {
    return Promise.resolve()
        .then(() => new XMLSerializer().serializeToString(svg))
        .then(encodeURIComponent)
        .then((html) => `data:image/svg+xml;charset=utf-8,${html}`);
}
async function nodeToDataURL(node, width, height) {
    const xmlns = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(xmlns, 'svg');
    const foreignObject = document.createElementNS(xmlns, 'foreignObject');
    svg.setAttribute('width', `${width}`);
    svg.setAttribute('height', `${height}`);
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
    foreignObject.setAttribute('width', '100%');
    foreignObject.setAttribute('height', '100%');
    foreignObject.setAttribute('x', '0');
    foreignObject.setAttribute('y', '0');
    foreignObject.setAttribute('externalResourcesRequired', 'true');
    svg.appendChild(foreignObject);
    foreignObject.appendChild(node);
    return svgToDataURL(svg);
}
const isInstanceOfElement = (node, instance) => {
    if (node instanceof instance)
        return true;
    const nodePrototype = Object.getPrototypeOf(node);
    if (nodePrototype === null)
        return false;
    return (nodePrototype.constructor.name === instance.name ||
        isInstanceOfElement(nodePrototype, instance));
};
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./style.css");

      
      
      
      
      
      
      
      
      

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var html_to_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! html-to-image */ "./node_modules/html-to-image/es/index.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./style.css");


// dom elements
const board = document.querySelector("#board");
const buttons = document.querySelectorAll(
  "button:not(#newGridConfirmation,#save-as-img)"
);
const newGridButton = document.querySelector("#newGridConfirmation");
const colorInput = document.querySelector('input[type="color"]');
const slider = document.querySelector("#board-size");
const saveImgBtn = document.querySelector("#save-as-img");
const img = document.querySelector(".img-to-download");
const downloadBtn = document.querySelector(".download");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");

//variables to manage state
let sliderVal = document.querySelector("#board-size-value");
let boardSize = 11;
let isGridOn = false;
let mouseDownInBoard = false;
let currentColor = `${colorInput.value}`;
let activeMode = document.querySelector("#normal");
activeMode.classList.add("active");

// board related functions
function drawBoard() {
  for (let j = 0; j < boardSize; j++) {
    console.log("j: " + j);
    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.height = `calc(100%/${boardSize})`;
    for (let i = 0; i < boardSize; i++) {
      const div = document.createElement("div");
      div.addEventListener("mouseover", colorBoard);
      div.addEventListener("mousedown", colorBoard);
      div.style.width = `calc(100%/${boardSize})`;
      div.style.background = `100%`;
      div.style.backgroundColor = "white";
      row.appendChild(div);
    }
    board.appendChild(row);
    console.log("j: " + j);
  }
}

function updateBoardSize() {
  let mainWidth = board.parentElement.offsetWidth;
  let mainHeight = board.parentElement.offsetHeight;
  let min = 0.9 * Math.min(mainWidth, mainHeight);

  board.style.width = min + "px";
  board.style.height = min + "px";
}

window.onresize = function () {
  updateBoardSize();
};

function removeBoard() {
  for (let i = board.children.length - 1; i >= 0; i--) {
    board.children[i].remove();
  }
}

// functions needed by event listeners
function colorBoard(event) {
  event.preventDefault();
  if (activeMode.id === "eraser") currentColor = "white";
  if (event.type === "mousedown") {
    if (activeMode.id === "fill") {
      const x = Array.from(board.children).indexOf(event.target.parentElement);
      const y = Array.from(event.target.parentElement.children).indexOf(
        event.target
      );
      floodFill(event.target, x, y);
      return;
    }
    mouseDownInBoard = true;
  }
  if (event.buttons === 1 && mouseDownInBoard) {
    if (activeMode.getAttribute("id") === "rainbow") {
      currentColor = `#${Math.floor(Math.random() * (0xffffff + 1)).toString(
        16
      )}`;
    }
    event.target.style.backgroundColor = `${currentColor}`;
  } else {
    mouseDownInBoard = false;
  }
}

function displayGridWithBorder(border) {
  Array.from(board.children).forEach((row) => {
    Array.from(row.children).forEach((cell) => {
      if (cell != row.children[0]) cell.style.borderLeft = border;
      if (row !== board.children[0]) cell.style.borderTop = border;
    });
  });
}

function drawGrid() {
  displayGridWithBorder("1px solid grey");
}

function removeGrid() {
  displayGridWithBorder("none");
}

function hexToRgb(hex) {
  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5, 7), 16);

  return `rgb(${r}, ${g}, ${b})`;
}

function floodFill(div, x, y) {
  if (div.style.backgroundColor === hexToRgb(currentColor)) return;
  const originalColor = div.style.backgroundColor;
  div.style.backgroundColor = currentColor;

  if (
    x > 0 &&
    board.children[x - 1].children[y].style.backgroundColor === originalColor
  ) {
    floodFill(board.children[x - 1].children[y], x - 1, y);
  }
  if (
    x < boardSize - 1 &&
    board.children[x + 1].children[y].style.backgroundColor === originalColor
  ) {
    floodFill(board.children[x + 1].children[y], x + 1, y);
  }
  if (
    y > 0 &&
    board.children[x].children[y - 1].style.backgroundColor === originalColor
  ) {
    floodFill(board.children[x].children[y - 1], x, y - 1);
  }
  if (
    y < boardSize - 1 &&
    board.children[x].children[y + 1].style.backgroundColor === originalColor
  ) {
    floodFill(board.children[x].children[y + 1], x, y + 1);
  }
}

colorInput.addEventListener("input", (event) => {
  if (activeMode.id !== "eraser") currentColor = `${colorInput.value}`;
});

function showModal() {
  overlay.style.display = "block";
  modal.style.display = "block";
}

function closeModal() {
  overlay.style.display = "none";
  modal.style.display = "none";
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

overlay.addEventListener("click", () => {
  closeModal();
});

downloadBtn.addEventListener("click", function () {
  const link = document.createElement("a");
  link.download = "image.png";
  link.href = img.src;
  link.click();
});

// menu buttons
buttons.forEach((button) => {
  if (button.id != "gridlines")
    button.addEventListener("click", (event) => {
      if (button.id !== "reset") {
        activeMode.classList.remove("active");
        button.classList.add("active");
        activeMode = button;
        if (button.id === "normal" || button.id === "fill") {
          currentColor = `${colorInput.value}`;
        } else if (button.id === "eraser") {
          currentColor = "white";
        }
      } else {
        Array.from(board.children).forEach((row) => {
          Array.from(row.children).forEach((cell) => {
            cell.style.backgroundColor = "white";
          });
        });
      }
    });
  else {
    button.addEventListener("click", () => {
      if (!isGridOn) {
        isGridOn = true;
        button.classList.add("active");
        drawGrid();
      } else {
        isGridOn = false;
        button.classList.remove("active");
        removeGrid();
      }
    });
  }
});

newGridButton.addEventListener("click", (event) => {
  if (+slider.value === boardSize) return;
  if (confirm("Create new board?")) {
    removeBoard();
    boardSize = +slider.value;
    drawBoard();
    if (isGridOn) drawGrid();
  }
});

slider.addEventListener("input", (event) => {
  sliderVal.textContent = `${slider.value} x ${slider.value}`;
});

const loader = document.querySelector(".loader");

function showLoader() {
  overlay.style.display = "block";
  loader.style.display = "block";
}

function hideLoader() {
  loader.style.display = "none";
}
saveImgBtn.addEventListener("click", () => {
  showLoader();
  setTimeout(() => {
    if (isGridOn) {
      removeGrid();
    }
  }, 0);

  setTimeout(() => {
    html_to_image__WEBPACK_IMPORTED_MODULE_0__.toPng(board)
      .then(function (dataUrl) {
        hideLoader();
        img.src = dataUrl;
        showModal();
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  }, 1);

  setTimeout(() => {
    if (isGridOn) {
      drawGrid();
    }
  }, 2);
});

//initialising drawing board
updateBoardSize();
drawBoard();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0RBQW9ELGlCQUFpQjtBQUNyRSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsaUJBQWlCO0FBQzdDLFVBQVU7QUFDVjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLDZCQUE2QixjQUFjLElBQUksYUFBYTtBQUM1RCxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxJQUFJLGdEQUNRO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL25vZGVfbW9kdWxlcy9odG1sLXRvLWltYWdlL2VzL2FwcGx5LXN0eWxlLmpzIiwid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvLi9ub2RlX21vZHVsZXMvaHRtbC10by1pbWFnZS9lcy9jbG9uZS1ub2RlLmpzIiwid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvLi9ub2RlX21vZHVsZXMvaHRtbC10by1pbWFnZS9lcy9jbG9uZS1wc2V1ZG9zLmpzIiwid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvLi9ub2RlX21vZHVsZXMvaHRtbC10by1pbWFnZS9lcy9kYXRhdXJsLmpzIiwid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvLi9ub2RlX21vZHVsZXMvaHRtbC10by1pbWFnZS9lcy9lbWJlZC1pbWFnZXMuanMiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL25vZGVfbW9kdWxlcy9odG1sLXRvLWltYWdlL2VzL2VtYmVkLXJlc291cmNlcy5qcyIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoLy4vbm9kZV9tb2R1bGVzL2h0bWwtdG8taW1hZ2UvZXMvZW1iZWQtd2ViZm9udHMuanMiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL25vZGVfbW9kdWxlcy9odG1sLXRvLWltYWdlL2VzL2luZGV4LmpzIiwid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvLi9ub2RlX21vZHVsZXMvaHRtbC10by1pbWFnZS9lcy9taW1lcy5qcyIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoLy4vbm9kZV9tb2R1bGVzL2h0bWwtdG8taW1hZ2UvZXMvdXRpbC5qcyIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoLy4vc3R5bGUuY3NzP2Y2OTYiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoLy4vc2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHksXFxuYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZTY0MTtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjVlNWI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbmgxIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogNDhweDtcXG4gIGNvbG9yOiAjZmZlZDY2O1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4jbWVudSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbiNtZW51LXJvdyB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jbWVudS1yb3cgbGk6Zmlyc3QtY2hpbGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI21lbnUtcm93ID4gKiB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4jYm9hcmQtc2l6ZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDVweDtcXG59XFxuXFxuI2JvYXJkLXNpemUtdmFsdWUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNib2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY29sb3JcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDQ5cHg7XFxuICB3aWR0aDogNTBweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY29sb3JcXFwiXTo6LXdlYmtpdC1jb2xvci1zd2F0Y2gge1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbn1cXG5pbnB1dFt0eXBlPVxcXCJjb2xvclxcXCJdOjotbW96LWNvbG9yLXN3YXRjaCB7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmVkNjY7XFxufVxcblxcbiNuZXdHcmlkQ29uZmlybWF0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ubG9hZGVyIHtcXG4gIHotaW5kZXg6IDM7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7XFxuICBib3JkZXItdG9wOiAxNnB4IHNvbGlkICMzNDk4ZGI7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB3aWR0aDogMTIwcHg7XFxuICBoZWlnaHQ6IDEyMHB4O1xcbiAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNDAlO1xcbiAgbGVmdDogNDMlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbkBrZXlmcmFtZXMgc3BpbiB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblxcbi5vdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaW5zZXQ6IDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOSk7XFxuICB6LWluZGV4OiAyO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHdpZHRoOiBjYWxjKDAuOCAqIG1pbigxMDB2aCwgMTAwdncpKTtcXG4gIGhlaWdodDogY2FsYygwLjggKiBtaW4oMTAwdmgsIDEwMHZ3KSArIDU0cHgpO1xcbiAgei1pbmRleDogMztcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5pbWctdG8tZG93bmxvYWQge1xcbiAgd2lkdGg6IGNhbGMoMC44ICogbWluKDEwMHZoLCAxMDB2dykpO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIG1haW4ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgIHBhZGRpbmc6IDIwcHggMDtcXG4gIH1cXG4gICNtZW51IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAjbWVudS1yb3cge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsT0FBTztBQUNUOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLFFBQVE7RUFDUiw4QkFBOEI7RUFDOUIsVUFBVTtFQUNWLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLG9DQUFvQztFQUNwQyw0Q0FBNEM7RUFDNUMsVUFBVTtFQUNWLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFO0lBQ0UsOEJBQThCO0lBQzlCLGVBQWU7RUFDakI7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5LFxcbmJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2U2NDE7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1ZTViO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5oMSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDQ4cHg7XFxuICBjb2xvcjogI2ZmZWQ2NjtcXG59XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgZmxleDogMTtcXG59XFxuXFxuI21lbnUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jbWVudS1yb3cge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI21lbnUtcm93IGxpOmZpcnN0LWNoaWxkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNtZW51LXJvdyA+ICoge1xcbiAgZmxleDogMTtcXG59XFxuXFxuI2JvYXJkLXNpemUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbiNib2FyZC1zaXplLXZhbHVlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jYm9hcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNvbG9yXFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiA0OXB4O1xcbiAgd2lkdGg6IDUwcHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNvbG9yXFxcIl06Oi13ZWJraXQtY29sb3Itc3dhdGNoIHtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG59XFxuaW5wdXRbdHlwZT1cXFwiY29sb3JcXFwiXTo6LW1vei1jb2xvci1zd2F0Y2gge1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlZDY2O1xcbn1cXG5cXG4jbmV3R3JpZENvbmZpcm1hdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmxvYWRlciB7XFxuICB6LWluZGV4OiAzO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzO1xcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjMzQ5OGRiO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgaGVpZ2h0OiAxMjBweDtcXG4gIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDQwJTtcXG4gIGxlZnQ6IDQzJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGluc2V0OiAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjkpO1xcbiAgei1pbmRleDogMjtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tb2RhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB3aWR0aDogY2FsYygwLjggKiBtaW4oMTAwdmgsIDEwMHZ3KSk7XFxuICBoZWlnaHQ6IGNhbGMoMC44ICogbWluKDEwMHZoLCAxMDB2dykgKyA1NHB4KTtcXG4gIHotaW5kZXg6IDM7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaW1nLXRvLWRvd25sb2FkIHtcXG4gIHdpZHRoOiBjYWxjKDAuOCAqIG1pbigxMDB2aCwgMTAwdncpKTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICBtYWluIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgICBwYWRkaW5nOiAyMHB4IDA7XFxuICB9XFxuICAjbWVudSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgI21lbnUtcm93IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGZ1bmN0aW9uIGFwcGx5U3R5bGUobm9kZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IHsgc3R5bGUgfSA9IG5vZGU7XG4gICAgaWYgKG9wdGlvbnMuYmFja2dyb3VuZENvbG9yKSB7XG4gICAgICAgIHN0eWxlLmJhY2tncm91bmRDb2xvciA9IG9wdGlvbnMuYmFja2dyb3VuZENvbG9yO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy53aWR0aCkge1xuICAgICAgICBzdHlsZS53aWR0aCA9IGAke29wdGlvbnMud2lkdGh9cHhgO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5oZWlnaHQpIHtcbiAgICAgICAgc3R5bGUuaGVpZ2h0ID0gYCR7b3B0aW9ucy5oZWlnaHR9cHhgO1xuICAgIH1cbiAgICBjb25zdCBtYW51YWwgPSBvcHRpb25zLnN0eWxlO1xuICAgIGlmIChtYW51YWwgIT0gbnVsbCkge1xuICAgICAgICBPYmplY3Qua2V5cyhtYW51YWwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgc3R5bGVba2V5XSA9IG1hbnVhbFtrZXldO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHBseS1zdHlsZS5qcy5tYXAiLCJpbXBvcnQgeyBjbG9uZVBzZXVkb0VsZW1lbnRzIH0gZnJvbSAnLi9jbG9uZS1wc2V1ZG9zJztcbmltcG9ydCB7IGNyZWF0ZUltYWdlLCB0b0FycmF5LCBpc0luc3RhbmNlT2ZFbGVtZW50IH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7IGdldE1pbWVUeXBlIH0gZnJvbSAnLi9taW1lcyc7XG5pbXBvcnQgeyByZXNvdXJjZVRvRGF0YVVSTCB9IGZyb20gJy4vZGF0YXVybCc7XG5hc3luYyBmdW5jdGlvbiBjbG9uZUNhbnZhc0VsZW1lbnQoY2FudmFzKSB7XG4gICAgY29uc3QgZGF0YVVSTCA9IGNhbnZhcy50b0RhdGFVUkwoKTtcbiAgICBpZiAoZGF0YVVSTCA9PT0gJ2RhdGE6LCcpIHtcbiAgICAgICAgcmV0dXJuIGNhbnZhcy5jbG9uZU5vZGUoZmFsc2UpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlSW1hZ2UoZGF0YVVSTCk7XG59XG5hc3luYyBmdW5jdGlvbiBjbG9uZVZpZGVvRWxlbWVudCh2aWRlbywgb3B0aW9ucykge1xuICAgIGlmICh2aWRlby5jdXJyZW50U3JjKSB7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgY2FudmFzLndpZHRoID0gdmlkZW8uY2xpZW50V2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSB2aWRlby5jbGllbnRIZWlnaHQ7XG4gICAgICAgIGN0eCA9PT0gbnVsbCB8fCBjdHggPT09IHZvaWQgMCA/IHZvaWQgMCA6IGN0eC5kcmF3SW1hZ2UodmlkZW8sIDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgIGNvbnN0IGRhdGFVUkwgPSBjYW52YXMudG9EYXRhVVJMKCk7XG4gICAgICAgIHJldHVybiBjcmVhdGVJbWFnZShkYXRhVVJMKTtcbiAgICB9XG4gICAgY29uc3QgcG9zdGVyID0gdmlkZW8ucG9zdGVyO1xuICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gZ2V0TWltZVR5cGUocG9zdGVyKTtcbiAgICBjb25zdCBkYXRhVVJMID0gYXdhaXQgcmVzb3VyY2VUb0RhdGFVUkwocG9zdGVyLCBjb250ZW50VHlwZSwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIGNyZWF0ZUltYWdlKGRhdGFVUkwpO1xufVxuYXN5bmMgZnVuY3Rpb24gY2xvbmVJRnJhbWVFbGVtZW50KGlmcmFtZSkge1xuICAgIHZhciBfYTtcbiAgICB0cnkge1xuICAgICAgICBpZiAoKF9hID0gaWZyYW1lID09PSBudWxsIHx8IGlmcmFtZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogaWZyYW1lLmNvbnRlbnREb2N1bWVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmJvZHkpIHtcbiAgICAgICAgICAgIHJldHVybiAoYXdhaXQgY2xvbmVOb2RlKGlmcmFtZS5jb250ZW50RG9jdW1lbnQuYm9keSwge30sIHRydWUpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoX2IpIHtcbiAgICAgICAgLy8gRmFpbGVkIHRvIGNsb25lIGlmcmFtZVxuICAgIH1cbiAgICByZXR1cm4gaWZyYW1lLmNsb25lTm9kZShmYWxzZSk7XG59XG5hc3luYyBmdW5jdGlvbiBjbG9uZVNpbmdsZU5vZGUobm9kZSwgb3B0aW9ucykge1xuICAgIGlmIChpc0luc3RhbmNlT2ZFbGVtZW50KG5vZGUsIEhUTUxDYW52YXNFbGVtZW50KSkge1xuICAgICAgICByZXR1cm4gY2xvbmVDYW52YXNFbGVtZW50KG5vZGUpO1xuICAgIH1cbiAgICBpZiAoaXNJbnN0YW5jZU9mRWxlbWVudChub2RlLCBIVE1MVmlkZW9FbGVtZW50KSkge1xuICAgICAgICByZXR1cm4gY2xvbmVWaWRlb0VsZW1lbnQobm9kZSwgb3B0aW9ucyk7XG4gICAgfVxuICAgIGlmIChpc0luc3RhbmNlT2ZFbGVtZW50KG5vZGUsIEhUTUxJRnJhbWVFbGVtZW50KSkge1xuICAgICAgICByZXR1cm4gY2xvbmVJRnJhbWVFbGVtZW50KG5vZGUpO1xuICAgIH1cbiAgICByZXR1cm4gbm9kZS5jbG9uZU5vZGUoZmFsc2UpO1xufVxuY29uc3QgaXNTbG90RWxlbWVudCA9IChub2RlKSA9PiBub2RlLnRhZ05hbWUgIT0gbnVsbCAmJiBub2RlLnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NMT1QnO1xuYXN5bmMgZnVuY3Rpb24gY2xvbmVDaGlsZHJlbihuYXRpdmVOb2RlLCBjbG9uZWROb2RlLCBvcHRpb25zKSB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICBsZXQgY2hpbGRyZW4gPSBbXTtcbiAgICBpZiAoaXNTbG90RWxlbWVudChuYXRpdmVOb2RlKSAmJiBuYXRpdmVOb2RlLmFzc2lnbmVkTm9kZXMpIHtcbiAgICAgICAgY2hpbGRyZW4gPSB0b0FycmF5KG5hdGl2ZU5vZGUuYXNzaWduZWROb2RlcygpKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNJbnN0YW5jZU9mRWxlbWVudChuYXRpdmVOb2RlLCBIVE1MSUZyYW1lRWxlbWVudCkgJiZcbiAgICAgICAgKChfYSA9IG5hdGl2ZU5vZGUuY29udGVudERvY3VtZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYm9keSkpIHtcbiAgICAgICAgY2hpbGRyZW4gPSB0b0FycmF5KG5hdGl2ZU5vZGUuY29udGVudERvY3VtZW50LmJvZHkuY2hpbGROb2Rlcyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjaGlsZHJlbiA9IHRvQXJyYXkoKChfYiA9IG5hdGl2ZU5vZGUuc2hhZG93Um9vdCkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogbmF0aXZlTm9kZSkuY2hpbGROb2Rlcyk7XG4gICAgfVxuICAgIGlmIChjaGlsZHJlbi5sZW5ndGggPT09IDAgfHxcbiAgICAgICAgaXNJbnN0YW5jZU9mRWxlbWVudChuYXRpdmVOb2RlLCBIVE1MVmlkZW9FbGVtZW50KSkge1xuICAgICAgICByZXR1cm4gY2xvbmVkTm9kZTtcbiAgICB9XG4gICAgYXdhaXQgY2hpbGRyZW4ucmVkdWNlKChkZWZlcnJlZCwgY2hpbGQpID0+IGRlZmVycmVkXG4gICAgICAgIC50aGVuKCgpID0+IGNsb25lTm9kZShjaGlsZCwgb3B0aW9ucykpXG4gICAgICAgIC50aGVuKChjbG9uZWRDaGlsZCkgPT4ge1xuICAgICAgICBpZiAoY2xvbmVkQ2hpbGQpIHtcbiAgICAgICAgICAgIGNsb25lZE5vZGUuYXBwZW5kQ2hpbGQoY2xvbmVkQ2hpbGQpO1xuICAgICAgICB9XG4gICAgfSksIFByb21pc2UucmVzb2x2ZSgpKTtcbiAgICByZXR1cm4gY2xvbmVkTm9kZTtcbn1cbmZ1bmN0aW9uIGNsb25lQ1NTU3R5bGUobmF0aXZlTm9kZSwgY2xvbmVkTm9kZSkge1xuICAgIGNvbnN0IHRhcmdldFN0eWxlID0gY2xvbmVkTm9kZS5zdHlsZTtcbiAgICBpZiAoIXRhcmdldFN0eWxlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc291cmNlU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShuYXRpdmVOb2RlKTtcbiAgICBpZiAoc291cmNlU3R5bGUuY3NzVGV4dCkge1xuICAgICAgICB0YXJnZXRTdHlsZS5jc3NUZXh0ID0gc291cmNlU3R5bGUuY3NzVGV4dDtcbiAgICAgICAgdGFyZ2V0U3R5bGUudHJhbnNmb3JtT3JpZ2luID0gc291cmNlU3R5bGUudHJhbnNmb3JtT3JpZ2luO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdG9BcnJheShzb3VyY2VTdHlsZSkuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gc291cmNlU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTtcbiAgICAgICAgICAgIGlmIChuYW1lID09PSAnZm9udC1zaXplJyAmJiB2YWx1ZS5lbmRzV2l0aCgncHgnKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZHVjZWRGb250ID0gTWF0aC5mbG9vcihwYXJzZUZsb2F0KHZhbHVlLnN1YnN0cmluZygwLCB2YWx1ZS5sZW5ndGggLSAyKSkpIC0gMC4xO1xuICAgICAgICAgICAgICAgIHZhbHVlID0gYCR7cmVkdWNlZEZvbnR9cHhgO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzSW5zdGFuY2VPZkVsZW1lbnQobmF0aXZlTm9kZSwgSFRNTElGcmFtZUVsZW1lbnQpICYmXG4gICAgICAgICAgICAgICAgbmFtZSA9PT0gJ2Rpc3BsYXknICYmXG4gICAgICAgICAgICAgICAgdmFsdWUgPT09ICdpbmxpbmUnKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSAnYmxvY2snO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdkJyAmJiBjbG9uZWROb2RlLmdldEF0dHJpYnV0ZSgnZCcpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBgcGF0aCgke2Nsb25lZE5vZGUuZ2V0QXR0cmlidXRlKCdkJyl9KWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXJnZXRTdHlsZS5zZXRQcm9wZXJ0eShuYW1lLCB2YWx1ZSwgc291cmNlU3R5bGUuZ2V0UHJvcGVydHlQcmlvcml0eShuYW1lKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNsb25lSW5wdXRWYWx1ZShuYXRpdmVOb2RlLCBjbG9uZWROb2RlKSB7XG4gICAgaWYgKGlzSW5zdGFuY2VPZkVsZW1lbnQobmF0aXZlTm9kZSwgSFRNTFRleHRBcmVhRWxlbWVudCkpIHtcbiAgICAgICAgY2xvbmVkTm9kZS5pbm5lckhUTUwgPSBuYXRpdmVOb2RlLnZhbHVlO1xuICAgIH1cbiAgICBpZiAoaXNJbnN0YW5jZU9mRWxlbWVudChuYXRpdmVOb2RlLCBIVE1MSW5wdXRFbGVtZW50KSkge1xuICAgICAgICBjbG9uZWROb2RlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBuYXRpdmVOb2RlLnZhbHVlKTtcbiAgICB9XG59XG5mdW5jdGlvbiBjbG9uZVNlbGVjdFZhbHVlKG5hdGl2ZU5vZGUsIGNsb25lZE5vZGUpIHtcbiAgICBpZiAoaXNJbnN0YW5jZU9mRWxlbWVudChuYXRpdmVOb2RlLCBIVE1MU2VsZWN0RWxlbWVudCkpIHtcbiAgICAgICAgY29uc3QgY2xvbmVkU2VsZWN0ID0gY2xvbmVkTm9kZTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSBBcnJheS5mcm9tKGNsb25lZFNlbGVjdC5jaGlsZHJlbikuZmluZCgoY2hpbGQpID0+IG5hdGl2ZU5vZGUudmFsdWUgPT09IGNoaWxkLmdldEF0dHJpYnV0ZSgndmFsdWUnKSk7XG4gICAgICAgIGlmIChzZWxlY3RlZE9wdGlvbikge1xuICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb24uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICcnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGRlY29yYXRlKG5hdGl2ZU5vZGUsIGNsb25lZE5vZGUpIHtcbiAgICBpZiAoaXNJbnN0YW5jZU9mRWxlbWVudChjbG9uZWROb2RlLCBFbGVtZW50KSkge1xuICAgICAgICBjbG9uZUNTU1N0eWxlKG5hdGl2ZU5vZGUsIGNsb25lZE5vZGUpO1xuICAgICAgICBjbG9uZVBzZXVkb0VsZW1lbnRzKG5hdGl2ZU5vZGUsIGNsb25lZE5vZGUpO1xuICAgICAgICBjbG9uZUlucHV0VmFsdWUobmF0aXZlTm9kZSwgY2xvbmVkTm9kZSk7XG4gICAgICAgIGNsb25lU2VsZWN0VmFsdWUobmF0aXZlTm9kZSwgY2xvbmVkTm9kZSk7XG4gICAgfVxuICAgIHJldHVybiBjbG9uZWROb2RlO1xufVxuYXN5bmMgZnVuY3Rpb24gZW5zdXJlU1ZHU3ltYm9scyhjbG9uZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IHVzZXMgPSBjbG9uZS5xdWVyeVNlbGVjdG9yQWxsID8gY2xvbmUucXVlcnlTZWxlY3RvckFsbCgndXNlJykgOiBbXTtcbiAgICBpZiAodXNlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGNsb25lO1xuICAgIH1cbiAgICBjb25zdCBwcm9jZXNzZWREZWZzID0ge307XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1c2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHVzZSA9IHVzZXNbaV07XG4gICAgICAgIGNvbnN0IGlkID0gdXNlLmdldEF0dHJpYnV0ZSgneGxpbms6aHJlZicpO1xuICAgICAgICBpZiAoaWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0ID0gY2xvbmUucXVlcnlTZWxlY3RvcihpZCk7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZCk7XG4gICAgICAgICAgICBpZiAoIWV4aXN0ICYmIGRlZmluaXRpb24gJiYgIXByb2Nlc3NlZERlZnNbaWRdKSB7XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWF3YWl0LWluLWxvb3BcbiAgICAgICAgICAgICAgICBwcm9jZXNzZWREZWZzW2lkXSA9IChhd2FpdCBjbG9uZU5vZGUoZGVmaW5pdGlvbiwgb3B0aW9ucywgdHJ1ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG5vZGVzID0gT2JqZWN0LnZhbHVlcyhwcm9jZXNzZWREZWZzKTtcbiAgICBpZiAobm9kZXMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IG5zID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwnO1xuICAgICAgICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsICdzdmcnKTtcbiAgICAgICAgc3ZnLnNldEF0dHJpYnV0ZSgneG1sbnMnLCBucyk7XG4gICAgICAgIHN2Zy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIHN2Zy5zdHlsZS53aWR0aCA9ICcwJztcbiAgICAgICAgc3ZnLnN0eWxlLmhlaWdodCA9ICcwJztcbiAgICAgICAgc3ZnLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgIHN2Zy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBjb25zdCBkZWZzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCAnZGVmcycpO1xuICAgICAgICBzdmcuYXBwZW5kQ2hpbGQoZGVmcyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGRlZnMuYXBwZW5kQ2hpbGQobm9kZXNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIGNsb25lLmFwcGVuZENoaWxkKHN2Zyk7XG4gICAgfVxuICAgIHJldHVybiBjbG9uZTtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjbG9uZU5vZGUobm9kZSwgb3B0aW9ucywgaXNSb290KSB7XG4gICAgaWYgKCFpc1Jvb3QgJiYgb3B0aW9ucy5maWx0ZXIgJiYgIW9wdGlvbnMuZmlsdGVyKG5vZGUpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5vZGUpXG4gICAgICAgIC50aGVuKChjbG9uZWROb2RlKSA9PiBjbG9uZVNpbmdsZU5vZGUoY2xvbmVkTm9kZSwgb3B0aW9ucykpXG4gICAgICAgIC50aGVuKChjbG9uZWROb2RlKSA9PiBjbG9uZUNoaWxkcmVuKG5vZGUsIGNsb25lZE5vZGUsIG9wdGlvbnMpKVxuICAgICAgICAudGhlbigoY2xvbmVkTm9kZSkgPT4gZGVjb3JhdGUobm9kZSwgY2xvbmVkTm9kZSkpXG4gICAgICAgIC50aGVuKChjbG9uZWROb2RlKSA9PiBlbnN1cmVTVkdTeW1ib2xzKGNsb25lZE5vZGUsIG9wdGlvbnMpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNsb25lLW5vZGUuanMubWFwIiwiaW1wb3J0IHsgdXVpZCwgdG9BcnJheSB9IGZyb20gJy4vdXRpbCc7XG5mdW5jdGlvbiBmb3JtYXRDU1NUZXh0KHN0eWxlKSB7XG4gICAgY29uc3QgY29udGVudCA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2NvbnRlbnQnKTtcbiAgICByZXR1cm4gYCR7c3R5bGUuY3NzVGV4dH0gY29udGVudDogJyR7Y29udGVudC5yZXBsYWNlKC8nfFwiL2csICcnKX0nO2A7XG59XG5mdW5jdGlvbiBmb3JtYXRDU1NQcm9wZXJ0aWVzKHN0eWxlKSB7XG4gICAgcmV0dXJuIHRvQXJyYXkoc3R5bGUpXG4gICAgICAgIC5tYXAoKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IHN0eWxlLmdldFByb3BlcnR5UHJpb3JpdHkobmFtZSk7XG4gICAgICAgIHJldHVybiBgJHtuYW1lfTogJHt2YWx1ZX0ke3ByaW9yaXR5ID8gJyAhaW1wb3J0YW50JyA6ICcnfTtgO1xuICAgIH0pXG4gICAgICAgIC5qb2luKCcgJyk7XG59XG5mdW5jdGlvbiBnZXRQc2V1ZG9FbGVtZW50U3R5bGUoY2xhc3NOYW1lLCBwc2V1ZG8sIHN0eWxlKSB7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBgLiR7Y2xhc3NOYW1lfToke3BzZXVkb31gO1xuICAgIGNvbnN0IGNzc1RleHQgPSBzdHlsZS5jc3NUZXh0XG4gICAgICAgID8gZm9ybWF0Q1NTVGV4dChzdHlsZSlcbiAgICAgICAgOiBmb3JtYXRDU1NQcm9wZXJ0aWVzKHN0eWxlKTtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYCR7c2VsZWN0b3J9eyR7Y3NzVGV4dH19YCk7XG59XG5mdW5jdGlvbiBjbG9uZVBzZXVkb0VsZW1lbnQobmF0aXZlTm9kZSwgY2xvbmVkTm9kZSwgcHNldWRvKSB7XG4gICAgY29uc3Qgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShuYXRpdmVOb2RlLCBwc2V1ZG8pO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdjb250ZW50Jyk7XG4gICAgaWYgKGNvbnRlbnQgPT09ICcnIHx8IGNvbnRlbnQgPT09ICdub25lJykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHV1aWQoKTtcbiAgICB0cnkge1xuICAgICAgICBjbG9uZWROb2RlLmNsYXNzTmFtZSA9IGAke2Nsb25lZE5vZGUuY2xhc3NOYW1lfSAke2NsYXNzTmFtZX1gO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZ2V0UHNldWRvRWxlbWVudFN0eWxlKGNsYXNzTmFtZSwgcHNldWRvLCBzdHlsZSkpO1xuICAgIGNsb25lZE5vZGUuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZVBzZXVkb0VsZW1lbnRzKG5hdGl2ZU5vZGUsIGNsb25lZE5vZGUpIHtcbiAgICBjbG9uZVBzZXVkb0VsZW1lbnQobmF0aXZlTm9kZSwgY2xvbmVkTm9kZSwgJzpiZWZvcmUnKTtcbiAgICBjbG9uZVBzZXVkb0VsZW1lbnQobmF0aXZlTm9kZSwgY2xvbmVkTm9kZSwgJzphZnRlcicpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2xvbmUtcHNldWRvcy5qcy5tYXAiLCJmdW5jdGlvbiBnZXRDb250ZW50RnJvbURhdGFVcmwoZGF0YVVSTCkge1xuICAgIHJldHVybiBkYXRhVVJMLnNwbGl0KC8sLylbMV07XG59XG5leHBvcnQgZnVuY3Rpb24gaXNEYXRhVXJsKHVybCkge1xuICAgIHJldHVybiB1cmwuc2VhcmNoKC9eKGRhdGE6KS8pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBtYWtlRGF0YVVybChjb250ZW50LCBtaW1lVHlwZSkge1xuICAgIHJldHVybiBgZGF0YToke21pbWVUeXBlfTtiYXNlNjQsJHtjb250ZW50fWA7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hBc0RhdGFVUkwodXJsLCBpbml0LCBwcm9jZXNzKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsLCBpbml0KTtcbiAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgUmVzb3VyY2UgXCIke3Jlcy51cmx9XCIgbm90IGZvdW5kYCk7XG4gICAgfVxuICAgIGNvbnN0IGJsb2IgPSBhd2FpdCByZXMuYmxvYigpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5vbmVycm9yID0gcmVqZWN0O1xuICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHByb2Nlc3MoeyByZXMsIHJlc3VsdDogcmVhZGVyLnJlc3VsdCB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcbiAgICB9KTtcbn1cbmNvbnN0IGNhY2hlID0ge307XG5mdW5jdGlvbiBnZXRDYWNoZUtleSh1cmwsIGNvbnRlbnRUeXBlLCBpbmNsdWRlUXVlcnlQYXJhbXMpIHtcbiAgICBsZXQga2V5ID0gdXJsLnJlcGxhY2UoL1xcPy4qLywgJycpO1xuICAgIGlmIChpbmNsdWRlUXVlcnlQYXJhbXMpIHtcbiAgICAgICAga2V5ID0gdXJsO1xuICAgIH1cbiAgICAvLyBmb250IHJlc291cmNlXG4gICAgaWYgKC90dGZ8b3RmfGVvdHx3b2ZmMj8vaS50ZXN0KGtleSkpIHtcbiAgICAgICAga2V5ID0ga2V5LnJlcGxhY2UoLy4qXFwvLywgJycpO1xuICAgIH1cbiAgICByZXR1cm4gY29udGVudFR5cGUgPyBgWyR7Y29udGVudFR5cGV9XSR7a2V5fWAgOiBrZXk7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVzb3VyY2VUb0RhdGFVUkwocmVzb3VyY2VVcmwsIGNvbnRlbnRUeXBlLCBvcHRpb25zKSB7XG4gICAgY29uc3QgY2FjaGVLZXkgPSBnZXRDYWNoZUtleShyZXNvdXJjZVVybCwgY29udGVudFR5cGUsIG9wdGlvbnMuaW5jbHVkZVF1ZXJ5UGFyYW1zKTtcbiAgICBpZiAoY2FjaGVbY2FjaGVLZXldICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlW2NhY2hlS2V5XTtcbiAgICB9XG4gICAgLy8gcmVmOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9kb2NzL1dlYi9BUEkvWE1MSHR0cFJlcXVlc3QvVXNpbmdfWE1MSHR0cFJlcXVlc3QjQnlwYXNzaW5nX3RoZV9jYWNoZVxuICAgIGlmIChvcHRpb25zLmNhY2hlQnVzdCkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgcmVzb3VyY2VVcmwgKz0gKC9cXD8vLnRlc3QocmVzb3VyY2VVcmwpID8gJyYnIDogJz8nKSArIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIH1cbiAgICBsZXQgZGF0YVVSTDtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgZmV0Y2hBc0RhdGFVUkwocmVzb3VyY2VVcmwsIG9wdGlvbnMuZmV0Y2hSZXF1ZXN0SW5pdCwgKHsgcmVzLCByZXN1bHQgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFjb250ZW50VHlwZSkge1xuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlID0gcmVzLmhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKSB8fCAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBnZXRDb250ZW50RnJvbURhdGFVcmwocmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRhdGFVUkwgPSBtYWtlRGF0YVVybChjb250ZW50LCBjb250ZW50VHlwZSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICBkYXRhVVJMID0gb3B0aW9ucy5pbWFnZVBsYWNlaG9sZGVyIHx8ICcnO1xuICAgICAgICBsZXQgbXNnID0gYEZhaWxlZCB0byBmZXRjaCByZXNvdXJjZTogJHtyZXNvdXJjZVVybH1gO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIG1zZyA9IHR5cGVvZiBlcnJvciA9PT0gJ3N0cmluZycgPyBlcnJvciA6IGVycm9yLm1lc3NhZ2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1zZykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKG1zZyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2FjaGVbY2FjaGVLZXldID0gZGF0YVVSTDtcbiAgICByZXR1cm4gZGF0YVVSTDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGF1cmwuanMubWFwIiwiaW1wb3J0IHsgZW1iZWRSZXNvdXJjZXMgfSBmcm9tICcuL2VtYmVkLXJlc291cmNlcyc7XG5pbXBvcnQgeyB0b0FycmF5LCBpc0luc3RhbmNlT2ZFbGVtZW50IH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7IGlzRGF0YVVybCwgcmVzb3VyY2VUb0RhdGFVUkwgfSBmcm9tICcuL2RhdGF1cmwnO1xuaW1wb3J0IHsgZ2V0TWltZVR5cGUgfSBmcm9tICcuL21pbWVzJztcbmFzeW5jIGZ1bmN0aW9uIGVtYmVkUHJvcChwcm9wTmFtZSwgbm9kZSwgb3B0aW9ucykge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCBwcm9wVmFsdWUgPSAoX2EgPSBub2RlLnN0eWxlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0UHJvcGVydHlWYWx1ZShwcm9wTmFtZSk7XG4gICAgaWYgKHByb3BWYWx1ZSkge1xuICAgICAgICBjb25zdCBjc3NTdHJpbmcgPSBhd2FpdCBlbWJlZFJlc291cmNlcyhwcm9wVmFsdWUsIG51bGwsIG9wdGlvbnMpO1xuICAgICAgICBub2RlLnN0eWxlLnNldFByb3BlcnR5KHByb3BOYW1lLCBjc3NTdHJpbmcsIG5vZGUuc3R5bGUuZ2V0UHJvcGVydHlQcmlvcml0eShwcm9wTmFtZSkpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuYXN5bmMgZnVuY3Rpb24gZW1iZWRCYWNrZ3JvdW5kKGNsb25lZE5vZGUsIG9wdGlvbnMpIHtcbiAgICBpZiAoIShhd2FpdCBlbWJlZFByb3AoJ2JhY2tncm91bmQnLCBjbG9uZWROb2RlLCBvcHRpb25zKSkpIHtcbiAgICAgICAgYXdhaXQgZW1iZWRQcm9wKCdiYWNrZ3JvdW5kLWltYWdlJywgY2xvbmVkTm9kZSwgb3B0aW9ucyk7XG4gICAgfVxuICAgIGlmICghKGF3YWl0IGVtYmVkUHJvcCgnbWFzaycsIGNsb25lZE5vZGUsIG9wdGlvbnMpKSkge1xuICAgICAgICBhd2FpdCBlbWJlZFByb3AoJ21hc2staW1hZ2UnLCBjbG9uZWROb2RlLCBvcHRpb25zKTtcbiAgICB9XG59XG5hc3luYyBmdW5jdGlvbiBlbWJlZEltYWdlTm9kZShjbG9uZWROb2RlLCBvcHRpb25zKSB7XG4gICAgY29uc3QgaXNJbWFnZUVsZW1lbnQgPSBpc0luc3RhbmNlT2ZFbGVtZW50KGNsb25lZE5vZGUsIEhUTUxJbWFnZUVsZW1lbnQpO1xuICAgIGlmICghKGlzSW1hZ2VFbGVtZW50ICYmICFpc0RhdGFVcmwoY2xvbmVkTm9kZS5zcmMpKSAmJlxuICAgICAgICAhKGlzSW5zdGFuY2VPZkVsZW1lbnQoY2xvbmVkTm9kZSwgU1ZHSW1hZ2VFbGVtZW50KSAmJlxuICAgICAgICAgICAgIWlzRGF0YVVybChjbG9uZWROb2RlLmhyZWYuYmFzZVZhbCkpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdXJsID0gaXNJbWFnZUVsZW1lbnQgPyBjbG9uZWROb2RlLnNyYyA6IGNsb25lZE5vZGUuaHJlZi5iYXNlVmFsO1xuICAgIGNvbnN0IGRhdGFVUkwgPSBhd2FpdCByZXNvdXJjZVRvRGF0YVVSTCh1cmwsIGdldE1pbWVUeXBlKHVybCksIG9wdGlvbnMpO1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY2xvbmVkTm9kZS5vbmxvYWQgPSByZXNvbHZlO1xuICAgICAgICBjbG9uZWROb2RlLm9uZXJyb3IgPSByZWplY3Q7XG4gICAgICAgIGNvbnN0IGltYWdlID0gY2xvbmVkTm9kZTtcbiAgICAgICAgaWYgKGltYWdlLmRlY29kZSkge1xuICAgICAgICAgICAgaW1hZ2UuZGVjb2RlID0gcmVzb2x2ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW1hZ2UubG9hZGluZyA9PT0gJ2xhenknKSB7XG4gICAgICAgICAgICBpbWFnZS5sb2FkaW5nID0gJ2VhZ2VyJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNJbWFnZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNsb25lZE5vZGUuc3Jjc2V0ID0gJyc7XG4gICAgICAgICAgICBjbG9uZWROb2RlLnNyYyA9IGRhdGFVUkw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjbG9uZWROb2RlLmhyZWYuYmFzZVZhbCA9IGRhdGFVUkw7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmFzeW5jIGZ1bmN0aW9uIGVtYmVkQ2hpbGRyZW4oY2xvbmVkTm9kZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gdG9BcnJheShjbG9uZWROb2RlLmNoaWxkTm9kZXMpO1xuICAgIGNvbnN0IGRlZmVycmVkcyA9IGNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IGVtYmVkSW1hZ2VzKGNoaWxkLCBvcHRpb25zKSk7XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoZGVmZXJyZWRzKS50aGVuKCgpID0+IGNsb25lZE5vZGUpO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVtYmVkSW1hZ2VzKGNsb25lZE5vZGUsIG9wdGlvbnMpIHtcbiAgICBpZiAoaXNJbnN0YW5jZU9mRWxlbWVudChjbG9uZWROb2RlLCBFbGVtZW50KSkge1xuICAgICAgICBhd2FpdCBlbWJlZEJhY2tncm91bmQoY2xvbmVkTm9kZSwgb3B0aW9ucyk7XG4gICAgICAgIGF3YWl0IGVtYmVkSW1hZ2VOb2RlKGNsb25lZE5vZGUsIG9wdGlvbnMpO1xuICAgICAgICBhd2FpdCBlbWJlZENoaWxkcmVuKGNsb25lZE5vZGUsIG9wdGlvbnMpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVtYmVkLWltYWdlcy5qcy5tYXAiLCJpbXBvcnQgeyByZXNvbHZlVXJsIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7IGdldE1pbWVUeXBlIH0gZnJvbSAnLi9taW1lcyc7XG5pbXBvcnQgeyBpc0RhdGFVcmwsIG1ha2VEYXRhVXJsLCByZXNvdXJjZVRvRGF0YVVSTCB9IGZyb20gJy4vZGF0YXVybCc7XG5jb25zdCBVUkxfUkVHRVggPSAvdXJsXFwoKFsnXCJdPykoW14nXCJdKz8pXFwxXFwpL2c7XG5jb25zdCBVUkxfV0lUSF9GT1JNQVRfUkVHRVggPSAvdXJsXFwoW14pXStcXClcXHMqZm9ybWF0XFwoKFtcIiddPykoW15cIiddKylcXDFcXCkvZztcbmNvbnN0IEZPTlRfU1JDX1JFR0VYID0gL3NyYzpcXHMqKD86dXJsXFwoW14pXStcXClcXHMqZm9ybWF0XFwoW14pXStcXClbLDtdXFxzKikrL2c7XG5mdW5jdGlvbiB0b1JlZ2V4KHVybCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWVzY2FwZVxuICAgIGNvbnN0IGVzY2FwZWQgPSB1cmwucmVwbGFjZSgvKFsuKis/XiR7fSgpfFxcW1xcXVxcL1xcXFxdKS9nLCAnXFxcXCQxJyk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoYCh1cmxcXFxcKFsnXCJdPykoJHtlc2NhcGVkfSkoWydcIl0/XFxcXCkpYCwgJ2cnKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVVSTHMoY3NzVGV4dCkge1xuICAgIGNvbnN0IHVybHMgPSBbXTtcbiAgICBjc3NUZXh0LnJlcGxhY2UoVVJMX1JFR0VYLCAocmF3LCBxdW90YXRpb24sIHVybCkgPT4ge1xuICAgICAgICB1cmxzLnB1c2godXJsKTtcbiAgICAgICAgcmV0dXJuIHJhdztcbiAgICB9KTtcbiAgICByZXR1cm4gdXJscy5maWx0ZXIoKHVybCkgPT4gIWlzRGF0YVVybCh1cmwpKTtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBlbWJlZChjc3NUZXh0LCByZXNvdXJjZVVSTCwgYmFzZVVSTCwgb3B0aW9ucywgZ2V0Q29udGVudEZyb21VcmwpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNvbHZlZFVSTCA9IGJhc2VVUkwgPyByZXNvbHZlVXJsKHJlc291cmNlVVJMLCBiYXNlVVJMKSA6IHJlc291cmNlVVJMO1xuICAgICAgICBjb25zdCBjb250ZW50VHlwZSA9IGdldE1pbWVUeXBlKHJlc291cmNlVVJMKTtcbiAgICAgICAgbGV0IGRhdGFVUkw7XG4gICAgICAgIGlmIChnZXRDb250ZW50RnJvbVVybCkge1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IGdldENvbnRlbnRGcm9tVXJsKHJlc29sdmVkVVJMKTtcbiAgICAgICAgICAgIGRhdGFVUkwgPSBtYWtlRGF0YVVybChjb250ZW50LCBjb250ZW50VHlwZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkYXRhVVJMID0gYXdhaXQgcmVzb3VyY2VUb0RhdGFVUkwocmVzb2x2ZWRVUkwsIGNvbnRlbnRUeXBlLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3NzVGV4dC5yZXBsYWNlKHRvUmVnZXgocmVzb3VyY2VVUkwpLCBgJDEke2RhdGFVUkx9JDNgKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIHBhc3NcbiAgICB9XG4gICAgcmV0dXJuIGNzc1RleHQ7XG59XG5mdW5jdGlvbiBmaWx0ZXJQcmVmZXJyZWRGb250Rm9ybWF0KHN0ciwgeyBwcmVmZXJyZWRGb250Rm9ybWF0IH0pIHtcbiAgICByZXR1cm4gIXByZWZlcnJlZEZvbnRGb3JtYXRcbiAgICAgICAgPyBzdHJcbiAgICAgICAgOiBzdHIucmVwbGFjZShGT05UX1NSQ19SRUdFWCwgKG1hdGNoKSA9PiB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc3RhbnQtY29uZGl0aW9uXG4gICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtzcmMsICwgZm9ybWF0XSA9IFVSTF9XSVRIX0ZPUk1BVF9SRUdFWC5leGVjKG1hdGNoKSB8fCBbXTtcbiAgICAgICAgICAgICAgICBpZiAoIWZvcm1hdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChmb3JtYXQgPT09IHByZWZlcnJlZEZvbnRGb3JtYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGBzcmM6ICR7c3JjfTtgO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gc2hvdWxkRW1iZWQodXJsKSB7XG4gICAgcmV0dXJuIHVybC5zZWFyY2goVVJMX1JFR0VYKSAhPT0gLTE7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZW1iZWRSZXNvdXJjZXMoY3NzVGV4dCwgYmFzZVVybCwgb3B0aW9ucykge1xuICAgIGlmICghc2hvdWxkRW1iZWQoY3NzVGV4dCkpIHtcbiAgICAgICAgcmV0dXJuIGNzc1RleHQ7XG4gICAgfVxuICAgIGNvbnN0IGZpbHRlcmVkQ1NTVGV4dCA9IGZpbHRlclByZWZlcnJlZEZvbnRGb3JtYXQoY3NzVGV4dCwgb3B0aW9ucyk7XG4gICAgY29uc3QgdXJscyA9IHBhcnNlVVJMcyhmaWx0ZXJlZENTU1RleHQpO1xuICAgIHJldHVybiB1cmxzLnJlZHVjZSgoZGVmZXJyZWQsIHVybCkgPT4gZGVmZXJyZWQudGhlbigoY3NzKSA9PiBlbWJlZChjc3MsIHVybCwgYmFzZVVybCwgb3B0aW9ucykpLCBQcm9taXNlLnJlc29sdmUoZmlsdGVyZWRDU1NUZXh0KSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbWJlZC1yZXNvdXJjZXMuanMubWFwIiwiaW1wb3J0IHsgdG9BcnJheSB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgeyBmZXRjaEFzRGF0YVVSTCB9IGZyb20gJy4vZGF0YXVybCc7XG5pbXBvcnQgeyBzaG91bGRFbWJlZCwgZW1iZWRSZXNvdXJjZXMgfSBmcm9tICcuL2VtYmVkLXJlc291cmNlcyc7XG5jb25zdCBjc3NGZXRjaENhY2hlID0ge307XG5hc3luYyBmdW5jdGlvbiBmZXRjaENTUyh1cmwpIHtcbiAgICBsZXQgY2FjaGUgPSBjc3NGZXRjaENhY2hlW3VybF07XG4gICAgaWYgKGNhY2hlICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlO1xuICAgIH1cbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGNvbnN0IGNzc1RleHQgPSBhd2FpdCByZXMudGV4dCgpO1xuICAgIGNhY2hlID0geyB1cmwsIGNzc1RleHQgfTtcbiAgICBjc3NGZXRjaENhY2hlW3VybF0gPSBjYWNoZTtcbiAgICByZXR1cm4gY2FjaGU7XG59XG5hc3luYyBmdW5jdGlvbiBlbWJlZEZvbnRzKGRhdGEsIG9wdGlvbnMpIHtcbiAgICBsZXQgY3NzVGV4dCA9IGRhdGEuY3NzVGV4dDtcbiAgICBjb25zdCByZWdleFVybCA9IC91cmxcXChbXCInXT8oW15cIicpXSspW1wiJ10/XFwpL2c7XG4gICAgY29uc3QgZm9udExvY3MgPSBjc3NUZXh0Lm1hdGNoKC91cmxcXChbXildK1xcKS9nKSB8fCBbXTtcbiAgICBjb25zdCBsb2FkRm9udHMgPSBmb250TG9jcy5tYXAoYXN5bmMgKGxvYykgPT4ge1xuICAgICAgICBsZXQgdXJsID0gbG9jLnJlcGxhY2UocmVnZXhVcmwsICckMScpO1xuICAgICAgICBpZiAoIXVybC5zdGFydHNXaXRoKCdodHRwczovLycpKSB7XG4gICAgICAgICAgICB1cmwgPSBuZXcgVVJMKHVybCwgZGF0YS51cmwpLmhyZWY7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZldGNoQXNEYXRhVVJMKHVybCwgb3B0aW9ucy5mZXRjaFJlcXVlc3RJbml0LCAoeyByZXN1bHQgfSkgPT4ge1xuICAgICAgICAgICAgY3NzVGV4dCA9IGNzc1RleHQucmVwbGFjZShsb2MsIGB1cmwoJHtyZXN1bHR9KWApO1xuICAgICAgICAgICAgcmV0dXJuIFtsb2MsIHJlc3VsdF07XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBQcm9taXNlLmFsbChsb2FkRm9udHMpLnRoZW4oKCkgPT4gY3NzVGV4dCk7XG59XG5mdW5jdGlvbiBwYXJzZUNTUyhzb3VyY2UpIHtcbiAgICBpZiAoc291cmNlID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBjb25zdCBjb21tZW50c1JlZ2V4ID0gLyhcXC9cXCpbXFxzXFxTXSo/XFwqXFwvKS9naTtcbiAgICAvLyBzdHJpcCBvdXQgY29tbWVudHNcbiAgICBsZXQgY3NzVGV4dCA9IHNvdXJjZS5yZXBsYWNlKGNvbW1lbnRzUmVnZXgsICcnKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXJlZ2V4LWxpdGVyYWxzXG4gICAgY29uc3Qga2V5ZnJhbWVzUmVnZXggPSBuZXcgUmVnRXhwKCcoKEAuKj9rZXlmcmFtZXMgW1xcXFxzXFxcXFNdKj8peyhbXFxcXHNcXFxcU10qP31cXFxccyo/KX0pJywgJ2dpJyk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnN0YW50LWNvbmRpdGlvblxuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBrZXlmcmFtZXNSZWdleC5leGVjKGNzc1RleHQpO1xuICAgICAgICBpZiAobWF0Y2hlcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnB1c2gobWF0Y2hlc1swXSk7XG4gICAgfVxuICAgIGNzc1RleHQgPSBjc3NUZXh0LnJlcGxhY2Uoa2V5ZnJhbWVzUmVnZXgsICcnKTtcbiAgICBjb25zdCBpbXBvcnRSZWdleCA9IC9AaW1wb3J0W1xcc1xcU10qP3VybFxcKFteKV0qXFwpW1xcc1xcU10qPzsvZ2k7XG4gICAgLy8gdG8gbWF0Y2ggY3NzICYgbWVkaWEgcXVlcmllcyB0b2dldGhlclxuICAgIGNvbnN0IGNvbWJpbmVkQ1NTUmVnZXggPSAnKChcXFxccyo/KD86XFxcXC9cXFxcKltcXFxcc1xcXFxTXSo/XFxcXCpcXFxcLyk/XFxcXHMqP0BtZWRpYVtcXFxcc1xcXFxTXScgK1xuICAgICAgICAnKj8peyhbXFxcXHNcXFxcU10qPyl9XFxcXHMqP30pfCgoW1xcXFxzXFxcXFNdKj8peyhbXFxcXHNcXFxcU10qPyl9KSc7XG4gICAgLy8gdW5pZmllZCByZWdleFxuICAgIGNvbnN0IHVuaWZpZWRSZWdleCA9IG5ldyBSZWdFeHAoY29tYmluZWRDU1NSZWdleCwgJ2dpJyk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnN0YW50LWNvbmRpdGlvblxuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIGxldCBtYXRjaGVzID0gaW1wb3J0UmVnZXguZXhlYyhjc3NUZXh0KTtcbiAgICAgICAgaWYgKG1hdGNoZXMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIG1hdGNoZXMgPSB1bmlmaWVkUmVnZXguZXhlYyhjc3NUZXh0KTtcbiAgICAgICAgICAgIGlmIChtYXRjaGVzID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbXBvcnRSZWdleC5sYXN0SW5kZXggPSB1bmlmaWVkUmVnZXgubGFzdEluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdW5pZmllZFJlZ2V4Lmxhc3RJbmRleCA9IGltcG9ydFJlZ2V4Lmxhc3RJbmRleDtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQucHVzaChtYXRjaGVzWzBdKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmFzeW5jIGZ1bmN0aW9uIGdldENTU1J1bGVzKHN0eWxlU2hlZXRzLCBvcHRpb25zKSB7XG4gICAgY29uc3QgcmV0ID0gW107XG4gICAgY29uc3QgZGVmZXJyZWRzID0gW107XG4gICAgLy8gRmlyc3QgbG9vcCBpbmxpbmVzIGltcG9ydHNcbiAgICBzdHlsZVNoZWV0cy5mb3JFYWNoKChzaGVldCkgPT4ge1xuICAgICAgICBpZiAoJ2Nzc1J1bGVzJyBpbiBzaGVldCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0b0FycmF5KHNoZWV0LmNzc1J1bGVzIHx8IFtdKS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS50eXBlID09PSBDU1NSdWxlLklNUE9SVF9SVUxFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW1wb3J0SW5kZXggPSBpbmRleCArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBpdGVtLmhyZWY7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWZlcnJlZCA9IGZldGNoQ1NTKHVybClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigobWV0YWRhdGEpID0+IGVtYmVkRm9udHMobWV0YWRhdGEsIG9wdGlvbnMpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChjc3NUZXh0KSA9PiBwYXJzZUNTUyhjc3NUZXh0KS5mb3JFYWNoKChydWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hlZXQuaW5zZXJ0UnVsZShydWxlLCBydWxlLnN0YXJ0c1dpdGgoJ0BpbXBvcnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAoaW1wb3J0SW5kZXggKz0gMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogc2hlZXQuY3NzUnVsZXMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluc2VydGluZyBydWxlIGZyb20gcmVtb3RlIGNzcycsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyByZW1vdGUgY3NzJywgZS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWRzLnB1c2goZGVmZXJyZWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlubGluZSA9IHN0eWxlU2hlZXRzLmZpbmQoKGEpID0+IGEuaHJlZiA9PSBudWxsKSB8fCBkb2N1bWVudC5zdHlsZVNoZWV0c1swXTtcbiAgICAgICAgICAgICAgICBpZiAoc2hlZXQuaHJlZiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkcy5wdXNoKGZldGNoQ1NTKHNoZWV0LmhyZWYpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigobWV0YWRhdGEpID0+IGVtYmVkRm9udHMobWV0YWRhdGEsIG9wdGlvbnMpKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGNzc1RleHQpID0+IHBhcnNlQ1NTKGNzc1RleHQpLmZvckVhY2goKHJ1bGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubGluZS5pbnNlcnRSdWxlKHJ1bGUsIHNoZWV0LmNzc1J1bGVzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgcmVtb3RlIHN0eWxlc2hlZXQnLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGlubGluaW5nIHJlbW90ZSBjc3MgZmlsZScsIGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKGRlZmVycmVkcykudGhlbigoKSA9PiB7XG4gICAgICAgIC8vIFNlY29uZCBsb29wIHBhcnNlcyBydWxlc1xuICAgICAgICBzdHlsZVNoZWV0cy5mb3JFYWNoKChzaGVldCkgPT4ge1xuICAgICAgICAgICAgaWYgKCdjc3NSdWxlcycgaW4gc2hlZXQpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB0b0FycmF5KHNoZWV0LmNzc1J1bGVzIHx8IFtdKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXQucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoaWxlIHJlYWRpbmcgQ1NTIHJ1bGVzIGZyb20gJHtzaGVldC5ocmVmfWAsIGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZXRXZWJGb250UnVsZXMoY3NzUnVsZXMpIHtcbiAgICByZXR1cm4gY3NzUnVsZXNcbiAgICAgICAgLmZpbHRlcigocnVsZSkgPT4gcnVsZS50eXBlID09PSBDU1NSdWxlLkZPTlRfRkFDRV9SVUxFKVxuICAgICAgICAuZmlsdGVyKChydWxlKSA9PiBzaG91bGRFbWJlZChydWxlLnN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3NyYycpKSk7XG59XG5hc3luYyBmdW5jdGlvbiBwYXJzZVdlYkZvbnRSdWxlcyhub2RlLCBvcHRpb25zKSB7XG4gICAgaWYgKG5vZGUub3duZXJEb2N1bWVudCA9PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUHJvdmlkZWQgZWxlbWVudCBpcyBub3Qgd2l0aGluIGEgRG9jdW1lbnQnKTtcbiAgICB9XG4gICAgY29uc3Qgc3R5bGVTaGVldHMgPSB0b0FycmF5KG5vZGUub3duZXJEb2N1bWVudC5zdHlsZVNoZWV0cyk7XG4gICAgY29uc3QgY3NzUnVsZXMgPSBhd2FpdCBnZXRDU1NSdWxlcyhzdHlsZVNoZWV0cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIGdldFdlYkZvbnRSdWxlcyhjc3NSdWxlcyk7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2ViRm9udENTUyhub2RlLCBvcHRpb25zKSB7XG4gICAgY29uc3QgcnVsZXMgPSBhd2FpdCBwYXJzZVdlYkZvbnRSdWxlcyhub2RlLCBvcHRpb25zKTtcbiAgICBjb25zdCBjc3NUZXh0cyA9IGF3YWl0IFByb21pc2UuYWxsKHJ1bGVzLm1hcCgocnVsZSkgPT4ge1xuICAgICAgICBjb25zdCBiYXNlVXJsID0gcnVsZS5wYXJlbnRTdHlsZVNoZWV0ID8gcnVsZS5wYXJlbnRTdHlsZVNoZWV0LmhyZWYgOiBudWxsO1xuICAgICAgICByZXR1cm4gZW1iZWRSZXNvdXJjZXMocnVsZS5jc3NUZXh0LCBiYXNlVXJsLCBvcHRpb25zKTtcbiAgICB9KSk7XG4gICAgcmV0dXJuIGNzc1RleHRzLmpvaW4oJ1xcbicpO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVtYmVkV2ViRm9udHMoY2xvbmVkTm9kZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IGNzc1RleHQgPSBvcHRpb25zLmZvbnRFbWJlZENTUyAhPSBudWxsXG4gICAgICAgID8gb3B0aW9ucy5mb250RW1iZWRDU1NcbiAgICAgICAgOiBvcHRpb25zLnNraXBGb250c1xuICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICA6IGF3YWl0IGdldFdlYkZvbnRDU1MoY2xvbmVkTm9kZSwgb3B0aW9ucyk7XG4gICAgaWYgKGNzc1RleHQpIHtcbiAgICAgICAgY29uc3Qgc3R5bGVOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgY29uc3Qgc3l0bGVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzVGV4dCk7XG4gICAgICAgIHN0eWxlTm9kZS5hcHBlbmRDaGlsZChzeXRsZUNvbnRlbnQpO1xuICAgICAgICBpZiAoY2xvbmVkTm9kZS5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBjbG9uZWROb2RlLmluc2VydEJlZm9yZShzdHlsZU5vZGUsIGNsb25lZE5vZGUuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjbG9uZWROb2RlLmFwcGVuZENoaWxkKHN0eWxlTm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbWJlZC13ZWJmb250cy5qcy5tYXAiLCJpbXBvcnQgeyBjbG9uZU5vZGUgfSBmcm9tICcuL2Nsb25lLW5vZGUnO1xuaW1wb3J0IHsgZW1iZWRJbWFnZXMgfSBmcm9tICcuL2VtYmVkLWltYWdlcyc7XG5pbXBvcnQgeyBhcHBseVN0eWxlIH0gZnJvbSAnLi9hcHBseS1zdHlsZSc7XG5pbXBvcnQgeyBlbWJlZFdlYkZvbnRzLCBnZXRXZWJGb250Q1NTIH0gZnJvbSAnLi9lbWJlZC13ZWJmb250cyc7XG5pbXBvcnQgeyBnZXRJbWFnZVNpemUsIGdldFBpeGVsUmF0aW8sIGNyZWF0ZUltYWdlLCBjYW52YXNUb0Jsb2IsIG5vZGVUb0RhdGFVUkwsIGNoZWNrQ2FudmFzRGltZW5zaW9ucywgfSBmcm9tICcuL3V0aWwnO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRvU3ZnKG5vZGUsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gZ2V0SW1hZ2VTaXplKG5vZGUsIG9wdGlvbnMpO1xuICAgIGNvbnN0IGNsb25lZE5vZGUgPSAoYXdhaXQgY2xvbmVOb2RlKG5vZGUsIG9wdGlvbnMsIHRydWUpKTtcbiAgICBhd2FpdCBlbWJlZFdlYkZvbnRzKGNsb25lZE5vZGUsIG9wdGlvbnMpO1xuICAgIGF3YWl0IGVtYmVkSW1hZ2VzKGNsb25lZE5vZGUsIG9wdGlvbnMpO1xuICAgIGFwcGx5U3R5bGUoY2xvbmVkTm9kZSwgb3B0aW9ucyk7XG4gICAgY29uc3QgZGF0YXVyaSA9IGF3YWl0IG5vZGVUb0RhdGFVUkwoY2xvbmVkTm9kZSwgd2lkdGgsIGhlaWdodCk7XG4gICAgcmV0dXJuIGRhdGF1cmk7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdG9DYW52YXMobm9kZSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBnZXRJbWFnZVNpemUobm9kZSwgb3B0aW9ucyk7XG4gICAgY29uc3Qgc3ZnID0gYXdhaXQgdG9Tdmcobm9kZSwgb3B0aW9ucyk7XG4gICAgY29uc3QgaW1nID0gYXdhaXQgY3JlYXRlSW1hZ2Uoc3ZnKTtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY29uc3QgcmF0aW8gPSBvcHRpb25zLnBpeGVsUmF0aW8gfHwgZ2V0UGl4ZWxSYXRpbygpO1xuICAgIGNvbnN0IGNhbnZhc1dpZHRoID0gb3B0aW9ucy5jYW52YXNXaWR0aCB8fCB3aWR0aDtcbiAgICBjb25zdCBjYW52YXNIZWlnaHQgPSBvcHRpb25zLmNhbnZhc0hlaWdodCB8fCBoZWlnaHQ7XG4gICAgY2FudmFzLndpZHRoID0gY2FudmFzV2lkdGggKiByYXRpbztcbiAgICBjYW52YXMuaGVpZ2h0ID0gY2FudmFzSGVpZ2h0ICogcmF0aW87XG4gICAgaWYgKCFvcHRpb25zLnNraXBBdXRvU2NhbGUpIHtcbiAgICAgICAgY2hlY2tDYW52YXNEaW1lbnNpb25zKGNhbnZhcyk7XG4gICAgfVxuICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IGAke2NhbnZhc1dpZHRofWA7XG4gICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IGAke2NhbnZhc0hlaWdodH1gO1xuICAgIGlmIChvcHRpb25zLmJhY2tncm91bmRDb2xvcikge1xuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IG9wdGlvbnMuYmFja2dyb3VuZENvbG9yO1xuICAgICAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgfVxuICAgIGNvbnRleHQuZHJhd0ltYWdlKGltZywgMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICByZXR1cm4gY2FudmFzO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRvUGl4ZWxEYXRhKG5vZGUsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gZ2V0SW1hZ2VTaXplKG5vZGUsIG9wdGlvbnMpO1xuICAgIGNvbnN0IGNhbnZhcyA9IGF3YWl0IHRvQ2FudmFzKG5vZGUsIG9wdGlvbnMpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHJldHVybiBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHdpZHRoLCBoZWlnaHQpLmRhdGE7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdG9Qbmcobm9kZSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgY2FudmFzID0gYXdhaXQgdG9DYW52YXMobm9kZSwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIGNhbnZhcy50b0RhdGFVUkwoKTtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0b0pwZWcobm9kZSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgY2FudmFzID0gYXdhaXQgdG9DYW52YXMobm9kZSwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL2pwZWcnLCBvcHRpb25zLnF1YWxpdHkgfHwgMSk7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdG9CbG9iKG5vZGUsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IGNhbnZhcyA9IGF3YWl0IHRvQ2FudmFzKG5vZGUsIG9wdGlvbnMpO1xuICAgIGNvbnN0IGJsb2IgPSBhd2FpdCBjYW52YXNUb0Jsb2IoY2FudmFzKTtcbiAgICByZXR1cm4gYmxvYjtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRGb250RW1iZWRDU1Mobm9kZSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIGdldFdlYkZvbnRDU1Mobm9kZSwgb3B0aW9ucyk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJjb25zdCBXT0ZGID0gJ2FwcGxpY2F0aW9uL2ZvbnQtd29mZic7XG5jb25zdCBKUEVHID0gJ2ltYWdlL2pwZWcnO1xuY29uc3QgbWltZXMgPSB7XG4gICAgd29mZjogV09GRixcbiAgICB3b2ZmMjogV09GRixcbiAgICB0dGY6ICdhcHBsaWNhdGlvbi9mb250LXRydWV0eXBlJyxcbiAgICBlb3Q6ICdhcHBsaWNhdGlvbi92bmQubXMtZm9udG9iamVjdCcsXG4gICAgcG5nOiAnaW1hZ2UvcG5nJyxcbiAgICBqcGc6IEpQRUcsXG4gICAganBlZzogSlBFRyxcbiAgICBnaWY6ICdpbWFnZS9naWYnLFxuICAgIHRpZmY6ICdpbWFnZS90aWZmJyxcbiAgICBzdmc6ICdpbWFnZS9zdmcreG1sJyxcbiAgICB3ZWJwOiAnaW1hZ2Uvd2VicCcsXG59O1xuZnVuY3Rpb24gZ2V0RXh0ZW5zaW9uKHVybCkge1xuICAgIGNvbnN0IG1hdGNoID0gL1xcLihbXi4vXSo/KSQvZy5leGVjKHVybCk7XG4gICAgcmV0dXJuIG1hdGNoID8gbWF0Y2hbMV0gOiAnJztcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRNaW1lVHlwZSh1cmwpIHtcbiAgICBjb25zdCBleHRlbnNpb24gPSBnZXRFeHRlbnNpb24odXJsKS50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiBtaW1lc1tleHRlbnNpb25dIHx8ICcnO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWltZXMuanMubWFwIiwiZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVVcmwodXJsLCBiYXNlVXJsKSB7XG4gICAgLy8gdXJsIGlzIGFic29sdXRlIGFscmVhZHlcbiAgICBpZiAodXJsLm1hdGNoKC9eW2Etel0rOlxcL1xcLy9pKSkge1xuICAgICAgICByZXR1cm4gdXJsO1xuICAgIH1cbiAgICAvLyB1cmwgaXMgYWJzb2x1dGUgYWxyZWFkeSwgd2l0aG91dCBwcm90b2NvbFxuICAgIGlmICh1cmwubWF0Y2goL15cXC9cXC8vKSkge1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgdXJsO1xuICAgIH1cbiAgICAvLyBkYXRhVVJJLCBtYWlsdG86LCB0ZWw6LCBldGMuXG4gICAgaWYgKHVybC5tYXRjaCgvXlthLXpdKzovaSkpIHtcbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG4gICAgY29uc3QgZG9jID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KCk7XG4gICAgY29uc3QgYmFzZSA9IGRvYy5jcmVhdGVFbGVtZW50KCdiYXNlJyk7XG4gICAgY29uc3QgYSA9IGRvYy5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgZG9jLmhlYWQuYXBwZW5kQ2hpbGQoYmFzZSk7XG4gICAgZG9jLmJvZHkuYXBwZW5kQ2hpbGQoYSk7XG4gICAgaWYgKGJhc2VVcmwpIHtcbiAgICAgICAgYmFzZS5ocmVmID0gYmFzZVVybDtcbiAgICB9XG4gICAgYS5ocmVmID0gdXJsO1xuICAgIHJldHVybiBhLmhyZWY7XG59XG5leHBvcnQgY29uc3QgdXVpZCA9ICgoKSA9PiB7XG4gICAgLy8gZ2VuZXJhdGUgdXVpZCBmb3IgY2xhc3NOYW1lIG9mIHBzZXVkbyBlbGVtZW50cy5cbiAgICAvLyBXZSBzaG91bGQgbm90IHVzZSBHVUlEcywgb3RoZXJ3aXNlIHBzZXVkbyBlbGVtZW50cyBzb21ldGltZXMgY2Fubm90IGJlIGNhcHR1cmVkLlxuICAgIGxldCBjb3VudGVyID0gMDtcbiAgICAvLyByZWY6IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzYyNDg3MjIvMjUxOTM3M1xuICAgIGNvbnN0IHJhbmRvbSA9ICgpID0+IFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXG4gICAgYDAwMDAkeygoTWF0aC5yYW5kb20oKSAqIDM2ICoqIDQpIDw8IDApLnRvU3RyaW5nKDM2KX1gLnNsaWNlKC00KTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBjb3VudGVyICs9IDE7XG4gICAgICAgIHJldHVybiBgdSR7cmFuZG9tKCl9JHtjb3VudGVyfWA7XG4gICAgfTtcbn0pKCk7XG5leHBvcnQgZnVuY3Rpb24gZGVsYXkobXMpIHtcbiAgICByZXR1cm4gKGFyZ3MpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZShhcmdzKSwgbXMpO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRvQXJyYXkoYXJyYXlMaWtlKSB7XG4gICAgY29uc3QgYXJyID0gW107XG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBhcnJheUxpa2UubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGFyci5wdXNoKGFycmF5TGlrZVtpXSk7XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG59XG5mdW5jdGlvbiBweChub2RlLCBzdHlsZVByb3BlcnR5KSB7XG4gICAgY29uc3Qgd2luID0gbm9kZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3IHx8IHdpbmRvdztcbiAgICBjb25zdCB2YWwgPSB3aW4uZ2V0Q29tcHV0ZWRTdHlsZShub2RlKS5nZXRQcm9wZXJ0eVZhbHVlKHN0eWxlUHJvcGVydHkpO1xuICAgIHJldHVybiB2YWwgPyBwYXJzZUZsb2F0KHZhbC5yZXBsYWNlKCdweCcsICcnKSkgOiAwO1xufVxuZnVuY3Rpb24gZ2V0Tm9kZVdpZHRoKG5vZGUpIHtcbiAgICBjb25zdCBsZWZ0Qm9yZGVyID0gcHgobm9kZSwgJ2JvcmRlci1sZWZ0LXdpZHRoJyk7XG4gICAgY29uc3QgcmlnaHRCb3JkZXIgPSBweChub2RlLCAnYm9yZGVyLXJpZ2h0LXdpZHRoJyk7XG4gICAgcmV0dXJuIG5vZGUuY2xpZW50V2lkdGggKyBsZWZ0Qm9yZGVyICsgcmlnaHRCb3JkZXI7XG59XG5mdW5jdGlvbiBnZXROb2RlSGVpZ2h0KG5vZGUpIHtcbiAgICBjb25zdCB0b3BCb3JkZXIgPSBweChub2RlLCAnYm9yZGVyLXRvcC13aWR0aCcpO1xuICAgIGNvbnN0IGJvdHRvbUJvcmRlciA9IHB4KG5vZGUsICdib3JkZXItYm90dG9tLXdpZHRoJyk7XG4gICAgcmV0dXJuIG5vZGUuY2xpZW50SGVpZ2h0ICsgdG9wQm9yZGVyICsgYm90dG9tQm9yZGVyO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEltYWdlU2l6ZSh0YXJnZXROb2RlLCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB3aWR0aCA9IG9wdGlvbnMud2lkdGggfHwgZ2V0Tm9kZVdpZHRoKHRhcmdldE5vZGUpO1xuICAgIGNvbnN0IGhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0IHx8IGdldE5vZGVIZWlnaHQodGFyZ2V0Tm9kZSk7XG4gICAgcmV0dXJuIHsgd2lkdGgsIGhlaWdodCB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFBpeGVsUmF0aW8oKSB7XG4gICAgbGV0IHJhdGlvO1xuICAgIGxldCBGSU5BTF9QUk9DRVNTO1xuICAgIHRyeSB7XG4gICAgICAgIEZJTkFMX1BST0NFU1MgPSBwcm9jZXNzO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICAvLyBwYXNzXG4gICAgfVxuICAgIGNvbnN0IHZhbCA9IEZJTkFMX1BST0NFU1MgJiYgRklOQUxfUFJPQ0VTUy5lbnZcbiAgICAgICAgPyBGSU5BTF9QUk9DRVNTLmVudi5kZXZpY2VQaXhlbFJhdGlvXG4gICAgICAgIDogbnVsbDtcbiAgICBpZiAodmFsKSB7XG4gICAgICAgIHJhdGlvID0gcGFyc2VJbnQodmFsLCAxMCk7XG4gICAgICAgIGlmIChOdW1iZXIuaXNOYU4ocmF0aW8pKSB7XG4gICAgICAgICAgICByYXRpbyA9IDE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJhdGlvIHx8IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG59XG4vLyBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvRWxlbWVudC9jYW52YXMjbWF4aW11bV9jYW52YXNfc2l6ZVxuY29uc3QgY2FudmFzRGltZW5zaW9uTGltaXQgPSAxNjM4NDtcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0NhbnZhc0RpbWVuc2lvbnMoY2FudmFzKSB7XG4gICAgaWYgKGNhbnZhcy53aWR0aCA+IGNhbnZhc0RpbWVuc2lvbkxpbWl0IHx8XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPiBjYW52YXNEaW1lbnNpb25MaW1pdCkge1xuICAgICAgICBpZiAoY2FudmFzLndpZHRoID4gY2FudmFzRGltZW5zaW9uTGltaXQgJiZcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPiBjYW52YXNEaW1lbnNpb25MaW1pdCkge1xuICAgICAgICAgICAgaWYgKGNhbnZhcy53aWR0aCA+IGNhbnZhcy5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBjYW52YXMuaGVpZ2h0ICo9IGNhbnZhc0RpbWVuc2lvbkxpbWl0IC8gY2FudmFzLndpZHRoO1xuICAgICAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IGNhbnZhc0RpbWVuc2lvbkxpbWl0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FudmFzLndpZHRoICo9IGNhbnZhc0RpbWVuc2lvbkxpbWl0IC8gY2FudmFzLmhlaWdodDtcbiAgICAgICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gY2FudmFzRGltZW5zaW9uTGltaXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2FudmFzLndpZHRoID4gY2FudmFzRGltZW5zaW9uTGltaXQpIHtcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgKj0gY2FudmFzRGltZW5zaW9uTGltaXQgLyBjYW52YXMud2lkdGg7XG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSBjYW52YXNEaW1lbnNpb25MaW1pdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCAqPSBjYW52YXNEaW1lbnNpb25MaW1pdCAvIGNhbnZhcy5oZWlnaHQ7XG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gY2FudmFzRGltZW5zaW9uTGltaXQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gY2FudmFzVG9CbG9iKGNhbnZhcywgb3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKGNhbnZhcy50b0Jsb2IpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjYW52YXMudG9CbG9iKHJlc29sdmUsIG9wdGlvbnMudHlwZSA/IG9wdGlvbnMudHlwZSA6ICdpbWFnZS9wbmcnLCBvcHRpb25zLnF1YWxpdHkgPyBvcHRpb25zLnF1YWxpdHkgOiAxKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBjb25zdCBiaW5hcnlTdHJpbmcgPSB3aW5kb3cuYXRvYihjYW52YXNcbiAgICAgICAgICAgIC50b0RhdGFVUkwob3B0aW9ucy50eXBlID8gb3B0aW9ucy50eXBlIDogdW5kZWZpbmVkLCBvcHRpb25zLnF1YWxpdHkgPyBvcHRpb25zLnF1YWxpdHkgOiB1bmRlZmluZWQpXG4gICAgICAgICAgICAuc3BsaXQoJywnKVsxXSk7XG4gICAgICAgIGNvbnN0IGxlbiA9IGJpbmFyeVN0cmluZy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGJpbmFyeUFycmF5ID0gbmV3IFVpbnQ4QXJyYXkobGVuKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICAgICAgYmluYXJ5QXJyYXlbaV0gPSBiaW5hcnlTdHJpbmcuY2hhckNvZGVBdChpKTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKG5ldyBCbG9iKFtiaW5hcnlBcnJheV0sIHtcbiAgICAgICAgICAgIHR5cGU6IG9wdGlvbnMudHlwZSA/IG9wdGlvbnMudHlwZSA6ICdpbWFnZS9wbmcnLFxuICAgICAgICB9KSk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW1hZ2UodXJsKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZy5kZWNvZGUgPSAoKSA9PiByZXNvbHZlKGltZyk7XG4gICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKGltZyk7XG4gICAgICAgIGltZy5vbmVycm9yID0gcmVqZWN0O1xuICAgICAgICBpbWcuY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJztcbiAgICAgICAgaW1nLmRlY29kaW5nID0gJ2FzeW5jJztcbiAgICAgICAgaW1nLnNyYyA9IHVybDtcbiAgICB9KTtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdmdUb0RhdGFVUkwoc3ZnKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICAgIC50aGVuKCgpID0+IG5ldyBYTUxTZXJpYWxpemVyKCkuc2VyaWFsaXplVG9TdHJpbmcoc3ZnKSlcbiAgICAgICAgLnRoZW4oZW5jb2RlVVJJQ29tcG9uZW50KVxuICAgICAgICAudGhlbigoaHRtbCkgPT4gYGRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCR7aHRtbH1gKTtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBub2RlVG9EYXRhVVJMKG5vZGUsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICBjb25zdCB4bWxucyA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG4gICAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHhtbG5zLCAnc3ZnJyk7XG4gICAgY29uc3QgZm9yZWlnbk9iamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyh4bWxucywgJ2ZvcmVpZ25PYmplY3QnKTtcbiAgICBzdmcuc2V0QXR0cmlidXRlKCd3aWR0aCcsIGAke3dpZHRofWApO1xuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGAke2hlaWdodH1gKTtcbiAgICBzdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgYDAgMCAke3dpZHRofSAke2hlaWdodH1gKTtcbiAgICBmb3JlaWduT2JqZWN0LnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnMTAwJScpO1xuICAgIGZvcmVpZ25PYmplY3Quc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAnMTAwJScpO1xuICAgIGZvcmVpZ25PYmplY3Quc2V0QXR0cmlidXRlKCd4JywgJzAnKTtcbiAgICBmb3JlaWduT2JqZWN0LnNldEF0dHJpYnV0ZSgneScsICcwJyk7XG4gICAgZm9yZWlnbk9iamVjdC5zZXRBdHRyaWJ1dGUoJ2V4dGVybmFsUmVzb3VyY2VzUmVxdWlyZWQnLCAndHJ1ZScpO1xuICAgIHN2Zy5hcHBlbmRDaGlsZChmb3JlaWduT2JqZWN0KTtcbiAgICBmb3JlaWduT2JqZWN0LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIHJldHVybiBzdmdUb0RhdGFVUkwoc3ZnKTtcbn1cbmV4cG9ydCBjb25zdCBpc0luc3RhbmNlT2ZFbGVtZW50ID0gKG5vZGUsIGluc3RhbmNlKSA9PiB7XG4gICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBpbnN0YW5jZSlcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgY29uc3Qgbm9kZVByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihub2RlKTtcbiAgICBpZiAobm9kZVByb3RvdHlwZSA9PT0gbnVsbClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiAobm9kZVByb3RvdHlwZS5jb25zdHJ1Y3Rvci5uYW1lID09PSBpbnN0YW5jZS5uYW1lIHx8XG4gICAgICAgIGlzSW5zdGFuY2VPZkVsZW1lbnQobm9kZVByb3RvdHlwZSwgaW5zdGFuY2UpKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlsLmpzLm1hcCIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICogYXMgaHRtbFRvSW1hZ2UgZnJvbSBcImh0bWwtdG8taW1hZ2VcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG4vLyBkb20gZWxlbWVudHNcbmNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib2FyZFwiKTtcbmNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICBcImJ1dHRvbjpub3QoI25ld0dyaWRDb25maXJtYXRpb24sI3NhdmUtYXMtaW1nKVwiXG4pO1xuY29uc3QgbmV3R3JpZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3R3JpZENvbmZpcm1hdGlvblwiKTtcbmNvbnN0IGNvbG9ySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiY29sb3JcIl0nKTtcbmNvbnN0IHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9hcmQtc2l6ZVwiKTtcbmNvbnN0IHNhdmVJbWdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NhdmUtYXMtaW1nXCIpO1xuY29uc3QgaW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbWctdG8tZG93bmxvYWRcIik7XG5jb25zdCBkb3dubG9hZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZG93bmxvYWRcIik7XG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpO1xuXG4vL3ZhcmlhYmxlcyB0byBtYW5hZ2Ugc3RhdGVcbmxldCBzbGlkZXJWYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JvYXJkLXNpemUtdmFsdWVcIik7XG5sZXQgYm9hcmRTaXplID0gMTE7XG5sZXQgaXNHcmlkT24gPSBmYWxzZTtcbmxldCBtb3VzZURvd25JbkJvYXJkID0gZmFsc2U7XG5sZXQgY3VycmVudENvbG9yID0gYCR7Y29sb3JJbnB1dC52YWx1ZX1gO1xubGV0IGFjdGl2ZU1vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25vcm1hbFwiKTtcbmFjdGl2ZU1vZGUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblxuLy8gYm9hcmQgcmVsYXRlZCBmdW5jdGlvbnNcbmZ1bmN0aW9uIGRyYXdCb2FyZCgpIHtcbiAgZm9yIChsZXQgaiA9IDA7IGogPCBib2FyZFNpemU7IGorKykge1xuICAgIGNvbnNvbGUubG9nKFwiajogXCIgKyBqKTtcbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJvdy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgcm93LnN0eWxlLmhlaWdodCA9IGBjYWxjKDEwMCUvJHtib2FyZFNpemV9KWA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZFNpemU7IGkrKykge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGNvbG9yQm9hcmQpO1xuICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgY29sb3JCb2FyZCk7XG4gICAgICBkaXYuc3R5bGUud2lkdGggPSBgY2FsYygxMDAlLyR7Ym9hcmRTaXplfSlgO1xuICAgICAgZGl2LnN0eWxlLmJhY2tncm91bmQgPSBgMTAwJWA7XG4gICAgICBkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgcm93LmFwcGVuZENoaWxkKGRpdik7XG4gICAgfVxuICAgIGJvYXJkLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgY29uc29sZS5sb2coXCJqOiBcIiArIGopO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUJvYXJkU2l6ZSgpIHtcbiAgbGV0IG1haW5XaWR0aCA9IGJvYXJkLnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gIGxldCBtYWluSGVpZ2h0ID0gYm9hcmQucGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gIGxldCBtaW4gPSAwLjkgKiBNYXRoLm1pbihtYWluV2lkdGgsIG1haW5IZWlnaHQpO1xuXG4gIGJvYXJkLnN0eWxlLndpZHRoID0gbWluICsgXCJweFwiO1xuICBib2FyZC5zdHlsZS5oZWlnaHQgPSBtaW4gKyBcInB4XCI7XG59XG5cbndpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdXBkYXRlQm9hcmRTaXplKCk7XG59O1xuXG5mdW5jdGlvbiByZW1vdmVCb2FyZCgpIHtcbiAgZm9yIChsZXQgaSA9IGJvYXJkLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgYm9hcmQuY2hpbGRyZW5baV0ucmVtb3ZlKCk7XG4gIH1cbn1cblxuLy8gZnVuY3Rpb25zIG5lZWRlZCBieSBldmVudCBsaXN0ZW5lcnNcbmZ1bmN0aW9uIGNvbG9yQm9hcmQoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgaWYgKGFjdGl2ZU1vZGUuaWQgPT09IFwiZXJhc2VyXCIpIGN1cnJlbnRDb2xvciA9IFwid2hpdGVcIjtcbiAgaWYgKGV2ZW50LnR5cGUgPT09IFwibW91c2Vkb3duXCIpIHtcbiAgICBpZiAoYWN0aXZlTW9kZS5pZCA9PT0gXCJmaWxsXCIpIHtcbiAgICAgIGNvbnN0IHggPSBBcnJheS5mcm9tKGJvYXJkLmNoaWxkcmVuKS5pbmRleE9mKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50KTtcbiAgICAgIGNvbnN0IHkgPSBBcnJheS5mcm9tKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuKS5pbmRleE9mKFxuICAgICAgICBldmVudC50YXJnZXRcbiAgICAgICk7XG4gICAgICBmbG9vZEZpbGwoZXZlbnQudGFyZ2V0LCB4LCB5KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbW91c2VEb3duSW5Cb2FyZCA9IHRydWU7XG4gIH1cbiAgaWYgKGV2ZW50LmJ1dHRvbnMgPT09IDEgJiYgbW91c2VEb3duSW5Cb2FyZCkge1xuICAgIGlmIChhY3RpdmVNb2RlLmdldEF0dHJpYnV0ZShcImlkXCIpID09PSBcInJhaW5ib3dcIikge1xuICAgICAgY3VycmVudENvbG9yID0gYCMke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgweGZmZmZmZiArIDEpKS50b1N0cmluZyhcbiAgICAgICAgMTZcbiAgICAgICl9YDtcbiAgICB9XG4gICAgZXZlbnQudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGAke2N1cnJlbnRDb2xvcn1gO1xuICB9IGVsc2Uge1xuICAgIG1vdXNlRG93bkluQm9hcmQgPSBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5R3JpZFdpdGhCb3JkZXIoYm9yZGVyKSB7XG4gIEFycmF5LmZyb20oYm9hcmQuY2hpbGRyZW4pLmZvckVhY2goKHJvdykgPT4ge1xuICAgIEFycmF5LmZyb20ocm93LmNoaWxkcmVuKS5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBpZiAoY2VsbCAhPSByb3cuY2hpbGRyZW5bMF0pIGNlbGwuc3R5bGUuYm9yZGVyTGVmdCA9IGJvcmRlcjtcbiAgICAgIGlmIChyb3cgIT09IGJvYXJkLmNoaWxkcmVuWzBdKSBjZWxsLnN0eWxlLmJvcmRlclRvcCA9IGJvcmRlcjtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRyYXdHcmlkKCkge1xuICBkaXNwbGF5R3JpZFdpdGhCb3JkZXIoXCIxcHggc29saWQgZ3JleVwiKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlR3JpZCgpIHtcbiAgZGlzcGxheUdyaWRXaXRoQm9yZGVyKFwibm9uZVwiKTtcbn1cblxuZnVuY3Rpb24gaGV4VG9SZ2IoaGV4KSB7XG4gIGxldCByID0gcGFyc2VJbnQoaGV4LnN1YnN0cmluZygxLCAzKSwgMTYpO1xuICBsZXQgZyA9IHBhcnNlSW50KGhleC5zdWJzdHJpbmcoMywgNSksIDE2KTtcbiAgbGV0IGIgPSBwYXJzZUludChoZXguc3Vic3RyaW5nKDUsIDcpLCAxNik7XG5cbiAgcmV0dXJuIGByZ2IoJHtyfSwgJHtnfSwgJHtifSlgO1xufVxuXG5mdW5jdGlvbiBmbG9vZEZpbGwoZGl2LCB4LCB5KSB7XG4gIGlmIChkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID09PSBoZXhUb1JnYihjdXJyZW50Q29sb3IpKSByZXR1cm47XG4gIGNvbnN0IG9yaWdpbmFsQ29sb3IgPSBkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yO1xuICBkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY3VycmVudENvbG9yO1xuXG4gIGlmIChcbiAgICB4ID4gMCAmJlxuICAgIGJvYXJkLmNoaWxkcmVuW3ggLSAxXS5jaGlsZHJlblt5XS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT09IG9yaWdpbmFsQ29sb3JcbiAgKSB7XG4gICAgZmxvb2RGaWxsKGJvYXJkLmNoaWxkcmVuW3ggLSAxXS5jaGlsZHJlblt5XSwgeCAtIDEsIHkpO1xuICB9XG4gIGlmIChcbiAgICB4IDwgYm9hcmRTaXplIC0gMSAmJlxuICAgIGJvYXJkLmNoaWxkcmVuW3ggKyAxXS5jaGlsZHJlblt5XS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT09IG9yaWdpbmFsQ29sb3JcbiAgKSB7XG4gICAgZmxvb2RGaWxsKGJvYXJkLmNoaWxkcmVuW3ggKyAxXS5jaGlsZHJlblt5XSwgeCArIDEsIHkpO1xuICB9XG4gIGlmIChcbiAgICB5ID4gMCAmJlxuICAgIGJvYXJkLmNoaWxkcmVuW3hdLmNoaWxkcmVuW3kgLSAxXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT09IG9yaWdpbmFsQ29sb3JcbiAgKSB7XG4gICAgZmxvb2RGaWxsKGJvYXJkLmNoaWxkcmVuW3hdLmNoaWxkcmVuW3kgLSAxXSwgeCwgeSAtIDEpO1xuICB9XG4gIGlmIChcbiAgICB5IDwgYm9hcmRTaXplIC0gMSAmJlxuICAgIGJvYXJkLmNoaWxkcmVuW3hdLmNoaWxkcmVuW3kgKyAxXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT09IG9yaWdpbmFsQ29sb3JcbiAgKSB7XG4gICAgZmxvb2RGaWxsKGJvYXJkLmNoaWxkcmVuW3hdLmNoaWxkcmVuW3kgKyAxXSwgeCwgeSArIDEpO1xuICB9XG59XG5cbmNvbG9ySW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4ge1xuICBpZiAoYWN0aXZlTW9kZS5pZCAhPT0gXCJlcmFzZXJcIikgY3VycmVudENvbG9yID0gYCR7Y29sb3JJbnB1dC52YWx1ZX1gO1xufSk7XG5cbmZ1bmN0aW9uIHNob3dNb2RhbCgpIHtcbiAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufVxuXG5mdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgaWYgKGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgIGNsb3NlTW9kYWwoKTtcbiAgfVxufSk7XG5cbm92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY2xvc2VNb2RhbCgpO1xufSk7XG5cbmRvd25sb2FkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgbGluay5kb3dubG9hZCA9IFwiaW1hZ2UucG5nXCI7XG4gIGxpbmsuaHJlZiA9IGltZy5zcmM7XG4gIGxpbmsuY2xpY2soKTtcbn0pO1xuXG4vLyBtZW51IGJ1dHRvbnNcbmJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gIGlmIChidXR0b24uaWQgIT0gXCJncmlkbGluZXNcIilcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGJ1dHRvbi5pZCAhPT0gXCJyZXNldFwiKSB7XG4gICAgICAgIGFjdGl2ZU1vZGUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIGFjdGl2ZU1vZGUgPSBidXR0b247XG4gICAgICAgIGlmIChidXR0b24uaWQgPT09IFwibm9ybWFsXCIgfHwgYnV0dG9uLmlkID09PSBcImZpbGxcIikge1xuICAgICAgICAgIGN1cnJlbnRDb2xvciA9IGAke2NvbG9ySW5wdXQudmFsdWV9YDtcbiAgICAgICAgfSBlbHNlIGlmIChidXR0b24uaWQgPT09IFwiZXJhc2VyXCIpIHtcbiAgICAgICAgICBjdXJyZW50Q29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEFycmF5LmZyb20oYm9hcmQuY2hpbGRyZW4pLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgICAgIEFycmF5LmZyb20ocm93LmNoaWxkcmVuKS5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIGVsc2Uge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKCFpc0dyaWRPbikge1xuICAgICAgICBpc0dyaWRPbiA9IHRydWU7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICBkcmF3R3JpZCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXNHcmlkT24gPSBmYWxzZTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIHJlbW92ZUdyaWQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufSk7XG5cbm5ld0dyaWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICBpZiAoK3NsaWRlci52YWx1ZSA9PT0gYm9hcmRTaXplKSByZXR1cm47XG4gIGlmIChjb25maXJtKFwiQ3JlYXRlIG5ldyBib2FyZD9cIikpIHtcbiAgICByZW1vdmVCb2FyZCgpO1xuICAgIGJvYXJkU2l6ZSA9ICtzbGlkZXIudmFsdWU7XG4gICAgZHJhd0JvYXJkKCk7XG4gICAgaWYgKGlzR3JpZE9uKSBkcmF3R3JpZCgpO1xuICB9XG59KTtcblxuc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZlbnQpID0+IHtcbiAgc2xpZGVyVmFsLnRleHRDb250ZW50ID0gYCR7c2xpZGVyLnZhbHVlfSB4ICR7c2xpZGVyLnZhbHVlfWA7XG59KTtcblxuY29uc3QgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2FkZXJcIik7XG5cbmZ1bmN0aW9uIHNob3dMb2FkZXIoKSB7XG4gIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59XG5cbmZ1bmN0aW9uIGhpZGVMb2FkZXIoKSB7XG4gIGxvYWRlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5zYXZlSW1nQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHNob3dMb2FkZXIoKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaWYgKGlzR3JpZE9uKSB7XG4gICAgICByZW1vdmVHcmlkKCk7XG4gICAgfVxuICB9LCAwKTtcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBodG1sVG9JbWFnZVxuICAgICAgLnRvUG5nKGJvYXJkKVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGFVcmwpIHtcbiAgICAgICAgaGlkZUxvYWRlcigpO1xuICAgICAgICBpbWcuc3JjID0gZGF0YVVybDtcbiAgICAgICAgc2hvd01vZGFsKCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwib29wcywgc29tZXRoaW5nIHdlbnQgd3JvbmchXCIsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9LCAxKTtcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBpZiAoaXNHcmlkT24pIHtcbiAgICAgIGRyYXdHcmlkKCk7XG4gICAgfVxuICB9LCAyKTtcbn0pO1xuXG4vL2luaXRpYWxpc2luZyBkcmF3aW5nIGJvYXJkXG51cGRhdGVCb2FyZFNpemUoKTtcbmRyYXdCb2FyZCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9