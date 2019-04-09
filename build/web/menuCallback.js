/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function uploadFile() {
    var imgFile = this.files[0];
    var fr = new FileReader();
    fr.readAsDataURL(imgFile);
    fr.onload = function() {
        var cvs = document.getElementById('myCanvas');
//            var ctx = cvs.getContext('2d');

        //  计算画布的宽度
        var width = cvs.offsetWidth;
        //  计算画布的高度
        var height = cvs.offsetHeight;

        //  设置宽高
        cvs.width = width;
        cvs.height = height;

        var ctx = cvs.getContext('2d');

        var img = new Image;
        img.src = fr.result;
        img.onload = function(){//必须onload之后再画
            ctx.drawImage(img, 100, 100, 300, 300);
            var json = JSON.stringify({
                tool: "import_image",
                image: img
            });
            sendText(json);
        };
    };
}
