/**
 * Created by hxsd on 2017/3/23.
 */
    $(function(){
        var  fuqin=$(".one").html();
        var one=$("one_one")
        var body= $("#body");
        var img= $("<div class='img'></div>");
        var imgs=$("<img src='images/3265549567416436.jpg'/>");
for(var i=0;i<16;i++){
    $(fuqin).appendTo(body);
};
   $(img).appendTo(one);
   $(imgs).appendTo(img);
});