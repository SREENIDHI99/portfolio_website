/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
    $("#sourcebtn").click(function() {
        $('html,body').animate({                                                          //  fine in moz, still quicker in chrome. 
            scrollTop: $(".target").offset().top},
            1200);                                                                                  //  1200ms is the speed of animation
    });
     });

$(document).ready(function () {
    $(".nav-toggler").each(function (_, navToggler) {
        var target = $(navToggler).data("target");
        $(navToggler).on("click", function() {
            $(target).animate({
                height: "toggle",
            })
        })
    })
})