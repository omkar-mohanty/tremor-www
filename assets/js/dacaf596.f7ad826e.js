"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[8947],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},11380:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return c},toc:function(){return d},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"Releasing Tremor v0.10!",author:"The Tremor Team",author_url:"https://github.com/tremor-rs",author_image_url:"https://avatars.githubusercontent.com/u/60009416?s=200&v=4",tags:["releases"],draft:!1,description:"Releasing Tremor v0.10.",hide_table_of_contents:!1},s=void 0,p={permalink:"/blog/2021/02/12/v010-release",editUrl:"https://github.com/tremor-rs/tremor-www/tree/main/blog/2021-02-12-v010-release.md",source:"@site/blog/2021-02-12-v010-release.md",title:"Releasing Tremor v0.10!",description:"Releasing Tremor v0.10.",date:"2021-02-12T00:00:00.000Z",formattedDate:"February 12, 2021",tags:[{label:"releases",permalink:"/blog/tags/releases"}],readingTime:4.53,truncated:!0,authors:[{name:"The Tremor Team",url:"https://github.com/tremor-rs",imageURL:"https://avatars.githubusercontent.com/u/60009416?s=200&v=4"}],prevItem:{title:"Google Cloud Storage and Pub/Sub Connectors",permalink:"/blog/2021/06/29/T17-LFX-Blog-Jigyasa-gcloud"},nextItem:{title:"Releasing Tremor v0.9!",permalink:"/blog/2020/10/16/v09-release"}},c={authorsImageUrls:[void 0]},d=[{value:"Summary",id:"summary",children:[]},{value:"TL;DR",id:"tldr",children:[]},{value:"New Release Artefacts",id:"new-release-artefacts",children:[]},{value:"Binary Type and Binary Codec",id:"binary-type-and-binary-codec",children:[]},{value:"Elasticsearch Offramp as Linked Transport",id:"elasticsearch-offramp-as-linked-transport",children:[]},{value:"String Interpolation Done Right",id:"string-interpolation-done-right",children:[]},{value:"Questions/Comments",id:"questionscomments",children:[]}],u={toc:d};function m(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"v0.10",src:n(97349).Z})),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"This release is the last minor release before we start turning Tremor into a truly distributed event processing and data distribution engine. We focused on small things that improve usability and ironed out some rough edges here and there."),(0,o.kt)("h2",{id:"tldr"},"TL;DR"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We extended our type system and codecs by the ",(0,o.kt)("inlineCode",{parentName:"li"},"binary")," type."),(0,o.kt)("li",{parentName:"ul"},"Elasticsearch offramp now supports Linked Transport."),(0,o.kt)("li",{parentName:"ul"},"String interpolation done right, now with ",(0,o.kt)("inlineCode",{parentName:"li"},"#{}")," instead of just ",(0,o.kt)("inlineCode",{parentName:"li"},"{}")),(0,o.kt)("li",{parentName:"ul"},"Release now includes prebuilt binaries, DEB packages and RPMs")),(0,o.kt)("h2",{id:"new-release-artefacts"},"New Release Artefacts"),(0,o.kt)("p",null,"To make your life easier installing and Tremor more pleasant, we added new release artefacts. We've now got ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tremor-rs/tremor-runtime/releases/download/v0.10.0/tremor-0.10.0-x86_64-unknown-linux-gnu.tar.gz"},"prebuilt binaries")," wrapped up in a ",(0,o.kt)("inlineCode",{parentName:"p"},"tar.gz")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"amd64")," linux, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tremor-rs/tremor-runtime/releases/download/v0.10.0/tremor_0.10.0_amd64.deb"},"DEB"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tremor-rs/tremor-runtime/releases/download/v0.10.0/tremor-0.10.0-1.x86_64.rpm"},"RPM")," packages. And, lets not forget our well-known ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/repository/docker/tremorproject/tremor"},"Docker Image"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"install prebuilt binary",src:n(77164).Z})),(0,o.kt)("p",null,"We are going to explore more channels for release artefacts in the future to get you up and running with Tremor in no time."),(0,o.kt)("p",null,"In addition to those new release channels, we enabled thin-lto for all builds, which should improve compile-time while providing all the benefits of full link time optimization (LTO). We also link OpenSSL, now statically, to avoid incompatibilities with OpenSSL versions provided by the OS."),(0,o.kt)("h2",{id:"binary-type-and-binary-codec"},"Binary Type and Binary Codec"),(0,o.kt)("p",null,"Tremor is built for handling JSON-like structured data. It can effectively handle wire formats like JSON, YAML, msgpack and many more. We can represent them all with the same internal model of dynamic structured values. One blind spot up to now has been binary data. The reason for this was that most of the aforementioned formats do not support raw binary data (except msgpack). But times have changed."),(0,o.kt)("p",null,"With Tremor, you can now receive, assemble and send binary data. Receiving is done by configuring your onramp of choice with the ",(0,o.kt)("inlineCode",{parentName:"p"},"binary")," codec. Imagine building a HTTP proxy with Tremor, that is not interested in the actual body payload but does its internal routing work only by looking at the headers. Previously, Tremor had to parse and deserialize the whole body payload. Now, it is able to conveniently pass those bytes through without ever touching them, and thus be even faster and more efficient for similar use cases."),(0,o.kt)("p",null,"Here is an example config for the needed onramps and offramps;"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"onramp:\n  - id: http_input\n    type: rest\n    codec: binary\n    linked: true\n    config:\n      host: 0.0.0.0\n      port: 8080\n\nofframp:\n  - id: http_output1\n    type: rest\n    codec: binary\n    linked: true\n    config:\n      endpoint: http://host01.example.com\n      method: GET\n")),(0,o.kt)("p",null,"And here is a very simple corresponding pipeline:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-trickle"},'select event\nfrom in\nwhere $request.method == "GET" && array::contains($request.headers["content-type"], "application/json")\ninto out;\n')),(0,o.kt)("p",null,"You are able to assemble complex binary events from structured data within tremor-script itself, like TCP packets:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"let tcp_packet = <<\n  event.src.port:16,  event.dst.port:16,\n  event.seq:32,\n  event.ack:32,\n  event.offset:4, event.res:4, event.flags:8, event.win:16,\n  event.checksum:16, event.urgent:16,\n  event.data/binary\n>>;\n")),(0,o.kt)("h2",{id:"elasticsearch-offramp-as-linked-transport"},"Elasticsearch Offramp as Linked Transport"),(0,o.kt)("p",null,"We enhanced our ",(0,o.kt)("a",{parentName:"p",href:"https://docs.tremor.rs/artefacts/offramps/#elastic"},(0,o.kt)("inlineCode",{parentName:"a"},"elastic")," offramp")," to emit 1 event back to Tremor for each document indexed to Elasticsearch, be it successful or not. You will get all the Elasticsearch metadata like the ",(0,o.kt)("inlineCode",{parentName:"p"},"_version")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"_id")," of the indexed document and also the whole payload to be indexed, which is especially useful in the face of indexing errors, e.g. from mismatched document schemas."),(0,o.kt)("p",null,"An ",(0,o.kt)("inlineCode",{parentName:"p"},"elastic")," offramp configured like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"offramp:\n  - id: elastic\n    type: elastic\n    linked: true\n    config:\n      nodes:\n        - elastic01:9200\n        - elastic02:9200\n        - elastic03:9200\n")),(0,o.kt)("p",null,"will, for an event like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"data": [1, 2, 3]}\n')),(0,o.kt)("p",null,"send you back a response payload like this if everything went well via the offramps ",(0,o.kt)("inlineCode",{parentName:"p"},"out")," port:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "source": {\n        "event_id": "1:0:0",\n        "origin": "tremor-file://root/data.json"\n    },\n    "payload": {\n        "data": [1, 2, 3]\n    },\n    "success": true\n}\n')),(0,o.kt)("p",null,"with the following document metadata in ",(0,o.kt)("inlineCode",{parentName:"p"},"$elastic"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "TxQutncB0ovN9WdBcg2i",\n    "index": "tremor_test",\n    "doc_type": "_doc",\n    "version": 1\n}\n')),(0,o.kt)("p",null,"And, in case indexing failed, you would get an event like this via the offramps ",(0,o.kt)("inlineCode",{parentName:"p"},"err")," port:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "source": {\n        "event_id": "1:0:0",\n        "origin": "tremor-file://root/data.json"\n    },\n    "payload": {\n        "data": [1, 2, 3]\n    },\n    "success": false,\n    "error": {\n        "caused_by": {\n            "reason": "Current token (VALUE_NUMBER_INT) not of boolean type\\n at [Source: (byte[])\\"POST //_bulk HTTP/1.1\\r\\ncontent-type: application/json\\r\\ncontent-length: 346\\r\\nuser-agent: reqwest/0.9.24\\r\\naccept: */*\\r\\naccept-encoding: gzip\\r\\nhost: 127.0.0.1:9200\\r\\n\\r\\n{\\"index\\":{\\"_index\\":\\"tremor_test\\",\\"_type\\":\\"_doc\\"}}\\n{\\"data\\":\\"[1, 2, 3]\\"}\\n\\"[truncated 10 bytes]; line: 1, column: 13]",\n            "type": "json_parse_exception"\n        },\n        "reason": "failed to parse field [data] of type [boolean] in document with id \'TxQutncB0ovN9WdBcg2i\'. Preview of field\'s value: \'1\'",\n        "type": "mapper_parsing_exception"}\n}\n')),(0,o.kt)("p",null,"Such an error message will also contain the same metadata behing the ",(0,o.kt)("inlineCode",{parentName:"p"},"$elastic")," metadata key.\nHaving detailed error data and the original payload at hand will enable users to handle success and error in new ways: Retries in case of errors, signalling upstream applications, try something completely different with that event payload."),(0,o.kt)("h2",{id:"string-interpolation-done-right"},"String Interpolation Done Right"),(0,o.kt)("p",null,"We changed the syntax for string interpolation to now use ",(0,o.kt)("inlineCode",{parentName:"p"},"#{}")," for interpolating arbitrary expressions into a string literal, as we discovered some quirks in how it worked before (with ",(0,o.kt)("inlineCode",{parentName:"p"},"{}"),"). Creating JSON object strings ",(0,o.kt)("inlineCode",{parentName:"p"},'{"key": "value"}')," or regex quantifiers ",(0,o.kt)("inlineCode",{parentName:"p"},"[1-9][0-9]{2, 3}")," have been inconvenient to write and there were surprises together with using the ",(0,o.kt)("inlineCode",{parentName:"p"},"string::format")," function."),(0,o.kt)("p",null,"Where we previously had written:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tremor"},'let json_string = """\n{{ "key": "value"}}\n""";\nlet regex = "[1-9][0-9]\\{2, 3\\}";\n')),(0,o.kt)("p",null,"we can now express as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tremor"},'let json_string = """\n{ "key": "value"}\n""";\nlet regex = "[1-9][0-9]{2, 3}";\n')),(0,o.kt)("p",null,"which is much better e.g. for templating purposes."),(0,o.kt)("h2",{id:"questionscomments"},"Questions/Comments"),(0,o.kt)("p",null,"On the Community Discord: ",(0,o.kt)("a",{parentName:"p",href:"https://chat.tremor.rs"},"https://chat.tremor.rs")))}m.isMDXComponent=!0},77164:function(e,t,n){t.Z=n.p+"assets/images/2021-02-19_prebuilt_binary-a89e5b823e2cb5e6dbdd817ce0973fc2.gif"},97349:function(e,t,n){t.Z=n.p+"assets/images/tremor-release-0.10-73915b9f37ba2d7d04ff55f8433f1bd3.jpg"}}]);