const canvas = document.querySelector("canvas");

canvas.height = innerHeight;
canvas.width = innerWidth;

// c = context
const c = canvas.getContext("2d");

// Supposed to be called the first time when the script loads up (requires lib/canvas to be loaded in html)
const init = () => {
    // recursive animate function that animates frame (by requesting frame ) and calls update for each animation frrame.
    function animate() {
        requestAnimationFrame(animate);
        // Insert animation frame to update here.
    }

    animate();
};

// Resize event to resize canvas and refresh circles positions on canvas.
window.addEventListener("resize", () => {
    canvas.height = innerHeight;
    canvas.width = innerWidth;
    init();
});

// Calls init first time to draw circles when script loads.
init();
