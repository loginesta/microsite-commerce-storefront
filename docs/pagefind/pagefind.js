const pagefind_version="1.0.4";let wasm_bindgen;!function(){const e={};let t,n;t="undefined"==typeof document?location.href:new URL("UNHANDLED",location.href).toString();let i=null;function a(){return null!==i&&0!==i.byteLength||(i=new Uint8Array(n.memory.buffer)),i}let r=0;function s(e,t){const n=t(1*e.length);return a().set(e,n/1),r=e.length,n}e.init_pagefind=function(e){const t=s(e,n.__wbindgen_malloc),i=r;return n.init_pagefind(t,i)},e.load_index_chunk=function(e,t){const i=s(t,n.__wbindgen_malloc),a=r;return n.load_index_chunk(e,i,a)},e.load_filter_chunk=function(e,t){const i=s(t,n.__wbindgen_malloc),a=r;return n.load_filter_chunk(e,i,a)};const o=new TextEncoder("utf-8"),l="function"==typeof o.encodeInto?function(e,t){return o.encodeInto(e,t)}:function(e,t){const n=o.encode(e);return t.set(n),{read:e.length,written:n.length}};function c(e,t,n){if(void 0===n){const n=o.encode(e),i=t(n.length);return a().subarray(i,i+n.length).set(n),r=n.length,i}let i=e.length,s=t(i);const c=a();let h=0;for(;h<i;h++){const t=e.charCodeAt(h);if(t>127)break;c[s+h]=t}if(h!==i){0!==h&&(e=e.slice(h)),s=n(s,i,i=h+3*e.length);const t=a().subarray(s+h,s+i);h+=l(e,t).written}return r=h,s}e.add_synthetic_filter=function(e,t){const i=c(t,n.__wbindgen_malloc,n.__wbindgen_realloc),a=r;return n.add_synthetic_filter(e,i,a)};let h=null;function d(){return null!==h&&0!==h.byteLength||(h=new Int32Array(n.memory.buffer)),h}const f=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});function u(e,t){return f.decode(a().subarray(e,e+t))}function g(){const e={wbg:{}};return e}function _(e,t){return n=e.exports,p.__wbindgen_wasm_module=t,h=null,i=null,n}async function p(e){void 0===e&&(e=t.replace(/\.js$/,"_bg.wasm"));const n=g();("string"==typeof e||"function"==typeof Request&&e instanceof Request||"function"==typeof URL&&e instanceof URL)&&(e=fetch(e));const{instance:i,module:a}=await async function(e,t){if("function"==typeof Response&&e instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(e,t)}catch(t){if("application/wasm"==e.headers.get("Content-Type"))throw t;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",t)}const n=await e.arrayBuffer();return await WebAssembly.instantiate(n,t)}{const n=await WebAssembly.instantiate(e,t);return n instanceof WebAssembly.Instance?{instance:n,module:e}:n}}(await e,n);return _(i,a)}f.decode(),e.request_indexes=function(e,t){try{const s=n.__wbindgen_add_to_stack_pointer(-16),o=c(t,n.__wbindgen_malloc,n.__wbindgen_realloc),l=r;n.request_indexes(s,e,o,l);var i=d()[s/4+0],a=d()[s/4+1];return u(i,a)}finally{n.__wbindgen_add_to_stack_pointer(16),n.__wbindgen_free(i,a)}},e.request_filter_indexes=function(e,t){try{const s=n.__wbindgen_add_to_stack_pointer(-16),o=c(t,n.__wbindgen_malloc,n.__wbindgen_realloc),l=r;n.request_filter_indexes(s,e,o,l);var i=d()[s/4+0],a=d()[s/4+1];return u(i,a)}finally{n.__wbindgen_add_to_stack_pointer(16),n.__wbindgen_free(i,a)}},e.request_all_filter_indexes=function(e){try{const a=n.__wbindgen_add_to_stack_pointer(-16);n.request_all_filter_indexes(a,e);var t=d()[a/4+0],i=d()[a/4+1];return u(t,i)}finally{n.__wbindgen_add_to_stack_pointer(16),n.__wbindgen_free(t,i)}},e.filters=function(e){try{const a=n.__wbindgen_add_to_stack_pointer(-16);n.filters(a,e);var t=d()[a/4+0],i=d()[a/4+1];return u(t,i)}finally{n.__wbindgen_add_to_stack_pointer(16),n.__wbindgen_free(t,i)}},e.search=function(e,t,i,a,s){try{const h=n.__wbindgen_add_to_stack_pointer(-16),f=c(t,n.__wbindgen_malloc,n.__wbindgen_realloc),g=r,_=c(i,n.__wbindgen_malloc,n.__wbindgen_realloc),p=r,w=c(a,n.__wbindgen_malloc,n.__wbindgen_realloc),m=r;n.search(h,e,f,g,_,p,w,m,s);var o=d()[h/4+0],l=d()[h/4+1];return u(o,l)}finally{n.__wbindgen_add_to_stack_pointer(16),n.__wbindgen_free(o,l)}},wasm_bindgen=Object.assign(p,{initSync:function(e){const t=g();return e instanceof WebAssembly.Module||(e=new WebAssembly.Module(e)),_(new WebAssembly.Instance(e,t),e)}},e)}();var u8=Uint8Array,u16=Uint16Array,u32=Uint32Array,fleb=new u8([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),fdeb=new u8([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),clim=new u8([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),freb=function(e,t){for(var n=new u16(31),i=0;i<31;++i)n[i]=t+=1<<e[i-1];var a=new u32(n[30]);for(i=1;i<30;++i)for(var r=n[i];r<n[i+1];++r)a[r]=r-n[i]<<5|i;return[n,a]},_a=freb(fleb,2),fl=_a[0],revfl=_a[1];fl[28]=258,revfl[258]=28;var x,_b=freb(fdeb,0),fd=_b[0],revfd=_b[1],rev=new u16(32768);for(i=0;i<32768;++i)x=(61680&(x=(52428&(x=(43690&i)>>>1|(21845&i)<<1))>>>2|(13107&x)<<2))>>>4|(3855&x)<<4,rev[i]=((65280&x)>>>8|(255&x)<<8)>>>1;var hMap=function(e,t,n){for(var i=e.length,a=0,r=new u16(t);a<i;++a)e[a]&&++r[e[a]-1];var s,o=new u16(t);for(a=0;a<t;++a)o[a]=o[a-1]+r[a-1]<<1;if(n){s=new u16(1<<t);var l=15-t;for(a=0;a<i;++a)if(e[a])for(var c=a<<4|e[a],h=t-e[a],d=o[e[a]-1]++<<h,f=d|(1<<h)-1;d<=f;++d)s[rev[d]>>>l]=c}else for(s=new u16(i),a=0;a<i;++a)e[a]&&(s[a]=rev[o[e[a]-1]++]>>>15-e[a]);return s},flt=new u8(288);for(i=0;i<144;++i)flt[i]=8;for(i=144;i<256;++i)flt[i]=9;for(i=256;i<280;++i)flt[i]=7;for(i=280;i<288;++i)flt[i]=8;var i,fdt=new u8(32);for(i=0;i<32;++i)fdt[i]=5;var flrm=hMap(flt,9,1),fdrm=hMap(fdt,5,1),max=function(e){for(var t=e[0],n=1;n<e.length;++n)e[n]>t&&(t=e[n]);return t},bits=function(e,t,n){var i=t/8|0;return(e[i]|e[i+1]<<8)>>(7&t)&n},bits16=function(e,t){var n=t/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(7&t)},shft=function(e){return(e+7)/8|0},slc=function(e,t,n){(null==t||t<0)&&(t=0),(null==n||n>e.length)&&(n=e.length);var i=new(2==e.BYTES_PER_ELEMENT?u16:4==e.BYTES_PER_ELEMENT?u32:u8)(n-t);return i.set(e.subarray(t,n)),i},ec=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],err=function(e,t,n){var i=new Error(t||ec[e]);if(i.code=e,Error.captureStackTrace&&Error.captureStackTrace(i,err),!n)throw i;return i},inflt=function(e,t,n){var i=e.length;if(!i||n&&n.f&&!n.l)return t||new u8(0);var a=!t||n,r=!n||n.i;n||(n={}),t||(t=new u8(3*i));var s=function(e){var n=t.length;if(e>n){var i=new u8(Math.max(2*n,e));i.set(t),t=i}},o=n.f||0,l=n.p||0,c=n.b||0,h=n.l,d=n.d,f=n.m,u=n.n,g=8*i;do{if(!h){o=bits(e,l,1);var _=bits(e,l+1,3);if(l+=3,!_){var p=e[(S=shft(l)+4)-4]|e[S-3]<<8,w=S+p;if(w>i){r&&err(0);break}a&&s(c+p),t.set(e.subarray(S,w),c),n.b=c+=p,n.p=l=8*w,n.f=o;continue}if(1==_)h=flrm,d=fdrm,f=9,u=5;else if(2==_){var m=bits(e,l,31)+257,b=bits(e,l+10,15)+4,y=m+bits(e,l+5,31)+1;l+=14;for(var P=new u8(y),v=new u8(19),x=0;x<b;++x)v[clim[x]]=bits(e,l+3*x,7);l+=3*b;var k=max(v),$=(1<<k)-1,F=hMap(v,k,1);for(x=0;x<y;){var S,U=F[bits(e,l,$)];if(l+=15&U,(S=U>>>4)<16)P[x++]=S;else{var E=0,L=0;for(16==S?(L=3+bits(e,l,3),l+=2,E=P[x-1]):17==S?(L=3+bits(e,l,7),l+=3):18==S&&(L=11+bits(e,l,127),l+=7);L--;)P[x++]=E}}var M=P.subarray(0,m),I=P.subarray(m);f=max(M),u=max(I),h=hMap(M,f,1),d=hMap(I,u,1)}else err(1);if(l>g){r&&err(0);break}}a&&s(c+131072);for(var A=(1<<f)-1,W=(1<<u)-1,D=l;;D=l){var R=(E=h[bits16(e,l)&A])>>>4;if((l+=15&E)>g){r&&err(0);break}if(E||err(2),R<256)t[c++]=R;else{if(256==R){D=l,h=null;break}var j=R-254;if(R>264){var C=fleb[x=R-257];j=bits(e,l,(1<<C)-1)+fl[x],l+=C}var T=d[bits16(e,l)&W],q=T>>>4;T||err(3),l+=15&T;I=fd[q];if(q>3){C=fdeb[q];I+=bits16(e,l)&(1<<C)-1,l+=C}if(l>g){r&&err(0);break}a&&s(c+131072);for(var N=c+j;c<N;c+=4)t[c]=t[c-I],t[c+1]=t[c+1-I],t[c+2]=t[c+2-I],t[c+3]=t[c+3-I];c=N}}n.l=h,n.p=D,n.b=c,n.f=o,h&&(o=1,n.m=f,n.d=d,n.n=u)}while(!o);return c==t.length?t:slc(t,0,c)},et=new u8(0),gzs=function(e){31==e[0]&&139==e[1]&&8==e[2]||err(6,"invalid gzip data");var t=e[3],n=10;4&t&&(n+=e[10]|2+(e[11]<<8));for(var i=(t>>3&1)+(t>>4&1);i>0;i-=!e[n++]);return n+(2&t)},gzl=function(e){var t=e.length;return(e[t-4]|e[t-3]<<8|e[t-2]<<16|e[t-1]<<24)>>>0};function gunzipSync(e,t){return inflt(e.subarray(gzs(e),-8),t||new u8(gzl(e)))}var td="undefined"!=typeof TextDecoder&&new TextDecoder,tds=0;try{td.decode(et,{stream:!0}),tds=1}catch(e){}var gz_default=gunzipSync,calculate_excerpt_region=(e,t)=>{if(0===e.length)return 0;let n=[];for(const t of e)n[t.location]=n[t.location]||0,n[t.location]+=t.balanced_score;if(n.length<=t)return 0;let i=n.slice(0,t).reduce(((e,t)=>e+t),0),a=i,r=[0];for(let e=0;e<n.length;e++){a+=(n[e+t]??0)-(n[e]??0),a>i?(i=a,r=[e]):a===i&&r[r.length-1]===e-1&&r.push(e)}return r[Math.floor(r.length/2)]},build_excerpt=(e,t,n,i,a,r)=>{let s=e.includes("​"),o=[];o=s?e.split("​"):e.split(/[\r\n\s]+/g);for(let e of i)o[e]?.startsWith("<mark>")||(o[e]=`<mark>${o[e]}</mark>`);let l=r??o.length,c=a??0;return l-c<n&&(n=l-c),t+n>l&&(t=l-n),t<c&&(t=c),o.slice(t,t+n).join(s?"":" ").trim()},calculate_sub_results=(e,t)=>{const n=e.anchors.filter((e=>/h\d/i.test(e.element)&&e.text?.length&&/\S/.test(e.text))).sort(((e,t)=>e.location-t.location)),i=[];let a=0,r={title:e.meta.title,url:e.url,weighted_locations:[],locations:[],excerpt:""};const s=n=>{if(r.locations.length){const s=r.weighted_locations.map((e=>({weight:e.weight,balanced_score:e.balanced_score,location:e.location-a}))),o=calculate_excerpt_region(s,t)+a,l=n?Math.min(n-o,t):t;r.excerpt=build_excerpt(e.raw_content??"",o,l,r.locations,a,n),i.push(r)}};for(let t of e.weighted_locations)if(!n.length||t.location<n[0].location)r.weighted_locations.push(t),r.locations.push(t.location);else{let i=n.shift();for(s(i.location);n.length&&t.location>=n[0].location;)i=n.shift();let o=e.url;try{if(/^((https?:)?\/\/)/.test(o)){let e=new URL(o);e.hash=i.id,o=e.toString()}else{/^\//.test(o)||(o=`/${o}`);let e=new URL(`https://example.com${o}`);e.hash=i.id,o=e.toString().replace(/^https:\/\/example.com/,"")}}catch(e){console.error(`Pagefind: Couldn't process ${o} for a search result`)}a=i.location,r={title:i.text,url:o,anchor:i,weighted_locations:[t],locations:[t.location],excerpt:""}}return s(n[0]?.location),i},asyncSleep=async(e=100)=>new Promise((t=>setTimeout(t,e))),PagefindInstance=class{constructor(e={}){this.version="1.0.4",this.backend=wasm_bindgen,this.decoder=new TextDecoder("utf-8"),this.wasm=null,this.basePath=e.basePath||"/pagefind/",this.primary=e.primary||!1,this.primary&&!e.basePath&&this.initPrimary(),/[^\/]$/.test(this.basePath)&&(this.basePath=`${this.basePath}/`),window?.location?.origin&&this.basePath.startsWith(window.location.origin)&&(this.basePath=this.basePath.replace(window.location.origin,"")),this.baseUrl=e.baseUrl||this.defaultBaseUrl(),/^(\/|https?:\/\/)/.test(this.baseUrl)||(this.baseUrl=`/${this.baseUrl}`),this.indexWeight=e.indexWeight??1,this.excerptLength=e.excerptLength??30,this.mergeFilter=e.mergeFilter??{},this.highlightParam=e.highlightParam??null,this.loaded_chunks={},this.loaded_filters={},this.loaded_fragments={},this.raw_ptr=null,this.searchMeta=null,this.languages=null}initPrimary(){let e=import.meta.url.match(/^(.*\/)pagefind.js.*$/)?.[1];e?this.basePath=e:console.warn(["Pagefind couldn't determine the base of the bundle from the import path. Falling back to the default.","Set a basePath option when initialising Pagefind to ignore this message."].join("\n"))}defaultBaseUrl(){let e=this.basePath.match(/^(.*\/)_?pagefind/)?.[1];return e||"/"}async options(e){const t=["basePath","baseUrl","indexWeight","excerptLength","mergeFilter","highlightParam"];for(const[n,i]of Object.entries(e))if("mergeFilter"===n){let e=this.stringifyFilters(i),t=await this.getPtr();this.raw_ptr=this.backend.add_synthetic_filter(t,e)}else t.includes(n)?("basePath"===n&&"string"==typeof i&&(this.basePath=i),"baseUrl"===n&&"string"==typeof i&&(this.baseUrl=i),"indexWeight"===n&&"number"==typeof i&&(this.indexWeight=i),"excerptLength"===n&&"number"==typeof i&&(this.excerptLength=i),"mergeFilter"===n&&"object"==typeof i&&(this.mergeFilter=i),"highlightParam"===n&&"string"==typeof i&&(this.highlightParam=i)):console.warn(`Unknown Pagefind option ${n}. Allowed options: [${t.join(", ")}]`)}decompress(e,t="unknown file"){return"pagefind_dcd"===this.decoder.decode(e.slice(0,12))?e.slice(12):(e=gz_default(e),"pagefind_dcd"!==this.decoder.decode(e.slice(0,12))?(console.error(`Decompressing ${t} appears to have failed: Missing signature`),e):e.slice(12))}async init(e,t){await this.loadEntry();let n=this.findIndex(e),i=n.wasm?n.wasm:"unknown",a=[this.loadMeta(n.hash)];if(!0===t.load_wasm&&a.push(this.loadWasm(i)),await Promise.all(a),this.raw_ptr=this.backend.init_pagefind(new Uint8Array(this.searchMeta)),Object.keys(this.mergeFilter)?.length){let e=this.stringifyFilters(this.mergeFilter),t=await this.getPtr();this.raw_ptr=this.backend.add_synthetic_filter(t,e)}}async loadEntry(){try{let e=await fetch(`${this.basePath}pagefind-entry.json?ts=${Date.now()}`),t=await e.json();this.languages=t.languages,t.version!==this.version&&(this.primary?console.warn(["Pagefind JS version doesn't match the version in your search index.",`Pagefind JS: ${this.version}. Pagefind index: ${t.version}`,"If you upgraded Pagefind recently, you likely have a cached pagefind.js file.","If you encounter any search errors, try clearing your cache."].join("\n")):console.warn(["Merging a Pagefind index from a different version than the main Pagefind instance.",`Main Pagefind JS: ${this.version}. Merged index (${this.basePath}): ${t.version}`,"If you encounter any search errors, make sure that both sites are running the same version of Pagefind."].join("\n")))}catch(e){throw console.error(`Failed to load Pagefind metadata:\n${e?.toString()}`),new Error("Failed to load Pagefind metadata")}}findIndex(e){if(this.languages){let t=this.languages[e];if(t)return t;if(t=this.languages[e.split("-")[0]],t)return t;let n=Object.values(this.languages).sort(((e,t)=>t.page_count-e.page_count));if(n[0])return n[0]}throw new Error("Pagefind Error: No language indexes found.")}async loadMeta(e){try{let t=await fetch(`${this.basePath}pagefind.${e}.pf_meta`),n=await t.arrayBuffer();this.searchMeta=this.decompress(new Uint8Array(n),"Pagefind metadata")}catch(e){console.error(`Failed to load the meta index:\n${e?.toString()}`)}}async loadWasm(e){try{const t=`${this.basePath}wasm.${e}.pagefind`;let n=await fetch(t),i=await n.arrayBuffer();const a=this.decompress(new Uint8Array(i),"Pagefind WebAssembly");if(!a)throw new Error("No WASM after decompression");this.wasm=await this.backend(a)}catch(e){throw console.error(`Failed to load the Pagefind WASM:\n${e?.toString()}`),new Error(`Failed to load the Pagefind WASM:\n${e?.toString()}`)}}async _loadGenericChunk(e,t){try{let n=await fetch(e),i=await n.arrayBuffer(),a=this.decompress(new Uint8Array(i),e),r=await this.getPtr();this.raw_ptr=this.backend[t](r,a)}catch(t){console.error(`Failed to load the index chunk ${e}:\n${t?.toString()}`)}}async loadChunk(e){if(!this.loaded_chunks[e]){const t=`${this.basePath}index/${e}.pf_index`;this.loaded_chunks[e]=this._loadGenericChunk(t,"load_index_chunk")}return await this.loaded_chunks[e]}async loadFilterChunk(e){if(!this.loaded_filters[e]){const t=`${this.basePath}filter/${e}.pf_filter`;this.loaded_filters[e]=this._loadGenericChunk(t,"load_filter_chunk")}return await this.loaded_filters[e]}async _loadFragment(e){let t=await fetch(`${this.basePath}fragment/${e}.pf_fragment`),n=await t.arrayBuffer(),i=this.decompress(new Uint8Array(n),`Fragment ${e}`);return JSON.parse((new TextDecoder).decode(i))}async loadFragment(e,t=[],n){this.loaded_fragments[e]||(this.loaded_fragments[e]=this._loadFragment(e));let i=await this.loaded_fragments[e];i.weighted_locations=t,i.locations=t.map((e=>e.location)),i.raw_content||(i.raw_content=i.content.replace(/</g,"&lt;").replace(/>/g,"&gt;"),i.content=i.content.replace(/\u200B/g,"")),i.raw_url||(i.raw_url=i.url),i.url=this.processedUrl(i.raw_url,n);const a=calculate_excerpt_region(t,this.excerptLength);return i.excerpt=build_excerpt(i.raw_content,a,this.excerptLength,i.locations),i.sub_results=calculate_sub_results(i,this.excerptLength),i}fullUrl(e){return/^(https?:)?\/\//.test(e)?e:`${this.baseUrl}/${e}`.replace(/\/+/g,"/").replace(/^(https?:\/)/,"$1/")}processedUrl(e,t){const n=this.fullUrl(e);if(null===this.highlightParam)return n;let i=t.split(/\s+/);try{let e=new URL(n);for(const t of i)e.searchParams.append(this.highlightParam,t);return e.toString()}catch(e){try{let e=new URL(`https://example.com${n}`);for(const t of i)e.searchParams.append(this.highlightParam,t);return e.toString().replace(/^https:\/\/example\.com/,"")}catch(e){return n}}}async getPtr(){for(;null===this.raw_ptr;)await asyncSleep(50);if(!this.raw_ptr)throw console.error("Pagefind: WASM Error (No pointer)"),new Error("Pagefind: WASM Error (No pointer)");return this.raw_ptr}parseFilters(e){let t={};if(!e)return t;for(const n of e.split("__PF_FILTER_DELIM__")){let[e,i]=n.split(/:(.*)$/);if(t[e]={},i)for(const n of i.split("__PF_VALUE_DELIM__"))if(n){let i=n.match(/^(.*):(\d+)$/);if(i){let[,n,a]=i;t[e][n]=parseInt(a)??a}}}return t}stringifyFilters(e={}){return JSON.stringify(e)}stringifySorts(e={}){let t=Object.entries(e);for(let[e,n]of t)return t.length>1&&console.warn(`Pagefind was provided multiple sort options in this search, but can only operate on one. Using the ${e} sort.`),"asc"!==n&&"desc"!==n&&console.warn(`Pagefind was provided a sort with unknown direction ${n}. Supported: [asc, desc]`),`${e}:${n}`;return""}async filters(){let e=await this.getPtr(),t=this.backend.request_all_filter_indexes(e).split(" ").filter((e=>e)).map((e=>this.loadFilterChunk(e)));await Promise.all([...t]),e=await this.getPtr();let n=this.backend.filters(e);return this.parseFilters(n)}async preload(e,t={}){await this.search(e,{...t,preload:!0})}async search(e,t={}){t={verbose:!1,filters:{},sort:{},...t};const n=e=>{t.verbose&&console.log(e)};n(`Starting search on ${this.basePath}`);let i=Date.now(),a=await this.getPtr(),r=null===e,s=/^\s*".+"\s*$/.test(e=e??"");if(s&&n("Running an exact search"),e=e.toLowerCase().trim().replace(/[\.`~!@#\$%\^&\*\(\)\{\}\[\]\\\|:;'",<>\/\?\-]/g,"").replace(/\s{2,}/g," ").trim(),n(`Normalized search term to ${e}`),!e?.length&&!r)return{results:[],unfilteredResultCount:0,filters:{},totalFilters:{},timings:{preload:Date.now()-i,search:Date.now()-i,total:Date.now()-i}};let o=this.stringifySorts(t.sort);n(`Stringified sort to ${o}`);const l=this.stringifyFilters(t.filters);n(`Stringified filters to ${l}`);let c=this.backend.request_indexes(a,e),h=this.backend.request_filter_indexes(a,l),d=c.split(" ").filter((e=>e)).map((e=>this.loadChunk(e))),f=h.split(" ").filter((e=>e)).map((e=>this.loadFilterChunk(e)));if(await Promise.all([...d,...f]),n("Loaded necessary chunks to run search"),t.preload)return n("Preload — bailing out of search operation now."),null;a=await this.getPtr();let u=Date.now(),g=this.backend.search(a,e,l,o,s);n(`Got the raw search result: ${g}`);let[_,p,w,m]=g.split(/:([^:]*):(.*)__PF_UNFILTERED_DELIM__(.*)$/),b=this.parseFilters(w),y=this.parseFilters(m);n(`Remaining filters: ${JSON.stringify(g)}`);let P=p.length?p.split(" "):[],v=P.map((t=>{let[i,a,r]=t.split("@");n(`Processing result: \n  hash:${i}\n  score:${a}\n  locations:${r}`);let s=r.length?r.split(",").map((e=>{let[t,n,i]=e.split(">");return{weight:parseInt(t)/24,balanced_score:parseFloat(n),location:parseInt(i)}})):[],o=s.map((e=>e.location));return{id:i,score:parseFloat(a)*this.indexWeight,words:o,data:async()=>await this.loadFragment(i,s,e)}}));const x=Date.now()-u,k=Date.now()-i;return n(`Found ${P.length} result${1==P.length?"":"s"} for "${e}" in ${Date.now()-u}ms (${Date.now()-i}ms realtime)`),{results:v,unfilteredResultCount:parseInt(_),filters:b,totalFilters:y,timings:{preload:k-x,search:x,total:k}}}},Pagefind=class{constructor(e={}){this.backend=wasm_bindgen,this.primaryLanguage="unknown",this.searchID=0,this.primary=new PagefindInstance({...e,primary:!0}),this.instances=[this.primary],this.init(e?.language)}async options(e){await this.primary.options(e)}async init(e){if(document?.querySelector){const e=document.querySelector("html")?.getAttribute("lang")||"unknown";this.primaryLanguage=e.toLocaleLowerCase()}await this.primary.init(e||this.primaryLanguage,{load_wasm:!0})}async mergeIndex(e,t={}){if(this.primary.basePath.startsWith(e))return void console.warn(`Skipping mergeIndex ${e} that appears to be the same as the primary index (${this.primary.basePath})`);let n=new PagefindInstance({primary:!1,basePath:e});for(this.instances.push(n);null===this.primary.wasm;)await asyncSleep(50);await n.init(t.language||this.primaryLanguage,{load_wasm:!1}),delete t.language,await n.options(t)}mergeFilters(e){const t={};for(const n of e)for(const[e,i]of Object.entries(n))if(t[e]){const n=t[e];for(const[e,t]of Object.entries(i))n[e]=(n[e]||0)+t}else t[e]=i;return t}async filters(){let e=await Promise.all(this.instances.map((e=>e.filters())));return this.mergeFilters(e)}async preload(e,t={}){await Promise.all(this.instances.map((n=>n.preload(e,t))))}async debouncedSearch(e,t,n){const i=++this.searchID;if(this.preload(e,t),await asyncSleep(n),i!==this.searchID)return null;const a=await this.search(e,t);return i!==this.searchID?null:a}async search(e,t={}){let n=await Promise.all(this.instances.map((n=>n.search(e,t))));const i=this.mergeFilters(n.map((e=>e.filters))),a=this.mergeFilters(n.map((e=>e.totalFilters))),r=n.map((e=>e.results)).flat().sort(((e,t)=>t.score-e.score)),s=n.map((e=>e.timings));return{results:r,unfilteredResultCount:n.reduce(((e,t)=>e+t.unfilteredResultCount),0),filters:i,totalFilters:a,timings:s}}},pagefind=void 0,initial_options=void 0,init_pagefind=()=>{pagefind||(pagefind=new Pagefind(initial_options??{}))},options=async e=>{pagefind?await pagefind.options(e):initial_options=e},init=async()=>{init_pagefind()},destroy=async()=>{pagefind=void 0,initial_options=void 0},mergeIndex=async(e,t)=>(init_pagefind(),await pagefind.mergeIndex(e,t)),search=async(e,t)=>(init_pagefind(),await pagefind.search(e,t)),debouncedSearch=async(e,t,n=300)=>(init_pagefind(),await pagefind.debouncedSearch(e,t,n)),preload=async(e,t)=>(init_pagefind(),await pagefind.preload(e,t)),filters=async()=>(init_pagefind(),await pagefind.filters());export{debouncedSearch,destroy,filters,init,mergeIndex,options,preload,search};