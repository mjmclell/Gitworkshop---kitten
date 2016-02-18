!function(e){"use strict";var t="undefined"==typeof window?null:window;"function"==typeof define&&define.amd?define(function(){return e(t)}):"undefined"!=typeof module?module.exports=e(t):t.DOMPurify=e(t)}(function e(t){"use strict";var n=function(t){return e(t)};if(n.version="0.7.2",!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var r=t.document,o=r,i=t.DocumentFragment,a=t.HTMLTemplateElement,l=t.NodeFilter,s=t.NamedNodeMap||t.MozNamedAttrMap,c=t.Text,d=t.Comment,m=t.DOMParser;"function"==typeof a&&(r=r.createElement("template").content.ownerDocument);var u=r.implementation,p=r.createNodeIterator,f=r.getElementsByTagName,h=r.createDocumentFragment,y=o.importNode,g={};n.isSupported="undefined"!=typeof u.createHTMLDocument&&9!==r.documentMode;var b=function(e,t){for(var n=t.length;n--;)e[t[n]]=!0;return e},v=function(e){var t,n={};for(t in e)e.hasOwnProperty(t)&&(n[t]=e[t]);return n},T=null,A=b({},["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr","svg","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","switch","symbol","text","textpath","title","tref","tspan","view","vkern","math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmuliscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mpspace","msqrt","mystyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","#text"]),k=null,x=b({},["accept","action","align","alt","autocomplete","background","bgcolor","border","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","coords","datetime","default","dir","disabled","download","enctype","face","for","headers","height","hidden","high","href","hreflang","id","ismap","label","lang","list","loop","low","max","maxlength","media","method","min","multiple","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","rows","rowspan","spellcheck","scope","selected","shape","size","span","srclang","start","src","step","style","summary","tabindex","title","type","usemap","valign","value","width","xmlns","accent-height","accumulate","additivive","alignment-baseline","ascent","azimuth","baseline-shift","bias","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dy","dy","direction","display","divisor","dur","elevation","end","fill","fill-opacity","fill-rule","filter","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","image-rendering","in","in2","k1","k2","k3","k4","kerning","letter-spacing","lighting-color","local","marker-end","marker-mid","marker-start","max","mask","mode","min","offset","operator","opacity","order","overflow","paint-order","path","points","r","rx","ry","radius","restart","scale","seed","shape-rendering","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","transform","text-anchor","text-decoration","text-rendering","u1","u2","viewbox","visibility","word-spacing","wrap","writing-mode","x","x1","x2","y","y1","y2","z","accent","accentunder","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","display","displaystyle","fence","frame","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),E=null,w=null,M=!0,O=!1,D=!1,N=!1,S=!1,_=!1,L=!1,z=!0,R=!0,C=b({},["audio","head","math","script","style","svg","video"]),H=null,F=r.createElement("form"),I=function(e){"object"!=typeof e&&(e={}),T="ALLOWED_TAGS"in e?b({},e.ALLOWED_TAGS):A,k="ALLOWED_ATTR"in e?b({},e.ALLOWED_ATTR):x,E="FORBID_TAGS"in e?b({},e.FORBID_TAGS):{},w="FORBID_ATTR"in e?b({},e.FORBID_ATTR):{},M=e.ALLOW_DATA_ATTR!==!1,O=e.SAFE_FOR_JQUERY||!1,D=e.SAFE_FOR_TEMPLATES||!1,N=e.WHOLE_DOCUMENT||!1,S=e.RETURN_DOM||!1,_=e.RETURN_DOM_FRAGMENT||!1,L=e.RETURN_DOM_IMPORT||!1,z=e.SANITIZE_DOM!==!1,R=e.KEEP_CONTENT!==!1,_&&(S=!0),e.ADD_TAGS&&(T===A&&(T=v(T)),b(T,e.ADD_TAGS)),e.ADD_ATTR&&(k===x&&(k=v(k)),b(k,e.ADD_ATTR)),R&&(T["#text"]=!0),Object&&"freeze"in Object&&Object.freeze(e),H=e},j=function(e){try{e.parentNode.removeChild(e)}catch(t){e.outerHTML=""}},G=function(e){var t,n;try{t=(new m).parseFromString(e,"text/html")}catch(e){}return t||(t=u.createHTMLDocument(""),n=t.body,n.parentNode.removeChild(n.parentNode.firstElementChild),n.outerHTML=e),"function"==typeof t.getElementsByTagName?t.getElementsByTagName(N?"html":"body")[0]:f.call(t,N?"html":"body")[0]},W=function(e){return p.call(e.ownerDocument||e,e,l.SHOW_ELEMENT|l.SHOW_COMMENT|l.SHOW_TEXT,function(){return l.FILTER_ACCEPT},!1)},B=function(e){return e instanceof c||e instanceof d?!1:"string"==typeof e.nodeName&&"string"==typeof e.textContent&&"function"==typeof e.removeChild&&e.attributes instanceof s&&"function"==typeof e.removeAttribute&&"function"==typeof e.setAttribute?!1:!0},q=function(e){if(Y("beforeSanitizeElements",e,null),B(e))return j(e),!0;var t=e.nodeName.toLowerCase();if(Y("uponSanitizeElement",e,{tagName:t}),!T[t]||E[t]){if(R&&!C[t]&&"function"==typeof e.insertAdjacentHTML)try{e.insertAdjacentHTML("AfterEnd",e.innerHTML)}catch(e){}return j(e),!0}if(!O||e.firstElementChild||e.content&&e.content.firstElementChild||(e.innerHTML=e.textContent.replace(/</g,"&lt;")),3===e.nodeType&&D){var n=e.textContent;n=n.replace(K," "),n=n.replace(Q," "),e.textContent=n}return Y("afterSanitizeElements",e,null),!1},P=function(e){Y("beforeSanitizeAttributes",e,null);var n=e.attributes;if(n){for(var o,i,a,l,s,c={attrName:"",attrValue:"",keepAttr:!0},d=n.length;d--;)if(o=n[d],i=o.name,a=o.value,l=i.toLowerCase(),c.attrName=l,c.attrValue=a,c.keepAttr=!0,Y("uponSanitizeAttribute",e,c),a=c.attrValue,"name"===l&&"IMG"===e.nodeName&&n.id?(s=n.id,n=Array.prototype.slice.apply(n),e.removeAttribute("id"),e.removeAttribute(i),n.indexOf(s)>d&&e.setAttribute("id",s.value)):("id"===i&&e.setAttribute(i,""),e.removeAttribute(i)),c.keepAttr&&(!z||"id"!==l&&"name"!==l||!(a in t||a in r||a in F))&&(k[l]&&!w[l]||!D&&M&&U.test(l))&&(!V.test(a.replace(J,""))||"src"===l&&0===a.indexOf("data:")&&"IMG"===e.nodeName))try{D&&(a=a.replace(K," "),a=a.replace(Q," "),e.setAttribute(i,a)),e.setAttribute(i,a)}catch(e){}Y("afterSanitizeAttributes",e,null)}},U=/^data-[\w.\u00B7-\uFFFF-]/,V=/^(?:\w+script|data):/i,J=/[\x00-\x20\xA0\u1680\u180E\u2000-\u2029\u205f\u3000]/g,K=/\{\{.*|.*\}\}/gm,Q=/<%.*|.*%>/gm,X=function(e){var t,n=W(e);for(Y("beforeSanitizeShadowDOM",e,null);t=n.nextNode();)Y("uponSanitizeShadowNode",t,null),q(t)||(t.content instanceof i&&X(t.content),P(t));Y("afterSanitizeShadowDOM",e,null)},Y=function(e,t,r){g[e]&&g[e].forEach(function(e){e.call(n,t,r,H)})};return n.sanitize=function(e,r){if(!e)return"";if(e instanceof Array&&(e=e.toString()),!n.isSupported)return"object"==typeof t.toStaticHTML&&"string"==typeof e?t.toStaticHTML(e):e;if(I(r),!S&&!N&&-1===e.indexOf("<"))return e;var a=G(e);if(!a)return S?null:"";for(var l,s,c=W(a);l=c.nextNode();)(3!==l.nodeType||l!==s)&&(q(l)||(l.content instanceof i&&X(l.content),P(l),s=l));var d;if(S){if(_)for(d=h.call(a.ownerDocument);a.firstChild;)d.appendChild(a.firstChild);else d=a;return L&&(d=y.call(o,d,!0)),d}return N?a.outerHTML:a.innerHTML},n.addHook=function(e,t){"function"==typeof t&&(g[e]=g[e]||[],g[e].push(t))},n.removeHook=function(e){g[e]&&g[e].pop()},n.removeHooks=function(e){g[e]&&(g[e]=[])},n.removeAllHooks=function(){g=[]},n});