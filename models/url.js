const mongoose = require('mongoose')
const Schema = mongoose.Schema
const urlSchema = new Schema({
  url: {
    type: String,   // 資料型別為字串
    required: true, // 這個是必填欄位
  }
})

module.exports = mongoose.model('URL', urlSchema)