"use strict";(self["webpackChunkrealvue"]=self["webpackChunkrealvue"]||[]).push([[222],{7222:function(e,l,t){t.r(l),t.d(l,{default:function(){return V}});var a=t(3396),o=t(9242),n=t(7139),s=t(6422),r=t(1991);const i=e=>((0,a.dD)("data-v-7ffd365c"),e=e(),(0,a.Cn)(),e),u=i((()=>(0,a._)("header",{class:"welcome-header1"},[(0,a._)("h1",{class:"welcome-header__title1"},"따 과 농 가"),(0,a._)("p",{class:"welcome-header__text1"},"우리들의 농가 따과농가")],-1))),d={class:"login_keep_wrap",id:"login_keep_wrap"},c={class:"keep_check"},m=i((()=>(0,a._)("label",{id:"consumer-text",for:"consumer"},"소비자",-1))),h=i((()=>(0,a._)("br",null,null,-1))),p=i((()=>(0,a._)("label",{class:"farm-text",for:"farm"},"농가",-1))),f=i((()=>(0,a._)("br",null,null,-1))),_={class:"login-buttons"},g={class:"login-button",type:"submit"};function v(e,l,t,i,v,w){const b=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",null,[u,(0,a.Wm)(s.O,{ref:"form",modelValue:v.valid,"onUpdate:modelValue":l[6]||(l[6]=e=>v.valid=e),"lazy-validation":"",onSubmit:(0,o.iM)(e.submitForm,["prevent"])},{default:(0,a.w5)((()=>[(0,a.Wm)(r.h,{modelValue:v.email,"onUpdate:modelValue":l[0]||(l[0]=e=>v.email=e),rules:v.emailRules,label:"E-mail",required:""},null,8,["modelValue","rules"]),(0,a.Wm)(r.h,{modelValue:v.password,"onUpdate:modelValue":l[1]||(l[1]=e=>v.password=e),"append-icon":v.show1?"mdi-eye":"mdi-eye-off",rules:[v.rules.required,v.rules.min],type:v.show1?"text":"password",name:"input-10-1",label:"Password",hint:"비밀번호는 최소 6글자 입니다",counter:"","onClick:append":l[2]||(l[2]=e=>v.show1=!v.show1)},null,8,["modelValue","append-icon","rules","type"]),(0,a._)("div",d,[(0,a._)("div",c,[(0,a._)("div",null,[(0,a.wy)((0,a._)("input",{type:"radio",id:"consumer",value:"consumer","onUpdate:modelValue":l[3]||(l[3]=e=>v.checkUser=e)},null,512),[[o.G2,v.checkUser]]),m]),h,(0,a._)("div",null,[(0,a.wy)((0,a._)("input",{type:"radio",id:"farm",value:"farm","onUpdate:modelValue":l[4]||(l[4]=e=>v.checkUser=e)},null,512),[[o.G2,v.checkUser]]),p]),f])]),(0,a._)("button",{class:"login-form__btn",type:"submit",onClick:l[5]||(l[5]=e=>w.login())},"로그인"),(0,a._)("div",_,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(v.loginButton.url.length,((e,l)=>((0,a.wg)(),(0,a.j4)(b,{key:l,to:v.loginButton.url[l]},{default:(0,a.w5)((()=>[(0,a._)("button",g,(0,n.zw)(v.loginButton.title[l]),1)])),_:2},1032,["to"])))),128))])])),_:1},8,["modelValue","onSubmit"])])}var w=t(6265),b=t.n(w),k={data(){return{valid:!1,checkUser:"consumer",email:null,password:null,token:null,show1:!1,show2:!0,emailRules:[e=>!!e||"E-mail을 입력해주세요.",e=>/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/.test(e)||"유효하지 않은 형식의 E-mail 입니다."],rules:{required:e=>!!e||"비밀번호를 입력해주세요.",min:e=>e.length>=6||"비밀번호는 최소 6글자 입니다",emailMatch:()=>"The email and password you entered don't match"},loginButton:{title:["회원가입","아이디찾기","비밀번호 찾기"],url:["/clause","/login/searchId","/login/searchPw"]}}},methods:{login(){b().post("/api/login",{email:this.email,checkUser:this.checkUser,password:this.password}).then((e=>{if(""==e.data)alert("아이디 또는 비밀번호가 틀렸습니다!"),console.log("....");else if(0==e.data.consumer_id)alert("중복 로그인입니다! 다시 한번 로그인 해주세요!"),console.log("중복 로그인!");else{let l=Date.now()+864e5;localStorage.setItem("expire",JSON.stringify(l)),console.log(e.data),localStorage.setItem("user",JSON.stringify(e.data)),this.$store.commit("TOKEN_SAVE",e.data.token),e.data.consumer_id?(localStorage.setItem("checkUser","consumer"),localStorage.setItem("id",e.data.consumer_id)):(localStorage.setItem("checkUser","farm"),localStorage.setItem("id",e.data.farm_id)),console.log(this.$store.state.config.headers.TOKEN),this.$router.push({name:"main"})}})).catch((e=>{console.log(e)}))}}},y=t(89);const U=(0,y.Z)(k,[["render",v],["__scopeId","data-v-7ffd365c"]]);var V=U},6422:function(e,l,t){t.d(l,{O:function(){return u}});var a=t(3396),o=t(4357),n=t(4870),s=t(1107),r=t(9888),i=t(6199);const u=(0,s.a)({name:"VForm",props:{...(0,o.vC)()},emits:{"update:modelValue":e=>!0,submit:e=>!0},setup(e,l){let{slots:t,emit:s}=l;const u=(0,o.Np)(e),d=(0,n.iH)();function c(e){e.preventDefault(),u.reset()}function m(e){const l=e,t=u.validate();l.then=t.then.bind(t),l.catch=t.catch.bind(t),l.finally=t.finally.bind(t),s("submit",l),l.defaultPrevented||t.then((e=>{let{valid:l}=e;var t;l&&(null==(t=d.value)||t.submit())})),l.preventDefault()}return(0,r.L)((()=>{var e;return(0,a.Wm)("form",{ref:d,class:"v-form",novalidate:!0,onReset:c,onSubmit:m},[null==(e=t.default)?void 0:e.call(t,u)])})),(0,i.Z)(u,d)}})}}]);
//# sourceMappingURL=222.d19c40f3.js.map