(this["webpackJsonpra_6.1_watches"]=this["webpackJsonpra_6.1_watches"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(9),s=n.n(o),i=(n(17),n(18),n(11)),r=n(2),l=n(3),u=n(6),m=n(5),j=n(4),d=n(12),b=n(10),h={name:"",timezone:""},v=n(0),O=function(e){Object(m.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).state=h,c.onChange=c.onChange.bind(Object(u.a)(c)),c.onSubmit=c.onSubmit.bind(Object(u.a)(c)),c}return Object(l.a)(n,[{key:"onChange",value:function(e){var t=e.target,n=t.name,c=t.value;this.setState(Object(b.a)({},n,c))}},{key:"onSubmit",value:function(e){e.preventDefault(),(0,this.props.addClock)(this.state),this.setState(h)}},{key:"render",value:function(){var e=this.state,t=e.name,n=e.timezone;return Object(v.jsx)("div",{className:"Form__control",children:Object(v.jsxs)("form",{className:"Form",onSubmit:this.onSubmit,children:[Object(v.jsxs)("div",{className:"Form__group",children:[Object(v.jsx)("label",{htmlFor:"name",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(v.jsx)("input",{className:"Form__field",id:"name",type:"text",name:"name",value:t,onChange:this.onChange})]}),Object(v.jsxs)("div",{className:"Form__group",children:[Object(v.jsx)("label",{htmlFor:"timezone",children:"\u0412\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0437\u043e\u043d\u0430"}),Object(v.jsx)("input",{className:"Form__field",id:"timezone",type:"text",name:"timezone",value:n,onChange:this.onChange})]}),Object(v.jsx)("button",{className:"Form__button button",type:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})})}}]),n}(c.Component),f=n(8),k=n.n(f),C=function(e){Object(m.a)(n,e);var t=Object(j.a)(n);function n(e){var c;Object(r.a)(this,n);var a=(c=t.call(this,e)).props.timezone;return c.state={clock:k()().utcOffset(a)},c}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.timezone;this.interval=setInterval((function(){e.setState({clock:k()().utcOffset(t)})}),300)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"calcRatio",value:function(e){var t=e.second()/60,n=(t+e.minute())/60;return{hourRatio:(n+e.hour())/12,minuteRatio:n,secondRatio:t}}},{key:"render",value:function(){var e=this.state.clock,t=this.props,n=t.name,c=t.onDelete,a=this.calcRatio(e),o=a.hourRatio,s=a.minuteRatio,i=a.secondRatio;return Object(v.jsxs)("div",{className:"Clock",children:[Object(v.jsxs)("div",{className:"Clock__control",children:[Object(v.jsx)("div",{className:"Clock__name",children:n}),Object(v.jsx)("button",{className:"Clock__btn_remove",type:"button",onClick:c,children:"\u2718"})]}),Object(v.jsxs)("div",{className:"Clock__face",children:[Object(v.jsx)("div",{className:"Clock-face__hour",style:{transform:"rotate(".concat(360*o,"deg)")},children:Object(v.jsx)("div",{className:"hr"})}),Object(v.jsx)("div",{className:"Clock-face__minute",style:{transform:"rotate(".concat(360*s,"deg)")},children:Object(v.jsx)("div",{className:"mn"})}),Object(v.jsx)("div",{className:"Clock-face__second",style:{transform:"rotate(".concat(360*i,"deg)")},children:Object(v.jsx)("div",{className:"sc"})})]})]})}}]),n}(c.Component),p=function(e){Object(m.a)(n,e);var t=Object(j.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.clocks,n=e.onDelete;return Object(v.jsx)("div",{className:"ClockContainer",children:t.map((function(e){return Object(v.jsx)(C,{name:e.name,timezone:Number(e.timezone),onDelete:function(){return n(e.id)}},e.id)}))})}}]),n}(c.PureComponent),x=function(e){Object(m.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).state={clocks:[]},c.addClock=c.addClock.bind(Object(u.a)(c)),c.deleteClock=c.deleteClock.bind(Object(u.a)(c)),c}return Object(l.a)(n,[{key:"addClock",value:function(e){var t=e.name,n=e.timezone;this.setState((function(e){return{clocks:[].concat(Object(i.a)(e.clocks),[{id:Object(d.a)(),name:t,timezone:n}])}}))}},{key:"deleteClock",value:function(e){this.setState((function(t){return{clocks:t.clocks.filter((function(t){return t.id!==e}))}}))}},{key:"render",value:function(){var e=this.state.clocks;return Object(v.jsxs)("div",{className:"Clocks",children:[Object(v.jsx)(O,{addClock:this.addClock}),Object(v.jsx)(p,{clocks:e,onDelete:this.deleteClock})]})}}]),n}(c.Component);var _=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(x,{})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),o(e),s(e)}))};s.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(_,{})}),document.getElementById("root")),N()}},[[21,1,2]]]);
//# sourceMappingURL=main.9237d3f1.chunk.js.map