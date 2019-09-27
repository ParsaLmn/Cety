/* on load functions */

$(document).ready(function () {

    //margin top if there is wpadminbar
    wpadminbar_mt();

    //on load remove side navbar ul classes function
    rm_sidenavlist_closeNav();

    //add class to sidenavbar li
    li_addcls();

    //for side nav logo in center 
    sidenavlogo_center();
});

/* end on load functions */

/* on page resize functions */

$(window).resize(function () {

    //on page resize close navside if its open to prevent problem
    closeNav();

    //margin top if there is wpadminbar
    wpadminbar_mt();

    //for side nav logo in center 
    sidenavlogo_center();
});

/* on page resize functions */

/* this is for viewing the  website,github  links when clicked on work samples */

function review_links(e) {
    $(e).children(".review-theme").css({
        "visibility": "visible",
        "opacity": "0.9",
        "transition": "0.5s"
    });
}

/* this is for viewing the  website,github  links when clicked on work samples */

/*side bar or side nav func*/

function openNav() {
    //for small screen
    if (window.innerWidth < 768) {
        $("#Sidenav").css({
            "width": "70%" //opennign to 70% of the page
        });
    }
    //for bigger screens
    if (window.innerWidth >= 768) {
        $("#Sidenav").css({
            "width": "30%" //opennign to 30% of the page
        });
    }
    $("#cover").css({
        "visibility": "visible", //making cover visible
        "opacity": "0.7"
    });
} //for opening side nav and the cover

function closeNav() {
    $("#Sidenav").css({
        "width": "0" //seting nav with to 0 for closing it
    });
    $("#cover").css({
        "visibility": "hidden", //making cover invisible
        "opacity": "0"
    });
} //for closing the cover and side nav


/*end side bar or side nav func*/


/* for nav bar */

//on focus function
function input_focus(inpt) {
    var prnt = $(inpt).parent(); //geting the div parent of the input
    var lbl = $(prnt).children("label"); //geting the label
    $(lbl).css({
            "top": "-10px",
            "right": "5px",
            "transition": "all 0.3s",
            "z-index": "100",
            "color": "var(--purple-cety)"
        })
        .addClass("bg-light-cety"); //moving the label out of the input
}
/*end on focus function*/

// on focus out function
function input_focusout(inpt) {
    var prnt = $(inpt).parent(); //geting the div parent of the input
    var lbl = $(prnt).children("label"); //geting the label
    var delete_btn = $(prnt).children("button"); //geting the clear btn
    if ($(inpt).val().length === 0) //if input is empty
    {
        $(lbl).css({
                "top": "10px",
                "right": "10px",
                "transition": "all 0.3s",
                "z-index": "100",
                "color": "var(--dark-cety)"
            })
            .removeClass("bg-light-cety"); //moving label back in the input

        $(delete_btn).addClass("d-none"); //hidden the clear btn

    } else //if input is not empty
    {
        $(lbl).css({
            "color": "var(--dark-cety)"
        }); //change the color of label
        $(delete_btn).removeClass("d-none"); //show the clean btn
    }
}
//end on focus out function

//clear input btn function
function clear_input(btn) {
    var prnt = $(btn).parent(); //geting the div parent of the input
    var inpt = $(prnt).children("input"); //geting the input to clear the value
    $(inpt).val(''); //clear the value
    input_focusout(inpt); //calling the focus out function
}
//end clear input btn function

/* end for nav bar */

/* scrol left and right */

function scroll_right() {
    var insta_posts_section = $('#insta_posts');
    var insta_width = $(insta_posts_section).children("div").innerWidth() + 16;
    event.preventDefault();
    $(insta_posts_section).animate({
        scrollLeft: "+=" + insta_width + "px"
    }, "slow");
} //scrol right btn clicked get the width of insta post and scrol right + 16 padding

function scroll_left() {
    var insta_posts_section = $('#insta_posts');
    var insta_width = $(insta_posts_section).children("div").innerWidth() + 16;
    event.preventDefault();
    $(insta_posts_section).animate({
        scrollLeft: "-=" + insta_width + "px"
    }, "slow");
} //scrol left btn clicked get the width of insta post and scrol left + 16 padding

/* end scrol left and right */

/* hide and show header navbar */

var prevScrollpos = window.pageYOffset;
$(window).scroll(function () {

    //if there is no wp admin bar
    if (document.getElementById("wpadminbar") == null) {
        navbar_onscroll();
    }
    //if there is wpadmin bar
    else {
        //for mobile devices
        if (window.innerWidth <= 600) {
            var pgYOffset = window.pageYOffset;
            //on higher than 46 px remove margin top
            if (pgYOffset >= 46) {
                navbar_onscroll();
                $("header").removeClass("mt-46px");
                $("#Sidenav").removeClass("mt-46px");
            }
            //on less than 46 px add margin top because of wpadminbar
            else {
                navbar_onscroll();
                $("header").addClass("mt-46px");
                $("#Sidenav").addClass("mt-46px");
            }
        }
        //for lorge devices
        else {
            navbar_onscroll();
        }
    }
});

//function to hide and show navbar
function navbar_onscroll() {
    var nvbr = $("#navbar");
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        nvbr.css("top", "0px");
    } else {
        nvbr.css("top", (nvbr.innerHeight()) * -1);
    }
    prevScrollpos = currentScrollPos;
}

/* end hide and show header navbar */

/* if there is wpadminbar */
function wpadminbar_mt() {

    if (document.getElementById("wpadminbar") != null) {
        if (window.innerWidth <= 782) {
            $("header").addClass("mt-46px");
            $("main").addClass("mt-46px");
            $("#Sidenav").addClass("mt-46px");

            $("header").removeClass("mt-32px");
            $("main").removeClass("mt-32px");
            $("#Sidenav").removeClass("mt-32px");
        } else if (window.innerWidth > 782) {
            $("header").addClass("mt-32px");
            $("main").addClass("mt-32px");
            $("#Sidenav").addClass("mt-32px");

            $("header").removeClass("mt-46px");
            $("main").removeClass("mt-46px");
            $("#Sidenav").removeClass("mt-46px");
        }
    }
}
/* end wpadminbar */

/* remove sidenavlist all claseed */

function rm_sidenavlist_closeNav() {

    $("#sidenavlist ul").removeAttr('class');
}

/* end remove sidenavlist classes */

/* side navbar add class to */

function li_addcls() {
    $("#sidenavlist ul").children('li').addClass("border-bottom");
}

/* end side navbar add class to */

/* side nav logo in center */

function sidenavlogo_center() {
    $("#sidenav_logo").removeAttr('class');
    $("#sidenav_logo").addClass('col-4');
    $("#sidenav_logo").css({
        "position": "absolute",
        "left": "30%",
    });
}

/* end side nav logo in center */

/* Animations on scroll */
$(document).ready(function () {

    $(".ourservice-animate").waypoint(function () {
        $(".ourservice-animate").addClass("animated fadeInUp");
    }, {
        offset: "50%"
    });

    $(".whyus-animate").waypoint(function () {
        $(".whyus-animate").addClass("animated fadeInUp");
    }, {
        offset: "50%"
    });

    $(".founder1-animate").waypoint(function () {
        $(".founder1-animate").addClass("animated slideInUp");
    }, {
        offset: "50%"
    });

    $(".founder2-animate").waypoint(function () {
        $(".founder2-animate").addClass("animated slideInUp");
    }, {
        offset: "50%"
    });

    $(".founder3-animate").waypoint(function () {
        $(".founder3-animate").addClass("animated slideInUp");
    }, {
        offset: "50%"
    });

    $(".twitter-animate").waypoint(function () {
        $(".twitter-animate").addClass("animated fadeInUp");
    }, {
        offset: "50%"
    });

    $(".instagram-animate").waypoint(function () {
        $(".instagram-animate").addClass("animated fadeInUp");
    }, {
        offset: "60%"
    });
});
/* end Animations on scroll */