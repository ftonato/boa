(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/dockerfile/dockerfile.js":
/*!************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/dockerfile/dockerfile.js ***!
  \************************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\r\n *  Copyright (c) Microsoft Corporation. All rights reserved.\r\n *  Licensed under the MIT License. See License.txt in the project root for license information.\r\n *--------------------------------------------------------------------------------------------*/\r\n\r\nvar conf = {\r\n    brackets: [\r\n        ['{', '}'],\r\n        ['[', ']'],\r\n        ['(', ')']\r\n    ],\r\n    autoClosingPairs: [\r\n        { open: '{', close: '}' },\r\n        { open: '[', close: ']' },\r\n        { open: '(', close: ')' },\r\n        { open: '\"', close: '\"' },\r\n        { open: '\\'', close: '\\'' },\r\n    ],\r\n    surroundingPairs: [\r\n        { open: '{', close: '}' },\r\n        { open: '[', close: ']' },\r\n        { open: '(', close: ')' },\r\n        { open: '\"', close: '\"' },\r\n        { open: '\\'', close: '\\'' },\r\n    ]\r\n};\r\nvar language = {\r\n    defaultToken: '',\r\n    tokenPostfix: '.dockerfile',\r\n    variable: /\\${?[\\w]+}?/,\r\n    tokenizer: {\r\n        root: [\r\n            { include: '@whitespace' },\r\n            { include: '@comment' },\r\n            [/(ONBUILD)(\\s+)/, ['keyword', '']],\r\n            [/(ENV)(\\s+)([\\w]+)/, ['keyword', '', { token: 'variable', next: '@arguments' }]],\r\n            [/(FROM|MAINTAINER|RUN|EXPOSE|ENV|ADD|ARG|VOLUME|LABEL|USER|WORKDIR|COPY|CMD|STOPSIGNAL|SHELL|HEALTHCHECK|ENTRYPOINT)/, { token: 'keyword', next: '@arguments' }]\r\n        ],\r\n        arguments: [\r\n            { include: '@whitespace' },\r\n            { include: '@strings' },\r\n            [/(@variable)/, {\r\n                    cases: {\r\n                        '@eos': { token: 'variable', next: '@popall' },\r\n                        '@default': 'variable'\r\n                    }\r\n                }],\r\n            [/\\\\/, {\r\n                    cases: {\r\n                        '@eos': '',\r\n                        '@default': ''\r\n                    }\r\n                }],\r\n            [/./, {\r\n                    cases: {\r\n                        '@eos': { token: '', next: '@popall' },\r\n                        '@default': ''\r\n                    }\r\n                }],\r\n        ],\r\n        // Deal with white space, including comments\r\n        whitespace: [\r\n            [/\\s+/, {\r\n                    cases: {\r\n                        '@eos': { token: '', next: '@popall' },\r\n                        '@default': ''\r\n                    }\r\n                }],\r\n        ],\r\n        comment: [\r\n            [/(^#.*$)/, 'comment', '@popall']\r\n        ],\r\n        // Recognize strings, including those broken across lines with \\ (but not without)\r\n        strings: [\r\n            [/'$/, 'string', '@popall'],\r\n            [/'/, 'string', '@stringBody'],\r\n            [/\"$/, 'string', '@popall'],\r\n            [/\"/, 'string', '@dblStringBody']\r\n        ],\r\n        stringBody: [\r\n            [/[^\\\\\\$']/, {\r\n                    cases: {\r\n                        '@eos': { token: 'string', next: '@popall' },\r\n                        '@default': 'string'\r\n                    }\r\n                }],\r\n            [/\\\\./, 'string.escape'],\r\n            [/'$/, 'string', '@popall'],\r\n            [/'/, 'string', '@pop'],\r\n            [/(@variable)/, 'variable'],\r\n            [/\\\\$/, 'string'],\r\n            [/$/, 'string', '@popall']\r\n        ],\r\n        dblStringBody: [\r\n            [/[^\\\\\\$\"]/, {\r\n                    cases: {\r\n                        '@eos': { token: 'string', next: '@popall' },\r\n                        '@default': 'string'\r\n                    }\r\n                }],\r\n            [/\\\\./, 'string.escape'],\r\n            [/\"$/, 'string', '@popall'],\r\n            [/\"/, 'string', '@pop'],\r\n            [/(@variable)/, 'variable'],\r\n            [/\\\\$/, 'string'],\r\n            [/$/, 'string', '@popall']\r\n        ]\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/monaco-editor/esm/vs/basic-languages/dockerfile/dockerfile.js?");

/***/ })

}]);