(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{386:function(t,a,n){"use strict";n.r(a);var e=n(0),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"inneraudiocontext"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#inneraudiocontext","aria-hidden":"true"}},[t._v("#")]),t._v(" InnerAudioContext")]),t._v(" "),n("p",[t._v("InnerAudioContext 实例")]),t._v(" "),n("p",[t._v("可以通过 "),n("router-link",{attrs:{to:"/api/media/audio/qa.createInnerAudioContext.html"}},[t._v("qa.createInnerAudioContext")]),t._v(" 接口创建实例。")],1),t._v(" "),n("h2",{attrs:{id:"属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#属性","aria-hidden":"true"}},[t._v("#")]),t._v(" 属性")]),t._v(" "),n("h3",{attrs:{id:"string-src"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#string-src","aria-hidden":"true"}},[t._v("#")]),t._v(" string src")]),t._v(" "),n("p",[t._v("用于播放的音频资源地址")]),t._v(" "),n("h3",{attrs:{id:"number-starttime"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#number-starttime","aria-hidden":"true"}},[t._v("#")]),t._v(" number startTime")]),t._v(" "),n("p",[t._v("开始播放的位置（单位：s），默认为 0")]),t._v(" "),n("h3",{attrs:{id:"boolean-autoplay"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#boolean-autoplay","aria-hidden":"true"}},[t._v("#")]),t._v(" boolean autoplay")]),t._v(" "),n("p",[t._v("是否自动播放，默认为 "),n("code",[t._v("false")])]),t._v(" "),n("h3",{attrs:{id:"boolean-loop"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#boolean-loop","aria-hidden":"true"}},[t._v("#")]),t._v(" boolean loop")]),t._v(" "),n("p",[t._v("是否循环播放，默认为 "),n("code",[t._v("false")])]),t._v(" "),n("h3",{attrs:{id:"number-volume"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#number-volume","aria-hidden":"true"}},[t._v("#")]),t._v(" number volume")]),t._v(" "),n("p",[t._v("播放音频的音量。范围 0~1。默认是 1")]),t._v(" "),n("h3",{attrs:{id:"number-duration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#number-duration","aria-hidden":"true"}},[t._v("#")]),t._v(" number duration")]),t._v(" "),n("p",[t._v("当前音频资源的长度（单位 s）。只读属性，只在当前有合法的 src 时能返回")]),t._v(" "),n("h3",{attrs:{id:"number-currenttime"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#number-currenttime","aria-hidden":"true"}},[t._v("#")]),t._v(" number currentTime")]),t._v(" "),n("p",[t._v("当前音频的播放位置（单位 s）。只读属性，只有在当前有合法的 src 时返回")]),t._v(" "),n("h3",{attrs:{id:"boolean-paused"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#boolean-paused","aria-hidden":"true"}},[t._v("#")]),t._v(" boolean paused")]),t._v(" "),n("p",[t._v("当前是否暂停或停止状态（只读）")]),t._v(" "),n("h2",{attrs:{id:"方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 方法")]),t._v(" "),n("h3",{attrs:{id:"inneraudiocontext-play"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#inneraudiocontext-play","aria-hidden":"true"}},[t._v("#")]),t._v(" "),n("router-link",{attrs:{to:"/api/media/audio/InnerAudioContext.play.html"}},[t._v("InnerAudioContext.play()")])],1),t._v(" "),n("p",[t._v("播放音频")]),t._v(" "),n("h3",{attrs:{id:"inneraudiocontext-pause"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#inneraudiocontext-pause","aria-hidden":"true"}},[t._v("#")]),t._v(" "),n("router-link",{attrs:{to:"/api/media/audio/InnerAudioContext.pause.html"}},[t._v("InnerAudioContext.pause()")])],1),t._v(" "),n("p",[t._v("暂停播放音频，此时重新播放会从暂停处开始播放")]),t._v(" "),n("h3",{attrs:{id:"inneraudiocontext-stop"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#inneraudiocontext-stop","aria-hidden":"true"}},[t._v("#")]),t._v(" "),n("router-link",{attrs:{to:"/api/media/audio/InnerAudioContext.stop.html"}},[t._v("InnerAudioContext.stop()")])],1),t._v(" "),n("p",[t._v("停止播放音频，停止之后的重新播放会从头开始播放")]),t._v(" "),n("h3",{attrs:{id:"inneraudiocontext-seek-number-position"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#inneraudiocontext-seek-number-position","aria-hidden":"true"}},[t._v("#")]),t._v(" "),n("router-link",{attrs:{to:"/api/media/audio/InnerAudioContext.seek.html"}},[t._v("InnerAudioContext.seek(number position)")])],1),t._v(" "),n("p",[t._v("跳转到该音频的指定位置")]),t._v(" "),n("h3",{attrs:{id:"inneraudiocontext-destroy"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#inneraudiocontext-destroy","aria-hidden":"true"}},[t._v("#")]),t._v(" "),n("router-link",{attrs:{to:"/api/media/audio/InnerAudioContext.destroy.html"}},[t._v("InnerAudioContext.destroy()")])],1),t._v(" "),n("p",[t._v("销毁当前InnerAudioContext实例")]),t._v(" "),n("h3",{attrs:{id:"inneraudiocontext-oncanplay-function-callback"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#inneraudiocontext-oncanplay-function-callback","aria-hidden":"true"}},[t._v("#")]),t._v(" "),n("router-link",{attrs:{to:"/api/media/audio/InnerAudioContext.onCanplay.html"}},[t._v("InnerAudioContext.onCanplay(function callback)")])],1),t._v(" "),n("p",[t._v("订阅"),n("strong",[t._v("音频进入可以播放状态事件")]),t._v("回调，不能保证后续可以流畅播放")]),t._v(" "),n("h3",{attrs:{id:"inneraudiocontext-offcanplay-function-callback"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#inneraudiocontext-offcanplay-function-callback","aria-hidden":"true"}},[t._v("#")]),t._v(" "),n("router-link",{attrs:{to:"/api/media/audio/InnerAudioContext.offCanplay.html"}},[t._v("InnerAudioContext.offCanplay(function callback)")])],1),t._v(" "),n("p",[t._v("取消订阅"),n("strong",[t._v("音频进入可以播放状态事件")])]),t._v(" "),n("h3",{attrs:{id:"inneraudiocontext-onplay-function-callback"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#inneraudiocontext-onplay-function-callback","aria-hidden":"true"}},[t._v("#")]),t._v(" "),n("router-link",{attrs:{to:"/api/media/audio/InnerAudioContext.onPlay.html"}},[t._v("InnerAudioContext.onPlay(function callback)")])],1),t._v(" "),n("p",[t._v("订阅"),n("strong",[t._v("音频播放事件")]),t._v("回调")]),t._v(" "),n("h3",{attrs:{id:"inneraudiocontext-offplay-function-callback"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#inneraudiocontext-offplay-function-callback","aria-hidden":"true"}},[t._v("#")]),t._v(" "),n("router-link",{attrs:{to:"/api/media/audio/InnerAudioContext.offPlay.html"}},[t._v("InnerAudioContext.offPlay(function callback)")])],1),t._v(" "),n("p",[t._v("取消订阅"),n("strong",[t._v("音频播放事件")])]),t._v(" "),n("h3",{attrs:{id:"inneraudiocontext-onpause-function-callback"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#inneraudiocontext-onpause-function-callback","aria-hidden":"true"}},[t._v("#")]),t._v(" "),n("router-link",{attrs:{to:"/api/media/audio/InnerAudioContext.onPause.html"}},[t._v("InnerAudioContext.onPause(function callback)")])],1),t._v(" "),n("p",[t._v("订阅"),n("strong",[t._v("音频暂停事件")]),t._v("回调")]),t._v(" "),n("h3",{attrs:{id:"inneraudiocontext-offpause-function-callback"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#inneraudiocontext-offpause-function-callback","aria-hidden":"true"}},[t._v("#")]),t._v(" "),n("router-link",{attrs:{to:"/api/media/audio/InnerAudioContext.offPause.html"}},[t._v("InnerAudioContext.offPause(function callback)")])],1),t._v(" "),n("p",[t._v("取消订阅"),n("strong",[t._v("音频暂停事件")])]),t._v(" "),n("h3",{attrs:{id:"inneraudiocontext-onstop-function-callback"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#inneraudiocontext-onstop-function-callback","aria-hidden":"true"}},[t._v("#")]),t._v(" "),n("router-link",{attrs:{to:"/api/media/audio/InnerAudioContext.onStop.html"}},[t._v("InnerAudioContext.onStop(function callback)")])],1),t._v(" "),n("p",[t._v("订阅"),n("strong",[t._v("音频停止事件")]),t._v("回调")]),t._v(" "),n("h3",{attrs:{id:"inneraudiocontext-offstop-function-callback"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#inneraudiocontext-offstop-function-callback","aria-hidden":"true"}},[t._v("#")]),t._v(" "),n("router-link",{attrs:{to:"/api/media/audio/InnerAudioContext.offStop.html"}},[t._v("InnerAudioContext.offStop(function callback)")])],1),t._v(" "),n("p",[t._v("取消订阅"),n("strong",[t._v("音频停止事件")])]),t._v(" "),n("h3",{attrs:{id:"inneraudiocontext-onended-function-callback"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#inneraudiocontext-onended-function-callback","aria-hidden":"true"}},[t._v("#")]),t._v(" "),n("router-link",{attrs:{to:"/api/media/audio/InnerAudioContext.onEnded.html"}},[t._v("InnerAudioContext.onEnded(function callback)")])],1),t._v(" "),n("p",[t._v("订阅"),n("strong",[t._v("音频自然播放至结束的事件")]),t._v("回调")]),t._v(" "),n("h3",{attrs:{id:"inneraudiocontext-offended-function-callback"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#inneraudiocontext-offended-function-callback","aria-hidden":"true"}},[t._v("#")]),t._v(" "),n("router-link",{attrs:{to:"/api/media/audio/InnerAudioContext.offEnded.html"}},[t._v("InnerAudioContext.offEnded(function callback)")])],1),t._v(" "),n("p",[t._v("取消订阅"),n("strong",[t._v("音频自然播放至结束的事件")])]),t._v(" "),n("h3",{attrs:{id:"inneraudiocontext-ontimeupdate-function-callback"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#inneraudiocontext-ontimeupdate-function-callback","aria-hidden":"true"}},[t._v("#")]),t._v(" "),n("router-link",{attrs:{to:"/api/media/audio/InnerAudioContext.onTimeUpdate.html"}},[t._v("InnerAudioContext.onTimeUpdate(function callback)")])],1),t._v(" "),n("p",[t._v("订阅"),n("strong",[t._v("音频播放进度更新事件")]),t._v("回调")]),t._v(" "),n("h3",{attrs:{id:"inneraudiocontext-offtimeupdate-function-callback"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#inneraudiocontext-offtimeupdate-function-callback","aria-hidden":"true"}},[t._v("#")]),t._v(" "),n("router-link",{attrs:{to:"/api/media/audio/InnerAudioContext.offTimeUpdate.html"}},[t._v("InnerAudioContext.offTimeUpdate(function callback)")])],1),t._v(" "),n("p",[t._v("取消订阅"),n("strong",[t._v("音频播放进度更新事件")])]),t._v(" "),n("h3",{attrs:{id:"inneraudiocontext-onerror-function-callback"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#inneraudiocontext-onerror-function-callback","aria-hidden":"true"}},[t._v("#")]),t._v(" "),n("router-link",{attrs:{to:"/api/media/audio/InnerAudioContext.onError.html"}},[t._v("InnerAudioContext.onError(function callback)")])],1),t._v(" "),n("p",[t._v("订阅"),n("strong",[t._v("音频播放错误事件")]),t._v("回调")]),t._v(" "),n("h3",{attrs:{id:"inneraudiocontext-offerror-function-callback"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#inneraudiocontext-offerror-function-callback","aria-hidden":"true"}},[t._v("#")]),t._v(" "),n("router-link",{attrs:{to:"/api/media/audio/InnerAudioContext.offError.html"}},[t._v("InnerAudioContext.offError(function callback)")])],1),t._v(" "),n("p",[t._v("取消订阅"),n("strong",[t._v("音频播放错误事件")])]),t._v(" "),n("h3",{attrs:{id:"inneraudiocontext-onwaiting-function-callback"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#inneraudiocontext-onwaiting-function-callback","aria-hidden":"true"}},[t._v("#")]),t._v(" "),n("router-link",{attrs:{to:"/api/media/audio/InnerAudioContext.onWaiting.html"}},[t._v("InnerAudioContext.onWaiting(function callback)")])],1),t._v(" "),n("p",[t._v("订阅"),n("strong",[t._v("音频加载中事件")]),t._v("回调，当音频源因数据不足，需要停下来加载时会触发回调")]),t._v(" "),n("h3",{attrs:{id:"inneraudiocontext-offwaiting-function-callback"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#inneraudiocontext-offwaiting-function-callback","aria-hidden":"true"}},[t._v("#")]),t._v(" "),n("router-link",{attrs:{to:"/api/media/audio/InnerAudioContext.offWaiting.html"}},[t._v("InnerAudioContext.offWaiting(function callback)")])],1),t._v(" "),n("p",[t._v("取消订阅"),n("strong",[t._v("音频加载中事件")])]),t._v(" "),n("h3",{attrs:{id:"inneraudiocontext-onseeking-function-callback"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#inneraudiocontext-onseeking-function-callback","aria-hidden":"true"}},[t._v("#")]),t._v(" "),n("router-link",{attrs:{to:"/api/media/audio/InnerAudioContext.onSeeking.html"}},[t._v("InnerAudioContext.onSeeking(function callback)")])],1),t._v(" "),n("p",[t._v("订阅"),n("strong",[t._v("音频进行跳转操作的事件")]),t._v("回调")]),t._v(" "),n("h3",{attrs:{id:"inneraudiocontext-offseeking-function-callback"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#inneraudiocontext-offseeking-function-callback","aria-hidden":"true"}},[t._v("#")]),t._v(" "),n("router-link",{attrs:{to:"/api/media/audio/InnerAudioContext.offSeeking.html"}},[t._v("InnerAudioContext.offSeeking(function callback)")])],1),t._v(" "),n("p",[t._v("取消订阅"),n("strong",[t._v("音频进行跳转操作的事件")])]),t._v(" "),n("h3",{attrs:{id:"inneraudiocontext-onseeked-function-callback"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#inneraudiocontext-onseeked-function-callback","aria-hidden":"true"}},[t._v("#")]),t._v(" "),n("router-link",{attrs:{to:"/api/media/audio/InnerAudioContext.onSeeked.html"}},[t._v("InnerAudioContext.onSeeked(function callback)")])],1),t._v(" "),n("p",[t._v("订阅"),n("strong",[t._v("音频完成跳转操作的事件")]),t._v("回调")]),t._v(" "),n("h3",{attrs:{id:"inneraudiocontext-offseeked-function-callback"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#inneraudiocontext-offseeked-function-callback","aria-hidden":"true"}},[t._v("#")]),t._v(" "),n("router-link",{attrs:{to:"/api/media/audio/InnerAudioContext.offSeeked.html"}},[t._v("InnerAudioContext.offSeeked(function callback)")])],1),t._v(" "),n("p",[t._v("取消订阅"),n("strong",[t._v("音频完成跳转操作的事件")])]),t._v(" "),n("h2",{attrs:{id:"支持格式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#支持格式","aria-hidden":"true"}},[t._v("#")]),t._v(" 支持格式")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("格式")]),t._v(" "),n("th",[t._v("Android")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("flac")]),t._v(" "),n("td",[t._v("√")])]),t._v(" "),n("tr",[n("td",[t._v("m4a")]),t._v(" "),n("td",[t._v("√")])]),t._v(" "),n("tr",[n("td",[t._v("ogg")]),t._v(" "),n("td",[t._v("√")])]),t._v(" "),n("tr",[n("td",[t._v("ape")]),t._v(" "),n("td",[t._v("√")])]),t._v(" "),n("tr",[n("td",[t._v("amr")]),t._v(" "),n("td",[t._v("√")])]),t._v(" "),n("tr",[n("td",[t._v("wma")]),t._v(" "),n("td",[t._v("√")])]),t._v(" "),n("tr",[n("td",[t._v("wav")]),t._v(" "),n("td",[t._v("√")])]),t._v(" "),n("tr",[n("td",[t._v("mp3")]),t._v(" "),n("td",[t._v("√")])]),t._v(" "),n("tr",[n("td",[t._v("mp4")]),t._v(" "),n("td",[t._v("√")])]),t._v(" "),n("tr",[n("td",[t._v("aac")]),t._v(" "),n("td",[t._v("√")])]),t._v(" "),n("tr",[n("td",[t._v("aiff")]),t._v(" "),n("td",[t._v("x")])]),t._v(" "),n("tr",[n("td",[t._v("caf")]),t._v(" "),n("td",[t._v("x")])])])]),t._v(" "),n("h2",{attrs:{id:"示例代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#示例代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" innerAudioContext "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" qa"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createInnerAudioContext")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ninnerAudioContext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("autoplay "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\ninnerAudioContext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://xxx.quickapp.cn'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 示例地址，不存在该地址的真实音频")]),t._v("\ninnerAudioContext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onPlay")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'开始播放'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ninnerAudioContext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onError")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("errMsg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("errCode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);