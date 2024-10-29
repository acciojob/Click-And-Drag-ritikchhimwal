document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelector('.items');

  let isDown = false;
  let startX;
  let scrollLeft;

  // Mouse down event to initiate dragging
  items.addEventListener('mousedown', (e) => {
    isDown = true;
    items.classList.add('active'); // Add a class for styling
    startX = e.pageX - items.offsetLeft;
    scrollLeft = items.scrollLeft;
  });

  // Mouse leave event to stop dragging if mouse leaves the element
  items.addEventListener('mouseleave', () => {
    isDown = false;
    items.classList.remove('active');
  });

  // Mouse up event to stop dragging
  items.addEventListener('mouseup', () => {
    isDown = false;
    items.classList.remove('active');
  });

  // Mouse move event to handle the actual scrolling effect
  items.addEventListener('mousemove', (e) => {
    if (!isDown) return; // Stop function if not dragging
    e.preventDefault();
    const x = e.pageX - items.offsetLeft;
    const walk = (x - startX) * 3; // Adjust the multiplier for faster/slower scroll
    items.scrollLeft = scrollLeft - walk;
  });
});
