// Event propagation is often leveraged for event delegation, where a single event listener is 
//added to a parent element to handle events on its child elements

<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

  const list = document.getElementById('list');

  list.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
      console.log(`Clicked on ${event.target.textContent}`);
    }
  });

  // Instead of adding separate listeners to each <li>, a single listener is added to the <ul>.
// This is efficient and dynamic, especially when child elements are added or removed

// Basically its a pattern to handle events efficiently. Instead of adding an event listener to each and every similar element
// we can add an event listener to a parent element and call an event on a particular target using .target property of the event object

// NOTE : event delegation is based on event bubbling

// Pros : saves memory by using a single event listener for parent ele , less code due to less event listener

// Cons : all events do not bubble up like blur, focus, resizing of the windows, so we need to handle them separately

