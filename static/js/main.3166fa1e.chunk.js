(this["webpackJsonpchess-board-setup"]=this["webpackJsonpchess-board-setup"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(6),i=c.n(s),r=(c(12),c(5)),d=(c(13),c(0)),l=function(e){var t=e.color,c=e.square_id,n=e.piece_value,a=e.add_piece;return Object(d.jsx)("div",{className:t,onClick:function(){return a(c)},children:n},c)},o=function(e){for(var t=e.board_state,c=e.add_piece,n=[],a=0;a<64;a++){var s="white-square";s=Math.floor(a/8)%2===0?a%2===1?"dark-square":"white-square":a%2===1?"white-square":"dark-square",n.push(Object(d.jsx)(l,{color:s,square_id:a,piece_value:t[a],add_piece:c},a.toString()))}return Object(d.jsx)("div",{className:"board",children:n})},u=c(7),j=function(e){var t=e.piece_id,c=e.handleChange,n=e.selected_id;return Object(d.jsxs)("div",{className:"piece-radio",children:[Object(d.jsx)("input",{type:"radio",id:t,name:"piece",onChange:c,value:t,checked:n===t}),Object(d.jsx)("label",{className:"piece-label",htmlFor:t,children:t})]})},b=function(e){var t=e.selected_piece,c=e.handleChange,n=Object(u.a)("_\u2659\u2656\u2658\u2657\u2655\u2654\u265f\u265c\u265e\u265d\u265b\u265a").map((function(e){return Object(d.jsx)(j,{piece_id:e,handleChange:c,selected_id:t},e)}));return Object(d.jsx)("div",{className:"piece-selection-container",children:n})},h=function(){return Object(d.jsxs)("label",{class:"switch",children:[Object(d.jsx)("input",{type:"checkbox"}),Object(d.jsx)("span",{class:"slider round"}),"test"]})};var p=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Array(64).fill(" "),i=Object(n.useState)(s),l=Object(r.a)(i,2),u=l[0],j=l[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("div",{className:"main-container",children:[Object(d.jsx)(o,{board_state:u,add_piece:function(e){var t="_"===c?" ":c,n=u.slice();n[e]=t,j(n)}}),Object(d.jsx)(b,{selected_piece:c,handleChange:function(e){a(e.target.value)}})]}),Object(d.jsx)("div",{className:"options-container",children:Object(d.jsx)(h,{})})]})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),O()}},[[15,1,2]]]);
//# sourceMappingURL=main.3166fa1e.chunk.js.map