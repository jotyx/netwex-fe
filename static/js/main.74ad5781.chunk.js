(this["webpackJsonpnetwex-fe"]=this["webpackJsonpnetwex-fe"]||[]).push([[0],{27:function(e,t,a){e.exports=a(44)},36:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),c=a(5);a(36),a(37),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l,u=a(13),i=a(17);function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}!function(e){e.EXPENSE="EXPENSE",e.INCOME="INCOME"}(l||(l={}));var p=[{label:"January",value:0},{label:"February",value:1},{label:"March",value:2},{label:"April",value:3},{label:"May",value:4},{label:"June",value:5},{label:"July",value:6},{label:"August",value:7},{label:"September",value:8},{label:"October",value:9},{label:"November",value:10},{label:"December",value:11}],m=function(e){for(var t={yearNumber:e||(new Date).getFullYear(),data:[]},a=0;a<12;)t.data.push({monthIndex:a,data:[{label:"Example Category",amount:1e3+10*a,type:l.EXPENSE}]}),a++;return t},f=function(e,t,a){return e.map((function(e){var n=e.data.map((function(e){return d({},e,{data:e.data.concat({label:t,amount:0,type:a})})}));return d({},e,{data:n})}))},y=function(e,t,a){return e.map((function(e){var n=e.data.map((function(e){var n=e.data.map((function(e){return e.label===t?d({},e,{label:a}):d({},e)}));return d({},e,{data:n})}));return d({},e,{data:n})}))},b=function(e){return e.data.filter((function(t){return t.yearNumber===e.selectedYear}))[0].data.filter((function(t){return t.monthIndex===e.selectedMonth}))[0]},h=function(e){return b(e).data.filter((function(e){return e.type===l.EXPENSE}))},E=function(e){return b(e).data.filter((function(e){return e.type===l.INCOME}))},g=function(e){return e.data[0].data[0].data.map((function(e){return e.label}))},C=function(e){var t="";return p.forEach((function(a){a.value===e.selectedMonth&&(t=a.label)})),"Year "+e.selectedYear+", Month "+t},O=function(e){return e.data.map((function(e){return e.yearNumber}))},v=function(e){return b(e).data.map((function(e){return e.type===l.EXPENSE?e.amount:null})).reduce((function(e,t){return e+t}))},w=function(e){return b(e).data.map((function(e){return e.type===l.INCOME?e.amount:null})).reduce((function(e,t){return e+t}))};function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function j(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var S={selectedYear:2019,selectedMonth:0,data:[m(),m(2018),m(2017)]},D=Object(u.b)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_DATA":return j({},e,{data:t.payload});case"SELECT_MONTH":return j({},e,{selectedMonth:t.payload});case"ADD_CATEGORY":return j({},e,{data:f(e.data,t.payload.label,t.payload.type)});case"UPDATE_CATEGORY":return j({},e,{data:y(e.data,t.payload.oldLabel,t.payload.newLabel)});case"UPDATE_CATEGORY_AMOUNT":return j({},e,{selectedMonthData:{data:b(e).data.map((function(e){return e.label===t.payload.label&&(e.amount=t.payload.amount),e})),monthIndex:b(e).monthIndex}});case"SELECT_YEAR":return j({},e,{selectedYear:t.payload});default:return e}}}),k=Object(u.c)(window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),A=Object(u.d)(D,k),T=a(45),P=a(2),Y=a(3),M=a(6),I=a(4),_=a(7),L=(a(38),function(e){return{type:"SELECT_MONTH",payload:e}}),R=a(11),x=Object(R.a)(),W=function(e){function t(){var e,a;Object(P.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(M.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(r)))).handleYearSelected=function(e){a.props.selectYear(e),a.props.selectMonth(0),x.push("/year-detail")},a}return Object(_.a)(t,e),Object(Y.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"years-wrapper"},r.a.createElement("h4",null,"Years With Records"),r.a.createElement("div",{className:"list-group"},this.props.allAvailableYears.map((function(t){return r.a.createElement("div",{key:t,className:"list-group-item list-group-item-action "+(e.props.selectedYear===t?"active":null),onClick:function(){return e.handleYearSelected(t)}},t)}))),r.a.createElement("button",{type:"button",className:"btn btn-outline-info btn-sm"},"Add a Year"))}}]),t}(n.Component),X=Object(c.b)((function(e){return{selectedYear:e.app.selectedYear,allAvailableYears:O(e.app)}}),(function(e){return{selectYear:function(t){return e({type:"SELECT_YEAR",payload:t})},selectMonth:function(t){return e(L(t))}}}))(W),U=(a(39),a(40),function(e){function t(e){var a;return Object(P.a)(this,t),(a=Object(M.a)(this,Object(I.a)(t).call(this,e))).editCategoryInput=void 0,a.editCategoryLabelInput=void 0,a.newCategoryInput=void 0,a.escapeHandler=function(e){27===e.keyCode&&(a.cleanAddCategory(),a.cleanEditState(),a.cleanCategoryEditState())},a.handleRowClicked=function(e,t){a.setState({editRow:e,rowData:t.toString()}),setTimeout((function(){return a.editCategoryInput.current.focus()}),50)},a.handleSubmit=function(e,t){e.preventDefault(),a.props.updateCategoryAmount({label:t.label,amount:Number(a.state.rowData)}),a.cleanEditState()},a.handleAmountChange=function(e){a.setState({rowData:e.currentTarget.value})},a.cleanEditState=function(){a.setState({editRow:null,rowData:""})},a.handleAddNewCategorySubmit=function(e){e.preventDefault(),a.state.newCategoryName&&(a.props.addCategory({label:a.state.newCategoryName,type:a.state.newCategoryType}),a.cleanAddCategory())},a.handleNewCategoryChange=function(e){a.setState({newCategoryName:e.currentTarget.value})},a.handleAddNewCategoryClicked=function(){a.setState({newCategoryName:"",newCategoryType:a.props.type}),setTimeout((function(){return a.newCategoryInput.current.focus()}),50)},a.cleanAddCategory=function(){a.setState({newCategoryName:"",newCategoryType:null})},a.handleCategoryLabelClicked=function(e,t){a.setState({editCategory:e,categoryData:t}),setTimeout((function(){return a.editCategoryLabelInput.current.focus()}),50)},a.cleanCategoryEditState=function(){a.setState({editCategory:null,categoryData:""})},a.handleNewLabelChange=function(e){a.setState({categoryData:e.currentTarget.value})},a.handleNewLabelSubmit=function(e,t){e.preventDefault(),a.props.allCategoryLabels.includes(a.state.categoryData)||(a.props.updateCategory({oldLabel:t,newLabel:a.state.categoryData}),a.cleanCategoryEditState())},a.state={editRow:null,rowData:"",editCategory:null,categoryData:"",newCategoryName:"",newCategoryType:null},a.editCategoryInput=r.a.createRef(),a.editCategoryLabelInput=r.a.createRef(),a.newCategoryInput=r.a.createRef(),a}return Object(_.a)(t,e),Object(Y.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.escapeHandler,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.escapeHandler,!1)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("ul",{className:"list-group"},this.props.categoriesWithData.map((function(t,a){return r.a.createElement("li",{key:a,className:"list-group-item"},r.a.createElement("div",{className:"section-label"},e.state.editCategory===a?r.a.createElement("form",{onSubmit:function(a){return e.handleNewLabelSubmit(a,t.label)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control form-control-sm",value:e.state.categoryData,placeholder:"Enter Category Name",ref:e.editCategoryLabelInput,onBlur:function(){return e.cleanCategoryEditState()},onChange:e.handleNewLabelChange}))):r.a.createElement("div",{onClick:function(){return e.handleCategoryLabelClicked(a,t.label)}},t.label)),r.a.createElement("div",{className:"section-data"},e.state.editRow===a?r.a.createElement("form",{onSubmit:function(a){return e.handleSubmit(a,t)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"number",step:"0.01",className:"form-control form-control-sm",value:e.state.rowData,placeholder:"Enter Value",ref:e.editCategoryInput,onBlur:function(){return e.cleanEditState()},onChange:e.handleAmountChange}))):r.a.createElement("div",{onClick:function(){return e.handleRowClicked(a,t.amount)}},t.amount)))}))),r.a.createElement("div",{className:"add-new-category"},this.state.newCategoryType?r.a.createElement("form",{onSubmit:function(t){return e.handleAddNewCategorySubmit(t)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",value:this.state.newCategoryName,placeholder:"Enter New Category Name",ref:this.newCategoryInput,onBlur:function(){return e.cleanAddCategory()},onChange:this.handleNewCategoryChange}))):this.props.type===l.EXPENSE?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",className:"btn btn-danger btn-sm",onClick:function(){return e.handleAddNewCategoryClicked()}},"Add Expense Category"),r.a.createElement("span",{className:"total-sum"},"Total: ",this.props.sumOfExpenses)):r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",className:"btn btn-success btn-sm",onClick:function(){return e.handleAddNewCategoryClicked()}},"Add Income Category"),r.a.createElement("span",{className:"total-sum"},"Total: ",this.props.sumOfIncomes))))}}]),t}(n.Component));U.defaultProps={categoriesWithData:[],type:l.EXPENSE};var B=Object(c.b)((function(e){return{allCategoryLabels:g(e.app),sumOfExpenses:v(e.app),sumOfIncomes:w(e.app)}}),(function(e){return{updateCategoryAmount:function(t){return e({type:"UPDATE_CATEGORY_AMOUNT",payload:t})},addCategory:function(t){return e({type:"ADD_CATEGORY",payload:t})},updateCategory:function(t){return e({type:"UPDATE_CATEGORY",payload:t})}}}))(U),G=function(e){function t(){return Object(P.a)(this,t),Object(M.a)(this,Object(I.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(Y.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"month-detail-wrapper"},r.a.createElement("h4",null,"Month Detail"),r.a.createElement("h6",null,this.props.selectedPeriod),r.a.createElement(B,{categoriesWithData:this.props.expenseCategoriesWithData,type:l.EXPENSE}),r.a.createElement(B,{categoriesWithData:this.props.incomeCategoriesWithData,type:l.INCOME}))}}]),t}(n.Component);G.defaultProps={expenseCategoriesWithData:[],incomeCategoriesWithData:[]};var H=Object(c.b)((function(e){return{expenseCategoriesWithData:h(e.app),incomeCategoriesWithData:E(e.app),selectedPeriod:C(e.app)}}),(function(e){return{}}))(G),J=(a(41),function(e){function t(e){var a;return Object(P.a)(this,t),(a=Object(M.a)(this,Object(I.a)(t).call(this,e))).handleMonthClicked=function(e){a.props.selectMonth(e)},a.handleSelectYearsScreenClicked=function(){x.push("/years")},a.state={months:p},a}return Object(_.a)(t,e),Object(Y.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"months-wrapper"},r.a.createElement("h4",null,"Months of ",this.props.selectedYear),r.a.createElement("button",{type:"button",className:"btn btn-outline-info btn-sm back-to-years",onClick:function(){return e.handleSelectYearsScreenClicked()}},"Back to Years"),r.a.createElement("div",{className:"list-group"},this.state.months.map((function(t){return r.a.createElement("div",{key:t.value,className:"list-group-item list-group-item-action "+(e.props.selectedMonth===t.value?"active":null),onClick:function(){return e.handleMonthClicked(t.value)}},t.label)}))))}}]),t}(n.Component));J.defaultProps={selectedYear:2019,selectedMonth:0};var F=Object(c.b)((function(e){return{selectedYear:e.app.selectedYear,selectedMonth:e.app.selectedMonth}}),(function(e){return{selectMonth:function(t){return e(L(t))}}}))(J),V=function(e){function t(){return Object(P.a)(this,t),Object(M.a)(this,Object(I.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(Y.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"year-detail-wrapper"},r.a.createElement(F,null),r.a.createElement(H,null))}}]),t}(n.Component),$=Object(c.b)((function(e){return{}}),(function(e){return{}}))(V),q=(a(42),function(e){function t(){return Object(P.a)(this,t),Object(M.a)(this,Object(I.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(Y.a)(t,[{key:"render",value:function(){return r.a.createElement(T.a,{to:"/years"})}}]),t}(n.Component));Object(o.render)(r.a.createElement(c.a,{store:A},r.a.createElement(T.c,{history:x},r.a.createElement(T.b,{component:q}),r.a.createElement(T.b,{exact:!0,path:"/years",component:Object(T.d)(X)}),r.a.createElement(T.b,{exact:!0,path:"/year-detail",component:Object(T.d)($)}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.74ad5781.chunk.js.map