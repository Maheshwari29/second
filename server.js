const fs=require("fs");
const http=require("http");
 server=http.createServer(function(req,res){
 m=fs.createReadStream("./public/index.html");
    m.pipe(res);
    
});
server.listen(9500);
console.log("server is listening at port 9500")
