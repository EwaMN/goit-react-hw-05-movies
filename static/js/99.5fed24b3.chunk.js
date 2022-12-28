"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[99],{99:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(791),a=n(87),i=n(689);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var o=n(439),u=n(754),l=function(e){var t=(0,r.useState)(null),n=(0,o.Z)(t,2),a=n[0],i=n[1];return(0,r.useEffect)((function(){e&&(0,u.DD)(e).then((function(e){i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e))}))}),[e]),{movie:a}},p=n(786),f={container:"MovieDetails_container__Ys+c9",link:"MovieDetails_link__U+v+7",containerDetail:"MovieDetails_containerDetail__r6lPU",information:"MovieDetails_information__Tt7+r",containerAddinfo:"MovieDetails_containerAddinfo__FLpm3",itemLink:"MovieDetails_itemLink__kpXYW"},d=n(184),v=function(){var e,t,n=(0,i.UO)().movieId,c=l(n).movie,s=null!==(e=null===(t=(0,i.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies";return c?(0,d.jsxs)("div",{className:f.container,children:[(0,d.jsx)(a.OL,{to:s,className:f.link,children:"\u2190 Go back"}),(0,d.jsxs)("div",{className:f.containerDetail,children:[(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(c.poster_path),alt:"".concat(c.title),width:"200"}),(0,d.jsxs)("div",{className:f.information,children:[(0,d.jsxs)("h2",{className:f.title,children:[c.title," (",c.release_date.slice(0,4),")"]}),(0,d.jsxs)("p",{className:f.paragraph,children:["User Score: ",Number.parseFloat(10*c.vote_average).toFixed(0),"%"]}),(0,d.jsx)("h3",{className:f.overview,children:"Overview"}),(0,d.jsx)("p",{className:f.paragraph,children:c.overview}),(0,d.jsx)("h4",{className:f.genres,children:"Genres"}),(0,d.jsx)("p",{className:f.paragraph,children:c.genres.map((function(e){return e.name})).join(", ")})]})]}),(0,d.jsxs)("div",{className:f.containerAddinfo,children:[(0,d.jsx)("p",{className:f.paragraph,children:"Additional Information"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{className:f.itemLink,children:(0,d.jsx)(a.rU,{to:"cast",children:"Cast"})}),(0,d.jsx)("li",{className:f.itemLink,children:(0,d.jsx)(a.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,d.jsx)(r.Suspense,{fallback:(0,d.jsx)(p.a,{}),children:(0,d.jsx)(i.j3,{})})]}):(0,d.jsx)(p.a,{})}},754:function(e,t,n){n.d(t,{Bt:function(){return f},DD:function(){return l},d5:function(){return p},k1:function(){return o},on:function(){return u}});var r=n(861),a=n(757),i=n.n(a),c=n(388),s="4b0e5241db7c1c4977d947e5e29be4ce",o=function(){var e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(s));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(s,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=99.5fed24b3.chunk.js.map