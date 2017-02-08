var http=require("http");
function start(){
    function onRequest(request,response){
        response.writeHead(200,{"Content-Type":"text/plain"});
        response.write("Hello World Kane!!!");
        response.end();
    }

    var server=http.createServer(onRequest).listen(666);
    console.log("Server has strated!");
}

exports.start=start;
