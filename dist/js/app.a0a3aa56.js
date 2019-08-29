(function(t){function e(e){for(var n,c,i=e[0],u=e[1],s=e[2],l=0,f=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);p&&p(e);while(f.length)f.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,i=1;i<r.length;i++){var u=r[i];0!==a[u]&&(n=!1)}n&&(o.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},a={app:0},o=[];function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/<WeatherApp>/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var p=u;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-app-bar",{attrs:{app:""}},[r("v-toolbar-title",{staticClass:"headline text-uppercase"},[r("span",[t._v("Varma")]),r("span",{staticClass:"font-weight-light"},[t._v("SÄÄ")])])],1),r("v-content",[r("Weather")],1)],1)},o=[],c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h3",[t._v(t._s(t.city)+", "+t._s(t.country))]),r("v-container",{attrs:{fluid:""}},[r("v-row",t._l(t.weathers,function(e,n){return r("v-col",{key:n,attrs:{cols:"12",sm:"6",md:"3",lg:"3"}},[r("v-card",[r("v-card-title",[r("h4",[t._v(t._s(t.weekDays[e.date.getDay()]+" "+t.formatDate(e.date)))])]),r("v-divider"),r("v-list",{attrs:{dense:""}},t._l(e.temps,function(t,e){return r("Temperature",{key:e,attrs:{temp:t}})}),1)],1)],1)}),1)],1)],1)},i=[],u=(r("8e6e"),r("ac6a"),r("456d"),r("7f7f"),r("96cf"),r("3b8d")),s=r("bd86"),p=r("bc3a"),l=r.n(p),f=r("2f62"),d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-list-item-content",[t._v("\n    "+t._s(1==t.temp.date.getHours().toString().length?"0"+t.temp.date.getHours():t.temp.date.getHours())+": "+t._s(t.temp.temp)+" °C\n  ")])],1)},h=[],v={props:{temp:Object}},m=v,b=r("2877"),g=Object(b["a"])(m,d,h,!1,null,null,null),y=g.exports;function w(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function O(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?w(r,!0).forEach(function(e){Object(s["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):w(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var _={data:function(){return{country:"Finland",weekDays:["Su","Ma","Ti","Ke","To","Pe","La"]}},components:{Temperature:y},computed:O({},Object(f["b"])(["city","weathers"])),methods:{formatDate:function(t){return t.getDate()+"."+(t.getMonth()+1)+"."},getWeatherData:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(){var e,r,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e="51156b18ec42c8c3724b49fbb0018c05",r="https://api.openweathermap.org/data/2.5/forecast?q=Espoo,fi&units=metric&appid="+e;try{l.a.get(r).then(function(t){if(200===t.status){console.log(t);var e=t.data;n.$store.dispatch("setCity",e.city.name);var r=[];e.list.map(function(t){var e=new Date(1e3*t.dt);r.push({date:e,temp:t.main.temp})});var a,o=[],c=[],i=null;r.map(function(t){if(i!==t.date.getDate()&&null!==i||(i=t.date.getDate(),a=t.date,c.push(t)),i!==t.date.getDate()){var e={date:a,temps:c};o.push(e),c=[],i=t.date.getDate(),c.push(t)}a=t.date});var u={date:a,temps:c};o.push(u),console.log(o),n.$store.dispatch("setWeatherData",o)}else console.log("Api call was unsuccessfull!")})}catch(a){console.log("Error while making an http request: "+a)}case 3:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}()},mounted:function(){this.getWeatherData()}},j=_,D=Object(b["a"])(j,c,i,!1,null,"285972c2",null),T=D.exports,P={name:"App",components:{Weather:T},data:function(){return{}}},E=P,S=Object(b["a"])(E,a,o,!1,null,null,null),x=S.exports;n["default"].use(f["a"]);var k={city:"",weathers:[]},A={getCity:function(){return k.city}},C={setCity:function(t,e){var r=t.commit;r("SET_CITY",e)},setWeatherData:function(t,e){var r=t.commit;r("SET_WEATHER_DATA",e)}},F={SET_CITY:function(t,e){t.city=e},SET_WEATHER_DATA:function(t,e){t.weathers=e}},W=new f["a"].Store({state:k,getters:A,actions:C,mutations:F}),M=r("ce5b"),$=r.n(M);r("bf40");n["default"].use($.a);var H=new $.a({theme:{themes:{light:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}},icons:{iconfont:"mdi"}});r("d5e8"),r("5363");n["default"].config.productionTip=!1,new n["default"]({store:W,vuetify:H,render:function(t){return t(x)}}).$mount("#app")}});
//# sourceMappingURL=app.a0a3aa56.js.map