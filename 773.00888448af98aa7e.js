"use strict";(self.webpackChunkperfume_template=self.webpackChunkperfume_template||[]).push([[773],{8773:(Q,d,s)=>{s.r(d),s.d(d,{ProductsModule:()=>j});var r=s(6814),u=s(1303),a=s(3058),t=s(5879),f=s(1911),l=s(617);function h(e,c){if(1&e){const o=t.EpF();t.TgZ(0,"mat-icon",4),t.NdJ("click",function(){t.CHM(o);const n=t.oxw();return t.KtG(n.stepBack())}),t._uU(1,"chevron_left"),t.qZA()}}function Z(e,c){if(1&e&&(t.TgZ(0,"div",5)(1,"span",6),t._uU(2),t.qZA()()),2&e){const o=c.$implicit;t.xp6(2),t.hij(" ",o," ")}}let _=(()=>{class e{constructor(){this.posts=[],this.slice=[1,2,3,4,5],this.currentPage=0,this.totalPages=0}stepForward(){this.slice.push(this.slice[this.slice.length-1]+1),this.slice.shift()}stepBack(){this.slice.unshift(this.slice[0]-1),this.slice.pop()}static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["cmp-cmm-paginator"]],inputs:{posts:"posts"},decls:7,vars:4,consts:[[1,"row","justify-content-end","align-items-center","flex-row"],[1,"m-0",2,"width","fit-content"],["class","p-0 cursor-pointer",3,"click",4,"ngIf"],["class","p-2 d-flex justify-content-center align-items-center mx-1 rounded","style","background: #DFDDDE;width: 30px;height: 30px;",4,"ngFor","ngForOf"],[1,"p-0","cursor-pointer",3,"click"],[1,"p-2","d-flex","justify-content-center","align-items-center","mx-1","rounded",2,"background","#DFDDDE","width","30px","height","30px"],[1,"m-0"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0)(1,"p",1),t._uU(2),t.qZA(),t.YNc(3,h,2,0,"mat-icon",2),t.YNc(4,Z,3,1,"div",3),t.TgZ(5,"mat-icon",4),t.NdJ("click",function(){return n.stepForward()}),t._uU(6,"chevron_right"),t.qZA()()),2&i&&(t.xp6(2),t.AsE(" ",n.currentPage," DE ",n.totalPages," P\xc1GINAS "),t.xp6(1),t.Q6J("ngIf",n.slice[0]>1),t.xp6(1),t.Q6J("ngForOf",n.slice))},dependencies:[l.Hw,r.sg,r.O5]})}return e})();function x(e,c){if(1&e&&(t.TgZ(0,"div",3)(1,"div",4),t._UZ(2,"img",5),t.qZA(),t.TgZ(3,"div",6)(4,"strong",7),t._uU(5),t.qZA(),t.TgZ(6,"span"),t._uU(7),t.qZA()()()),2&e){const o=c.$implicit;t.Q6J("routerLink","detail"),t.xp6(2),t.Q6J("src",o.img,t.LSH),t.xp6(3),t.Oqu(o.productName),t.xp6(2),t.Oqu(o.brandName)}}function v(e,c){1&e&&t._UZ(0,"cmp-cmm-paginator")}let g=(()=>{class e{constructor(){this.products=[],this.showPaginator=!0}static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["cmp-products-grid"]],inputs:{products:"products",showPaginator:"showPaginator"},decls:3,vars:2,consts:[[1,"row"],["class","col-4 mb-4",3,"routerLink",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"col-4","mb-4",3,"routerLink"],[1,"w-100","cursor-pointer",2,"aspect-ratio","9/12"],["alt","",1,"h-100","w-100",3,"src"],[1,"d-flex","flex-column","text-center","mt-4"],[2,"font-weight","700"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0),t.YNc(1,x,8,4,"div",1),t.YNc(2,v,1,0,"cmp-cmm-paginator",2),t.qZA()),2&i&&(t.xp6(1),t.Q6J("ngForOf",n.products),t.xp6(1),t.Q6J("ngIf",n.showPaginator))},dependencies:[r.sg,r.O5,_,u.rH]})}return e})(),w=(()=>{class e{constructor(){this.templateData=a.O}static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["pag-products-layout"]],decls:7,vars:3,consts:[[1,"row","g-0","w-100"],[1,"col-12","p-0"],[1,"w-100","h-100",2,"aspect-ratio","16/9",3,"src"],[1,"my-3","px-3",3,"products"],[1,"w-100","h-100",2,"aspect-ratio","16/6",3,"src"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"img",2),t.qZA(),t._UZ(3,"cmp-products-grid",3)(4,"cmp-core-brands"),t.TgZ(5,"div",1),t._UZ(6,"img",4),t.qZA()()),2&i&&(t.xp6(2),t.Q6J("src",n.templateData.productsModule.mainAd,t.LSH),t.xp6(1),t.Q6J("products",n.templateData.productsModule.products.items),t.xp6(3),t.Q6J("src",n.templateData.productsModule.lowerAd,t.LSH))},dependencies:[f.S,g]})}return e})();var T=s(6385),C=s(2296);const y=function(e,c){return{"border-radius":e,height:c}},q=["*"];let A=(()=>{class e{constructor(){this.outlined=!1,this.config={outlined:!1,customBorderRadius:"",customHeight:"45px"}}static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["cmp-cmm-new-button"]],inputs:{outlined:"outlined",config:"config"},ngContentSelectors:q,decls:2,vars:5,consts:[["mat-button","",1,"w-100","m-0","p-3","fs-12","cmm-txt-thin-bold","text-white","cursor-pointer",3,"ngClass","ngStyle"]],template:function(i,n){1&i&&(t.F$t(),t.TgZ(0,"button",0),t.Hsn(1),t.qZA()),2&i&&t.Q6J("ngClass",n.outlined?"btn-project-primary-outline":"cmm-bg-project-primary")("ngStyle",t.WLB(2,y,n.config.customBorderRadius,n.config.customHeight))},dependencies:[C.lW,r.mk,r.PC]})}return e})();function P(e,c){if(1&e){const o=t.EpF();t.TgZ(0,"div",10)(1,"div",11)(2,"div",12),t._UZ(3,"img",13),t.TgZ(4,"div",14)(5,"h4",15),t._uU(6),t.qZA(),t.TgZ(7,"span",16),t._uU(8),t.qZA(),t.TgZ(9,"span",16),t._uU(10),t.qZA()()(),t.TgZ(11,"div",17)(12,"div",18)(13,"mat-icon",19),t.NdJ("click",function(){const p=t.CHM(o).$implicit,m=t.oxw();return t.KtG(m.removeProductUnit(p))}),t._uU(14,"remove"),t.qZA(),t.TgZ(15,"span",20),t._uU(16),t.qZA(),t.TgZ(17,"mat-icon",19),t.NdJ("click",function(){const p=t.CHM(o).$implicit,m=t.oxw();return t.KtG(m.addProductUnit(p))}),t._uU(18,"add"),t.qZA()(),t.TgZ(19,"div",5),t._uU(20),t.qZA(),t.TgZ(21,"mat-icon",21),t.NdJ("click",function(){const p=t.CHM(o).$implicit,m=t.oxw();return t.KtG(m.removeFromKart(p))}),t._uU(22,"delete"),t.qZA()()()()}if(2&e){const o=c.$implicit;t.xp6(3),t.Q6J("src",o.image,t.LSH),t.xp6(3),t.Oqu(o.name),t.xp6(2),t.Oqu("by "+o.brandName),t.xp6(2),t.Oqu("sku: "+o.sku),t.xp6(6),t.Oqu(o.quantity),t.xp6(4),t.hij(" ",o.price+" "+o.currency," ")}}let U=(()=>{class e{constructor(){this.products=[],this.preBill=[]}ngOnInit(){console.log(this.products)}addProductUnit(o){o.quantity+=1}removeProductUnit(o){o.quantity-=1,o.quantity<1&&(o.quantity=1)}removeFromKart(o){this.products.splice(this.products.indexOf(o),1)}static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["cmp-cmm-products-kart"]],inputs:{products:"products",preBill:"preBill"},decls:34,vars:6,consts:[[1,"row","g-0","flex-column","kartBorder"],[1,"col-12","mb-5","p-3",2,"background-color","#F7F7F7"],[1,"cmm-txt-uppercase","text-center","m-0"],["class","col-12 mb-3",4,"ngFor","ngForOf"],[1,"rounded","border","p-4","col-12"],[1,"cmm-txt-thin-bold","cmm-txt-uppercase"],[1,"d-flex","justify-content-between"],[1,"row","g-0","justify-content-end","mt-5",2,"gap","2rem"],[1,"w-fit",3,"outlined"],[1,"w-fit"],[1,"col-12","mb-3"],[1,"border","rounded","w-100","d-flex","flex-column","flex-md-row","justify-content-between","align-items-center","px-4","py-3"],[1,"d-flex","justify-content-between",2,"gap","1rem"],[2,"max-width","100px","max-height","80px",3,"src"],[1,"d-flex","flex-column","cmm-txt-uppercase","justify-content-center"],[1,"cmm-txt-thin-bold","fs-16"],[1,"fs-12"],[1,"d-flex","align-items-center","gap-2","mt-3","mt-md-0"],[1,"border","px-3","py-2","rounded","d-flex","justify-content-between","fs-12",2,"min-width","120px"],[1,"fs-16","cursor-pointer",2,"width","16px !important","height","16px !important",3,"click"],[1,"cmm-txt-thin-bold"],[1,"cursor-pointer",3,"click"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),t._uU(3,"agregado al carrito"),t.qZA()(),t.YNc(4,P,23,6,"div",3),t.TgZ(5,"div",4)(6,"h4",5),t._uU(7,"total de la orden"),t.qZA(),t._UZ(8,"mat-divider"),t.TgZ(9,"div",6)(10,"span"),t._uU(11,"Precio"),t.qZA(),t.TgZ(12,"span"),t._uU(13),t.qZA()(),t.TgZ(14,"div",6)(15,"span"),t._uU(16,"Delivery"),t.qZA(),t.TgZ(17,"span"),t._uU(18),t.qZA()(),t.TgZ(19,"div",6)(20,"span"),t._uU(21,"C\xf3digo de DSCTO"),t.qZA(),t.TgZ(22,"span"),t._uU(23),t.qZA()(),t.TgZ(24,"div",6)(25,"span"),t._uU(26,"Total"),t.qZA(),t.TgZ(27,"span"),t._uU(28),t.qZA()()(),t.TgZ(29,"div",7)(30,"cmp-cmm-new-button",8),t._uU(31," REGRESAR "),t.qZA(),t.TgZ(32,"cmp-cmm-new-button",9),t._uU(33," PAGAR "),t.qZA()()()),2&i&&(t.xp6(4),t.Q6J("ngForOf",n.products),t.xp6(9),t.Oqu(n.preBill.basePrice+" "+n.preBill.currency),t.xp6(5),t.Oqu(n.preBill.delivery+" "+n.preBill.currency),t.xp6(5),t.Oqu(n.preBill.discount),t.xp6(5),t.Oqu(n.preBill.totalPrice+" "+n.preBill.currency),t.xp6(2),t.Q6J("outlined",!0))},dependencies:[T.d,l.Hw,r.sg,A],styles:[".kartBorder[_ngcontent-%COMP%]{padding-bottom:150px!important}"]})}return e})(),b=(()=>{class e{constructor(){this.products=a.O.productsModule.productsOverview.productsInkart,this.preBill=a.O.productsModule.productsOverview.preBill}static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["pag-products-overview"]],decls:4,vars:2,consts:[[1,"row","g-0","w-100"],[1,"col-12","mt-3"],[3,"products","preBill"],[1,"col-12"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"cmp-cmm-products-kart",2),t.qZA(),t._UZ(3,"div",3),t.qZA()),2&i&&(t.xp6(2),t.Q6J("products",n.products)("preBill",n.preBill))},dependencies:[U]})}return e})();var O=s(8276);function F(e,c){1&e&&t._UZ(0,"img",25),2&e&&t.Q6J("src",c.$implicit,t.LSH)}function B(e,c){if(1&e&&(t.TgZ(0,"div",26)(1,"span"),t._uU(2),t.qZA()()),2&e){const o=c.$implicit;t.Q6J("ngClass",c.first?"rounded-start ps-3 pe-5":c.last?"rounded-end ps-5 pe-3":"flex-grow-1"),t.xp6(2),t.Oqu(o)}}const J=[{path:"",component:w},{path:"overview",component:b},{path:"detail",component:(()=>{class e{constructor(){this.images=a.O.productsModule.productDetail.images,this.productInfo=a.O.productsModule.productDetail.productInfo,this.aditionalProducts=a.O.productsModule.products.items.slice(0,3)}static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["pag-products-detail"]],decls:40,vars:11,consts:[[1,"col-12","my-5"],[1,"row","mx-auto","w-100","justify-content-between"],[1,"col-12","col-md-6","h-100","pe-md-4"],["class","square_Image cusor-pointer",3,"src",4,"ngFor","ngForOf"],[1,"col-12","col-md-6","mt-5","mt-md-0","d-flex","flex-column","align-items-center","justify-content-center","ps-md-5"],[1,"d-flex","flex-column","align-items-center"],[1,"cmm-txt-uppercase","cmm-txt-thin-bold","fs-30"],[1,"cmm-txt-uppercase","mt-2"],[1,"cmm-txt-uppercase","mt-4"],[1,"w-100","d-flex","justify-content-between","mt-5"],["class","border p-2 text-center",3,"ngClass",4,"ngFor","ngForOf"],[1,"w-100","mt-5"],[1,"d-flex","align-items-center","justify-content-between"],["src","assets/images/iconos/perfume.svg","alt","","width","50","height","50"],[1,"cmm-txt-uppercase","text-center","flex-grow-1"],[1,"cmm-txt-uppercase","text-justify","px-3","m-0"],[1,"d-flex","align-items-center","justify-content-between","mt-5"],["src","assets/images/iconos/van.svg","alt","","width","50","height","50"],[1,"col-12"],["width","100%","height","500px","src","https://www.youtube.com/embed/oH7axwK5YTY?si=YmMlhWHKPox2f2yI"],[1,"col-12","mt-5"],[1,"my-3","px-3",3,"products","showPaginator"],[1,"w-100","py-2","my-5",2,"background-color","black"],[1,"cmm-txt-uppercase","text-center","m-0","text-white"],[1,"mt-5","w-50","d-flex","mx-auto","mb-5"],[1,"square_Image","cusor-pointer",3,"src"],[1,"border","p-2","text-center",3,"ngClass"]],template:function(i,n){1&i&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2),t.YNc(3,F,1,1,"img",3),t.qZA(),t.TgZ(4,"div",4)(5,"div",5)(6,"h4",6),t._uU(7),t.qZA(),t.TgZ(8,"span",7),t._uU(9),t.qZA(),t.TgZ(10,"p",8),t._uU(11),t.qZA()(),t.TgZ(12,"div",9),t.YNc(13,B,3,2,"div",10),t.qZA(),t.TgZ(14,"cmp-core-button",11),t._uU(15," Agregar al carrito "),t.qZA(),t.TgZ(16,"div",11)(17,"span",12),t._UZ(18,"img",13),t.TgZ(19,"h4",14),t._uU(20),t.qZA()(),t.TgZ(21,"p",15),t._uU(22),t.qZA()(),t.TgZ(23,"span",16),t._UZ(24,"img",17),t.TgZ(25,"h4",14),t._uU(26,"env\xedos a nivel nacional"),t.qZA()()()()(),t.TgZ(27,"section",18),t._UZ(28,"iframe",19),t.qZA(),t.TgZ(29,"section",20)(30,"h4",14),t._uU(31,"Tambi\xe9n podr\xeda interesarte"),t.qZA(),t._UZ(32,"cmp-products-grid",21),t.qZA(),t.TgZ(33,"section",18)(34,"div",22)(35,"h4",23),t._uU(36,"regalos para ocasiones especiales"),t.qZA()(),t._UZ(37,"cmp-products-grid",21),t.TgZ(38,"cmp-core-button",24),t._uU(39," Agregar al carrito "),t.qZA()()),2&i&&(t.xp6(3),t.Q6J("ngForOf",n.images),t.xp6(4),t.Oqu(n.productInfo.name),t.xp6(2),t.Oqu("by "+n.productInfo.brandName),t.xp6(2),t.Oqu(n.productInfo.description),t.xp6(2),t.Q6J("ngForOf",n.productInfo.sizes),t.xp6(7),t.Oqu(n.productInfo.aditional.title),t.xp6(2),t.Oqu(n.productInfo.aditional.description),t.xp6(10),t.Q6J("products",n.aditionalProducts)("showPaginator",!1),t.xp6(5),t.Q6J("products",n.aditionalProducts)("showPaginator",!1))},dependencies:[r.mk,r.sg,O.c,g],styles:[".square_Image[_ngcontent-%COMP%]{width:50%;aspect-ratio:9/16;max-height:300px}.square_Image[_ngcontent-%COMP%]:hover{scale:1.05;box-shadow:0 0 5px 1px #0000001f!important}"]})}return e})()}];let k=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=t.oAB({type:e});static#o=this.\u0275inj=t.cJS({imports:[u.Bz.forChild(J),u.Bz]})}return e})();var D=s(8081),I=s(745);let j=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=t.oAB({type:e});static#o=this.\u0275inj=t.cJS({imports:[r.ez,I.n,D.I,k]})}return e})()}}]);