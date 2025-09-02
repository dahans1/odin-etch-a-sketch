function getRandomColor() {
    let colors = [];

    for (let i = 0; i < 3; i++) {
        colors.push(Math.floor(Math.random() * 255));
    }

    return colors;
}

function toRGB(colors) {
    return `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
}

function createGrid(size) {
    const container = document.querySelector('#container');
    for (let i = 0; i < size; i++) {
        const innerContainer = document.createElement('div');
        for (let j = 0; j < size; j++) {
            const square = document.createElement("div");
            square.classList.add("square");

            // calculate space (960 px wide in total)
            const space = 960 / size;
            square.style.width = `${space}px`;
            square.style.height = `${space}px`;

            square.dataset.colored = "false";
            square.addEventListener("mouseenter", () => {
                if (square.dataset.colored === 'false') {
                    square.dataset.color = getRandomColor();
                    square.style.backgroundColor = toRGB(square.dataset.color.split(','));
                    square.style.opacity = .10;
                    square.dataset.colored = "true";
                } else { // darken the square by 10%
                    let opacity = +window.getComputedStyle(square).opacity;
                    if (opacity < 1) {
                        square.style.opacity = opacity + .10;
                    }
                    // let colors = square.dataset.color.split(',');
                    // colors = colors.map((color) => Math.floor(color * 0.9));
                    // square.dataset.color = colors;
                    // square.style.backgroundColor = toRGB(colors);
                }
            });
            
            innerContainer.appendChild(square);
        }
        container.appendChild(innerContainer);
    }
}

let size = 16;
const button = document.querySelector('#size-btn');
button.addEventListener('click', () => {
    size = prompt("Enter a new size for the grid:", 16);

    while (size > 100) {
        alert("Size is limited to a maximum of 100.")
        size = prompt("Enter a new size for the grid:", 16);
    }
    const container = document.querySelector('#container');
    container.innerHTML = '';
    createGrid(size);
});

createGrid(size);