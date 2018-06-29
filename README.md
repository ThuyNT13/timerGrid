# setInterval and setTimeout

Trying to better understand how `setInterval` and `setTimeout` work because there's nothing like building a project to test your assumptions and prove them wrong or right. And I was proven wrong as what I expected to happen didn't.

### setInterval

As this timer can be looped infinitely, setting the time intervals by which `changeColor()` will be invoked to update color of a random cell.

### setTimeout

After changes to both cell color and cell state (from `awake` to `asleep`) occurs, `changeClass()` will be invoked and `setTimeout` will start a timer to delay the invocation of callback `changeToAwake()` when `asleep` is changed back to `awake`. When the cell is `asleep`, it cannot change color, again, until the proper amount of time has passed and it's woke up, to ensure proper rest.

### clearInterval and clearTimeout

Placed a button to stop the `changeColor()` loop - `clearInterval`. Although it can be pretty, sometimes it overtaxes the browser.

Added `clearTimeout` inside `changeClass()` but not sure if this is even necessary as it operates fine without it. So when would I have to specifically invoke `clearTimeout` and what exactly happens when I clear a `setTimeout` timer as it seems redundant?  

# Issues

- [**hexadecimals** not working for HTMLElement.style.property?](./blob/master/issues/1)

## References
- [setInterval()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)
- [clearInterval()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval)
- [setTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)
- [clearTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearTimeout)
