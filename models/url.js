const mongoose = require('mongoose')
const Schema = mongoose.Schema
const urlSchema = new Schema({
  // 原版資料
  Url: {
    type: String,   // 資料型別為字串
    required: true, // 這個是必填欄位
    
  },
  // 短網址資料
  shortUrl: {
    type: String,
    required: true,
  }
})

module.exports = mongoose.model('URL', urlSchema)