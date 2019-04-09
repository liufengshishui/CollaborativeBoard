/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function send_message() {
    var username = document.getElementById("username").value;
    var message = document.getElementById("message").value;
    
    var str = username + ": " + message;
    console.log(str);
    
    var json = JSON.stringify({
        tool: "chat_room",
        message: str
    })
    sendText(json);

    old_str = document.getElementById("message-list").value;

    document.getElementById("message-list").value = document.getElementById("message-list").value + '\n' + str;
    
    document.getElementById("message-list").scrollTop = document.getElementById("message-list").scrollHeight;
    
    document.getElementById("message").value = '';
} 
