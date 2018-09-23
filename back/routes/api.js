const express = require('express')
const Feed = require('rss-to-json');

const db = require('../db')

const router = express.Router()
router.use(express.json())



router.get('/rss', (req, res) => {
  Feed.load('https://meduza.io/rss/all', (err, rss) => {
    res.json(rss)
  });
})

// router.get('/getAllMusicList', (req, res) => {
//   db.
// })

//  router.post('/submitemusic', (req, res) => {
//    const newMusicList = req.body
//  })

module.exports = router
