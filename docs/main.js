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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_archivos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/archivos */ \"./src/js/archivos.js\");\n/* harmony import */ var _js_crud_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/crud-provider */ \"./src/js/crud-provider.js\");\n// import { init } from \"./js/chistes-page\";\r\n\r\n\r\n\r\n\r\n// import { obtenerUsuarios } from \"./js/http-provider\";\r\n// import { init } from \"./js/usuarios-page\";\r\n\r\n// // obtenerUsuarios().then( console.log );\r\n\r\n// init();\r\n\r\n// CRUD.getUsuario( 2 ).then( console.log );\r\n\r\n// CRUD.crearUsuario({\r\n//     name: 'baruc',\r\n//     job: 'developer'\r\n// }).then( console.log )\r\n\r\n// CRUD.ActualizarUsuario( 1, {\r\n//     name: 'melisa',\r\n//     job: 'developer'\r\n// })\r\n// .then(\r\n//     console.log\r\n// )\r\n\r\n// CRUD.borrarUsuario( 1 ).then( console.log )\r\n\r\nObject(_js_archivos__WEBPACK_IMPORTED_MODULE_0__[\"init\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/archivos.js":
/*!****************************!*\
  !*** ./src/js/archivos.js ***!
  \****************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony import */ var _http_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http-provider */ \"./src/js/http-provider.js\");\n\r\n\r\n\r\nconst body = document.body;\r\nlet inputFile, imgfoto, divFoto;\r\n\r\nconst crearInputHtml = () =>{\r\n\r\n    const http = `\r\n        <h1 class=\"mt-5\" >Subir Archivo</h1>\r\n        <hr>\r\n        <label>Selecciona una fotografia: </label>\r\n        <input type='file' accept=\"image/png, image/jpeg\">\r\n        <br>\r\n        <img id=\"foto\" class=\"img-thumbnail\" src=\"\">\r\n    `;\r\n\r\n    const div = document.createElement('div');\r\n    div.innerHTML = http;\r\n\r\n    body.append( div );\r\n\r\n    inputFile   = document.querySelector('input');\r\n    imgfoto     = document.querySelector('#foto');\r\n    \r\n\r\n}\r\n\r\nconst crearAlert = ( url ) =>{\r\n\r\n    const alert = `\r\n        <div class=\"alert alert-primary m-5\">\r\n            <a id=\"urlFoto\" >${url}</a>\r\n        </div>\r\n    `;\r\n\r\n    const div1 = document.createElement('div');\r\n    div1.innerHTML = alert;\r\n\r\n    body.append( div1 );\r\n\r\n    divFoto     = document.querySelector('#urlFoto');\r\n\r\n\r\n}\r\n\r\nconst eventos = () => {\r\n    inputFile.addEventListener('change', (event) => {\r\n\r\n        const file = event.target.files[0];\r\n\r\n        // console.log( file );\r\n        Object(_http_provider__WEBPACK_IMPORTED_MODULE_0__[\"subirImagen\"])( file ).then( url => {\r\n            imgfoto.src = url;\r\n            // divFoto.setAttribute('href', url);\r\n            crearAlert( url );\r\n        });\r\n\r\n    });\r\n\r\n   \r\n}\r\n\r\nconst init = () =>{\r\n\r\n    crearInputHtml();\r\n    eventos();\r\n}\n\n//# sourceURL=webpack:///./src/js/archivos.js?");

/***/ }),

/***/ "./src/js/crud-provider.js":
/*!*********************************!*\
  !*** ./src/js/crud-provider.js ***!
  \*********************************/
/*! exports provided: getUsuario, crearUsuario, ActualizarUsuario, borrarUsuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUsuario\", function() { return getUsuario; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"crearUsuario\", function() { return crearUsuario; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ActualizarUsuario\", function() { return ActualizarUsuario; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"borrarUsuario\", function() { return borrarUsuario; });\n\r\nconst urlCRUD =  'https://reqres.in/api/users';\r\n\r\n\r\nconst getUsuario = async( id ) =>{\r\n\r\n    const resp = await fetch( `${urlCRUD}/${id}` );\r\n    const {data} = await resp.json();\r\n\r\n    return data;\r\n\r\n}\r\n\r\nconst crearUsuario = async( usuario ) => {\r\n\r\n    const resp = await fetch( urlCRUD, {\r\n        method: 'POST',\r\n        body:   JSON.stringify( usuario ),\r\n        headers:{\r\n            'Content-Type': 'application/json'\r\n        }\r\n    } );\r\n\r\n    return await resp.json();\r\n}\r\n\r\nconst ActualizarUsuario = async( id, usuario ) =>{\r\n\r\n    const resp = await fetch( `${urlCRUD}/${id}`, {\r\n        method: 'PUT',\r\n        body:   JSON.stringify( usuario ),\r\n        headers:{\r\n            'Content-Type': 'application/json'\r\n        }\r\n    } );\r\n\r\n    return await resp.json();\r\n\r\n};\r\n\r\nconst borrarUsuario = async( id ) =>{\r\n\r\n    const resp = await fetch(`${urlCRUD}/${id}`,{\r\n\r\n        method: 'DELETE'\r\n\r\n    });\r\n\r\n\r\n    return ( resp.ok )?'borrado' : 'No sepudo eliminar';\r\n\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/crud-provider.js?");

/***/ }),

/***/ "./src/js/http-provider.js":
/*!*********************************!*\
  !*** ./src/js/http-provider.js ***!
  \*********************************/
/*! exports provided: obtenerChiste, obtenerUsuarios, subirImagen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"obtenerChiste\", function() { return obtenerChiste; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"obtenerUsuarios\", function() { return obtenerUsuarios; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"subirImagen\", function() { return subirImagen; });\n\r\nconst jokeUrl       = 'https://api.chucknorris.io/jokes/random';\r\nconst urlUsuarios   = 'https://reqres.in/api/users?page=2';\r\n\r\n// subir imagen\r\nconst cloudUrl       = 'https://api.cloudinary.com/v1_1/dlye9ysxa/upload';\r\nconst cloudPreset    = 'ajwia6fm';\r\n\r\n// fetch( jokeUrl ).then( resp =>{\r\n\r\n//     resp.json().then( data => {\r\n//         console.log( data );\r\n//     } );\r\n\r\n// });\r\n\r\n// fetch( jokeUrl )\r\n//     .then( resp => resp.json() )\r\n//     .then( ({id, value}) =>{\r\n\r\n//         console.log(id, value);\r\n\r\n//     } );\r\n\r\nconst obtenerChiste = async() =>{\r\n\r\n    try {\r\n\r\n        const resp = await fetch( jokeUrl )\r\n\r\n        if( !resp.ok ) throw 'No se pudo realizar la peticion'\r\n\r\n        const { icon_url, value, id } = await resp.json();\r\n    \r\n        return { icon_url, value, id };\r\n\r\n        \r\n    } catch (error) {\r\n\r\n        throw error;\r\n        \r\n    }\r\n\r\n\r\n\r\n}\r\n\r\nconst obtenerUsuarios = async() =>{\r\n\r\n    const resp = await fetch( urlUsuarios );\r\n    const {data: usuarios} = await resp.json();\r\n\r\n    return usuarios\r\n}\r\n\r\nconst subirImagen = async( archivoSubir ) =>{\r\n\r\n    const formData = new FormData();\r\n    formData.append('upload_preset', cloudPreset);\r\n    formData.append('file', archivoSubir);\r\n\r\n    try {\r\n\r\n        const resp = await fetch( cloudUrl,{\r\n            method: 'POST',\r\n            body: formData\r\n        });\r\n\r\n        if ( resp.ok ) {\r\n            const cloudResp = await resp.json();\r\n            return cloudResp.secure_url; \r\n            \r\n        } else{\r\n            throw await resp.json();\r\n        }\r\n        \r\n    } catch (err) {\r\n        throw err;\r\n    }\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/http-provider.js?");

/***/ })

/******/ });