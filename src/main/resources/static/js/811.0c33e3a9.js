"use strict";(self["webpackChunkrealvue"]=self["webpackChunkrealvue"]||[]).push([[811],{3811:function(t,e,n){n.r(e),n.d(e,{default:function(){return y}});var o=n(3396),s=n(9242),i=n(7139);const c={id:"app"},l=(0,o.Uk)(" title: "),d=(0,o.Uk)(" 내용: ");function h(t,e,n,h,p,r){return(0,o.wg)(),(0,o.iD)("div",c,[l,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>p.title=t),type:"text"},null,512),[[s.nr,p.title]]),d,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>p.content=t),type:"text",onKeyup:e[2]||(e[2]=(...t)=>r.sendcontent&&r.sendcontent(...t))},null,544),[[s.nr,p.content]]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(p.recvList,((t,e)=>((0,o.wg)(),(0,o.iD)("div",{key:e},[(0,o._)("h3",null,"title: "+(0,i.zw)(t.title),1),(0,o._)("h3",null,"내용: "+(0,i.zw)(t.content),1)])))),128))])}var p=n(3266),r=n.n(p),u=n(4029),a=n.n(u),m={name:"App",data(){return{title:"",content:"",recvList:[]}},created(){this.connect()},methods:{sendcontent(t){console.log("keyup: "+t.keyCode),13===t.keyCode&&""!==this.title&&""!==this.content&&(this.send(),this.send2(),this.content="")},send(){if(console.log("Send content:"+this.content),console.log(this.stompClient),console.log(this.stompClient.connected),this.stompClient&&this.stompClient.connected){const t={title:this.title,content:this.content};this.stompClient.send("/receive",JSON.stringify(t),{})}},send2(){if(console.log("Send content2222222:"+this.content),this.stompClient&&this.stompClient.connected){const t={title:this.title,content:this.content};this.stompClient.send("/receive2",JSON.stringify(t),{})}},connect(){const t="/socket";let e=new(a())(t);this.stompClient=r().over(e),console.log(`소켓 연결을 시도합니다. 서버 주소: ${t}`),this.stompClient.connect({},(t=>{this.connected=!0,console.log("소켓 연결 성공",t),this.stompClient.subscribe("/send",(t=>{console.log("구독으로 받은 메시지 입니다.",t.body),this.recvList.push(JSON.parse(t.body))})),this.stompClient.subscribe("/send2",(t=>{console.log("222222222222",t.body)}))}),(t=>{console.log("소켓 연결 실패",t),this.connected=!1}))}}},C=n(89);const g=(0,C.Z)(m,[["render",h]]);var y=g}}]);
//# sourceMappingURL=811.0c33e3a9.js.map