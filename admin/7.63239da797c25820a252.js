(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"3wrk":function(t,e,n){"use strict";n.r(e),n.d(e,"ContractsModule",function(){return K});var a=n("vTDv"),c=n("tyNb"),i=n("ofXK"),r=n("XNiG"),o=n("1G5W"),s=n("fXoL"),l=n("z6cu"),b=n("JIr8"),d=n("EWl0"),p=n("tk/3"),g=n("ytdW");let m=(()=>{class t{constructor(t,e){this.httpClient=t,this.tokenService=e}static errorHandle(t){return Object(l.a)(t||"Server Error")}allUsers(e){return this.httpClient.get(`${d.a.allUsersAPI}/${e}`,this.tokenService.httpOptions()).pipe(Object(b.a)(t.errorHandle))}ownerDetails(e){return this.httpClient.get(`${d.a.ownerDetailsAPI}/${e}`,this.tokenService.httpOptions()).pipe(Object(b.a)(t.errorHandle))}allPendingContracts(){return this.httpClient.get(d.a.pendingContractsAPI,this.tokenService.httpOptions()).pipe(Object(b.a)(t.errorHandle))}contractDetails(e){return this.httpClient.get(`${d.a.contractDetailsAPI}/${e}`,this.tokenService.httpOptions()).pipe(Object(b.a)(t.errorHandle))}contractAccept(e){return this.httpClient.put(d.a.contractAcceptAPI,JSON.stringify(e),this.tokenService.httpOptions()).pipe(Object(b.a)(t.errorHandle))}payment(e){return this.httpClient.post(d.a.paymentAPI,JSON.stringify(e),this.tokenService.httpOptions()).pipe(Object(b.a)(t.errorHandle))}paymentsOfOwner(e){return this.httpClient.get(`${d.a.paymentOfOwnerAPI}/${e}`,this.tokenService.httpOptions()).pipe(Object(b.a)(t.errorHandle))}updateNewMessageStatus(t){return this.httpClient.put(d.a.ownerUpdateMsgStatusAPI,{roomID:t},this.tokenService.httpOptions())}}return t.\u0275fac=function(e){return new(e||t)(s.cc(p.a),s.cc(g.a))},t.\u0275prov=s.Pb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var u=n("sYmb");function h(t,e){if(1&t){const t=s.Zb();s.Yb(0,"button",13),s.fc("click",function(){s.wc(t);const e=s.hc(2);return e.acceptContract("active",e.contractDetails.id)}),s.Dc(1),s.ic(2,"translate"),s.Xb()}if(2&t){const t=s.hc(2);s.oc("disabled",!t.active),s.Gb(1),s.Fc(" ",s.jc(2,2,"yes")," ")}}function w(t,e){if(1&t){const t=s.Zb();s.Yb(0,"button",14),s.fc("click",function(){s.wc(t);const e=s.hc(2);return e.acceptContract("inactive",e.contractDetails.id)}),s.Dc(1),s.ic(2,"translate"),s.Xb()}if(2&t){const t=s.hc(2);s.oc("disabled",!t.active),s.Gb(1),s.Fc(" ",s.jc(2,2,"no")," ")}}function f(t,e){if(1&t&&(s.Yb(0,"div",2),s.Yb(1,"div",3),s.Yb(2,"h1",4),s.Dc(3),s.ic(4,"translate"),s.Xb(),s.Yb(5,"div",5),s.Yb(6,"div",6),s.Yb(7,"p",7),s.Dc(8),s.ic(9,"translate"),s.Yb(10,"span"),s.Dc(11),s.Xb(),s.Xb(),s.Xb(),s.Yb(12,"div",8),s.Yb(13,"div",9),s.Yb(14,"span"),s.Dc(15),s.ic(16,"translate"),s.Xb(),s.Cc(17,h,3,4,"button",10),s.Cc(18,w,3,4,"button",11),s.Xb(),s.Xb(),s.Xb(),s.Yb(19,"p",12),s.Dc(20),s.ic(21,"translate"),s.Yb(22,"span"),s.Dc(23),s.Xb(),s.Xb(),s.Yb(24,"p",12),s.Dc(25),s.ic(26,"translate"),s.Yb(27,"span"),s.Dc(28),s.Xb(),s.Xb(),s.Yb(29,"p",12),s.Dc(30),s.ic(31,"translate"),s.Yb(32,"span"),s.Dc(33),s.Xb(),s.Xb(),s.Yb(34,"p",12),s.Dc(35),s.ic(36,"translate"),s.Yb(37,"span"),s.Dc(38),s.ic(39,"date"),s.Xb(),s.Xb(),s.Yb(40,"p",12),s.Dc(41),s.ic(42,"translate"),s.Yb(43,"span"),s.Dc(44),s.ic(45,"date"),s.Xb(),s.Xb(),s.Xb(),s.Xb()),2&t){const t=s.hc();s.Gb(3),s.Ec(s.jc(4,16,"contract-details")),s.Gb(5),s.Fc("",s.jc(9,18,"username")," : "),s.Gb(3),s.Ec(t.contractDetails.userName),s.Gb(4),s.Fc("",s.jc(16,20,"accept"),":"),s.Gb(2),s.oc("ngIf","inactive"==t.contractDetails.status),s.Gb(1),s.oc("ngIf","active"==t.contractDetails.status),s.Gb(2),s.Fc("",s.jc(21,22,"status")," : "),s.Gb(3),s.Ec(null==t.contractDetails?null:t.contractDetails.status),s.Gb(2),s.Fc("",s.jc(26,24,"package-name")," : "),s.Gb(3),s.Ec(null==t.contractDetails?null:t.contractDetails.packageName),s.Gb(2),s.Fc("",s.jc(31,26,"package-note")," : "),s.Gb(3),s.Ec(null==t.contractDetails?null:t.contractDetails.packageNote),s.Gb(2),s.Fc("",s.jc(36,28,"start-date")," : "),s.Gb(3),s.Ec(null!=t.contractDetails&&t.contractDetails.startDate?s.kc(39,30,1e3*(null==t.contractDetails?null:t.contractDetails.startDate.timestamp),"yyyy-MM-dd"):"-"),s.Gb(3),s.Fc("",s.jc(42,33,"end-date")," : "),s.Gb(3),s.Ec(null!=t.contractDetails&&t.contractDetails.endDate?s.kc(45,35,1e3*(null==t.contractDetails?null:t.contractDetails.endDate.timestamp),"yyyy-MM-dd"):"-")}}function C(t,e){1&t&&(s.Yb(0,"div"),s.Yb(1,"div",15),s.Ub(2,"div"),s.Ub(3,"div"),s.Ub(4,"div"),s.Ub(5,"div"),s.Xb(),s.Xb())}let P=(()=>{class t{constructor(t,e,n){this.contractService=t,this.datePipe=e,this.activateRoute=n,this.destroy$=new r.a,this.active=!0}ngOnInit(){this.getContractDetails()}getContractDetails(){this.contractService.contractDetails(Number(this.activateRoute.snapshot.paramMap.get("id"))).pipe(Object(o.a)(this.destroy$)).subscribe(t=>{t&&(this.contractDetails=t.Data[0])},t=>console.log("Error : ",t))}acceptContract(t,e){this.active=!1;const n=new Date(1e3*this.contractDetails.startDate.timestamp),a=n.setMonth(n.getMonth()+1),c={id:e,status:t,endDate:this.datePipe.transform(a,"yyyy-MM-dd")};this.contractService.contractAccept(c).subscribe(t=>{this.active=!0,console.log(t),this.getContractDetails()},t=>{console.log(t),this.active=!0})}}return t.\u0275fac=function(e){return new(e||t)(s.Tb(m),s.Tb(i.e),s.Tb(c.a))},t.\u0275cmp=s.Nb({type:t,selectors:[["app-contract-details"]],features:[s.Fb([i.e])],decls:2,vars:2,consts:[["class","contract-details mb-5",4,"ngIf"],[4,"ngIf"],[1,"contract-details","mb-5"],[1,"container-fluid"],[1,"text-light-blue","mt-3","mb-2","font-weight-bold"],[1,"row","w-100","mx-auto","mb-1"],[1,"col-12","col-sm-8","col-md-7","col-lg-8","align-self-center","pl-0","pl-sm-3"],[1,"mb-0"],[1,"col-12","col-sm-4","col-md-5","col-lg-4","align-self-center","text-left","text-sm-center","pl-0","pl-sm-3","my-1","my-sm-0"],[1,"order-chat","mx-auto","p-1"],["class","ml-sm-2 ml-md-4 btn bg-light-blue text-white py-0 font-weight-bold",3,"disabled","click",4,"ngIf"],["class","ml-sm-2 ml-md-4 btn bg-danger text-white py-0 font-weight-bold",3,"disabled","click",4,"ngIf"],[1,"ml-sm-2","ml-md-4","mb-1"],[1,"ml-sm-2","ml-md-4","btn","bg-light-blue","text-white","py-0","font-weight-bold",3,"disabled","click"],[1,"ml-sm-2","ml-md-4","btn","bg-danger","text-white","py-0","font-weight-bold",3,"disabled","click"],[1,"lds-ring"]],template:function(t,e){1&t&&(s.Cc(0,f,46,38,"div",0),s.Cc(1,C,6,0,"div",1)),2&t&&(s.oc("ngIf",e.contractDetails),s.Gb(1),s.oc("ngIf",null==e.contractDetails))},directives:[i.m],pipes:[u.c,i.e],styles:["@media (min-width:992px) and (max-width:1199px){.contract-details[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.2rem}}@media (max-width:991px){.contract-details[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2rem}}.contract-details[_ngcontent-%COMP%]   .order-chat[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:-webkit-max-content;width:max-content}"]}),t})();var v=n("5eHb"),x=n("oOf3");function O(t,e){if(1&t&&(s.Yb(0,"tr"),s.Yb(1,"th",14),s.Dc(2),s.Xb(),s.Yb(3,"th",14),s.Dc(4),s.Xb(),s.Yb(5,"th",14),s.Dc(6),s.Xb(),s.Yb(7,"th",15),s.Dc(8),s.ic(9,"date"),s.Xb(),s.Yb(10,"th",16),s.Dc(11),s.Xb(),s.Yb(12,"th",14),s.Dc(13),s.Xb(),s.Yb(14,"th",17),s.Yb(15,"a",18),s.Dc(16),s.ic(17,"translate"),s.Xb(),s.Xb(),s.Xb()),2&t){const t=e.$implicit;s.Gb(2),s.Ec(t.id),s.Gb(2),s.Ec(t.userName?t.userName:"-"),s.Gb(1),s.Lb("text-danger","inactive"==t.status),s.Gb(1),s.Ec(t.status?t.status:"-"),s.Gb(2),s.Ec(t.startDate?s.kc(9,10,1e3*t.startDate.timestamp,"yyyy-MM-dd"):"-"),s.Gb(3),s.Ec(t.packageNote?t.packageNote:"-"),s.Gb(2),s.Ec(t.packageName?t.packageName:"-"),s.Gb(2),s.qc("routerLink","/contracts/view/",t.id,""),s.Gb(1),s.Ec(s.jc(17,13,"view"))}}function D(t,e){if(1&t){const t=s.Zb();s.Yb(0,"div"),s.Yb(1,"div",4),s.Yb(2,"div",5),s.Ub(3,"div",6),s.Yb(4,"div",7),s.Yb(5,"table",8),s.Yb(6,"thead"),s.Yb(7,"tr",9),s.Yb(8,"th",10),s.Dc(9,"#ID"),s.Xb(),s.Yb(10,"th",10),s.Dc(11),s.ic(12,"translate"),s.Xb(),s.Yb(13,"th",10),s.Dc(14),s.ic(15,"translate"),s.Xb(),s.Yb(16,"th",10),s.Dc(17),s.ic(18,"translate"),s.Xb(),s.Yb(19,"th",10),s.Dc(20),s.ic(21,"translate"),s.Xb(),s.Yb(22,"th",10),s.Dc(23),s.ic(24,"translate"),s.Xb(),s.Yb(25,"th",10),s.Dc(26),s.ic(27,"translate"),s.Xb(),s.Xb(),s.Xb(),s.Yb(28,"tbody"),s.Cc(29,O,18,15,"tr",11),s.ic(30,"paginate"),s.Xb(),s.Xb(),s.Xb(),s.Xb(),s.Yb(31,"div",12),s.Yb(32,"pagination-controls",13),s.fc("pageChange",function(e){return s.wc(t),s.hc(2).pageChanged(e)}),s.ic(33,"translate"),s.ic(34,"translate"),s.ic(35,"translate"),s.Xb(),s.Xb(),s.Xb(),s.Xb()}if(2&t){const t=s.hc(2);s.Gb(11),s.Ec(s.jc(12,10,"username")),s.Gb(3),s.Ec(s.jc(15,12,"status")),s.Gb(3),s.Ec(s.jc(18,14,"start-date")),s.Gb(3),s.Ec(s.jc(21,16,"package-note")),s.Gb(3),s.Ec(s.jc(24,18,"package-name")),s.Gb(3),s.Ec(s.jc(27,20,"control")),s.Gb(3),s.oc("ngForOf",s.kc(30,22,t.pendingContractsList,t.config)),s.Gb(3),s.pc("previousLabel",s.jc(33,25,"prev")),s.pc("nextLabel",s.jc(34,27,"next")),s.pc("screenReaderCurrentLabel",s.jc(35,29,"you-are-on-page"))}}function y(t,e){1&t&&(s.Yb(0,"div"),s.Yb(1,"div",19),s.Yb(2,"div",20),s.Dc(3),s.ic(4,"translate"),s.Xb(),s.Xb(),s.Xb()),2&t&&(s.Gb(3),s.Ec(s.jc(4,1,"pending-contracts-not-exists")))}function X(t,e){if(1&t&&(s.Yb(0,"div",2),s.Yb(1,"h1",3),s.Dc(2),s.ic(3,"translate"),s.Xb(),s.Cc(4,D,36,31,"div",1),s.Cc(5,y,5,3,"div",1),s.Xb()),2&t){const t=s.hc();s.Gb(2),s.Ec(s.jc(3,3,"pending-contracts")),s.Gb(2),s.oc("ngIf",0!==t.pendingContracts.length),s.Gb(1),s.oc("ngIf",0===t.pendingContracts.length)}}function Y(t,e){1&t&&(s.Yb(0,"div"),s.Yb(1,"div",21),s.Ub(2,"div"),s.Ub(3,"div"),s.Ub(4,"div"),s.Ub(5,"div"),s.Xb(),s.Xb())}let M=(()=>{class t{constructor(t,e,n){this.captainService=t,this.router=e,this.toaster=n,this.destroy$=new r.a,this.pendingContractsList=[]}ngOnInit(){this.captainService.allPendingContracts().pipe(Object(o.a)(this.destroy$)).subscribe(t=>{t&&(this.pendingContracts=t.Data,this.pendingContractsList=t.Data)},t=>{console.log(t),404==t.error.status_code&&(this.toaster.error(t.error.msg),setTimeout(()=>{this.router.navigate(["/"])},2e3))}),this.config={itemsPerPage:5,currentPage:1,totalItems:this.pendingContractsList.length}}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}pageChanged(t){this.config.currentPage=t}}return t.\u0275fac=function(e){return new(e||t)(s.Tb(m),s.Tb(c.c),s.Tb(v.b))},t.\u0275cmp=s.Nb({type:t,selectors:[["app-pending"]],decls:2,vars:2,consts:[["class","pending-contracts",4,"ngIf"],[4,"ngIf"],[1,"pending-contracts"],[1,"bg-light-blue","text-white","font-weight-bold","p-3"],[1,"container-fluid"],[1,"card","border","bg-white","text-light-blue","mt-2","mt-sm-3","mt-md-4"],[1,"card-header","bg-white","py-3"],[1,"card-body","table-responsive","bg-white","text-center"],[1,"table"],[2,"white-space","nowrap"],["scope","col"],[4,"ngFor","ngForOf"],[1,"mt-3","text-center"],["autoHide","true","maxSize","5","responsive","true","screenReaderPaginationLabel","Pagination","screenReaderPageLabel","page",1,"my-pagination",3,"previousLabel","nextLabel","screenReaderCurrentLabel","pageChange"],["scope","row"],["scope","row",2,"white-space","nowrap"],["scope","row",1,"td-custom","mr-2"],["scrope","row"],[1,"text-success",3,"routerLink"],[1,"container"],[1,"alert","alert-primary","text-center","mt-5"],[1,"lds-ring"]],template:function(t,e){1&t&&(s.Cc(0,X,6,5,"div",0),s.Cc(1,Y,6,0,"div",1)),2&t&&(s.oc("ngIf",e.pendingContracts),s.Gb(1),s.oc("ngIf",null==e.pendingContracts))},directives:[i.m,i.l,x.c,c.d],pipes:[u.c,x.b,i.e],styles:["@media (min-width:992px) and (max-width:1199px){.pending-contracts[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{font-size:2.2rem}}@media (min-width:768px) and (max-width:991px){.pending-contracts[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{font-size:2rem}}@media (min-width:576px) and (max-width:767px){.pending-contracts[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{font-size:2rem;background:none!important;color:#21a5b8!important}}@media (max-width:575px){.pending-contracts[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{font-size:1.8rem;background:none!important;color:#21a5b8!important}}.pending-contracts[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{border-radius:20px}.pending-contracts[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]{box-shadow:1px 1px 12px rgba(0,0,0,.1),-1px -1px 12px rgba(0,0,0,.1);z-index:0;border-radius:20px 20px 0 0}.pending-contracts[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{border-radius:0 0 20px 20px}.pending-contracts[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .pending-contracts[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:none;padding:.3rem}"]}),t})();var _=n("3Pt+");function G(t,e){if(1&t&&(s.Yb(0,"tr"),s.Yb(1,"th"),s.Yb(2,"img",18),s.fc("error",function(){return e.$implicit.image="../../../../../../../assets/default-avatar.jpg"}),s.Xb(),s.Xb(),s.Yb(3,"th",19),s.Dc(4),s.Xb(),s.Yb(5,"th",19),s.Dc(6),s.ic(7,"translate"),s.Xb(),s.Yb(8,"th",20),s.Yb(9,"a",21),s.Dc(10),s.ic(11,"translate"),s.Xb(),s.Xb(),s.Xb()),2&t){const t=e.$implicit;s.Gb(2),s.pc("src",null==t?null:t.image,s.yc),s.qc("alt","",t.name," Image"),s.Gb(2),s.Ec(t.userName?t.userName:"-"),s.Gb(1),s.Lb("text-danger",null==t?null:t.newMessageStatus),s.Gb(1),s.Ec(null!=t&&t.newMessageStatus?s.jc(7,8,"new-message"):"-"),s.Gb(3),s.qc("routerLink","/contracts/owner/",t.userID,""),s.Gb(1),s.Ec(s.jc(11,10,"view"))}}function j(t,e){if(1&t){const t=s.Zb();s.Yb(0,"div"),s.Yb(1,"div",4),s.Yb(2,"div",5),s.Yb(3,"div",6),s.Yb(4,"div",7),s.Yb(5,"input",8),s.fc("ngModelChange",function(e){return s.wc(t),s.hc(2).name=e})("keyup",function(){return s.wc(t),s.hc(2).applyFilter()}),s.ic(6,"translate"),s.ic(7,"translate"),s.Xb(),s.Xb(),s.Xb(),s.Xb(),s.Yb(8,"div",9),s.Ub(9,"div",10),s.Yb(10,"div",11),s.Yb(11,"table",12),s.Yb(12,"thead"),s.Yb(13,"tr"),s.Yb(14,"th",13),s.Dc(15),s.ic(16,"translate"),s.Xb(),s.Yb(17,"th",13),s.Dc(18),s.ic(19,"translate"),s.Xb(),s.Yb(20,"th",14),s.Dc(21),s.ic(22,"translate"),s.Xb(),s.Yb(23,"th",13),s.Dc(24),s.ic(25,"translate"),s.Xb(),s.Xb(),s.Xb(),s.Yb(26,"tbody"),s.Cc(27,G,12,12,"tr",15),s.ic(28,"paginate"),s.Xb(),s.Xb(),s.Xb(),s.Xb(),s.Yb(29,"div",16),s.Yb(30,"pagination-controls",17),s.fc("pageChange",function(e){return s.wc(t),s.hc(2).pageChanged(e)}),s.ic(31,"translate"),s.ic(32,"translate"),s.ic(33,"translate"),s.Xb(),s.Xb(),s.Xb(),s.Xb()}if(2&t){const t=s.hc(2);s.Gb(5),s.pc("placeholder",s.jc(6,11,"statistic-owner-search-input")),s.pc("title",s.jc(7,13,"statistic-owner-search-input")),s.oc("ngModel",t.name),s.Gb(10),s.Ec(s.jc(16,15,"image")),s.Gb(3),s.Ec(s.jc(19,17,"username")),s.Gb(3),s.Ec(s.jc(22,19,"message-status")),s.Gb(3),s.Ec(s.jc(25,21,"control")),s.Gb(3),s.oc("ngForOf",s.kc(28,23,t.allOwnersList,t.config)),s.Gb(3),s.pc("previousLabel",s.jc(31,26,"prev")),s.pc("nextLabel",s.jc(32,28,"next")),s.pc("screenReaderCurrentLabel",s.jc(33,30,"you-are-on-page"))}}function k(t,e){1&t&&(s.Yb(0,"div"),s.Yb(1,"div",22),s.Yb(2,"div",23),s.Dc(3),s.ic(4,"translate"),s.Xb(),s.Xb(),s.Xb()),2&t&&(s.Gb(3),s.Ec(s.jc(4,1,"owner-not-exists")))}function E(t,e){if(1&t&&(s.Yb(0,"div",2),s.Yb(1,"h1",3),s.Dc(2),s.ic(3,"translate"),s.Xb(),s.Cc(4,j,34,32,"div",1),s.Cc(5,k,5,3,"div",1),s.Xb()),2&t){const t=s.hc();s.Gb(2),s.Ec(s.jc(3,3,"all-owners")),s.Gb(2),s.oc("ngIf",0!==t.allOwners.length),s.Gb(1),s.oc("ngIf",0===t.allOwners.length)}}function I(t,e){1&t&&(s.Yb(0,"div"),s.Yb(1,"div",24),s.Ub(2,"div"),s.Ub(3,"div"),s.Ub(4,"div"),s.Ub(5,"div"),s.Xb(),s.Xb())}function L(t,e){if(1&t&&(s.Yb(0,"tr"),s.Yb(1,"th",29),s.Dc(2),s.Xb(),s.Yb(3,"th",29),s.Dc(4),s.Xb(),s.Xb()),2&t){const t=e.$implicit;s.Gb(2),s.Ec(t.id),s.Gb(2),s.Ec(t.brancheName?t.brancheName:"-")}}function S(t,e){if(1&t){const t=s.Zb();s.Yb(0,"div"),s.Yb(1,"div",19),s.Yb(2,"div",20),s.Ub(3,"div",21),s.Yb(4,"div",22),s.Yb(5,"table",23),s.Yb(6,"thead"),s.Yb(7,"tr"),s.Ub(8,"th",24),s.Yb(9,"th",25),s.Dc(10),s.ic(11,"translate"),s.Xb(),s.Xb(),s.Xb(),s.Yb(12,"tbody"),s.Cc(13,L,5,2,"tr",26),s.ic(14,"paginate"),s.Xb(),s.Xb(),s.Xb(),s.Xb(),s.Yb(15,"div",27),s.Yb(16,"pagination-controls",28),s.fc("pageChange",function(e){return s.wc(t),s.hc(2).pageChanged(e)}),s.ic(17,"translate"),s.ic(18,"translate"),s.ic(19,"translate"),s.Xb(),s.Xb(),s.Xb(),s.Xb()}if(2&t){const t=s.hc(2);s.Gb(10),s.Ec(s.jc(11,5,"branch-name")),s.Gb(3),s.oc("ngForOf",s.kc(14,7,t.ownerDetailsBranches,t.config)),s.Gb(3),s.pc("previousLabel",s.jc(17,10,"prev")),s.pc("nextLabel",s.jc(18,12,"next")),s.pc("screenReaderCurrentLabel",s.jc(19,14,"you-are-on-page"))}}function F(t,e){1&t&&(s.Yb(0,"div"),s.Yb(1,"div",30),s.Yb(2,"div",31),s.Dc(3),s.ic(4,"translate"),s.Xb(),s.Xb(),s.Xb()),2&t&&(s.Gb(3),s.Ec(s.jc(4,1,"branches-not-exists")))}function U(t,e){if(1&t){const t=s.Zb();s.Yb(0,"div",2),s.Yb(1,"div",3),s.Yb(2,"h1",4),s.Dc(3),s.ic(4,"translate"),s.Xb(),s.Yb(5,"div",5),s.Yb(6,"div",6),s.Yb(7,"div",7),s.Yb(8,"div",8),s.Yb(9,"div",9),s.Yb(10,"div",10),s.Yb(11,"img",11),s.fc("error",function(){return s.wc(t),s.hc().ownerDetails.image="../../../../../assets/default-avatar.jpg"}),s.Xb(),s.Xb(),s.Xb(),s.Yb(12,"div",12),s.Yb(13,"p",13),s.Dc(14),s.Xb(),s.Xb(),s.Xb(),s.Xb(),s.Xb(),s.Yb(15,"div",14),s.Yb(16,"div",15),s.Ub(17,"i",16),s.Yb(18,"a",17),s.fc("click",function(){s.wc(t);const e=s.hc();return e.updateMessageStatus(null==e.ownerDetails?null:e.ownerDetails.uuid,null==e.ownerDetails?null:e.ownerDetails.newMessageStatus)}),s.Dc(19),s.ic(20,"translate"),s.Xb(),s.Xb(),s.Xb(),s.Xb(),s.Yb(21,"p",18),s.Dc(22),s.ic(23,"translate"),s.Yb(24,"span"),s.Dc(25),s.Xb(),s.Xb(),s.Yb(26,"p",18),s.Dc(27),s.ic(28,"translate"),s.Yb(29,"span"),s.Dc(30),s.Xb(),s.Xb(),s.Yb(31,"p",18),s.Dc(32),s.ic(33,"translate"),s.Xb(),s.Cc(34,S,20,16,"div",1),s.Cc(35,F,5,3,"div",1),s.Xb(),s.Xb()}if(2&t){const t=s.hc();s.Gb(3),s.Ec(s.jc(4,13,"owner-details")),s.Gb(8),s.pc("src",null==t.ownerDetails?null:t.ownerDetails.image,s.yc),s.Gb(3),s.Ec(null==t.ownerDetails?null:t.ownerDetails.userName),s.Gb(4),s.rc("routerLink","/chat/view/owner/",null==t.ownerDetails?null:t.ownerDetails.id,"/",null==t.ownerDetails?null:t.ownerDetails.uuid,""),s.Gb(1),s.Ec(s.jc(20,15,"chat-with-owner")),s.Gb(3),s.Fc("",s.jc(23,17,"city")," : "),s.Gb(3),s.Ec(null==t.ownerDetails?null:t.ownerDetails.city),s.Gb(2),s.Fc("",s.jc(28,19,"phone")," : "),s.Gb(3),s.Ec(null==t.ownerDetails?null:t.ownerDetails.phone),s.Gb(2),s.Fc("",s.jc(33,21,"branches")," : "),s.Gb(2),s.oc("ngIf",0!==t.ownerDetailsBranches.length),s.Gb(1),s.oc("ngIf",0===t.ownerDetailsBranches.length)}}function N(t,e){1&t&&(s.Yb(0,"div"),s.Yb(1,"div",32),s.Ub(2,"div"),s.Ub(3,"div"),s.Ub(4,"div"),s.Ub(5,"div"),s.Xb(),s.Xb())}function z(t,e){if(1&t&&(s.Yb(0,"option",15),s.Dc(1),s.Xb()),2&t){const t=e.$implicit;s.pc("value",null==t?null:t.userID),s.Gb(1),s.Ec(null==t?null:t.userName)}}function $(t,e){1&t&&(s.Yb(0,"span",16),s.Dc(1),s.ic(2,"translate"),s.Xb()),2&t&&(s.Gb(1),s.Ec(s.jc(2,1,"owner-field-is-required")))}function R(t,e){1&t&&(s.Yb(0,"span",16),s.Dc(1),s.ic(2,"translate"),s.Xb()),2&t&&(s.Gb(1),s.Ec(s.jc(2,1,"money-amount-field-is-required")))}const T=function(t){return{"is-invalid":t}};function A(t,e){if(1&t){const t=s.Zb();s.Yb(0,"div"),s.Yb(1,"form",4),s.fc("ngSubmit",function(){return s.wc(t),s.hc().mySubmit()}),s.Yb(2,"div",5),s.Yb(3,"label",6),s.Dc(4),s.ic(5,"translate"),s.Xb(),s.Yb(6,"div",7),s.Yb(7,"select",8),s.fc("change",function(e){return s.wc(t),s.hc().changeOwner(e)}),s.Yb(8,"option",9),s.Dc(9),s.ic(10,"translate"),s.Xb(),s.Cc(11,z,2,2,"option",10),s.Xb(),s.Cc(12,$,3,3,"span",11),s.Xb(),s.Xb(),s.Yb(13,"div",5),s.Yb(14,"label",6),s.Dc(15),s.ic(16,"translate"),s.Xb(),s.Yb(17,"div",7),s.Ub(18,"input",12),s.ic(19,"translate"),s.Cc(20,R,3,3,"span",11),s.Xb(),s.Xb(),s.Yb(21,"div",13),s.Ub(22,"input",14),s.ic(23,"translate"),s.Xb(),s.Xb(),s.Xb()}if(2&t){const t=s.hc();s.Gb(1),s.oc("formGroup",t.uploadForm),s.Gb(3),s.Ec(s.jc(5,12,"all-owners")),s.Gb(3),s.oc("ngClass",s.sc(22,T,t.uploadForm.get("ownerId").errors&&(t.uploadForm.get("ownerId").touched||t.uploadForm.get("ownerId").dirty))),s.Gb(2),s.Ec(s.jc(10,14,"select-owner")),s.Gb(2),s.oc("ngForOf",t.owners),s.Gb(1),s.oc("ngIf",null==t.uploadForm.get("ownerId").errors?null:t.uploadForm.get("ownerId").errors.required),s.Gb(3),s.Ec(s.jc(16,16,"money-amount")),s.Gb(3),s.pc("placeholder",s.jc(19,18,"money-amount-placeholder")),s.oc("ngClass",s.sc(24,T,t.uploadForm.get("amount").errors&&(t.uploadForm.get("amount").touched||t.uploadForm.get("amount").dirty))),s.Gb(2),s.oc("ngIf",null==t.uploadForm.get("amount").errors?null:t.uploadForm.get("amount").errors.required),s.Gb(2),s.pc("value",s.jc(23,20,"save")),s.oc("disabled",t.isSubmitted)}}function H(t,e){1&t&&(s.Yb(0,"div"),s.Yb(1,"div",17),s.Ub(2,"div"),s.Ub(3,"div"),s.Ub(4,"div"),s.Ub(5,"div"),s.Xb(),s.Xb())}function q(t,e){if(1&t&&(s.Yb(0,"tr"),s.Yb(1,"th",35),s.Dc(2),s.Xb(),s.Yb(3,"th",36),s.Dc(4),s.ic(5,"date"),s.Xb(),s.Xb()),2&t){const t=e.$implicit;s.Gb(2),s.Ec(null!=t&&t.amount?null==t?null:t.amount:"-"),s.Gb(2),s.Ec(null!=t&&t.date?s.kc(5,2,1e3*(null==t||null==t.date?null:t.date.timestamp),"MMM d, y, h:mm:ss a"):"-")}}function B(t,e){1&t&&(s.Yb(0,"tr"),s.Yb(1,"th",37),s.Dc(2),s.ic(3,"translate"),s.Xb(),s.Xb()),2&t&&(s.Gb(2),s.Ec(s.jc(3,1,"owner-payments-not-exists")))}function Z(t,e){if(1&t){const t=s.Zb();s.Yb(0,"div"),s.Yb(1,"div",19),s.Yb(2,"div",20),s.Ub(3,"div",21),s.Yb(4,"div",22),s.Yb(5,"table",23),s.Yb(6,"thead"),s.Yb(7,"tr"),s.Yb(8,"th",24),s.Dc(9),s.ic(10,"translate"),s.Xb(),s.Yb(11,"th",24),s.Dc(12),s.ic(13,"translate"),s.Xb(),s.Yb(14,"th",24),s.Dc(15),s.ic(16,"translate"),s.Xb(),s.Yb(17,"th",24),s.Dc(18),s.ic(19,"translate"),s.Xb(),s.Yb(20,"th",24),s.Dc(21),s.ic(22,"translate"),s.Xb(),s.Yb(23,"th",25),s.Dc(24),s.ic(25,"translate"),s.Xb(),s.Xb(),s.Xb(),s.Yb(26,"tbody"),s.Yb(27,"tr"),s.Yb(28,"th",26),s.Dc(29),s.Xb(),s.Yb(30,"th",26),s.Dc(31),s.Xb(),s.Yb(32,"th",27),s.Dc(33),s.Xb(),s.Yb(34,"th",26),s.Dc(35),s.Xb(),s.Yb(36,"th",26),s.Dc(37),s.Xb(),s.Yb(38,"th",28),s.Dc(39),s.Xb(),s.Xb(),s.Yb(40,"tr",29),s.Yb(41,"th",30),s.Dc(42),s.ic(43,"translate"),s.Xb(),s.Yb(44,"th",31),s.Dc(45),s.ic(46,"translate"),s.Xb(),s.Xb(),s.Cc(47,q,6,5,"tr",32),s.ic(48,"paginate"),s.Cc(49,B,4,3,"tr",2),s.Xb(),s.Xb(),s.Xb(),s.Xb(),s.Yb(50,"div",33),s.Yb(51,"pagination-controls",34),s.fc("pageChange",function(e){return s.wc(t),s.hc(2).pageChanged(e)})("pageBoundsCorrection",function(e){return s.wc(t),s.hc(2).pageChanged(e)}),s.ic(52,"translate"),s.ic(53,"translate"),s.ic(54,"translate"),s.Xb(),s.Xb(),s.Xb(),s.Xb()}if(2&t){const t=s.hc(2);s.Gb(9),s.Ec(s.jc(10,22,"sum-payments")),s.Gb(3),s.Ec(s.jc(13,24,"total-amount-of-subscriptions")),s.Gb(3),s.Ec(s.jc(16,26,"current-total")),s.Gb(3),s.Ec(s.jc(19,28,"bank-name")),s.Gb(3),s.Ec(s.jc(22,30,"account-id")),s.Gb(3),s.Ec(s.jc(25,32,"next-pay")),s.Gb(5),s.Ec(null!=t.ownerPaymentDetails&&t.ownerPaymentDetails.sumPayments?null==t.ownerPaymentDetails?null:t.ownerPaymentDetails.sumPayments:"-"),s.Gb(2),s.Ec(null!=t.ownerPaymentDetails&&t.ownerPaymentDetails.totalAmountOfSubscriptions?null==t.ownerPaymentDetails?null:t.ownerPaymentDetails.totalAmountOfSubscriptions:"-"),s.Gb(1),s.Jb("pb-3 ",(null==t.ownerPaymentDetails?null:t.ownerPaymentDetails.currentTotal)<0?"text-danger":"",""),s.Gb(1),s.Ec(null!=t.ownerPaymentDetails&&t.ownerPaymentDetails.currentTotal?null==t.ownerPaymentDetails?null:t.ownerPaymentDetails.currentTotal:"-"),s.Gb(2),s.Ec(null!=t.ownerPaymentDetails&&null!=t.ownerPaymentDetails.bank&&t.ownerPaymentDetails.bank.bankName?null==t.ownerPaymentDetails||null==t.ownerPaymentDetails.bank?null:t.ownerPaymentDetails.bank.bankName:"-"),s.Gb(2),s.Ec(null!=t.ownerPaymentDetails&&null!=t.ownerPaymentDetails.bank&&t.ownerPaymentDetails.bank.accountID?null==t.ownerPaymentDetails||null==t.ownerPaymentDetails.bank?null:t.ownerPaymentDetails.bank.accountID:"-"),s.Gb(2),s.Ec(null!=t.ownerPaymentDetails&&t.ownerPaymentDetails.nextPay?null==t.ownerPaymentDetails?null:t.ownerPaymentDetails.nextPay:"-"),s.Gb(3),s.Ec(s.jc(43,34,"amount")),s.Gb(3),s.Ec(s.jc(46,36,"date")),s.Gb(2),s.oc("ngForOf",s.kc(48,38,t.ownerPaymentDetailsList,t.config)),s.Gb(2),s.oc("ngIf",0===t.ownerPaymentDetailsList.length),s.Gb(2),s.pc("previousLabel",s.jc(52,41,"prev")),s.pc("nextLabel",s.jc(53,43,"next")),s.pc("screenReaderCurrentLabel",s.jc(54,45,"you-are-on-page"))}}function J(t,e){1&t&&(s.Yb(0,"div"),s.Yb(1,"div",38),s.Ub(2,"div"),s.Ub(3,"div"),s.Ub(4,"div"),s.Ub(5,"div"),s.Xb(),s.Xb())}function V(t,e){if(1&t&&(s.Yb(0,"div",18),s.Cc(1,Z,55,47,"div",2),s.Cc(2,J,6,0,"div",2),s.Xb()),2&t){const t=s.hc();s.Gb(1),s.oc("ngIf",null!=t.ownerPaymentDetails),s.Gb(1),s.oc("ngIf",null==t.ownerPaymentDetails)}}const W=[{path:"",component:(()=>{class t{constructor(t,e,n){this.contractService=t,this.router=e,this.toaster=n,this.destroy$=new r.a,this.allOwnersList=[]}ngOnInit(){this.contractService.allUsers("owner").pipe(Object(o.a)(this.destroy$)).subscribe(t=>{t&&(this.allOwners=t.Data,this.allOwnersList=t.Data.reverse())},t=>this.handleError(t)),this.config={itemsPerPage:5,currentPage:1,totalItems:this.allOwnersList.length}}handleError(t){this.allOwners=[],console.log(t),t.error.error?this.toaster.error(t.error.error):t.error.msg&&this.toaster.error(t.error.msg)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}pageChanged(t){this.config.currentPage=t}applyFilter(){this.name?(this.allOwnersList=[],this.allOwnersList=this.allOwners.filter(t=>{if(t.userName){const e=t.userName.toLocaleLowerCase().match(this.name.toLocaleLowerCase());if(e)return e}})):this.allOwnersList=[...this.allOwners]}}return t.\u0275fac=function(e){return new(e||t)(s.Tb(m),s.Tb(c.c),s.Tb(v.b))},t.\u0275cmp=s.Nb({type:t,selectors:[["app-all-owners"]],decls:2,vars:2,consts:[["class","store-owners",4,"ngIf"],[4,"ngIf"],[1,"store-owners"],[1,"bg-light-blue","text-white","font-weight-bold","p-3"],[1,"container-fluid"],[1,"row"],[1,"col-10","col-sm-8","col-md-6","col-xl-4"],[1,"form-group","mt-4","mb-0"],["id","exampleFormControlInput2","type","text",1,"form-control","form-control-underlined","border-primary","search-input",3,"ngModel","placeholder","title","ngModelChange","keyup"],[1,"card","border","bg-white","text-light-blue","mt-2","mt-sm-3","mt-md-4"],[1,"card-header","bg-white","py-3"],[1,"card-body","table-responsive","bg-white","text-center"],[1,"table"],["scope","col"],["scope","col",1,"message-state-head",2,"white-space","nowrap"],[4,"ngFor","ngForOf"],[1,"mt-3","text-center"],["autoHide","true","maxSize","5","responsive","true","screenReaderPaginationLabel","Pagination","screenReaderPageLabel","page",1,"my-pagination",3,"previousLabel","nextLabel","screenReaderCurrentLabel","pageChange"],[1,"img-thumbnail","img-custom",3,"src","alt","error"],["scope","row"],["scrope","row"],[1,"text-success",3,"routerLink"],[1,"container"],[1,"alert","alert-primary","text-center","mt-5"],[1,"lds-ring"]],template:function(t,e){1&t&&(s.Cc(0,E,6,5,"div",0),s.Cc(1,I,6,0,"div",1)),2&t&&(s.oc("ngIf",e.allOwners),s.Gb(1),s.oc("ngIf",null==e.allOwners))},directives:[i.m,_.a,_.h,_.k,i.l,x.c,c.d],pipes:[u.c,x.b],styles:["@media (min-width:992px) and (max-width:1199px){.store-owners[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{font-size:2.2rem}}@media (min-width:768px) and (max-width:991px){.store-owners[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{font-size:2rem}}@media (min-width:576px) and (max-width:767px){.store-owners[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{font-size:2rem;background:none!important;color:#21a5b8!important}}@media (max-width:575px){.store-owners[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{font-size:1.8rem;background:none!important;color:#21a5b8!important}}.store-owners[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{border-radius:20px}.store-owners[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]{box-shadow:1px 1px 12px rgba(0,0,0,.1),-1px -1px 12px rgba(0,0,0,.1);z-index:0;border-radius:20px 20px 0 0}.store-owners[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{border-radius:0 0 20px 20px}.store-owners[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .store-owners[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:none;padding:.3rem}"]}),t})()},{path:"pending",component:M},{path:"view/:id",component:P},{path:"owner/:id",component:(()=>{class t{constructor(t,e,n){this.contractService=t,this.datePipe=e,this.activateRoute=n,this.destroy$=new r.a,this.ownerDetailsBranches=[],this.active=!0}ngOnInit(){this.getOwnerDetails()}updateMessageStatus(t,e){e&&(console.log("update Message Status sending ",e),this.contractService.updateNewMessageStatus(t).subscribe(t=>console.log("Update Message Status : ",t)))}getOwnerDetails(){console.log("userId: ",this.activateRoute.snapshot.paramMap.get("id")),this.contractService.ownerDetails(this.activateRoute.snapshot.paramMap.get("id")).pipe(Object(o.a)(this.destroy$)).subscribe(t=>{t&&(this.ownerDetails=t.Data,t.Data.branches.map((t,e)=>{this.ownerDetailsBranches.push({id:e+1,brancheName:t.brancheName})}),this.config={itemsPerPage:5,currentPage:1,totalItems:this.ownerDetails.branches.length})},t=>console.log("Error : ",t))}pageChanged(t){this.config.currentPage=t}}return t.\u0275fac=function(e){return new(e||t)(s.Tb(m),s.Tb(i.e),s.Tb(c.a))},t.\u0275cmp=s.Nb({type:t,selectors:[["app-owner-details"]],features:[s.Fb([i.e])],decls:2,vars:2,consts:[["class","owner-details mb-5",4,"ngIf"],[4,"ngIf"],[1,"owner-details","mb-5"],[1,"container-fluid"],[1,"text-light-blue","mt-3","mb-2","font-weight-bold"],[1,"row","w-100","mx-auto","mb-3"],[1,"col-12","col-sm-7","col-md-8","mb-3","mb-sm-0"],[1,"captain-details-image"],[1,"row","w-100","mx-auto"],[1,"col-5","pl-0"],[1,"captain-image","mx-auto"],["alt","captain image",1,"img-responsive","rounded-circle",3,"src","error"],[1,"col-7","align-self-center"],[1,"text-light-blue"],[1,"col-12","col-sm-5","col-md-4","align-self-center","text-center"],[1,"captain-chat","mx-auto","p-1"],[1,"fa","fa-commenting","fa-fw","fa-lg","text-grey-blue"],[1,"font-weight-bold",3,"routerLink","click"],[1,"ml-sm-2","ml-md-4","mb-1"],[1,"col-12","col-sm-9","col-md-8","col-xl-6"],[1,"card","border","bg-white","text-light-blue","mt-2","mt-sm-3","mt-md-4"],[1,"card-header","bg-white","py-3"],[1,"card-body","table-responsive","bg-white","text-center"],[1,"table"],["scope","col"],["scope","col",2,"white-space","nowrap"],[4,"ngFor","ngForOf"],[1,"mt-3","text-center"],["autoHide","true","maxSize","5","responsive","true","screenReaderPaginationLabel","Pagination","screenReaderPageLabel","page",1,"my-pagination",3,"previousLabel","nextLabel","screenReaderCurrentLabel","pageChange"],["scope","row"],[1,"container"],[1,"alert","alert-primary","text-center","mt-5"],[1,"lds-ring"]],template:function(t,e){1&t&&(s.Cc(0,U,36,23,"div",0),s.Cc(1,N,6,0,"div",1)),2&t&&(s.oc("ngIf",e.ownerDetails),s.Gb(1),s.oc("ngIf",null==e.ownerDetails))},directives:[i.m,c.d,i.l,x.c],pipes:[u.c,x.b],styles:["@media (min-width:992px) and (max-width:1199px){.owner-details[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.2rem}}@media (min-width:576px) and (max-width:991px){.owner-details[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2rem}}@media (max-width:575px){.owner-details[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2rem}}.owner-details[_ngcontent-%COMP%]   .captain-details-image[_ngcontent-%COMP%]   .captain-image[_ngcontent-%COMP%]{width:180px;border-radius:50%;height:180px;padding:4px;border:13px solid #21a5b8}.owner-details[_ngcontent-%COMP%]   .captain-details-image[_ngcontent-%COMP%]   .captain-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border:5px solid #076370}@media (min-width:576px) and (max-width:991px){.owner-details[_ngcontent-%COMP%]   .captain-details-image[_ngcontent-%COMP%]   .captain-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border:3px solid #076370}}@media (min-width:992px) and (max-width:1100px){.owner-details[_ngcontent-%COMP%]   .captain-details-image[_ngcontent-%COMP%]   .captain-image[_ngcontent-%COMP%]{width:160px;height:160px;padding:4px;border:12px solid #21a5b8}}@media (min-width:576px) and (max-width:991px){.owner-details[_ngcontent-%COMP%]   .captain-details-image[_ngcontent-%COMP%]   .captain-image[_ngcontent-%COMP%]{width:120px;height:120px;padding:3px;border:10px solid #21a5b8}}@media (max-width:575px){.owner-details[_ngcontent-%COMP%]   .captain-details-image[_ngcontent-%COMP%]   .captain-image[_ngcontent-%COMP%]{font-size:.9rem;width:120px;height:120px;padding:3px;border:10px solid #21a5b8}}.owner-details[_ngcontent-%COMP%]   .captain-details-image[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:2rem}@media (min-width:992px) and (max-width:1100px){.owner-details[_ngcontent-%COMP%]   .captain-details-image[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.7rem}}@media (min-width:768px) and (max-width:991px){.owner-details[_ngcontent-%COMP%]   .captain-details-image[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.3rem}}@media (min-width:576px) and (max-width:767px){.owner-details[_ngcontent-%COMP%]   .captain-details-image[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.1rem}}@media (max-width:575px){.owner-details[_ngcontent-%COMP%]   .captain-details-image[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.3rem}}.owner-details[_ngcontent-%COMP%]   .captain-chat[_ngcontent-%COMP%]{width:-webkit-max-content;width:max-content;border:2px solid #21a5b8;border-radius:5px}@media (min-width:768px) and (max-width:991px){.owner-details[_ngcontent-%COMP%]   .captain-chat[_ngcontent-%COMP%]{width:100%}}.owner-details[_ngcontent-%COMP%]   .captain-chat[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000}.owner-details[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{border-radius:20px}.owner-details[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]{box-shadow:1px 1px 12px rgba(0,0,0,.1),-1px -1px 12px rgba(0,0,0,.1);z-index:0;border-radius:20px 20px 0 0}.owner-details[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{border-radius:0 0 20px 20px}.owner-details[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .owner-details[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:none;padding:.3rem}"]}),t})()},{path:"payment",component:(()=>{class t{constructor(t,e,n){this.ownerService=t,this.formBuilder=e,this.toaster=n,this.destroy$=new r.a,this.ownerPaymentDetailsList=[],this.isSubmitted=!1,this.isClicked=!1}ngOnInit(){this.getAllOwners(),this.uploadForm=this.formBuilder.group({ownerId:["",_.q.required],amount:["",_.q.required]})}ngOnDestroy(){this.ownersSubscription.unsubscribe()}getAllOwners(){this.ownersSubscription=this.ownerService.allUsers("owner").pipe(Object(o.a)(this.destroy$)).subscribe(t=>{t&&(this.owners=t.Data)},t=>this.handleError(t))}getOwnerPaymentDetails(t){this.ownerService.paymentsOfOwner(t).subscribe(t=>{t&&(this.ownerPaymentDetails=t.Data,this.ownerPaymentDetailsList=t.Data.payments)},t=>this.handleError(t),()=>{this.config={id:"amount_pagination",itemsPerPage:5,currentPage:1,totalItems:this.ownerPaymentDetailsList.length}})}changeOwner(t){this.isClicked=!0,this.uploadForm.patchValue(t.target.value,{onlySelf:!0}),this.getOwnerPaymentDetails(t.target.value)}pageChanged(t){this.config.currentPage=t}mySubmit(){if(this.isSubmitted=!0,!this.uploadForm.valid)return this.toaster.error("Error : Form Not Valid"),this.isSubmitted=!1,!1;{const t=this.uploadForm.getRawValue();console.log(t),this.ownerService.payment(t).subscribe(t=>console.log(t),t=>{this.isSubmitted=!1,console.log(t)},()=>{this.isSubmitted=!1,this.uploadForm.get("amount").reset(),this.getOwnerPaymentDetails(t.ownerId)})}}handleError(t){this.isClicked=!1,console.log(t),t.error.error?this.toaster.error(t.error.error):t.error.msg&&this.toaster.error(t.error.msg)}}return t.\u0275fac=function(e){return new(e||t)(s.Tb(m),s.Tb(_.b),s.Tb(v.b))},t.\u0275cmp=s.Nb({type:t,selectors:[["app-payment"]],decls:7,vars:6,consts:[[1,"owners"],[1,"bg-light-blue","text-white","font-weight-bold","p-3"],[4,"ngIf"],["class","payment-owners",4,"ngIf"],[1,"col-md-10","col-lg-8","col-xl-7","my-5","mx-auto",3,"formGroup","ngSubmit"],[1,"form-group","row"],[1,"col-12","col-form-label"],[1,"col-12"],["name","ownerId","formControlName","ownerId",1,"form-control",3,"ngClass","change"],["value",""],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback",4,"ngIf"],["type","number","name","amount","formControlName","amount",1,"form-control",3,"ngClass","placeholder"],[1,"form-group","mt-3"],["type","submit",1,"btn","btn-primary","btn-block",3,"value","disabled"],[3,"value"],[1,"invalid-feedback"],[1,"lds-ring"],[1,"payment-owners"],[1,"container-fluid"],[1,"card","border","bg-white","text-light-blue","mt-2","mt-sm-3","mt-md-4"],[1,"card-header","bg-white","py-3"],[1,"card-body","table-responsive","bg-white","text-center"],[1,"table"],["scope","col"],["scope","col",2,"vertical-align","middle"],["scope","row",1,"pb-3"],["scope","row"],["scope","row",1,"pb-3",2,"direction","ltr"],[1,"border-top"],["scope","col","colSpan","2",1,"pt-3"],["scope","col","colSpan","3",1,"pt-3"],[4,"ngFor","ngForOf"],[1,"mt-3","text-center"],["id","amount_pagination","autoHide","true","maxSize","5","responsive","true","screenReaderPaginationLabel","Pagination","screenReaderPageLabel","page",1,"my-pagination",3,"previousLabel","nextLabel","screenReaderCurrentLabel","pageChange","pageBoundsCorrection"],["scope","row","colSpan","2"],["scope","row","colSpan","3"],["scope","row","colSpan","6"],[1,"lds-ring","position-sticky"]],template:function(t,e){1&t&&(s.Yb(0,"div",0),s.Yb(1,"h1",1),s.Dc(2),s.ic(3,"translate"),s.Xb(),s.Cc(4,A,24,26,"div",2),s.Cc(5,H,6,0,"div",2),s.Xb(),s.Cc(6,V,3,2,"div",3)),2&t&&(s.Gb(2),s.Ec(s.jc(3,4,"all-owners")),s.Gb(2),s.oc("ngIf",null!=e.owners),s.Gb(1),s.oc("ngIf",null==e.owners),s.Gb(1),s.oc("ngIf",e.isClicked))},directives:[i.m,_.s,_.i,_.f,_.p,_.h,_.d,i.k,_.l,_.r,i.l,_.m,_.a,x.c],pipes:[u.c,x.b,i.e],styles:["@media (min-width:992px) and (max-width:1199px){.owners[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{font-size:2.2rem}}@media (min-width:768px) and (max-width:991px){.owners[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{font-size:2rem}}@media (min-width:576px) and (max-width:767px){.owners[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{font-size:2rem;background:none!important;color:#21a5b8!important}}@media (max-width:575px){.owners[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{font-size:1.8rem;background:none!important;color:#21a5b8!important}}.payment-owners[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{border-radius:20px}.payment-owners[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]{box-shadow:1px 1px 12px rgba(0,0,0,.1),-1px -1px 12px rgba(0,0,0,.1);z-index:0;border-radius:20px 20px 0 0}.payment-owners[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{border-radius:0 0 20px 20px}.payment-owners[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .payment-owners[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:none;padding:.3rem}"]}),t})()},{path:"",redirectTo:"pending",pathMatch:"full"}];let Q=(()=>{class t{}return t.\u0275mod=s.Rb({type:t}),t.\u0275inj=s.Qb({factory:function(e){return new(e||t)},imports:[[c.e.forChild(W)],c.e]}),t})(),K=(()=>{class t{}return t.\u0275mod=s.Rb({type:t}),t.\u0275inj=s.Qb({factory:function(e){return new(e||t)},imports:[[a.a,Q]]}),t})()}}]);