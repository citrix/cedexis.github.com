/*
selectivizr v1.0.2 - (c) Keith Clark, freely distributable under the terms 
of the MIT license.

selectivizr.com
*/
/* 
  
Notes about this source
-----------------------

 * The #DEBUG_START and #DEBUG_END comments are used to mark blocks of code
   that will be removed prior to building a final release version (using a
   pre-compression script)
  
  
References:
-----------
 
 * CSS Syntax          : http://www.w3.org/TR/2003/WD-css3-syntax-20030813/#style
 * Selectors           : http://www.w3.org/TR/css3-selectors/#selectors
 * IE Compatability    : http://msdn.microsoft.com/en-us/library/cc351024(VS.85).aspx
 * W3C Selector Tests  : http://www.w3.org/Style/CSS/Test/CSS3/Selectors/current/html/tests/
 
*/
(function(a){function E(a){return a.replace(p,D).replace(q,function(a,b,c){var d=c.split(",");for(var e=0,f=d.length;e<f;e++){var g=N(d[e])+C,h=[];d[e]=g.replace(r,function(a,b,c,d,e){if(b)return h.length>0&&(H(g.substring(0,e),h),h=[]),b;var f=c?G(c):F(d);return f?(h.push(f),"."+f.className):a})}return b+d.join(",")})}function F(a){return!w||w.test(a)?{className:J(a),applyClass:!0}:null}function G(b){var d=!0,f=J(b.slice(1)),g=b.substring(0,5)==":not(",i,j;g&&(b=b.slice(5,-1));var k=b.indexOf("(");k>-1&&(b=b.substring(0,k));if(b.charAt(0)==":")switch(b.slice(1)){case"root":d=function(a){return g?a!=c:a==c};break;case"target":if(e==8){d=function(b){var c=function(){var a=location.hash,c=a.slice(1);return g?a==B||b.id!=c:a!=B&&b.id==c};return Q(a,"hashchange",function(){O(b,f,c())}),c()};break}return!1;case"checked":d=function(a){return v.test(a.type)&&Q(a,"propertychange",function(){event.propertyName=="checked"&&O(a,f,a.checked!==g)}),a.checked!==g};break;case"disabled":g=!g;case"enabled":d=function(a){return u.test(a.tagName)?(Q(a,"propertychange",function(){event.propertyName=="$disabled"&&O(a,f,a.$disabled===g)}),h.push(a),a.$disabled=a.disabled,a.disabled===g):b==":enabled"?g:!g};break;case"focus":i="focus",j="blur";case"hover":i||(i="mouseenter",j="mouseleave"),d=function(a){return Q(a,g?j:i,function(){O(a,f,!0)}),Q(a,g?i:j,function(){O(a,f,!1)}),g};break;default:if(!o.test(b))return!1}return{className:f,applyClass:d}}function H(a,b){var c,d=a.replace(s,B);if(d==B||d.charAt(d.length-1)==C)d+="*";try{c=g(d)}catch(e){K("Selector '"+a+"' threw exception '"+e+"'")}if(c)for(var f=0,h=c.length;f<h;f++){var i=c[f],j=i.className;for(var k=0,l=b.length;k<l;k++){var m=b[k];I(i,m)||m.applyClass&&(m.applyClass===!0||m.applyClass(i)===!0)&&(j=P(j,m.className,!0))}i.className=j}}function I(a,b){return(new RegExp("(^|\\s)"+b.className+"(\\s|$)")).test(a.className)}function J(a){return k+"-"+(e==6&&j?i++:a.replace(t,function(a){return a.charCodeAt(0)}))}function K(b){a.console&&a.console.log(b)}function L(a){return a.replace(A,D)}function M(a){return L(a).replace(z,C)}function N(a){return M(a.replace(x,D).replace(y,D))}function O(a,b,c){var d=a.className,e=P(d,b,c);e!=d&&(a.className=e,a.parentNode.className+=B)}function P(a,b,c){var d=RegExp("(^|\\s)"+b+"(\\s|$)"),e=d.test(a);return c?e?a:a+C+b:e?L(a.replace(d,D)):a}function Q(a,b,c){a.attachEvent("on"+b,c)}function R(){if(a.XMLHttpRequest)return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(b){return null}}function S(a){return d.open("GET",a,!1),d.send(),d.status==200?d.responseText:B}function T(a,b){function c(a){return a.substring(0,a.indexOf("/",8))}if(/^https?:\/\//i.test(a))return c(b)==c(a)?a:null;if(a.charAt(0)=="/")return c(b)+a;var d=b.split(/[?#]/)[0];return a.charAt(0)!="?"&&d.charAt(d.length-1)!="/"&&(d=d.substring(0,d.lastIndexOf("/")+1)),d+a}function U(a){return a?S(a).replace(l,B).replace(m,function(b,c,d,e,f){return U(T(d||f,a))}).replace(n,function(b,c,d){return c=c||B," url("+c+T(d,a)+c+") "}):B}function V(){var a,c,d=b.getElementsByTagName("BASE"),e=d.length>0?d[0].href:b.location.href;for(var f=0;f<b.styleSheets.length;f++)c=b.styleSheets[f],c.href!=B&&(a=T(c.href,e),a&&(c.cssText=E(U(a))));h.length>0&&setInterval(function(){for(var a=0,b=h.length;a<b;a++){var c=h[a];c.disabled!==c.$disabled&&(c.disabled?(c.disabled=!1,c.$disabled=!0,c.disabled=!0):c.$disabled=c.disabled)}},250)}function W(a,d){var e=!1,f=!0,g=function(c){if(c.type=="readystatechange"&&b.readyState!="complete")return;(c.type=="load"?a:b).detachEvent("on"+c.type,g,!1),!e&&(e=!0)&&d.call(a,c.type||c)},h=function(){try{c.doScroll("left")}catch(a){setTimeout(h,50);return}g("poll")};if(b.readyState=="complete")d.call(a,B);else{if(b.createEventObject&&c.doScroll){try{f=!a.frameElement}catch(i){}f&&h()}Q(b,"readystatechange",g),Q(a,"load",g)}}return})(this);