(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{168:function(t,a,e){"use strict";e.r(a);var s=e(0),r=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"api使用说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api使用说明","aria-hidden":"true"}},[t._v("#")]),t._v(" API使用说明")]),e("h2",{attrs:{id:"api-endpoint"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api-endpoint","aria-hidden":"true"}},[t._v("#")]),t._v(" API Endpoint")]),e("p",[t._v("测试环境:")]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("TBD\n")])])]),e("p",[t._v("生产环境：")]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("TBD\n")])])]),e("p",[t._v("演示环境:")]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("TBD\n")])])]),e("h2",{attrs:{id:"鉴权"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#鉴权","aria-hidden":"true"}},[t._v("#")]),t._v(" 鉴权")]),e("p",[t._v("请求 Headers 的 "),e("code",[t._v("Authorization")]),t._v("参数必须提供设备Token")]),e("p",[t._v("示例:")]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Authorization: Basic c24xMjM0NTY3ODphYmNkZWY=\n")])])]),e("h2",{attrs:{id:"请求格式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求格式","aria-hidden":"true"}},[t._v("#")]),t._v(" 请求格式")]),e("p",[t._v("请求时，Header 需要配置以下数据。")]),e("ul",[e("li",[t._v("必须在 "),e("code",[t._v("Accept")]),t._v(" 参数中声明使用API版本号以及请求格式")]),e("li",[t._v("必须在 "),e("code",[t._v("AdaCampus-App-Version")]),t._v(" 参数中提供当前APP版本号")]),e("li",[t._v("必须在 "),e("code",[t._v("AdaCampus-Watcher-Version")]),t._v(" 参数中提供当前守护进程版本号")]),e("li",[e("code",[t._v("AdaCampus-HW-Version")]),t._v(" 可选择提供设备硬件版本号")])]),e("p",[t._v("示例:")]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Authorization: Basic c24xMjM0NTY3ODphYmNkZWY=\nAccept: application/vnd.class-brand.v3+json\nAdaCampus-App-Version: 1.1.0\nAdaCampus-HW-Version: M7-V1\nAdaCampus-Watcher-Version: 1.1.0\n")])])]),e("h2",{attrs:{id:"分页信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分页信息","aria-hidden":"true"}},[t._v("#")]),t._v(" 分页信息")]),e("p",[e("strong",[t._v("分页字段")])]),e("p",[t._v("列表类接口，会带上分页信息。")]),e("table",[e("thead",[e("tr",[e("th",[t._v("字段名")]),e("th",[t._v("描述")])])]),e("tbody",[e("tr",[e("td",[t._v("pages")]),e("td",[t._v("列表总页数")])]),e("tr",[e("td",[t._v("page")]),e("td",[t._v("当前显示页")])]),e("tr",[e("td",[t._v("total")]),e("td",[t._v("列表资源总数")])]),e("tr",[e("td",[t._v("items")]),e("td",[t._v("当前显示资源数量")])]),e("tr",[e("td",[t._v("items_per_page")]),e("td",[t._v("默认每页资源数量")])])])]),e("p",[e("strong",[t._v("分页参数")])]),e("p",[t._v("列表类接口可通过以下分页参数，控制返回信息。")]),e("table",[e("thead",[e("tr",[e("th",[t._v("参数名")]),e("th",[t._v("参数类型")]),e("th",[t._v("必填")]),e("th",[t._v("描述")]),e("th",[t._v("示例")])])]),e("tbody",[e("tr",[e("td",[t._v("page")]),e("td",[t._v("integer")]),e("td",[t._v("否")]),e("td",[t._v("返回页")]),e("td",[t._v("2")])])])]),e("p",[t._v("示例:")]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("GET /system_management/schools?page=2\n")])])])])}],!1,null,null,null);a.default=r.exports}}]);