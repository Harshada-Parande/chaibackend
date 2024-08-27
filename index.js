console.log('chai aur code')
const express = require('express')
require('dotenv').config()
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('harshacom')
})
app.get('/login',(req,res)=>{
        res.send('<h3>please login at chai aur code</h3>')
})
app.get('/youtube',(req,res)=>{
    res.send('<h2>chai or code youtube</h2>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})