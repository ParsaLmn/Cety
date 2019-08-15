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

/*on focus function*/
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

/*on focus out function*/
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
/*end on focus out function*/

/*clear input btn function*/
function clear_input(btn) {
    var prnt = $(btn).parent(); //geting the div parent of the input
    var inpt = $(prnt).children("input"); //geting the input to clear the value
    $(inpt).val(''); //clear the value
    input_focusout(inpt); //calling the focus out function
}
/*end clear input btn function*/

/* end for nav bar */