/**
 * Created by student on 6/11/2016.
 */
var express=require('express')
var app = express()
app.get('/',function (req,res) {
    res.render('login.ejs')
    res.end()
})


app.listen(8080)