const container = document.querySelector('#container');

for (let i = 0; i < 100; i++) {
    const gridDiv = document.createElement('div');
    gridDiv.classList.add('gridDiv');
    gridDiv.style.cssText = 'height: 16px; width: 16px;';
    gridDiv.addEventListener('mouseover', () => {
        gridDiv.style.backgroundColor = 'red';
    });
    container.append(gridDiv);
}
console.log(container);
