$("ul#menu li").click(
  function(event) {
    clicked = event.target;
    //debugger;
    if (clicked.tagName === 'A') {
      clicked2 = clicked.parentElement;
    }
    // debugger;
    // console.log(clicked2 + " " + clicked2.id);
    console.log(clicked2.id);
    pageId = clicked2.id.replace("-button", "");
    console.log(pageId);
    $(".main").removeClass('active').addClass('invisible');

    // $('ul#menu li').removeClass('active').addClass('invisible');
    $("#" + pageId).removeClass('invisible').addClass('active');
    $( '.site-nav ul li a' ).removeClass( 'active' );
    $( this ).find( 'a' ).addClass( 'active' );
  });

//for pages inside main pages. will fix later
var inside = $('#inside');
$(document).ready(function(){
//  // When page loads...:
    $("div.content div").hide(); // Hide all content
    $("nav li:first").addClass("current").show(); // Activate first page
    $("div.content div:first").show(); // Show first page content

    // On Click Event (within list-element!)
    $("nav li").click(function() {
        $("nav li").removeClass("current"); // Remove any active class
        $(this).addClass("current"); // Add "current" class to selected page

        $("div.content div").hide(); // Hide all content

    // Find the href attribute value to identify the active page+content:
        var activePage = $(this).find("a").attr("href");
        $(activePage).fadeIn(); // Fade in the active page content
    }); // end click method

}); // end $(document).ready method


// /* Home button */
// $( '#home-button' ).click( function() {
//   $( '#about' ).addClass( 'invisible' );
//   $( '#lang' ).addClass( 'invisible' );
//   $( '#home' ).removeClass( 'invisible' );
//   // $( '.tab' ).removeClass( 'active' );
//    $( '.site-nav ul li a' ).removeClass( 'active' );
//   $( this ).find( 'a' ).addClass( 'active' );
// });
