(this["webpackJsonpchess-board-setup"]=this["webpackJsonpchess-board-setup"]||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var i=c(1),n=c.n(i),o=c(4),s=c.n(o),l=(c(9),c(3)),r=(c(10),c(0)),d=function(e){var t=e.color,c=e.square;return Object(r.jsx)("div",{style:{backgroundColor:t},"square-id":{square:c},className:"square"})},a=function(){for(var e=[],t=0;t<64;t++){var c="white";c=Math.floor(t/8)%2===0?t%2===1?"black":"white":t%2===1?"white":"black",e.push(Object(r.jsx)(d,{color:c},t.toString()))}return Object(r.jsx)("div",{className:"board",children:e})},j=function(e){var t=e.piece_id,c=e.white,i=e.onPieceSelected,n=e.selected_piece,o="\u2659\u2656\u2658\u2657\u2655\u2654\u265f\u265c\u265e\u265d\u265b\u265a"[t+(c?0:6)];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("input",{id:"piece_button",type:"radio",name:"piece",value:t.toString(),checked:n===t,onClick:function(){return i(t)}}),Object(r.jsx)("label",{className:"piece_button_class",htmlFor:"piece_button",children:o})]})},u=function(e){var t=e.white,c=e.selected_piece,i=e.onToggleColor,n=e.onPieceSelected;return Object(r.jsxs)("div",{className:"piece-selector",children:[Object(r.jsx)("button",{type:"button",onClick:i,children:"Toggle Color"}),Object(r.jsx)(j,{piece_id:0,white:t,onPieceSelected:n,selected_piece:c}),Object(r.jsx)(j,{piece_id:1,white:t,onPieceSelected:n,selected_piece:c}),Object(r.jsx)(j,{piece_id:2,white:t,onPieceSelected:n,selected_piece:c}),Object(r.jsx)(j,{piece_id:3,white:t,onPieceSelected:n,selected_piece:c}),Object(r.jsx)(j,{piece_id:4,white:t,onPieceSelected:n,selected_piece:c}),Object(r.jsx)(j,{piece_id:5,white:t,onPieceSelected:n,selected_piece:c})]})};var b=function(){var e=Object(i.useState)(!0),t=Object(l.a)(e,2),c=t[0],n=t[1],o=Object(i.useState)(0),s=Object(l.a)(o,2),d=s[0],j=s[1];return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(a,{}),Object(r.jsx)(u,{white:c,selected_piece:d,onToggleColor:function(){console.log("toggling color"),n(!c)},onPieceSelected:function(e){console.log("selected ",e),j(e)}})]})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,i=t.getFID,n=t.getFCP,o=t.getLCP,s=t.getTTFB;c(e),i(e),n(e),o(e),s(e)}))};s.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(b,{})}),document.getElementById("root")),p()},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.7041b7c6.chunk.js.map