# Meetrics Code Challenge
---------

that's function make the percentage of viewability in response and we can identify viewability and be counting the time we focused on the page and viewable place of the page about advertising.

```javascript
function viewability (element, hasFocus) {
  var percentX =    (element.offsetWidth-Math.min(element.offsetWidth ,Math.max(0,window.scrollX-element.offsetLeft ))) * 100 /element.offsetWidth
  var percentY =    (element.offsetHeight-Math.min(element.offsetHeight ,Math.max(0,window.scrollY-element.offsetTop ))) * 100 /element.offsetHeight
   return hasFocus ? (((percentX * percentY) / 100 ).toFixed()) : 0
}

```
Other function for click counting.
```javascript
function countCLick(event) {
  clickCounter++
}
```

## The ad being viewable means:

- The advertisement is 100% in the viewport of the browser (not viewable would be if the user scrolls to the bottom of
 the
 page)
- The browser tab is opened (not viewable would be if you open some other page, e.g. facebook.com in another tab and
the page looses its focus)

## Goal:
- Measure the viewability of the DIV that contains the ad
- Determine viewability also by evaluating the windows focus state (tab change, window unfocused)
- Log your results either to the console or render it on the page

## Requirements:
- You can use pure JavaScript or any library or a framework of your choice
- Feel free to override the `window.log` function.
  This function is invoked every **500ms** and should perform a simple `console.log` with your current viewability values.
- Feel free to override the whole `script.js` if needed
- Feel free to override the `printStatus` function - if you feel that you would like to display data in some other way
that just logs in the console - you're more than welcome to do it!
- The HTML structure of `index.html` file shouldn't be changed
- Browser support at least one browser of your choice

## Nice extras to have:
- Measure the portion of the ad that is visible in %
- Track clicks

## Hints:

- We recommend you to have a look at the PageVisibility API of browsers or focus events
- An example can be found on our homepage https://www.meetrics.com/live-demo/

## We value:

- Clean, maintainable, well-documented code
- Quality assurance of the code

## Delivery:
  Put your code in a git repository of your choice and send us the link.