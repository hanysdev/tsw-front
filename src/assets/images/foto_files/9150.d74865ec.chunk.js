(self.webpackChunklite=self.webpackChunklite||[]).push([[9150],{60028:(e,n,i)=>{"use strict";i.d(n,{N:()=>l});var a=i(319),t=i.n(a),d={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CatalogCovers_catalogEntity"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"CatalogEntity"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"CatalogCover_catalogEntity"}}]}}].concat(t()([{kind:"FragmentDefinition",name:{kind:"Name",value:"CatalogCover_catalogEntity"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"CatalogEntity"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"previewImage"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"alt"}}]}}]}}]}}]))},l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CatalogPreview_catalog"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Catalog"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"postItemsCount"}},{kind:"Field",name:{kind:"Name",value:"predefined"}},{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"username"}}]}},{kind:"Field",name:{kind:"Name",value:"viewerEdge"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"followersCount"}}]}},{kind:"Field",name:{kind:"Name",value:"itemsConnection"},arguments:[{kind:"Argument",name:{kind:"Name",value:"pagingOptions"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"5"}}]}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogItemId"}},{kind:"Field",name:{kind:"Name",value:"entity"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"CatalogCovers_catalogEntity"}}]}}]}}]}}]}}].concat(t()(d.definitions))}},44266:(e,n,i)=>{"use strict";i.d(n,{S:()=>C});var a=i(23450),t=i.n(a),d=i(67294),l=i(77355),m=i(14646),o=i(4381),s=i(94124),r=i(46696),k=function(e){var n,i,a=e.entity,t=e.size,m="".concat(t,"px");return i="Post"===(null==a?void 0:a.__typename)&&null!==(n=a.previewImage)&&void 0!==n&&n.id?d.createElement(o.UV,{miroId:a.previewImage.id,alt:a.previewImage.alt||"",width:t,height:t,strategy:r._S.Crop,loading:s.K.LAZY}):d.createElement(l.x,{height:m,width:m,background:"#292929"},d.createElement(l.x,{borderRadius:"50%",width:"100%",height:"100%",background:"#757575"})),d.createElement(l.x,{borderRadius:"2px",height:m,overflow:"hidden"},i)},u=function(e,n){return function(i){var a=.75*n,t=1===e?"-".concat(.5*n,"px"):2===e?"-".concat(a,"px"):void 0;return{position:"relative",borderRadius:"2px",borderRight:e<2?"".concat(3,"px solid ").concat(i.baseColor.background.light):void 0,backgroundColor:i.baseColor.background.light,zIndex:3-e,marginLeft:t}}},c=function(e){var n=e.entities,i=e.size,a=(0,m.I)(),t=3*(i+3)-.5*i-.75*i;return d.createElement(l.x,{display:"flex",overflow:"hidden",width:"".concat(t,"px"),borderRadius:"0 3px 3px 0",position:"relative",flexShrink:"0"},n.slice(0,3).map((function(e,n){return d.createElement("div",{key:n,className:a(u(n,i))},d.createElement(k,{entity:e,size:i}))})))},v=i(1109),N=i(73279),S=i(93310),p=i(20113),g=i(67713),F=i(92661),f=i(92305),y={display:"flex",marginBottom:"16px",alignItems:"flex-start"},C=function(e){var n=e.catalog,i=e.titleMargin,a=(0,m.I)(),o=(0,g.n)({name:"detail",scale:"S",color:"LIGHTER"}),s=(0,F.qt)("ShowUserList",{username:n.creator.username||"",catalogSlugId:(0,f.EJ)(n)}),r=n.itemsConnection.items.map((function(e){return e.entity})),k=n.viewerEdge.followersCount;return d.createElement(S.r,{href:s,rules:y},d.createElement(c,{entities:r,size:48}),d.createElement(l.x,{marginLeft:"16px"},d.createElement(p.X6,{clamp:2,scale:"XS"},n.predefined?(0,f.S6)(n.predefined):n.name),d.createElement("div",{className:a([o,{display:"flex",marginTop:i}])},(0,v.SZ)(n),k?d.createElement(d.Fragment,null,d.createElement(N.O,{margin:"0 8px"}),k," ",t()("save",k)):null)))}},9970:(e,n,i)=>{"use strict";i.d(n,{g:()=>a});var a={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherName_publisher"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}}]}}]}},57831:(e,n,i)=>{"use strict";i.d(n,{h:()=>l});var a=i(319),t=i.n(a),d=i(68216),l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherFollowersCount_publisher"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"slug"}},{kind:"Field",name:{kind:"Name",value:"subscriberCount"}},{kind:"FragmentSpread",name:{kind:"Name",value:"collectionUrl_collection"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"socialStats"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"followerCount"}}]}},{kind:"Field",name:{kind:"Name",value:"username"}},{kind:"FragmentSpread",name:{kind:"Name",value:"userUrl_user"}}]}}]}}].concat(t()(d.nf.definitions),t()(d.$m.definitions))}},84492:(e,n,i)=>{"use strict";i.d(n,{i:()=>m});var a=i(319),t=i.n(a),d=i(78693),l=i(44210),m={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"FollowAndSubscribeButtons_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"UserFollowButton_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserSubscribeButton_user"}}]}}].concat(t()(d.s.definitions),t()(l.w.definitions))}},44210:(e,n,i)=>{"use strict";i.d(n,{w:()=>l});var a=i(319),t=i.n(a),d=i(31579),l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"UserSubscribeButton_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"isPartnerProgramEnrolled"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"viewerEdge"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"isFollowing"}},{kind:"Field",name:{kind:"Name",value:"isUser"}}]}},{kind:"Field",name:{kind:"Name",value:"viewerIsUser"}},{kind:"Field",name:{kind:"Name",value:"newsletterV3"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"useNewsletterV3Subscription_newsletterV3"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"useNewsletterV3Subscription_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"MembershipUpsellModal_user"}}]}}].concat(t()(d.DI.definitions),t()(d.nj.definitions),t()([{kind:"FragmentDefinition",name:{kind:"Name",value:"MembershipUpsellModal_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"imageId"}},{kind:"Field",name:{kind:"Name",value:"postSubscribeMembershipUpsellShownAt"}},{kind:"Field",name:{kind:"Name",value:"newsletterV3"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}}]}}]))}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/9150.d74865ec.chunk.js.map