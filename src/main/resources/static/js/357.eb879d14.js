"use strict";(self["webpackChunkrealvue"]=self["webpackChunkrealvue"]||[]).push([[357],{4217:function(s,e,a){a.d(e,{Z:function(){return f}});var t=a(3396),o=a(7139);const i=s=>((0,t.dD)("data-v-1d63df00"),s=s(),(0,t.Cn)(),s),l={class:"main_nav_t_div"},n={class:"main_t_nav"},c={class:"main_t_nav_list"},r=i((()=>(0,t._)("li",{class:"nav__btn"},[(0,t._)("a",{class:"nav__link",href:"alert"},[(0,t._)("i",{class:"fas fa-bell fa-2x","aria-hidden":"true"})])],-1))),_={class:"main_m_li_list"},d={class:"nav_m_link",href:"workout.html"},u={class:"nav__btn"},p=i((()=>(0,t._)("i",{class:"fas fa-chevron-left fa-2x","aria-hidden":"true"},null,-1))),h=[p];function m(s,e,a,i,p,m){return(0,t.wg)(),(0,t.iD)("div",l,[(0,t._)("nav",n,[(0,t._)("ul",c,[r,(0,t._)("li",_,[(0,t._)("p",d,(0,o.zw)(a.headerProps),1)]),(0,t._)("li",u,[(0,t._)("a",{class:"nav__link",onClick:e[0]||(e[0]=e=>s.$router.go(-1))},h)])])])])}var v={props:{headerProps:String}},w=a(89);const g=(0,w.Z)(v,[["render",m],["__scopeId","data-v-1d63df00"]]);var f=g},9357:function(s,e,a){a.r(e),a.d(e,{default:function(){return as}});var t=a(3396),o=a(9242),i=a(7139);const l={class:"div_search"},n={class:"recentSearchBox"},c=(0,t._)("h2",{class:"profileh2"},"최근 검색어",-1),r={class:"main_div-1"},_={class:"btn_file"},d={for:"inputImage",class:""},u=["onClick"],p={class:"popularityBox"},h=(0,t._)("h2",{class:"profileh2"},"인기 검색어",-1),m={class:"main_div-2"},v={class:"aside_area aside_popular"},w=(0,t._)("h3",{class:"h_popular"},[(0,t._)("span")],-1),g={class:"tbl_home"},f={class:"up"},k={class:"upRow",scope:"row"},b=["onClick"],y={class:"white_div"},D={class:"goods_pay_section"},C={class:"goods_group"},P={class:"goods_group_list"},I=["onClick"],$={class:"goods_thumb"},z=["src"],K={class:"goods_info"},T={class:"goods"},O={class:"name"},L={class:"info"},U=(0,t._)("span",{class:"blind"},"상품금액",-1),A={class:"date"},E=(0,t._)("span",{class:"blind"},"등록일",-1),N={class:"state _statusName value_color_green _click(nmp.front.order.timeline.home.list.openDeliveryPopup(/o/orderStatus/deliveryTracking/2022020394386781/ORDER_DELIVERY/api)) _stopDefault"},S={class:"guide"},R={class:"seller_item"},x={class:"inner"},H={class:"seller"},Y={class:"tel"},W=(0,t._)("br",null,null,-1),Z=(0,t._)("br",null,null,-1);function B(s,e,a,B,V,J){const j=(0,t.up)("Header"),q=(0,t.up)("bottom-nav");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t.Wm)(j,{headerProps:V.headerProps},null,8,["headerProps"]),(0,t._)("div",l,[(0,t.wy)((0,t._)("input",{class:"input_search",type:"text",placeholder:"검색어 입력",onKeyup:e[0]||(e[0]=(0,o.D2)((s=>J.searchAuction(V.keyword)),["enter"])),"onUpdate:modelValue":e[1]||(e[1]=s=>V.keyword=s)},null,544),[[o.nr,V.keyword]]),(0,t._)("button",{class:"button_search",onClick:e[2]||(e[2]=s=>J.searchAuction(V.keyword))},"검색")]),(0,t._)("fieldset",n,[c,(0,t._)("div",r,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(this.$store.state.keywordList,((s,e)=>((0,t.wg)(),(0,t.iD)("div",{key:e},[(0,t._)("span",_,[(0,t._)("label",d,[(0,t._)("b",{id:"btnChangeProfile",class:"popularityList",onClick:e=>J.searchAuction(s)},[(0,t._)("em",null,(0,i.zw)(e+1)+".",1),(0,t.Uk)(" "+(0,i.zw)(s),1)],8,u)])])])))),128))])]),(0,t._)("fieldset",p,[h,(0,t._)("div",m,[(0,t._)("div",v,[w,(0,t._)("table",g,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(this.$store.state.popularKeywordList,((s,e)=>((0,t.wg)(),(0,t.iD)("tbody",{key:e},[(0,t._)("tr",f,[(0,t._)("th",k,[(0,t._)("em",null,(0,i.zw)(e+1)+".",1),(0,t._)("span",{onClick:e=>J.searchAuction(s)},(0,i.zw)(s),9,b)])])])))),128))])])])]),(0,t._)("fieldset",null,[(0,t._)("div",y,[(0,t._)("div",D,[(0,t._)("div",C,[(0,t._)("ul",P,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(this.$store.state.auctionList,((s,e)=>((0,t.wg)(),(0,t.iD)("li",{key:s.auction_Id,id:"_rowLi20220203162708CHK2022020394386781",class:"goods_pay_item _interlockNo20220211200904406814"},[(0,t._)("div",{onClick:a=>J.navigateProduct(s.auction_Id,e),class:"goods_item"},[(0,t._)("p",$,[(0,t._)("img",{src:`/product_images/${s.productDTO.product_img_name}.png`,alt:"",width:"90",height:"90"},null,8,z)]),(0,t._)("div",K,[(0,t._)("div",T,[(0,t._)("p",O,(0,i.zw)(s.auction_name),1),(0,t._)("ul",L,[(0,t._)("li",null,[U,(0,t.Uk)((0,i.zw)(s.bid_price)+"원",1)]),(0,t._)("li",A,[E,(0,t.Uk)(" "+(0,i.zw)(s.productDTO.p_reg_date),1)])])]),(0,t._)("p",N,(0,i.zw)(s.bid_status)+" ("+(0,i.zw)(s.deadline_date)+" 경매 종료)",1),(0,t._)("p",S,(0,i.zw)(s.productDTO.p_explanation),1)])],8,I),(0,t._)("div",R,[(0,t._)("div",x,[(0,t._)("span",H,(0,i.zw)(s.f_farm_name),1),(0,t._)("span",Y,(0,i.zw)(s.f_phonenum),1),W,Z])])])))),128))])])])])]),(0,t.Wm)(q)])}var V=a(6265),J=a.n(V),j=a(3266),q=a.n(j),F=a(4029),G=a.n(F),M=a(4217),Q=a(6337),X={components:{bottomNav:Q["default"],Header:M.Z},name:"search",data(){return{headerProps:"Search",checkUser:"consumer",id:1,keyword:""}},created(){this.connect(),this.initPopularKeyword()},methods:{searchAuction(s){""!==s?(console.log("keyword: "+s),this.$store.commit("PUSH_KEYWORD_LIST",s),J().get(`/api/searchAuction/${this.checkUser}/${this.id}/${s}`).then((s=>{this.$store.commit("INIT_AUCTION_LIST",s.data)})).catch((s=>{console.log(s)})),this.keyword=""):""===s&&alert("검색어를 입력해주세요!")},connect(){const s="/socket";let e=new(G())(s);this.stompClient=q().over(e);let a={TOKEN:this.$store.state.config.headers.TOKEN};this.stompClient.connect(a,(s=>{this.connected=!0,console.log("소켓 연결 성공",s),this.stompClient.subscribe("/send_bidding",(s=>{const e=JSON.parse(s.body);void 0!=e.auction_Id&&this.$store.commit("UPDATE_BID_PRICE",e)}))}),(s=>{console.log("소켓 연결 실패",s),this.connected=!1}))},initPopularKeyword(){J().get("/api/popularKeyword").then((s=>{this.$store.commit("INIT_POPULAR_KEYWORD_LIST",s.data)})).catch((s=>{console.log(s)}))},navigateProduct(s,e){this.$router.push({name:"auction_detail",params:{id:s,index:e}})},liked(){}}},ss=a(89);const es=(0,ss.Z)(X,[["render",B]]);var as=es}}]);
//# sourceMappingURL=357.eb879d14.js.map