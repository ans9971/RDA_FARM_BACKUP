"use strict";(self["webpackChunkrealvue"]=self["webpackChunkrealvue"]||[]).push([[941,673],{4925:function(t,e,s){s.d(e,{Z:function(){return f}});var i=s(3396),o=s(3289);const n=t=>((0,i.dD)("data-v-d769638a"),t=t(),(0,i.Cn)(),t),a={class:"header"},l={class:"navLi"},c=(0,i.Uk)("mdi-home"),r=n((()=>(0,i._)("li",{class:"navLi"},"리뷰 작성",-1))),u={class:"navLi"},d=n((()=>(0,i._)("i",{class:"fas fa-chevron-left fa-2x","aria-hidden":"true"},null,-1))),_=[d];function p(t,e,s,n,d,p){const h=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("header",a,[(0,i._)("nav",null,[(0,i._)("li",l,[(0,i.Wm)(h,{to:"/"},{default:(0,i.w5)((()=>[(0,i.Wm)(o.t,null,{default:(0,i.w5)((()=>[c])),_:1})])),_:1})]),r,(0,i._)("li",u,[(0,i._)("p",{class:"nav__link",onClick:e[0]||(e[0]=t=>p.goBack())},_)])])])}var h={methods:{goBack(){this.$router.go(-1)}}},m=s(89);const g=(0,m.Z)(h,[["render",p],["__scopeId","data-v-d769638a"]]);var f=g},2066:function(t,e,s){s.d(e,{Z:function(){return u}});var i=s(3396);function o(t,e,s,o,n,a){return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("i",{onClick:e[0]||(e[0]=t=>a.likeClick()),class:"fa fa-heart like-icon"})])}s(6699);var n=s(6265),a=s.n(n),l={data(){return{like:{users:[],count:0,state:!1}}},async mounted(){setTimeout((()=>{a().get("/api/checkWish",{params:{auction_id:this.$route.params.id,consumer_id:this.$store.state.login.userInfo.consumer_id}},{headers:{"Content-Type":"multipart/form-data"}}).then((t=>{alert(t)})).catch((t=>{console.log(t)}))}),1e3)},methods:{likeWho(){a().get("/api/likePostWho",{params:{post_id:this.$route.params.post}}).then((t=>{for(let e=0;e<t.data.length;e++)this.like.users.push(t.data[e].nickname),t.data[e].consumer_id===this.$store.state.login.user.consumer_id&&(document.querySelector(".likeAndShareBtn").style.backgroundColor="lightgrey",document.querySelector(".likeAndShareBtn").style.color="grey");this.like.users=this.like.users.filter((t=>void 0!==t)),this.like.count=this.like.users.length})).catch((t=>{console.log(t)}))},likeClick(){let t=JSON.parse(localStorage.getItem("userInformation"));this.like.users.includes(this.$store.state.login.user.consumer_id)?a()["delete"]("/api/likesMinus",{params:{post_id:this.$route.params.post,customer_id:this.$store.state.login.user.customer_id}}).then((t=>{console.log(t)})):a().post("/api/likesPlus",{post_id:this.$route.params.post,consumer_id:t.nickname}).then((t=>{console.log(t)}))}}},c=s(89);const r=(0,c.Z)(l,[["render",o],["__scopeId","data-v-6874ee5e"]]);var u=r},4331:function(t,e,s){s.r(e),s.d(e,{default:function(){return it}});var i=s(3396),o=s(7139),n=s(4678);const a=t=>((0,i.dD)("data-v-9d287fee"),t=t(),(0,i.Cn)(),t),l=a((()=>(0,i._)("h2",{class:"profileh2"},"상세 정보",-1))),c={class:"profileh2"},r={class:"aside_area aside_popular"},u=a((()=>(0,i._)("h3",{class:"h_popular"},null,-1))),d={class:"tbl_home"},_={class:""},p={class:""},h={class:""},m=a((()=>(0,i._)("th",null,"시작 가격",-1))),g={class:""},f=a((()=>(0,i._)("th",null,"현재 가격",-1))),k={class:""},v=a((()=>(0,i._)("th",null,"낙과 일자",-1))),b={class:""},w=a((()=>(0,i._)("th",null,"사이즈",-1))),C={class:""},I=a((()=>(0,i._)("th",null,"상태",-1))),z=(0,i.Uk)("삭제하기"),$={class:"stateBtn"},S=(0,i.Uk)("입찰하기"),y={class:"h3_middle"},D=a((()=>(0,i._)("h2",{class:"profileh2"},"생산자 정보",-1))),O={class:"goods_group_list"},T={id:"_rowLi20220213173042CHK2022021381488661",class:"goods_pay_item"},W={class:"goods_item"},P={class:"goods_thumb"},N=["src"],Z={class:"goods_info"},q={class:"guide2"},B={class:"guide2"},L={class:"guide2"},J={class:"guide2"},A={class:"guide2"},E={class:"seller_item"},U={class:"inner"},H={class:"seller"},K={class:"tel"},x=a((()=>(0,i._)("p",{class:"state_button qna _click(nmp.front.order.timeline.home.list.shoppingInquiry(/merchant/shoppingInquiry/2022021381488661)) _stopDefault"}," 문의하기 ",-1))),j=a((()=>(0,i._)("form",{action:"farm_intro",class:"login-form"},[(0,i._)("input",{class:"login-form__btn",type:"submit",value:"농가 상세 소개"})],-1)));function M(t,e,s,a,M,R){const F=(0,i.up)("Header"),G=(0,i.up)("Slide"),Q=(0,i.up)("Like");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(F,{headerProps:t.headerProps},null,8,["headerProps"]),(0,i.Wm)(G),(0,i._)("fieldset",null,[l,(0,i._)("h2",c,(0,o.zw)(t.auction.auction_name),1),(0,i._)("div",r,[u,(0,i._)("table",d,[(0,i._)("tbody",null,[(0,i._)("tr",_,[(0,i._)("th",null,(0,o.zw)(t.auction.productDTO.product),1),(0,i._)("td",null,(0,o.zw)(t.auction.productDTO.product_kg)+"kg",1)]),(0,i._)("tr",p,[(0,i._)("th",null,"consumer_id : "+(0,o.zw)(t.testConsumerId),1)]),(0,i._)("tr",h,[m,(0,i._)("td",null,(0,o.zw)(t.auction.a_starting_price)+"원",1)]),(0,i._)("tr",g,[f,(0,i._)("td",null,(0,o.zw)(t.auction.bid_price)+"원",1)]),(0,i._)("tr",k,[v,(0,i._)("td",null,(0,o.zw)(t.auction.productDTO.p_drop_date),1)]),(0,i._)("tr",b,[w,(0,i._)("td",null,(0,o.zw)(t.auction.productDTO.size),1)]),(0,i._)("tr",C,[I,(0,i._)("td",null,(0,o.zw)(t.auction.productDTO.p_status),1)])])])]),(0,i._)("div",null,[!0===t.deleteState?((0,i.wg)(),(0,i.j4)(n.T,{key:0,class:"delete-button",block:"",onClick:e[0]||(e[0]=t=>R.bid())},{default:(0,i.w5)((()=>[z])),_:1})):(0,i.kq)("",!0),(0,i._)("div",$,[(0,i.Wm)(Q,{class:"like-button"}),(0,i.Wm)(n.T,{class:"button",block:"",onClick:e[1]||(e[1]=t=>R.bid())},{default:(0,i.w5)((()=>[S])),_:1})])])]),(0,i._)("h3",y,(0,o.zw)(t.auction.productDTO.p_explanation),1),D,(0,i._)("div",{class:"goods_group",onClick:e[2]||(e[2]=e=>t.$router.push("/auction_detail/farm_intro"))},[(0,i._)("ul",O,[(0,i._)("li",T,[(0,i._)("div",W,[(0,i._)("p",P,[(0,i._)("img",{src:`/product_images/${t.auction.productDTO.product_img_name}.png`,alt:"",width:"90",height:"90"},null,8,N)]),(0,i._)("div",Z,[(0,i._)("p",q," 농가명 : "+(0,o.zw)(t.auction.f_farm_name),1),(0,i._)("p",B," 대표자 : "+(0,o.zw)(t.auction.f_name),1),(0,i._)("p",L," 사업자 등록번호 : "+(0,o.zw)(t.auction.f_num),1),(0,i._)("p",J," 농가 주소 : "+(0,o.zw)(t.auction.f_location),1),(0,i._)("p",A," 연락처 : "+(0,o.zw)(t.auction.f_phonenum),1)])]),(0,i._)("div",E,[(0,i._)("div",U,[(0,i._)("span",H,(0,o.zw)(t.auction.f_farm_name),1),(0,i._)("span",K,(0,o.zw)(t.auction.f_phonenum),1),x])])])])]),j])}var R=s(3266),F=s.n(R),G=s(4029),Q=s.n(G),V=s(4925),X=s(2066),Y=s(7866),tt={name:"App",components:{Header:V.Z,Slide:Y["default"],Like:X.Z},data:()=>({headerProps:"경매 상세",auction:null,bid_price:null,consumer_id:null,user:JSON.parse(localStorage.getItem("user")),testConsumerId:12,deleteState:!1}),mounted(){this.$store.state.login.userInfo.consumer_id===this.testConsumerId?this.deleteState=!0:this.deleteState=!1},created(){this.connect(),console.log(this.$route.params.auction),this.auction=JSON.parse(this.$route.params.auction),console.log(this.auction)},methods:{bid(){console.log("auction.auction_Id:"+this.auction.auction_Id),console.log("auction.a_starting_price: "+this.auction.a_starting_price),console.log("bid_price:"+this.bid_price),console.log("auction.bid_price: "+this.auction.bid_price),console.log("this.user.consumer_id: "+this.user.consumer_id),console.log(this.stompClient),console.log(this.stompClient.connected),this.bid_price<this.auction.a_starting_price?alert("시작가격보다 낮습니다!!"):this.bid_price>this.auction.bid_price&&this.stompClient&&this.stompClient.connected?this.stompClient.send("/receive_bidding",JSON.stringify({auction_Id:this.auction.auction_Id,bid_price:this.bid_price,consumer_id:this.user.consumer_id,auction_name:this.auction.auction_name}),{}):alert("현재 경매가격보다 낮습니다!!")},connect(){const t="/socket";let e=new(Q())(t);this.stompClient=F().over(e),console.log(`소켓 연결을 시도합니다. 서버 주소: ${t}`),console.log(this.$store.state.config.headers);let s={TOKEN:this.$store.state.config.headers.TOKEN};console.log(s),this.stompClient.connect(s,(t=>{this.connected=!0,console.log("소켓 연결 성공",t),this.stompClient.subscribe("/send_bidding",(t=>{const e=JSON.parse(t.body);console.log(e),void 0!=e.auction_Id&&(this.$store.commit("UPDATE_BID_PRICE",e),this.auction.bid_price=e.bid_price)}))}),(t=>{console.log("소켓 연결 실패",t),this.connected=!1}))}}},et=s(89);const st=(0,et.Z)(tt,[["render",M],["__scopeId","data-v-9d287fee"]]);var it=st}}]);
//# sourceMappingURL=941.43f2f6ab.js.map