(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8942],{66061:function(e,t,n){"use strict";n.d(t,{e:function(){return y}});var r=n(85893),s=n(92809),l=n(96628),i=n(61553),a=n(809),c=n.n(a),o=n(16502),d=n(30266),u=n(63833),x=n(7235),m=n(69983),f=n.n(m),p=n(88767),h=function(){var e=(0,d.Z)(c().mark((function e(t){var n,r,s,l;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.queryKey,r=(0,o.Z)(n,2),r[0],r[1],e.next=4,x.Z.get(u.P.PRODUCTS);case 4:return s=e.sent,l=s.data,e.abrupt("return",{data:f()(l),paginatorInfo:{nextPageUrl:""}});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=n(11163),j=n(9761),b=n(56994);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var y=function(e){var t,n,a,c=e.className,o=void 0===c?"":c,d=(0,g.useRouter)().query,x=(a=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({limit:10},d),(0,p.useInfiniteQuery)([u.P.PRODUCTS,a],h,{getNextPageParam:function(e){return e.paginatorInfo.nextPageUrl}})),m=x.isFetching,f=x.isFetchingNextPage,y=x.fetchNextPage,N=x.hasNextPage,w=x.data,O=x.error;if(O)return(0,r.jsx)("p",{children:O.message});var P=(0,b.$G)("common").t;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8 ".concat(o),children:!m||null!==w&&void 0!==w&&null!==(t=w.pages)&&void 0!==t&&t.length?null===w||void 0===w||null===(n=w.pages)||void 0===n?void 0:n.map((function(e){var t;return null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.map((function(e){return(0,r.jsx)(l.Z,{product:e,variant:"grid"},"product--key".concat(e.id))}))})):(0,r.jsx)(j.Z,{limit:20,uniqueKey:"search-product"})}),(0,r.jsx)("div",{className:"text-center pt-8 xl:pt-14",children:N&&(0,r.jsx)(i.Z,{loading:f,disabled:f,onClick:function(){return y()},variant:"slim",children:P("button-load-more")})})]})}},61401:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return L},default:function(){return T}});var r=n(85893),s=n(89691),l=n(89970),i=n(27181),a=n(99617),c=n(66061),o=n(32963),d=n(45249),u=n(39524),x=n(56994),m=n(90002),f=n(5434),p=n(87077),h=n(97014),g=n(11163),j=n(80991),b=n(54285),v=n(60155),y=(n(67294),n(809)),N=n.n(y),w=n(16502),O=n(30266),P=n(7235),k=n(63833),Z=n(88767),C=function(){var e=(0,O.Z)(N().mark((function e(t){var n,r,s,l;return N().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.queryKey,r=(0,w.Z)(n,2),r[0],r[1],e.next=4,P.Z.get(k.P.COLLECTIONS);case 4:return s=e.sent,l=s.data.data,e.abrupt("return",{collections:{data:l}});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e,t=(0,x.$G)("common").t,n=(e={limit:15},(0,Z.useQuery)([k.P.COLLECTIONS,e],C)),s=n.data;if(n.isLoading)return(0,r.jsx)("p",{children:"Loading..."});var l=(0,g.useRouter)().asPath.split("/").slice(2,3).join(),i=null===s||void 0===s?void 0:s.collections.data;return(0,r.jsxs)("div",{className:"pt-1",children:[(0,r.jsx)("div",{className:"block border-b border-gray-300 pb-5 mb-7",children:(0,r.jsx)("div",{className:"flex items-center justify-between mb-2.5",children:(0,r.jsx)("h2",{className:"font-semibold text-heading text-xl md:text-2xl",children:t("text-collection-list")})})}),(0,r.jsx)("div",{className:"block pb-7",children:(0,r.jsx)("ul",{className:"mt-2 flex flex-col space-y-5",children:null===i||void 0===i?void 0:i.map((function(e){return(0,r.jsx)("li",{className:"text-sm lg:text-[15px] cursor-pointer",children:(0,r.jsx)(o.Z,{href:"".concat(u.Z.COLLECTIONS,"/").concat(e.slug),children:(0,r.jsx)("a",{className:"block transition duration-300 ease-in-out text-heading hover:font-semibold py-0.5 ".concat(l===e.slug&&"font-semibold"),children:e.name})})},e.id)}))})})]})},S=function(){var e=(0,h.l8)().closeFilter,t=(0,g.useRouter)(),n=(0,x.$G)("common").t,s=(0,j.M)(t.locale);return(0,r.jsxs)("div",{className:"flex flex-col justify-between w-full h-full",children:[(0,r.jsxs)("div",{className:"w-full border-b border-gray-100 flex justify-between items-center relative pe-5 md:pe-7 flex-shrink-0 py-0.5",children:[(0,r.jsx)("button",{className:"flex text-2xl items-center justify-center text-gray-500 px-4 md:px-5 py-6 lg:py-8 focus:outline-none transition-opacity hover:opacity-60",onClick:e,"aria-label":"close",children:"rtl"===s?(0,r.jsx)(v.qvS,{className:"text-black"}):(0,r.jsx)(v.O8Q,{className:"text-black"})}),(0,r.jsx)("h2",{className:"font-bold text-xl md:text-2xl m-0 text-heading w-full text-center pe-6",children:n("text-collections")})]}),(0,r.jsx)(b.Z,{className:"menu-scrollbar flex-grow mb-auto",children:(0,r.jsx)("div",{className:"flex flex-col py-7 px-5 md:px-7 text-heading",children:(0,r.jsx)(_,{})})}),(0,r.jsxs)("div",{className:"text-sm md:text-base leading-4 flex items-center justify-center px-7 flex-shrink-0 h-14 bg-heading text-white",children:["9,608 ",n("text-items")]})]})},E=function(){var e=(0,h.l8)(),t=e.openFilter,n=e.displayFilter,s=e.closeFilter,l=(0,x.$G)("common").t,i=(0,g.useRouter)(),a=i.locale,c=i.query.slug,o=null===c||void 0===c?void 0:c.toString().split("-").join(" "),d=(0,j.M)(a),u="ltr"===d?{left:0}:{right:0};return(0,r.jsxs)("div",{className:"flex justify-between items-center mb-7",children:[(0,r.jsx)(p.Z,{variant:"pageHeading",className:"hidden lg:inline-flex pb-1 capitalize",children:o}),(0,r.jsxs)("button",{className:"lg:hidden text-heading text-sm px-4 py-2 font-semibold border border-gray-300 rounded-md flex items-center transition duration-200 ease-in-out focus:outline-none hover:bg-gray-200",onClick:t,children:[(0,r.jsx)(f.djY,{className:"text-lg"}),(0,r.jsx)("span",{className:"ps-2",children:l("text-filters")})]}),(0,r.jsx)("div",{className:"flex items-center justify-end",children:(0,r.jsxs)("div",{className:"flex-shrink-0 text-body text-xs md:text-sm leading-4",children:["9,608 ",l("text-items")]})}),(0,r.jsx)(m.d,{placement:"rtl"===d?"right":"left",open:n,onClose:s,handler:!1,showMask:!0,level:null,contentWrapperStyle:u,children:(0,r.jsx)(S,{})})]})},L=!0;function T(){var e=(0,x.$G)("common").t;return(0,r.jsx)("div",{className:"border-t-2 border-borderBottom",children:(0,r.jsxs)(s.Z,{children:[(0,r.jsxs)("div",{className:"flex pt-8 pb-16 lg:pb-20",children:[(0,r.jsx)("div",{className:"flex-shrink-0 pe-24 hidden lg:block w-96",children:(0,r.jsxs)(a.Z,{offsetTop:50,offsetBottom:20,children:[(0,r.jsx)("div",{className:"pb-7",children:(0,r.jsxs)(d.x,{separator:"/",children:[(0,r.jsx)(o.Z,{href:"/",activeClassName:"font-semibold text-heading",children:(0,r.jsx)("a",{children:e("breadcrumb-home")})}),(0,r.jsx)(o.Z,{href:u.Z.SEARCH,activeClassName:"font-semibold text-heading",children:(0,r.jsx)("a",{className:"capitalize",children:e("breadcrumb-collection")})})]})}),(0,r.jsx)(_,{})]})}),(0,r.jsxs)("div",{className:"w-full lg:-ms-9",children:[(0,r.jsx)(E,{}),(0,r.jsx)(c.e,{})]})]}),(0,r.jsx)(i.Z,{})]})})}T.Layout=l.Z},4476:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/collections/[slug]",function(){return n(61401)}])}},function(e){e.O(0,[9774,5445,6556,1228,5868,89,9970,2773,2888,179],(function(){return t=4476,e(e.s=t);var t}));var t=e.O();_N_E=t}]);