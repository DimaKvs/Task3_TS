/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar updateObjectInArray_1 = __webpack_require__(/*! ./services/updateObjectInArray */ \"./src/services/updateObjectInArray.ts\");\r\nvar fetchData_1 = __webpack_require__(/*! ./services/fetchData */ \"./src/services/fetchData.ts\");\r\nvar url = 'https://jsonplaceholder.typicode.com/posts';\r\nvar postContainer = document.querySelector('.posts-container');\r\nvar newElementOfArray = {\r\n    userId: 24,\r\n    id: 34,\r\n    title: 'Some text',\r\n    body: 'Some text'\r\n};\r\nfunction displayPosts(postsArray, container) {\r\n    container.innerHTML = '';\r\n    postsArray.forEach(function (obj) {\r\n        var wrapper = document.createElement('div');\r\n        wrapper.innerHTML = \"<p>User:\" + obj.userId + \"</p>\\n                                 <p>Id:\" + obj.id + \"</p>\\n                                 <p>Title:\" + obj.title + \"</p>\\n                                 <p>Body:\" + obj.body + \"</p>\\n                                 <hr>\";\r\n        container.appendChild(wrapper);\r\n    });\r\n}\r\nfetchData_1.fetchData(url).then(function (data) {\r\n    displayPosts(data, postContainer);\r\n    var newArr = updateObjectInArray_1.updateObjectInArray(data, 104, newElementOfArray); //here I get new updated array\r\n    setTimeout(function () {\r\n        displayPosts(newArr, postContainer);\r\n    }, 5000);\r\n}).catch(function (e) {\r\n    postContainer.innerHTML = 'Something went wrong';\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrM190eXBlc2NyaXB0Ly4vc3JjL2luZGV4LnRzP2ZmYjQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrSEFBbUU7QUFDbkUsaUdBQStDO0FBSS9DLElBQU0sR0FBRyxHQUFHLDRDQUE0QyxDQUFDO0FBRXpELElBQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQW1CLENBQUM7QUFFbkYsSUFBTSxpQkFBaUIsR0FBUztJQUM1QixNQUFNLEVBQUUsRUFBRTtJQUNWLEVBQUUsRUFBRSxFQUFFO0lBQ04sS0FBSyxFQUFHLFdBQVc7SUFDbkIsSUFBSSxFQUFFLFdBQVc7Q0FDcEI7QUFFRCxTQUFTLFlBQVksQ0FBQyxVQUF1QixFQUFFLFNBQXlCO0lBQ2hFLFNBQVMsQ0FBQyxTQUFTLEdBQUcsRUFBRTtJQUN4QixVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRztRQUNuQixJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsYUFBVyxHQUFHLENBQUMsTUFBTSxxREFDWixHQUFHLENBQUMsRUFBRSx3REFDSCxHQUFHLENBQUMsS0FBSyx1REFDVixHQUFHLENBQUMsSUFBSSxnREFDYixDQUFDO1FBQzNCLFNBQVMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFbkMsQ0FBQyxDQUFDLENBQUM7QUFDWCxDQUFDO0FBRUQscUJBQVMsQ0FBTyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFJO0lBQzNCLFlBQVksQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDbEMsSUFBTSxNQUFNLEdBQUcseUNBQW1CLENBQU8sSUFBSSxFQUFFLEdBQUcsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsOEJBQThCO0lBQ3RHLFVBQVUsQ0FBQztRQUNQLFlBQVksQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDeEMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBRWIsQ0FBQyxDQUFDLENBQUUsS0FBSyxDQUFDLFVBQUMsQ0FBQztJQUNSLGFBQWMsQ0FBQyxTQUFTLEdBQUcsc0JBQXNCLENBQUM7QUFDdEQsQ0FBQyxDQUFDIiwiZmlsZSI6Ii4vc3JjL2luZGV4LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1cGRhdGVPYmplY3RJbkFycmF5fSBmcm9tICcuL3NlcnZpY2VzL3VwZGF0ZU9iamVjdEluQXJyYXknO1xyXG5pbXBvcnQge2ZldGNoRGF0YX0gZnJvbSAnLi9zZXJ2aWNlcy9mZXRjaERhdGEnO1xyXG5pbXBvcnQgUG9zdCBmcm9tICcuL2ludGVyZmFjZXMvcG9zdCc7XHJcblxyXG5cclxuY29uc3QgdXJsID0gJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cyc7XHJcblxyXG5jb25zdCBwb3N0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvc3RzLWNvbnRhaW5lcicpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5cclxuY29uc3QgbmV3RWxlbWVudE9mQXJyYXkgOiBQb3N0ID17XHJcbiAgICB1c2VySWQ6IDI0LFxyXG4gICAgaWQ6IDM0LFxyXG4gICAgdGl0bGUgOiAnU29tZSB0ZXh0JyxcclxuICAgIGJvZHk6ICdTb21lIHRleHQnXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlQb3N0cyhwb3N0c0FycmF5OiBBcnJheTxQb3N0PiwgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCl7XHJcbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnXHJcbiAgICAgICAgcG9zdHNBcnJheS5mb3JFYWNoKChvYmopPT57XHJcbiAgICAgICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgd3JhcHBlci5pbm5lckhUTUwgPSBgPHA+VXNlcjoke29iai51c2VySWR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5JZDoke29iai5pZH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRpdGxlOiR7b2JqLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Qm9keToke29iai5ib2R5fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyPmA7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbmZldGNoRGF0YTxQb3N0Pih1cmwpLnRoZW4oKGRhdGEpPT57XHJcbiAgICBkaXNwbGF5UG9zdHMoZGF0YSwgcG9zdENvbnRhaW5lcik7XHJcbiAgICBjb25zdCBuZXdBcnIgPSB1cGRhdGVPYmplY3RJbkFycmF5PFBvc3Q+KGRhdGEsIDEwNCwgbmV3RWxlbWVudE9mQXJyYXkpOyAvL2hlcmUgSSBnZXQgbmV3IHVwZGF0ZWQgYXJyYXlcclxuICAgIHNldFRpbWVvdXQoKCk9PnsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2FuZCBkaXNwbGF5IGl0IG9uIHdlYnBhZ2UsIHVzZSBzZXRUaW1lb3V0IHRvIHNlZSBjaGFuZ2VzXHJcbiAgICAgICAgZGlzcGxheVBvc3RzKG5ld0FyciwgcG9zdENvbnRhaW5lcik7XHJcbiAgICB9LCA1MDAwKTtcclxuICAgIFxyXG59KS4gY2F0Y2goKGUpPT57XHJcbiAgICBwb3N0Q29udGFpbmVyIS5pbm5lckhUTUwgPSAnU29tZXRoaW5nIHdlbnQgd3JvbmcnO1xyXG59KVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ }),

/***/ "./src/services/fetchData.ts":
/*!***********************************!*\
  !*** ./src/services/fetchData.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.fetchData = void 0;\r\nvar fetchData = function (api) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var response;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0: return [4 /*yield*/, fetch(api)];\r\n            case 1:\r\n                response = _a.sent();\r\n                if (!response.ok) {\r\n                    throw new Error('Network error');\r\n                }\r\n                return [4 /*yield*/, response.json()];\r\n            case 2: return [2 /*return*/, _a.sent()];\r\n        }\r\n    });\r\n}); };\r\nexports.fetchData = fetchData;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrM190eXBlc2NyaXB0Ly4vc3JjL3NlcnZpY2VzL2ZldGNoRGF0YS50cz84MDZiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQU0sU0FBUyxHQUFHLFVBQVcsR0FBVTs7OztvQkFFZCxxQkFBTSxLQUFLLENBQUMsR0FBRyxDQUFDOztnQkFBM0IsUUFBUSxHQUFHLFNBQWdCO2dCQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRTtvQkFDZCxNQUFNLElBQUksS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2lCQUNwQztnQkFDTSxxQkFBTSxRQUFRLENBQUMsSUFBSSxFQUFFO29CQUE1QixzQkFBTyxTQUFxQjs7O0tBQ25DO0FBR08sOEJBQVMiLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvZmV0Y2hEYXRhLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IGZldGNoRGF0YSA9IGFzeW5jIDxUPiggYXBpOnN0cmluZyApOiBQcm9taXNlPEFycmF5PFQ+PiA9PiB7XHJcbiAgICBcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaSlcclxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTmV0d29yayBlcnJvcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbn1cclxuICAgIFxyXG5cclxuZXhwb3J0IHtmZXRjaERhdGF9OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/fetchData.ts\n");

/***/ }),

/***/ "./src/services/updateObjectInArray.ts":
/*!*********************************************!*\
  !*** ./src/services/updateObjectInArray.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.updateObjectInArray = void 0;\r\nvar updateObjectInArray = function (array, key, newKeyValue) {\r\n    var clonedArray = array.map(function (item) { return Object.assign({}, item); });\r\n    if (typeof array[key] !== 'undefined') { // check if such index exists\r\n        clonedArray[key] = newKeyValue;\r\n    }\r\n    return clonedArray;\r\n};\r\nexports.updateObjectInArray = updateObjectInArray;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrM190eXBlc2NyaXB0Ly4vc3JjL3NlcnZpY2VzL3VwZGF0ZU9iamVjdEluQXJyYXkudHM/ZjQ5OSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxJQUFNLG1CQUFtQixHQUFHLFVBQWMsS0FBYyxFQUFHLEdBQVUsRUFBRSxXQUFhO0lBRWhGLElBQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsY0FBSSxJQUFJLGFBQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUF2QixDQUF1QixDQUFDLENBQUM7SUFDL0QsSUFBSSxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxXQUFXLEVBQUMsRUFBRSw2QkFBNkI7UUFFakUsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFdBQVcsQ0FBQztLQUNsQztJQUVELE9BQU8sV0FBVyxDQUFDO0FBQ3ZCLENBQUM7QUFFTyxrREFBbUIiLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvdXBkYXRlT2JqZWN0SW5BcnJheS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB1cGRhdGVPYmplY3RJbkFycmF5ID0gZnVuY3Rpb24gPFQ+KCBhcnJheTpBcnJheTxUPiAsIGtleTpudW1iZXIsIG5ld0tleVZhbHVlOlQpIDogQXJyYXk8VD57XHJcbiAgICBcclxuICAgIGNvbnN0IGNsb25lZEFycmF5ID0gYXJyYXkubWFwKGl0ZW0gPT4gT2JqZWN0LmFzc2lnbih7fSwgaXRlbSkpO1xyXG4gICAgaWYoIHR5cGVvZiBhcnJheVtrZXldICE9PSAndW5kZWZpbmVkJyl7IC8vIGNoZWNrIGlmIHN1Y2ggaW5kZXggZXhpc3RzXHJcblxyXG4gICAgICAgIGNsb25lZEFycmF5W2tleV0gPSBuZXdLZXlWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2xvbmVkQXJyYXk7XHJcbn1cclxuXHJcbmV4cG9ydCB7dXBkYXRlT2JqZWN0SW5BcnJheX07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/updateObjectInArray.ts\n");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;