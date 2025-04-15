const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// 中间件配置
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// 带随机延迟的聊天接口
app.post('/api/chat', (req, res) => {
  const delay = Math.floor(Math.random() * 2000) + 3500; //随机延迟
  console.log(`[请求处理] 消息："${req.body.message}" 延迟：${delay}ms`);

  setTimeout(() => {
    res.json({ message: "请说人话,谢谢。" });
    console.log(`[请求处理] 已返回信息`);
  }, delay);
});

// 启动服务
app.listen(port, () => {
  console.log(`网站端口：${port}，本地链接：http://localhost:${port}`);
});