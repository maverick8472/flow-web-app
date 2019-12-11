
// Loader

    $(window).on("load",function(){
        $(".loader").fadeOut("slow")
    })

// End of loader


// Toglle bars
$(function() {
    $(".toggle").on("click", function() {
        if ($(".item").hasClass("active")) {
            $(".item").removeClass("active");
            // $(".item").removeClass("active").slideDown(300);
            // $(this).find("a").html("<i class='fas fa-bars'></i>");
        } else {
            $(".item").addClass("active");
            // $(".item").addClass("active").slideUp(300);
            // $(this).find("a").html("<i class='fas fa-times'></i>");
        }
    });
});
//  end of toggle button

/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
 /*Scroll to top when arrow up clicked END*/



// toggle button
 var btn = $('.btn');

 btn.on('click', function() {
   $(this).toggleClass('active');
   $(this).toggleClass('not-active');
 });

//  end of toggle button


// Sticky header
window.onscroll = function() {myFunction()};

var header = document.querySelector(".navy");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// End of sticky header