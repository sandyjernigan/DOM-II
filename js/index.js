// Selectors for Elements

    // Header
    const headerElement = document.querySelector('header');
    const headerText = document.querySelector('.logo-heading');

    // Nav List 
    const navElement = document.querySelector('nav');
    const NavList = Array.from(document.getElementsByTagName("a"));

// EventListeners
    // mouseover - When mouse is over the navagation list the elements change color
    navElement.addEventListener("mouseover", function( event ) {   
        // highlight the mouseenter target
        event.target.style.color = "blue";

        // reset the color after a short delay
        setTimeout(function() {
            event.target.style.color = "";
        }, 500);
        }, false);



// Test for Errors
//headerElement.style.backgroundColor = "red";
