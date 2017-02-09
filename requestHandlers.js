function start(response){
    console.log("start handler~");
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("Hello start!!!");
    response.end();

}

function upload(response){
    console.log("upload handler");
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("Hello upload!!!");
    response.end();
}

exports.start=start;
exports.uploader=upload;