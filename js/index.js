// Selectors for Elements

    // Header
    const headerElement = document.querySelector('header');
    const headerText = document.querySelector('.logo-heading');

        // Images for Header
        let nextslideindex = 0;
        const busImg = ["yellow-bus.png", "blue-bus.png", "red-bus.jpg"];
        const headerBusImg = document.createElement('img');
        headerBusImg.src = `img/${busImg[nextslideindex]}`;
        headerBusImg.style.marginLeft = "20px";
        headerBusImg.style.height = "60px";
        headerBusImg.alt = "Bus";
        headerText.append(headerBusImg);

    // Nav List 
    const navElement = document.querySelector('nav');
    const NavList = Array.from(document.getElementsByTagName("a"));

    // Content Header
    const contentHeaderImg = document.querySelector('.intro img');
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

    // keydown - keydown will add Text to the Content Header
    document.onkeydown = function(event) {
        contentHeaderText.textContent += ` ${event.key}`;
        // reset after a short delay
        setTimeout(function() {
            contentHeaderText.textContent = `Welcome To Fun Bus!`;
        }, 2000);
    };

    // wheel - Changes the image of the bus which was added to the Header
    headerElement.onwheel = function(event) {
        event.preventDefault(); //disable default wheel action of scrolling page
        
        let wheelevent = event.detail ? event.detail*(-120) : event.wheelDelta;

        //move image index forward or back, depending on whether wheel is scrolled down or up
        nextslideindex = (wheelevent<=-120) ? nextslideindex+1 : nextslideindex-1 

        //wrap image index around when it goes beyond lower and upper boundaries
        nextslideindex = (nextslideindex < 0) ? busImg.length-1 : (nextslideindex > busImg.length - 1) ? 0 : nextslideindex

        headerBusImg.src = `img/${busImg[nextslideindex]}`

    }

// Test for Errors
//headerElement.style.backgroundColor = "red";
