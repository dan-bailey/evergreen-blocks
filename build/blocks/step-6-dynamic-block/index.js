!function(){"use strict";var e=window.wp.blocks,t=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"evergreen-blocks/step-6-dynamic-block","version":"1.0.0","title":"Dynamic Block","category":"evergreen-blocks","icon":"database","description":"Dynamic Block (PHP)","keywords":["boilerplate","dynamic"],"textdomain":"evergreen-blocks","supports":{"html":false},"editorScript":"file:index.js"}');function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e){var t=function(e,t){if("object"!=r(e)||!e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,"string");if("object"!=r(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==r(t)?t:String(t)}var n=window.React,i=window.wp.blockEditor,c=window.wp.data;function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}var s={edit:function(){var e=(0,i.useBlockProps)(),t=(0,c.useSelect)((function(e){return e("core").getEntityRecords("postType","post")}),[]);return(0,n.createElement)("div",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){var n,i,c;n=e,i=t,c=r[t],(i=o(i))in n?Object.defineProperty(n,i,{value:c,enumerable:!0,configurable:!0,writable:!0}):n[i]=c})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e),!t&&"Loading",t&&0===t.length&&"No Posts",t&&t.length>0&&(0,n.createElement)("a",{href:t[0].link},t[0].title.rendered))}};(0,e.registerBlockType)(t,s)}();