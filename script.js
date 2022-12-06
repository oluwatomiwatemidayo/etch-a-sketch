const container = document.querySelector('#container');
let numberOfGrids;

for (let i = 0; i < 256; i++) {
    const gridDiv = document.createElement('div');
    gridDiv.classList.add('gridDiv');
    gridDiv.addEventListener('mouseover', () => {
        gridDiv.style.backgroundColor = 'red';
    });
    container.append(gridDiv);
}
console.log(container);
