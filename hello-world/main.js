// Hello World Example

export function responseProvider (request) {
    const options = {};
    options.method =request.method;
    options.headers={"Content-Type":"application/json"};
    options.body=request.body;
  
    return httpRequest(`${request.scheme}://${request.host}${request.url}`,options).then(response => {
      return createResponse(
        response.status,
        response.headers,
        response.body.pipeThrough(new TextDecoderStream()).pipeThrough(new TextEncoderStream())
      )}
    )};
    
    export function onClientResponse(request, response) {
      response.setHeader('X-Hello-World', 'From Akamai EdgeWorkers');
    }
  
    //akamai edgeworkers list-ids
    //akamai sandbox delete-edgeworker 58425
    //tar -czvf filename.tgz main.js bundle.json
    //akamai sandbox add-edgeworker <id> <tarball>
    //akamai sandbox add-edgeworker 58425 ew-test1.tgz
    //akamai edgeworkers upload --bundle ./hello.tgz 58425
    //curl -iv http://localhost:9550/api/worker -d '{index: "https://ps5.sp-int.playstation.net/api/cpss/v1/sessionInfo/1234"}'