function createGrid(size) {
    const container = document.querySelector('#container')
    for (let i = 0; i < size; i++) {
        const innerContainer = document.createElement('div');
        for (let j = 0; j < size; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            innerContainer.appendChild(square);
        }
        container.appendChild(innerContainer);
    }
}

createGrid(16);