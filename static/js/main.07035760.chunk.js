(this["webpackJsonpreact-movies-app"]=this["webpackJsonpreact-movies-app"]||[]).push([[0],[,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),i=c.n(a),s=c(4),r=c.n(s),o=(c(11),c(5)),h=c(3);c(12);var j=function(e){var t,c=e.title,a=e.poster_path,i=e.overview,s=e.vote_average;return Object(n.jsxs)("div",{className:"movie",children:[Object(n.jsx)("img",{src:a?"https://image.tmdb.org/t/p/w1280"+a:"https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1340&q=80",alt:c}),Object(n.jsxs)("div",{className:"movie-info",children:[Object(n.jsx)("h3",{children:c}),Object(n.jsx)("span",{className:"tag ".concat((t=s,t>=8?"green":t>=6?"orange":"red")),children:s})]}),Object(n.jsxs)("div",{className:"movie-overview",children:[Object(n.jsx)("h3",{children:"Overview:"}),Object(n.jsx)("p",{children:i})]})]})},u=(c(13),"f29cbeafe556227a999c9277467da814"),d="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=".concat(u,"&page=1"),l="https://api.themoviedb.org/3/search/movie?api_key=".concat(u,"&query=");var p=function(){var e=Object(a.useState)([]),t=Object(h.a)(e,2),c=t[0],i=t[1],s=Object(a.useState)(""),r=Object(h.a)(s,2),u=r[0],p=r[1];return Object(a.useEffect)((function(){fetch(d).then((function(e){return e.json()})).then((function(e){i(e.results)}))}),[]),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("header",{children:Object(n.jsx)("form",{onSubmit:function(e){e.preventDefault(),u&&(fetch(l+u).then((function(e){return e.json()})).then((function(e){i(e.results)})),p(""))},children:Object(n.jsx)("input",{type:"search",className:"search",placeholder:"Search...",onChange:function(e){p(e.target.value)},value:u})})}),Object(n.jsx)("div",{className:"movie-container",children:c.length>0&&c.map((function(e){return Object(n.jsx)(j,Object(o.a)({},e),e.id)}))})]})};r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(p,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.07035760.chunk.js.map