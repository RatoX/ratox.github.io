webpackJsonp([0],{U5E5:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i("ftaU"),n=i.n(r)()();var a={name:"ImageResizer",data:function(){return{original:{size:"",dimension:"",type:"",name:""},newFile:{width:"0",height:"0"},loading:!1,image:null,reducePercent:90}},computed:{newDimension:function(){return"".concat(this.reducePercent,"% ").concat(this.newFile.width,"x").concat(this.newFile.height)}},methods:{updateNewDimensions:function(){var t=this.reducePercent,e=this.image,i=e.width,r=e.height,n=Math.ceil(i-i*(t/100)),a=Math.ceil(r-r*(t/100));this.newFile.width=n,this.newFile.height=a},reduceIt:function(){var t=this;n.resize(this.image,this.$refs.canvas,{unsharpAmount:80,unsharpRadius:.6,unsharpThreshold:2}).then(function(e){return n.toBlob(e,t.original.type)}).then(function(e){var i,r,n,a=URL.createObjectURL(e),o=t.$refs.downloadLink,s=(i=t.original.name,r=i.split("."),n=r.pop(),[r.join(""),n]);o.href=a,o.download="".concat(function(t){return t.toLowerCase().replace(/[^\w ]+/g,"").replace(/ +/g,"-")}(s[0]),".").concat(s[1]),o.click(),window.URL.revokeObjectURL(a)})},changeImage:function(t){var e=this,i=t.target.files[0],r=function(t,e){if(0===t)return"0 Bytes";var i=e<=0?0:e||2,r=Math.floor(Math.log(t)/Math.log(1024));return"".concat(parseFloat((t/Math.pow(1024,r)).toFixed(i))," ").concat(["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][r])}(i.size);this.original.name=i.name,this.original.type=i.type,this.original.size=r,this.loading=!0;var n=new FileReader;n.onload=function(t){var i=new Image;i.onload=function(){var t="".concat(i.width,"x").concat(i.height);e.original.dimension=t,e.image=i,e.loading=!1,e.updateNewDimensions()},i.src=t.target.result},n.readAsDataURL(i)}}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"image-resizer"},[i("input",{attrs:{type:"file",id:"image",accept:"image/*",disabled:t.loading,name:"image"},on:{change:t.changeImage}}),t._v(" "),t.image?i("section",{staticClass:"image-resizer__resizer"},[i("section",{staticClass:"image-resizer__original-details"},[i("label",{attrs:{for:"originalSize"}},[t._v("Original size: ")]),t._v(" "),i("output",{attrs:{for:"image",name:"originalSize"}},[t._v("\n        "+t._s(t.original.size)+"\n      ")]),t._v(" "),i("label",{attrs:{for:"originalDimension"}},[t._v("Original dimension: ")]),t._v(" "),i("output",{attrs:{for:"image",name:"originalDimension"}},[t._v("\n        "+t._s(t.original.dimension)+"\n      ")])]),t._v(" "),i("section",{staticClass:"image-resizer__new-details"},[i("label",{attrs:{for:"newDimension"}},[t._v("New dimension: ")]),t._v(" "),i("output",{attrs:{for:"image",name:"newDimension"}},[t._v("\n        "+t._s(t.newDimension)+"\n      ")])]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.reducePercent,expression:"reducePercent"}],attrs:{type:"range",id:"reducePercent",name:"reducePercent",min:"0",max:"90"},domProps:{value:t.reducePercent},on:{change:t.updateNewDimensions,input:t.updateNewDimensions,__r:function(e){t.reducePercent=e.target.value}}}),t._v(" "),i("button",{on:{click:t.reduceIt}},[t._v("Reduce it!")]),t._v(" "),i("a",{ref:"downloadLink",staticClass:"image-resizer__download",attrs:{href:"#"}},[t._v("Download it!")]),t._v(" "),i("canvas",{ref:"canvas",staticClass:"image-resizer__result",attrs:{width:t.newFile.width,height:t.newFile.height}})]):t._e()])},staticRenderFns:[]};var s=i("VU/8")(a,o,!1,function(t){i("kPY4")},"data-v-7da14e21",null);e.default=s.exports},ftaU:function(t,e,i){var r,n;n=function(){return function(){return function t(e,i,n){function a(s,A){if(!i[s]){if(!e[s]){if(!A&&"function"==typeof r&&r)return r(s,!0);if(o)return o(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var h=i[s]={exports:{}};e[s][0].call(h.exports,function(t){return a(e[s][1][t]||t)},h,h.exports,t,e,i,n)}return i[s].exports}for(var o="function"==typeof r&&r,s=0;s<n.length;s++)a(n[s]);return a}}()({1:[function(t,e,i){"use strict";var r=t("inherits"),n=t("multimath"),a=t("multimath/lib/unsharp_mask"),o=t("./mm_resize");function s(t){var e=t||[],i={js:e.indexOf("js")>=0,wasm:e.indexOf("wasm")>=0};n.call(this,i),this.features={js:i.js,wasm:i.wasm&&this.has_wasm},this.use(a),this.use(o)}r(s,n),s.prototype.resizeAndUnsharp=function(t,e){var i=this.resize(t,e);return t.unsharpAmount&&this.unsharp_mask(i,t.toWidth,t.toHeight,t.unsharpAmount,t.unsharpRadius,t.unsharpThreshold),i},e.exports=s},{"./mm_resize":4,inherits:15,multimath:16,"multimath/lib/unsharp_mask":19}],2:[function(t,e,i){"use strict";function r(t){return t<0?0:t>255?255:t}e.exports={convolveHorizontally:function(t,e,i,n,a,o){var s,A,u,h,c,l,g,f,d,m,p,w=0,I=0;for(d=0;d<n;d++){for(c=0,m=0;m<a;m++){for(l=o[c++],g=o[c++],f=w+4*l|0,s=A=u=h=0;g>0;g--)h=h+(p=o[c++])*t[f+3]|0,u=u+p*t[f+2]|0,A=A+p*t[f+1]|0,s=s+p*t[f]|0,f=f+4|0;e[I+3]=r(h+8192>>14),e[I+2]=r(u+8192>>14),e[I+1]=r(A+8192>>14),e[I]=r(s+8192>>14),I=I+4*n|0}I=4*(d+1)|0,w=(d+1)*i*4|0}},convolveVertically:function(t,e,i,n,a,o){var s,A,u,h,c,l,g,f,d,m,p,w=0,I=0;for(d=0;d<n;d++){for(c=0,m=0;m<a;m++){for(l=o[c++],g=o[c++],f=w+4*l|0,s=A=u=h=0;g>0;g--)h=h+(p=o[c++])*t[f+3]|0,u=u+p*t[f+2]|0,A=A+p*t[f+1]|0,s=s+p*t[f]|0,f=f+4|0;e[I+3]=r(h+8192>>14),e[I+2]=r(u+8192>>14),e[I+1]=r(A+8192>>14),e[I]=r(s+8192>>14),I=I+4*n|0}I=4*(d+1)|0,w=(d+1)*i*4|0}}}},{}],3:[function(t,e,i){"use strict";e.exports="AGFzbQEAAAABFAJgBn9/f39/fwBgB39/f39/f38AAg8BA2VudgZtZW1vcnkCAAEDAwIAAQQEAXAAAAcZAghjb252b2x2ZQAACmNvbnZvbHZlSFYAAQkBAArmAwLBAwEQfwJAIANFDQAgBEUNACAFQQRqIRVBACEMQQAhDQNAIA0hDkEAIRFBACEHA0AgB0ECaiESAn8gBSAHQQF0IgdqIgZBAmouAQAiEwRAQQAhCEEAIBNrIRQgFSAHaiEPIAAgDCAGLgEAakECdGohEEEAIQlBACEKQQAhCwNAIBAoAgAiB0EYdiAPLgEAIgZsIAtqIQsgB0H/AXEgBmwgCGohCCAHQRB2Qf8BcSAGbCAKaiEKIAdBCHZB/wFxIAZsIAlqIQkgD0ECaiEPIBBBBGohECAUQQFqIhQNAAsgEiATagwBC0EAIQtBACEKQQAhCUEAIQggEgshByABIA5BAnRqIApBgMAAakEOdSIGQf8BIAZB/wFIG0EQdEGAgPwHcUEAIAZBAEobIAtBgMAAakEOdSIGQf8BIAZB/wFIG0EYdEEAIAZBAEobciAJQYDAAGpBDnUiBkH/ASAGQf8BSBtBCHRBgP4DcUEAIAZBAEobciAIQYDAAGpBDnUiBkH/ASAGQf8BSBtB/wFxQQAgBkEAShtyNgIAIA4gA2ohDiARQQFqIhEgBEcNAAsgDCACaiEMIA1BAWoiDSADRw0ACwsLIQACQEEAIAIgAyAEIAUgABAAIAJBACAEIAUgBiABEAALCw=="},{}],4:[function(t,e,i){"use strict";e.exports={name:"resize",fn:t("./resize"),wasm_fn:t("./resize_wasm"),wasm_src:t("./convolve_wasm_base64")}},{"./convolve_wasm_base64":3,"./resize":5,"./resize_wasm":8}],5:[function(t,e,i){"use strict";var r=t("./resize_filter_gen"),n=t("./convolve").convolveHorizontally,a=t("./convolve").convolveVertically;e.exports=function(t){var e=t.src,i=t.width,o=t.height,s=t.toWidth,A=t.toHeight,u=t.scaleX||t.toWidth/t.width,h=t.scaleY||t.toHeight/t.height,c=t.offsetX||0,l=t.offsetY||0,g=t.dest||new Uint8Array(s*A*4),f=void 0===t.quality?3:t.quality,d=t.alpha||!1,m=r(f,i,s,u,c),p=r(f,o,A,h,l),w=new Uint8Array(s*o*4);return n(e,w,i,o,s,m),a(w,g,o,s,A,p),d||function(t,e,i){for(var r=3,n=e*i*4|0;r<n;)t[r]=255,r=r+4|0}(g,s,A),g}},{"./convolve":2,"./resize_filter_gen":6}],6:[function(t,e,i){"use strict";var r=t("./resize_filter_info"),n=14;function a(t){return Math.round(t*((1<<n)-1))}e.exports=function(t,e,i,n,o){var s,A,u,h,c,l,g,f,d,m,p,w,I,B,_,v,b,E=r[t].filter,y=1/n,C=Math.min(1,n),Q=r[t].win/C,x=Math.floor(2*(Q+1)),D=new Int16Array((x+2)*i),M=0,U=!D.subarray||!D.set;for(s=0;s<i;s++){for(A=(s+.5)*y+o,u=Math.max(0,Math.floor(A-Q)),c=(h=Math.min(e-1,Math.ceil(A+Q)))-u+1,l=new Float32Array(c),g=new Int16Array(c),f=0,d=u,m=0;d<=h;d++,m++)f+=p=E((d+.5-A)*C),l[m]=p;for(w=0,m=0;m<l.length;m++)w+=I=l[m]/f,g[m]=a(I);for(g[i>>1]+=a(1-w),B=0;B<g.length&&0===g[B];)B++;if(B<g.length){for(_=g.length-1;_>0&&0===g[_];)_--;if(v=u+B,b=_-B+1,D[M++]=v,D[M++]=b,U)for(m=B;m<=_;m++)D[M++]=g[m];else D.set(g.subarray(B,_+1),M),M+=b}else D[M++]=0,D[M++]=0}return D}},{"./resize_filter_info":7}],7:[function(t,e,i){"use strict";e.exports=[{win:.5,filter:function(t){return t>=-.5&&t<.5?1:0}},{win:1,filter:function(t){if(t<=-1||t>=1)return 0;if(t>-1.1920929e-7&&t<1.1920929e-7)return 1;var e=t*Math.PI;return Math.sin(e)/e*(.54+.46*Math.cos(e/1))}},{win:2,filter:function(t){if(t<=-2||t>=2)return 0;if(t>-1.1920929e-7&&t<1.1920929e-7)return 1;var e=t*Math.PI;return Math.sin(e)/e*Math.sin(e/2)/(e/2)}},{win:3,filter:function(t){if(t<=-3||t>=3)return 0;if(t>-1.1920929e-7&&t<1.1920929e-7)return 1;var e=t*Math.PI;return Math.sin(e)/e*Math.sin(e/3)/(e/3)}}]},{}],8:[function(t,e,i){"use strict";var r=t("./resize_filter_gen");var n=!0;try{n=1===new Uint32Array(new Uint8Array([1,0,0,0]).buffer)[0]}catch(t){}function a(t,e,i){if(n)e.set(function(t){return new Uint8Array(t.buffer,0,t.byteLength)}(t),i);else for(var r=i,a=0;a<t.length;a++){var o=t[a];e[r++]=255&o,e[r++]=o>>8&255}}e.exports=function(t){var e=t.src,i=t.width,n=t.height,o=t.toWidth,s=t.toHeight,A=t.scaleX||t.toWidth/t.width,u=t.scaleY||t.toHeight/t.height,h=t.offsetX||0,c=t.offsetY||0,l=t.dest||new Uint8Array(o*s*4),g=void 0===t.quality?3:t.quality,f=t.alpha||!1,d=r(g,i,o,A,h),m=r(g,n,s,u,c),p=this.__align(0+Math.max(e.byteLength,l.byteLength)),w=this.__align(p+n*o*4),I=this.__align(w+d.byteLength),B=I+m.byteLength,_=this.__instance("resize",B),v=new Uint8Array(this.__memory.buffer),b=new Uint32Array(this.__memory.buffer),E=new Uint32Array(e.buffer);return b.set(E),a(d,v,w),a(m,v,I),(_.exports.convolveHV||_.exports._convolveHV)(w,I,p,i,n,o,s),new Uint32Array(l.buffer).set(new Uint32Array(this.__memory.buffer,0,s*o)),f||function(t,e,i){for(var r=3,n=e*i*4|0;r<n;)t[r]=255,r=r+4|0}(l,o,s),l}},{"./resize_filter_gen":6}],9:[function(t,e,i){"use strict";function r(t,e){this.create=t,this.available=[],this.acquired={},this.lastId=1,this.timeoutId=0,this.idle=e||2e3}r.prototype.acquire=function(){var t,e=this;return 0!==this.available.length?t=this.available.pop():((t=this.create()).id=this.lastId++,t.release=function(){return e.release(t)}),this.acquired[t.id]=t,t},r.prototype.release=function(t){var e=this;delete this.acquired[t.id],t.lastUsed=Date.now(),this.available.push(t),0===this.timeoutId&&(this.timeoutId=setTimeout(function(){return e.gc()},100))},r.prototype.gc=function(){var t=this,e=Date.now();this.available=this.available.filter(function(i){return!(e-i.lastUsed>t.idle)||(i.destroy(),!1)}),0!==this.available.length?this.timeoutId=setTimeout(function(){return t.gc()},100):this.timeoutId=0},e.exports=r},{}],10:[function(t,e,i){"use strict";e.exports=function(t,e,i,r,n,a){var o=i/t,s=r/e,A=(2*a+2+1)/n;if(A>.5)return[[i,r]];var u=Math.ceil(Math.log(Math.min(o,s))/Math.log(A));if(u<=1)return[[i,r]];for(var h=[],c=0;c<u;c++){var l=Math.round(Math.pow(Math.pow(t,u-c-1)*Math.pow(i,c+1),1/u)),g=Math.round(Math.pow(Math.pow(e,u-c-1)*Math.pow(r,c+1),1/u));h.push([l,g])}return h}},{}],11:[function(t,e,i){"use strict";var r=1e-5;function n(t){var e=Math.round(t);return Math.abs(t-e)<r?e:Math.floor(t)}function a(t){var e=Math.round(t);return Math.abs(t-e)<r?e:Math.ceil(t)}e.exports=function(t){var e,i,r,o,s,A,u=t.toWidth/t.width,h=t.toHeight/t.height,c=n(t.srcTileSize*u)-2*t.destTileBorder,l=n(t.srcTileSize*h)-2*t.destTileBorder;if(c<1||l<1)throw new Error("Internal error in pica: target tile width/height is too small.");var g,f=[];for(o=0;o<t.toHeight;o+=l)for(r=0;r<t.toWidth;r+=c)(e=r-t.destTileBorder)<0&&(e=0),e+(s=r+c+t.destTileBorder-e)>=t.toWidth&&(s=t.toWidth-e),(i=o-t.destTileBorder)<0&&(i=0),i+(A=o+l+t.destTileBorder-i)>=t.toHeight&&(A=t.toHeight-i),g={toX:e,toY:i,toWidth:s,toHeight:A,toInnerX:r,toInnerY:o,toInnerWidth:c,toInnerHeight:l,offsetX:e/u-n(e/u),offsetY:i/h-n(i/h),scaleX:u,scaleY:h,x:n(e/u),y:n(i/h),width:a(s/u),height:a(A/h)},f.push(g);return f}},{}],12:[function(t,e,i){"use strict";function r(t){return Object.prototype.toString.call(t)}e.exports.isCanvas=function(t){var e=r(t);return"[object HTMLCanvasElement]"===e||"[object Canvas]"===e},e.exports.isImage=function(t){return"[object HTMLImageElement]"===r(t)},e.exports.limiter=function(t){var e=0,i=[];function r(){e<t&&i.length&&(e++,i.shift()())}return function(t){return new Promise(function(n,a){i.push(function(){t().then(function(t){n(t),e--,r()},function(t){a(t),e--,r()})}),r()})}},e.exports.cib_quality_name=function(t){switch(t){case 0:return"pixelated";case 1:return"low";case 2:return"medium"}return"high"},e.exports.cib_support=function(){return Promise.resolve().then(function(){if("undefined"==typeof createImageBitmap||"undefined"==typeof document)return!1;var t=document.createElement("canvas");return t.width=100,t.height=100,createImageBitmap(t,0,0,100,100,{resizeWidth:10,resizeHeight:10,resizeQuality:"high"}).then(function(e){var i=10===e.width;return e.close(),t=null,i})}).catch(function(){return!1})}},{}],13:[function(t,e,i){"use strict";e.exports=function(){var e,i=t("./mathlib");onmessage=function(t){var r=t.data.opts;e||(e=new i(t.data.features));var n=e.resizeAndUnsharp(r);postMessage({result:n},[n.buffer])}}},{"./mathlib":1}],14:[function(t,e,i){var r,n,a,o,s,A;function u(t,e,i,r,n,a){var o,s,A,u,h,c,l,g,f,d,m,p,w,I;for(f=0;f<a;f++){for(l=f,g=0,u=h=(o=t[c=f*n])*r[6],m=r[0],p=r[1],w=r[4],I=r[5],d=0;d<n;d++)A=(s=t[c])*m+o*p+u*w+h*I,h=u,u=A,o=s,i[g]=u,g++,c++;for(g--,l+=a*(n-1),u=h=(o=t[--c])*r[7],s=o,m=r[2],p=r[3],d=n-1;d>=0;d--)A=s*m+o*p+u*w+h*I,h=u,u=A,o=s,s=t[c],e[l]=i[g]+u,c--,g--,l-=a}}e.exports=function(t,e,i,h){if(h){var c=new Uint16Array(t.length),l=new Float32Array(Math.max(e,i)),g=function(t){t<.5&&(t=.5);var e=Math.exp(.527076)/t,i=Math.exp(-e),u=Math.exp(-2*e),h=(1-i)*(1-i)/(1+2*e*i-u);return r=h,n=h*(e-1)*i,a=h*(e+1)*i,o=-h*u,s=2*i,A=-u,new Float32Array([r,n,a,o,s,A,(r+n)/(1-s-A),(a+o)/(1-s-A)])}(h);u(t,c,l,g,e,i),u(c,t,l,g,i,e)}}},{}],15:[function(t,e,i){"function"==typeof Object.create?e.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(t,e){t.super_=e;var i=function(){};i.prototype=e.prototype,t.prototype=new i,t.prototype.constructor=t}},{}],16:[function(t,e,i){"use strict";var r=t("object-assign"),n=t("./lib/base64decode"),a=t("./lib/wa_detect"),o={js:!0,wasm:!0};function s(t){if(!(this instanceof s))return new s(t);var e=r({},o,t||{});if(this.options=e,this.__cache={},this.has_wasm=a(),this.__init_promise=null,this.__modules=e.modules||{},this.__memory=null,this.__wasm={},this.__isLE=1===new Uint32Array(new Uint8Array([1,0,0,0]).buffer)[0],!this.options.js&&!this.options.wasm)throw new Error('mathlib: at least "js" or "wasm" should be enabled')}s.prototype.use=function(t){return this.__modules[t.name]=t,this.has_wasm&&this.options.wasm&&t.wasm_fn?this[t.name]=t.wasm_fn:this[t.name]=t.fn,this},s.prototype.init=function(){if(this.__init_promise)return this.__init_promise;if(!this.options.js&&this.options.wasm&&!this.has_wasm)return Promise.reject(new Error('mathlib: only "wasm" was enabled, but it\'s not supported'));var t=this;return this.__init_promise=Promise.all(Object.keys(t.__modules).map(function(e){var i=t.__modules[e];return t.has_wasm&&t.options.wasm&&i.wasm_fn?t.__wasm[e]?null:WebAssembly.compile(t.__base64decode(i.wasm_src)).then(function(i){t.__wasm[e]=i}):null})).then(function(){return t}),this.__init_promise},s.prototype.__base64decode=n,s.prototype.__reallocate=function(t){if(!this.__memory)return this.__memory=new WebAssembly.Memory({initial:Math.ceil(t/65536)}),this.__memory;var e=this.__memory.buffer.byteLength;return e<t&&this.__memory.grow(Math.ceil((t-e)/65536)),this.__memory},s.prototype.__instance=function(t,e,i){if(e&&this.__reallocate(e),!this.__wasm[t]){var n=this.__modules[t];this.__wasm[t]=new WebAssembly.Module(this.__base64decode(n.wasm_src))}if(!this.__cache[t]){var a={memoryBase:0,memory:this.__memory,tableBase:0,table:new WebAssembly.Table({initial:0,element:"anyfunc"})};this.__cache[t]=new WebAssembly.Instance(this.__wasm[t],{env:r(a,i||{})})}return this.__cache[t]},s.prototype.__align=function(t,e){var i=t%(e=e||8);return t+(i?e-i:0)},e.exports=s},{"./lib/base64decode":17,"./lib/wa_detect":23,"object-assign":24}],17:[function(t,e,i){"use strict";e.exports=function(t){for(var e=t.replace(/[\r\n=]/g,""),i=e.length,r=new Uint8Array(3*i>>2),n=0,a=0,o=0;o<i;o++)o%4==0&&o&&(r[a++]=n>>16&255,r[a++]=n>>8&255,r[a++]=255&n),n=n<<6|"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(e.charAt(o));var s=i%4*6;return 0===s?(r[a++]=n>>16&255,r[a++]=n>>8&255,r[a++]=255&n):18===s?(r[a++]=n>>10&255,r[a++]=n>>2&255):12===s&&(r[a++]=n>>4&255),r}},{}],18:[function(t,e,i){"use strict";e.exports=function(t,e,i){for(var r,n,a,o,s,A=e*i,u=new Uint16Array(A),h=0;h<A;h++)r=t[4*h],n=t[4*h+1],a=t[4*h+2],s=r>=n&&r>=a?r:n>=a&&n>=r?n:a,o=r<=n&&r<=a?r:n<=a&&n<=r?n:a,u[h]=257*(s+o)>>1;return u}},{}],19:[function(t,e,i){"use strict";e.exports={name:"unsharp_mask",fn:t("./unsharp_mask"),wasm_fn:t("./unsharp_mask_wasm"),wasm_src:t("./unsharp_mask_wasm_base64")}},{"./unsharp_mask":20,"./unsharp_mask_wasm":21,"./unsharp_mask_wasm_base64":22}],20:[function(t,e,i){"use strict";var r=t("glur/mono16"),n=t("./hsl_l16");e.exports=function(t,e,i,a,o,s){var A,u,h,c,l,g,f,d,m,p,w,I,B;if(!(0===a||o<.5)){o>2&&(o=2);var _=n(t,e,i),v=new Uint16Array(_);r(v,e,i,o);for(var b=a/100*4096+.5|0,E=257*s|0,y=e*i,C=0;C<y;C++)I=2*(_[C]-v[C]),Math.abs(I)>=E&&(A=t[B=4*C],u=t[B+1],h=t[B+2],g=257*((d=A>=u&&A>=h?A:u>=A&&u>=h?u:h)+(f=A<=u&&A<=h?A:u<=A&&u<=h?u:h))>>1,f===d?c=l=0:(l=g<=32767?4095*(d-f)/(d+f)|0:4095*(d-f)/(510-d-f)|0,c=A===d?65535*(u-h)/(6*(d-f))|0:u===d?21845+(65535*(h-A)/(6*(d-f))|0):43690+(65535*(A-u)/(6*(d-f))|0)),(g+=b*I+2048>>12)>65535?g=65535:g<0&&(g=0),0===l?A=u=h=g>>8:(m=2*g-(p=g<=32767?g*(4096+l)+2048>>12:g+((65535-g)*l+2048>>12))>>8,p>>=8,A=(w=c+21845&65535)>=43690?m:w>=32767?m+(6*(p-m)*(43690-w)+32768>>16):w>=10922?p:m+(6*(p-m)*w+32768>>16),u=(w=65535&c)>=43690?m:w>=32767?m+(6*(p-m)*(43690-w)+32768>>16):w>=10922?p:m+(6*(p-m)*w+32768>>16),h=(w=c-21845&65535)>=43690?m:w>=32767?m+(6*(p-m)*(43690-w)+32768>>16):w>=10922?p:m+(6*(p-m)*w+32768>>16)),t[B]=A,t[B+1]=u,t[B+2]=h)}}},{"./hsl_l16":18,"glur/mono16":14}],21:[function(t,e,i){"use strict";e.exports=function(t,e,i,r,n,a){if(!(0===r||n<.5)){n>2&&(n=2);var o=e*i,s=4*o,A=2*o,u=2*o,h=4*Math.max(e,i),c=s,l=c+A,g=l+u,f=g+u,d=f+h,m=this.__instance("unsharp_mask",s+A+2*u+h+32,{exp:Math.exp}),p=new Uint32Array(t.buffer);new Uint32Array(this.__memory.buffer).set(p);var w=m.exports.hsl_l16||m.exports._hsl_l16;w(0,c,e,i),(w=m.exports.blurMono16||m.exports._blurMono16)(c,l,g,f,d,e,i,n),(w=m.exports.unsharp||m.exports._unsharp)(0,0,c,l,e,i,r,a),p.set(new Uint32Array(this.__memory.buffer,0,o))}}},{}],22:[function(t,e,i){"use strict";e.exports="AGFzbQEAAAABMQZgAXwBfGACfX8AYAZ/f39/f38AYAh/f39/f39/fQBgBH9/f38AYAh/f39/f39/fwACGQIDZW52A2V4cAAAA2VudgZtZW1vcnkCAAEDBgUBAgMEBQQEAXAAAAdMBRZfX2J1aWxkX2dhdXNzaWFuX2NvZWZzAAEOX19nYXVzczE2X2xpbmUAAgpibHVyTW9ubzE2AAMHaHNsX2wxNgAEB3Vuc2hhcnAABQkBAAqJEAXZAQEGfAJAIAFE24a6Q4Ia+z8gALujIgOaEAAiBCAEoCIGtjgCECABIANEAAAAAAAAAMCiEAAiBbaMOAIUIAFEAAAAAAAA8D8gBKEiAiACoiAEIAMgA6CiRAAAAAAAAPA/oCAFoaMiArY4AgAgASAEIANEAAAAAAAA8L+gIAKioiIHtjgCBCABIAQgA0QAAAAAAADwP6AgAqKiIgO2OAIIIAEgBSACoiIEtow4AgwgASACIAegIAVEAAAAAAAA8D8gBqGgIgKjtjgCGCABIAMgBKEgAqO2OAIcCwu3AwMDfwR9CHwCQCADKgIUIQkgAyoCECEKIAMqAgwhCyADKgIIIQwCQCAEQX9qIgdBAEgiCA0AIAIgAC8BALgiDSADKgIYu6IiDiAJuyIQoiAOIAq7IhGiIA0gAyoCBLsiEqIgAyoCALsiEyANoqCgoCIPtjgCACACQQRqIQIgAEECaiEAIAdFDQAgBCEGA0AgAiAOIBCiIA8iDiARoiANIBKiIBMgAC8BALgiDaKgoKAiD7Y4AgAgAkEEaiECIABBAmohACAGQX9qIgZBAUoNAAsLAkAgCA0AIAEgByAFbEEBdGogAEF+ai8BACIIuCINIAu7IhGiIA0gDLsiEqKgIA0gAyoCHLuiIg4gCrsiE6KgIA4gCbsiFKKgIg8gAkF8aioCALugqzsBACAHRQ0AIAJBeGohAiAAQXxqIQBBACAFQQF0ayEHIAEgBSAEQQF0QXxqbGohBgNAIAghAyAALwEAIQggBiANIBGiIAO4Ig0gEqKgIA8iECAToqAgDiAUoqAiDyACKgIAu6CrOwEAIAYgB2ohBiAAQX5qIQAgAkF8aiECIBAhDiAEQX9qIgRBAUoNAAsLCwvfAgIDfwZ8AkAgB0MAAAAAWw0AIARE24a6Q4Ia+z8gB0MAAAA/l7ujIgyaEAAiDSANoCIPtjgCECAEIAxEAAAAAAAAAMCiEAAiDraMOAIUIAREAAAAAAAA8D8gDaEiCyALoiANIAwgDKCiRAAAAAAAAPA/oCAOoaMiC7Y4AgAgBCANIAxEAAAAAAAA8L+gIAuioiIQtjgCBCAEIA0gDEQAAAAAAADwP6AgC6KiIgy2OAIIIAQgDiALoiINtow4AgwgBCALIBCgIA5EAAAAAAAA8D8gD6GgIgujtjgCGCAEIAwgDaEgC6O2OAIcIAYEQCAFQQF0IQogBiEJIAIhCANAIAAgCCADIAQgBSAGEAIgACAKaiEAIAhBAmohCCAJQX9qIgkNAAsLIAVFDQAgBkEBdCEIIAUhAANAIAIgASADIAQgBiAFEAIgAiAIaiECIAFBAmohASAAQX9qIgANAAsLC7wBAQV/IAMgAmwiAwRAQQAgA2shBgNAIAAoAgAiBEEIdiIHQf8BcSECAn8gBEH/AXEiAyAEQRB2IgRB/wFxIgVPBEAgAyIIIAMgAk8NARoLIAQgBCAHIAIgA0kbIAIgBUkbQf8BcQshCAJAIAMgAk0EQCADIAVNDQELIAQgByAEIAMgAk8bIAIgBUsbQf8BcSEDCyAAQQRqIQAgASADIAhqQYECbEEBdjsBACABQQJqIQEgBkEBaiIGDQALCwvTBgEKfwJAIAazQwAAgEWUQwAAyEKVu0QAAAAAAADgP6CqIQ0gBSAEbCILBEAgB0GBAmwhDgNAQQAgAi8BACADLwEAayIGQQF0IgdrIAcgBkEASBsgDk8EQCAAQQJqLQAAIQUCfyAALQAAIgYgAEEBai0AACIESSIJRQRAIAYiCCAGIAVPDQEaCyAFIAUgBCAEIAVJGyAGIARLGwshCAJ/IAYgBE0EQCAGIgogBiAFTQ0BGgsgBSAFIAQgBCAFSxsgCRsLIgogCGoiD0GBAmwiEEEBdiERQQAhDAJ/QQAiCSAIIApGDQAaIAggCmsiCUH/H2wgD0H+AyAIayAKayAQQYCABEkbbSEMIAYgCEYEQCAEIAVrQf//A2wgCUEGbG0MAQsgBSAGayAGIARrIAQgCEYiBhtB//8DbCAJQQZsbUHVqgFBqtUCIAYbagshCSARIAcgDWxBgBBqQQx1aiIGQQAgBkEAShsiBkH//wMgBkH//wNIGyEGAkACfwJAIAxB//8DcSIFBEAgBkH//wFKDQEgBUGAIGogBmxBgBBqQQx2DAILIAZBCHYiBiEFIAYhBAwCCyAFIAZB//8Dc2xBgBBqQQx2IAZqCyIFQQh2IQcgBkEBdCAFa0EIdiIGIQQCQCAJQdWqAWpB//8DcSIFQanVAksNACAFQf//AU8EQEGq1QIgBWsgByAGa2xBBmxBgIACakEQdiAGaiEEDAELIAchBCAFQanVAEsNACAFIAcgBmtsQQZsQYCAAmpBEHYgBmohBAsCfyAGIgUgCUH//wNxIghBqdUCSw0AGkGq1QIgCGsgByAGa2xBBmxBgIACakEQdiAGaiAIQf//AU8NABogByIFIAhBqdUASw0AGiAIIAcgBmtsQQZsQYCAAmpBEHYgBmoLIQUgCUGr1QJqQf//A3EiCEGp1QJLDQAgCEH//wFPBEBBqtUCIAhrIAcgBmtsQQZsQYCAAmpBEHYgBmohBgwBCyAIQanVAEsEQCAHIQYMAQsgCCAHIAZrbEEGbEGAgAJqQRB2IAZqIQYLIAEgBDoAACABQQFqIAU6AAAgAUECaiAGOgAACyADQQJqIQMgAkECaiECIABBBGohACABQQRqIQEgC0F/aiILDQALCwsL"},{}],23:[function(t,e,i){"use strict";var r;e.exports=function(){if(void 0!==r)return r;if(r=!1,"undefined"==typeof WebAssembly)return r;try{var t=new Uint8Array([0,97,115,109,1,0,0,0,1,6,1,96,1,127,1,127,3,2,1,0,5,3,1,0,1,7,8,1,4,116,101,115,116,0,0,10,16,1,14,0,32,0,65,1,54,2,0,32,0,40,2,0,11]),e=new WebAssembly.Module(t);return 0!==new WebAssembly.Instance(e,{}).exports.test(4)&&(r=!0),r}catch(t){}return r}},{}],24:[function(t,e,i){
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
"use strict";var r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},i=0;i<10;i++)e["_"+String.fromCharCode(i)]=i;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(t){r[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var i,o,s=function(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(t),A=1;A<arguments.length;A++){for(var u in i=Object(arguments[A]))n.call(i,u)&&(s[u]=i[u]);if(r){o=r(i);for(var h=0;h<o.length;h++)a.call(i,o[h])&&(s[o[h]]=i[o[h]])}}return s}},{}],25:[function(t,e,i){var r=arguments[3],n=arguments[4],a=arguments[5],o=JSON.stringify;e.exports=function(t,e){for(var i,s=Object.keys(a),A=0,u=s.length;A<u;A++){var h=s[A],c=a[h].exports;if(c===t||c&&c.default===t){i=h;break}}if(!i){i=Math.floor(Math.pow(16,8)*Math.random()).toString(16);var l={};for(A=0,u=s.length;A<u;A++){l[h=s[A]]=h}n[i]=["function(require,module,exports){"+t+"(self); }",l]}var g=Math.floor(Math.pow(16,8)*Math.random()).toString(16),f={};f[i]=i,n[g]=["function(require,module,exports){var f = require("+o(i)+");(f.default ? f.default : f)(self);}",f];var d={};!function t(e){d[e]=!0;for(var i in n[e][1]){var r=n[e][1][i];d[r]||t(r)}}(g);var m="("+r+")({"+Object.keys(d).map(function(t){return o(t)+":["+n[t][0]+","+o(n[t][1])+"]"}).join(",")+"},{},["+o(g)+"])",p=window.URL||window.webkitURL||window.mozURL||window.msURL,w=new Blob([m],{type:"text/javascript"});if(e&&e.bare)return w;var I=p.createObjectURL(w),B=new Worker(I);return B.objectURL=I,B}},{}],"/":[function(t,e,i){"use strict";function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=[],r=!0,n=!1,a=void 0;try{for(var o,s=t[Symbol.iterator]();!(r=(o=s.next()).done)&&(i.push(o.value),!e||i.length!==e);r=!0);}catch(t){n=!0,a=t}finally{try{r||null==s.return||s.return()}finally{if(n)throw a}}return i}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var n=t("object-assign"),a=t("webworkify"),o=t("./lib/mathlib"),s=t("./lib/pool"),A=t("./lib/utils"),u=t("./lib/worker"),h=t("./lib/stepper"),c=t("./lib/tiler"),l={},g=!1;try{"undefined"!=typeof navigator&&navigator.userAgent&&(g=navigator.userAgent.indexOf("Safari")>=0)}catch(t){}var f=1;"undefined"!=typeof navigator&&(f=Math.min(navigator.hardwareConcurrency||1,4));var d,m,p={tile:1024,concurrency:f,features:["js","wasm","ww"],idle:2e3},w={quality:3,alpha:!1,unsharpAmount:0,unsharpRadius:0,unsharpThreshold:0};function I(){return{value:a(u),destroy:function(){if(this.value.terminate(),"undefined"!=typeof window){var t=window.URL||window.webkitURL||window.mozURL||window.msURL;t&&t.revokeObjectURL&&this.value.objectURL&&t.revokeObjectURL(this.value.objectURL)}}}}function B(t){if(!(this instanceof B))return new B(t);this.options=n({},p,t||{});var e="lk_".concat(this.options.concurrency);this.__limit=l[e]||A.limiter(this.options.concurrency),l[e]||(l[e]=this.__limit),this.features={js:!1,wasm:!1,cib:!1,ww:!1},this.__workersPool=null,this.__requested_features=[],this.__mathlib=null}B.prototype.init=function(){var e=this;if(this.__initPromise)return this.__initPromise;if(!1!==d&&!0!==d&&(d=!1,"undefined"!=typeof ImageData&&"undefined"!=typeof Uint8ClampedArray))try{new ImageData(new Uint8ClampedArray(400),10,10),d=!0}catch(t){}!1!==m&&!0!==m&&(m=!1,"undefined"!=typeof ImageBitmap&&(ImageBitmap.prototype&&ImageBitmap.prototype.close?m=!0:this.debug("ImageBitmap does not support .close(), disabled")));var i=this.options.features.slice();if(i.indexOf("all")>=0&&(i=["cib","wasm","js","ww"]),this.__requested_features=i,this.__mathlib=new o(i),i.indexOf("ww")>=0&&"undefined"!=typeof window&&"Worker"in window)try{t("webworkify")(function(){}).terminate(),this.features.ww=!0;var r="wp_".concat(JSON.stringify(this.options));l[r]?this.__workersPool=l[r]:(this.__workersPool=new s(I,this.options.idle),l[r]=this.__workersPool)}catch(t){}var a,u=this.__mathlib.init().then(function(t){n(e.features,t.features)});return a=m?A.cib_support().then(function(t){e.features.cib&&i.indexOf("cib")<0?e.debug("createImageBitmap() resize supported, but disabled by config"):i.indexOf("cib")>=0&&(e.features.cib=t)}):Promise.resolve(!1),this.__initPromise=Promise.all([u,a]).then(function(){return e}),this.__initPromise},B.prototype.resize=function(t,e,i){var a=this;this.debug("Start resize...");var o=n({},w);if(isNaN(i)?i&&(o=n(o,i)):o=n(o,{quality:i}),o.toWidth=e.width,o.toHeight=e.height,o.width=t.naturalWidth||t.width,o.height=t.naturalHeight||t.height,0===e.width||0===e.height)return Promise.reject(new Error("Invalid output size: ".concat(e.width,"x").concat(e.height)));o.unsharpRadius>2&&(o.unsharpRadius=2);var s=!1,u=null;o.cancelToken&&(u=o.cancelToken.then(function(t){throw s=!0,t},function(t){throw s=!0,t}));var l=Math.ceil(Math.max(3,2.5*o.unsharpRadius|0));return this.init().then(function(){if(s)return u;if(a.features.cib){var i=e.getContext("2d",{alpha:Boolean(o.alpha)});return a.debug("Resize via createImageBitmap()"),createImageBitmap(t,{resizeWidth:o.toWidth,resizeHeight:o.toHeight,resizeQuality:A.cib_quality_name(o.quality)}).then(function(t){if(s)return u;if(!o.unsharpAmount)return i.drawImage(t,0,0),t.close(),i=null,a.debug("Finished!"),e;a.debug("Unsharp result");var r=document.createElement("canvas");r.width=o.toWidth,r.height=o.toHeight;var n=r.getContext("2d",{alpha:Boolean(o.alpha)});n.drawImage(t,0,0),t.close();var A=n.getImageData(0,0,o.toWidth,o.toHeight);return a.__mathlib.unsharp(A.data,o.toWidth,o.toHeight,o.unsharpAmount,o.unsharpRadius,o.unsharpThreshold),i.putImageData(A,0,0),A=n=r=i=null,a.debug("Finished!"),e})}var f={},p=function(t,e,i){var r,n,o,h=function(e){return a.__limit(function(){if(s)return u;var h;if(A.isCanvas(t))a.debug("Get tile pixel data"),h=r.getImageData(e.x,e.y,e.width,e.height);else{a.debug("Draw tile imageBitmap/image to temporary canvas");var c=document.createElement("canvas");c.width=e.width,c.height=e.height;var l=c.getContext("2d",{alpha:Boolean(i.alpha)});l.globalCompositeOperation="copy",l.drawImage(n||t,e.x,e.y,e.width,e.height,0,0,e.width,e.height),a.debug("Get tile pixel data"),h=l.getImageData(0,0,e.width,e.height),l=c=null}var m={src:h.data,width:e.width,height:e.height,toWidth:e.toWidth,toHeight:e.toHeight,scaleX:e.scaleX,scaleY:e.scaleY,offsetX:e.offsetX,offsetY:e.offsetY,quality:i.quality,alpha:i.alpha,unsharpAmount:i.unsharpAmount,unsharpRadius:i.unsharpRadius,unsharpThreshold:i.unsharpThreshold};return a.debug("Invoke resize math"),Promise.resolve().then(function(){return t=m,Promise.resolve().then(function(){return a.features.ww?new Promise(function(e,i){var r=a.__workersPool.acquire();u&&u.catch(function(t){return i(t)}),r.value.onmessage=function(t){r.release(),t.data.err?i(t.data.err):e(t.data.result)},r.value.postMessage({opts:t,features:a.__requested_features,preload:{wasm_nodule:a.__mathlib.__}},[t.src.buffer])}):a.__mathlib.resizeAndUnsharp(t,f)});var t}).then(function(t){if(s)return u;var i;if(h=null,a.debug("Convert raw rgba tile result to ImageData"),d)i=new ImageData(new Uint8ClampedArray(t),e.toWidth,e.toHeight);else if((i=o.createImageData(e.toWidth,e.toHeight)).data.set)i.data.set(t);else for(var r=i.data.length-1;r>=0;r--)i.data[r]=t[r];return a.debug("Draw tile"),g?o.putImageData(i,e.toX,e.toY,e.toInnerX-e.toX,e.toInnerY-e.toY,e.toInnerWidth+1e-5,e.toInnerHeight+1e-5):o.putImageData(i,e.toX,e.toY,e.toInnerX-e.toX,e.toInnerY-e.toY,e.toInnerWidth,e.toInnerHeight),null})})};return Promise.resolve().then(function(){if(o=e.getContext("2d",{alpha:Boolean(i.alpha)}),A.isCanvas(t))return r=t.getContext("2d",{alpha:Boolean(i.alpha)}),null;if(A.isImage(t))return m?(a.debug("Decode image via createImageBitmap"),createImageBitmap(t).then(function(t){n=t})):null;throw new Error('".from" should be image or canvas')}).then(function(){if(s)return u;a.debug("Calculate tiles");var t=c({width:i.width,height:i.height,srcTileSize:a.options.tile,toWidth:i.toWidth,toHeight:i.toHeight,destTileBorder:l}).map(function(t){return h(t)});function r(){n&&(n.close(),n=null)}return a.debug("Process tiles"),Promise.all(t).then(function(){return a.debug("Finished!"),r(),e},function(t){throw r(),t})})};return function t(e,i,a,o){if(s)return u;var A,h=r(e.shift(),2),c=h[0],l=h[1],g=0===e.length;return o=n({},o,{toWidth:c,toHeight:l,quality:g?o.quality:Math.min(1,o.quality)}),g||((A=document.createElement("canvas")).width=c,A.height=l),p(i,g?a:A,o).then(function(){return g?a:(o.width=c,o.height=l,t(e,A,a,o))})}(h(o.width,o.height,o.toWidth,o.toHeight,a.options.tile,l),t,e,o)})},B.prototype.resizeBuffer=function(t){var e=this,i=n({},w,t);return this.init().then(function(){return e.__mathlib.resizeAndUnsharp(i)})},B.prototype.toBlob=function(t,e,i){return e=e||"image/png",new Promise(function(r){if(t.toBlob)t.toBlob(function(t){return r(t)},e,i);else{for(var n=atob(t.toDataURL(e,i).split(",")[1]),a=n.length,o=new Uint8Array(a),s=0;s<a;s++)o[s]=n.charCodeAt(s);r(new Blob([o],{type:e}))}})},B.prototype.debug=function(){},e.exports=B},{"./lib/mathlib":1,"./lib/pool":9,"./lib/stepper":10,"./lib/tiler":11,"./lib/utils":12,"./lib/worker":13,"object-assign":24,webworkify:25}]},{},[])("/")},t.exports=n()},kPY4:function(t,e){}});
//# sourceMappingURL=0.614f59dee38bfc9f2804.js.map