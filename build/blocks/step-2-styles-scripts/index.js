!function(){"use strict";var e,t={29:function(){var e=window.wp.blocks;function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function r(e,r,n){return c=function(e,r){if("object"!=t(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var c=n.call(e,"string");if("object"!=t(c))return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r),(r="symbol"==t(c)?c:String(c))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e;var c}var n=window.React,c=window.wp.i18n,s=window.wp.blockEditor,a="-ms-",o="-moz-",l="-webkit-",i="comm",u="rule",p="decl",f="@keyframes",b=Math.abs,d=String.fromCharCode,g=Object.assign;function m(e){return e.trim()}function h(e,t){return(e=t.exec(e))?e[0]:e}function w(e,t,r){return e.replace(t,r)}function v(e,t,r){return e.indexOf(t,r)}function y(e,t){return 0|e.charCodeAt(t)}function k(e,t,r){return e.slice(t,r)}function O(e){return e.length}function S(e){return e.length}function j(e,t){return t.push(e),e}function $(e,t){return e.filter((function(e){return!h(e,t)}))}function x(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function P(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case p:return e.return=e.return||e.value;case i:return"";case f:return e.return=e.value+"{"+x(e.children,n)+"}";case u:if(!O(e.value=e.props.join(",")))return""}return O(r=x(e.children,n))?e.return=e.value+"{"+r+"}":""}var _=1,E=1,C=0,D=0,N=0,H="";function W(e,t,r,n,c,s,a,o){return{value:e,root:t,parent:r,type:n,props:c,children:s,line:_,column:E,length:a,return:"",siblings:o}}function B(e,t){return g(W("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function z(e){for(;e.root;)e=B(e.root,{children:[e]});j(e,e.siblings)}function q(){return N=D>0?y(H,--D):0,E--,10===N&&(E=1,_--),N}function F(){return N=D<C?y(H,D++):0,E++,10===N&&(E=1,_++),N}function G(){return y(H,D)}function I(){return D}function R(e,t){return k(H,e,t)}function T(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function A(e){return m(R(D-1,V(91===e?e+2:40===e?e+1:e)))}function J(e){for(;(N=G())&&N<33;)F();return T(e)>2||T(N)>3?"":" "}function M(e,t){for(;--t&&F()&&!(N<48||N>102||N>57&&N<65||N>70&&N<97););return R(e,I()+(t<6&&32==G()&&32==F()))}function V(e){for(;F();)switch(N){case e:return D;case 34:case 39:34!==e&&39!==e&&V(N);break;case 40:41===e&&V(e);break;case 92:F()}return D}function K(e,t){for(;F()&&e+N!==57&&(e+N!==84||47!==G()););return"/*"+R(t,D-1)+"*"+d(47===e?e:F())}function L(e){for(;!T(G());)F();return R(e,D)}function Q(e){return function(e){return H="",e}(U("",null,null,null,[""],e=function(e){return _=E=1,C=O(H=e),D=0,[]}(e),0,[0],e))}function U(e,t,r,n,c,s,a,o,l){for(var i=0,u=0,p=a,f=0,g=0,m=0,h=1,k=1,S=1,$=0,x="",P=c,_=s,E=n,C=x;k;)switch(m=$,$=F()){case 40:if(108!=m&&58==y(C,p-1)){-1!=v(C+=w(A($),"&","&\f"),"&\f",b(i?o[i-1]:0))&&(S=-1);break}case 34:case 39:case 91:C+=A($);break;case 9:case 10:case 13:case 32:C+=J(m);break;case 92:C+=M(I()-1,7);continue;case 47:switch(G()){case 42:case 47:j(Y(K(F(),I()),t,r,l),l);break;default:C+="/"}break;case 123*h:o[i++]=O(C)*S;case 125*h:case 59:case 0:switch($){case 0:case 125:k=0;case 59+u:-1==S&&(C=w(C,/\f/g,"")),g>0&&O(C)-p&&j(g>32?Z(C+";",n,r,p-1,l):Z(w(C," ","")+";",n,r,p-2,l),l);break;case 59:C+=";";default:if(j(E=X(C,t,r,i,u,c,o,x,P=[],_=[],p,s),s),123===$)if(0===u)U(C,t,E,E,P,s,p,o,_);else switch(99===f&&110===y(C,3)?100:f){case 100:case 108:case 109:case 115:U(e,E,E,n&&j(X(e,E,E,0,0,c,o,x,c,P=[],p,_),_),c,_,p,o,n?P:_);break;default:U(C,E,E,E,[""],_,0,o,_)}}i=u=g=0,h=S=1,x=C="",p=a;break;case 58:p=1+O(C),g=m;default:if(h<1)if(123==$)--h;else if(125==$&&0==h++&&125==q())continue;switch(C+=d($),$*h){case 38:S=u>0?1:(C+="\f",-1);break;case 44:o[i++]=(O(C)-1)*S,S=1;break;case 64:45===G()&&(C+=A(F())),f=G(),u=p=O(x=C+=L(I())),$++;break;case 45:45===m&&2==O(C)&&(h=0)}}return s}function X(e,t,r,n,c,s,a,o,l,i,p,f){for(var d=c-1,g=0===c?s:[""],h=S(g),v=0,y=0,O=0;v<n;++v)for(var j=0,$=k(e,d+1,d=b(y=a[v])),x=e;j<h;++j)(x=m(y>0?g[j]+" "+$:w($,/&\f/g,g[j])))&&(l[O++]=x);return W(e,t,r,0===c?u:o,l,i,p,f)}function Y(e,t,r,n){return W(e,t,r,i,d(N),k(e,2,-2),0,n)}function Z(e,t,r,n,c){return W(e,t,r,p,k(e,0,n),k(e,n+1,-1),n,c)}function ee(e,t,r){switch(function(e,t){return 45^y(e,0)?(((t<<2^y(e,0))<<2^y(e,1))<<2^y(e,2))<<2^y(e,3):0}(e,t)){case 5103:return l+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return l+e+e;case 4789:return o+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return l+e+o+e+a+e+e;case 5936:switch(y(e,t+11)){case 114:return l+e+a+w(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return l+e+a+w(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return l+e+a+w(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return l+e+a+e+e;case 6165:return l+e+a+"flex-"+e+e;case 5187:return l+e+w(e,/(\w+).+(:[^]+)/,l+"box-$1$2"+a+"flex-$1$2")+e;case 5443:return l+e+a+"flex-item-"+w(e,/flex-|-self/g,"")+(h(e,/flex-|baseline/)?"":a+"grid-row-"+w(e,/flex-|-self/g,""))+e;case 4675:return l+e+a+"flex-line-pack"+w(e,/align-content|flex-|-self/g,"")+e;case 5548:return l+e+a+w(e,"shrink","negative")+e;case 5292:return l+e+a+w(e,"basis","preferred-size")+e;case 6060:return l+"box-"+w(e,"-grow","")+l+e+a+w(e,"grow","positive")+e;case 4554:return l+w(e,/([^-])(transform)/g,"$1"+l+"$2")+e;case 6187:return w(w(w(e,/(zoom-|grab)/,l+"$1"),/(image-set)/,l+"$1"),e,"")+e;case 5495:case 3959:return w(e,/(image-set\([^]*)/,l+"$1$`$1");case 4968:return w(w(e,/(.+:)(flex-)?(.*)/,l+"box-pack:$3"+a+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+l+e+e;case 4200:if(!h(e,/flex-|baseline/))return a+"grid-column-align"+k(e,t)+e;break;case 2592:case 3360:return a+w(e,"template-","")+e;case 4384:case 3616:return r&&r.some((function(e,r){return t=r,h(e.props,/grid-\w+-end/)}))?~v(e+(r=r[t].value),"span",0)?e:a+w(e,"-start","")+e+a+"grid-row-span:"+(~v(r,"span",0)?h(r,/\d+/):+h(r,/\d+/)-+h(e,/\d+/))+";":a+w(e,"-start","")+e;case 4896:case 4128:return r&&r.some((function(e){return h(e.props,/grid-\w+-start/)}))?e:a+w(w(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return w(e,/(.+)-inline(.+)/,l+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(O(e)-1-t>6)switch(y(e,t+1)){case 109:if(45!==y(e,t+4))break;case 102:return w(e,/(.+:)(.+)-([^]+)/,"$1"+l+"$2-$3$1"+o+(108==y(e,t+3)?"$3":"$2-$3"))+e;case 115:return~v(e,"stretch",0)?ee(w(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return w(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,r,n,c,s,o,l){return a+r+":"+n+l+(c?a+r+"-span:"+(s?o:+o-+n)+l:"")+e}));case 4949:if(121===y(e,t+6))return w(e,":",":"+l)+e;break;case 6444:switch(y(e,45===y(e,14)?18:11)){case 120:return w(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+l+(45===y(e,14)?"inline-":"")+"box$3$1"+l+"$2$3$1"+a+"$2box$3")+e;case 100:return w(e,":",":"+a)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return w(e,"scroll-","scroll-snap-")+e}return e}function te(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case p:return void(e.return=ee(e.value,e.length,r));case f:return x([B(e,{value:w(e.value,"@","@"+l)})],n);case u:if(e.length)return function(e,t){return e.map(t).join("")}(r=e.props,(function(t){switch(h(t,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":z(B(e,{props:[w(t,/:(read-\w+)/,":"+o+"$1")]})),z(B(e,{props:[t]})),g(e,{props:$(r,n)});break;case"::placeholder":z(B(e,{props:[w(t,/:(plac\w+)/,":"+l+"input-$1")]})),z(B(e,{props:[w(t,/:(plac\w+)/,":"+o+"$1")]})),z(B(e,{props:[w(t,/:(plac\w+)/,a+"input-$1")]})),z(B(e,{props:[t]})),g(e,{props:$(r,n)})}return""}))}}var re=function(e){return(0,n.createElement)("style",null,x(Q(e.children),(r=S(t=[te,P]),function(e,n,c,s){for(var a="",o=0;o<r;o++)a+=t[o](e,n,c,s)||"";return a})));var t,r};function ne(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var ce=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"evergreen-blocks/step-2-styles-scripts","version":"1.0.0","title":"Style and Scripts","category":"evergreen-blocks","icon":"art","description":"Inline CSS(static/dynamic style) using useBlockProps, Internal CSS(static/dynamic style) using RenderCss(Self Github Gist), External CSS(static/dynamic using CSS variables) using block.json file, enqueue_block_editor_assets and enqueue_block_assets hooks","keywords":["boilerplate","Styles Scripts"],"textdomain":"evergreen-blocks","supports":{"html":false},"editorScript":"file:index.js","script":"file:both-end.js","viewScript":"file:frontend.js","editorStyle":"file:index.css","style":"file:style-index.css"}');function se(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var ae={edit:function(){var e=(0,s.useBlockProps)({style:{backgroundColor:"#090"},className:"evergreen-blocks-parent"});return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(re,null,"\n\t\t\t\t.evergreen-blocks{\n                        &-parent {\n                            min-height:200px;\n                            padding:30px;\n                            p{\n                           \t\tcolor:red;\n                            }\n                        }\n\t\t\t\t\t   &-child{\n\t\t\t\t\t\t\tcolor:orange;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t&-child-2{\n\t\t\t\t\t\t\tbackground:yellow;\n\t\t\t\t\t\t}\n                "),(0,n.createElement)("div",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e),(0,n.createElement)("div",{className:"evergreen-blocks-child evergreen-blocks-child-1"},(0,c.__)("Hello WordPress Developers! from the editor Style and Scripts Child 1!","evergreen-blocks")),(0,n.createElement)("div",{className:"evergreen-blocks-child evergreen-blocks-child-2"},(0,c.__)("Hello WordPress Developers! from the editor Style and Scripts Child 2!","wp-custom-gutenbergboilerplate-blocks-")),(0,n.createElement)("p",null,(0,c.__)("Hello WordPress Developers! from the editor Style and Scripts Child 3!","evergreen-blocks"))))},save:function(){var e=s.useBlockProps.save({style:{backgroundColor:"#fd4111"},className:"evergreen-blocks-parent"});return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(re,null,"\n\t\t\t\t.evergreen-blocks{\n                        &-parent {\n                            min-height:200px;\n                            padding:30px;\n                            p{\n                           \t\tcolor:red;\n                            }\n                        }\n\t\t\t\t\t   &-child{\n\t\t\t\t\t\t\tcolor:orange;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t&-child-2{\n\t\t\t\t\t\t\tbackground:yellow;\n\t\t\t\t\t\t}\n                "),(0,n.createElement)("div",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?se(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):se(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e),(0,n.createElement)("div",{className:"evergreen-blocks-child evergreen-blocks-child-1"},(0,c.__)("Hello WordPress Developers! from the frontend Style and Scripts Child 1!","evergreen-blocks")),(0,n.createElement)("div",{className:"evergreen-blocks-child evergreen-blocks-child-2"},(0,c.__)("Hello WordPress Developers! from the frontend Style and Scripts Child 2!","evergreen-blocks")),(0,n.createElement)("p",null,(0,c.__)("Hello WordPress Developers! from the frontend Style and Scripts Child 3!","evergreen-blocks"))))}};(0,e.registerBlockType)(ce,ae)}},r={};function n(e){var c=r[e];if(void 0!==c)return c.exports;var s=r[e]={exports:{}};return t[e](s,s.exports,n),s.exports}n.m=t,e=[],n.O=function(t,r,c,s){if(!r){var a=1/0;for(u=0;u<e.length;u++){r=e[u][0],c=e[u][1],s=e[u][2];for(var o=!0,l=0;l<r.length;l++)(!1&s||a>=s)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(o=!1,s<a&&(a=s));if(o){e.splice(u--,1);var i=c();void 0!==i&&(t=i)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[r,c,s]},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={840:0,510:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var c,s,a=r[0],o=r[1],l=r[2],i=0;if(a.some((function(t){return 0!==e[t]}))){for(c in o)n.o(o,c)&&(n.m[c]=o[c]);if(l)var u=l(n)}for(t&&t(r);i<a.length;i++)s=a[i],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(u)},r=self.webpackChunkevergreen_blocks=self.webpackChunkevergreen_blocks||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var c=n.O(void 0,[510],(function(){return n(29)}));c=n.O(c)}();