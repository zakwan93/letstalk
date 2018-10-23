/**
* Copyright (c) 2017-present, Facebook, Inc. All rights reserved.
*
* You are hereby granted a non-exclusive, worldwide, royalty-free license to use,
* copy, modify, and distribute this software in source code or binary form for use
* in connection with the web services and APIs provided by Facebook.
*
* As with any software that integrates with the Facebook platform, your use of
* this software is subject to the Facebook Platform Policy
* [http://developers.facebook.com/policy/]. This copyright notice shall be
* included in all copies or substantial portions of the software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
* FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
* COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
* IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
* CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

(function(a,b,c,d){var e={exports:{}};e.exports;(function(){var f=a.fbq;f.execStart=a.performance&&a.performance.now&&a.performance.now();if(!function(){var b=a.postMessage||function(){};if(!f){b({action:"FB_LOG",logType:"Facebook Pixel Error",logMessage:"Pixel code is not installed correctly on this page"},"*");"error"in console&&console.error("Facebook Pixel Error: Pixel code is not installed correctly on this page");return!1}return!0}())return;var g=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1;d.configurable=!0;"value"in d&&(d.writable=!0);Object.defineProperty(a,d.key,d)}}return function(b,c,d){c&&a(b.prototype,c);d&&a(b,d);return b}}(),h=typeof Symbol==="function"&&typeof (typeof Symbol==="function"?Symbol.iterator:"@@iterator")==="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol==="function"&&a.constructor===Symbol&&a!==(typeof Symbol==="function"?Symbol.prototype:"@@prototype")?"symbol":typeof a};function i(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}f.__fbeventsModules||(f.__fbeventsModules={},f.__fbeventsResolvedModules={},f.getFbeventsModules=function(a){f.__fbeventsResolvedModules[a]||(f.__fbeventsResolvedModules[a]=f.__fbeventsModules[a]());return f.__fbeventsResolvedModules[a]},f.fbIsModuleLoaded=function(a){return!!f.__fbeventsModules[a]},f.ensureModuleRegistered=function(b,a){f.fbIsModuleLoaded(b)||(f.__fbeventsModules[b]=a)});f.ensureModuleRegistered("SignalsFBEventsLogging",function(){return function(g,h,i,d){var e={exports:{}};e.exports;(function(){"use strict";var a=f.getFbeventsModules("SignalsFBEventsUtils"),b=a.isInstanceOf,c=a.sendPOST,d=f.getFbeventsModules("SignalsParamList"),h=!1;function i(){h=!0}var j=!0;function k(){j=!1}a="console";var l="warn",m=g[a]&&g[a][l]?g[a][l].bind(g[a]):function(){},n=!1;function o(){n=!0}function p(a){if(n)return;m("[Facebook Pixel] - "+a)}var q="Facebook Pixel Error",r=g.postMessage?g.postMessage.bind(g):function(){},s={};function t(a){switch(a.type){case"FBQ_NO_METHOD_NAME":return"You must provide an argument to fbq().";case"INVALID_FBQ_METHOD":var b=a.method;return"\"fbq('"+b+"', ...);\" is not a valid fbq command.";case"INVALID_PIXEL_ID":b=a.pixelID;return"Invalid PixelID: "+b+".";case"DUPLICATE_PIXEL_ID":b=a.pixelID;return"Duplicate Pixel ID: "+b+".";case"SET_METADATA_ON_UNINITIALIZED_PIXEL_ID":b=a.metadataValue;var c=a.pixelID;return"Trying to set argument "+b+" for uninitialized Pixel ID "+c+".";case"CONFLICTING_VERSIONS":return"Multiple pixels with conflicting versions were detected on this page.";case"MULTIPLE_PIXELS":return"Multiple pixels were detected on this page.";case"UNSUPPORTED_METADATA_ARGUMENT":b=a.metadata;return"Unsupported metadata argument: "+b+".";case"REQUIRED_PARAM_MISSING":c=a.param;b=a.eventName;return"Required parameter '"+c+"' is missing for event '"+b+"'.";case"INVALID_PARAM":c=a.param;b=a.eventName;return"Parameter '"+c+"' is invalid for event '"+b+"'.";case"NO_EVENT_NAME":return'Missing event name. Track events must be logged with an event name fbq("track", eventName)';case"NONSTANDARD_EVENT":c=a.eventName;return"You are sending a non-standard event '"+c+"'. The preferred way to send these events is using trackCustom. See 'https://developers.facebook.com/docs/ads-for-websites/pixel-events/#events' for more information.";case"NEGATIVE_EVENT_PARAM":b=a.param;c=a.eventName;return"Parameter '"+b+"' is negative for event '"+c+"'.";case"PII_INVALID_TYPE":b=a.key_type;c=a.key_val;return"An invalid "+b+" was specified for '"+c+"'. This data will not be sent with any events for this Pixel.";case"PII_UNHASHED_PII":b=a.key;return"The value for the '"+b+"' key appeared to be PII. This data will not be sent with any events for this Pixel.";case"INVALID_CONSENT_ACTION":c=a.action;return"\"fbq('"+c+"', ...);\" is not a valid fbq('consent', ...) action. Valid actions are 'await' and 'grant'.";case"INVALID_JSON_LD":b=a.jsonLd;return"Unable to parse JSON-LD tag. Malformed JSON found: '"+b+"'.";case"SITE_CODELESS_OPT_OUT":c=a.pixelID;return"Unable to open Codeless events interface for pixel as the site has opted out. Pixel ID: "+c+".";case"PIXEL_NOT_INITIALIZED":b=a.pixelID;return"Pixel "+b+" not found";default:w(new Error("INVALID_USER_ERROR - "+a.type+" - "+JSON.stringify(a)));return"Invalid User Error."}}function u(a,e){try{var f=Math.random(),h=g.fbq&&g.fbq._releaseSegment?g.fbq._releaseSegment:"unknown";if(j&&f<.01||h==="canary"){f=new d(null);f.append("p","pixel");f.append("v",g.fbq&&g.fbq.version?g.fbq.version:"unknown");f.append("e",a.toString());b(a,Error)&&(f.append("f",a.fileName),f.append("s",a.stackTrace||a.stack));f.append("ue",e?"1":"0");f.append("rs",h);c(f,"https://connect.facebook.net/log/error")}}catch(a){}}function v(a){var b=JSON.stringify(a);if(!Object.prototype.hasOwnProperty.call(s,b))s[b]=!0;else return;b=t(a);p(b);r({action:"FB_LOG",logType:q,logMessage:b},"*");u(new Error(b),!0)}function w(a){u(a,!1),h&&p(a.toString())}l={logError:w,logUserError:v,enableVerboseDebugLogging:i,disableAllLogging:o,disableSampling:k};e.exports=l})();return e.exports}(a,b,c,d)});f.ensureModuleRegistered("SignalsFBEventsPlugin",function(){return function(f,g,h,i){var e={exports:{}};e.exports;(function(){"use strict";function a(a){this.plugin=a;this.__fbEventsPlugin=1;return this}e.exports=a})();return e.exports}(a,b,c,d)});f.ensureModuleRegistered("SignalsFBEventsProxyState",function(){return function(f,g,h,i){var e={exports:{}};e.exports;(function(){"use strict";var a=!1;e.exports={getShouldProxy:function(){return a},setShouldProxy:function(b){a=b}}})();return e.exports}(a,b,c,d)});f.ensureModuleRegistered("SignalsFBEventsUtils",function(){return function(a,b,c,d){var e={exports:{}};e.exports;(function(){"use strict";var c=f.getFbeventsModules("SignalsFBEventsProxyState"),d=Object.prototype.toString,j=!("addEventListener"in b);function k(a,b){return typeof b==="function"&&a instanceof b}function l(a){return Array.isArray?Array.isArray(a):d.call(a)==="[object Array]"}function m(a){return typeof a==="number"||typeof a==="string"&&/^\d+$/.test(a)}var n=Number.isInteger||function(a){return typeof a==="number"&&isFinite(a)&&Math.floor(a)===a};function o(a,b,c){var d=j?"on"+b:b;b=j?a.attachEvent:a.addEventListener;var e=j?a.detachEvent:a.removeEventListener,f=function b(){e&&e.call(a,d,b,!1),c()};b&&b.call(a,d,f,!1)}var p=Object.prototype.hasOwnProperty,q=!{toString:null}.propertyIsEnumerable("toString"),r=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],s=r.length;function t(a){if(Object.keys)return Object.keys(a);if((typeof a==="undefined"?"undefined":h(a))!=="object"&&(typeof a!=="function"||a===null))throw new TypeError("Object.keys called on non-object");var b=[];for(var c in a)p.call(a,c)&&b.push(c);if(q)for(var d=0;d<s;d++)p.call(a,r[d])&&b.push(r[d]);return b}function u(a,b){if(Array.prototype.map)return Array.prototype.map.call(a,b);var c=void 0,d=void 0;if(a==null)throw new TypeError(" array is null or not defined");a=Object(a);var e=a.length>>>0;if(typeof b!=="function")throw new TypeError(b+" is not a function");c=new Array(e);d=0;while(d<e){var f;d in a&&(f=a[d],f=b.call(null,f,d,a),c[d]=f);d++}return c}function v(a){if(this==null)throw new TypeError("Array.prototype.some called on null or undefined");if(Array.prototype.some)return Array.prototype.some.call(this,a);if(typeof a!=="function")throw new TypeError();var b=Object(this),c=b.length>>>0,d=arguments.length>=2?arguments[1]:void 0;for(var e=0;e<c;e++)if(e in b&&a.call(d,b[e],e,b))return!0;return!1}function w(a){return t(a).length===0}function x(a){if(this===void 0||this===null)throw new TypeError();var b=Object(this),c=b.length>>>0;if(typeof a!=="function")throw new TypeError();var d=[],e=arguments.length>=2?arguments[1]:void 0;for(var f=0;f<c;f++)if(f in b){var g=b[f];a.call(e,g,f,b)&&d.push(g)}return d}var y=function(){function a(b){i(this,a),this.items=b||[]}g(a,[{key:"has",value:function(a){return v.call(this.items,function(b){return b===a})}},{key:"add",value:function(a){this.items.push(a)}}]);return a}();function z(a,b){return b!=null&&c.getShouldProxy()?b:a}function A(a,b,d){var e=a.toQueryString();e=z(b,d)+"?"+e;if(e.length<2048){var f=new Image();if(d!=null){var g=c.getShouldProxy();f.onerror=function(){c.setShouldProxy(!0),g||A(a,b,d)}}f.src=e;return!0}return!1}function B(d,e,f){var g="fb"+Math.random().toString().replace(".",""),h=b.createElement("form");h.method="post";h.action=z(e,f);h.target=g;h.acceptCharset="utf-8";h.style.display="none";var i=!!(a.attachEvent&&!a.addEventListener),j=b.createElement("iframe");i&&(j.name=g);j.src="about:blank";j.id=g;j.name=g;h.appendChild(j);o(j,"load",function(){d.each(function(a,c){var d=b.createElement("input");d.name=decodeURIComponent(a);d.value=c;h.appendChild(d)}),o(j,"load",function(){h.parentNode&&h.parentNode.removeChild(h)}),h.submit()});if(f!=null){var k=c.getShouldProxy();j.onerror=function(){c.setShouldProxy(!0),k||B(d,e,f)}}b.body!=null&&b.body.appendChild(h);return!0}function C(b,d,e){if(a.navigator&&a.navigator.sendBeacon){var f=a.navigator.sendBeacon(z(d,e),b.toFormData());if(e!=null&&!f){f=c.getShouldProxy();c.setShouldProxy(!0);f||C(b,d,e)}return!0}return!1}function D(a){return a}function E(a,b){if(!a||a.length===0)return"";var c="",d=0,e=0;while(d<a.length){var f=F(a,d);e>=0&&e<b&&(c+=f);d+=f.length;e+=1}return c}function F(a,b){var c=a.charCodeAt(b);if(c>=55296&&c<=56319&&a.length>b+1){c=a.charCodeAt(b+1);if(c>=56320&&c<=57343)return a.substring(b,b+2)}return a[b]}function G(a,b){if(typeof a!=="string")return"";if(a.length<b)return a;if(Array.from)return[].concat(Array.from(a)).slice(0,b).join("");else return E(a,b)}l={isArray:l,isEmptyObject:w,isNumber:m,isInteger:n,isInstanceOf:k,keys:t,listenOnce:o,map:u,unicodeSafeTruncate:G,unicodeSafeTruncateWithoutArraysFrom:E,sendGET:A,sendPOST:B,sendBeacon:C,FBSet:y,each:function(a,b){u.call(this,a,b)},some:function(a,b){return v.call(a,b)},filter:function(a,b){return x.call(a,b)},castTo:D};e.exports=l})();return e.exports}(a,b,c,d)});f.ensureModuleRegistered("SignalsParamList",function(){return function(f,b,c,d){var e={exports:{}};e.exports;(function(){"use strict";var a="deep",b="shallow";function c(a){if(JSON===undefined||JSON===null||!JSON.stringify)return Object.prototype.toString.call(a);else return JSON.stringify(a)}function d(a){if(a===null||a===undefined)return!0;a=typeof a==="undefined"?"undefined":h(a);return a==="number"||a==="boolean"||a==="string"}var f=function(){function e(a){i(this,e),this._params=[],this._piiTranslator=a}g(e,[{key:"containsKey",value:function(a){for(var b=0;b<this._params.length;b++)if(this._params[b].name===a)return!0;return!1}},{key:"get",value:function(a){a=a;for(var b=0;b<this._params.length;b++)if(this._params[b].name===a)return this._params[b].value;return null}},{key:"getAllParams",value:function(){return this._params}},{key:"addRange",value:function(a){var c=this;a.each(function(a,d){return c._append(a,d,b,!1)})}},{key:"append",value:function(b,c){var d=arguments.length>2&&arguments[2]!==undefined?arguments[2]:!1;this._append(encodeURIComponent(b),c,a,d);return this}},{key:"appendHash",value:function(b){var c=arguments.length>1&&arguments[1]!==undefined?arguments[1]:!1;for(var d in b)Object.prototype.hasOwnProperty.call(b,d)&&this._append(encodeURIComponent(d),b[d],a,c);return this}},{key:"_append",value:function(b,e,f,g){d(e)?this._appendPrimitive(b,e,g):f===a?this._appendObject(b,e,g):this._appendPrimitive(b,c(e),g)}},{key:"_translateValue",value:function(a,b,c){if(typeof b==="boolean")return b?"true":"false";if(!c)return""+b;if(!this._piiTranslator)throw new Error();return this._piiTranslator(a,""+b)}},{key:"_appendPrimitive",value:function(a,b,c){if(b!=null){b=this._translateValue(a,b,c);b!=null&&this._params.push({name:a,value:b})}}},{key:"_appendObject",value:function(a,c,d){var e=null;for(var f in c)if(Object.prototype.hasOwnProperty.call(c,f)){var g=a+"["+encodeURIComponent(f)+"]";try{this._append(g,c[f],b,d)}catch(a){e==null&&(e=a)}}if(e!=null)throw e}},{key:"each",value:function(a){for(var b=0;b<this._params.length;b++){var c=this._params[b],d=c.name;c=c.value;a(d,c)}}},{key:"toQueryString",value:function(){var a=[];this.each(function(b,c){a.push(b+"="+encodeURIComponent(c))});return a.join("&")}},{key:"toFormData",value:function(){var a=new FormData();this.each(function(b,c){a.append(b,c)});return a}}],[{key:"fromHash",value:function(a,b){return new e(b).appendHash(a)}}]);return e}();e.exports=f})();return e.exports}(a,b,c,d)});f.ensureModuleRegistered("sha256_with_dependencies_new",function(){return function(f,g,h,i){var e={exports:{}};e.exports;(function(){var a=function(a){var b="",c,d;for(var e=0;e<a.length;e++)c=a.charCodeAt(e),d=e+1<a.length?a.charCodeAt(e+1):0,55296<=c&&c<=56319&&56320<=d&&d<=57343&&(c=65536+((c&1023)<<10)+(d&1023),e++),c<=127?b+=String.fromCharCode(c):c<=2047?b+=String.fromCharCode(192|c>>>6&31,128|c&63):c<=65535?b+=String.fromCharCode(224|c>>>12&15,128|c>>>6&63,128|c&63):c<=2097151&&(b+=String.fromCharCode(240|c>>>18&7,128|c>>>12&63,128|c>>>6&63,128|c&63));return b};function b(a,b){return b>>>a|b<<32-a}function c(a,b,c){return a&b^~a&c}function d(a,b,c){return a&b^a&c^b&c}function f(a){return b(2,a)^b(13,a)^b(22,a)}function g(a){return b(6,a)^b(11,a)^b(25,a)}function h(a){return b(7,a)^b(18,a)^a>>>3}function i(a){return b(17,a)^b(19,a)^a>>>10}function j(a,b){return a[b&15]+=i(a[b+14&15])+a[b+9&15]+h(a[b+1&15])}var k=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),l=new Array(8),m=new Array(2),n=new Array(64),o=new Array(16),p="0123456789abcdef";function q(a,b){var c=(a&65535)+(b&65535);a=(a>>16)+(b>>16)+(c>>16);return a<<16|c&65535}function r(){m[0]=m[1]=0,l[0]=1779033703,l[1]=3144134277,l[2]=1013904242,l[3]=2773480762,l[4]=1359893119,l[5]=2600822924,l[6]=528734635,l[7]=1541459225}function s(){var a,b,e,h,i,m,p,r,s,t;a=l[0];b=l[1];e=l[2];h=l[3];i=l[4];m=l[5];p=l[6];r=l[7];for(var u=0;u<16;u++)o[u]=n[(u<<2)+3]|n[(u<<2)+2]<<8|n[(u<<2)+1]<<16|n[u<<2]<<24;for(var u=0;u<64;u++)s=r+g(i)+c(i,m,p)+k[u],u<16?s+=o[u]:s+=j(o,u),t=f(a)+d(a,b,e),r=p,p=m,m=i,i=q(h,s),h=e,e=b,b=a,a=q(s,t);l[0]+=a;l[1]+=b;l[2]+=e;l[3]+=h;l[4]+=i;l[5]+=m;l[6]+=p;l[7]+=r}function t(a,b){var c,d,e=0;d=m[0]>>3&63;var f=b&63;(m[0]+=b<<3)<b<<3&&m[1]++;m[1]+=b>>29;for(c=0;c+63<b;c+=64){for(var g=d;g<64;g++)n[g]=a.charCodeAt(e++);s();d=0}for(var g=0;g<f;g++)n[g]=a.charCodeAt(e++)}function u(){var a=m[0]>>3&63;n[a++]=128;if(a<=56)for(var b=a;b<56;b++)n[b]=0;else{for(var b=a;b<64;b++)n[b]=0;s();for(var b=0;b<56;b++)n[b]=0}n[56]=m[1]>>>24&255;n[57]=m[1]>>>16&255;n[58]=m[1]>>>8&255;n[59]=m[1]&255;n[60]=m[0]>>>24&255;n[61]=m[0]>>>16&255;n[62]=m[0]>>>8&255;n[63]=m[0]&255;s()}function v(){var a=new String();for(var b=0;b<8;b++)for(var c=28;c>=0;c-=4)a+=p.charAt(l[b]>>>c&15);return a}function w(a){var b=0;for(var c=0;c<8;c++)for(var d=28;d>=0;d-=4)a[b++]=p.charCodeAt(l[c]>>>d&15)}function x(b,a){r();t(b,b.length);u();if(a)w(a);else return v()}function y(c,d,b){if(c===null||c===undefined)return null;d=typeof d=="undefined"?!0:d;d&&(c=a(c));return x(c,b)}e.exports=y})();return e.exports}(a,b,c,d)});f.ensureModuleRegistered("SignalsFBEvents.plugins.identity",function(){return function(g,h,i,d){var e={exports:{}};e.exports;(function(){"use strict";var a=f.getFbeventsModules("SignalsFBEventsLogging"),b=a.logUserError;a=f.getFbeventsModules("SignalsFBEventsPlugin");var c=f.getFbeventsModules("SignalsFBEventsUtils");c=c.FBSet;var d=f.getFbeventsModules("sha256_with_dependencies_new"),g=/^[A-Fa-f0-9]{64}$|^[A-Fa-f0-9]{32}$/,h=/^[\w!#\$%&\'\*\+\/\=\?\^`\{\|\}~\-]+(:?\.[\w!#\$%&\'\*\+\/\=\?\^`\{\|\}~\-]+)*@(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?$/i,i=/^\s+|\s+$/g;Object.prototype.hasOwnProperty;var j=new c(["ud[uid]"]);function k(a){return!!a&&h.test(a)}function l(a){return a.replace(i,"")}function m(a){return a.toLowerCase()}function n(a,c){if(a==="ud[em]"||a==="ud[email]"){var d=typeof c==="string"?l(m(c)):"";if(d==null||d=="")return null;if(!k(d)){a=/ud\[(em|email)\]/.exec(a)[1];b({type:"PII_INVALID_TYPE",key_type:"email address",key_val:a});throw new Error()}return d}return c}function o(a,c){if(c==null)return null;if(j.has(a)){if(k(c)){b({type:"PII_UNHASHED_PII",key:a});throw new Error()}return c}if(g.test(c))return c.toLowerCase();else{c=n(a,c);if(c!=null)return d(c)}return null}c=new a(function(a){a.piiTranslator=o});c.piiTranslator=o;e.exports=c})();return e.exports}(a,b,c,d)});e.exports=f.getFbeventsModules("SignalsFBEvents.plugins.identity");f.registerPlugin&&f.registerPlugin("fbevents.plugins.identity",e.exports);f.ensureModuleRegistered("fbevents.plugins.identity",function(){return e.exports})})()})(window,document,location,history);