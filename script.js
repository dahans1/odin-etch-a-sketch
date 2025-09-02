function getRandomColor() {
    const hexValues = '0123456789ABCDEF';
    var color = '#';

    for (let i = 0; i < 6; i++) {
        color += hexValues[Math.floor(Math.random() * 16)];
    }

    return color;
}

function createGrid(size) {
    const container = document.querySelector('#container')
    for (let i = 0; i < size; i++) {
        const innerContainer = document.createElement('div');
        for (let j = 0; j < size; j++) {
            const square = document.createElement("div");
            square.classList.add("square");

            // calculate space (960 px wide in total)
            const space = Math.floor(960 / size);
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

createGrid(32);