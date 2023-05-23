(self.webpackChunklite=self.webpackChunklite||[]).push([[5642],{51894:(e,n,i)=>{"use strict";i.d(n,{CD:()=>d});var t=i(319),a=i.n(t),l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ThemingProvider_colorPalette"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ColorPalette"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"highlightSpectrum"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ThemingProvider_colorSpectrum"}}]}},{kind:"Field",name:{kind:"Name",value:"defaultBackgroundSpectrum"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ThemingProvider_colorSpectrum"}}]}},{kind:"Field",name:{kind:"Name",value:"tintBackgroundSpectrum"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ThemingProvider_colorSpectrum"}}]}}]}}].concat(a()([{kind:"FragmentDefinition",name:{kind:"Name",value:"ThemingProvider_colorSpectrum"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ColorSpectrum"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"backgroundColor"}},{kind:"Field",name:{kind:"Name",value:"colorPoints"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"color"}},{kind:"Field",name:{kind:"Name",value:"point"}}]}}]}}]))},d={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ThemingProvider_publisher"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"customStyleSheet"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"global"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"colorPalette"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"primary"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"colorPalette"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ThemingProvider_colorPalette"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"background"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"rgb"}},{kind:"Field",name:{kind:"Name",value:"alpha"}},{kind:"Field",name:{kind:"Name",value:"colorPalette"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ThemingProvider_colorPalette"}}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"fonts"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"font1"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}},{kind:"Field",name:{kind:"Name",value:"font2"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}},{kind:"Field",name:{kind:"Name",value:"font3"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}}]}}]}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"colorPalette"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ThemingProvider_colorPalette"}}]}}]}}]}}].concat(a()(l.definitions))}},85642:(e,n,i)=>{"use strict";i.r(n),i.d(n,{UserThemingProvider:()=>S});var t=i(64718),a=i(67294),l=i(81390),d=i(98096),o=i(31889),r=i(76544),m=i(3207),c=i(319),s=i.n(c),u=i(51894),k={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"UserThemingProviderQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"username"}},type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"userResult"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}},{kind:"Argument",name:{kind:"Name",value:"username"},value:{kind:"Variable",name:{kind:"Name",value:"username"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"ThemingProvider_publisher"}}]}}]}}]}}].concat(s()(u.CD.definitions))},v=function(e){return n=e.customStyleSheet,i=a.useCallback((function(){n&&Array.from(document.getElementsByTagName("iframe")).forEach((function(e){null!=e&&e.contentWindow&&e.contentWindow.postMessage(JSON.stringify({context:"medium.customStyleSheet",customStyleSheet:n}),"*")}))}),[n]),(0,r.r)("medium.getCustomStyleSheet",i),null;var n,i},S=function(e){var n=e.children,i=e.id,r=e.username,c=(0,o.F)(),s=(0,t.a)(k,{variables:{id:i,username:r}}),u=s.data,S=s.error;if(s.loading||S||!u||(0,l.b)(null==u?void 0:u.userResult))return n;var p=u.userResult.customStyleSheet,f=(0,m.zI)(p,c),N=(0,m.ZI)(p,f);return a.createElement(d.f,{theme:N},a.createElement(v,{customStyleSheet:p}),n)}},81390:(e,n,i)=>{"use strict";i.d(n,{b:()=>r,j:()=>m});var t=i(67294),a=i(83447),l=i(43683),d=i(2808),o=i(57815),r=function(e){return!function(e){return"User"===(null==e?void 0:e.__typename)}(e)},m=function(e){var n=e.userResult;switch(null==n?void 0:n.__typename){case"Blocked":return t.createElement(l.q,{code:403,title:"403 Blocked — Medium"},"This user had blocked you from following them or viewing their stories.");case"NotFound":return t.createElement(a.$,null);case"AccountSuspended":return t.createElement(o.y,{suspension:"account"});default:return t.createElement(d.C,{error:new Error("Unsupported userResult: ".concat(null==n?void 0:n.__typename))})}}},43683:(e,n,i)=>{"use strict";i.d(n,{q:()=>h});var t=i(67294),a=i(70405),l=i(5977),d=i(59713),o=i.n(d),r=i(77355),m=i(67713),c=i(14646),s=i(97489),u={fontSize:"20px",textTransform:"uppercase"},k=function(e){return o()({display:"block",fontSize:"192px",lineHeight:"200px"},s.sm(e),{fontSize:"150px"})},v=function(e){var n=e.errorCode,i=(0,c.I)(),a=(0,m.n)({name:"brand",scale:"XXXL",color:"DARKER"});return t.createElement(r.x,{display:"flex",flexDirection:"column"},t.createElement("div",{className:i(u)},"Error"),t.createElement("div",{className:i([a,k])},n))},S=i(96370),p=i(93310),f=i(6402),N=i(21638),g={fontSize:"24px"};function h(e){var n=e.code,i=e.title,d=e.children,o=e.lumenId,m=(0,c.I)();return(0,t.useEffect)((function(){f.k.debug({status:n},"[".concat(n,"]: ").concat(i))}),[]),t.createElement(l.AW,{render:function(e){var l=e.staticContext;return l&&(l.statusCode=n),t.createElement("div",null,t.createElement(a.ql,null,t.createElement("title",null,i)),t.createElement(r.x,{tag:"section",paddingTop:"60px",paddingBottom:"60px"},t.createElement(S.P,{size:"inset"},t.createElement(r.x,{display:"flex",alignItems:"flex-start",flexWrap:"wrap"},t.createElement(v,{errorCode:n}),t.createElement("div",{className:m((0,N.rJ)())},t.createElement(r.x,{marginBottom:"28px"},t.createElement("div",{className:m(g)},d)),o?t.createElement("div",{className:m(g)},"A report is available on"," ",t.createElement(p.r,{href:"https://lumendatabase.org/notices/".concat(o),display:"inline-block",inline:!0,target:"_blank",linkStyle:"OBVIOUS"},"Lumen"),"."):null)))))}})}},57815:(e,n,i)=>{"use strict";i.d(n,{y:()=>c});var t=i(67294),a=i(77355),l=i(47230),d=i(90586),o=i(18627),r=i(43683),m=i(43487),c=function(e){var n=e.suspension,i=(0,o.Av)(),c=(0,m.v9)((function(e){return e.config.authDomain}));return t.createElement(r.q,{code:410,title:"410 ".concat(n," suspended — Medium")},t.createElement(a.x,{display:"flex",marginTop:"-30px"},t.createElement(d.QE,{scale:"S"},"This ",n," is under investigation or was found in violation of the Medium Rules."," ")),t.createElement(a.x,{display:"flex",marginTop:"80px"},t.createElement(d.QE,{color:"DARKER",scale:"M"},"There are thousands of stories to read on Medium. Visit our homepage ",t.createElement("br",null)," to find one that’s right for you.")),t.createElement(a.x,{display:"flex",marginTop:"15px"},t.createElement(l.z,{buttonStyle:"SUBTLE",href:"https://".concat(c),onClick:function(){i.event("suspendedPage.backToHomeClicked",{})}},"Take me to Medium")))}},76544:(e,n,i)=>{"use strict";i.d(n,{r:()=>a});var t=i(67294),a=function(e,n){t.useEffect((function(){if("undefined"!=typeof window){var i=function(i){if(i.data){var t,a;try{a=JSON.parse(i.data)}catch(e){}(null===(t=a)||void 0===t?void 0:t.context)===e&&n(a)}};return window.addEventListener("message",i),function(){window.removeEventListener("message",i)}}}),[n,e])}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/5642.36172d8f.chunk.js.map