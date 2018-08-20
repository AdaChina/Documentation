(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{171:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"api使用说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api使用说明","aria-hidden":"true"}},[t._v("#")]),t._v(" API使用说明")]),s("p",[t._v("测试环境:")]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("http://central.staging.adachina.net\n")])])]),s("p",[t._v("生产环境：")]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("TBD\n")])])]),s("p",[t._v("演示环境:")]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("TBD\n")])])]),s("h2",{attrs:{id:"请求格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请求格式","aria-hidden":"true"}},[t._v("#")]),t._v(" 请求格式")]),s("p",[t._v("传递表单时, Header需要声明使用JSON格式传递：")]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Content-Type: application/json\n")])])]),s("p",[t._v("非GET类请求，请求参数需要提供带上"),s("code",[t._v("authenticity_token")]),t._v(":")]),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"authenticity_token"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"1HxW...sa234="')]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"分页信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分页信息","aria-hidden":"true"}},[t._v("#")]),t._v(" 分页信息")]),s("p",[s("strong",[t._v("分页字段")])]),s("p",[t._v("列表类接口，会带上分页信息。")]),s("table",[s("thead",[s("tr",[s("th",[t._v("字段名")]),s("th",[t._v("描述")])])]),s("tbody",[s("tr",[s("td",[t._v("pages")]),s("td",[t._v("列表总页数")])]),s("tr",[s("td",[t._v("page")]),s("td",[t._v("当前显示页")])]),s("tr",[s("td",[t._v("total")]),s("td",[t._v("列表资源总数")])]),s("tr",[s("td",[t._v("items")]),s("td",[t._v("当前显示资源数量")])]),s("tr",[s("td",[t._v("items_per_page")]),s("td",[t._v("默认每页资源数量")])])])]),s("p",[s("strong",[t._v("分页参数")])]),s("p",[t._v("列表类接口可通过以下分页参数，控制返回信息。")]),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),s("th",[t._v("参数类型")]),s("th",[t._v("必填")]),s("th",[t._v("描述")]),s("th",[t._v("示例")])])]),s("tbody",[s("tr",[s("td",[t._v("page")]),s("td",[t._v("integer")]),s("td",[t._v("否")]),s("td",[t._v("返回页")]),s("td",[t._v("2")])])])]),s("p",[t._v("示例:")]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("GET /management/schools?page=2\n")])])]),s("h2",{attrs:{id:"身份验证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#身份验证","aria-hidden":"true"}},[t._v("#")]),t._v(" 身份验证")]),s("p",[t._v("除登陆接口外，所有API接口都会验证用户身份。如身份验证失败，接口会返回以下错误的一种。")]),s("p",[s("strong",[t._v("未登陆")])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Status: 401 Unauthorized\n")])])]),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"error_code"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1007")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"message"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"用户未登陆"')]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("权限不足")])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Status: 401 Unauthorized\n")])])]),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"error_code"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1008")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"message"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"当前接口仅允许平台管理员使用"')]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"搜索参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#搜索参数","aria-hidden":"true"}},[t._v("#")]),t._v(" 搜索参数")]),s("p",[t._v("除非特别标明其他搜索方式。列表类资源请求参数如带有搜索参数，使用以下方式对资源进行搜索。")]),s("p",[t._v("示例:")]),s("p",[t._v("如在教师列表接口按教师姓名搜索")]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("GET https://api.endpoint/teachers?search=王易\n")])])])])}],!1,null,null,null);a.default=n.exports}}]);