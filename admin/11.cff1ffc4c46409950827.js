(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"Gw/Z":function(e,t,s){"use strict";s.r(t),s.d(t,"MessagesModule",function(){return _});var o=s("vTDv"),n=s("tyNb"),i=s("ofXK"),r=s("3Pt+"),a=s("XNiG"),c=s("1G5W"),l=s("fXoL"),d=s("HDdC"),m=s("D0XW"),h=s("Y7HM");function g(e){const{subscriber:t,counter:s,period:o}=e;t.next(s),this.schedule({subscriber:t,counter:s+1,period:o},o)}var b=s("JX91"),u=s("eIep"),p=s("EWl0"),f=s("tk/3"),v=s("ytdW"),D=s("I/3d");let y=(()=>{class e{constructor(e,t,s,o){this.datePipe=e,this.httpClient=t,this.tokenService=s,this.firestore=o}sendMessage(e,t,s){const o={msg:{message:t},sender:s,sentDate:this.datePipe.transform(new Date,"yyyy-MM-dd HH:mm:ss","TZD").toString()};this.firestore.collection("chat_rooms").doc(e).collection("messages").add(o)}getMessagesObservable(e){if(e)return function(e=0,t=m.a){return(!Object(h.a)(e)||e<0)&&(e=0),t&&"function"==typeof t.schedule||(t=m.a),new d.a(s=>(s.add(t.schedule(g,e,{subscriber:s,counter:0,period:e})),s))}(1e5).pipe(Object(b.a)(0),Object(u.a)(()=>this.firestore.collection("chat_rooms").doc(e).collection("messages").get()))}sendNotificationToReportFromAdmin(e){return this.httpClient.post(p.a.notificationToReportAPI,{roomID:e},this.tokenService.httpOptions())}sendNotificationToCaptainFromAdmin(e){return this.httpClient.post(p.a.notificationtoCaptainAPI,{roomID:e},this.tokenService.httpOptions())}notificationToOwnerFromAdmin(e){return this.httpClient.post(p.a.notificationToOwnerAPI,{roomID:e},this.tokenService.httpOptions())}}return e.\u0275fac=function(t){return new(t||e)(l.cc(i.e),l.cc(f.a),l.cc(v.a),l.cc(D.a))},e.\u0275prov=l.Pb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var C=s("W9AH"),w=s("ijy7"),S=s("5eHb"),I=s("sYmb");function M(e,t){if(1&e&&(l.Wb(0),l.Yb(1,"p",12),l.Dc(2),l.Ub(3,"br"),l.Yb(4,"span",13),l.Dc(5),l.ic(6,"date"),l.Xb(),l.Xb(),l.Vb()),2&e){const e=l.hc().$implicit;l.Gb(2),l.Fc(" ",null!=e&&null!=e.msg&&e.msg.message?null==e||null==e.msg?null:e.msg.message:null==e?null:e.msg,""),l.Gb(3),l.Ec(l.kc(6,2,null!=e&&null!=e.sentDate&&e.sentDate.seconds?null==e||null==e.sentDate?null:e.sentDate.seconds:null==e?null:e.sentDate,"h:mm a"))}}function O(e,t){if(1&e&&(l.Wb(0),l.Yb(1,"p",14),l.Dc(2),l.Ub(3,"br"),l.Yb(4,"span",13),l.Dc(5),l.ic(6,"date"),l.Xb(),l.Xb(),l.Vb()),2&e){const e=l.hc().$implicit;l.Gb(2),l.Fc(" ",null!=e&&null!=e.msg&&e.msg.message?null==e||null==e.msg?null:e.msg.message:null==e?null:e.msg,""),l.Gb(3),l.Ec(l.kc(6,2,null!=e&&null!=e.sentDate&&e.sentDate.seconds?null==e||null==e.sentDate?null:e.sentDate.seconds:null==e?null:e.sentDate,"h:mm a"))}}function P(e,t){if(1&e&&(l.Wb(0),l.Cc(1,M,7,5,"ng-container",11),l.Cc(2,O,7,5,"ng-container",11),l.Vb()),2&e){const e=t.$implicit,s=l.hc();l.Gb(1),l.oc("ngIf",e.sender==s.secondSender),l.Gb(1),l.oc("ngIf",e.sender==s.firstSender)}}let k=(()=>{class e{constructor(e,t,s,o,n,i,r,c){this.messageService=e,this.captainService=t,this.orderService=s,this.formBuilder=o,this.toaster=n,this.render=i,this.document=r,this.activatedRoute=c,this.destroy$=new a.a}ngOnInit(){this.isReportChat=!1,this.isCaptainChat=!1,this.checkMessageBodyScrollHeight(),this.messageForm=this.formBuilder.group({message:["",r.q.required],roomId:[""]}),this.activatedRoute.params.subscribe(e=>{"owner"==e.client&&(this.isOwnerChat=!0,this.roomID=e.uuid,this.getMessages(e.uuid)),"captain"==e.client&&this.captainService.captainDetails(Number(e.id)).subscribe(e=>{console.log("Captain Room ID",e.Data.uuid),e.Data.uuid&&(this.isCaptainChat=!0,this.roomID=e.Data.uuid,this.getMessages(e.Data.uuid))}),"order"==e.client&&this.orderService.orderDetails(Number(e.id)).subscribe(e=>{e.Data.uuid&&(console.log("Order Room ID : ",e.Data.uuid),this.roomID=e.Data.uuid,this.getMessages(e.Data.uuid))}),"report"==e.client&&(console.log("Report Room ID : ",e.uuid),this.isReportChat=!0,this.roomID=e.uuid,this.getMessages(e.uuid))})}getMessages(e){e&&(this.messageForm.get("roomId").setValue(e),this.messageService.getMessagesObservable(e).pipe(Object(c.a)(this.destroy$)).subscribe(e=>{if(this.messages=[],e.docs.forEach((e,t)=>{this.messages.push(e.data())}),this.messages.sort((e,t)=>e.sentDate.localeCompare(t.sentDate)),this.messages.length>0){this.secondSender="admin";for(let e=0;e<this.messages.length;e++)null==this.firstSender&&this.messages[e].sender!=this.secondSender&&(this.firstSender=this.messages[e].sender)}},e=>console.log("Error ",e),()=>{if(this.messages.sort((e,t)=>e.sentDate.localeCompare(t.sentDate)),console.log("after sort Messages : ",this.messages),this.messages.length>0){this.secondSender="admin";for(let e=0;e<this.messages.length-1;e++)null==this.firstSender&&this.messages[e].sender!=this.secondSender&&(this.firstSender=this.messages[e].sender);console.log("firstSender : ",this.firstSender),console.log("secondSender : ",this.secondSender)}}))}checkMessageBodyScrollHeight(){this.bodyScrollHeightInterval=setInterval(()=>{const e=this.document.querySelector(".messages-body");e.scrollHeight>40&&(e.scrollTop=e.scrollHeight,clearInterval(this.bodyScrollHeightInterval))},100)}checkMessageDirectionForRtl(){{const e=setInterval(()=>{const t=this.document.querySelector(".messages-body");t.scrollHeight>40&&(t.scrollTop=t.scrollHeight,clearInterval(e))},100)}}ngOnDestroy(){clearInterval(this.bodyScrollHeightInterval),this.isReportChat=!1,this.isCaptainChat=!1,this.isOwnerChat=!1,this.destroy$.next(),this.destroy$.complete()}onSubmit(){if(this.messageForm.valid){console.log("roomID : ",this.roomID);const e=this.messageForm.getRawValue();this.isReportChat&&this.messageService.sendNotificationToReportFromAdmin(this.roomID).subscribe(e=>console.log("send notification : ",e)),this.isCaptainChat&&this.messageService.sendNotificationToCaptainFromAdmin(this.roomID).subscribe(e=>console.log("send notification : ",e)),this.isOwnerChat&&this.messageService.notificationToOwnerFromAdmin(this.roomID).subscribe(e=>console.log("send notification : ",e)),console.log(e),e.roomId?this.messageService.sendMessage(e.roomId,e.message,"admin"):this.toaster.error("Error, Please Try Later"),this.messageForm.reset(),this.getMessages(e.roomId)}else this.toaster.error("Error : Can't Send An Empty Message")}}return e.\u0275fac=function(t){return new(t||e)(l.Tb(y),l.Tb(C.a),l.Tb(w.a),l.Tb(r.b),l.Tb(S.b),l.Tb(l.K),l.Tb(i.d),l.Tb(n.a))},e.\u0275cmp=l.Nb({type:e,selectors:[["app-chat"]],decls:17,vars:12,consts:[[1,"messages"],[1,"container"],[1,"bg-light-blue","text-white","font-weight-bold","p-3"],[1,"col-12","col-md-8","mx-auto","border","mt-4"],[1,"messages-body","my-3","pt-3","p-2"],[4,"ngFor","ngForOf"],[1,"",3,"formGroup","ngSubmit"],[1,"input-group","mb-3"],["type","text","name","message","formControlName","message","aria-label","Type here","aria-describedby","basic-addon2",1,"form-control",3,"placeholder"],[1,"input-group-append"],["type","submit",1,"btn","btn-primary",3,"disabled"],[4,"ngIf"],[1,"col-12","col-sm-11","col-md-10","recieved-message","text-white","py-1","px-2","rounded","bg-grey-blue","ml-custom-auto"],[1,"message-time"],[1,"col-12","col-sm-11","col-md-10","recieved-message","text-white","py-1","px-2","rounded","bg-light-blue","mr-custom-auto"]],template:function(e,t){1&e&&(l.Yb(0,"div",0),l.Yb(1,"div",1),l.Yb(2,"h1",2),l.Dc(3),l.ic(4,"translate"),l.Xb(),l.Yb(5,"div",3),l.Yb(6,"div",4),l.Cc(7,P,3,2,"ng-container",5),l.Xb(),l.Ub(8,"div"),l.Yb(9,"form",6),l.fc("ngSubmit",function(){return t.onSubmit()}),l.Yb(10,"div",7),l.Ub(11,"input",8),l.ic(12,"translate"),l.Yb(13,"div",9),l.Yb(14,"button",10),l.Dc(15),l.ic(16,"translate"),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Xb()),2&e&&(l.Gb(3),l.Ec(l.jc(4,6,"chat-room")),l.Gb(4),l.oc("ngForOf",t.messages),l.Gb(2),l.oc("formGroup",t.messageForm),l.Gb(2),l.pc("placeholder",l.jc(12,8,"type-here")),l.Gb(3),l.oc("disabled",!t.messageForm.valid),l.Gb(1),l.Ec(l.jc(16,10,"send")))},directives:[i.l,r.s,r.i,r.f,r.a,r.h,r.d,i.m],pipes:[I.c,i.e],styles:["@media (min-width:992px) and (max-width:1199px){.messages[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.2rem}}@media (min-width:768px) and (max-width:991px){.messages[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2rem}}@media (min-width:576px) and (max-width:767px){.messages[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2rem;background:none!important;color:#21a5b8!important}}@media (max-width:575px){.messages[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.8rem;background:none!important;color:#21a5b8!important}}.messages-body[_ngcontent-%COMP%]{height:70vh;max-height:70vh;overflow-y:scroll;direction:ltr}.messages-body[_ngcontent-%COMP%]::-webkit-scrollbar{width:4px}.messages-body[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#f1f1f1}.messages-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#ccc}.messages-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#aaa}.messages-body[_ngcontent-%COMP%]   .recieved-message[_ngcontent-%COMP%]{width:-webkit-max-content;width:max-content}.messages-body[_ngcontent-%COMP%]   .recieved-message[_ngcontent-%COMP%]   .message-time[_ngcontent-%COMP%]{font-size:.7rem;font-weight:100}"]}),e})();const x=[{path:"view/:client/:id",component:k},{path:"view/:client/:id/:uuid",component:k}];let T=(()=>{class e{}return e.\u0275mod=l.Rb({type:e}),e.\u0275inj=l.Qb({factory:function(t){return new(t||e)},imports:[[n.e.forChild(x)],n.e]}),e})(),_=(()=>{class e{}return e.\u0275mod=l.Rb({type:e}),e.\u0275inj=l.Qb({factory:function(t){return new(t||e)},providers:[y,i.e],imports:[[o.a,T]]}),e})()}}]);