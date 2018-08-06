(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{160:function(t,a,s){"use strict";s.r(a);var n=s(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"班级管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#班级管理","aria-hidden":"true"}},[t._v("#")]),t._v(" 班级管理")]),s("h2",{attrs:{id:"获取班级列表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取班级列表","aria-hidden":"true"}},[t._v("#")]),t._v(" 获取班级列表")]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("GET /school_management/homerooms\n")])])]),s("p",[s("strong",[t._v("请求参数")])]),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),s("th",[t._v("参数类型")]),s("th",[t._v("必填")]),s("th",[t._v("描述")]),s("th",[t._v("示例")])])]),s("tbody",[s("tr",[s("td",[t._v("search")]),s("td",[t._v("string")]),s("td",[t._v("否")]),s("td",[t._v("搜索参数")]),s("td",[t._v("1班")])]),s("tr",[s("td",[t._v("status")]),s("td",[t._v("string")]),s("td",[t._v("否")]),s("td",[t._v("按班级状态筛选班级")]),s("td",[t._v("active")])])])]),s("table",[s("thead",[s("tr",[s("th",[t._v("status 参考值")]),s("th",[t._v("描述")])])]),s("tbody",[s("tr",[s("td",[t._v("active")]),s("td",[t._v("在校班级")])]),s("tr",[s("td",[t._v("graduated")]),s("td",[t._v("毕业班级")])])])]),s("p",[s("strong",[t._v("搜索参数")])]),s("p",[t._v("可搜索范围:")]),s("table",[s("thead",[s("tr",[s("th",[t._v("字段名")]),s("th",[t._v("描述")])])]),s("tbody",[s("tr",[s("td",[t._v("id")]),s("td",[t._v("班级ID")])]),s("tr",[s("td",[t._v("name")]),s("td",[t._v("班级名称")])])])]),s("p",[s("strong",[t._v("响应字段")])]),s("table",[s("thead",[s("tr",[s("th",[t._v("字段名")]),s("th",[t._v("描述")])])]),s("tbody",[s("tr",[s("td",[t._v("id")]),s("td",[t._v("班级ID")])]),s("tr",[s("td",[t._v("name")]),s("td",[t._v("班级姓名")])]),s("tr",[s("td",[t._v("status")]),s("td",[t._v("班级状态")])]),s("tr",[s("td",[t._v("grade_id")]),s("td",[t._v("当前年级ID")])]),s("tr",[s("td",[t._v("grade_name")]),s("td",[t._v("年级名")])]),s("tr",[s("td",[t._v("student_count")]),s("td",[t._v("学生数量")])]),s("tr",[s("td",[t._v("teachers: id")]),s("td",[t._v("教师ID")])]),s("tr",[s("td",[t._v("teachers: name")]),s("td",[t._v("教师姓名")])])])]),s("p",[s("strong",[t._v("响应示例")])]),s("p",[t._v("成功响应:")]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Status: 200 OK\n")])])]),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"homerooms"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),s("span",{attrs:{class:"token property"}},[t._v('"id"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("56")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),s("span",{attrs:{class:"token property"}},[t._v('"name"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"一年（1）班"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),s("span",{attrs:{class:"token property"}},[t._v('"status"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"active"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),s("span",{attrs:{class:"token property"}},[t._v('"grade_id"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("965")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),s("span",{attrs:{class:"token property"}},[t._v('"grade_name"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"一年级"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),s("span",{attrs:{class:"token property"}},[t._v('"student_count"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"58"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),s("span",{attrs:{class:"token property"}},[t._v('"teachers"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n         "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n           "),s("span",{attrs:{class:"token property"}},[t._v('"id"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("15")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n           "),s("span",{attrs:{class:"token property"}},[t._v('"name"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"王宇"')]),t._v("\n         "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n           "),s("span",{attrs:{class:"token property"}},[t._v('"id"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("17")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n           "),s("span",{attrs:{class:"token property"}},[t._v('"name"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"李明"')]),t._v("\n         "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n       "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"获取班级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取班级","aria-hidden":"true"}},[t._v("#")]),t._v(" 获取班级")]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("GET /school_management/homerooms/:id\n")])])]),s("p",[s("strong",[t._v("请求参数")])]),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),s("th",[t._v("参数类型")]),s("th",[t._v("必填")]),s("th",[t._v("描述")]),s("th",[t._v("示例")])])]),s("tbody",[s("tr",[s("td",[t._v("id")]),s("td",[t._v("integer")]),s("td",[t._v("是")]),s("td",[t._v("班级ID")]),s("td",[t._v("56")])])])]),s("p",[s("strong",[t._v("响应字段")])]),s("table",[s("thead",[s("tr",[s("th",[t._v("字段名")]),s("th",[t._v("描述")])])]),s("tbody",[s("tr",[s("td",[t._v("id")]),s("td",[t._v("班级ID")])]),s("tr",[s("td",[t._v("name")]),s("td",[t._v("班级姓名")])]),s("tr",[s("td",[t._v("status")]),s("td",[t._v("班级状态")])]),s("tr",[s("td",[t._v("grade_id")]),s("td",[t._v("当前年级ID")])]),s("tr",[s("td",[t._v("grade_name")]),s("td",[t._v("年级名")])]),s("tr",[s("td",[t._v("student_count")]),s("td",[t._v("学生数量")])]),s("tr",[s("td",[t._v("teachers: id")]),s("td",[t._v("教师ID")])]),s("tr",[s("td",[t._v("teachers: name")]),s("td",[t._v("教师姓名")])])])]),s("p",[s("strong",[t._v("响应示例")])]),s("p",[t._v("成功响应:")]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Status: 200 OK\n")])])]),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{attrs:{class:"token property"}},[t._v('"id"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("56")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{attrs:{class:"token property"}},[t._v('"name"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"一年（1）班"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{attrs:{class:"token property"}},[t._v('"status"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"active"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{attrs:{class:"token property"}},[t._v('"grade_id"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("965")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{attrs:{class:"token property"}},[t._v('"grade_name"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"一年级"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{attrs:{class:"token property"}},[t._v('"student_count"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"58"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{attrs:{class:"token property"}},[t._v('"teachers"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n     "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),s("span",{attrs:{class:"token property"}},[t._v('"id"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("15")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),s("span",{attrs:{class:"token property"}},[t._v('"name"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"王宇"')]),t._v("\n     "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),s("span",{attrs:{class:"token property"}},[t._v('"id"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("17")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),s("span",{attrs:{class:"token property"}},[t._v('"name"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"李明"')]),t._v("\n     "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"创建班级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建班级","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建班级")]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("POST /school_management/homerooms\n")])])]),s("p",[s("strong",[t._v("请求参数")])]),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),s("th",[t._v("参数类型")]),s("th",[t._v("必填")]),s("th",[t._v("描述")]),s("th",[t._v("示例")])])]),s("tbody",[s("tr",[s("td",[t._v("name")]),s("td",[t._v("string")]),s("td",[t._v("是")]),s("td",[t._v("班级名称")]),s("td",[t._v("五年（2）班")])]),s("tr",[s("td",[t._v("grade_id")]),s("td",[t._v("integer")]),s("td",[t._v("是")]),s("td",[t._v("年级ID")]),s("td",[t._v("8756")])])])]),s("p",[s("strong",[t._v("响应字段")])]),s("table",[s("thead",[s("tr",[s("th",[t._v("字段名")]),s("th",[t._v("描述")])])]),s("tbody",[s("tr",[s("td",[t._v("id")]),s("td",[t._v("班级ID")])]),s("tr",[s("td",[t._v("name")]),s("td",[t._v("班级姓名")])]),s("tr",[s("td",[t._v("status")]),s("td",[t._v("班级状态")])]),s("tr",[s("td",[t._v("grade_id")]),s("td",[t._v("当前年级ID")])]),s("tr",[s("td",[t._v("grade_name")]),s("td",[t._v("年级名")])]),s("tr",[s("td",[t._v("student_count")]),s("td",[t._v("学生数量")])]),s("tr",[s("td",[t._v("teachers: id")]),s("td",[t._v("教师ID")])]),s("tr",[s("td",[t._v("teachers: name")]),s("td",[t._v("教师姓名")])])])]),s("p",[s("strong",[t._v("响应示例")])]),s("p",[t._v("成功响应:")]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Status: 201 Created\n")])])]),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{attrs:{class:"token property"}},[t._v('"id"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("56")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{attrs:{class:"token property"}},[t._v('"name"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"一年（1）班"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{attrs:{class:"token property"}},[t._v('"status"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"active"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{attrs:{class:"token property"}},[t._v('"grade_id"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("965")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{attrs:{class:"token property"}},[t._v('"grade_name"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"一年级"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{attrs:{class:"token property"}},[t._v('"student_count"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"58"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{attrs:{class:"token property"}},[t._v('"teachers"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n     "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),s("span",{attrs:{class:"token property"}},[t._v('"id"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("15")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),s("span",{attrs:{class:"token property"}},[t._v('"name"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"王宇"')]),t._v("\n     "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),s("span",{attrs:{class:"token property"}},[t._v('"id"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("17")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),s("span",{attrs:{class:"token property"}},[t._v('"name"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"李明"')]),t._v("\n     "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"更新班级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新班级","aria-hidden":"true"}},[t._v("#")]),t._v(" 更新班级")]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("PATCH /school_management/homerooms/:id\n")])])]),s("p",[s("strong",[t._v("请求参数")])]),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),s("th",[t._v("参数类型")]),s("th",[t._v("必填")]),s("th",[t._v("描述")]),s("th",[t._v("示例")])])]),s("tbody",[s("tr",[s("td",[t._v("id")]),s("td",[t._v("integer")]),s("td",[t._v("是")]),s("td",[t._v("班级ID")]),s("td",[t._v("56")])]),s("tr",[s("td",[t._v("name")]),s("td",[t._v("string")]),s("td",[t._v("是")]),s("td",[t._v("班级名称")]),s("td",[t._v("五年（2）班")])]),s("tr",[s("td",[t._v("grade_id")]),s("td",[t._v("integer")]),s("td",[t._v("是")]),s("td",[t._v("年级ID")]),s("td",[t._v("8756")])])])]),s("p",[s("strong",[t._v("响应字段")])]),s("table",[s("thead",[s("tr",[s("th",[t._v("字段名")]),s("th",[t._v("描述")])])]),s("tbody",[s("tr",[s("td",[t._v("id")]),s("td",[t._v("班级ID")])]),s("tr",[s("td",[t._v("name")]),s("td",[t._v("班级姓名")])]),s("tr",[s("td",[t._v("status")]),s("td",[t._v("班级状态")])]),s("tr",[s("td",[t._v("grade_id")]),s("td",[t._v("当前年级ID")])]),s("tr",[s("td",[t._v("grade_name")]),s("td",[t._v("年级名")])]),s("tr",[s("td",[t._v("student_count")]),s("td",[t._v("学生数量")])]),s("tr",[s("td",[t._v("teachers: id")]),s("td",[t._v("教师ID")])]),s("tr",[s("td",[t._v("teachers: name")]),s("td",[t._v("教师姓名")])])])]),s("p",[s("strong",[t._v("响应示例")])]),s("p",[t._v("成功响应:")]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Status: 200 OK\n")])])]),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{attrs:{class:"token property"}},[t._v('"id"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("56")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{attrs:{class:"token property"}},[t._v('"name"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"一年（1）班"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{attrs:{class:"token property"}},[t._v('"status"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"active"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{attrs:{class:"token property"}},[t._v('"grade_id"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("965")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{attrs:{class:"token property"}},[t._v('"grade_name"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"一年级"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{attrs:{class:"token property"}},[t._v('"student_count"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"58"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{attrs:{class:"token property"}},[t._v('"teachers"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n     "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),s("span",{attrs:{class:"token property"}},[t._v('"id"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("15")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),s("span",{attrs:{class:"token property"}},[t._v('"name"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"王宇"')]),t._v("\n     "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),s("span",{attrs:{class:"token property"}},[t._v('"id"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("17")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),s("span",{attrs:{class:"token property"}},[t._v('"name"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"李明"')]),t._v("\n     "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"删除班级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除班级","aria-hidden":"true"}},[t._v("#")]),t._v(" 删除班级")]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("DELETE /school_management/homerooms/:id\n")])])]),s("p",[s("strong",[t._v("请求参数")])]),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),s("th",[t._v("参数类型")]),s("th",[t._v("必填")]),s("th",[t._v("描述")]),s("th",[t._v("示例")])])]),s("tbody",[s("tr",[s("td",[t._v("id")]),s("td",[t._v("integer")]),s("td",[t._v("是")]),s("td",[t._v("班级ID")]),s("td",[t._v("56")])])])]),s("p",[s("strong",[t._v("响应示例")])]),s("p",[t._v("成功响应:")]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Status: 204 No Content\n")])])]),s("p",[t._v("失败响应:")]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Status: 422 Unprocessable Entity\n")])])]),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"error_code"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1010")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"message"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"无法删除有学生的班级"')]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"设置为毕业班级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置为毕业班级","aria-hidden":"true"}},[t._v("#")]),t._v(" 设置为毕业班级")]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("PATCH /school_management/homerooms/:id/graduate\n")])])]),s("p",[s("strong",[t._v("请求参数")])]),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),s("th",[t._v("参数类型")]),s("th",[t._v("必填")]),s("th",[t._v("描述")]),s("th",[t._v("示例")])])]),s("tbody",[s("tr",[s("td",[t._v("id")]),s("td",[t._v("integer")]),s("td",[t._v("是")]),s("td",[t._v("班级ID")]),s("td",[t._v("56")])])])]),s("p",[s("strong",[t._v("响应示例")])]),s("p",[t._v("成功响应:")]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Status: 200 OK\n")])])]),s("h2",{attrs:{id:"设置为在校班级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置为在校班级","aria-hidden":"true"}},[t._v("#")]),t._v(" 设置为在校班级")]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("PATCH /school_management/homerooms/:id/ungraduate\n")])])]),s("p",[s("strong",[t._v("请求参数")])]),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),s("th",[t._v("参数类型")]),s("th",[t._v("必填")]),s("th",[t._v("描述")]),s("th",[t._v("示例")])])]),s("tbody",[s("tr",[s("td",[t._v("id")]),s("td",[t._v("integer")]),s("td",[t._v("是")]),s("td",[t._v("班级ID")]),s("td",[t._v("56")])])])]),s("p",[s("strong",[t._v("响应示例")])]),s("p",[t._v("成功响应:")]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Status: 200 OK\n")])])]),s("h2",{attrs:{id:"添加班主任"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加班主任","aria-hidden":"true"}},[t._v("#")]),t._v(" 添加班主任")]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("POST /school_management/homerooms/:id/teachers\n")])])]),s("p",[s("strong",[t._v("请求参数")])]),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),s("th",[t._v("参数类型")]),s("th",[t._v("必填")]),s("th",[t._v("描述")]),s("th",[t._v("示例")])])]),s("tbody",[s("tr",[s("td",[t._v("id")]),s("td",[t._v("integer")]),s("td",[t._v("是")]),s("td",[t._v("班级ID")]),s("td",[t._v("56")])]),s("tr",[s("td",[t._v("teacher_id")]),s("td",[t._v("integer")]),s("td",[t._v("是")]),s("td",[t._v("教师")]),s("td",[t._v("78")])])])]),s("p",[s("strong",[t._v("响应示例")])]),s("p",[t._v("成功响应:")]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Status: 201 Created\n")])])]),s("h2",{attrs:{id:"移除班主任"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#移除班主任","aria-hidden":"true"}},[t._v("#")]),t._v(" 移除班主任")]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("DELETE /school_management/homerooms/:id/teachers\n")])])]),s("p",[s("strong",[t._v("请求参数")])]),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),s("th",[t._v("参数类型")]),s("th",[t._v("必填")]),s("th",[t._v("描述")]),s("th",[t._v("示例")])])]),s("tbody",[s("tr",[s("td",[t._v("id")]),s("td",[t._v("integer")]),s("td",[t._v("是")]),s("td",[t._v("班级ID")]),s("td",[t._v("56")])]),s("tr",[s("td",[t._v("teacher_id")]),s("td",[t._v("integer")]),s("td",[t._v("是")]),s("td",[t._v("教师")]),s("td",[t._v("78")])])])]),s("p",[s("strong",[t._v("响应示例")])]),s("p",[t._v("成功响应:")]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Status: 204 No Content\n")])])])])}],!1,null,null,null);a.default=r.exports}}]);