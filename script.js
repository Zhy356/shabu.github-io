// Get the bouncing image element
const bouncingImage = document.getElementById('bouncing-image');

// Set the initial position and speed
let topPosition = 0; // Initial top position
let leftPosition = 0; // Initial left position
let topSpeed = 2; // Vertical speed
let leftSpeed = 2; // Horizontal speed

// Function to animate the image
function animate() {
    // Get the window's dimensions
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    // Update the image position
    topPosition += topSpeed;
    leftPosition += leftSpeed;

    // Check for collision with the window boundaries
    if (topPosition < 0 || topPosition + bouncingImage.clientHeight > windowHeight) {
        topSpeed = -topSpeed; // Reverse vertical direction on collision
    }
    if (leftPosition < 0 || leftPosition + bouncingImage.clientWidth > windowWidth) {
        leftSpeed = -leftSpeed; // Reverse horizontal direction on collision
    }

    // Update the image's position
    bouncingImage.style.top = topPosition + 'px';
    bouncingImage.style.left = leftPosition + 'px';

    // Call the animation again
    requestAnimationFrame(animate);
}

// Start the animation
animate();
