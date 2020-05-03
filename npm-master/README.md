##登录返回参数说明

1. err = 0 ：登录成功
2. err = -1 ：用户名不存在
3. err = -2 ：密码错误
4. err = -3：用户名为空
5. err = -4：其他错误

##前后端交互

1. 前端：ajax 通过API接口传递数据
2. 后端：通过api接受数据
3. 后端：处理数据
4. 后端：返回数据 {err:0 -1,msg:   data:}
5. 前端：接收数据 页面的刷新渲染

##技术实现

1. 后端：nodejs
2. 数据库：mongodb
3. 远程登录协议：ssh2