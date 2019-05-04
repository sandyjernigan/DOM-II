// Selectors for Elements

    // Header
    const headerElement = document.querySelector('header');
    const headerText = document.querySelector('.logo-heading');

    // Nav List 
    const navElement = document.querySelector('nav');
    const NavList = Array.from(document.getElementsByTagName("a"));

    // Content Header
    const contentHeaderText = document.querySelector('.intro h2');

// EventListeners
    // mouseover - When mouse is over the navagation list the elements change color
    navElement.addEventListener("mouseover", function( event ) {   
        // highlight the mouseenter target
        event.target.style.color = "blue";

        // reset after a short delay
        setTimeout(function() {
            event.target.style.color = "";
        }, 500);
        }, false);

    //keydown - keydown will add Text to the Content Header
    document.onkeydown = function (e) {
        contentHeaderText.textContent += ` ${e.key}`;
        // reset after a short delay
        setTimeout(function() {
            contentHeaderText.textContent = `Welcome To Fun Bus!`;
        }, 2000);
    };

// Test for Errors
//headerElement.style.backgroundColor = "red";
