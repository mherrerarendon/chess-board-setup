(this["webpackJsonpchess-board-setup"]=this["webpackJsonpchess-board-setup"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var s=c(1),i=c.n(s),n=c(6),a=c.n(n),r=(c(12),c(2)),l=(c(13),c(0)),d=function(e){var t=e.color,c=e.square_id,s=e.piece_value,i=e.add_piece;return Object(l.jsx)("div",{className:t,onClick:function(){return i(c)},children:s},c)},j=function(e){for(var t=e.board_state,c=e.add_piece,s=[],i=0;i<64;i++){var n="white-square";n=Math.floor(i/8)%2===0?i%2===1?"dark-square":"white-square":i%2===1?"white-square":"dark-square",s.push(Object(l.jsx)(d,{color:n,square_id:i,piece_value:t[i],add_piece:c},i.toString()))}return Object(l.jsx)("div",{className:"board",children:s})},h=c(7),o=function(e){var t=e.piece_id,c=e.set_piece,s=e.selected_id;return Object(l.jsxs)("div",{className:"piece-radio",children:[Object(l.jsx)("input",{type:"radio",id:t,name:"piece",onChange:function(e){return c(e.target.value)},value:t,checked:s===t}),Object(l.jsx)("label",{className:"piece-label",htmlFor:t,children:t})]})},b=function(e){var t=e.selected_piece,c=e.set_piece,s=Object(h.a)("_\u2659\u2656\u2658\u2657\u2655\u2654\u265f\u265c\u265e\u265d\u265b\u265a").map((function(e){return Object(l.jsx)(o,{piece_id:e,set_piece:c,selected_id:t},e)}));return Object(l.jsx)("div",{className:"piece-selection-container",children:s})},u=(c(15),function(e){var t=e.id,c=e.name,s=e.checked,i=e.onChange,n=e.optionLabels,a=e.small,r=e.disabled;return Object(l.jsxs)("div",{className:"toggle-switch"+(a?" small-switch":""),children:[Object(l.jsx)("input",{type:"checkbox",name:c,className:"toggle-switch-checkbox",id:t,checked:s,onChange:function(e){return i(e.target.checked)},disabled:r}),t?Object(l.jsxs)("label",{className:"toggle-switch-label",htmlFor:t,tabIndex:r?-1:1,onKeyDown:function(e){!function(e){32===e.keyCode&&(e.preventDefault(),i(!s))}(e)},children:[Object(l.jsx)("span",{className:r?"toggle-switch-inner toggle-switch-disabled":"toggle-switch-inner","data-yes":n[0],"data-no":n[1],tabIndex:-1}),Object(l.jsx)("span",{className:r?"toggle-switch-switch toggle-switch-disabled":"toggle-switch-switch",tabIndex:-1})]}):null]})});u.defaultProps={optionLabels:["Yes","No"]};var g=u;var O=function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),i=t[0],n=t[1],a=Array(64).fill(" "),d=Object(s.useState)(a),h=Object(r.a)(d,2),o=h[0],u=h[1],O=Object(s.useState)(!0),x=Object(r.a)(O,2),p=x[0],_=x[1],f=Object(s.useState)(!0),v=Object(r.a)(f,2),m=v[0],k=v[1],w=Object(s.useState)(!0),N=Object(r.a)(w,2),C=N[0],q=N[1],F=Object(s.useState)(!0),S=Object(r.a)(F,2),y=S[0],I=S[1],L=Object(s.useState)(!0),B=Object(r.a)(L,2),D=B[0],J=B[1],K=Object(s.useState)(""),P=Object(r.a)(K,2),A=P[0],E=P[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("div",{className:"main-container",children:[Object(l.jsx)(j,{board_state:o,add_piece:function(e){var t="_"===i?" ":i,c=o.slice();c[e]=t,u(c)}}),Object(l.jsx)(b,{selected_piece:i,set_piece:n})]}),Object(l.jsxs)("div",{className:"options-container",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)(g,{id:"starting-color",checked:p,onChange:function(e){return _(e)}}),Object(l.jsx)("label",{htmlFor:"starting-color",children:"White to start"})]}),Object(l.jsxs)("div",{className:"castling-rights-container",children:[Object(l.jsx)("h2",{children:"White Castling Rights"}),Object(l.jsxs)("div",{children:[Object(l.jsx)(g,{id:"white-king-castle-rights",checked:m,onChange:function(e){return k(e)}}),Object(l.jsx)("label",{htmlFor:"white-king-castle-rights",children:"King side"})]}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{children:[Object(l.jsx)(g,{id:"white-queen-castle-rights",checked:C,onChange:function(e){return q(e)}}),Object(l.jsx)("label",{htmlFor:"white-queen-castle-rights",children:"Queen side"})]})]}),Object(l.jsxs)("div",{className:"castling-rights-container",children:[Object(l.jsx)("h2",{children:"Black Castling Rights"}),Object(l.jsxs)("div",{children:[Object(l.jsx)(g,{id:"black-king-castle-rights",checked:y,onChange:function(e){return I(e)}}),Object(l.jsx)("label",{htmlFor:"black-king-castle-rights",children:"King side"})]}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{children:[Object(l.jsx)(g,{id:"black-queen-castle-rights",checked:D,onChange:function(e){return J(e)}}),Object(l.jsx)("label",{htmlFor:"black-queen-castle-rights",children:"Queen side"})]})]}),Object(l.jsx)("button",{onClick:function(){var e={white_to_start:p,white_king_side_castle:m,white_queen_side_castle:C,black_king_side_castle:y,black_queen_side_castle:D,squares:o};c.e(3).then(c.bind(null,20)).then((function(t){var c=t.get_fen_wasm(JSON.stringify(e));E(c)}))},children:"Get FEN"})]}),Object(l.jsx)("div",{className:"fen-container",children:Object(l.jsx)("p",{children:A})})]})},x=function(e){e&&e instanceof Function&&c.e(4).then(c.bind(null,21)).then((function(t){var c=t.getCLS,s=t.getFID,i=t.getFCP,n=t.getLCP,a=t.getTTFB;c(e),s(e),i(e),n(e),a(e)}))};a.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root")),x()}},[[16,1,2]]]);
//# sourceMappingURL=main.c28a606e.chunk.js.map