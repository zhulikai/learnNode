var server=require("./server");
var router=require("./router");
var requestHandler=require("./requestHandlers");

var handle={}
handle["/"]=requestHandler.start;
handle["/start"]=requestHandler.start;
handle["/upload"]=requestHandler.uploader;

server.start(router.route,handle);