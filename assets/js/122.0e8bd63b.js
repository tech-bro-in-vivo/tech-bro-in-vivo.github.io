(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{335:function(t,v,s){"use strict";s.r(v);var _=s(0),a=Object(_.a)({},(function(){var t=this,v=t.$createElement,s=t._self._c||v;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"qa-startbluetoothdevicesdiscovery-object-object"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#qa-startbluetoothdevicesdiscovery-object-object","aria-hidden":"true"}},[t._v("#")]),t._v(" qa.startBluetoothDevicesDiscovery(Object object)")]),t._v(" "),s("p",[t._v("开始搜寻附近的蓝牙外围设备。"),s("strong",[t._v("此操作比较耗费系统资源，请在搜索并连接到设备后调用 "),s("router-link",{attrs:{to:"/api/device/bluetooth/qa.stopBluetoothDevicesDiscovery.html"}},[t._v("qa.stopBluetoothDevicesDiscovery")]),t._v(" 方法停止搜索。")],1)]),t._v(" "),s("h2",{attrs:{id:"参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数","aria-hidden":"true"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),s("h3",{attrs:{id:"object-object"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#object-object","aria-hidden":"true"}},[t._v("#")]),t._v(" Object object")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("属性")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[s("div",{staticStyle:{width:"50px"}},[t._v("默认值")])]),t._v(" "),s("th",[s("div",{staticStyle:{width:"50px"}},[t._v("必填")])]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("services")]),t._v(" "),s("td",[t._v("Array.<string>")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("要搜索的蓝牙设备主 service 的 uuid 列表。某些蓝牙设备会广播自己的主 service 的 uuid。如果设置此参数，则只搜索广播包有对应 uuid 的主服务的蓝牙设备。建议主要通过该参数过滤掉周边不需要处理的其他蓝牙设备。")])]),t._v(" "),s("tr",[s("td",[t._v("allowDuplicatesKey")]),t._v(" "),s("td",[t._v("boolean")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("是否允许重复上报同一设备。如果允许重复上报，则 "),s("a",{attrs:{href:"(qa.onBlueToothDeviceFound)"}},[t._v("qa.onBlueToothDeviceFound")]),t._v(" 方法会多次上报同一设备，但是 RSSI 值会有不同。")])]),t._v(" "),s("tr",[s("td",[t._v("interval")]),t._v(" "),s("td",[t._v("number")]),t._v(" "),s("td",[t._v("0")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("上报设备的间隔。0 表示找到新设备立即上报，其他数值根据传入的间隔上报。")])]),t._v(" "),s("tr",[s("td",[t._v("success")]),t._v(" "),s("td",[t._v("function")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("接口调用成功的回调函数")])]),t._v(" "),s("tr",[s("td",[t._v("fail")]),t._v(" "),s("td",[t._v("function")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("接口调用失败的回调函数")])]),t._v(" "),s("tr",[s("td",[t._v("complete")]),t._v(" "),s("td",[t._v("function")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("接口调用结束的回调函数（调用成功、失败都会执行）")])])])]),t._v(" "),s("h2",{attrs:{id:"错误"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#错误","aria-hidden":"true"}},[t._v("#")]),t._v(" 错误")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("错误码")]),t._v(" "),s("th",[t._v("错误信息")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("0")]),t._v(" "),s("td",[t._v("ok")]),t._v(" "),s("td",[t._v("正常")])]),t._v(" "),s("tr",[s("td",[t._v("10000")]),t._v(" "),s("td",[t._v("not init")]),t._v(" "),s("td",[t._v("未初始化蓝牙适配器")])]),t._v(" "),s("tr",[s("td",[t._v("10001")]),t._v(" "),s("td",[t._v("not available")]),t._v(" "),s("td",[t._v("当前蓝牙适配器不可用")])]),t._v(" "),s("tr",[s("td",[t._v("10002")]),t._v(" "),s("td",[t._v("no device")]),t._v(" "),s("td",[t._v("没有找到指定设备")])]),t._v(" "),s("tr",[s("td",[t._v("10003")]),t._v(" "),s("td",[t._v("connection fail")]),t._v(" "),s("td",[t._v("连接失败")])]),t._v(" "),s("tr",[s("td",[t._v("10004")]),t._v(" "),s("td",[t._v("no service")]),t._v(" "),s("td",[t._v("没有找到指定服务")])]),t._v(" "),s("tr",[s("td",[t._v("10005")]),t._v(" "),s("td",[t._v("no characteristic")]),t._v(" "),s("td",[t._v("没有找到指定特征值")])]),t._v(" "),s("tr",[s("td",[t._v("10006")]),t._v(" "),s("td",[t._v("no connection")]),t._v(" "),s("td",[t._v("当前连接已断开")])]),t._v(" "),s("tr",[s("td",[t._v("10007")]),t._v(" "),s("td",[t._v("property not support")]),t._v(" "),s("td",[t._v("当前特征值不支持此操作")])]),t._v(" "),s("tr",[s("td",[t._v("10008")]),t._v(" "),s("td",[t._v("system error")]),t._v(" "),s("td",[t._v("其余所有系统上报的异常")])]),t._v(" "),s("tr",[s("td",[t._v("10009")]),t._v(" "),s("td",[t._v("system not support")]),t._v(" "),s("td",[t._v("系统不支持")])]),t._v(" "),s("tr",[s("td",[t._v("10012")]),t._v(" "),s("td",[t._v("operate time out")]),t._v(" "),s("td",[t._v("连接超时")])]),t._v(" "),s("tr",[s("td",[t._v("10013")]),t._v(" "),s("td",[t._v("invalid_data")]),t._v(" "),s("td",[t._v("连接 deviceId 为空或者是格式不正确")])])])]),t._v(" "),s("h2",{attrs:{id:"示例代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 以快应用硬件平台的蓝牙智能灯为例，主服务的 UUID 是 FEE7。传入这个参数，只搜索主服务 UUID 为 FEE7 的设备")]),t._v("\nqa"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("startBluetoothDevicesDiscovery")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  services"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'FEE7'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("success")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])])])}),[],!1,null,null,null);v.default=a.exports}}]);