"use strict";(self["webpackChunkrealvue"]=self["webpackChunkrealvue"]||[]).push([[579],{5381:function(t,e,o){o.d(e,{Z:function(){return v}});var l=o(3396);const s=t=>((0,l.dD)("data-v-491d14ee"),t=t(),(0,l.Cn)(),t),a={class:"main_nav_t_div"},n={class:"main_t_nav"},i={class:"main_t_nav_list"},r={class:"nav__btn"},c=s((()=>(0,l._)("i",{class:"fas fa-bell fa-2x","aria-hidden":"true"},null,-1))),u={class:"main_m_li_list"},_=["src"],d={class:"nav__btn"},g=s((()=>(0,l._)("i",{class:"fas fa-plus fa-2x","aria-hidden":"true"},null,-1)));function p(t,e,o,s,p,m){const f=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("div",a,[(0,l._)("nav",n,[(0,l._)("ul",i,[(0,l._)("li",r,[(0,l.Wm)(f,{class:"nav__link",to:"/alert"},{default:(0,l.w5)((()=>[c])),_:1})]),(0,l._)("li",u,[(0,l._)("img",{class:"logo",src:p.logo,alt:"로고",width:"45"},null,8,_)]),(0,l._)("li",d,[(0,l.Wm)(f,{to:"/auction_reg"},{default:(0,l.w5)((()=>[g])),_:1})])])])])}var m=o.p+"img/logo.2026bf89.png",f={props:{headerProps:String},data(){return{logo:m}},mounted(){console.log(m)}},h=o(89);const b=(0,h.Z)(f,[["render",p],["__scopeId","data-v-491d14ee"]]);var v=b},1305:function(t,e,o){o.r(e),o.d(e,{default:function(){return L}});var l=o(3396),s=o(7139);const a=t=>((0,l.dD)("data-v-0b5e7774"),t=t(),(0,l.Cn)(),t),n={class:"mypage_contain"},i={class:"inner"},r={class:"fieldContain"},c={class:"goods_group"},u={class:"goods_group_list"},_={id:"_rowLi20220213173042CHK2022021381488661",class:"goods_pay_item"},d={class:"goods_item"},g={href:"/orderStatus/2022021339733581",class:"goods_thumb"},p=["src"],m={class:"goods_info"},f={class:"guide2"},h={class:"check button1"},b=a((()=>(0,l._)("li",null,[(0,l._)("button",{type:"button",class:"fpmgBt2",onclick:"location.href='/#'"},"경매횟수")],-1))),v=a((()=>(0,l._)("li",null,[(0,l._)("button",{type:"button",class:"fpmgBt2",onclick:"location.href='/#'"},"나의 파치포인트")],-1))),k={type:"button",class:"fpmgBt1",onclick:"location.href='/#'"},w={type:"button",class:"fpmgBt1",onclick:"location.href='/#'"},y={class:"button-100"},C={type:"button",class:"fpmgBt1",onclick:"location.href='farm_mypage_auction'"},B=(0,l.Uk)("경매 내역"),D=a((()=>(0,l._)("li",null,[(0,l._)("button",{type:"button",class:"fpmgBt1",onclick:"location.href='farm_mypage_keep'"},"찜한목록")],-1))),P=a((()=>(0,l._)("button",{type:"button",class:"fpmgBt1"},"이용후기",-1))),S=a((()=>(0,l._)("button",{type:"button",class:"fpmgBt1"},"고객센터",-1))),W=a((()=>(0,l._)("button",{type:"button",class:"fpmgBt1"},"개인정보 수정",-1)));function $(t,e,o,a,$,O){const N=(0,l.up)("Header"),I=(0,l.up)("router-link"),Z=(0,l.up)("bottom-nav");return(0,l.wg)(),(0,l.iD)("div",n,[(0,l.Wm)(N,{headerProps:$.headerProps},null,8,["headerProps"]),(0,l._)("div",i,[(0,l._)("fieldset",r,[(0,l._)("div",c,[(0,l._)("ul",u,[(0,l._)("li",_,[(0,l._)("div",d,[(0,l._)("a",g,[(0,l._)("img",{class:"circle_image",src:null==$.user.c_profile_img||""==$.user.c_profile_img?"/member_profile_images/base_image.png":`/member_profile_images/${$.user.c_profile_img}.png`,alt:"",width:"90",height:"90"},null,8,p)]),(0,l._)("div",m,[(0,l._)("p",f," 사용자명 : "+(0,s.zw)($.userData.c_name),1)])])])])])]),(0,l._)("fieldset",null,[(0,l._)("ul",h,[b,v,(0,l._)("li",null,[(0,l._)("button",k,(0,s.zw)($.pachiCount),1)]),(0,l._)("li",null,[(0,l._)("button",w,(0,s.zw)($.pachiPoint.toLocaleString())+"원",1)])])]),(0,l._)("fieldset",null,[(0,l._)("ul",y,[(0,l._)("li",null,[(0,l._)("button",C,[(0,l.Wm)(I,{to:"/farm_mypage_auction"},{default:(0,l.w5)((()=>[B])),_:1})])]),D,(0,l._)("li",null,[(0,l.Wm)(I,{to:"/farm_mypage_get_review"},{default:(0,l.w5)((()=>[P])),_:1})]),(0,l._)("li",null,[(0,l.Wm)(I,{to:"/ServiceCenter"},{default:(0,l.w5)((()=>[S])),_:1})]),(0,l._)("li",null,[(0,l.Wm)(I,{to:"/consumer_profile"},{default:(0,l.w5)((()=>[W])),_:1})]),(0,l._)("li",null,[(0,l._)("button",{type:"button",class:"fpmgBt1",onClick:e[0]||(e[0]=t=>O.logout())},"로그아웃")])])])]),(0,l.Wm)(Z)])}var O=o(5381),N=o(3454),I=o(6265),Z=o.n(I),z={components:{bottomNav:N["default"],Header:O.Z},data(){return{headerProps:"마이페이지",userData:{},pachiPoint:0,pachiCount:0,user:JSON.parse(localStorage.getItem("user"))}},methods:{logout(){this.$store.commit("LOGOUT"),this.$router.push("/login")}},async mounted(){console.log(this.$store.state.user),console.log(this.$store.state.user.id),this.userData=JSON.parse(localStorage.getItem("user")),console.log(this.userData.consumer_id),await Z().get(`/api/consumerPachiPoint/${this.userData.consumer_id}`,{headers:{TOKEN:this.user.token}}).then((t=>{console.log("1111"+t),console.log("1111"+t.headers),this.pachiPoint=t.data,console.log(t)})).catch((t=>{console.log(err)})),Z().get(`/api/consumerCountAuction/${this.userData.consumer_id}`,{headers:{TOKEN:this.user.token}}).then((t=>{console.log("1111"+t),console.log("1111"+t.headers),console.log("1111"+t.headers),this.pachiCount=t.data})).catch((t=>{console.log(err)}))}},H=o(89);const K=(0,H.Z)(z,[["render",$],["__scopeId","data-v-0b5e7774"]]);var L=K}}]);
//# sourceMappingURL=579.b396a448.js.map