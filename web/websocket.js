/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var wsUri = "ws://" + document.location.host + document.location.pathname +
        "collaborativeBoardEndPoint";
var websocket = new WebSocket(wsUri);

websocket.onerror = function(evt) { 
    onError(evt);
};

function onError (evt) {
    writeToScreen('<span style="color: red;"> ERROR: </span>' + evt.data);
}

websocket.onmessage = function(evt) { onMessage(evt); };

function sendText(json) {
    websocket.send(json);
}

function onMessage(evt) {
    console.log("received: " + evt.data);
    var json = JSON.parse(evt.data);
    if (json.tool === 'chat_room') {
        showMessage(json.message);
    }
    else if (json.tool === 'import_image') {
        drawImage(json.image);
    }
    else {
        if (json.type === "start") {
            endPointStart(json);
        }
        else if (json.type === "draw") {
            endPointDraw(json);
        }
        else {
            endPointStop(json);
        }
    }
    
}

