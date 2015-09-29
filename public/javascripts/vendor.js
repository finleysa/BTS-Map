/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});

/*!
 * Modernizr v2.8.3
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */
window.Modernizr=function(a,b,c){function d(a){t.cssText=a}function e(a,b){return d(x.join(a+";")+(b||""))}function f(a,b){return typeof a===b}function g(a,b){return!!~(""+a).indexOf(b)}function h(a,b){for(var d in a){var e=a[d];if(!g(e,"-")&&t[e]!==c)return"pfx"==b?e:!0}return!1}function i(a,b,d){for(var e in a){var g=b[a[e]];if(g!==c)return d===!1?a[e]:f(g,"function")?g.bind(d||b):g}return!1}function j(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+z.join(d+" ")+d).split(" ");return f(b,"string")||f(b,"undefined")?h(e,b):(e=(a+" "+A.join(d+" ")+d).split(" "),i(e,b,c))}function k(){o.input=function(c){for(var d=0,e=c.length;e>d;d++)E[c[d]]=!!(c[d]in u);return E.list&&(E.list=!(!b.createElement("datalist")||!a.HTMLDataListElement)),E}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),o.inputtypes=function(a){for(var d,e,f,g=0,h=a.length;h>g;g++)u.setAttribute("type",e=a[g]),d="text"!==u.type,d&&(u.value=v,u.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(e)&&u.style.WebkitAppearance!==c?(q.appendChild(u),f=b.defaultView,d=f.getComputedStyle&&"textfield"!==f.getComputedStyle(u,null).WebkitAppearance&&0!==u.offsetHeight,q.removeChild(u)):/^(search|tel)$/.test(e)||(d=/^(url|email)$/.test(e)?u.checkValidity&&u.checkValidity()===!1:u.value!=v)),D[a[g]]=!!d;return D}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var l,m,n="2.8.3",o={},p=!0,q=b.documentElement,r="modernizr",s=b.createElement(r),t=s.style,u=b.createElement("input"),v=":)",w={}.toString,x=" -webkit- -moz- -o- -ms- ".split(" "),y="Webkit Moz O ms",z=y.split(" "),A=y.toLowerCase().split(" "),B={svg:"http://www.w3.org/2000/svg"},C={},D={},E={},F=[],G=F.slice,H=function(a,c,d,e){var f,g,h,i,j=b.createElement("div"),k=b.body,l=k||b.createElement("body");if(parseInt(d,10))for(;d--;)h=b.createElement("div"),h.id=e?e[d]:r+(d+1),j.appendChild(h);return f=["&#173;",'<style id="s',r,'">',a,"</style>"].join(""),j.id=r,(k?j:l).innerHTML+=f,l.appendChild(j),k||(l.style.background="",l.style.overflow="hidden",i=q.style.overflow,q.style.overflow="hidden",q.appendChild(l)),g=c(j,a),k?j.parentNode.removeChild(j):(l.parentNode.removeChild(l),q.style.overflow=i),!!g},I=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b)&&c(b).matches||!1;var d;return H("@media "+b+" { #"+r+" { position: absolute; } }",function(b){d="absolute"==(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle).position}),d},J=function(){function a(a,e){e=e||b.createElement(d[a]||"div"),a="on"+a;var g=a in e;return g||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(a,""),g=f(e[a],"function"),f(e[a],"undefined")||(e[a]=c),e.removeAttribute(a))),e=null,g}var d={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return a}(),K={}.hasOwnProperty;m=f(K,"undefined")||f(K.call,"undefined")?function(a,b){return b in a&&f(a.constructor.prototype[b],"undefined")}:function(a,b){return K.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=G.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(G.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(G.call(arguments)))};return d}),C.flexbox=function(){return j("flexWrap")},C.flexboxlegacy=function(){return j("boxDirection")},C.canvas=function(){var a=b.createElement("canvas");return!(!a.getContext||!a.getContext("2d"))},C.canvastext=function(){return!(!o.canvas||!f(b.createElement("canvas").getContext("2d").fillText,"function"))},C.webgl=function(){return!!a.WebGLRenderingContext},C.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:H(["@media (",x.join("touch-enabled),("),r,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=9===a.offsetTop}),c},C.geolocation=function(){return"geolocation"in navigator},C.postmessage=function(){return!!a.postMessage},C.websqldatabase=function(){return!!a.openDatabase},C.indexedDB=function(){return!!j("indexedDB",a)},C.hashchange=function(){return J("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},C.history=function(){return!(!a.history||!history.pushState)},C.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},C.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},C.rgba=function(){return d("background-color:rgba(150,255,150,.5)"),g(t.backgroundColor,"rgba")},C.hsla=function(){return d("background-color:hsla(120,40%,100%,.5)"),g(t.backgroundColor,"rgba")||g(t.backgroundColor,"hsla")},C.multiplebgs=function(){return d("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(t.background)},C.backgroundsize=function(){return j("backgroundSize")},C.borderimage=function(){return j("borderImage")},C.borderradius=function(){return j("borderRadius")},C.boxshadow=function(){return j("boxShadow")},C.textshadow=function(){return""===b.createElement("div").style.textShadow},C.opacity=function(){return e("opacity:.55"),/^0.55$/.test(t.opacity)},C.cssanimations=function(){return j("animationName")},C.csscolumns=function(){return j("columnCount")},C.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return d((a+"-webkit- ".split(" ").join(b+a)+x.join(c+a)).slice(0,-a.length)),g(t.backgroundImage,"gradient")},C.cssreflections=function(){return j("boxReflect")},C.csstransforms=function(){return!!j("transform")},C.csstransforms3d=function(){var a=!!j("perspective");return a&&"webkitPerspective"in q.style&&H("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=9===b.offsetLeft&&3===b.offsetHeight}),a},C.csstransitions=function(){return j("transition")},C.fontface=function(){var a;return H('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&0===g.indexOf(d.split(" ")[0])}),a},C.generatedcontent=function(){var a;return H(["#",r,"{font:0/0 a}#",r,':after{content:"',v,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},C.video=function(){var a=b.createElement("video"),c=!1;try{(c=!!a.canPlayType)&&(c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(d){}return c},C.audio=function(){var a=b.createElement("audio"),c=!1;try{(c=!!a.canPlayType)&&(c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(d){}return c},C.localstorage=function(){try{return localStorage.setItem(r,r),localStorage.removeItem(r),!0}catch(a){return!1}},C.sessionstorage=function(){try{return sessionStorage.setItem(r,r),sessionStorage.removeItem(r),!0}catch(a){return!1}},C.webworkers=function(){return!!a.Worker},C.applicationcache=function(){return!!a.applicationCache},C.svg=function(){return!!b.createElementNS&&!!b.createElementNS(B.svg,"svg").createSVGRect},C.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==B.svg},C.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(w.call(b.createElementNS(B.svg,"animate")))},C.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(w.call(b.createElementNS(B.svg,"clipPath")))};for(var L in C)m(C,L)&&(l=L.toLowerCase(),o[l]=C[L](),F.push((o[l]?"":"no-")+l));return o.input||k(),o.addTest=function(a,b){if("object"==typeof a)for(var d in a)m(a,d)&&o.addTest(d,a[d]);else{if(a=a.toLowerCase(),o[a]!==c)return o;b="function"==typeof b?b():b,"undefined"!=typeof p&&p&&(q.className+=" "+(b?"":"no-")+a),o[a]=b}return o},d(""),s=u=null,function(a,b){function c(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function d(){var a=s.elements;return"string"==typeof a?a.split(" "):a}function e(a){var b=r[a[p]];return b||(b={},q++,a[p]=q,r[q]=b),b}function f(a,c,d){if(c||(c=b),k)return c.createElement(a);d||(d=e(c));var f;return f=d.cache[a]?d.cache[a].cloneNode():o.test(a)?(d.cache[a]=d.createElem(a)).cloneNode():d.createElem(a),!f.canHaveChildren||n.test(a)||f.tagUrn?f:d.frag.appendChild(f)}function g(a,c){if(a||(a=b),k)return a.createDocumentFragment();c=c||e(a);for(var f=c.frag.cloneNode(),g=0,h=d(),i=h.length;i>g;g++)f.createElement(h[g]);return f}function h(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?f(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function i(a){a||(a=b);var d=e(a);return!s.shivCSS||j||d.hasCSS||(d.hasCSS=!!c(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||h(a,d),a}var j,k,l="3.7.0",m=a.html5||{},n=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,o=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p="_html5shiv",q=0,r={};!function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",j="hidden"in a,k=1==a.childNodes.length||function(){b.createElement("a");var a=b.createDocumentFragment();return"undefined"==typeof a.cloneNode||"undefined"==typeof a.createDocumentFragment||"undefined"==typeof a.createElement}()}catch(c){j=!0,k=!0}}();var s={elements:m.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:l,shivCSS:m.shivCSS!==!1,supportsUnknownElements:k,shivMethods:m.shivMethods!==!1,type:"default",shivDocument:i,createElement:f,createDocumentFragment:g};a.html5=s,i(b)}(this,b),o._version=n,o._prefixes=x,o._domPrefixes=A,o._cssomPrefixes=z,o.mq=I,o.hasEvent=J,o.testProp=function(a){return h([a])},o.testAllProps=j,o.testStyles=H,o.prefixed=function(a,b,c){return b?j(a,b,c):j(a,"pfx")},q.className=q.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(p?" js "+F.join(" "):""),o}(this,this.document);

/*! http://mths.be/placeholder v2.0.9 by @mathias */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){function b(b){var c={},d=/^jQuery\d+$/;return a.each(b.attributes,function(a,b){b.specified&&!d.test(b.name)&&(c[b.name]=b.value)}),c}function c(b,c){var d=this,f=a(d);if(d.value==f.attr("placeholder")&&f.hasClass("placeholder"))if(f.data("placeholder-password")){if(f=f.hide().nextAll('input[type="password"]:first').show().attr("id",f.removeAttr("id").data("placeholder-id")),b===!0)return f[0].value=c;f.focus()}else d.value="",f.removeClass("placeholder"),d==e()&&d.select()}function d(){var d,e=this,f=a(e),g=this.id;if(""===e.value){if("password"===e.type){if(!f.data("placeholder-textinput")){try{d=f.clone().attr({type:"text"})}catch(h){d=a("<input>").attr(a.extend(b(this),{type:"text"}))}d.removeAttr("name").data({"placeholder-password":f,"placeholder-id":g}).bind("focus.placeholder",c),f.data({"placeholder-textinput":d,"placeholder-id":g}).before(d)}f=f.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id",g).show()}f.addClass("placeholder"),f[0].value=f.attr("placeholder")}else f.removeClass("placeholder")}function e(){try{return document.activeElement}catch(a){}}var f,g,h="[object OperaMini]"==Object.prototype.toString.call(window.operamini),i="placeholder"in document.createElement("input")&&!h,j="placeholder"in document.createElement("textarea")&&!h,k=a.valHooks,l=a.propHooks;i&&j?(g=a.fn.placeholder=function(){return this},g.input=g.textarea=!0):(g=a.fn.placeholder=function(){var a=this;return a.filter((i?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":c,"blur.placeholder":d}).data("placeholder-enabled",!0).trigger("blur.placeholder"),a},g.input=i,g.textarea=j,f={get:function(b){var c=a(b),d=c.data("placeholder-password");return d?d[0].value:c.data("placeholder-enabled")&&c.hasClass("placeholder")?"":b.value},set:function(b,f){var g=a(b),h=g.data("placeholder-password");return h?h[0].value=f:g.data("placeholder-enabled")?(""===f?(b.value=f,b!=e()&&d.call(b)):g.hasClass("placeholder")?c.call(b,!0,f)||(b.value=f):b.value=f,g):b.value=f}},i||(k.input=f,l.value=f),j||(k.textarea=f,l.value=f),a(function(){a(document).delegate("form","submit.placeholder",function(){var b=a(".placeholder",this).each(c);setTimeout(function(){b.each(d)},10)})}),a(window).bind("beforeunload.placeholder",function(){a(".placeholder").each(function(){this.value=""})}))});

!function(){"use strict";/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */
function a(b,d){function e(a,b){return function(){return a.apply(b,arguments)}}var f;if(d=d||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=d.touchBoundary||10,this.layer=b,this.tapDelay=d.tapDelay||200,this.tapTimeout=d.tapTimeout||700,!a.notNeeded(b)){for(var g=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],h=this,i=0,j=g.length;j>i;i++)h[g[i]]=e(h[g[i]],h);c&&(b.addEventListener("mouseover",this.onMouse,!0),b.addEventListener("mousedown",this.onMouse,!0),b.addEventListener("mouseup",this.onMouse,!0)),b.addEventListener("click",this.onClick,!0),b.addEventListener("touchstart",this.onTouchStart,!1),b.addEventListener("touchmove",this.onTouchMove,!1),b.addEventListener("touchend",this.onTouchEnd,!1),b.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(b.removeEventListener=function(a,c,d){var e=Node.prototype.removeEventListener;"click"===a?e.call(b,a,c.hijacked||c,d):e.call(b,a,c,d)},b.addEventListener=function(a,c,d){var e=Node.prototype.addEventListener;"click"===a?e.call(b,a,c.hijacked||(c.hijacked=function(a){a.propagationStopped||c(a)}),d):e.call(b,a,c,d)}),"function"==typeof b.onclick&&(f=b.onclick,b.addEventListener("click",function(a){f(a)},!1),b.onclick=null)}}var b=navigator.userAgent.indexOf("Windows Phone")>=0,c=navigator.userAgent.indexOf("Android")>0&&!b,d=/iP(ad|hone|od)/.test(navigator.userAgent)&&!b,e=d&&/OS 4_\d(_\d)?/.test(navigator.userAgent),f=d&&/OS [6-7]_\d/.test(navigator.userAgent),g=navigator.userAgent.indexOf("BB10")>0;a.prototype.needsClick=function(a){switch(a.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(a.disabled)return!0;break;case"input":if(d&&"file"===a.type||a.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(a.className)},a.prototype.needsFocus=function(a){switch(a.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!c;case"input":switch(a.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!a.disabled&&!a.readOnly;default:return/\bneedsfocus\b/.test(a.className)}},a.prototype.sendClick=function(a,b){var c,d;document.activeElement&&document.activeElement!==a&&document.activeElement.blur(),d=b.changedTouches[0],c=document.createEvent("MouseEvents"),c.initMouseEvent(this.determineEventType(a),!0,!0,window,1,d.screenX,d.screenY,d.clientX,d.clientY,!1,!1,!1,!1,0,null),c.forwardedTouchEvent=!0,a.dispatchEvent(c)},a.prototype.determineEventType=function(a){return c&&"select"===a.tagName.toLowerCase()?"mousedown":"click"},a.prototype.focus=function(a){var b;d&&a.setSelectionRange&&0!==a.type.indexOf("date")&&"time"!==a.type&&"month"!==a.type?(b=a.value.length,a.setSelectionRange(b,b)):a.focus()},a.prototype.updateScrollParent=function(a){var b,c;if(b=a.fastClickScrollParent,!b||!b.contains(a)){c=a;do{if(c.scrollHeight>c.offsetHeight){b=c,a.fastClickScrollParent=c;break}c=c.parentElement}while(c)}b&&(b.fastClickLastScrollTop=b.scrollTop)},a.prototype.getTargetElementFromEventTarget=function(a){return a.nodeType===Node.TEXT_NODE?a.parentNode:a},a.prototype.onTouchStart=function(a){var b,c,f;if(a.targetTouches.length>1)return!0;if(b=this.getTargetElementFromEventTarget(a.target),c=a.targetTouches[0],d){if(f=window.getSelection(),f.rangeCount&&!f.isCollapsed)return!0;if(!e){if(c.identifier&&c.identifier===this.lastTouchIdentifier)return a.preventDefault(),!1;this.lastTouchIdentifier=c.identifier,this.updateScrollParent(b)}}return this.trackingClick=!0,this.trackingClickStart=a.timeStamp,this.targetElement=b,this.touchStartX=c.pageX,this.touchStartY=c.pageY,a.timeStamp-this.lastClickTime<this.tapDelay&&a.preventDefault(),!0},a.prototype.touchHasMoved=function(a){var b=a.changedTouches[0],c=this.touchBoundary;return Math.abs(b.pageX-this.touchStartX)>c||Math.abs(b.pageY-this.touchStartY)>c?!0:!1},a.prototype.onTouchMove=function(a){return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(a.target)||this.touchHasMoved(a))&&(this.trackingClick=!1,this.targetElement=null),!0):!0},a.prototype.findControl=function(a){return void 0!==a.control?a.control:a.htmlFor?document.getElementById(a.htmlFor):a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},a.prototype.onTouchEnd=function(a){var b,g,h,i,j,k=this.targetElement;if(!this.trackingClick)return!0;if(a.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(a.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=a.timeStamp,g=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,f&&(j=a.changedTouches[0],k=document.elementFromPoint(j.pageX-window.pageXOffset,j.pageY-window.pageYOffset)||k,k.fastClickScrollParent=this.targetElement.fastClickScrollParent),h=k.tagName.toLowerCase(),"label"===h){if(b=this.findControl(k)){if(this.focus(k),c)return!1;k=b}}else if(this.needsFocus(k))return a.timeStamp-g>100||d&&window.top!==window&&"input"===h?(this.targetElement=null,!1):(this.focus(k),this.sendClick(k,a),d&&"select"===h||(this.targetElement=null,a.preventDefault()),!1);return d&&!e&&(i=k.fastClickScrollParent,i&&i.fastClickLastScrollTop!==i.scrollTop)?!0:(this.needsClick(k)||(a.preventDefault(),this.sendClick(k,a)),!1)},a.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},a.prototype.onMouse=function(a){return this.targetElement?a.forwardedTouchEvent?!0:a.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick)?(a.stopImmediatePropagation?a.stopImmediatePropagation():a.propagationStopped=!0,a.stopPropagation(),a.preventDefault(),!1):!0:!0},a.prototype.onClick=function(a){var b;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===a.target.type&&0===a.detail?!0:(b=this.onMouse(a),b||(this.targetElement=null),b)},a.prototype.destroy=function(){var a=this.layer;c&&(a.removeEventListener("mouseover",this.onMouse,!0),a.removeEventListener("mousedown",this.onMouse,!0),a.removeEventListener("mouseup",this.onMouse,!0)),a.removeEventListener("click",this.onClick,!0),a.removeEventListener("touchstart",this.onTouchStart,!1),a.removeEventListener("touchmove",this.onTouchMove,!1),a.removeEventListener("touchend",this.onTouchEnd,!1),a.removeEventListener("touchcancel",this.onTouchCancel,!1)},a.notNeeded=function(a){var b,d,e,f;if("undefined"==typeof window.ontouchstart)return!0;if(d=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!c)return!0;if(b=document.querySelector("meta[name=viewport]")){if(-1!==b.content.indexOf("user-scalable=no"))return!0;if(d>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(g&&(e=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),e[1]>=10&&e[2]>=3&&(b=document.querySelector("meta[name=viewport]")))){if(-1!==b.content.indexOf("user-scalable=no"))return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===a.style.msTouchAction||"manipulation"===a.style.touchAction?!0:(f=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1],f>=27&&(b=document.querySelector("meta[name=viewport]"),b&&(-1!==b.content.indexOf("user-scalable=no")||document.documentElement.scrollWidth<=window.outerWidth))?!0:"none"===a.style.touchAction||"manipulation"===a.style.touchAction?!0:!1)},a.attach=function(b,c){return new a(b,c)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return a}):"undefined"!=typeof module&&module.exports?(module.exports=a.attach,module.exports.FastClick=a):window.FastClick=a}();

/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */

if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery')
}

+function ($) {
  'use strict';
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1)) {
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher')
  }
}(jQuery);

/* ========================================================================
 * Bootstrap: transition.js v3.3.5
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.3.5
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.3.5'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.3.5
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.3.5'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state += 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state])

      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked')) changed = false
        $parent.find('.active').removeClass('active')
        this.$element.addClass('active')
      } else if ($input.prop('type') == 'checkbox') {
        if (($input.prop('checked')) !== this.$element.hasClass('active')) changed = false
        this.$element.toggleClass('active')
      }
      $input.prop('checked', this.$element.hasClass('active'))
      if (changed) $input.trigger('change')
    } else {
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
      this.$element.toggleClass('active')
    }
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document)
    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      var $btn = $(e.target)
      if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
      Plugin.call($btn, 'toggle')
      if (!($(e.target).is('input[type="radio"]') || $(e.target).is('input[type="checkbox"]'))) e.preventDefault()
    })
    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.3.5
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      = null
    this.sliding     = null
    this.interval    = null
    this.$active     = null
    this.$items      = null

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.3.5'

  Carousel.TRANSITION_DURATION = 600

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  }

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active)
    var willWrap = (direction == 'prev' && activeIndex === 0)
                || (direction == 'next' && activeIndex == (this.$items.length - 1))
    if (willWrap && !this.options.wrap) return active
    var delta = direction == 'prev' ? -1 : 1
    var itemIndex = (activeIndex + delta) % this.$items.length
    return this.$items.eq(itemIndex)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || this.getItemForDirection(type, $active)
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var that      = this

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  var clickHandler = function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  }

  $(document)
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.3.5
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.5'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.3.5
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.3.5'

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)
    })
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $(document.createElement('div'))
          .addClass('dropdown-backdrop')
          .insertAfter($(this))
          .on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown', relatedTarget)
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive && e.which != 27 || isActive && e.which == 27) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('.dropdown-menu' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--         // up
    if (e.which == 40 && index < $items.length - 1) index++         // down
    if (!~index)                                    index = 0

    $items.eq(index).trigger('focus')
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.3.5
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.modal-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.5'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element.addClass('in')

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $(document.createElement('div'))
        .addClass('modal-backdrop ' + animate)
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.3.5
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       = null
    this.options    = null
    this.enabled    = null
    this.timeout    = null
    this.hoverState = null
    this.$element   = null
    this.inState    = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.3.5'

  Tooltip.TRANSITION_DURATION = 150

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport))
    this.inState   = { click: false, hover: false, focus: false }

    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
    }

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true
    }

    if (self.tip().hasClass('in') || self.hoverState == 'in') {
      self.hoverState = 'in'
      return
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.isInStateTrue = function () {
    for (var key in this.inState) {
      if (this.inState[key]) return true
    }

    return false
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false
    }

    if (self.isInStateTrue()) return

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
      this.$element.trigger('inserted.bs.' + this.type)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var viewportDim = this.getPosition(this.$viewport)

        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
                    placement == 'top'    && pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
                    placement == 'right'  && pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
                    placement == 'left'   && pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        var prevHoverState = that.hoverState
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null

        if (prevHoverState == 'out') that.leave(that)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  += marginTop
    offset.left += marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var isVertical          = /top|bottom/.test(placement)
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
    this.arrow()
      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
      .css(isVertical ? 'top' : 'left', '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function (callback) {
    var that = this
    var $tip = $(this.$tip)
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      that.$element
        .removeAttr('aria-describedby')
        .trigger('hidden.bs.' + that.type)
      callback && callback()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && $tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element

    var el     = $element[0]
    var isBody = el.tagName == 'BODY'

    var elRect    = el.getBoundingClientRect()
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    }
    var elOffset  = isBody ? { top: 0, left: 0 } : $element.offset()
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

    return $.extend({}, elRect, scroll, outerDims, elOffset)
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    if (!this.$tip) {
      this.$tip = $(this.options.template)
      if (this.$tip.length != 1) {
        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
      }
    }
    return this.$tip
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    if (e) {
      self.inState.click = !self.inState.click
      if (self.isInStateTrue()) self.enter(self)
      else self.leave(self)
    } else {
      self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
    }
  }

  Tooltip.prototype.destroy = function () {
    var that = this
    clearTimeout(this.timeout)
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type)
      if (that.$tip) {
        that.$tip.detach()
      }
      that.$tip = null
      that.$arrow = null
      that.$viewport = null
    })
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.3.5
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.3.5'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.5
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    this.$body          = $(document.body)
    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.3.5'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var that          = this
    var offsetMethod  = 'offset'
    var offsetBase    = 0

    this.offsets      = []
    this.targets      = []
    this.scrollHeight = this.getScrollHeight()

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        that.offsets.push(this[0])
        that.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null
      return this.clear()
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    this.clear()

    var selector = this.selector +
      '[data-target="' + target + '"],' +
      this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }

  ScrollSpy.prototype.clear = function () {
    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.3.5
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    // jscs:disable requireDollarBeforejQueryAssignment
    this.element = $(element)
    // jscs:enable requireDollarBeforejQueryAssignment
  }

  Tab.VERSION = '3.3.5'

  Tab.TRANSITION_DURATION = 150

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var $previous = $ul.find('.active:last a')
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    })
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      })
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length)

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
          .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu').length) {
        element
          .closest('li.dropdown')
            .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
            .attr('aria-expanded', true)
      }

      callback && callback()
    }

    $active.length && transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  }

  $(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.3.5
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      = null
    this.unpin        = null
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.3.5'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var targetHeight = this.$target.height()

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
    }

    var initializing   = this.affixed == null
    var colliderTop    = initializing ? scrollTop : position.top
    var colliderHeight = initializing ? targetHeight : height

    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

    return false
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var height       = this.$element.height()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom
    var scrollHeight = Math.max($(document).height(), $(document.body).height())

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '')

      var affixType = 'affix' + (affix ? '-' + affix : '')
      var e         = $.Event(affixType + '.bs.affix')

      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      this.affixed = affix
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

      this.$element
        .removeClass(Affix.RESET)
        .addClass(affixType)
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);

/*
 Leaflet, a JavaScript library for mobile-friendly interactive maps. http://leafletjs.com
 (c) 2010-2013, Vladimir Agafonkin
 (c) 2010-2011, CloudMade
*/
! function(t, e, i) {
    var n = t.L,
        o = {};
    o.version = "0.7.3", "object" == typeof module && "object" == typeof module.exports ? module.exports = o : "function" == typeof define && define.amd && define(o), o.noConflict = function() {
            return t.L = n, this
        }, t.L = o, o.Util = {
            extend: function(t) {
                var e, i, n, o, s = Array.prototype.slice.call(arguments, 1);
                for (i = 0, n = s.length; n > i; i++) {
                    o = s[i] || {};
                    for (e in o) o.hasOwnProperty(e) && (t[e] = o[e])
                }
                return t
            },
            bind: function(t, e) {
                var i = arguments.length > 2 ? Array.prototype.slice.call(arguments, 2) : null;
                return function() {
                    return t.apply(e, i || arguments)
                }
            },
            stamp: function() {
                var t = 0,
                    e = "_leaflet_id";
                return function(i) {
                    return i[e] = i[e] || ++t, i[e]
                }
            }(),
            invokeEach: function(t, e, i) {
                var n, o;
                if ("object" == typeof t) {
                    o = Array.prototype.slice.call(arguments, 3);
                    for (n in t) e.apply(i, [n, t[n]].concat(o));
                    return !0
                }
                return !1
            },
            limitExecByInterval: function(t, e, i) {
                var n, o;
                return function s() {
                    var a = arguments;
                    return n ? void(o = !0) : (n = !0, setTimeout(function() {
                        n = !1, o && (s.apply(i, a), o = !1)
                    }, e), void t.apply(i, a))
                }
            },
            falseFn: function() {
                return !1
            },
            formatNum: function(t, e) {
                var i = Math.pow(10, e || 5);
                return Math.round(t * i) / i
            },
            trim: function(t) {
                return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
            },
            splitWords: function(t) {
                return o.Util.trim(t).split(/\s+/)
            },
            setOptions: function(t, e) {
                return t.options = o.extend({}, t.options, e), t.options
            },
            getParamString: function(t, e, i) {
                var n = [];
                for (var o in t) n.push(encodeURIComponent(i ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
                return (e && -1 !== e.indexOf("?") ? "&" : "?") + n.join("&")
            },
            template: function(t, e) {
                return t.replace(/\{ *([\w_]+) *\}/g, function(t, n) {
                    var o = e[n];
                    if (o === i) throw new Error("No value provided for variable " + t);
                    return "function" == typeof o && (o = o(e)), o
                })
            },
            isArray: Array.isArray || function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            },
            emptyImageUrl: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        },
        function() {
            function e(e) {
                var i, n, o = ["webkit", "moz", "o", "ms"];
                for (i = 0; i < o.length && !n; i++) n = t[o[i] + e];
                return n
            }

            function i(e) {
                var i = +new Date,
                    o = Math.max(0, 16 - (i - n));
                return n = i + o, t.setTimeout(e, o)
            }
            var n = 0,
                s = t.requestAnimationFrame || e("RequestAnimationFrame") || i,
                a = t.cancelAnimationFrame || e("CancelAnimationFrame") || e("CancelRequestAnimationFrame") || function(e) {
                    t.clearTimeout(e)
                };
            o.Util.requestAnimFrame = function(e, n, a, r) {
                return e = o.bind(e, n), a && s === i ? void e() : s.call(t, e, r)
            }, o.Util.cancelAnimFrame = function(e) {
                e && a.call(t, e)
            }
        }(), o.extend = o.Util.extend, o.bind = o.Util.bind, o.stamp = o.Util.stamp, o.setOptions = o.Util.setOptions, o.Class = function() {}, o.Class.extend = function(t) {
            var e = function() {
                    this.initialize && this.initialize.apply(this, arguments), this._initHooks && this.callInitHooks()
                },
                i = function() {};
            i.prototype = this.prototype;
            var n = new i;
            n.constructor = e, e.prototype = n;
            for (var s in this) this.hasOwnProperty(s) && "prototype" !== s && (e[s] = this[s]);
            t.statics && (o.extend(e, t.statics), delete t.statics), t.includes && (o.Util.extend.apply(null, [n].concat(t.includes)), delete t.includes), t.options && n.options && (t.options = o.extend({}, n.options, t.options)), o.extend(n, t), n._initHooks = [];
            var a = this;
            return e.__super__ = a.prototype, n.callInitHooks = function() {
                if (!this._initHooksCalled) {
                    a.prototype.callInitHooks && a.prototype.callInitHooks.call(this), this._initHooksCalled = !0;
                    for (var t = 0, e = n._initHooks.length; e > t; t++) n._initHooks[t].call(this)
                }
            }, e
        }, o.Class.include = function(t) {
            o.extend(this.prototype, t)
        }, o.Class.mergeOptions = function(t) {
            o.extend(this.prototype.options, t)
        }, o.Class.addInitHook = function(t) {
            var e = Array.prototype.slice.call(arguments, 1),
                i = "function" == typeof t ? t : function() {
                    this[t].apply(this, e)
                };
            this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(i)
        };
    var s = "_leaflet_events";
    o.Mixin = {}, o.Mixin.Events = {
            addEventListener: function(t, e, i) {
                if (o.Util.invokeEach(t, this.addEventListener, this, e, i)) return this;
                var n, a, r, h, l, u, c, d = this[s] = this[s] || {},
                    p = i && i !== this && o.stamp(i);
                for (t = o.Util.splitWords(t), n = 0, a = t.length; a > n; n++) r = {
                    action: e,
                    context: i || this
                }, h = t[n], p ? (l = h + "_idx", u = l + "_len", c = d[l] = d[l] || {}, c[p] || (c[p] = [], d[u] = (d[u] || 0) + 1), c[p].push(r)) : (d[h] = d[h] || [], d[h].push(r));
                return this
            },
            hasEventListeners: function(t) {
                var e = this[s];
                return !!e && (t in e && e[t].length > 0 || t + "_idx" in e && e[t + "_idx_len"] > 0)
            },
            removeEventListener: function(t, e, i) {
                if (!this[s]) return this;
                if (!t) return this.clearAllEventListeners();
                if (o.Util.invokeEach(t, this.removeEventListener, this, e, i)) return this;
                var n, a, r, h, l, u, c, d, p, _ = this[s],
                    m = i && i !== this && o.stamp(i);
                for (t = o.Util.splitWords(t), n = 0, a = t.length; a > n; n++)
                    if (r = t[n], u = r + "_idx", c = u + "_len", d = _[u], e) {
                        if (h = m && d ? d[m] : _[r]) {
                            for (l = h.length - 1; l >= 0; l--) h[l].action !== e || i && h[l].context !== i || (p = h.splice(l, 1), p[0].action = o.Util.falseFn);
                            i && d && 0 === h.length && (delete d[m], _[c]--)
                        }
                    } else delete _[r], delete _[u], delete _[c];
                return this
            },
            clearAllEventListeners: function() {
                return delete this[s], this
            },
            fireEvent: function(t, e) {
                if (!this.hasEventListeners(t)) return this;
                var i, n, a, r, h, l = o.Util.extend({}, e, {
                        type: t,
                        target: this
                    }),
                    u = this[s];
                if (u[t])
                    for (i = u[t].slice(), n = 0, a = i.length; a > n; n++) i[n].action.call(i[n].context, l);
                r = u[t + "_idx"];
                for (h in r)
                    if (i = r[h].slice())
                        for (n = 0, a = i.length; a > n; n++) i[n].action.call(i[n].context, l);
                return this
            },
            addOneTimeEventListener: function(t, e, i) {
                if (o.Util.invokeEach(t, this.addOneTimeEventListener, this, e, i)) return this;
                var n = o.bind(function() {
                    this.removeEventListener(t, e, i).removeEventListener(t, n, i)
                }, this);
                return this.addEventListener(t, e, i).addEventListener(t, n, i)
            }
        }, o.Mixin.Events.on = o.Mixin.Events.addEventListener, o.Mixin.Events.off = o.Mixin.Events.removeEventListener, o.Mixin.Events.once = o.Mixin.Events.addOneTimeEventListener, o.Mixin.Events.fire = o.Mixin.Events.fireEvent,
        function() {
            var n = "ActiveXObject" in t,
                s = n && !e.addEventListener,
                a = navigator.userAgent.toLowerCase(),
                r = -1 !== a.indexOf("webkit"),
                h = -1 !== a.indexOf("chrome"),
                l = -1 !== a.indexOf("phantom"),
                u = -1 !== a.indexOf("android"),
                c = -1 !== a.search("android [23]"),
                d = -1 !== a.indexOf("gecko"),
                p = typeof orientation != i + "",
                _ = t.navigator && t.navigator.msPointerEnabled && t.navigator.msMaxTouchPoints && !t.PointerEvent,
                m = t.PointerEvent && t.navigator.pointerEnabled && t.navigator.maxTouchPoints || _,
                f = "devicePixelRatio" in t && t.devicePixelRatio > 1 || "matchMedia" in t && t.matchMedia("(min-resolution:144dpi)") && t.matchMedia("(min-resolution:144dpi)").matches,
                g = e.documentElement,
                v = n && "transition" in g.style,
                y = "WebKitCSSMatrix" in t && "m11" in new t.WebKitCSSMatrix && !c,
                P = "MozPerspective" in g.style,
                L = "OTransition" in g.style,
                x = !t.L_DISABLE_3D && (v || y || P || L) && !l,
                w = !t.L_NO_TOUCH && !l && function() {
                    var t = "ontouchstart";
                    if (m || t in g) return !0;
                    var i = e.createElement("div"),
                        n = !1;
                    return i.setAttribute ? (i.setAttribute(t, "return;"), "function" == typeof i[t] && (n = !0), i.removeAttribute(t), i = null, n) : !1
                }();
            o.Browser = {
                ie: n,
                ielt9: s,
                webkit: r,
                gecko: d && !r && !t.opera && !n,
                android: u,
                android23: c,
                chrome: h,
                ie3d: v,
                webkit3d: y,
                gecko3d: P,
                opera3d: L,
                any3d: x,
                mobile: p,
                mobileWebkit: p && r,
                mobileWebkit3d: p && y,
                mobileOpera: p && t.opera,
                touch: w,
                msPointer: _,
                pointer: m,
                retina: f
            }
        }(), o.Point = function(t, e, i) {
            this.x = i ? Math.round(t) : t, this.y = i ? Math.round(e) : e
        }, o.Point.prototype = {
            clone: function() {
                return new o.Point(this.x, this.y)
            },
            add: function(t) {
                return this.clone()._add(o.point(t))
            },
            _add: function(t) {
                return this.x += t.x, this.y += t.y, this
            },
            subtract: function(t) {
                return this.clone()._subtract(o.point(t))
            },
            _subtract: function(t) {
                return this.x -= t.x, this.y -= t.y, this
            },
            divideBy: function(t) {
                return this.clone()._divideBy(t)
            },
            _divideBy: function(t) {
                return this.x /= t, this.y /= t, this
            },
            multiplyBy: function(t) {
                return this.clone()._multiplyBy(t)
            },
            _multiplyBy: function(t) {
                return this.x *= t, this.y *= t, this
            },
            round: function() {
                return this.clone()._round()
            },
            _round: function() {
                return this.x = Math.round(this.x), this.y = Math.round(this.y), this
            },
            floor: function() {
                return this.clone()._floor()
            },
            _floor: function() {
                return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
            },
            distanceTo: function(t) {
                t = o.point(t);
                var e = t.x - this.x,
                    i = t.y - this.y;
                return Math.sqrt(e * e + i * i)
            },
            equals: function(t) {
                return t = o.point(t), t.x === this.x && t.y === this.y
            },
            contains: function(t) {
                return t = o.point(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
            },
            toString: function() {
                return "Point(" + o.Util.formatNum(this.x) + ", " + o.Util.formatNum(this.y) + ")"
            }
        }, o.point = function(t, e, n) {
            return t instanceof o.Point ? t : o.Util.isArray(t) ? new o.Point(t[0], t[1]) : t === i || null === t ? t : new o.Point(t, e, n)
        }, o.Bounds = function(t, e) {
            if (t)
                for (var i = e ? [t, e] : t, n = 0, o = i.length; o > n; n++) this.extend(i[n])
        }, o.Bounds.prototype = {
            extend: function(t) {
                return t = o.point(t), this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(), this.max = t.clone()), this
            },
            getCenter: function(t) {
                return new o.Point((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t)
            },
            getBottomLeft: function() {
                return new o.Point(this.min.x, this.max.y)
            },
            getTopRight: function() {
                return new o.Point(this.max.x, this.min.y)
            },
            getSize: function() {
                return this.max.subtract(this.min)
            },
            contains: function(t) {
                var e, i;
                return t = "number" == typeof t[0] || t instanceof o.Point ? o.point(t) : o.bounds(t), t instanceof o.Bounds ? (e = t.min, i = t.max) : e = i = t, e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y
            },
            intersects: function(t) {
                t = o.bounds(t);
                var e = this.min,
                    i = this.max,
                    n = t.min,
                    s = t.max,
                    a = s.x >= e.x && n.x <= i.x,
                    r = s.y >= e.y && n.y <= i.y;
                return a && r
            },
            isValid: function() {
                return !(!this.min || !this.max)
            }
        }, o.bounds = function(t, e) {
            return !t || t instanceof o.Bounds ? t : new o.Bounds(t, e)
        }, o.Transformation = function(t, e, i, n) {
            this._a = t, this._b = e, this._c = i, this._d = n
        }, o.Transformation.prototype = {
            transform: function(t, e) {
                return this._transform(t.clone(), e)
            },
            _transform: function(t, e) {
                return e = e || 1, t.x = e * (this._a * t.x + this._b), t.y = e * (this._c * t.y + this._d), t
            },
            untransform: function(t, e) {
                return e = e || 1, new o.Point((t.x / e - this._b) / this._a, (t.y / e - this._d) / this._c)
            }
        }, o.DomUtil = {
            get: function(t) {
                return "string" == typeof t ? e.getElementById(t) : t
            },
            getStyle: function(t, i) {
                var n = t.style[i];
                if (!n && t.currentStyle && (n = t.currentStyle[i]), (!n || "auto" === n) && e.defaultView) {
                    var o = e.defaultView.getComputedStyle(t, null);
                    n = o ? o[i] : null
                }
                return "auto" === n ? null : n
            },
            getViewportOffset: function(t) {
                var i, n = 0,
                    s = 0,
                    a = t,
                    r = e.body,
                    h = e.documentElement;
                do {
                    if (n += a.offsetTop || 0, s += a.offsetLeft || 0, n += parseInt(o.DomUtil.getStyle(a, "borderTopWidth"), 10) || 0, s += parseInt(o.DomUtil.getStyle(a, "borderLeftWidth"), 10) || 0, i = o.DomUtil.getStyle(a, "position"), a.offsetParent === r && "absolute" === i) break;
                    if ("fixed" === i) {
                        n += r.scrollTop || h.scrollTop || 0, s += r.scrollLeft || h.scrollLeft || 0;
                        break
                    }
                    if ("relative" === i && !a.offsetLeft) {
                        var l = o.DomUtil.getStyle(a, "width"),
                            u = o.DomUtil.getStyle(a, "max-width"),
                            c = a.getBoundingClientRect();
                        ("none" !== l || "none" !== u) && (s += c.left + a.clientLeft), n += c.top + (r.scrollTop || h.scrollTop || 0);
                        break
                    }
                    a = a.offsetParent
                } while (a);
                a = t;
                do {
                    if (a === r) break;
                    n -= a.scrollTop || 0, s -= a.scrollLeft || 0, a = a.parentNode
                } while (a);
                return new o.Point(s, n)
            },
            documentIsLtr: function() {
                return o.DomUtil._docIsLtrCached || (o.DomUtil._docIsLtrCached = !0, o.DomUtil._docIsLtr = "ltr" === o.DomUtil.getStyle(e.body, "direction")), o.DomUtil._docIsLtr
            },
            create: function(t, i, n) {
                var o = e.createElement(t);
                return o.className = i, n && n.appendChild(o), o
            },
            hasClass: function(t, e) {
                if (t.classList !== i) return t.classList.contains(e);
                var n = o.DomUtil._getClass(t);
                return n.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(n)
            },
            addClass: function(t, e) {
                if (t.classList !== i)
                    for (var n = o.Util.splitWords(e), s = 0, a = n.length; a > s; s++) t.classList.add(n[s]);
                else if (!o.DomUtil.hasClass(t, e)) {
                    var r = o.DomUtil._getClass(t);
                    o.DomUtil._setClass(t, (r ? r + " " : "") + e)
                }
            },
            removeClass: function(t, e) {
                t.classList !== i ? t.classList.remove(e) : o.DomUtil._setClass(t, o.Util.trim((" " + o.DomUtil._getClass(t) + " ").replace(" " + e + " ", " ")))
            },
            _setClass: function(t, e) {
                t.className.baseVal === i ? t.className = e : t.className.baseVal = e
            },
            _getClass: function(t) {
                return t.className.baseVal === i ? t.className : t.className.baseVal
            },
            setOpacity: function(t, e) {
                if ("opacity" in t.style) t.style.opacity = e;
                else if ("filter" in t.style) {
                    var i = !1,
                        n = "DXImageTransform.Microsoft.Alpha";
                    try {
                        i = t.filters.item(n)
                    } catch (o) {
                        if (1 === e) return
                    }
                    e = Math.round(100 * e), i ? (i.Enabled = 100 !== e, i.Opacity = e) : t.style.filter += " progid:" + n + "(opacity=" + e + ")"
                }
            },
            testProp: function(t) {
                for (var i = e.documentElement.style, n = 0; n < t.length; n++)
                    if (t[n] in i) return t[n];
                return !1
            },
            getTranslateString: function(t) {
                var e = o.Browser.webkit3d,
                    i = "translate" + (e ? "3d" : "") + "(",
                    n = (e ? ",0" : "") + ")";
                return i + t.x + "px," + t.y + "px" + n
            },
            getScaleString: function(t, e) {
                var i = o.DomUtil.getTranslateString(e.add(e.multiplyBy(-1 * t))),
                    n = " scale(" + t + ") ";
                return i + n
            },
            setPosition: function(t, e, i) {
                t._leaflet_pos = e, !i && o.Browser.any3d ? t.style[o.DomUtil.TRANSFORM] = o.DomUtil.getTranslateString(e) : (t.style.left = e.x + "px", t.style.top = e.y + "px")
            },
            getPosition: function(t) {
                return t._leaflet_pos
            }
        }, o.DomUtil.TRANSFORM = o.DomUtil.testProp(["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"]), o.DomUtil.TRANSITION = o.DomUtil.testProp(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]), o.DomUtil.TRANSITION_END = "webkitTransition" === o.DomUtil.TRANSITION || "OTransition" === o.DomUtil.TRANSITION ? o.DomUtil.TRANSITION + "End" : "transitionend",
        function() {
            if ("onselectstart" in e) o.extend(o.DomUtil, {
                disableTextSelection: function() {
                    o.DomEvent.on(t, "selectstart", o.DomEvent.preventDefault)
                },
                enableTextSelection: function() {
                    o.DomEvent.off(t, "selectstart", o.DomEvent.preventDefault)
                }
            });
            else {
                var i = o.DomUtil.testProp(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
                o.extend(o.DomUtil, {
                    disableTextSelection: function() {
                        if (i) {
                            var t = e.documentElement.style;
                            this._userSelect = t[i], t[i] = "none"
                        }
                    },
                    enableTextSelection: function() {
                        i && (e.documentElement.style[i] = this._userSelect, delete this._userSelect)
                    }
                })
            }
            o.extend(o.DomUtil, {
                disableImageDrag: function() {
                    o.DomEvent.on(t, "dragstart", o.DomEvent.preventDefault)
                },
                enableImageDrag: function() {
                    o.DomEvent.off(t, "dragstart", o.DomEvent.preventDefault)
                }
            })
        }(), o.LatLng = function(t, e, n) {
            if (t = parseFloat(t), e = parseFloat(e), isNaN(t) || isNaN(e)) throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
            this.lat = t, this.lng = e, n !== i && (this.alt = parseFloat(n))
        }, o.extend(o.LatLng, {
            DEG_TO_RAD: Math.PI / 180,
            RAD_TO_DEG: 180 / Math.PI,
            MAX_MARGIN: 1e-9
        }), o.LatLng.prototype = {
            equals: function(t) {
                if (!t) return !1;
                t = o.latLng(t);
                var e = Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng));
                return e <= o.LatLng.MAX_MARGIN
            },
            toString: function(t) {
                return "LatLng(" + o.Util.formatNum(this.lat, t) + ", " + o.Util.formatNum(this.lng, t) + ")"
            },
            distanceTo: function(t) {
                t = o.latLng(t);
                var e = 6378137,
                    i = o.LatLng.DEG_TO_RAD,
                    n = (t.lat - this.lat) * i,
                    s = (t.lng - this.lng) * i,
                    a = this.lat * i,
                    r = t.lat * i,
                    h = Math.sin(n / 2),
                    l = Math.sin(s / 2),
                    u = h * h + l * l * Math.cos(a) * Math.cos(r);
                return 2 * e * Math.atan2(Math.sqrt(u), Math.sqrt(1 - u))
            },
            wrap: function(t, e) {
                var i = this.lng;
                return t = t || -180, e = e || 180, i = (i + e) % (e - t) + (t > i || i === e ? e : t), new o.LatLng(this.lat, i)
            }
        }, o.latLng = function(t, e) {
            return t instanceof o.LatLng ? t : o.Util.isArray(t) ? "number" == typeof t[0] || "string" == typeof t[0] ? new o.LatLng(t[0], t[1], t[2]) : null : t === i || null === t ? t : "object" == typeof t && "lat" in t ? new o.LatLng(t.lat, "lng" in t ? t.lng : t.lon) : e === i ? null : new o.LatLng(t, e)
        }, o.LatLngBounds = function(t, e) {
            if (t)
                for (var i = e ? [t, e] : t, n = 0, o = i.length; o > n; n++) this.extend(i[n])
        }, o.LatLngBounds.prototype = {
            extend: function(t) {
                if (!t) return this;
                var e = o.latLng(t);
                return t = null !== e ? e : o.latLngBounds(t), t instanceof o.LatLng ? this._southWest || this._northEast ? (this._southWest.lat = Math.min(t.lat, this._southWest.lat), this._southWest.lng = Math.min(t.lng, this._southWest.lng), this._northEast.lat = Math.max(t.lat, this._northEast.lat), this._northEast.lng = Math.max(t.lng, this._northEast.lng)) : (this._southWest = new o.LatLng(t.lat, t.lng), this._northEast = new o.LatLng(t.lat, t.lng)) : t instanceof o.LatLngBounds && (this.extend(t._southWest), this.extend(t._northEast)), this
            },
            pad: function(t) {
                var e = this._southWest,
                    i = this._northEast,
                    n = Math.abs(e.lat - i.lat) * t,
                    s = Math.abs(e.lng - i.lng) * t;
                return new o.LatLngBounds(new o.LatLng(e.lat - n, e.lng - s), new o.LatLng(i.lat + n, i.lng + s))
            },
            getCenter: function() {
                return new o.LatLng((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2)
            },
            getSouthWest: function() {
                return this._southWest
            },
            getNorthEast: function() {
                return this._northEast
            },
            getNorthWest: function() {
                return new o.LatLng(this.getNorth(), this.getWest())
            },
            getSouthEast: function() {
                return new o.LatLng(this.getSouth(), this.getEast())
            },
            getWest: function() {
                return this._southWest.lng
            },
            getSouth: function() {
                return this._southWest.lat
            },
            getEast: function() {
                return this._northEast.lng
            },
            getNorth: function() {
                return this._northEast.lat
            },
            contains: function(t) {
                t = "number" == typeof t[0] || t instanceof o.LatLng ? o.latLng(t) : o.latLngBounds(t);
                var e, i, n = this._southWest,
                    s = this._northEast;
                return t instanceof o.LatLngBounds ? (e = t.getSouthWest(), i = t.getNorthEast()) : e = i = t, e.lat >= n.lat && i.lat <= s.lat && e.lng >= n.lng && i.lng <= s.lng
            },
            intersects: function(t) {
                t = o.latLngBounds(t);
                var e = this._southWest,
                    i = this._northEast,
                    n = t.getSouthWest(),
                    s = t.getNorthEast(),
                    a = s.lat >= e.lat && n.lat <= i.lat,
                    r = s.lng >= e.lng && n.lng <= i.lng;
                return a && r
            },
            toBBoxString: function() {
                return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
            },
            equals: function(t) {
                return t ? (t = o.latLngBounds(t), this._southWest.equals(t.getSouthWest()) && this._northEast.equals(t.getNorthEast())) : !1
            },
            isValid: function() {
                return !(!this._southWest || !this._northEast)
            }
        }, o.latLngBounds = function(t, e) {
            return !t || t instanceof o.LatLngBounds ? t : new o.LatLngBounds(t, e)
        }, o.Projection = {}, o.Projection.SphericalMercator = {
            MAX_LATITUDE: 85.0511287798,
            project: function(t) {
                var e = o.LatLng.DEG_TO_RAD,
                    i = this.MAX_LATITUDE,
                    n = Math.max(Math.min(i, t.lat), -i),
                    s = t.lng * e,
                    a = n * e;
                return a = Math.log(Math.tan(Math.PI / 4 + a / 2)), new o.Point(s, a)
            },
            unproject: function(t) {
                var e = o.LatLng.RAD_TO_DEG,
                    i = t.x * e,
                    n = (2 * Math.atan(Math.exp(t.y)) - Math.PI / 2) * e;
                return new o.LatLng(n, i)
            }
        }, o.Projection.LonLat = {
            project: function(t) {
                return new o.Point(t.lng, t.lat)
            },
            unproject: function(t) {
                return new o.LatLng(t.y, t.x)
            }
        }, o.CRS = {
            latLngToPoint: function(t, e) {
                var i = this.projection.project(t),
                    n = this.scale(e);
                return this.transformation._transform(i, n)
            },
            pointToLatLng: function(t, e) {
                var i = this.scale(e),
                    n = this.transformation.untransform(t, i);
                return this.projection.unproject(n)
            },
            project: function(t) {
                return this.projection.project(t)
            },
            scale: function(t) {
                return 256 * Math.pow(2, t)
            },
            getSize: function(t) {
                var e = this.scale(t);
                return o.point(e, e)
            }
        }, o.CRS.Simple = o.extend({}, o.CRS, {
            projection: o.Projection.LonLat,
            transformation: new o.Transformation(1, 0, -1, 0),
            scale: function(t) {
                return Math.pow(2, t)
            }
        }), o.CRS.EPSG3857 = o.extend({}, o.CRS, {
            code: "EPSG:3857",
            projection: o.Projection.SphericalMercator,
            transformation: new o.Transformation(.5 / Math.PI, .5, -.5 / Math.PI, .5),
            project: function(t) {
                var e = this.projection.project(t),
                    i = 6378137;
                return e.multiplyBy(i)
            }
        }), o.CRS.EPSG900913 = o.extend({}, o.CRS.EPSG3857, {
            code: "EPSG:900913"
        }), o.CRS.EPSG4326 = o.extend({}, o.CRS, {
            code: "EPSG:4326",
            projection: o.Projection.LonLat,
            transformation: new o.Transformation(1 / 360, .5, -1 / 360, .5)
        }), o.Map = o.Class.extend({
            includes: o.Mixin.Events,
            options: {
                crs: o.CRS.EPSG3857,
                fadeAnimation: o.DomUtil.TRANSITION && !o.Browser.android23,
                trackResize: !0,
                markerZoomAnimation: o.DomUtil.TRANSITION && o.Browser.any3d
            },
            initialize: function(t, e) {
                e = o.setOptions(this, e), this._initContainer(t), this._initLayout(), this._onResize = o.bind(this._onResize, this), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), e.center && e.zoom !== i && this.setView(o.latLng(e.center), e.zoom, {
                    reset: !0
                }), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._tileLayersNum = 0, this.callInitHooks(), this._addLayers(e.layers)
            },
            setView: function(t, e) {
                return e = e === i ? this.getZoom() : e, this._resetView(o.latLng(t), this._limitZoom(e)), this
            },
            setZoom: function(t, e) {
                return this._loaded ? this.setView(this.getCenter(), t, {
                    zoom: e
                }) : (this._zoom = this._limitZoom(t), this)
            },
            zoomIn: function(t, e) {
                return this.setZoom(this._zoom + (t || 1), e)
            },
            zoomOut: function(t, e) {
                return this.setZoom(this._zoom - (t || 1), e)
            },
            setZoomAround: function(t, e, i) {
                var n = this.getZoomScale(e),
                    s = this.getSize().divideBy(2),
                    a = t instanceof o.Point ? t : this.latLngToContainerPoint(t),
                    r = a.subtract(s).multiplyBy(1 - 1 / n),
                    h = this.containerPointToLatLng(s.add(r));
                return this.setView(h, e, {
                    zoom: i
                })
            },
            fitBounds: function(t, e) {
                e = e || {}, t = t.getBounds ? t.getBounds() : o.latLngBounds(t);
                var i = o.point(e.paddingTopLeft || e.padding || [0, 0]),
                    n = o.point(e.paddingBottomRight || e.padding || [0, 0]),
                    s = this.getBoundsZoom(t, !1, i.add(n)),
                    a = n.subtract(i).divideBy(2),
                    r = this.project(t.getSouthWest(), s),
                    h = this.project(t.getNorthEast(), s),
                    l = this.unproject(r.add(h).divideBy(2).add(a), s);
                return s = e && e.maxZoom ? Math.min(e.maxZoom, s) : s, this.setView(l, s, e)
            },
            fitWorld: function(t) {
                return this.fitBounds([
                    [-90, -180],
                    [90, 180]
                ], t)
            },
            panTo: function(t, e) {
                return this.setView(t, this._zoom, {
                    pan: e
                })
            },
            panBy: function(t) {
                return this.fire("movestart"), this._rawPanBy(o.point(t)), this.fire("move"), this.fire("moveend")
            },
            setMaxBounds: function(t) {
                return t = o.latLngBounds(t), this.options.maxBounds = t, t ? (this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds, this)) : this.off("moveend", this._panInsideMaxBounds, this)
            },
            panInsideBounds: function(t, e) {
                var i = this.getCenter(),
                    n = this._limitCenter(i, this._zoom, t);
                return i.equals(n) ? this : this.panTo(n, e)
            },
            addLayer: function(t) {
                var e = o.stamp(t);
                return this._layers[e] ? this : (this._layers[e] = t, !t.options || isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[e] = t, this._updateZoomLevels()), this.options.zoomAnimation && o.TileLayer && t instanceof o.TileLayer && (this._tileLayersNum++, this._tileLayersToLoad++, t.on("load", this._onTileLayerLoad, this)), this._loaded && this._layerAdd(t), this)
            },
            removeLayer: function(t) {
                var e = o.stamp(t);
                return this._layers[e] ? (this._loaded && t.onRemove(this), delete this._layers[e], this._loaded && this.fire("layerremove", {
                    layer: t
                }), this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels()), this.options.zoomAnimation && o.TileLayer && t instanceof o.TileLayer && (this._tileLayersNum--, this._tileLayersToLoad--, t.off("load", this._onTileLayerLoad, this)), this) : this
            },
            hasLayer: function(t) {
                return t ? o.stamp(t) in this._layers : !1
            },
            eachLayer: function(t, e) {
                for (var i in this._layers) t.call(e, this._layers[i]);
                return this
            },
            invalidateSize: function(t) {
                if (!this._loaded) return this;
                t = o.extend({
                    animate: !1,
                    pan: !0
                }, t === !0 ? {
                    animate: !0
                } : t);
                var e = this.getSize();
                this._sizeChanged = !0, this._initialCenter = null;
                var i = this.getSize(),
                    n = e.divideBy(2).round(),
                    s = i.divideBy(2).round(),
                    a = n.subtract(s);
                return a.x || a.y ? (t.animate && t.pan ? this.panBy(a) : (t.pan && this._rawPanBy(a), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(o.bind(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
                    oldSize: e,
                    newSize: i
                })) : this
            },
            addHandler: function(t, e) {
                if (!e) return this;
                var i = this[t] = new e(this);
                return this._handlers.push(i), this.options[t] && i.enable(), this
            },
            remove: function() {
                this._loaded && this.fire("unload"), this._initEvents("off");
                try {
                    delete this._container._leaflet
                } catch (t) {
                    this._container._leaflet = i
                }
                return this._clearPanes(), this._clearControlPos && this._clearControlPos(), this._clearHandlers(), this
            },
            getCenter: function() {
                return this._checkIfLoaded(), this._initialCenter && !this._moved() ? this._initialCenter : this.layerPointToLatLng(this._getCenterLayerPoint())
            },
            getZoom: function() {
                return this._zoom
            },
            getBounds: function() {
                var t = this.getPixelBounds(),
                    e = this.unproject(t.getBottomLeft()),
                    i = this.unproject(t.getTopRight());
                return new o.LatLngBounds(e, i)
            },
            getMinZoom: function() {
                return this.options.minZoom === i ? this._layersMinZoom === i ? 0 : this._layersMinZoom : this.options.minZoom
            },
            getMaxZoom: function() {
                return this.options.maxZoom === i ? this._layersMaxZoom === i ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom
            },
            getBoundsZoom: function(t, e, i) {
                t = o.latLngBounds(t);
                var n, s = this.getMinZoom() - (e ? 1 : 0),
                    a = this.getMaxZoom(),
                    r = this.getSize(),
                    h = t.getNorthWest(),
                    l = t.getSouthEast(),
                    u = !0;
                i = o.point(i || [0, 0]);
                do s++, n = this.project(l, s).subtract(this.project(h, s)).add(i), u = e ? n.x < r.x || n.y < r.y : r.contains(n); while (u && a >= s);
                return u && e ? null : e ? s : s - 1
            },
            getSize: function() {
                return (!this._size || this._sizeChanged) && (this._size = new o.Point(this._container.clientWidth, this._container.clientHeight), this._sizeChanged = !1), this._size.clone()
            },
            getPixelBounds: function() {
                var t = this._getTopLeftPoint();
                return new o.Bounds(t, t.add(this.getSize()))
            },
            getPixelOrigin: function() {
                return this._checkIfLoaded(), this._initialTopLeftPoint
            },
            getPanes: function() {
                return this._panes
            },
            getContainer: function() {
                return this._container
            },
            getZoomScale: function(t) {
                var e = this.options.crs;
                return e.scale(t) / e.scale(this._zoom)
            },
            getScaleZoom: function(t) {
                return this._zoom + Math.log(t) / Math.LN2
            },
            project: function(t, e) {
                return e = e === i ? this._zoom : e, this.options.crs.latLngToPoint(o.latLng(t), e)
            },
            unproject: function(t, e) {
                return e = e === i ? this._zoom : e, this.options.crs.pointToLatLng(o.point(t), e)
            },
            layerPointToLatLng: function(t) {
                var e = o.point(t).add(this.getPixelOrigin());
                return this.unproject(e)
            },
            latLngToLayerPoint: function(t) {
                var e = this.project(o.latLng(t))._round();
                return e._subtract(this.getPixelOrigin())
            },
            containerPointToLayerPoint: function(t) {
                return o.point(t).subtract(this._getMapPanePos())
            },
            layerPointToContainerPoint: function(t) {
                return o.point(t).add(this._getMapPanePos())
            },
            containerPointToLatLng: function(t) {
                var e = this.containerPointToLayerPoint(o.point(t));
                return this.layerPointToLatLng(e)
            },
            latLngToContainerPoint: function(t) {
                return this.layerPointToContainerPoint(this.latLngToLayerPoint(o.latLng(t)))
            },
            mouseEventToContainerPoint: function(t) {
                return o.DomEvent.getMousePosition(t, this._container)
            },
            mouseEventToLayerPoint: function(t) {
                return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))
            },
            mouseEventToLatLng: function(t) {
                return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))
            },
            _initContainer: function(t) {
                var e = this._container = o.DomUtil.get(t);
                if (!e) throw new Error("Map container not found.");
                if (e._leaflet) throw new Error("Map container is already initialized.");
                e._leaflet = !0
            },
            _initLayout: function() {
                var t = this._container;
                o.DomUtil.addClass(t, "leaflet-container" + (o.Browser.touch ? " leaflet-touch" : "") + (o.Browser.retina ? " leaflet-retina" : "") + (o.Browser.ielt9 ? " leaflet-oldie" : "") + (this.options.fadeAnimation ? " leaflet-fade-anim" : ""));
                var e = o.DomUtil.getStyle(t, "position");
                "absolute" !== e && "relative" !== e && "fixed" !== e && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos()
            },
            _initPanes: function() {
                var t = this._panes = {};
                this._mapPane = t.mapPane = this._createPane("leaflet-map-pane", this._container), this._tilePane = t.tilePane = this._createPane("leaflet-tile-pane", this._mapPane), t.objectsPane = this._createPane("leaflet-objects-pane", this._mapPane), t.shadowPane = this._createPane("leaflet-shadow-pane"), t.overlayPane = this._createPane("leaflet-overlay-pane"), t.markerPane = this._createPane("leaflet-marker-pane"), t.popupPane = this._createPane("leaflet-popup-pane");
                var e = " leaflet-zoom-hide";
                this.options.markerZoomAnimation || (o.DomUtil.addClass(t.markerPane, e), o.DomUtil.addClass(t.shadowPane, e), o.DomUtil.addClass(t.popupPane, e))
            },
            _createPane: function(t, e) {
                return o.DomUtil.create("div", t, e || this._panes.objectsPane)
            },
            _clearPanes: function() {
                this._container.removeChild(this._mapPane)
            },
            _addLayers: function(t) {
                t = t ? o.Util.isArray(t) ? t : [t] : [];
                for (var e = 0, i = t.length; i > e; e++) this.addLayer(t[e])
            },
            _resetView: function(t, e, i, n) {
                var s = this._zoom !== e;
                n || (this.fire("movestart"), s && this.fire("zoomstart")), this._zoom = e, this._initialCenter = t, this._initialTopLeftPoint = this._getNewTopLeftPoint(t), i ? this._initialTopLeftPoint._add(this._getMapPanePos()) : o.DomUtil.setPosition(this._mapPane, new o.Point(0, 0)), this._tileLayersToLoad = this._tileLayersNum;
                var a = !this._loaded;
                this._loaded = !0, this.fire("viewreset", {
                    hard: !i
                }), a && (this.fire("load"), this.eachLayer(this._layerAdd, this)), this.fire("move"), (s || n) && this.fire("zoomend"), this.fire("moveend", {
                    hard: !i
                })
            },
            _rawPanBy: function(t) {
                o.DomUtil.setPosition(this._mapPane, this._getMapPanePos().subtract(t))
            },
            _getZoomSpan: function() {
                return this.getMaxZoom() - this.getMinZoom()
            },
            _updateZoomLevels: function() {
                var t, e = 1 / 0,
                    n = -1 / 0,
                    o = this._getZoomSpan();
                for (t in this._zoomBoundLayers) {
                    var s = this._zoomBoundLayers[t];
                    isNaN(s.options.minZoom) || (e = Math.min(e, s.options.minZoom)), isNaN(s.options.maxZoom) || (n = Math.max(n, s.options.maxZoom))
                }
                t === i ? this._layersMaxZoom = this._layersMinZoom = i : (this._layersMaxZoom = n, this._layersMinZoom = e), o !== this._getZoomSpan() && this.fire("zoomlevelschange")
            },
            _panInsideMaxBounds: function() {
                this.panInsideBounds(this.options.maxBounds)
            },
            _checkIfLoaded: function() {
                if (!this._loaded) throw new Error("Set map center and zoom first.")
            },
            _initEvents: function(e) {
                if (o.DomEvent) {
                    e = e || "on", o.DomEvent[e](this._container, "click", this._onMouseClick, this);
                    var i, n, s = ["dblclick", "mousedown", "mouseup", "mouseenter", "mouseleave", "mousemove", "contextmenu"];
                    for (i = 0, n = s.length; n > i; i++) o.DomEvent[e](this._container, s[i], this._fireMouseEvent, this);
                    this.options.trackResize && o.DomEvent[e](t, "resize", this._onResize, this)
                }
            },
            _onResize: function() {
                o.Util.cancelAnimFrame(this._resizeRequest), this._resizeRequest = o.Util.requestAnimFrame(function() {
                    this.invalidateSize({
                        debounceMoveend: !0
                    })
                }, this, !1, this._container)
            },
            _onMouseClick: function(t) {
                !this._loaded || !t._simulated && (this.dragging && this.dragging.moved() || this.boxZoom && this.boxZoom.moved()) || o.DomEvent._skipped(t) || (this.fire("preclick"), this._fireMouseEvent(t))
            },
            _fireMouseEvent: function(t) {
                if (this._loaded && !o.DomEvent._skipped(t)) {
                    var e = t.type;
                    if (e = "mouseenter" === e ? "mouseover" : "mouseleave" === e ? "mouseout" : e, this.hasEventListeners(e)) {
                        "contextmenu" === e && o.DomEvent.preventDefault(t);
                        var i = this.mouseEventToContainerPoint(t),
                            n = this.containerPointToLayerPoint(i),
                            s = this.layerPointToLatLng(n);
                        this.fire(e, {
                            latlng: s,
                            layerPoint: n,
                            containerPoint: i,
                            originalEvent: t
                        })
                    }
                }
            },
            _onTileLayerLoad: function() {
                this._tileLayersToLoad--, this._tileLayersNum && !this._tileLayersToLoad && this.fire("tilelayersload")
            },
            _clearHandlers: function() {
                for (var t = 0, e = this._handlers.length; e > t; t++) this._handlers[t].disable()
            },
            whenReady: function(t, e) {
                return this._loaded ? t.call(e || this, this) : this.on("load", t, e), this
            },
            _layerAdd: function(t) {
                t.onAdd(this), this.fire("layeradd", {
                    layer: t
                })
            },
            _getMapPanePos: function() {
                return o.DomUtil.getPosition(this._mapPane)
            },
            _moved: function() {
                var t = this._getMapPanePos();
                return t && !t.equals([0, 0])
            },
            _getTopLeftPoint: function() {
                return this.getPixelOrigin().subtract(this._getMapPanePos())
            },
            _getNewTopLeftPoint: function(t, e) {
                var i = this.getSize()._divideBy(2);
                return this.project(t, e)._subtract(i)._round()
            },
            _latLngToNewLayerPoint: function(t, e, i) {
                var n = this._getNewTopLeftPoint(i, e).add(this._getMapPanePos());
                return this.project(t, e)._subtract(n)
            },
            _getCenterLayerPoint: function() {
                return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
            },
            _getCenterOffset: function(t) {
                return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())
            },
            _limitCenter: function(t, e, i) {
                if (!i) return t;
                var n = this.project(t, e),
                    s = this.getSize().divideBy(2),
                    a = new o.Bounds(n.subtract(s), n.add(s)),
                    r = this._getBoundsOffset(a, i, e);
                return this.unproject(n.add(r), e)
            },
            _limitOffset: function(t, e) {
                if (!e) return t;
                var i = this.getPixelBounds(),
                    n = new o.Bounds(i.min.add(t), i.max.add(t));
                return t.add(this._getBoundsOffset(n, e))
            },
            _getBoundsOffset: function(t, e, i) {
                var n = this.project(e.getNorthWest(), i).subtract(t.min),
                    s = this.project(e.getSouthEast(), i).subtract(t.max),
                    a = this._rebound(n.x, -s.x),
                    r = this._rebound(n.y, -s.y);
                return new o.Point(a, r)
            },
            _rebound: function(t, e) {
                return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e))
            },
            _limitZoom: function(t) {
                var e = this.getMinZoom(),
                    i = this.getMaxZoom();
                return Math.max(e, Math.min(i, t))
            }
        }), o.map = function(t, e) {
            return new o.Map(t, e)
        }, o.Projection.Mercator = {
            MAX_LATITUDE: 85.0840591556,
            R_MINOR: 6356752.314245179,
            R_MAJOR: 6378137,
            project: function(t) {
                var e = o.LatLng.DEG_TO_RAD,
                    i = this.MAX_LATITUDE,
                    n = Math.max(Math.min(i, t.lat), -i),
                    s = this.R_MAJOR,
                    a = this.R_MINOR,
                    r = t.lng * e * s,
                    h = n * e,
                    l = a / s,
                    u = Math.sqrt(1 - l * l),
                    c = u * Math.sin(h);
                c = Math.pow((1 - c) / (1 + c), .5 * u);
                var d = Math.tan(.5 * (.5 * Math.PI - h)) / c;
                return h = -s * Math.log(d), new o.Point(r, h)
            },
            unproject: function(t) {
                for (var e, i = o.LatLng.RAD_TO_DEG, n = this.R_MAJOR, s = this.R_MINOR, a = t.x * i / n, r = s / n, h = Math.sqrt(1 - r * r), l = Math.exp(-t.y / n), u = Math.PI / 2 - 2 * Math.atan(l), c = 15, d = 1e-7, p = c, _ = .1; Math.abs(_) > d && --p > 0;) e = h * Math.sin(u), _ = Math.PI / 2 - 2 * Math.atan(l * Math.pow((1 - e) / (1 + e), .5 * h)) - u, u += _;
                return new o.LatLng(u * i, a)
            }
        }, o.CRS.EPSG3395 = o.extend({}, o.CRS, {
            code: "EPSG:3395",
            projection: o.Projection.Mercator,
            transformation: function() {
                var t = o.Projection.Mercator,
                    e = t.R_MAJOR,
                    i = .5 / (Math.PI * e);
                return new o.Transformation(i, .5, -i, .5)
            }()
        }), o.TileLayer = o.Class.extend({
            includes: o.Mixin.Events,
            options: {
                minZoom: 0,
                maxZoom: 18,
                tileSize: 256,
                subdomains: "abc",
                errorTileUrl: "",
                attribution: "",
                zoomOffset: 0,
                opacity: 1,
                unloadInvisibleTiles: o.Browser.mobile,
                updateWhenIdle: o.Browser.mobile
            },
            initialize: function(t, e) {
                e = o.setOptions(this, e), e.detectRetina && o.Browser.retina && e.maxZoom > 0 && (e.tileSize = Math.floor(e.tileSize / 2), e.zoomOffset++, e.minZoom > 0 && e.minZoom--, this.options.maxZoom--), e.bounds && (e.bounds = o.latLngBounds(e.bounds)), this._url = t;
                var i = this.options.subdomains;
                "string" == typeof i && (this.options.subdomains = i.split(""))
            },
            onAdd: function(t) {
                this._map = t, this._animated = t._zoomAnimated, this._initContainer(), t.on({
                    viewreset: this._reset,
                    moveend: this._update
                }, this), this._animated && t.on({
                    zoomanim: this._animateZoom,
                    zoomend: this._endZoomAnim
                }, this), this.options.updateWhenIdle || (this._limitedUpdate = o.Util.limitExecByInterval(this._update, 150, this), t.on("move", this._limitedUpdate, this)), this._reset(), this._update()
            },
            addTo: function(t) {
                return t.addLayer(this), this
            },
            onRemove: function(t) {
                this._container.parentNode.removeChild(this._container), t.off({
                    viewreset: this._reset,
                    moveend: this._update
                }, this), this._animated && t.off({
                    zoomanim: this._animateZoom,
                    zoomend: this._endZoomAnim
                }, this), this.options.updateWhenIdle || t.off("move", this._limitedUpdate, this), this._container = null, this._map = null
            },
            bringToFront: function() {
                var t = this._map._panes.tilePane;
                return this._container && (t.appendChild(this._container), this._setAutoZIndex(t, Math.max)), this
            },
            bringToBack: function() {
                var t = this._map._panes.tilePane;
                return this._container && (t.insertBefore(this._container, t.firstChild), this._setAutoZIndex(t, Math.min)), this
            },
            getAttribution: function() {
                return this.options.attribution
            },
            getContainer: function() {
                return this._container
            },
            setOpacity: function(t) {
                return this.options.opacity = t, this._map && this._updateOpacity(), this
            },
            setZIndex: function(t) {
                return this.options.zIndex = t, this._updateZIndex(), this
            },
            setUrl: function(t, e) {
                return this._url = t, e || this.redraw(), this
            },
            redraw: function() {
                return this._map && (this._reset({
                    hard: !0
                }), this._update()), this
            },
            _updateZIndex: function() {
                this._container && this.options.zIndex !== i && (this._container.style.zIndex = this.options.zIndex)
            },
            _setAutoZIndex: function(t, e) {
                var i, n, o, s = t.children,
                    a = -e(1 / 0, -1 / 0);
                for (n = 0, o = s.length; o > n; n++) s[n] !== this._container && (i = parseInt(s[n].style.zIndex, 10), isNaN(i) || (a = e(a, i)));
                this.options.zIndex = this._container.style.zIndex = (isFinite(a) ? a : 0) + e(1, -1)
            },
            _updateOpacity: function() {
                var t, e = this._tiles;
                if (o.Browser.ielt9)
                    for (t in e) o.DomUtil.setOpacity(e[t], this.options.opacity);
                else o.DomUtil.setOpacity(this._container, this.options.opacity)
            },
            _initContainer: function() {
                var t = this._map._panes.tilePane;
                if (!this._container) {
                    if (this._container = o.DomUtil.create("div", "leaflet-layer"), this._updateZIndex(), this._animated) {
                        var e = "leaflet-tile-container";
                        this._bgBuffer = o.DomUtil.create("div", e, this._container), this._tileContainer = o.DomUtil.create("div", e, this._container)
                    } else this._tileContainer = this._container;
                    t.appendChild(this._container), this.options.opacity < 1 && this._updateOpacity()
                }
            },
            _reset: function(t) {
                for (var e in this._tiles) this.fire("tileunload", {
                    tile: this._tiles[e]
                });
                this._tiles = {}, this._tilesToLoad = 0, this.options.reuseTiles && (this._unusedTiles = []), this._tileContainer.innerHTML = "", this._animated && t && t.hard && this._clearBgBuffer(), this._initContainer()
            },
            _getTileSize: function() {
                var t = this._map,
                    e = t.getZoom() + this.options.zoomOffset,
                    i = this.options.maxNativeZoom,
                    n = this.options.tileSize;
                return i && e > i && (n = Math.round(t.getZoomScale(e) / t.getZoomScale(i) * n)), n
            },
            _update: function() {
                if (this._map) {
                    var t = this._map,
                        e = t.getPixelBounds(),
                        i = t.getZoom(),
                        n = this._getTileSize();
                    if (!(i > this.options.maxZoom || i < this.options.minZoom)) {
                        var s = o.bounds(e.min.divideBy(n)._floor(), e.max.divideBy(n)._floor());
                        this._addTilesFromCenterOut(s), (this.options.unloadInvisibleTiles || this.options.reuseTiles) && this._removeOtherTiles(s)
                    }
                }
            },
            _addTilesFromCenterOut: function(t) {
                var i, n, s, a = [],
                    r = t.getCenter();
                for (i = t.min.y; i <= t.max.y; i++)
                    for (n = t.min.x; n <= t.max.x; n++) s = new o.Point(n, i), this._tileShouldBeLoaded(s) && a.push(s);
                var h = a.length;
                if (0 !== h) {
                    a.sort(function(t, e) {
                        return t.distanceTo(r) - e.distanceTo(r)
                    });
                    var l = e.createDocumentFragment();
                    for (this._tilesToLoad || this.fire("loading"), this._tilesToLoad += h, n = 0; h > n; n++) this._addTile(a[n], l);
                    this._tileContainer.appendChild(l)
                }
            },
            _tileShouldBeLoaded: function(t) {
                if (t.x + ":" + t.y in this._tiles) return !1;
                var e = this.options;
                if (!e.continuousWorld) {
                    var i = this._getWrapTileNum();
                    if (e.noWrap && (t.x < 0 || t.x >= i.x) || t.y < 0 || t.y >= i.y) return !1
                }
                if (e.bounds) {
                    var n = e.tileSize,
                        o = t.multiplyBy(n),
                        s = o.add([n, n]),
                        a = this._map.unproject(o),
                        r = this._map.unproject(s);
                    if (e.continuousWorld || e.noWrap || (a = a.wrap(), r = r.wrap()), !e.bounds.intersects([a, r])) return !1
                }
                return !0
            },
            _removeOtherTiles: function(t) {
                var e, i, n, o;
                for (o in this._tiles) e = o.split(":"), i = parseInt(e[0], 10), n = parseInt(e[1], 10), (i < t.min.x || i > t.max.x || n < t.min.y || n > t.max.y) && this._removeTile(o)
            },
            _removeTile: function(t) {
                var e = this._tiles[t];
                this.fire("tileunload", {
                    tile: e,
                    url: e.src
                }), this.options.reuseTiles ? (o.DomUtil.removeClass(e, "leaflet-tile-loaded"), this._unusedTiles.push(e)) : e.parentNode === this._tileContainer && this._tileContainer.removeChild(e), o.Browser.android || (e.onload = null, e.src = o.Util.emptyImageUrl), delete this._tiles[t]
            },
            _addTile: function(t, e) {
                var i = this._getTilePos(t),
                    n = this._getTile();
                o.DomUtil.setPosition(n, i, o.Browser.chrome), this._tiles[t.x + ":" + t.y] = n, this._loadTile(n, t), n.parentNode !== this._tileContainer && e.appendChild(n)
            },
            _getZoomForUrl: function() {
                var t = this.options,
                    e = this._map.getZoom();
                return t.zoomReverse && (e = t.maxZoom - e), e += t.zoomOffset, t.maxNativeZoom ? Math.min(e, t.maxNativeZoom) : e
            },
            _getTilePos: function(t) {
                var e = this._map.getPixelOrigin(),
                    i = this._getTileSize();
                return t.multiplyBy(i).subtract(e)
            },
            getTileUrl: function (t) {
	            return o.Util.template(this._url, o.extend({
	                s: this._getSubdomain(t),
	                z: t.z,
	                x: t.x,
	                y: t.y,
	                z0: 17-t.z,
	                x0: Math.floor(t.x/1024),
	                x1: Math.floor(t.x%1024),
	                y0: Math.floor(t.y/1024),
	                y1: Math.floor(t.y%1024)
            	}, this.options))
        	},
            _getWrapTileNum: function() {
                var t = this._map.options.crs,
                    e = t.getSize(this._map.getZoom());
                return e.divideBy(this._getTileSize())._floor()
            },
            _adjustTilePoint: function(t) {
                var e = this._getWrapTileNum();
                this.options.continuousWorld || this.options.noWrap || (t.x = (t.x % e.x + e.x) % e.x), this.options.tms && (t.y = e.y - t.y - 1), t.z = this._getZoomForUrl()
            },
            _getSubdomain: function(t) {
                var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
                return this.options.subdomains[e]
            },
            _getTile: function() {
                if (this.options.reuseTiles && this._unusedTiles.length > 0) {
                    var t = this._unusedTiles.pop();
                    return this._resetTile(t), t
                }
                return this._createTile()
            },
            _resetTile: function() {},
            _createTile: function() {
                var t = o.DomUtil.create("img", "leaflet-tile");
                return t.style.width = t.style.height = this._getTileSize() + "px", t.galleryimg = "no", t.onselectstart = t.onmousemove = o.Util.falseFn, o.Browser.ielt9 && this.options.opacity !== i && o.DomUtil.setOpacity(t, this.options.opacity), o.Browser.mobileWebkit3d && (t.style.WebkitBackfaceVisibility = "hidden"), t
            },
            _loadTile: function(t, e) {
                t._layer = this, t.onload = this._tileOnLoad, t.onerror = this._tileOnError, this._adjustTilePoint(e), t.src = this.getTileUrl(e), this.fire("tileloadstart", {
                    tile: t,
                    url: t.src
                })
            },
            _tileLoaded: function() {
                this._tilesToLoad--, this._animated && o.DomUtil.addClass(this._tileContainer, "leaflet-zoom-animated"), this._tilesToLoad || (this.fire("load"), this._animated && (clearTimeout(this._clearBgBufferTimer), this._clearBgBufferTimer = setTimeout(o.bind(this._clearBgBuffer, this), 500)))
            },
            _tileOnLoad: function() {
                var t = this._layer;
                this.src !== o.Util.emptyImageUrl && (o.DomUtil.addClass(this, "leaflet-tile-loaded"), t.fire("tileload", {
                    tile: this,
                    url: this.src
                })), t._tileLoaded()
            },
            _tileOnError: function() {
                var t = this._layer;
                t.fire("tileerror", {
                    tile: this,
                    url: this.src
                });
                var e = t.options.errorTileUrl;
                e && (this.src = e), t._tileLoaded()
            }
        }), o.tileLayer = function(t, e) {
            return new o.TileLayer(t, e)
        }, o.TileLayer.WMS = o.TileLayer.extend({
            defaultWmsParams: {
                service: "WMS",
                request: "GetMap",
                version: "1.1.1",
                layers: "",
                styles: "",
                format: "image/jpeg",
                transparent: !1
            },
            initialize: function(t, e) {
                this._url = t;
                var i = o.extend({}, this.defaultWmsParams),
                    n = e.tileSize || this.options.tileSize;
                i.width = i.height = e.detectRetina && o.Browser.retina ? 2 * n : n;
                for (var s in e) this.options.hasOwnProperty(s) || "crs" === s || (i[s] = e[s]);
                this.wmsParams = i, o.setOptions(this, e)
            },
            onAdd: function(t) {
                this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
                var e = this._wmsVersion >= 1.3 ? "crs" : "srs";
                this.wmsParams[e] = this._crs.code, o.TileLayer.prototype.onAdd.call(this, t)
            },
            getTileUrl: function(t) {
                var e = this._map,
                    i = this.options.tileSize,
                    n = t.multiplyBy(i),
                    s = n.add([i, i]),
                    a = this._crs.project(e.unproject(n, t.z)),
                    r = this._crs.project(e.unproject(s, t.z)),
                    h = this._wmsVersion >= 1.3 && this._crs === o.CRS.EPSG4326 ? [r.y, a.x, a.y, r.x].join(",") : [a.x, r.y, r.x, a.y].join(","),
                    l = o.Util.template(this._url, {
                        s: this._getSubdomain(t)
                    });
                return l + o.Util.getParamString(this.wmsParams, l, !0) + "&BBOX=" + h
            },
            setParams: function(t, e) {
                return o.extend(this.wmsParams, t), e || this.redraw(), this
            }
        }), o.tileLayer.wms = function(t, e) {
            return new o.TileLayer.WMS(t, e)
        }, o.TileLayer.Canvas = o.TileLayer.extend({
            options: {
                async: !1
            },
            initialize: function(t) {
                o.setOptions(this, t)
            },
            redraw: function() {
                this._map && (this._reset({
                    hard: !0
                }), this._update());
                for (var t in this._tiles) this._redrawTile(this._tiles[t]);
                return this
            },
            _redrawTile: function(t) {
                this.drawTile(t, t._tilePoint, this._map._zoom)
            },
            _createTile: function() {
                var t = o.DomUtil.create("canvas", "leaflet-tile");
                return t.width = t.height = this.options.tileSize, t.onselectstart = t.onmousemove = o.Util.falseFn, t
            },
            _loadTile: function(t, e) {
                t._layer = this, t._tilePoint = e, this._redrawTile(t), this.options.async || this.tileDrawn(t)
            },
            drawTile: function() {},
            tileDrawn: function(t) {
                this._tileOnLoad.call(t)
            }
        }), o.tileLayer.canvas = function(t) {
            return new o.TileLayer.Canvas(t)
        }, o.ImageOverlay = o.Class.extend({
            includes: o.Mixin.Events,
            options: {
                opacity: 1
            },
            initialize: function(t, e, i) {
                this._url = t, this._bounds = o.latLngBounds(e), o.setOptions(this, i)
            },
            onAdd: function(t) {
                this._map = t, this._image || this._initImage(), t._panes.overlayPane.appendChild(this._image), t.on("viewreset", this._reset, this), t.options.zoomAnimation && o.Browser.any3d && t.on("zoomanim", this._animateZoom, this), this._reset()
            },
            onRemove: function(t) {
                t.getPanes().overlayPane.removeChild(this._image), t.off("viewreset", this._reset, this), t.options.zoomAnimation && t.off("zoomanim", this._animateZoom, this)
            },
            addTo: function(t) {
                return t.addLayer(this), this
            },
            setOpacity: function(t) {
                return this.options.opacity = t, this._updateOpacity(), this
            },
            bringToFront: function() {
                return this._image && this._map._panes.overlayPane.appendChild(this._image), this
            },
            bringToBack: function() {
                var t = this._map._panes.overlayPane;
                return this._image && t.insertBefore(this._image, t.firstChild), this
            },
            setUrl: function(t) {
                this._url = t, this._image.src = this._url
            },
            getAttribution: function() {
                return this.options.attribution
            },
            _initImage: function() {
                this._image = o.DomUtil.create("img", "leaflet-image-layer"), this._map.options.zoomAnimation && o.Browser.any3d ? o.DomUtil.addClass(this._image, "leaflet-zoom-animated") : o.DomUtil.addClass(this._image, "leaflet-zoom-hide"), this._updateOpacity(), o.extend(this._image, {
                    galleryimg: "no",
                    onselectstart: o.Util.falseFn,
                    onmousemove: o.Util.falseFn,
                    onload: o.bind(this._onImageLoad, this),
                    src: this._url
                })
            },
            _animateZoom: function(t) {
                var e = this._map,
                    i = this._image,
                    n = e.getZoomScale(t.zoom),
                    s = this._bounds.getNorthWest(),
                    a = this._bounds.getSouthEast(),
                    r = e._latLngToNewLayerPoint(s, t.zoom, t.center),
                    h = e._latLngToNewLayerPoint(a, t.zoom, t.center)._subtract(r),
                    l = r._add(h._multiplyBy(.5 * (1 - 1 / n)));
                i.style[o.DomUtil.TRANSFORM] = o.DomUtil.getTranslateString(l) + " scale(" + n + ") "
            },
            _reset: function() {
                var t = this._image,
                    e = this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
                    i = this._map.latLngToLayerPoint(this._bounds.getSouthEast())._subtract(e);
                o.DomUtil.setPosition(t, e), t.style.width = i.x + "px", t.style.height = i.y + "px"
            },
            _onImageLoad: function() {
                this.fire("load")
            },
            _updateOpacity: function() {
                o.DomUtil.setOpacity(this._image, this.options.opacity)
            }
        }), o.imageOverlay = function(t, e, i) {
            return new o.ImageOverlay(t, e, i)
        }, o.Icon = o.Class.extend({
            options: {
                className: ""
            },
            initialize: function(t) {
                o.setOptions(this, t)
            },
            createIcon: function(t) {
                return this._createIcon("icon", t)
            },
            createShadow: function(t) {
                return this._createIcon("shadow", t)
            },
            _createIcon: function(t, e) {
                var i = this._getIconUrl(t);
                if (!i) {
                    if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");
                    return null
                }
                var n;
                return n = e && "IMG" === e.tagName ? this._createImg(i, e) : this._createImg(i), this._setIconStyles(n, t), n
            },
            _setIconStyles: function(t, e) {
                var i, n = this.options,
                    s = o.point(n[e + "Size"]);
                i = o.point("shadow" === e ? n.shadowAnchor || n.iconAnchor : n.iconAnchor), !i && s && (i = s.divideBy(2, !0)), t.className = "leaflet-marker-" + e + " " + n.className, i && (t.style.marginLeft = -i.x + "px", t.style.marginTop = -i.y + "px"), s && (t.style.width = s.x + "px", t.style.height = s.y + "px")
            },
            _createImg: function(t, i) {
                return i = i || e.createElement("img"), i.src = t, i
            },
            _getIconUrl: function(t) {
                return o.Browser.retina && this.options[t + "RetinaUrl"] ? this.options[t + "RetinaUrl"] : this.options[t + "Url"]
            }
        }), o.icon = function(t) {
            return new o.Icon(t)
        }, o.Icon.Default = o.Icon.extend({
            options: {
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
            },
            _getIconUrl: function(t) {
                var e = t + "Url";
                if (this.options[e]) return this.options[e];
                o.Browser.retina && "icon" === t && (t += "-2x");
                var i = o.Icon.Default.imagePath;
                if (!i) throw new Error("Couldn't autodetect L.Icon.Default.imagePath, set it manually.");
                return i + "/marker-" + t + ".png"
            }
        }), o.Icon.Default.imagePath = function() {
            var t, i, n, o, s, a = e.getElementsByTagName("script"),
                r = /[\/^]leaflet[\-\._]?([\w\-\._]*)\.js\??/;
            for (t = 0, i = a.length; i > t; t++)
                if (n = a[t].src, o = n.match(r)) return s = n.split(r)[0], (s ? s + "/" : "") + "images"
        }(), o.Marker = o.Class.extend({
            includes: o.Mixin.Events,
            options: {
                icon: new o.Icon.Default,
                title: "",
                alt: "",
                clickable: !0,
                draggable: !1,
                keyboard: !0,
                zIndexOffset: 0,
                opacity: 1,
                riseOnHover: !1,
                riseOffset: 250
            },
            initialize: function(t, e) {
                o.setOptions(this, e), this._latlng = o.latLng(t)
            },
            onAdd: function(t) {
                this._map = t, t.on("viewreset", this.update, this), this._initIcon(), this.update(), this.fire("add"), t.options.zoomAnimation && t.options.markerZoomAnimation && t.on("zoomanim", this._animateZoom, this)
            },
            addTo: function(t) {
                return t.addLayer(this), this
            },
            onRemove: function(t) {
                this.dragging && this.dragging.disable(), this._removeIcon(), this._removeShadow(), this.fire("remove"), t.off({
                    viewreset: this.update,
                    zoomanim: this._animateZoom
                }, this), this._map = null
            },
            getLatLng: function() {
                return this._latlng
            },
            setLatLng: function(t) {
                return this._latlng = o.latLng(t), this.update(), this.fire("move", {
                    latlng: this._latlng
                })
            },
            setZIndexOffset: function(t) {
                return this.options.zIndexOffset = t, this.update(), this
            },
            setIcon: function(t) {
                return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup), this
            },
            update: function() {
                if (this._icon) {
                    var t = this._map.latLngToLayerPoint(this._latlng).round();
                    this._setPos(t)
                }
                return this
            },
            _initIcon: function() {
                var t = this.options,
                    e = this._map,
                    i = e.options.zoomAnimation && e.options.markerZoomAnimation,
                    n = i ? "leaflet-zoom-animated" : "leaflet-zoom-hide",
                    s = t.icon.createIcon(this._icon),
                    a = !1;
                s !== this._icon && (this._icon && this._removeIcon(), a = !0, t.title && (s.title = t.title), t.alt && (s.alt = t.alt)), o.DomUtil.addClass(s, n), t.keyboard && (s.tabIndex = "0"), this._icon = s, this._initInteraction(), t.riseOnHover && o.DomEvent.on(s, "mouseover", this._bringToFront, this).on(s, "mouseout", this._resetZIndex, this);
                var r = t.icon.createShadow(this._shadow),
                    h = !1;
                r !== this._shadow && (this._removeShadow(), h = !0), r && o.DomUtil.addClass(r, n), this._shadow = r, t.opacity < 1 && this._updateOpacity();
                var l = this._map._panes;
                a && l.markerPane.appendChild(this._icon), r && h && l.shadowPane.appendChild(this._shadow)
            },
            _removeIcon: function() {
                this.options.riseOnHover && o.DomEvent.off(this._icon, "mouseover", this._bringToFront).off(this._icon, "mouseout", this._resetZIndex), this._map._panes.markerPane.removeChild(this._icon), this._icon = null
            },
            _removeShadow: function() {
                this._shadow && this._map._panes.shadowPane.removeChild(this._shadow), this._shadow = null
            },
            _setPos: function(t) {
                o.DomUtil.setPosition(this._icon, t), this._shadow && o.DomUtil.setPosition(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex()
            },
            _updateZIndex: function(t) {
                this._icon.style.zIndex = this._zIndex + t
            },
            _animateZoom: function(t) {
                var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
                this._setPos(e)
            },
            _initInteraction: function() {
                if (this.options.clickable) {
                    var t = this._icon,
                        e = ["dblclick", "mousedown", "mouseover", "mouseout", "contextmenu"];
                    o.DomUtil.addClass(t, "leaflet-clickable"), o.DomEvent.on(t, "click", this._onMouseClick, this), o.DomEvent.on(t, "keypress", this._onKeyPress, this);
                    for (var i = 0; i < e.length; i++) o.DomEvent.on(t, e[i], this._fireMouseEvent, this);
                    o.Handler.MarkerDrag && (this.dragging = new o.Handler.MarkerDrag(this), this.options.draggable && this.dragging.enable())
                }
            },
            _onMouseClick: function(t) {
                var e = this.dragging && this.dragging.moved();
                (this.hasEventListeners(t.type) || e) && o.DomEvent.stopPropagation(t), e || (this.dragging && this.dragging._enabled || !this._map.dragging || !this._map.dragging.moved()) && this.fire(t.type, {
                    originalEvent: t,
                    latlng: this._latlng
                })
            },
            _onKeyPress: function(t) {
                13 === t.keyCode && this.fire("click", {
                    originalEvent: t,
                    latlng: this._latlng
                })
            },
            _fireMouseEvent: function(t) {
                this.fire(t.type, {
                    originalEvent: t,
                    latlng: this._latlng
                }), "contextmenu" === t.type && this.hasEventListeners(t.type) && o.DomEvent.preventDefault(t), "mousedown" !== t.type ? o.DomEvent.stopPropagation(t) : o.DomEvent.preventDefault(t)
            },
            setOpacity: function(t) {
                return this.options.opacity = t, this._map && this._updateOpacity(), this
            },
            _updateOpacity: function() {
                o.DomUtil.setOpacity(this._icon, this.options.opacity), this._shadow && o.DomUtil.setOpacity(this._shadow, this.options.opacity)
            },
            _bringToFront: function() {
                this._updateZIndex(this.options.riseOffset)
            },
            _resetZIndex: function() {
                this._updateZIndex(0)
            }
        }), o.marker = function(t, e) {
            return new o.Marker(t, e)
        }, o.DivIcon = o.Icon.extend({
            options: {
                iconSize: [12, 12],
                className: "leaflet-div-icon",
                html: !1
            },
            createIcon: function(t) {
                var i = t && "DIV" === t.tagName ? t : e.createElement("div"),
                    n = this.options;
                return i.innerHTML = n.html !== !1 ? n.html : "", n.bgPos && (i.style.backgroundPosition = -n.bgPos.x + "px " + -n.bgPos.y + "px"), this._setIconStyles(i, "icon"), i
            },
            createShadow: function() {
                return null
            }
        }), o.divIcon = function(t) {
            return new o.DivIcon(t)
        }, o.Map.mergeOptions({
            closePopupOnClick: !0
        }), o.Popup = o.Class.extend({
            includes: o.Mixin.Events,
            options: {
                minWidth: 50,
                maxWidth: 300,
                autoPan: !0,
                closeButton: !0,
                offset: [0, 7],
                autoPanPadding: [5, 5],
                keepInView: !1,
                className: "",
                zoomAnimation: !0
            },
            initialize: function(t, e) {
                o.setOptions(this, t), this._source = e, this._animated = o.Browser.any3d && this.options.zoomAnimation, this._isOpen = !1
            },
            onAdd: function(t) {
                this._map = t, this._container || this._initLayout();
                var e = t.options.fadeAnimation;
                e && o.DomUtil.setOpacity(this._container, 0), t._panes.popupPane.appendChild(this._container), t.on(this._getEvents(), this), this.update(), e && o.DomUtil.setOpacity(this._container, 1), this.fire("open"), t.fire("popupopen", {
                    popup: this
                }), this._source && this._source.fire("popupopen", {
                    popup: this
                })
            },
            addTo: function(t) {
                return t.addLayer(this), this
            },
            openOn: function(t) {
                return t.openPopup(this), this
            },
            onRemove: function(t) {
                t._panes.popupPane.removeChild(this._container), o.Util.falseFn(this._container.offsetWidth), t.off(this._getEvents(), this), t.options.fadeAnimation && o.DomUtil.setOpacity(this._container, 0), this._map = null, this.fire("close"), t.fire("popupclose", {
                    popup: this
                }), this._source && this._source.fire("popupclose", {
                    popup: this
                })
            },
            getLatLng: function() {
                return this._latlng
            },
            setLatLng: function(t) {
                return this._latlng = o.latLng(t), this._map && (this._updatePosition(), this._adjustPan()), this
            },
            getContent: function() {
                return this._content
            },
            setContent: function(t) {
                return this._content = t, this.update(), this
            },
            update: function() {
                this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan())
            },
            _getEvents: function() {
                var t = {
                    viewreset: this._updatePosition
                };
                return this._animated && (t.zoomanim = this._zoomAnimation), ("closeOnClick" in this.options ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close), this.options.keepInView && (t.moveend = this._adjustPan), t
            },
            _close: function() {
                this._map && this._map.closePopup(this)
            },
            _initLayout: function() {
                var t, e = "leaflet-popup",
                    i = e + " " + this.options.className + " leaflet-zoom-" + (this._animated ? "animated" : "hide"),
                    n = this._container = o.DomUtil.create("div", i);
                this.options.closeButton && (t = this._closeButton = o.DomUtil.create("a", e + "-close-button", n), t.href = "#close", t.innerHTML = "&#215;", o.DomEvent.disableClickPropagation(t), o.DomEvent.on(t, "click", this._onCloseButtonClick, this));
                var s = this._wrapper = o.DomUtil.create("div", e + "-content-wrapper", n);
                o.DomEvent.disableClickPropagation(s), this._contentNode = o.DomUtil.create("div", e + "-content", s), o.DomEvent.disableScrollPropagation(this._contentNode), o.DomEvent.on(s, "contextmenu", o.DomEvent.stopPropagation), this._tipContainer = o.DomUtil.create("div", e + "-tip-container", n), this._tip = o.DomUtil.create("div", e + "-tip", this._tipContainer)
            },
            _updateContent: function() {
                if (this._content) {
                    if ("string" == typeof this._content) this._contentNode.innerHTML = this._content;
                    else {
                        for (; this._contentNode.hasChildNodes();) this._contentNode.removeChild(this._contentNode.firstChild);
                        this._contentNode.appendChild(this._content)
                    }
                    this.fire("contentupdate")
                }
            },
            _updateLayout: function() {
                var t = this._contentNode,
                    e = t.style;
                e.width = "", e.whiteSpace = "nowrap";
                var i = t.offsetWidth;
                i = Math.min(i, this.options.maxWidth), i = Math.max(i, this.options.minWidth), e.width = i + 1 + "px", e.whiteSpace = "", e.height = "";
                var n = t.offsetHeight,
                    s = this.options.maxHeight,
                    a = "leaflet-popup-scrolled";
                s && n > s ? (e.height = s + "px", o.DomUtil.addClass(t, a)) : o.DomUtil.removeClass(t, a), this._containerWidth = this._container.offsetWidth
            },
            _updatePosition: function() {
                if (this._map) {
                    var t = this._map.latLngToLayerPoint(this._latlng),
                        e = this._animated,
                        i = o.point(this.options.offset);
                    e && o.DomUtil.setPosition(this._container, t), this._containerBottom = -i.y - (e ? 0 : t.y), this._containerLeft = -Math.round(this._containerWidth / 2) + i.x + (e ? 0 : t.x), this._container.style.bottom = this._containerBottom + "px", this._container.style.left = this._containerLeft + "px"
                }
            },
            _zoomAnimation: function(t) {
                var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
                o.DomUtil.setPosition(this._container, e)
            },
            _adjustPan: function() {
                if (this.options.autoPan) {
                    var t = this._map,
                        e = this._container.offsetHeight,
                        i = this._containerWidth,
                        n = new o.Point(this._containerLeft, -e - this._containerBottom);
                    this._animated && n._add(o.DomUtil.getPosition(this._container));
                    var s = t.layerPointToContainerPoint(n),
                        a = o.point(this.options.autoPanPadding),
                        r = o.point(this.options.autoPanPaddingTopLeft || a),
                        h = o.point(this.options.autoPanPaddingBottomRight || a),
                        l = t.getSize(),
                        u = 0,
                        c = 0;
                    s.x + i + h.x > l.x && (u = s.x + i - l.x + h.x), s.x - u - r.x < 0 && (u = s.x - r.x), s.y + e + h.y > l.y && (c = s.y + e - l.y + h.y), s.y - c - r.y < 0 && (c = s.y - r.y), (u || c) && t.fire("autopanstart").panBy([u, c])
                }
            },
            _onCloseButtonClick: function(t) {
                this._close(), o.DomEvent.stop(t)
            }
        }), o.popup = function(t, e) {
            return new o.Popup(t, e)
        }, o.Map.include({
            openPopup: function(t, e, i) {
                if (this.closePopup(), !(t instanceof o.Popup)) {
                    var n = t;
                    t = new o.Popup(i).setLatLng(e).setContent(n)
                }
                return t._isOpen = !0, this._popup = t, this.addLayer(t)
            },
            closePopup: function(t) {
                return t && t !== this._popup || (t = this._popup, this._popup = null), t && (this.removeLayer(t), t._isOpen = !1), this
            }
        }), o.Marker.include({
            openPopup: function() {
                return this._popup && this._map && !this._map.hasLayer(this._popup) && (this._popup.setLatLng(this._latlng), this._map.openPopup(this._popup)), this
            },
            closePopup: function() {
                return this._popup && this._popup._close(), this
            },
            togglePopup: function() {
                return this._popup && (this._popup._isOpen ? this.closePopup() : this.openPopup()), this
            },
            bindPopup: function(t, e) {
                var i = o.point(this.options.icon.options.popupAnchor || [0, 0]);
                return i = i.add(o.Popup.prototype.options.offset), e && e.offset && (i = i.add(e.offset)), e = o.extend({
                    offset: i
                }, e), this._popupHandlersAdded || (this.on("click", this.togglePopup, this).on("remove", this.closePopup, this).on("move", this._movePopup, this), this._popupHandlersAdded = !0), t instanceof o.Popup ? (o.setOptions(t, e), this._popup = t) : this._popup = new o.Popup(e, this).setContent(t), this
            },
            setPopupContent: function(t) {
                return this._popup && this._popup.setContent(t), this
            },
            unbindPopup: function() {
                return this._popup && (this._popup = null, this.off("click", this.togglePopup, this).off("remove", this.closePopup, this).off("move", this._movePopup, this), this._popupHandlersAdded = !1), this
            },
            getPopup: function() {
                return this._popup
            },
            _movePopup: function(t) {
                this._popup.setLatLng(t.latlng)
            }
        }), o.LayerGroup = o.Class.extend({
            initialize: function(t) {
                this._layers = {};
                var e, i;
                if (t)
                    for (e = 0, i = t.length; i > e; e++) this.addLayer(t[e])
            },
            addLayer: function(t) {
                var e = this.getLayerId(t);
                return this._layers[e] = t, this._map && this._map.addLayer(t), this
            },
            removeLayer: function(t) {
                var e = t in this._layers ? t : this.getLayerId(t);
                return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]), delete this._layers[e], this
            },
            hasLayer: function(t) {
                return t ? t in this._layers || this.getLayerId(t) in this._layers : !1
            },
            clearLayers: function() {
                return this.eachLayer(this.removeLayer, this), this
            },
            invoke: function(t) {
                var e, i, n = Array.prototype.slice.call(arguments, 1);
                for (e in this._layers) i = this._layers[e], i[t] && i[t].apply(i, n);
                return this
            },
            onAdd: function(t) {
                this._map = t, this.eachLayer(t.addLayer, t)
            },
            onRemove: function(t) {
                this.eachLayer(t.removeLayer, t), this._map = null
            },
            addTo: function(t) {
                return t.addLayer(this), this
            },
            eachLayer: function(t, e) {
                for (var i in this._layers) t.call(e, this._layers[i]);
                return this
            },
            getLayer: function(t) {
                return this._layers[t]
            },
            getLayers: function() {
                var t = [];
                for (var e in this._layers) t.push(this._layers[e]);
                return t
            },
            setZIndex: function(t) {
                return this.invoke("setZIndex", t)
            },
            getLayerId: function(t) {
                return o.stamp(t)
            }
        }), o.layerGroup = function(t) {
            return new o.LayerGroup(t)
        }, o.FeatureGroup = o.LayerGroup.extend({
            includes: o.Mixin.Events,
            statics: {
                EVENTS: "click dblclick mouseover mouseout mousemove contextmenu popupopen popupclose"
            },
            addLayer: function(t) {
                return this.hasLayer(t) ? this : ("on" in t && t.on(o.FeatureGroup.EVENTS, this._propagateEvent, this), o.LayerGroup.prototype.addLayer.call(this, t), this._popupContent && t.bindPopup && t.bindPopup(this._popupContent, this._popupOptions), this.fire("layeradd", {
                    layer: t
                }))
            },
            removeLayer: function(t) {
                return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.off(o.FeatureGroup.EVENTS, this._propagateEvent, this), o.LayerGroup.prototype.removeLayer.call(this, t), this._popupContent && this.invoke("unbindPopup"), this.fire("layerremove", {
                    layer: t
                })) : this
            },
            bindPopup: function(t, e) {
                return this._popupContent = t, this._popupOptions = e, this.invoke("bindPopup", t, e)
            },
            openPopup: function(t) {
                for (var e in this._layers) {
                    this._layers[e].openPopup(t);
                    break
                }
                return this
            },
            setStyle: function(t) {
                return this.invoke("setStyle", t)
            },
            bringToFront: function() {
                return this.invoke("bringToFront")
            },
            bringToBack: function() {
                return this.invoke("bringToBack")
            },
            getBounds: function() {
                var t = new o.LatLngBounds;
                return this.eachLayer(function(e) {
                    t.extend(e instanceof o.Marker ? e.getLatLng() : e.getBounds())
                }), t
            },
            _propagateEvent: function(t) {
                t = o.extend({
                    layer: t.target,
                    target: this
                }, t), this.fire(t.type, t)
            }
        }), o.featureGroup = function(t) {
            return new o.FeatureGroup(t)
        }, o.Path = o.Class.extend({
            includes: [o.Mixin.Events],
            statics: {
                CLIP_PADDING: function() {
                    var e = o.Browser.mobile ? 1280 : 2e3,
                        i = (e / Math.max(t.outerWidth, t.outerHeight) - 1) / 2;
                    return Math.max(0, Math.min(.5, i))
                }()
            },
            options: {
                stroke: !0,
                color: "#0033ff",
                dashArray: null,
                lineCap: null,
                lineJoin: null,
                weight: 5,
                opacity: .5,
                fill: !1,
                fillColor: null,
                fillOpacity: .2,
                clickable: !0
            },
            initialize: function(t) {
                o.setOptions(this, t)
            },
            onAdd: function(t) {
                this._map = t, this._container || (this._initElements(), this._initEvents()), this.projectLatlngs(), this._updatePath(), this._container && this._map._pathRoot.appendChild(this._container), this.fire("add"), t.on({
                    viewreset: this.projectLatlngs,
                    moveend: this._updatePath
                }, this)
            },
            addTo: function(t) {
                return t.addLayer(this), this
            },
            onRemove: function(t) {
                t._pathRoot.removeChild(this._container), this.fire("remove"), this._map = null, o.Browser.vml && (this._container = null, this._stroke = null, this._fill = null), t.off({
                    viewreset: this.projectLatlngs,
                    moveend: this._updatePath
                }, this)
            },
            projectLatlngs: function() {},
            setStyle: function(t) {
                return o.setOptions(this, t), this._container && this._updateStyle(), this
            },
            redraw: function() {
                return this._map && (this.projectLatlngs(), this._updatePath()), this
            }
        }), o.Map.include({
            _updatePathViewport: function() {
                var t = o.Path.CLIP_PADDING,
                    e = this.getSize(),
                    i = o.DomUtil.getPosition(this._mapPane),
                    n = i.multiplyBy(-1)._subtract(e.multiplyBy(t)._round()),
                    s = n.add(e.multiplyBy(1 + 2 * t)._round());
                this._pathViewport = new o.Bounds(n, s)
            }
        }), o.Path.SVG_NS = "http://www.w3.org/2000/svg", o.Browser.svg = !(!e.createElementNS || !e.createElementNS(o.Path.SVG_NS, "svg").createSVGRect), o.Path = o.Path.extend({
            statics: {
                SVG: o.Browser.svg
            },
            bringToFront: function() {
                var t = this._map._pathRoot,
                    e = this._container;
                return e && t.lastChild !== e && t.appendChild(e), this
            },
            bringToBack: function() {
                var t = this._map._pathRoot,
                    e = this._container,
                    i = t.firstChild;
                return e && i !== e && t.insertBefore(e, i), this
            },
            getPathString: function() {},
            _createElement: function(t) {
                return e.createElementNS(o.Path.SVG_NS, t)
            },
            _initElements: function() {
                this._map._initPathRoot(), this._initPath(), this._initStyle()
            },
            _initPath: function() {
                this._container = this._createElement("g"), this._path = this._createElement("path"), this.options.className && o.DomUtil.addClass(this._path, this.options.className), this._container.appendChild(this._path)
            },
            _initStyle: function() {
                this.options.stroke && (this._path.setAttribute("stroke-linejoin", "round"), this._path.setAttribute("stroke-linecap", "round")), this.options.fill && this._path.setAttribute("fill-rule", "evenodd"), this.options.pointerEvents && this._path.setAttribute("pointer-events", this.options.pointerEvents), this.options.clickable || this.options.pointerEvents || this._path.setAttribute("pointer-events", "none"), this._updateStyle()
            },
            _updateStyle: function() {
                this.options.stroke ? (this._path.setAttribute("stroke", this.options.color), this._path.setAttribute("stroke-opacity", this.options.opacity), this._path.setAttribute("stroke-width", this.options.weight), this.options.dashArray ? this._path.setAttribute("stroke-dasharray", this.options.dashArray) : this._path.removeAttribute("stroke-dasharray"), this.options.lineCap && this._path.setAttribute("stroke-linecap", this.options.lineCap), this.options.lineJoin && this._path.setAttribute("stroke-linejoin", this.options.lineJoin)) : this._path.setAttribute("stroke", "none"), this.options.fill ? (this._path.setAttribute("fill", this.options.fillColor || this.options.color), this._path.setAttribute("fill-opacity", this.options.fillOpacity)) : this._path.setAttribute("fill", "none")
            },
            _updatePath: function() {
                var t = this.getPathString();
                t || (t = "M0 0"), this._path.setAttribute("d", t)
            },
            _initEvents: function() {
                if (this.options.clickable) {
                    (o.Browser.svg || !o.Browser.vml) && o.DomUtil.addClass(this._path, "leaflet-clickable"), o.DomEvent.on(this._container, "click", this._onMouseClick, this);
                    for (var t = ["dblclick", "mousedown", "mouseover", "mouseout", "mousemove", "contextmenu"], e = 0; e < t.length; e++) o.DomEvent.on(this._container, t[e], this._fireMouseEvent, this)
                }
            },
            _onMouseClick: function(t) {
                this._map.dragging && this._map.dragging.moved() || this._fireMouseEvent(t)
            },
            _fireMouseEvent: function(t) {
                if (this.hasEventListeners(t.type)) {
                    var e = this._map,
                        i = e.mouseEventToContainerPoint(t),
                        n = e.containerPointToLayerPoint(i),
                        s = e.layerPointToLatLng(n);
                    this.fire(t.type, {
                        latlng: s,
                        layerPoint: n,
                        containerPoint: i,
                        originalEvent: t
                    }), "contextmenu" === t.type && o.DomEvent.preventDefault(t), "mousemove" !== t.type && o.DomEvent.stopPropagation(t)
                }
            }
        }), o.Map.include({
            _initPathRoot: function() {
                this._pathRoot || (this._pathRoot = o.Path.prototype._createElement("svg"), this._panes.overlayPane.appendChild(this._pathRoot), this.options.zoomAnimation && o.Browser.any3d ? (o.DomUtil.addClass(this._pathRoot, "leaflet-zoom-animated"), this.on({
                    zoomanim: this._animatePathZoom,
                    zoomend: this._endPathZoom
                })) : o.DomUtil.addClass(this._pathRoot, "leaflet-zoom-hide"), this.on("moveend", this._updateSvgViewport), this._updateSvgViewport())
            },
            _animatePathZoom: function(t) {
                var e = this.getZoomScale(t.zoom),
                    i = this._getCenterOffset(t.center)._multiplyBy(-e)._add(this._pathViewport.min);
                this._pathRoot.style[o.DomUtil.TRANSFORM] = o.DomUtil.getTranslateString(i) + " scale(" + e + ") ", this._pathZooming = !0
            },
            _endPathZoom: function() {
                this._pathZooming = !1
            },
            _updateSvgViewport: function() {
                if (!this._pathZooming) {
                    this._updatePathViewport();
                    var t = this._pathViewport,
                        e = t.min,
                        i = t.max,
                        n = i.x - e.x,
                        s = i.y - e.y,
                        a = this._pathRoot,
                        r = this._panes.overlayPane;
                    o.Browser.mobileWebkit && r.removeChild(a), o.DomUtil.setPosition(a, e), a.setAttribute("width", n), a.setAttribute("height", s), a.setAttribute("viewBox", [e.x, e.y, n, s].join(" ")), o.Browser.mobileWebkit && r.appendChild(a)
                }
            }
        }), o.Path.include({
            bindPopup: function(t, e) {
                return t instanceof o.Popup ? this._popup = t : ((!this._popup || e) && (this._popup = new o.Popup(e, this)), this._popup.setContent(t)), this._popupHandlersAdded || (this.on("click", this._openPopup, this).on("remove", this.closePopup, this), this._popupHandlersAdded = !0), this
            },
            unbindPopup: function() {
                return this._popup && (this._popup = null, this.off("click", this._openPopup).off("remove", this.closePopup), this._popupHandlersAdded = !1), this
            },
            openPopup: function(t) {
                return this._popup && (t = t || this._latlng || this._latlngs[Math.floor(this._latlngs.length / 2)], this._openPopup({
                    latlng: t
                })), this
            },
            closePopup: function() {
                return this._popup && this._popup._close(), this
            },
            _openPopup: function(t) {
                this._popup.setLatLng(t.latlng), this._map.openPopup(this._popup)
            }
        }), o.Browser.vml = !o.Browser.svg && function() {
            try {
                var t = e.createElement("div");
                t.innerHTML = '<v:shape adj="1"/>';
                var i = t.firstChild;
                return i.style.behavior = "url(#default#VML)", i && "object" == typeof i.adj
            } catch (n) {
                return !1
            }
        }(), o.Path = o.Browser.svg || !o.Browser.vml ? o.Path : o.Path.extend({
            statics: {
                VML: !0,
                CLIP_PADDING: .02
            },
            _createElement: function() {
                try {
                    return e.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
                        function(t) {
                            return e.createElement("<lvml:" + t + ' class="lvml">')
                        }
                } catch (t) {
                    return function(t) {
                        return e.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
                    }
                }
            }(),
            _initPath: function() {
                var t = this._container = this._createElement("shape");
                o.DomUtil.addClass(t, "leaflet-vml-shape" + (this.options.className ? " " + this.options.className : "")), this.options.clickable && o.DomUtil.addClass(t, "leaflet-clickable"), t.coordsize = "1 1", this._path = this._createElement("path"), t.appendChild(this._path), this._map._pathRoot.appendChild(t)
            },
            _initStyle: function() {
                this._updateStyle()
            },
            _updateStyle: function() {
                var t = this._stroke,
                    e = this._fill,
                    i = this.options,
                    n = this._container;
                n.stroked = i.stroke, n.filled = i.fill, i.stroke ? (t || (t = this._stroke = this._createElement("stroke"), t.endcap = "round", n.appendChild(t)), t.weight = i.weight + "px", t.color = i.color, t.opacity = i.opacity, t.dashStyle = i.dashArray ? o.Util.isArray(i.dashArray) ? i.dashArray.join(" ") : i.dashArray.replace(/( *, *)/g, " ") : "", i.lineCap && (t.endcap = i.lineCap.replace("butt", "flat")), i.lineJoin && (t.joinstyle = i.lineJoin)) : t && (n.removeChild(t), this._stroke = null), i.fill ? (e || (e = this._fill = this._createElement("fill"), n.appendChild(e)), e.color = i.fillColor || i.color, e.opacity = i.fillOpacity) : e && (n.removeChild(e), this._fill = null)
            },
            _updatePath: function() {
                var t = this._container.style;
                t.display = "none", this._path.v = this.getPathString() + " ", t.display = ""
            }
        }), o.Map.include(o.Browser.svg || !o.Browser.vml ? {} : {
            _initPathRoot: function() {
                if (!this._pathRoot) {
                    var t = this._pathRoot = e.createElement("div");
                    t.className = "leaflet-vml-container", this._panes.overlayPane.appendChild(t), this.on("moveend", this._updatePathViewport), this._updatePathViewport()
                }
            }
        }), o.Browser.canvas = function() {
            return !!e.createElement("canvas").getContext
        }(), o.Path = o.Path.SVG && !t.L_PREFER_CANVAS || !o.Browser.canvas ? o.Path : o.Path.extend({
            statics: {
                CANVAS: !0,
                SVG: !1
            },
            redraw: function() {
                return this._map && (this.projectLatlngs(), this._requestUpdate()), this
            },
            setStyle: function(t) {
                return o.setOptions(this, t), this._map && (this._updateStyle(), this._requestUpdate()), this
            },
            onRemove: function(t) {
                t.off("viewreset", this.projectLatlngs, this).off("moveend", this._updatePath, this), this.options.clickable && (this._map.off("click", this._onClick, this), this._map.off("mousemove", this._onMouseMove, this)), this._requestUpdate(), this.fire("remove"), this._map = null
            },
            _requestUpdate: function() {
                this._map && !o.Path._updateRequest && (o.Path._updateRequest = o.Util.requestAnimFrame(this._fireMapMoveEnd, this._map))
            },
            _fireMapMoveEnd: function() {
                o.Path._updateRequest = null, this.fire("moveend")
            },
            _initElements: function() {
                this._map._initPathRoot(), this._ctx = this._map._canvasCtx
            },
            _updateStyle: function() {
                var t = this.options;
                t.stroke && (this._ctx.lineWidth = t.weight, this._ctx.strokeStyle = t.color), t.fill && (this._ctx.fillStyle = t.fillColor || t.color)
            },
            _drawPath: function() {
                var t, e, i, n, s, a;
                for (this._ctx.beginPath(), t = 0, i = this._parts.length; i > t; t++) {
                    for (e = 0, n = this._parts[t].length; n > e; e++) s = this._parts[t][e], a = (0 === e ? "move" : "line") + "To", this._ctx[a](s.x, s.y);
                    this instanceof o.Polygon && this._ctx.closePath()
                }
            },
            _checkIfEmpty: function() {
                return !this._parts.length
            },
            _updatePath: function() {
                if (!this._checkIfEmpty()) {
                    var t = this._ctx,
                        e = this.options;
                    this._drawPath(), t.save(), this._updateStyle(), e.fill && (t.globalAlpha = e.fillOpacity, t.fill()), e.stroke && (t.globalAlpha = e.opacity, t.stroke()), t.restore()
                }
            },
            _initEvents: function() {
                this.options.clickable && (this._map.on("mousemove", this._onMouseMove, this), this._map.on("click", this._onClick, this))
            },
            _onClick: function(t) {
                this._containsPoint(t.layerPoint) && this.fire("click", t)
            },
            _onMouseMove: function(t) {
                this._map && !this._map._animatingZoom && (this._containsPoint(t.layerPoint) ? (this._ctx.canvas.style.cursor = "pointer", this._mouseInside = !0, this.fire("mouseover", t)) : this._mouseInside && (this._ctx.canvas.style.cursor = "", this._mouseInside = !1, this.fire("mouseout", t)))
            }
        }), o.Map.include(o.Path.SVG && !t.L_PREFER_CANVAS || !o.Browser.canvas ? {} : {
            _initPathRoot: function() {
                var t, i = this._pathRoot;
                i || (i = this._pathRoot = e.createElement("canvas"), i.style.position = "absolute", t = this._canvasCtx = i.getContext("2d"), t.lineCap = "round", t.lineJoin = "round", this._panes.overlayPane.appendChild(i), this.options.zoomAnimation && (this._pathRoot.className = "leaflet-zoom-animated", this.on("zoomanim", this._animatePathZoom), this.on("zoomend", this._endPathZoom)), this.on("moveend", this._updateCanvasViewport), this._updateCanvasViewport())
            },
            _updateCanvasViewport: function() {
                if (!this._pathZooming) {
                    this._updatePathViewport();
                    var t = this._pathViewport,
                        e = t.min,
                        i = t.max.subtract(e),
                        n = this._pathRoot;
                    o.DomUtil.setPosition(n, e), n.width = i.x, n.height = i.y, n.getContext("2d").translate(-e.x, -e.y)
                }
            }
        }), o.LineUtil = {
            simplify: function(t, e) {
                if (!e || !t.length) return t.slice();
                var i = e * e;
                return t = this._reducePoints(t, i), t = this._simplifyDP(t, i)
            },
            pointToSegmentDistance: function(t, e, i) {
                return Math.sqrt(this._sqClosestPointOnSegment(t, e, i, !0))
            },
            closestPointOnSegment: function(t, e, i) {
                return this._sqClosestPointOnSegment(t, e, i)
            },
            _simplifyDP: function(t, e) {
                var n = t.length,
                    o = typeof Uint8Array != i + "" ? Uint8Array : Array,
                    s = new o(n);
                s[0] = s[n - 1] = 1, this._simplifyDPStep(t, s, e, 0, n - 1);
                var a, r = [];
                for (a = 0; n > a; a++) s[a] && r.push(t[a]);
                return r
            },
            _simplifyDPStep: function(t, e, i, n, o) {
                var s, a, r, h = 0;
                for (a = n + 1; o - 1 >= a; a++) r = this._sqClosestPointOnSegment(t[a], t[n], t[o], !0), r > h && (s = a, h = r);
                h > i && (e[s] = 1, this._simplifyDPStep(t, e, i, n, s), this._simplifyDPStep(t, e, i, s, o))
            },
            _reducePoints: function(t, e) {
                for (var i = [t[0]], n = 1, o = 0, s = t.length; s > n; n++) this._sqDist(t[n], t[o]) > e && (i.push(t[n]), o = n);
                return s - 1 > o && i.push(t[s - 1]), i
            },
            clipSegment: function(t, e, i, n) {
                var o, s, a, r = n ? this._lastCode : this._getBitCode(t, i),
                    h = this._getBitCode(e, i);
                for (this._lastCode = h;;) {
                    if (!(r | h)) return [t, e];
                    if (r & h) return !1;
                    o = r || h, s = this._getEdgeIntersection(t, e, o, i), a = this._getBitCode(s, i), o === r ? (t = s, r = a) : (e = s, h = a)
                }
            },
            _getEdgeIntersection: function(t, e, i, n) {
                var s = e.x - t.x,
                    a = e.y - t.y,
                    r = n.min,
                    h = n.max;
                return 8 & i ? new o.Point(t.x + s * (h.y - t.y) / a, h.y) : 4 & i ? new o.Point(t.x + s * (r.y - t.y) / a, r.y) : 2 & i ? new o.Point(h.x, t.y + a * (h.x - t.x) / s) : 1 & i ? new o.Point(r.x, t.y + a * (r.x - t.x) / s) : void 0
            },
            _getBitCode: function(t, e) {
                var i = 0;
                return t.x < e.min.x ? i |= 1 : t.x > e.max.x && (i |= 2), t.y < e.min.y ? i |= 4 : t.y > e.max.y && (i |= 8), i
            },
            _sqDist: function(t, e) {
                var i = e.x - t.x,
                    n = e.y - t.y;
                return i * i + n * n
            },
            _sqClosestPointOnSegment: function(t, e, i, n) {
                var s, a = e.x,
                    r = e.y,
                    h = i.x - a,
                    l = i.y - r,
                    u = h * h + l * l;
                return u > 0 && (s = ((t.x - a) * h + (t.y - r) * l) / u, s > 1 ? (a = i.x, r = i.y) : s > 0 && (a += h * s, r += l * s)), h = t.x - a, l = t.y - r, n ? h * h + l * l : new o.Point(a, r)
            }
        }, o.Polyline = o.Path.extend({
            initialize: function(t, e) {
                o.Path.prototype.initialize.call(this, e), this._latlngs = this._convertLatLngs(t)
            },
            options: {
                smoothFactor: 1,
                noClip: !1
            },
            projectLatlngs: function() {
                this._originalPoints = [];
                for (var t = 0, e = this._latlngs.length; e > t; t++) this._originalPoints[t] = this._map.latLngToLayerPoint(this._latlngs[t])
            },
            getPathString: function() {
                for (var t = 0, e = this._parts.length, i = ""; e > t; t++) i += this._getPathPartStr(this._parts[t]);
                return i
            },
            getLatLngs: function() {
                return this._latlngs
            },
            setLatLngs: function(t) {
                return this._latlngs = this._convertLatLngs(t), this.redraw()
            },
            addLatLng: function(t) {
                return this._latlngs.push(o.latLng(t)), this.redraw()
            },
            spliceLatLngs: function() {
                var t = [].splice.apply(this._latlngs, arguments);
                return this._convertLatLngs(this._latlngs, !0), this.redraw(), t
            },
            closestLayerPoint: function(t) {
                for (var e, i, n = 1 / 0, s = this._parts, a = null, r = 0, h = s.length; h > r; r++)
                    for (var l = s[r], u = 1, c = l.length; c > u; u++) {
                        e = l[u - 1], i = l[u];
                        var d = o.LineUtil._sqClosestPointOnSegment(t, e, i, !0);
                        n > d && (n = d, a = o.LineUtil._sqClosestPointOnSegment(t, e, i))
                    }
                return a && (a.distance = Math.sqrt(n)), a
            },
            getBounds: function() {
                return new o.LatLngBounds(this.getLatLngs())
            },
            _convertLatLngs: function(t, e) {
                var i, n, s = e ? t : [];
                for (i = 0, n = t.length; n > i; i++) {
                    if (o.Util.isArray(t[i]) && "number" != typeof t[i][0]) return;
                    s[i] = o.latLng(t[i])
                }
                return s
            },
            _initEvents: function() {
                o.Path.prototype._initEvents.call(this)
            },
            _getPathPartStr: function(t) {
                for (var e, i = o.Path.VML, n = 0, s = t.length, a = ""; s > n; n++) e = t[n], i && e._round(), a += (n ? "L" : "M") + e.x + " " + e.y;
                return a
            },
            _clipPoints: function() {
                var t, e, i, n = this._originalPoints,
                    s = n.length;
                if (this.options.noClip) return void(this._parts = [n]);
                this._parts = [];
                var a = this._parts,
                    r = this._map._pathViewport,
                    h = o.LineUtil;
                for (t = 0, e = 0; s - 1 > t; t++) i = h.clipSegment(n[t], n[t + 1], r, t), i && (a[e] = a[e] || [], a[e].push(i[0]), (i[1] !== n[t + 1] || t === s - 2) && (a[e].push(i[1]), e++))
            },
            _simplifyPoints: function() {
                for (var t = this._parts, e = o.LineUtil, i = 0, n = t.length; n > i; i++) t[i] = e.simplify(t[i], this.options.smoothFactor)
            },
            _updatePath: function() {
                this._map && (this._clipPoints(), this._simplifyPoints(), o.Path.prototype._updatePath.call(this))
            }
        }), o.polyline = function(t, e) {
            return new o.Polyline(t, e)
        }, o.PolyUtil = {}, o.PolyUtil.clipPolygon = function(t, e) {
            var i, n, s, a, r, h, l, u, c, d = [1, 4, 2, 8],
                p = o.LineUtil;
            for (n = 0, l = t.length; l > n; n++) t[n]._code = p._getBitCode(t[n], e);
            for (a = 0; 4 > a; a++) {
                for (u = d[a], i = [], n = 0, l = t.length, s = l - 1; l > n; s = n++) r = t[n], h = t[s], r._code & u ? h._code & u || (c = p._getEdgeIntersection(h, r, u, e), c._code = p._getBitCode(c, e), i.push(c)) : (h._code & u && (c = p._getEdgeIntersection(h, r, u, e), c._code = p._getBitCode(c, e), i.push(c)), i.push(r));
                t = i
            }
            return t
        }, o.Polygon = o.Polyline.extend({
            options: {
                fill: !0
            },
            initialize: function(t, e) {
                o.Polyline.prototype.initialize.call(this, t, e), this._initWithHoles(t)
            },
            _initWithHoles: function(t) {
                var e, i, n;
                if (t && o.Util.isArray(t[0]) && "number" != typeof t[0][0])
                    for (this._latlngs = this._convertLatLngs(t[0]), this._holes = t.slice(1), e = 0, i = this._holes.length; i > e; e++) n = this._holes[e] = this._convertLatLngs(this._holes[e]), n[0].equals(n[n.length - 1]) && n.pop();
                t = this._latlngs, t.length >= 2 && t[0].equals(t[t.length - 1]) && t.pop()
            },
            projectLatlngs: function() {
                if (o.Polyline.prototype.projectLatlngs.call(this), this._holePoints = [], this._holes) {
                    var t, e, i, n;
                    for (t = 0, i = this._holes.length; i > t; t++)
                        for (this._holePoints[t] = [], e = 0, n = this._holes[t].length; n > e; e++) this._holePoints[t][e] = this._map.latLngToLayerPoint(this._holes[t][e])
                }
            },
            setLatLngs: function(t) {
                return t && o.Util.isArray(t[0]) && "number" != typeof t[0][0] ? (this._initWithHoles(t), this.redraw()) : o.Polyline.prototype.setLatLngs.call(this, t)
            },
            _clipPoints: function() {
                var t = this._originalPoints,
                    e = [];
                if (this._parts = [t].concat(this._holePoints), !this.options.noClip) {
                    for (var i = 0, n = this._parts.length; n > i; i++) {
                        var s = o.PolyUtil.clipPolygon(this._parts[i], this._map._pathViewport);
                        s.length && e.push(s)
                    }
                    this._parts = e
                }
            },
            _getPathPartStr: function(t) {
                var e = o.Polyline.prototype._getPathPartStr.call(this, t);
                return e + (o.Browser.svg ? "z" : "x")
            }
        }), o.polygon = function(t, e) {
            return new o.Polygon(t, e)
        },
        function() {
            function t(t) {
                return o.FeatureGroup.extend({
                    initialize: function(t, e) {
                        this._layers = {}, this._options = e, this.setLatLngs(t)
                    },
                    setLatLngs: function(e) {
                        var i = 0,
                            n = e.length;
                        for (this.eachLayer(function(t) {
                                n > i ? t.setLatLngs(e[i++]) : this.removeLayer(t)
                            }, this); n > i;) this.addLayer(new t(e[i++], this._options));
                        return this
                    },
                    getLatLngs: function() {
                        var t = [];
                        return this.eachLayer(function(e) {
                            t.push(e.getLatLngs())
                        }), t
                    }
                })
            }
            o.MultiPolyline = t(o.Polyline), o.MultiPolygon = t(o.Polygon), o.multiPolyline = function(t, e) {
                return new o.MultiPolyline(t, e)
            }, o.multiPolygon = function(t, e) {
                return new o.MultiPolygon(t, e)
            }
        }(), o.Rectangle = o.Polygon.extend({
            initialize: function(t, e) {
                o.Polygon.prototype.initialize.call(this, this._boundsToLatLngs(t), e)
            },
            setBounds: function(t) {
                this.setLatLngs(this._boundsToLatLngs(t))
            },
            _boundsToLatLngs: function(t) {
                return t = o.latLngBounds(t), [t.getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
            }
        }), o.rectangle = function(t, e) {
            return new o.Rectangle(t, e)
        }, o.Circle = o.Path.extend({
            initialize: function(t, e, i) {
                o.Path.prototype.initialize.call(this, i), this._latlng = o.latLng(t), this._mRadius = e
            },
            options: {
                fill: !0
            },
            setLatLng: function(t) {
                return this._latlng = o.latLng(t), this.redraw()
            },
            setRadius: function(t) {
                return this._mRadius = t, this.redraw()
            },
            projectLatlngs: function() {
                var t = this._getLngRadius(),
                    e = this._latlng,
                    i = this._map.latLngToLayerPoint([e.lat, e.lng - t]);
                this._point = this._map.latLngToLayerPoint(e), this._radius = Math.max(this._point.x - i.x, 1)
            },
            getBounds: function() {
                var t = this._getLngRadius(),
                    e = this._mRadius / 40075017 * 360,
                    i = this._latlng;
                return new o.LatLngBounds([i.lat - e, i.lng - t], [i.lat + e, i.lng + t])
            },
            getLatLng: function() {
                return this._latlng
            },
            getPathString: function() {
                var t = this._point,
                    e = this._radius;
                return this._checkIfEmpty() ? "" : o.Browser.svg ? "M" + t.x + "," + (t.y - e) + "A" + e + "," + e + ",0,1,1," + (t.x - .1) + "," + (t.y - e) + " z" : (t._round(), e = Math.round(e), "AL " + t.x + "," + t.y + " " + e + "," + e + " 0,23592600")
            },
            getRadius: function() {
                return this._mRadius
            },
            _getLatRadius: function() {
                return this._mRadius / 40075017 * 360
            },
            _getLngRadius: function() {
                return this._getLatRadius() / Math.cos(o.LatLng.DEG_TO_RAD * this._latlng.lat)
            },
            _checkIfEmpty: function() {
                if (!this._map) return !1;
                var t = this._map._pathViewport,
                    e = this._radius,
                    i = this._point;
                return i.x - e > t.max.x || i.y - e > t.max.y || i.x + e < t.min.x || i.y + e < t.min.y
            }
        }), o.circle = function(t, e, i) {
            return new o.Circle(t, e, i)
        }, o.CircleMarker = o.Circle.extend({
            options: {
                radius: 10,
                weight: 2
            },
            initialize: function(t, e) {
                o.Circle.prototype.initialize.call(this, t, null, e), this._radius = this.options.radius
            },
            projectLatlngs: function() {
                this._point = this._map.latLngToLayerPoint(this._latlng)
            },
            _updateStyle: function() {
                o.Circle.prototype._updateStyle.call(this), this.setRadius(this.options.radius)
            },
            setLatLng: function(t) {
                return o.Circle.prototype.setLatLng.call(this, t), this._popup && this._popup._isOpen && this._popup.setLatLng(t), this
            },
            setRadius: function(t) {
                return this.options.radius = this._radius = t, this.redraw()
            },
            getRadius: function() {
                return this._radius
            }
        }), o.circleMarker = function(t, e) {
            return new o.CircleMarker(t, e)
        }, o.Polyline.include(o.Path.CANVAS ? {
            _containsPoint: function(t, e) {
                var i, n, s, a, r, h, l, u = this.options.weight / 2;
                for (o.Browser.touch && (u += 10), i = 0, a = this._parts.length; a > i; i++)
                    for (l = this._parts[i], n = 0, r = l.length, s = r - 1; r > n; s = n++)
                        if ((e || 0 !== n) && (h = o.LineUtil.pointToSegmentDistance(t, l[s], l[n]), u >= h)) return !0;
                return !1
            }
        } : {}), o.Polygon.include(o.Path.CANVAS ? {
            _containsPoint: function(t) {
                var e, i, n, s, a, r, h, l, u = !1;
                if (o.Polyline.prototype._containsPoint.call(this, t, !0)) return !0;
                for (s = 0, h = this._parts.length; h > s; s++)
                    for (e = this._parts[s], a = 0, l = e.length, r = l - 1; l > a; r = a++) i = e[a], n = e[r], i.y > t.y != n.y > t.y && t.x < (n.x - i.x) * (t.y - i.y) / (n.y - i.y) + i.x && (u = !u);
                return u
            }
        } : {}), o.Circle.include(o.Path.CANVAS ? {
            _drawPath: function() {
                var t = this._point;
                this._ctx.beginPath(), this._ctx.arc(t.x, t.y, this._radius, 0, 2 * Math.PI, !1)
            },
            _containsPoint: function(t) {
                var e = this._point,
                    i = this.options.stroke ? this.options.weight / 2 : 0;
                return t.distanceTo(e) <= this._radius + i
            }
        } : {}), o.CircleMarker.include(o.Path.CANVAS ? {
            _updateStyle: function() {
                o.Path.prototype._updateStyle.call(this)
            }
        } : {}), o.GeoJSON = o.FeatureGroup.extend({
            initialize: function(t, e) {
                o.setOptions(this, e), this._layers = {}, t && this.addData(t)
            },
            addData: function(t) {
                var e, i, n, s = o.Util.isArray(t) ? t : t.features;
                if (s) {
                    for (e = 0, i = s.length; i > e; e++) n = s[e], (n.geometries || n.geometry || n.features || n.coordinates) && this.addData(s[e]);
                    return this
                }
                var a = this.options;
                if (!a.filter || a.filter(t)) {
                    var r = o.GeoJSON.geometryToLayer(t, a.pointToLayer, a.coordsToLatLng, a);
                    return r.feature = o.GeoJSON.asFeature(t), r.defaultOptions = r.options, this.resetStyle(r), a.onEachFeature && a.onEachFeature(t, r), this.addLayer(r)
                }
            },
            resetStyle: function(t) {
                var e = this.options.style;
                e && (o.Util.extend(t.options, t.defaultOptions), this._setLayerStyle(t, e))
            },
            setStyle: function(t) {
                this.eachLayer(function(e) {
                    this._setLayerStyle(e, t)
                }, this)
            },
            _setLayerStyle: function(t, e) {
                "function" == typeof e && (e = e(t.feature)), t.setStyle && t.setStyle(e)
            }
        }), o.extend(o.GeoJSON, {
            geometryToLayer: function(t, e, i, n) {
                var s, a, r, h, l = "Feature" === t.type ? t.geometry : t,
                    u = l.coordinates,
                    c = [];
                switch (i = i || this.coordsToLatLng, l.type) {
                    case "Point":
                        return s = i(u), e ? e(t, s) : new o.Marker(s);
                    case "MultiPoint":
                        for (r = 0, h = u.length; h > r; r++) s = i(u[r]), c.push(e ? e(t, s) : new o.Marker(s));
                        return new o.FeatureGroup(c);
                    case "LineString":
                        return a = this.coordsToLatLngs(u, 0, i), new o.Polyline(a, n);
                    case "Polygon":
                        if (2 === u.length && !u[1].length) throw new Error("Invalid GeoJSON object.");
                        return a = this.coordsToLatLngs(u, 1, i), new o.Polygon(a, n);
                    case "MultiLineString":
                        return a = this.coordsToLatLngs(u, 1, i), new o.MultiPolyline(a, n);
                    case "MultiPolygon":
                        return a = this.coordsToLatLngs(u, 2, i), new o.MultiPolygon(a, n);
                    case "GeometryCollection":
                        for (r = 0, h = l.geometries.length; h > r; r++) c.push(this.geometryToLayer({
                            geometry: l.geometries[r],
                            type: "Feature",
                            properties: t.properties
                        }, e, i, n));
                        return new o.FeatureGroup(c);
                    default:
                        throw new Error("Invalid GeoJSON object.")
                }
            },
            coordsToLatLng: function(t) {
                return new o.LatLng(t[1], t[0], t[2])
            },
            coordsToLatLngs: function(t, e, i) {
                var n, o, s, a = [];
                for (o = 0, s = t.length; s > o; o++) n = e ? this.coordsToLatLngs(t[o], e - 1, i) : (i || this.coordsToLatLng)(t[o]), a.push(n);
                return a
            },
            latLngToCoords: function(t) {
                var e = [t.lng, t.lat];
                return t.alt !== i && e.push(t.alt), e
            },
            latLngsToCoords: function(t) {
                for (var e = [], i = 0, n = t.length; n > i; i++) e.push(o.GeoJSON.latLngToCoords(t[i]));
                return e
            },
            getFeature: function(t, e) {
                return t.feature ? o.extend({}, t.feature, {
                    geometry: e
                }) : o.GeoJSON.asFeature(e)
            },
            asFeature: function(t) {
                return "Feature" === t.type ? t : {
                    type: "Feature",
                    properties: {},
                    geometry: t
                }
            }
        });
    var a = {
        toGeoJSON: function() {
            return o.GeoJSON.getFeature(this, {
                type: "Point",
                coordinates: o.GeoJSON.latLngToCoords(this.getLatLng())
            })
        }
    };
    o.Marker.include(a), o.Circle.include(a), o.CircleMarker.include(a), o.Polyline.include({
            toGeoJSON: function() {
                return o.GeoJSON.getFeature(this, {
                    type: "LineString",
                    coordinates: o.GeoJSON.latLngsToCoords(this.getLatLngs())
                })
            }
        }), o.Polygon.include({
            toGeoJSON: function() {
                var t, e, i, n = [o.GeoJSON.latLngsToCoords(this.getLatLngs())];
                if (n[0].push(n[0][0]), this._holes)
                    for (t = 0, e = this._holes.length; e > t; t++) i = o.GeoJSON.latLngsToCoords(this._holes[t]), i.push(i[0]), n.push(i);
                return o.GeoJSON.getFeature(this, {
                    type: "Polygon",
                    coordinates: n
                })
            }
        }),
        function() {
            function t(t) {
                return function() {
                    var e = [];
                    return this.eachLayer(function(t) {
                        e.push(t.toGeoJSON().geometry.coordinates)
                    }), o.GeoJSON.getFeature(this, {
                        type: t,
                        coordinates: e
                    })
                }
            }
            o.MultiPolyline.include({
                toGeoJSON: t("MultiLineString")
            }), o.MultiPolygon.include({
                toGeoJSON: t("MultiPolygon")
            }), o.LayerGroup.include({
                toGeoJSON: function() {
                    var e, i = this.feature && this.feature.geometry,
                        n = [];
                    if (i && "MultiPoint" === i.type) return t("MultiPoint").call(this);
                    var s = i && "GeometryCollection" === i.type;
                    return this.eachLayer(function(t) {
                        t.toGeoJSON && (e = t.toGeoJSON(), n.push(s ? e.geometry : o.GeoJSON.asFeature(e)))
                    }), s ? o.GeoJSON.getFeature(this, {
                        geometries: n,
                        type: "GeometryCollection"
                    }) : {
                        type: "FeatureCollection",
                        features: n
                    }
                }
            })
        }(), o.geoJson = function(t, e) {
            return new o.GeoJSON(t, e)
        }, o.DomEvent = {
            addListener: function(t, e, i, n) {
                var s, a, r, h = o.stamp(i),
                    l = "_leaflet_" + e + h;
                return t[l] ? this : (s = function(e) {
                    return i.call(n || t, e || o.DomEvent._getEvent())
                }, o.Browser.pointer && 0 === e.indexOf("touch") ? this.addPointerListener(t, e, s, h) : (o.Browser.touch && "dblclick" === e && this.addDoubleTapListener && this.addDoubleTapListener(t, s, h), "addEventListener" in t ? "mousewheel" === e ? (t.addEventListener("DOMMouseScroll", s, !1), t.addEventListener(e, s, !1)) : "mouseenter" === e || "mouseleave" === e ? (a = s, r = "mouseenter" === e ? "mouseover" : "mouseout", s = function(e) {
                    return o.DomEvent._checkMouse(t, e) ? a(e) : void 0
                }, t.addEventListener(r, s, !1)) : "click" === e && o.Browser.android ? (a = s, s = function(t) {
                    return o.DomEvent._filterClick(t, a)
                }, t.addEventListener(e, s, !1)) : t.addEventListener(e, s, !1) : "attachEvent" in t && t.attachEvent("on" + e, s), t[l] = s, this))
            },
            removeListener: function(t, e, i) {
                var n = o.stamp(i),
                    s = "_leaflet_" + e + n,
                    a = t[s];
                return a ? (o.Browser.pointer && 0 === e.indexOf("touch") ? this.removePointerListener(t, e, n) : o.Browser.touch && "dblclick" === e && this.removeDoubleTapListener ? this.removeDoubleTapListener(t, n) : "removeEventListener" in t ? "mousewheel" === e ? (t.removeEventListener("DOMMouseScroll", a, !1), t.removeEventListener(e, a, !1)) : "mouseenter" === e || "mouseleave" === e ? t.removeEventListener("mouseenter" === e ? "mouseover" : "mouseout", a, !1) : t.removeEventListener(e, a, !1) : "detachEvent" in t && t.detachEvent("on" + e, a), t[s] = null, this) : this
            },
            stopPropagation: function(t) {
                return t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0, o.DomEvent._skipped(t), this
            },
            disableScrollPropagation: function(t) {
                var e = o.DomEvent.stopPropagation;
                return o.DomEvent.on(t, "mousewheel", e).on(t, "MozMousePixelScroll", e)
            },
            disableClickPropagation: function(t) {
                for (var e = o.DomEvent.stopPropagation, i = o.Draggable.START.length - 1; i >= 0; i--) o.DomEvent.on(t, o.Draggable.START[i], e);
                return o.DomEvent.on(t, "click", o.DomEvent._fakeStop).on(t, "dblclick", e)
            },
            preventDefault: function(t) {
                return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this
            },
            stop: function(t) {
                return o.DomEvent.preventDefault(t).stopPropagation(t)
            },
            getMousePosition: function(t, e) {
                if (!e) return new o.Point(t.clientX, t.clientY);
                var i = e.getBoundingClientRect();
                return new o.Point(t.clientX - i.left - e.clientLeft, t.clientY - i.top - e.clientTop)
            },
            getWheelDelta: function(t) {
                var e = 0;
                return t.wheelDelta && (e = t.wheelDelta / 120), t.detail && (e = -t.detail / 3), e
            },
            _skipEvents: {},
            _fakeStop: function(t) {
                o.DomEvent._skipEvents[t.type] = !0
            },
            _skipped: function(t) {
                var e = this._skipEvents[t.type];
                return this._skipEvents[t.type] = !1, e
            },
            _checkMouse: function(t, e) {
                var i = e.relatedTarget;
                if (!i) return !0;
                try {
                    for (; i && i !== t;) i = i.parentNode
                } catch (n) {
                    return !1
                }
                return i !== t
            },
            _getEvent: function() {
                var e = t.event;
                if (!e)
                    for (var i = arguments.callee.caller; i && (e = i.arguments[0], !e || t.Event !== e.constructor);) i = i.caller;
                return e
            },
            _filterClick: function(t, e) {
                var i = t.timeStamp || t.originalEvent.timeStamp,
                    n = o.DomEvent._lastClick && i - o.DomEvent._lastClick;
                return n && n > 100 && 500 > n || t.target._simulatedClick && !t._simulated ? void o.DomEvent.stop(t) : (o.DomEvent._lastClick = i, e(t))
            }
        }, o.DomEvent.on = o.DomEvent.addListener, o.DomEvent.off = o.DomEvent.removeListener, o.Draggable = o.Class.extend({
            includes: o.Mixin.Events,
            statics: {
                START: o.Browser.touch ? ["touchstart", "mousedown"] : ["mousedown"],
                END: {
                    mousedown: "mouseup",
                    touchstart: "touchend",
                    pointerdown: "touchend",
                    MSPointerDown: "touchend"
                },
                MOVE: {
                    mousedown: "mousemove",
                    touchstart: "touchmove",
                    pointerdown: "touchmove",
                    MSPointerDown: "touchmove"
                }
            },
            initialize: function(t, e) {
                this._element = t, this._dragStartTarget = e || t
            },
            enable: function() {
                if (!this._enabled) {
                    for (var t = o.Draggable.START.length - 1; t >= 0; t--) o.DomEvent.on(this._dragStartTarget, o.Draggable.START[t], this._onDown, this);
                    this._enabled = !0
                }
            },
            disable: function() {
                if (this._enabled) {
                    for (var t = o.Draggable.START.length - 1; t >= 0; t--) o.DomEvent.off(this._dragStartTarget, o.Draggable.START[t], this._onDown, this);
                    this._enabled = !1, this._moved = !1
                }
            },
            _onDown: function(t) {
                if (this._moved = !1, !(t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches || (o.DomEvent.stopPropagation(t), o.Draggable._disabled || (o.DomUtil.disableImageDrag(), o.DomUtil.disableTextSelection(), this._moving)))) {
                    var i = t.touches ? t.touches[0] : t;
                    this._startPoint = new o.Point(i.clientX, i.clientY), this._startPos = this._newPos = o.DomUtil.getPosition(this._element), o.DomEvent.on(e, o.Draggable.MOVE[t.type], this._onMove, this).on(e, o.Draggable.END[t.type], this._onUp, this)
                }
            },
            _onMove: function(t) {
                if (t.touches && t.touches.length > 1) return void(this._moved = !0);
                var i = t.touches && 1 === t.touches.length ? t.touches[0] : t,
                    n = new o.Point(i.clientX, i.clientY),
                    s = n.subtract(this._startPoint);
                (s.x || s.y) && (o.Browser.touch && Math.abs(s.x) + Math.abs(s.y) < 3 || (o.DomEvent.preventDefault(t), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = o.DomUtil.getPosition(this._element).subtract(s), o.DomUtil.addClass(e.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, o.DomUtil.addClass(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(s), this._moving = !0, o.Util.cancelAnimFrame(this._animRequest), this._animRequest = o.Util.requestAnimFrame(this._updatePosition, this, !0, this._dragStartTarget)))
            },
            _updatePosition: function() {
                this.fire("predrag"), o.DomUtil.setPosition(this._element, this._newPos), this.fire("drag")
            },
            _onUp: function() {
                o.DomUtil.removeClass(e.body, "leaflet-dragging"), this._lastTarget && (o.DomUtil.removeClass(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null);
                for (var t in o.Draggable.MOVE) o.DomEvent.off(e, o.Draggable.MOVE[t], this._onMove).off(e, o.Draggable.END[t], this._onUp);
                o.DomUtil.enableImageDrag(), o.DomUtil.enableTextSelection(), this._moved && this._moving && (o.Util.cancelAnimFrame(this._animRequest), this.fire("dragend", {
                    distance: this._newPos.distanceTo(this._startPos)
                })), this._moving = !1
            }
        }), o.Handler = o.Class.extend({
            initialize: function(t) {
                this._map = t
            },
            enable: function() {
                this._enabled || (this._enabled = !0, this.addHooks())
            },
            disable: function() {
                this._enabled && (this._enabled = !1, this.removeHooks())
            },
            enabled: function() {
                return !!this._enabled
            }
        }), o.Map.mergeOptions({
            dragging: !0,
            inertia: !o.Browser.android23,
            inertiaDeceleration: 3400,
            inertiaMaxSpeed: 1 / 0,
            inertiaThreshold: o.Browser.touch ? 32 : 18,
            easeLinearity: .25,
            worldCopyJump: !1
        }), o.Map.Drag = o.Handler.extend({
            addHooks: function() {
                if (!this._draggable) {
                    var t = this._map;
                    this._draggable = new o.Draggable(t._mapPane, t._container), this._draggable.on({
                        dragstart: this._onDragStart,
                        drag: this._onDrag,
                        dragend: this._onDragEnd
                    }, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDrag, this), t.on("viewreset", this._onViewReset, this), t.whenReady(this._onViewReset, this))
                }
                this._draggable.enable()
            },
            removeHooks: function() {
                this._draggable.disable()
            },
            moved: function() {
                return this._draggable && this._draggable._moved
            },
            _onDragStart: function() {
                var t = this._map;
                t._panAnim && t._panAnim.stop(), t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = [])
            },
            _onDrag: function() {
                if (this._map.options.inertia) {
                    var t = this._lastTime = +new Date,
                        e = this._lastPos = this._draggable._newPos;
                    this._positions.push(e), this._times.push(t), t - this._times[0] > 200 && (this._positions.shift(), this._times.shift())
                }
                this._map.fire("move").fire("drag")
            },
            _onViewReset: function() {
                var t = this._map.getSize()._divideBy(2),
                    e = this._map.latLngToLayerPoint([0, 0]);
                this._initialWorldOffset = e.subtract(t).x, this._worldWidth = this._map.project([0, 180]).x
            },
            _onPreDrag: function() {
                var t = this._worldWidth,
                    e = Math.round(t / 2),
                    i = this._initialWorldOffset,
                    n = this._draggable._newPos.x,
                    o = (n - e + i) % t + e - i,
                    s = (n + e + i) % t - e - i,
                    a = Math.abs(o + i) < Math.abs(s + i) ? o : s;
                this._draggable._newPos.x = a
            },
            _onDragEnd: function(t) {
                var e = this._map,
                    i = e.options,
                    n = +new Date - this._lastTime,
                    s = !i.inertia || n > i.inertiaThreshold || !this._positions[0];
                if (e.fire("dragend", t), s) e.fire("moveend");
                else {
                    var a = this._lastPos.subtract(this._positions[0]),
                        r = (this._lastTime + n - this._times[0]) / 1e3,
                        h = i.easeLinearity,
                        l = a.multiplyBy(h / r),
                        u = l.distanceTo([0, 0]),
                        c = Math.min(i.inertiaMaxSpeed, u),
                        d = l.multiplyBy(c / u),
                        p = c / (i.inertiaDeceleration * h),
                        _ = d.multiplyBy(-p / 2).round();
                    _.x && _.y ? (_ = e._limitOffset(_, e.options.maxBounds), o.Util.requestAnimFrame(function() {
                        e.panBy(_, {
                            duration: p,
                            easeLinearity: h,
                            noMoveStart: !0
                        })
                    })) : e.fire("moveend")
                }
            }
        }), o.Map.addInitHook("addHandler", "dragging", o.Map.Drag), o.Map.mergeOptions({
            doubleClickZoom: !0
        }), o.Map.DoubleClickZoom = o.Handler.extend({
            addHooks: function() {
                this._map.on("dblclick", this._onDoubleClick, this)
            },
            removeHooks: function() {
                this._map.off("dblclick", this._onDoubleClick, this)
            },
            _onDoubleClick: function(t) {
                var e = this._map,
                    i = e.getZoom() + (t.originalEvent.shiftKey ? -1 : 1);
                "center" === e.options.doubleClickZoom ? e.setZoom(i) : e.setZoomAround(t.containerPoint, i)
            }
        }), o.Map.addInitHook("addHandler", "doubleClickZoom", o.Map.DoubleClickZoom), o.Map.mergeOptions({
            scrollWheelZoom: !0
        }), o.Map.ScrollWheelZoom = o.Handler.extend({
            addHooks: function() {
                o.DomEvent.on(this._map._container, "mousewheel", this._onWheelScroll, this), o.DomEvent.on(this._map._container, "MozMousePixelScroll", o.DomEvent.preventDefault), this._delta = 0
            },
            removeHooks: function() {
                o.DomEvent.off(this._map._container, "mousewheel", this._onWheelScroll), o.DomEvent.off(this._map._container, "MozMousePixelScroll", o.DomEvent.preventDefault)
            },
            _onWheelScroll: function(t) {
                var e = o.DomEvent.getWheelDelta(t);
                this._delta += e, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date);
                var i = Math.max(40 - (+new Date - this._startTime), 0);
                clearTimeout(this._timer), this._timer = setTimeout(o.bind(this._performZoom, this), i), o.DomEvent.preventDefault(t), o.DomEvent.stopPropagation(t)
            },
            _performZoom: function() {
                var t = this._map,
                    e = this._delta,
                    i = t.getZoom();
                e = e > 0 ? Math.ceil(e) : Math.floor(e), e = Math.max(Math.min(e, 4), -4), e = t._limitZoom(i + e) - i, this._delta = 0, this._startTime = null, e && ("center" === t.options.scrollWheelZoom ? t.setZoom(i + e) : t.setZoomAround(this._lastMousePos, i + e))
            }
        }), o.Map.addInitHook("addHandler", "scrollWheelZoom", o.Map.ScrollWheelZoom), o.extend(o.DomEvent, {
            _touchstart: o.Browser.msPointer ? "MSPointerDown" : o.Browser.pointer ? "pointerdown" : "touchstart",
            _touchend: o.Browser.msPointer ? "MSPointerUp" : o.Browser.pointer ? "pointerup" : "touchend",
            addDoubleTapListener: function(t, i, n) {
                function s(t) {
                    var e;
                    if (o.Browser.pointer ? (_.push(t.pointerId), e = _.length) : e = t.touches.length, !(e > 1)) {
                        var i = Date.now(),
                            n = i - (r || i);
                        h = t.touches ? t.touches[0] : t, l = n > 0 && u >= n, r = i
                    }
                }

                function a(t) {
                    if (o.Browser.pointer) {
                        var e = _.indexOf(t.pointerId);
                        if (-1 === e) return;
                        _.splice(e, 1)
                    }
                    if (l) {
                        if (o.Browser.pointer) {
                            var n, s = {};
                            for (var a in h) n = h[a], s[a] = "function" == typeof n ? n.bind(h) : n;
                            h = s
                        }
                        h.type = "dblclick", i(h), r = null
                    }
                }
                var r, h, l = !1,
                    u = 250,
                    c = "_leaflet_",
                    d = this._touchstart,
                    p = this._touchend,
                    _ = [];
                t[c + d + n] = s, t[c + p + n] = a;
                var m = o.Browser.pointer ? e.documentElement : t;
                return t.addEventListener(d, s, !1), m.addEventListener(p, a, !1), o.Browser.pointer && m.addEventListener(o.DomEvent.POINTER_CANCEL, a, !1), this
            },
            removeDoubleTapListener: function(t, i) {
                var n = "_leaflet_";
                return t.removeEventListener(this._touchstart, t[n + this._touchstart + i], !1), (o.Browser.pointer ? e.documentElement : t).removeEventListener(this._touchend, t[n + this._touchend + i], !1), o.Browser.pointer && e.documentElement.removeEventListener(o.DomEvent.POINTER_CANCEL, t[n + this._touchend + i], !1), this
            }
        }), o.extend(o.DomEvent, {
            POINTER_DOWN: o.Browser.msPointer ? "MSPointerDown" : "pointerdown",
            POINTER_MOVE: o.Browser.msPointer ? "MSPointerMove" : "pointermove",
            POINTER_UP: o.Browser.msPointer ? "MSPointerUp" : "pointerup",
            POINTER_CANCEL: o.Browser.msPointer ? "MSPointerCancel" : "pointercancel",
            _pointers: [],
            _pointerDocumentListener: !1,
            addPointerListener: function(t, e, i, n) {
                switch (e) {
                    case "touchstart":
                        return this.addPointerListenerStart(t, e, i, n);
                    case "touchend":
                        return this.addPointerListenerEnd(t, e, i, n);
                    case "touchmove":
                        return this.addPointerListenerMove(t, e, i, n);
                    default:
                        throw "Unknown touch event type"
                }
            },
            addPointerListenerStart: function(t, i, n, s) {
                var a = "_leaflet_",
                    r = this._pointers,
                    h = function(t) {
                        o.DomEvent.preventDefault(t);
                        for (var e = !1, i = 0; i < r.length; i++)
                            if (r[i].pointerId === t.pointerId) {
                                e = !0;
                                break
                            }
                        e || r.push(t), t.touches = r.slice(), t.changedTouches = [t], n(t)
                    };
                if (t[a + "touchstart" + s] = h, t.addEventListener(this.POINTER_DOWN, h, !1), !this._pointerDocumentListener) {
                    var l = function(t) {
                        for (var e = 0; e < r.length; e++)
                            if (r[e].pointerId === t.pointerId) {
                                r.splice(e, 1);
                                break
                            }
                    };
                    e.documentElement.addEventListener(this.POINTER_UP, l, !1), e.documentElement.addEventListener(this.POINTER_CANCEL, l, !1), this._pointerDocumentListener = !0
                }
                return this
            },
            addPointerListenerMove: function(t, e, i, n) {
                function o(t) {
                    if (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType || 0 !== t.buttons) {
                        for (var e = 0; e < a.length; e++)
                            if (a[e].pointerId === t.pointerId) {
                                a[e] = t;
                                break
                            }
                        t.touches = a.slice(), t.changedTouches = [t], i(t)
                    }
                }
                var s = "_leaflet_",
                    a = this._pointers;
                return t[s + "touchmove" + n] = o, t.addEventListener(this.POINTER_MOVE, o, !1), this
            },
            addPointerListenerEnd: function(t, e, i, n) {
                var o = "_leaflet_",
                    s = this._pointers,
                    a = function(t) {
                        for (var e = 0; e < s.length; e++)
                            if (s[e].pointerId === t.pointerId) {
                                s.splice(e, 1);
                                break
                            }
                        t.touches = s.slice(), t.changedTouches = [t], i(t)
                    };
                return t[o + "touchend" + n] = a, t.addEventListener(this.POINTER_UP, a, !1), t.addEventListener(this.POINTER_CANCEL, a, !1), this
            },
            removePointerListener: function(t, e, i) {
                var n = "_leaflet_",
                    o = t[n + e + i];
                switch (e) {
                    case "touchstart":
                        t.removeEventListener(this.POINTER_DOWN, o, !1);
                        break;
                    case "touchmove":
                        t.removeEventListener(this.POINTER_MOVE, o, !1);
                        break;
                    case "touchend":
                        t.removeEventListener(this.POINTER_UP, o, !1), t.removeEventListener(this.POINTER_CANCEL, o, !1)
                }
                return this
            }
        }), o.Map.mergeOptions({
            touchZoom: o.Browser.touch && !o.Browser.android23,
            bounceAtZoomLimits: !0
        }), o.Map.TouchZoom = o.Handler.extend({
            addHooks: function() {
                o.DomEvent.on(this._map._container, "touchstart", this._onTouchStart, this)
            },
            removeHooks: function() {
                o.DomEvent.off(this._map._container, "touchstart", this._onTouchStart, this)
            },
            _onTouchStart: function(t) {
                var i = this._map;
                if (t.touches && 2 === t.touches.length && !i._animatingZoom && !this._zooming) {
                    var n = i.mouseEventToLayerPoint(t.touches[0]),
                        s = i.mouseEventToLayerPoint(t.touches[1]),
                        a = i._getCenterLayerPoint();
                    this._startCenter = n.add(s)._divideBy(2), this._startDist = n.distanceTo(s), this._moved = !1, this._zooming = !0, this._centerOffset = a.subtract(this._startCenter), i._panAnim && i._panAnim.stop(), o.DomEvent.on(e, "touchmove", this._onTouchMove, this).on(e, "touchend", this._onTouchEnd, this), o.DomEvent.preventDefault(t)
                }
            },
            _onTouchMove: function(t) {
                var e = this._map;
                if (t.touches && 2 === t.touches.length && this._zooming) {
                    var i = e.mouseEventToLayerPoint(t.touches[0]),
                        n = e.mouseEventToLayerPoint(t.touches[1]);
                    this._scale = i.distanceTo(n) / this._startDist, this._delta = i._add(n)._divideBy(2)._subtract(this._startCenter), 1 !== this._scale && (e.options.bounceAtZoomLimits || !(e.getZoom() === e.getMinZoom() && this._scale < 1 || e.getZoom() === e.getMaxZoom() && this._scale > 1)) && (this._moved || (o.DomUtil.addClass(e._mapPane, "leaflet-touching"), e.fire("movestart").fire("zoomstart"), this._moved = !0), o.Util.cancelAnimFrame(this._animRequest), this._animRequest = o.Util.requestAnimFrame(this._updateOnMove, this, !0, this._map._container), o.DomEvent.preventDefault(t))
                }
            },
            _updateOnMove: function() {
                var t = this._map,
                    e = this._getScaleOrigin(),
                    i = t.layerPointToLatLng(e),
                    n = t.getScaleZoom(this._scale);
                t._animateZoom(i, n, this._startCenter, this._scale, this._delta, !1, !0)
            },
            _onTouchEnd: function() {
                if (!this._moved || !this._zooming) return void(this._zooming = !1);
                var t = this._map;
                this._zooming = !1, o.DomUtil.removeClass(t._mapPane, "leaflet-touching"), o.Util.cancelAnimFrame(this._animRequest), o.DomEvent.off(e, "touchmove", this._onTouchMove).off(e, "touchend", this._onTouchEnd);
                var i = this._getScaleOrigin(),
                    n = t.layerPointToLatLng(i),
                    s = t.getZoom(),
                    a = t.getScaleZoom(this._scale) - s,
                    r = a > 0 ? Math.ceil(a) : Math.floor(a),
                    h = t._limitZoom(s + r),
                    l = t.getZoomScale(h) / this._scale;
                t._animateZoom(n, h, i, l)
            },
            _getScaleOrigin: function() {
                var t = this._centerOffset.subtract(this._delta).divideBy(this._scale);
                return this._startCenter.add(t)
            }
        }), o.Map.addInitHook("addHandler", "touchZoom", o.Map.TouchZoom), o.Map.mergeOptions({
            tap: !0,
            tapTolerance: 15
        }), o.Map.Tap = o.Handler.extend({
            addHooks: function() {
                o.DomEvent.on(this._map._container, "touchstart", this._onDown, this)
            },
            removeHooks: function() {
                o.DomEvent.off(this._map._container, "touchstart", this._onDown, this)
            },
            _onDown: function(t) {
                if (t.touches) {
                    if (o.DomEvent.preventDefault(t), this._fireClick = !0, t.touches.length > 1) return this._fireClick = !1, void clearTimeout(this._holdTimeout);
                    var i = t.touches[0],
                        n = i.target;
                    this._startPos = this._newPos = new o.Point(i.clientX, i.clientY), n.tagName && "a" === n.tagName.toLowerCase() && o.DomUtil.addClass(n, "leaflet-active"), this._holdTimeout = setTimeout(o.bind(function() {
                        this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent("contextmenu", i))
                    }, this), 1e3), o.DomEvent.on(e, "touchmove", this._onMove, this).on(e, "touchend", this._onUp, this)
                }
            },
            _onUp: function(t) {
                if (clearTimeout(this._holdTimeout), o.DomEvent.off(e, "touchmove", this._onMove, this).off(e, "touchend", this._onUp, this), this._fireClick && t && t.changedTouches) {
                    var i = t.changedTouches[0],
                        n = i.target;
                    n && n.tagName && "a" === n.tagName.toLowerCase() && o.DomUtil.removeClass(n, "leaflet-active"), this._isTapValid() && this._simulateEvent("click", i)
                }
            },
            _isTapValid: function() {
                return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
            },
            _onMove: function(t) {
                var e = t.touches[0];
                this._newPos = new o.Point(e.clientX, e.clientY)
            },
            _simulateEvent: function(i, n) {
                var o = e.createEvent("MouseEvents");
                o._simulated = !0, n.target._simulatedClick = !0, o.initMouseEvent(i, !0, !0, t, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), n.target.dispatchEvent(o)
            }
        }), o.Browser.touch && !o.Browser.pointer && o.Map.addInitHook("addHandler", "tap", o.Map.Tap), o.Map.mergeOptions({
            boxZoom: !0
        }), o.Map.BoxZoom = o.Handler.extend({
            initialize: function(t) {
                this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._moved = !1
            },
            addHooks: function() {
                o.DomEvent.on(this._container, "mousedown", this._onMouseDown, this)
            },
            removeHooks: function() {
                o.DomEvent.off(this._container, "mousedown", this._onMouseDown), this._moved = !1
            },
            moved: function() {
                return this._moved
            },
            _onMouseDown: function(t) {
                return this._moved = !1, !t.shiftKey || 1 !== t.which && 1 !== t.button ? !1 : (o.DomUtil.disableTextSelection(), o.DomUtil.disableImageDrag(), this._startLayerPoint = this._map.mouseEventToLayerPoint(t), void o.DomEvent.on(e, "mousemove", this._onMouseMove, this).on(e, "mouseup", this._onMouseUp, this).on(e, "keydown", this._onKeyDown, this))
            },
            _onMouseMove: function(t) {
                this._moved || (this._box = o.DomUtil.create("div", "leaflet-zoom-box", this._pane), o.DomUtil.setPosition(this._box, this._startLayerPoint), this._container.style.cursor = "crosshair", this._map.fire("boxzoomstart"));
                var e = this._startLayerPoint,
                    i = this._box,
                    n = this._map.mouseEventToLayerPoint(t),
                    s = n.subtract(e),
                    a = new o.Point(Math.min(n.x, e.x), Math.min(n.y, e.y));
                o.DomUtil.setPosition(i, a), this._moved = !0, i.style.width = Math.max(0, Math.abs(s.x) - 4) + "px", i.style.height = Math.max(0, Math.abs(s.y) - 4) + "px"
            },
            _finish: function() {
                this._moved && (this._pane.removeChild(this._box), this._container.style.cursor = ""), o.DomUtil.enableTextSelection(), o.DomUtil.enableImageDrag(), o.DomEvent.off(e, "mousemove", this._onMouseMove).off(e, "mouseup", this._onMouseUp).off(e, "keydown", this._onKeyDown)
            },
            _onMouseUp: function(t) {
                this._finish();
                var e = this._map,
                    i = e.mouseEventToLayerPoint(t);
                if (!this._startLayerPoint.equals(i)) {
                    var n = new o.LatLngBounds(e.layerPointToLatLng(this._startLayerPoint), e.layerPointToLatLng(i));
                    e.fitBounds(n), e.fire("boxzoomend", {
                        boxZoomBounds: n
                    })
                }
            },
            _onKeyDown: function(t) {
                27 === t.keyCode && this._finish()
            }
        }), o.Map.addInitHook("addHandler", "boxZoom", o.Map.BoxZoom), o.Map.mergeOptions({
            keyboard: !0,
            keyboardPanOffset: 80,
            keyboardZoomOffset: 1
        }), o.Map.Keyboard = o.Handler.extend({
            keyCodes: {
                left: [37],
                right: [39],
                down: [40],
                up: [38],
                zoomIn: [187, 107, 61, 171],
                zoomOut: [189, 109, 173]
            },
            initialize: function(t) {
                this._map = t, this._setPanOffset(t.options.keyboardPanOffset), this._setZoomOffset(t.options.keyboardZoomOffset)
            },
            addHooks: function() {
                var t = this._map._container; - 1 === t.tabIndex && (t.tabIndex = "0"), o.DomEvent.on(t, "focus", this._onFocus, this).on(t, "blur", this._onBlur, this).on(t, "mousedown", this._onMouseDown, this), this._map.on("focus", this._addHooks, this).on("blur", this._removeHooks, this)
            },
            removeHooks: function() {
                this._removeHooks();
                var t = this._map._container;
                o.DomEvent.off(t, "focus", this._onFocus, this).off(t, "blur", this._onBlur, this).off(t, "mousedown", this._onMouseDown, this), this._map.off("focus", this._addHooks, this).off("blur", this._removeHooks, this)
            },
            _onMouseDown: function() {
                if (!this._focused) {
                    var i = e.body,
                        n = e.documentElement,
                        o = i.scrollTop || n.scrollTop,
                        s = i.scrollLeft || n.scrollLeft;
                    this._map._container.focus(), t.scrollTo(s, o)
                }
            },
            _onFocus: function() {
                this._focused = !0, this._map.fire("focus")
            },
            _onBlur: function() {
                this._focused = !1, this._map.fire("blur")
            },
            _setPanOffset: function(t) {
                var e, i, n = this._panKeys = {},
                    o = this.keyCodes;
                for (e = 0, i = o.left.length; i > e; e++) n[o.left[e]] = [-1 * t, 0];
                for (e = 0, i = o.right.length; i > e; e++) n[o.right[e]] = [t, 0];
                for (e = 0, i = o.down.length; i > e; e++) n[o.down[e]] = [0, t];
                for (e = 0, i = o.up.length; i > e; e++) n[o.up[e]] = [0, -1 * t]
            },
            _setZoomOffset: function(t) {
                var e, i, n = this._zoomKeys = {},
                    o = this.keyCodes;
                for (e = 0, i = o.zoomIn.length; i > e; e++) n[o.zoomIn[e]] = t;
                for (e = 0, i = o.zoomOut.length; i > e; e++) n[o.zoomOut[e]] = -t
            },
            _addHooks: function() {
                o.DomEvent.on(e, "keydown", this._onKeyDown, this)
            },
            _removeHooks: function() {
                o.DomEvent.off(e, "keydown", this._onKeyDown, this)
            },
            _onKeyDown: function(t) {
                var e = t.keyCode,
                    i = this._map;
                if (e in this._panKeys) {
                    if (i._panAnim && i._panAnim._inProgress) return;
                    i.panBy(this._panKeys[e]), i.options.maxBounds && i.panInsideBounds(i.options.maxBounds)
                } else {
                    if (!(e in this._zoomKeys)) return;
                    i.setZoom(i.getZoom() + this._zoomKeys[e])
                }
                o.DomEvent.stop(t)
            }
        }), o.Map.addInitHook("addHandler", "keyboard", o.Map.Keyboard), o.Handler.MarkerDrag = o.Handler.extend({
            initialize: function(t) {
                this._marker = t
            },
            addHooks: function() {
                var t = this._marker._icon;
                this._draggable || (this._draggable = new o.Draggable(t, t)), this._draggable.on("dragstart", this._onDragStart, this).on("drag", this._onDrag, this).on("dragend", this._onDragEnd, this), this._draggable.enable(), o.DomUtil.addClass(this._marker._icon, "leaflet-marker-draggable")
            },
            removeHooks: function() {
                this._draggable.off("dragstart", this._onDragStart, this).off("drag", this._onDrag, this).off("dragend", this._onDragEnd, this), this._draggable.disable(), o.DomUtil.removeClass(this._marker._icon, "leaflet-marker-draggable")
            },
            moved: function() {
                return this._draggable && this._draggable._moved
            },
            _onDragStart: function() {
                this._marker.closePopup().fire("movestart").fire("dragstart")
            },
            _onDrag: function() {
                var t = this._marker,
                    e = t._shadow,
                    i = o.DomUtil.getPosition(t._icon),
                    n = t._map.layerPointToLatLng(i);
                e && o.DomUtil.setPosition(e, i), t._latlng = n, t.fire("move", {
                    latlng: n
                }).fire("drag")
            },
            _onDragEnd: function(t) {
                this._marker.fire("moveend").fire("dragend", t)
            }
        }), o.Control = o.Class.extend({
            options: {
                position: "topright"
            },
            initialize: function(t) {
                o.setOptions(this, t)
            },
            getPosition: function() {
                return this.options.position
            },
            setPosition: function(t) {
                var e = this._map;
                return e && e.removeControl(this), this.options.position = t, e && e.addControl(this), this
            },
            getContainer: function() {
                return this._container
            },
            addTo: function(t) {
                this._map = t;
                var e = this._container = this.onAdd(t),
                    i = this.getPosition(),
                    n = t._controlCorners[i];
                return o.DomUtil.addClass(e, "leaflet-control"), -1 !== i.indexOf("bottom") ? n.insertBefore(e, n.firstChild) : n.appendChild(e), this
            },
            removeFrom: function(t) {
                var e = this.getPosition(),
                    i = t._controlCorners[e];
                return i.removeChild(this._container), this._map = null, this.onRemove && this.onRemove(t), this
            },
            _refocusOnMap: function() {
                this._map && this._map.getContainer().focus()
            }
        }), o.control = function(t) {
            return new o.Control(t)
        }, o.Map.include({
            addControl: function(t) {
                return t.addTo(this), this
            },
            removeControl: function(t) {
                return t.removeFrom(this), this
            },
            _initControlPos: function() {
                function t(t, s) {
                    var a = i + t + " " + i + s;
                    e[t + s] = o.DomUtil.create("div", a, n)
                }
                var e = this._controlCorners = {},
                    i = "leaflet-",
                    n = this._controlContainer = o.DomUtil.create("div", i + "control-container", this._container);
                t("top", "left"), t("top", "right"), t("bottom", "left"), t("bottom", "right")
            },
            _clearControlPos: function() {
                this._container.removeChild(this._controlContainer)
            }
        }), o.Control.Zoom = o.Control.extend({
            options: {
                position: "topleft",
                zoomInText: "+",
                zoomInTitle: "Zoom in",
                zoomOutText: "-",
                zoomOutTitle: "Zoom out"
            },
            onAdd: function(t) {
                var e = "leaflet-control-zoom",
                    i = o.DomUtil.create("div", e + " leaflet-bar");
                return this._map = t, this._zoomInButton = this._createButton(this.options.zoomInText, this.options.zoomInTitle, e + "-in", i, this._zoomIn, this), this._zoomOutButton = this._createButton(this.options.zoomOutText, this.options.zoomOutTitle, e + "-out", i, this._zoomOut, this), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), i
            },
            onRemove: function(t) {
                t.off("zoomend zoomlevelschange", this._updateDisabled, this)
            },
            _zoomIn: function(t) {
                this._map.zoomIn(t.shiftKey ? 3 : 1)
            },
            _zoomOut: function(t) {
                this._map.zoomOut(t.shiftKey ? 3 : 1)
            },
            _createButton: function(t, e, i, n, s, a) {
                var r = o.DomUtil.create("a", i, n);
                r.innerHTML = t, r.href = "#", r.title = e;
                var h = o.DomEvent.stopPropagation;
                return o.DomEvent.on(r, "click", h).on(r, "mousedown", h).on(r, "dblclick", h).on(r, "click", o.DomEvent.preventDefault).on(r, "click", s, a).on(r, "click", this._refocusOnMap, a), r
            },
            _updateDisabled: function() {
                var t = this._map,
                    e = "leaflet-disabled";
                o.DomUtil.removeClass(this._zoomInButton, e), o.DomUtil.removeClass(this._zoomOutButton, e), t._zoom === t.getMinZoom() && o.DomUtil.addClass(this._zoomOutButton, e), t._zoom === t.getMaxZoom() && o.DomUtil.addClass(this._zoomInButton, e)
            }
        }), o.Map.mergeOptions({
            zoomControl: !0
        }), o.Map.addInitHook(function() {
            this.options.zoomControl && (this.zoomControl = new o.Control.Zoom, this.addControl(this.zoomControl))
        }), o.control.zoom = function(t) {
            return new o.Control.Zoom(t)
        }, o.Control.Attribution = o.Control.extend({
            options: {
                position: "bottomright",
                prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
            },
            initialize: function(t) {
                o.setOptions(this, t), this._attributions = {}
            },
            onAdd: function(t) {
                this._container = o.DomUtil.create("div", "leaflet-control-attribution"), o.DomEvent.disableClickPropagation(this._container);
                for (var e in t._layers) t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
                return t.on("layeradd", this._onLayerAdd, this).on("layerremove", this._onLayerRemove, this), this._update(), this._container
            },
            onRemove: function(t) {
                t.off("layeradd", this._onLayerAdd).off("layerremove", this._onLayerRemove)
            },
            setPrefix: function(t) {
                return this.options.prefix = t, this._update(), this
            },
            addAttribution: function(t) {
                return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this) : void 0
            },
            removeAttribution: function(t) {
                return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : void 0
            },
            _update: function() {
                if (this._map) {
                    var t = [];
                    for (var e in this._attributions) this._attributions[e] && t.push(e);
                    var i = [];
                    this.options.prefix && i.push(this.options.prefix), t.length && i.push(t.join(", ")), this._container.innerHTML = i.join(" | ")
                }
            },
            _onLayerAdd: function(t) {
                t.layer.getAttribution && this.addAttribution(t.layer.getAttribution())
            },
            _onLayerRemove: function(t) {
                t.layer.getAttribution && this.removeAttribution(t.layer.getAttribution())
            }
        }), o.Map.mergeOptions({
            attributionControl: !0
        }), o.Map.addInitHook(function() {
            this.options.attributionControl && (this.attributionControl = (new o.Control.Attribution).addTo(this))
        }), o.control.attribution = function(t) {
            return new o.Control.Attribution(t)
        }, o.Control.Scale = o.Control.extend({
            options: {
                position: "bottomleft",
                maxWidth: 100,
                metric: !0,
                imperial: !0,
                updateWhenIdle: !1
            },
            onAdd: function(t) {
                this._map = t;
                var e = "leaflet-control-scale",
                    i = o.DomUtil.create("div", e),
                    n = this.options;
                return this._addScales(n, e, i), t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), i
            },
            onRemove: function(t) {
                t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
            },
            _addScales: function(t, e, i) {
                t.metric && (this._mScale = o.DomUtil.create("div", e + "-line", i)), t.imperial && (this._iScale = o.DomUtil.create("div", e + "-line", i))
            },
            _update: function() {
                var t = this._map.getBounds(),
                    e = t.getCenter().lat,
                    i = 6378137 * Math.PI * Math.cos(e * Math.PI / 180),
                    n = i * (t.getNorthEast().lng - t.getSouthWest().lng) / 180,
                    o = this._map.getSize(),
                    s = this.options,
                    a = 0;
                o.x > 0 && (a = n * (s.maxWidth / o.x)), this._updateScales(s, a)
            },
            _updateScales: function(t, e) {
                t.metric && e && this._updateMetric(e), t.imperial && e && this._updateImperial(e)
            },
            _updateMetric: function(t) {
                var e = this._getRoundNum(t);
                this._mScale.style.width = this._getScaleWidth(e / t) + "px", this._mScale.innerHTML = 1e3 > e ? e + " m" : e / 1e3 + " km"
            },
            _updateImperial: function(t) {
                var e, i, n, o = 3.2808399 * t,
                    s = this._iScale;
                o > 5280 ? (e = o / 5280, i = this._getRoundNum(e), s.style.width = this._getScaleWidth(i / e) + "px", s.innerHTML = i + " mi") : (n = this._getRoundNum(o), s.style.width = this._getScaleWidth(n / o) + "px", s.innerHTML = n + " ft")
            },
            _getScaleWidth: function(t) {
                return Math.round(this.options.maxWidth * t) - 10
            },
            _getRoundNum: function(t) {
                var e = Math.pow(10, (Math.floor(t) + "").length - 1),
                    i = t / e;
                return i = i >= 10 ? 10 : i >= 5 ? 5 : i >= 3 ? 3 : i >= 2 ? 2 : 1, e * i
            }
        }), o.control.scale = function(t) {
            return new o.Control.Scale(t)
        }, o.Control.Layers = o.Control.extend({
            options: {
                collapsed: !0,
                position: "topright",
                autoZIndex: !0
            },
            initialize: function(t, e, i) {
                o.setOptions(this, i), this._layers = {}, this._lastZIndex = 0, this._handlingClick = !1;
                for (var n in t) this._addLayer(t[n], n);
                for (n in e) this._addLayer(e[n], n, !0)
            },
            onAdd: function(t) {
                return this._initLayout(), this._update(), t.on("layeradd", this._onLayerChange, this).on("layerremove", this._onLayerChange, this), this._container
            },
            onRemove: function(t) {
                t.off("layeradd", this._onLayerChange, this).off("layerremove", this._onLayerChange, this)
            },
            addBaseLayer: function(t, e) {
                return this._addLayer(t, e), this._update(), this
            },
            addOverlay: function(t, e) {
                return this._addLayer(t, e, !0), this._update(), this
            },
            removeLayer: function(t) {
                var e = o.stamp(t);
                return delete this._layers[e], this._update(), this
            },
            _initLayout: function() {
                var t = "leaflet-control-layers",
                    e = this._container = o.DomUtil.create("div", t);
                e.setAttribute("aria-haspopup", !0), o.Browser.touch ? o.DomEvent.on(e, "click", o.DomEvent.stopPropagation) : o.DomEvent.disableClickPropagation(e).disableScrollPropagation(e);
                var i = this._form = o.DomUtil.create("form", t + "-list");
                if (this.options.collapsed) {
                    o.Browser.android || o.DomEvent.on(e, "mouseover", this._expand, this).on(e, "mouseout", this._collapse, this);
                    var n = this._layersLink = o.DomUtil.create("a", t + "-toggle", e);
                    n.href = "#", n.title = "Layers", o.Browser.touch ? o.DomEvent.on(n, "click", o.DomEvent.stop).on(n, "click", this._expand, this) : o.DomEvent.on(n, "focus", this._expand, this), o.DomEvent.on(i, "click", function() {
                        setTimeout(o.bind(this._onInputClick, this), 0)
                    }, this), this._map.on("click", this._collapse, this)
                } else this._expand();
                this._baseLayersList = o.DomUtil.create("div", t + "-base", i), this._separator = o.DomUtil.create("div", t + "-separator", i), this._overlaysList = o.DomUtil.create("div", t + "-overlays", i), e.appendChild(i)
            },
            _addLayer: function(t, e, i) {
                var n = o.stamp(t);
                this._layers[n] = {
                    layer: t,
                    name: e,
                    overlay: i
                }, this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex))
            },
            _update: function() {
                if (this._container) {
                    this._baseLayersList.innerHTML = "", this._overlaysList.innerHTML = "";
                    var t, e, i = !1,
                        n = !1;
                    for (t in this._layers) e = this._layers[t], this._addItem(e), n = n || e.overlay, i = i || !e.overlay;
                    this._separator.style.display = n && i ? "" : "none"
                }
            },
            _onLayerChange: function(t) {
                var e = this._layers[o.stamp(t.layer)];
                if (e) {
                    this._handlingClick || this._update();
                    var i = e.overlay ? "layeradd" === t.type ? "overlayadd" : "overlayremove" : "layeradd" === t.type ? "baselayerchange" : null;
                    i && this._map.fire(i, e)
                }
            },
            _createRadioElement: function(t, i) {
                var n = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"';
                i && (n += ' checked="checked"'), n += "/>";
                var o = e.createElement("div");
                return o.innerHTML = n, o.firstChild
            },
            _addItem: function(t) {
                var i, n = e.createElement("label"),
                    s = this._map.hasLayer(t.layer);
                t.overlay ? (i = e.createElement("input"), i.type = "checkbox", i.className = "leaflet-control-layers-selector", i.defaultChecked = s) : i = this._createRadioElement("leaflet-base-layers", s), i.layerId = o.stamp(t.layer), o.DomEvent.on(i, "click", this._onInputClick, this);
                var a = e.createElement("span");
                a.innerHTML = " " + t.name, n.appendChild(i), n.appendChild(a);
                var r = t.overlay ? this._overlaysList : this._baseLayersList;
                return r.appendChild(n), n
            },
            _onInputClick: function() {
                var t, e, i, n = this._form.getElementsByTagName("input"),
                    o = n.length;
                for (this._handlingClick = !0, t = 0; o > t; t++) e = n[t], i = this._layers[e.layerId], e.checked && !this._map.hasLayer(i.layer) ? this._map.addLayer(i.layer) : !e.checked && this._map.hasLayer(i.layer) && this._map.removeLayer(i.layer);
                this._handlingClick = !1, this._refocusOnMap()
            },
            _expand: function() {
                o.DomUtil.addClass(this._container, "leaflet-control-layers-expanded")
            },
            _collapse: function() {
                this._container.className = this._container.className.replace(" leaflet-control-layers-expanded", "")
            }
        }), o.control.layers = function(t, e, i) {
            return new o.Control.Layers(t, e, i)
        }, o.PosAnimation = o.Class.extend({
            includes: o.Mixin.Events,
            run: function(t, e, i, n) {
                this.stop(), this._el = t, this._inProgress = !0, this._newPos = e, this.fire("start"), t.style[o.DomUtil.TRANSITION] = "all " + (i || .25) + "s cubic-bezier(0,0," + (n || .5) + ",1)", o.DomEvent.on(t, o.DomUtil.TRANSITION_END, this._onTransitionEnd, this), o.DomUtil.setPosition(t, e), o.Util.falseFn(t.offsetWidth), this._stepTimer = setInterval(o.bind(this._onStep, this), 50)
            },
            stop: function() {
                this._inProgress && (o.DomUtil.setPosition(this._el, this._getPos()), this._onTransitionEnd(), o.Util.falseFn(this._el.offsetWidth))
            },
            _onStep: function() {
                var t = this._getPos();
                return t ? (this._el._leaflet_pos = t, void this.fire("step")) : void this._onTransitionEnd()
            },
            _transformRe: /([-+]?(?:\d*\.)?\d+)\D*, ([-+]?(?:\d*\.)?\d+)\D*\)/,
            _getPos: function() {
                var e, i, n, s = this._el,
                    a = t.getComputedStyle(s);
                if (o.Browser.any3d) {
                    if (n = a[o.DomUtil.TRANSFORM].match(this._transformRe), !n) return;
                    e = parseFloat(n[1]), i = parseFloat(n[2])
                } else e = parseFloat(a.left), i = parseFloat(a.top);
                return new o.Point(e, i, !0)
            },
            _onTransitionEnd: function() {
                o.DomEvent.off(this._el, o.DomUtil.TRANSITION_END, this._onTransitionEnd, this), this._inProgress && (this._inProgress = !1, this._el.style[o.DomUtil.TRANSITION] = "", this._el._leaflet_pos = this._newPos, clearInterval(this._stepTimer), this.fire("step").fire("end"))
            }
        }), o.Map.include({
            setView: function(t, e, n) {
                if (e = e === i ? this._zoom : this._limitZoom(e), t = this._limitCenter(o.latLng(t), e, this.options.maxBounds), n = n || {}, this._panAnim && this._panAnim.stop(), this._loaded && !n.reset && n !== !0) {
                    n.animate !== i && (n.zoom = o.extend({
                        animate: n.animate
                    }, n.zoom), n.pan = o.extend({
                        animate: n.animate
                    }, n.pan));
                    var s = this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, n.zoom) : this._tryAnimatedPan(t, n.pan);
                    if (s) return clearTimeout(this._sizeTimer), this
                }
                return this._resetView(t, e), this
            },
            panBy: function(t, e) {
                if (t = o.point(t).round(), e = e || {}, !t.x && !t.y) return this;
                if (this._panAnim || (this._panAnim = new o.PosAnimation, this._panAnim.on({
                        step: this._onPanTransitionStep,
                        end: this._onPanTransitionEnd
                    }, this)), e.noMoveStart || this.fire("movestart"), e.animate !== !1) {
                    o.DomUtil.addClass(this._mapPane, "leaflet-pan-anim");
                    var i = this._getMapPanePos().subtract(t);
                    this._panAnim.run(this._mapPane, i, e.duration || .25, e.easeLinearity)
                } else this._rawPanBy(t), this.fire("move").fire("moveend");
                return this
            },
            _onPanTransitionStep: function() {
                this.fire("move")
            },
            _onPanTransitionEnd: function() {
                o.DomUtil.removeClass(this._mapPane, "leaflet-pan-anim"), this.fire("moveend")
            },
            _tryAnimatedPan: function(t, e) {
                var i = this._getCenterOffset(t)._floor();
                return (e && e.animate) === !0 || this.getSize().contains(i) ? (this.panBy(i, e), !0) : !1
            }
        }), o.PosAnimation = o.DomUtil.TRANSITION ? o.PosAnimation : o.PosAnimation.extend({
            run: function(t, e, i, n) {
                this.stop(), this._el = t, this._inProgress = !0, this._duration = i || .25, this._easeOutPower = 1 / Math.max(n || .5, .2), this._startPos = o.DomUtil.getPosition(t), this._offset = e.subtract(this._startPos), this._startTime = +new Date, this.fire("start"), this._animate()
            },
            stop: function() {
                this._inProgress && (this._step(), this._complete())
            },
            _animate: function() {
                this._animId = o.Util.requestAnimFrame(this._animate, this), this._step()
            },
            _step: function() {
                var t = +new Date - this._startTime,
                    e = 1e3 * this._duration;
                e > t ? this._runFrame(this._easeOut(t / e)) : (this._runFrame(1), this._complete())
            },
            _runFrame: function(t) {
                var e = this._startPos.add(this._offset.multiplyBy(t));
                o.DomUtil.setPosition(this._el, e), this.fire("step")
            },
            _complete: function() {
                o.Util.cancelAnimFrame(this._animId), this._inProgress = !1, this.fire("end")
            },
            _easeOut: function(t) {
                return 1 - Math.pow(1 - t, this._easeOutPower)
            }
        }), o.Map.mergeOptions({
            zoomAnimation: !0,
            zoomAnimationThreshold: 4
        }), o.DomUtil.TRANSITION && o.Map.addInitHook(function() {
            this._zoomAnimated = this.options.zoomAnimation && o.DomUtil.TRANSITION && o.Browser.any3d && !o.Browser.android23 && !o.Browser.mobileOpera, this._zoomAnimated && o.DomEvent.on(this._mapPane, o.DomUtil.TRANSITION_END, this._catchTransitionEnd, this)
        }), o.Map.include(o.DomUtil.TRANSITION ? {
            _catchTransitionEnd: function(t) {
                this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd()
            },
            _nothingToAnimate: function() {
                return !this._container.getElementsByClassName("leaflet-zoom-animated").length
            },
            _tryAnimatedZoom: function(t, e, i) {
                if (this._animatingZoom) return !0;
                if (i = i || {}, !this._zoomAnimated || i.animate === !1 || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold) return !1;
                var n = this.getZoomScale(e),
                    o = this._getCenterOffset(t)._divideBy(1 - 1 / n),
                    s = this._getCenterLayerPoint()._add(o);
                return i.animate === !0 || this.getSize().contains(o) ? (this.fire("movestart").fire("zoomstart"), this._animateZoom(t, e, s, n, null, !0), !0) : !1
            },
            _animateZoom: function(t, e, i, n, s, a, r) {
                r || (this._animatingZoom = !0), o.DomUtil.addClass(this._mapPane, "leaflet-zoom-anim"), this._animateToCenter = t, this._animateToZoom = e, o.Draggable && (o.Draggable._disabled = !0), o.Util.requestAnimFrame(function() {
                    this.fire("zoomanim", {
                        center: t,
                        zoom: e,
                        origin: i,
                        scale: n,
                        delta: s,
                        backwards: a
                    })
                }, this)
            },
            _onZoomTransitionEnd: function() {
                this._animatingZoom = !1, o.DomUtil.removeClass(this._mapPane, "leaflet-zoom-anim"), this._resetView(this._animateToCenter, this._animateToZoom, !0, !0), o.Draggable && (o.Draggable._disabled = !1)
            }
        } : {}), o.TileLayer.include({
            _animateZoom: function(t) {
                this._animating || (this._animating = !0, this._prepareBgBuffer());
                var e = this._bgBuffer,
                    i = o.DomUtil.TRANSFORM,
                    n = t.delta ? o.DomUtil.getTranslateString(t.delta) : e.style[i],
                    s = o.DomUtil.getScaleString(t.scale, t.origin);
                e.style[i] = t.backwards ? s + " " + n : n + " " + s
            },
            _endZoomAnim: function() {
                var t = this._tileContainer,
                    e = this._bgBuffer;
                t.style.visibility = "", t.parentNode.appendChild(t), o.Util.falseFn(e.offsetWidth), this._animating = !1
            },
            _clearBgBuffer: function() {
                var t = this._map;
                !t || t._animatingZoom || t.touchZoom._zooming || (this._bgBuffer.innerHTML = "", this._bgBuffer.style[o.DomUtil.TRANSFORM] = "")
            },
            _prepareBgBuffer: function() {
                var t = this._tileContainer,
                    e = this._bgBuffer,
                    i = this._getLoadedTilesPercentage(e),
                    n = this._getLoadedTilesPercentage(t);
                return e && i > .5 && .5 > n ? (t.style.visibility = "hidden", void this._stopLoadingImages(t)) : (e.style.visibility = "hidden", e.style[o.DomUtil.TRANSFORM] = "", this._tileContainer = e, e = this._bgBuffer = t, this._stopLoadingImages(e), void clearTimeout(this._clearBgBufferTimer))
            },
            _getLoadedTilesPercentage: function(t) {
                var e, i, n = t.getElementsByTagName("img"),
                    o = 0;
                for (e = 0, i = n.length; i > e; e++) n[e].complete && o++;
                return o / i
            },
            _stopLoadingImages: function(t) {
                var e, i, n, s = Array.prototype.slice.call(t.getElementsByTagName("img"));
                for (e = 0, i = s.length; i > e; e++) n = s[e], n.complete || (n.onload = o.Util.falseFn, n.onerror = o.Util.falseFn, n.src = o.Util.emptyImageUrl, n.parentNode.removeChild(n))
            }
        }), o.Map.include({
            _defaultLocateOptions: {
                watch: !1,
                setView: !1,
                maxZoom: 1 / 0,
                timeout: 1e4,
                maximumAge: 0,
                enableHighAccuracy: !1
            },
            locate: function(t) {
                if (t = this._locateOptions = o.extend(this._defaultLocateOptions, t), !navigator.geolocation) return this._handleGeolocationError({
                    code: 0,
                    message: "Geolocation not supported."
                }), this;
                var e = o.bind(this._handleGeolocationResponse, this),
                    i = o.bind(this._handleGeolocationError, this);
                return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, i, t) : navigator.geolocation.getCurrentPosition(e, i, t), this
            },
            stopLocate: function() {
                return navigator.geolocation && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this
            },
            _handleGeolocationError: function(t) {
                var e = t.code,
                    i = t.message || (1 === e ? "permission denied" : 2 === e ? "position unavailable" : "timeout");
                this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
                    code: e,
                    message: "Geolocation error: " + i + "."
                })
            },
            _handleGeolocationResponse: function(t) {
                var e = t.coords.latitude,
                    i = t.coords.longitude,
                    n = new o.LatLng(e, i),
                    s = 180 * t.coords.accuracy / 40075017,
                    a = s / Math.cos(o.LatLng.DEG_TO_RAD * e),
                    r = o.latLngBounds([e - s, i - a], [e + s, i + a]),
                    h = this._locateOptions;
                if (h.setView) {
                    var l = Math.min(this.getBoundsZoom(r), h.maxZoom);
                    this.setView(n, l)
                }
                var u = {
                    latlng: n,
                    bounds: r,
                    timestamp: t.timestamp
                };
                for (var c in t.coords) "number" == typeof t.coords[c] && (u[c] = t.coords[c]);
                this.fire("locationfound", u)
            }
        })
}(window, document);

/*!
 * numeral.js
 * version : 1.5.3
 * author : Adam Draper
 * license : MIT
 * http://adamwdraper.github.com/Numeral-js/
 */
(function(){function a(a){this._value=a}function b(a,b,c,d){var e,f,g=Math.pow(10,b);return f=(c(a*g)/g).toFixed(b),d&&(e=new RegExp("0{1,"+d+"}$"),f=f.replace(e,"")),f}function c(a,b,c){var d;return d=b.indexOf("$")>-1?e(a,b,c):b.indexOf("%")>-1?f(a,b,c):b.indexOf(":")>-1?g(a,b):i(a._value,b,c)}function d(a,b){var c,d,e,f,g,i=b,j=["KB","MB","GB","TB","PB","EB","ZB","YB"],k=!1;if(b.indexOf(":")>-1)a._value=h(b);else if(b===q)a._value=0;else{for("."!==o[p].delimiters.decimal&&(b=b.replace(/\./g,"").replace(o[p].delimiters.decimal,".")),c=new RegExp("[^a-zA-Z]"+o[p].abbreviations.thousand+"(?:\\)|(\\"+o[p].currency.symbol+")?(?:\\))?)?$"),d=new RegExp("[^a-zA-Z]"+o[p].abbreviations.million+"(?:\\)|(\\"+o[p].currency.symbol+")?(?:\\))?)?$"),e=new RegExp("[^a-zA-Z]"+o[p].abbreviations.billion+"(?:\\)|(\\"+o[p].currency.symbol+")?(?:\\))?)?$"),f=new RegExp("[^a-zA-Z]"+o[p].abbreviations.trillion+"(?:\\)|(\\"+o[p].currency.symbol+")?(?:\\))?)?$"),g=0;g<=j.length&&!(k=b.indexOf(j[g])>-1?Math.pow(1024,g+1):!1);g++);a._value=(k?k:1)*(i.match(c)?Math.pow(10,3):1)*(i.match(d)?Math.pow(10,6):1)*(i.match(e)?Math.pow(10,9):1)*(i.match(f)?Math.pow(10,12):1)*(b.indexOf("%")>-1?.01:1)*((b.split("-").length+Math.min(b.split("(").length-1,b.split(")").length-1))%2?1:-1)*Number(b.replace(/[^0-9\.]+/g,"")),a._value=k?Math.ceil(a._value):a._value}return a._value}function e(a,b,c){var d,e,f=b.indexOf("$"),g=b.indexOf("("),h=b.indexOf("-"),j="";return b.indexOf(" $")>-1?(j=" ",b=b.replace(" $","")):b.indexOf("$ ")>-1?(j=" ",b=b.replace("$ ","")):b=b.replace("$",""),e=i(a._value,b,c),1>=f?e.indexOf("(")>-1||e.indexOf("-")>-1?(e=e.split(""),d=1,(g>f||h>f)&&(d=0),e.splice(d,0,o[p].currency.symbol+j),e=e.join("")):e=o[p].currency.symbol+j+e:e.indexOf(")")>-1?(e=e.split(""),e.splice(-1,0,j+o[p].currency.symbol),e=e.join("")):e=e+j+o[p].currency.symbol,e}function f(a,b,c){var d,e="",f=100*a._value;return b.indexOf(" %")>-1?(e=" ",b=b.replace(" %","")):b=b.replace("%",""),d=i(f,b,c),d.indexOf(")")>-1?(d=d.split(""),d.splice(-1,0,e+"%"),d=d.join("")):d=d+e+"%",d}function g(a){var b=Math.floor(a._value/60/60),c=Math.floor((a._value-60*b*60)/60),d=Math.round(a._value-60*b*60-60*c);return b+":"+(10>c?"0"+c:c)+":"+(10>d?"0"+d:d)}function h(a){var b=a.split(":"),c=0;return 3===b.length?(c+=60*Number(b[0])*60,c+=60*Number(b[1]),c+=Number(b[2])):2===b.length&&(c+=60*Number(b[0]),c+=Number(b[1])),Number(c)}function i(a,c,d){var e,f,g,h,i,j,k=!1,l=!1,m=!1,n="",r=!1,s=!1,t=!1,u=!1,v=!1,w="",x="",y=Math.abs(a),z=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],A="",B=!1;if(0===a&&null!==q)return q;if(c.indexOf("(")>-1?(k=!0,c=c.slice(1,-1)):c.indexOf("+")>-1&&(l=!0,c=c.replace(/\+/g,"")),c.indexOf("a")>-1&&(r=c.indexOf("aK")>=0,s=c.indexOf("aM")>=0,t=c.indexOf("aB")>=0,u=c.indexOf("aT")>=0,v=r||s||t||u,c.indexOf(" a")>-1?(n=" ",c=c.replace(" a","")):c=c.replace("a",""),y>=Math.pow(10,12)&&!v||u?(n+=o[p].abbreviations.trillion,a/=Math.pow(10,12)):y<Math.pow(10,12)&&y>=Math.pow(10,9)&&!v||t?(n+=o[p].abbreviations.billion,a/=Math.pow(10,9)):y<Math.pow(10,9)&&y>=Math.pow(10,6)&&!v||s?(n+=o[p].abbreviations.million,a/=Math.pow(10,6)):(y<Math.pow(10,6)&&y>=Math.pow(10,3)&&!v||r)&&(n+=o[p].abbreviations.thousand,a/=Math.pow(10,3))),c.indexOf("b")>-1)for(c.indexOf(" b")>-1?(w=" ",c=c.replace(" b","")):c=c.replace("b",""),g=0;g<=z.length;g++)if(e=Math.pow(1024,g),f=Math.pow(1024,g+1),a>=e&&f>a){w+=z[g],e>0&&(a/=e);break}return c.indexOf("o")>-1&&(c.indexOf(" o")>-1?(x=" ",c=c.replace(" o","")):c=c.replace("o",""),x+=o[p].ordinal(a)),c.indexOf("[.]")>-1&&(m=!0,c=c.replace("[.]",".")),h=a.toString().split(".")[0],i=c.split(".")[1],j=c.indexOf(","),i?(i.indexOf("[")>-1?(i=i.replace("]",""),i=i.split("["),A=b(a,i[0].length+i[1].length,d,i[1].length)):A=b(a,i.length,d),h=A.split(".")[0],A=A.split(".")[1].length?o[p].delimiters.decimal+A.split(".")[1]:"",m&&0===Number(A.slice(1))&&(A="")):h=b(a,null,d),h.indexOf("-")>-1&&(h=h.slice(1),B=!0),j>-1&&(h=h.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+o[p].delimiters.thousands)),0===c.indexOf(".")&&(h=""),(k&&B?"(":"")+(!k&&B?"-":"")+(!B&&l?"+":"")+h+A+(x?x:"")+(n?n:"")+(w?w:"")+(k&&B?")":"")}function j(a,b){o[a]=b}function k(a){var b=a.toString().split(".");return b.length<2?1:Math.pow(10,b[1].length)}function l(){var a=Array.prototype.slice.call(arguments);return a.reduce(function(a,b){var c=k(a),d=k(b);return c>d?c:d},-1/0)}var m,n="1.5.3",o={},p="en",q=null,r="0,0",s="undefined"!=typeof module&&module.exports;m=function(b){return m.isNumeral(b)?b=b.value():0===b||"undefined"==typeof b?b=0:Number(b)||(b=m.fn.unformat(b)),new a(Number(b))},m.version=n,m.isNumeral=function(b){return b instanceof a},m.language=function(a,b){if(!a)return p;if(a&&!b){if(!o[a])throw new Error("Unknown language : "+a);p=a}return(b||!o[a])&&j(a,b),m},m.languageData=function(a){if(!a)return o[p];if(!o[a])throw new Error("Unknown language : "+a);return o[a]},m.language("en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(a){var b=a%10;return 1===~~(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th"},currency:{symbol:"$"}}),m.zeroFormat=function(a){q="string"==typeof a?a:null},m.defaultFormat=function(a){r="string"==typeof a?a:"0.0"},"function"!=typeof Array.prototype.reduce&&(Array.prototype.reduce=function(a,b){"use strict";if(null===this||"undefined"==typeof this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof a)throw new TypeError(a+" is not a function");var c,d,e=this.length>>>0,f=!1;for(1<arguments.length&&(d=b,f=!0),c=0;e>c;++c)this.hasOwnProperty(c)&&(f?d=a(d,this[c],c,this):(d=this[c],f=!0));if(!f)throw new TypeError("Reduce of empty array with no initial value");return d}),m.fn=a.prototype={clone:function(){return m(this)},format:function(a,b){return c(this,a?a:r,void 0!==b?b:Math.round)},unformat:function(a){return"[object Number]"===Object.prototype.toString.call(a)?a:d(this,a?a:r)},value:function(){return this._value},valueOf:function(){return this._value},set:function(a){return this._value=Number(a),this},add:function(a){function b(a,b){return a+c*b}var c=l.call(null,this._value,a);return this._value=[this._value,a].reduce(b,0)/c,this},subtract:function(a){function b(a,b){return a-c*b}var c=l.call(null,this._value,a);return this._value=[a].reduce(b,this._value*c)/c,this},multiply:function(a){function b(a,b){var c=l(a,b);return a*c*b*c/(c*c)}return this._value=[this._value,a].reduce(b,1),this},divide:function(a){function b(a,b){var c=l(a,b);return a*c/(b*c)}return this._value=[this._value,a].reduce(b),this},difference:function(a){return Math.abs(m(this._value).subtract(a).value())}},s&&(module.exports=m),"undefined"==typeof ender&&(this.numeral=m),"function"==typeof define&&define.amd&&define([],function(){return m})}).call(this);