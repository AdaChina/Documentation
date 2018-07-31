(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{161:function(t,s,a){"use strict";a.r(s);var n=a(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"系统管理员管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统管理员管理","aria-hidden":"true"}},[t._v("#")]),t._v(" 系统管理员管理")]),a("h2",{attrs:{id:"获取当前系统管理员"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取当前系统管理员","aria-hidden":"true"}},[t._v("#")]),t._v(" 获取当前系统管理员")]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("GET /system_management/system_admin\n")])])]),a("p",[a("strong",[t._v("响应字段")])]),a("table",[a("thead",[a("tr",[a("th",[t._v("字段名")]),a("th",[t._v("描述")])])]),a("tbody",[a("tr",[a("td",[t._v("id")]),a("td",[t._v("用户ID")])]),a("tr",[a("td",[t._v("name")]),a("td",[t._v("用户名称")])]),a("tr",[a("td",[t._v("type")]),a("td",[t._v("用户类型")])]),a("tr",[a("td",[t._v("school_id")]),a("td",[t._v("当前学校ID")])]),a("tr",[a("td",[t._v("school_name")]),a("td",[t._v("当前学校名字")])])])]),a("ul",[a("li",[t._v("如当前系统管理员未配置学校，将不会返回 "),a("code",[t._v("school_id")]),t._v(" 及 "),a("code",[t._v("school_name")])])]),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"id"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"name"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"王管理"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"type"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"SystemAdmin"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"school_id"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("7")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"school_name"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"越秀路小学"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"created_at"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"2018-07-24T14:45:15.000+08:00"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"updated_at"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"2018-07-24T14:45:15.000+08:00"')]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"配置学校"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置学校","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置学校")]),a("p",[t._v("跳转到学校前，需要先为当前系统管理员配置所需跳转的学校。")]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("PATCH /system_management/system_admin\n")])])]),a("p",[a("strong",[t._v("请求参数")])]),a("table",[a("thead",[a("tr",[a("th",[t._v("参数名")]),a("th",[t._v("参数类型")]),a("th",[t._v("必填")]),a("th",[t._v("描述")]),a("th",[t._v("示例")])])]),a("tbody",[a("tr",[a("td",[t._v("school_id")]),a("td",[t._v("integer")]),a("td",[t._v("是")]),a("td",[t._v("学校ID")]),a("td",[t._v("120")])])])]),a("p",[a("strong",[t._v("响应字段")])]),a("table",[a("thead",[a("tr",[a("th",[t._v("字段名")]),a("th",[t._v("描述")])])]),a("tbody",[a("tr",[a("td",[t._v("id")]),a("td",[t._v("用户ID")])]),a("tr",[a("td",[t._v("name")]),a("td",[t._v("用户名称")])]),a("tr",[a("td",[t._v("type")]),a("td",[t._v("用户类型")])]),a("tr",[a("td",[t._v("school_id")]),a("td",[t._v("当前学校ID")])]),a("tr",[a("td",[t._v("school_name")]),a("td",[t._v("当前学校名字")])])])]),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"id"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"name"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"王管理"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"type"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"SystemAdmin"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"school_id"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("7")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"school_name"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"越秀路小学"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"created_at"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"2018-07-24T14:45:15.000+08:00"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"updated_at"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"2018-07-24T14:45:15.000+08:00"')]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}],!1,null,null,null);s.default=r.exports}}]);