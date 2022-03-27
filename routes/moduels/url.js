const express = require('express')
const router = express.Router()

const generatePassword = require('../../generatePassword')

const Url = require('../../models/url')


router.post('/', (req, res) => {
  const shortUrl = generatePassword()
  const link = req.headers.origin + '/'
  Url.findOne({ Url: req.body.url })
    // 輸入相同網址 return 同一網址
    .then(urls => urls ? urls : Url.create({ Url: req.body.url, shortUrl }))
    .then(urls => {
      const shortUrl = link + urls.shortUrl
      if (shortUrl.length > 27) {
        return res.render('success', {
          Url: urls.Url,
          shortUrl: urls.shortUrl
        })
      } else {
        return res.render('success', {
          Url: urls.Url,
          shortUrl: shortUrl
        })
      }
    })
    .catch(error => console.log(error))
})

router.get('/:shortUrl', (req, res) => {
  const shortenURL = req.params.shortUrl
  Url.findOne({ urlShort: `http://localhost:3000/${shortenURL}` })
    .then(data => {
      return res.redirect(`${data.Url}`)
    })
    .catch(error => res.render('error', { error: error }))
})

module.exports = router