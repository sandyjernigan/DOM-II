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
        headerBusImg.id = "headerBusImg";

    // Nav List 
    const navElement = document.querySelector('nav');
    const NavList = Array.from(document.getElementsByTagName("a"));

    // Content Header
    const contentHeaderImg = document.querySelector('.intro img');
    const contentHeaderText = document.querySelector('.intro h2');

    // Content Headers    
    const contentHeaders = document.querySelectorAll('h2');

    // Destination Content
    const destinationHeaders = document.querySelectorAll('h4');
    const destinationBtns = document.querySelectorAll('.destination .btn');

// EventListeners

    // load - On load add Bus Image to Header
    window.addEventListener('load', (event) => {
        headerText.append(headerBusImg);
    });

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

    // `drag / drop` - Bus Image from Header can be dragged and dropped into new divs
        // make drop areas after each h2 tag
        contentHeaders.forEach((e, i) => {
            const dropDiv = document.createElement('div'); 
            dropDiv.style.width = "120px";
            dropDiv.style.height = "40px";
            dropDiv.style.cssFloat = "right";
            dropDiv.style.border = "thin solid grey";
            dropDiv.textContent = "Use the wheel to select a color and drop a Bus here!"
            dropDiv.style.fontFamily = "'Roboto', sans-serif";
            dropDiv.style.fontSize = "1.2rem";
            dropDiv.style.textAlign = "center";
            dropDiv.className = "droptarget";
            dropDiv.id = "drop" + i
            e.append(dropDiv);
        });
        
    headerBusImg.addEventListener("drag", function(e) {
        e.dataTransfer.setData("text", e.target.id);
        headerText.textContent = "Fun Bus is On the Go ...";
    });
        
        /* Events fired on the drop target */
        document.addEventListener("dragover", function(event) {
            event.preventDefault();
        });
        
        document.addEventListener("drop", function(e) {
            e.preventDefault();
            if ( event.target.className == "droptarget" ) {
            let data = event.dataTransfer.getData("text");
            event.target.textContent = "";
            headerBusImg.style.height = "35px"
            event.target.append(headerBusImg);
            }
        });

    // Destination Buttons - add Form input with Focus and Blur, then Click event on button
    destinationBtns.forEach((e, i) => {
        e.id = "destinationBtn" + i;

        // Create Form for name
        const addForm = document.createElement('form');
        addForm.id = "destinationForm" + i;
        addForm.style.margin = "0 12px 15px";
        e.parentNode.insertBefore(addForm, e);
        const addFormInput = document.createElement('input');
        addFormInput.id = "destinationInput" + i;
        addFormInput.type = "text";
        addFormInput.placeholder = "Type your email here."
        addForm.appendChild(addFormInput);

        // focus and blur Event
        addForm.addEventListener('focus', (event) => {
            event.target.style.background = '#17A2B8';    
        }, true);
          
        addForm.addEventListener('blur', (event) => {
            event.target.style.background = '';    
        }, true);

        // click 'Sign Me Up!' when email is inputed will return alert
        e.addEventListener('click', event => {
            if (addFormInput.value !== "") {alert(addFormInput.value)}
            else {alert("Please enter your email address.")};
        });
    });

    


// Test for Errors
// headerElement.style.backgroundColor = "red";
