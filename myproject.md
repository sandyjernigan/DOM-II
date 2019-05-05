# DOM II - Event Exploration

## Task 1: Set Up LESS Preprocessor

* [x] Verify that you have LESS installed correctly by running `lessc -v` in your terminal, if you don't get a version message back, reach out to your project manager for help.

* [x] Open your terminal and navigate to your preprocessing project by using the `cd` command

* [x] Once in your project's root folder, run the following command `less-watch-compiler less css index.less`

* [x] Verify your compiler is working correctly by changing the `background-color` on the `html` selector to `red` in your `index.less` file.

* [x] Once you see the red screen, you can delete that style and you're ready to start on the next task

## Task 2: Create Unique Event Listeners

* [ ] Using your [index.js file](js/index.js), create 10 [unique event listeners](https://developer.mozilla.org/en-US/docs/Web/Events). using your creativity to make the Fun Bus site more interactive.  Here are some unique events you could try to use: 
	* [x] `mouseover`
	* [x] `keydown`
	* [x] `wheel`
	* [x] `drag / drop`
	* [x] `load`
	* [x] `focus`
	* [x] `resize`
	* [x] `scroll`
	* [x] `select`
	* [x] `dblclick`

Using the 10 unique events, find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc.

* [x] Nest two similar events somewhere in the site and prevent the event propagation properly
* [x] Stop the navigation from items from refreshing the page by using `preventDefault()`

## Stretch Task:

* [ ] Go look at [GSAP](https://greensock.com/) and implement the animations found in that library with your custom events.

## Stretch assignment

* [ ] Take a look at the [stretch assignment](stretch-assignment) and follow the instructions in the read me file.