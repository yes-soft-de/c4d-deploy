(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/2RN":function(t,n,e){"use strict";e.r(n),e.d(n,"DashboardModule",function(){return I});var a=e("vTDv"),c=e("tyNb"),r=e("Kj3r"),o=e("klsY"),b=e("fXoL"),i=e("5KT8"),d=e("sYmb"),s=e("XNiG"),g=e("1G5W"),h=e("Ge/P"),l=e("ofXK");function p(t,n){if(1&t){const t=b.Zb();b.Wb(0),b.Yb(1,"tr"),b.Yb(2,"th"),b.Yb(3,"img",17),b.fc("error",function(){return b.wc(t),b.hc().$implicit.image="../../../../../../../assets/default-avatar.jpg"}),b.Xb(),b.Xb(),b.Yb(4,"th",18),b.Dc(5),b.Xb(),b.Yb(6,"th",18),b.Dc(7),b.Xb(),b.Yb(8,"th",18),b.Dc(9),b.Xb(),b.Yb(10,"th",18),b.Dc(11),b.Xb(),b.Yb(12,"th",18),b.Dc(13),b.Xb(),b.Yb(14,"th",18),b.Dc(15),b.ic(16,"currency"),b.Xb(),b.Xb(),b.Vb()}if(2&t){const t=b.hc().$implicit;b.Gb(3),b.pc("src",null==t?null:t.image,b.yc),b.qc("alt","",t.name," Image"),b.Gb(2),b.Ec(t.name?t.name:"-"),b.Gb(2),b.Ec(t.countOrdersDeliverd?t.countOrdersDeliverd:"-"),b.Gb(2),b.Ec(t.bounce?t.bounce:"-"),b.Gb(2),b.Ec(t.age?t.age:"-"),b.Gb(2),b.Ec(t.car?t.car:"-"),b.Gb(2),b.Ec(t.salary?b.jc(16,8,t.salary):"-")}}function m(t,n){if(1&t&&(b.Wb(0),b.Cc(1,p,17,10,"ng-container",16),b.Vb()),2&t){const t=n.index,e=b.hc(2);b.Gb(1),b.oc("ngIf",t<e.latestCaptainsNumber)}}function u(t,n){if(1&t&&(b.Yb(0,"table",12),b.Yb(1,"thead"),b.Yb(2,"tr"),b.Yb(3,"th",13),b.Dc(4),b.ic(5,"translate"),b.Xb(),b.Yb(6,"th",13),b.Dc(7),b.ic(8,"translate"),b.Xb(),b.Yb(9,"th",14),b.Dc(10),b.ic(11,"translate"),b.Xb(),b.Yb(12,"th",13),b.Dc(13),b.ic(14,"translate"),b.Xb(),b.Yb(15,"th",13),b.Dc(16),b.ic(17,"translate"),b.Xb(),b.Yb(18,"th",13),b.Dc(19),b.ic(20,"translate"),b.Xb(),b.Yb(21,"th",14),b.Dc(22),b.ic(23,"translate"),b.Xb(),b.Xb(),b.Xb(),b.Yb(24,"tbody"),b.Cc(25,m,2,1,"ng-container",15),b.Xb(),b.Xb()),2&t){const t=b.hc();b.Gb(4),b.Ec(b.jc(5,8,"image")),b.Gb(3),b.Ec(b.jc(8,10,"name")),b.Gb(3),b.Ec(b.jc(11,12,"count-orders-deliverd")),b.Gb(3),b.Ec(b.jc(14,14,"bounce")),b.Gb(3),b.Ec(b.jc(17,16,"age")),b.Gb(3),b.Ec(b.jc(20,18,"car")),b.Gb(3),b.Ec(b.jc(23,20,"salary")),b.Gb(3),b.oc("ngForOf",t.captains)}}function C(t,n){1&t&&(b.Yb(0,"div",19),b.Yb(1,"p",18),b.Dc(2),b.ic(3,"translate"),b.Xb(),b.Xb()),2&t&&(b.Gb(2),b.Fc("",b.jc(3,1,"captain-not-exists"),"."))}let O=(()=>{class t{constructor(t){this.dashboardService=t,this.destroy$=new s.a,this.captains=[],this.latestCaptainsNumber=5}ngOnInit(){this.dashboardService.captainsDashboard().pipe(Object(g.a)(this.destroy$)).subscribe(t=>{t&&(this.countPendingCaptains=t.Data[0].countPendingCaptains,this.countOngoingCaptains=t.Data[1].countOngoingCaptains,this.countDayOfCaptains=t.Data[2].countDayOfCaptains,t.Data.map((t,n)=>{n>=3&&this.captains.push(t)}))})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return t.\u0275fac=function(n){return new(n||t)(b.Tb(h.a))},t.\u0275cmp=b.Nb({type:t,selectors:[["app-captains-dashboard"]],decls:32,vars:20,consts:[[1,"captains-dashboard","mb-4","mb-lg-5"],[1,"row"],[1,"col-12","col-sm-4"],[1,"card","w-75","mx-auto","bg-light-blue","border-0","text-center","mb-2"],[1,"card-number","text-light-blue"],[1,"text-white"],[1,"dashboard-table","mt-5"],[1,"card","border-0","text-white"],[1,"card-header","bg-light-blue","py-2"],[1,"card-body","table-responsive","bg-light-blue","text-center"],["class","table",4,"ngIf"],["class","text-center",4,"ngIf"],[1,"table"],["scope","col"],["scope","col",2,"white-space","nowrap"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"img-thumbnail","img-custom",3,"src","alt","error"],["scope","row"],[1,"text-center"]],template:function(t,n){1&t&&(b.Yb(0,"div",0),b.Yb(1,"div",1),b.Yb(2,"div",2),b.Yb(3,"div",3),b.Yb(4,"div",4),b.Dc(5),b.Xb(),b.Yb(6,"span",5),b.Dc(7),b.ic(8,"translate"),b.Xb(),b.Xb(),b.Xb(),b.Yb(9,"div",2),b.Yb(10,"div",3),b.Yb(11,"div",4),b.Dc(12),b.Xb(),b.Yb(13,"span",5),b.Dc(14),b.ic(15,"translate"),b.Xb(),b.Xb(),b.Xb(),b.Yb(16,"div",2),b.Yb(17,"div",3),b.Yb(18,"div",4),b.Dc(19),b.Xb(),b.Yb(20,"span",5),b.Dc(21),b.ic(22,"translate"),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Yb(23,"div",6),b.Yb(24,"div",7),b.Yb(25,"div",8),b.Dc(26),b.ic(27,"translate"),b.ic(28,"translate"),b.Xb(),b.Yb(29,"div",9),b.Cc(30,u,26,22,"table",10),b.Cc(31,C,4,3,"div",11),b.Xb(),b.Xb(),b.Xb(),b.Xb()),2&t&&(b.Gb(5),b.Ec(n.countPendingCaptains),b.Gb(2),b.Ec(b.jc(8,10,"pending")),b.Gb(5),b.Ec(n.countOngoingCaptains),b.Gb(2),b.Ec(b.jc(15,12,"ongoing")),b.Gb(5),b.Ec(n.countDayOfCaptains),b.Gb(2),b.Ec(b.jc(22,14,"day-off")),b.Gb(5),b.Gc(" ",b.jc(27,16,"top")," 5 ",b.jc(28,18,"captains")," "),b.Gb(4),b.oc("ngIf",0!=n.captains.length),b.Gb(1),b.oc("ngIf",0==n.captains.length))},directives:[l.m,l.l],pipes:[d.c,l.c],styles:[".card[_ngcontent-%COMP%]   .card-number[_ngcontent-%COMP%]{margin:2rem 2rem 0;background:#fff;border-radius:50%;width:150px;height:150px;font-size:3rem;font-weight:bolder;line-height:150px;align-self:center;overflow:hidden}@media (min-width:992px) and (max-width:1199px){.card[_ngcontent-%COMP%]   .card-number[_ngcontent-%COMP%]{width:130px;height:130px;line-height:130px}}@media (min-width:768px) and (max-width:991px){.card[_ngcontent-%COMP%]   .card-number[_ngcontent-%COMP%]{margin:1rem 2rem 0;width:90px;height:90px;font-weight:700;font-size:2.5rem;line-height:90px}}@media (min-width:576px) and (max-width:768px){.card[_ngcontent-%COMP%]   .card-number[_ngcontent-%COMP%]{margin:1rem 2rem 0;width:100px;height:100px;font-weight:700;font-size:2.5rem;line-height:100px}}.card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.8rem}@media (min-width:992px) and (max-width:1199px){.card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.5rem}}@media (min-width:576px) and (max-width:991px){.card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1rem}}.dashboard-table[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%], .dashboard-title-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{box-shadow:1px 1px 12px rgba(0,0,0,.1),-1px -1px 12px rgba(0,0,0,.1);border-radius:15px}.dashboard-table[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .dashboard-table[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .dashboard-title-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .dashboard-title-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:none;padding:.3rem}"]}),t})();var P=e("oOf3");function x(t,n){if(1&t){const t=b.Zb();b.Wb(0),b.Yb(1,"tr"),b.Yb(2,"th",19),b.Dc(3),b.Xb(),b.Yb(4,"th"),b.Yb(5,"img",20),b.fc("error",function(){return b.wc(t),b.hc().$implicit.image="../../../../../../../assets/default-avatar.jpg"}),b.Xb(),b.Xb(),b.Yb(6,"th",19),b.Dc(7),b.Xb(),b.Yb(8,"th",19),b.Dc(9),b.ic(10,"date"),b.Xb(),b.Yb(11,"th",21),b.Dc(12),b.ic(13,"date"),b.Xb(),b.Yb(14,"th",19),b.Dc(15),b.Xb(),b.Yb(16,"th",19),b.Dc(17),b.Xb(),b.Yb(18,"th",19),b.Dc(19),b.Xb(),b.Yb(20,"th",19),b.Dc(21),b.ic(22,"date"),b.Xb(),b.Yb(23,"th",22),b.Dc(24),b.Xb(),b.Xb(),b.Vb()}if(2&t){const t=b.hc().$implicit;b.Gb(3),b.Ec(t.orderID),b.Gb(2),b.pc("src",null==t?null:t.image,b.yc),b.qc("alt","",t.name," Image"),b.Gb(2),b.Ec(t.name?t.name:"-"),b.Gb(2),b.Ec(t.acceptedOrderDate?b.kc(10,11,1e3*t.acceptedOrderDate.timestamp,"yyyy-MM-dd"):"-"),b.Gb(3),b.Ec(t.record.length>0?b.kc(13,14,1e3*(null==t.record[0]||null==t.record[0].date?null:t.record[0].date.timestamp),"MMM d, y, h:mm:ss a"):"-"),b.Gb(3),b.Ec(t.payment?t.payment:"-"),b.Gb(2),b.Ec(t.fromBranch?t.fromBranch.brancheName:"-"),b.Gb(2),b.Ec(t.state?t.state:"-"),b.Gb(2),b.Ec(t.updateOrderDate?b.kc(22,17,1e3*t.updateOrderDate.timestamp,"yyyy-MM-dd"):"-"),b.Gb(3),b.Ec(t.note?t.note:"-")}}function M(t,n){if(1&t&&(b.Wb(0),b.Cc(1,x,25,20,"ng-container",18),b.Vb()),2&t){const t=n.index,e=b.hc(2);b.Gb(1),b.oc("ngIf",t<e.latestOrdersNumber)}}function f(t,n){if(1&t&&(b.Yb(0,"table",13),b.Yb(1,"thead"),b.Yb(2,"tr",14),b.Yb(3,"th",15),b.Dc(4,"#ID"),b.Xb(),b.Yb(5,"th",15),b.Dc(6),b.ic(7,"translate"),b.Xb(),b.Yb(8,"th",15),b.Dc(9),b.ic(10,"translate"),b.Xb(),b.Yb(11,"th",15),b.Dc(12),b.ic(13,"translate"),b.Xb(),b.Yb(14,"th",15),b.Dc(15),b.ic(16,"translate"),b.Xb(),b.Yb(17,"th",15),b.Dc(18),b.ic(19,"translate"),b.Xb(),b.Yb(20,"th",15),b.Dc(21),b.ic(22,"translate"),b.Xb(),b.Yb(23,"th",15),b.Dc(24),b.ic(25,"translate"),b.Xb(),b.Yb(26,"th",15),b.Dc(27),b.ic(28,"translate"),b.Xb(),b.Yb(29,"th",16),b.Dc(30),b.ic(31,"translate"),b.Xb(),b.Xb(),b.Xb(),b.Yb(32,"tbody"),b.Cc(33,M,2,1,"ng-container",17),b.ic(34,"paginate"),b.Xb(),b.Xb()),2&t){const t=b.hc();b.Gb(6),b.Ec(b.jc(7,10,"image")),b.Gb(3),b.Ec(b.jc(10,12,"name")),b.Gb(3),b.Ec(b.jc(13,14,"acceptedOrderDate")),b.Gb(3),b.Ec(b.jc(16,16,"order-date")),b.Gb(3),b.Ec(b.jc(19,18,"payment")),b.Gb(3),b.Ec(b.jc(22,20,"from-branch")),b.Gb(3),b.Ec(b.jc(25,22,"state")),b.Gb(3),b.Ec(b.jc(28,24,"updateOrderDate")),b.Gb(3),b.Ec(b.jc(31,26,"note")),b.Gb(3),b.oc("ngForOf",b.kc(34,28,t.orders.reverse(),t.config))}}function _(t,n){1&t&&(b.Yb(0,"div",23),b.Yb(1,"p",19),b.Dc(2),b.ic(3,"translate"),b.Xb(),b.Xb()),2&t&&(b.Gb(2),b.Fc("",b.jc(3,1,"active-orders-not-exists"),"."))}function Y(t,n){if(1&t){const t=b.Zb();b.Yb(0,"div",24),b.Yb(1,"pagination-controls",25),b.fc("pageChange",function(n){return b.wc(t),b.hc().pageChanged(n)}),b.ic(2,"translate"),b.ic(3,"translate"),b.ic(4,"translate"),b.Xb(),b.Xb()}2&t&&(b.Gb(1),b.pc("previousLabel",b.jc(2,3,"prev")),b.pc("nextLabel",b.jc(3,5,"next")),b.pc("screenReaderCurrentLabel",b.jc(4,7,"you-are-on-page")))}let X=(()=>{class t{constructor(t){this.dashboardService=t,this.destroy$=new s.a,this.orders=[],this.latestOrdersNumber=5}ngOnInit(){this.dashboardService.ordersDashboard().pipe(Object(g.a)(this.destroy$)).subscribe(t=>{t&&(this.countpendingOrders=t.Data[0].countpendingOrders,this.countOngoingOrders=t.Data[1].countOngoingOrders,this.ordersCount=t.Data[2].ordersCount,t.Data.map((t,n)=>{n>=3&&this.orders.push(t)}))},t=>console.log(t),()=>{this.orders.length>0&&(this.config={itemsPerPage:5,currentPage:1,totalItems:this.orders.length})})}pageChanged(t){this.config.currentPage=t}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return t.\u0275fac=function(n){return new(n||t)(b.Tb(h.a))},t.\u0275cmp=b.Nb({type:t,selectors:[["app-orders-dashboard"]],decls:32,vars:18,consts:[[1,"orders-dashboard","mb-4","mb-lg-5"],[1,"row"],[1,"col-12","col-sm-4"],[1,"card","w-75","mx-auto","bg-light-blue","border-0","text-center","mb-2"],[1,"card-number","text-light-blue"],[1,"text-white"],[1,"dashboard-table","mt-5"],[1,"card","border-0","text-white"],[1,"card-header","bg-light-blue","py-2"],[1,"card-body","table-responsive","bg-light-blue","text-center"],["class","table",4,"ngIf"],["class","text-center",4,"ngIf"],["class","mt-3 text-center",4,"ngIf"],[1,"table"],[2,"white-space","nowrap"],["scope","col"],["scope","col",2,"white-space","nowrap"],[4,"ngFor","ngForOf"],[4,"ngIf"],["scope","row"],[1,"img-thumbnail","img-custom",3,"src","alt","error"],["scope","row",2,"white-space","nowrap"],["scope","row",1,"td-custom","mr-1"],[1,"text-center"],[1,"mt-3","text-center"],["autoHide","true","maxSize","5","responsive","true","screenReaderPaginationLabel","Pagination","screenReaderPageLabel","page",1,"orders-pagination",3,"previousLabel","nextLabel","screenReaderCurrentLabel","pageChange"]],template:function(t,n){1&t&&(b.Yb(0,"div",0),b.Yb(1,"div",1),b.Yb(2,"div",2),b.Yb(3,"div",3),b.Yb(4,"div",4),b.Dc(5),b.Xb(),b.Yb(6,"span",5),b.Dc(7),b.ic(8,"translate"),b.Xb(),b.Xb(),b.Xb(),b.Yb(9,"div",2),b.Yb(10,"div",3),b.Yb(11,"div",4),b.Dc(12),b.Xb(),b.Yb(13,"span",5),b.Dc(14),b.ic(15,"translate"),b.Xb(),b.Xb(),b.Xb(),b.Yb(16,"div",2),b.Yb(17,"div",3),b.Yb(18,"div",4),b.Dc(19),b.Xb(),b.Yb(20,"span",5),b.Dc(21),b.ic(22,"translate"),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Yb(23,"div",6),b.Yb(24,"div",7),b.Yb(25,"div",8),b.Dc(26),b.ic(27,"translate"),b.Xb(),b.Yb(28,"div",9),b.Cc(29,f,35,31,"table",10),b.Cc(30,_,4,3,"div",11),b.Xb(),b.Cc(31,Y,5,9,"div",12),b.Xb(),b.Xb(),b.Xb()),2&t&&(b.Gb(5),b.Ec(n.countpendingOrders),b.Gb(2),b.Ec(b.jc(8,10,"pending")),b.Gb(5),b.Ec(n.countOngoingOrders),b.Gb(2),b.Ec(b.jc(15,12,"ongoing")),b.Gb(5),b.Ec(n.ordersCount),b.Gb(2),b.Ec(b.jc(22,14,"orders-count")),b.Gb(5),b.Fc(" ",b.jc(27,16,"active-orders")," "),b.Gb(3),b.oc("ngIf",0!=n.orders.length),b.Gb(1),b.oc("ngIf",0==n.orders.length),b.Gb(1),b.oc("ngIf",0!=n.orders.length))},directives:[l.m,l.l,P.c],pipes:[d.c,P.b,l.e],styles:[".card[_ngcontent-%COMP%]   .card-number[_ngcontent-%COMP%]{margin:2rem 2rem 0;background:#fff;border-radius:50%;width:150px;height:150px;font-size:3rem;font-weight:bolder;line-height:150px;align-self:center;overflow:hidden}@media (min-width:992px) and (max-width:1199px){.card[_ngcontent-%COMP%]   .card-number[_ngcontent-%COMP%]{width:130px;height:130px;line-height:130px}}@media (min-width:768px) and (max-width:991px){.card[_ngcontent-%COMP%]   .card-number[_ngcontent-%COMP%]{margin:1rem 2rem 0;width:90px;height:90px;font-weight:700;font-size:2.5rem;line-height:90px}}@media (min-width:576px) and (max-width:768px){.card[_ngcontent-%COMP%]   .card-number[_ngcontent-%COMP%]{margin:1rem 2rem 0;width:100px;height:100px;font-weight:700;font-size:2.5rem;line-height:100px}}.card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.8rem}@media (min-width:992px) and (max-width:1199px){.card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.5rem}}@media (min-width:576px) and (max-width:991px){.card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1rem}}.dashboard-table[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%], .dashboard-title-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{box-shadow:1px 1px 12px rgba(0,0,0,.1),-1px -1px 12px rgba(0,0,0,.1);border-radius:15px}.dashboard-table[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .dashboard-table[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .dashboard-title-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .dashboard-title-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:none;padding:.3rem}@media (min-width:768px) and (max-width:991px){.dashboard-table[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .dashboard-title-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:.9rem}}"]}),t})();function v(t,n){if(1&t&&(b.Yb(0,"tr"),b.Yb(1,"th",17),b.Dc(2),b.Xb(),b.Yb(3,"th",17),b.Dc(4),b.Xb(),b.Yb(5,"th",17),b.Dc(6),b.Xb(),b.Yb(7,"th",18),b.Dc(8),b.ic(9,"date"),b.Xb(),b.Yb(10,"th",17),b.Dc(11),b.Xb(),b.Yb(12,"th",19),b.Dc(13),b.Xb(),b.Xb()),2&t){const t=n.$implicit;b.Gb(2),b.Ec(t.id),b.Gb(2),b.Ec(t.userName?t.userName:"-"),b.Gb(2),b.Ec(t.status?t.status:"-"),b.Gb(2),b.Ec(t.startDate?b.kc(9,6,1e3*t.startDate.timestamp,"yyyy-MM-dd"):"-"),b.Gb(3),b.Ec(t.packageName?t.packageName:"-"),b.Gb(2),b.Ec(t.packageNote?t.packageNote:"-")}}function w(t,n){if(1&t&&(b.Yb(0,"table",13),b.Yb(1,"thead"),b.Yb(2,"tr"),b.Yb(3,"th",14),b.Dc(4,"#ID"),b.Xb(),b.Yb(5,"th",15),b.Dc(6),b.ic(7,"translate"),b.Xb(),b.Yb(8,"th",14),b.Dc(9),b.ic(10,"translate"),b.Xb(),b.Yb(11,"th",14),b.Dc(12),b.ic(13,"translate"),b.Xb(),b.Yb(14,"th",14),b.Dc(15),b.ic(16,"translate"),b.Xb(),b.Yb(17,"th",15),b.Dc(18),b.ic(19,"translate"),b.Xb(),b.Xb(),b.Xb(),b.Yb(20,"tbody"),b.Cc(21,v,14,9,"tr",16),b.ic(22,"paginate"),b.Xb(),b.Xb()),2&t){const t=b.hc();b.Gb(6),b.Ec(b.jc(7,6,"username")),b.Gb(3),b.Ec(b.jc(10,8,"status")),b.Gb(3),b.Ec(b.jc(13,10,"start-date")),b.Gb(3),b.Ec(b.jc(16,12,"package-name")),b.Gb(3),b.Ec(b.jc(19,14,"package-note")),b.Gb(3),b.oc("ngForOf",b.kc(22,16,t.contracts,t.config))}}function D(t,n){1&t&&(b.Yb(0,"div",20),b.Yb(1,"p",17),b.Dc(2),b.ic(3,"translate"),b.Xb(),b.Xb()),2&t&&(b.Gb(2),b.Fc("",b.jc(3,1,"requested-contracts-not-exists"),"."))}function G(t,n){if(1&t){const t=b.Zb();b.Yb(0,"div",21),b.Yb(1,"pagination-controls",22),b.fc("pageChange",function(n){return b.wc(t),b.hc().pageChanged(n)}),b.ic(2,"translate"),b.ic(3,"translate"),b.ic(4,"translate"),b.Xb(),b.Xb()}2&t&&(b.Gb(1),b.pc("previousLabel",b.jc(2,3,"prev")),b.pc("nextLabel",b.jc(3,5,"next")),b.pc("screenReaderCurrentLabel",b.jc(4,7,"you-are-on-page")))}let y=(()=>{class t{constructor(t,n){this.dashboardService=t,this.datePipe=n,this.destroy$=new s.a,this.contracts=[],this.latestcontractsNumber=5}ngOnInit(){console.log("config : ",this.config);let t=(new Date).getUTCFullYear().toString(),n=((new Date).getUTCMonth()+1).toString();console.log("Y-M : ",t,n),this.dashboardService.contractsDashboard(t,n).pipe(Object(g.a)(this.destroy$)).subscribe(t=>{t&&(this.countPendingContracts=t.Data[0].countPendingContracts,this.countDoneContracts=t.Data[1].countDoneContracts,this.NewUsersThisMonth=t.Data[2].NewUsersThisMonth,t.Data.map((t,n)=>{n>=3&&this.contracts.push(t)}))},t=>console.log(t),()=>{this.contracts.length>0&&(this.config={itemsPerPage:5,currentPage:1,totalItems:this.contracts.length})})}pageChanged(t){this.config.currentPage=t}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return t.\u0275fac=function(n){return new(n||t)(b.Tb(h.a),b.Tb(l.e))},t.\u0275cmp=b.Nb({type:t,selectors:[["app-contracts-dashboard"]],features:[b.Fb([l.e])],decls:32,vars:18,consts:[[1,"contracts-dashboard","mb-4","mb-lg-5"],[1,"row"],[1,"col-12","col-sm-4"],[1,"card","w-75","mx-auto","bg-light-blue","border-0","text-center","mb-2"],[1,"card-number","text-light-blue"],[1,"text-white"],[1,"dashboard-table","mt-5"],[1,"card","border-0","text-white"],[1,"card-header","bg-light-blue","py-2"],[1,"card-body","table-responsive","bg-light-blue","text-center"],["class","table",4,"ngIf"],["class","text-center",4,"ngIf"],["class","mt-3 text-center",4,"ngIf"],[1,"table"],["scope","col"],["scope","col",2,"white-space","nowrap"],[4,"ngFor","ngForOf"],["scope","row"],["scope","row",2,"white-space","nowrap"],["scope","row",1,"td-custom","mr-1"],[1,"text-center"],[1,"mt-3","text-center"],["autoHide","true","maxSize","5","responsive","true","screenReaderPaginationLabel","Pagination","screenReaderPageLabel","page",1,"contract-pagination",3,"previousLabel","nextLabel","screenReaderCurrentLabel","pageChange"]],template:function(t,n){1&t&&(b.Yb(0,"div",0),b.Yb(1,"div",1),b.Yb(2,"div",2),b.Yb(3,"div",3),b.Yb(4,"div",4),b.Dc(5),b.Xb(),b.Yb(6,"span",5),b.Dc(7),b.ic(8,"translate"),b.Xb(),b.Xb(),b.Xb(),b.Yb(9,"div",2),b.Yb(10,"div",3),b.Yb(11,"div",4),b.Dc(12),b.Xb(),b.Yb(13,"span",5),b.Dc(14),b.ic(15,"translate"),b.Xb(),b.Xb(),b.Xb(),b.Yb(16,"div",2),b.Yb(17,"div",3),b.Yb(18,"div",4),b.Dc(19),b.Xb(),b.Yb(20,"span",5),b.Dc(21),b.ic(22,"translate"),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Yb(23,"div",6),b.Yb(24,"div",7),b.Yb(25,"div",8),b.Dc(26),b.ic(27,"translate"),b.Xb(),b.Yb(28,"div",9),b.Cc(29,w,23,19,"table",10),b.Cc(30,D,4,3,"div",11),b.Xb(),b.Cc(31,G,5,9,"div",12),b.Xb(),b.Xb(),b.Xb()),2&t&&(b.Gb(5),b.Ec(n.countPendingContracts),b.Gb(2),b.Ec(b.jc(8,10,"pending")),b.Gb(5),b.Ec(n.countDoneContracts),b.Gb(2),b.Ec(b.jc(15,12,"done")),b.Gb(5),b.Ec(n.NewUsersThisMonth),b.Gb(2),b.Ec(b.jc(22,14,"users-this-month")),b.Gb(5),b.Fc(" ",b.jc(27,16,"requested-contracts")," "),b.Gb(3),b.oc("ngIf",0!=n.contracts.length),b.Gb(1),b.oc("ngIf",0==n.contracts.length),b.Gb(1),b.oc("ngIf",0!=n.contracts.length))},directives:[l.m,l.l,P.c],pipes:[d.c,P.b,l.e],styles:[".card[_ngcontent-%COMP%]   .card-number[_ngcontent-%COMP%]{margin:2rem 2rem 0;background:#fff;border-radius:50%;width:150px;height:150px;font-size:3rem;font-weight:bolder;line-height:150px;align-self:center;overflow:hidden}@media (min-width:992px) and (max-width:1199px){.card[_ngcontent-%COMP%]   .card-number[_ngcontent-%COMP%]{width:130px;height:130px;line-height:130px}}@media (min-width:768px) and (max-width:991px){.card[_ngcontent-%COMP%]   .card-number[_ngcontent-%COMP%]{margin:1rem 2rem 0;width:90px;height:90px;font-weight:700;font-size:2.5rem;line-height:90px}}@media (min-width:576px) and (max-width:768px){.card[_ngcontent-%COMP%]   .card-number[_ngcontent-%COMP%]{margin:1rem 2rem 0;width:100px;height:100px;font-weight:700;font-size:2.5rem;line-height:100px}}.card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.8rem}@media (min-width:992px) and (max-width:1199px){.card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.5rem}}@media (min-width:576px) and (max-width:991px){.card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1rem}}.dashboard-table[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%], .dashboard-title-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{box-shadow:1px 1px 12px rgba(0,0,0,.1),-1px -1px 12px rgba(0,0,0,.1);border-radius:15px}.dashboard-table[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .dashboard-table[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .dashboard-title-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .dashboard-title-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:none;padding:.3rem}"]}),t})();const E=[{path:"",component:(()=>{class t{constructor(t,n){this.layoutService=t,this.translate=n}ngOnInit(){}ngAfterViewInit(){this.layoutService.layoutState.pipe(Object(r.a)(350)).subscribe(t=>{document.getElementById(t).click()})}}return t.\u0275fac=function(n){return new(n||t)(b.Tb(i.a),b.Tb(d.d))},t.\u0275cmp=b.Nb({type:t,selectors:[["app-dashboard"]],features:[b.Fb([o.a])],decls:29,vars:12,consts:[[1,"dashboard"],[1,"container-fluid"],["id","header",1,"font-weight-bold","pt-3","mb-5"],[1,"dashboard-titles","mb-4","mb-lg-5"],[1,"nav","nav-tabs"],[1,"nav-item","mx-auto","bg-grey"],["id","captain","data-toggle","tab","href","#captains-dashboard",1,"nav-link","text-light-blue","active"],["id","order","data-toggle","tab","href","#orders-dashboard",1,"nav-link","text-light-blue"],["id","contract","data-toggle","tab","href","#contracts-dashboard",1,"nav-link","text-light-blue"],[1,"dashboard-title-content","mb-5","tab-content"],["id","captains-dashboard",1,"tab-pane","active"],["id","orders-dashboard",1,"tab-pane","fade"],["id","contracts-dashboard",1,"tab-pane","fade"]],template:function(t,n){1&t&&(b.Yb(0,"div",0),b.Yb(1,"div",1),b.Yb(2,"h1",2),b.Dc(3),b.ic(4,"translate"),b.Xb(),b.Yb(5,"div",3),b.Yb(6,"ul",4),b.Yb(7,"li",5),b.Yb(8,"a",6),b.Dc(9),b.ic(10,"translate"),b.Xb(),b.Xb(),b.Yb(11,"li",5),b.Yb(12,"a",7),b.Dc(13),b.ic(14,"translate"),b.Xb(),b.Xb(),b.Yb(15,"li",5),b.Yb(16,"a",8),b.Dc(17),b.ic(18,"translate"),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Yb(19,"div",9),b.Yb(20,"div",10),b.Ub(21,"br"),b.Ub(22,"app-captains-dashboard"),b.Xb(),b.Yb(23,"div",11),b.Ub(24,"br"),b.Ub(25,"app-orders-dashboard"),b.Xb(),b.Yb(26,"div",12),b.Ub(27,"br"),b.Ub(28,"app-contracts-dashboard"),b.Xb(),b.Xb(),b.Xb(),b.Xb()),2&t&&(b.Gb(3),b.Ec(b.jc(4,4,"dashboard")),b.Gb(6),b.Ec(b.jc(10,6,"captains")),b.Gb(4),b.Ec(b.jc(14,8,"orders")),b.Gb(4),b.Ec(b.jc(18,10,"contracts")))},directives:[O,X,y],pipes:[d.c],styles:[".dashboard[_ngcontent-%COMP%]   #header[_ngcontent-%COMP%]{color:#21a5b8}@media (min-width:992px) and (max-width:1199px){.dashboard[_ngcontent-%COMP%]   #header[_ngcontent-%COMP%]{font-size:2.2rem}}@media (max-width:991px){.dashboard[_ngcontent-%COMP%]   #header[_ngcontent-%COMP%]{font-size:2rem}}.dashboard[_ngcontent-%COMP%]   .dashboard-titles[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]{border:none}.dashboard[_ngcontent-%COMP%]   .dashboard-titles[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{width:25%;text-align:center;align-self:center}@media (max-width:575px){.dashboard[_ngcontent-%COMP%]   .dashboard-titles[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{width:calc(100% / 3.1)}}.dashboard[_ngcontent-%COMP%]   .dashboard-titles[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{font-size:1.8rem;background-color:#dbdbdb;border:none}@media (min-width:992px) and (max-width:1199px){.dashboard[_ngcontent-%COMP%]   .dashboard-titles[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{font-size:1.5rem}}@media (min-width:576px) and (max-width:991px){.dashboard[_ngcontent-%COMP%]   .dashboard-titles[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{font-size:1.2rem}}@media (max-width:575px){.dashboard[_ngcontent-%COMP%]   .dashboard-titles[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{font-size:.8rem}}.dashboard[_ngcontent-%COMP%]   .dashboard-titles[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .dashboard[_ngcontent-%COMP%]   .dashboard-titles[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover{color:#fff;background-color:#21a5b8}"]}),t})()},{path:"dashboard",redirectTo:"",pathMatch:"full"}];let j=(()=>{class t{}return t.\u0275mod=b.Rb({type:t}),t.\u0275inj=b.Qb({factory:function(n){return new(n||t)},imports:[[c.e.forChild(E)],c.e]}),t})(),I=(()=>{class t{}return t.\u0275mod=b.Rb({type:t}),t.\u0275inj=b.Qb({factory:function(n){return new(n||t)},imports:[[a.a,j]]}),t})()}}]);