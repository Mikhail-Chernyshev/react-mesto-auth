(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(16),i=n.n(o),c=(n(15),n(5)),s=n(3),l=n(0),u=n(6);var p=function(e){var t=e.loggedIn,n=e.email,a=e.onClick,o=Object(l.j)();return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header__logo"}),r.a.createElement("div",{className:"header__container"},t&&r.a.createElement("div",{className:"header__info"},r.a.createElement("p",{className:"header__email"},n),r.a.createElement(u.b,{to:"/signin",onClick:a,className:"header__button"},"\u0412\u044b\u0439\u0442\u0438")),"/signin"===o.pathname&&r.a.createElement(u.b,{to:"/signup",className:"header__button"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),"/signup"===o.pathname&&r.a.createElement(u.b,{to:"/signin",className:"header__button"},"\u0412\u043e\u0439\u0442\u0438")))},m=n(17),d=n.n(m),_=n(18),f=n.n(_),h=n(19),g=n.n(h),v=n(20),E=n.n(v),b=r.a.createContext();var A=function(e){var t=e.card,n=e.onCardClick,a=e.onCardLike,o=e.onCardDeleteClick,i=r.a.useContext(b),c=t.owner===i._id,s="element__trash ".concat(c?"element__trash_active":"element__trash"),l=t.likes.some(function(e){return e===i._id}),u="element__like ".concat(l?"element__like_active":"element__like");return r.a.createElement("div",{className:"element"},r.a.createElement("button",{className:s,type:"button",onClick:function(e){e.preventDefault(),o(t._id)}},r.a.createElement("img",{src:g.a,alt:"\u043a\u043d\u043e\u043f\u043a\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u0432\u0435\u0440\u0445",className:"element__trasher-up"}),r.a.createElement("img",{src:E.a,alt:"\u043a\u043d\u043e\u043f\u043a\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u043d\u0438\u0437",className:"element__trasher-down"})),r.a.createElement("img",{alt:t.name,className:"element__image",src:t.link,onClick:function(){n(t)}}),r.a.createElement("div",{className:"element__atribute"},r.a.createElement("h3",{className:"element__title"},t.name),r.a.createElement("div",{className:"element__like-container"},r.a.createElement("button",{type:"button",className:u,onClick:function(){a(t)}}),r.a.createElement("p",{className:"element__score"},t.likes.length))))};var C=function(e){var t=e.onEditAvatar,n=e.onEditProfile,a=e.onAddPlace,o=e.onCardClick,i=e.cards,c=e.onCardLike,s=e.onCardDelete,l=e.onDeleteClick,u=e.onCardDeleteClick,p=r.a.useContext(b);return r.a.createElement("main",{className:"main"},r.a.createElement("section",{className:"profile"},r.a.createElement("img",{src:p.avatar,alt:"\u0430\u0432\u0430\u0442\u0430\u0440",className:"profile__avatar"}),r.a.createElement("div",{className:"profile__button-edit",onClick:t}),r.a.createElement("h1",{className:"profile__name"},p.name),r.a.createElement("p",{className:"profile__rank"},p.about),r.a.createElement("button",{type:"button",name:"edit",className:"profile__button-ed-self",onClick:n},r.a.createElement("img",{src:d.a,alt:"\u043a\u043d\u043e\u043f\u043a\u0430",className:"profile__button-ed-pic"})),r.a.createElement("button",{type:"button",name:"add",className:"profile__button-add-self",onClick:a},r.a.createElement("img",{src:f.a,alt:"\u043a\u043d\u043e\u043f\u043a\u0430",className:"profile__button-add-pic"}))),r.a.createElement("section",{className:"elements"},i.map(function(e){return r.a.createElement(A,{key:e._id,card:e,onCardClick:o,onCardLike:c,onCardDelete:s,onDeleteClick:l,onCardDeleteClick:u})})))};var k=function(){var e=(new Date).getFullYear();return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"footer__copyright"},"\xa9 ",e," Mesto Russia"))};var O=function(e){var t=e.card,n=e.onClose,o=e.isPopupOpened;return Object(a.useEffect)(function(){function e(e){console.log(t),"Escape"===e.key&&n()}if(o)return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}},[o]),r.a.createElement("div",{className:"popup popup-bigpic ".concat(t&&"popup_opened"),onClick:function(e){e.target===e.currentTarget&&n(e)}},r.a.createElement("div",{className:"popup-bigpic__content"},o&&r.a.createElement("div",null,r.a.createElement("img",{src:t.link,alt:t.name,className:"popup-bigpic__pic"}),r.a.createElement("p",{className:"popup-bigpic__title"},t.name)),r.a.createElement("button",{className:"popup-bigpic__close popup__close",type:"button",onClick:n})))},N=n(7),j=n(8),y=new(function(){function e(t){var n=t.host,a=t.token;Object(N.a)(this,e),this._host=n,this._token=a}return Object(j.a)(e,[{key:"_getJsonOnError",value:function(e){if(e.ok)return e.json();throw new Error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445")}},{key:"_getHeaders",value:function(){return{Authorization:localStorage.getItem("jwt"),"Content-Type":"application/json"}}},{key:"getCards",value:function(){var e=this;return fetch("".concat(this._host,"/cards"),{headers:this._getHeaders()}).then(function(t){return e._getJsonOnError(t)})}},{key:"addCard",value:function(e){var t=this;return fetch("".concat(this._host,"/cards"),{method:"POST",headers:this._getHeaders(),body:JSON.stringify({name:e.name,link:e.link})}).then(function(e){return t._getJsonOnError(e)})}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._host,"/cards/").concat(e),{method:"DELETE",headers:this._getHeaders()}).then(function(e){return t._getJsonOnError(e)})}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._host,"/users/me"),{method:"GET",headers:this._getHeaders()}).then(function(t){return e._getJsonOnError(t)})}},{key:"editUserInfo",value:function(e){var t=this;return fetch("".concat(this._host,"/users/me"),{method:"PATCH",headers:this._getHeaders(),body:JSON.stringify({name:e.name,about:e.about})}).then(function(e){return t._getJsonOnError(e)})}},{key:"editAvatar",value:function(e){var t=this;return fetch("".concat(this._host,"/users/me/avatar"),{method:"PATCH",headers:this._getHeaders(),body:JSON.stringify({avatar:e.link})}).then(function(e){return t._getJsonOnError(e)})}},{key:"setLikeCard",value:function(e){var t=this;return fetch("".concat(this._host,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._getHeaders()}).then(function(e){return t._getJsonOnError(e)})}},{key:"removeLikeCard",value:function(e){var t=this;return fetch("".concat(this._host,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._getHeaders()}).then(function(e){return t._getJsonOnError(e)})}}]),e}())({host:"http://placeMikhail.students.nomoredomains.icu"});var S=function(e){var t=e.name,n=e.isOpen,o=e.title,i=e.onSubmit,c=e.children,s=e.onClose,l=e.buttonText,u=e.isFormValid;return Object(a.useEffect)(function(){function e(e){"Escape"===e.key&&s()}if(n)return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}},[n]),r.a.createElement("div",{className:"popup popup-".concat(t," ").concat(n&&"popup_opened"),onClick:function(e){e.target===e.currentTarget&&s(e)}},r.a.createElement("div",{className:"popup__content"},r.a.createElement("button",{className:"popup__close popup-".concat(t,"__close "),type:"button",onClick:s}),r.a.createElement("h2",{className:"popup__title"},o),r.a.createElement("form",{noValidate:!0,action:"#",className:"popup__data popup-".concat(t,"__data"),name:t,onSubmit:i},c,r.a.createElement("button",{type:"submit ",className:"popup__delivery",disabled:!u},l))))},w=n(4),L=n(11),x=function(){var e=Object(a.useState)({}),t=Object(s.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)({}),i=Object(s.a)(o,2),c=i[0],l=i[1],u=Object(a.useState)(!1),p=Object(s.a)(u,2),m=p[0],d=p[1],_=Object(a.useCallback)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];r(e),l(t),d(n)},[r,l,d]);return{values:n,errors:c,handleChange:function(e){var t=e.target,a=t.name,o=t.value;r(Object(L.a)({},n,Object(w.a)({},a,o))),l(Object(L.a)({},c,Object(w.a)({},a,e.target.validationMessage))),d(e.target.closest(".popup__data").checkValidity())},isFormValid:m,resetForm:_}};var F=function(e){var t=e.isOpen,n=e.onUpdateUser,a=e.isLoading,o=e.onClose,i=r.a.useContext(b),c=x(),s=c.values,l=c.errors,u=c.handleChange,p=c.isFormValid,m=c.resetForm;return r.a.useEffect(function(){i?m(i):m()},[i,m,t]),r.a.createElement(S,{isFormValid:p,isLoading:a,onClose:o,name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:t,onSubmit:function(e){e.preventDefault(),n({name:s.name,about:s.about})},buttonText:a?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"},r.a.createElement("div",{className:"popup__container"},r.a.createElement("input",{type:"text",id:"name-input",minLength:"2 ",maxLength:"40 ",name:"name",className:"popup__input popup__input_data_name",required:!0,value:s.name||"",onChange:u,placeholder:"\u0418\u043c\u044f"}),l.name&&r.a.createElement("span",{className:"popup__input-error popup__input-error_active name-input-error"},l.name)),r.a.createElement("div",{className:"popup__container"},r.a.createElement("input",{type:"text",id:"rank-input",minLength:"2",maxLength:"200 ",name:"about",className:"popup__input popup__input_data_rank",required:"required ",value:s.about||"",onChange:u,placeholder:"\u041e \u0441\u0435\u0431\u0435 "}),l.rank&&r.a.createElement("span",{className:"popup__input-error popup__input-error_active rank-input-error"},l.rank)))};var I=function(e){var t=x(),n=t.values,a=t.errors,o=t.handleChange,i=t.isFormValid,c=t.resetForm,s=t.isPopupOpened;return r.a.useEffect(function(){c()},[c,e.isOpen]),r.a.createElement(S,{isPopupOpened:s,isFormValid:i,onClose:e.onClose,isOpen:e.isOpen,onSubmit:function(t){t.preventDefault(),e.onUpdateAvatar({link:n.link})},name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:e.isLoading?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c"},r.a.createElement("div",{className:"popup__container popup-avatar__container"},r.a.createElement("input",{type:"url",id:"avatar-name-input",minLength:"2 ",maxLength:"200",name:"link",value:n.link||"",className:"popup__input popup-avatar__input popup-avatar__input_data_name",required:"required",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443",onChange:o}),a.link&&r.a.createElement("span",{className:"popup__input-error popup__input-error_active -name-input-error"},a.link)))};var U=function(e){var t=e.onClose,n=e.isOpen,a=e.isLoading,o=e.onAddPlace,i=x(),c=i.values,s=i.errors,l=i.handleChange,u=i.isFormValid,p=i.resetForm;return r.a.useEffect(function(){p()},[p,n]),r.a.createElement(S,{isFormValid:u,onClose:t,isOpen:n,onSubmit:function(e){e.preventDefault(),o({name:c.name,link:c.link})},name:"post",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonText:a?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}," ",r.a.createElement("div",{className:"popup__container"},r.a.createElement("input",{type:"text ",id:"post-name-input",minLength:"2 ",maxLength:"30 ",name:"name",onChange:l,value:c.name||"",className:"popup__input popup-post__input popup-post__input_data_name",required:"required ",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 "}),s.name&&r.a.createElement("span",{className:"popup__input-error popup__input-error_active post-name-input-error"},s.name)),r.a.createElement("div",{className:"popup__container"},r.a.createElement("input",{type:"url",id:"post-url-input",name:"link",onChange:l,value:c.link||"",className:"popup-post__input popup__input popup-post__input_data_link",required:"required ",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443 "}),s.link&&r.a.createElement("span",{className:"popup__input-error popup__input-error_active post-url-input-error"},s.link)))};var T=function(e){var t=e.onClose,n=e.isOpen,a=e.isLoading,o=e.onSubmit,i=e.cardId,c=x().isFormValid;return r.a.createElement(S,{isFormValid:!c,isLoading:a,onClose:t,onSubmit:function(e){e.preventDefault(),o(i)},name:"delete",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",isOpen:n,buttonText:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})};var D=function(e){var t=x(),n=t.values,a=t.errors,o=t.handleChange,i=t.isFormValid,c=t.resetForm;return r.a.useEffect(function(){c()},[c]),r.a.createElement("div",{className:"login"},r.a.createElement("h2",{className:"login__title"},"\u0412\u0445\u043e\u0434"),r.a.createElement("form",{className:"popup__data popup-login__data login__data",noValidate:!0},r.a.createElement("div",{className:"popup__container"},r.a.createElement("input",{type:"text",id:"email-input",minLength:"2 ",maxLength:"400",name:"email",className:"popup__input popup__input_data_email login__input",required:!0,value:n.email||"",onChange:o,placeholder:"Email"}),a.email&&r.a.createElement("span",{className:"popup__input-error popup__input-error_active register__input-error"},a.email)),r.a.createElement("div",{className:"popup__container"},r.a.createElement("input",{type:"password",id:"password-input",minLength:"2 ",maxLength:"400",name:"password",className:"popup__input popup__input_data_password login__input",required:!0,value:n.password||"",onChange:o,placeholder:"Password"}),a.password&&r.a.createElement("span",{className:"popup__input-error popup__input-error_active register__input-error"},a.password)),r.a.createElement("button",{type:"submit ",onClick:function(t){t.preventDefault(),e.onSubmit(n)},className:"popup__delivery login__delivery",disabled:!i},"\u0412\u043e\u0439\u0442\u0438")))};var V=function(e){var t=x(),n=t.values,a=t.errors,o=t.handleChange,i=t.isFormValid,c=t.resetForm;return r.a.useEffect(function(){c()},[c]),r.a.createElement("div",{className:"login"},r.a.createElement("h2",{className:"login__title"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),r.a.createElement("form",{className:"popup__data popup-login__data login__data",noValidate:!0},r.a.createElement("div",{className:"popup__container"},r.a.createElement("input",{type:"text",id:"email-input",minLength:"2 ",maxLength:"400",name:"email",className:"popup__input popup__input_data_email login__input",required:!0,value:n.email||"",onChange:o,placeholder:"Email"}),a.email&&r.a.createElement("span",{className:"popup__input-error popup__input-error_active register__input-error"},a.email)),r.a.createElement("div",{className:"popup__container"},r.a.createElement("input",{type:"password",id:"password-input",minLength:"2 ",maxLength:"400",name:"password",className:"popup__input popup__input_data_password login__input",required:!0,value:n.password||"",onChange:o,placeholder:"Password"}),a.password&&r.a.createElement("span",{className:"popup__input-error popup__input-error_active register__input-error"},a.password)),r.a.createElement("button",{type:"submit ",className:"popup__delivery login__delivery",onClick:function(t){t.preventDefault(),e.onSubmit(n),c()},disabled:!i},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f")),r.a.createElement(u.b,{to:"/signin",className:"login__infoforuser"},"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"))},J=n(21),P=n.n(J),B=n(22),H=n.n(B);var R=function(e){var t=e.isOpen,n=e.onClose,a=e.isSuccess;return r.a.createElement("div",{className:"popup  ".concat(t&&"popup_opened")},r.a.createElement("div",{className:"popup__content register__popup"},r.a.createElement("button",{className:"popup-bigpic__close popup__close",type:"button",onClick:n}),r.a.createElement("img",{className:"register__image",src:a?P.a:H.a,alt:a?"\u0423\u0441\u043f\u0435\u0448\u043d\u043e":"\u041d\u0435 \u043e\u0447\u0435\u043d\u044c"}),r.a.createElement("div",{className:"register__confirm-text"},a?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437.")))};var q=function(e){var t=e.loggedIn,n=e.children;return t?n:r.a.createElement(l.a,{to:"/signin"})},Q="http://placeMikhail.students.nomoredomains.icu";function M(e){var t=e.url,n=e.method,a=void 0===n?"POST":n,r=e.token,o=e.data;return fetch("".concat(Q).concat(t),Object(L.a)({method:a,headers:Object(L.a)({accept:"application/json","content-type":"application/json"},!!r&&{Authorization:"Bearer ".concat(r)})},!!o&&{body:JSON.stringify(o)})).then(function(e){return e.ok?e.json():Promise.reject(e.status)})}var Y=function(){var e=Object(l.m)(),t=Object(a.useState)(!1),n=Object(s.a)(t,2),o=n[0],i=n[1],u=Object(a.useState)(!1),m=Object(s.a)(u,2),d=m[0],_=m[1],f=Object(a.useState)(!1),h=Object(s.a)(f,2),g=h[0],v=h[1],E=Object(a.useState)(!1),A=Object(s.a)(E,2),N=A[0],j=A[1],S=Object(a.useState)(!1),w=Object(s.a)(S,2),L=w[0],x=w[1],J=Object(a.useState)(null),P=Object(s.a)(J,2),B=P[0],H=P[1],Q=Object(a.useState)([]),Y=Object(s.a)(Q,2),X=Y[0],G=Y[1],K=Object(a.useState)({}),Z=Object(s.a)(K,2),W=Z[0],z=Z[1],$=Object(a.useState)(!1),ee=Object(s.a)($,2),te=ee[0],ne=ee[1],ae=Object(a.useState)(!1),re=Object(s.a)(ae,2),oe=re[0],ie=re[1],ce=Object(a.useState)(null),se=Object(s.a)(ce,2),le=se[0],ue=se[1],pe=Object(a.useState)(!0),me=Object(s.a)(pe,2),de=me[0],_e=me[1],fe=Object(a.useState)(""),he=Object(s.a)(fe,2),ge=he[0],ve=he[1];function Ee(){i(!1),_(!1),v(!1),j(!1),x(!1),H(null)}function be(){ne(!0)}function Ae(){x(!0)}return Object(a.useEffect)(function(){te&&Promise.all([y.getUserInfo(),y.getCards()]).then(function(e){var t=Object(s.a)(e,2),n=t[0],a=t[1];z(n),G(a)}).catch(function(e){console.log(e)})},[te]),Object(a.useEffect)(function(){te&&e("/")},[te,e]),Object(a.useEffect)(function(){!function(){var t,n=localStorage.getItem("jwt");n&&(t=n,M({url:"/users/me",method:"GET",token:t})).then(function(t){ve(t.email),be(),e("/")}).catch(function(e){return console.log(e)})}()},[]),r.a.createElement(b.Provider,{value:W},r.a.createElement("div",{className:"page"},r.a.createElement(p,{email:ge,onClick:function(){localStorage.removeItem("jwt"),ne(!1)},loggedIn:te}),r.a.createElement(l.d,null,r.a.createElement(l.b,{path:"/",element:r.a.createElement(q,{loggedIn:te},r.a.createElement(C,{onEditProfile:function(){i(!0)},onEditAvatar:function(){v(!0)},onAddPlace:function(){_(!0)},onCardClick:function(e){H(e)},cards:X,onCardLike:function(e){var t=e.likes.some(function(e){return e===W._id});t?y.removeLikeCard(e._id,t).then(function(t){G(function(n){return n.map(function(n){return n._id===e._id?t:n})})}).catch(function(e){console.error(e)}):y.setLikeCard(e._id,!t).then(function(t){G(function(n){return n.map(function(n){return n._id===e._id?t:n})})}).catch(function(e){console.error(e)})},onCardDeleteClick:function(e){ue(e),j(!0)}}))}),r.a.createElement(l.b,{path:"/signup",element:r.a.createElement(V,{onSubmit:function(t){var n;(n=t,M({url:"/signup",data:{email:n.email,password:n.password}})).then(function(t){Ae(),_e(!0),e("/signin")}).catch(function(e){Ae(),_e(!1)})}})}),r.a.createElement(l.b,{path:"/signin",element:r.a.createElement(D,{onSubmit:function(t){var n;(n=t,M({url:"/signin",data:{email:n.email,password:n.password}})).then(function(n){n.token&&localStorage.setItem("jwt",n.token),ve(t.email),be(),e("/")}).catch(function(e){Ae(),_e(!1)})}})}),r.a.createElement(l.b,{path:"/*",element:te?r.a.createElement(l.a,{to:"/"}):r.a.createElement(l.a,{to:"/signin"})})),r.a.createElement(R,{isSuccess:de,isOpen:L,onClose:Ee}),r.a.createElement(F,{isLoading:oe,isOpen:o,onClose:Ee,onUpdateUser:function(e){ie(!0),y.editUserInfo(e).then(function(e){z(e),Ee()}).catch(function(e){console.error(e)}).finally(function(){ie(!1)})}}),r.a.createElement(U,{isLoading:oe,onClose:Ee,isOpen:d,onAddPlace:function(e){ie(!0),y.addCard(e).then(function(e){G([e].concat(Object(c.a)(X))),Ee()}).catch(function(e){console.error(e)}).finally(function(){ie(!1)})}}),r.a.createElement(T,{onClose:Ee,isOpen:N,onSubmit:function(e){y.deleteCard(e).then(function(){G(function(t){return t.filter(function(t){return t._id!==e})}),Ee()}).catch(function(e){console.error(e)})},isLoading:oe,cardId:le}),r.a.createElement(I,{isLoading:oe,isOpen:g,onClose:Ee,onUpdateAvatar:function(e){ie(!0),y.editAvatar(e).then(function(e){z(e),Ee()}).catch(function(e){console.error(e)}).finally(function(){ie(!1)})}}),r.a.createElement(O,{card:B,onClose:Ee,isPopupOpened:null!==B}),r.a.createElement(k,null)))},X=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,110)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),o(e),i(e)})};i.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,null,r.a.createElement(Y,null)))),X()},15:function(e,t,n){},17:function(e,t,n){e.exports=n.p+"static/media/Vector.6bfdb354.svg"},18:function(e,t,n){e.exports=n.p+"static/media/Vectorrrbutton.b2fce4ac.svg"},19:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAFCAYAAABIHbx0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABSSURBVHgBpY8xEQAhDATvfl7AO3gcYAEJOMAqEpCAAySEFGlgoMrOXIrcpghwQUSyZshKvvmvHYVDlzTftivqtl0k2WlFhI/66PjhJ9DeSvDRJjiyKCfdUkyUAAAAAElFTkSuQmCC"},20:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAYAAAAmL5yKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABhSURBVHgBrZJbDcAwCEUvVTApc7xJmIRZmAMcrFVAoUkF8DgfhA9ycgmQiJwADsToUMEtca62LHGGCRhxOJuAswl6iSC1AlnVc/wI/AIpbUeBH7ZSJvjgZ5QmeJwSm32tmW6aXKpRIAEXAAAAAElFTkSuQmCC"},21:function(e,t,n){e.exports=n.p+"static/media/RegistrationOK.e38b395c.svg"},22:function(e,t,n){e.exports=n.p+"static/media/RegistrationError.4072126c.svg"},23:function(e,t,n){e.exports=n(109)}},[[23,3,2]]]);
//# sourceMappingURL=main.ec8ec82e.chunk.js.map