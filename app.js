// 載入 express 並建構應用程式伺服器
const express = require('express')
// 載入 mongoose 
const mongoose = require('mongoose')
// 載入 handlebars
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

const generatePassword = require('./generatePassword')

const Url = require('./models/url')
const url = require('./models/url')

const app = express()
const port = 3000

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

app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')


// 設定首頁路由
app.get('/', (req, res) => {
  res.render('index')
})


app.post('/', (req, res) => {
  const shortUrl = generatePassword()
  const link = `http://localhost:3000/`
  Url.findOne({ Url: req.body.url })
    // 輸入相同網址 return 同一網址
    .then(urls => urls ? urls : Url.create({ Url: req.body.url, shortUrl }))
    .then(urls => {
      const shortUrl = link + urls.shortUrl
      if (shortUrl.length > 27) {
        return res.render('success', {
          Url: urls.Url,
          shortUrl: urls.shortUrl,
        })
      } else {
        return res.render('success', {
          Url: urls.Url,
          shortUrl: shortUrl,
        })
      }
    })
    .catch(error => console.log(error))
})

app.get('/:shortUrl',(req, res) => {
  const shortenURL = req.params.shortUrl
  Url.findOne({ urlShort: `http://localhost:3000/${shortenURL}` })
    .then(data => {
      return res.redirect(`${data.Url}`)
    })
    .catch(error => console.log(error))
})

// 設定 port 3000
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})
