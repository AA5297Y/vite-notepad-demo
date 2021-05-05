import{n as e,e as a,d as t,c as r,b as i,i as n}from"./index.2a1c02c1.js";import{p as l,e as s,f as o,o as p,b as c,d,h as m,t as y,T as u,g,F as h,j as f,w as v}from"./vendor.91a2dab4.js";import{_ as b}from"./Pagination.591bb0c2.js";import{_}from"./FeedBack.16a02a9e.js";const F={name:"ToolBar",components:{HorList:e,GenBtnFlat:a,GenTextBox:t,Card:r,BtnGroup:i},emits:["update:search","update:filter","update:tagFilter"],props:{app:{type:Object},search:{type:String},filter:{type:Array},tags:{type:Array},tagFilter:{type:Array}},data:()=>({filter_:[],tagFilter_:[]}),methods:{changeFilter(e){let a=this.filter_.indexOf(e);-1===a?(this.filter_.push(e),this.$emit("update:filter",this.filter_)):a>-1&&(this.filter_.splice(a,1),this.$emit("update:filter",this.filter_))},changeTagFilter(e){let a=this.tagFilter_.indexOf(e);-1===a?(this.tagFilter_.push(e),this.$emit("update:tagFilter",this.tagFilter_)):a>-1&&(this.tagFilter_.splice(a,1),this.$emit("update:tagFilter",this.tagFilter_))}}},k=v("data-v-203a38d2");l("data-v-203a38d2");const w=d("span",{class:"note-toolbar-icon iconfont icon-top"},null,-1),x=d("span",{class:"note-toolbar-icon iconfont icon-lock"},null,-1),$=d("span",{class:"note-toolbar-icon iconfont icon-share"},null,-1),O=d("span",{class:"note-toolbar-icon iconfont icon-fabulous"},null,-1),T=d("span",{class:"note-toolbar-icon iconfont icon-history"},null,-1),j={class:"search-container"},B=d("span",{class:"iconfont icon-search"},null,-1),C=d("span",{class:"note-toolbar-icon iconfont icon-add"},null,-1),U={class:"filter-line"};s();const G=k(((e,a,t,r,i,n)=>{const l=o("gen-btn-flat"),s=o("btn-group"),v=o("hor-list"),b=o("gen-text-box"),_=o("card");return p(),c(h,null,[d(_,{primary:"none",secondary:t.app.theme.secondary,flat:"","no-shadow":""},{main:k((()=>[d(s,null,{default:k((()=>[d(v,{primary:t.app.theme.primary,secondary:t.app.theme.strong},{default:k((()=>[d(l,{onClick:a[1]||(a[1]=e=>n.changeFilter("onTop")),value:t.filter.indexOf("onTop")>-1,primary:"rgba(128,128,128,0.5)",secondary:t.app.theme.primary,l:""},{default:k((()=>[w,m(" "+y(e.$t("message.router.note.onTop")),1)])),_:1},8,["value","secondary"]),d(u,{name:"show-hide"},{default:k((()=>[t.app.login?(p(),c(s,{key:0},{default:k((()=>[d(l,{onClick:a[2]||(a[2]=e=>n.changeFilter("private")),value:t.filter.indexOf("private")>-1,primary:"rgba(128,128,128,0.5)",secondary:t.app.theme.primary,l:""},{default:k((()=>[x,d("span",null,y(e.$t("message.router.note.private")),1)])),_:1},8,["value","secondary"]),d(l,{onClick:a[3]||(a[3]=e=>n.changeFilter("public")),value:t.filter.indexOf("public")>-1,primary:"rgba(128,128,128,0.5)",secondary:t.app.theme.primary,l:""},{default:k((()=>[$,d("span",null,y(e.$t("message.router.note.public")),1)])),_:1},8,["value","secondary"]),d(l,{onClick:a[4]||(a[4]=e=>n.changeFilter("collection")),value:t.filter.indexOf("collection")>-1,primary:"rgba(128,128,128,0.5)",secondary:t.app.theme.primary,l:""},{default:k((()=>[O,d("span",null,y(e.$t("message.router.note.collection")),1)])),_:1},8,["value","secondary"]),d(l,{onClick:a[5]||(a[5]=e=>n.changeFilter("working")),value:t.filter.indexOf("working")>-1,primary:"rgba(128,128,128,0.5)",secondary:t.app.theme.primary,l:""},{default:k((()=>[T,d("span",null,y(e.$t("message.router.note.working")),1)])),_:1},8,["value","secondary"])])),_:1})):g("",!0)])),_:1})])),_:1},8,["primary","secondary"]),d("div",j,[d(b,{value:t.search,"onUpdate:value":a[6]||(a[6]=e=>t.search=e),onValue:a[7]||(a[7]=a=>e.$emit("update:search",a)),width:160,primary:t.app.theme.primary,secondary:t.app.theme.strong,"no-border":"",flat:"",l:""},null,8,["value","primary","secondary"]),d(l,{primary:t.app.theme.secondary,secondary:t.app.theme.primary,transparent:"",square:"",l:""},{default:k((()=>[B])),_:1},8,["primary","secondary"])]),d(u,{name:"show-hide"},{default:k((()=>[t.app.login?(p(),c(l,{key:0,primary:t.app.theme.secondary,secondary:t.app.theme.primary,transparent:"",l:""},{default:k((()=>[C,d("span",null,y(e.$t("message.button.new")),1)])),_:1},8,["primary","secondary"])):g("",!0)])),_:1})])),_:1})])),_:1},8,["secondary"]),d(_,{primary:"none",secondary:t.app.theme.border,flat:"","no-shadow":""},{main:k((()=>[d("div",U,[d("span",{style:{color:t.app.theme.primary},class:"note-toolbar-icon iconfont icon-filter"},null,4),d(v,{primary:t.app.theme.primary,secondary:t.app.theme.strong},{default:k((()=>[(p(!0),c(h,null,f(t.tags,(e=>(p(),c(l,{key:e,transparent:"",primary:t.app.theme.secondary,secondary:t.app.theme.primary,value:t.tagFilter.indexOf(e)>-1,m:"",onClick:a=>n.changeTagFilter(e)},{default:k((()=>[m(y(e),1)])),_:2},1032,["primary","secondary","value","onClick"])))),128))])),_:1},8,["primary","secondary"])])])),_:1},8,["secondary"])],64)}));F.render=G,F.__scopeId="data-v-203a38d2";const A={name:"NotePagination",components:{FeedBack:_,GenBtnFlat:a,Pagination:b,BtnGroup:i,Card:r},props:{app:{type:Object},filter:{type:Array},tagFilter:{type:Array}},data:()=>({page:[{id:0,title:"title1",collection:!0,working:!0,tags:["html","css","js"],desc:"test1",time:"2021-2-22 22:22"},{id:1,title:"title2",collection:!0,working:!0,tags:["vue","vue-router"],desc:"test2",time:"2021-2-22 22:22"},{id:2,title:"title3",collection:!1,working:!0,tags:["vite"],desc:"test3",time:"2021-2-22 22:22"},{id:3,title:"title4",collection:!1,working:!0,tags:["vite"],desc:"test4",time:"2021-2-22 22:22"},{id:4,title:"title5",collection:!1,working:!0,tags:["resize-observer-polyfill"],desc:"test5",time:"2021-2-22 22:22"},{id:5,title:"title6",collection:!1,working:!1,tags:["resize-observer-polyfill"],desc:"test6",time:"2021-2-22 22:22"}]})},P=v("data-v-0f3691f1");l("data-v-0f3691f1");const S={class:"line"},z={class:"title"},I={class:"line"},N={class:"line"},H={class:"desc"},q={class:"line"},L={class:"desc"},V=d("span",{class:"note-icon iconfont icon-calendar"},null,-1);s();const D=P(((e,a,t,r,i,n)=>{const l=o("gen-btn-flat"),s=o("btn-group"),u=o("feed-back"),g=o("card"),v=o("pagination");return p(),c(v,{page:i.page,refHeight:153},{default:P((a=>[d(g,{primary:t.app.theme.primary,secondary:t.app.theme.secondary,flat:""},{head:P((()=>[d("div",S,[d("div",z,y(a.item.title),1)])])),main:P((()=>[d("div",I,[d(s,null,{default:P((()=>[(p(!0),c(h,null,f(a.item.tags,(e=>(p(),c(l,{key:e,primary:t.app.theme.card,secondary:t.app.theme.secondary,margin:"",m:""},{default:P((()=>[m(y(e),1)])),_:2},1032,["primary","secondary"])))),128))])),_:2},1024)]),d("div",N,[d("div",H,y(a.item.desc),1)])])),action:P((()=>[d("div",q,[d("div",L,[V,m(" "+y(a.item.time),1)]),d(u,{primary:t.app.theme.primary,secondary:t.app.theme.border,disabled:""},null,8,["primary","secondary"]),d(s,null,{default:P((()=>[d(l,{primary:t.app.theme.card,secondary:t.app.theme.strong,margin:"",m:""},{default:P((()=>[m(y(e.$t("message.button.edit")),1)])),_:1},8,["primary","secondary"]),d(l,{primary:t.app.theme.card,secondary:"indianred",margin:"",m:""},{default:P((()=>[m(y(e.$t("message.button.delete")),1)])),_:1},8,["primary"])])),_:1})])])),_:2},1032,["primary","secondary"])])),_:1},8,["page"])}));A.render=D,A.__scopeId="data-v-0f3691f1";const E={name:"Note",components:{NotePagination:A,ToolBar:F,Spacing:n,Card:r,GenBtnFlat:a},props:{app:{type:Object}},data:()=>({search:"",filter:[],tags:["html","css","js","vue","vue-router","vite","lodash","resize-observer-polyfill","spring-boot"],tagFilter:[]}),methods:{updateSearch(e){this.search=e},updateFilter(e){this.filter=e},updateTagFilter(e){this.tagFilter=e}}},J=v("data-v-639f79b8");l("data-v-639f79b8");const K={class:"note-view",style:{color:"deepskyblue"}},M={class:"layout"},Q={class:"notes-container"};s();const R=J(((e,a,t,r,i,n)=>{const l=o("tool-bar"),s=o("note-pagination");return p(),c("div",K,[d("div",M,[d(l,{app:t.app,search:i.search,filter:i.filter,tags:i.tags,tagFilter:i.tagFilter,"onUpdate:search":n.updateSearch,"onUpdate:filter":n.updateFilter,"onUpdate:tagFilter":n.updateTagFilter},null,8,["app","search","filter","tags","tagFilter","onUpdate:search","onUpdate:filter","onUpdate:tagFilter"]),d("div",Q,[d(s,{search:i.search,app:t.app,filter:i.filter,tagFilter:i.tagFilter,primary:t.app.theme.card,secondary:t.app.theme.strong},null,8,["search","app","filter","tagFilter","primary","secondary"])])])])}));E.render=R,E.__scopeId="data-v-639f79b8";export default E;