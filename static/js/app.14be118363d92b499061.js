webpackJsonp([3],{Hlwk:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("h1",{directives:[{name:"show",rawName:"v-show",value:!this.isHome,expression:"!isHome"}]},[e("router-link",{staticClass:"back",attrs:{to:"/"}},[this._v("←")])],1),this._v(" "),e("main",[e("router-view")],1)])},staticRenderFns:[]};var r=i("VU/8")({name:"App",computed:{isHome:function(){return"Main"===this.$route.name}}},s,!1,function(t){i("Hlwk")},null,null).exports,n=i("/ocq"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"myself",attrs:{itemscope:"",itemprop:"Person",itemtype:"http://schema.org/Person"}},[this._m(0),this._v(" "),e("nav",[e("ul",[e("li",[e("router-link",{attrs:{to:"/json"}},[this._v("JSON Playground")])],1),this._v(" "),e("li",[e("router-link",{attrs:{to:"/image"}},[this._v("Image Resizer")])],1)])]),this._v(" "),this._m(1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("figure",{staticClass:"profile"},[e("img",{attrs:{alt:"minha foto de perfil, sorridente e com um cachecol listrado muito legal",src:"static/perfil.jpg",itemprop:"image"}}),this._v(" "),e("h1",{staticClass:"name",attrs:{itemprop:"name"}},[this._v("Rodrigo Alencar")]),this._v(" "),e("h2",{staticClass:"about",attrs:{itemprop:"jobTitle"}},[this._v("FullStack developer")]),this._v(" "),e("section",{staticClass:"contact"},[e("span",{staticClass:"email",attrs:{itemprop:"email"}},[this._v("rodrigovieira18@gmail.com")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("figure",{staticClass:"social"},[e("a",{attrs:{href:"https://github.com/RatoX",target:"_blank"}},[e("img",{attrs:{src:"static/logos/github.svg",alt:"logo do meu github"}})]),this._v(" "),e("a",{attrs:{href:"https://www.linkedin.com/in/Rodrigo-Alencar",target:"_blank"}},[e("img",{attrs:{src:"static/logos/linkedin.svg",alt:"logo do meu linkedin"}})]),this._v(" "),e("a",{attrs:{href:"https://twitter.com/ratoox",target:"_blank"}},[e("img",{attrs:{src:"static/logos/twitter.svg",alt:"logo do meu twitter"}})])])}]};var l=i("VU/8")({name:"Main",data:function(){return{}}},o,!1,function(t){i("c4EF")},"data-v-a71d042e",null).exports;a.a.use(n.a);var c=new n.a({routes:[{path:"/",name:"Main",component:l},{path:"/json",name:"JSONValidator",component:function(){return i.e(1).then(i.bind(null,"r5va"))}},{path:"/image",name:"ImageResizer",component:function(){return i.e(0).then(i.bind(null,"U5E5"))}}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:c,components:{App:r},template:"<App/>"})},c4EF:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.14be118363d92b499061.js.map