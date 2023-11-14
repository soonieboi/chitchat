// base code for js that sends a request to the server and returns a response

const express = require("express") // import express

const app = express()

const tweets = [
    {
        content:"Hey there",
        author: "YouTiao"

    },
    {
        content:"Sup everyone",
        author: "Otah"

    },
    {
        content:"Meoooowwww",
        author: "Kat"

    },

];

app.use(express.urlencoded({ extended: true }));


app.set('view engine','pug');
app.get('/', function (req, res) {
    res.render('index', { tweets: tweets });
});

app.post('/tweet', function(req, res){
    console.log('Here in tweet post');
    console.log(req.body);
    tweets.push({
        content: req.body.content,
        author: req.body.author
    });
    res.redirect('/');
});

app.listen(3000, function(req, res){
    console.log("Server started at port " + 3000);
})