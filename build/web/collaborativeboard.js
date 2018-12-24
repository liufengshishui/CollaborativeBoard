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
    
    tool_selected = 'color';
}

// 颜色变化响应函数
function colorchange() {
    var pen_color_select = document.querySelector("pen_color");
    pen_color_select.click();  //出现问题处
    pen_color = pen_color_select.value;
}

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
    width = canvas.offsetWidth,
    //  计算画布的高度
    height = canvas.offsetHeight,
    context = canvas.getContext('2d')
    //  设置宽高
    canvas.width = width;
    canvas.height = height;
    
    console.log(pen_size);
    context.lineWidth = pen_size;
    context.strokeStyle = 'rgba(0,0,0,0.5)';//设置画笔颜色
    
    // 添加事件监听
    canvas.onmousedown = shapeStart;
    canvas.onmouseup = shapeStop;
    canvas.onmouseout = shapeStop;
    canvas.onmousemove = shapeDraw;
};

// 记录当前是否在画图
var isDrawing = false;

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
            break;
        case "pen":
            console.log(tool_selected);
    
            isDrawing = true;
            
            
            // 获取画笔属性
            var pen_size_select = document.getElementById("pen_size");
            var pen_size_index = pen_size_select.selectedIndex ;
            pen_size = parseInt(pen_size_select.options[pen_size_index].value);
            
            console.log(document.getElementById("pen_color").value);
            pen_color = document.getElementById("pen_color").value;
            
            context.lineWidth = pen_size;
            context.strokeStyle = pen_color;//设置画笔颜色
            
            // 创建一个新的绘图路径
            context.beginPath();
            // 把画笔移动到鼠标位置
            var x = parseInt(getCurrentPos(evt).x);
            var y = parseInt(getCurrentPos(evt).y);
            console.log(x + "    " + y);
            context.moveTo(x, y);

            var json = JSON.stringify({
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

function endPointStart(json) {
    switch (tool_selected) {
        case "shape":
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
    console.log(tool_selected);
    isDrawing = json.isDrawing;
    context.beginPath();
    context.moveTo(json.coords.x, json.coords.y);
}

function shapeStop(evt) {
    switch (tool_selected) {
        case "shape":
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
            break;
        case "pen":
            if (isDrawing === true) {
                // 找到鼠标最新位置
                var x = parseInt(getCurrentPos(evt).x);
                var y = parseInt(getCurrentPos(evt).y);
                // 画一条直线到鼠标最新位置
                console.log(x + "    " + y);
                context.lineTo(x, y);
                context.stroke();  
                var json = JSON.stringify({
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
    switch (tool_selected) {
        case "shape":
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
    context.lineTo(json.coords.x, json.coords.y);
    context.stroke();  
}

//// 开始画图
//function startDrawing(e) {
//}
//
//// 停止画图
//function stopDrawing() {
//  isDrawing = false;
//}
//
////画图中
//function draw(e) {
  
//}
//
//// 保存之前选择的颜色的画笔 <img> 元素标签
//var previousColorElement;
//
//// 改变画笔颜色
//function changeColor(color, imgElement) {    
//  context.strokeStyle = color;
//  // 将当前画笔的 <img> 元素标签设置为选中样式
//  imgElement.className = "Selected";
//  // 将之前的画笔的 <img> 元素标签恢复默认样式
//  if (previousColorElement != null) previousColorElement.className = "";
//  previousColorElement = imgElement;
//}
//
//// 保存之前选择的粗细的画笔 <img> 元素标签
//var previousThicknessElement;
//
//// 改变画笔粗细
//function changeThickness(thickness, imgElement) {    
//  context.lineWidth = thickness;
//  // 将当前画笔的 <img> 元素标签设置为选中样式
//  imgElement.className = "Selected";
//  // 将之前的画笔的 <img> 元素标签恢复默认样式
//  if (previousThicknessElement != null) previousThicknessElement.className = "";
//  previousThicknessElement = imgElement;
//}
//
//// 清除画布
//function clearCanvas() {
//  context.clearRect(0, 0, canvas.width, canvas.height);
//}
//
//// 保存画布
//function saveCanvas() {
//  // 找到预览的 <img> 元素标签
//  var imageCopy = document.getElementById("savedImageCopy");
//  // 将画布内容在img元素中显示
//  imageCopy.src = canvas.toDataURL(); 
//  // 显示右键保存的提示
//  var imageContainer = document.getElementById("savedCopyContainer");
//  imageContainer.style.display = "block";
//}
//
//

