/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*
 * 
 * @type String 基本属性
 */

// 工具类型
var tool_selected = 'shape';    

// pen 属性表
var pen_size = 1;
var pen_color = "#000000";
// 记录当前是否在画图
var isDrawing = false;

// shape 属性表
var shape_selected = "line";
var shape_size = 1;
var shape_color = "#000000";
var dragging = false;
var dragStartLocationX;
var dragStartLocationY;
var snapshot;

// eraser 属性表
var eraser_size = 1;
var isErasing = false;

// text 属性表
var text_position_x;
var text_position_y;
var text_font = "Microsoft JhengHei";
var text_size = 1;
var text_color = "#000000";
var isTexting = false;
var text_content = "";

var peer_snapshot;

/*
 * 
 * 文本输入框响应函数
 * 
*/

function textinput_change() {
    restoreSnapshot();
    text_content = document.getElementById("textInput").value;
    console.log(text_content);
    
    context.fillText(text_content, text_position_x, text_position_y);
    
    var json = JSON.stringify({
        tool: "text",
//        pen_size: pen_size,
//        pen_color: pen_color,
        isTexting: true,
        text_content: text_content,
        type: "draw",
        "coords": {
            "x": text_position_x,
            "y": text_position_y
        }
    });
    sendText(json);
}

/*
 * 
 * 文本绘制函数
 * 
*/

function peer_takeSnapshot() {
    peer_snapshot = context.getImageData(0, 0, canvas.width, canvas.height);
}

function peer_restoreSnapshot() {
    context.putImageData(peer_snapshot, 0, 0);
}

/*
 * 
 * 图形绘制函数
 * 
*/

function takeSnapshot() {
    snapshot = context.getImageData(0, 0, canvas.width, canvas.height);
}

function restoreSnapshot() {
    context.putImageData(snapshot, 0, 0);
}

function drawLine(positionX, positionY) {
    context.beginPath();
    context.moveTo(dragStartLocationX, dragStartLocationY);
    context.lineTo(positionX, positionY);
    context.stroke();
}

function drawRectangle(positionX, positionY) {
    context.beginPath();
    // 1 终点在起点右下
    if (dragStartLocationX < positionX && dragStartLocationY < positionY) {
        context.strokeRect(dragStartLocationX, dragStartLocationY, Math.abs(positionX - dragStartLocationX), Math.abs(positionY - dragStartLocationY));
    }
    // 2 终点在起点右上
    else if (dragStartLocationX < positionX && dragStartLocationY > positionY) {
        context.strokeRect(dragStartLocationX, positionY, Math.abs(positionX - dragStartLocationX), Math.abs(positionY - dragStartLocationY));
    }
    // 3 终点在起点左下
    else if (dragStartLocationX > positionX && dragStartLocationY < positionY) {
        context.strokeRect(positionX, dragStartLocationY, Math.abs(positionX - dragStartLocationX), Math.abs(positionY - dragStartLocationY));
    }
    // 4 终点在起点左上
    else {
        context.strokeRect(positionX, positionY, Math.abs(positionX - dragStartLocationX), Math.abs(positionY - dragStartLocationY));
    }
}

function drawEllipse(positionX, positionY) {
    
    var a = Math.abs(positionX - dragStartLocationX) / 2;
    var b = Math.abs(positionY - dragStartLocationY) / 2;
    
    var x = (positionX + dragStartLocationX) / 2;
    var y = (positionY + dragStartLocationY) / 2; 
    context.beginPath();
    context.ellipse(x, y, a, b, 0, 0, 2 * Math.PI);
    context.stroke();
}

/* 
 * 工具选项响应函数
 * 
 * */

function shape_tool_selected (evt) {
    /* 属性面板选择 */
    var current_tool_panel = document.getElementById("shape_attribute_panel");
    current_tool_panel.className = "tool-attribute-show";
    var tool_panel_list = document.getElementById("attributePanel").getElementsByTagName("div");
    for (var i = 0; i < tool_panel_list.length; i++) {
        if (tool_panel_list[i] !== current_tool_panel) {
            tool_panel_list[i].className = "tool-attribute-hidden";
        }
    }
    
    /* 图片点击变色效果 */
    var current_tool = document.getElementById("shape_tool");
    current_tool.className = "toolbar-image-clicked";
    var tool_list = document.getElementById("toolbar").getElementsByTagName("img");
    for (var i = 0; i < tool_list.length; i++) {
        if (tool_list[i] !== current_tool) {
            tool_list[i].className = "toolbar-image-noclicked";
        }
    }
    
    document.getElementById("myCanvas").style.cursor = "default";
    
    tool_selected = 'shape';
}

function pen_tool_selected (evt) {
    var current_tool_panel = document.getElementById("pen_attribute_panel");
    current_tool_panel.className = "tool-attribute-show";
    var tool_panel_list = document.getElementById("attributePanel").getElementsByTagName("div");
    for (var i = 0; i < tool_panel_list.length; i++) {
        if (tool_panel_list[i] !== current_tool_panel) {
            tool_panel_list[i].className = "tool-attribute-hidden";
        }
    }
    
    /* 图片点击变色效果 */
    var current_tool = document.getElementById("pen_tool");
    current_tool.className = "toolbar-image-clicked";
    var tool_list = document.getElementById("toolbar").getElementsByTagName("img");
    for (var i = 0; i < tool_list.length; i++) {
        if (tool_list[i] !== current_tool) {
            tool_list[i].className = "toolbar-image-noclicked";
        }
    }
    
    document.getElementById("myCanvas").style.cursor = "default";
    
    tool_selected = 'pen';
}

function floodfill_tool_selected (evt) {
    var current_tool_panel = document.getElementById("floodfill_attribute_panel");
    current_tool_panel.className = "tool-attribute-show";
    var tool_panel_list = document.getElementById("attributePanel").getElementsByTagName("div");
    for (var i = 0; i < tool_panel_list.length; i++) {
        if (tool_panel_list[i] !== current_tool_panel) {
            tool_panel_list[i].className = "tool-attribute-hidden";
        }
    }
    
    /* 图片点击变色效果 */
    var current_tool = document.getElementById("floodfill_tool");
    current_tool.className = "toolbar-image-clicked";
    var tool_list = document.getElementById("toolbar").getElementsByTagName("img");
    for (var i = 0; i < tool_list.length; i++) {
        if (tool_list[i] !== current_tool) {
            tool_list[i].className = "toolbar-image-noclicked";
        }
    }
    
    document.getElementById("myCanvas").style.cursor = "default";
    
    tool_selected = 'floodfill';
}

function eyedropper_tool_selected (evt) {
    var current_tool_panel = document.getElementById("eyedropper_attribute_panel");
    current_tool_panel.className = "tool-attribute-show";
    var tool_panel_list = document.getElementById("attributePanel").getElementsByTagName("div");
    for (var i = 0; i < tool_panel_list.length; i++) {
        if (tool_panel_list[i] !== current_tool_panel) {
            tool_panel_list[i].className = "tool-attribute-hidden";
        }
    }
    
    /* 图片点击变色效果 */
    var current_tool = document.getElementById("eyedropper_tool");
    current_tool.className = "toolbar-image-clicked";
    var tool_list = document.getElementById("toolbar").getElementsByTagName("img");
    for (var i = 0; i < tool_list.length; i++) {
        if (tool_list[i] !== current_tool) {
            tool_list[i].className = "toolbar-image-noclicked";
        }
    }
    
    document.getElementById("myCanvas").style.cursor = "default";
    
    tool_selected = 'eyedropper';
}

function eraser_tool_selected (evt) {
    var current_tool_panel = document.getElementById("eraser_attribute_panel");
    current_tool_panel.className = "tool-attribute-show";
    var tool_panel_list = document.getElementById("attributePanel").getElementsByTagName("div");
    for (var i = 0; i < tool_panel_list.length; i++) {
        if (tool_panel_list[i] !== current_tool_panel) {
            tool_panel_list[i].className = "tool-attribute-hidden";
        }
    }
    
    /* 图片点击变色效果 */
    var current_tool = document.getElementById("eraser_tool");
    current_tool.className = "toolbar-image-clicked";
    var tool_list = document.getElementById("toolbar").getElementsByTagName("img");
    for (var i = 0; i < tool_list.length; i++) {
        if (tool_list[i] !== current_tool) {
            tool_list[i].className = "toolbar-image-noclicked";
        }
    }
    
    document.getElementById("myCanvas").style.cursor = "default";
    
    tool_selected = 'eraser';
}

function text_tool_selected (evt) {
    var current_tool_panel = document.getElementById("text_attribute_panel");
    current_tool_panel.className = "tool-attribute-show";
    var tool_panel_list = document.getElementById("attributePanel").getElementsByTagName("div");
    for (var i = 0; i < tool_panel_list.length; i++) {
        if (tool_panel_list[i] !== current_tool_panel) {
            tool_panel_list[i].className = "tool-attribute-hidden";
        }
    }
    
    /* 图片点击变色效果 */
    var current_tool = document.getElementById("text_tool");
    current_tool.className = "toolbar-image-clicked";
    var tool_list = document.getElementById("toolbar").getElementsByTagName("img");
    for (var i = 0; i < tool_list.length; i++) {
        if (tool_list[i] !== current_tool) {
            tool_list[i].className = "toolbar-image-noclicked";
        }
    }
    
    document.getElementById("myCanvas").style.cursor = "text";
    
    tool_selected = 'text';
}

function color_tool_selected (evt) {
    var current_tool_panel = document.getElementById("color_attribute_panel");
    current_tool_panel.className = "tool-attribute-show";
    var tool_panel_list = document.getElementById("attributePanel").getElementsByTagName("div");
    for (var i = 0; i < tool_panel_list.length; i++) {
        if (tool_panel_list[i] !== current_tool_panel) {
            tool_panel_list[i].className = "tool-attribute-hidden";
        }
    }
    
    /* 图片点击变色效果 */
    var current_tool = document.getElementById("color_tool");
    current_tool.className = "toolbar-image-clicked";
    var tool_list = document.getElementById("toolbar").getElementsByTagName("img");
    for (var i = 0; i < tool_list.length; i++) {
        if (tool_list[i] !== current_tool) {
            tool_list[i].className = "toolbar-image-noclicked";
        }
    }
    
    document.getElementById("myCanvas").style.cursor = "default";
    
    tool_selected = 'color';
}

/*
 * 
 * 画布区域响应
 * 
*/

// 画布全局属性
var canvas;
var context;
var width;
var height;

// 初始化
window.onload = init;
function init() {
    // 获取画布已经绘图上下文
    canvas = document.getElementById("myCanvas");
    
    //  计算画布的宽度
    width = canvas.offsetWidth;
    //  计算画布的高度
    height = canvas.offsetHeight;
    context = canvas.getContext('2d');
    //  设置宽高
    canvas.width = width;
    canvas.height = height;
    
    context.lineWidth = pen_size;
    context.strokeStyle = 'rgba(0,0,0,0.5)';//设置画笔颜色
    
    // 添加事件监听
    canvas.onmousedown = shapeStart;
    canvas.onmouseup = shapeStop;
    canvas.onmouseout = shapeOut;
    canvas.onmousemove = shapeDraw;
};



function getCurrentPos(evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function shapeStart(evt) {
    switch (tool_selected) {
        case "shape":
            dragging = true;
            dragStartLocationX = parseInt(getCurrentPos(evt).x);
            dragStartLocationY = parseInt(getCurrentPos(evt).y);
            takeSnapshot();
            
            // 获取形状类型
            var shape_type_selected = document.getElementById("shape_type");
            var shape_type_index = shape_type_selected.selectedIndex ;
            shape_selected = shape_type_selected.options[shape_type_index].value;
            
            // 获取画笔属性
            var shape_size_select = document.getElementById("shape_size");
            var shape_size_index = shape_size_select.selectedIndex ;
            shape_size = parseInt(shape_size_select.options[shape_size_index].value);
            
            shape_color = document.getElementById("shape_color").value;
            
            context.lineWidth = shape_size;
            context.strokeStyle = shape_color;//设置画笔颜色
           
            break;
        case "pen":
    
            isDrawing = true;
            
            // 获取画笔属性
            var pen_size_select = document.getElementById("pen_size");
            var pen_size_index = pen_size_select.selectedIndex ;
            pen_size = parseInt(pen_size_select.options[pen_size_index].value);
            
            pen_color = document.getElementById("pen_color").value;
            
            context.lineWidth = pen_size;
            context.strokeStyle = pen_color;//设置画笔颜色
            
            // 创建一个新的绘图路径
            context.beginPath();
            // 把画笔移动到鼠标位置
            var x = parseInt(getCurrentPos(evt).x);
            var y = parseInt(getCurrentPos(evt).y);
            context.moveTo(x, y);

            var json = JSON.stringify({
                tool: "pen",
                pen_size: pen_size,
                pen_color: pen_color,
                isDrawing: true,
                type: "start",
                "coords": {
                    "x": x,
                    "y": y
                }
            });
            sendText(json);
            
            break; 
        case "eraser":
            isErasing = true;
            
            // 获取画笔属性
            var eraser_size_select = document.getElementById("eraser_size");
            var eraser_size_index = eraser_size_select.selectedIndex ;
            eraser_size = parseInt(eraser_size_select.options[eraser_size_index].value);
            
            // 找到鼠标最新位置
            var x = parseInt(getCurrentPos(evt).x) - eraser_size / 2;
            var y = parseInt(getCurrentPos(evt).y) - eraser_size / 2;
            context.clearRect(x, y, eraser_size, eraser_size);
            
            var json = JSON.stringify({
                tool: "eraser",
                eraser_size: eraser_size,
                isErasing: true,
                type: "start",
                "coords": {
                    "x": x,
                    "y": y
                }
            });
            sendText(json);
            
            break; 
        case "floodfill":
            break; 
        case "eyedropper":
            break; 
        case "text":
            
            isTexting = !isTexting;
            var textarea = document.getElementById("textInput");
            
            
            if (isTexting) {
                takeSnapshot();
                textarea.readOnly = false;
                setTimeout("document.getElementById(\"textInput\").focus()", 50);
                text_position_x = parseInt(getCurrentPos(evt).x);
                text_position_y = parseInt(getCurrentPos(evt).y);
                
                
            }
            else {
                
                textarea.readOnly = true;
                document.getElementById("textInput").value = "";
            }
            
            // 获取字体大小
            var text_size_select = document.getElementById("text_size");
            var text_size_index = text_size_select.selectedIndex ;
            text_size = parseInt(text_size_select.options[text_size_index].value);
            
            // 获取字体颜色
            text_color = document.getElementById("text_color").value;
            
            // 获取字体类型
            var text_font_select = document.getElementById("text_font");
            var text_font_index = text_font_select.selectedIndex ;
            text_font = text_font_select.options[text_font_index].value;
            
            console.log(text_size +"px  " + text_color);
            
            context.font = text_size + "px " + text_font;
            // context.lineWidth = pen_size;
            context.fillStyle = text_color;//设置画笔颜色
            
            var json = JSON.stringify({
                tool: "text",
                text_size: text_size,
                text_color: text_color,
                text_font: text_font,
                isTexting: true,
                text_content: text_content,
                type: "start",
                "coords": {
                    "x": text_position_x,
                    "y": text_position_y
                }
            });
            sendText(json);
            
            break; 
        case "color":
            break; 
        default:
            
    }
}

function endPointStart(json) {
    switch (json.tool) {
        case "shape":
            break;
        case "pen":
            isDrawing = json.isDrawing;
            
            context.lineWidth = json.pen_size;
            context.strokeStyle = json.pen_color;//设置画笔颜色
            
            context.beginPath();
            context.moveTo(json.coords.x, json.coords.y);
            break; 
        case "eraser":
            isErasing = json.isErasing;
            
            // 找到鼠标最新位置
            var x = json.coords.x;
            var y = json.coords.y;
            context.clearRect(x, y, json.eraser_size, json.eraser_size);
            
            break; 
        case "floodfill":
            break; 
        case "eyedropper":
            break; 
        case "text":
            peer_takeSnapshot();
            
            context.font = json.text_size + "px " + json.text_font;
            // context.lineWidth = pen_size;
            context.fillStyle = json.text_color;//设置画笔颜色
            
            break; 
        case "color":
            break; 
        default:
            
    }
    
}

function shapeOut(evt) {
    switch (tool_selected) {
        case "shape":
            if (dragging === true) {
                
                dragging = false;
                var positionX = parseInt(getCurrentPos(evt).x);
                var positionY = parseInt(getCurrentPos(evt).y);


                var json = JSON.stringify({
                    tool: "shape",
                    type: "stop",
                    shape_type: shape_selected,
                    shape_size: shape_size,
                    shape_color: shape_color,
                    "coords": {
                        "start_x": dragStartLocationX,
                        "start_y": dragStartLocationY,
                        "end_x": positionX,
                        "end_y": positionY
                    }
                });
                sendText(json);
            }
            
            break;
        case "pen":
            isDrawing = false;
            break; 
        case "eraser":
            isErasing = false;
            
            break; 
        case "floodfill":
            break; 
        case "eyedropper":
            break; 
        case "text":
            break; 
        case "color":
            break; 
        default:
            
    }
}

function shapeStop(evt) {
    switch (tool_selected) {
        case "shape":
            dragging = false;
            restoreSnapshot();
            var positionX = parseInt(getCurrentPos(evt).x);
            var positionY = parseInt(getCurrentPos(evt).y);
            
            if (shape_selected === "line") {
                drawLine(positionX, positionY);
            }
            else if (shape_selected === "rectangle") {
                drawRectangle(positionX, positionY);
            }
            else {
                drawEllipse(positionX, positionY);
            }
            
            var json = JSON.stringify({
                tool: "shape",
                type: "stop",
                shape_type: shape_selected,
                shape_size: shape_size,
                shape_color: shape_color,
                "coords": {
                    "start_x": dragStartLocationX,
                    "start_y": dragStartLocationY,
                    "end_x": positionX,
                    "end_y": positionY
                }
            });
            sendText(json);
            
            break;
        case "pen":
            isDrawing = false;
            var json = JSON.stringify({
                isDrawing: false,
                type: "stop"
            });
            sendText(json);
            break; 
        case "eraser":
            isErasing = false;
            
            break; 
        case "floodfill":
            break; 
        case "eyedropper":
            break; 
        case "text":
            break; 
        case "color":
            break; 
        default:
            
    }
}

function endPointStop(json) {
    switch (tool_selected) {
        case "shape":
            context.lineWidth = json.shape_size;
            context.strokeStyle = json.shape_color;//设置画笔颜色
            var start_x = json.coords.start_x;
            var start_y = json.coords.start_y;
            var end_x = json.coords.end_x;
            var end_y = json.coords.end_y;
            
            if (json.shape_type === "line") {
                context.beginPath();
                context.moveTo(start_x, start_y);
                context.lineTo(end_x, end_y);
                context.stroke();
            }
            else if (json.shape_type === "rectangle") {
                context.beginPath();
                // 1 终点在起点右下
                if (start_x < end_x && start_y < end_y) {
                    context.strokeRect(start_x, start_y, Math.abs(start_x - end_x), Math.abs(start_y - end_y));
                }
                // 2 终点在起点右上
                else if (start_x < end_x && start_y > end_y) {
                    context.strokeRect(start_x, end_y, Math.abs(start_x - end_x), Math.abs(start_y - end_y));
                }
                // 3 终点在起点左下
                else if (start_x > end_x && start_y < end_y) {
                    context.strokeRect(end_x, start_y, Math.abs(start_x - end_x), Math.abs(start_y - end_y));
                }
                // 4 终点在起点左上
                else {
                    context.strokeRect(end_x, end_y, Math.abs(start_x - end_x), Math.abs(start_y - end_y));
                }
            }
            else {
                var a = Math.abs(start_x - end_x) / 2;
                var b = Math.abs(start_y - end_y) / 2;

                var x = (start_x + end_x) / 2;
                var y = (start_y + end_y) / 2; 
                context.beginPath();
                context.ellipse(x, y, a, b, 0, 0, 2 * Math.PI);
                context.stroke();
            }
            
            break;
        case "pen":
            break; 
        case "eraser":
            break; 
        case "floodfill":
            break; 
        case "eyedropper":
            break; 
        case "text":
            break; 
        case "color":
            break; 
        default:
            
    }
    isDrawing = json.isDrawing;
}

function shapeDraw(evt) {
    switch (tool_selected) {
        case "shape":
            var positionX;
            var positionY;
            if (dragging === true) {
                restoreSnapshot();
                positionX = parseInt(getCurrentPos(evt).x);
                positionY = parseInt(getCurrentPos(evt).y);
                
                if (shape_selected === "line") {
                    drawLine(positionX, positionY);
                }
                else if (shape_selected === "rectangle") {
                    drawRectangle(positionX, positionY);
                }
                else {
                    drawEllipse(positionX, positionY);
                }
            }
            break;
        case "pen":
            if (isDrawing === true) {
                // 找到鼠标最新位置
                var x = parseInt(getCurrentPos(evt).x);
                var y = parseInt(getCurrentPos(evt).y);
                // 画一条直线到鼠标最新位置
                context.lineTo(x, y);
                context.stroke();  
                var json = JSON.stringify({
                    tool: "pen",
                    type: "draw",
                    "coords": {
                        "x": x,
                        "y": y
                    }
                });
                sendText(json);
            }
            break; 
        case "eraser":
            if (isErasing === true) {
                
                // 找到鼠标最新位置
                var x = parseInt(getCurrentPos(evt).x) - eraser_size / 2;
                var y = parseInt(getCurrentPos(evt).y) - eraser_size / 2;
                context.clearRect(x, y, eraser_size, eraser_size);
                
                var json = JSON.stringify({
                tool: "eraser",
                eraser_size: eraser_size,
                type: "draw",
                "coords": {
                    "x": x,
                    "y": y
                }
            });
            sendText(json);
            }
            break; 
        case "floodfill":
            break; 
        case "eyedropper":
            break; 
        case "text":
            break; 
        case "color":
            break; 
        default:
            
    }
}

function endPointDraw(json) {
    switch (json.tool) {
        case "shape":
            break;
        case "pen":
            context.lineTo(json.coords.x, json.coords.y);
            context.stroke();
         
            break; 
        case "eraser":
            // 找到鼠标最新位置
            var x = json.coords.x;
            var y = json.coords.y;
            context.clearRect(x, y, json.eraser_size, json.eraser_size);
            
            break; 
        case "floodfill":
            break; 
        case "eyedropper":
            break; 
        case "text":
            
            peer_restoreSnapshot();
            context.fillText(json.text_content, json.coords.x, json.coords.y);
            
            break; 
        case "color":
            break; 
        default:
            
    }
}

function showMessage(message) {
    var old_str = document.getElementById("message-list").value;
    var str = old_str + '\n' + message;
    document.getElementById("message-list").value = str;
    document.getElementById("message-list").scrollTop = document.getElementById("message-list").scrollHeight;
}

function drawImage(image) {
    var cvs = document.getElementById('myCanvas');
    var ctx = cvs.getContext('2d');
    var img = new Image;
    img.src = image;
    img.onload = function(){//必须onload之后再画
        ctx.drawImage(img, 0, 0, 400, 400);
    };
}