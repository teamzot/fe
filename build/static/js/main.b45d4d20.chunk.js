(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{208:function(e,t,a){e.exports=a(429)},216:function(e,t,a){},429:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(84),l=a(48),i=a(40),c=a(183),s=(a(216),a(218),a(18)),u=a(19),f=a(21),d=a(20),m=a(22),b=a(41),h=a(49),p=a.n(h),v=a(82),y=a(184),g=a.n(y),_={season:[{key:"1-3",value:"1-3",text:"Winter"},{key:"4-6",value:"4-6",text:"Spring"},{key:"7-9",value:"7-9",text:"Summer"},{key:"10-12",value:"10-12",text:"Fall"}]},k=[{Header:"Company",accessor:"company_name"},{Header:"Base",accessor:"base_salary"},{Header:"Equity",accessor:"equity"},{Header:"SignBonus",accessor:"sign_bonus_string"},{Header:"YearlyBonus",accessor:"yearly_bonus"},{Header:"Degree",accessor:"degree"},{Header:"Area",accessor:"area"},{Header:"Experience",accessor:"experience_level"},{Header:"Year",accessor:"year"},{Header:"Season",accessor:"season"},{Header:"Link",accessor:"url"}],E={offset:!0,limit:!0,list_id:!0},C={offset:NaN,limit:NaN,list_id:"",annual_refresh:NaN,level:NaN,year:NaN,base_salary:NaN,relocation_fee:NaN,sign_bonus:NaN,post_title:"",satisfaction:"",area:"",degree:"",equity:"",equity_schedule:"",experience:"",experience_level:"",greencard:"",group:"",job_function:"",job_type:"",title:"",interest_point:"",other_offer:"",position_type:"",post_time:null,spider_time:null,promotion_package:"",season:"",url:"",yearly_bonus:"",apply_source:""},O=function(){var e=Object(v.a)(p.a.mark(function e(t){var a,n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("http://whaleapi.drkbl.com/api/v1//offers"+t);case 2:return a=e.sent,n=a.data&&a.data.offers,e.abrupt("return",n||[]);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),j=function(e){return{type:"loading_offers",taskCount:e}},x=function(){return function(e){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return function(){var a=Object(v.a)(p.a.mark(function a(n){var r;return p.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n(j(t)),a.next=3,O(e);case 3:r=a.sent,n({type:"recieve_offers",offers:r});case 5:case"end":return a.stop()}},a,this)}));return function(e){return a.apply(this,arguments)}}()}(function(e){if(!e)return"";var t="?";for(var a in e)a in C||console.error("invalid arg",a),!Number.isNaN(e[a])&&e[a]&&(t+=a in E?a+"="+e[a]:"by_"+a+"="+e[a],t+="&");return"?"===t?"":("&"===t[t.length-1]&&(t=t.substring(0,t.length-1)),t)}(Object(b.a)({},C,{limit:3e3})),3e3))}},w=a(197),S=a(444),L=(a(241),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(f.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).renderCustomCell=function(e,t){var a=k.findIndex(function(t){return t.accessor===e});k[a]=Object(b.a)({},k[a],t)},a.customURL=function(){a.renderCustomCell("url",{Cell:function(e){return t=e.value,r.a.createElement(S.a,{fluid:!0,icon:"world",size:"mini",onClick:function(){return window.open(t,"_blank")}});var t},maxWidth:40})},a.customSeason=function(){var e=_.season;if(e){var t=function(t){if(t){var a=e.find(function(e){return e.value===t});return a&&a.text}};a.renderCustomCell("season",{Cell:function(e){var a=e.value;return t(a)},filterMethod:function(e,a){var n=e.id;if(!a[n])return!1;var r=e.value.toLowerCase();return String(t(a[n])).toLowerCase().indexOf(r)>-1}})}},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.offers,a=e.loading;return this.customURL(),this.customSeason(),r.a.createElement(w.a,{data:t,columns:k,loading:a.isLoading,defaultPageSize:20,showPageSizeOptions:!1,className:"-striped -highlight"})}}]),t}(n.Component)),B=a(36),N=a(64);function R(e,t,a){var n={};e.forEach(function(e){var a=e[t];a&&(n[a]=n[a]||0,n[a]++)});var r=[];for(var o in n){var l;r.push((l={},Object(N.a)(l,t,o),Object(N.a)(l,"count",n[o]),l))}return a&&r.sort(a),{labels:r.map(function(e){return e[t]}),counts:r.map(function(e){return e.count})}}var D=(new Date).getFullYear(),H=D-3,F=D+1;function M(){return Math.random().toString(36).substr(2)}var A=a(437),W=a(440),I=function(e){function t(){return Object(s.a)(this,t),Object(f.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.color,a=e.header,n=e.chart;return r.a.createElement(A.a,null,r.a.createElement(W.a,{fluid:!0,color:t},r.a.createElement(W.a.Content,{header:a}),n))}}]),t}(n.Component);B.g.global.legend.display=!1;var T=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(f.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r))))._dynamicColors=function(e){for(var t=[],a=0;a<e;a++){var n=Math.floor(255*Math.random()),r=Math.floor(255*Math.random()),o=Math.floor(255*Math.random());t.push("rgba("+n+","+r+","+o+", 0.6)")}return t},a.makeData=function(e,t){return{labels:e,datasets:[{data:t[0],backgroundColor:a._dynamicColors(t[0].length),hoverBackgroundColor:a._dynamicColors(t[0].length)}]}},a.makeLineDate=function(e,t){return{labels:e,datasets:[{data:t[0],lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10}]}},a._generateBubbles=function(e){for(var t=[],a=0;a<e.length;a++)for(var n in e[a].salary2Count)t.push({x:a,y:n,r:e[a].salary2Count[n]/5});return t},a.makeBubbleData=function(e){return{labels:["January","ad"],datasets:[{label:"",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:a._generateBubbles(e)}]}},a.makeElementListener=function(e){var t=a.props.addFilter;return"season"===e?function(a){(a=a[0])&&a._index&&(0===a._index?a._model.label="4-6":1===a._index?a._model.label="7-9":2===a._index?a._model.label="10-12":3===a._index&&(a._model.label="1-3"),t(e,a._model.label))}:"base_salary"===e?function(a){(a=a[0])&&a._index&&a._xScale&&a._xScale.ticks&&t(e,a._xScale.ticks[a._index])}:"bubble_base_salary"===e?function(e){(e=e[0])&&e._index&&e._xScale&&e._xScale.ticks&&t("base_salary",e._yScale.chart.config.data.datasets[0].data[e._index].y)}:function(a){(a=a[0])&&a._model&&a._model.label&&t(e,a._model.label)}},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e,t,a,n,o,l=this.props.offers,i=[],c=function(e){return R(e,"company_name",function(e,t){return t.count-e.count})}(l);e=c.labels,t=c.counts,o=this.makeElementListener("company_name"),n=r.a.createElement(B.e,{data:this.makeData(e,[t]),onElementsClick:o}),i.push({color:"blue",header:"by Companies",chart:n});var s=function(e){for(var t=R(e,"year",function(e,t){return e.year-t.year}),a={},n=H;n<=F;n++)a[n]=!0;return t={labels:t.labels.filter(function(e){return a[e]}),counts:t.counts.filter(function(e,n){return a[t.labels[n]]})}}(l);e=s.labels,t=s.counts,o=this.makeElementListener("year"),n=r.a.createElement(B.a,{data:this.makeData(e,[t]),redraw:!0,onElementsClick:o}),i.push({color:"red",header:"by Year",chart:n});var u=function(e){return R(e,"degree",function(e,t){return t.count-e.count})}(l);e=u.labels,t=u.counts,o=this.makeElementListener("degree"),n=r.a.createElement(B.f,{data:this.makeData(e,[t]),redraw:!0,onElementsClick:o,options:{legend:{display:!0}}}),i.push({color:"yellow",header:"by Degree",chart:n});var f=function(e){var t=_.season;if(t){for(var a=function(e){if(e){var a=t.find(function(t){return t.value===e});return a&&a.text}},n={"1-3":3,"4-6":0,"7-9":1,"10-12":2},r=R(e,"season",function(e,t){return n[e.season]-n[t.season]}),o=0;o<r.labels.length;o++)r.labels[o]=a(r.labels[o]);return r}}(l);e=f.labels,t=f.counts,o=this.makeElementListener("season"),n=r.a.createElement(B.d,{data:this.makeLineDate(e,[t]),redraw:!0,onElementsClick:o}),i.push({color:"orange",header:"by Season",chart:n});var d,m=function(e){return R(e,"experience_level",function(e,t){return t.count-e.count})}(l);e=m.labels,t=m.counts,o=this.makeElementListener("experience_level"),n=r.a.createElement(B.c,{data:this.makeData(e,[t]),redraw:!0,onElementsClick:o}),i.push({color:"purple",header:"by Experience",chart:n});var b=function(e){return function(e,t,a){var n={};e.forEach(function(e){var a=e.company_name,r=e[t];r&&(n[a]=n[a]||{},n[a][r]=n[a][r]||0,n[a][r]++)});var r=[];for(var o in n)for(var l in r.push({company_name:o,salary2Count:{}}),n[o]){var i=19e4;i=l<7e4?7e4:l<8e4?8e4:l<9e4?9e4:l<1e5?1e5:l<11e4?11e4:l<12e4?12e4:l<13e4?13e4:l<14e4?14e4:l<15e4?15e4:l<16e4?16e4:l<17e4?17e4:l<18e4?18e4:19e4,r[r.length-1].salary2Count[i]=r[r.length-1].salary2Count[i]||0,r[r.length-1].salary2Count[i]+=n[o][l]}return a&&r.sort(a),{companyNames:r.map(function(e){return e.company_name}),companySalary2Count:r}}(e,"base_salary",function(e,t){return t.company_name-e.company_name})}(l);return d=b.companySalary2Count,a=b.companyNames,o=this.makeElementListener("bubble_base_salary"),n=r.a.createElement(B.b,{data:this.makeBubbleData(d),redraw:!0,onElementsClick:o,options:{scales:{xAxes:[{ticks:{min:-1,max:a.length,beginAtZero:!0,stepSize:1,maxRotation:80,minRotation:80,callback:function(e,t,n){return 0===t?"":a[t-1]}}}],yAxes:[{ticks:{callback:function(e,t,a){return e/1e3+"k"}}}]},tooltips:{callbacks:{label:function(e,t){return a[e.xLabel]+" - $"+e.yLabel+" - "+5*t.datasets[e.datasetIndex].data[e.index].r}}}}}),i.push({color:"green",header:"by Salary",chart:n}),r.a.createElement("div",{className:"ui three column doubling grid"},i.map(function(e,t){return r.a.createElement(I,Object.assign({key:t},e))}))}}]),t}(n.Component),q=a(178),J=a(179),Y={company_name:"briefcase",base_salary:"dollar sign",equity:"money bill alternate",sign_bonus_string:"handshake",yearly_bonus:"money bill alternate outline",degree:"graduation cap",area:"map marker",experience_level:"trophy",year:"calendar",season:"calendar alternate outline"},z={equity:"Equity",sign_bonus_string:"SignOn",yearly_bonus:"Yearly"},V=function(e){function t(){return Object(s.a)(this,t),Object(f.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.accessor,a=e.value,n=e.onClick;if("season"===t){var o="";switch(a){case"4-6":o="Spring";break;case"7-9":o="Summer";break;case"10-12":o="Fall";break;case"1-3":o="Winter"}a=o}return r.a.createElement(q.a,null,"undefined"!==typeof n&&r.a.createElement(J.a,{name:"delete",onClick:n}),r.a.createElement(q.a.Detail,null,r.a.createElement(J.a,{name:Y[t]||"circle outline"}),z[t]&&z[t]+"=",a))}}]),t}(n.Component),P=function(e){function t(){return Object(s.a)(this,t),Object(f.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.filters,a=e.deleteFilter;return t.length?r.a.createElement("div",null,t.map(function(e,t){return r.a.createElement(V,Object.assign({key:t},e,{onClick:function(){return a(e.id)}}))})):r.a.createElement(q.a,{icon:"circle",content:"all"})}}]),t}(n.Component),U=a(443),$=a(441),G=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(f.a)(this,Object(d.a)(t).call(this,e))).onResultSelect=function(e,t){var n=t.result,r=a.props.addFilter;a.setState({value:""}),r("company_name",n.title)},a.onSearchChange=function(e,t){var n=t.value;a.setState({value:n}),n=n.toLocaleLowerCase();var r=a.props.companies.filter(function(e){return e.toLocaleLowerCase().indexOf(n)>-1});a.setState({result:r.map(function(e){return{title:e}})})},a.resultRenderer=function(e){var t=e.title;return new V({accessor:"company_name",value:t}).render()},a.state={value:"",result:[]},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(U.a,null,r.a.createElement(U.a.Item,null,r.a.createElement($.a,{value:this.state.value,onResultSelect:this.onResultSelect,onSearchChange:this.onSearchChange,results:this.state.result,resultRenderer:this.resultRenderer,selectFirstResult:!0})))}}]),t}(n.Component),Z=a(442),K=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(f.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).makeStat=function(e,t,a,n){return r.a.createElement(Z.a,{key:a},r.a.createElement(Z.a.Value,{text:n},e),r.a.createElement(Z.a.Label,null,t))},a.prettyLocation=function(e){if("BayArea"===e&&(e="Bay Area"),e.indexOf(" ")>-1){for(var t=[(e=e.split(" "))[0]],a=1;a<e.length;a++)t.push(r.a.createElement("br",{key:M()}),e[a]);return t}return e},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.offers,a=function(e){return R(e,"area",function(e,t){return t.count-e.count})}(t),n=a.labels&&a.labels.length&&this.prettyLocation(a.labels[0]),o=[{value:t.length,label:"Offers"},{value:Math.round(function(e){return e.reduce(function(e,t){return(t.base_salary||0)+e},0)/e.length||0}(t)/1e3)+"k",label:"Average Base"},{value:Math.round(function(e){if(!e||!e.length)return 0;var t=e.slice();return t.sort(function(e,t){return e.base_salary-t.base_salary}),t[Math.floor(t.length/2)].base_salary}(t)/1e3)+"k",label:"Median Base"},{value:n||"None",valueType:"text",label:"Hottest Location"}];return r.a.createElement("div",null,r.a.createElement(Z.a.Group,null,o.map(function(t,a){return e.makeStat(t.value,t.label,a,"text"===t.valueType)})))}}]),t}(n.Component),Q=a(438),X=a(439),ee=function e(t,a){Object(s.a)(this,e),this.accessor=t,this.value=String(a).toLocaleLowerCase(),this.id=M()},te=function(e){function t(){return Object(s.a)(this,t),Object(f.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.getAllOffers)()}},{key:"render",value:function(){var e=this.props,t=e.offers,a=e.companies,n=e.loading,o=e.filters,l=e.addFilter,i=e.deleteFilter;return r.a.createElement(Q.a,null,r.a.createElement(X.a,{hidden:!0}),r.a.createElement(G,{companies:a,addFilter:l}),r.a.createElement(X.a,{hidden:!0}),r.a.createElement(P,{filters:o,deleteFilter:i}),r.a.createElement(X.a,{hidden:!0}),r.a.createElement(K,{offers:t}),r.a.createElement(X.a,{hidden:!0}),r.a.createElement(T,{offers:t,addFilter:l}),r.a.createElement(X.a,{hidden:!0}),r.a.createElement(L,{offers:t,loading:n}))}}]),t}(n.Component),ae=Object(o.b)(function(e){var t=e.offers,a=e.filters;return{offers:function(e,t){var a={};return t.forEach(function(e){var t=e.value,n=e.accessor;a[n]=a[n]||{},a[n][t]=1}),e.filter(function(e){for(var t in a)if(!(String(e[t]).toLowerCase()in a[t]))return!1;return!0})}(t.offers,a),loading:t.loading,filters:a,companies:function(e){var t={};e.forEach(function(e){t[e.company_name]=1});var a=[];for(var n in t)a.push(n);return a}(t.offers)}},function(e){return{deleteFilter:function(t){return e(function(e){return{type:"REMOVE_FILTER",id:e}}(t))},getAllOffers:function(){return e(x())},addFilter:function(t,a){return e({type:"ADD_FILTER",filter:new ee(t,a)})}}})(te),ne={offers:[],loading:{isLoading:!1,taskCount:0}},re=a(198),oe=[],le=Object(i.c)({offers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"loading_offers":return Object(b.a)({},e,{loading:{isLoading:!0,taskCount:t.taskCount}});case"recieve_offers":return Object(b.a)({},e,{offers:t.offers,loading:{isLoading:!1,taskCount:0}});default:return e}},filters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_FILTER":return function(e,t){for(var a=0;a<e.length;a++){var n=e[a],r=n.accessor,o=n.value;if(r===t.accessor&&o===t.value)return!0}}(e,t.filter)?e:Object(re.a)(e).concat([t.filter]);case"REMOVE_FILTER":return e.filter(function(e){return e.id!==t.id});default:return e}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ie=Object(i.d)(le,Object(i.a)(c.a));Object(l.render)(r.a.createElement(o.a,{store:ie},r.a.createElement(ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[208,2,1]]]);
//# sourceMappingURL=main.b45d4d20.chunk.js.map