const clickable = document.querySelectorAll(".item__header, .item__arrow");

function inactivatePreviouslyActiveElems(currentlyActive) {
    const previouslyActiveElems = Array.from(document.querySelectorAll('.active'))
        .filter(elem => !currentlyActive.includes(elem));
    previouslyActiveElems.forEach(elem => elem.classList.remove('active'));
}

const toggleActiveClass = (element, grid) => {
    const allSiblings = Array.from(element.parentElement.children);

    inactivatePreviouslyActiveElems(allSiblings);

    allSiblings.forEach(elem => elem.classList.toggle('active'));

    const isActive = element.classList.contains('active');
    if(isActive) {
        grid.classList.add('active');
    }
}

const gridTemplateRowSizes = (grid, elementToResize) => {
    const gridChildren = grid.children;
    let sizes = "";

    for (const child of gridChildren) {
        sizes += child === elementToResize ? "1.5fr " : "0.5fr ";
    }

    return sizes;
}

const resizeGrid = (grid, elementToResize) => {
    const isActive = grid.classList.contains('active');

    if (isActive) {
        const sizes = gridTemplateRowSizes(grid, elementToResize);
        grid.style.gridTemplateRows = sizes;
    } else {
        grid.style.gridTemplateRows = "repeat(5, 1fr)";
    }
}

const adjustGrid = (event) => {
    const element = event.target;
    const elementToResize = element.parentElement;
    const itemsGrid = document.querySelector('.items');

    toggleActiveClass(element, itemsGrid);
    resizeGrid(itemsGrid, elementToResize);
}

clickable.forEach(element => element.addEventListener('click', adjustGrid, false));
