"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[7587],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1319:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),s=["components"],a={},c={unversionedId:"tremor-script/stdlib/tremor/system",id:"version-0.11/tremor-script/stdlib/tremor/system",isDocsHomePage:!1,title:"system",description:"The system namespace contains functions that provide information about the",source:"@site/versioned_docs/version-0.11/tremor-script/stdlib/tremor/system.md",sourceDirName:"tremor-script/stdlib/tremor",slug:"/tremor-script/stdlib/tremor/system",permalink:"/docs/tremor-script/stdlib/tremor/system",editUrl:"https://github.com/tremor-rs/tremor-new-website/tree/main/versioned_docs/version-0.11/tremor-script/stdlib/tremor/system.md",version:"0.11",frontMatter:{},sidebar:"version-0.11/tutorialSidebar",previous:{title:"origin",permalink:"/docs/tremor-script/stdlib/tremor/origin"},next:{title:"Aggregate Functions",permalink:"/docs/tremor-query/functions"}},u=[{value:"Functions",id:"functions",children:[{value:"hostname()",id:"hostname",children:[]},{value:"ingest_ns()",id:"ingest_ns",children:[]},{value:"instance()",id:"instance",children:[]},{value:"nanotime()",id:"nanotime",children:[]},{value:"version()",id:"version",children:[]}]}],l={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The system namespace contains functions that provide information about the\ntremor runtime system."),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"hostname"},"hostname()"),(0,i.kt)("p",null,"Returns the name of the host where tremor is running."),(0,i.kt)("p",null,"Returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h3",{id:"ingest_ns"},"ingest_ns()"),(0,i.kt)("p",null,"Returns the ingest time into tremor of the current event."),(0,i.kt)("p",null,"Returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h3",{id:"instance"},"instance()"),(0,i.kt)("p",null,"Returns the instance of tremor."),(0,i.kt)("p",null,"Returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h3",{id:"nanotime"},"nanotime()"),(0,i.kt)("p",null,"Returns the current time in epoch nanoseconds"),(0,i.kt)("h3",{id:"version"},"version()"),(0,i.kt)("p",null,"Returns the tremor version"))}m.isMDXComponent=!0}}]);