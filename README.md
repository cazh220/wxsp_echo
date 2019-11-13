# wxsp_echo
# 小程序实现socket.io实时推送消息
# 环境：后端laravel+redis+laravel-echo-server  小程序前端代码参考本例

step 1.
搭建好服务端环境（略）

step 2.  引入库文件
小程序端app.js 引入libs库里的文件
const io = require('libs/weapp.socket.io.js')
const Echo = require("libs/echo.js")

step 3.  初始化echo
在app.js里初始化echo，并建立与服务端连接

that.globalData.laravelEcho = new Echo({
  broadcaster: 'socket.io',
  host: 'https://api接口域名:6001',
});


step 4.  消息页面监听
页面监听服务端实时发送的消息，
app.globalData.laravelEcho.private('App.User.' + uid).notification((notification) => {
  console.log(notification)
})

至此小程序实时监听完成

