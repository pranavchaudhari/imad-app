var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var content ={
    title:'Article One |Pranav',
    date:'14 Sep 2107',
    heading:'Article One',
    content:` <p>
                this is my first article.
                 this is the content to it .
                 now here are rubbish words for making it look big.
                 rubbish rubbish rubbish rubbish rubbish rubbish rubbish rubbish rubbish rubbish rubbish rubbish rubbish rubbish rubbish rubbish rubbish rubbish rubbish rubbish rubbish 
                 rubbish rubbish rubbish rubbish rubbish 
                 rubbish rubbish rubbish 
            </p>
        <p> this is my first paragraph</p>`
    
};
    function createTemplate(data){
        var title = data.title;
        var heading = data.heading;
        var date = data.date;
        var content = data.content;
    }
var htmlTemplate=`
<!DOCTYPE html> 
<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width , initial-scale=1"/>
        <link href ="/ui/style.cc" rel="stylesheet"/>
    <body>
    
    <div>${date}</div>
    <h3>${heading}</h3>
    <div class="container">
        <div>
        <a href= "/"> Home </a>
    </div>
         ${content}
    </div>
    </body>
</html>`;
return htmlTemplate;
}

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/article-one', function (req, res) {
  res.sendFile(path.join(__dirname, '/', 'article-one.html'));
});

app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, '/', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, '/', 'article-three.html'));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
