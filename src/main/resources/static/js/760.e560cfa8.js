"use strict";(self["webpackChunkrealvue"]=self["webpackChunkrealvue"]||[]).push([[760],{1760:function(e,n,r){r.r(n),r.d(n,{default:function(){return h}});var l=r(3396),a=r(9242);const o=(0,l._)("header",{class:"welcome-header"},[(0,l._)("h1",{class:"welcome-header__title"},"정 보 입 력")],-1),t=(0,l._)("label",{id:"login-form-label"},"농가명",-1),m=(0,l._)("label",{id:"login-form-label"},"대표자",-1),i=(0,l._)("label",{id:"login-form-label"},"주민등록번호",-1),_=(0,l._)("label",{id:"login-form-label"},"사업장 소재지",-1),s=(0,l._)("label",{id:"login-form-label"},"농가 전화번호",-1);function f(e,n,r,f,u,p){return(0,l.wg)(),(0,l.iD)("div",null,[o,(0,l._)("form",{onSubmit:n[6]||(n[6]=(0,a.iM)(((...n)=>e.submitBizForm&&e.submitBizForm(...n)),["prevent"])),class:"login-form"},[t,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":n[0]||(n[0]=e=>u.farm_member_info.f_farm_name=e),class:"information-form__input",type:"text",required:"",placeholder:"농가명"},null,512),[[a.nr,u.farm_member_info.f_farm_name]]),m,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":n[1]||(n[1]=e=>u.farm_member_info.f_representative=e),class:"information-form__input",type:"text",required:"",placeholder:"대표자"},null,512),[[a.nr,u.farm_member_info.f_representative]]),i,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":n[2]||(n[2]=e=>u.farm_member_info.f_RRN=e),class:"login-form__input",type:"text",required:"",placeholder:"주민등록번호"},null,512),[[a.nr,u.farm_member_info.f_RRN]]),_,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":n[3]||(n[3]=e=>u.farm_member_info.f_location=e),class:"login-form__input",type:"text",required:"",placeholder:"사업장 소재지"},null,512),[[a.nr,u.farm_member_info.f_location]]),s,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":n[4]||(n[4]=e=>u.farm_member_info.f_num=e),class:"login-form__input",type:"text",required:"",placeholder:"농가 전화번호"},null,512),[[a.nr,u.farm_member_info.f_num]]),(0,l._)("input",{class:"login-form__btn",type:"submit",onClick:n[5]||(n[5]=e=>p.submitFuserSignUp()),value:"다음"})],32)])}var u=r(6265),p=r.n(u),d={name:"submitBizForm",data(){return{farm_member_info:{f_name:this.$store.state.user.name,f_email:this.$store.state.user.email,f_passwd:this.$store.state.user.passwd,f_phonenum:this.$store.state.user.phonenum,f_farm_name:null,f_representative:null,f_RRN:null,f_location:null,f_num:null}}},methods:{submitFuserSignUp(){console.log(this.farm_member_info),p().post("/api/signupFarmMember",this.farm_member_info).then((e=>{console.log(e),0==e.data?alert("회원가입 실패.."):(alert("회원가입 성공.."),console.log("main으로!!"),console.log(e.data.token),this.$store.commit("TOKEN_SAVE",e.data.token),this.$router.push({name:"main",params:this.token}))})).catch((e=>{console.log(e)}))}}},c=r(89);const b=(0,c.Z)(d,[["render",f]]);var h=b}}]);
//# sourceMappingURL=760.e560cfa8.js.map