# setInterval and setTimeout

Trying to better understand how `setInterval()` and `setTimeout()` work because there's nothing like building a project to test your assumption and prove them wrong or right. And I was proven wrong as what I expected to happen didn't.

### setInterval

As this timer can be looped infinitely, assigning it to set the time intervals by which the `changeColor()` will be invoked on the cell being iterated on.

### setTimeout

This timer will be activated once the cell color has changed and state has been changed from `awake` to `asleep`. When it's `asleep`, it cannot change color, again, until timer has gone off and woke it up. To ensure proper rest. 

### clearInterval and clearTimeout

Placed a button to stop the `changeColor()` loop - `clearInterval()`.

Added `clearTimeout` inside `changeClass()` but not sure if this is even necessary as it operates fine without it. So when would I have to specifically invoke `clearTimeout` and what exactly happens when I clear a `setTimeout` timer as it seems redundant?  

# Issues

- Not sure why *hexadecimals* don't work. It's set for the first color but upon the next iteration, the 2nd color never takes so possibly an issue with the HTML element.style property. Note stackoverflow response here: [html element.style.color question](https://stackoverflow.com/questions/7077939/html-element-style-color-question).
- DRY: are there any unnecessary steps that I need to get rid of?
- is `clearTimeout` necessary?

## References
- [setInterval()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)
- [clearInterval()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval)
- [setTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)
- [clearTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearTimeout)
- [HTMLElement.style property](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style)
- [Using dynamic styling](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
