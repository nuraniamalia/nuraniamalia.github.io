(this.webpackJsonppokecatch=this.webpackJsonppokecatch||[]).push([[3],{285:function(n,e,a){"use strict";a.r(e);var t,c,i,o,s,r,l=a(8),d=a.n(l),h=a(12),j=a(87),b=a(36),p=a(0),f=a.n(p),u=a(37),x=a(104),m=a(13),g=a(280),v=a(281),O=a(143),k=a(247),w=a(229),N=a(253),y=a(98),C=a(96),B=a(3),F=Object(u.a)(v.a)(t||(t=Object(b.a)(["\n  && {\n    min-height: 47px;\n    display: flex;\n    justify-content: space-between;\n\n    .left {\n      display: flex;\n      align-items: center;\n      text-transform: capitalize;\n    }\n\n    .logo {\n      height: 33px;\n      position: absolute;\n      width: 100%;\n      display: flex;\n      justify-content: center;\n      left: 0;\n\n      @media only screen and (max-width: 800px) {\n        display: none;\n      }\n\n      img {\n        height: 100%;\n      }\n    }\n  }\n"]))),P=Object(u.a)(g.a)(c||(c=Object(b.a)(["\n  && {\n    color: inherit;\n    background-color: white;\n    box-shadow: 1px 1px 10px #0000002b;\n  }\n"]))),E=Object(u.a)("div")(i||(i=Object(b.a)(["\n  height: 100vh;\n  overflow: hidden;\n  padding-top: 47px;\n  background: ",";\n\n  .screen-container {\n    overflow-x: hidden;\n    overflow-y: auto;\n    height: 100%;\n  }\n"])),(function(n){return n.backgroundcolor||"white"})),z=Object(N.a)(E)({active:{x:0,transition:{duration:300}},inactive:{x:-150,transition:{duration:700}}}),S=Object(m.h)((function(n){var e=f.a.useState(!0),a=Object(j.a)(e,2),t=a[0],c=a[1],i=f.a.useState(!1),o=Object(j.a)(i,2),s=o[0],r=o[1],l=f.a.useState(-1),d=Object(j.a)(l,2),h=d[0],b=d[1],p=f.a.useContext(y.a),u=p.pop,x=p.popById,m=p.isAtTop,g=p.push,v=n.history,N=n.location,E=n.backgroundColor,S=n.title,A=n.children,D="inactive";-1!==h&&m&&m(Number(h))&&(D="active"),f.a.useEffect((function(){g&&b(g())}),[]),f.a.useEffect((function(){return function(){!s&&x&&-1!==h&&x(h)}}),[h]);var T=function(){c(!1),r(!0),u&&u(),setTimeout((function(){N.state&&N.state.prevPath?v.replace(N.state.prevPath):v.goBack()}),300)};function R(){return Object(B.jsxs)(z,{backgroundcolor:E||null,pose:D,initialPose:"active",withParent:!1,children:[Object(B.jsx)(P,{children:Object(B.jsxs)(F,{children:[Object(B.jsx)("div",{className:"logo",children:Object(B.jsx)("img",{src:"/images/blockchain.png",alt:""})}),Object(B.jsxs)("div",{className:"left",children:[Object(B.jsx)(w.a,{edge:"start",color:"inherit",onClick:T,children:Object(B.jsx)(C.a,{icon:"chevron-left"})}),Object(B.jsx)(O.a,{"data-testid":"window-route-title",style:{flex:1},variant:"h6",children:S||"Window Page"})]})]})}),Object(B.jsx)("div",{className:"screen-container",children:A})]})}return"undefined"===typeof window?R():Object(B.jsx)(k.a,{fullScreen:!0,open:t,onClose:T,children:R()})})),A=a(251),D=a(259),T=a.n(D),R=Object(u.a)("div")(o||(o=Object(b.a)(["\n  display: block;\n\n  .item {\n    margin: 10px 0;\n  }\n\n  .chips {\n    margin: 30px 0;\n    display: flex;\n\n    .chip {\n      margin: 10px;\n    }\n  }\n"]))),W=function(n){var e=n.margin;return Object(B.jsxs)(R,{margin:!!e,children:[Object(B.jsx)(T.a,{width:"100%",height:"300px"}),Object(B.jsx)("div",{className:"item",children:Object(B.jsx)(T.a,{width:"50%",height:30})}),Object(B.jsx)("div",{className:"item",children:Object(B.jsx)(T.a,{width:"30%",height:20})}),Object(B.jsxs)("div",{className:"chips",children:[Object(B.jsx)("div",{className:"chip",children:Object(B.jsx)(T.a,{width:"50px",height:30})}),Object(B.jsx)("div",{className:"chip",children:Object(B.jsx)(T.a,{width:"50px",height:30})}),Object(B.jsx)("div",{className:"chip",children:Object(B.jsx)(T.a,{width:"50px",height:30})})]}),Object(B.jsxs)("div",{className:"chips",children:[Object(B.jsx)("div",{className:"chip",children:Object(B.jsx)(T.a,{width:"50px",height:30})}),Object(B.jsx)("div",{className:"chip",children:Object(B.jsx)(T.a,{width:"50px",height:30})}),Object(B.jsx)("div",{className:"chip",children:Object(B.jsx)(T.a,{width:"50px",height:30})})]})]})},I=a(283),J=a(235),L=a(69),H=a(46),M=u.a.div(s||(s=Object(b.a)(["\n  margin-right: 10px;\n  margin-bottom: 10px;\n  background: #fff;\n  color: #3fa348;\n  border-radius: 100px;\n  padding: 5px 15px;\n  text-transform: capitalize;\n  border: 1px solid #3faf48;\n"]))),Y=function(n){var e=n.value;n.className;return Object(B.jsx)(M,{className:e,children:Object(H.a)(e)})},_=u.a.div(r||(r=Object(b.a)(["\n  padding: 15px;\n  padding-top: 25px;\n  padding-bottom: 90px;\n  min-height: 100vh;\n\n  .picture {\n    width: 100%;\n    height: 300px;\n    padding: 10px;\n\n    span {\n      height: 100%;\n      width: 100%;\n    }\n\n    img {\n      width: 100%;\n      height: 100%;\n      object-fit: contain;\n      object-position: center;\n    }\n  }\n\n  .name {\n    font-weight: bold;\n    font-size: 15pt;\n    text-transform: capitalize;\n    margin-top: 20px;\n  }\n\n  .key-value {\n    display: block;\n    margin: 20px 0;\n\n    .key {\n      font-weight: bold;\n    }\n\n    .value {\n      display: flex;\n      margin-top: 10px;\n      flex-wrap: wrap;\n    }\n  }\n\n  .catch-wrapper {\n    width: 100%;\n    padding: 10px;\n    background: white;\n    border-top: 1px solid #d0d0d0;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n\n    .catch-icon {\n      margin-right: 10px;\n    }\n\n    .owned {\n      padding: 5px 0;\n\n      .owned-label {\n        font-size: 11pt;\n        text-align: left;\n        margin-bottom: 10px;\n        font-weight: bold;\n      }\n\n      .nickname-mutation-wrapper {\n        display: flex;\n        align-items: center;\n\n        .save-button {\n          margin-left: 10px;\n        }\n      }\n    }\n  }\n\n  .not-found {\n    font-size: 20pt;\n    font-weight: 300;\n    text-align: center;\n    color: #b5b5b5;\n    margin-top: 50px;\n\n    .icon {\n      font-size: 79pt;\n      opacity: 0.3;\n      display: block;\n      margin: auto;\n      margin-top: 20px;\n    }\n  }\n\n  .bug {background-color: #B1C12E; color: #fff;}\n  .dark {background-color: #4F3A2D; color: #fff;}\n  .dragon {background-color: #755EDF; color: #fff;}\n  .electric {background-color: #FCBC17; color: #fff;}\n  .fairy {background-color: #F4B1F4; color: #fff;}\n  .fighting {background-color: #823551; color: #fff;}\n  .fire {background-color: #E73B0C; color: #fff;}\n  .flying {background-color: #A3B3F7; color: #fff;}\n  .ghost {background-color: #6060B2; color: #fff;}\n  .grass {background-color: #74C236; color: #fff;}\n  .ground {background-color: #D3B357; color: #fff;}\n  .ice {background-color: #A3E7FD; color: #fff;}\n  .normal {background-color: #C8C4BC; color: #fff;}\n  .poison {background-color: #934594; color: #fff;}\n  .psychic {background-color: #ED4882; color: #fff;}\n  .rock {background-color: #B9A156; color: #fff;}\n  .steel {background-color: #B5B5C3; color: #fff;}\n  .water {background-color: #3295F6; color: #fff;}\n"])));e.default=function(n){var e=f.a.useContext(x.a),a=e.pokemon,t=e.resetPokemon,c=e.fetchPokemon,i=e.isFetchingPokemon,o=f.a.useContext(L.a),s=o.catchPokemon,r=o.isOwned,l=o.updateNickname,b=o.release,p=f.a.useState(""),u=Object(j.a)(p,2),m=u[0],g=u[1],v=f.a.useRef(null),O=n.match,k=null;return f.a.useEffect((function(){return c&&c(O.params.name),function(){t&&t()}}),[]),r&&a&&(k=r(a.name)),f.a.useEffect((function(){k&&g(k.nickname)}),[a]),Object(B.jsx)(S,{title:a?a.name:"Pokemon Detail",children:Object(B.jsx)(_,{children:i?Object(B.jsx)(W,{}):a?Object(B.jsxs)("div",{children:[Object(B.jsx)("div",{className:"picture",children:Object(B.jsx)(A.LazyLoadImage,{alt:"profile picture",placeholderSrc:"/images/placeholder.png",src:a.image_url,effect:"blur"})}),Object(B.jsx)("div",{className:"name",children:a.name}),k&&Object(B.jsxs)("div",{className:"",children:["Nickname:"," ",""===k.nickname?"Haven't named":k.nickname]}),Object(B.jsxs)("div",{className:"key-value",children:[Object(B.jsx)("div",{className:"key",children:"Species"}),Object(B.jsx)("div",{className:"value",children:a.species.name})]}),Object(B.jsxs)("div",{className:"key-value",children:[Object(B.jsx)("div",{className:"key",children:"Types"}),Object(B.jsx)("div",{className:"value",children:a.types.map((function(n,e){return Object(B.jsx)(Y,{value:n.type.name},e)}))})]}),Object(B.jsxs)("div",{className:"key-value",children:[Object(B.jsx)("div",{className:"key",children:"Abilities"}),Object(B.jsx)("div",{className:"value",children:a.abilities.map((function(n,e){return Object(B.jsx)(Y,{value:n.ability.name},e)}))})]}),Object(B.jsxs)("div",{className:"key-value",children:[Object(B.jsx)("div",{className:"key",children:"Moves"}),Object(B.jsx)("div",{className:"value",children:a.moves.map((function(n,e){return Object(B.jsx)(Y,{value:n.move.name},e)}))})]}),Object(B.jsx)("div",{className:"catch-wrapper",children:k?Object(B.jsxs)("div",{"data-testid":"pokemon-details-has-owned-message",className:"owned",children:[Object(B.jsx)("div",{className:"owned-label",children:"You have owned this pokemon"}),Object(B.jsxs)("div",{className:"nickname-mutation-wrapper",children:[Object(B.jsx)(I.a,{inputRef:v,name:"update-nickname",variant:"standard",color:"primary",label:"Nickname","data-testid":"input-nickname",fullWidth:!0,placeholder:"Type this pokemon nickname",value:m,onChange:function(n){return g(n.target.value)}}),Object(B.jsx)(J.a,{className:"save-button","data-testid":"save-nickname-button",variant:"contained",color:"primary",onClick:function(){l&&l(a.name,m)},children:"Save"}),Object(B.jsx)(J.a,{className:"save-button",variant:"contained","data-testid":"release-button",color:"secondary",onClick:function(){b&&b(a.name)},children:"Release"})]})]}):Object(B.jsxs)(J.a,{fullWidth:!0,color:"primary",variant:"contained","data-testid":"catch-button",onClick:Object(h.a)(d.a.mark((function n(){var e;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!s){n.next=5;break}return n.next=3,s(a);case 3:n.sent&&(g(""),null===v||void 0===v||null===(e=v.current)||void 0===e||e.focus());case 5:case"end":return n.stop()}}),n)}))),children:[Object(B.jsx)(C.a,{className:"catch-icon",icon:"pokeball"}),"Catch!"]})})]}):Object(B.jsxs)("div",{className:"not-found",children:[Object(B.jsx)("div",{children:"Not Found"}),Object(B.jsx)(C.a,{className:"icon",icon:"pokeball"})]})})})}}}]);
//# sourceMappingURL=PokemonDetails.391384ae.chunk.js.map