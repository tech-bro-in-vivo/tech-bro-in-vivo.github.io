(window.webpackJsonp=window.webpackJsonp||[]).push([[438],{656:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"组件生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件生命周期","aria-hidden":"true"}},[t._v("#")]),t._v(" 组件生命周期")]),t._v(" "),a("p",[t._v("组件的生命周期，指的是组件自身的一些方法，会在组件生命流程特定的阶段触发。这些方法包括 "),a("code",[t._v("created")]),t._v(" "),a("code",[t._v("attached")]),t._v(" "),a("code",[t._v("ready")]),t._v(" "),a("code",[t._v("detached")]),t._v("，具体说明如下：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("created")]),t._v(": 组件实例刚刚被创建好时， "),a("code",[t._v("created")]),t._v(" 生命周期被触发。")]),t._v(" "),a("li",[a("code",[t._v("attached")]),t._v(": 在组件完全初始化完毕、进入页面节点树后， "),a("code",[t._v("attached")]),t._v(" 生命周期被触发。")]),t._v(" "),a("li",[a("code",[t._v("ready")]),t._v(": 在 attached 被触发之后触发")]),t._v(" "),a("li",[a("code",[t._v("detached")]),t._v(": 在组件离开页面节点树后， "),a("code",[t._v("detached")]),t._v(" 生命周期被触发。退出页面时，如果组件还在页面节点树中， "),a("code",[t._v("detached")]),t._v(" 也会被触发。")])]),t._v(" "),a("h2",{attrs:{id:"定义生命周期方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义生命周期方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 定义生命周期方法")]),t._v(" "),a("p",[t._v("生命周期方法可以直接定义在 "),a("code",[t._v("Component")]),t._v(" 构造器的顶层参数中。也可以在 "),a("code",[t._v("lifetimes")]),t._v(" 字段内进行声明（推荐写法，其优先级最高，会覆盖顶层参数中的同名方法）。")]),t._v(" "),a("p",[a("strong",[t._v("代码示例：")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  lifetimes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("attached")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("detached")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("p",[t._v("在 behaviors 中也可以编写生命周期方法，同时不会与其他 behaviors 中的同名生命周期相互覆盖。但要注意，如果一个组件多次直接或间接引用同一个 behavior ，这个 behavior 中的生命周期函数在一个执行时机内只会执行一次。")]),t._v(" "),a("p",[t._v("可用的全部生命周期如下表所示。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("生命周期")]),t._v(" "),a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("描述")]),t._v(" "),a("th",[t._v("最低版本")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("created")]),t._v(" "),a("td",[t._v("无")]),t._v(" "),a("td",[t._v("在组件实例刚刚被创建时执行")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("attached")]),t._v(" "),a("td",[t._v("无")]),t._v(" "),a("td",[t._v("在组件实例进入页面节点树时执行")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("ready")]),t._v(" "),a("td",[t._v("无")]),t._v(" "),a("td",[t._v("在组件在渲染层布局完成后执行")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("detached")]),t._v(" "),a("td",[t._v("无")]),t._v(" "),a("td",[t._v("在组件实例被从页面节点树移除时执行")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("error")]),t._v(" "),a("td",[a("code",[t._v("Object Error")])]),t._v(" "),a("td",[t._v("每当组件方法抛出错误时执行")]),t._v(" "),a("td")])])]),t._v(" "),a("h2",{attrs:{id:"组件所在页面的生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件所在页面的生命周期","aria-hidden":"true"}},[t._v("#")]),t._v(" 组件所在页面的生命周期")]),t._v(" "),a("p",[t._v("有时，组件需要获悉所在页面的状态变化，比如显示、隐藏切换，视窗尺寸变化等，这时可以利用 "),a("code",[t._v("pageLifetimes")]),t._v(" 定义方法监听。这些方法也称为“组件所在页面的生命周期”。其中可用的生命周期包括：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("生命周期")]),t._v(" "),a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("描述")]),t._v(" "),a("th",[t._v("最低版本")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("show")]),t._v(" "),a("td",[t._v("无")]),t._v(" "),a("td",[t._v("组件所在的页面显示时执行")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("hide")]),t._v(" "),a("td",[t._v("无")]),t._v(" "),a("td",[t._v("组件所在的页面隐藏时执行")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("resize")]),t._v(" "),a("td",[a("code",[t._v("Object Size")])]),t._v(" "),a("td",[t._v("组件所在的页面尺寸变化时执行")]),t._v(" "),a("td")])])]),t._v(" "),a("p",[a("strong",[t._v("代码示例：")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  pageLifetimes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("show")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 页面显示时触发")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("hide")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 页面隐藏时触发")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("resize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 页面尺寸变化时触发")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);