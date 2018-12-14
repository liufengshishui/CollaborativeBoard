/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var tool_selected = 'shape';

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

var canvas;
var context;
// 初始化
window.onload = function() {
    // 获取画布已经绘图上下文
    canvas = document.getElementById("myCanvas");
    context = canvas.getContext("2d");
    context.lineWidth = 10;
    context.strokeStyle = 'rgba(0,0,0,0.5)';//设置画笔颜色
    switch (tool_selected) {
        case 'shape':
            canvas.onmousedown = shapeStart;
            canvas.onmouseup = shapeStop;
            canvas.onmouseout = shapeStop;
            canvas.onmousemove = shapeDraw;
            break;
        case 'shape':
            break;
        case 'shape':
            break;
        case 'shape':
            break;
        case 'shape':
            break;
        case 'shape':
            break;
        case 'shape':
            break;
        default:
            
    }
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
    isDrawing = true;
    // 创建一个新的绘图路径
    context.beginPath();
    // 把画笔移动到鼠标位置
    var x = parseInt(getCurrentPos(evt).x);
    var y = parseInt(getCurrentPos(evt).y);
    context.moveTo(x, y);
}

function shapeStop(evt) {
    isDrawing = false;
}

function shapeDraw(evt) {
    if (isDrawing === true) {
        // 找到鼠标最新位置
        var x = parseInt(getCurrentPos(evt).x);
        var y = parseInt(getCurrentPos(evt).y);
        // 画一条直线到鼠标最新位置
        context.lineTo(x, y);
        context.stroke();  
    }
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

