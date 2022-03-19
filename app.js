// 載入 express 並建構應用程式伺服器
const express = require('express')
// 載入 mongoose 
const mongoose = require('mongoose')



const app = express()

// 設定連線到 mongoDB
mongoose.connect('mongodb://localhost/shortenURL', { useNewUrlParser: true, useUnifiedTopology: true })

// 取得資料庫連線狀態
const db = mongoose.connection
// 連線異常
db.on('error', () => {
  console.log('mongoDB error')
})
// 連線成功
db.once('open', () => {
  console.log('mongodb connected!')
})


// 設定首頁路由
app.get('/', (req, res) => {
  res.send('hi')
})


// 設定 port 3000
app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})
