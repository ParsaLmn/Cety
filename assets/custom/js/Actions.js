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
    if (window.innerWidth <768) {
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