require('dotenv').config()

const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')

app.use(express.json())

const posts = [
     {
          username : "Sneha",
          title : "Post1"
     },
     {
          username : "Neha",
          title : "Post2"
     }
]

app.get('/posts', (req, res) => {
     res.json(posts)
})

app.post('/login', (req, res) => {
  const username = req.body.username
  const user = { name: username }

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
  res.json({ accessToken : accessToken})
})

app.listen(3000);