$(function(){
   $("div.proDetails_top_img_bigImg>div")
    .mouseenter(function(){
        var x,y;
        $("div.proDetails_top_img_selector")
            .css({display: "block"})
        $("div.proDetails_top_img_bigImg>div.proDetails_top_img_trans")
            .mousemove(function(e){
                 x = e.clientX;
                 y = e.clientY;
                console.log(x,y)
                var left = x
                var top = y 
                if(left<0){
                    left=0
                }else if(left>163){
                    left=163
                }
                if(top<0){
                    top=0
                }else if(top>190){
                    top=190
                }
                $("div.proDetails_top_img_selector")
                .css({top:top+"px",left:left+"px"})            
                
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