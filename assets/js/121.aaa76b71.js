(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{334:function(t,a,v){"use strict";v.r(a);var e=v(0),_=Object(e.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"qa-openbluetoothadapter-object-object"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#qa-openbluetoothadapter-object-object","aria-hidden":"true"}},[t._v("#")]),t._v(" qa.openBluetoothAdapter(Object object)")]),t._v(" "),v("p",[t._v("初始化蓝牙模块")]),t._v(" "),v("h2",{attrs:{id:"参数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参数","aria-hidden":"true"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),v("h3",{attrs:{id:"object-object"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#object-object","aria-hidden":"true"}},[t._v("#")]),t._v(" Object object")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("属性")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[v("div",{staticStyle:{width:"50px"}},[t._v("默认值")])]),t._v(" "),v("th",[v("div",{staticStyle:{width:"50px"}},[t._v("必填")])]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("success")]),t._v(" "),v("td",[t._v("function")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("否")]),t._v(" "),v("td",[t._v("接口调用成功的回调函数")])]),t._v(" "),v("tr",[v("td",[t._v("fail")]),t._v(" "),v("td",[t._v("function")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("否")]),t._v(" "),v("td",[t._v("接口调用失败的回调函数")])]),t._v(" "),v("tr",[v("td",[t._v("complete")]),t._v(" "),v("td",[t._v("function")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("否")]),t._v(" "),v("td",[t._v("接口调用结束的回调函数（调用成功、失败都会执行）")])])])]),t._v(" "),v("h2",{attrs:{id:"错误"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#错误","aria-hidden":"true"}},[t._v("#")]),t._v(" 错误")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("错误码")]),t._v(" "),v("th",[t._v("错误信息")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("0")]),t._v(" "),v("td",[t._v("ok")]),t._v(" "),v("td",[t._v("正常")])]),t._v(" "),v("tr",[v("td",[t._v("10000")]),t._v(" "),v("td",[t._v("not init")]),t._v(" "),v("td",[t._v("未初始化蓝牙适配器")])]),t._v(" "),v("tr",[v("td",[t._v("10001")]),t._v(" "),v("td",[t._v("not available")]),t._v(" "),v("td",[t._v("当前蓝牙适配器不可用")])]),t._v(" "),v("tr",[v("td",[t._v("10002")]),t._v(" "),v("td",[t._v("no device")]),t._v(" "),v("td",[t._v("没有找到指定设备")])]),t._v(" "),v("tr",[v("td",[t._v("10003")]),t._v(" "),v("td",[t._v("connection fail")]),t._v(" "),v("td",[t._v("连接失败")])]),t._v(" "),v("tr",[v("td",[t._v("10004")]),t._v(" "),v("td",[t._v("no service")]),t._v(" "),v("td",[t._v("没有找到指定服务")])]),t._v(" "),v("tr",[v("td",[t._v("10005")]),t._v(" "),v("td",[t._v("no characteristic")]),t._v(" "),v("td",[t._v("没有找到指定特征值")])]),t._v(" "),v("tr",[v("td",[t._v("10006")]),t._v(" "),v("td",[t._v("no connection")]),t._v(" "),v("td",[t._v("当前连接已断开")])]),t._v(" "),v("tr",[v("td",[t._v("10007")]),t._v(" "),v("td",[t._v("property not support")]),t._v(" "),v("td",[t._v("当前特征值不支持此操作")])]),t._v(" "),v("tr",[v("td",[t._v("10008")]),t._v(" "),v("td",[t._v("system error")]),t._v(" "),v("td",[t._v("其余所有系统上报的异常")])]),t._v(" "),v("tr",[v("td",[t._v("10009")]),t._v(" "),v("td",[t._v("system not support")]),t._v(" "),v("td",[t._v("系统不支持")])]),t._v(" "),v("tr",[v("td",[t._v("10012")]),t._v(" "),v("td",[t._v("operate time out")]),t._v(" "),v("td",[t._v("连接超时")])]),t._v(" "),v("tr",[v("td",[t._v("10013")]),t._v(" "),v("td",[t._v("invalid_data")]),t._v(" "),v("td",[t._v("连接 deviceId 为空或者是格式不正确")])])])]),t._v(" "),v("h2",{attrs:{id:"注意"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#注意","aria-hidden":"true"}},[t._v("#")]),t._v(" 注意")]),t._v(" "),v("ul",[v("li",[t._v("其他蓝牙相关 API 必须在 "),v("router-link",{attrs:{to:"/api/device/bluetooth/qa.openBluetoothAdapter.html"}},[t._v("qa.openBluetoothAdapter")]),t._v(" 调用之后使用。否则 API 会返回错误（errCode=10000）。")],1),t._v(" "),v("li",[t._v("在用户蓝牙开关未开启或者手机不支持蓝牙功能的情况下，调用 "),v("router-link",{attrs:{to:"/api/device/bluetooth/qa.openBluetoothAdapter.html"}},[t._v("qa.openBluetoothAdapter")]),t._v(" 会返回错误（errCode=10001），表示手机蓝牙功能不可用。此时快应用蓝牙模块已经初始化完成，可通过 "),v("router-link",{attrs:{to:"/api/device/bluetooth/qa.onBluetoothAdapterStateChange.html"}},[t._v("qa.onBluetoothAdapterStateChange")]),t._v(" 监听手机蓝牙状态的改变，也可以调用蓝牙模块的所有 API。")],1)]),t._v(" "),v("h2",{attrs:{id:"示例代码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#示例代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),v("div",{staticClass:"language-js line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-js"}},[v("code",[t._v("qa"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("openBluetoothAdapter")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("success")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br"),v("span",{staticClass:"line-number"},[t._v("4")]),v("br"),v("span",{staticClass:"line-number"},[t._v("5")]),v("br")])])])}),[],!1,null,null,null);a.default=_.exports}}]);