(window.webpackJsonp=window.webpackJsonp||[]).push([[408],{625:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"navigator"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#navigator","aria-hidden":"true"}},[t._v("#")]),t._v(" navigator")]),t._v(" "),s("p",[t._v("页面链接。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("属性")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("默认值")]),t._v(" "),s("th",[s("div",{staticStyle:{width:"50px"}},[t._v("必填 ")])]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("target")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("self")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("在哪个目标上发生跳转，默认当前快应用")])]),t._v(" "),s("tr",[s("td",[t._v("url")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("当前快应用内的跳转链接")])]),t._v(" "),s("tr",[s("td",[t._v("open-type")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("navigate")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("跳转方式")])]),t._v(" "),s("tr",[s("td",[t._v("delta")]),t._v(" "),s("td",[t._v("number")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("当 open-type 为 'navigateBack' 时有效，表示回退的层数")])]),t._v(" "),s("tr",[s("td",[t._v("app-id")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("当"),s("code",[t._v('target="quickApp"')]),t._v("时有效，要打开的快应用 appId")])]),t._v(" "),s("tr",[s("td",[t._v("path")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("当"),s("code",[t._v('target="quickApp"')]),t._v("时有效，打开的页面路径，如果为空则打开首页")])]),t._v(" "),s("tr",[s("td",[t._v("extra-data")]),t._v(" "),s("td",[t._v("object")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("当"),s("code",[t._v('target="quickApp"')]),t._v("时有效，需要传递给目标快应用的数据，目标快应用可在 "),s("code",[t._v("App.onLaunch()")]),t._v("，"),s("code",[t._v("App.onShow()")]),t._v(" 中获取到这份数据。"),s("router-link",{attrs:{to:"/framework/app-service/app.html"}},[t._v("详情")])],1)]),t._v(" "),s("tr",[s("td",[t._v("hover-class")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("navigator-hover")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("指定点击时的样式类，当"),s("code",[t._v('hover-class="none"')]),t._v("时，没有点击态效果")])]),t._v(" "),s("tr",[s("td",[t._v("hover-stop-propagation")]),t._v(" "),s("td",[t._v("boolean")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("指定是否阻止本节点的祖先节点出现点击态")])]),t._v(" "),s("tr",[s("td",[t._v("hover-start-time")]),t._v(" "),s("td",[t._v("number")]),t._v(" "),s("td",[t._v("50")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("按住后多久出现点击态，单位毫秒")])]),t._v(" "),s("tr",[s("td",[t._v("hover-stay-time")]),t._v(" "),s("td",[t._v("number")]),t._v(" "),s("td",[t._v("600")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("手指松开后点击态保留时间，单位毫秒")])]),t._v(" "),s("tr",[s("td",[t._v("bindsuccess")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("当"),s("code",[t._v('target="quickApp"')]),t._v("时有效，跳转快应用成功")])]),t._v(" "),s("tr",[s("td",[t._v("bindfail")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("当"),s("code",[t._v('target="quickApp"')]),t._v("时有效，跳转快应用失败")])]),t._v(" "),s("tr",[s("td",[t._v("bindcomplete")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("当"),s("code",[t._v('target="quickApp"')]),t._v("时有效，跳转快应用完成")])])])]),t._v(" "),s("p",[s("strong",[t._v("target 的合法值")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("值")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("self")]),t._v(" "),s("td",[t._v("当前快应用")])]),t._v(" "),s("tr",[s("td",[t._v("quickApp")]),t._v(" "),s("td",[t._v("其它快应用")])])])]),t._v(" "),s("p",[s("strong",[t._v("open-type 的合法值")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("值")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("navigate")]),t._v(" "),s("td",[t._v("对应 "),s("router-link",{attrs:{to:"/api/route/qa.navigateTo.html"}},[t._v("qa.navigateTo")]),t._v(" 或 "),s("router-link",{attrs:{to:"/api/open-api/quickapp-navigate/qa.navigateToQuickapp.html"}},[t._v("qa.navigateToQuickapp")]),t._v(" 的功能")],1)]),t._v(" "),s("tr",[s("td",[t._v("redirect")]),t._v(" "),s("td",[t._v("对应 "),s("router-link",{attrs:{to:"/api/route/qa.redirectTo.html"}},[t._v("qa.redirectTo")]),t._v(" 的功能")],1)]),t._v(" "),s("tr",[s("td",[t._v("switchTab")]),t._v(" "),s("td",[t._v("对应 "),s("router-link",{attrs:{to:"/api/route/qa.switchTab.html"}},[t._v("qa.switchTab")]),t._v(" 的功能")],1)]),t._v(" "),s("tr",[s("td",[t._v("reLaunch")]),t._v(" "),s("td",[t._v("对应 "),s("router-link",{attrs:{to:"/api/route/qa.reLaunch.html"}},[t._v("qa.reLaunch")]),t._v(" 的功能")],1)]),t._v(" "),s("tr",[s("td",[t._v("navigateBack")]),t._v(" "),s("td",[t._v("对应 "),s("router-link",{attrs:{to:"/api/route/qa.navigateBack.html"}},[t._v("qa.navigateBack")]),t._v(" 的功能")],1)]),t._v(" "),s("tr",[s("td",[t._v("exit")]),t._v(" "),s("td",[t._v("退出快应用，"),s("code",[t._v('target="quickApp"')]),t._v("时生效")])])])]),t._v(" "),s("h4",{attrs:{id:"使用限制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用限制","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用限制")]),t._v(" "),s("div",{staticClass:"danger custom-block"},[s("ul",[s("li",[t._v("在跳转至其他快应用前，将统一增加弹窗，询问是否跳转，用户确认后才可以跳转其他快应用。如果用户点击取消，则回调 "),s("code",[t._v("fail cancel")]),t._v("。")])])]),t._v(" "),s("h2",{attrs:{id:"bug-tip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bug-tip","aria-hidden":"true"}},[t._v("#")]),t._v(" Bug & Tip")]),t._v(" "),s("div",{staticClass:"warning custom-block"},[s("ul",[s("li",[s("code",[t._v("navigator-hover")]),t._v(" 默认为 "),s("code",[t._v("{background-color: rgba(0, 0, 0, 0.1); opacity: 0.7;}")]),t._v(", "),s("router-link",{attrs:{to:"/component/navigator.html"}},[t._v("navigator")]),t._v(" 的子节点背景色应为透明色")],1)])]),t._v(" "),s("h2",{attrs:{id:"示例代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".navigator-hover")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" blue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".other-navigator-hover")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- sample.qxml --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("btn-area"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("navigator")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/page/navigate/navigate?title=navigate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("hover-class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("navigator-hover"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("跳转到新页面"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("navigator")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("navigator")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("../../redirect/redirect/redirect?title=redirect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("open-type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("redirect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("hover-class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("other-navigator-hover"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("在当前页打开"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("navigator")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("navigator")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/page/index/index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("open-type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("switchTab"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("hover-class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("other-navigator-hover"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("切换 Tab"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("navigator")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("navigator")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("target")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("quickApp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("open-type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("navigate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("app-id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("extra-data")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("version")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("release"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("打开绑定的快应用"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("navigator")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br")])]),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- navigator.qxml --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token style-attr language-css"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('="')]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-align")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("center")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" {{title}} "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" 点击左上角返回回到之前页面 "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- redirect.qxml --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token style-attr language-css"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('="')]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-align")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("center")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" {{title}} "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" 点击左上角返回回到上级页面 "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Page")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onLoad")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("options")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);