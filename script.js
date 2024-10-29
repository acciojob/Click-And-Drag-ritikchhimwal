// Your code here.
const items = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

// When the mouse button is pressed down
items.addEventListener('mousedown', (e) => {
  isDown = true;
  items.classList.add('active');
  
  // Record the initial position
  startX = e.pageX - items.offsetLeft;
  scrollLeft = items.scrollLeft;
});

// When the mouse is moved
items.addEventListener('mousemove', (e) => {
  if (!isDown) return; // Stop function if not dragging
  
  // Prevent default action to avoid text selection
  e.preventDefault();
  
  // Calculate how much to scroll based on the mouse movement
  const x = e.pageX - items.offsetLeft;
  const walk = (x - startX) * 3; // Multiply for faster scrolling
  items.scrollLeft = scrollLeft - walk;
});

// When the mouse button is released
items.addEventListener('mouseup', () => {
  isDown = false;
  items.classList.remove('active');
});

// When the mouse leaves the items area
items.addEventListener('mouseleave', () => {
  isDown = false;
  items.classList.remove('active');
});
