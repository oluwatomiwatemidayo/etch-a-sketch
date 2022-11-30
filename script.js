const container = document.querySelector('#container');

for (let i = 0; i < 9; i++) {
    const gridDiv = document.createElement('div');
    gridDiv.classList.add('gridDiv');
    container.append(gridDiv);
}
console.log(container);