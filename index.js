const express = require('express');
const app = express();

// when there's a post request to /webooks...
app.post('/webhooks', function (req, res) {
  
    // respond with 200 OK
    res.send('OK');
});

app.listen(3000, function () {
    console.log('Listening for webhooks on port 3000')
})

app.get('/',(req, res)=>{
    res.send('Hello!');
}); 