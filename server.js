var http=require("http");
var url=require("url");


function start(route,handle){
    function onRequest(request,response){
        var pathname=url.parse(request.url).pathname;

        console.log("resquest for "+pathname+"  recieved!");
        route(handle,pathname,response);
        /*
        route(handle,pathname);
        response.writeHead(200,{"Content-Type":"text/plain"});
        response.write("Hello World Kane!!!");
        response.end();
        */
    }

    var server=http.createServer(onRequest).listen(666);
    console.log("Server has strated!");
}

exports.start=start;
