(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[890],{23646:function(e,t,n){var r=n(67228);e.exports=function(e){if(Array.isArray(e))return r(e)}},59713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},46860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},98206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,n){var r=n(23646),a=n(46860),i=n(60379),o=n(98206);e.exports=function(e){return r(e)||a(e)||i(e)||o()}},93367:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n(67294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},7845:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=o,t.useAmp=function(){return o(a.default.useContext(i.AmpStateContext))};var r,a=(r=n(67294))&&r.__esModule?r:{default:r},i=n(93367);function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,i=e.hasQuery,o=void 0!==i&&i;return n||a&&o}},57947:function(e,t,n){"use strict";var r=n(59713);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=u,t.default=void 0;var i,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=r?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(67294)),s=(i=n(60617))&&i.__esModule?i:{default:i},c=n(93367),l=n(74287),h=n(7845);function d(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var m=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var i=!0,o=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){o=!0;var s=a.key.slice(a.key.indexOf("$")+1);e.has(s)?i=!1:e.add(s)}switch(a.type){case"title":case"base":t.has(a.type)?i=!1:t.add(a.type);break;case"meta":for(var c=0,l=m.length;c<l;c++){var h=m[c];if(a.props.hasOwnProperty(h))if("charSet"===h)n.has(h)?i=!1:n.add(h);else{var d=a.props[h],u=r[h]||new Set;"name"===h&&o||!u.has(d)?(u.add(d),r[h]=u):i=!1}}}return i}}()).reverse().map((function(e,n){var i=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var s=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return s["data-href"]=s.href,s.href=void 0,s["data-optimized-fonts"]=!0,o.default.cloneElement(e,s)}return o.default.cloneElement(e,{key:i})}))}function x(e){var t=e.children,n=(0,o.useContext)(c.AmpStateContext),r=(0,o.useContext)(l.HeadManagerContext);return o.default.createElement(s.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,h.isInAmpMode)(n)},t)}x.rewind=function(){};var y=x;t.default=y},60617:function(e,t,n){"use strict";var r=n(319),a=n(34575),i=n(93913),o=(n(81506),n(2205)),s=n(78585),c=n(29754);function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var h=n(67294),d=function(e){o(n,e);var t=l(n);function n(e){var i;return a(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(h.Component);t.default=d},73039:function(e,t,n){"use strict";n.r(t),n.d(t,{Container:function(){return i}});var r=n(85893),a=n(67294),i=function(e){var t=e.children;return(0,r.jsx)("div",{className:"container",children:t})};t.default=a.memo(i)},19590:function(e,t,n){"use strict";n.r(t);var r=n(85893),a=n(6610),i=n(5991),o=n(65255),s=n(86089),c=n(77608),l=n(67294);function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,c.Z)(e);if(t){var a=(0,c.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,s.Z)(this,n)}}var d=function(e){(0,o.Z)(n,e);var t=h(n);function n(){return(0,a.Z)(this,n),t.apply(this,arguments)}return(0,i.Z)(n,[{key:"render",value:function(){return(0,r.jsx)(l.Fragment,{children:(0,r.jsx)("div",{className:"footer",id:"footer",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("div",{className:"row py-4 align-items-center",children:[(0,r.jsxs)("div",{className:"col-12 col-lg-6",children:[(0,r.jsx)("h1",{className:"text-white",children:"Safemoon Protocol"}),(0,r.jsx)("p",{children:"The SafeMoon Protocol is a community driven, fair launched DeFi Token. Three simple functions occur during each trade: Reflection, LP Acquisition, & Burn."})]}),(0,r.jsxs)("div",{className:"col-4 col-lg-2",children:[(0,r.jsx)("h3",{className:"text-white",children:"Community"}),(0,r.jsxs)("ul",{className:"list-unstyled",children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{className:"text-light",href:"https://forums.safemoon.net",target:"_blank",children:"Forums"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{className:"text-light",href:"https://discord.gg/safemoon",target:"_blank",children:"Discord"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{className:"text-light",href:"https://www.reddit.com/r/SafeMoon/",target:"_blank",children:"Reddit"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{className:"text-light",href:"https://t.me/safemoonv2",target:"_blank",children:"Telegram"})})]})]}),(0,r.jsxs)("div",{className:"col-4 col-lg-2",children:[(0,r.jsx)("h3",{className:"text-white",children:"Social"}),(0,r.jsxs)("ul",{className:"list-unstyled",children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{className:"text-light",href:"https://facebook.com/safemoonprotocol",children:"Facebook"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{className:"text-light",href:"https://twitter.com/safemoon",children:"Twitter"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{className:"text-light",href:"https://www.instagram.com/safemoonhq/",children:"Instagram"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{className:"text-light",href:"https://www.linkedin.com/company/safemoon/",children:"LinkedIn"})})]})]}),(0,r.jsxs)("div",{className:"col-4 col-lg-2",children:[(0,r.jsx)("h3",{className:"text-white",children:"Resources"}),(0,r.jsxs)("ul",{className:"list-unstyled",children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{className:"text-light",href:"/branding",children:"Branding"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{className:"text-light",href:"/wallet",children:"Wallet Tracker"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{className:"text-light",href:"https://github.com/safemoonprotocol/Safemoon.sol",target:"_blank",children:"Contract"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{className:"text-light",href:"/whitepaper",children:"White paper"})})]})]})]}),(0,r.jsx)("hr",{}),(0,r.jsxs)("div",{className:"row align-items-center",children:[(0,r.jsx)("div",{className:"col",children:(0,r.jsx)("h3",{className:"mb-0 text-white",children:"Copyright \xa9 2021 Safemoon LLC. | All Rights Reserved"})}),(0,r.jsxs)("div",{className:"col text-end",children:[(0,r.jsx)("a",{href:"/terms",className:"btn btn-link btn-sm px-0 text-light",children:"Terms of Service"}),(0,r.jsx)("a",{href:"/privacy",className:"btn btn-link btn-sm px-0 text-light",children:"Privacy Policy"}),(0,r.jsx)("a",{href:"/privacy",className:"btn btn-link btn-sm px-0 text-light",children:"Cookie Policy"})]})]})]})})})}}]),n}(l.Component);t.default=l.memo(d)},32480:function(e,t,n){"use strict";n.r(t),n.d(t,{PageHead:function(){return o}});var r=n(85893),a=n(67294),i=n(9008),o=function(e){var t=e.title,n=e.desc;return"undefined"==typeof n&&(n="The official home of SafeMoon. The SafeMoon Protocol is a community driven, fair launched DeFi Token. Three simple functions occur during each trade: Reflection, LP Acquisition, and Burn."),(0,r.jsxs)(i.default,{children:[(0,r.jsxs)("title",{children:[t," | Safemoon"]}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=0.87, shrink-to-fit=no"}),(0,r.jsx)("meta",{name:"description",content:n}),(0,r.jsx)("link",{rel:"shortcut icon",type:"image/png",href:"../img/favicon.png"}),(0,r.jsx)("meta",{name:"keywords",content:"safemoon,safemars,safegalaxy,shib,shiba,kucoin,xrp,bonfire,diamondhold,gmr,vechain,elon,elongate,bitcoin,dogecoin,doge,defi,coinbase,coinmarketcap,coinmarket,bscscan,whitebit,coingecko,cryptocurrency,crypto,pancakeswap,dex,etherium,eth,btc"}),(0,r.jsx)("meta",{property:"og:image",content:"https://safemoon.net/img/social_thumb.png"}),(0,r.jsx)("meta",{property:"og:image:type",content:"image/png"}),(0,r.jsx)("meta",{property:"og:image:width",content:"1280"}),(0,r.jsx)("meta",{property:"og:image:height",content:"640"}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:description",content:n}),(0,r.jsx)("meta",{name:"twitter:title",content:t+" | SafeMoon Protocol"}),(0,r.jsx)("meta",{name:"twitter:site",content:"@safemoon"}),(0,r.jsx)("script",{src:"../js/jquery-3.6.0.min.js"}),(0,r.jsx)("script",{src:"https://cdn.jsdelivr.net/npm/chart.js@3.1.0/dist/chart.min.js"}),(0,r.jsx)("script",{src:"../js/bootstrap.bundle.min.js"}),(0,r.jsx)("script",{src:"https://www.googletagmanager.com/gtag/js?id=UA-195728045-1"}),(0,r.jsx)("script",{dangerouslySetInnerHTML:{__html:"\n              window.dataLayer = window.dataLayer || [];\n              function gtag(){dataLayer.push(arguments);}\n              gtag('js', new Date());\n              gtag('config', 'UA-195728045-1', { page_path: window.location.pathname });\n            "}})]})};t.default=a.memo(o)},44264:function(e,t,n){"use strict";n.r(t);var r=n(85893),a=n(6610),i=n(5991),o=n(65255),s=n(86089),c=n(77608),l=n(67294),h=(n(73039),n(19755)),d=n.n(h);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,c.Z)(e);if(t){var a=(0,c.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,s.Z)(this,n)}}var f=function(e){(0,o.Z)(n,e);var t=u(n);function n(){return(0,a.Z)(this,n),t.apply(this,arguments)}return(0,i.Z)(n,[{key:"componentDidMount",value:function(){d()(".menu-btn").on("click",(function(e){e.preventDefault(),d()(".custom-navbar").toggleClass("open")})),d()("#closemenu").on("click",(function(e){e.preventDefault(),d()(".custom-navbar").removeClass("open")}))}},{key:"render",value:function(){return(0,r.jsx)(l.Fragment,{children:(0,r.jsx)("div",{className:"custom-nav text-center sticky-top",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("div",{className:"d-flex align-items-center custom-navbar justify-content-lg-between flex-column flex-lg-row",children:[(0,r.jsx)("a",{href:"/",className:"navbrand d-none d-lg-inline-block",rel:"nofollow",children:(0,r.jsx)("img",{src:"../img/174x174.png",height:50,className:"mr-3"})}),(0,r.jsxs)("a",{href:"/",className:"navbrand d-lg-none text-white mb-5",rel:"nofollow",id:"closemenu",children:[(0,r.jsx)("i",{className:"fal fa-times"})," Close"]}),(0,r.jsxs)("div",{className:"d-flex flex-column flex-lg-row text-center",children:[(0,r.jsx)("div",{className:"flex-fill",children:(0,r.jsx)("a",{href:"/",className:"px-3",children:"Home"})}),(0,r.jsx)("div",{className:"flex-fill",children:(0,r.jsx)("a",{href:"https://shop.safemoon.net",className:"px-3",target:"_blank",children:"Shop"})}),(0,r.jsx)("div",{className:"flex-fill",children:(0,r.jsx)("a",{href:"https://forums.safemoon.net",className:"px-3",target:"_blank",children:"Forums"})}),(0,r.jsx)("div",{className:"flex-fill",children:(0,r.jsxs)("a",{href:"/products",className:"px-3",children:["Products",(0,r.jsx)("div",{className:"new"})]})}),(0,r.jsx)("div",{className:"flex-fill",children:(0,r.jsx)("a",{href:"/markets",className:"px-3",children:"Markets"})}),(0,r.jsx)("div",{className:"flex-fill",children:(0,r.jsx)("a",{href:"/buy",className:"px-3",children:"Buy Now"})})]})]}),(0,r.jsxs)("div",{className:"d-flex d-lg-none justify-content-between align-items-center mobile-menu",children:[(0,r.jsx)("a",{href:"/",className:"navbrand text-white",children:"SafeMoon"}),(0,r.jsx)("div",{children:(0,r.jsxs)("a",{href:"",className:"btn btn-link text-white btn-lg px-3 menu-btn",children:[(0,r.jsx)("i",{className:"fal fa-bars fa-fw"})," Menu"]})})]})]})})})}}]),n}(l.Component);t.default=f},43853:function(e,t,n){"use strict";n.r(t);var r=n(85893),a=n(6610),i=n(5991),o=n(65255),s=n(86089),c=n(77608),l=n(67294),h=n(69322),d=n(48134),u=n.n(d),f=n(40368),m=n.n(f),p=n(44264);function x(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,c.Z)(e);if(t){var a=(0,c.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,s.Z)(this,n)}}var y=function(e){(0,o.Z)(n,e);var t=x(n);function n(){return(0,a.Z)(this,n),t.apply(this,arguments)}return(0,i.Z)(n,[{key:"render",value:function(){return(0,r.jsx)(l.Fragment,{children:(0,r.jsxs)("header",{className:"small-header",children:[(0,r.jsx)(u(),{className:"particlesjs",params:m()}),(0,r.jsx)(h.default,{}),(0,r.jsx)(p.default,{}),(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"d-flex align-items-center header-row",children:(0,r.jsxs)("div",{className:"flex-fill w-100",children:[(0,r.jsx)("h1",{className:"largenumbers mb-0",children:"Safemoon"}),(0,r.jsx)("p",{className:"text-white mb-5",children:this.props.title})]})})})]})})}}]),n}(l.Component);t.default=y},69322:function(e,t,n){"use strict";n.r(t);var r=n(85893),a=n(6610),i=n(5991),o=n(65255),s=n(86089),c=n(77608),l=n(67294);function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,c.Z)(e);if(t){var a=(0,c.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,s.Z)(this,n)}}var d=function(e){(0,o.Z)(n,e);var t=h(n);function n(){return(0,a.Z)(this,n),t.apply(this,arguments)}return(0,i.Z)(n,[{key:"render",value:function(){return(0,r.jsx)(l.Fragment,{children:(0,r.jsx)("div",{className:"top-bar",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,r.jsx)("div",{className:"d-none d-lg-block w-100",children:(0,r.jsx)("ul",{className:"topnav",children:(0,r.jsx)("li",{className:"text-white-50",children:"The official home of Safemoon"})})}),(0,r.jsxs)("div",{className:"text-center text-lg-right w-100 icon-menu",children:[(0,r.jsx)("a",{href:"https://facebook.com/safemoonprotocol",className:"mr-2 text-info",target:"_blank","data-toggle":"tooltip",title:"facebook",children:(0,r.jsx)("i",{className:"fab fa-facebook fa-fw"})}),(0,r.jsx)("a",{href:"https://twitter.com/safemoon",className:"mx-2 text-info",target:"_blank","data-toggle":"tooltip",title:"Twitter",children:(0,r.jsx)("i",{className:"fab fa-twitter fa-fw"})}),(0,r.jsx)("a",{href:"https://www.instagram.com/safemoonhq/",className:"mx-2 text-info",target:"_blank","data-toggle":"tooltip",title:"Instagram",children:(0,r.jsx)("i",{className:"fab fa-instagram fa-fw"})}),(0,r.jsx)("a",{href:"https://github.com/Safemoon-Protocol",className:"mx-2 text-info",target:"_blank","data-toggle":"tooltip",title:"Github",children:(0,r.jsx)("i",{className:"fab fa-github fa-fw"})}),(0,r.jsx)("a",{href:"https://www.reddit.com/r/SafeMoon/",className:"mx-2 text-info",target:"_blank","data-toggle":"tooltip",title:"Reddit",children:(0,r.jsx)("i",{className:"fab fa-reddit fa-fw"})}),(0,r.jsx)("a",{href:"https://t.me/safemoonv2",className:"mx-2 text-info",target:"_blank","data-toggle":"tooltip",title:"Telegram",children:(0,r.jsx)("i",{className:"fab fa-telegram fa-fw"})}),(0,r.jsx)("a",{href:"https://discord.gg/safemoon",className:"mx-2 text-info",target:"_blank","data-toggle":"tooltip",title:"Discord",children:(0,r.jsx)("i",{className:"fab fa-discord fa-fw"})}),(0,r.jsx)("a",{href:"https://www.youtube.com/channel/UCbfKS3AEsY9QMYK7nxJjKqw",className:"ml-2 text-info",target:"_blank","data-toggle":"tooltip",title:"Youtube",children:(0,r.jsx)("i",{className:"fab fa-youtube fa-fw"})}),(0,r.jsx)("a",{href:"https://twitch.tv/safemoonprotocol",className:"ml-2 text-info",target:"_blank","data-toggle":"tooltip",title:"Twitch",children:(0,r.jsx)("i",{className:"fab fa-twitch fa-fw"})})]})]})})})})}}]),n}(l.Component);t.default=d},54306:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(85893),a=n(6610),i=n(5991),o=n(65255),s=n(86089),c=n(77608),l=n(67294),h=n(43853),d=n(19590),u=n(32480);function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,c.Z)(e);if(t){var a=(0,c.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,s.Z)(this,n)}}var m=function(e){(0,o.Z)(n,e);var t=f(n);function n(){return(0,a.Z)(this,n),t.apply(this,arguments)}return(0,i.Z)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=(0,r.jsx)(u.default,{title:"Terms of Service"});return(0,r.jsxs)(l.Fragment,{children:[e,(0,r.jsx)(h.default,{title:"Terms of Service"}),(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row text-light py-5",children:(0,r.jsxs)("div",{className:"col-12",children:[(0,r.jsx)("h1",{className:"text-white mb-0",children:"Terms of Service & Conditions"}),(0,r.jsx)("p",{className:"mb-5",children:"Updated March 23, 2021"}),(0,r.jsx)("h2",{className:"mb-0",children:"Interpretation"}),(0,r.jsx)("p",{children:"The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural."}),(0,r.jsx)("h2",{className:"mb-0",children:"Definitions"}),(0,r.jsx)("p",{children:"The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural."}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{className:"mb-2",children:["Affiliate",(0,r.jsx)("br",{}),'means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.']}),(0,r.jsxs)("li",{className:"mb-2",children:["Country",(0,r.jsx)("br",{}),"refers to: Utah, United States."]}),(0,r.jsxs)("li",{className:"mb-2",children:["Company",(0,r.jsx)("br",{}),'(referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to SafeMoon LLC, 364 N 500 E Provo, UT 84606.']}),(0,r.jsxs)("li",{className:"mb-2",children:["Device",(0,r.jsx)("br",{}),"means any device that can access the Service such as a computer, a cellphone or a digital tablet."]}),(0,r.jsxs)("li",{className:"mb-2",children:["Service",(0,r.jsx)("br",{}),"refers to the Website."]}),(0,r.jsxs)("li",{className:"mb-2",children:["Terms and Conditions",(0,r.jsx)("br",{}),'(also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and Safemoon LLC regarding the use of the Service.']}),(0,r.jsxs)("li",{className:"mb-2",children:["Third-party Social Media Service",(0,r.jsx)("br",{}),"means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service."]}),(0,r.jsxs)("li",{className:"mb-2",children:["Website",(0,r.jsx)("br",{}),"refers to SafeMoon, accessible from https://safemoon.net"]}),(0,r.jsxs)("li",{className:"mb-2",children:["You ",(0,r.jsx)("br",{}),"means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable."]})]}),(0,r.jsx)("h2",{className:"mb-0",children:"Acknowledgment"}),(0,r.jsx)("p",{children:"These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service."}),(0,r.jsx)("p",{children:"Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service."}),(0,r.jsx)("p",{children:"By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service."}),(0,r.jsx)("p",{children:"You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service."}),(0,r.jsx)("p",{children:"Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service."}),(0,r.jsx)("h2",{className:"mb-0",children:"Links to Other Websites"}),(0,r.jsx)("p",{children:"Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company."}),(0,r.jsx)("p",{children:"The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services."}),(0,r.jsx)("p",{children:"We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit."}),(0,r.jsx)("h2",{className:"mb-0",children:"Termination"}),(0,r.jsx)("p",{children:"We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions."}),(0,r.jsx)("p",{children:"Upon termination, Your right to use the Service will cease immediately."}),(0,r.jsx)("h2",{className:"mb-0",children:"Limitation of Liability"}),(0,r.jsx)("p",{children:"Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service."}),(0,r.jsx)("p",{children:"To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose."}),(0,r.jsx)("p",{children:"Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law."}),(0,r.jsx)("h2",{className:"mb-0",children:'"AS IS" and "AS AVAILABLE" Disclaimer'}),(0,r.jsx)("p",{children:'The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.'}),(0,r.jsx)("p",{children:"Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components."}),(0,r.jsx)("p",{children:"Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law."}),(0,r.jsx)("h2",{className:"mb-0",children:"Governing Law"}),(0,r.jsx)("p",{children:"The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws."}),(0,r.jsx)("h2",{className:"mb-0",children:"Disputes Resolution"}),(0,r.jsx)("p",{children:"If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company."}),(0,r.jsx)("h2",{className:"mb-0",children:"For European Union (EU) Users"}),(0,r.jsx)("p",{children:"If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which you are resident in."}),(0,r.jsx)("h2",{className:"mb-0",children:"United States Legal Compliance"}),(0,r.jsx)("p",{children:'You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a "terrorist supporting" country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.'}),(0,r.jsx)("h2",{className:"mb-0",children:"Severability"}),(0,r.jsx)("p",{children:"If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect."}),(0,r.jsx)("h2",{className:"mb-0",children:"Waiver"}),(0,r.jsx)("p",{children:"Except as provided herein, the failure to exercise a right or to require performance of an obligation under this Terms shall not effect a party's ability to exercise such right or require such performance at any time thereafter nor shall be the waiver of a breach constitute a waiver of any subsequent breach."}),(0,r.jsx)("h2",{className:"mb-0",children:"Translation Interpretation"}),(0,r.jsx)("p",{children:"These Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the original English text shall prevail in the case of a dispute."}),(0,r.jsx)("h2",{className:"mb-0",children:"Changes to These Terms and Conditions"}),(0,r.jsx)("p",{children:"We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion."}),(0,r.jsx)("p",{children:"By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service."}),(0,r.jsx)("hr",{}),(0,r.jsx)("h3",{children:"Contact Us"}),(0,r.jsxs)("p",{children:["Email:",(0,r.jsx)("a",{href:"mailto:john@safemoon.net",className:"text-info btn btn-link",children:"john@safemoon.net"})]})]})})}),(0,r.jsx)(d.default,{})]})}}]),n}(l.Component)},40368:function(e){e.exports={particles:{number:{value:200,density:{enable:!0,value_area:789.1476416322727}},color:{value:"#AAAAAA"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5,move:{radius:0}},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:1,random:!0,anim:{enable:!0,speed:.2,opacity_min:0,sync:!1}},size:{value:2,random:!0,anim:{enable:!0,speed:2,size_min:0,sync:!1}},line_linked:{enable:!1,distance:30,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:.2,direction:"bottom",random:!1,straight:!0,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"window",events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:100,line_linked:{opacity:1}},bubble:{distance:120,size:3,duration:1,opacity:1,color:"#FFFFFF",speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}},95032:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/terms",function(){return n(54306)}])},9008:function(e,t,n){e.exports=n(57947)}},function(e){e.O(0,[571,618,774,888,179],(function(){return t=95032,e(e.s=t);var t}));var t=e.O();_N_E=t}]);