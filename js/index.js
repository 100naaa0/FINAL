$('body').mouseover(function(){$(this).css({cursor:'none'})});$(document).mousemove(function(e){$('#cursor').css({left:e.pageX,top:e.pageY})});$(function(){var positions=[];$(".person").each(function(){var ctx=$(this);var dim={width:ctx.outerWidth(),height:ctx.outerHeight()};var box={width:$('#box').width(),height:$('#box').height()};var success=false;while(!success){dim.left=parseInt(Math.random()*(box.width-dim.width));dim.top=parseInt(Math.random()*(box.height-dim.height));var success=true;$.each(positions,function(){if(dim.left<this.left+this.width&&dim.left+dim.width>this.left&&dim.top<this.top+this.height&&dim.top+dim.height>this.top){success=false}})}positions.push(dim);ctx.animate({left:dim.left,top:dim.top})})});(function(){var mX,mY,distance,$proximity=$('#proximity'),$distance=$('#distance'),$cursor=$('#cursor'),$people=$('#people');var proximity1=40;var proximity2=120;var proximity3=200;function calculateDistance(elem,mouseX,mouseY){return Math.floor(Math.sqrt(Math.pow(mouseX-(elem.offset().left+(elem.width()/2)),2)+Math.pow(mouseY-(elem.offset().top+(elem.height()/2)),2)))-Math.round(elem.width()/2)}$(document).mousemove(function(e){mX=e.pageX;mY=e.pageY;distance=calculateDistance($people,mX,mY);if(distance>proximity3){$cursor.removeClass("level1_c");$cursor.addClass("level3_c")}if(distance<proximity3&&distance>proximity2){$cursor.removeClass("level3_c");$cursor.addClass("level2_c")}if(distance<proximity2&&distance>proximity1){$cursor.removeClass("level2_c");$cursor.addClass("level1_c")}})})();(function(){var mX,mY,distance,$proximity=$('#proximity'),$distance=$('#distance'),$element1=$('#element1');var proximity1=10;var proximity2=80;var proximity3=140;function calculateDistance(elem,mouseX,mouseY){return Math.floor(Math.sqrt(Math.pow(mouseX-(elem.offset().left+(elem.width()/2)),2)+Math.pow(mouseY-(elem.offset().top+(elem.height()/2)),2)))-Math.round(elem.width()/2)}$(document).mousemove(function(e){mX=e.pageX;mY=e.pageY;distance=calculateDistance($element1,mX,mY);if(distance>proximity3){$element1.removeClass("level1_1");$element1.addClass("level3_1")}if(distance<proximity3&&distance>proximity2){$element1.removeClass("level3_1");$element1.addClass("level2_1")}if(distance<proximity2&&distance>proximity1){$element1.removeClass("level2_1");$element1.addClass("level1_1")}})})();(function(){var mX,mY,distance,$proximity=$('#proximity'),$distance=$('#distance'),$element2=$('#element2');var proximity1=10;var proximity2=80;var proximity3=140;function calculateDistance(elem,mouseX,mouseY){return Math.floor(Math.sqrt(Math.pow(mouseX-(elem.offset().left+(elem.width()/2)),2)+Math.pow(mouseY-(elem.offset().top+(elem.height()/2)),2)))-Math.round(elem.width()/2)}$(document).mousemove(function(e){mX=e.pageX;mY=e.pageY;distance=calculateDistance($element2,mX,mY);if(distance>proximity3){$element2.removeClass("level1_2");$element2.addClass("level3_2")}if(distance<proximity3&&distance>proximity2){$element2.removeClass("level3_2");$element2.addClass("level2_2")}if(distance<proximity2&&distance>proximity1){$element2.removeClass("level2_2");$element2.addClass("level1_2")}})})();(function(){var mX,mY,distance,$proximity=$('#proximity'),$distance=$('#distance'),$element3=$('#element3');var proximity1=10;var proximity2=80;var proximity3=140;function calculateDistance(elem,mouseX,mouseY){return Math.floor(Math.sqrt(Math.pow(mouseX-(elem.offset().left+(elem.width()/2)),2)+Math.pow(mouseY-(elem.offset().top+(elem.height()/2)),2)))-Math.round(elem.width()/2)}$(document).mousemove(function(e){mX=e.pageX;mY=e.pageY;distance=calculateDistance($element3,mX,mY);if(distance>proximity3){$element3.removeClass("level1_3");$element3.addClass("level3_3")}if(distance<proximity3&&distance>proximity2){$element3.removeClass("level3_3");$element3.addClass("level2_3")}if(distance<proximity2&&distance>proximity1){$element3.removeClass("level2_3");$element3.addClass("level1_3")}})})();(function(){var mX,mY,distance,$proximity=$('#proximity'),$distance=$('#distance'),$element4=$('#element4');var proximity1=10;var proximity2=80;var proximity3=140;function calculateDistance(elem,mouseX,mouseY){return Math.floor(Math.sqrt(Math.pow(mouseX-(elem.offset().left+(elem.width()/2)),2)+Math.pow(mouseY-(elem.offset().top+(elem.height()/2)),2)))-Math.round(elem.width()/2)}$(document).mousemove(function(e){mX=e.pageX;mY=e.pageY;distance=calculateDistance($element4,mX,mY);if(distance>proximity3){$element4.removeClass("level1_4");$element4.addClass("level3_4")}if(distance<proximity3&&distance>proximity2){$element4.removeClass("level3_4");$element4.addClass("level2_4")}if(distance<proximity2&&distance>proximity1){$element4.removeClass("level2_4");$element4.addClass("level1_4")}})})();(function(){var mX,mY,distance,$proximity=$('#proximity'),$distance=$('#distance'),$element5=$('#element5');var proximity1=10;var proximity2=80;var proximity3=140;function calculateDistance(elem,mouseX,mouseY){return Math.floor(Math.sqrt(Math.pow(mouseX-(elem.offset().left+(elem.width()/2)),2)+Math.pow(mouseY-(elem.offset().top+(elem.height()/2)),2)))-Math.round(elem.width()/2)}$(document).mousemove(function(e){mX=e.pageX;mY=e.pageY;distance=calculateDistance($element5,mX,mY);if(distance>proximity3){$element5.removeClass("level1_5");$element5.addClass("level3_5")}if(distance<proximity3&&distance>proximity2){$element5.removeClass("level3_5");$element5.addClass("level2_5")}if(distance<proximity2&&distance>proximity1){$element5.removeClass("level2_5");$element5.addClass("level1_5")}})})();(function(){var mX,mY,distance,$proximity=$('#proximity'),$distance=$('#distance'),$element6=$('#element6');var proximity1=10;var proximity2=80;var proximity3=140;function calculateDistance(elem,mouseX,mouseY){return Math.floor(Math.sqrt(Math.pow(mouseX-(elem.offset().left+(elem.width()/2)),2)+Math.pow(mouseY-(elem.offset().top+(elem.height()/2)),2)))-Math.round(elem.width()/2)}$(document).mousemove(function(e){mX=e.pageX;mY=e.pageY;distance=calculateDistance($element6,mX,mY);if(distance>proximity3){$element6.removeClass("level1_6");$element6.addClass("level3_6")}if(distance<proximity3&&distance>proximity2){$element6.removeClass("level3_6");$element6.addClass("level2_6")}if(distance<proximity2&&distance>proximity1){$element6.removeClass("level2_6");$element6.addClass("level1_6")}})})();(function(){var mX,mY,distance,$proximity=$('#proximity'),$distance=$('#distance'),$element7=$('#element7');var proximity1=10;var proximity2=80;var proximity3=140;function calculateDistance(elem,mouseX,mouseY){return Math.floor(Math.sqrt(Math.pow(mouseX-(elem.offset().left+(elem.width()/2)),2)+Math.pow(mouseY-(elem.offset().top+(elem.height()/2)),2)))-Math.round(elem.width()/2)}$(document).mousemove(function(e){mX=e.pageX;mY=e.pageY;distance=calculateDistance($element7,mX,mY);if(distance>proximity3){$element7.removeClass("level1_7");$element7.addClass("level3_7")}if(distance<proximity3&&distance>proximity2){$element7.removeClass("level3_7");$element7.addClass("level2_7")}if(distance<proximity2&&distance>proximity1){$element7.removeClass("level2_7");$element7.addClass("level1_7")}})})();(function(){var mX,mY,distance,$proximity=$('#proximity'),$distance=$('#distance'),$element8=$('#element8');var proximity1=10;var proximity2=80;var proximity3=140;function calculateDistance(elem,mouseX,mouseY){return Math.floor(Math.sqrt(Math.pow(mouseX-(elem.offset().left+(elem.width()/2)),2)+Math.pow(mouseY-(elem.offset().top+(elem.height()/2)),2)))-Math.round(elem.width()/2)}$(document).mousemove(function(e){mX=e.pageX;mY=e.pageY;distance=calculateDistance($element8,mX,mY);if(distance>proximity3){$element8.removeClass("level1_8");$element8.addClass("level3_8")}if(distance<proximity3&&distance>proximity2){$element8.removeClass("level3_8");$element8.addClass("level2_8")}if(distance<proximity2&&distance>proximity1){$element8.removeClass("level2_8");$element8.addClass("level1_8")}})})();(function(){var mX,mY,distance,$proximity=$('#proximity'),$distance=$('#distance'),$element9=$('#element9');var proximity1=10;var proximity2=80;var proximity3=140;function calculateDistance(elem,mouseX,mouseY){return Math.floor(Math.sqrt(Math.pow(mouseX-(elem.offset().left+(elem.width()/2)),2)+Math.pow(mouseY-(elem.offset().top+(elem.height()/2)),2)))-Math.round(elem.width()/2)}$(document).mousemove(function(e){mX=e.pageX;mY=e.pageY;distance=calculateDistance($element9,mX,mY);if(distance>proximity3){$element9.removeClass("level1_9");$element9.addClass("level3_9")}if(distance<proximity3&&distance>proximity2){$element9.removeClass("level3_9");$element9.addClass("level2_9")}if(distance<proximity2&&distance>proximity1){$element9.removeClass("level2_9");$element9.addClass("level1_9")}})})();(function(){var mX,mY,distance,$proximity=$('#proximity'),$distance=$('#distance'),$element10=$('#element10');var proximity1=10;var proximity2=80;var proximity3=140;function calculateDistance(elem,mouseX,mouseY){return Math.floor(Math.sqrt(Math.pow(mouseX-(elem.offset().left+(elem.width()/2)),2)+Math.pow(mouseY-(elem.offset().top+(elem.height()/2)),2)))-Math.round(elem.width()/2)}$(document).mousemove(function(e){mX=e.pageX;mY=e.pageY;distance=calculateDistance($element10,mX,mY);if(distance>proximity3){$element10.removeClass("level1_10");$element10.addClass("level3_10")}if(distance<proximity3&&distance>proximity2){$element10.removeClass("level3_10");$element10.addClass("level2_10")}if(distance<proximity2&&distance>proximity1){$element10.removeClass("level2_10");$element10.addClass("level1_10")}})})();(function(){var mX,mY,distance,$proximity=$('#proximity'),$distance=$('#distance'),$element11=$('#element11');var proximity1=10;var proximity2=80;var proximity3=140;function calculateDistance(elem,mouseX,mouseY){return Math.floor(Math.sqrt(Math.pow(mouseX-(elem.offset().left+(elem.width()/2)),2)+Math.pow(mouseY-(elem.offset().top+(elem.height()/2)),2)))-Math.round(elem.width()/2)}$(document).mousemove(function(e){mX=e.pageX;mY=e.pageY;distance=calculateDistance($element11,mX,mY);if(distance>proximity3){$element11.removeClass("level1_11");$element11.addClass("level3_11")}if(distance<proximity3&&distance>proximity2){$element11.removeClass("level3_11");$element11.addClass("level2_11")}if(distance<proximity2&&distance>proximity1){$element11.removeClass("level2_11");$element11.addClass("level1_11")}})})();(function(){var mX,mY,distance,$proximity=$('#proximity'),$distance=$('#distance'),$element12=$('#element12');var proximity1=10;var proximity2=80;var proximity3=140;function calculateDistance(elem,mouseX,mouseY){return Math.floor(Math.sqrt(Math.pow(mouseX-(elem.offset().left+(elem.width()/2)),2)+Math.pow(mouseY-(elem.offset().top+(elem.height()/2)),2)))-Math.round(elem.width()/2)}$(document).mousemove(function(e){mX=e.pageX;mY=e.pageY;distance=calculateDistance($element12,mX,mY);if(distance>proximity3){$element12.removeClass("level1_12");$element12.addClass("level3_12")}if(distance<proximity3&&distance>proximity2){$element12.removeClass("level3_12");$element12.addClass("level2_12")}if(distance<proximity2&&distance>proximity1){$element12.removeClass("level2_12");$element12.addClass("level1_12")}})})();
