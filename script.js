const container = document.querySelector('#container');

for (let i = 0; i < 99; i++) {
    const gridDiv = document.createElement('div');
    gridDiv.classList.add('gridDiv');
    gridDiv.style.cssText = 'border: 1px solid red; height: 16px; width: 16px;';
    gridDiv.addEventListener('click', () => {
        gridDiv.style.backgroundColor = 'black';
    });
    container.append(gridDiv);
}
console.log(container);