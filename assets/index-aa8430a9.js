var r={};Object.defineProperty(r,"__esModule",{value:!0});var h=r.dedent=void 0;function i(a){for(var v=[],t=1;t<arguments.length;t++)v[t-1]=arguments[t];var e=Array.from(typeof a=="string"?[a]:a);e[e.length-1]=e[e.length-1].replace(/\r?\n([\t ]*)$/,"");var c=e.reduce(function(n,u){var g=u.match(/\n([\t ]+|(?!\s).)/g);return g?n.concat(g.map(function(s){var d,o;return(o=(d=s.match(/[\t ]/g))===null||d===void 0?void 0:d.length)!==null&&o!==void 0?o:0})):n},[]);if(c.length){var f=new RegExp(`
[	 ]{`+Math.min.apply(Math,c)+"}","g");e=e.map(function(n){return n.replace(f,`
`)})}e[0]=e[0].replace(/^\r?\n/,"");var l=e[0];return v.forEach(function(n,u){l+=n+e[u+1]}),l}h=r.dedent=i;var p=r.default=i;export{p as _,h as d};
//# sourceMappingURL=index-aa8430a9.js.map
