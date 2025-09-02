function getRandomColor() {
    const hexValues = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += hexValues[Math.floor(Math.random() * 16)];
    }

    return color;
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
                console.log(square.style.backgroundColor);
                if (square.dataset.colored === 'false') {
                    square.style.backgroundColor = getRandomColor();
                    square.dataset.colored = "true";
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