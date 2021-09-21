"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[8360],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13658:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={},l="CNCF OpenTelemetry Elastic APM Interworking",c={unversionedId:"recipes/otel_elastic_apm/README",id:"version-0.11/recipes/otel_elastic_apm/README",isDocsHomePage:!1,title:"CNCF OpenTelemetry Elastic APM Interworking",description:"All the application code here is available from the docs git repository.",source:"@site/versioned_docs/version-0.11/recipes/44_otel_elastic_apm/README.md",sourceDirName:"recipes/44_otel_elastic_apm",slug:"/recipes/otel_elastic_apm/README",permalink:"/docs/recipes/otel_elastic_apm/README",editUrl:"https://github.com/tremor-rs/tremor-www/tree/main/versioned_docs/version-0.11/recipes/44_otel_elastic_apm/README.md",tags:[],version:"0.11",frontMatter:{},sidebar:"version-0.11/tutorialSidebar",previous:{title:"CNCF OpenTelemetry Prometheus Interworking",permalink:"/docs/recipes/otel_prometheus/README"},next:{title:"Tremor Workshop",permalink:"/docs/recipes/README"}},p=[{value:"Environment",id:"environment",children:[]},{value:"Business Logic",id:"business-logic",children:[]},{value:"Command line testing during logic development",id:"command-line-testing-during-logic-development",children:[]},{value:"Docker",id:"docker",children:[]},{value:"Post-installation steps",id:"post-installation-steps",children:[]},{value:"Advanced",id:"advanced",children:[]}],m={toc:p};function d(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cncf-opentelemetry-elastic-apm-interworking"},"CNCF OpenTelemetry Elastic APM Interworking"),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"All the application code here is available from the docs ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tremor-rs/tremor-www-docs/tree/main/docs/workshop/examples/44_otel_elastic_apm"},"git repository"),"."))),(0,a.kt)("p",null,"This example builds on the passthrough CNCF OpenTelemetry\nconfiguration but configures Elastic APM as an exporter in the\nOpenTelemetry Collector."),(0,a.kt)("p",null,"It shows how Elastic APM can be used with OpenTelemetry based services directly, or via\ntremor for specialized processing."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The Elastic Suite including search, Kibana and the APM server"),(0,a.kt)("li",{parentName:"ul"},"CNCF OpenTelemetry Onramp and Offramp deployed into tremor"),(0,a.kt)("li",{parentName:"ul"},"Deployment configuration file")),(0,a.kt)("p",null,"External OpenTelemetry clients can use port ",(0,a.kt)("inlineCode",{parentName:"p"},"4316")," to send OpenTelemetry logs, traces and metrics\nthrough tremor. Tremor prints the json mapping to standard out and forwards the events to the\nOpenTelemetry collector downstream - which is an instance of the Elastic APM Server in this case."),(0,a.kt)("h2",{id:"environment"},"Environment"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{target:"_blank",href:n(94911).Z},"onramp")," we use is the ",(0,a.kt)("inlineCode",{parentName:"p"},"otel")," CNCF OpenTelemetry onramp listening on a non-standard CNCF OpenTelemetry port ",(0,a.kt)("inlineCode",{parentName:"p"},"4316"),", it receives protocol buffer messages over gRPC on this port. The log, metric and trace events received are converted to tremor's value system and passed through a passthrough pipeline to the CNCF OpenTelemetry sink. The sink will try to connect to a the elastic apm-server at TCP port 8200."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'onramp:\n  - id: otlp\n    type: otel # Use the OpenTelemetry gRPC listener source\n    codec: json # Json is the only supported value\n    config:\n      port: 4316 # The TCP port to listen on\n      host: "0.0.0.0" # The IP address to bind on ( all interfaces in this case )\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'offramp:\n  - id: otlp\n    type: otel # Use the OpenTelemetry gRPC client\n    codec: json # Json is the only supported value\n    config:\n      port: 8200 # The TCP port to distributed to\n      host: "apm-server" # The Elastic APM server we\'re distributing to\n')),(0,a.kt)("p",null,"It connects to a passthrough pipeline. This pipeline forwards any received\nobservability events downstream unchanged."),(0,a.kt)("p",null,"We connect the passthrough output events into a standard output sink.\nThe ",(0,a.kt)("a",{target:"_blank",href:n(88259).Z},"binding")," expresses these relations and gives deployment connectivity graph."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"binding:\n  - id: example\n    links:\n      '/onramp/otlp/{instance}/out':\n       - '/pipeline/example/{instance}/in'\n      '/pipeline/example/{instance}/out':\n       - '/offramp/stdout/{instance}/in'\n       - '/offramp/otlp/{instance}/in'\n")),(0,a.kt)("p",null,"Finally the ",(0,a.kt)("a",{target:"_blank",href:n(81141).Z},"mapping")," instanciates the binding with the given name and instance variable to activate the elements of the binding."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'mapping:\n  /binding/example/passthrough:\n    instance: "passthrough"\n')),(0,a.kt)("h2",{id:"business-logic"},"Business Logic"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-trickle"},"select event from in into out\n")),(0,a.kt)("h2",{id:"command-line-testing-during-logic-development"},"Command line testing during logic development"),(0,a.kt)("p",null,"Use any compliant OpenTelemetry instrumented application and configure the\nserver to our source on port ",(0,a.kt)("inlineCode",{parentName:"p"},"4316")," instead of the default ",(0,a.kt)("inlineCode",{parentName:"p"},"4317"),"."),(0,a.kt)("h2",{id:"docker"},"Docker"),(0,a.kt)("p",null,"For convenience, use the provided ",(0,a.kt)("a",{target:"_blank",href:n(65596).Z},"docker-compose.yaml")," to\nstart and stop tremor and the OpenTelemetry collector as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Start\n$ docker compose up\n\n# Stop\n$ docker compose down\n")),(0,a.kt)("h2",{id:"post-installation-steps"},"Post-installation steps"),(0,a.kt)("p",null,"Once the environment is running we can log into ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:5601"},"kibana")," and\nselect the ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:5601/app/apm/services?rangeFrom=now-15m&rangeTo=now"},"APM")," service\nfrom the menu system."),(0,a.kt)("p",null,"Using any OpenTelemetry client, send metrics or traces ( not logs as Elastic APM does not support\nlog shipping yet ) to tremor on its OpenTelemetry port. We should see them log to console."),(0,a.kt)("p",null,"Console output from docker:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"console",src:n(65562).Z})),(0,a.kt)("p",null,"We should also be able to see metrics and spans in the APM service section of elastic."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"elastic-apm",src:n(86559).Z})),(0,a.kt)("h2",{id:"advanced"},"Advanced"),(0,a.kt)("p",null,"From here on you can configure the ElasticSearch offramp in tremor for log shipping to elastic whilst exposing a pure OpenTelemetry interface to the outside world."),(0,a.kt)("p",null,"This would allow upstream clients to use the OpenTelemetry protocol exclusively. A tremor algorithm can batch and convert OpenTelemetry log formatted messages to the form that the ElasticSearch APIs prefer for bulk log shipping."))}d.isMDXComponent=!0},65596:function(e,t,n){t.Z=n.p+"assets/files/docker-compose-0dcce250333ada08131b41df556c165c.yaml"},94911:function(e,t,n){t.Z=n.p+"assets/files/00_ramps-bc55ff1edb68b309f7540282aac23da3.yaml"},88259:function(e,t,n){t.Z=n.p+"assets/files/01_binding-7d6c2c8727298377446379c886448d73.yaml"},81141:function(e,t,n){t.Z=n.p+"assets/files/02_mapping-9c81a0870131ab67e86b0f001460a101.yaml"},65562:function(e,t,n){t.Z=n.p+"assets/images/console-log-7bd3fa8c0cb8f11ccdc8472c8fb4b3ff.png"},86559:function(e,t,n){t.Z=n.p+"assets/images/elastic-span-9db3ea6149bf5a9bf1b9d0c142f1759a.png"}}]);