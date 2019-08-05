$(function(){
   $("div.proDetails_top_img_bigImg>div")
    .mouseenter(function(){
        var offSetX,offSetY,x,y;
        $("div.proDetails_top_img_selector")
            .css({display: "block"})
        $("div.proDetails_top_img_bigImg>div.proDetails_top_img_trans")
            .mousemove(function(e){
                offSetX=e.offsetX;
                offSetY=e.offsetY;
                 x = e.clientX;
                 y = e.clientY;
                console.log(x,y)
                var left = x- 117.5;
                var top = y -105;
                if(left<0){
                    left=0
                $("div.proDetails_top_img_selector")
                    .css({left:left+"px"})
                }else if(left>163){
                    left=163
                $("div.proDetails_top_img_selector")
                    .css({
                        left: left + "px"
                    })
                }else{
                $("div.proDetails_top_img_selector")
                    .css({
                        left: left + "px"
                    })
                }
                if(top<0){
                    top=0
                $("div.proDetails_top_img_selector")
                    .css({
                        top: top + "px",
                    })
                }else if(top>190){
                    top=190
                $("div.proDetails_top_img_selector")
                    .css({
                        top: top + "px",
                    })
                }else{
                $("div.proDetails_top_img_selector")
                .css({top:top+"px",})            
                }
            })
        $("div.bigView")
            .css({display:"block"});
    
    })
    .mouseleave(function(){
        $("div.proDetails_top_img_selector").css({
            display:"none",
        })
        $("div.bigView").css({
            display: "none",
        })
    })
 })