(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4608],{27181:function(e,t,r){"use strict";var s=r(809),n=r.n(s),a=r(92809),l=r(85893),c=r(30266),i=r(87077),o=r(13977),d=r(61553),u=r(42283),x=r(56994);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f="common:text-subscribe-heading",g="common:text-subscribe-description",h="common:button-subscribe",b={subscription_email:""};t.Z=function(e){var t,r=e.className,s=void 0===r?"px-5 sm:px-8 md:px-16 2xl:px-24":r,a=(0,u.cI)({defaultValues:b}),m=a.register,j=a.handleSubmit,y=a.formState.errors,N=(0,x.$G)().t,v=f,w=g,O=h;function Z(){return(Z=(0,c.Z)(n().mark((function e(t){return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t,"data");case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,l.jsxs)("div",{className:"".concat(s," flex flex-col xl:flex-row justify-center xl:justify-between items-center rounded-lg bg-gray-200 py-10 md:py-14 lg:py-16"),children:[(0,l.jsxs)("div",{className:"-mt-1.5 lg:-mt-2 xl:-mt-0.5 text-center xl:text-start mb-7 md:mb-8 lg:mb-9 xl:mb-0",children:[(0,l.jsx)(i.Z,{variant:"mediumHeading",className:"mb-2 md:mb-2.5 lg:mb-3 xl:mb-3.5",children:N("".concat(v))}),(0,l.jsx)("p",{className:"text-body text-xs md:text-sm leading-6 md:leading-7",children:N("".concat(w))})]}),(0,l.jsx)("form",{onSubmit:j((function(e){return Z.apply(this,arguments)})),className:"flex-shrink-0 w-full sm:w-96 md:w-[545px]",noValidate:!0,children:(0,l.jsxs)("div",{className:"flex flex-col sm:flex-row items-start justify-end",children:[(0,l.jsx)(o.Z,p(p({placeholderKey:"forms:placeholder-email-subscribe",type:"email",variant:"solid",className:"w-full",inputClassName:"px-4 lg:px-7 h-12 lg:h-14 text-center sm:text-start bg-white"},m("subscription_email",{required:"forms:email-required",pattern:{value:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:"forms:email-error"}})),{},{errorKey:null===(t=y.subscription_email)||void 0===t?void 0:t.message})),(0,l.jsx)(d.Z,{className:"mt-3 sm:mt-0 w-full sm:w-auto sm:ms-2 md:h-full flex-shrink-0",children:(0,l.jsx)("span",{className:"lg:py-0.5",children:N("".concat(O))})})]})})]})}},37613:function(e,t,r){"use strict";r.d(t,{Z:function(){return v}});var s=r(85893),n=r(56722),a=r(89691),l=r(41664),c=r(11163),i=r(60155),o=r(39524),d=r(809),u=r.n(d),x=r(30266),m=r(97014),p=r(31955),f=r(88767);function g(){return(g=(0,x.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{ok:!0,message:"Logout Successful!"});case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h=function(){var e=(0,m.l8)().unauthorize;return(0,f.useMutation)((function(){return function(){return g.apply(this,arguments)}()}),{onSuccess:function(t){p.Z.remove("auth_token"),e(),c.default.push("/")},onError:function(e){console.log(e,"logout error response")}})},b=r(56994),j=[{slug:o.Z.ACCOUNT,name:"text-dashboard",icon:(0,s.jsx)(i.yl6,{className:"w-5 h-5"})},{slug:o.Z.ORDERS,name:"text-orders",icon:(0,s.jsx)(i.toq,{className:"w-5 h-5"})},{slug:o.Z.ACCOUNT_DETAILS,name:"text-account-details",icon:(0,s.jsx)(i.FJ3,{className:"w-5 h-5"})},{slug:o.Z.CHANGE_PASSWORD,name:"text-change-password",icon:(0,s.jsx)(i.Fuo,{className:"w-5 h-5"})}];function y(){var e=h().mutate,t=(0,c.useRouter)().pathname.split("/").slice(2,3),r="/".concat(t[0]),n=(0,b.$G)("common").t;return(0,s.jsxs)("nav",{className:"flex flex-col md:w-2/6 2xl:w-4/12 md:pe-8 lg:pe-12 xl:pe-16 2xl:pe-20 pb-2 md:pb-0",children:[j.map((function(e){var t=e.slug.split("/").slice(2,3),a="/".concat(t[0]);return(0,s.jsx)(l.default,{href:e.slug,children:(0,s.jsxs)("a",{className:r===a?"bg-gray-100 font-semibold flex items-center cursor-pointer text-sm lg:text-base text-heading py-3.5 px-4 lg:px-5 rounded mb-2 ":"flex items-center cursor-pointer text-sm lg:text-base text-heading font-normal py-3.5 px-4 lg:px-5 rounded mb-2",children:[e.icon,(0,s.jsx)("span",{className:"ps-2",children:n("".concat(e.name))})]})},e.slug)})),(0,s.jsxs)("button",{className:"flex items-center cursor-pointer text-sm lg:text-base text-heading font-normal py-3.5 px-4 lg:px-5 focus:outline-none",onClick:function(){return e()},children:[(0,s.jsx)(i.qgu,{className:"w-5 h-5"}),(0,s.jsx)("span",{className:"ps-2",children:n("text-logout")})]})]})}var N=r(27181),v=function(e){var t=e.children;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.Z,{pageHeader:"text-page-my-account"}),(0,s.jsxs)(a.Z,{children:[(0,s.jsx)("div",{className:"py-16 lg:py-20 px-0 xl:max-w-screen-xl mx-auto flex  md:flex-row w-full",children:(0,s.jsxs)("div",{className:"flex flex-col md:flex-row w-full",children:[(0,s.jsx)(y,{}),(0,s.jsx)("div",{className:"md:w-4/6 2xl:w-8/12 mt-4 md:mt-0",children:t})]})}),(0,s.jsx)(N.Z,{})]})]})}},97412:function(e,t,r){"use strict";var s=r(85893),n=r(81242),a=r(54718),l=r(11163),c=r(56994),i=function(e){var t=e.product,r=(0,a.ZP)({amount:t.price*t.quantity,currencyCode:"INR"}).price;return(0,s.jsxs)("tr",{className:"border-b font-normal border-gray-300 last:border-b-0",children:[(0,s.jsxs)("td",{className:"p-4",children:[t.name," * ",t.quantity]}),(0,s.jsx)("td",{className:"p-4",children:r})]},t.id)};t.Z=function(e){var t=e.className,r=void 0===t?"pt-10 lg:pt-12":t,o=(0,l.useRouter)().query.id,d=(0,c.$G)("common").t,u=(0,n.O)(null===o||void 0===o?void 0:o.toString()),x=u.data,m=u.isLoading,p=(0,a.ZP)(x&&{amount:x.total,currencyCode:"INR"}).price,f=(0,a.ZP)(x&&{amount:x.shipping_fee?x.total+x.shipping_fee:x.total,currencyCode:"INR"}).price,g=(0,a.ZP)(x&&{amount:x.shipping_fee,currencyCode:"INR"}).price;return m?(0,s.jsx)("p",{children:"Loading..."}):(0,s.jsxs)("div",{className:r,children:[(0,s.jsxs)("h2",{className:"text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8",children:[d("text-order-details"),":"]}),(0,s.jsxs)("table",{className:"w-full text-heading font-semibold text-sm lg:text-base",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{className:"bg-gray-150 p-4 text-start first:rounded-ts-md w-1/2",children:d("text-product")}),(0,s.jsx)("th",{className:"bg-gray-150 p-4 text-start last:rounded-te-md w-1/2",children:d("text-total")})]})}),(0,s.jsx)("tbody",{children:null===x||void 0===x?void 0:x.products.map((function(e,t){return(0,s.jsx)(i,{product:e},t)}))}),(0,s.jsxs)("tfoot",{children:[(0,s.jsxs)("tr",{className:"odd:bg-gray-150",children:[(0,s.jsxs)("td",{className:"p-4 italic",children:[d("text-sub-total"),":"]}),(0,s.jsx)("td",{className:"p-4",children:p})]}),(0,s.jsxs)("tr",{className:"odd:bg-gray-150",children:[(0,s.jsxs)("td",{className:"p-4 italic",children:[d("text-shipping"),":"]}),(0,s.jsxs)("td",{className:"p-4",children:[g,(0,s.jsx)("span",{className:"text-[13px] font-normal ps-1.5 inline-block",children:"via Flat rate"})]})]}),(0,s.jsxs)("tr",{className:"odd:bg-gray-150",children:[(0,s.jsxs)("td",{className:"p-4 italic",children:[d("text-payment-method"),":"]}),(0,s.jsx)("td",{className:"p-4",children:null===x||void 0===x?void 0:x.payment_gateway})]}),(0,s.jsxs)("tr",{className:"odd:bg-gray-150",children:[(0,s.jsxs)("td",{className:"p-4 italic",children:[d("text-total"),":"]}),(0,s.jsx)("td",{className:"p-4",children:f})]}),(0,s.jsxs)("tr",{className:"odd:bg-gray-150",children:[(0,s.jsxs)("td",{className:"p-4 italic",children:[d("text-note"),":"]}),(0,s.jsx)("td",{className:"p-4",children:"new order"})]})]})]})]})}},56722:function(e,t,r){"use strict";var s=r(85893),n=r(56994);t.Z=function(e){var t=e.pageSubHeader,r=void 0===t?"text-page-explore":t,a=e.pageHeader,l=void 0===a?"text-page-header":a,c=(0,n.$G)("common").t;return(0,s.jsxs)("div",{className:"flex justify-center p-6 md:p-10 2xl:p-8 relative bg-no-repeat bg-center bg-cover",style:{backgroundImage:"url(/assets/images/page-header.jpg)"},children:[(0,s.jsx)("div",{className:"absolute top-0 start-0 bg-black w-full h-full opacity-50 transition-opacity duration-500 group-hover:opacity-80"}),(0,s.jsx)("div",{className:"w-full flex items-center justify-center relative z-10 py-10 md:py-14 lg:py-20 xl:py-24 2xl:py-32",children:(0,s.jsxs)("h2",{className:"text-xl md:text-2xl lg:text-3xl font-bold text-white text-center",children:[(0,s.jsx)("span",{className:"font-satisfy block font-normal mb-3",children:c("".concat(r))}),c("".concat(l))]})})]})}},87077:function(e,t,r){"use strict";var s=r(92809),n=r(85893),a=(r(67294),r(94184)),l=r.n(a);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){var t=e.style,r=e.className,s=e.variant,a=void 0===s?"body":s,c=e.children,o=e.html,d={body:"p",mediumHeading:"h3",heading:"h4",pageHeading:"h1",subHeading:"h2"}[a],u=o?{dangerouslySetInnerHTML:{__html:o}}:{};return(0,n.jsx)(d,i(i({className:l()({"text-body text-sm sm:leading-6 leading-7":"body"===a,"text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold":"mediumHeading"===a,"text-heading text-sm md:text-base xl:text-lg font-semibold":"heading"===a,"text-2xl font-bold text-heading":"pageHeading"===a,"text-heading text-lg md:text-2xl xl:text-3xl 2xl:text-4xl  font-bold":"subHeading"===a},r),style:t},u),{},{children:c}))}},81242:function(e,t,r){"use strict";r.d(t,{O:function(){return d}});var s=r(809),n=r.n(s),a=r(30266),l=r(7235),c=r(63833),i=r(88767),o=function(){var e=(0,a.Z)(n().mark((function e(t){var r,s;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.Z.get("".concat(c.P.ORDER));case 2:return r=e.sent,s=r.data,e.abrupt("return",s);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){return(0,i.useQuery)([c.P.ORDER,e],(function(){return o(e)}))}},45961:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return c},default:function(){return i}});var s=r(85893),n=r(89970),a=r(37613),l=r(97412),c=!0;function i(){return(0,s.jsx)(a.Z,{children:(0,s.jsx)(l.Z,{className:"p-0"})})}i.Layout=n.Z},84380:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/my-account/orders/[id]",function(){return r(45961)}])}},function(e){e.O(0,[5445,6556,5868,9970,9774,2888,179],(function(){return t=84380,e(e.s=t);var t}));var t=e.O();_N_E=t}]);