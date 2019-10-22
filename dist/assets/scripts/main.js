/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/main.js":
/*!************************************!*\
  !*** ./src/assets/scripts/main.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$('.dropdown').click(function (e) {
  $('.dropdown').toggleClass('dropdown--shown');
});
$(document).on('click', function (e) {
  if ($(e.target).is('.dropdown, .dropdown > a') == false) {
    $('.dropdown').removeClass('dropdown--shown');
  }
});
$(document).ready(function () {
  $(".owl-carousel-splash").owlCarousel({
    autoplay: true,
    autoplaySpeed: 350,
    autoplayTimeout: 3500,
    lazyLoadEager: 5,
    items: 1,
    loop: true,
    navSpeed: 500,
    pagination: true,
    nav: true
  });
});
$(document).ready(function () {
  $(".owl-carousel-logos").owlCarousel({
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 2
      },
      // breakpoint from 480 up
      600: {
        items: 3
      },
      // breakpoint from 768 up
      900: {
        items: 5
      }
    },
    margin: 40,
    autoplay: true,
    autoplaySpeed: 750,
    autoplayTimeout: 2500,
    loop: true,
    dots: false,
    nav: true,
    autoplayHoverPause: true
  });
});
var containerEl = document.querySelector('.mixitup');
var mixer = mixitup(containerEl, {
  animation: {
    animateResizeContainer: false // required to prevent column algorithm bug

  }
});

/***/ }),

/***/ 0:
/*!******************************************!*\
  !*** multi ./src/assets/scripts/main.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Coding-practice\Citrus\src\assets\scripts\main.js */"./src/assets/scripts/main.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL21haW4uanMiXSwibmFtZXMiOlsiJCIsImNsaWNrIiwiZSIsInRvZ2dsZUNsYXNzIiwiZG9jdW1lbnQiLCJvbiIsInRhcmdldCIsImlzIiwicmVtb3ZlQ2xhc3MiLCJyZWFkeSIsIm93bENhcm91c2VsIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwiYXV0b3BsYXlUaW1lb3V0IiwibGF6eUxvYWRFYWdlciIsIml0ZW1zIiwibG9vcCIsIm5hdlNwZWVkIiwicGFnaW5hdGlvbiIsIm5hdiIsInJlc3BvbnNpdmUiLCJtYXJnaW4iLCJkb3RzIiwiYXV0b3BsYXlIb3ZlclBhdXNlIiwiY29udGFpbmVyRWwiLCJxdWVyeVNlbGVjdG9yIiwibWl4ZXIiLCJtaXhpdHVwIiwiYW5pbWF0aW9uIiwiYW5pbWF0ZVJlc2l6ZUNvbnRhaW5lciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDakZBQSxDQUFDLENBQUMsV0FBRCxDQUFELENBQWVDLEtBQWYsQ0FBcUIsVUFBVUMsQ0FBVixFQUFhO0FBRTlCRixHQUFDLENBQUMsV0FBRCxDQUFELENBQWVHLFdBQWYsQ0FBMkIsaUJBQTNCO0FBQ0gsQ0FIRDtBQUlBSCxDQUFDLENBQUNJLFFBQUQsQ0FBRCxDQUFZQyxFQUFaLENBQWUsT0FBZixFQUF3QixVQUFVSCxDQUFWLEVBQWE7QUFDakMsTUFBSUYsQ0FBQyxDQUFDRSxDQUFDLENBQUNJLE1BQUgsQ0FBRCxDQUFZQyxFQUFaLENBQWUsMEJBQWYsS0FBOEMsS0FBbEQsRUFBeUQ7QUFDckRQLEtBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZVEsV0FBZixDQUEyQixpQkFBM0I7QUFDSDtBQUNKLENBSkQ7QUFNQVIsQ0FBQyxDQUFDSSxRQUFELENBQUQsQ0FBWUssS0FBWixDQUFrQixZQUFZO0FBQzFCVCxHQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQlUsV0FBMUIsQ0FBc0M7QUFDbENDLFlBQVEsRUFBRSxJQUR3QjtBQUVsQ0MsaUJBQWEsRUFBRSxHQUZtQjtBQUdsQ0MsbUJBQWUsRUFBRSxJQUhpQjtBQUlsQ0MsaUJBQWEsRUFBRSxDQUptQjtBQUtsQ0MsU0FBSyxFQUFFLENBTDJCO0FBTWxDQyxRQUFJLEVBQUUsSUFONEI7QUFPbENDLFlBQVEsRUFBRSxHQVB3QjtBQVFsQ0MsY0FBVSxFQUFFLElBUnNCO0FBU2xDQyxPQUFHLEVBQUU7QUFUNkIsR0FBdEM7QUFXSCxDQVpEO0FBY0FuQixDQUFDLENBQUNJLFFBQUQsQ0FBRCxDQUFZSyxLQUFaLENBQWtCLFlBQVk7QUFDMUJULEdBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCVSxXQUF6QixDQUFxQztBQUNqQ1UsY0FBVSxFQUFHO0FBQ1Q7QUFDQSxTQUFJO0FBQ0FMLGFBQUssRUFBQztBQUROLE9BRks7QUFLVDtBQUNBLFdBQU07QUFDRkEsYUFBSyxFQUFFO0FBREwsT0FORztBQVNUO0FBQ0EsV0FBTTtBQUNGQSxhQUFLLEVBQUU7QUFETDtBQVZHLEtBRG9CO0FBZ0JqQ00sVUFBTSxFQUFFLEVBaEJ5QjtBQWlCakNWLFlBQVEsRUFBRSxJQWpCdUI7QUFrQmpDQyxpQkFBYSxFQUFFLEdBbEJrQjtBQW1CakNDLG1CQUFlLEVBQUUsSUFuQmdCO0FBb0JqQ0csUUFBSSxFQUFFLElBcEIyQjtBQXFCakNNLFFBQUksRUFBRSxLQXJCMkI7QUFzQmpDSCxPQUFHLEVBQUUsSUF0QjRCO0FBdUJqQ0ksc0JBQWtCLEVBQUM7QUF2QmMsR0FBckM7QUEwQkgsQ0EzQkQ7QUE2QkEsSUFBSUMsV0FBVyxHQUFHcEIsUUFBUSxDQUFDcUIsYUFBVCxDQUF1QixVQUF2QixDQUFsQjtBQUVBLElBQUlDLEtBQUssR0FBR0MsT0FBTyxDQUFDSCxXQUFELEVBQWE7QUFDNUJJLFdBQVMsRUFBRTtBQUNQQywwQkFBc0IsRUFBRSxLQURqQixDQUN1Qjs7QUFEdkI7QUFEaUIsQ0FBYixDQUFuQixDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJcclxuJCgnLmRyb3Bkb3duJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAkKCcuZHJvcGRvd24nKS50b2dnbGVDbGFzcygnZHJvcGRvd24tLXNob3duJyk7XHJcbn0pO1xyXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgaWYgKCQoZS50YXJnZXQpLmlzKCcuZHJvcGRvd24sIC5kcm9wZG93biA+IGEnKSA9PSBmYWxzZSkge1xyXG4gICAgICAgICQoJy5kcm9wZG93bicpLnJlbW92ZUNsYXNzKCdkcm9wZG93bi0tc2hvd24nKVxyXG4gICAgfVxyXG59KTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIub3dsLWNhcm91c2VsLXNwbGFzaFwiKS5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgYXV0b3BsYXlTcGVlZDogMzUwLFxyXG4gICAgICAgIGF1dG9wbGF5VGltZW91dDogMzUwMCxcclxuICAgICAgICBsYXp5TG9hZEVhZ2VyOiA1LFxyXG4gICAgICAgIGl0ZW1zOiAxLFxyXG4gICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgbmF2U3BlZWQ6IDUwMCxcclxuICAgICAgICBwYWdpbmF0aW9uOiB0cnVlLFxyXG4gICAgICAgIG5hdjogdHJ1ZVxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgJChcIi5vd2wtY2Fyb3VzZWwtbG9nb3NcIikub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgIHJlc3BvbnNpdmUgOiB7XHJcbiAgICAgICAgICAgIC8vIGJyZWFrcG9pbnQgZnJvbSAwIHVwXHJcbiAgICAgICAgICAgIDAgOiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtczoyXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIGJyZWFrcG9pbnQgZnJvbSA0ODAgdXBcclxuICAgICAgICAgICAgNjAwIDoge1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6IDNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gYnJlYWtwb2ludCBmcm9tIDc2OCB1cFxyXG4gICAgICAgICAgICA5MDAgOiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtczogNVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtYXJnaW46IDQwLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5U3BlZWQ6IDc1MCxcclxuICAgICAgICBhdXRvcGxheVRpbWVvdXQ6IDI1MDAsXHJcbiAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICBuYXY6IHRydWUsXHJcbiAgICAgICAgYXV0b3BsYXlIb3ZlclBhdXNlOnRydWVcclxuXHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5sZXQgY29udGFpbmVyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWl4aXR1cCcpXHJcblxyXG5sZXQgbWl4ZXIgPSBtaXhpdHVwKGNvbnRhaW5lckVsLHtcclxuICAgIGFuaW1hdGlvbjoge1xyXG4gICAgICAgIGFuaW1hdGVSZXNpemVDb250YWluZXI6IGZhbHNlIC8vIHJlcXVpcmVkIHRvIHByZXZlbnQgY29sdW1uIGFsZ29yaXRobSBidWdcclxuICAgIH1cclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=