"use strict";(self["webpackChunkrealvue"]=self["webpackChunkrealvue"]||[]).push([[19],{8099:function(){},2635:function(e,t,n){n.d(t,{Z:function(){return p}});var o=n(3396),r=n(8521);const s=e=>((0,o.dD)("data-v-595c3961"),e=e(),(0,o.Cn)(),e),l={class:"auth-contain"},a={class:"auth-box"},i=s((()=>(0,o._)("input",{type:"text",id:"postcode",class:"information-form__input",placeholder:"우편번호"},null,-1))),d=s((()=>(0,o._)("input",{type:"text",id:"roadAddress",class:"information-form__input2",placeholder:"도로명 주소"},null,-1))),u=s((()=>(0,o._)("br",null,null,-1)));function m(e,t,n,s,m,c){return(0,o.wg)(),(0,o.iD)("div",l,[(0,o.Wm)(r.D,{cols:"12"},{default:(0,o.w5)((()=>[(0,o._)("div",a,[(0,o._)("button",{class:"auth-complete-btn",onClick:t[0]||(t[0]=e=>c.search())},"주소 검색"),i,d,u]),(0,o._)("button",{class:"auth-button",onClick:t[1]||(t[1]=t=>e.$emit("searchAddressRes",{zipcode:this.zipcode,address:this.address}))},"주소 확인")])),_:1})])}var c={props:{addressInfo:{zipcode:String,address:String}},data(){return{zipcode:"",address:""}},mounted(){console.log("addressInfo: "+this.addressInfo.zipcode),0!=this.addressInfo.zipcode&&(document.getElementById("postcode").value="우편번호 "+this.addressInfo.zipcode,document.getElementById("roadAddress").value="주소 "+this.addressInfo.address)},methods:{search(){new window.daum.Postcode({oncomplete:e=>{var t=e.roadAddress,n="";""!==e.bname&&/[동|로|가]$/g.test(e.bname)&&(n+=e.bname),""!==e.buildingName&&"Y"===e.apartment&&(n+=""!==n?", "+e.buildingName:e.buildingName),""!==n&&(n=" ("+n+")"),document.getElementById("postcode").value="우편번호 "+e.zonecode,document.getElementById("roadAddress").value="주소 "+t,this.zipcode=e.zonecode,this.address=t}}).open()}}},f=n(89);const _=(0,f.Z)(c,[["render",m],["__scopeId","data-v-595c3961"]]);var p=_},6019:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var o=n(3396),r=n(9242);const s=(0,o._)("header",{class:"welcome-header"},[(0,o._)("h1",{class:"welcome-header__title"},"정 보 입 력")],-1),l=(0,o._)("label",{id:"login-form-label"},"농가명",-1),a=(0,o._)("label",{id:"login-form-label"},"대표자",-1),i=(0,o._)("label",{id:"login-form-label"},"사업자 등록번호",-1),d=(0,o._)("label",{id:"login-form-label"},"사업장 소재지",-1),u=(0,o._)("label",{id:"login-form-label"},"농가 전화번호",-1);function m(e,t,n,m,c,f){const _=(0,o.up)("SearchAddress");return(0,o.wg)(),(0,o.iD)("div",null,[s,(0,o._)("form",{onSubmit:t[5]||(t[5]=(0,r.iM)(((...t)=>e.submitBizForm&&e.submitBizForm(...t)),["prevent"])),class:"login-form"},[l,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>c.farm_member_info.f_farm_name=e),class:"information-form__input",type:"text",required:"",placeholder:"농가명"},null,512),[[r.nr,c.farm_member_info.f_farm_name]]),a,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>c.farm_member_info.f_representative=e),class:"information-form__input",type:"text",required:"",placeholder:"대표자"},null,512),[[r.nr,c.farm_member_info.f_representative]]),i,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>c.farm_member_info.f_BRN=e),class:"login-form__input",type:"text",required:"",placeholder:"사업자 등록번호"},null,512),[[r.nr,c.farm_member_info.f_BRN]]),d,(0,o.Wm)(_,{onSearchAddressRes:f.searchAddressResult},null,8,["onSearchAddressRes"]),u,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>c.farm_member_info.f_num=e),class:"login-form__input",type:"text",required:"",placeholder:"농가 전화번호"},null,512),[[r.nr,c.farm_member_info.f_num]]),(0,o._)("input",{class:"login-form__btn",type:"submit",onClick:t[4]||(t[4]=e=>f.submitBizSignUp()),value:"다음"})],32)])}var c=n(6265),f=n.n(c),_=n(2635),p={name:"submitBizForm",components:{SearchAddress:_.Z},data(){return{farm_member_info:{f_name:this.$store.state.user.name,f_email:this.$store.state.user.email,f_passwd:this.$store.state.user.passwd,f_phonenum:this.$store.state.user.phonenum,f_farm_name:null,f_representative:null,f_BRN:null,f_zipcode:null,f_location:null,f_num:null}}},methods:{searchAddressResult(e){console.log("event: ",e),this.farm_member_info.f_zipcode=e.zipcode,this.farm_member_info.f_location=e.address,this.addressCheck=!0,alert("주소 입력이 완료되었습니다!")},submitBizSignUp(){console.log(this.farm_member_info),f().post("/api/signupFarmMember",this.farm_member_info).then((e=>{console.log(e),0==e.data?alert("회원가입 실패.."):(alert("회원가입 성공.."),console.log("main으로!!"),console.log(e.data.token),this.$store.commit("TOKEN_SAVE",e.data.token),this.$router.push({name:"main",params:this.token}))})).catch((e=>{console.log(e)}))}}},h=n(89);const b=(0,h.Z)(p,[["render",m]]);var g=b},8521:function(e,t,n){n.d(t,{D:function(){return f}});n(6699),n(8099);var o=n(1138),r=n(7139),s=n(3396),l=n(1107);const a=["sm","md","lg","xl","xxl"],i=(()=>a.reduce(((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e)),{}))(),d=(()=>a.reduce(((e,t)=>(e["offset"+(0,r.kC)(t)]={type:[String,Number],default:null},e)),{}))(),u=(()=>a.reduce(((e,t)=>(e["order"+(0,r.kC)(t)]={type:[String,Number],default:null},e)),{}))(),m={col:Object.keys(i),offset:Object.keys(d),order:Object.keys(u)};function c(e,t,n){let o=e;if(null!=n&&!1!==n){if(t){const n=t.replace(e,"");o+=`-${n}`}return"col"===e&&(o="v-"+o),"col"!==e||""!==n&&!0!==n?(o+=`-${n}`,o.toLowerCase()):o.toLowerCase()}}const f=(0,l.a)({name:"VCol",props:{cols:{type:[Boolean,String,Number],default:!1},...i,offset:{type:[String,Number],default:null},...d,order:{type:[String,Number],default:null},...u,alignSelf:{type:String,default:null,validator:e=>["auto","start","end","center","baseline","stretch"].includes(e)},...(0,o.Q)()},setup(e,t){let{slots:n}=t;const o=(0,s.Fl)((()=>{const t=[];let n;for(n in m)m[n].forEach((o=>{const r=e[o],s=c(n,o,r);s&&t.push(s)}));const o=t.some((e=>e.startsWith("v-col-")));return t.push({"v-col":!o||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),t}));return()=>{var t;return(0,s.h)(e.tag,{class:o.value},null==(t=n.default)?void 0:t.call(n))}}})}}]);
//# sourceMappingURL=19.1cdc57b8.js.map