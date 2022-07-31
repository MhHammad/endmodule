var express = require("express");
var app = express();

app.get('/',(req,resp)=>{
    resp.send("<h1>End Module Practice</h1>")
})

app.listen(5000);
console.log("Server running at port 5000");