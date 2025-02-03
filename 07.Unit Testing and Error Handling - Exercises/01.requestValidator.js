function requestValidator(obj) {
    const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const uriPattern = /[^A-Za-z0-9\.\*]+/;
    const messagePattern = /[<>\\\&\'\"]+/;

    const invalid = {
        method: 'Invalid request header: Invalid Method',
        uri: 'Invalid request header: Invalid URI',
        version: 'Invalid request header: Invalid Version',
        message: 'Invalid request header: Invalid Message',
    }

    if(!(obj.hasOwnProperty('method')) || !(methods.includes(obj.method))) {
        throw new Error(invalid.method);
    }
    if(!(obj.hasOwnProperty('uri')) || (uriPattern.test(obj.uri)) || (obj.uri === '')) {
        throw new Error(invalid.uri);
    }
    if(!(obj.hasOwnProperty('version')) || !(versions.includes(obj.version))) {
        throw new Error(invalid.version);
    }
    if(!(obj.hasOwnProperty('message')) || (messagePattern.test(obj.message))) {
        throw new Error(invalid.message);
    }
    return obj
}


requestValidator(obj = {
    method: 'POST',
    uri: 'home.bash',
    version: 'HTTP/2.0'
})