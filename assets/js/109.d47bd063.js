(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{322:function(t,v,_){"use strict";_.r(v);var e=_(0),s=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"qa-getbledeviceservices-object-object"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#qa-getbledeviceservices-object-object","aria-hidden":"true"}},[t._v("#")]),t._v(" qa.getBLEDeviceServices(Object object)")]),t._v(" "),_("p",[t._v("获取蓝牙设备所有服务(service)。")]),t._v(" "),_("h2",{attrs:{id:"参数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参数","aria-hidden":"true"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),_("h3",{attrs:{id:"object-object"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#object-object","aria-hidden":"true"}},[t._v("#")]),t._v(" Object object")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("属性")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[_("div",{staticStyle:{width:"50px"}},[t._v("默认值")])]),t._v(" "),_("th",[_("div",{staticStyle:{width:"50px"}},[t._v("必填")])]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("deviceId")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("是")]),t._v(" "),_("td",[t._v("蓝牙设备 id")])]),t._v(" "),_("tr",[_("td",[t._v("success")]),t._v(" "),_("td",[t._v("function")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("接口调用成功的回调函数")])]),t._v(" "),_("tr",[_("td",[t._v("fail")]),t._v(" "),_("td",[t._v("function")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("接口调用失败的回调函数")])]),t._v(" "),_("tr",[_("td",[t._v("complete")]),t._v(" "),_("td",[t._v("function")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("接口调用结束的回调函数（调用成功、失败都会执行）")])])])]),t._v(" "),_("h4",{attrs:{id:"object-success-回调函数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#object-success-回调函数","aria-hidden":"true"}},[t._v("#")]),t._v(" object.success 回调函数")]),t._v(" "),_("h5",{attrs:{id:"参数-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参数-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),_("h6",{attrs:{id:"object-res"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#object-res","aria-hidden":"true"}},[t._v("#")]),t._v(" Object res")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("属性")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("services")]),t._v(" "),_("td",[t._v("Array.<Object>")]),t._v(" "),_("td",[t._v("设备服务列表")])])])]),t._v(" "),_("p",[_("strong",[t._v("res.services 的结构")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("属性")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("uuid")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("蓝牙设备服务的 uuid")])]),t._v(" "),_("tr",[_("td",[t._v("isPrimary")]),t._v(" "),_("td",[t._v("boolean")]),t._v(" "),_("td",[t._v("该服务是否为主服务")])])])]),t._v(" "),_("h2",{attrs:{id:"错误"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#错误","aria-hidden":"true"}},[t._v("#")]),t._v(" 错误")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("错误码")]),t._v(" "),_("th",[t._v("错误信息")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("0")]),t._v(" "),_("td",[t._v("ok")]),t._v(" "),_("td",[t._v("正常")])]),t._v(" "),_("tr",[_("td",[t._v("10000")]),t._v(" "),_("td",[t._v("not init")]),t._v(" "),_("td",[t._v("未初始化蓝牙适配器")])]),t._v(" "),_("tr",[_("td",[t._v("10001")]),t._v(" "),_("td",[t._v("not available")]),t._v(" "),_("td",[t._v("当前蓝牙适配器不可用")])]),t._v(" "),_("tr",[_("td",[t._v("10002")]),t._v(" "),_("td",[t._v("no device")]),t._v(" "),_("td",[t._v("没有找到指定设备")])]),t._v(" "),_("tr",[_("td",[t._v("10003")]),t._v(" "),_("td",[t._v("connection fail")]),t._v(" "),_("td",[t._v("连接失败")])]),t._v(" "),_("tr",[_("td",[t._v("10004")]),t._v(" "),_("td",[t._v("no service")]),t._v(" "),_("td",[t._v("没有找到指定服务")])]),t._v(" "),_("tr",[_("td",[t._v("10005")]),t._v(" "),_("td",[t._v("no characteristic")]),t._v(" "),_("td",[t._v("没有找到指定特征值")])]),t._v(" "),_("tr",[_("td",[t._v("10006")]),t._v(" "),_("td",[t._v("no connection")]),t._v(" "),_("td",[t._v("当前连接已断开")])]),t._v(" "),_("tr",[_("td",[t._v("10007")]),t._v(" "),_("td",[t._v("property not support")]),t._v(" "),_("td",[t._v("当前特征值不支持此操作")])]),t._v(" "),_("tr",[_("td",[t._v("10008")]),t._v(" "),_("td",[t._v("system error")]),t._v(" "),_("td",[t._v("其余所有系统上报的异常")])]),t._v(" "),_("tr",[_("td",[t._v("10009")]),t._v(" "),_("td",[t._v("system not support")]),t._v(" "),_("td",[t._v("系统不支持")])]),t._v(" "),_("tr",[_("td",[t._v("10012")]),t._v(" "),_("td",[t._v("operate time out")]),t._v(" "),_("td",[t._v("连接超时")])]),t._v(" "),_("tr",[_("td",[t._v("10013")]),t._v(" "),_("td",[t._v("invalid_data")]),t._v(" "),_("td",[t._v("连接 deviceId 为空或者是格式不正确")])])])]),t._v(" "),_("h2",{attrs:{id:"示例代码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#示例代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),_("div",{staticClass:"language-js line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-js"}},[_("code",[t._v("qa"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBLEDeviceServices")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接")]),t._v("\n  deviceId"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("success")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'device services:'")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("services"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br"),_("span",{staticClass:"line-number"},[t._v("5")]),_("br"),_("span",{staticClass:"line-number"},[t._v("6")]),_("br"),_("span",{staticClass:"line-number"},[t._v("7")]),_("br")])])])}),[],!1,null,null,null);v.default=s.exports}}]);