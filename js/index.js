// Selectors for Elements

    //Body
    const bodyElement = document.querySelector('body');

    // Header
    const headerElement = document.querySelector('header');
    const headerDiv = document.querySelector('.nav-container');
    const headerText = document.querySelector('.logo-heading');

        // Add Float div to Header to Report Events
        const reportEvent = document.createElement('div');
        reportEvent.style.cssFloat = "right";
        reportEvent.style.margin = "-20px 85px"
        headerElement.append(reportEvent);

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
    const NavList = document.getElementsByTagName("a");

    // Content Header
    const contentHeaderImg = document.querySelector('.intro img');
    const contentHeaderText = document.querySelector('.intro h2');

    // Content Headers    
    const contentHeaders = document.querySelectorAll('h2');

    // Destination Content
    const destinationContent = document.querySelector('.content-pick');
    const destinationHeaders = document.querySelectorAll('h4');
    const destinationBtns = document.querySelectorAll('.destination .btn');

    // Footer
    const footerSection = document.querySelector('footer p');

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
            if (addFormInput.value !== "") {reportEvent.textContent += addFormInput.value}
            else {reportEvent.textContent += "Please enter your email address."};
            event.stopPropagation();
        });
    });

    // Resize Event - Reports the new window size in the footer content
        // Add Elements to Footer to Read out the new window size
        const windowHeightandWidth = document.createElement('p');
            footerSection.append(windowHeightandWidth);
            footerSection.style.margin = "0";
        const windowHeightSpan = document.createElement('span');
            windowHeightSpan.textContent = "Window height: ";
            windowHeightandWidth.append(windowHeightSpan);
        const windowHeight = document.createElement('span');
            windowHeight.id = "height";
            windowHeightSpan.append(windowHeight);
            windowHeight.textContent = window.innerHeight;
        const windowWidthSpan = document.createElement('span');
            windowWidthSpan.textContent = " Window width: ";
            windowHeightandWidth.append(windowWidthSpan);
        const windowWidth = document.createElement('span');
            windowWidthSpan.append(windowWidth);
            windowWidth.id = "width";
            windowWidth.textContent = window.innerWidth;

    window.onresize = function() {        
        const heightOutput = document.querySelector('#height');
        const widthOutput = document.querySelector('#width');
        heightOutput.textContent = window.innerHeight;
        widthOutput.textContent = window.innerWidth;
    };

    // Scroll Event      
    window.onscroll = function(){
        reportEvent.textContent = "Scroll Location: " + window.scrollY;
    };

    // Select Event - This will report any selection inside an input
    destinationContent.addEventListener('select', function(event){
        const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
        reportEvent.textContent = `You selected: ${selection}`;        
    });

    // dblclick Event -- Double Click anywhere in window will report event in report div
    window.addEventListener('dblclick', function (e) {
        reportEvent.textContent = "Double Click Event Occured.";
    });

    
    // mouseup Event - Alerts on what button was pressed
    window.addEventListener('click', e => {
        if (typeof e === 'object') {
            switch (e.button) {
              case 0:
                reportEvent.textContent = 'Left button clicked.';
                break;
              case 1:
                reportEvent.textContent = 'Middle button clicked.';
                break;
              case 2:
                reportEvent.textContent = 'Right button clicked.';
                break;
              default:
                reportEvent.textContent = `Unknown button code: ${btnCode}`;
            }
          }
    });

// Stop the navigation from items from refreshing the page with `preventDefault()`
    NavList.forEach((e) => {
        preventDefault();
    });
