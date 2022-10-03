"use strict";(self["webpackChunkrealvue"]=self["webpackChunkrealvue"]||[]).push([[937,896],{5140:function(t,e,i){i.d(e,{Z:function(){return k}});var o=i(3396),s=i(7139),a=i(3289);const n=t=>((0,o.dD)("data-v-356d296a"),t=t(),(0,o.Cn)(),t),c={class:"header"},l={class:"navLi"},r=(0,o.Uk)("mdi-home"),u={class:"navLi"},d={class:"navLi"},_=n((()=>(0,o._)("i",{class:"fas fa-chevron-left fa-2x","aria-hidden":"true"},null,-1))),h=[_];function m(t,e,i,n,_,m){const p=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("header",c,[(0,o._)("nav",null,[(0,o._)("li",l,[(0,o.Wm)(p,{to:"/"},{default:(0,o.w5)((()=>[(0,o.Wm)(a.t,null,{default:(0,o.w5)((()=>[r])),_:1})])),_:1})]),(0,o._)("li",u,(0,s.zw)(i.headerProps),1),(0,o._)("li",d,[(0,o._)("p",{class:"nav__link",onClick:e[0]||(e[0]=t=>m.goBack())},h)])])])}var p={props:{headerProps:String},methods:{goBack(){this.$router.go(-1)}}},g=i(89);const f=(0,g.Z)(p,[["render",m],["__scopeId","data-v-356d296a"]]);var k=f},2543:function(t,e,i){i.d(e,{Z:function(){return d}});var o=i(3396),s=i(7139);function a(t,e,i,a,n,c){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("i",{onClick:e[0]||(e[0]=t=>c.likeClick()),class:"fa fa-heart like-icon",style:(0,s.j5)([1===n.like.state?{color:"#FFC1AA"}:{color:"lightgrey"}])},null,4)])}var n=i(6265),c=i.n(n),l={data(){return{like:{users:[],count:0,state:0,auction_id:0,consumer_id:0},user:JSON.parse(localStorage.getItem("user"))}},async mounted(){this.like.auction_id=parseInt(this.$route.params.id),this.like.consumer_id=this.user.consumer_id,await c().get(`/api/checkWish/${this.like.auction_id}/${this.like.consumer_id}`,{headers:{TOKEN:this.user.token}}).then((t=>{console.log("1111"+t),console.log("1111"+t.headers),console.log(t.data),this.like.state=t.data})).catch((t=>{console.log(t)}))},methods:{likeClick(){let t={auction_id:this.like.auction_id,consumer_id:this.user.consumer_id};0===this.like.state?c().post("/api/registWish",t,{headers:{TOKEN:this.user.token}}).then((t=>{console.log("1111"+t),console.log("1111"+t.headers),alert("좋아요를 클릭했습니다!")})).catch((t=>{console.log(t)})):1===this.like.state&&c()["delete"](`/api/deleteWish/${this.like.auction_id}/${this.user.consumer_id}`,{headers:{TOKEN:this.user.token}}).then((t=>{console.log("1111"+t),console.log("1111"+t.headers),alert("좋아요를 취소하였습니다!")})).catch((t=>{console.log(t)}))}}},r=i(89);const u=(0,r.Z)(l,[["render",a],["__scopeId","data-v-68f55ab3"]]);var d=u},8768:function(t,e,i){i.r(e),i.d(e,{default:function(){return ut}});var o=i(3396),s=i(7139),a=i(9242),n=i(2539);const c=t=>((0,o.dD)("data-v-304dca15"),t=t(),(0,o.Cn)(),t),l={class:"auction-info"},r=c((()=>(0,o._)("h2",{class:"profileh2"},"상세 정보",-1))),u={class:"profileh2"},d={class:"aside_area aside_popular"},_=c((()=>(0,o._)("h3",{class:"h_popular"},null,-1))),h={class:"tbl_home"},m={class:""},p={class:""},g=c((()=>(0,o._)("th",null,"시작가",-1))),f={key:0,class:""},k=c((()=>(0,o._)("th",null,"최대 입찰가",-1))),b={key:1,class:""},w=c((()=>(0,o._)("th",null,"현재가",-1))),D={key:2,class:""},v=c((()=>(0,o._)("th",null,"최종 낙찰가",-1))),T={class:""},S=c((()=>(0,o._)("th",null,"낙과 일자",-1))),C={class:""},O=c((()=>(0,o._)("th",null,"사이즈",-1))),x={class:""},I=c((()=>(0,o._)("th",null,"상태",-1))),N={class:"state _statusName value_color_green _click(nmp.front.order.timeline.home.list.openDeliveryPopup(/o/orderStatus/deliveryTracking/2022020394386781/ORDER_DELIVERY/api)) _stopDefault"},A={key:0},$={key:0},y=(0,o.Uk)("삭제하기"),z=(0,o.Uk)(" 수정하기 "),M={key:1},P={class:"stateBtn"},E=(0,o.Uk)("입찰하기"),L={class:"h3_middle"},W=c((()=>(0,o._)("h2",{class:"profileh2"},"생산자 정보",-1))),U={class:"goods_group_list"},F={id:"_rowLi20220213173042CHK2022021381488661",class:"goods_pay_item"},H={class:"goods_item"},J={class:"goods_thumb"},R=["src"],Z={class:"goods_info"},q={class:"guide2"},B={class:"guide2"},K={class:"guide2"},j={class:"guide2"},V={action:"farm_intro",class:"login-form"},Y=c((()=>(0,o._)("input",{class:"login-form__btn",type:"submit",value:"농가 상세 소개"},null,-1)));function G(t,e,i,c,G,Q){const X=(0,o.up)("Header"),tt=(0,o.up)("Slide"),et=(0,o.up)("Like"),it=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(X,{headerProps:t.headerProps},null,8,["headerProps"]),(0,o.Wm)(tt,{imgData:t.imgData,class:"auction-image"},null,8,["imgData"]),(0,o._)("fieldset",l,[r,(0,o._)("h2",u,(0,s.zw)(t.auction.auction_name),1),(0,o._)("div",d,[_,(0,o._)("table",h,[(0,o._)("tbody",null,[(0,o._)("tr",m,[(0,o._)("th",null,(0,s.zw)(t.auction.productDTO.product),1),(0,o._)("td",null,(0,s.zw)(t.auction.productDTO.product_kg)+"kg",1)]),(0,o._)("tr",p,[g,(0,o._)("td",null,(0,s.zw)(t.auction.a_starting_price.toLocaleString())+"원",1)]),1===t.auction.bid_status?((0,o.wg)(),(0,o.iD)("tr",f,[k,(0,o._)("td",null,(0,s.zw)(t.auction.a_max_price.toLocaleString())+"원",1)])):(0,o.kq)("",!0),1===t.auction.bid_status?((0,o.wg)(),(0,o.iD)("tr",b,[w,(0,o._)("td",null,(0,s.zw)(t.auction.bid_price.toLocaleString())+"원",1)])):(0,o.kq)("",!0),0===t.auction.bid_status?((0,o.wg)(),(0,o.iD)("tr",D,[v,(0,o._)("td",null,(0,s.zw)(t.auction.a_max_price.toLocaleString())+"원",1)])):(0,o.kq)("",!0),(0,o._)("tr",T,[S,(0,o._)("td",null,(0,s.zw)(t.auction.productDTO.p_drop_date.slice(0,19)),1)]),(0,o._)("tr",C,[O,(0,o._)("td",null,(0,s.zw)(t.auction.productDTO.size),1)]),(0,o._)("tr",x,[I,(0,o._)("td",null,(0,s.zw)(t.auction.productDTO.p_status),1)])])])]),(0,o._)("div",null,[(0,o._)("p",N,(0,s.zw)(Q.updateDeadlineDate(t.auction.deadline_date))+" 경매 종료",1)]),1===t.auction.bid_status?((0,o.wg)(),(0,o.iD)("div",A,[this.auction.farm_id==t.user.farm_id?((0,o.wg)(),(0,o.iD)("div",$,[(0,o.Wm)(n.T,{class:"delete-button",block:"",onClick:e[0]||(e[0]=t=>Q.deleteAuction())},{default:(0,o.w5)((()=>[y])),_:1}),(0,o.Wm)(n.T,{class:"edit-button",block:"",onClick:e[1]||(e[1]=e=>t.$router.push({name:"auction_reg_patch",params:{id:this.auction.auction_Id}}))},{default:(0,o.w5)((()=>[z])),_:1})])):(0,o.kq)("",!0),void 0!=t.user.consumer_id?((0,o.wg)(),(0,o.iD)("div",M,[(0,o.wy)((0,o._)("input",{type:"number",placeholder:"입찰할 가격을 입력(숫자만)해주세요!",id:"bid_price","onUpdate:modelValue":e[2]||(e[2]=e=>t.bid_price=e)},null,512),[[a.nr,t.bid_price]]),(0,o._)("div",P,[((0,o.wg)(),(0,o.j4)(et,{class:"like-button",key:t.likeState,onClick:e[3]||(e[3]=t=>Q.likeStateFunc())})),(0,o.Wm)(n.T,{class:"bid-button",block:"",onClick:e[4]||(e[4]=t=>Q.bid())},{default:(0,o.w5)((()=>[E])),_:1})])])):(0,o.kq)("",!0)])):(0,o.kq)("",!0)]),(0,o._)("h3",L,(0,s.zw)(t.auction.productDTO.p_explanation),1),W,(0,o._)("div",{class:"goods_group",onClick:e[5]||(e[5]=e=>t.$router.push("/auction_detail/farm_intro"))},[(0,o._)("ul",U,[(0,o._)("li",F,[(0,o._)("div",H,[(0,o._)("p",J,[(0,o._)("img",{src:null==t.user.f_profile_img||""==t.user.f_profile_img?"/member_profile_images/base_image.png":`/member_profile_images/${t.auction.f_profile_img}.png`,alt:"",width:"90",height:"90"},null,8,R)]),(0,o._)("div",Z,[(0,o._)("p",q," 농가명 : "+(0,s.zw)(t.auction.f_farm_name),1),(0,o._)("p",B," 대표자 : "+(0,s.zw)(t.auction.f_name),1),(0,o._)("p",K," 연락처 : "+(0,s.zw)(t.auction.f_phonenum),1),(0,o._)("p",j," 농가 주소 : "+(0,s.zw)(t.auction.f_location),1)])])])])]),(0,o._)("form",V,[(0,o.Wm)(it,{to:`/auction_detail/farm_intro/${t.auction.farm_id}`},{default:(0,o.w5)((()=>[Y])),_:1},8,["to"])])])}var Q=i(3266),X=i.n(Q),tt=i(4029),et=i.n(tt),it=i(5140),ot=i(2543),st=i(880),at=i(6265),nt=i.n(at),ct={name:"App",components:{Header:it.Z,Slide:st["default"],Like:ot.Z},data:()=>({user:JSON.parse(localStorage.getItem("user")),headerProps:"경매 상세",auction:null,bid_price:null,consumer_id:null,testConsumerId:12,userState:!1,likeState:0,isMaxPrice:0,bidAlertText:"입찰하시겠습니까?",consumerBidDeletedAuctionText:"경매가 삭제되어 입찰 불가합니다.",deleteAuctionConsumerExistText:"이미 입찰이 진행된 경매는 삭제 불가합니다!",deleteAuctionFourHourText:"현재시간으로부터 마감시간까지 4시간 이내 경매는 삭제 불가합니다!",deleteAuctionConfirmText:"해당 경매를 삭제하시겠습니까?",deleteAuctionAlertText:"경매가 삭제되었습니다.",FOUR_HOUR:144e5,imgData:[],now:0}),created(){this.connect(),console.log("arr",this.$route.params.auction),void 0==this.$route.params.auction?this.auction=JSON.parse(localStorage.getItem("auction")):(this.auction=JSON.parse(this.$route.params.auction),localStorage.setItem("auction",JSON.stringify(this.auction))),console.log("경매 정보",this.auction);let t=this.auction.productDTO.product_img_name[this.auction.productDTO.product_img_name.length-1];console.log("img",t);for(let e=0;e<t;e++)this.imgData.push(this.auction.productDTO.product_img_name.replace("(0)",`(${e})`));console.log("pushImg",this.imgData)},mounted(){this.updateNow(),setInterval(this.updateNow.bind(this),1e3)},methods:{likeStateFunc(){0===this.likeState?this.likeState=1:this.likeState=0},bid(){console.log("datas",this.auction.consumer_id),console.log(this.bid_price,this.auction.a_max_price),console.log("auction.auction_Id:"+this.auction.auction_Id),console.log("auction.consumer_id:"+this.auction.consumer_id),console.log("auction.a_starting_price: "+this.auction.a_starting_price),console.log("bid_price:"+this.bid_price),console.log("auction.bid_price: "+this.auction.bid_price),console.log("this.user.consumer_id: "+this.user.consumer_id),console.log("farm_id: "+this.auction.farm_id),console.log(this.stompClient),console.log(this.stompClient.connected),this.auction.consumer_id!=this.user.consumer_id?this.bid_price>this.auction.a_max_price?alert("최대 입찰가를 초과했습니다!"):(this.bid_price==this.auction.a_max_price&&(this.isMaxPrice=1,this.bidAlertText="최고 입찰가로 "+this.bidAlertText),this.bid_price>this.auction.bid_price&&this.stompClient&&this.stompClient.connected?confirm(this.bidAlertText)&&(this.stompClient.send("/receive_bidding",JSON.stringify({auction_Id:this.auction.auction_Id,bid_price:this.bid_price,farm_id:this.auction.farm_id,auction_consumer_id:this.auction.consumer_id,consumer_id:this.user.consumer_id,auction_name:this.auction.auction_name,isMaxPrice:this.isMaxPrice,product_img_name:this.auction.productDTO.product_img_name,f_farm_name:this.auction.f_farm_name,c_name:this.user.c_name}),{}),this.auction.comsumer_id=JSON.parse(localStorage.getItem("user")).consumer_id):alert("현재 경매가보다 낮습니다!!")):alert("이미 경매에 참여하셨습니다!")},connect(){const t="/socket";let e=new(et())(t);this.stompClient=X().over(e),console.log(`소켓 연결을 시도합니다. 서버 주소: ${t}`),console.log(this.$store.state.config.headers),console.log(this.user);let i={TOKEN:this.user.token};console.log(i),this.stompClient.connect(i,(t=>{this.connected=!0,console.log("소켓 연결 성공",t),this.stompClient.subscribe("/send_bidding",(t=>{const e=JSON.parse(t.body);console.log(e),void 0!=e.auction_Id&&(this.$store.commit("UPDATE_BID_PRICE",e),this.auction.auction_Id==e.auction_Id&&(-1==e.bid_price&&(alert(this.consumerBidDeletedAuctionText),this.$router.go(-1)),this.auction.consumer_id=e.consumer_id,this.auction.c_name=e.c_name,this.auction.bid_price=e.bid_price))}))}),(t=>{console.log("소켓 연결 실패",t),this.connected=!1}))},deleteAuction(){return this.auction.consumer_id?alert(this.deleteAuctionConsumerExistText):new Date(this.auction.deadline_date).getTime()<(new Date).getTime()+this.FOUR_HOUR?alert(this.deleteAuctionFourHourText):void(confirm(this.deleteAuctionConfirmText)&&(console.log(this.user.token),nt()["delete"](`/api/auction/${this.auction.auction_Id}/${this.auction.product_id}/${this.auction.productDTO.product_img_name}`,{headers:{TOKEN:this.user.token}}).then((t=>{console.log(t),alert(this.deleteAuctionAlertText),this.$router.go(-1)})).catch((t=>{console.log(t)}))))},updateNow(){this.now=Math.round(Date.now()/1e3)},updateDeadlineDate(t){if(0===this.auction.bid_status)return"";let e=new Date;console.log("date",e),console.log("auction",this.auction),console.log("deadline",t),e.setFullYear(Number(t.substr(0,4))),e.setMonth(Number(t.substr(5,2))-1),e.setDate(Number(t.substr(8,2))),e.setHours(Number(t.substr(11,2))),e.setMinutes(Number(t.substr(14,2))),e.setSeconds(Number(t.substr(17,2)));let i=Math.round(e.getTime()/1e3)-this.now;if(i<0)return"";let o=Math.floor(i/86400),s=Math.floor(i%86400),a=Math.floor(s/3600),n=Math.floor(s%3600/60),c=Math.floor(s%3600%60),l="";return 0!=o&&(l+=o+"일 "),0!=a&&(l+=a+"시간 "),0!=n&&(l+=n+"분 "),0!=c&&(l+=c+"초 후"),l}}},lt=i(89);const rt=(0,lt.Z)(ct,[["render",G],["__scopeId","data-v-304dca15"]]);var ut=rt}}]);
//# sourceMappingURL=937.20c10879.js.map