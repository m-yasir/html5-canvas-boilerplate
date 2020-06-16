const colors = ["#5C4B51", "#8CBEB2", "#F2EBBF", "#F3B562", "#F06060"];

/**
 * @description Takes a range and returns a random number between the range (inclusive)
 * @param {number} min - minimum number for range
 * @param {number} max - maximum number for range
 * @returns {number}
 */
function randIntRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor() {
    // return `#${Math.floor(Math.random() * 25542195).toString(16)}`;
    return colors[Math.floor(Math.random() * colors.length)];
}

class Object {
    constructor() {}

    // insert single frame draw logic here
    draw() {}

    update() {
        // Insert frames handling logic here.
    }
}
