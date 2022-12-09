const container = document.querySelector('#container');
let numberOfGrids;

for (let i = 0; i < 16 * 16; i++) {
    const gridDiv = document.createElement('div');
    gridDiv.classList.add('gridDiv');
    gridDiv.classList.add('grid');
    gridDiv.addEventListener('mouseover', () => {
        gridDiv.style.backgroundColor = 'red';
    });
    container.append(gridDiv);
}

function createGrid() {
    const container = document.querySelector('#container');
    numberOfGrids = prompt("Enter the number of grids you want between 1 - 100:");

    if (numberOfGrids <= 100 && numberOfGrids > 0) {
        for (i = 0; i < numberOfGrids * numberOfGrids; i++) {
            const gridDiv = document.createElement('div');
            gridDiv.classList.add('gridDiv');
            gridDiv.addEventListener('mouseover', () => {
                gridDiv.style.backgroundColor = 'red';
            });
            container.append(gridDiv);
        }
    } else {
        alert("Only numbers between 1 - 100 is allowed!");
    }
}

function newGrid() {
    const gridDiv = document.querySelectorAll('.gridDiv');
    gridDiv.forEach(gridDiv => {
        gridDiv.remove();
    });
    createGrid();
}
