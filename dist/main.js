/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ1ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ05tRDtBQUNsQjtBQUNDO0FBQ007QUFDVjtBQUNFO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixpRUFBZTtBQUN0Qyx1QkFBdUIsK0NBQU07QUFDN0I7QUFDQSx1QkFBdUIscURBQVM7QUFDaEMsdUJBQXVCLDJDQUFJO0FBQzNCLHVCQUF1Qiw2Q0FBSztBQUM1QjtBQUNBLHVCQUF1QiwrQ0FBTTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanMtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL2pzLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9iYWNrZ3JvdW5kSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vanMtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9qcy1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL2pzLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL2pzLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vanMtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pzLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vanMtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vanMtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vanMtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFib3V0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCdhYm91dCcpO1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKVxyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRlJylcclxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gYDxoMj5MZXQncyB0YWxrPC9oMj5cclxuICAgIDxoMT5BYm91dCB1czwvaDE+XHJcbiAgICA8aHI+XHJcbiAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBQZWxsZW50ZXNxdWUgcGxhY2VyYXQsIHRlbGx1cyBzaXQgYW1ldCB1bHRyaWNlcyBwb3J0dGl0b3IsIGV4IGV4IGFsaXF1ZXQgcHVydXMsIHBlbGxlbnRlc3F1ZSByaG9uY3VzIGZlbGlzIGlwc3VtIG5lYyBwdXJ1cy4gRG9uZWMgaWQgZW5pbSBpbiByaXN1cyBwZWxsZW50ZXNxdWUgYmxhbmRpdC4gUHJvaW4gc2VkIG5pYmggbmVjIGFyY3UgbW9sbGlzIHJob25jdXMgaW4gc2l0IGFtZXQgYXVndWUuIFN1c3BlbmRpc3NlIG1hZ25hIG5pc2wsIGVsZWlmZW5kIG5vbiB0ZW1wb3IgZXQsIGx1Y3R1cyBpZCBxdWFtLiBOdWxsYSBiaWJlbmR1bSB2dWxwdXRhdGUgYW50ZSwgbm9uIG1hbGVzdWFkYSBlcm9zIGxvYm9ydGlzIGV1aXNtb2RgXHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnRcclxufVxyXG5cclxuZXhwb3J0IHsgYWJvdXQgfSIsImNvbnN0ICBiYWNrZ3JvdW5kSW1hZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2JnLWltZycpXHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGJhY2tncm91bmRJbWFnZSB9OyIsIlxyXG5jb25zdCBjb250YWluZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsJ2hvbWUnKTtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJylcclxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gYDxoMj5XZWxjb21lIHRvLDwvaDI+XHJcbiAgICA8aDE+TGEgQ2FmZXRlcsOtYTwvaDE+XHJcbiAgICA8aHI+XHJcbiAgICA8cD5DYWbDqSBkZSBlc3BlY2lhbGlkYWQsIGNlcnZlemEgYXJ0ZXNhbmEsIGp1ZWdvcyBkZSBtZXNhLCByZXBvc3RlcsOtYSBjYXNlcmEgwr9UZSB2aWVuZXM/PC9wPlxyXG4gICAgPGJ1dHRvbiBpZD1cImJ0bi1tZW51XCI+VmVyIGVsIG1lbsO6PC9idXR0b24+XHJcbiAgICBgXHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnRcclxufVxyXG5cclxuZXhwb3J0IHsgY29udGFpbmVyIH0iLCJjb25zdCBmb290ZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJylcclxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gYCA8cD5EZXZlbG9wZWQgYnkgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpdEJvby9cIj5EYXZpZEJvbzwvYT48L3A+XHJcbiAgICA8cD5Gb3RvIGRlIDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9AemFyYWt2Zz91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5aYXJhayBLaGFuPC9hPiBlbiA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vZXMvZm90b3MvNjlpbHFNejBwMXM/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+VW5zcGxhc2g8L2E+PC9wPmBcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudFxyXG59XHJcblxyXG5leHBvcnQgeyBmb290ZXIgfSIsImNvbnN0IG1lbnUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsJ21lbnUnKTtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJylcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZScpXHJcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IGA8aDI+WW91IGNhbiBjaGVjayw8L2gyPlxyXG4gICAgPGgxPk91ciBNZW7DujwvaDE+XHJcbiAgICA8aHI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWVudS1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2PiAgXHJcbiAgICAgICAgICAgIDxwPkNhZsOpPC9wPiBcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwPkVzcHJlc3NvPC9wPjxwPjEsMzA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5Eb2JsZSBlc3ByZXNzbzwvcD48cD4xLDMwPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+Q2Fmw6kgY29uIGxlY2hlPC9wPjxwPjEsMzA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5DYXB1Y2Npbm88L3A+PHA+MSwzMDwvcD5cclxuICAgICAgICAgICAgICAgIDxwPkJsYWNrIHdoaXRlPC9wPjxwPjEsMzA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+ICAgXHJcbiAgICAgICAgICAgIDxwPkluZnVzaW9uZXM8L3A+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8cD5UaWJldGFuYTwvcD48cD4xLDMwPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+QWZyaWNhbiBDaGFpPC9wPjxwPjEsMzA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5Uw6kgTmVncm88L3A+PHA+MSwzMDwvcD5cclxuICAgICAgICAgICAgICAgIDxwPkVhcmwgR3JleTwvcD48cD4xLDMwPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+RW5nbGlzaCBCcmVha2Zhc3Q8L3A+PHA+MSwzMDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+ICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+ICBcclxuICAgICAgICAgICAgPHA+Q2VydmV6YXM8L3A+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8cD5DZXJ2ZXphcyBsYWdlcjwvcD48cD4xLDMwPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+UGlsc2VuPC9wPjxwPjEsMzA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5DU3BlemlhbDwvcD48cD4xLDMwPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+RG9ydG11bnN0ZXI8L3A+PHA+MSwzMDwvcD5cclxuICAgICAgICAgICAgICAgIDxwPlNjaHdhcnpiaWVyPC9wPjxwPjEsMzA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PiAgICBcclxuICAgICAgICAgICAgPHA+RHVsY2VzICYgUGludHhvczwvcD5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwPlRvcnRpbGxhPC9wPjxwPjEsMzA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5Dcm9pc3NhbnQgUmVsbGVubzwvcD48cD4xLDMwPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+Q29va2llPC9wPjxwPjEsMzA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5UYXJ0YSBkZSBxdWVzbzwvcD48cD4xLDMwPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5gXHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnRcclxufVxyXG5cclxuZXhwb3J0IHsgbWVudSB9IiwiY29uc3QgbmF2YmFyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2JylcclxuICAgIG5hdi5pbm5lckhUTUwgPSBgPHVsPlxyXG4gICAgPGxpPjxhIGhyZWY9XCJcIj5Ib21lPC9hPjwvbGk+XHJcbiAgICA8bGk+PGEgaHJlZj1cIlwiPk1lbnU8L2E+PC9saT5cclxuICAgIDxsaT48YSBocmVmPVwiXCI+QWJvdXQ8L2E+PC9saT5cclxuPC91bD5gXHJcblxyXG4gICAgcmV0dXJuIG5hdlxyXG59XHJcblxyXG5leHBvcnQgeyBuYXZiYXIgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgYmFja2dyb3VuZEltYWdlIH0gZnJvbSBcIi4vYmFja2dyb3VuZEltYWdlXCJcclxuaW1wb3J0IHsgbmF2YmFyfSBmcm9tICBcIi4vbmF2YmFyXCJcclxuaW1wb3J0IHsgZm9vdGVyIH0gZnJvbSBcIi4vZm9vdGVyXCI7XHJcbmltcG9ydCB7IGNvbnRhaW5lciB9IGZyb20gXCIuL2NvbnRhaW5lclwiO1xyXG5pbXBvcnQgeyBtZW51IH0gZnJvbSBcIi4vbWVudVwiO1xyXG5pbXBvcnQgeyBhYm91dCB9IGZyb20gXCIuL2Fib3V0XCI7XHJcblxyXG5jb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxyXG5cclxuY29udGVudERpdi5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kSW1hZ2UoKSk7XHJcbmNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobmF2YmFyKCkpO1xyXG5cclxuY29udGVudERpdi5hcHBlbmRDaGlsZChjb250YWluZXIoKSk7XHJcbmNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobWVudSgpKTtcclxuY29udGVudERpdi5hcHBlbmRDaGlsZChhYm91dCgpKTtcclxuXHJcbmNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZm9vdGVyKCkpO1xyXG5cclxuY29uc3QgaG9tZVBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpXHJcbmNvbnN0IG1lbnVQYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKVxyXG5jb25zdCBhYm91dFBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWJvdXQnKVxyXG5cclxuY29uc3QgYnRuTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tbWVudScpXHJcblxyXG5jb25zdCBwYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ25hdiA+IHVsID4gbGkgPiBhJylcclxuXHJcbi8vZGVmYXVsdCB2YWx1ZSBmb3IgSG9tZSBwYWdlID0+IHBhZ2UuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxucGFnZXNbMF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuXHJcblxyXG5jb25zdCBhY3RpdmF0ZVBhZ2UgPSAocCkgPT4ge1xyXG4gICAgcC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcclxuICAgIHAuY2xhc3NMaXN0LmFkZCgnbm90LWhpZGUnKVxyXG59XHJcblxyXG5jb25zdCBkZWFjdGl2YXRlUGFnZSA9IChwKSA9PiB7XHJcbiAgICBwLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxyXG4gICAgcC5jbGFzc0xpc3QucmVtb3ZlKCdub3QtaGlkZScpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrRGlzcGxheU1vZGUoKSB7XHJcbiAgICBpZihwYWdlc1swXS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSAgYWN0aXZhdGVQYWdlKGhvbWVQYWdlKVxyXG4gICAgZWxzZSBkZWFjdGl2YXRlUGFnZShob21lUGFnZSlcclxuXHJcbiAgICBpZihwYWdlc1sxXS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSBhY3RpdmF0ZVBhZ2UobWVudVBhZ2UpXHJcbiAgICBlbHNlIGRlYWN0aXZhdGVQYWdlKG1lbnVQYWdlKVxyXG5cclxuICAgIGlmKHBhZ2VzWzJdLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIGFjdGl2YXRlUGFnZShhYm91dFBhZ2UpXHJcbiAgICBlbHNlIGRlYWN0aXZhdGVQYWdlKGFib3V0UGFnZSlcclxufVxyXG5cclxucGFnZXMuZm9yRWFjaChwYWdlID0+IHtcclxuICAgIHBhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcGFnZXNbMF0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgICAgICBwYWdlc1sxXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgICAgIHBhZ2VzWzJdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICAgICAgcGFnZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG5cclxuICAgICAgICBjaGVja0Rpc3BsYXlNb2RlKClcclxuICAgIH0pXHJcbn0pXHJcblxyXG5idG5NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgcGFnZXNbMF0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgIHBhZ2VzWzFdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcblxyXG4gICAgY2hlY2tEaXNwbGF5TW9kZSgpXHJcbn0pXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==