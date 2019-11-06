(window.webpackJsonp=window.webpackJsonp||[]).push([[278],{489:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"uploadtask-qa-uploadfile-object-object"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uploadtask-qa-uploadfile-object-object","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("router-link",{attrs:{to:"/api/network/upload/UploadTask.html"}},[t._v("UploadTask")]),t._v(" qa.uploadFile(Object object)")],1),t._v(" "),s("p",[t._v("将本地文件上传到服务器端")]),t._v(" "),s("p",[t._v("客户端发起一个 HTTPS POST 请求，其中 "),s("code",[t._v("content-type")]),t._v(" 为 "),s("code",[t._v("multipart/form-data")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数","aria-hidden":"true"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),s("h3",{attrs:{id:"object-object"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#object-object","aria-hidden":"true"}},[t._v("#")]),t._v(" Object object")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("属性")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[s("div",{staticStyle:{width:"50px"}},[t._v("默认值")])]),t._v(" "),s("th",[s("div",{staticStyle:{width:"50px"}},[t._v("必填")])]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("url")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("服务器地址")])]),t._v(" "),s("tr",[s("td",[t._v("filePath")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("要上传文件的路径")])]),t._v(" "),s("tr",[s("td",[t._v("name")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("文件名")])]),t._v(" "),s("tr",[s("td",[t._v("header")]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("HTTP 请求 Header，不支持 Referer")])]),t._v(" "),s("tr",[s("td",[t._v("formData")]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("HTTP 请求中其他额外的 form data")])]),t._v(" "),s("tr",[s("td",[t._v("success")]),t._v(" "),s("td",[t._v("function")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("接口调用成功的回调函数")])]),t._v(" "),s("tr",[s("td",[t._v("fail")]),t._v(" "),s("td",[t._v("function")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("接口调用失败的回调函数")])]),t._v(" "),s("tr",[s("td",[t._v("complete")]),t._v(" "),s("td",[t._v("function")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("接口调用结束的回调函数（调用成功、失败都会执行）")])])])]),t._v(" "),s("h4",{attrs:{id:"object-success-回调函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#object-success-回调函数","aria-hidden":"true"}},[t._v("#")]),t._v(" object.success 回调函数")]),t._v(" "),s("h5",{attrs:{id:"参数-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),s("h6",{attrs:{id:"object-res"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#object-res","aria-hidden":"true"}},[t._v("#")]),t._v(" Object res")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("属性")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("data")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("服务器返回的数据")])]),t._v(" "),s("tr",[s("td",[t._v("statusCode")]),t._v(" "),s("td",[t._v("number")]),t._v(" "),s("td",[t._v("服务器返回的 HTTP 状态码")])])])]),t._v(" "),s("h2",{attrs:{id:"返回值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#返回值","aria-hidden":"true"}},[t._v("#")]),t._v(" 返回值")]),t._v(" "),s("h3",{attrs:{id:"uploadtask"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uploadtask","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("router-link",{attrs:{to:"/api/network/upload/UploadTask.html"}},[t._v("UploadTask")])],1),t._v(" "),s("p",[t._v("用于监听上传进度进度变化的事件和取消上传的实例")]),t._v(" "),s("h2",{attrs:{id:"示例代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("qa"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chooseImage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("success")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" tempFilePaths "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tempFilePaths\n    qa"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("uploadFile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://example.quickapp.cn/upload'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//仅为示例，非真实的接口地址")]),t._v("\n      filePath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tempFilePaths"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'file'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      formData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        user2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test2'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("success")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//do something")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);