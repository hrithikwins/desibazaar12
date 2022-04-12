"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3945],{33945:function(e,t,r){r.r(t),r.d(t,{default:function(){return w}});var n=r(92809),o=r(85893),s=r(13977),c=r(93205),a=r(61553),i=r(42283),l=r(809),u=r.n(l),m=r(30266),d=r(97014),f=r(31955),p=r(88767);function b(){return(b=(0,m.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{token:"".concat(t.email,".").concat(t.remember_me).split("").reverse().join("")});case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h=function(){var e=(0,d.l8)(),t=e.authorize,r=e.closeModal;return(0,p.useMutation)((function(e){return function(e){return b.apply(this,arguments)}(e)}),{onSuccess:function(e){f.Z.set("auth_token",e.token),t(),r()},onError:function(e){console.log(e,"login error response")}})},x=r(99300),j=r(53990),g=r(56994);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w=function(){var e,t,r=(0,g.$G)().t,n=(0,d.l8)(),l=n.setModalView,u=n.openModal,m=n.closeModal,f=h(),p=f.mutate,b=f.isLoading,y=(0,i.cI)(),w=y.register,v=y.handleSubmit,P=y.formState.errors;function N(){p({email:"demo@demo.com",password:"demo",remember_me:!0})}return(0,o.jsxs)("div",{className:"overflow-hidden bg-white mx-auto rounded-lg w-full sm:w-96 md:w-450px border border-gray-300 py-5 px-5 sm:px-8",children:[(0,o.jsxs)("div",{className:"text-center mb-6 pt-2.5",children:[(0,o.jsx)("div",{onClick:m,children:(0,o.jsx)(x.Z,{})}),(0,o.jsx)("p",{className:"text-sm md:text-base text-body mt-2 mb-8 sm:mb-10",children:r("common:login-helper")})]}),(0,o.jsx)("form",{onSubmit:v((function(e){var t=e.email,r=e.password,n=e.remember_me;p({email:t,password:r,remember_me:n}),console.log(t,r,n,"data")})),className:"flex flex-col justify-center",noValidate:!0,children:(0,o.jsxs)("div",{className:"flex flex-col space-y-3.5",children:[(0,o.jsx)(s.Z,O(O({labelKey:"forms:label-email",type:"email",variant:"solid"},w("email",{required:"".concat(r("forms:email-required")),pattern:{value:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:r("forms:email-error")}})),{},{errorKey:null===(e=P.email)||void 0===e?void 0:e.message})),(0,o.jsx)(c.Z,O({labelKey:"forms:label-password",errorKey:null===(t=P.password)||void 0===t?void 0:t.message},w("password",{required:"".concat(r("forms:password-required"))}))),(0,o.jsxs)("div",{className:"flex items-center justify-center",children:[(0,o.jsxs)("div",{className:"flex items-center flex-shrink-0",children:[(0,o.jsxs)("label",{className:"switch relative inline-block w-10 cursor-pointer",children:[(0,o.jsx)("input",O({id:"remember",type:"checkbox",className:"opacity-0 w-0 h-0"},w("remember_me"))),(0,o.jsx)("span",{className:"bg-gray-500 absolute inset-0 transition-all duration-300 ease-in slider round"})]}),(0,o.jsx)("label",{htmlFor:"remember",className:"flex-shrink-0 text-sm text-heading ps-3 cursor-pointer",children:r("forms:label-remember-me")})]}),(0,o.jsx)("div",{className:"flex ms-auto",children:(0,o.jsx)("button",{type:"button",onClick:function(){return l("FORGET_PASSWORD"),u()},className:"text-end text-sm text-heading ps-3 underline hover:no-underline focus:outline-none",children:r("common:text-forgot-password")})})]}),(0,o.jsx)("div",{className:"relative",children:(0,o.jsx)(a.Z,{type:"submit",loading:b,disabled:b,className:"h-11 md:h-12 w-full mt-1.5",children:r("common:text-login")})})]})}),(0,o.jsxs)("div",{className:"flex flex-col items-center justify-center relative text-sm text-heading mt-6 mb-3.5",children:[(0,o.jsx)("hr",{className:"w-full border-gray-300"}),(0,o.jsx)("span",{className:"absolute -top-2.5 px-2 bg-white",children:r("common:text-or")})]}),(0,o.jsxs)(a.Z,{loading:b,disabled:b,className:"h-11 md:h-12 w-full mt-2.5 bg-facebook hover:bg-facebookHover",onClick:N,children:[(0,o.jsx)(j.AgZ,{className:"text-sm sm:text-base me-1.5"}),r("common:text-login-with-facebook")]}),(0,o.jsxs)(a.Z,{loading:b,disabled:b,className:"h-11 md:h-12 w-full mt-2.5 bg-google hover:bg-googleHover",onClick:N,children:[(0,o.jsx)(j.v74,{className:"text-sm sm:text-base me-1.5"}),r("common:text-login-with-google")]}),(0,o.jsxs)("div",{className:"text-sm sm:text-base text-body text-center mt-5 mb-1",children:[r("common:text-no-account")," ",(0,o.jsx)("button",{type:"button",className:"text-sm sm:text-base text-heading underline font-bold hover:no-underline focus:outline-none",onClick:function(){return l("SIGN_UP_VIEW"),u()},children:r("common:text-register")})]})]})}},99300:function(e,t,r){var n=r(92809),o=r(85893),s=r(22500),c=r(25675),a=r(13407),i=r(94184),l=r.n(i),u=r(78833);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){var t=e.className,r=(0,s.Z)(e,["className"]);return(0,o.jsx)(a.Z,d(d({href:u.U.logo.href,className:l()("inline-flex focus:outline-none",t)},r),{},{children:(0,o.jsx)(c.default,{src:u.U.logo.url,alt:u.U.logo.alt,height:u.U.logo.height,width:u.U.logo.width,layout:"fixed",loading:"eager"})}))}},93205:function(e,t,r){r.d(t,{Z:function(){return g}});var n=r(85893),o=r(92809),s=r(22500),c=r(94184),a=r.n(c),i=r(67294);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m=function(e){return(0,n.jsxs)("svg",u(u({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),{},{children:[(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]}))};function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=function(e){return(0,n.jsx)("svg",f(f({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),{},{children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"})}))},b=r(56994);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border border-gray-500 text-input text-xs lg:text-sm font-body rounded-md placeholder-gray-600  transition duration-200 ease-in-out bg-white border border-gray-100 focus:outline-none focus:border-heading h-11 md:h-12",g=i.forwardRef((function(e,t){var r=e.className,o=void 0===r?"block":r,c=e.inputClassName,l=e.labelKey,u=e.name,d=e.errorKey,f=(e.shadow,(0,s.Z)(e,["className","inputClassName","labelKey","name","errorKey","shadow"])),h=(0,i.useState)(!1),g=h[0],y=h[1],O=a()(j,c),w=(0,b.$G)().t;return(0,n.jsxs)("div",{className:o,children:[l&&(0,n.jsx)("label",{htmlFor:u,className:"block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer",children:w(l)}),(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("input",x({id:u,name:u,type:g?"text":"password",ref:t,className:O,autoComplete:"off",autoCapitalize:"off",spellCheck:"false"},f)),(0,n.jsx)("label",{htmlFor:u,className:"absolute end-4 top-5 -mt-2 text-gray-500 cursor-pointer",onClick:function(){return y((function(e){return!e}))},children:g?(0,n.jsx)(p,{className:"w-6 h-6"}):(0,n.jsx)(m,{className:"w-6 h-6"})})]}),d&&(0,n.jsx)("p",{className:"my-2 text-xs text-red-500",children:w(d)})]})}))},30266:function(e,t,r){function n(e,t,r,n,o,s,c){try{var a=e[s](c),i=a.value}catch(l){return void r(l)}a.done?t(i):Promise.resolve(i).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,s){var c=e.apply(t,r);function a(e){n(c,o,s,a,i,"next",e)}function i(e){n(c,o,s,a,i,"throw",e)}a(void 0)}))}}r.d(t,{Z:function(){return o}})}}]);