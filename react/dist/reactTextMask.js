!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("react")):"function"==typeof define&&define.amd?define(["react"],r):"object"==typeof exports?exports.reactTextMask=r(require("react")):e.reactTextMask=r(e.React)}(this,function(e){return function(e){function r(n){if(t[n])return t[n].exports;var a=t[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0}),r.MaskedInput=void 0;var a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o=t(6),i=n(o),u=t(5),s=n(u),l=r.MaskedInput=i["default"].createClass({displayName:"MaskedInput",propTypes:{mask:o.PropTypes.oneOfType([o.PropTypes.string,o.PropTypes.func]).isRequired,guide:o.PropTypes.bool,value:o.PropTypes.oneOfType([o.PropTypes.string,o.PropTypes.number]),validator:o.PropTypes.func},componentDidMount:function(){var e=this.props,r=this.props,t=r.placeholderChar,n=r.value;this.control=(0,s["default"])(Object.assign({inputElement:this.inputElement,placeholderChar:t},e)),this.control.update(n)},componentDidUpdate:function(){this.control.update(this.props.value)},render:function(){var e=this;return i["default"].createElement("input",a({},this.props,{onChange:this.onChange,ref:function(r){return e.inputElement=r}}))},onChange:function(e){this.control.update(),"function"==typeof this.props.onChange&&this.props.onChange(e)}});r["default"]=l},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.maskingCharactersEnums={numeric:"1",alphabetic:"A",alphanumeric:"?",uppercase:"U",lowercase:"L",any:"*"},r.maskingCharactersWithDescription={1:"Any number",A:"Any letter","?":"Any number or letter",U:"Any letter (will be transformed to uppercase)",L:"Any letter (will be transformed to lowercase)","*":"Any character"},r.maskingCharacters=["1","A","?","U","L","*"],r.placeholderChar="_"},function(e,r,t){"use strict";function n(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],r=arguments.length<=1||void 0===arguments[1]?h.placeholderChar:arguments[1];if(e.indexOf(r)!==-1)throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n"+("The placeholder character that was received is: "+JSON.stringify(r)+"\n\n")+("The mask that was received is: "+JSON.stringify(e)));for(var t=!1,n="",a=0;a<e.length;a++){var o=e[a];"\\"!==o||t===!0?t!==!0?n+=h.maskingCharacters.indexOf(o)!==-1?r:o:(t=!1,n+=o):(t=!0,n+="")}return n}function a(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return e.replace(/\\./g," ")}function o(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return e.split("")}function i(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],r=arguments[1];switch(r){case h.maskingCharactersEnums.numeric:return s(e);case h.maskingCharactersEnums.uppercase:case h.maskingCharactersEnums.lowercase:case h.maskingCharactersEnums.alphabetic:return l(e);case h.maskingCharactersEnums.alphanumeric:return s(e)||l(e);case h.maskingCharactersEnums.any:return!0;default:return!1}}function u(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],r=arguments[1];switch(r){case h.maskingCharactersEnums.uppercase:return e.toUpperCase();case h.maskingCharactersEnums.lowercase:return e.toLowerCase();default:return e}}function s(e){return!isNaN(e)&&" "!==e}function l(e){return/^[a-zA-Z]+$/.test(e)}function c(e,r){for(var t=e.length>r.length?e.length:r.length,n=0;n<t;n++)if(e[n]!==r[n])return n;return null}function f(e){return"string"==typeof e||e instanceof String}function p(e){return e&&void 0===e.length&&!isNaN(e)}Object.defineProperty(r,"__esModule",{value:!0}),r.convertMaskToPlaceholder=n,r.unescapeMask=a,r.tokenize=o,r.isAcceptableCharacter=i,r.potentiallyTransformCharacter=u,r.getIndexOfFirstChange=c,r.isString=f,r.isNumber=p;var h=t(1)},function(e,r){"use strict";function t(e){var r=e.previousConformedValue,t=void 0===r?"":r,n=e.currentCaretPosition,a=void 0===n?0:n,o=e.conformedValue,i=e.rawValue,u=e.placeholderChar,s=e.placeholder;if(0===a)return 0;var l=i.length-t.length,c=l>0,f=1===i.length,p=l>1&&!c&&!f;if(p)return a;var h=c&&(t===o||o===s),d=0;if(h?d=a-l:!function(){for(var e=o.toLowerCase(),r=i.toLowerCase(),t=r.substr(0,a).split(""),n=t.filter(function(r){return e.indexOf(r)!==-1}),u=n[n.length-1],s=n.filter(function(e){return e===u}).length,l=0,c=0;c<o.length;c++){var f=e[c];if(d=c+1,f===u&&l++,l>=s)break}}(),c){for(var v=d,g=d;g<=s.length;g++)if(s[g]===u&&(v=g),s[g]===u||g===s.length)return v}else for(var m=d;m>=0;m--)if(s[m-1]===u||0===m)return m}Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=t},function(e,r,t){"use strict";function n(){for(var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],r=arguments.length<=1||void 0===arguments[1]?"":arguments[1],t=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],n=t.guide,u=void 0===n||n,s=t.previousConformedValue,l=void 0===s?"":s,c=t.placeholderChar,f=void 0===c?i.placeholderChar:c,p=t.placeholder,h=void 0===p?(0,o.convertMaskToPlaceholder)(r,f):p,d=t.validator,v=void 0===d?a:d,g=u===!1&&void 0!==l,m=(0,o.getIndexOfFirstChange)(l,e),C=e.length-l.length,y=(0,o.tokenize)(e),b=g&&!(e.length<l.length),k=(0,o.unescapeMask)(r),T=0,P=0;P<h.length&&y.length>0;P++){var w=P>=m&&""!==l,M=(w?P+C:P)-T;h[P]===y[M]&&y[M]!==f&&(y.splice(M,1),T++)}var O="";e:for(var x=0;x<h.length;x++){var E=h[x];if(E===f){if(y.length>0)for(;y.length>0;){var _=y.shift();if(_===f&&g!==!0){O+=f;continue e}if((0,o.isAcceptableCharacter)(_,k[x])){O+=(0,o.potentiallyTransformCharacter)(_,k[x]);continue e}}g===!1&&(O+=h.substr(x,h.length));break}O+=E}if(g&&b===!1){for(var A=null,j=0;j<O.length;j++)h[j]===f&&(A=j);O=null!==A?O.substr(0,A+1):""}return v(O)?O:l}function a(){return!0}Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=n;var o=t(2),i=t(1)},function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e){var r=e.inputElement,t=e.mask,n=e.guide,a=e.validator,u=e.placeholderChar,l=e.onAccept,p=e.onReject,h={previousConformedValue:""},d="",v=void 0;return(0,f.isString)(t)&&(d=(0,f.convertMaskToPlaceholder)(t,u)),""===r.placeholder&&r.setAttribute("placeholder",d),{state:h,update:function(){var e=arguments.length<=0||void 0===arguments[0]?r.value:arguments[0];if(e!==h.previousConformedValue){var g=i(e);"function"==typeof t?(v=t(g),d=(0,f.convertMaskToPlaceholder)(v,u)):v=t;var m=r.selectionStart,C=h.previousConformedValue,y={previousConformedValue:C,guide:n,placeholderChar:u,validator:a,placeholder:d},b=(0,c["default"])(g,v,y),k=(0,s["default"])({previousConformedValue:C,conformedValue:b,placeholder:d,rawValue:g,currentCaretPosition:m,placeholderChar:u}),T=b===d&&0===k,P=T?"":b,w=g.length<C.length;r.value=P,h.previousConformedValue=P,o(r,k),"function"==typeof l&&P!==C&&l(),"function"==typeof p&&P===C&&w===!1&&m<=v.length&&p({rawValue:g})}}}}function o(e,r){document.activeElement===e&&e.setSelectionRange(r,r,"none")}function i(e){if((0,f.isString)(e))return e;if((0,f.isNumber)(e))return String(e);if(void 0===e||null===e)return"";throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=a;var u=t(3),s=n(u),l=t(4),c=n(l),f=t(2)},function(r,t){r.exports=e}])});